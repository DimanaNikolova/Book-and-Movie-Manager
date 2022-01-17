import { useEffect, useContext, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AuthContext } from '../../contexts/AuthContext'
import TableItems from './TableItems.js/TableItems'
import './ProfilePage.scss'

const ProfilePage = () => {
    const [items, setItems] = useState([])
    const auth = useContext(AuthContext)
    const location = useLocation()

    useEffect(() => {
        setItems(auth.user.user.movies)
        console.log(location.pathname)
        console.log(items)
    }, [location])

    return (
        <div className='profile-page-container frow a-cen j-around'>
            <div className='user-info fcol a-cen'>
                <div className='profile-picture'></div>
                <p>{auth.user.user.email}</p>
            </div>
            <div>
                <div className='profile-items-navigation frow j-between'>
                    <span>
                        <Link to='/profile/my-movies'>My Movies</Link>
                    </span>
                    <span>
                        <Link to='/profile/my-books'>My Books</Link>
                    </span>
                    <span>
                        <Link>My Comics</Link>
                    </span>
                </div>
                <div className='current-items'>
                    <TableItems items={items} />
                </div>
            </div>
        </div>
    )
}

export default ProfilePage
