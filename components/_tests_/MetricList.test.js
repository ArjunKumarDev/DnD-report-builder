// MetricList.test.js
import React from "react";
import { render, screen } from "@testing-library/react";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import MetricList from "./MetricList";

// Mocking react-dnd's useDrag
jest.mock("react-dnd", () => ({
  useDrag: () => [{ isDragging: false }, jest.fn()],
}));

describe("MetricList", () => {
  const mockAdGroups = [
    {
      adGroupName: "Group 1",
      ads: [{ adName: "Ad 1" }, { adName: "Ad 2" }],
    },
    {
      adGroupName: "Group 2",
      ads: [{ adName: "Ad 3" }],
    },
  ];

  it("renders ad groups and ads", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <MetricList adGroups={mockAdGroups} />
      </DndProvider>
    );

    // Check if ad group names are rendered
    expect(screen.getByText(/Group 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Group 2/i)).toBeInTheDocument();

    // Check if ad names are rendered
    expect(screen.getByText(/Ad 1/i)).toBeInTheDocument();
    expect(screen.getByText(/Ad 2/i)).toBeInTheDocument();
    expect(screen.getByText(/Ad 3/i)).toBeInTheDocument();
  });

  it("renders DraggableAd components with correct class names", () => {
    render(
      <DndProvider backend={HTML5Backend}>
        <MetricList adGroups={mockAdGroups} />
      </DndProvider>
    );

    // Check if DraggableAd components have correct classes
    expect(screen.getAllByText(/Ad 1/i)[0].closest("div")).toHaveClass(
      "cursor-grab"
    );
    expect(screen.getAllByText(/Ad 2/i)[0].closest("div")).toHaveClass(
      "cursor-grab"
    );
    expect(screen.getAllByText(/Ad 3/i)[0].closest("div")).toHaveClass(
      "cursor-grab"
    );
  });
});
