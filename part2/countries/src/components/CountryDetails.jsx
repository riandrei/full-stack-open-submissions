import { useEffect, useState } from "react";

import countriesService from "../services/countriesService";

const CountryDetails = ({ filteredCountry }) => {
  const [countryWeather, setCountryWeather] = useState(null);

  useEffect(() => {
    countriesService
      .getCountryWeather(filteredCountry.capital)
      .then((data) => setCountryWeather(data));
  }, []);

  return (
    <div>
      <h1>{filteredCountry.name.common}</h1>
      <p>capital {filteredCountry.capital}</p>
      <p>area {filteredCountry.area}</p>
      <h4>languages:</h4>
      <ul>
        {Object.values(filteredCountry.languages).map((language) => (
          <li key={language}>{language}</li>
        ))}
      </ul>
      <img src={filteredCountry.flags.png} alt={filteredCountry.flags.alt} />
      <h2>Weather in {filteredCountry.capital}</h2>
      {!countryWeather ? (
        <p>Weather loading...</p>
      ) : (
        <>
          <p>temperature {countryWeather.main.temp} Celcius</p>
          <img
            src={`https://openweathermap.org/img/wn/${countryWeather.weather[0].icon}@2x.png`}
            alt=""
          />
          <p>wind {countryWeather.wind.speed} m/s</p>
        </>
      )}
    </div>
  );
};
export default CountryDetails;
