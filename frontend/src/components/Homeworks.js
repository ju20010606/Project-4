import React from 'react'
import Layout from './common/Layout'

//css
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
    Lorem,
    useDisclosure,
    Button,
    FormLabel,
    FormControl,
    Input,
    Textarea
} from '@chakra-ui/react'
import{SmallAddIcon} from '@chakra-ui/icons'

const Homeworks = () =>{
    
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = React.useRef()
    const finalRef = React.useRef()
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
              <Input ref={initialRef} placeholder="Title" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Due Date</FormLabel>
              <Input type="date"  />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Description</FormLabel>
               <Textarea placeholder="A brief description of your homework"/>
            </FormControl>

          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
          <Spacer/>
          <Box bg="#2D3748" h="800px" w="200px" ml="500px">
              <IconButton onClick={onOpen} rounded="full" ml="150px" mt="10px" icon={<SmallAddIcon/>}></IconButton>
          </Box> 
         </HStack> 
        
    )
}

export default Homeworks

