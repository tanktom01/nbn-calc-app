import { Table } from "@cloudscape-design/components";

interface ProcessedMetrics {
  name: string;
  down: number;
  up: number;
}

interface MetricsProps {
  metrics: any[];
}

const IndividualUserTable = ({ metrics }: MetricsProps) => {
  if (!Array.isArray(metrics)) {
    console.error("metrics is not an array");
    //console.log(metrics)
    return []; // or handle this case as needed
  }
  const ProcessedMetrics = metrics.map((item) => {
    const totalDownload =
      item.activity1Metrics.download +
      item.activity2Metrics.download +
      item.activity3Metrics.download;
    const totalUpload =
      item.activity1Metrics.upload +
      item.activity2Metrics.upload +
      item.activity3Metrics.upload;

    return {
      name: item.name,
      down: totalDownload,
      up: totalUpload,
    };
  });

  console.log(ProcessedMetrics);
  return (
    <Table
      items={ProcessedMetrics}
      columnDefinitions={[
        {
          id: "name",
          header: "User",
          cell: (item) => <p>{item.name}</p>,
        },
        {
          id: "down",
          header: "Download",
          cell: (item) => <p>{item.down}</p>,
        },
        {
          id: "up",
          header: "Upload",
          cell: (item) => <p>{item.up}</p>,
        },
      ]}
    />
  );
};

export default IndividualUserTable;
