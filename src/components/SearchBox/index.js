import React from "react";

export default function SearchBox({ onSearch }) {
  function handleSearch(event) {
    onSearch(event.target.value.toLowerCase());
  }

  return <input placeholder="Search..." onKeyUp={handleSearch} />;
}
