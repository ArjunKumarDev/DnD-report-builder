import { useDrop } from "react-dnd";
import { useState } from "react";
import ChartPanel from "./ChartPanel";

import ChartCustomizationAccordion from "./ChartCustomizationAccordion";
import ExportButtons from "./ExportButtons";

const ReportCanvas = () => {
  const [droppedAd, setDroppedAd] = useState(null);
  const [chartType, setChartType] = useState("bar");
  const [chartOptions, setChartOptions] = useState({
    backgroundColor: "rgba(75, 192, 192, 0.2)",
    borderColor: "rgba(75, 192, 192, 1)",
    showLegend: true,
    showAxes: true,
  });

  const [{ isOver }, drop] = useDrop(() => ({
    accept: "AD",
    drop: (item) => addAdToCanvas(item.ad),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  const addAdToCanvas = (ad) => {
    setDroppedAd(ad); // Replace the old ad with the new one
  };

  const handleOptionChange = (e) => {
    const { name, value, type, checked } = e.target;
    setChartOptions((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <div className="p-4">
      {/* Chart Type Buttons */}
      <div className="flex flex-wrap mb-4">
        {["bar", "line", "doughnut", "pie"].map((type) => (
          <button
            key={type}
            className={`px-4 py-2 mr-2 mb-2 sm:mb-0 ${
              chartType === type ? "bg-blue-500 text-white" : "bg-gray-200"
            }`}
            onClick={() => setChartType(type)}
          >
            {type.charAt(0).toUpperCase() + type.slice(1)}
          </button>
        ))}
      </div>

      {/* Chart Customization Accordion */}
      <ChartCustomizationAccordion
        chartOptions={chartOptions}
        handleOptionChange={handleOptionChange}
      />

      {/* Export Buttons */}
      <ExportButtons droppedAd={droppedAd} />

      {/* Report Canvas Area */}
      <div
        id="chart-area"
        ref={drop}
        className={`p-4 border-dashed border-2 rounded ${
          isOver ? "bg-gray-100" : "bg-white"
        }`}
        style={{ minHeight: "300px" }}
      >
        <h2 className="text-lg font-bold mb-4">Report Canvas</h2>
        {!droppedAd ? (
          <p className="text-center text-gray-500">Drag & drop an ad here</p>
        ) : (
          <ChartPanel
            metrics={Object.entries(droppedAd.metrics).map(([key, value]) => ({
              name: `${droppedAd.adName} - ${
                key.charAt(0).toUpperCase() + key.slice(1)
              }`,
              value,
            }))}
            chartType={chartType}
            chartOptions={chartOptions}
          />
        )}
      </div>
    </div>
  );
};

export default ReportCanvas;
