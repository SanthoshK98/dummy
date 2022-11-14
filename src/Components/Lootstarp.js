import React from 'react';
import { Navbar,Nav,Container,Row,Col,Card,Button ,Carousel,CardGroup} from 'react-bootstrap';
import  {useState} from 'react';
import tata from '../photos/Forest.jpg';
import gala from '../photos/color.jfif';
import gaja from '../photos/green.jfif';
import haha from '../photos/images.jfif';
import Image from 'react-bootstrap/Image'



const Lootstrap = ()=>{

    const[count,setcount] = useState(0)


    const incr = ()=>{
        setcount(count+1);
    }
    const decr=()=>{
        setcount(count-1);
    }

return(

    <div>
        <Navbar bg='dark' href="/" expand='sm' variant='dark'>
            <Container>
      <Navbar.Brand>
        Dinakar E-Commerce
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-right">




      <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>

            </Nav>
</Navbar.Collapse>

            </Container>

        </Navbar>

        <Container className='mt-3'>
            <Row xs={2} md={4} lg={6}>
                <Col>
                <Card className="shadow">
                 <Card.Body>
                          <p className='display-2'>{count}</p>
                          <Button variant='primary' onClick={incr} className='m-3'>Increment</Button>
                          <Button variant='danger' onClick={decr}>Decreement</Button>
                 </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="shadow">
                 <Card.Body>
                          <p className='display-2'>{count}</p>
                          <Button variant='primary' onClick={incr} className='m-3'>Increment</Button>
                          <Button variant='danger' onClick={decr}>Decreement</Button>
                 </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="shadow">
                 <Card.Body>
                          <p className='display-2'>{count}</p>
                          <Button variant='primary' onClick={incr} className='m-3'>Increment</Button>
                          <Button variant='danger' onClick={decr}>Decreement</Button>
                 </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="shadow">
                 <Card.Body>
                          <p className='display-2'>{count}</p>
                          <Button variant='primary' onClick={incr} className='m-3'>Increment</Button>
                          <Button variant='danger' onClick={decr}>Decreement</Button>
                 </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="shadow">
                 <Card.Body>
                          <p className='display-2'>{count}</p>
                          <Button variant='primary' onClick={incr} className='m-3'>Increment</Button>
                          <Button variant='danger' onClick={decr}>Decreement</Button>
                 </Card.Body>
                </Card>
                </Col>
                <Col>
                <Card className="shadow">
                 <Card.Body>
                          <p className='display-2'>{count}</p>
                          <Button variant='primary' onClick={incr} className='m-3'>Increment</Button>
                          <Button variant='danger' onClick={decr}>Decreement</Button>
                 </Card.Body>
                </Card>
                </Col>
            </Row>
        </Container>


        <Carousel className='laka'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={tata}
          alt="First slide"
          />
        <Carousel.Caption>
          <h3>Greeny Nature</h3>
          <p>Allow Green Forest to have this Clody Sky for the Nature</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gala}
          alt="Second slide"
           />

        <Carousel.Caption>
          <h3>Rainy Forest</h3>
          <p>Allows Us to Moveforward in to the life of Epoxy</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gaja}
          alt="Third slide"
          />

        <Carousel.Caption>
          <h3 style={{color:'black'}}><b>Forest Nature</b></h3>
          <p>
            Enjoy the Moment of Life and Lead the Life.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={gaja}
          alt="Third slide"
          />

        <Carousel.Caption>
          <h3 style={{color:'black'}}><b>Forest Nature</b></h3>
          <p>
            Enjoy the Moment of Life and Lead the Life.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
<CardGroup>
    <Card style={{ width: '10rem',margin:'10px' }}>
      <Image src={haha} roundedCircle/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem',margin:'10px' }}>
      <Card.Img variant="top" src={haha}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
    <Card style={{ width: '10rem', margin:'10px' }}>
      <Card.Img variant="top" src={haha}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      
    </Card>
    <Card style={{ width: '10rem',margin:'10px' }}>
      <Card.Img variant="top" src={haha}/>
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

</CardGroup>

<Image src={haha} roundedCircle/>
    </div>
)

}

export default Lootstrap;