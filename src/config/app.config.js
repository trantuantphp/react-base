export const BASE_API_URL = process.env.API_URL || "/";
export const F_TOKEN_B = process.env.F_TOKEN_B || "";

export const role = {
    all: "*",
    dashboard: "*",
    design: ["create", "edit", "delete", "get", "all"],
    cron: ["*"],
    token: ["create", "edit", "delete", "get", "all"],
};
