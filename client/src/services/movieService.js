import * as request from './requester'
import * as api from './api'

export const getAllMovies = () => request.get(api.getAllMovies());