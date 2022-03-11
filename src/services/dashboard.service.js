import client from "./client";

const PREFIX_CS = "/cs/customer";

export function dashboard(data) {
    return client.post(PREFIX_CS + "/dashboard", { ...data });
}
