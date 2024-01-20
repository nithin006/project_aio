// Movie.js
import React, { useEffect, useState } from 'react';
import AdminNav from './AdminNav';

import { Button, Form } from "react-bootstrap";
import axios from "axios"


function AdminMoviePage() {
  const [cats, setCats] = useState([
    {
      image: '',
      price: '',
      theater: '',
      movie: '',
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:8000/getmovie')
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  const deletePost = (id) => {
    console.log("delete------food-------qwerty");
    console.log(id);

    axios
      .delete(`http://localhost:8000/deletemovie/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  };

  return (
    <>
    <AdminNav/>
    <div className="movie-container">
      <div>
        <h1>MOVIE PAGE</h1>
        {cats.map((cat) => (
          <div key={cat._id} className="movie-item">
            <img src={cat.image} alt="Movie" className="movie-image" />
            <h3 className="movie-price">Movie: {cat.movie}</h3>
            <h3 className="movie-price">Price: {cat.price}</h3>
            <h5 className="movie-place">Theater: {cat.theater}</h5>
            <Button
                    onClick={() => deletePost(cat._id)}
                    variant="outline-danger"
                    style={{ width: "100%" }}
                  >
                    DELETE
            </Button>
            
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default AdminMoviePage;
