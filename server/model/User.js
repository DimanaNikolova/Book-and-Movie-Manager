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

    items: [
        {
            _id: false,
            item: {
                type: mongoose.Types.ObjectId,
                ref: 'Item',
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
            type: {
                type: String,
            },
            rating: {
                type: Number,
                default: ''
            },
        },
    ],

    createdAt: {
        type: Date,
    },
})

module.exports = mongoose.model('User', userSchema)
