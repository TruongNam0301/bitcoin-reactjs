import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import priceRealTime from "../../../api/priceRealTimeApi";
import usePrevious from "../../../hooks/usePreviousValue";
export default function ChartRealtime({ nameCoin }) {
  const [chartData, setChartData] = useState([
    {
      name: "Page A",
      amt: 2400.125,
    },
    {
      name: "Page B",

      amt: 2210.457,
    },
  ]);
  const [yValue, setYValue] = useState([0, 2]);
  const getTime = () => {
    var timeNow = new Date();
    var hours = timeNow.getHours();
    var minutes = timeNow.getMinutes();
    var seconds = timeNow.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
  };
  const previous = usePrevious(nameCoin);

  const fetch = async () => {
    const response = await priceRealTime.get(nameCoin);
    const object = {
      name: getTime(),
      amt: response.data.data.price,
    };
    setChartData([object, object]);
    const y = Math.ceil(response.data.data.price).toString();
    // const valueStart = parseInt(y.charAt(0).padEnd(y.length, "0"),10);
    // const End = parseInt(y.charAt(0).padEnd(y.length, "0"),10);
    // setYValue([value-])
  };

  useEffect(() => {
    if (previous) {
      if (previous !== nameCoin) fetch();
    }
  }, [fetch]);
  useEffect(() => {
    const interval = setInterval(async () => {
      const response = await priceRealTime.get(nameCoin);
      const object = {
        name: getTime(),
        amt: response.data.data.price,
      };
      if (chartData.length > 7) {
        const arr = chartData;
        arr.shift();
        setChartData([...arr, object]);
      } else {
        setChartData([...chartData, object]);
      }
    }, 10000);
    return () => clearInterval(interval);
  }, [chartData]);
  return (
    <>
      {nameCoin}
      <ResponsiveContainer width="100%" height={500}>
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="amt"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
