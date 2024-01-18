import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Food from './components/Food';
import Sport from './components/Sport';
import Movie from './components/Movie';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin';
import FoodAdmin from './components/FoodAdmin';
import MovieAdmin from './components/MovieAdmin';

import './App.css'

const App = () => {


return (
  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Home />} />
      <Route path="/food" element={<Food />} />
      <Route path="/sport" element={<Sport />} />
      <Route path="/movie" element={<Movie />} />

      <Route path="/admin" element={<Admin />} />
      <Route path="/foodadmin" element={<FoodAdmin />} />
      <Route path="/movieadmin" element={<MovieAdmin />} />



      
    </Routes>
  </Router>
);
};

export default App;
