import { Table } from "@cloudscape-design/components";
import { simpleTotal } from "../CommonFunctions/simpleTotal";
import { ActivityMetrics, SimpleTotalItem } from "../../../interfaces";

interface IndividualUserTableProps {
  activityMetrics: ActivityMetrics[];
}

const IndividualUserTable: React.FC<IndividualUserTableProps> = ({
  activityMetrics,
}) => {
  if (!Array.isArray(activityMetrics)) {
    console.error("metrics is not an array");
    return null;
  }

  const processedMetrics: SimpleTotalItem[] = simpleTotal(activityMetrics);

  return (
    <Table
      variant="borderless"
      items={processedMetrics}
      columnDefinitions={[
        {
          id: "name",
          header: "User",
          cell: (item: SimpleTotalItem) => <p>{item.name}</p>,
        },
        {
          id: "down",
          header: "Download (MBps)",
          cell: (item: SimpleTotalItem) => <p>{item.down}</p>,
        },
        {
          id: "up",
          header: "Upload (MBps)",
          cell: (item: SimpleTotalItem) => <p>{item.up}</p>,
        },
      ]}
    />
  );
};

export default IndividualUserTable;
