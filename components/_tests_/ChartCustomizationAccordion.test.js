import { render, screen, fireEvent } from "@testing-library/react";
import ChartCustomizationAccordion from "../ChartCustomizationAccordion";
import React from "react";

describe("ChartCustomizationAccordion", () => {
  const chartOptions = {
    backgroundColor: "#ffffff",
    borderColor: "#000000",
    showLegend: true,
    showAxes: true,
  };
  const handleOptionChange = jest.fn();

  it("renders without crashing", () => {
    render(
      <ChartCustomizationAccordion
        chartOptions={chartOptions}
        handleOptionChange={handleOptionChange}
      />
    );
    expect(screen.getByText("Chart Customization")).toBeInTheDocument();
  });

  it("toggles accordion content when clicked", () => {
    render(
      <ChartCustomizationAccordion
        chartOptions={chartOptions}
        handleOptionChange={handleOptionChange}
      />
    );

    // Initially, content should not be visible
    expect(
      screen.queryByLabelText("Background Color:")
    ).not.toBeInTheDocument();

    // Click to open
    fireEvent.click(screen.getByText("Chart Customization"));
    expect(screen.getByLabelText("Background Color:")).toBeInTheDocument();

    // Click to close
    fireEvent.click(screen.getByText("Chart Customization"));
    expect(
      screen.queryByLabelText("Background Color:")
    ).not.toBeInTheDocument();
  });

  it("calls handleOptionChange when inputs change", () => {
    render(
      <ChartCustomizationAccordion
        chartOptions={chartOptions}
        handleOptionChange={handleOptionChange}
      />
    );

    fireEvent.click(screen.getByText("Chart Customization"));

    // Change background color
    fireEvent.change(screen.getByLabelText("Background Color:"), {
      target: { value: "#ff0000" },
    });
    expect(handleOptionChange).toHaveBeenCalledWith(expect.anything());

    // Change show legend checkbox
    fireEvent.click(screen.getByLabelText("Show Legend:"));
    expect(handleOptionChange).toHaveBeenCalledWith(expect.anything());
  });
});
