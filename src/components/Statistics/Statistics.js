import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Bar,
  ResponsiveContainer,
} from "recharts";

const Statistics = () => {
  const [qsnData, setData] = useState([]);
  useEffect(() => {
    axios
      .get("https://openapi.programming-hero.com/api/quiz")
      .then((data) => setData(data.data.data));
  }, []);
  return (
    <BarChart width={350} height={300} data={qsnData}>
      <Bar dataKey="total" fill="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </BarChart>
  );
};

export default Statistics;
