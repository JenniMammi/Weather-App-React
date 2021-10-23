import React from "react";
import "./Weather.css";

export default function Weather() {
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
      <h1 id="city">Inari</h1>
      <h2 id="daytime">Wednesday 07:00</h2>
      <h2 id="description">Cloudy</h2>

      <div className="row">
        <div className="col-6">
          <img
            src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
            height="65px"
            alt="Weather Icon"
          />
          <span className="degreeshown">10</span>
          <span className="unit">°C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation: 15%</li>
            <li>Humidity: 78%</li>
            <li>Wind: 4m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
