import React, { useState } from "react";
import axios from "axios";
import "./search.css";

export default function Search(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false, city: null });

  function handleResponse(apiResponse) {
    console.log(apiResponse.data);
    setWeatherData({
      loaded: true,
      city: apiResponse.data.name,
      location: apiResponse.data.name,
      description: apiResponse.data.weather[0].description,
      temperature: apiResponse.data.main.temp,
      maxTemperature: apiResponse.data.main.temp_max,
      minTemperature: apiResponse.data.main.temp_min,
      humidity: apiResponse.data.main.humidity,
      wind: apiResponse.data.wind.speed,
      icon: `http://openweathermap.org/img/wn/${apiResponse.data.weather[0].icon}@2x.png`,
    });
  }

  function apiCall() {
    const apiKey = "8161b4309ee03faae957729ba7104797";
    let unit = "Metric";
    let apiURL = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultLocation}&appid=${apiKey}&units=${unit}`;
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
            placeholder={weatherData.city}
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
