import { useState, useContext, useEffect } from 'react'
import { addMovieToList } from '../../services/movieService'
import { AuthContext } from '../../contexts/AuthContext'

const AddToListDropDown = ({ movie }) => {
    const [displayDropDown, setDisplayDropdown] = useState(false)
    const [displayStatus, setDisplayStatus] = useState('Add to list')
    const auth = useContext(AuthContext)

    useEffect(() => {
        auth.user.movies.map((m) => {
            m.movie === movie._id ? setDisplayStatus(m.status) : null
        })
    }, [])

    const addMovie = (status) => {
        const uid = auth.user._id
        const movieId = movie._id
        addMovieToList({ uid }, { movieId }, status, movie.episodes, movie.title)
            .then((res) => {
                setDisplayDropdown(false)
            })
            .catch((e) => console.log(e))
    }

    const dropDown = displayDropDown ? (
        <>
            <button
                className='sign-button'
                onClick={() => {
                    addMovie('watching')
                }}
            >
                Watching
            </button>
            <button
                className='sign-button'
                onClick={() => {
                    addMovie('completed')
                }}
            >
                Completed
            </button>
            <button
                className='sign-button'
                onClick={() => {
                    addMovie('plan')
                }}
            >
                Plan to Watch
            </button>
        </>
    ) : null

    return (
        <>
            <button
                className='sign-button'
                onClick={() => {
                    setDisplayDropdown(!displayDropDown)
                }}
            >
                {displayStatus}
            </button>
            {dropDown}
        </>
    )
}

export default AddToListDropDown
