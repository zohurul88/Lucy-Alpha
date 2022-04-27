import {
  Navbar,
  Nav,
  NavItem,
  NavbarBrand,
  NavbarToggler,
  Collapse,
} from "reactstrap";
import { NavLink } from "react-router-dom";

function MainMenu() {
  return (
    <Navbar container="fluid" expand="md">
      <NavbarBrand href="/">Lucy</NavbarBrand>
      <NavbarToggler></NavbarToggler>
      <Collapse isOpen={false} navbar>
        <Nav className="ml-auto" navbar>
          <NavItem active={false}>
            <NavLink className="nav-link" to="/landing">
              Landing Page
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/login">
              Login
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink className="nav-link" to="/pricing">
              Pricing
            </NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Navbar>
  );
}

export default MainMenu;
