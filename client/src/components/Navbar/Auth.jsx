import NavDropdown from "react-bootstrap/NavDropdown";
import React from 'react';
import jwt_decode from "jwt-decode";


const Auth = () => {
            
            var user = jwt_decode(localStorage.getItem('jwt'));
            console.log(user);
            return (  
            <NavDropdown title={"Welcome, "+user.name} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>{
                localStorage.removeItem("jwt")
                window.location.reload(false);
              }
                
                }>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          )
}
    
 
export default Auth;