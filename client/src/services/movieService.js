import * as request from './requester'
import * as api from './api'

export const getMovie = (movieId) =>
    request.get(api.getMovie(movieId)).then((data) => data.json())

export const getAllMovies = () =>
    request.get(api.getAllMovies()).then((data) => data.json())

export const addMovieToList = (uid, movieId, status) =>
    request
        .put(api.addMovieToList(), { uid, movieId, status })
        .then((data) => data.json())
