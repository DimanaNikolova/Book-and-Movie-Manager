const express = require('express')
const router = express.Router({ mergeParams: true })

const Item = require('../model/Item')
const User = require('../model/User')
const mongoose = require('mongoose')

const getItem = async (req, res, next) => {
    const { movieId } = req.params
    try {
        const movie = await Item.findOne({ _id: movieId })
        res.status(200).json(movie)
    } catch (err) {
        console.log(err)
    }
}

const getAllItems = async (req, res, next) => {
    try {
        const allMovies = await Item.find()
        res.status(200).json(allMovies)
    } catch (err) {
        console.log(err)
    }
}

const addItemToList = async (req, response, next) => {
    const { uid, movieId, status, episodes, title, type } = req.body
    const progress = status == 'completed' ? episodes : 0

    User.findOne({ _id: uid.uid })
        .then((res) => {
            return res.movies.map((m) => m.movie.toString())
        })
        .then((res) => {
            if (!res.includes(movieId.movieId)) {
                const updateMovie = Item.updateOne(
                    { _id: movieId.movieId },
                    { $push: { users: { user: uid.uid, status } } }
                )

                const updateUser = User.updateOne(
                    { _id: uid.uid },
                    {
                        $push: {
                            movies: {
                                movie: movieId.movieId,
                                status,
                                progress,
                                title,
                                type
                            },
                        },
                    }
                )

                Promise.all([updateMovie, updateUser]).then((values) => {
                    response.status(200).json(values)
                })
            } else {
                const updateUser = User.updateOne(
                    { _id: uid.uid, 'movies.movie': movieId.movieId },
                    {
                        $set: {
                            'movies.$.status': status,
                            'movies.$.progress': progress,
                        },
                    }
                )

                const updateMovie = Item.updateOne(
                    { _id: movieId.movieId, 'users.user': uid.uid },
                    {
                        $set: {
                            'users.$.status': status,
                            'users.$.progress': progress,
                        },
                    }
                )
                Promise.all([updateMovie, updateUser]).then((values) => {
                    response.status(200).json(values)
                })
            }
        })
        .catch((e) => {
            console.log(e)
        })
}

const updateItemProgress = async (req, res, next) => {
    const { uid, movieId, status, episodes } = req.body

    try {
        const updateUser = await User.updateOne(
            { _id: uid, 'movies.movie': movieId },
            {
                $set: {
                    'movies.$.progress': episodes,
                },
            }
        )
        res.status(200).json(updateUser)
    } catch (err) {
        console.log(err)
    }
}

const updateRating = async (req, res, next) => {
    const { uid, movieId, rating } = req.body

    try {
        const updateUser = await User.updateOne(
            { _id: uid, 'movies.movie': movieId },
            {
                $set: {
                    'movies.$.rating': rating,
                },
            }
        )
        res.status(200).json(updateUser)
    } catch (err) {
        console.log(err)
    }
}

router.get('/all-movies', getAllItems)
router.get('/:movieId', getItem)
router.put('/add-movie', addItemToList)
router.put('/update-episodes', updateItemProgress)
router.put('/update-rating', updateRating)

module.exports = router
