import React, { useState } from "react";

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
          <td>{country.Country.toLocaleString()} </td>
          <td>{country.TotalConfirmed.toLocaleString()}</td>
          <td>{country.TotalDeaths.toLocaleString()}</td>
          <td>{country.NewDeaths.toLocaleString()}</td>
        </tr>
      );
    });
  if (!countries) return null;
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>
              {alphabeticalSorted ? (
                <p onClick={() => rearrangeList("alphaOrder")}>Country ▽</p>
              ) : (
                <p onClick={() => rearrangeList("nonAlphaOrder")}>Country △</p>
              )}
            </th>
            <th>
              {confirmRateHigh ? (
                <p onClick={() => rearrangeList("highConfirm")}>
                  Total Confirmed △
                </p>
              ) : (
                <p onClick={() => rearrangeList("lowConfirm")}>
                  Total Confirmed ▽
                </p>
              )}
            </th>
            <th>
              {deathRateHigh ? (
                <p onClick={() => rearrangeList("highDeath")}>Total Deaths △</p>
              ) : (
                <p onClick={() => rearrangeList("lowDeath")}>Total Deaths ▽</p>
              )}
            </th>
            <th>
              {dailyDeath ? (
                <p onClick={() => rearrangeList("highDaily")}>Daily Death △</p>
              ) : (
                <p onClick={() => rearrangeList("lowDaily")}>Daily Death ▽</p>
              )}
            </th>
          </tr>
          {showSort ? tableRows(sortedCountries) : tableRows(countries)}
        </tbody>
      </table>
    </>
  );
}
