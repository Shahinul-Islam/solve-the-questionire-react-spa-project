import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  BarChart,
  Legend,
  Bar,
} from "recharts";

const Statistics = () => {
  // const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400}, ...];
  const [qsnData, setData] = useState([]);
  console.log(qsnData);
  useEffect(() => {
    /* fetch("https://openapi.programming-hero.com/api/quiz")
      .then((res) => res.json())
      .then((data) => setData(data.data)); */
    axios
      .get("https://openapi.programming-hero.com/api/quiz")
      .then((data) => setData(data.data.data));
  }, []);
  //   qsnData.map((data) => console.log(data));
  return (
    <BarChart width={550} height={450} data={qsnData}>
      <Bar dataKey="total" fill="#8884d8" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </BarChart>
  );
};

export default Statistics;
