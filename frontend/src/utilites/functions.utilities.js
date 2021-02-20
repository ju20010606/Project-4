import { getCurrentUser } from "../services/auth.service"
import { Redirect } from "react-router-dom";
import {Alert, AlertIcon} from '@chakra-ui/react'
let currentUser = getCurrentUser()

export const resMessage = (error) =>{
    return (error.response &&
        error.response.data &&
        error.response.data.message) ||
      error.message ||
      error.toString();
}

export const checkIfLoggedIn = () =>{
  
  if(!currentUser){
    return false
  }else{
    return true
  }

}