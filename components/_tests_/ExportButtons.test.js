// ExportButtons.test.js
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ExportButtons from "../ExportButtons";
import { exportPDF, exportCSV } from "../../utils/exportFiles";

jest.mock("../../utils/exportFiles", () => ({
  exportPDF: jest.fn(),
  exportCSV: jest.fn(),
}));

describe("ExportButtons", () => {
  const mockDroppedAd = { id: 1, name: "Test Ad" };

  it("renders export buttons", () => {
    render(<ExportButtons droppedAd={mockDroppedAd} />);

    expect(screen.getByText(/Export as PDF/i)).toBeInTheDocument();
    expect(screen.getByText(/Export as CSV/i)).toBeInTheDocument();
  });

  it("calls exportPDF function when PDF button is clicked", () => {
    render(<ExportButtons droppedAd={mockDroppedAd} />);

    fireEvent.click(screen.getByText(/Export as PDF/i));
    expect(exportPDF).toHaveBeenCalled();
  });

  it("calls exportCSV function with the correct argument when CSV button is clicked", () => {
    render(<ExportButtons droppedAd={mockDroppedAd} />);

    fireEvent.click(screen.getByText(/Export as CSV/i));
    expect(exportCSV).toHaveBeenCalledWith(mockDroppedAd);
  });
});
