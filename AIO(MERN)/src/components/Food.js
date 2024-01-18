// Food.js
import React, { useEffect, useState } from 'react';

function Food() {
  const [cats, setCats] = useState([
    {
      image: '',
      price: '',
    },
  ]);

  useEffect(() => {
    fetch('http://localhost:8000/getfood')
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  return (
    <div className="food-container">
      <div>
        <h1>FOOD PAGE</h1>
        {cats.map((cat) => (
          <div key={cat._id} className="food-item">
            <h3 className="food-price">Price: {cat.price}</h3>
            <img src={cat.image} alt="Food" className="food-image" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Food;
