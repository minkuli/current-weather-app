import React from "react";
import Card from "../UI/Card/Card";
import classes from "./LocationsList.module.css";

const LocationsList = (props) => {
  console.log(props);
  return (
    <Card className={classes.results}>
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
    </Card>
  );
};

export default LocationsList;
