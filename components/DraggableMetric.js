import React from "react";
import { useDrag } from "react-dnd";

const DraggableMetric = React.memo(({ metric }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "METRIC",
      item: { metric },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [metric] // Dependency array ensures drag configuration updates when metric changes
  );

  const dragStyle = isDragging
    ? "p-2 bg-gray-200 rounded shadow opacity-50"
    : "p-2 bg-gray-200 rounded shadow opacity-100";

  return (
    <div ref={drag} className={dragStyle}>
      {metric.name}
    </div>
  );
});

export default DraggableMetric;
