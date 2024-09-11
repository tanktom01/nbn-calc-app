import {
  Button,
  FormField,
  Header,
  Input,
  Select,
  SpaceBetween,
  Table,
} from "@cloudscape-design/components";
import { Column, PeerState } from "../../interfaces";
import { useState } from "react";
import { usageType } from "./Table-config";

interface PtpProps {
  selectedItems: PeerState[];
  handleSubmit: (currentItem: PeerState, column: Column, value: number) => void;
  handleCreateJob: () => void;
}

const PeerToPeerTable: React.FC<PtpProps> = ({
  selectedItems,
  handleSubmit,
  handleCreateJob,
}) => {
  const [numFilesWarning, setNumFilesWarning] = useState<string | null>(null);
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);
  //make sure you implement something in the handle
  return (
    <Table
      enableKeyboardNavigation={true}
      stickyHeader={true}
      contentDensity="comfortable"
      submitEdit={(item, column, newValue) => {
        if (!disableSubmit) {
          handleSubmit(item as PeerState, column as Column, newValue as number);
        }
      }}
      items={selectedItems}
      columnDefinitions={[
        {
          id: "numfiles",
          header: "Number of Files",
          minWidth: 100,
          maxWidth: 100,
          cell: (item) => item.numfiles,
          editConfig: {
            editIconAriaLabel: "editable",
            editingCell: (item, { currentValue, setValue }) => {
              return (
                <FormField errorText={numFilesWarning}>
                  <Input
                    autoFocus={true}
                    value={currentValue ?? item.numfiles}
                    onChange={(event) => {
                      const value = event.detail.value;

                      if (isNaN(Number(value)) || Number(value) < 0) {
                        setNumFilesWarning("User has not input a valid number");
                        setDisableSubmit(true);
                      } else {
                        setNumFilesWarning(null);
                        setDisableSubmit(false);
                        setValue(value);
                      }
                    }}
                  />
                </FormField>
              );
            },
          },
        },
        {
          id: "usetype",
          header: "Use Type",
          minWidth: 100,
          maxWidth: 100,
          cell: (item) => item.usetype,
          editConfig: {
            editIconAriaLabel: "editable",
            editingCell: (item, { currentValue, setValue }) => {
              const value = currentValue ?? item.usetype;
              return (
                <Select
                  autoFocus={true}
                  expandToViewport={true}
                  selectedOption={
                    usageType.find((option) => option.label === value) ?? null
                  }
                  onChange={(event) => {
                    setValue(
                      event.detail.selectedOption?.label ?? item.usetype
                    );
                  }}
                  options={usageType}
                />
              );
            },
          },
        },
        {
          id: "avgsize",
          header: "Average File Size (GB)",
          minWidth: 100,
          maxWidth: 100,
          cell: (item) => item.avgsize,
          editConfig: {
            editIconAriaLabel: "editable",
            editingCell: (item, { currentValue, setValue }) => {
              return (
                <FormField errorText={numFilesWarning}>
                  <Input
                    autoFocus={true}
                    value={currentValue ?? item.avgsize}
                    onChange={(event) => {
                      const value = event.detail.value;

                      if (isNaN(Number(value)) || Number(value) < 0) {
                        setNumFilesWarning("User has not input a valid number");
                        setDisableSubmit(true);
                      } else {
                        setNumFilesWarning(null);
                        setDisableSubmit(false);
                        setValue(value);
                      }
                    }}
                  />
                </FormField>
              );
            },
          },
        },
      ]}
      header={
        <Header
          description="Input the typical usage your household mught have during peak times"
          actions={
            <SpaceBetween direction="horizontal" size="xs">
              <Button
                onClick={() => {
                  handleCreateJob();
                }}
                iconName="add-plus"
                variant="primary"
              >
                New Job
              </Button>
            </SpaceBetween>
          }
        >
          Bulk File Calculator
        </Header>
      }
    />
  );
};

export default PeerToPeerTable;
