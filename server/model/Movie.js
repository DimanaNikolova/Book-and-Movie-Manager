const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema({
    id: mongoose.Types.ObjectId,

    title: {
        type: String,
    },

    episodes: {
        type: Number,
    },

    synopsis: {
        type: String,
    },

    imgUrl: {
        type: String,
    },

    startDate: {
        type: String,
    },

    endDate: {
        type: String,
    },

    type: {
        type: String,
    },

    users: [
        {
            _id: false,
            user: {
                type: mongoose.Types.ObjectId,
                ref: 'User',
            },

            rating: {
                type: Number,
            },
            status: {
                type: String,
            },
        },
    ],
})

module.exports = mongoose.model('Movie', movieSchema)
