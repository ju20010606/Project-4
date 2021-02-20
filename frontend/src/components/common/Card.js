import React, {useEffect, useState} from 'react'
import {
Box, 
Divider, 
HStack,
Center,
Text,
Stack, 
Skeleton, 
SkeletonText, 
SkeletonCircle, 
List, 
ListItem, 
UnorderedList, 
Checkbox, 
Progress, 
Editable, 
EditableInput, 
EditablePreview, 
EditableControls,  
Button,
ButtonGroup,
IconButton,
Flex,
useDisclosure,
Modal,
ModalBody,
ModalCloseButton,
ModalOverlay,
ModalFooter,
FormControl,
Input,
FormLabel,
ModalContent,
ModalHeader,
LeftIcon,
Icon,
CircularProgress,
ProgressLabel
} from '@chakra-ui/react'
import {
 CheckIcon,
 CloseIcon,
 EditIcon,
 SmallAddIcon,
 AddIcon
} from '@chakra-ui/icons'
import axios from 'axios'

const Card = (props) =>{
  let total = 0
  const[count, setCount] = useState(0)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [list, setList] = useState([])
  const initialRef = React.useRef()
  const finalRef = React.useRef()
  
  function EditableControls({ isEditing, onSubmit, onCancel, onEdit }) {
   return isEditing ? (
     <ButtonGroup  size="xs">
       <IconButton ml="1px" bg="#2D3748" icon={<CheckIcon />} onClick={(e)=>{
          total ++
          let text = document.querySelector("#input").value
         //  e.target.parentNode.parentNode.parentNode.children[1].innerText
          let data = {
             id: props.id,
             task:text
          }
          console.log("data.task", data.task)
          axios.put("http://localhost:8000/api/newtodolist", data)
          .then((res)=>{
             
             console.log("count", count)
             console.log(data)
             console.log("new task", res.data.toDoList)
             setList(res.data.toDoList)
             onSubmit()

          })
          .catch((error)=>{
             console.log(error)
          })
          setCount(total)
       }} />
       <IconButton bg="#2D3748" icon={<CloseIcon />} onClick={onCancel} />
     </ButtonGroup>
   ) : (
       <IconButton ml="1px" bg="#2D3748" size="xs" icon={<AddIcon />} onClick={onEdit} />
   )
 }
   const displayDescription =()=>{
     if(props.description){

        return (
        <>
        
        <Box mx="auto" mb="50px" mt="70px" w="500px">
           <Text >Progress:</Text>
           <Progress size="lg" value={70}><ProgressLabel>70%</ProgressLabel></Progress>
        </Box>
          <Text ml="20px">Description:</Text>
          <Box mx="auto" w="500px" h="200px" borderWidth="0.5px" defaultValue={props.description}>
          {props.description}
         </Box>
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
      console.log(props.count) 
   }
  const isChecked = (e) =>{
    let data = {
       id:props.id,
       task: e.target.innerText
    }
      console.log("data",data)
    axios.put("http://localhost:8000/api/todolist", data)
    .then((res)=>{
       console.log("deleted", res.data)
       e.target.style.textDecoration = "line-through"
       e.target.style.color = "gray" 
    })
    .catch((error)=>{
       console.log(error)
    })
  }    
 const  displayList = () =>{
    if(props.tasks){
       return list.map((task)=>{
          return <ListItem onClick={isChecked} m={4} color="white">{task}</ListItem>
       })
    }
 }
  const displayTitle = () =>{
     if(props.title){
       return (
         <>
            
             
              <Box  w="80px" m={2} height="20px" bg="pink"><Text textAlign="center" fontSize="xs">{props.date}</Text></Box>
           <Center>
            <Text fontSize="2xl" mt="10px">{props.title}</Text>
           </Center>
         
       
       </>
       )
     }
  }

  const displayTodos = () =>{
     if(props.id){
        return(
           <>
           <Text ml="70px" fontFamily="monospace courier-new" color="white" fontSize="2xl" >To Do List:</Text>
       <Editable
      defaultValue="New Task"
      fontSize="sm"
      isPreviewFocusable={false}
      submitOnBlur={false}
      color="white"
    >
      {(props) => (
        <>
        <HStack>
          <EditableControls {...props} />
          <EditablePreview  />
          
          <EditableInput id="input"/>
          
          </HStack>
          
        </>
      )}
    </Editable>
       <UnorderedList>
          {displayList()}
       </UnorderedList>
           </>
        )
     }

  }

  useEffect(()=>{
     if(props.tasks){
      setList(props.tasks)  
     }
     
  },[props.tasks])
  

   return(
    <>
    <Box ml="150px" w="800px" h="500px" bg="#2D3748" boxShadow="2xl">
       <HStack>
       <Box h="500px" w="300px" bg="#2D3748">
        {displayTodos()}
       </Box>
       <Divider orientation="vertical"/>
       <Box h="500px" w="700px" bg="white" borderColor='gray' >
         
          {displaySkeleton()}
       <Stack>
            {displayTitle()}   
       </Stack>
          {displayDescription()}
       </Box>
       </HStack>
     
    </Box>
    
    </>
   )
}

export default Card