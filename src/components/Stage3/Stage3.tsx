import { Container, Header } from "@cloudscape-design/components";
import IndividualUserTable from "./Widgets/IndividualUserTable";
import PeakUsageBarGraph from "./Widgets/PeakUsageBarGraph";
import PlanUtil from "./Widgets/PlanUtil";
import {
  ActivityMetrics,
  MetricValues,
  Stage1Item,
  Stage2Item,
} from "../../interfaces";
import "../../pages/App.css";
import PeakUsageByDevice from "./Widgets/PeakUsageByDevice";
import { keyTable, tableOptions } from "../Stage2/Table-config";
import { TransformedStage2Item } from "../../interfaces";

interface Stage3Props {
  selectedItemsStage2: Stage2Item[];
  selectedPlan: Stage1Item[];
}

const Stage3: React.FC<Stage3Props> = ({
  selectedItemsStage2,
  selectedPlan,
}) => {
  // Chop Shop - where data gets chopped up

  // For getting the total down and up for activitys
  const getActivityValue = (activity: string): string | null => {
    const match = tableOptions.find((option) => option.label === activity);
    return match ? match.value : null;
  };

  const getMetricValues = (activity: string): MetricValues => {
    const match = keyTable.find((option) => option.key === activity);
    return match
      ? { download: match.download, upload: match.upload }
      : { download: 0, upload: 0 };
  };

  const transformUserData = (data: Stage2Item[]): TransformedStage2Item[] => {
    return data.map((user) => ({
      ...user,
      activity1: getActivityValue(user.activity1) as string,
      activity2: getActivityValue(user.activity2) as string,
      activity3: getActivityValue(user.activity3) as string,
    }));
  };

  const transformActivityMetricValues = (
    array: TransformedStage2Item[]
  ): ActivityMetrics[] => {
    return array.map((items) => ({
      ...items,
      activity1Metrics: getMetricValues(items.activity1),
      activity2Metrics: getMetricValues(items.activity2),
      activity3Metrics: getMetricValues(items.activity3),
    }));
  };

  const transformedActivityData = transformUserData(selectedItemsStage2);
  const activityValues = transformActivityMetricValues(transformedActivityData);

  return (
    <>
      <Container
        header={
          <Header
            variant="h2"
            description="View a detailed breakdown of your peak usage by a number of predetermined category"
          >
            3. Check out you Usage
          </Header>
        }
      >
        <div className="stageSpace">
          <Container header={<Header variant="h1">Plan Utilisation</Header>}>
            <PlanUtil
              activityMetrics={activityValues}
              selectedPlan={selectedPlan}
            />
          </Container>
        </div>
        <div className="stageSpace">
          <Container header={<Header variant="h1">Usage By Individual</Header>}>
            <IndividualUserTable activityMetrics={activityValues} />
          </Container>
        </div>
        <div className="stageSpace">
          <Container
            header={<Header variant="h1">Peak Usage by Category</Header>}
          >
            <PeakUsageBarGraph
              activityMetrics={activityValues}
              selectedPlan={selectedPlan}
            />
          </Container>
        </div>
        <div className="stageSpace">
          <Container
            header={<Header variant="h1">Peak Usage by Device</Header>}
          >
            <PeakUsageByDevice activityMetrics={activityValues} />
          </Container>
        </div>
      </Container>
    </>
  );
};

export default Stage3;
