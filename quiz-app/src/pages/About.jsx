import React from 'react';
import { Container } from 'react-bootstrap';

const About = () => {
  return (
    <Container>
      <h2 className="mb-4">About Us</h2>
      <p>
        This Online Quiz Application is built using React Router for navigation and React Bootstrap for styling.
        It demonstrates the core functionalities of single-page applications including dynamic routing, state management, and responsive design.
      </p>
    </Container>
  );
};

export default About;
