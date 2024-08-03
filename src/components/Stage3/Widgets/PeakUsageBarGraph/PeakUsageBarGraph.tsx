import { BarChart, Box, Button, Link } from "@cloudscape-design/components";
import { initializeActivityTotals, calculateActivityTotals } from "./config";

const PeakUsageBarGraph = ({ metrics }) => {
  if (!Array.isArray(metrics)) {
    console.error("metrics is not an array");
    //console.log(metrics)
    return []; // or handle this case as needed
  }

  //TODO get rid of this fucking hideous shit to another random file
  // so i dont have to look at it

  // MOVIES (DOWN)
  const mdActivityTotals = { 12: 0, 13: 0, 14: 0 };
  const muActivityTotals = { 12: 0, 13: 0, 14: 0 };
  const lsdActivityTotals = { 16: 0, 17: 0, 18: 0 };
  const lsuActivityTotals = { 16: 0, 17: 0, 18: 0 };
  const edActivityTotals = { 8: 0, 9: 0 };
  const euActivityTotals = { 8: 0, 9: 0 };
  const wdActivityTotals = { 10: 0, 11: 0 };
  const wuActivityTotals = { 10: 0, 11: 0 };

  metrics.forEach((item) => {
    // Movies (Down/Up)
    ["12", "13", "14"].forEach((activity) => {
      if (item.activity1 === activity) {
        mdActivityTotals[activity] += item.activity1Metrics.download;
        muActivityTotals[activity] += item.activity1Metrics.upload;
      }
      if (item.activity2 === activity) {
        mdActivityTotals[activity] += item.activity2Metrics.download;
        muActivityTotals[activity] += item.activity2Metrics.upload;
      }
      if (item.activity3 === activity) {
        mdActivityTotals[activity] += item.activity3Metrics.download;
        muActivityTotals[activity] += item.activity3Metrics.upload;
      }
    });

    // Live Streaming (Down/Up)
    ["16", "17", "18"].forEach((activity) => {
      if (item.activity1 === activity) {
        lsdActivityTotals[activity] += item.activity1Metrics.download;
        lsuActivityTotals[activity] += item.activity1Metrics.upload;
      }
      if (item.activity2 === activity) {
        lsdActivityTotals[activity] += item.activity2Metrics.download;
        lsuActivityTotals[activity] += item.activity2Metrics.upload;
      }
      if (item.activity3 === activity) {
        lsdActivityTotals[activity] += item.activity3Metrics.download;
        lsuActivityTotals[activity] += item.activity3Metrics.upload;
      }
    });

    // Education (Down/Up)
    ["8", "9"].forEach((activity) => {
      if (item.activity1 === activity) {
        edActivityTotals[activity] += item.activity1Metrics.download;
        euActivityTotals[activity] += item.activity1Metrics.upload;
      }
      if (item.activity2 === activity) {
        edActivityTotals[activity] += item.activity2Metrics.download;
        euActivityTotals[activity] += item.activity2Metrics.upload;
      }
      if (item.activity3 === activity) {
        edActivityTotals[activity] += item.activity3Metrics.download;
        euActivityTotals[activity] += item.activity3Metrics.upload;
      }
    });

    // Work (Down/Up)
    ["10", "11"].forEach((activity) => {
      if (item.activity1 === activity) {
        wdActivityTotals[activity] += item.activity1Metrics.download;
        wuActivityTotals[activity] += item.activity1Metrics.upload;
      }
      if (item.activity2 === activity) {
        wdActivityTotals[activity] += item.activity2Metrics.download;
        wuActivityTotals[activity] += item.activity2Metrics.upload;
      }
      if (item.activity3 === activity) {
        wdActivityTotals[activity] += item.activity3Metrics.download;
        wuActivityTotals[activity] += item.activity3Metrics.upload;
      }
    });
  });

  const MovieDownTotal =
    mdActivityTotals[12] + mdActivityTotals[13] + mdActivityTotals[14];
  const MovieUploadTotal =
    muActivityTotals[12] + muActivityTotals[13] + muActivityTotals[14];
  const LiveStreamDownTotal =
    lsdActivityTotals[16] + lsdActivityTotals[17] + lsdActivityTotals[18];
  const LiveStreamUploadTotal =
    lsuActivityTotals[16] + lsuActivityTotals[17] + lsuActivityTotals[18];
  const EducationDownTotal = edActivityTotals[8] + edActivityTotals[9];
  const EducationUploadTotal = euActivityTotals[8] + euActivityTotals[9];
  const WorkDownTotal = wdActivityTotals[10] + wdActivityTotals[11];
  const WorkUploadTotal = wuActivityTotals[10] + wuActivityTotals[11];

  return (
    <BarChart
      series={[
        {
          title: "Movies",
          type: "bar",
          valueFormatter: (e) => `${e.toFixed(0)}`,
          data: [
            { x: "Download", y: MovieDownTotal },
            { x: "Upload", y: MovieUploadTotal },
          ],
        },
        {
          title: "Gaming",
          type: "bar",
          valueFormatter: (e) => `${(100 * e).toFixed(0)}`,
          data: [
            { x: "Download", y: 1 },
            { x: "Upload", y: 1 },
          ],
        },
        {
          title: "Social Media",
          type: "bar",
          valueFormatter: (e) => `${(100 * e).toFixed(0)}`,
          data: [
            { x: "Download", y: 1 },
            { x: "Upload", y: 1 },
          ],
        },
        {
          title: "Work",
          type: "bar",
          valueFormatter: (e) => `${(100 * e).toFixed(0)}`,
          data: [
            { x: "Download", y: WorkDownTotal },
            { x: "Upload", y: WorkUploadTotal },
          ],
        },
        {
          title: "Education",
          type: "bar",
          valueFormatter: (e) => `${(100 * e).toFixed(0)}`,
          data: [
            { x: "Download", y: EducationDownTotal },
            { x: "Upload", y: EducationUploadTotal },
          ],
        },
        {
          title: "Live Streaming",
          type: "bar",
          valueFormatter: (e) => `${(100 * e).toFixed(0)}`,
          data: [
            { x: "Download", y: LiveStreamDownTotal },
            { x: "Upload", y: LiveStreamUploadTotal },
          ],
        },
      ]}
      xDomain={["Download", "Upload"]}
      yDomain={[0, 2]}
      i18nStrings={{
        yTickFormatter: (e) => `${(100 * e).toFixed(0)}`,
      }}
      detailPopoverSeriesContent={({ series, x, y }) => {
        return {
          key: series.title,
          value: y,
          expandable:
            series.title === "Movies" ||
            series.title === "Live Streaming" ||
            series.title === "Work" ||
            series.title === "Education",
          subItems:
            series.title === "Movies"
              ? [
                  {
                    key: "Video Streaming SD",
                    value:
                      x === "Download"
                        ? mdActivityTotals[12]
                        : muActivityTotals[12],
                  },
                  {
                    key: "Video Streaming HD",
                    value:
                      x === "Download"
                        ? mdActivityTotals[13]
                        : muActivityTotals[12],
                  },
                  {
                    key: "Video Streaming 4K",
                    value:
                      x === "Download"
                        ? mdActivityTotals[14]
                        : muActivityTotals[12],
                  },
                ]
              : series.title === "Live Streaming"
              ? [
                  {
                    key: "Live Streaming SD",
                    value: x === "Download" ? 2 : 3,
                  },
                  {
                    key: "Live Streaming HD",
                    value: x === "Download" ? 2 : 3,
                  },
                  {
                    key: "Live Streaming 4K",
                    value: x === "Download" ? 2 : 3,
                  },
                ]
              : series.title === "Work"
              ? [
                  {
                    key: "Video Meeting SD",
                    value: x === "Download" ? 2 : 3,
                  },
                  {
                    key: "Video Meeting HD",
                    value: x === "Download" ? 2 : 3,
                  },
                ]
              : series.title === "Education"
              ? [
                  {
                    key: "Education SD",
                    value: x === "Download" ? 2 : 3,
                  },
                  {
                    key: "Education HD",
                    value: x === "Download" ? 2 : 3,
                  },
                ]
              : undefined,
        };
      }}
      fitHeight
      height={300}
      horizontalBars
      //stackedBars
      xTitle="Usage Type"
      empty={
        <Box textAlign="center" color="inherit">
          <b>No data available</b>
          <Box variant="p" color="inherit">
            There is no data available
          </Box>
        </Box>
      }
      noMatch={
        <Box textAlign="center" color="inherit">
          <b>No matching data</b>
          <Box variant="p" color="inherit">
            There is no matching data to display
          </Box>
          <Button>Clear filter</Button>
        </Box>
      }
    />
  );
};

export default PeakUsageBarGraph;
