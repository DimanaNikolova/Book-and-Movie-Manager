import { useState, useContext, useEffect } from 'react'
import { addMovieToList } from '../../services/movieService'
import { AuthContext } from '../../contexts/AuthContext'

const AddToListDropDown = ({ movie }) => {
    const [displayDropDown, setDisplayDropdown] = useState(false)
    const [displayStatus, setDisplayStatus] = useState('Add to list')
    const auth = useContext(AuthContext)

    useEffect(() => {
        auth.user.user.movies.map((m) => {
            m.movie === movie._id ? setDisplayStatus(m.status) : null
        })
    }, [displayDropDown])

    const addMovie = (status) => {
        const uid = auth.user.user._id
        const movieId = movie._id
        addMovieToList({ uid }, { movieId }, status, movie.episodes, movie.title)
            .then((res) => {
                console.log(res)
            })
            .catch((e) => console.log(e))
        setDisplayDropdown(!displayDropDown)
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
