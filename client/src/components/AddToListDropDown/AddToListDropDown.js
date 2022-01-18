import { useState, useContext, useEffect } from 'react'
import { addMovieToList } from '../../services/movieService'
import { AuthContext } from '../../contexts/AuthContext'
import Button from './Button/Button'

const AddToListDropDown = ({ item, passStatusData }) => {
    const [displayDropDown, setDisplayDropdown] = useState(false)
    const [displayStatus, setDisplayStatus] = useState('Add to list')
    const auth = useContext(AuthContext)

    useEffect(() => {
        auth.user.user.movies.map((m) => {
            m.movie === item._id
                ? passStatusData({
                      status: m.status,
                      watchedEpisodes: m.progress,
                  })
                : null
            m.movie === item._id ? setDisplayStatus(m.status) : null
            m.movie === item._id && item.type == 'book' && m.status=='watching' ? setDisplayStatus('reading') : null
        })
    }, [])

    const addMovie = (status) => {
        const uid = auth.user.user._id
        const movieId = item._id
        addMovieToList(
            { uid },
            { movieId },
            status,
            item.episodes,
            item.title,
            item.type
        )
            .then((res) => {
                setDisplayDropdown(!displayDropDown)
                setDisplayStatus(status)
                status == 'completed'
                    ? passStatusData({
                          status,
                          watchedEpisodes: item.episodes,
                      })
                    : passStatusData({ status, watchedEpisodes: 0 })
                auth.refreshUserData()
            })
            .catch((e) => console.log(e))
    }

    const dropDown = displayDropDown ? (
        <>
            <Button
                addMovie={addMovie}
                action={'watching'}
                bookStatus={item.type == 'book' ? 'reading' : null}
            />
            <Button addMovie={addMovie} action={'completed'} />
            <Button addMovie={addMovie} action={'plan'} />
        </>
    ) : null

    const initialButton = (
        <button
            className='sign-button'
            onClick={() => {
                setDisplayDropdown(!displayDropDown)
            }}
        >
            {displayStatus}
        </button>
    )

    return (
        <>
            {!displayDropDown || displayStatus == 'Add to list'
                ? initialButton
                : null}
            {dropDown}
        </>
    )
}

export default AddToListDropDown
