import React from "react";

export default function Header({ loading }) {
  if (loading) return "We Loading a lot of Countries...";
  return <h1>Covid-19 Tracker</h1>;
}
