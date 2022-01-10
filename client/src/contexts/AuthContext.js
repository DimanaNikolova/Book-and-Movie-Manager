import firebase from '../config/firebase'
import { useState, useEffect, useContext, createContext } from 'react'
import { getUser } from '../services/userService'

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [userData, setUserData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        firebase.onAuthStateChanged((user) => {
            if (user) {
                getUser(user.email).then((data) => {
                    setUser(user)
                    setUserData(data)
                    setLoading(false)
                    console.log(user, userData)
                })
            } else {
                setUser(null)
                setLoading(false)
            }
        })
    }, [])

    return (
        <>
            <AuthContext.Provider value={user, userData}>
                {!loading && children}
            </AuthContext.Provider>
        </>
    )
}

// const currentUser = () => {
//     const [user, setUser] = useState(false)
//      useEffect(() => {
//         firebase.onAuthStateChanged((user) => {
//             if (user) {
//                 // User is signed in, see docs for a list of available properties
//                 // https://firebase.google.com/docs/reference/js/firebase.User
//                 const uid = user.uid
//                 setUser(user)
//                 // console.log(user)
//                 // ...
//             } else {
//                 setUser(false)
//                 // User is signed out
//                 // ...
//             }
//         })
//     }, [user])
//     return user
// }

// export default currentUser
