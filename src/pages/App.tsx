import "@cloudscape-design/global-styles/index.css";
import "typeface-open-sans";
import NavBar from "../components/NavBar";
import Stage1 from "../components/Stage1/Stage1";
import Stage2 from "../components/Stage2/Stage2";
import Stage3 from "../components/Stage3/Stage3";
import Hero from "../components/Hero";
import { useState } from "react";
import { keyTable, tableOptions } from "../components/Stage2/Table-config";
import "./App.css";
import {
  Stage1Item,
  SelectionChangeDetail,
  Stage2Item,
  Column,
  MetricValues,
  TransformedStage2Item,
  TransformedStage2ItemWithMetrics,
} from "../interfaces";

const App: React.FC = () => {
  // Stage 1 State + Handle
  const [selectedItemsStage1, setSelectedItemsStage1] = useState<Stage1Item[]>([
    { name: "Basic", download: 25, upload: 5 },
  ]);

  const handleSelectionChangeStage1 = ({
    detail,
  }: {
    detail: SelectionChangeDetail;
  }) => {
    setSelectedItemsStage1(detail?.selectedItems ?? []);
  };

  // Stage 2 State + Handles
  const [selectedItemsStage2, setSelectedItemsStage2] = useState<Stage2Item[]>([
    {
      name: "John",
      device: "TV",
      activity1: "Video Streaming 4K",
      activity2: "-",
      activity3: "-",
    },
  ]);

  const handleSubmit = (
    currentItem: Stage2Item,
    column: Column,
    value: string
  ) => {
    const newItem = { ...currentItem, [column.id]: value };
    const updatedItems = selectedItemsStage2.map((item) =>
      item === currentItem ? newItem : item
    );
    setSelectedItemsStage2(updatedItems);
  };

  const handleCreateUser = () => {
    const newUser = {
      name: "John",
      device: "TV",
      activity1: "Video Streaming 4K",
      activity2: "-",
      activity3: "-",
    };
    setSelectedItemsStage2([...selectedItemsStage2, newUser]);
  };

  // Data Transform Process
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

  const transformMetricValues = (
    array: TransformedStage2Item[]
  ): TransformedStage2ItemWithMetrics[] => {
    return array.map((items) => ({
      ...items,
      activity1Metrics: getMetricValues(items.activity1),
      activity2Metrics: getMetricValues(items.activity2),
      activity3Metrics: getMetricValues(items.activity3),
    }));
  };

  const transformedData = transformUserData(selectedItemsStage2);
  const transformedMetricValues = transformMetricValues(transformedData);

  return (
    <>
      <NavBar />
      <Hero />
      <div className="container">
        <div className="main-content">
          <div className="stageSpace">
            <Stage1
              selectedItems={selectedItemsStage1}
              handleSelectionChange={handleSelectionChangeStage1}
            />
          </div>
          <div className="stageSpace">
            <Stage2
              selectedItems={selectedItemsStage2}
              handleSubmit={handleSubmit}
              handleCreateUser={handleCreateUser}
            />
          </div>
          <div className="stageSpace">
            <Stage3
              metrics={transformedMetricValues}
              selectedPlan={selectedItemsStage1}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
