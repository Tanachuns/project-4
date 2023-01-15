import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Stack from 'react-bootstrap/Stack';

import User from "./User";


function NavbarComp() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="justify-content-end">
      <Container className="justify-content-end">
          <Navbar.Brand href="/">LOGO</Navbar.Brand>
          <User/>
          
      </Container>
    </Navbar>
  );
}

export default NavbarComp;
