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
          <p>Rain:<br></br><br></br>{weather.current.precip_mm} mm<br></br>{weather.current.precip_in} in</p>
          <p>Temperature:<br></br><br></br>{weather.current.temp_c} °C<br></br>Feels Like: {weather.current.feelslike_c} °C<br></br><br></br>{weather.current.temp_f} °F<br></br>Feels Like: {weather.current.feelslike_f} °F<br></br><br></br>Humidity: {weather.current.humidity}</p>
          <p>UV: {weather.current.uv}</p>
          <p>Condition: {weather.current.condition.text} - {weather.current.cloud} %</p>

          <p>Wind:<br></br><br></br>{weather.current.wind_mph} mph<br></br>{weather.current.wind_mph} kph<br></br><br></br>Gust: <br></br><br></br>{weather.current.gust_mph} mph<br></br>{weather.current.gust_mph} kph<br></br><br></br>Direction: {weather.current.wind_dir} - {weather.current.wind_degree} degrees</p>

          <p>Visibility:<br></br><br></br>{weather.current.vis_miles} miles<br></br>{weather.current.vis_km} km</p>


          <p>Pressure:<br></br><br></br>{weather.current.pressure_mb} mb<br></br>{weather.current.pressure_in} in</p>
          
        </div>
      )}
    </div>
  );
}

export default App;
