import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from 'axios';
import {Container,Row ,Col} from 'react-bootstrap';

const Singleproduct = ()=>{

    const newparam = useParams();
    console.log(newparam)
    const[user,setUser] = useState({})
    const[error,setError] = useState(true);

    const baseURL = 'http://localhost:5000';

    const Addtocart = () => {
        console.log("Cart is Added");
      };
useEffect(()=>{
axios.get(`${baseURL}/products/${newparam.id}`).then((response)=>{

    if(response.data.error===true){
        setError(true);
    }
    else{
        setUser(response.data.result);
        setError(false)
    }

console.log(response);



})





},[])
// console.log(user)


return(

<div>
    <h1>Single Product Page</h1>

    { error ? (<h3>No Data Found</h3>)  : (

      <div> 
        <h3>{user._id}</h3>
<h3>{user.title}</h3>
<h3>{user.price}</h3>
<h3>{user.description}</h3>
<img src ={`${user.image}`} alt = 'img.jpg'></img>
<button onClick={Addtocart}>Add To Cart</button>
<button>Buy Now</button>
      </div>



    )}










</div>

)


}

export default Singleproduct;