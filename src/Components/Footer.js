import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
  return (
    <Container fluid style={{ backgroundColor: '#343a40', color: '#fff' }}>
      <Container fluid style={{ display: 'flex', justifyContent: 'center', padding: '10px' }}>
        <p>By Alina Povazhnyuk 2020</p>
      </Container>
    </Container>
  )
};

export default Footer;