import React from "react";

export default function DateHeader({ dateStat }) {
  const formattedDate = new Date(dateStat).toDateString();
  return <h5>{formattedDate}</h5>;
}
