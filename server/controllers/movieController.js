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
    const { uid, movieId, status, episodes, title } = req.body
    const progress = status == 'completed' ? episodes : 0

    try {
        const updateMovie = await Movie.updateOne(
            { _id: movieId.movieId },
            { $push: { users: { user: uid.uid, status } } }
        )
        const updateUser = await User.updateOne(
            { _id: uid.uid },
            { $push: { movies: { movie: movieId.movieId, status, progress, title } } }
        )
        console.log('MOVIE ADDED TO LIST')

        res.status(200).json(updateMovie)
    } catch (err) {
        console.log(err)
    }
}

const updateWatchedEpisodes = async (req, res, next) => {
    const { uid, movieId, status, episodes } = req.body
    const progress = status == 'completed' ? episodes : 0
    console.log(uid, movieId, status, episodes)

    // User.updateOne(
    //     { _id: uid, "movies.movie": movieId },
    //     {
    //         $set: {
    //             "movies.$.progress": episodes,
    //          }
    //     }
    // ).then(res=>{
    //     console.log(res)
    // }).catch(e=>{
    //     console.log(e)
    // })
    try {
        const updateUser = await User.updateOne(
            { _id: uid.uid },
            { $push: { movies: { movie: movieId.movieId, status, progress } } }
        )
        console.log('EPISODES UPDATED')

        res.status(200).json(updateUser)
    } catch (err) {
        console.log(err)
    }
}

router.get('/all-movies', getAllMovies)
router.get('/:movieId', getMovie)
router.put('/add-movie', addMovieToList)
router.put('/update-episodes', updateWatchedEpisodes)

module.exports = router
