import { useEffect, useState } from "react";

const Search = ({ countries, setFilteredCountries }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    if (countries) {
      setFilteredCountries(
        countries.filter((country) => {
          return country.name.common
            .toLowerCase()
            .includes(searchQuery.toLowerCase());
        })
      );
    }
  }, [searchQuery]);

  return (
    <>
      find countries
      <input type="text" value={searchQuery} onChange={handleInputChange} />
    </>
  );
};
export default Search;
