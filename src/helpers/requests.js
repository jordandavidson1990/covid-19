import axios from "axios";

const url = "https://api.covid19api.com/summary";
export const fetchData = async () => {
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {}
};

const dailyUrl = "https://covid19.mathdro.id/api";

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${dailyUrl}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));
    return modifiedData;
  } catch (error) {}
};
