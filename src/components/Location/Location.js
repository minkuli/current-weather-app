import { useContext, useState, Fragment } from "react";
import WeatherContext from "../../store/weather-context";
import classes from "./Location.module.css";
import Button from "../UI/Button/Button";
import LocationsList from "../LocationsList/LocationsList";

const Location = () => {
  const { getWeather } = useContext(WeatherContext);
  const [cityInp, setCityInp] = useState("");
  const [clicked, setClicked] = useState(false);

  const inputChangeHandler = (e) => {
    e.preventDefault();
    const input = e.target.value;
    setCityInp(input);
  };

  const locationClickHandler = (loc) => {
    setCityInp(loc);
    getWeather(loc);
  };

  const clickHandler = () => {
    setClicked((prevClicked) => !prevClicked);
  };

  return (
    <Fragment>
      <div className={classes.form}>
        <form autoComplete="off" onSubmit={getWeather}>
          <div className={classes.control}>
            <input
              type="text"
              id="city"
              placeholder="Enter city name"
              value={cityInp}
              onChange={inputChangeHandler}
              onClick={clickHandler}
            />
          </div>
          <div className={classes.actions}>
            <Button type="submit" onClick={clickHandler}>
              Get weather
            </Button>
          </div>
        </form>
      </div>
      {clicked && <LocationsList onLocationClick={locationClickHandler} />}
    </Fragment>
  );
};

export default Location;
