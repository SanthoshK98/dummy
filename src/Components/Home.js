import React from 'react';
import {useState,useEffect} from 'react';
import axios from 'axios';
import Subproduct from './Subproduct';
import {Link} from 'react-router-dom'
import {Container,Row} from 'react-bootstrap';
import cookie from "react-cookies";

const Home = ()=>{

const [user,setUser]  = useState([]);
const[error,setError] = useState(true);

const baseURL = 'http://localhost:5000';
cookie.save("token",12345)

useEffect(()=>{

axios.get(`${baseURL}/products`).then((response)=>{

    if(response.data.error===true){
        setError(true)
    }
    else{

        setError(false)
        
    console.log(response);
    setUser(response.data.result)

    }


})




},[])





return(
    <div>
        <h1>Home page</h1>

{
  error ? (<h3>Data Not Found</h3>) : (

    

user.map((item)=>{

    return(
<Link to={`/singleproduct/${item._id}`}>
<Subproduct key={item._id} get={item}></Subproduct>
</Link>
    )









})




    


    
  )


}








    </div>
)




}

export default Home;