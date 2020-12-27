import React from 'react';
import { Button, Jumbotron, Container, Carousel, Card, CardDeck } from 'react-bootstrap';
import CssBaseline from '@material-ui/core/CssBaseline';

const LandingPage = () => {
    return ( 
    <>
    <CssBaseline />
    <Jumbotron>
    <Container>
        
        <h1 style={{color: "whitesmoke" }}>Welcome to Drexel</h1>
        <p style={{color: "whitesmoke"}}>
        A place where you can satisfy all your tech related needs.
        </p>
    </Container>
    </Jumbotron>
            


            <Carousel className="img">
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dpoga1ue3/image/upload/v1609068389/apple1_zakwe8.jpg"
            alt="Apple Products"
            />
            <Carousel.Caption>
            <h3>Apple Products</h3>
            <p>Apple MacBook, Iphone, IWatch and much more</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dpoga1ue3/image/upload/v1609068389/Phones1_iwgjam.jpg"
            alt="Mobiles "
            />

            <Carousel.Caption>
            <h3>Mobile Phones</h3>
            <p>Samsung Note 20, Samsung Galaxy S20, OnePlus, Xiaomi, Huawei</p>
            </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://res.cloudinary.com/dpoga1ue3/image/upload/v1609068390/laptop1_nqbzbh.jpg"
            alt="Laptops"
            />

            <Carousel.Caption>
            <h3>Laptops</h3>
            <p>Dell Xps, Hp Pavillion, Lenovo Carbon Series, Xiaomi Laptops</p>
            </Carousel.Caption>
        </Carousel.Item>
    </Carousel>

    <CardDeck className="card">
        <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dpoga1ue3/image/upload/v1609069796/laptop2_p0nblm.jpg" />
            <Card.Body>
            <h2>Laptop</h2>
            <p>
                HP, DELL, ASUS, LENOVO, SAMSUNG, XIAOMI, APPLE 
            </p>
            
            <Button variant="info" className="cardButton" href="/products">Buy Now</Button>
            </Card.Body>
        </Card>
        <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dpoga1ue3/image/upload/v1609069795/phone2_m801al.jpg" />
            <Card.Body>
            <h2>Mobile</h2>
            <p>
                Samsung, Nokia, Xiaomi, Huawei, Oppo, OnePlus, Apple
            </p>
            
            <Button variant="info" className="cardButton" href="/products">Buy Now</Button>
            </Card.Body>
                </Card>
        <Card>
            <Card.Img variant="top" src="https://res.cloudinary.com/dpoga1ue3/image/upload/v1609069796/accesories_buj5vo.jpg" />
            <Card.Body>
            <h2>Accessories</h2>
            <p>
                All Types of chargers, mouse, keyboards headsets
            </p>
            
            <Button variant="info" className="cardButton" href="/products">Buy Now</Button>
            </Card.Body>
        </Card>
    </CardDeck>
    
        </>    
        );
}


 
export default LandingPage
