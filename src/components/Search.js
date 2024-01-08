import React from "react";
import "./search.css";

export default function Search() {
  return (
    <div className="col-md-6">
      <div className="row">
        <form id="search-form">
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control"
              id="city-input"
              aria-describedby="enterCity"
              placeholder="Enter city..."
            />
            <div className="input-group-append">
              <button
                type="submit"
                class="btn btn-outline-secondary"
              >
                <i className="fa-solid fa-magnifying-glass search-icon"> </i>
              </button>

              <button
                className="btn btn-outline-secondary"
                type="button"
                id="locate-button"
              >
                <i className="fa-solid fa-location-dot location-icon"></i>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
