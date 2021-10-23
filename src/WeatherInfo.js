import React from "react";
import FriendlyDate from "./FriendlyDate";
import "./Weather.css";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>
        <FriendlyDate date={props.data.date} />
      </h2>
      <h2 className="text-capitalize">{props.data.description}</h2>

      <div className="row">
        <div className="col-6">
          <img src={props.data.iconUrl} height="65px" alt="Weather Icon" />
          <span className="degreeshown">
            {Math.round(props.data.temperature)}
          </span>
          <span className="unit"> °C</span>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
