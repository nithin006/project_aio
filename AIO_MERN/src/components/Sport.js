// Sport.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Navbar_ from './Navbar_';

function Sport() {
  const [seriesData, setSeriesData] = useState([]);
  const [type, setType] = useState('');

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: `https://api.cricapi.com/v1/series?apikey=43f271d9-df6b-49c9-9be6-10682af5148e&search=${type}`,
    };

    try {
      const response = await axios.request(options);
      setSeriesData(response.data.data);
      console.log(response.data.data)
    } catch (error) {
      console.error(error);
    }
  };

  const handleInputChange = (e) => {
    setType(e.target.value);
  };

  const handleButtonClick = () => {
    fetchData();
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchData();
    }
  };

  return (
    <>
    <Navbar_/>
    <div className="sport-container">
      <h1>SPORT PAGE</h1>
      <h4>Enter cricket type </h4>
      <div className="sport-input-container">
        <label htmlFor="typeInput">Enter Type:</label>
        <input
          type="text"
          id="typeInput"
          className="sport-input"
          value={type}
          onChange={handleInputChange}
          onKeyPress={handleKeyPress}
        />
        <button className="sport-button" onClick={handleButtonClick}>
          Fetch Data
        </button>
      </div>
      <div className="sport-series-container">
        <h2>Cricket Series Information</h2>
        <ul>
          {seriesData.map((series) => (
           
            <li key={series.id} className="sport-series-item">
              <p>Name: {series.name}</p>
              <p>Start Date: {series.startDate}</p>
              <p>End Date: {series.endDate}</p>
              <p>Matches: {series.matches}</p>
              <p>ODI Matches: {series.odi}</p>
              <p>T20 Matches: {series.t20}</p>
              <p>Test Matches: {series.test}</p>
              {/* Add more fields as needed */}
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  );
}

export default Sport;
