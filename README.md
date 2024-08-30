# Sales Dashboard

A React-based Sales Dashboard that visualizes sales data using two main components:
1. **SalesOrderChart** - A line chart displaying the number of orders and sales over time.
2. **SalesPieChart** - A pie chart representing the portion of sales from different sources.

## Features

- **Dual Visualization:**
  - **SalesOrderChart:** Plots orders and sales on a dual Y-axis line chart, showing trends over time.
  - **SalesPieChart:** Provides a percentage breakdown of sales from different sources with total sales displayed at the center.

- **Custom Tooltip:** 
  - **SalesOrderChart:** Displays detailed data on hover, including the start date range, orders, sales, average order value, and corresponding color indicators.
  
- **Responsive Design:** Both charts adjust seamlessly to different screen sizes.

## Installation

1. Clone this repository:

    ```bash
    git clone https://github.com/gopinathan1997/adaptnxt-sales-and-orders.git
    ```

2. Navigate to the project directory:

    ```bash
    cd sales-dashboard
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

## Usage

You can view both the Sales Pie Chart and the Sales & Orders Line Chart on a single page in the `App.js` file.

### Tooltip

- **SalesOrderChart Tooltip** includes:
  - **Range:** Start date of the current and next data point.
  - **Orders:** Number of orders.
  - **Sales:** Total sales.
  - **Avg Order Value:** Calculated average order value.
  - **Color Dots:** Representing the orders and sales lines.

- **SalesPieChart Tooltip** includes:
  - **Percentage:** The portion of sales from each source.
  - **Total Sales:** Displayed in the center of the pie chart.

## Dependencies

- **React:** `^18.0.0`
- **Recharts:** `^2.0.0`

Ensure you have these dependencies installed in your project:

```bash
    npm install react recharts
```

Running the Project

To start the development server and view the dashboard:

```bash
    npm start
```

The dashboard will be accessible at http://localhost:3000.
