import React from "react";
import "./DetailTable.css";

export default function DetailTable({
  data: {
    Country,
    NewConfirmed,
    NewDeaths,
    NewRecovered,
    TotalConfirmed,
    TotalDeaths,
    TotalRecovered,
  },
}) {
  if (!Country)
    return (
      <table className="hideTable">
        <tbody>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    );
  return (
    <div className="showTable">
      <table>
        <tbody>
          <tr>
            <th>Country</th>
            <th>New Confirmed</th>
            <th>New Deaths</th>
            <th>New Recovered</th>
            <th>Total Confirmed</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
          </tr>
          <tr>
            <td>{Country.toLocaleString()}</td>
            <td>{NewConfirmed.toLocaleString()}</td>
            <td>{NewDeaths.toLocaleString()}</td>
            <td>{NewRecovered.toLocaleString()}</td>
            <td>{TotalConfirmed.toLocaleString()}</td>
            <td>{TotalDeaths.toLocaleString()}</td>
            <td>{TotalRecovered.toLocaleString()}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
