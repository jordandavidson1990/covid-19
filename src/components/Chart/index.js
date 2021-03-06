import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../helpers/requests";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

export default function Chart() {
  const [dailyData, setDailyData] = useState([]);

  useEffect(() => {
    const fetchApi = async () => {
      setDailyData(await fetchDailyData());
    };
    fetchApi();
  });

  const lineChart = dailyData.length ? (
    <Line
      data={{
        labels: dailyData.map(({ date }) => date),
        datasets: [
          {
            data: dailyData.map(({ confirmed }) => confirmed),
            label: "Infected",
            borderColor: "rgb(75, 10, 100)",
            fill: true,
          },
          {
            data: dailyData.map(({ deaths }) => deaths),
            label: "Deaths",
            borderColor: "red",
            backgroundColor: "rgba(255, 0,0,0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div className="styles.container">{lineChart}</div>;
}
