import React, { useState } from "react";

export default function AllTable({ countries, handleCountry }) {
  const [sortedCountries, setSortedCountries] = useState(countries);
  const [deathRateHigh, setDeathRateHigh] = useState(true);
  const [confirmRateHigh, setConfirmRateHigh] = useState(true);
  const [showSort, setShowSort] = useState(false);
  const rearrangeList = (level) => {
    function sortArray() {
      const sorted = [...countries].sort((a, b) => {
        if (level === "highDeath") {
          setDeathRateHigh(false);
          return b.TotalDeaths - a.TotalDeaths;
        }
        if (level === "lowDeath") {
          setDeathRateHigh(true);
          return a.TotalDeaths - b.TotalDeaths;
        }
        if (level === "highConfirm") {
          setConfirmRateHigh(false);
          return b.TotalConfirmed - a.TotalConfirmed;
        }
        if (level === "lowConfirm") {
          setConfirmRateHigh(true);
          return a.TotalConfirmed - b.TotalConfirmed;
        } else {
          console.log("error");
        }
      });
      setSortedCountries(sorted);
    }
    new Promise(sortArray).then(setShowSort(true));
  };

  const handleClick = (country) => {
    handleCountry(country);
  };

  const tableRows = (array) =>
    array.map((country, index) => {
      return (
        <tr key={index} onClick={() => handleClick(country)}>
          <td>{country.Country.toLocaleString()}</td>
          <td>{country.TotalConfirmed.toLocaleString()}</td>
          <td>{country.TotalDeaths.toLocaleString()}</td>
        </tr>
      );
    });
  if (!countries) return null;
  return (
    <>
      {confirmRateHigh ? (
        <button onClick={() => rearrangeList("highConfirm")}>
          Arrange by Highest Confirmed
        </button>
      ) : (
        <button onClick={() => rearrangeList("lowConfirm")}>
          Arrange by Lowest Confirmed
        </button>
      )}
      {deathRateHigh ? (
        <button onClick={() => rearrangeList("highDeath")}>
          Arrange by Highest Deaths
        </button>
      ) : (
        <button onClick={() => rearrangeList("lowDeath")}>
          Arrange by Lowest Deaths
        </button>
      )}

      <table>
        <tbody>
          <tr>
            <th>Country</th>
            <th>Total Confirmed</th>
            <th>Total Deaths</th>
          </tr>
          {showSort ? tableRows(sortedCountries) : tableRows(countries)}
        </tbody>
      </table>
    </>
  );
}
