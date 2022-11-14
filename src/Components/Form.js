import React from 'react';
import  {useForm} from 'react-hook-form';

const Form = ()=>{

    const{register,handleSubmit, formState:{errors},trigger,reset} =useForm();

    const onSubmit =(data)=>{
        console.log(data)
    }


return(
<div>
    <h1>Form Page</h1>

    <form onSubmit ={handleSubmit(onSubmit)}>
        <label>Name:</label>
        <input type ='name' {...register('name',{required:'Name Is Required'})}></input>
      {errors.name  && <h3>{errors.name.message}</h3>}
      <label>Email</label>
      <input type ='email'  {...register('email',{required:'please Enter mail'})}/>
      {errors.email&& <small>{errors.email.message}</small>}
      <label>
        Password
      </label>
      <input type ='password'  {...register('password',{required:"Enter Password"})}/>
      {errors.password && <small>{errors.password.message}</small>}
      <input type ='submit'/>


    </form>

    
</div>



)



}

export default Form;