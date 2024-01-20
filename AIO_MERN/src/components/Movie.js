// Movie.js
import React, { useEffect, useState } from 'react';
import Navbar_ from './Navbar_';


function Movie() {
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

  const [totalAmount, setTotalAmount] = useState(0);

  const handleButtonClick = (cat) => {
    setCats((prevCats) =>
      prevCats.map((prevCat) =>
        prevCat._id === cat._id
          ? { ...prevCat, count: prevCat.count + 1 }
          : prevCat
      )
    );
    setTotalAmount(totalAmount + cat.price);
  };

  return (
    <>
    <Navbar_/>
    <div className="movie-container">
      <div>
        <h1 className="movie-head">MOVIE PAGE</h1>
        <button className="movie-totalamount">Total Amount: {totalAmount}</button>
        {cats.map((cat) => (
          <div key={cat._id} className="movie-item">
            <img src={cat.image} alt="Movie" className="movie-image" />
            <h3 className="movie-price">Movie Name : {cat.movie}</h3>
            <h3 className="movie-price">Price : {cat.price}</h3>
            <h3 className="movie-price">Theater : {cat.theater}</h3>
            <h3 className="movie-price">Tickets : {cat.count}</h3>
            <h3><button onClick={() => handleButtonClick(cat)} className="add-ticket">
                Add Ticket
              </button>
            </h3>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Movie;
