import client from "./client";

const PREFIX = "/customer";
const PREFIX_CS = "/cs/customer";

export function customerList(data) {
    return client.post(PREFIX + "/list", { ...data });
}

export function customerGet(data) {
    return client.post(PREFIX + "/get", { ...data });
}

export function customerUpdateStatus(data) {
    return client.post(PREFIX_CS + "/updateStatus", { ...data });
}

export function customerCallSendEmail(data) {
    return client.post(PREFIX_CS + "/callSendMail", { ...data });
}

export function customerCsGet(data) {
    return client.post(PREFIX_CS + "/get", { ...data });
}
