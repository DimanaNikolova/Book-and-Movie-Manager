import { Link } from 'react-router-dom'
import './HomePage.scss'

const HomePage = () => {
    return (
        <>
            <div className='homepage-container fcol a-cen j-around'>
                <h1>Travel to space now!</h1>
                <p>
                    NASApp is an inovative website created for everyone who
                    wants to know more than today the did yesterday. We offer
                    you to find more about the space within ant the galaxy you
                    hold in your own self. Discover more about the universe by
                    joining us!
                </p>
                <div>Shall we go?</div>
                <div className='frow'>
                    <Link to='/sign-in' className='sign-button'>Sign In</Link>
                    <Link to='/sign-up' className='sign-button'>Sign Up</Link>
                </div>
            </div>
        </>
    )
}

export default HomePage
