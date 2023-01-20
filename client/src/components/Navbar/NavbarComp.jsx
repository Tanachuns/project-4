import { Link } from "react-router-dom";

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import React from 'react';

    

import Login from '../Login/Login'
import Register from "../Register/Register";
import Auth from "./Auth"


function NavbarComp() {
  const [isLoggedIn,setIsLoggedIn] = React.useState(false)
  const [isReg,setIsReg] = React.useState(false)
  const [isAuth,setIsAuth] = React.useState(JSON.parse(localStorage.getItem('jwt'))!==null)
  const jwt = localStorage.getItem("jwt")

 

  React.useEffect(()=>{
    if(jwt){
      if(jwt.exp< new Date()){
        localStorage.removeItem('jwt')
      }
      else{
        setIsAuth(true)
      }
    }
    else{
      setIsAuth(false)
   }
  },[jwt])
            
  let authElement = (<><Nav.Link onClick={(e)=>{
    e.preventDefault() 
    setIsLoggedIn(true)}} href="#home">Login</Nav.Link>
    <Nav.Link onClick={(e)=>{
    e.preventDefault() 
    setIsReg(true)}} href="#reg">Register</Nav.Link></>)

  return (<>
    <Navbar bg="dark" variant='dark' expand="lg">
      <Container>
         <Link style={{textDecoration:"none"}} to="/">
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
          </Link>
      
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            {isAuth?<Auth/>:authElement}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Login reg={() => setIsReg(true)} show={isLoggedIn} onHide={() => setIsLoggedIn(false)}/>
    <Register show={isReg} onHide={() => setIsReg(false)}/>
    </>
  )
}

export default NavbarComp;
