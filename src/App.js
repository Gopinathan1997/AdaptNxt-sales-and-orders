import React from "react";
import SalesOrdersChart from "./SalesOrdersChart";
import SalesPieChart from "./SalesPieChart";

function App() {
  return (
    <div>
      <h1>Sales vs Orders</h1>
      <SalesOrdersChart />
      <h1>Portion of Sales</h1>
      <SalesPieChart/>
    </div>
  );
}

export default App;
