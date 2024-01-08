import React from "react";
import "./mainforecast.css";
import sun from "../img/01d.png";

export default function MainForecast() {
  let mainforecast = {
    maxTemp: 14,
    minTemp: 5,
    nowTemp: 13,
    weatherConditions: "sunny",
    humidity: 40,
    wind: 9,
  };
  return (
    <div className="col-md-6 main-forecast">
      <h3>
        <span
          className="max-temp"
          id="primary-color"
        >
          {mainforecast.maxTemp}º
        </span>
        {" / "}
        <span
          className="min-temp"
          id="primary-color"
        >
          {mainforecast.minTemp}º
        </span>{" "}
        <span className="metric-control">
          <button
            type="button"
            className="btn btn-light btn-sm c-button active"
          >
            <a
              href="#"
              id="unit-C"
            >
              C
            </a>
          </button>
          {" | "}
          <button
            type="button"
            className="btn btn-light btn-sm f-button"
          >
            <a
              href="#"
              id="unit-F"
            >
              F
            </a>
          </button>
        </span>
      </h3>

      <div className="today-text">{mainforecast.weatherConditions}</div>
      <img
        className="today-img"
        src={sun}
        alt="Sun"
        id="today-icon"
      />

      <div class="today-specs">
        <div className="temp-now">
          Currently <span id="primary-color">{mainforecast.nowTemp} º</span>
        </div>
        <div className="humidity">
          Humidity <span id="primary-color">{mainforecast.humidity}%</span>
        </div>
        <div className="wind">
          Wind <span id="primary-color">{mainforecast.wind} km/h</span>
        </div>
      </div>
    </div>
  );
}
