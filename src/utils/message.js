import { message } from "antd";

message.config({
    duration: 5,
    maxCount: 3,
});

export const loadingM = (msg = "Loading", duration = 5, key = "message") => message.loading({ content: msg, duration, key });

export const successM = (msg = "Success", duration = 3, key = "message") => message.success({ content: msg, duration, key });

export const errorM = (msg = "Error", duration = 5, key = "message") => message.error({ content: msg, duration, key });

export const destroyM = () => message.destroy();
