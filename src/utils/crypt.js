import { MD5, HmacSHA256 } from "crypto-js";

export const hashHmacSHA256 = (value, key) => HmacSHA256(value, key).toString();

export const hashMd5 = (value) => MD5(value).toString();
