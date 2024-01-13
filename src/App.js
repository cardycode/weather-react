import React, { useState } from "react";
import Header from ".//components/Header";
import Search from ".//components/Search";
import MainForecast from ".//components/MainForecast";
import Footer from ".//components/Footer";
import "./App.css";

export default function App() {
  const [weatherData, setWeatherData] = useState({ loaded: false, city: null });

  function handleResponse(apiResponse) {
    console.log(apiResponse.data);
    setWeatherData({
      loaded: true,
      city: apiResponse.data.name,
      location: apiResponse.data.name,
      description: apiResponse.data.weather[0].description,
      temperature: Math.round(apiResponse.data.main.temp),
      maxTemperature: Math.round(apiResponse.data.main.temp_max),
      minTemperature: Math.round(apiResponse.data.main.temp_min),
      humidity: apiResponse.data.main.humidity,
      wind: Math.round(apiResponse.data.wind.speed),
      icon: `http://openweathermap.org/img/wn/${apiResponse.data.weather[0].icon}@2x.png`,
    });
  }

  return (
    <div className="App">
      <div className="container">
        <div className="row flex-row-reverse">
          <Search
            defaultLocation="London"
            weatherData={weatherData}
            handleResponse={handleResponse}
          />
          <Header weatherData={weatherData} />
        </div>
        <div className="container-forecast">
          <div className="row">
            <MainForecast weatherData={weatherData} />
            Daily forecast
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
