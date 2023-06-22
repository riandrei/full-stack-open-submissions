const CountryList = ({ filteredCountries }) => {
  return (
    <div>
      {filteredCountries.map((filteredCountry) => (
        <p key={filteredCountry.area}>{filteredCountry.name.common}</p>
      ))}
    </div>
  );
};
export default CountryList;
