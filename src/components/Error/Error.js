import { Fragment, useContext } from "react";
import WeatherContext from "../../store/weather-context";
import classes from "./Error.module.css";

const Error = () => {
  const { error } = useContext(WeatherContext);
  return (
    <Fragment>
      {error !== null && <div className={classes.error}>{error}</div>}
    </Fragment>
  );
};

export default Error;
