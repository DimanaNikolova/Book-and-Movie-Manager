import firebase from '../config/firebase'
import * as request from './requester'
import * as api from './api'

export const getUser = async (email) => {
    return request.post(api.getUser(), { email }).then(data=>data.json());
}
export const registerUser = async (email, password, username) => {
    return request
        .post(api.registerUser(), { email })
        .then((res) => {
            firebase.createUserWithEmailAndPassword(email, password)
        })
        .catch((err) => {
            console.log(err)
            throw err
        })
}
