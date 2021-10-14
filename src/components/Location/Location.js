import React, { useState, useRef } from "react";

import Card from "../UI/Card/Card";
import classes from "./Location.module.css";
import Button from "../UI/Button/Button";
import LocationsList from "../LocationsList/LocationsList";

const Location = (props) => {
  const city = useRef();
  const [locationsList, setLocationsList] = useState([]);

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredCity = city.current.value;
    if (enteredCity.trim().length === 0) return;
    props.onCityInput(enteredCity);

    if (locationsList.length === 5) locationsList.shift();
    setLocationsList((prevLocationsList) => {
      return [
        ...prevLocationsList,
        { city: city.current.value, id: Math.random().toString() },
      ];
    });
  };

  const cityClickHandler = (location) => {
    city.current.value = location;
    props.onCityInput(location);
  };

  return (
    <Card className={classes.form}>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="city">Enter city name</label>
          <input type="text" id="city" ref={city} />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn}>
            Get weather
          </Button>
        </div>
      </form>
      {locationsList.length > 0 && (
        <LocationsList
          locations={locationsList}
          onCityClick={cityClickHandler}
        />
      )}
    </Card>
  );
};

export default Location;
