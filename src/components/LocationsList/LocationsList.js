import React from "react";
import classes from "./LocationsList.module.css";

const LocationsList = (props) => {
  return (
    <div className={classes.results}>
      <ul>
        {props.locations.map((location) => (
          <li
            key={location.id}
            onClick={() => {
              props.onCityClick(location.city);
            }}
          >
            {location.city}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LocationsList;
