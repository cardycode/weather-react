import React from "react";
import Header from ".//components/Header";
import Search from ".//components/Search";
import MainForecast from ".//components/MainForecast";
import Footer from ".//components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row flex-row-reverse">
          <Search />
          <Header />
        </div>
        <div className="container-forecast">
          <div className="row">
            <MainForecast />
            Daily forecast
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
