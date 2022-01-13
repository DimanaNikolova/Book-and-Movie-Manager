import firebase from '../config/firebase'
import { useState, useEffect, useContext, createContext } from 'react'
import { getUser } from '../services/userService'
import { useLocation } from 'react-router'

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)

    const location = useLocation()

    useEffect(() => {
        firebase.onAuthStateChanged((user) => {
            setLoading(true)
            if (user) {
                getUser(user.email).then((data) => {
                    setUser(user)
                    setUserData(data)
                    setLoading(false)
                })
            } else {
                setUser(null)
                setUserData(null)
                setLoading(false)
            }
        })
    }, [])

    useEffect(() => {
        if (location.pathname === '/profile') {
            firebase.onAuthStateChanged((user) => {
                if (user) {
                    setLoading(true)
                    getUser(user.email).then((data) => {
                        setUser(user)
                        setUserData(data)
                        refreshUserData()
                        setLoading(false)
                    })
                } else {
                    setUser(null)
                    setUserData(null)
                    setLoading(false)
                }
            })
        }
    }, [location.pathname])

    const refreshUserData = () => {
        if (user) {
            console.log('user detected')
            getUser(user.email).then((data) => {
                setUser(user)
                setUserData(data)
                setLoading(false)
                console.log('data refreshed')
            })
        }
    }

    return (
        <>
            <AuthContext.Provider
                value={{ user: userData, refreshUserData }}
                refreshUserData={refreshUserData}
            >
                {!loading && children}
            </AuthContext.Provider>
        </>
    )
}
