import React from "react";
import { exportPDF, exportCSV } from "../utils/exportFiles";

const ExportButtons = ({ droppedAd }) => {
  return (
    <div className="flex flex-wrap mb-4">
      <button
        className="px-4 py-2 mr-2 mb-2 sm:mb-0 bg-green-500 text-white"
        onClick={exportPDF}
      >
        Export as PDF
      </button>
      <button
        className="px-4 py-2 mb-2 sm:mb-0 bg-green-500 text-white"
        onClick={() => droppedAd && exportCSV(droppedAd)}
      >
        Export as CSV
      </button>
    </div>
  );
};

export default ExportButtons;
