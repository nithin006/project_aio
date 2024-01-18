

import React, { useState } from 'react';
import { Form, FormGroup } from 'react-bootstrap';
import axios from 'axios';

function MovieAdmin() {
  const [post, setPost] = useState({
    image: "",
    price: "",
  });

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      setPost((prev) => {
        return {
          ...prev,
          image: reader.result,
        };
      });
    };
  };

  const createPost = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8000/postmovie', post)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  return (
    <div className="movie-admin-container">
      <div className="movie-admin-main">
        <div className="movie-admin-form">
          <div className="movie-admin-text">Upload Here</div>
          <Form action="#">
            <FormGroup>
              <div className="movie-admin-input-row">
                <div className="movie-admin-input-data">
                  <Form.Control type="text" required name="price" value={post.price} onChange={handleChange} />
                  <div className="movie-admin-underline"></div>
                  <label htmlFor="price">Price</label>
                </div>
              </div>

              <div className="movie-admin-input-row">
                <div className="movie-admin-input-data">
                  <Form.Control
                    type="file"
                    name="image"
                    onChange={handleImageChange}
                    accept="image/*"
                    required
                  />
                  <img src={post.image} alt="Preview" className="movie-admin-preview-image" />
                </div>
              </div>

              <div className="movie-admin-input-row movie-admin-submit-btn">
                <div className="movie-admin-input-data">
                  <div className="movie-admin-inner"></div>
                  <Form.Control type="submit" value="Submit" onClick={createPost} />
                </div>
              </div>
            </FormGroup>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default MovieAdmin;
