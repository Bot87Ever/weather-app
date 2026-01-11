import "./App.css";
import { useState } from "react";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);

  const getWeather = async () => {
    if (city === "") return;

    const apiKey = "763e578a2a4b9415eccf186313385b0e"; // your API key

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();

    if (data.cod === "404") {
      alert("City not found!");
      return;
    }

    setWeather(data);
  };

  return (
    <div className="app">
      <div className="container">
        
        <h1 className="title">Weather App</h1>

        <input
          type="text"
          placeholder="Enter city..."
          value={city}
          onChange={(e) => setCity(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && getWeather()}
          className="search"
        />

        
        {weather && weather.main && (
          <div className="weather-box">
            <h2>{weather.name}</h2>
            <h1>{Math.round(weather.main.temp)}°C</h1>

            <p>Humidity: {weather.main.humidity}%</p>
            <p>Wind: {weather.wind.speed} km/h</p>
            <p>{weather.weather[0].main}</p>
          </div>
        )}
      </div>
      <p className="footer"> umesh</p>
    </div>
  );
}

export default App;
