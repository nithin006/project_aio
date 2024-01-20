import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Home from './components/Home';
import Food from './components/Food';
import Sport from './components/Sport';
import Movie from './components/Movie';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin';
import FoodAdmin from './components/FoodAdmin';
import MovieAdmin from './components/MovieAdmin';

import AdminFoodPage from './components/AdminFoodPage';
import AdminMoviePage from './components/AdminMoviePage';

import Protected from './components/Protected';

import './App.css'

const App = () => {

return (
  <Router>
    <Routes>
      <Route path="/register" element={<Register />} />
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Protected><Home /></Protected>} />
      <Route path="/food" element={<Protected><Food /></Protected>} />
      <Route path="/sport" element={<Protected><Sport /></Protected>} />
      <Route path="/movie" element={<Protected><Movie /></Protected>} />

      <Route path="/admin" element={<Protected><Admin /></Protected>} />
      <Route path="/foodadmin" element={<Protected><FoodAdmin /></Protected>} />
      <Route path="/movieadmin" element={<Protected><MovieAdmin /></Protected>} />

      <Route path="/adminfoodpage" element={<Protected><AdminFoodPage /></Protected>} />
      <Route path="/adminmoviepage" element={<Protected><AdminMoviePage /></Protected>} />

    </Routes>
  </Router>
);
};

export default App;
