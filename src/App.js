import { Fragment } from "react";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Weather from "./components/Weather/Weather";
import Error from "./components/Error/Error";
import WeatherProvider from "./store/WeatherProvider";
import LocationsList from "./components/LocationsList/LocationsList";

import "./App.css";

function App() {
  return (
    <Fragment>
      <Header />
      <WeatherProvider>
        <Location />

        <Error />
        <Weather />
      </WeatherProvider>
    </Fragment>
  );
}

export default App;
