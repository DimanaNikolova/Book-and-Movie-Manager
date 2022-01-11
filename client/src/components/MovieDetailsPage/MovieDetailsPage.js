import { useEffect, useContext, useState } from 'react'
import { getMovie, updateWatchedEpisodes } from '../../services/movieService'
import AddToListDropDown from '../AddToListDropDown/AddToListDropDown'
import { AuthContext } from '../../contexts/AuthContext'
import './MovieDetailsPage.scss'

const MovieDetailsPage = (props) => {
    const [movie, setMovie] = useState(null)
    const [isLoading, setIsLoading] = useState(true)
    const [progressData, setProgressData] = useState({})
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
            setIsLoading(false)
        })
    }, [isLoading])

    const details = movie ? (
        <>
            <p>Title: {movie.title}</p>
            <p>Episodes: {movie.episodes}</p>
            <p>First Aired: {movie.episodes}</p>
            <p>Last Aired: {movie.episodes}</p>
        </>
    ) : null

    const onEpisodesChange = (e) => {
        console.log(e.target.value)
        setProgressData(oldState => ({ ...oldState, episodes: e.target.value }))
        updateWatchedEpisodes(auth.user._id, movieId, progressData.status, progressData.episodes)
        console.log(progressData)
    }

    const currentMovie = movie ? (
        <div className='current-movie'>
            <h1>{movie.title}</h1>
            <div className='frow j-between'>
                <div className='fcol a-cen'>
                    <img src={movie.imgUrl} />
                    <AddToListDropDown movie={movie} />
                </div>
                <div className='movie-summary fcol'>
                    {progressData.status == 'watching' ? (
                        <h4>
                            Progress:
                            <input
                                type="text" pattern="[0-9]*"
                                value={progressData.episodes}
                                onChange={(e) => onEpisodesChange(e)}
                            />
                            /{movie.episodes}
                        </h4>
                    ) : (
                        <h4>
                            Progress: {progressData.episodes}/{movie.episodes}
                        </h4>
                    )}
                    <p>
                        Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem
                        ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
                        Lorem ipsum Lorem ipsum Lorem ipsum
                    </p>
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
