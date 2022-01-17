import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { getAllMovies } from '../../services/movieService'
import AddToListDropDown from '../AddToListDropDown/AddToListDropDown'
import { useLocation } from 'react-router-dom'

import './MovieCatalog.scss'

const MovieCatalog = () => {
    const [item, setItems] = useState([])
    const [statusData, setStatusData] = useState()

    const location = useLocation()

    useEffect(() => {
        getAllMovies()
            .then((data) => {
                location.pathname == '/book-catalog'
                    ? setItems(data.filter((item) => item.type == 'book'))
                    : setItems(data.filter((item) => item.type == 'movie'))
            })
            .catch((e) => {
                console.log(e)
            })
    }, [])

    const loadMovies = item
        ? item.map((i) => {
              return (
                  <div
                      className='current-movie fcol a-cen j-around'
                      key={i.title}
                  >
                      <img src={i.imgUrl} />
                      <Link to={`/item/${i._id}`}>{i.title}</Link>
                      <AddToListDropDown
                          movie={i}
                          passStatusData={setStatusData}
                      />
                  </div>
              )
          })
        : null

    return (
        <div className='movie-catalog-wrapper fcol a-cen'>
            {location.pathname == '/book-catalog' ? (
                <h1>Book catalog</h1>
            ) : (
                <h1>Movie catalog</h1>
            )}
            <div className='movies-container frow j-around'>{loadMovies}</div>
        </div>
    )
}

export default MovieCatalog
