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

function Header() {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

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
            <Nav.Link as={Link} to="/blog">
              Blog
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link as={Link} to="/signup">
              Sign Up
            </Nav.Link>
            <Nav.Link as={Link} to="/signin">
              Sign In
            </Nav.Link>

            <NavDropdown
              title={<FontAwesomeIcon icon={faUser} />}
              id="basic-nav-dropdown"
              show={isDropdownOpen}
              onMouseEnter={toggleDropdown}
              onMouseLeave={toggleDropdown}
            >
              <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
              <NavDropdown.Item href="/#settings">Settings</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#signout">Sign Out</NavDropdown.Item>
            </NavDropdown>

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
