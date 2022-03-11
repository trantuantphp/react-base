import { createContext } from "react";
import { configure, makeAutoObservable } from "mobx";
import { userGetInfo, userLogin } from "services/user.service";
import { tokenClear, tokenStorage } from "utils/local.storage";
import { ROLE_ALL } from "helper/role";

configure({
    enforceActions: "always",
});

class UserStore {
    is_authenticated = false;
    token = null;
    info = null;
    permission = null;

    constructor() {
        makeAutoObservable(this);
    }

    _getInfo() {
        return this.info;
    }

    setToken(token) {
        tokenStorage(token);
        this.token = token;
    }
    setInfo(data) {
        this.info = data;
    }
    setPermission(data) {
        this.permission = data;
    }
    setSuccessAuth(data) {
        try {
            const { access_token, id, username, email, permissions, avatar = null } = data;
            this.setToken(access_token);
            this.setInfo({
                id,
                username,
                email,
                avatar,
            });
            this.setPermission(permissions);
            this.is_authenticated = true;
        } catch (error) {
            console.error(error);
        }
    }
    resetAuth() {
        this.is_authenticated = false;
        this.token = null;
        this.info = null;
        this.permission = null;
        tokenClear();
    }

    async loadToken() {
        const _token = tokenStorage();
        if (_token) {
            this.token = _token;
            return await this.getInfo();
        }
        return false;
    }

    async login({ email, password }) {
        if (!email || !password) return false;
        try {
            const result = await userLogin({ email, password });
            const { errorCode, data } = result;
            if (errorCode === 0) {
                this.setSuccessAuth(data);
            } else {
                this.is_authenticated = false;
            }
            return result;
        } catch (error) {
            return false;
        }
    }

    async getInfo() {
        if (!this.token) return false;
        try {
            const result = await userGetInfo({ access_token: this.token });
            const { errorCode, data } = result;
            if (errorCode === 0) {
                this.setSuccessAuth(data);
            } else {
                tokenClear();
                this.token = null;
                this.is_authenticated = false;
            }
            return result;
        } catch (error) {
            return false;
        }
    }

    logout() {
        this.resetAuth();
    }

    hasPermission(targets) {
        try {
            if (this.permission === "*") {
                return true;
            }

            if (!this.permission || !Array.isArray(targets)) {
                return false;
            }

            const _found = this.permission.some((i) => [...targets, ROLE_ALL].includes(i));
            return _found;
        } catch (error) {
            console.log(error);
            return false;
        }
    }
}

export default createContext(new UserStore());
