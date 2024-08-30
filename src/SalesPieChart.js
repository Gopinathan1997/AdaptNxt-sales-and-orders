import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";

// Sample static data
const data = [
  { name: "WooCommerce Store", value: 1404 },
  { name: "Shopify Store", value: 1255 },
];

// Calculate total sales
const totalSales = data.reduce((acc, item) => acc + item.value, 0);

// Colors for the pie chart
const COLORS = ["#FF6384", "#36A2EB"];

// Custom label function for percentage inside portions
const renderCustomLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const RADIAN = Math.PI / 180;
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

// Custom label function for total sales in the center
const renderCenterLabel = ({ viewBox }) => {
  const { cx, cy } = viewBox;
  return (
    <text
      x={cx}
      y={cy}
      fill="black"
      textAnchor="middle"
      dominantBaseline="central"
      style={{ fontSize: "24px", fontWeight: "bold" }}
    >
      {`Total: ${totalSales}`}
    </text>
  );
};

const SalesPieChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
          <Label content={renderCenterLabel} position="center" />
        </Pie>
        <Tooltip />
        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default SalesPieChart;
