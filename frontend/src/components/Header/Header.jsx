import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import AuthService from "../../services/AuthService";

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  const user = AuthService.getUser();

  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark" expand="lg" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/">
            RootToRoofOrganics
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link as={Link} to="/tools">
              Tools & Equipments{" "}
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About Us
            </Nav.Link>
          </Nav>
          <Nav>
            {user == null ? (
              <>
                <Nav.Link as={Link} to="/signup">
                  Sign Up
                </Nav.Link>
                <Nav.Link as={Link} to="/signin">
                  Sign In
                </Nav.Link>
              </>
            ) : (
              <NavDropdown
                title={<FontAwesomeIcon icon={faUser} />}
                id="basic-nav-dropdown"
                show={isDropdownOpen}
                onMouseEnter={toggleDropdown}
                onMouseLeave={toggleDropdown}
              >
                <NavDropdown.Item as={Link} to="/profile">
                  Profile
                </NavDropdown.Item>
                <NavDropdown.Item href="/#settings">Settings</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/" onClick={AuthService.logout}>
                  Sign Out
                </NavDropdown.Item>
              </NavDropdown>
            )}

            <Nav.Link as={Link} to="/wishlist" className="wishlist-icon">
              <FontAwesomeIcon icon={faHeart} />
            </Nav.Link>

            <Nav.Link as={Link} to="/cart" className="cart-icon">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Header;
