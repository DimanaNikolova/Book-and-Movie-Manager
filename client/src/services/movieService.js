import * as request from './requester'
import * as api from './api'

export const getMovie = (movieId) =>
    request.get(api.getMovie(movieId)).then((data) => data.json())

export const getAllMovies = () =>
    request.get(api.getAllMovies()).then((data) => data.json())

export const addMovieToList = (uid, movieId, status, episodes) =>
    request
        .put(api.addMovieToList(), { uid, movieId, status, episodes })
        .then((data) => data.json())

export const updateWatchedEpisodes = (uid, movieId, status, episodes) =>
    request
        .put(api.updateWatchedEpisodes(), { uid, movieId, status, episodes })
        .then((data) => data.json())
