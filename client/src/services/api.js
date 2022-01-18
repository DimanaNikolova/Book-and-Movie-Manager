const url = 'http://localhost:5000'

// auth related
export const getUser = (email) => `${url}/auth/get-user`
export const registerUser = () => `${url}/auth/register-user`

//movie related
export const getItem = (movieId) => `${url}/items/${movieId}`
export const getAllItems = () => `${url}/items/all-movies`
export const addItemToList = () => `${url}/items/add-movie`
export const updateItemProgress = (uid, movieId, status, episodes, title) => `${url}/items/update-episodes`
export const updateRating = (uid, movieId, rating) => `${url}/items/update-rating`
