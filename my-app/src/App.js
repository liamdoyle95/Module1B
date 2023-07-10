import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('London');

  const apiKey = 'a4cd8dd2af9b4a37997210906231007';
  const apiUrl = 'https://api.weatherapi.com/v1/current.json';
  
  const fetchWeather = async (location) => {
    const query = queryString.stringify({ key: apiKey, q: location });
    const url = `${apiUrl}?${query}`;
    const response = await fetch(url);
    const data = await response.json();
    setWeather(data);
  };
  
  useEffect(() => {
    fetchWeather(location);
  }, [location]);
  
  return (
    <div>
      <h1>Weather for {location}</h1>
      <p>Last Updated: {weather.current.last_updated}</p>
      
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
          <p>Country: {weather.location.country}</p>
          <p>Region: {weather.location.region}</p>
          <p>Lat: {weather.location.lat}</p>
          <p>Lon: {weather.location.lon}</p>
          <p>Local Time: {weather.location.localtime}</p>
          <p>Time Zone: {weather.location.tz_id}</p>

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