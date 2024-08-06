import * as React from "react";
import Board from "@cloudscape-design/board-components/board";
import BoardItem from "@cloudscape-design/board-components/board-item";
import Header from "@cloudscape-design/components/header";
import { useState, useEffect } from "react";
import { Container } from "@cloudscape-design/components";
import IndividualUserTable from "./Widgets/IndividualUserTable";
import PeakUsageBarGraph from "./Widgets/PeakUsageBarGraph";
import PlanUtil from "./Widgets/PlanUtil";

const Stage3 = ({ metrics, selectedPlan }) => {
  // Nasty AF implementation, refactor at earilest convinence
  const [items, setItems] = useState([
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
};

export default Stage3;
