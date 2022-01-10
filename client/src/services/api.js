const url = 'http://localhost:5000'

// auth related
export const getUser = (email) => `${url}/auth/get-user`;
export const registerUser = () => `${url}/auth/register-user`;

//movie related
export const getAllMovies = () => `${url}/movies/all-movies`;
export const addMovieToList = (uid, movieId) => `${url}/movies/add-movie`