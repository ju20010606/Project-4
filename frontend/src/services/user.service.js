import axios from 'axios'
import authHeader from '../utilites/authHeader.utilities'

const API_URL = "http://localhost:8080/api/test/"

export const getPublicContent = () =>{
    return axios.get(API_URL + 'all')
}

export const getUserBoard = () =>{
    return axios.get(API_URL + 'user', {header: authHeader()})

}

export const getAdminBoard = () =>{
    return axios.get(API_URL + 'admin', {header: authHeader()})
    
}