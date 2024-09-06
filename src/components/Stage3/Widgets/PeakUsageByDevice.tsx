import { BarChart } from "@cloudscape-design/components";
import { ActivityMetrics } from "../../../interfaces";

interface PeakUsageBarGraphProps {
  activityMetrics: ActivityMetrics[];
}

const PeakUsageByDevice: React.FC<PeakUsageBarGraphProps> = ({
  activityMetrics,
}) => {
  const TV: Record<string, number> = { 1: 0, 2: 0 };
  const SP: Record<string, number> = { 1: 0, 2: 0 };
  const ST: Record<string, number> = { 1: 0, 2: 0 };
  const PC: Record<string, number> = { 1: 0, 2: 0 };
  const LT: Record<string, number> = { 1: 0, 2: 0 };

  function updateMetrics(
    deviceRecord: Record<string, number>,
    item: ActivityMetrics
  ) {
    deviceRecord["1"] += item.activity1Metrics.download;
    deviceRecord["2"] += item.activity1Metrics.upload;
    deviceRecord["1"] += item.activity2Metrics.download;
    deviceRecord["2"] += item.activity2Metrics.upload;
    deviceRecord["1"] += item.activity3Metrics.download;
    deviceRecord["2"] += item.activity3Metrics.upload;
  }

  activityMetrics.forEach((item) => {
    if (item.device === "TV") {
      updateMetrics(TV, item);
    } else if (item.device === "Smart Phone") {
      updateMetrics(SP, item);
    } else if (item.device === "Smart Tablet") {
      updateMetrics(ST, item);
    } else if (item.device === "Personal Computer") {
      updateMetrics(PC, item);
    } else if (item.device === "Laptop") {
      updateMetrics(LT, item);
    }
  });

  return (
    <>
      <BarChart
        xTitle="Usage Type"
        yTitle="MBps"
        series={[
          {
            title: "TV",
            type: "bar",
            data: [
              { x: "Download", y: TV["1"] },
              { x: "Upload", y: TV["2"] },
            ],
          },
          {
            title: "Smart Phone",
            type: "bar",
            data: [
              { x: "Download", y: SP["1"] },
              { x: "Upload", y: SP["2"] },
            ],
          },
          {
            title: "Smart Tablet",
            type: "bar",
            data: [
              { x: "Download", y: ST["1"] },
              { x: "Upload", y: ST["2"] },
            ],
          },
          {
            title: "Personal Computer",
            type: "bar",
            data: [
              { x: "Download", y: PC["1"] },
              { x: "Upload", y: PC["2"] },
            ],
          },
          {
            title: "Laptop",
            type: "bar",
            data: [
              { x: "Download", y: LT["1"] },
              { x: "Upload", y: LT["2"] },
            ],
          },
        ]}
      ></BarChart>
    </>
  );
};

export default PeakUsageByDevice;
