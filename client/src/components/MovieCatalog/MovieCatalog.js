import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../../services/movieService'
import AddToListDropDown from '../AddToListDropDown/AddToListDropDown'

import './MovieCatalog.scss'

const MovieCatalog = () => {
    const [movies, setMovies] = useState([])
    const [statusData, setStatusData] = useState()

    useEffect(() => {
        getAllMovies()
            .then((data) => {
                setMovies(data)
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    const loadMovies = movies
        ? movies.map((movie) => {
              return (
                  <div
                      className='current-movie fcol a-cen j-around'
                      key={movie.title}
                  >
                      <img src={movie.imgUrl} />
                      <Link to={`/movie/${movie._id}`}>{movie.title}</Link>
                      <AddToListDropDown movie={movie} passStatusData={setStatusData}/>
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
