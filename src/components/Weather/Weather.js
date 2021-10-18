import React from "react";

import Card from "../UI/Card/Card";
import classes from "./Weather.module.css";

const Weather = (props) => {
  const { apiData } = props;
  return (
    <Card className={classes.form}>
      <h1 className={classes.title}>{apiData.city}</h1>
      <h2 className={classes.description}>{apiData.description}</h2>
      <p>
        Low <b>{apiData.temp_min}&deg;C</b> / High{" "}
        <b>{apiData.temp_max}&deg;C</b>
      </p>
      <div className={classes.cont}>
        <img
          src={`${process.env.REACT_APP_ICON_URL}/${apiData.icon}@2x.png`}
          alt="Avatar"
          className={classes.avatar}
        />
        <p className={classes.temp}> {apiData.temp}&deg;C</p>
        <p className={classes.real_feel}>
          Feels like: <b>{apiData.feels_like}&deg;C</b>
        </p>
      </div>

      <p>
        Humidity: <b>{apiData.humidity}%</b>
      </p>
    </Card>
  );
};

export default Weather;
