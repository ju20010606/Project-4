import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {Redirect} from "react-router-dom"
import CalendarTwo from './common/Calendar31Days'
// import CalendarThree from '../components/common/Calendar30Days'
// import CalendarOne from '../components/common/Calendar29Days'




import {Box,Center,Grid,IconButton,Text,Circle,Divider,HStack,MenuItem,Menu} from "@chakra-ui/react"
import Layout from './common/Layout'
import { CalendarIcon } from '@chakra-ui/icons'

//css
import "../css/Home.css"
import { checkIfLoggedIn } from '../utilites/functions.utilities'
const Home = () =>{
    useEffect(()=>{
        checkIfLoggedIn()
    },[])

    
    
    return (
        <>
        {/* icon={<CalendarIcon color="white"/>} */}
        {/* <IconButton size="lg" mt="20px" ml="150px" rounded="full" bg="#2D3748" color="white" icon={<CalendarIcon color="white"/>}></IconButton> */}
        <HStack>
        
            <Layout/>
            <CalendarTwo/>
            
            </HStack>
        </>
    )
}

export default Home