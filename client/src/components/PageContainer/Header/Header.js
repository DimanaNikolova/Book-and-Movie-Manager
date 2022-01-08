import { Link } from 'react-router-dom'
import firebase from '../../../config/firebase'
import { useState, useContext } from 'react'
import {AuthContext} from '../../../contexts/AuthContext'
import './Header.scss'

const NavBar = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const auth = useContext(AuthContext)

    return (
        <nav className='main-navbar frow'>
            <span>NASAPP</span>
            <span className='navbar-buttons frow'>
                {auth ? (
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
