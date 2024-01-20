import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav } from 'react-bootstrap';

function Navbar_() {
  const navItemsStyle = {
    marginLeft: 'auto',
  };

  // Contains navigation links for 'Food', 'Sport', and 'Movie'
  return (
    <Navbar bg="light" shadow="lg" expand="lg" fixed="top">
      <Navbar.Brand href="/home">HOME</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={navItemsStyle}>
          <Nav.Link href="/food">Food</Nav.Link>
          <Nav.Link href="/sport">Sport</Nav.Link>
          <Nav.Link href="/movie"> <i className="bi bi-film"></i> Movie</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Navbar_;
