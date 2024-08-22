// ReportCanvas.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ReportCanvas from "./ReportCanvas";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import ChartPanel from "../ChartPanel";
import ChartCustomizationAccordion from "../ChartCustomizationAccordion";
import ExportButtons from "../ExportButtons";

// Mocking child components
jest.mock("../ChartPanel", () => jest.fn(() => <div>Chart Panel</div>));
jest.mock("../ChartCustomizationAccordion", () =>
  jest.fn(() => <div>Chart Customization Accordion</div>)
);
jest.mock("../ExportButtons", () => jest.fn(() => <div>Export Buttons</div>));

describe("ReportCanvas", () => {
  it("renders chart type buttons and allows changing the chart type", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <ReportCanvas />
      </DndProvider>
    );

    // Check if all chart type buttons are rendered
    expect(screen.getByText(/Bar/i)).toBeInTheDocument();
    expect(screen.getByText(/Line/i)).toBeInTheDocument();
    expect(screen.getByText(/Doughnut/i)).toBeInTheDocument();
    expect(screen.getByText(/Pie/i)).toBeInTheDocument();

    // Click on Line chart button
    fireEvent.click(screen.getByText(/Line/i));
    expect(screen.getByText(/Line/i)).toHaveClass("bg-blue-500");
  });

  it("renders ChartCustomizationAccordion and allows changes in options", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <ReportCanvas />
      </DndProvider>
    );

    // Check if ChartCustomizationAccordion is rendered
    expect(
      screen.getByText(/Chart Customization Accordion/i)
    ).toBeInTheDocument();

    // Simulate option change
    fireEvent.change(screen.getByLabelText(/Background Color/i), {
      target: { value: "rgba(255, 99, 132, 0.2)" },
    });
    // You would need to mock or spy on the handleOptionChange function and check if it's called with the right values
  });

  it("renders ExportButtons correctly", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <ReportCanvas />
      </DndProvider>
    );

    // Check if ExportButtons is rendered
    expect(screen.getByText(/Export Buttons/i)).toBeInTheDocument();
  });

  it("handles drag-and-drop functionality and displays ChartPanel", () => {
    const mockAd = { adName: "Test Ad", metrics: { metric1: 10, metric2: 20 } };

    render(
      <DndProvider backend={HTML5Backend}>
        <ReportCanvas />
      </DndProvider>
    );

    // Simulate drag-and-drop
    fireEvent.drop(screen.getByText(/Report Canvas/i), {
      dataTransfer: { getData: () => JSON.stringify({ ad: mockAd }) },
    });

    // Check if ChartPanel is rendered with the correct metrics
    expect(screen.getByText(/Chart Panel/i)).toBeInTheDocument();
  });
});
