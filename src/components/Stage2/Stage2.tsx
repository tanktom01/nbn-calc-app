import {
  Table,
  SpaceBetween,
  Button,
  Header,
  Input,
  Select,
} from "@cloudscape-design/components";

import { deviceTypes, tableOptions } from "./Table-config";
import { Stage2Item, Column } from "../../interfaces";

interface Stage2Props {
  selectedItems: Stage2Item[];
  handleSubmit: (
    currentItem: Stage2Item,
    column: Column,
    value: string
  ) => void;
  handleCreateUser: () => void;
}

const Stage2: React.FC<Stage2Props> = ({
  selectedItems,
  handleSubmit,
  handleCreateUser,
}) => {
  return (
    <Table
      items={selectedItems}
      submitEdit={(item, column, newValue) => {
        handleSubmit(item as Stage2Item, column as Column, newValue as string);
      }}
      columnDefinitions={[
        {
          id: "name",
          header: "User Name",
          cell: (item) => item.name,
          minWidth: 100,
          editConfig: {
            editIconAriaLabel: "editable",
            editingCell: (item, { currentValue, setValue }) => {
              return (
                <Input
                  autoFocus={true}
                  value={currentValue ?? item.name}
                  onChange={(event) => {
                    setValue(event.detail.value);
                  }}
                />
              );
            },
          },
        },
        {
          id: "device",
          header: "Device",
          cell: (item) => item.device,
          minWidth: 100,
          editConfig: {
            editIconAriaLabel: "editable",
            editingCell: (item, { currentValue, setValue }) => {
              const value = currentValue ?? item.device;
              //console.log(deviceItems);
              return (
                <Select
                  autoFocus={true}
                  expandToViewport={true}
                  selectedOption={
                    deviceTypes.find((option) => option.label === value) ?? null
                  }
                  onChange={(event) => {
                    setValue(event.detail.selectedOption?.label ?? item.device);
                  }}
                  options={deviceTypes}
                />
              );
            },
          },
        },
        {
          id: "activity1",
          header: "Activity 1",
          cell: (item) => item.activity1,
          minWidth: 100,
          editConfig: {
            editIconAriaLabel: "editable",
            editingCell: (item, { currentValue, setValue }) => {
              const value = currentValue ?? item.activity1;
              //console.log(deviceItems);
              return (
                <Select
                  autoFocus={true}
                  expandToViewport={true}
                  selectedOption={
                    tableOptions.find((option) => option.label === value) ??
                    null
                  }
                  onChange={(event) => {
                    setValue(
                      event.detail.selectedOption?.label ?? item.activity1
                    );
                  }}
                  options={tableOptions}
                />
              );
            },
          },
        },
        {
          id: "activity2",
          header: "Activity 2",
          cell: (item) => item.activity2,
          minWidth: 100,
          editConfig: {
            editIconAriaLabel: "editable",
            editingCell: (item, { currentValue, setValue }) => {
              const value = currentValue ?? item.activity2;
              //console.log(deviceItems);
              return (
                <Select
                  autoFocus={true}
                  expandToViewport={true}
                  selectedOption={
                    tableOptions.find((option) => option.label === value) ??
                    null
                  }
                  onChange={(event) => {
                    setValue(
                      event.detail.selectedOption?.label ?? item.activity2
                    );
                  }}
                  options={tableOptions}
                />
              );
            },
          },
        },
        {
          id: "activity3",
          header: "Activity 3",
          cell: (item) => item.activity3,
          minWidth: 100,
          editConfig: {
            editIconAriaLabel: "editable",
            editingCell: (item, { currentValue, setValue }) => {
              const value = currentValue ?? item.activity3;
              //console.log(deviceItems);
              return (
                <Select
                  autoFocus={true}
                  expandToViewport={true}
                  selectedOption={
                    tableOptions.find((option) => option.label === value) ??
                    null
                  }
                  onChange={(event) => {
                    setValue(
                      event.detail.selectedOption?.label ?? item.activity3
                    );
                  }}
                  options={tableOptions}
                />
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
                  handleCreateUser();
                }}
                iconName="add-plus"
                variant="primary"
              >
                Create User
              </Button>
            </SpaceBetween>
          }
        >
          2. Calculate your HouseHold usage
        </Header>
      }
    />
  );
};

export default Stage2;
