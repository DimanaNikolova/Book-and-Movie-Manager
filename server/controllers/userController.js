const express = require('express')
const router = express.Router({ mergeParams: true })

const User = require('../model/User')
const mongoose = require('mongoose')

const getUser = async (req, res, next) => {
    let { email } = req.body

    email = email.toLowerCase()

    try {
        const user = await User.findOne({ email })
        return res.status(201).json({ user })
    } catch (err) {
        next(errorBuilder(err).badRequest(err.message))
    }
}

const registerUser = async (req, res, next) => {
    let { email, username } = req.body

    email = email.toLowerCase()

    try {
        const newUser = await User.create({ email, username })

        return res.status(201).json({ user: newUser })
    } catch (err) {
        next(errorBuilder(err).badRequest(err.message))
    }
}

router.post('/get-user', getUser)
router.post('/register-user', registerUser)

module.exports = router
