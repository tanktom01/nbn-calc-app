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
  PeerState,
  IndPeerState,
} from "../interfaces";
import PeerToPeerTable from "../components/Stage2/PeerToPeerTable";
import {
  Container,
  Header,
  SegmentedControl,
  Tabs,
} from "@cloudscape-design/components";
import PeertoPeerInd from "../components/Stage2/PeertoPeerInd";
import FileTransfer from "../components/Stage3/Widgets/FileTransfer";

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
      activity1: "-",
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
      activity1: "-",
      activity2: "-",
      activity3: "-",
    };
    setSelectedItemsStage2([...selectedItemsStage2, newUser]);
  };
  // Bulk File Transfer Table
  const [peerJob, setPeerJob] = useState<PeerState[]>([
    { numfiles: 0, avgsize: 0, usetype: "-" },
  ]);

  const handleSubmitPeerJob = (
    currentItem: PeerState,
    column: Column,
    value: number
  ) => {
    const newItem = { ...currentItem, [column.id]: value };
    const updatedItems = peerJob.map((item) =>
      item === currentItem ? newItem : item
    );
    setPeerJob(updatedItems);
  };

  const handleCreatePeerJob = () => {
    const newJob = { numfiles: 0, avgsize: 0, usetype: "-" };
    setPeerJob([...peerJob, newJob]);
  };

  //Ind File Transfer Table
  const [peerIndJob, setPeerIndJob] = useState<IndPeerState[]>([
    { fName: "PDF", usetype: "Download", fileSize: 0 },
  ]);

  const handleSubmitIndPeerJob = (
    currentItem: IndPeerState,
    column: Column,
    value: string | number
  ) => {
    const newItem = { ...currentItem, [column.id]: value };
    const updatedItems = peerIndJob.map((item) =>
      item === currentItem ? newItem : item
    );
    setPeerIndJob(updatedItems);
  };

  const handleCreateIndPeerJob = () => {
    const newIndJob = { fName: "PDF", usetype: "Download", fileSize: 0 };
    setPeerIndJob([...peerIndJob, newIndJob]);
  };

  const [fileId, setFileId] = useState("Fileseg-1");
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
            <Tabs
              tabs={[
                {
                  label: "Peak Bandwidth",
                  id: "seg-1",
                  content: [
                    <>
                      <div className="stageSpace">
                        <Container
                          header={
                            <Header
                              variant="h2"
                              description="Input the various activitys each user might be engaged with on their device"
                            >
                              2. Input your households usage
                            </Header>
                          }
                        >
                          <Stage2
                            selectedItems={selectedItemsStage2}
                            handleSubmit={handleSubmit}
                            handleCreateUser={handleCreateUser}
                          />
                        </Container>
                      </div>
                      <div className="stageSpace">
                        <Stage3
                          selectedItemsStage2={selectedItemsStage2}
                          selectedPlan={selectedItemsStage1}
                        />
                      </div>
                    </>,
                  ],
                },
                {
                  label: "File Transfers",
                  id: "seg-2",
                  content: [
                    <div className="stageSpace">
                      <SegmentedControl
                        selectedId={fileId}
                        label="Calculation Option"
                        onChange={({ detail }) => {
                          setFileId(detail.selectedId);
                        }}
                        options={[
                          { text: "Bulk", id: "Fileseg-1" },
                          { text: "Individual", id: "Fileseg-2" },
                        ]}
                      />

                      {fileId === "Fileseg-1" ? (
                        <>
                          <div className="stageSpace">
                            <Container
                              header={
                                <Header
                                  variant="h2"
                                  description="Input your file transfer specifications"
                                >
                                  2. Calculate your File Transfer Usage
                                </Header>
                              }
                            >
                              <div className="peerContainer">
                                <PeerToPeerTable
                                  selectedItems={peerJob}
                                  handleSubmit={handleSubmitPeerJob}
                                  handleCreateJob={handleCreatePeerJob}
                                />
                              </div>
                            </Container>
                          </div>
                          <div className="stageSpace">
                            <Container
                              header={<Header>3. Check out your usage</Header>}
                            >
                              <FileTransfer
                                peerJob={peerJob}
                                selectedPlan={selectedItemsStage1}
                                segment={fileId}
                              />
                            </Container>
                          </div>
                        </>
                      ) : (
                        <>
                          <div className="stageSpace">
                            <Container
                              header={
                                <Header
                                  variant="h2"
                                  description="Input your file transfer specifications"
                                >
                                  2. Calculate your File Transfer Usage
                                </Header>
                              }
                            >
                              <div className="peerContainer">
                                <PeertoPeerInd
                                  selectedItems={peerIndJob}
                                  handleSubmit={handleSubmitIndPeerJob}
                                  handleCreateJob={handleCreateIndPeerJob}
                                />
                              </div>
                            </Container>
                          </div>
                          <div className="stageSpace">
                            <Container
                              header={<Header>3. Check out your usage</Header>}
                            >
                              <FileTransfer
                                peerIndJob={peerIndJob}
                                selectedPlan={selectedItemsStage1}
                                segment={fileId}
                              />
                            </Container>
                          </div>
                        </>
                      )}
                    </div>,
                  ],
                },
              ]}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
