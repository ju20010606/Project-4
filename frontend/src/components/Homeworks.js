import React, {useState, useEffect} from 'react'
import Layout from './common/Layout'
import axios from 'axios'
//css
import Card from './common/Card'
import {
    HStack, 
    Box, 
    Spacer, 
    IconButton,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Center,
    useDisclosure,
    Button,
    FormLabel,
    FormControl,
    Input,
    Textarea,
    VStack,
    Text,
    Stack,
    Skeleton,
    propNames
} from '@chakra-ui/react'
import{SmallAddIcon} from '@chakra-ui/icons'
import { getCurrentUser } from "../services/auth.service"

const currentUser = getCurrentUser()


const Homeworks = () =>{
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
    const [homeworks, setHomeworks] = useState([])
    const [one, setOne] = useState("")

   const newHomework = () =>{
     const title = document.querySelector(".title").value
     const dueDate = document.querySelector(".date").value
     const description = document.querySelector(".description").value
      const homework = {
        description: description,
        title: title,
        dueDate: dueDate,
        userId: currentUser.id,
        category: "homework",
        toDoList:["task1","task2"]
      }
      axios.post('http://localhost:8000/api/newhomework', homework)
      .then((res) => {
        console.log("here is the new homework", res.data);
      })
      .catch((err) => {
        console.log(err);
      });

      onClose()
      getData()
   }

  const getData = () =>{

    
    axios.get("http://localhost:8000/api/homeworks/" + currentUser.id)
    .then((res)=>{
      console.log(currentUser.id)
      const allHomeworks = res.data
      setHomeworks(allHomeworks)
      console.log("!!id", currentUser.id)
      console.log("homeworks:", homeworks)
      console.log("res.data:", res)
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  
 

  useEffect(()=>{
    getData()
  },[])


 const display = () =>{
   return homeworks.map((homework)=>{
     return <Box w="150px" h="50px" bg="#2D3748" mt="30px" borderRadius="3xl" boxShadow="dark-lg" onClick={()=>{
      let id = homework._id
      
      axios.get("http://localhost:8000/api/onehomework/"+ id)
      .then((res)=>{
        setOne(res.data)
        console.log('one', res.data.toDoList)
      })
      .catch((error)=>{
        console.log(error)
      })
     }}><Center><Text color="white" mt="10px">{homework.title}</Text></Center></Box>
   })
   
 }


  








    return(
        
        <HStack> 
          <Layout></Layout>
          <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>New Homework</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} className="title" placeholder="Title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Due Date</FormLabel>
              <Input className="date" type="date"/>
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
               <Textarea className="description" placeholder="A brief description of your homework"/>
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button onClick={newHomework}colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          <Center>
            <Card title={one.title} description={one.description} tasks={one.toDoList}/>
          </Center>
          <Spacer/>
          <Box  bg="#2D3748" h="800px" w="200px" ml="500px">
              <IconButton onClick={onOpen} rounded="full" ml="150px" mt="10px" icon={<SmallAddIcon/>}></IconButton>
              <VStack className="sideBar">
               {display()}
              </VStack>
          </Box> 
         </HStack> 
        
    )
}

export default Homeworks

