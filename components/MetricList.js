import React from "react";
import { useDrag } from "react-dnd";

// Memoize DraggableAd to prevent unnecessary re-renders
const DraggableAd = React.memo(({ ad }) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: "AD",
      item: { ad },
      collect: (monitor) => ({
        isDragging: !!monitor.isDragging(),
      }),
    }),
    [ad]
  );

  // variable to handle conditional classes
  const dragClass = isDragging ? "opacity-50" : "opacity-100";

  return (
    <div
      ref={drag}
      className={`p-2 mb-2 border rounded cursor-grab ${dragClass}`}
    >
      {ad.adName}
    </div>
  );
});

const MetricList = ({ adGroups }) => {
  return (
    <div>
      {adGroups.map((group) => (
        <div key={group.adGroupName} className="mb-4">
          <h3 className="font-bold">{group.adGroupName}</h3>
          {group.ads.map((ad) => (
            <DraggableAd key={ad.adName} ad={ad} />
          ))}
        </div>
      ))}
    </div>
  );
};

export default MetricList;
