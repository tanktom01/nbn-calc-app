import { Container } from "@cloudscape-design/components";
import IndividualUserTable from "./Widgets/IndividualUserTable";
import PeakUsageBarGraph from "./Widgets/PeakUsageBarGraph";
import PlanUtil from "./Widgets/PlanUtil";
import { Stage1Item } from "../../interfaces";
import "../../pages/App.css";
interface MetricValues {
  download: number;
  upload: number;
}

interface Usage1MetricsItem {
  name: string;
  activity1: string;
  activity1Metrics: MetricValues;
  activity2: string;
  activity2Metrics: MetricValues;
  activity3: string;
  activity3Metrics: MetricValues;
}

interface Stage3Props {
  metrics: Usage1MetricsItem[];
  selectedPlan: Stage1Item[];
}

const Stage3: React.FC<Stage3Props> = ({ metrics, selectedPlan }) => {
  return (
    <>
      <div className="stageSpace">
        <Container>
          <PlanUtil metrics={metrics} selectedPlan={selectedPlan} />
        </Container>
      </div>
      <div className="stageSpace">
        <Container>
          <IndividualUserTable metrics={metrics} />
        </Container>
      </div>
      <div className="stageSpace">
        <Container>
          <PeakUsageBarGraph metrics={metrics} selectedPlan={selectedPlan} />
        </Container>
      </div>
    </>
  );

  /*
  // Nasty AF implementation, refactor at earilest convinence
  const [items, setItems] = useState<BoardItemState[]>([
    {
      id: "1",
      rowSpan: 1,
      columnSpan: 3,
      data: {
        title: "Plan Utilization",
        content: <PlanUtil metrics={metrics} selectedPlan={selectedPlan} />,
      },
    },
    {
      id: "2",
      rowSpan: 3,
      columnSpan: 3,
      data: {
        title: "Usage by User's",
        content: <IndividualUserTable metrics={metrics} />,
      },
    },
    {
      id: "3",
      rowSpan: 3,
      columnSpan: 3,
      data: {
        title: "Usage by Category",
        content: (
          <PeakUsageBarGraph metrics={metrics} selectedPlan={selectedPlan} />
        ),
      },
    },
  ]);

  useEffect(() => {
    setItems([
      {
        id: "1",
        rowSpan: 1,
        columnSpan: 3,
        data: {
          title: "Plan Utilization",
          content: <PlanUtil metrics={metrics} selectedPlan={selectedPlan} />,
        },
      },
      {
        id: "2",
        rowSpan: 3,
        columnSpan: 3,
        data: {
          title: "Usage by User's",
          content: <IndividualUserTable metrics={metrics} />,
        },
      },
      {
        id: "3",
        rowSpan: 3,
        columnSpan: 3,
        data: {
          title: "Usage by Category",
          content: (
            <PeakUsageBarGraph metrics={metrics} selectedPlan={selectedPlan} />
          ),
        },
      },
    ]);
  }, [metrics, selectedPlan]);

  return (
    <Container>
      <Board
        renderItem={(item) => (
          <BoardItem
      
            header={<Header>{item.data.title}</Header>}
            i18nStrings={{
              dragHandleAriaLabel: "Drag handle",
              dragHandleAriaDescription:
                "Use Space or Enter to activate drag, arrow keys to move, Space or Enter to submit, or Escape to discard.",
              resizeHandleAriaLabel: "Resize handle",
              resizeHandleAriaDescription:
                "Use Space or Enter to activate resize, arrow keys to move, Space or Enter to submit, or Escape to discard.",
            }}
            
          >
  
            {item.data.content}
          </BoardItem>
        )}
      
        onItemsChange={(event) => setItems(event.detail.items)}
        items={items}
        i18nStrings={(() => {
          
          function createAnnouncement(
            operationAnnouncement,
            conflicts,
            disturbed
          ) {
            const conflictsAnnouncement =
              conflicts.length > 0
                ? `Conflicts with ${conflicts
                    .map((c) => c.data.title)
                    .join(", ")}.`
                : "";
            const disturbedAnnouncement =
              disturbed.length > 0
                ? `Disturbed ${disturbed.length} items.`
                : "";
            return [
              operationAnnouncement,
              conflictsAnnouncement,
              disturbedAnnouncement,
            ]
              .filter(Boolean)
              .join(" ");
          }
          return {
            liveAnnouncementDndStarted: (operationType) =>
              operationType === "resize" ? "Resizing" : "Dragging",
            liveAnnouncementDndItemReordered: (operation) => {
              const columns = `column ${operation.placement.x + 1}`;
              const rows = `row ${operation.placement.y + 1}`;
              return createAnnouncement(
                `Item moved to ${
                  operation.direction === "horizontal" ? columns : rows
                }.`,
                operation.conflicts,
                operation.disturbed
              );
            },
            liveAnnouncementDndItemResized: (operation) => {
              const columnsConstraint = operation.isMinimalColumnsReached
                ? " (minimal)"
                : "";
              const rowsConstraint = operation.isMinimalRowsReached
                ? " (minimal)"
                : "";
              const sizeAnnouncement =
                operation.direction === "horizontal"
                  ? `columns ${operation.placement.width}${columnsConstraint}`
                  : `rows ${operation.placement.height}${rowsConstraint}`;
              return createAnnouncement(
                `Item resized to ${sizeAnnouncement}.`,
                operation.conflicts,
                operation.disturbed
              );
            },
            liveAnnouncementDndItemInserted: (operation) => {
              const columns = `column ${operation.placement.x + 1}`;
              const rows = `row ${operation.placement.y + 1}`;
              return createAnnouncement(
                `Item inserted to ${columns}, ${rows}.`,
                operation.conflicts,
                operation.disturbed
              );
            },
            liveAnnouncementDndCommitted: (operationType) =>
              `${operationType} committed`,
            liveAnnouncementDndDiscarded: (operationType) =>
              `${operationType} discarded`,
            liveAnnouncementItemRemoved: (op) =>
              createAnnouncement(
                `Removed item ${op.item.data.title}.`,
                [],
                op.disturbed
              ),
            navigationAriaLabel: "Board navigation",
            navigationAriaDescription:
              "Click on non-empty item to move focus over",
            navigationItemAriaLabel: (item) =>
              item ? item.data.title : "Empty",
          };
        })()}
        empty={undefined}
      />
    </Container>
  );
  */
};

export default Stage3;
