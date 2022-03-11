export const TOKEN_LOCAL_KEY = "__access-token__";
export function tokenStorage(token) {
    if (token) return localStorage.setItem(TOKEN_LOCAL_KEY, token);
    const _token = localStorage.getItem(TOKEN_LOCAL_KEY);
    if (_token) return String(_token);
    return false;
}
export function tokenClear() {
    return localStorage.removeItem(TOKEN_LOCAL_KEY);
}
