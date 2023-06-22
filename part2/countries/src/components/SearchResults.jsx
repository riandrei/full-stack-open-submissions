import CountryList from "./CountryList";
import CountryDetails from "./CountryDetails";

const SearchResults = ({ filteredCountries }) => {
  const display = {
    fallback: <p>Too many matches, specify another filter</p>,
    list: <CountryList filteredCountries={filteredCountries} />,
    details: (
      <CountryDetails
        filteredCountry={filteredCountries ? filteredCountries[0] : ""}
      />
    ),
  };

  const mode =
    filteredCountries?.length === 1
      ? "details"
      : filteredCountries?.length < 10
      ? "list"
      : "fallback";

  return <div>{display[mode]}</div>;
};
export default SearchResults;
