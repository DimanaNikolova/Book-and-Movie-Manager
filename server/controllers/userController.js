const express = require('express');
const router = express.Router({ mergeParams: true });

const User = require('../model/User');
const mongoose = require('mongoose');


const getAllUsers = () => User.find();
const createUser = () => User.create({username: 'first username', email: 'email@email.com', bio: 'this is a bio'});

router.post('/register-user', createUser);

module.exports = router;