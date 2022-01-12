import { useEffect, useContext, useState } from 'react'
import { getMovie, updateWatchedEpisodes } from '../../services/movieService'
import { AuthContext } from '../../contexts/AuthContext'
import CurrentMovie from './CurrentMovie/CurrentMovie'
import './MovieDetailsPage.scss'

const MovieDetailsPage = (props) => {
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [progressData, setProgressData] = useState({})
    const [updatedEpisodes, setUpdatedEpisodes] = useState(
        progressData.episodes
    )
    const auth = useContext(AuthContext)
    const movieId = props.match.params.id

    useEffect(() => {
        getMovie(movieId).then((res) => {
            setMovie(res)
            auth.user.movies.map((m) => {
                m.movie === movieId
                    ? setProgressData({
                          status: m.status,
                          episodes: m.progress,
                      })
                    : null
            })
            setUpdatedEpisodes(progressData.episodes)
            setIsLoading(false)
        })
    }, [isLoading])

    useEffect(() => {
        updateWatchedEpisodes(
            auth.user._id,
            movieId,
            progressData.status,
            updatedEpisodes
        )
    }, [updatedEpisodes])

    return (
        <div className='details-page-container frow'>
            <div className='details fcol'>
                <h3>Details</h3>
                {movie ? (
                    <>
                        <p>Title: {movie.title}</p>
                        <p>Episodes: {movie.episodes}</p>
                        <p>First Aired: {movie.episodes}</p>
                        <p>Last Aired: {movie.episodes}</p>
                    </>
                ) : null}
            </div>
            <CurrentMovie
                movie={movie}
                progressData={progressData}
                updatedEpisodes={updatedEpisodes}
                setUpdatedEpisodes={setUpdatedEpisodes}
            />
        </div>
    )
}

export default MovieDetailsPage
