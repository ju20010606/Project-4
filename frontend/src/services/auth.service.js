import axios from 'axios'
import {setItem, getItem, removeItem} from '../utilites/localStorage.utilities'

const API_URL = "http://localhost:8000/api/auth/";

export const register = (username, email, password) =>{
    return axios.post(API_URL + "signup", {
        username,
        email,
        password
    })
}

//Login the user
export const login =(username, password) => {
    return axios 
    .post(API_URL + "signin", {
        username,
        password
    })
    .then((response)=>{
        if(response.data.accessToken){
            setItem('user', response.data)
        }
        return response.data
    })
}

export const logout = () =>{
    return removeItem('user')
}

export const getCurrentUser = () =>{
    return getItem('user')
}

