const Joi = require('joi');

const authSchema = Joi.object({
    firstname : Joi.string()
                .trim()
                .min(5)
                .max(255)
                .required(),
    lastname: Joi.string()
                .trim()
                .min(5)
                .max(255)
                .required(),
    username: Joi.string( )
                .alphanum()
                .min(5)
                .max(30)
                .required(),
    password: Joi.string()
                .required()
                .min(8)
                .max(255),
    email: Joi.string()
            .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }),
    phone: Joi.number()
            .min(10)
            .max(11),
    createAt: Joi.date()
            .default(Date.now),

    updateAt: Joi.date()
                .default(Date.now)
})

async function authMW(req, res, next) {
    const authpayload = req.body

    try{
        await authSchema.validateAsync(authpayload)
        next()
    }catch(error){
        next(error.details[0].message)
    }
}


module.exports= authMW