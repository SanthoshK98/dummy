import React from "react";
import cookie from "react-cookies";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
import  Button from "react-bootstrap/Button";
import {Form} from 'react-bootstrap';
import axios from 'axios';

const Login = ()=>{

  const baseURL = 'http://localhost:5000';






const navigate = useNavigate();

const {register, handleSubmit, formState:{errors},trigger,reset} = useForm();


const onSubmit = (lassi)=>{
  localStorage.setItem('login',true)
  navigate('/')

console.log(lassi)
reset()


  axios.post(`${baseURL}/login`,lassi).then((response)=>{

console.log(response.data.result.token)
    if(response.data.status===true){

      cookie.save("tala",response?.data?.result?.token)

    }

   
  
  console.log(response)
  
  
  
  


});
}










return(

    <div>
        <h1>Login</h1>
        <Form onSubmit={handleSubmit(onSubmit)}>
     

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email"{...register('email',{required:'Email Is Required'})} placeholder="Enter your Mail" />
        {errors.email && <small>{errors.email.message}</small>}
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Form.Group className="mb-6" controlId="formBasicName">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" {...register('password',{required:'Password is Required'})} placeholder="Enter Your Name" />
        {errors.password && <small>{errors.password.message}</small>}
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>


    

    </div>
)




}






export default Login;

