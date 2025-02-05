import * as React from "react";
import Table from "@cloudscape-design/components/table";
import {
  SpaceBetween,
  Button,
  Header,
  Input,
  Select,
} from "@cloudscape-design/components";

import { deviceTypes, tableOptions } from "./Table-config";
import { Stage2Item, Column } from "../../interfaces";
import "../../index.css";
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
    <>
      <Table
        enableKeyboardNavigation={true}
        stickyHeader={true}
        contentDensity="comfortable"
        items={selectedItems}
        trackBy="id"
        variant="container"
        submitEdit={(item, column, newValue) => {
          handleSubmit(
            item as Stage2Item,
            column as Column,
            newValue as string
          );
        }}
        columnDefinitions={[
          {
            id: "name",
            header: "User Name",
            minWidth: 100,
            maxWidth: 100,
            cell: (item) => item.name,
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
            minWidth: 100,
            maxWidth: 100,
            cell: (item) => item.device,
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
                      deviceTypes.find((option) => option.label === value) ??
                      null
                    }
                    onChange={(event) => {
                      setValue(
                        event.detail.selectedOption?.label ?? item.device
                      );
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
            minWidth: 100,
            maxWidth: 100,
            cell: (item) => item.activity1,
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
            minWidth: 100,
            maxWidth: 100,
            cell: (item) => item.activity2,
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
            minWidth: 100,
            maxWidth: 100,
            cell: (item) => item.activity3,
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
            Household Usage
          </Header>
        }
      />
    </>
  );
};

export default Stage2;
