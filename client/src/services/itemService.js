import * as request from './requester'
import * as api from './api'

export const getItem = (itemId) =>
    request.get(api.getItem(itemId)).then((data) => data.json())

export const getAllItems = () =>
    request.get(api.getAllItems()).then((data) => data.json())

export const addItemToList = (uid, itemId, status, episodes, title, type) =>
    request
        .put(api.addItemToList(), { uid, itemId, status, episodes, title, type })
        .then((data) => data.json())

export const updateItemProgress = (uid, itemId, status, episodes) =>
    request
        .put(api.updateItemProgress(), { uid, itemId, status, episodes })
        .then((data) => data.json())

export const updateRating = (uid, itemId, rating) =>
    request
        .put(api.updateRating(), { uid, itemId, rating })
        .then((data) => data.json())
