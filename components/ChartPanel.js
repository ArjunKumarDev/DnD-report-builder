import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Line, Doughnut, Pie } from "react-chartjs-2";
import React from "react";

const chartComponents = {
  bar: Bar,
  line: Line,
  doughnut: Doughnut,
  pie: Pie,
};

const ChartPanel = React.memo(({ metrics, chartType, chartOptions }) => {
  // Get the appropriate chart component
  const ChartComponent = chartComponents[chartType] || Bar;

  // Prepare the chart data
  const data = {
    labels: metrics.map((m) => m.name),
    datasets: [
      {
        label: "Metrics",
        data: metrics.map((m) => m.value),
        backgroundColor:
          chartType === "doughnut" || chartType === "pie"
            ? [
                chartOptions.backgroundColor,
                "rgba(255, 99, 132, 0.2)",
                "rgba(54, 162, 235, 0.2)",
                "rgba(255, 206, 86, 0.2)",
                "rgba(153, 102, 255, 0.2)",
              ]
            : chartOptions.backgroundColor,
        borderColor:
          chartType === "doughnut" || chartType === "pie"
            ? [
                chartOptions.borderColor,
                "rgba(255, 99, 132, 1)",
                "rgba(54, 162, 235, 1)",
                "rgba(255, 206, 86, 1)",
                "rgba(153, 102, 255, 1)",
              ]
            : chartOptions.borderColor,
        borderWidth: 1,
      },
    ],
  };

  // Prepare the chart options
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: chartOptions.showLegend,
      },
    },
    scales:
      chartOptions.showAxes && (chartType === "bar" || chartType === "line")
        ? {
            x: { beginAtZero: true },
            y: { beginAtZero: true },
          }
        : {},
  };

  return (
    <div className="w-full h-full">
      <ChartComponent data={data} options={options} />
    </div>
  );
});

export default ChartPanel;
