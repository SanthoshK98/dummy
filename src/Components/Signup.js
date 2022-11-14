import React from "react";
import axios from 'axios';
import { useState,useEffect } from "react";
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";




const Signup = ()=>{


    const baseURL = 'http://localhost:5000';


    const navigate = useNavigate();

    const bigdata=
        {
             name:'',
             email:'',
             number:'',
             password:'',
             cpassword:''
       }
    



const {register,handleSubmit, formState:{errors}, trigger,reset} = useForm();

const onSubmit = (low)=>{


axios.post(`${baseURL}/register`,low).then ((response)=>{

console.log (response)

})

if(low.password===low.cpassword){
    console.log(low)
}
else{
    alert("Invaild Password")
}

}



return(
<div>
<h1>Signup</h1>
<form onSubmit={handleSubmit(onSubmit)}>
<label>Name:</label>
<input type='name' {...register('name',{required:"Name  Cannot be empty "})}    placeholder="Enter Your Name"></input> <br/><br/>

{errors.name  && <h3>{errors.name.message}</h3>}
<label>Email:</label>
<input type='email' {...register('email',{required:'Email cannot be Empty',

pattern:{
    value:/[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}/,
    message:"Invalid Email Adress"
}




})}  placeholder="Enter Your Email"></input><br/><br/>
{errors.email && <h3>{errors.email.message}</h3>}
<label>Mobile:</label>
<input type ='mobile' {...register('mobile',{required:"Plaese Enter your Number",
pattern:{
    value:/^[0-9]{10}$/,
    message:"invalid Phone Number"
}


})} placeholder = 'Enter your Mobile number'/><br/><br/>
{errors.number && <h4>{errors.number.message}</h4>}
<label>Password:</label>
<input type='password'  {...register('password',{required:'please Enter your Password'})}      placeholder="Enter Your Password"></input><br/><br/>
{errors.password && <h4>{errors.password.message}</h4>}
<label>Confirm Password:</label>
<input type='cpassword'  {...register('cpassword',{required:'please Confirm your Password'})}       placeholder="Re-Enter Your Password"></input><br/><br/>
{errors.cpassword && <h4>{errors.cpassword.message}</h4>}
<input type='submit' value='Register'></input>



</form>


</div>




)



}

export default Signup;