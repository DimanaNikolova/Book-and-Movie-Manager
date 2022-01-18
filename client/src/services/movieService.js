import * as request from './requester'
import * as api from './api'

export const getItem = (movieId) =>
    request.get(api.getItem(movieId)).then((data) => data.json())

export const getAllItems = () =>
    request.get(api.getAllItems()).then((data) => data.json())

export const addItemToList = (uid, movieId, status, episodes, title, type) =>
    request
        .put(api.addItemToList(), { uid, movieId, status, episodes, title, type })
        .then((data) => data.json())

export const updateItemProgress = (uid, movieId, status, episodes) =>
    request
        .put(api.updateItemProgress(), { uid, movieId, status, episodes })
        .then((data) => data.json())

export const updateRating = (uid, movieId, rating) =>
    request
        .put(api.updateRating(), { uid, movieId, rating })
        .then((data) => data.json())
