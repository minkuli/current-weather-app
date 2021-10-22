import { Fragment, useContext, useState } from "react";
import WeatherContext from "../../store/weather-context";
import classes from "./LocationsList.module.css";

const LocationsList = () => {
  const { locations } = useContext(WeatherContext);

  console.log(locations);

  return (
    <Fragment>
      {locations !== null && (
        <div className={classes.results}>
          <ul>
            {locations.map((location) => (
              <li key={location.id}>{location.city}</li>
            ))}
          </ul>
        </div>
      )}
    </Fragment>
  );
};

export default LocationsList;
