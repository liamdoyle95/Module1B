import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('London');
  
  // API key for weatherapi.com
  const apiKey = '836a8e5b3c2245329ac232331232202';
  
  // Weather API URL
  const apiUrl = 'https://api.weatherapi.com/v1/current.json';
  
  // Function to fetch weather data from API
  const fetchWeather = async (location) => {
    // Construct the API URL with the query string
    const query = queryString.stringify({ key: apiKey, q: location });
    const url = `${apiUrl}?${query}`;
    
    // Fetch the data from the API
    const response = await fetch(url);
    const data = await response.json();
    
    // Update the state with the weather data
    setWeather(data);
  };
  
  // Fetch weather data when the component mounts and when the location changes
  useEffect(() => {
    fetchWeather(location);
  }, [location]);
  
  return (
    <div>
      <h1>Weather for {location}</h1>
      
      {/* Dropdown menu for selecting location */}
      <select value={location} onChange={(event) => setLocation(event.target.value)}>
        <option value="London">London</option>
        <option value="New York">New York</option>
        <option value="Sydney">Sydney</option>
      </select>
      
      {/* Display the weather data */}
      {weather && (
        <div>
          <p>Last Updated: {weather.current.last_updated}</p>
          <p>Temperature:<br></br><br></br>{weather.current.temp_c} °C<br></br>{weather.current.temp_f} °F</p>

          
          <p>Condition: {weather.current.condition.text}</p>
          
        </div>
      )}
    </div>
  );
}

export default App;
