import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import 'bootstrap-icons/font/bootstrap-icons.css'; // Import Bootstrap Icons CSS
import { Navbar, Nav } from 'react-bootstrap'; // Import Bootstrap components as needed
import AdminNav from './AdminNav';

function Admin() {
  const navItemsStyle = {
    marginLeft: 'auto', // Align items to the right
  };

  return (
    <>
      <AdminNav/>
      <h1>Admin Page</h1>
    </>
  );
}

export default Admin;
