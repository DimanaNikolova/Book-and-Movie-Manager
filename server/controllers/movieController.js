const express = require('express')
const router = express.Router({ mergeParams: true })

const Movie = require('../model/Movie')
const User = require('../model/User')
const mongoose = require('mongoose')

const getAllMovies = async (req, res, next) => {
    try {
        const allMovies = await Movie.find()
        res.status(200).json(allMovies)
    } catch (err) {
        next(errorBuilder(err).badRequest(err.message))
    }
}

const addMovieToList = async (req, res, next) => {
    const { uid, movieId } = req.body

    try {
        const updateMovie = await Movie.updateOne(
            { _id: movieId.movieId },
            { $push: { users: { user: uid.uid } } }
        )
        const updateUser = await User.updateOne(
            { _id: uid.uid },
            { $push: { movies: { movie: movieId.movieId } } }
        )
        console.log(updateMovie)
        console.log(updateUser)

        res.status(200).json(updateMovie)
    } catch (err) {
        console.log(err)
    }
}

router.put('/add-movie', addMovieToList)
router.get('/all-movies', getAllMovies)

module.exports = router
