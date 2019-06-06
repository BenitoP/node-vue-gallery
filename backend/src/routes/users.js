import mongoose from 'mongoose'
import express from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { User, validateUser } from '../models/user'

const router = express.Router()

router.post('/signin', async (req, res) => {
    const { error } = validateUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let user = await User.findOne({ email: req.body.email})
    if (user) {
        const validPassword = await bcrypt.compare(req.body.password, user.password)
        if (validPassword) {
            const token = jwt.sign({ _id: user._id}, process.env.myapp_jwtPrivateKey)
            return res.send(token)
        }

        return res.status(400).send('Email / Password is incorrect')
    } else {
        return res.status(400).send('Email / Password is incorrect')
    }
})

router.post('/signup', async (req, res) => {
    const { error } = validateUser(req.body)
    if (error) return res.status(400).send(error.details[0].message)

    let user = await User.findOne({ email: req.body.email })
    if (user) return res.status(400).send('Bad request') //USER EXISTS

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(req.body.password, salt)

    user = new User({
        email: req.body.email,
        password: hashedPassword
    })

    user = await user.save()

    res.send({
        _id: user._id, 
        email: user.email
    })
})

export default router