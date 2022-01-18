import { useState, useContext } from 'react'
import { updateItemProgress } from '../../../services/itemService'
import { AuthContext } from '../../../contexts/AuthContext'

const ItemProgress = ({ statusData, item, progressData }) => {
    const [updatedEpisodes, setUpdatedEpisodes] = useState(statusData.episodes)
    const auth = useContext(AuthContext)
    const uid = auth.user.user._id

    const progressChangeHandler = (e) => {
        setUpdatedEpisodes(e.target.value)
        updateItemProgress(uid, item._id, statusData.status, e.target.value)
    }

    const progressHeading = (
        <h4>
            My Progress:{' '}
            <input
                type='number'
                value={updatedEpisodes || progressData.episodes}
                min={0}
                max={item.episodes}
                onChange={progressChangeHandler}
            />/{item.episodes}
        </h4>
    )

    return  statusData.status == 'watching'
        ? progressHeading
        :         <h4>
        My Progress: {statusData.watchedEpisodes}/{item.episodes}
    </h4>
}

export default ItemProgress
