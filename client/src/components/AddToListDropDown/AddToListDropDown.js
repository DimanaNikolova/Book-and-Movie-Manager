import { useState, useContext } from 'react'
import { getAllMovies, addMovieToList } from '../../services/movieService'
import { AuthContext } from '../../contexts/AuthContext'

const AddToListDropDown = ({movie}) => {
    const [displayDropDown, setDisplayDropdown] = useState(false)
    const auth = useContext(AuthContext)

    const addMovie = (status) => {
        const uid = auth.user._id
        const movieId = movie._id
        addMovieToList({ uid }, { movieId }, status)
            .then((res) => {
                console.log(res)
            })
            .catch((e) => console.log(e))
    }

    const dropDown = displayDropDown ? (
        <>
            <button className='sign-button' onClick={()=>{addMovie('watching')}}>Watching</button>
            <button className='sign-button' onClick={()=>{addMovie('completed')}}>Completed</button>
            <button className='sign-button' onClick={()=>{addMovie('plan')}}>Plan to Watch</button>
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
                Add to list
            </button>
            {dropDown}
        </>
    )
}

export default AddToListDropDown
