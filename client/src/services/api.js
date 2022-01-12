const url = 'http://localhost:5000'

// auth related
export const getUser = (email) => `${url}/auth/get-user`
export const registerUser = () => `${url}/auth/register-user`

//movie related
export const getMovie = (movieId) => `${url}/movies/${movieId}`
export const getAllMovies = () => `${url}/movies/all-movies`
export const addMovieToList = (uid, movieId, status, episodes) => `${url}/movies/add-movie`
export const updateWatchedEpisodes = (uid, movieId, status, episodes, title) => `${url}/movies/update-episodes`
