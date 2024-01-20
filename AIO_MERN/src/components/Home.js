import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Navbar, Nav } from 'react-bootstrap';
import Navbar_ from './Navbar_';

function Home() {
  const navItemsStyle = {
    marginLeft: 'auto',
  };

  return (
    <>
      <Navbar_/>
      <h1 >Home page</h1>

      {/* <p> this wed app is designed to order food, book Movies and search about cricket</p> */}
    </>
  );
}

export default Home;
