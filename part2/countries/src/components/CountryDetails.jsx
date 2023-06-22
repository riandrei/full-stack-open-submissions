const CountryDetails = ({ filteredCountry }) => {
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
    </div>
  );
};
export default CountryDetails;
