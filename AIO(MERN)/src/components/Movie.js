// Movie.js
import React, { useEffect, useState } from 'react';

function Movie() {
  const [cats, setCats] = useState([
    {
      image: '',
      price: '',
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:8000/getmovie')
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  return (
    <div className="movie-container">
      <div>
        <h1>MOVIE PAGE</h1>
        {cats.map((cat) => (
          <div key={cat._id} className="movie-item">
            <h3 className="movie-price">Price: {cat.price}</h3>
            <img src={cat.image} alt="Movie" className="movie-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Movie;
