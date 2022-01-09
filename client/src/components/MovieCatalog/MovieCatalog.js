import { useState, useEffect } from 'react'
import { getAllMovies } from '../../services/movieService'

import './MovieCatalog.scss'

const MovieCatalog = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getAllMovies().then((data) => {
            setMovies(data)
        })
    }, [])

    const loadMovies = movies
        ? movies.map((movie) => {
              return (
                  <div className='current-movie fcol a-cen j-around' key={movie.title}>
                      <img src={movie.imgUrl} />
                      <p>{movie.title}</p>
                      <button className='sign-button'>Add to list</button>
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
