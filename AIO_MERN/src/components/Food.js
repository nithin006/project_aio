
import React, { useEffect, useState } from 'react';
import Navbar_ from './Navbar_';

// Fetches and displays food items from the backend
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
    // Retrieves food data from the backend using the fetch API
    fetch('http://localhost:8000/getfood')
      .then((res) => res.json())
      .then((jsonRes) => setCats(jsonRes));
  }, []);

  return (
    <>
    
    <Navbar_/>
    <div className="food-container">
      <div>
        <h1 className="food-head">FOOD PAGE</h1>
        {/* •	Maps over the fetched data to display individual food items */}
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
