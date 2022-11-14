import React from "react";
import {Container,Row ,Card,CardGroup,Col} from 'react-bootstrap';

const Subproduct = (props)=>{

    const Addtocart = () => {
        console.log("Cart is Added");
      };
    const{get} = props
return(
    
        <Col>

<Card>
    

   
<h3>{get._id}</h3>
<h3>{get.title}</h3>
<h3>{get.price}</h3>
<h3>{get.description}</h3>
<img src ={`${get.image}`} alt = 'img.jpg'></img>
<button onClick={Addtocart}>Add To Cart</button>
<button>Buy Now</button>

</Card>
</Col>

   



)





}

export default Subproduct;