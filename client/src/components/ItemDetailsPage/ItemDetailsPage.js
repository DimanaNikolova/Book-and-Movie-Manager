import { useEffect, useContext, useState } from 'react'
import { getItem } from '../../services/movieService'
import { AuthContext } from '../../contexts/AuthContext'
import CurrentItemBox from './CurrentItemBox/CurrentMovie'
import './ItemDetailsPage.scss'

const ItemDetailsPage = (props) => {
    const [movie, setMovie] = useState()
    const [isLoading, setIsLoading] = useState(true)
    const [progressData, setProgressData] = useState({})
    const auth = useContext(AuthContext)
    const movieId = props.match.params.id

    useEffect(() => {
        getItem(movieId).then((res) => {
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
                        <p><span>{movie.type == 'movie'? 'Episodes: ' : 'Pages: '}</span> {movie.episodes}</p>
                        <p><span>Start date:</span> {movie.startDate}</p>
                        <p><span>End date:</span> {movie.endDate}</p>

            </div>
            <CurrentItemBox
                item={movie}
                progressData={progressData}
            />
        </div> : null
    )
}

export default ItemDetailsPage
