import React from "react";
import AllTable from "../AllTable";

export default function AllCountries({ countries, handleCountry }) {
  return <AllTable countries={countries} handleCountry={handleCountry} />;
}
