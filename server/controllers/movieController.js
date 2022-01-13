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

const addMovieToList = async (req, response, next) => {
    const { uid, movieId, status, episodes, title } = req.body
    const progress = status == 'completed' ? episodes : 0

    User.findOne({ _id: uid.uid })
        .then((res) => {
            return res.movies.map((m) => m.movie.toString())
        })
        .then((res) => {
            if (!res.includes(movieId.movieId)) {
                const updateMovie = Movie.updateOne(
                    { _id: movieId.movieId },
                    { $push: { users: { user: uid.uid, status } } }
                )
                
                const updateUser = User.updateOne(
                    { _id: uid.uid },
                    {
                        $push: {
                            movies: {movie: movieId.movieId, status, progress,  title,
                            },
                        },
                    }
                )

                Promise.all([updateMovie, updateUser]).then((values) => {
                    response.status(200).json()
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

                const updateMovie = Movie.updateOne(
                    { _id: movieId.movieId, 'users.user': uid.uid },
                    {
                        $set: {
                            'users.$.status': status,
                            'users.$.progress': progress,
                        },
                    }
                )
                Promise.all([updateMovie, updateUser]).then((values) => {
                    response.status(200).json()
                })
            }
        })
        .catch((e) => {
            console.log(e)
        })
}

const updateWatchedEpisodes = async (req, res, next) => {
    const { uid, movieId, status, episodes } = req.body
    const progress = status == 'completed' ? episodes : 0

    try {
        const updateUser = await User.updateOne(
            { _id: uid, 'movies.movie': movieId },
            {
                $set: {
                    'movies.$.progress': episodes,
                },
            }
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
