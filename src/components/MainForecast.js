import React from "react";
import "./mainforecast.css";

export default function MainForecast({ weatherData }) {
  return (
    <div className="col-md-6 main-forecast">
      <h3>
        <span className="max-temp primary-color">
          {weatherData.maxTemperature}º
        </span>
        {" / "}
        <span className="min-temp primary-color">
          {weatherData.minTemperature}º
        </span>{" "}
        <span className="metric-control">
          <button
            type="button"
            className="btn btn-light btn-sm c-button active"
          >
            <a
              href="#top"
              className="unit-C"
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
              href="#top"
              className="unit-F"
            >
              F
            </a>
          </button>
        </span>
      </h3>

      <div className="today-text">{weatherData.description}</div>

      <img
        className="today-icon"
        src={weatherData.icon}
        alt={weatherData.description}
      />

      <div className="today-specs">
        <div className="temp-now">
          Currently{" "}
          <span className="primary-color">
            {Math.round(weatherData.temperature)} º
          </span>
        </div>
        <div className="humidity">
          Humidity{" "}
          <span className="primary-color">{weatherData.humidity}%</span>
        </div>
        <div className="wind">
          Wind <span className="primary-color">{weatherData.wind} km/h</span>
        </div>
      </div>
    </div>
  );
}
