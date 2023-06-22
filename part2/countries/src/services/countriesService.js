import axios from "axios";

const baseUrl = `https://studies.cs.helsinki.fi/restcountries/api/all`;

const getCountries = () => {
  const request = axios.get(baseUrl);

  return request.then((response) => response.data);
};

const getCountryWeather = (capital) => {
  const apiKey = import.meta.env.VITE_OPEN_WEATHER_API_KEY;
  const openWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${capital}&units=metric&appid=${apiKey}`;

  const request = axios.get(openWeatherUrl);

  return request.then((response) => response.data);
};

export default { getCountries, getCountryWeather };
