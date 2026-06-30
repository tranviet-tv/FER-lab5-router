import React from 'react';
import { Carousel, Container, Row, Col, Image } from 'react-bootstrap';

const Home = () => {
  return (
    <Container fluid>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide1.jpg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide2.jpg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide3.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
      
      <Row className="mt-4 justify-content-center">
        <Col xs="auto">
          <Image src="/images/menu-01.jpg" roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </Col>
        <Col xs="auto">
          <Image src="/images/menu-02.jpg" roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </Col>
        <Col xs="auto">
          <Image src="/images/menu-03.jpg" roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </Col>
        <Col xs="auto">
          <Image src="/images/menu-04.jpg" roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </Col>
        <Col xs="auto">
          <Image src="/images/menu-05.jpg" roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </Col>
        <Col xs="auto">
          <Image src="/images/menu-06.jpg" roundedCircle style={{ width: '100px', height: '100px', objectFit: 'cover' }} />
        </Col>
      </Row>

      <h4 className="text-danger mt-3">This is Home Page</h4>
    </Container>
  );
};

export default Home;
