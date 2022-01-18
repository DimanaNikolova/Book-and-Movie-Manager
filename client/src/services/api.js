const url = 'http://localhost:5000'

// auth related
export const getUser = (email) => `${url}/auth/get-user`
export const registerUser = () => `${url}/auth/register-user`

//item related
export const getItem = (itemId) => `${url}/items/${itemId}`
export const getAllItems = () => `${url}/items/all-items`
export const addItemToList = () => `${url}/items/add-item`
export const updateItemProgress = (uid, itemId, status, episodes, title) => `${url}/items/update-episodes`
export const updateRating = (uid, itemId, rating) => `${url}/items/update-rating`
