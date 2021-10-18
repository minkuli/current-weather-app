import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Weather from "./components/Weather/Weather";

import "./App.css";

function App() {
  const [cityInput, setCityInput] = useState("");
  const [apiData, setApiData] = useState({});
  const [dataObtained, setDataObtained] = useState(false);
  const [locationsList, setLocationsList] = useState([]);
  const [clicked, setClicked] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;
  let apiURL =
    process.env.REACT_APP_API_URL +
    `/weather?q=${cityInput}&units=metric&appid=${apiKey}`;

  const cityInputHandler = (city) => {
    setCityInput(city);
    setClicked(false);
  };

  const updateLocationsList = () => {
    if (locationsList.length === 5) locationsList.shift();
    setLocationsList((prevLocationsList) => {
      return [
        ...prevLocationsList,
        { city: cityInput, id: Math.random().toString() },
      ];
    });
  };

  const locationsListClickHandler = () => {
    setClicked(true);
  };

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setDataObtained(data.cod === 200);
        setApiData(
          data.cod === 200
            ? {
                city: data.name,
                temp: Math.round(data.main.temp),
                feels_like: Math.round(data.main.feels_like),
                temp_max: Math.round(data.main.temp_max),
                temp_min: Math.round(data.main.temp_min),
                humidity: data.main.humidity,
                error: {
                  cod: data.cod,
                  message: data.message,
                },
                icon: data.weather[0].icon,
                description: data.weather[0].main,
              }
            : {
                error: {
                  cod: data.cod,
                  message: data.message,
                },
              }
        );
        if (data.cod === 200 && !clicked) updateLocationsList();
        if (data.cod === "404") {
          alert(data.message);
        }
      });
  }, [apiURL, clicked]);

  return (
    <React.Fragment>
      <Header />
      <Location
        onCityInput={cityInputHandler}
        error={apiData.error}
        loc={apiData.city}
        locationsList={locationsList}
        onListClick={locationsListClickHandler}
      />
      {dataObtained && <Weather apiData={apiData} />}
    </React.Fragment>
  );
}

export default App;
