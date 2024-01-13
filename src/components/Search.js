import React from "react";
import axios from "axios";
import "./search.css";

export default function Search({
  defaultLocation,
  weatherData,
  handleResponse,
}) {
  function apiCall() {
    const apiKey = "8161b4309ee03faae957729ba7104797";
    let unit = "Metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${defaultLocation}&appid=${apiKey}&units=${unit}`;
    axios.get(apiURL).then(handleResponse);
  }

  let form = (
    <div className="row">
      <form id="search-form">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control city-input"
            aria-describedby="enterCity"
            placeholder="Enter a city..."
          />
          <div className="input-group-append">
            <button
              type="submit"
              class="btn btn-outline-secondary"
            >
              <i className="fa-solid fa-magnifying-glass search-icon"> </i>
            </button>

            <button
              className="btn btn-outline-secondary locate-button"
              type="button"
            >
              <i className="fa-solid fa-location-dot location-icon"></i>
            </button>
          </div>
        </div>
      </form>
    </div>
  );

  if (weatherData.loaded) {
    return <div className="col-md-6">{form} </div>;
  } else {
    apiCall();
    return "Loading...";
  }
}
