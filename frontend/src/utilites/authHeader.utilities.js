import { getItem } from './localStorage.utilities'

export default function authHeader() {
    // grabbing the user from the local storage
    const user = getItem('user')
    // grabbing the user from the local storage
    const user = JSON.parse(localStorage.getItem('user'))
    // check if user and if user has accessToken
    if(user && user.accessToken){
        return { 'x-access-token': user.accessToken}
    }else{
        return {}
    }
}