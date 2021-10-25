import React, { useState } from "react";
import WeatherContext from "./weather-context";

const apiKey = process.env.REACT_APP_API_KEY;
const apiUrl = process.env.REACT_APP_API_URL;

const WeatherProvider = (props) => {
  const [weather, setWeather] = useState({
    data: {},
    description: "",
    icon: "",
  });
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);
  const [locations, setLocations] = useState([]);

  const getWeather = (e) => {
    let location;
    if (e._reactName === "onSubmit") {
      e.preventDefault();
      location = e.target.elements.city.value;
    } else {
      location = e;
    }

    fetch(apiUrl + `/weather?q=${location}&units=metric&appid=${apiKey}`)
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else if (res.status === 400) {
          setError("Please enter city name!");
          setWeather({
            data: {},
            description: "",
            icon: "",
          });
          setCity(null);
        } else if (res.status === 404) {
          setError("Invalid city name!!!");
          setWeather({
            data: {},
            description: "",
            icon: "",
          });
          setCity(null);
        }
      })
      .then((resJson) => {
        const description = resJson.weather.map((item) => item.description);
        const icon = resJson.weather.map((item) => item.icon);
        setWeather({
          data: resJson.main,
          description: description,
          icon: icon,
        });
        setCity(resJson.name);
        setError(null);
        updateLocations(resJson.name);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updateLocations = (input) => {
    const checkCity = locations.some((location) => location.city === input);
    if (checkCity) {
      setLocations(locations);
    } else {
      if (locations.length === 5) locations.shift();
      setLocations((prevLocations) => {
        return [
          ...prevLocations,
          { city: input, id: Math.random().toString() },
        ];
      });
    }
  };

  return (
    <WeatherContext.Provider
      value={{ getWeather, weather, city, error, locations }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
