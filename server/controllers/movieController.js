const express = require('express')
const router = express.Router({ mergeParams: true })

const Movie = require('../model/Movie')
const mongoose = require('mongoose')

const getAllMovies = async (req, res, next) => {
    try {
        const allMovies = await Movie.find()
        res.status(203).json(allMovies)
    } catch (err) {
        next(errorBuilder(err).badRequest(err.message))
    }
}


// const getAllMovies =  (req, res, next) => {
    
//         Movie.find().then(data=>{
//             console.log(data)
//         })
//         // res.status(200).json(allMovies)
//         // return allMovies
 
// }


router.get('/all-movies', getAllMovies)

module.exports = router
