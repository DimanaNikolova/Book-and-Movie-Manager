import * as request from './requester'
import * as api from './api'

export const getAllMovies = () => request.get(api.getAllMovies()).then(data=>data.json());
export const addMovieToList = (uid, movieId) => request.put(api.addMovieToList(),{uid, movieId}).then(data=>data.json());