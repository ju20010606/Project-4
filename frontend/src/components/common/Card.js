import React, {useState} from 'react'
import {Box, Divider, HStack,Center,Text,Textarea, VStack, Spacer, Stack, Skeleton, SkeletonText, SkeletonCircle, List, ListItem, UnorderedList, Checkbox, Progress} from '@chakra-ui/react'
const Card = (props) =>{

  const [count, setCount] = useState()
  const [percentage, setPercentage] = useState()
  
//   const calculatePercentage = () =>{
//      let number = 
//   } 
   
   const displayDescription =()=>{
     if(props.description){

        return (
        <>
        <Box mx="auto" mb="50px" mt="150px" w="500px">
           <Progress value={10} size="lg" colorScheme="pink" />
        </Box>
        
        <Box  mx="auto" w="500px" h="200px" borderWidth="0.5px">{props.description}</Box>
        </>
        )
     }
   }

   const displaySkeleton = () =>{
      if(!props.title){
         return(
            <>
         <Box mt="10px" mx="auto" w="110px" h="30px">
         <Skeleton height="30px"/>
         </Box>
          
           
          <Box mt="200px" padding="6" bg="white">
          <SkeletonText  mt="4" noOfLines={8} spacing="4" />
          </Box>
          </>
         )
      }
   }
  
 const  displayList = () =>{
    if(props.tasks){
       let tasks = props.tasks
       return tasks.map((task)=>{
          return <ListItem m={4} color="white"><Checkbox colorScheme="black">{task}</Checkbox></ListItem>
       })
    }
 }
 

   return(
    <>
    <Box ml="150px" w="800px" h="500px" bg="#2D3748" boxShadow="2xl">
       <HStack>
       <Box h="500px" w="300px" bg="#2D3748">
       <Text ml="70px" fontFamily="monospace courier-new" color="white" fontSize="2xl" mt="10px">To Do List:</Text>
       <List>
          {displayList()}
       </List>
       </Box>
       <Divider orientation="vertical"/>
       <Box h="500px" w="700px" bg="white" borderColor='gray' >
          {displaySkeleton()}
       <Stack>
               <Text mx="auto" fontSize="2xl" mt="10px">{props.title}</Text>
       </Stack>
       {displayDescription()}
       </Box>
       </HStack>
    </Box>
    
    </>
   )
}

export default Card