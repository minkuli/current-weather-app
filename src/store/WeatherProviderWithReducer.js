import { useReducer } from "react";
import WeatherContext from "./weather-context";

const defaultWeatherState = {
  data: {
    city: "",
    temp: null,
    low_temp: null,
    high_temp: null,
    humidity: null,
    real_feel: null,
    description: "",
    icon: null,
  },
};

const weatherReducer = (state, action) => {
  if (action.type === "GET_WEATHER") {
    fetch(
      process.env.REACT_APP_API_URL +
        `/weather?q=${action.city}&units=metric&appid=db61d108ea002a8adab186b7c373b5dd`
    )
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          throw new Error("Something went wrong");
        }
      })
      .then((resJson) => {
        return {
          data: {
            city: resJson.city,
            temp: Math.round(resJson.main.temp),
            feels_like: Math.round(resJson.main.feels_like),
            temp_max: Math.round(resJson.main.temp_max),
            temp_min: Math.round(resJson.main.temp_min),
            humidity: resJson.main.humidity,
            icon: resJson.weather[0].icon,
            description: resJson.weather[0].main,
          },
          error: {
            cod: resJson.cod,
            message: resJson.message,
          },
          loading: false,
        };
      })
      .catch((error) => alert(error));
  }
  return defaultWeatherState;
};

const WeatherProviderOld = (props) => {
  const [weatherState, dispatchWeatherAction] = useReducer(
    weatherReducer,
    defaultWeatherState
  );

  const getWeatherHandler = (city) => {
    dispatchWeatherAction({ type: "GET_WEATHER", city: city });
  };

  const weatherContext = {
    data: {
      city: weatherState.city,
      temp: weatherState.temp,
      low_temp: weatherState.low_temp,
      high_temp: weatherState.high_temp,
      humidity: weatherState.humidity,
      real_feel: weatherState.real_feel,
      description: weatherState.description,
      icon: weatherState.icon,
    },
    error: weatherState.error,
    loading: weatherState.loading,
    getWeather: getWeatherHandler,
  };

  return (
    <WeatherContext.Provider value={weatherContext}>
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherProviderOld;
