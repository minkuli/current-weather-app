import React, { useState, useEffect } from "react";
import Header from "./components/Header/Header";
import Location from "./components/Location/Location";
import Weather from "./components/Weather/Weather";

import "./App.css";

function App() {
  const [cityInput, setCityInput] = useState("");

  const [apiData, setApiData] = useState({});
  const [dataObtained, setDataObtained] = useState(false);

  const apiKey = process.env.REACT_APP_API_KEY;

  const apiURL =
    process.env.REACT_APP_API_URL +
    `/weather?q=${cityInput}&units=metric&appid=${apiKey}`;

  useEffect(() => {
    fetch(apiURL)
      .then((res) => res.json())
      .then((data) => {
        setDataObtained(data.cod === 200);
        setApiData(
          data.cod === 200
            ? {
                city: data.name,
                temp: data.main.temp,
                feels_like: data.main.feels_like,
                temp_max: data.main.temp_max,
                temp_min: data.main.temp_min,
                humidity: data.main.humidity,
              }
            : {}
        );
      })
      .catch((error) => {
        console.log("error ", alert(error.message));
      });
  }, [apiURL]);

  const cityInputHandler = (city) => {
    setCityInput(city);
  };

  console.log(`data for ${cityInput} is obtained ${dataObtained}`);

  return (
    <React.Fragment>
      <Header />
      <Location onCityInput={cityInputHandler} />
      {dataObtained && <Weather apiData={apiData} />}
    </React.Fragment>
  );
}

export default App;
