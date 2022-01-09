import { useState, useEffect } from 'react'
import { getAllMovies } from '../../services/movieService'

const MovieCatalog = () => {
    const [movies, setMovies] = useState([])

    useEffect(() => {
        getAllMovies().then(data=>{
            console.log(data)
        })
    }, [])

    return <>
    <h1>Movie catalog</h1>
    </>
}

export default MovieCatalog
