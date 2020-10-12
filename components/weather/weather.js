import React, { useEffect, useState } from "react";
import { getWeather, getWeatherIconUrl } from "../../services/weather";
import styles from "./weather.module.css";

const Weather = () => {
  const [data, setData] = useState(null);

  const updateWeather = async () =>
    getWeather()
      .then(({ data }) => {
        setData(data);
      })
      .catch(console.error);

  useEffect(() => {
    updateWeather();
    const updateInterval = setInterval(updateWeather, 30 * 60 * 1000); // Half hour

    return () => {
      clearInterval(updateInterval);
    };
  }, []);

  if (!data) return "...";

  const { main, weather } = data;
  return (
    <div className={`widget ${styles.container}`}>
      <div className={styles.temp}>
        {weather.length && (
          <img
            src={getWeatherIconUrl(weather[0].icon)}
            alt={weather[0].description}
          />
        )}

        <span>{Math.round(main.temp)}º</span>
      </div>
      <span>Feels like {Math.round(main.feels_like)}º</span>
    </div>
  );
};

export default Weather;
