import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components as needed

function AdminNav() {
  const navItemsStyle = {
    marginLeft: 'auto', // Align items to the right
  };

  return (
    <Navbar bg="light" shadow="lg" expand="lg" fixed="top">
      <Navbar.Brand style={{ fontSize: '24px', color: 'blue' }} href="/admin">
        Admin
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto" style={navItemsStyle}>
        {/* <Nav.Link href="/home">Home</Nav.Link> */}
        <Nav.Link href="/adminfoodpage">Food</Nav.Link>
        <Nav.Link href="/adminmoviepage">Movie</Nav.Link>
          <Nav.Link href="/foodAdmin">PostFood</Nav.Link>
          <Nav.Link href="/movieAdmin"> <i className="bi bi-film"></i> PostMovie</Nav.Link>
          <Nav.Link href="/">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AdminNav;
