import React, { useContext } from "react";
import WeatherContext from "../../store/weather-context";

import Card from "../UI/Card/Card";
import classes from "./Weather.module.css";

const Weather = () => {
  const { weather, city } = useContext(WeatherContext);

  const { description, icon, data } = weather;
  const temp = Math.round(data.temp);
  const temp_max = Math.round(data.temp_max);
  const temp_min = Math.round(data.temp_min);
  const feels_like = Math.round(data.feels_like);
  const humidity = data.humidity;

  return (
    <React.Fragment>
      {city !== null && (
        <Card className={classes.form}>
          <h1 className={classes.title}>{city}</h1>
          <h2 className={classes.description}>{description}</h2>
          <p>
            Low <b>{temp_min}&deg;C</b> / High <b>{temp_max}&deg;C</b>
          </p>
          <div className={classes.cont}>
            <img
              src={`${process.env.REACT_APP_ICON_URL}/${icon}@2x.png`}
              alt="Avatar"
              className={classes.avatar}
            />
            <p className={classes.temp}> {temp}&deg;C</p>
            <p className={classes.real_feel}>
              Feels like: <b>{feels_like}&deg;C</b>
            </p>
          </div>

          <p>
            Humidity: <b>{humidity}%</b>
          </p>
        </Card>
      )}
    </React.Fragment>
  );
};

export default Weather;
