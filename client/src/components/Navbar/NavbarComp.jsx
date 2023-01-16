import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';
import Auth from './Auth';

function NavbarComp() {
  const [isLoggedIn,setIsLoggedIn] = React.useState(false)
            
  let authElement = (<><Nav.Link onClick={(e)=>{
    e.preventDefault() 
    setIsLoggedIn(true)}} href="#home">Login</Nav.Link>
    <Nav.Link href="#reg">Register</Nav.Link></>)
  if(isLoggedIn){
    authElement=<Auth/>
  }
  return (
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <img
              src="./src/images/logo.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="React Bootstrap logo"
            />
             Come Fly with me
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {authElement}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavbarComp;
