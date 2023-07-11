import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('London');
  
  // API key for weatherapi.com
  const apiKey = '14fd6cf7039b4fd68cf213908231007';
  
  // Weather API URLs
  const currentApiUrl = 'https://api.weatherapi.com/v1/current.json';
  const forecastApiUrl = 'https://api.weatherapi.com/v1/forecast.json';
  
  // Function to fetch weather data from API
  const fetchWeather = async (location) => {
    // Construct the API URL with the query string
    const query = queryString.stringify({ key: apiKey, q: location });
    const currentUrl = `${currentApiUrl}?${query}`;
    const forecastUrl = `${forecastApiUrl}?${query}&days=3`;
    
    // Fetch the current weather data from the API
    const currentResponse = await fetch(currentUrl);
    const currentData = await currentResponse.json();
    
    // Fetch the forecast data from the API
    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();
    
    // Combine current and forecast data into a single object
    const combinedData = {
      current: currentData.current,
      forecast: forecastData.forecast,
      location: currentData.location
    };
    
    // Update the state with the weather data
    setWeather(combinedData);
  };
  
  // Fetch weather data when the component mounts and when the location changes
  useEffect(() => {
    fetchWeather(location);
  }, [location]);
  
  return (
    <div>
      <h1>Weather for {location}</h1>
      
      <select value={location} onChange={(event) => setLocation(event.target.value)}>
      <option value="Ascension Islands">Ascension Islands</option>
      <option value="Akrotiri, Limassol">Akrotiri</option>
      <option value="Benson, UK">Benson</option>
      <option value="Boscombe Down, UK">Boscombe Down</option>
      <option value="Boulmer, UK">Boulmer</option>
      <option value="Brize Norton, UK">Brize Norton</option>
      <option value="Cranwell, UK">Cranwell</option>
      <option value="Coningsby, UK">Coningsby</option>
      <option value="Cosford, UK">Cosford</option>
      <option value="Digby, UK">Digby</option>
      <option value="Falkland Islands">Falkland Islands</option>
      <option value="Flying dales, UK">Flyingdales</option>
      <option value="Gibraltar">Gibraltar</option>
      <option value="Halton, UK">Halton</option>
      <option value="Henlow, UK">Henlow</option>
      <option value="High Wycombe, UK">High Wycombe</option>
      <option value="Honington,UK">Honington</option>
      <option value="Lakenheath, UK">Lakenheath</option>
      <option value="Leeming, UK">Leeming</option>
      <option value="Leuchars, UK">Leuchars</option>
      <option value="Lossiemouth, UK">Lossiemouth</option>
      <option value="Marham,UK">Marham</option>
      <option value="Menwith Hill, UK">Menwith Hill</option>
      <option value="Northolt, UK">Northolt</option>
      <option value="Odiham, UK">Odiham</option>
      <option value="Scampton, UK">Scampton</option>
      <option value="Shawbury, UK">Shawbury</option>
      <option value="Spadeadam, UK">Spadeadam</option>
      <option value="St Athan, UK">St Athan</option>
      <option value="St Mawgan, UK">St Mawgan</option>
      <option value="Syerston, UK">Syerston</option>
      <option value="Valley, UK">Valley</option>
      <option value="Waddington, UK">Waddington</option>
      <option value="Wittering, UK">Wittering</option>
      <option value="Woodvale, UK">Woodvale</option>
      <option value="Wyton, UK">Wyton</option>
      </select>
   
      {weather && (
        <div>
          {/* Display current weather data */}
          <h3>Current Weather</h3>
          <h3>Location</h3>
          <p>{weather.location.region}, {weather.location.country}</p>
          <p>Lat: {weather.location.lat}, Long: {weather.location.lon}</p>
          <p>Local Time: {weather.location.localtime}, {weather.location.tz_id}</p>
         
         <br></br>

          <p><strong>Last Updated:</strong> {weather.current.last_updated}</p>
          <br></br>
          <p>
          <strong>Temperature:</strong>
            <br></br><br></br>{weather.current.temp_c} °C | Feels Like: {weather.current.feelslike_c} °C<br></br><br></br>{weather.current.temp_f} °F | Feels Like: {weather.current.feelslike_f} °F
            
            <br></br><br></br>
          
            <strong>Rain:</strong> {weather.current.precip_mm} mm | {weather.current.precip_in} in
            
            <br></br><br></br>
            
            <strong>Humidity:</strong> {weather.current.humidity}
            
            <br></br><br></br>
            
            <strong>UV:</strong> {weather.current.uv}
            
            <br></br><br></br>
          
            <strong>Condition:</strong> {weather.current.condition.text} - {weather.current.cloud} %
            
            <br></br><br></br>
            
            <strong>Wind Speed:</strong> {weather.current.wind_mph} mph | {weather.current.wind_mph} kph
            
            <br></br><br></br>
            
            <strong>Wind Gust:</strong> {weather.current.gust_mph} mph | {weather.current.gust_mph} kph
            
            <br></br><br></br>
            
            <strong>Wind Direction:</strong> {weather.current.wind_dir} - {weather.current.wind_degree} degrees
            
            <br></br><br></br>
            
            <strong>Visibility:</strong> {weather.current.vis_miles} miles | {weather.current.vis_km} km
            
            <br></br><br></br>
            
            <strong>Pressure:</strong> {weather.current.pressure_mb} mb | {weather.current.pressure_in} in

            </p>
          
          <br></br><br></br>
          {/* Display forecast data */}
          <h3>Forecast</h3>
          {weather.forecast.forecastday.map((day) => (
            <div key={day.date}>
              <br></br><br></br>
              <h4>{day.date}</h4>
              <strong>Temperature:</strong>
            <br></br><br></br>Average: {day.day.avgtemp_c} °C | Min: {day.day.mintemp_c} °C | Max: {day.day.maxtemp_c} °C<br></br><br></br>Average: {day.day.avgtemp_f} °F | Min: {day.day.mintemp_f} °F | Max: {day.day.maxtemp_f} °F
              
              <br></br><br></br>
              
              <strong>Rain:</strong> {day.day.totalprecip_mm} mm | {day.day.totalprecip_in} in
              
              <br></br><br></br>

<strong>Snow:</strong> {day.day.totalsnow_cm} cm

<br></br><br></br>

              <strong>Windspeed:</strong> Max: {day.day.maxwind_mph} mph | {day.day.maxwind_kph} kph

              <br></br><br></br>

              <strong>Visibility:</strong> Average: {day.day.avgvis_miles} miles | {day.day.avgvis_km} km
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;
