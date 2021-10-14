import React from "react";

import Card from "../UI/Card/Card";
import classes from "./Weather.module.css";

const Weather = (props) => {
  const { apiData } = props;
  return (
    <Card className={classes.form}>
      <h2>{apiData.city}</h2>
      <p>
        Current temperature: {apiData.temp}&deg;C, real feel:{" "}
        {apiData.feels_like}&deg;C
      </p>
      <p>
        Temperature today goes from {apiData.temp_min}&deg;C to{" "}
        {apiData.temp_max}&deg;C
      </p>
      <p>Humidity: {apiData.humidity}g/m^3</p>
    </Card>
  );
};

export default Weather;
