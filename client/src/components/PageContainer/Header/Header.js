import { Link } from 'react-router-dom'

import './Header.scss'

const NavBar = () => {
    return (
        <nav className='main-navbar frow'>
            <span>NASAPP</span>
            <span className='navbar-buttons frow'>
                <Link to='/sign-in' className='sign-button'>
                    Sign In
                </Link>
                <Link to='/sign-up' className='sign-button ml-50'>
                    Sign Up
                </Link>
            </span>
        </nav>
    )
}

export default NavBar
