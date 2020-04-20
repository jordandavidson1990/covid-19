import React, { useState, useEffect } from "react";
import CountryPicker from "./components/CountryPicker";
import GlobalStats from "./components/GlobalStats";
import CountryDetail from "./components/CountryDetail";
import AllCountries from "./components/AllCountries";
import SearchBox from "./components/SearchBox";
import Header from "./components/Header";
import { fetchData } from "./helpers/requests";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState({});
  const [allCountries, setAllCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    async function fetchInfo() {
      await fetchData().then(function (res) {
        setData(res.data);
        getAllCountries(res.data.Countries);
      });
    }
    fetchInfo();
  }, []);

  const handleCountrySelect = (countryName) => {
    const foundCountry = data.Countries.find((country) => {
      return country.Country === countryName;
    });
    setSelectedCountry(foundCountry);
  };

  const handleFullCountry = (country) => {
    setSelectedCountry(country);
  };

  function getAllCountries(allCountries) {
    return allCountries.map(function (country) {
      setFilteredCountries((prev) => [...prev, country]);
      return setAllCountries((prev) => [...prev, country]);
    });
  }

  function onSearch(letter) {
    setFilteredCountries(
      allCountries.filter((country) => {
        return country.Country.toLowerCase().search(letter) !== -1;
      })
    );
  }
  return (
    <div className="App">
      <Header />
      {data ? (
        <>
          <GlobalStats data={data.Global} />
          <CountryPicker
            countries={data.Countries}
            handleCountry={handleCountrySelect}
          />
          <SearchBox onSearch={onSearch} />
          <CountryDetail country={selectedCountry} />

          <AllCountries
            countries={filteredCountries}
            handleCountry={handleFullCountry}
          />
        </>
      ) : null}
    </div>
  );
}

export default App;
