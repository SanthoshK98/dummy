import React ,{useState,useEffect}from "react";
import{Link} from 'react-router-dom';
import download from '../images/download.png'

const Header = ()=>{

 

return(

<div>
   <h1>Logo</h1>
<Link to ='/'>Home</Link>
<Link to='/orders'>Orders</Link>
<Link to='/cart'>   Cart</Link>

<Link to='/login'>Login</Link>
<Link to='/login'>Logout</Link>
<Link to='/signup'>Signup</Link>


</div>

)





}

export default Header;