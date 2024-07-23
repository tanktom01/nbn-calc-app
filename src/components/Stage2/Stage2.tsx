import {
  Table,
  Box,
  SpaceBetween,
  Button,
  Header,
  Input,
  Select,
} from "@cloudscape-design/components";
import { useState } from "react";

const Stage2 = () => {
  const [items, setItems] = useState([]);

  const addNewItem = () => {
    const newItem = {
      user: `User ${items.length + 1}`,
      device: "-",
      activity1: "-",
      activity2: "-",
      activity3: "-",
    };
  };
  return (
    <Table
      columnDefinitions={[
        {
          id: "user",
          header: "User",
          maxWidth: 150,
          cell: (item) => {
            return item.name;
          },
          isRowHeader: true,
          editConfig: {
            ariaLabel: "Name",
            editIconAriaLabel: "editable",
            errorIconAriaLabel: "Name Error",
            editingCell: (item, { currentValue, setValue }) => {
              return (
                <Input
                  autoFocus={true}
                  value={currentValue ?? item.name}
                  onChange={(event) => setValue(event.detail.value)}
                />
              );
            },
          },
        },
        {
          id: "device",
          header: "Device",
          maxWidth: 150,
          cell: (item) => {
            return item.device;
          },
          editConfig: {
            ariaLabel: "Type",
            editIconAriaLabel: "editable",
            editingCell: (item, { currentValue, setValue }) => {
              const value = currentValue ?? item.device;
              return (
                <Select
                  autoFocus={true}
                  expandToViewport={true}
                  selectedOption={
                    [
                      { label: "1A", value: "1A" },
                      { label: "1B", value: "1B" },
                      { label: "2A", value: "2A" },
                      { label: "2B", value: "2B" },
                    ].find((option) => option.value === value) ?? null
                  }
                  onChange={(event) => {
                    setValue(event.detail.selectedOption.value ?? item.device);
                  }}
                  options={[
                    { label: "1A", value: "1A" },
                    { label: "1B", value: "1B" },
                    { label: "2A", value: "2A" },
                    { label: "2B", value: "2B" },
                  ]}
                />
              );
            },
          },
        },
        {
          id: "activity1",
          header: "Activity 1",
          maxWidth: 150,
          cell: (e) => e.activity1,
        },
        {
          id: "activity2",
          header: "Activity 2",
          maxWidth: 150,
          cell: (e) => e.activity2,
        },
        {
          id: "activity3",
          header: "Activity 3",
          maxWidth: 150,
          cell: (e) => e.activity3,
        },
      ]}
      enableKeyboardNavigation
      items={[
        {
          name: "John",
          device: "TV",
          activity1: "4K Streaming",
          activity2: "-",
          activity3: "-",
        },
      ]}
      loadingText="Loading resources"
      submitEdit={async () => {
        await new Promise((e) => setTimeout(e, 1e3));
      }}
      empty={
        <Box margin={{ vertical: "xs" }} textAlign="center" color="inherit">
          <SpaceBetween size="m">
            <b>No resources</b>
            <Button>Create resource</Button>
          </SpaceBetween>
        </Box>
      }
      header={
        <Header
          variant="h1"
          description="Input the typical usage your household mught have during peak times"
        >
          <SpaceBetween direction="vertical" size="s">
            2. Calculate your HouseHold usage
            <Button iconName="add-plus" variant="primary">
              Add Device
            </Button>
          </SpaceBetween>
        </Header>
      }
    />
  );
};

export default Stage2;
