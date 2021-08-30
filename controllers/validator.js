const joi = require("joi")

const validator = (req, res, next) => {
    const schema = joi.object({
        // firstName: joi.string().pattern(new RegExp("")
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
        email: joi.string().trim().email().min(3).messages({
            "string.min": "Your email must have at least 3 characters",
            "string.max": "You must write a valid email adress",
        }),
        password: joi.string().min(8).max(25).messages({
            "string.min": "Your password must be at least 8 characters long",
            "string.max": "Your password can't have more than 25 characters"
        }),
        google: joi.boolean()
    })
    const validation = schema.validate(req.body, {abortEarly: false})
    if (!validation.error) {
        next()
    } 
    else {
        res.json({success: false, errors: validation.error.details})   
    }
}

module.exports = validator