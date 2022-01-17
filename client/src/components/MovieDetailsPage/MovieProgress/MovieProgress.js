import { useState, useContext } from 'react'
import { updateWatchedEpisodes } from '../../../services/movieService'
import { AuthContext } from '../../../contexts/AuthContext'

const MovieProgress = ({ statusData, movie, progressData }) => {
    const [updatedEpisodes, setUpdatedEpisodes] = useState(statusData.episodes)
    const auth = useContext(AuthContext)
    const uid = auth.user.user._id

    const progressChangeHandler = (e) => {
        setUpdatedEpisodes(e.target.value)
        updateWatchedEpisodes(uid, movie._id, statusData.status, e.target.value)
    }

    const progressHeading = (
        <h4>
            My Progress:{' '}
            <input
                type='number'
                value={updatedEpisodes || progressData.episodes}
                min={0}
                max={movie.episodes}
                onChange={progressChangeHandler}
            />/{movie.episodes}
        </h4>
    )

    return  statusData.status == 'watching'
        ? progressHeading
        :         <h4>
        My Progress: {statusData.watchedEpisodes}/{movie.episodes}
    </h4>
}

export default MovieProgress
