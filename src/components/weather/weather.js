import React from "react";

const Weather = props => (
  <div className="infoweath">
    {props.city && (
      <div>
        <p>
          place={props.city}, {props.country}{" "}
        </p>
        <p>temp={props.temp}</p>
        <p>sunrise={props.sunrise}</p>
        <p>sunset={props.sunset}</p>
      </div>
    )}
    <p className="error">{props.error}</p>
  </div>
);

export default Weather;
