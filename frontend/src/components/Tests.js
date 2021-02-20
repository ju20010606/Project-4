import React, {useEffect} from 'react'
import Layout from './common/Layout'
import Card from './common/Card'
//css
import {HStack, Text, Spacer, Box} from '@chakra-ui/react'
import { checkIfLoggedIn } from '../utilites/functions.utilities'
const Tests = () =>{
     
    useEffect(()=>{
        checkIfLoggedIn()
    },[])


    return(
        <>
        <HStack>
         <Layout></Layout>
         <Spacer />
          <Card />
         <Spacer/>
         <Box bg="#2D3748" h="800px" w="200px" ml="500px"></Box>
        </HStack>
        
        </>
    )
}

export default Tests