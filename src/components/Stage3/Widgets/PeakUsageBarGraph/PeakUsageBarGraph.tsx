import { BarChart, Box, Button, Link } from "@cloudscape-design/components";

const PeakUsageBarGraph = ({ metrics }) => {
  if (!Array.isArray(metrics)) {
    console.error("metrics is not an array");
    //console.log(metrics)
    return []; // or handle this case as needed
  }

  // MOVIES
  const mdActivityTotals = { 12: 0, 13: 0, 14: 0 };
  const muActivityTotals = { 12: 0, 13: 0, 14: 0 };
  // LIVE STREAMING
  const lsdActivityTotals = { 16: 0, 17: 0, 18: 0 };
  const lsuActivityTotals = { 16: 0, 17: 0, 18: 0 };
  // EDUCATION
  const edActivityTotals = { 8: 0, 9: 0 };
  const euActivityTotals = { 8: 0, 9: 0 };
  // WORK
  const wdActivityTotals = { 10: 0, 11: 0 };
  const wuActivityTotals = { 10: 0, 11: 0 };
  // GAMING
  const gdActivityTotals = { 6: 0 };
  const guActivityTotals = { 6: 0 };
  // SOCIAL MEDIA
  const smdActivityTotals = { 5: 0 };
  const smuActivityTotals = { 5: 0 };
  // OTHER
  const odActivityTotals = { 2: 0, 3: 0, 4: 0, 7: 0, 15: 0 };
  const ouActivityTotals = { 2: 0, 3: 0, 4: 0, 7: 0, 15: 0 };

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

    // Gaming (Down/Up)
    ["6"].forEach((activity) => {
      if (item.activity1 === activity) {
        gdActivityTotals[activity] += item.activity1Metrics.download;
        guActivityTotals[activity] += item.activity1Metrics.upload;
      }
      if (item.activity2 === activity) {
        gdActivityTotals[activity] += item.activity2Metrics.download;
        guActivityTotals[activity] += item.activity2Metrics.upload;
      }
      if (item.activity3 === activity) {
        gdActivityTotals[activity] += item.activity3Metrics.download;
        guActivityTotals[activity] += item.activity3Metrics.upload;
      }
    });
    // Social media (Down/Up)
    ["5"].forEach((activity) => {
      if (item.activity1 === activity) {
        smdActivityTotals[activity] += item.activity1Metrics.download;
        smuActivityTotals[activity] += item.activity1Metrics.upload;
      }
      if (item.activity2 === activity) {
        smdActivityTotals[activity] += item.activity2Metrics.download;
        smuActivityTotals[activity] += item.activity2Metrics.upload;
      }
      if (item.activity3 === activity) {
        smdActivityTotals[activity] += item.activity3Metrics.download;
        smuActivityTotals[activity] += item.activity3Metrics.upload;
      }
    });
    // Other (Down/Up)
    ["2", "3", "4", "7", "15"].forEach((activity) => {
      if (item.activity1 === activity) {
        odActivityTotals[activity] += item.activity1Metrics.download;
        ouActivityTotals[activity] += item.activity1Metrics.upload;
      }
      if (item.activity2 === activity) {
        odActivityTotals[activity] += item.activity2Metrics.download;
        ouActivityTotals[activity] += item.activity2Metrics.upload;
      }
      if (item.activity3 === activity) {
        odActivityTotals[activity] += item.activity3Metrics.download;
        ouActivityTotals[activity] += item.activity3Metrics.upload;
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
  const GamingDownTotal = gdActivityTotals[6];
  const GamingUploadTotal = guActivityTotals[6];
  const SocialDownTotal = smdActivityTotals[5];
  const SocialUploadTotal = smuActivityTotals[5];
  const OtherDownTotal =
    odActivityTotals[2] +
    odActivityTotals[3] +
    odActivityTotals[4] +
    odActivityTotals[7] +
    odActivityTotals[15];
  const OtherUploadTotal =
    ouActivityTotals[2] +
    ouActivityTotals[3] +
    ouActivityTotals[4] +
    ouActivityTotals[7] +
    ouActivityTotals[15];
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
          valueFormatter: (e) => `${e.toFixed(0)}`,
          data: [
            { x: "Download", y: GamingDownTotal },
            { x: "Upload", y: GamingUploadTotal },
          ],
        },
        {
          title: "Social Media",
          type: "bar",
          valueFormatter: (e) => `${e.toFixed(0)}`,
          data: [
            { x: "Download", y: SocialDownTotal },
            { x: "Upload", y: SocialUploadTotal },
          ],
        },
        {
          title: "Work",
          type: "bar",
          valueFormatter: (e) => `${e.toFixed(0)}`,
          data: [
            { x: "Download", y: WorkDownTotal },
            { x: "Upload", y: WorkUploadTotal },
          ],
        },
        {
          title: "Education",
          type: "bar",
          valueFormatter: (e) => `${e.toFixed(0)}`,
          data: [
            { x: "Download", y: EducationDownTotal },
            { x: "Upload", y: EducationUploadTotal },
          ],
        },
        {
          title: "Live Streaming",
          type: "bar",
          valueFormatter: (e) => `${e.toFixed(0)}`,
          data: [
            { x: "Download", y: LiveStreamDownTotal },
            { x: "Upload", y: LiveStreamUploadTotal },
          ],
        },
        {
          title: "Other",
          type: "bar",
          valueFormatter: (e) => `${e.toFixed(0)}`,
          data: [
            { x: "Download", y: OtherDownTotal },
            { x: "Upload", y: OtherUploadTotal },
          ],
        },
      ]}
      xDomain={["Download", "Upload"]}
      yDomain={[0, 200]}
      detailPopoverSeriesContent={({ series, x, y }) => {
        return {
          key: series.title,
          value: y,
          expandable:
            series.title === "Movies" ||
            series.title === "Live Streaming" ||
            series.title === "Work" ||
            series.title === "Other" ||
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
                    value:
                      x === "Download"
                        ? lsdActivityTotals[16]
                        : lsuActivityTotals[16],
                  },
                  {
                    key: "Live Streaming HD",
                    value:
                      x === "Download"
                        ? lsdActivityTotals[17]
                        : lsuActivityTotals[17],
                  },
                  {
                    key: "Live Streaming 4K",
                    value:
                      x === "Download"
                        ? lsdActivityTotals[18]
                        : lsuActivityTotals[18],
                  },
                ]
              : series.title === "Work"
              ? [
                  {
                    key: "Video Meeting SD",
                    value:
                      x === "Download"
                        ? wdActivityTotals[10]
                        : wuActivityTotals[10],
                  },
                  {
                    key: "Video Meeting HD",
                    value:
                      x === "Download"
                        ? wdActivityTotals[11]
                        : wuActivityTotals[11],
                  },
                ]
              : series.title === "Education"
              ? [
                  {
                    key: "Education SD",
                    value:
                      x === "Download"
                        ? edActivityTotals[8]
                        : euActivityTotals[8],
                  },
                  {
                    key: "Education HD",
                    value:
                      x === "Download"
                        ? edActivityTotals[9]
                        : euActivityTotals[9],
                  },
                ]
              : series.title === "Other"
              ? [
                  {
                    key: "Browsing",
                    value:
                      x === "Download"
                        ? odActivityTotals[2]
                        : ouActivityTotals[2],
                  },
                  {
                    key: "Emailing",
                    value:
                      x === "Download"
                        ? odActivityTotals[3]
                        : ouActivityTotals[3],
                  },
                  {
                    key: "Music",
                    value:
                      x === "Download"
                        ? odActivityTotals[4]
                        : ouActivityTotals[4],
                  },
                  {
                    key: "Navigation",
                    value:
                      x === "Download"
                        ? odActivityTotals[7]
                        : ouActivityTotals[7],
                  },
                  {
                    key: "Smart Home Gadgets",
                    value:
                      x === "Download"
                        ? odActivityTotals[15]
                        : ouActivityTotals[15],
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
