import React from "react";
import { simpleTotal } from "../CommonFunctions/simpleTotal";
import {
  Container,
  Header,
  KeyValuePairs,
  StatusIndicator,
} from "@cloudscape-design/components";

const PlanUtil = ({ metrics, selectedPlan }) => {
  const proccessedMetrics = simpleTotal(metrics);
  const plan = selectedPlan[0];
  //console.log(selectedPlan);
  const totalDown = proccessedMetrics.reduce((accumulator, item) => {
    return accumulator + item.down;
  }, 0);
  //console.log();
  //console.log(typeof totalDown);
  //console.log(typeof selectedPlan.download);

  const totalUp = proccessedMetrics.reduce((accumulator, item) => {
    return accumulator + item.up;
  }, 0);
  const UtilDown = (totalDown / plan.download) * 100;
  const UtilUp = (totalUp / plan.upload) * 100;

  let UtilStatusDown = 0;
  let UtilStatusUp = 0;

  if (UtilDown >= 0 && UtilDown <= 60) {
    UtilStatusDown = 1; // GOOD
  } else if (UtilDown > 60 && UtilDown <= 80) {
    UtilStatusDown = 2; // MODERATE
  } else if (UtilDown > 80 && UtilDown <= 100) {
    UtilStatusDown = 3; // HIGH
  } else if (UtilDown > 100) UtilStatusDown = 4; // DANGER
  else {
    UtilStatusDown = 5; //OUT OF BOUNDS
  }

  if (UtilUp >= 0 && UtilUp <= 60) {
    UtilStatusUp = 1; // GOOD
  } else if (UtilUp > 60 && UtilUp <= 80) {
    UtilStatusUp = 2; // MODERATE
  } else if (UtilUp > 80 && UtilUp <= 100) {
    UtilStatusUp = 3; // HIGH
  } else if (UtilUp > 100) UtilStatusUp = 4; // DANGER
  else {
    UtilStatusUp = 5; //OUT OF BOUNDS
  }

  const getDownIcon = (status) => {
    switch (status) {
      case 1:
        return (
          <StatusIndicator colorOverride="green">
            Your Download Usage is Low
          </StatusIndicator>
        );
      case 2:
        return (
          <StatusIndicator type="warning">
            Your Download Usage is Moderate
          </StatusIndicator>
        );
      case 3:
        return (
          <StatusIndicator colorOverride="red" type="error">
            Your Download Usage is High
          </StatusIndicator>
        );
      case 4:
        return (
          <StatusIndicator colorOverride="red" type="stopped">
            Your Download Usage is Dangerously High
          </StatusIndicator>
        );
      case 5:
        return (
          <StatusIndicator colorOverride="grey" type="error">
            Your Download Usage is Out of Bounds
          </StatusIndicator>
        );
      default:
        return null;
    }
  };

  const getUpIcon = (status) => {
    switch (status) {
      case 1:
        return (
          <StatusIndicator colorOverride="green">
            Your Upload Usage is Low
          </StatusIndicator>
        );
      case 2:
        return (
          <StatusIndicator type="warning">
            Your Upload Usage is Moderate
          </StatusIndicator>
        );
      case 3:
        return (
          <StatusIndicator colorOverride="red" type="error">
            Your Upload Usage is High
          </StatusIndicator>
        );
      case 4:
        return (
          <StatusIndicator colorOverride="red" type="stopped">
            Your Upload Usage is Dangerously High
          </StatusIndicator>
        );
      case 5:
        return (
          <StatusIndicator colorOverride="grey" type="error">
            Your Upload Usage is Out of Bounds
          </StatusIndicator>
        );
      default:
        return null;
    }
  };
  //console.log(UtilStatusUp);
  //console.log(UtilStatusDown);
  return (
    <Container
      variant="stacked"
      header={<Header headingTagOverride="h3">Plan Utilization</Header>}
    >
      <KeyValuePairs
        columns={2}
        items={[
          {
            type: "group",
            title: "Download",
            items: [
              {
                label: "Utilization",
                value: `${UtilDown}%`,
              },
              {
                label: "",
                value: getDownIcon(UtilStatusDown),
              },
            ],
          },
          {
            type: "group",
            title: "Upload",
            items: [
              {
                label: "Utilization",
                value: `${UtilUp}%`,
              },
              {
                label: "",
                value: getUpIcon(UtilStatusUp),
              },
            ],
          },
        ]}
      />
    </Container>
  );
};

export default PlanUtil;
