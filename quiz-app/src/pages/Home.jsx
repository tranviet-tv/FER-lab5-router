import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Container>
      <h2 className="mb-4">Home</h2>
      <p>Welcome to the Online Quiz Application. Test your knowledge here!</p>
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide1.jpg"
            alt="First slide"
            style={{ objectFit: 'cover', height: '400px' }}
          />
          <Carousel.Caption>
            <h3>Great Quizzes</h3>
            <p>Engage in our wide variety of topics.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide2.jpg"
            alt="Second slide"
            style={{ objectFit: 'cover', height: '400px' }}
          />
          <Carousel.Caption>
            <h3>Stay Updated</h3>
            <p>Check out our <Link to="/news" className="text-white text-decoration-underline">News section</Link> for the latest updates.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="/images/slide3.jpg"
            alt="Third slide"
            style={{ objectFit: 'cover', height: '400px' }}
          />
          <Carousel.Caption>
            <h3>Join the Community</h3>
            <p>Participate and learn together.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};

export default Home;
