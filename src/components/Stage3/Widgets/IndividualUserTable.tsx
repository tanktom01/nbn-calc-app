import { Table } from "@cloudscape-design/components";
import { simpleTotal } from "../CommonFunctions/simpleTotal";

const IndividualUserTable = ({ metrics }) => {
  if (!Array.isArray(metrics)) {
    console.error("metrics is not an array");
    //console.log(metrics)
    return []; // or handle this case as needed
  }
  const processedMetrics = simpleTotal(metrics);

  return (
    <Table
      items={processedMetrics}
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
