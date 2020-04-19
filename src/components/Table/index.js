import React from "react";
import CountUp from "react-countup";

export default function Table({ data }) {
  const tdElements = () => {
    const tdElementsArray = [];
    for (const key in data) {
      if (data.hasOwnProperty(key)) {
        const element = data[key];
        tdElementsArray.push(
          <td key={key}>
            <CountUp start={0} end={element} duration={1.5} separator={","} />
          </td>
        );
      }
    }
    return tdElementsArray;
  };
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
          <tr>{tdElements()}</tr>
        </tbody>
      </table>
    </>
  );
}
