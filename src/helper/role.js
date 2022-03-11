const ALL = "/all";
const CREATE = "/create";
const EDIT = "/edit";
const DELETE = "/delete";
const GET = "/get";
const LIST = "/list";
const SYNC = "/sync";

export const ROLE_ALL = "all";

export const ROLE_DASHBOARD = "dashboard";

const SHOP = "shop";
export const ROLE_SHOP = {
    BASE: SHOP,
    ALL: SHOP + ALL,
    GET: SHOP + GET,
    SYNC: SHOP + SYNC,
    LIST: SHOP + LIST,
};

const CUSTOMER = "customer";
export const ROLE_CUSTOMER = {
    BASE: CUSTOMER,
    ALL: CUSTOMER + ALL,
    CREATE: CUSTOMER + CREATE,
    EDIT: CUSTOMER + EDIT,
    DELETE: CUSTOMER + DELETE,
    GET: CUSTOMER + GET,
    LIST: CUSTOMER + LIST,
};

const TOKEN = "token";
export const ROLE_TOKEN = {
    BASE: TOKEN,
    ALL: TOKEN + ALL,
    CREATE: TOKEN + CREATE,
    EDIT: TOKEN + EDIT,
    DELETE: TOKEN + DELETE,
    GET: TOKEN + GET,
    LIST: TOKEN + LIST,
};

const CRON = "cron";
export const ROLE_CRON = {
    BASE: CRON,
    ALL: CRON + ALL,
    CREATE: CRON + CREATE,
    EDIT: CRON + EDIT,
    DELETE: CRON + DELETE,
    GET: CRON + GET,
    LIST: CRON + LIST,
};
