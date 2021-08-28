const joi = require("joi")

const validator = (req, res, next) => {
    console.log("VALIDATOR")
    const schema = joi.object({
        firstName: joi.string().trim().min(2).required().messages({
            "string.empty": "The field is required",
            "string.min": "This field must have at least 2 characters",
        }),
        lastName: joi.string().min(2).required().messages({
            "string.empty": "The field is required",
            "string.min": "This field must have at least 2 characters"
        }),
        src: joi.string(),
        country: joi.string(),
        email: joi.string(),
        password: joi.string(),
        google: joi.boolean()
    })
    const validation = schema.validate(req.body, {abortEarly: false})
    if (!validation.error) {
        next()
    } 
    else {
        console.log(validation.error.details)
    }
}

module.exports = validator