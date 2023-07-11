import React, { useEffect, useState } from 'react';
import queryString from 'query-string';

import './App.css';

function App() {
  const [weather, setWeather] = useState(null);
  const [location, setLocation] = useState('London');
  
  // API key for weatherapi.com
  const apiKey = '14fd6cf7039b4fd68cf213908231007';
  // TRIAL Ends on 08/Mar/2023
  
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
          <h3>Location</h3>
          <p>{weather.location.region}, {weather.location.country}</p>
          <p>Lat: {weather.location.lat}, Long: {weather.location.lon}</p>
         <br></br>
          {/* "name": "Waddington",
        "region": "Lincolnshire",
        "country": "United Kingdom",
        "lat": 53.17,
        "lon": -0.53,
        "tz_id": "Europe/London",
        "localtime_epoch": 1677115140,
        "localtime": "2023-02-23 1:19" */}
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
            
            <strong>Pressure:</strong> {weather.current.pressure_mb} mb | {weather.current.pressure_in} in</p>


{/* 
<p>Forecast</p> */}

{/* forecast": {
        "forecastday": [
            {
                "date": "2023-02-23",
                "date_epoch": 1677110400,
                "day": {
                    "maxtemp_c": 7.3,
                    "maxtemp_f": 45.1,
                    "mintemp_c": 2.0,
                    "mintemp_f": 35.6,
                    "avgtemp_c": 4.7,
                    "avgtemp_f": 40.4,
                    "maxwind_mph": 19.2,
                    "maxwind_kph": 31.0,
                    "totalprecip_mm": 2.5,
                    "totalprecip_in": 0.1,
                    "totalsnow_cm": 0.0,
                    "avgvis_km": 9.3,
                    "avgvis_miles": 5.0,
                    "avghumidity": 72.0,
                    "daily_will_it_rain": 1,
                    "daily_chance_of_rain": 83,
                    "daily_will_it_snow": 0,
                    "daily_chance_of_snow": 0,
                    "condition": {
                        "text": "Patchy rain possible",
                        "icon": "//cdn.weatherapi.com/weather/64x64/day/176.png",
                        "code": 1063
                    },
                    "uv": 1.0
                },
                "astro": {
                    "sunrise": "07:04 AM",
                    "sunset": "05:29 PM",
                    "moonrise": "08:28 AM",
                    "moonset": "10:03 PM",
                    "moon_phase": "Waxing Crescent",
                    "moon_illumination": "10",
                    "is_moon_up": 0,
                    "is_sun_up": 0

                    "hour": [
                      {
                          "time_epoch": 1677110400,
                          "time": "2023-02-23 00:00",
                          "temp_c": 5.2,
                          "temp_f": 41.4,
                          "is_day": 0,
                          "condition": {
                              "text": "Light drizzle",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/266.png",
                              "code": 1153
                          },
                          "wind_mph": 14.5,
                          "wind_kph": 23.4,
                          "wind_degree": 348,
                          "wind_dir": "NNW",
                          "pressure_mb": 1017.0,
                          "pressure_in": 30.03,
                          "precip_mm": 0.7,
                          "precip_in": 0.03,
                          "humidity": 90,
                          "cloud": 100,
                          "feelslike_c": 0.9,
                          "feelslike_f": 33.6,
                          "windchill_c": 0.9,
                          "windchill_f": 33.6,
                          "heatindex_c": 5.2,
                          "heatindex_f": 41.4,
                          "dewpoint_c": 3.7,
                          "dewpoint_f": 38.7,
                          "will_it_rain": 1,
                          "chance_of_rain": 74,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 2.0,
                          "vis_miles": 1.0,
                          "gust_mph": 21.5,
                          "gust_kph": 34.6,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677114000,
                          "time": "2023-02-23 01:00",
                          "temp_c": 4.9,
                          "temp_f": 40.8,
                          "is_day": 0,
                          "condition": {
                              "text": "Light drizzle",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/266.png",
                              "code": 1153
                          },
                          "wind_mph": 17.4,
                          "wind_kph": 28.1,
                          "wind_degree": 355,
                          "wind_dir": "N",
                          "pressure_mb": 1018.0,
                          "pressure_in": 30.05,
                          "precip_mm": 0.3,
                          "precip_in": 0.01,
                          "humidity": 92,
                          "cloud": 100,
                          "feelslike_c": 0.1,
                          "feelslike_f": 32.2,
                          "windchill_c": 0.1,
                          "windchill_f": 32.2,
                          "heatindex_c": 4.9,
                          "heatindex_f": 40.8,
                          "dewpoint_c": 3.7,
                          "dewpoint_f": 38.7,
                          "will_it_rain": 0,
                          "chance_of_rain": 64,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 2.0,
                          "vis_miles": 1.0,
                          "gust_mph": 25.5,
                          "gust_kph": 41.0,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677117600,
                          "time": "2023-02-23 02:00",
                          "temp_c": 5.3,
                          "temp_f": 41.5,
                          "is_day": 0,
                          "condition": {
                              "text": "Light drizzle",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/266.png",
                              "code": 1153
                          },
                          "wind_mph": 17.7,
                          "wind_kph": 28.4,
                          "wind_degree": 0,
                          "wind_dir": "N",
                          "pressure_mb": 1018.0,
                          "pressure_in": 30.07,
                          "precip_mm": 0.2,
                          "precip_in": 0.01,
                          "humidity": 84,
                          "cloud": 100,
                          "feelslike_c": 0.6,
                          "feelslike_f": 33.1,
                          "windchill_c": 0.6,
                          "windchill_f": 33.1,
                          "heatindex_c": 5.3,
                          "heatindex_f": 41.5,
                          "dewpoint_c": 2.9,
                          "dewpoint_f": 37.2,
                          "will_it_rain": 0,
                          "chance_of_rain": 62,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 2.0,
                          "vis_miles": 1.0,
                          "gust_mph": 26.6,
                          "gust_kph": 42.8,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677121200,
                          "time": "2023-02-23 03:00",
                          "temp_c": 4.9,
                          "temp_f": 40.8,
                          "is_day": 0,
                          "condition": {
                              "text": "Light drizzle",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/266.png",
                              "code": 1153
                          },
                          "wind_mph": 17.2,
                          "wind_kph": 27.7,
                          "wind_degree": 0,
                          "wind_dir": "N",
                          "pressure_mb": 1019.0,
                          "pressure_in": 30.08,
                          "precip_mm": 0.4,
                          "precip_in": 0.02,
                          "humidity": 81,
                          "cloud": 100,
                          "feelslike_c": 0.1,
                          "feelslike_f": 32.2,
                          "windchill_c": 0.1,
                          "windchill_f": 32.2,
                          "heatindex_c": 4.9,
                          "heatindex_f": 40.8,
                          "dewpoint_c": 2.0,
                          "dewpoint_f": 35.6,
                          "will_it_rain": 0,
                          "chance_of_rain": 65,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 2.0,
                          "vis_miles": 1.0,
                          "gust_mph": 26.6,
                          "gust_kph": 42.8,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677124800,
                          "time": "2023-02-23 04:00",
                          "temp_c": 4.1,
                          "temp_f": 39.4,
                          "is_day": 0,
                          "condition": {
                              "text": "Patchy rain possible",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
                              "code": 1063
                          },
                          "wind_mph": 15.9,
                          "wind_kph": 25.6,
                          "wind_degree": 0,
                          "wind_dir": "N",
                          "pressure_mb": 1019.0,
                          "pressure_in": 30.09,
                          "precip_mm": 0.1,
                          "precip_in": 0.0,
                          "humidity": 83,
                          "cloud": 99,
                          "feelslike_c": -0.7,
                          "feelslike_f": 30.7,
                          "windchill_c": -0.7,
                          "windchill_f": 30.7,
                          "heatindex_c": 4.1,
                          "heatindex_f": 39.4,
                          "dewpoint_c": 1.4,
                          "dewpoint_f": 34.5,
                          "will_it_rain": 1,
                          "chance_of_rain": 85,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 25.7,
                          "gust_kph": 41.4,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677128400,
                          "time": "2023-02-23 05:00",
                          "temp_c": 3.6,
                          "temp_f": 38.5,
                          "is_day": 0,
                          "condition": {
                              "text": "Patchy rain possible",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/176.png",
                              "code": 1063
                          },
                          "wind_mph": 15.0,
                          "wind_kph": 24.1,
                          "wind_degree": 359,
                          "wind_dir": "N",
                          "pressure_mb": 1020.0,
                          "pressure_in": 30.11,
                          "precip_mm": 0.1,
                          "precip_in": 0.0,
                          "humidity": 82,
                          "cloud": 59,
                          "feelslike_c": -1.2,
                          "feelslike_f": 29.8,
                          "windchill_c": -1.2,
                          "windchill_f": 29.8,
                          "heatindex_c": 3.6,
                          "heatindex_f": 38.5,
                          "dewpoint_c": 0.8,
                          "dewpoint_f": 33.4,
                          "will_it_rain": 1,
                          "chance_of_rain": 77,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 24.8,
                          "gust_kph": 40.0,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677132000,
                          "time": "2023-02-23 06:00",
                          "temp_c": 3.0,
                          "temp_f": 37.4,
                          "is_day": 0,
                          "condition": {
                              "text": "Patchy sleet possible",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/182.png",
                              "code": 1069
                          },
                          "wind_mph": 13.6,
                          "wind_kph": 22.0,
                          "wind_degree": 357,
                          "wind_dir": "N",
                          "pressure_mb": 1020.0,
                          "pressure_in": 30.13,
                          "precip_mm": 0.4,
                          "precip_in": 0.02,
                          "humidity": 80,
                          "cloud": 70,
                          "feelslike_c": -1.7,
                          "feelslike_f": 28.9,
                          "windchill_c": -1.7,
                          "windchill_f": 28.9,
                          "heatindex_c": 3.0,
                          "heatindex_f": 37.4,
                          "dewpoint_c": 0.0,
                          "dewpoint_f": 32.0,
                          "will_it_rain": 0,
                          "chance_of_rain": 70,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 9.0,
                          "vis_miles": 5.0,
                          "gust_mph": 23.3,
                          "gust_kph": 37.4,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677135600,
                          "time": "2023-02-23 07:00",
                          "temp_c": 2.5,
                          "temp_f": 36.5,
                          "is_day": 0,
                          "condition": {
                              "text": "Clear",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                              "code": 1000
                          },
                          "wind_mph": 12.3,
                          "wind_kph": 19.8,
                          "wind_degree": 353,
                          "wind_dir": "N",
                          "pressure_mb": 1021.0,
                          "pressure_in": 30.14,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 81,
                          "cloud": 17,
                          "feelslike_c": -2.1,
                          "feelslike_f": 28.2,
                          "windchill_c": -2.1,
                          "windchill_f": 28.2,
                          "heatindex_c": 2.5,
                          "heatindex_f": 36.5,
                          "dewpoint_c": -0.4,
                          "dewpoint_f": 31.3,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 21.3,
                          "gust_kph": 34.2,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677139200,
                          "time": "2023-02-23 08:00",
                          "temp_c": 2.6,
                          "temp_f": 36.7,
                          "is_day": 1,
                          "condition": {
                              "text": "Sunny",
                              "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                              "code": 1000
                          },
                          "wind_mph": 11.0,
                          "wind_kph": 17.6,
                          "wind_degree": 348,
                          "wind_dir": "NNW",
                          "pressure_mb": 1022.0,
                          "pressure_in": 30.17,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 82,
                          "cloud": 9,
                          "feelslike_c": -1.6,
                          "feelslike_f": 29.1,
                          "windchill_c": -1.6,
                          "windchill_f": 29.1,
                          "heatindex_c": 2.6,
                          "heatindex_f": 36.7,
                          "dewpoint_c": -0.1,
                          "dewpoint_f": 31.8,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 18.3,
                          "gust_kph": 29.5,
                          "uv": 2.0
                      },
                      {
                          "time_epoch": 1677142800,
                          "time": "2023-02-23 09:00",
                          "temp_c": 3.9,
                          "temp_f": 39.0,
                          "is_day": 1,
                          "condition": {
                              "text": "Sunny",
                              "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                              "code": 1000
                          },
                          "wind_mph": 11.0,
                          "wind_kph": 17.6,
                          "wind_degree": 344,
                          "wind_dir": "NNW",
                          "pressure_mb": 1023.0,
                          "pressure_in": 30.19,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 79,
                          "cloud": 2,
                          "feelslike_c": 0.0,
                          "feelslike_f": 32.0,
                          "windchill_c": 0.0,
                          "windchill_f": 32.0,
                          "heatindex_c": 3.9,
                          "heatindex_f": 39.0,
                          "dewpoint_c": 0.7,
                          "dewpoint_f": 33.3,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 15.2,
                          "gust_kph": 24.5,
                          "uv": 2.0
                      },
                      {
                          "time_epoch": 1677146400,
                          "time": "2023-02-23 10:00",
                          "temp_c": 5.1,
                          "temp_f": 41.2,
                          "is_day": 1,
                          "condition": {
                              "text": "Sunny",
                              "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                              "code": 1000
                          },
                          "wind_mph": 12.1,
                          "wind_kph": 19.4,
                          "wind_degree": 353,
                          "wind_dir": "N",
                          "pressure_mb": 1023.0,
                          "pressure_in": 30.2,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 72,
                          "cloud": 3,
                          "feelslike_c": 1.3,
                          "feelslike_f": 34.3,
                          "windchill_c": 1.3,
                          "windchill_f": 34.3,
                          "heatindex_c": 5.1,
                          "heatindex_f": 41.2,
                          "dewpoint_c": 0.6,
                          "dewpoint_f": 33.1,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 15.4,
                          "gust_kph": 24.8,
                          "uv": 3.0
                      },
                      {
                          "time_epoch": 1677150000,
                          "time": "2023-02-23 11:00",
                          "temp_c": 5.7,
                          "temp_f": 42.3,
                          "is_day": 1,
                          "condition": {
                              "text": "Partly cloudy",
                              "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                              "code": 1003
                          },
                          "wind_mph": 12.5,
                          "wind_kph": 20.2,
                          "wind_degree": 359,
                          "wind_dir": "N",
                          "pressure_mb": 1023.0,
                          "pressure_in": 30.2,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 66,
                          "cloud": 47,
                          "feelslike_c": 1.9,
                          "feelslike_f": 35.4,
                          "windchill_c": 1.9,
                          "windchill_f": 35.4,
                          "heatindex_c": 5.7,
                          "heatindex_f": 42.3,
                          "dewpoint_c": 0.0,
                          "dewpoint_f": 32.0,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 16.3,
                          "gust_kph": 26.3,
                          "uv": 3.0
                      },
                      {
                          "time_epoch": 1677153600,
                          "time": "2023-02-23 12:00",
                          "temp_c": 6.4,
                          "temp_f": 43.5,
                          "is_day": 1,
                          "condition": {
                              "text": "Partly cloudy",
                              "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                              "code": 1003
                          },
                          "wind_mph": 11.9,
                          "wind_kph": 19.1,
                          "wind_degree": 358,
                          "wind_dir": "N",
                          "pressure_mb": 1022.0,
                          "pressure_in": 30.19,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 62,
                          "cloud": 56,
                          "feelslike_c": 2.9,
                          "feelslike_f": 37.2,
                          "windchill_c": 2.9,
                          "windchill_f": 37.2,
                          "heatindex_c": 6.4,
                          "heatindex_f": 43.5,
                          "dewpoint_c": -0.4,
                          "dewpoint_f": 31.3,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 15.2,
                          "gust_kph": 24.5,
                          "uv": 3.0
                      },
                      {
                          "time_epoch": 1677157200,
                          "time": "2023-02-23 13:00",
                          "temp_c": 6.6,
                          "temp_f": 43.9,
                          "is_day": 1,
                          "condition": {
                              "text": "Overcast",
                              "icon": "//cdn.weatherapi.com/weather/64x64/day/122.png",
                              "code": 1009
                          },
                          "wind_mph": 10.7,
                          "wind_kph": 17.3,
                          "wind_degree": 350,
                          "wind_dir": "N",
                          "pressure_mb": 1022.0,
                          "pressure_in": 30.18,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 60,
                          "cloud": 100,
                          "feelslike_c": 3.4,
                          "feelslike_f": 38.1,
                          "windchill_c": 3.4,
                          "windchill_f": 38.1,
                          "heatindex_c": 6.6,
                          "heatindex_f": 43.9,
                          "dewpoint_c": -0.6,
                          "dewpoint_f": 30.9,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 14.1,
                          "gust_kph": 22.7,
                          "uv": 2.0
                      },
                      {
                          "time_epoch": 1677160800,
                          "time": "2023-02-23 14:00",
                          "temp_c": 6.1,
                          "temp_f": 43.0,
                          "is_day": 1,
                          "condition": {
                              "text": "Cloudy",
                              "icon": "//cdn.weatherapi.com/weather/64x64/day/119.png",
                              "code": 1006
                          },
                          "wind_mph": 8.1,
                          "wind_kph": 13.0,
                          "wind_degree": 337,
                          "wind_dir": "NNW",
                          "pressure_mb": 1022.0,
                          "pressure_in": 30.17,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 63,
                          "cloud": 73,
                          "feelslike_c": 3.4,
                          "feelslike_f": 38.1,
                          "windchill_c": 3.4,
                          "windchill_f": 38.1,
                          "heatindex_c": 6.1,
                          "heatindex_f": 43.0,
                          "dewpoint_c": -0.5,
                          "dewpoint_f": 31.1,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 11.6,
                          "gust_kph": 18.7,
                          "uv": 2.0
                      },
                      {
                          "time_epoch": 1677164400,
                          "time": "2023-02-23 15:00",
                          "temp_c": 6.4,
                          "temp_f": 43.5,
                          "is_day": 1,
                          "condition": {
                              "text": "Partly cloudy",
                              "icon": "//cdn.weatherapi.com/weather/64x64/day/116.png",
                              "code": 1003
                          },
                          "wind_mph": 8.5,
                          "wind_kph": 13.7,
                          "wind_degree": 330,
                          "wind_dir": "NNW",
                          "pressure_mb": 1022.0,
                          "pressure_in": 30.17,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 58,
                          "cloud": 44,
                          "feelslike_c": 3.7,
                          "feelslike_f": 38.7,
                          "windchill_c": 3.7,
                          "windchill_f": 38.7,
                          "heatindex_c": 6.4,
                          "heatindex_f": 43.5,
                          "dewpoint_c": -1.2,
                          "dewpoint_f": 29.8,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 12.1,
                          "gust_kph": 19.4,
                          "uv": 3.0
                      },
                      {
                          "time_epoch": 1677168000,
                          "time": "2023-02-23 16:00",
                          "temp_c": 4.9,
                          "temp_f": 40.8,
                          "is_day": 1,
                          "condition": {
                              "text": "Sunny",
                              "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                              "code": 1000
                          },
                          "wind_mph": 6.9,
                          "wind_kph": 11.2,
                          "wind_degree": 326,
                          "wind_dir": "NNW",
                          "pressure_mb": 1021.0,
                          "pressure_in": 30.16,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 61,
                          "cloud": 4,
                          "feelslike_c": 2.3,
                          "feelslike_f": 36.1,
                          "windchill_c": 2.3,
                          "windchill_f": 36.1,
                          "heatindex_c": 4.9,
                          "heatindex_f": 40.8,
                          "dewpoint_c": -2.0,
                          "dewpoint_f": 28.4,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 12.8,
                          "gust_kph": 20.5,
                          "uv": 2.0
                      },
                      {
                          "time_epoch": 1677171600,
                          "time": "2023-02-23 17:00",
                          "temp_c": 3.9,
                          "temp_f": 39.0,
                          "is_day": 1,
                          "condition": {
                              "text": "Sunny",
                              "icon": "//cdn.weatherapi.com/weather/64x64/day/113.png",
                              "code": 1000
                          },
                          "wind_mph": 4.0,
                          "wind_kph": 6.5,
                          "wind_degree": 314,
                          "wind_dir": "NW",
                          "pressure_mb": 1021.0,
                          "pressure_in": 30.15,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 66,
                          "cloud": 20,
                          "feelslike_c": 2.3,
                          "feelslike_f": 36.1,
                          "windchill_c": 2.3,
                          "windchill_f": 36.1,
                          "heatindex_c": 3.9,
                          "heatindex_f": 39.0,
                          "dewpoint_c": -1.9,
                          "dewpoint_f": 28.6,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 8.3,
                          "gust_kph": 13.3,
                          "uv": 2.0
                      },
                      {
                          "time_epoch": 1677175200,
                          "time": "2023-02-23 18:00",
                          "temp_c": 3.1,
                          "temp_f": 37.6,
                          "is_day": 0,
                          "condition": {
                              "text": "Cloudy",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/119.png",
                              "code": 1006
                          },
                          "wind_mph": 4.3,
                          "wind_kph": 6.8,
                          "wind_degree": 266,
                          "wind_dir": "W",
                          "pressure_mb": 1021.0,
                          "pressure_in": 30.15,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 65,
                          "cloud": 64,
                          "feelslike_c": 1.2,
                          "feelslike_f": 34.2,
                          "windchill_c": 1.2,
                          "windchill_f": 34.2,
                          "heatindex_c": 3.1,
                          "heatindex_f": 37.6,
                          "dewpoint_c": -2.9,
                          "dewpoint_f": 26.8,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 8.9,
                          "gust_kph": 14.4,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677178800,
                          "time": "2023-02-23 19:00",
                          "temp_c": 1.5,
                          "temp_f": 34.7,
                          "is_day": 0,
                          "condition": {
                              "text": "Clear",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                              "code": 1000
                          },
                          "wind_mph": 6.7,
                          "wind_kph": 10.8,
                          "wind_degree": 254,
                          "wind_dir": "WSW",
                          "pressure_mb": 1020.0,
                          "pressure_in": 30.13,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 67,
                          "cloud": 7,
                          "feelslike_c": -1.7,
                          "feelslike_f": 28.9,
                          "windchill_c": -1.7,
                          "windchill_f": 28.9,
                          "heatindex_c": 1.5,
                          "heatindex_f": 34.7,
                          "dewpoint_c": -4.0,
                          "dewpoint_f": 24.8,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 14.1,
                          "gust_kph": 22.7,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677182400,
                          "time": "2023-02-23 20:00",
                          "temp_c": 2.7,
                          "temp_f": 36.9,
                          "is_day": 0,
                          "condition": {
                              "text": "Clear",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                              "code": 1000
                          },
                          "wind_mph": 6.9,
                          "wind_kph": 11.2,
                          "wind_degree": 270,
                          "wind_dir": "W",
                          "pressure_mb": 1020.0,
                          "pressure_in": 30.13,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 69,
                          "cloud": 10,
                          "feelslike_c": -0.4,
                          "feelslike_f": 31.3,
                          "windchill_c": -0.4,
                          "windchill_f": 31.3,
                          "heatindex_c": 2.7,
                          "heatindex_f": 36.9,
                          "dewpoint_c": -2.3,
                          "dewpoint_f": 27.9,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 14.3,
                          "gust_kph": 23.0,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677186000,
                          "time": "2023-02-23 21:00",
                          "temp_c": 2.6,
                          "temp_f": 36.7,
                          "is_day": 0,
                          "condition": {
                              "text": "Clear",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/113.png",
                              "code": 1000
                          },
                          "wind_mph": 7.6,
                          "wind_kph": 12.2,
                          "wind_degree": 260,
                          "wind_dir": "W",
                          "pressure_mb": 1020.0,
                          "pressure_in": 30.11,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 70,
                          "cloud": 24,
                          "feelslike_c": -0.7,
                          "feelslike_f": 30.7,
                          "windchill_c": -0.7,
                          "windchill_f": 30.7,
                          "heatindex_c": 2.6,
                          "heatindex_f": 36.7,
                          "dewpoint_c": -2.3,
                          "dewpoint_f": 27.9,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 15.4,
                          "gust_kph": 24.8,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677189600,
                          "time": "2023-02-23 22:00",
                          "temp_c": 2.4,
                          "temp_f": 36.3,
                          "is_day": 0,
                          "condition": {
                              "text": "Partly cloudy",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/116.png",
                              "code": 1003
                          },
                          "wind_mph": 8.1,
                          "wind_kph": 13.0,
                          "wind_degree": 259,
                          "wind_dir": "W",
                          "pressure_mb": 1019.0,
                          "pressure_in": 30.09,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 74,
                          "cloud": 49,
                          "feelslike_c": -1.1,
                          "feelslike_f": 30.0,
                          "windchill_c": -1.1,
                          "windchill_f": 30.0,
                          "heatindex_c": 2.4,
                          "heatindex_f": 36.3,
                          "dewpoint_c": -1.8,
                          "dewpoint_f": 28.8,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 16.3,
                          "gust_kph": 26.3,
                          "uv": 1.0
                      },
                      {
                          "time_epoch": 1677193200,
                          "time": "2023-02-23 23:00",
                          "temp_c": 2.8,
                          "temp_f": 37.0,
                          "is_day": 0,
                          "condition": {
                              "text": "Overcast",
                              "icon": "//cdn.weatherapi.com/weather/64x64/night/122.png",
                              "code": 1009
                          },
                          "wind_mph": 9.2,
                          "wind_kph": 14.8,
                          "wind_degree": 260,
                          "wind_dir": "W",
                          "pressure_mb": 1018.0,
                          "pressure_in": 30.06,
                          "precip_mm": 0.0,
                          "precip_in": 0.0,
                          "humidity": 81,
                          "cloud": 100,
                          "feelslike_c": -0.9,
                          "feelslike_f": 30.4,
                          "windchill_c": -0.9,
                          "windchill_f": 30.4,
                          "heatindex_c": 2.8,
                          "heatindex_f": 37.0,
                          "dewpoint_c": -0.1,
                          "dewpoint_f": 31.8,
                          "will_it_rain": 0,
                          "chance_of_rain": 0,
                          "will_it_snow": 0,
                          "chance_of_snow": 0,
                          "vis_km": 10.0,
                          "vis_miles": 6.0,
                          "gust_mph": 17.9,
                          "gust_kph": 28.8,
                          "uv": 1.0 */}



          
        </div>
      )}
    </div>
  );
}

export default App;