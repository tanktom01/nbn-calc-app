import { Table } from "@cloudscape-design/components";
import { simpleTotal } from "../CommonFunctions/simpleTotal";

interface MetricValues {
  download: number;
  upload: number;
}

interface Usage3MetricsItem {
  name: string;
  activity1Metrics: MetricValues;
  activity2Metrics: MetricValues;
  activity3Metrics: MetricValues;
}

interface SimpleTotalItem {
  name: string;
  down: number;
  up: number;
}

interface IndividualUserTableProps {
  metrics: Usage3MetricsItem[];
}

const IndividualUserTable: React.FC<IndividualUserTableProps> = ({
  metrics,
}) => {
  if (!Array.isArray(metrics)) {
    console.error("metrics is not an array");
    return null; // or handle this case as needed
  }

  const processedMetrics: SimpleTotalItem[] = simpleTotal(metrics);

  return (
    <Table
      items={processedMetrics}
      columnDefinitions={[
        {
          id: "name",
          header: "User",
          cell: (item: SimpleTotalItem) => <p>{item.name}</p>,
        },
        {
          id: "down",
          header: "Download",
          cell: (item: SimpleTotalItem) => <p>{item.down}</p>,
        },
        {
          id: "up",
          header: "Upload",
          cell: (item: SimpleTotalItem) => <p>{item.up}</p>,
        },
      ]}
    />
  );
};

export default IndividualUserTable;
