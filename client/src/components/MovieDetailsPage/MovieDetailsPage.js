import { useEffect, useState } from 'react'
import { getMovie } from '../../services/movieService'
import './MovieDetailsPage.scss'

const MovieDetailsPage = (props) => {
    const [movie, setMovie] = useState(null)
    const movieId = props.match.params.id
    useEffect(() => {
        getMovie(movieId).then((res) => {
            setMovie(res)
        })
    }, [])

    const details = movie ? (
        <>
            <p>Title: {movie.title}</p>
            <p>Episodes: {movie.episodes}</p>
            <p>First Aired: {movie.episodes}</p>
            <p>Last Aired: {movie.episodes}</p>
        </>
    ) : null

    const currentMovie = movie ? (
        <div className='current-movie'>
            <h1>Title</h1>
            <div className='frow'>
                <div className='fcol'>
                    <img src={movie.imgUrl} />
                    <button>Add to list</button>
                </div>
                <div className='fcol'>
                    <p>Rating</p>
                    <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
                </div>
            </div>
        </div>
    ) : null
    return (
        <div className='details-page-container frow'>
            <div className='details fcol'>
                <h3>Details</h3>
                {details}
            </div>
                {currentMovie}
        </div>
    )
}

export default MovieDetailsPage
