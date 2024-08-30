import React from "react";
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

// Sample data
const data = [
  { startDate: "2024-06-30", orders: 4, sales: 1404 },
  { startDate: "2024-07-07", orders: 3, sales: 1200 },
  { startDate: "2024-07-14", orders: 2, sales: 800 },
  { startDate: "2024-07-21", orders: 2, sales: 600 },
];

// Custom Tooltip for showing start date range, average order value, and color dots
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    const currentStartDate = label;
    const nextDataPoint = payload[0]?.payload?.startDateNext || "End";
    const orders = payload[0]?.value;
    const sales = payload[1]?.value;
    const avgOrderValue = (sales / orders).toFixed(2); // Calculating average order value

    return (
      <div
        className="custom-tooltip"
        style={{
          backgroundColor: "#fff",
          padding: "10px",
          border: "1px solid #ccc",
        }}
      >
        <p>{` ${currentStartDate} - ${nextDataPoint}`}</p>
        <p>
          <span style={{ color: "#8884d8", marginRight: "5px" }}>●</span>
          {`Orders: ${orders}`}
        </p>
        <p>
          <span style={{ color: "#ffA500", marginRight: "5px" }}>●</span>
          {`Sales: ${sales}`}
        </p>
        <p>
          <span style={{ color: "000", marginRight: "5px" }}>●</span>
          {`Avg Order Value: ${avgOrderValue}`}
        </p>
      </div>
    );
  }

  return null;
};

// Preparing the data with next start date
const preparedData = data.map((entry, index) => {
  const nextEntry = data[index + 1];
  return {
    ...entry,
    startDateNext: nextEntry ? nextEntry.startDate : "End",
  };
});

const SalesOrderChart = () => (
  <ResponsiveContainer width="100%" height={400}>
    <LineChart
      data={preparedData}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="startDate" />
      <YAxis yAxisId="left" />
      <YAxis yAxisId="right" orientation="right" />
      <Tooltip content={<CustomTooltip />} />
      <Legend />
      <Line
        yAxisId="left"
        type="monotone"
        dataKey="orders"
        stroke="#8884d8"
        activeDot={{ r: 8 }}
      />
      <Line yAxisId="right" type="monotone" dataKey="sales" stroke="#ffA500" />
    </LineChart>
  </ResponsiveContainer>
);

export default SalesOrderChart;
