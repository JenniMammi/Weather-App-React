import React from "react";
import FriendlyDate from "./FriendlyDate";
import MainIcon from "./MainIcon";
import "./Weather.css";
import WeatherTemperature from "./WeatherTemperature";

export default function WeatherInfo(props) {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <h2>
        <FriendlyDate date={props.data.date} />
      </h2>
      <h2 className="text-capitalize">{props.data.description}</h2>

      <div className="Insights">
        <div className="Icon">
          <MainIcon code={props.data.icon} />
        </div>
        <div className="Degree">
          <WeatherTemperature celsius={props.data.temperature} />
        </div>
        <div className="AdditionalInfo">
          <ul>
            <li>Feels like: {Math.round(props.data.feelslike)}°C</li>
            <li>Humidity: {props.data.humidity}%</li>
            <li>Wind: {Math.round(props.data.wind)}m/s</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
