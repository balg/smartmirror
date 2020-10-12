import axios from "axios";

const apiKey = "8736f3e72340670a72650fd60ac512ee";
const zipCode = "1094";
const baseUrl = "api.openweathermap.org/data/2.5/weather";

export const getWeather = async () =>
  axios.get(`https://${baseUrl}`, {
    params: {
      units: "metric",
      zip: `${zipCode},hu`,
      appid: apiKey,
    },
  });

export const getWeatherIconUrl = (iconId) =>
  `http://openweathermap.org/img/wn/${iconId}@2x.png`;
