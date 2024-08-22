"use client";
import React, { useEffect, useState, Suspense, lazy } from "react";
import { fetchMockCampaignData } from "../utils/mockApi";
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

// Dynamically import components
const MetricList = lazy(() => import("../components/MetricList"));
const ReportCanvas = lazy(() => import("../components/ReportCanvas"));

export default function Home() {
  const [adGroups, setAdGroups] = useState([]);

  useEffect(() => {
    fetchMockCampaignData().then((data) => setAdGroups(data.adGroups));
  }, []);

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="container mx-auto p-8">
        <h1 className="text-2xl font-bold mb-8">
          Drag-and-Drop Ad Campaign Report Builder
        </h1>
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/4">
            <Suspense fallback={<div>Loading Metric List...</div>}>
              <MetricList adGroups={adGroups} />
            </Suspense>
          </div>
          <div className="lg:w-3/4 lg:pl-4 mt-4 lg:mt-0">
            <Suspense fallback={<div>Loading Report Canvas...</div>}>
              <ReportCanvas />
            </Suspense>
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
