import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });
  let [city, setCity] = useState(props.defaultCity);

  function handleSubmit(response) {
    setWeatherData({
      ready: true,
      coord: response.data.coord,
      date: new Date(response.data.dt * 1000),
      time: "07:30",
      temperature: response.data.main.temp,
      feelslike: response.data.main.feels_like,
      city: response.data.name,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  function search() {
    let apiKey = "8ce789c07337b499af08a538fff81bd4";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);
  }

  function handleSearch(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSearch}>
          <div className="Search">
            <input
              type="search"
              placeholder="Search city"
              className="searchfield"
              autoFocus="on"
              onChange={handleCityChange}
            />

            <input type="submit" value="Search" className="searchbutton" />
          </div>
        </form>
        <WeatherInfo data={weatherData} />
        <Forecast coord={weatherData.coord} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
