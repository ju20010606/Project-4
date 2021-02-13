import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser, logout } from "../../services/auth.service";
import {
       IconButton, 
       useDisclosure,
       Drawer,
       DrawerBody,
       DrawerFooter,
       DrawerHeader,
       DrawerOverlay,
       DrawerContent,
       DrawerCloseButton,
       Button,
       Text
      } from '@chakra-ui/react'
import {HamburgerIcon} from '@chakra-ui/icons'

//css






const Layout = (props) => {
  const [showAdminBoard, setShowAdminBoard] = useState(false);
  const [currentUser, setCurrentUser] = useState(undefined);
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
  useEffect(() => {
    // grab getCurrentuser from the auth service
    const user = getCurrentUser();
    
    if (user) {
      // Set current user to the currentUser state
      setCurrentUser(user);
      // Check if the user.roles has "ROLE_ADMIN" return either true or false
      setShowAdminBoard(user.roles.includes("ROLE_ADMIN"));
    }
  }, []);

  const logOut = () => {
    logout()
  }

     

  return (
    <>
    <IconButton ref={btnRef} onClick={onOpen} rounded="full" mb="750px" ml="10px" bg="#2D3748" icon={<HamburgerIcon color="white"/>}></IconButton>
    <Drawer 
      bg="#2D3748" 
      h="800px" 
      w="200px"  
      isOpen={isOpen}
      placement="left"
      onClose={onClose}
      finalFocusRef={btnRef}> 
      <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton color="white"/>
            <DrawerHeader bg="#2D3748" color="white">Menu</DrawerHeader>

            <DrawerBody  bg="#2D3748" >
              <Link className="Link" to={"/home"}>
                Home
              </Link>
              <br/>
              <Link className="Link" to={"/tests"}>
                Tests
              </Link>
              <br/>
              <Link className="Link" to={"/projects"}>
                Projects
              </Link>
              <br/>
              <Link className="Link" to={"/homeworks"}>
                Homeworks
              </Link>
              <br/>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
    </Drawer>
       
    </>
  )
}

export default Layout;



/* <div>
<nav className="navbar navbar-expand navbar-dark bg-dark">
  <Link to="/" className="navbar-brand">
    Cool Site
  </Link>
  <div className="navbar-nav mr-auto">
    <li className="nav-item">
      <Link to={"/home"} className="nav-link">
       Home
     </Link>
   </li>
   {showAdminBoard && (
     <li className="nav-item">
       <Link to={"/admin"} className="nav-link">
         Admin Board
       </Link>
     </li>
   )}

   {currentUser && (
     <li className="nav-item">
       <Link to={"/user"} className="nav-link">
         User
       </Link>
     </li>
   )}
 </div>
 
 {currentUser ? (
   <div className="navbar-nav ml-auto">
     <li className="nav-item">
       <Link to={"/profile"} className="nav-link">
         {currentUser.username}
       </Link>
     </li>
     <li className="nav-item">
         <a href="/login" className="nav-link" onClick={logOut}>
           Logout
         </a>
       </li>
   </div>
 ) : (
   <div className="navbar-nav ml-auto">
       <li className="nav-item">
           <Link to={"/login"} className="nav-link">
               Login
           </Link>
       </li>

     <li className="nav-item">
         <Link to={'/register'} className="nav-link">
             Sign Up
         </Link>
     </li>
   </div>
 )}
</nav>
<div className="container mt-3">{props.children}</div>
</div>  */