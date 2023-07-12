import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('London');
  const [activeView, setActiveView] = useState('current');
  const [parametersVisible, setParametersVisible] = useState(false);
  const [thunderstormWarnings, setThunderstormWarnings] = useState(null);
  const [windWarnings, setWindWarnings] = useState(null);
  const [egrWarnings, setEgrWarnings] = useState(null);
  
  const handleCloseWarning = () => {
    setThunderstormWarnings(false);
    setWindWarnings(false);
    setEgrWarnings(false);
  };

  const handleCloseParameters = () => {
    setParametersVisible(false);
  };

  const appClassName = thunderstormWarnings || windWarnings || egrWarnings ? 'app app-warning' : 'app';

  
  const toggleParametersVisibility = () => {
    setParametersVisible(!parametersVisible);
  };

  // API key for weatherapi.com
  const apiKey = '14fd6cf7039b4fd68cf213908231007';
  // Weather API URLs
  const currentApiUrl = 'https://api.weatherapi.com/v1/current.json';
  const forecastApiUrl = 'https://api.weatherapi.com/v1/forecast.json';

  const fetchWeather = async (location) => {
    const query = queryString.stringify({ key: apiKey, q: location });
    const currentUrl = `${currentApiUrl}?${query}`;
    const forecastUrl = `${forecastApiUrl}?${query}&days=3`;

    const currentResponse = await fetch(currentUrl);
    const currentData = await currentResponse.json();

    const forecastResponse = await fetch(forecastUrl);
    const forecastData = await forecastResponse.json();

    const combinedData = {
      current: currentData.current,
      forecast: forecastData.forecast,
      location: currentData.location,
    };

    const alertsQuery = queryString.stringify({ key: apiKey, q: location, alerts: 'yes' });
    const alertsUrl = `${currentApiUrl}?${alertsQuery}`;
    const alertsResponse = await fetch(alertsUrl);
    const alertsData = await alertsResponse.json();
    const thunderstormWarnings = alertsData.alert;

    setThunderstormWarnings(thunderstormWarnings);
    setWeather(combinedData);
  };

  useEffect(() => {
    fetchWeather(location);
  }, [location]);

  const formatTime = (timeString) => {
    const options = { hour: 'numeric', minute: 'numeric', hour12: true };
    return new Date(timeString).toLocaleTimeString(undefined, options);
  };

  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const formatDateAndTime = (dateString) => {
    const options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const simulateThunderstormAlert = () => {
    const sampleWarnings = [
      { id: 1, title: 'Severe Thunderstorm Warning' },
      { id: 2, title: 'Flash Flood Warning' },
    ];
    setThunderstormWarnings(sampleWarnings);
  };

  const simulateWindAlert = () => {
    const sampleWarnings = [
      { id: 1, title: 'High Winds' },
      { id: 2, title: 'High Gusting Winds' },
    ];
    setWindWarnings(sampleWarnings);
  };

  const simulateEgrAlert = () => {
    const sampleWarnings = [
      { id: 1, title: 'EGR Limits Met' },
      { id: 2, title: 'EGR Limits' },
    ];
    setEgrWarnings(sampleWarnings);
  };
  return (
    <div className={appClassName}> 
      {weather && (
        <div>
          <div className="toggle-buttons">
            <button className={activeView === 'current' ? 'active' : ''} onClick={() => setActiveView('current')}>
              Current Weather
            </button>
            <button className={activeView === 'forecast' ? 'active' : ''} onClick={() => setActiveView('forecast')}>
              Forecast
            </button>
          </div>

          <br />

          <select
            className="select-location"
            value={location}
            onChange={(event) => setLocation(event.target.value)}
          >
            <option value="London">Select a location</option>
            <option value="Akrotiri, Limassol">Akrotiri</option>
      <option value="Ascension Islands">Ascension Islands</option>
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

          <br />

          <div className="weather-container">
          <button className="simulate-button" onClick={simulateThunderstormAlert}>
  Simulate Thunderstorm Alert
</button>

<br></br>

<button className="simulate-button" onClick={simulateWindAlert}>
  Simulate Wind Alert
</button>

<br></br>

<button className="simulate-button" onClick={simulateEgrAlert}>
  Simulate EGR Limits Alert
</button>

           
            <h3 className="parameters" onClick={toggleParametersVisibility}>
              Aircraft Parameters
            </h3>
            {parametersVisible && (
              <>
                <br />
                <h3>Typhoon Limits</h3>
              <div className="weather-details">
              <p><strong>Engine Ground Run</strong><br></br><br></br>
              Min Temp = X °C | X °F & Min Visabilty = X Metres</p>
              </div><br></br>
              <div className="weather-details">
              <p><strong>Wind Speed</strong><br></br><br></br>
              Divide the wind speed given in MPH by 1.15 to obtain the equivelent speed in KTS.<br></br>
              Wind Direction refers to where wind is coming from.
              <br></br><br></br>
  
  <table className="title">
<thead>
<tr>
<th></th>
<th>Crosswind</th>
<th>Tailwind</th>
<th>Headwind</th>
</tr>
</thead>
<tbody>
<tr>
<td><strong>Canopy Opening</strong></td>
<td>45</td>
<td>60</td>
<td>60</td>
</tr>
<tr>
<td><strong>EGR</strong></td>
<td>N/A</td>
<td>30</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>Towing</strong></td>
<td>45</td>
<td>N/A</td>
<td>N/A</td>
</tr>
<tr>
<td><strong>Landing / Take Off</strong></td>
<td>30</td>
<td>20</td>
<td>40</td>
</tr>
<tr>
<td><strong>Taxiing</strong></td>
<td>Cleared up </td>
<td>to 45 KTS </td>
<td>surface wind</td>
</tr>
</tbody>
</table>
<br></br><br></br>
If Winds are above 60 KTS: Put / Leave in Hangar
<br></br><br></br>
If Winds are above 45 KTS: Put / Leave in Hangar or turn into wind
<br></br><br></br>
If winds are above 40 KTS: Do NOT use A/C steps
<br></br><br></br>
If winds are above 39 KTS: Do NOT open Radome
<br></br><br></br>
If winds are above 35 KTS: Do NOT open Panels 
  </p>
              </div>
              </>
        )}        
            </div>


          <div className="weather-container">
            {activeView === 'current' && (
              <div className="current-weather">
                <h3 className="title">Current Weather for {location}</h3>
                <p className="subtitle">{weather.location.region}, {weather.location.country} | Lat: {weather.location.lat}, Long: {weather.location.lon} | Local Time: {formatTime(weather.location.localtime)}, {weather.location.tz_id}</p>
          <p className="last-updated"><strong>Last Updated:</strong> {formatDateAndTime(weather.current.last_updated)}</p>
          <br></br>
          <p className="weather-details">
          <strong>Temperature</strong>
            <br></br>{weather.current.temp_c} °C | Feels Like: {weather.current.feelslike_c} °C<br></br>{weather.current.temp_f} °F | Feels Like: {weather.current.feelslike_f} °F
            
            <br></br><br></br>

            <strong>Visibility</strong><br></br>{weather.current.vis_miles} miles | {weather.current.vis_km} km

            <br></br><br></br>
            
            <strong>Wind Speed</strong><br></br>{weather.current.wind_mph} mph
            
            <br></br><br></br>
            
            <strong>Wind Gust</strong><br></br>{weather.current.gust_mph} mph 
            
            <br></br><br></br>
            
            <strong>Wind Direction</strong><br></br>{weather.current.wind_dir} - {weather.current.wind_degree} degrees

            <br></br><br></br>
          
            <strong>Rain</strong> 
            <br></br>{weather.current.precip_mm} mm | {weather.current.precip_in} in
            
            <br></br><br></br>
          
            <strong>Condition</strong><br></br>{weather.current.condition.text} - {weather.current.cloud} %
            
            <br></br><br></br>
            
            <strong>Humidity</strong> 

            <br></br>{weather.current.humidity}
            
            <br></br><br></br>
            
            <strong>UV</strong><br></br>{weather.current.uv}
            
            <br></br><br></br>
            
            <strong>Pressure</strong><br></br>{weather.current.pressure_mb} mb | {weather.current.pressure_in} in

            </p>

              </div>
            )}
            {activeView === 'forecast' && (
              <div className="forecast">
                <h3 className="title">Forecast for {location}</h3>
                <p className="subtitle">{weather.location.region}, {weather.location.country} | Lat: {weather.location.lat}, Long: {weather.location.lon} | Local Time: {formatTime(weather.location.localtime)}, {weather.location.tz_id}</p>
                {weather.forecast.forecastday.map((day) => (
                  <div className="weather-details" key={day.date}>
                            <h4>{formatDate(day.date)}</h4>
                            <br></br>
              <strong>Temperature</strong>
            <br></br>Avg {day.day.avgtemp_c} °C | Min {day.day.mintemp_c} °C | Max {day.day.maxtemp_c} °C<br></br>Avg {day.day.avgtemp_f} °F | Min {day.day.mintemp_f} °F | Max {day.day.maxtemp_f} °F

            <br></br><br></br>

<strong>Visibility (Avg)</strong><br></br>{day.day.avgvis_miles} miles | {day.day.avgvis_km} km

<br></br><br></br>

            <strong>Windspeed</strong><br></br>Max {day.day.maxwind_mph} mph

              <br></br><br></br>
              
              <strong>Rain</strong><br></br>{day.day.totalprecip_mm} mm | {day.day.totalprecip_in} in | {day.day.daily_chance_of_rain} % chance of {day.day.condition.text}
              <br></br><br></br>

<strong>Snow</strong><br></br>{day.day.totalsnow_cm} cm | {day.day.daily_chance_of_snow} % chance

<br></br><br></br>

              <strong>Humidity (Avg)</strong><br></br>{day.day.avghumidity}

              <br></br><br></br>

              <strong>UV</strong><br></br> {day.day.uv}

              <br></br><br></br>

<strong>Sunrise</strong> {day.astro.sunrise} | <strong>Sunset</strong> {day.astro.sunset}
</div>
                ))}


              </div>
            )}
          </div>

          {thunderstormWarnings && thunderstormWarnings.length > 0 && (
             <div className="alert">
          <div className="alert-content">
            <h4><strong>Thunderstorm Warning!</strong><br></br><br></br>STOP all Fuelling activities immediately.<br></br></h4>
            <button className="close-button" onClick={handleCloseWarning}>
            Close
            </button>
          </div>
        </div>
          )}

{windWarnings && windWarnings.length > 0 && (
             <div className="alert">
          <div className="alert-content">
            <h4><strong>Wind Warning!</strong><br></br><br></br>Refer to Wind Limits and STOP relevant activities immediately.<br></br></h4>
            <button className="close-button" onClick={handleCloseWarning}>
            Close
            </button>
          </div>
        </div>
          )}

{egrWarnings && egrWarnings.length > 0 && (
             <div className="alert">
          <div className="alert-content">
            <h4><strong>EGR Condition Limits!</strong><br></br><br></br>Low Visabilty + Low Temp = Icy Conditions<br></br><br></br>STOP EGR activities immediately!</h4>
            <button className="close-button" onClick={handleCloseWarning}>
            Close
            </button>
          </div>
        </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
