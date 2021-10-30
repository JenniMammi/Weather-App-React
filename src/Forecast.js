import axios from "axios";
import React, { useState } from "react";
import "./Weather.css";
import DailyForecast from "./DailyForecast";

export default function Forecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="Forecast">
        {forecast.map(function (eachDay, index) {
          if (index < 5) {
            return (
              <div className="DailyForecast" key={index}>
                <DailyForecast data={eachDay} />
              </div>
            );
          }
        })}
      </div>
    );
  } else {
    let apiKey = "8ce789c07337b499af08a538fff81bd4";
    let long = props.coord.lon;
    let lat = props.coord.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}8&appid=${apiKey}&units=metric`;

    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
