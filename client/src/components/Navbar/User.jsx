import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Navbar from "react-bootstrap/Navbar";


const User = () => {
    return ( <Navbar.Collapse id="navbar-dark-example " align="end">
          <Nav>
            <NavDropdown
              id="nav-dropdown-dark-example"
              title=" Username"
              menuVariant="dark"
            >
              <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">My Insurance</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>  );
}
 
export default User;