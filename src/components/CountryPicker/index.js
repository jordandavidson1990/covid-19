import React from "react";

export default function CountryPicker({ countries, handleCountry }) {
  if (!countries) return "Loading...";

  const countriesOptions = countries.map((country, index) => {
    return (
      <option value={country.Country} key={index}>
        {country.Country}
      </option>
    );
  });

  const handleSelect = (event) => {
    handleCountry(event.target.value);
  };
  return (
    <>
      <h1>Country Picker</h1>
      <select onChange={handleSelect} defaultValue="DEFAULT">
        <option value="DEFAULT" disabled>
          Choose a country...
        </option>
        {countriesOptions}
      </select>
    </>
  );
}
