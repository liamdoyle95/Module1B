import React, { useEffect, useState } from 'react';
import axios from 'axios';

import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('London');
  const apiKey = '1f35643112b0237f679250d783dd2abf';
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=imperial`;

  // fetch weather data from API
  const fetchWeather = () => {
    axios
      .get(apiUrl)
      .then((response) => {
        setWeather(response.data);
      })
      .catch((error) => {
        console.log('Error fetching weather data:', error);
      });
  };

  useEffect(() => {
    fetchWeather();
  }, [location]);

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  return (
    <div className="App">
      <h1>Weather for {location}</h1>
      <div className="search">
        <input
          value={location}
          onChange={handleLocationChange}
          placeholder="Enter Location"
          type="text"
        />
      </div>
      {weather && (
        <div className="weather-details">
          <div className="weather-info">
            <p>Temperature: {weather.main.temp.toFixed()} °F</p>
            <p>Feels Like: {weather.main.feels_like.toFixed()} °F</p>
            <p>Humidity: {weather.main.humidity.toFixed()}%</p>
            <p>Wind Speed: {weather.wind.speed.toFixed()} MPH</p>
            <p>Condition: {weather.weather[0].main}</p>
            <img
              src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
              alt="Weather Icon"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
