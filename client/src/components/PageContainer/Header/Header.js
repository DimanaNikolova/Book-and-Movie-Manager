import { Link } from 'react-router-dom'
import firebase from '../../../config/firebase'
import { useState, useContext } from 'react'
import { AuthContext } from '../../../contexts/AuthContext'
import './Header.scss'

const NavBar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const auth = useContext(AuthContext)

    return (
        <nav className='main-navbar frow'>
            <Link to='/'>MANAGER</Link>
            <span className='navbar-buttons frow'>
                {auth.user ? (
                    <>
                        <Link to='/book-catalog' className='sign-button'>
                            Books
                        </Link>
                        <Link to='/movie-catalog' className='sign-button'>
                            Movies
                        </Link>
                        <Link to='/profile' className='sign-button'>
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
