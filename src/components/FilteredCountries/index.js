import React from "react";
import AllTable from "../AllTable";

export default function FilteredCountries({ countries, handleCountry }) {
  if (!countries) return null;
  return <AllTable countries={countries} handleCountry={handleCountry} />;
}
