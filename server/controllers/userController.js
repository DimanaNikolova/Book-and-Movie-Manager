const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../model/User')
const mongoose = require('mongoose')

const registerUser = async (req, res, next) => {
    let { email } = req.body

    email = email.toLowerCase()

    try {
        const newUser = await User.create({ email })

        return res.status(201).json({ user: newUser })
    } catch (err) {
        next(errorBuilder(err).badRequest(err.message))
    }
}

router.post('/register-user', registerUser)

module.exports = router
