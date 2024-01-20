
import React, { useEffect, useState } from 'react';
import AdminNav from './AdminNav';
import { Button, Form } from "react-bootstrap";
import axios from "axios"

function AdminFoodPage() {
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

  const deletePost = (id) => {
    console.log("delete------food-------qwerty");
    console.log(id);

    axios
      .delete(`http://localhost:8000/deletefood/${id}`)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));

  };

  return (
    <>
    <AdminNav/>
    <div className="food-container">
      <div>
        <h1>FOOD PAGE</h1>
        {cats.map((cat) => (
          <div key={cat._id} className="food-item">
            <img src={cat.image} alt="Food" className="food-image" />
            <h5 className="food-price">Hotel : {cat.hotel}</h5>
            <h4 className="food-price">FoodType : {cat.foodType}</h4>
            <h3 className="food-price">Price : {cat.price}</h3>
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

export default AdminFoodPage;
