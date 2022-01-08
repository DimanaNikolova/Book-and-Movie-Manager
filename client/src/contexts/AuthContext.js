import firebase from '../config/firebase'
import { useState, useEffect, useContext, createContext } from 'react'

export const AuthContext = createContext()

export default function AuthContextProvider({ children }) {
    const [user, setUser] = useState(null)
    const [loading , setLoading] = useState(true)

    firebase.onAuthStateChanged((user) => {
        if (user) {
            setUser(user)
            setLoading(false)
        } else {
            setUser(null)
            setLoading(false)
        }
    })
    return (
        <>
            <AuthContext.Provider value={user}>{!loading && children}</AuthContext.Provider>
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
