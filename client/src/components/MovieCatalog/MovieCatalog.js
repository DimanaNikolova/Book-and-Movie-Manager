import { useState, useEffect, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { getAllMovies, addMovieToList } from '../../services/movieService'

import './MovieCatalog.scss'

const MovieCatalog = () => {
    const [movies, setMovies] = useState([])
    const auth = useContext(AuthContext)

    useEffect(() => {
        getAllMovies().then((data) => {
            setMovies(data)
        })
    }, [])

    const addMovie = (movie) => {
        const uid = auth.user._id
        const movieId = movie._id
        addMovieToList({ uid }, { movieId })
            .then((res) => {
                console.log(res)
            })
            .catch((e) => console.log(e))
    }
    const loadMovies = movies
        ? movies.map((movie) => {
              return (
                  <div
                      className='current-movie fcol a-cen j-around'
                      key={movie.title}
                  >
                      <img src={movie.imgUrl} />
                      <p>{movie.title}</p>
                      <button
                          className='sign-button'
                          onClick={() => addMovie(movie)}
                      >
                          Add to list
                      </button>
                  </div>
              )
          })
        : null

    return (
        <div className='movie-catalog-wrapper fcol a-cen'>
            <h1>Movie catalog</h1>
            <div className='movies-container frow j-around'>{loadMovies}</div>
        </div>
    )
}

export default MovieCatalog
