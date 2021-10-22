import React, { useContext } from "react";
import WeatherContext from "../../store/weather-context";
import classes from "./Location.module.css";
import Button from "../UI/Button/Button";

const Location = () => {
  const { getWeather } = useContext(WeatherContext);

  return (
    <div className={classes.form}>
      <form onSubmit={getWeather}>
        <div className={classes.control}>
          <input type="text" id="city" placeholder="Enter city name" />
        </div>
        <div className={classes.actions}>
          <Button type="submit">Get weather</Button>
        </div>
      </form>
    </div>
  );
};

export default Location;
