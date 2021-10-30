import React, { useState } from "react";
import "./Weather.css";

export default function WeatherTemperature(props) {
  let [unit, setUnit] = useState("celsius");

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="degreeshown">{Math.round(props.celsius)}</span>
        <span className="unit">
          °C /{" "}
          <button className="unitbutton" onClick={showFahrenheit}>
            °F
          </button>
        </span>
      </div>
    );
  } else {
    let fahrenheit = props.celsius * (9 / 5) + 32;
    return (
      <div className="WeatherTemperature">
        <span className="degreeshown">{Math.round(fahrenheit)}</span>
        <span className="unit">
          <button className="unitbutton" onClick={showCelsius}>
            {" "}
            °C
          </button>{" "}
          | °F
        </span>
      </div>
    );
  }
}
