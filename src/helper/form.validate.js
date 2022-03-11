export const validateMessage = {
    required: (field = "This field") => field + " is required",
};

export const required = (field = "This field") => ({
    required: true,
    message: validateMessage.required(field),
});
