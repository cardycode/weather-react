import React from "react";
import "./header.css";

export default function Header() {
  let headerData = { cityName: "London", day: "Tuesday", time: "10:32" };
  return (
    <div class="col-md-6">
      <h1>{headerData.cityName}</h1>
      <h2>
        <span class="update-day">
          {headerData.day}: {headerData.time}PM
        </span>
      </h2>
    </div>
  );
}
