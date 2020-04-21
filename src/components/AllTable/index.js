import React, { useState } from "react";
import "./AllTable.css";

export default function AllTable({ countries, handleCountry }) {
  const [sortedCountries, setSortedCountries] = useState(countries);
  const [deathRateHigh, setDeathRateHigh] = useState(true);
  const [confirmRateHigh, setConfirmRateHigh] = useState(true);
  const [alphabeticalSorted, setAlphabeticalSorted] = useState(true);
  const [dailyDeath, setDailyDeath] = useState(true);
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
        }
        if (level === "highDaily") {
          setDailyDeath(false);
          return b.NewDeaths - a.NewDeaths;
        }
        if (level === "lowDaily") {
          setDailyDeath(true);
          return a.NewDeaths - b.NewDeaths;
        }
        if (level === "alphaOrder") {
          setAlphabeticalSorted(false);
          return a.Country.localeCompare(b.Country);
        }
        if (level === "nonAlphaOrder") {
          setAlphabeticalSorted(true);
          return b.Country.localeCompare(a.Country);
        } else {
          return null;
        }
      });
      return setSortedCountries(sorted);
    }
    return new Promise(sortArray).then(setShowSort(true));
  };

  const handleClick = (country) => {
    handleCountry(country);
  };

  const tableRows = (array) =>
    array.map((country, index) => {
      return (
        <tr
          key={index}
          onClick={() => handleClick(country)}
          className="table-row"
        >
          <td>{country.Country.toLocaleString()} </td>
          <td className="confirmed">
            {country.TotalConfirmed.toLocaleString()}
          </td>
          <td className="deaths">{country.TotalDeaths.toLocaleString()}</td>
          <td className="new-deaths">{country.NewDeaths.toLocaleString()}</td>
        </tr>
      );
    });
  if (!countries) return null;
  return (
    <>
      <table className="all-table-container">
        <tbody className="all-table">
          <tr>
            {alphabeticalSorted ? (
              <th onClick={() => rearrangeList("alphaOrder")}>Country ▽</th>
            ) : (
              <th onClick={() => rearrangeList("nonAlphaOrder")}>Country △</th>
            )}
            {confirmRateHigh ? (
              <th onClick={() => rearrangeList("highConfirm")}>
                Total Confirmed △
              </th>
            ) : (
              <th onClick={() => rearrangeList("lowConfirm")}>
                Total Confirmed ▽
              </th>
            )}
            {deathRateHigh ? (
              <th onClick={() => rearrangeList("highDeath")}>Total Deaths △</th>
            ) : (
              <th onClick={() => rearrangeList("lowDeath")}>Total Deaths ▽</th>
            )}
            {dailyDeath ? (
              <th onClick={() => rearrangeList("highDaily")}>Daily Death △</th>
            ) : (
              <th onClick={() => rearrangeList("lowDaily")}>Daily Death ▽</th>
            )}
          </tr>
          {showSort ? tableRows(sortedCountries) : tableRows(countries)}
        </tbody>
      </table>
    </>
  );
}
