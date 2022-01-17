import { useEffect, useContext, useState } from 'react'
import { getMovie } from '../../services/movieService'
import { AuthContext } from '../../contexts/AuthContext'
import CurrentMovie from './CurrentMovie/CurrentMovie'
import './MovieDetailsPage.scss'

const MovieDetailsPage = (props) => {
    const [movie, setMovie] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [progressData, setProgressData] = useState({})
    const auth = useContext(AuthContext)
    const movieId = props.match.params.id

    useEffect(() => {
        getMovie(movieId).then((res) => {
            setMovie(res)
            auth.user.user.movies.map((m) => {
                m.movie === movieId
                    ? setProgressData({
                          status: m.status,
                          episodes: m.progress,
                          rating: m.rating,
                      })
                    : null
            })
            setIsLoading(false)
        })
    }, [isLoading])

    return (
        movie ? <div className='details-page-container frow'>
            <div className='details fcol'>
                <h3>Details</h3>
                        <p><span>Title:</span> {movie.title}</p>
                        <p><span>Episodes:</span> {movie.episodes}</p>
                        <p><span>First Aired:</span> {movie.startDate}</p>
                        <p><span>Last Aired:</span> {movie.endDate}</p>

            </div>
            <CurrentMovie
                movie={movie}
                progressData={progressData}
            />
        </div> : null
    )
}

export default MovieDetailsPage
