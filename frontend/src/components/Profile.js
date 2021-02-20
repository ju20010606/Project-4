import React, {useEffect} from 'react'
import Layout from './common/Layout'
import {useHistory} from 'react-router-dom'
import {getCurrentUser} from '../services/auth.service'
import {HStack, Spacer, Text, Center, Box
,Flex,Avatar} from '@chakra-ui/react'
import { checkIfLoggedIn } from '../utilites/functions.utilities'
const Profile = () =>{
    let loggedIn = checkIfLoggedIn()
    let history = useHistory()
    useEffect(()=>{
        if(!loggedIn){
            history.push("/login")
          }
    },[])
    const currentUser = getCurrentUser()
    console.log(currentUser)
    return (
        <>
        <HStack>
            <Layout></Layout>
            <Spacer/>
            <Box  w="500px" h="600px"  boxShadow="2xl" >
                <Avatar mt="20px" ml="200px" size="2xl" name={currentUser.username} ></Avatar>
                <Text>username:{currentUser.username}</Text>
                <Text>email:{currentUser.email}</Text>

            </Box>
            <Spacer/>
            <Box></Box>
            
        </HStack>
         
        </>
    )
}

export default Profile