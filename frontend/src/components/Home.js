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
             <Box  borderTopLeftRadius="3xl" borderBottomLeftRadius="3xl" className="todolist" w="400px" h="600px" bg="#2D3748" ml="100px"> 
                <Box  className="calendar"  borderTopRightRadius="3xl" borderBottomRightRadius="3xl"  w="800px" h="600px"   ml="400px">
                    <Box  borderTopRightRadius="3xl" borderBottomRightRadius="3xl" w="100%" h="80px" >

                    <Center><Text fontFamily="helvetica" fontSize="20px" mt="20px" color="gray">Mon</Text></Center>
                    </Box>
                    <Divider orientation="horizontal" />
                        <Grid templateColumns="repeat(7, 1fr)" gap={4}>
                            <Box  className="calendarDay" w="80px" h="80px"  mt="40px" ml="20px" ><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  mt="40px" ml="20px" ><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  mt="40px" ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  mt="40px" ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  mt="40px" ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  mt="40px" ml="10px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDayWeekend" w="80px" h="80px"  mt="40px" ><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>

                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="10px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDayWeekend" w="80px" h="80px" ><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>

                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="10px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDayWeekend" w="80px" h="80px" ><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>

                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="10px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDayWeekend" w="80px" h="80px" ><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="20px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="15px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box className="calendarDay" w="80px" h="80px"  ml="10px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>
                            <Box borderRadius="3lg" className="calendarDayWeekend" w="80px" h="80px"><Center><Text mt="25px" fontFamily="helvetica">1</Text></Center></Box>  
                        </Grid> 
                    </Box>
                </Box>
              </Center>
            
            </HStack>
        </>
    )
}

export default Home