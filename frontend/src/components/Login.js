import React, { useState, useRef } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

// Component
import FormGroup from './common/FormGroup'
import ButtonSpinner from './common/ButtonSpinner'
import {Box, Avatar, AiOutlineUser, CalendarIcon, Image, HStack} from '@chakra-ui/react'
//Helper
import { login } from '../services/auth.service'
import { resMessage } from "../utilites/functions.utilities";


// Function given to react-validator
const required = (value) => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const Login = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Stores the username in our username state
  const onChangeUsername = (e) => {
    const username = e.target.value;
    setUsername(username);
  };
  // Stores the password in our password state
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };

  const handleLogin = (e) => {
    e.preventDefault();
    //Prevent message clear them out
    setMessage("")
    setLoading(true)

    // Validates all the fields
    form.current.validateAll();

    // Validator stores errors and we can check if error exist
        console.log(checkBtn.current)
    if(checkBtn.current.context._errors.length === 0){
        login(username, password).then(
            () => {
              props.history.push("/");
              window.location.reload()
            },
            (error) => {
                // Checking all the data recieved from our backend
                 
              
                // Setting loading to false and return the error
                  setLoading(false)
                  setMessage(resMessage(error))
            }
          );
    }else {
        setLoading(false)
    }

  };
  
  return (
      <>
      {/* <img src="https://source.unsplash.com/eaeKesI3TJQ/1900x400"  ></img> */}
      <Box w="300px" height="450px"  my="150px" p="50px" boxShadow="xl" bg="#2D3748"   mx="auto" >
        {/* <img
          // src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        /> */}
        {/* <Avatar bg="red.500" icon={<AiOutlineUser fontSize="1.5rem" />} /> */}
        <Avatar  ml="50px" mb="10px" size="xl"   />
        
        <Form onSubmit={handleLogin} ref={form}>
            
            <FormGroup text="username" >
            <Input
              type="text"
              className="form-control"
              name="username"
              value={username}
              onChange={onChangeUsername}
              validations={[required]}
              
            />
            </FormGroup>
          
             <FormGroup text="password">
            <Input
              type="password"
              className="form-control"
              name="password"
              value={password}
              onChange={onChangePassword}
              validations={[required]}
            />
            </FormGroup>

            <ButtonSpinner text="Log In" loading={loading} />

          {message && (
            <div className="form-group">
              <div className="alert alert-danger" role="alert">
                {message}
              </div>
            </div>
          )}

          <CheckButton style={{ display: "none" }} ref={checkBtn} />
        </Form>
      </Box>
     
     
    </>
  );
};

export default Login;