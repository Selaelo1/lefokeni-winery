
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './NavbarComponent.css';

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar-custom">
      <Navbar.Brand href="#home" className="navbar-brand">Lefokeni Winery</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto navbar-nav">
          <Nav.Link href="#home" className="nav-link active">Home</Nav.Link>
          <Nav.Link href="#wines" className="nav-link">Wines</Nav.Link>
          <Nav.Link href="#events" className="nav-link">Events</Nav.Link>
          <Nav.Link href="#about" className="nav-link">About</Nav.Link>
          <Nav.Link href="#contact" className="nav-link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavbarComponent;


