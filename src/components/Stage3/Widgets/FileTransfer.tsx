import {
  Container,
  FormField,
  Grid,
  Header,
  KeyValuePairs,
  Slider,
} from "@cloudscape-design/components";
import { useState } from "react";
import { calculateTime } from "../CommonFunctions/timeCalulation";
import { IndPeerState, PeerState, Stage1Item } from "../../../interfaces";

interface FileTransferProps {
  selectedPlan: Stage1Item[];
  peerJob?: PeerState[];
  peerIndJob?: IndPeerState[];
  segment: string;
}
const FileTransfer: React.FC<FileTransferProps> = ({
  selectedPlan,
  peerJob,
  peerIndJob,
  segment,
}) => {
  const [value, setValue] = useState(100);
  // Staging for calculations

  // Bulk Time
  const downloadTotalsMB: number[] = [];
  const uploadTotalsMB: number[] = [];

  peerJob?.forEach((job) => {
    const fileTotal = job.numfiles ?? 0;
    const bulkQuantity = job.avgsize ?? 0;
    const totalBulk = bulkQuantity * fileTotal;
    const totalBulkMB = totalBulk * 1024;

    if (job.usetype === "Download") {
      downloadTotalsMB.push(totalBulkMB);
    } else if (job.usetype === "Upload") {
      uploadTotalsMB.push(totalBulkMB);
    }
  });

  // Calculate the grand totals for downloads and uploads
  const grandDownloadTotalMB = downloadTotalsMB.reduce(
    (acc, total) => acc + total,
    0
  );
  const grandUploadTotalMB = uploadTotalsMB.reduce(
    (acc, total) => acc + total,
    0
  );

  const grandDownloadTotalGB = grandDownloadTotalMB / 1024;
  const grandUploadTotalGB = grandUploadTotalMB / 1024;

  const dwSpeed = selectedPlan[0].download;
  const upSpeed = selectedPlan[0].upload;

  const utilmodifier = value / 100;
  const utilmod = utilmodifier - 1;
  const utilfinal = Math.abs(utilmod);
  const utilfinalmodifier = 1 + utilfinal;

  // Individual Time
  const indDownloadTotalsMB: number[] = [];
  const indUploadTotalsMB: number[] = [];

  peerIndJob?.forEach((job) => {
    const indQuantity = job.fileSize ?? 0;
    const indTotalMB = indQuantity * 1024;

    if (job.usetype === "Download") {
      indDownloadTotalsMB.push(indTotalMB);
    } else if (job.usetype === "Upload") {
      indUploadTotalsMB.push(indTotalMB);
    }
  });

  // Calculate individual grand totals for downloads and uploads
  const indGrandDownloadTotalMB = indDownloadTotalsMB.reduce(
    (acc, total) => acc + total,
    0
  );
  const indGrandUploadTotalMB = indUploadTotalsMB.reduce(
    (acc, total) => acc + total,
    0
  );

  const indGrandDownloadTotalGB = indGrandDownloadTotalMB / 1024;
  const indGrandUploadTotalGB = indGrandUploadTotalMB / 1024;

  const calculateTotals = (segment: string) => {
    let dwtotal: number;
    let uptotal: number;

    if (segment === "Fileseg-1") {
      dwtotal = grandDownloadTotalGB;
      uptotal = grandUploadTotalGB;
    } else {
      dwtotal = indGrandDownloadTotalGB;
      uptotal = indGrandUploadTotalGB;
    }

    return { dwtotal, uptotal };
  };

  const { dwtotal, uptotal } = calculateTotals(segment);
  const { dwtime3, uptime3 } = calculateTime(
    segment,
    grandDownloadTotalMB,
    grandUploadTotalMB,
    indGrandDownloadTotalMB,
    indGrandUploadTotalMB,
    dwSpeed,
    upSpeed,
    utilfinalmodifier
  );

  return (
    <>
      <div className="stageSpace">
        <Container
          header={
            <Header description="A bunch of controls to do some shit">
              Control Panel
            </Header>
          }
        >
          <Grid gridDefinition={[{ colspan: 3 }, { colspan: 10 }]}>
            <FormField label="Plan Utilisation">
              <Slider
                onChange={({ detail }) => setValue(detail.value)}
                value={value}
                min={0}
                max={100}
              />
            </FormField>
          </Grid>
        </Container>
        <div className="stageSpace2">
          <Container header={<Header>Total's</Header>}>
            <KeyValuePairs
              columns={2}
              items={[
                { label: "Estimated Download Time", value: dwtime3 },
                { label: "Estimated Upload Time", value: uptime3 },
                {
                  label: "Download Volume",
                  value: `${dwtotal}GB`,
                },
                {
                  label: "Upload Volume",
                  value: `${uptotal}GB`,
                },
              ]}
            />
          </Container>
        </div>
        <Container header={<Header>Visualisations</Header>}>....</Container>
      </div>
    </>
  );
};

export default FileTransfer;
