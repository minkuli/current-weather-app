import { useContext } from "react";
import WeatherContext from "../../store/weather-context";
import classes from "./LocationsList.module.css";

const LocationsList = (props) => {
  const { locations } = useContext(WeatherContext);
  const { onLocationClick } = props;

  return (
    <div className={classes.cont}>
      {locations.length !== 0 && (
        <div className={classes.results}>
          <ul>
            {locations.map((location) => (
              <li
                key={location.id}
                onClick={() => onLocationClick(location.city)}
                value={location.city}
              >
                {location.city}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default LocationsList;
