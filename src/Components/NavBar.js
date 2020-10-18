import React, { useState } from 'react';
import { Navbar, Nav, Container, Modal, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';

const NavStyle = styled.div`
  a, .navbar-nav, .nav-link{
    text-decoration: none;
    color: white;
  &:hover{
    color: #acbcd7;
  }
};
`;

const Button = styled.button`
  ${props => props.primary &&
    css`
      border: none;
      border-radius: 5px;
      background: #acbcd7;
      color: white;
      &: hover{
      background: #9babc6;
    }
  `};
`;


function NavBar() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>


      <NavStyle >
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" >
          <Container>
            <Navbar.Brand> Aginskoe</Navbar.Brand >
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">

              <Nav className="mr-auto" >
                <Nav.Link><Link to="/">Home</Link></Nav.Link>
                <Nav.Link><Link to="/about">About</Link></Nav.Link>
              </Nav >

              <Nav>
                <Button primary className="m-2" onClick={handleShow}>Log In</Button>
              </Nav>


            </Navbar.Collapse >
          </Container >
        </Navbar>
      </NavStyle >

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton >
          <Modal.Title >Log in</Modal.Title >
        </Modal.Header >

        <Modal.Body>
          <Form>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Form.Group controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Remember me" />
            </Form.Group>

            <Button variant="primary" type="submit">
              Submit
                </ Button>
          </Form>
        </Modal.Body >
      </Modal >

    </ >
  );
}

export default NavBar;