import React from "react";
import "./header.css";

export default function Header({ weatherData }) {
  return (
    <div className="col-md-6">
      <h1>{weatherData.city}</h1>
      <h2>
        <span className="update-day">Tuesday: 10.32PM</span>
      </h2>
    </div>
  );
}
