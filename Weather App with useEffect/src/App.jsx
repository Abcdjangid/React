import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [city, setCity] = useState(""); // Input for the city name
  const [weather, setWeather] = useState(null); // Stores fetched weather data
  const [error, setError] = useState(""); // Error message

  const API_KEY = "57c595e56b62eb5abb831df3e29ca811"; // Your OpenWeatherMap API Key

  // Fetch weather data whenever `city` changes
  useEffect(() => {
    if (city.trim()) {
      fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error("City not found!");
          }
          return response.json();
        })
        .then((data) => {
          setWeather(data);
          setError(""); // Clear error if fetch is successful
        })
        .catch((err) => {
          setWeather(null);
          setError(err.message); // Set error message
        });
    }
  }, [city]);

  const handleSearch = () => {
    const inputField = document.querySelector("input");
    const inputCity = inputField.value.trim();

    if (!inputCity) {
      setError("Please enter a city name!");
      setWeather(null);
      return;
    }

    setCity(inputCity); // Trigger API call
  };

  return (
    <div className="container">
      <h1>Weather App</h1>
      <div className="input_container">
        <input type="text" placeholder="Enter City Name" />
        <button onClick={handleSearch}>Search</button>
      </div>

      {/* Error Message */}
      {error && <p className="error">{error}</p>}

      {/* Weather Information */}
      {weather && (
        <>
          <p className="chanceofRain">Chance of Rain: {weather.weather[0].description}</p>
          <img
            src={`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt={weather.weather[0].description}
          />
          <div className="cardContainer">
            <div className="card">
              <img src="public/Rain clouds.png" alt="Temperature" />
              <p>Temperature: {weather.main.temp}°C</p>
            </div>
            <div className="card">
              <img src="public/humidity.png" alt="Humidity" />
              <p>Humidity: {weather.main.humidity}%</p>
            </div>
            <div className="card">
              <img src="public/Wind speed.png" alt="Wind Speed" />
              <p>Wind Speed: {weather.wind.speed} km/h</p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default App;
