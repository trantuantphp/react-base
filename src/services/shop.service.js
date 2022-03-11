import client from "./client";

const PREFIX = "/shop";

export function shopList(data) {
    return client.post(PREFIX + "/list", { ...data });
}

export function shopGetSyncShops(data) {
    return client.post(PREFIX + "/getSyncShops", { ...data });
}
