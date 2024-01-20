
import React, { useEffect, useState } from 'react';
import Navbar_ from './Navbar_';

function Food() {
  const [cats, setCats] = useState([
    {
      image: '',
      price: '',
      hotel: "",
      foodType: ''
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:8000/getfood')
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  return (
    <>
    <Navbar_/>
    <div className="food-container">
      <div>
        <h1>FOOD PAGE</h1>
        {cats.map((cat) => (
          <div key={cat._id} className="food-item">
            <img src={cat.image} alt="Food" className="food-image" />
            <h5 className="food-price">Hotel : {cat.hotel}</h5>
            <h4 className="food-price">Food Type : {cat.foodType}</h4>
            <h3 className="food-price">Price : {cat.price}</h3>
            
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default Food;
