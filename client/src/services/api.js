const url = 'http://localhost:5000'

// auth related
export const registerUser = () => `${url}/auth/register-user`;

//movie related
export const getAllMovies = () => `${url}/movies/all-movies`;
