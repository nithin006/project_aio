import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components as needed

function Admin() {
  const navItemsStyle = {
    marginLeft: 'auto', // Align items to the right
  };

  return (
    <Navbar bg="light" shadow="lg" expand="lg">
      <Navbar.Brand style={{ fontSize: '24px', color: 'blue' }} href="#home">
        Admin Page
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={navItemsStyle}>
          <Nav.Link href="/foodAdmin">Food</Nav.Link>
          <Nav.Link href="/movieAdmin"> <i className="bi bi-film"></i> Movie</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Admin;
