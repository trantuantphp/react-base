export const query_string_builder = (obj_query_params) => {
    var esc = encodeURIComponent;
    return Object.keys(obj_query_params)
        .map((k) => esc(k) + "=" + esc(obj_query_params[k]))
        .join("&");
};

export const analytic_query_string_builder = (range = [], shop = null) => {
    let query_params = {};
    if (range[0] !== null) {
        query_params.range = range[0];
        if (range[0] === "custom") {
            const data_range = range[1];
            if (data_range !== null) {
                query_params.date_start = data_range[0].format("YYYY-MM-DD");
                query_params.date_end = data_range[1].format("YYYY-MM-DD");
            }
        }
    }
    if (shop !== null) {
        query_params.shop = shop;
    }
    return query_string_builder(query_params);
};
