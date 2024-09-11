import {
  Button,
  FormField,
  Header,
  Input,
  Select,
  SpaceBetween,
  Table,
} from "@cloudscape-design/components";
import { Column, IndPeerState } from "../../interfaces";
import { useState } from "react";
import { usageType } from "./Table-config";

interface IndPtpProps {
  selectedItems: IndPeerState[];
  handleSubmit: (
    currentItem: IndPeerState,
    column: Column,
    value: number
  ) => void;
  handleCreateJob: () => void;
}

const PeertoPeerInd: React.FC<IndPtpProps> = ({
  selectedItems,
  handleSubmit,
  handleCreateJob,
}) => {
  const [numFilesWarning, setNumFilesWarning] = useState<string | null>(null);
  const [disableSubmit, setDisableSubmit] = useState<boolean>(false);

  return (
    <Table
      enableKeyboardNavigation={true}
      stickyHeader={true}
      contentDensity="comfortable"
      submitEdit={(item, column, newValue) => {
        if (!disableSubmit) {
          handleSubmit(
            item as IndPeerState,
            column as Column,
            newValue as number
          );
        }
      }}
      items={selectedItems}
      columnDefinitions={[
        {
          id: "fName",
          header: "Files Name",
          minWidth: 100,
          maxWidth: 100,
          cell: (item) => item.fName,
          editConfig: {
            editIconAriaLabel: "editable",
            editingCell: (item, { currentValue, setValue }) => {
              return (
                <Input
                  autoFocus={true}
                  value={currentValue ?? item.fName}
                  onChange={(event) => {
                    const value = event.detail.value;

                    setValue(value);
                  }}
                />
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
          id: "fileSize",
          header: "File Size (GB)",
          minWidth: 100,
          maxWidth: 100,
          cell: (item) => item.fileSize,
          editConfig: {
            editIconAriaLabel: "editable",
            editingCell: (item, { currentValue, setValue }) => {
              return (
                <FormField
                  errorText={numFilesWarning} // Conditionally display the warning
                >
                  <Input
                    autoFocus={true}
                    value={currentValue ?? item.fileSize}
                    onChange={(event) => {
                      const value = event.detail.value;
                      // Check if the input is a valid number
                      if (isNaN(Number(value)) || Number(value) < 0) {
                        setNumFilesWarning("User has not input a valid number");
                        setDisableSubmit(true);
                      } else {
                        setNumFilesWarning(null); // Clear the warning if valid
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
          Individual File Calculator
        </Header>
      }
    />
  );
};

export default PeertoPeerInd;
