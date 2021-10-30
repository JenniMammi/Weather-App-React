import React from "react";
import Icon from "./Icon";

export default function DailyForecast(props) {
  function maxTemp() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°C`;
  }

  function minTemp() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°C`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];

    return days[day];
  }

  return (
    <div className="DailyForecast">
      <div className="Daily">
        {day()}
        <Icon code={props.data.weather[0].icon} size={30} />
        <div className="Forecast-temperatures">
          <div className="Forecast-temperatures-max">{maxTemp()}</div>
          <div className="Forecast-temperatures-min">{minTemp()}</div>
        </div>
      </div>
    </div>
  );
}
