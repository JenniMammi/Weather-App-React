import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  let [weatherData, setWeatherData] = useState({ ready: false });

  function handleSubmit(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      day: "Wednesday",
      time: "07:30",
      temperature: response.data.main.temp,
      city: response.data.name,
      description: response.data.weather[0].description,
      iconUrl: "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png",
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
    });
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form>
          <div className="Search">
            <input
              type="search"
              placeholder="Search city"
              id="searchfield"
              autoFocus="on"
            />

            <input type="submit" value="Search" className="searchbutton" />
          </div>
        </form>
        <h1 id="city">{weatherData.city}</h1>
        <h2 id="daytime">
          {weatherData.day} {weatherData.time}
        </h2>
        <h2 className="text-capitalize">{weatherData.description}</h2>

        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} height="65px" alt="Weather Icon" />
            <span className="degreeshown">
              {Math.round(weatherData.temperature)}
            </span>
            <span className="unit"> °C</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}m/s</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    let apiKey = "02e63bbc86dac944d774fba2018e7b56";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleSubmit);

    return "Loading...";
  }
}
