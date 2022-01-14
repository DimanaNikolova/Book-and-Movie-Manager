import { Link } from 'react-router-dom'
import './HomePage.scss'

const HomePage = () => {
    return (
        <>
            <div className='homepage-container fcol a-cen j-around'>
                <h1>Book and Movie Manager</h1>
                <p>
                Book and Movie Manager allows you to keep track of all your favourite book and movie series as well as manga and comics editions!
                Never miss an episode of your favourite show again and keep your to-watch list organised!
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
