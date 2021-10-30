import React from "react";
import Icon from "./Icon";

export default function DailyForecast(props) {
  return (
    <div className="DailyForecast">
      <div className="Daily">
        {props.data.dt}
        <Icon code={props.data.weather[0].icon} size={30} />
        <div className="Forecast-temperatures">
          <div className="Forecast-temperatures-max">
            {Math.round(props.data.temp.max)}°C
          </div>
          <div className="Forecast-temperatures-min">
            {Math.round(props.data.temp.min)}°C
          </div>
        </div>
      </div>
    </div>
  );
}
