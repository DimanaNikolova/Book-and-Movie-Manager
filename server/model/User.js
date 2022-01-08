const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,

    email: {
        type: String,
        // required: [true, 'Error - missing email!']
    },

    username: {
        type: String,
        // required: [true, 'Error - missing first name!']
    },

    imageUrl: {
        type: String,
    },

    bio: {
        type: String,
    },

    movies: [
        {
            _id: false,
            course: {
                type: mongoose.Types.ObjectId,
                ref: 'Course',
            },

            progress: {
                type: Number,
                default: 0,
            },
            status: {
                type: Number,
                default: 0,
            },

            rating: {
                type: Number,
            },

            startDate: {
                type: Date,
            },

            endDate: {
                type: Date,
            },
        },
    ],

    createdAt: {
        type: Date,
    },
})

module.exports = mongoose.model('User', userSchema)
