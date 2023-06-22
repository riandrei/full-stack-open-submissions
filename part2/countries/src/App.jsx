import { useEffect, useState } from "react";

import Search from "./components/Search";
import SearchResults from "./components/SearchResults";
import countriesService from "./services/countriesService";

const App = () => {
  const [countries, setCountries] = useState(null);
  const [filteredCountries, setFilteredCountries] = useState(null);

  useEffect(() => {
    countriesService.getCountries().then((countries) => {
      setCountries(
        countries.map((country) => {
          const { name, capital, area, languages, flags } = country;

          return { name, capital, area, languages, flags };
        })
      );
    });
  }, []);

  return (
    <div>
      <Search
        countries={countries}
        setFilteredCountries={setFilteredCountries}
      />
      <SearchResults filteredCountries={filteredCountries} />
    </div>
  );
};
export default App;
