import { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
const ProfilePage = (props) => {
    const [movies, setMovies] = useState([])
    const auth = useContext(AuthContext)
    useEffect(() => {
        console.log(auth.user.movies)
        setMovies(auth.user.movies)
    },[])

    const loadMovies =  movies ?movies.map(m=>{
        return (
            <h1>{m.title} {m.status} {m.progress}</h1>

        )
    }) : null
    return (
        <div className='profile-page-container frow a-cen j-around'>
            <div>{loadMovies}</div>
            <div></div>
        </div>
    )
}

export default ProfilePage
