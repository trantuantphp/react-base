import client from "./client";

const PREFIX = "/log";

export function logGet(data) {
    return client.post(PREFIX + "/get", { ...data });
}

export function logList(data) {
    return client.post(PREFIX + "/list", { ...data });
}

export function logFiles(data) {
    return client.post(PREFIX + "/files", { ...data });
}

export function logDownloadFile(file_name) {
    return client.get(PREFIX + "/downloadFile/" + file_name, { headers: { responseType: "blob" } });
}
