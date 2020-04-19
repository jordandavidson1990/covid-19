import React from "react";

export default function DateHeader() {
  const d = Date.now();
  const dtf = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "2-digit",
  });
  const [{ value: mo }, , { value: da }, , { value: ye }] = dtf.formatToParts(
    d
  );

  const formattedDate = `${da}-${mo}-${ye}`;

  return <h5>{formattedDate}</h5>;
}
