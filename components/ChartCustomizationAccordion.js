import React, { useState, useCallback } from "react";

const ChartCustomizationAccordion = ({ chartOptions, handleOptionChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle accordion state
  const toggleAccordion = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  // Destructure chartOptions for easier access
  const { backgroundColor, borderColor, showLegend, showAxes } = chartOptions;

  return (
    <div className="mb-4 border rounded bg-gray-100">
      {/* Accordion Header */}
      <div
        onClick={toggleAccordion}
        className="p-4 cursor-pointer flex justify-between items-center bg-gray-200 rounded-t"
      >
        <h3 className="text-lg font-bold">Chart Customization</h3>
        <svg
          className={`w-5 h-5 transition-transform duration-300 ${
            isOpen ? "transform rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>

      {/* Accordion Content */}
      {isOpen && (
        <div className="p-4 border-t">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              {
                label: "Background Color:",
                type: "color",
                name: "backgroundColor",
                value: backgroundColor,
              },
              {
                label: "Border Color:",
                type: "color",
                name: "borderColor",
                value: borderColor,
              },
              {
                label: "Show Legend:",
                type: "checkbox",
                name: "showLegend",
                checked: showLegend,
              },
              {
                label: "Show Axes (For Bar & Line):",
                type: "checkbox",
                name: "showAxes",
                checked: showAxes,
              },
            ].map(({ label, type, name, value, checked }) => (
              <div key={name} className="mb-2">
                <label className="block mb-1">{label}</label>
                <input
                  type={type}
                  name={name}
                  value={type === "color" ? value : undefined}
                  checked={type === "checkbox" ? checked : undefined}
                  onChange={handleOptionChange}
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ChartCustomizationAccordion;
