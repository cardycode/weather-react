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
        <span className="max-temp primary-color">{mainforecast.maxTemp}º</span>
        {" / "}
        <span className="min-temp primary-color">
          {mainforecast.minTemp}º
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

      <div className="today-text">{mainforecast.weatherConditions}</div>
      <img
        className="today-img today-icon"
        src={sun}
        alt="Sun"
      />

      <div class="today-specs">
        <div className="temp-now">
          Currently{" "}
          <span className="primary-color">{mainforecast.nowTemp} º</span>
        </div>
        <div className="humidity">
          Humidity{" "}
          <span className="primary-color">{mainforecast.humidity}%</span>
        </div>
        <div className="wind">
          Wind <span className="primary-color">{mainforecast.wind} km/h</span>
        </div>
      </div>
    </div>
  );
}
