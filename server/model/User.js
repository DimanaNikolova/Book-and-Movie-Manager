const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,

    email: {
        type: String,
    },

    username: {
        type: String,
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
            movie: {
                type: mongoose.Types.ObjectId,
                ref: 'Movie',
            },

            progress: {
                type: Number,
                default: 0,
            },
            status: {
                type: String,
            },
            title: {
                type: String,
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
