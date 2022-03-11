import client from "./client";

const PREFIX = "/user";

export function userLogin(data) {
    return client.post(PREFIX + "/login", { ...data });
}

export function userGetInfo(data) {
    return client.post(PREFIX + "/getInfo", { ...data });
}
