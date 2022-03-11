import client from "./client";

const PREFIX = "/cron";

export function cronList(data) {
    return client.post(PREFIX + "/list", { ...data });
}

export function cronUpdate(data) {
    return client.post(PREFIX + "/updateCron", { ...data });
}

export function cronEdit(data) {
    return client.post(PREFIX + "/edit", { ...data });
}
