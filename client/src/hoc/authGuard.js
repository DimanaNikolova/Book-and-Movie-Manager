import { useState, useContext } from 'react'
import {AuthContext} from '../contexts/AuthContext'

export const authGuard = (IsGuest, IsAuthenticated) => {
    const WrapperComponent = (propsGuest, propsAuthenticated) => {
        const auth = useContext(AuthContext)
        const [isLoading, setIsLoading] = useState(true)
        setTimeout(() => setIsLoading(false), 100)

        if (!auth.user && IsGuest) {
            return !isLoading && <IsGuest {...propsGuest} />
        } else if (auth.user && IsAuthenticated) {
            return !isLoading && <IsAuthenticated {...propsAuthenticated} />
        }
    }

    return WrapperComponent
}
