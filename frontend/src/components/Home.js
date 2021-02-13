import {Box,Center,Grid,IconButton,Text,Circle,Divider,HStack,MenuItem,Menu} from "@chakra-ui/react"
import Layout from '../components/common/Layout'
import { CalendarIcon } from '@chakra-ui/icons'
//css
import "../css/Home.css"
const Home = () =>{
    return (
        <>
        {/* icon={<CalendarIcon color="white"/>} */}
        {/* <IconButton size="lg" mt="20px" ml="150px" rounded="full" bg="#2D3748" color="white" icon={<CalendarIcon color="white"/>}></IconButton> */}
        <HStack>
        
                <Layout/>
            <Center>
                
                <Box borderRadius="lg" w="800px" h="600px" className="calendar" bg="#2D3748" mt="20px" ml="200px">
                    <Box borderRadius="lg" w="100%" h="80px" bg="#2D3748">

                    <Center><Text fontFamily="helvetica" fontSize="20px" mt="20px" color="white">Mon</Text></Center>
                    </Box>
                    <Divider orientation="horizontal" />
                        <Grid templateColumns="repeat(7, 1fr)" gap={4}>
                            <Box className="calendarDay" w="80px" h="80px"  mt="40px" ml="20px" ><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  mt="40px" ml="20px" ><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  mt="40px" ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  mt="40px" ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  mt="40px" ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  mt="40px" ml="10px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  mt="40px" bg="#F6AD55"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>

                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="10px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px" bg="#F6AD55"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>

                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="10px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px" bg="#F6AD55"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>

                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="10px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px" bg="#F6AD55"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="10px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box borderRadius="3lg" className="calendarDay" bg="#F6AD55" w="80px" h="80px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>  
                        </Grid> 
                    </Box>
            </Center>
            </HStack>
        </>
    )
}

export default Home