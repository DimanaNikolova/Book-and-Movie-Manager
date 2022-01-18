import { Link } from 'react-router-dom'
import firebase from '../../../config/firebase'
import { useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import './Header.scss'

const NavBar = () => {
    const auth = useContext(AuthContext)

    return (
        <nav className='main-navbar frow'>
            <span className='navbar-buttons frow a-cen'>
                <Link to='/'>MANAGER</Link>
                {auth.user ? (
                    <>
                        <Link to='/book-catalog' className='sign-button'>
                            Books
                        </Link>
                        <Link to='/movie-catalog' className='sign-button'>
                            Movies
                        </Link>
                    </>
                ) : null}
            </span>
            <span className='navbar-buttons frow'>
                {auth.user ? (
                    <>
                        <Link to='/profile/my-movies' className='sign-button'>
                            Profile
                        </Link>
                        <Link
                            to='/'
                            className='sign-button'
                            onClick={() => {
                                firebase.signOut()
                            }}
                        >
                            Sign Out
                        </Link>
                    </>
                ) : (
                    <>
                        <Link to='/sign-in' className='sign-button'>
                            Sign In
                        </Link>
                        <Link to='/sign-up' className='sign-button ml-50'>
                            Sign Up
                        </Link>
                    </>
                )}
            </span>
        </nav>
    )
}

export default NavBar
