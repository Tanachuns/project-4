import NavDropdown from "react-bootstrap/NavDropdown";
import React from 'react';
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";

import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    

const Auth = () => {
            const user = jwt_decode("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU3RhcmsiLCJpZCI6MSwiaXNfYWRtaW4iOnRydWUsImlhdCI6MTY3NDEyOTA0MywiZXhwIjoxNjc0MTMyNjQzfQ.3jrUgzjOmKHUUi2C4EWXfJQRUgLqtn45IR57KjcrUzM");
             const logoutSuccess = () =>{
              console.log("test");
              toast.success("Success", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500
      });};
            return (  <>
            <NavDropdown title={"Welcome, "+user.name} id="basic-nav-dropdown">
              <Link style={{textDecoration:"none"}} to="/user/insurance">
              <NavDropdown.ItemText >
                  My Insurance
              </NavDropdown.ItemText> 
              </Link>
              <Link style={{textDecoration:"none"}} to="/user/detail">
              <NavDropdown.ItemText >
                  My Profile
              </NavDropdown.ItemText>
              </Link>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>{
                localStorage.removeItem("jwt")
                logoutSuccess()
                setTimeout(() => {
                  window.location.href='/';
                }, 2000);
              }
                }>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
</>
          )
}
    
 
export default Auth;