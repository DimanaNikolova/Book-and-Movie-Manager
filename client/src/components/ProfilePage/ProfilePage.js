import { useEffect, useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import TableItems from './TableItems.js/TableItems'
import './ProfilePage.scss'

const ProfilePage = (props) => {
    const [movies, setMovies] = useState([])
    const auth = useContext(AuthContext)
    
    useEffect(() => {
        setMovies(auth.user.movies)
    }, [])

    return (
        <div className='profile-page-container frow a-cen j-around'>
            <div className='user-info fcol a-cen'>
                <div className='profile-picture'></div>
                <p>{auth.user.email}</p>
            </div>
            <div>
                <div className='profile-items-navigation'>
                    <Link>My movies</Link>
                    <Link>My books</Link>
                    <Link>My comics</Link>
                </div>
                <div className='current-items'>
                    <TableItems items={movies}/>
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
