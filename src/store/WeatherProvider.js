import React, { useState } from "react";
import WeatherContext from "./weather-context";
import Location from "../components/Location/Location";
import Weather from "../components/Weather/Weather";
import Error from "../components/Error/Error";

const apiKey = process.env.REACT_APP_API_KEY;

const WeatherProvider = (props) => {
  const [weather, setWeather] = useState({
    data: {},
    description: "",
    icon: "",
  });
  const [city, setCity] = useState(null);
  const [error, setError] = useState(null);

  const getWeather = (e) => {
    e.preventDefault();
    const location = e.target.elements.city.value;
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${apiKey}`
    )
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
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <WeatherContext.Provider value={{ getWeather, weather, city, error }}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
