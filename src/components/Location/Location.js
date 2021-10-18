import React, { useRef } from "react";

import classes from "./Location.module.css";
import Button from "../UI/Button/Button";
import LocationsList from "../LocationsList/LocationsList";

const Location = (props) => {
  const { onCityInput, locationsList, onListClick } = props;
  const city = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredCity = city.current.value;
    if (enteredCity.trim().length === 0) return;
    onCityInput(enteredCity);
  };

  const cityClickHandler = (location) => {
    city.current.value = location;
    onCityInput(location);
    onListClick();
  };

  return (
    <div className={classes.form}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <input
            type="text"
            id="city"
            ref={city}
            placeholder="Enter city name"
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit">Get weather</Button>
        </div>
      </form>
      {locationsList.length > 0 && (
        <LocationsList
          locations={locationsList}
          onCityClick={cityClickHandler}
        />
      )}
    </div>
  );
};

export default Location;
