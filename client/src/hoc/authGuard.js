import { useState, useContext } from 'react'
import {AuthContext} from '../contexts/AuthContext'

export const authGuard = (IsGuest, IsAuthenticated) => {
    const WrapperComponent = (propsGuest, propsAuthenticated) => {
        const currentUser = useContext(AuthContext)

        const [isLoading, setIsLoading] = useState(true)
        setTimeout(() => setIsLoading(false), 200)
        console.log(currentUser)
        if (!currentUser && IsGuest) {
            return !isLoading && <IsGuest {...propsGuest} />
        } else if (currentUser && IsAuthenticated) {
            return !isLoading && <IsAuthenticated {...propsAuthenticated} />
        }
    }

    return WrapperComponent
}
