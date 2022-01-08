import { Link } from 'react-router-dom'
import firebase from '../../../config/firebase'
import { useState, useEffect } from 'react'

import './Header.scss'

const NavBar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    useEffect(() => {
        firebase.onAuthStateChanged( (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid
                setIsAuthenticated(true)
                console.log(user)
                // ...
            } else {
                setIsAuthenticated(false)
                // User is signed out
                // ...
            }
        })
    }, [isAuthenticated])

    return (
        <nav className='main-navbar frow'>
            <span>NASAPP</span>
            <span className='navbar-buttons frow'>
                {isAuthenticated ? (
                    <Link to='/' className='sign-button' onClick={()=>{firebase.signOut()}}>
                        Sign Out
                    </Link>
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
