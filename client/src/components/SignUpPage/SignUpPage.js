import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../../services/userService'
import './SignUpPage.scss'

const SignUpPage = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repeatPassword, setRepeatPassword] = useState('')
    const history = useHistory()
    const onSubmitHandler = (e) => {
        e.preventDefault()
        registerUser(email, password, username)
            .then((res) => {
                history.push('/')
            })
            .catch((e) => {
                console.log(e)
            })
    }

    return (
        <div className='sign-up-page-container frow j-around a-cen'>
            <div className='sign-text-content fcol a-cen j-around'>
                <h3>Lorem Ipsum</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Duis eu vehicula mauris. Vestibulum accumsan ipsum ac mi
                    dignissim auctor. Vestibulum erat magna, sollicitudin et
                    ipsum et, accumsan dictum libero. Lorem ipsum dolor sit
                    amet, consectetur adipiscing elit. Vestibulum ante ipsum
                    primis in faucibus orci luctus et ultrices posuere cubilia
                    curae; Donec eget dolor orci. Mauris et felis vitae purus
                    rhoncus rhoncus nec sit amet nisl. Nam efficitur, odio eu
                    volutpat egestas, dolor metus efficitur sem, vel efficitur
                    leo ipsum eu odio. Etiam id pulvinar est, id lacinia justo.
                    Sed enim ex, hendrerit at tincidunt eu, aliquam eu nulla.
                </p>
            </div>
            <form
                className='sign-form fcol a-cen j-around'
                onSubmit={onSubmitHandler}
            >
                <h3>Join us now!</h3>
                <input
                    type='text'
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder='Email'
                />
                <input
                    type='text'
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder='Username'
                />
                <input
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type='password'
                    onChange={(e) => setRepeatPassword(e.target.value)}
                />
                <input className='sign-button' type='submit' />
            </form>
        </div>
    )
}

export default SignUpPage
