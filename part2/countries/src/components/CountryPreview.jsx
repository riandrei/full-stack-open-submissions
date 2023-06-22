import { useState } from "react";

import CountryDetails from "./CountryDetails";

const CountryPreview = ({ filteredCountry }) => {
  const [showDetail, setShowDetail] = useState(false);

  const handleButtonClick = () => {
    setShowDetail(!showDetail);
  };

  return (
    <div>
      <p>
        {filteredCountry.name.common}
        <button onClick={handleButtonClick}>show</button>
      </p>
      {showDetail && <CountryDetails filteredCountry={filteredCountry} />}
    </div>
  );
};
export default CountryPreview;
