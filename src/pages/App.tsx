import "@cloudscape-design/global-styles/index.css";
import "typeface-open-sans";
import NavBar from "../components/NavBar";
import Stage1 from "../components/Stage1/Stage1";
import Stage2 from "../components/Stage2/Stage2";
import Stage3 from "../components/Stage3/Stage3";
import Hero from "../components/Hero";
import { useState } from "react";
import "./App.css";
import {
  Stage1Item,
  SelectionChangeDetail,
  Stage2Item,
  Column,
} from "../interfaces";
import PeerToPeerTable from "../components/Stage2/PeerToPeerTable";

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
  //console.log("App Original Data", selectedItemsStage2);

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
            <PeerToPeerTable />
          </div>
          <div className="stageSpace">
            <Stage3
              selectedItemsStage2={selectedItemsStage2}
              selectedPlan={selectedItemsStage1}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
