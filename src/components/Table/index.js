import React from "react";
import CountUp from "react-countup";

export default function Table({ data }) {
  return (
    <>
      <table>
        <tbody>
          <tr>
            <th>New Confirmed</th>
            <th>New Deaths</th>
            <th>New Recovered</th>
            <th>Total Confirmed</th>
            <th>Total Deaths</th>
            <th>Total Recovered</th>
          </tr>
          <tr>
            <td>
              <CountUp
                start={0}
                end={data.NewConfirmed}
                duration={1.5}
                separator={","}
              />
            </td>
            <td>
              <CountUp
                start={0}
                end={data.NewDeaths}
                duration={1.5}
                separator={","}
              />
            </td>
            <td>
              <CountUp
                start={0}
                end={data.NewRecovered}
                duration={1.5}
                separator={","}
              />
            </td>
            <td>
              <CountUp
                start={0}
                end={data.TotalConfirmed}
                duration={1.5}
                separator={","}
              />
            </td>
            <td>
              <CountUp
                start={0}
                end={data.TotalDeaths}
                duration={1.5}
                separator={","}
              />
            </td>
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
