import React, { useState, useEffect } from "react";
import CountryPicker from "./components/CountryPicker";
import GlobalStats from "./components/GlobalStats";
import CountryDetail from "./components/CountryDetail";
import AllCountries from "./components/AllCountries";
import Header from "./components/Header";
import { fetchData } from "./helpers/requests";
import "./App.css";

function App() {
  const [data, setData] = useState({});
  const [selectedCountry, setSelectedCountry] = useState({});
  const [allCountries, setAllCountries] = useState([]);

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
      return setAllCountries((prev) => [...prev, country]);
    });
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
          <CountryDetail country={selectedCountry} />
          <AllCountries
            countries={allCountries}
            handleCountry={handleFullCountry}
          />
        </>
      ) : null}
    </div>
  );
}

export default App;
