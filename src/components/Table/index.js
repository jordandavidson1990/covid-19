import React from "react";
import CountUp from "react-countup";
import "./Table.css";

export default function Table({ data }) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>New Confirmed</th>
            <td>
              <CountUp
                start={0}
                end={data.NewConfirmed}
                duration={1.5}
                separator={","}
              />
            </td>
          </tr>
          <tr>
            <th>New Deaths</th>
            <td>
              <CountUp
                start={0}
                end={data.NewDeaths}
                duration={1.5}
                separator={","}
              />
            </td>
          </tr>
          <tr>
            <th>New Recovered</th>
            <td>
              <CountUp
                start={0}
                end={data.NewRecovered}
                duration={1.5}
                separator={","}
              />
            </td>
          </tr>
          <tr>
            <th>Total Confirmed</th>
            <td>
              <CountUp
                start={0}
                end={data.TotalConfirmed}
                duration={1.5}
                separator={","}
              />
            </td>
          </tr>
          <tr>
            <th>Total Deaths</th>
            <td>
              <CountUp
                start={0}
                end={data.TotalDeaths}
                duration={1.5}
                separator={","}
              />
            </td>
          </tr>
          <tr>
            <th>Total Recovered</th>

            <td>
              <CountUp
                start={0}
                end={data.TotalRecovered}
                duration={1.5}
                separator={","}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
