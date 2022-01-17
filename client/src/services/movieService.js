import * as request from './requester'
import * as api from './api'

export const getMovie = (movieId) =>
    request.get(api.getMovie(movieId)).then((data) => data.json())

export const getAllMovies = () =>
    request.get(api.getAllMovies()).then((data) => data.json())

export const addMovieToList = (uid, movieId, status, episodes, title, type) =>
    request
        .put(api.addMovieToList(), { uid, movieId, status, episodes, title, type })
        .then((data) => data.json())

export const updateWatchedEpisodes = (uid, movieId, status, episodes) =>
    request
        .put(api.updateWatchedEpisodes(), { uid, movieId, status, episodes })
        .then((data) => data.json())

export const updateRating = (uid, movieId, rating) =>
    request
        .put(api.updateRating(), { uid, movieId, rating })
        .then((data) => data.json())
