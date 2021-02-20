import React, {useState} from 'react'
import {Box,Center,Progress,Grid,IconButton,Text,Circle,Divider,HStack,MenuItem,Menu, UnorderedList,ListItem,List, Checkbox, ListIcon, Spacer} from "@chakra-ui/react"
import { CalendarIcon, ChevronLeftIcon,ChevronRightIcon } from '@chakra-ui/icons'
import axios from "axios"
//css

const CalendarOne = (props) =>{
    const [todos, setTodos] = useState([])
    const months = [
        {name:"January", number:"01"},
        {name:"February", number:"02"},
        {name:"March", number:"03"},
        {name:"April", number:"04"},
        {name:"May", number:"05"},
        {name:"June", number:"06"},
        {name:"July", number:"07"},
        {name:"August", number:"08"},
        {name:"September", number:"09"},
        {name:"October", number:"10"},
        {name:"November", number:"11"},
        {name:"December", number:"12"}
    ]



const getData = (e) =>{
    let day = e.target.innerText
    
    let month = months[0].number
    let year = "2021"
    let date = year +"-"+month+"-"+day
        
    
    
    console.log(date)
    axios.get("http://localhost:8000/api/homeworkdate/" + date)
    .then((res)=>{
        console.log("date!!!", res.data)
        setTodos(res.data)
        
    })
    .catch((error)=>{
      console.log(error)
    })

}

 

 










    return (
        <>
        <Center>
             <Box boxShadow="2xl" borderTopLeftRadius="3xl" borderBottomLeftRadius="3xl" className="todolist" w="300px" h="600px" bg="#2D3748" ml="200px"> 
             <Text color="white" ml="100px">Today's To Do</Text>
             
             <List className='list'>
              {todos.map((todo)=>{
                 return  <ListItem color="white" margin={2}><Checkbox colorScheme="black">{todo.title}</Checkbox><Progress></Progress></ListItem>
               })}
               
             </List>
             </Box>
                <Box boxShadow="2xl" className="calendar"  bdorderTopRightRadius="3xl" borderBottomRightRadius="3xl"  w="700px" h="600px" >
                    <Box   borderTopRightRadius="3xl" borderBottomRightRadius="3xl" w="100%" h="80px" >
                    <Center>
                    <HStack mt="20px">
                    <ChevronLeftIcon size="md" color="gray"></ChevronLeftIcon>
      
                   <Text fontFamily="helvetica" fontSize="20px" mt="20px" color="gray">{months[0].name}</Text>
                    <ChevronRightIcon color="gray" ></ChevronRightIcon>
                    </HStack>
                    </Center>
                    </Box>
                    <Divider orientation="horizontal" />
                       <Grid templateColumns="repeat(7, 1fr)" gap={4}>
                            <Box  className="calendarDay" w="60px" h="60px"  mt="40px" ml="20px" ><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>1</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  mt="40px" ml="20px" ><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>2</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  mt="40px" ml="20px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>3</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  mt="40px" ml="15px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>4</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  mt="40px" ml="15px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>5</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  mt="40px" ml="10px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>6</Text></Center></Box>
                            <Box className="calendarDayWeekend" w="60px" h="60px"  mt="40px" ><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>7</Text></Center></Box>

                            <Box className="calendarDay" w="60px" h="60px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>8</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px" ml="20px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>9</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>10</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>11</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>12</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px" ml="10px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>13</Text></Center></Box>
                            <Box className="calendarDayWeekend" w="60px" h="60px" ><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>14</Text></Center></Box>

                            <Box className="calendarDay" w="60px" h="60px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>15</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px" ml="20px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>16</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>17</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>18</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>19</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  ml="10px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>20</Text></Center></Box>
                            <Box className="calendarDayWeekend" w="60px" h="60px" ><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>21</Text></Center></Box>

                            <Box className="calendarDay" w="60px" h="60px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>22</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>23</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>24</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>25</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>28</Text></Center></Box>
                            <Box className="calendarDay" w="60px" h="60px"  ml="10px"><Center><Text mt="25px" fontFamily="helvetica" onClick={getData}>29</Text></Center></Box>
                        </Grid> 
                    </Box>
              </Center>
            
        {/* icon={<CalendarIcon color="white"/>} */}
        {/* <IconButton size="lg" mt="20px" ml="150px" rounded="full" bg="#2D3748" color="white" icon={<CalendarIcon color="white"/>}></IconButton> */}
    
                        
        </>
    )
}

export default CalendarOne

