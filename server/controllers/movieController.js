const express = require('express')
const router = express.Router({ mergeParams: true })

const Movie = require('../model/Movie')
const User = require('../model/User')
const mongoose = require('mongoose')

const getMovie = async (req, res, next) => {
    const { movieId } = req.params
    try {
        const movie = await Movie.findOne({ _id: movieId })
        res.status(200).json(movie)
    } catch (err) {
        console.log(err)
    }
}

const getAllMovies = async (req, res, next) => {
    try {
        const allMovies = await Movie.find()
        res.status(200).json(allMovies)
    } catch (err) {
        console.log(err)
    }
}

const addMovieToList = async (req, res, next) => {
    const { uid, movieId, status, episodes } = req.body
    const progress = status == 'completed' ? episodes : 0

    try {
        const updateMovie = await Movie.updateOne(
            { _id: movieId.movieId },
            { $push: { users: { user: uid.uid, status } } }
        )
        const updateUser = await User.updateOne(
            { _id: uid.uid },
            { $push: { movies: { movie: movieId.movieId, status, progress } } }
        )
        console.log('MOVIE ADDED TO LIST')

        res.status(200).json(updateMovie)
    } catch (err) {
        console.log(err)
    }
}

router.get('/all-movies', getAllMovies)
router.get('/:movieId', getMovie)
router.put('/add-movie', addMovieToList)

module.exports = router
