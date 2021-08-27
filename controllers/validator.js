const joi = require("joi")

const validator = (req, res, next) => {
    const schema = joi.object({
        firstName: joi.string().trim().min(2).required().messages,
        lastName:joi.string().trim().min(2).required(),
        src: joi.string().trim().min(15),
        email: joi.string().trim().min(2).required().email(),
        password: joi.string().trim().min(5).required()
    })
    const validation = schema.validate(req.body, {abortEarly: false})
    if (!validation.error) {
        next()
    } else {
        console.log(validation.error.details)
    }
}

module.exports = validator