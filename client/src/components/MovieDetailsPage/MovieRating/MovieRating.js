import { useState, useContext } from 'react'
import { updateRating } from '../../../services/movieService'
import { AuthContext } from '../../../contexts/AuthContext'

const MoiveRating = ({ progressData, movieId }) => {
    const [updatedRating, setUpdatedRating] = useState(progressData.rating)
    const auth = useContext(AuthContext)
    const uid = auth.user.user._id

    const ratingChangeHandler = (e) => {
        setUpdatedRating(e.target.value)
        updateRating(uid, movieId, e.target.value)
    }

    const ratingHeading = (
        <h4>
            My Rating:{' '}
            <input
                type='number'
                value={updatedRating || progressData.rating}
                min={1}
                max={10}
                onChange={ratingChangeHandler}
            />
        </h4>
    )

    return progressData.status == 'completed' ||
        progressData.status == 'watching'
        ? ratingHeading
        : null
}

export default MoiveRating
