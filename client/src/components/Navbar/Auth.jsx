import NavDropdown from "react-bootstrap/NavDropdown";
import React from 'react';
import jwt_decode from "jwt-decode";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

    

const Auth = () => {
  
            var user = jwt_decode(localStorage.getItem('jwt'));
             const logoutSuccess = () =>{
              console.log("test");
              toast.success("Success", {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 1500
      });};
            return (  <>
            <NavDropdown title={"Welcome, "+user.name} id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">My Insurance</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                My Profile
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={()=>{
                localStorage.removeItem("jwt")
                logoutSuccess()
                setTimeout(() => {
                  window.location.reload(false);
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