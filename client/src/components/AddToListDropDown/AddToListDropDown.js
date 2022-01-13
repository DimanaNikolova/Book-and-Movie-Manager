import { useState, useContext, useEffect } from 'react'
import { addMovieToList } from '../../services/movieService'
import { AuthContext } from '../../contexts/AuthContext'
import Button from './Button/Button'

const AddToListDropDown = ({ movie, passStatusData }) => {
    const [displayDropDown, setDisplayDropdown] = useState(false)
    const [displayStatus, setDisplayStatus] = useState('Add to list')
    const auth = useContext(AuthContext)

    useEffect(() => {
        auth.user.user.movies.map((m) => {
            m.movie === movie._id
                ? passStatusData({
                      status: m.status,
                      watchedEpisodes: m.progress,
                  })
                : null
            m.movie === movie._id ? setDisplayStatus(m.status) : null
        })
    }, [])

    const addMovie = (status) => {
        const uid = auth.user.user._id
        const movieId = movie._id
        addMovieToList(
            { uid },
            { movieId },
            status,
            movie.episodes,
            movie.title
        )
            .then((res) => {
                setDisplayDropdown(!displayDropDown)
                setDisplayStatus(status)
                status == 'completed'
                    ? passStatusData({
                          status,
                          watchedEpisodes: movie.episodes,
                      })
                    : passStatusData({ status, watchedEpisodes: 0 })
                auth.refreshUserData()
            })
            .catch((e) => console.log(e))
    }

    const dropDown = displayDropDown ? (
        <>
            <Button addMovie={addMovie} action={'watching'} />
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
