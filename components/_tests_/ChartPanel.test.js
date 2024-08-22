// ChartPanel.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import ChartPanel from "../ChartPanel";
import { Bar, Line, Doughnut, Pie } from "react-chartjs-2";

// Mocking Chart.js and react-chartjs-2
jest.mock("react-chartjs-2", () => ({
  Bar: jest.fn(() => <div>Bar Chart</div>),
  Line: jest.fn(() => <div>Line Chart</div>),
  Doughnut: jest.fn(() => <div>Doughnut Chart</div>),
  Pie: jest.fn(() => <div>Pie Chart</div>),
}));

describe("ChartPanel", () => {
  const metrics = [
    { name: "Metric 1", value: 10 },
    { name: "Metric 2", value: 20 },
  ];

  const chartOptions = {
    backgroundColor: "rgba(255, 99, 132, 0.2)",
    borderColor: "rgba(255, 99, 132, 1)",
    showLegend: true,
    showAxes: true,
  };

  it("renders a Bar chart by default", () => {
    render(
      <ChartPanel
        metrics={metrics}
        chartType="bar"
        chartOptions={chartOptions}
      />
    );
    expect(screen.getByText(/Bar Chart/i)).toBeInTheDocument();
  });

  it("renders a Line chart when chartType is 'line'", () => {
    render(
      <ChartPanel
        metrics={metrics}
        chartType="line"
        chartOptions={chartOptions}
      />
    );
    expect(screen.getByText(/Line Chart/i)).toBeInTheDocument();
  });

  it("renders a Doughnut chart when chartType is 'doughnut'", () => {
    render(
      <ChartPanel
        metrics={metrics}
        chartType="doughnut"
        chartOptions={chartOptions}
      />
    );
    expect(screen.getByText(/Doughnut Chart/i)).toBeInTheDocument();
  });

  it("renders a Pie chart when chartType is 'pie'", () => {
    render(
      <ChartPanel
        metrics={metrics}
        chartType="pie"
        chartOptions={chartOptions}
      />
    );
    expect(screen.getByText(/Pie Chart/i)).toBeInTheDocument();
  });

  it("renders the correct data and options for the chart", () => {
    render(
      <ChartPanel
        metrics={metrics}
        chartType="bar"
        chartOptions={chartOptions}
      />
    );
    // Check if the chart is receiving the correct data and options
    expect(Bar).toHaveBeenCalledWith(
      {
        data: {
          labels: ["Metric 1", "Metric 2"],
          datasets: [
            {
              label: "Metrics",
              data: [10, 20],
              backgroundColor: "rgba(255, 99, 132, 0.2)",
              borderColor: "rgba(255, 99, 132, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: { display: true },
          },
          scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true },
          },
        },
      },
      {}
    );
  });
});
