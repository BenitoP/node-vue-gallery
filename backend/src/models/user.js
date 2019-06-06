import Joi from 'joi'
import mongoose from 'mongoose'

const User = mongoose.model('User', new mongoose.Schema({
    email: {
        type: String,
        required: true,
        maxlength: 255,
        unique: true
    },
    password: {
        type: String,
        required: true
    }    

}))

function validateUser (user) {
    const schema = {
        email: Joi.string().max(255).required().email(),
        password: Joi.string().required()
    }

    return Joi.validate(user, schema)
}

export {
    User,
    validateUser
}