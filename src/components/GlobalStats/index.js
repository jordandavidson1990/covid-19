import React from "react";
import DateHeader from "../DateHeader";
import Table from "../Table";

export default function GlobalStats({ data, dateStat }) {
  if (!data) return null;

  return (
    <>
      <h1>Global Stats</h1>
      {dateStat ? <DateHeader dateStat={dateStat} /> : null}
      <Table data={data} />
    </>
  );
}
