// DraggableMetric.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import DraggableMetric from "../DraggableMetric";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Mocking react-dnd's useDrag
jest.mock("react-dnd", () => ({
  useDrag: () => [{ isDragging: false }, jest.fn()],
}));

describe("DraggableMetric", () => {
  const mockMetric = { name: "Metric 1" };

  it("renders the metric name", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <DraggableMetric metric={mockMetric} />
      </DndProvider>
    );

    expect(screen.getByText(/Metric 1/i)).toBeInTheDocument();
  });

  it("applies correct styles when dragging", () => {
    // Mocking useDrag to simulate dragging
    jest.mock("react-dnd", () => ({
      useDrag: () => [{ isDragging: true }, jest.fn()],
    }));

    render(
      <DndProvider backend={HTML5Backend}>
        <DraggableMetric metric={mockMetric} />
      </DndProvider>
    );

    // Verify the styles when dragging
    expect(screen.getByText(/Metric 1/i).closest("div")).toHaveClass(
      "opacity-50"
    );
  });

  it("applies correct styles when not dragging", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <DraggableMetric metric={mockMetric} />
      </DndProvider>
    );

    // Verify the styles when not dragging
    expect(screen.getByText(/Metric 1/i).closest("div")).toHaveClass(
      "opacity-100"
    );
  });
});
