import React from 'react'
import Layout from './common/Layout'
import {getCurrentUser} from '../services/auth.service'
import {HStack, Spacer, Text} from '@chakra-ui/react'
const Profile = () =>{
     
    const currentUser = getCurrentUser()
    console.log(currentUser)
    return (
        <>
        <HStack>
            <Layout></Layout>
            <Spacer/>
            <Text>{currentUser.username}</Text>
            <Text>{currentUser.id}</Text>
        </HStack>
         
        </>
    )
}

export default Profile