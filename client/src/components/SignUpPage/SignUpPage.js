import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { registerUser } from '../../services/userService'
import * as toaster from '../../utils/toaster'
import './SignUpPage.scss'

const SignUpPage = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const history = useHistory()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        registerUser(email, password)
            .then((res) => {
                toaster.toastInfo('You have signed up successfully!')
                history.push('/')
            })
            .catch((e) => {
                toaster.toastError('Something went wrong!')
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
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='Password'
                />
                <input className='sign-button' type='submit' />
            </form>
        </div>
    )
}

export default SignUpPage
