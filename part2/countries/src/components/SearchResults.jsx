import CountryPreview from "./CountryPreview";
import CountryDetails from "./CountryDetails";

const SearchResults = ({ filteredCountries }) => {
  const display = {
    fallback: <p>Too many matches, specify another filter</p>,
    list: filteredCountries?.map((filteredCountry) => (
      <CountryPreview
        key={filteredCountry.name.common}
        filteredCountry={filteredCountry}
      />
    )),
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

  return <>{display[mode]}</>;
};
export default SearchResults;
