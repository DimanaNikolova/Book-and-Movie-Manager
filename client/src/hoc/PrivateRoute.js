import { useContext } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
    const user = useContext(AuthContext)

    return (
        <Route
            {...rest}
            render={(props) =>
                user.user ? (
                    <Component {...props} />
                ) : (
                    <Redirect
                        to={{
                            pathname: '/sign-in',
                            state: { from: props.location },
                        }}
                    />
                )
            }
        />
    )
}

export default PrivateRoute
