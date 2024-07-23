import { TableProps } from "@cloudscape-design/components";

export const item = [
  { name: "Basic", download: 25, upload: 5 },
  { name: "Value", download: 50, upload: 20 },
  { name: "Fast", download: 100, upload: 20 },
  { name: "Super Fast", download: 250, upload: 25 },
  { name: "Ultra Fast", download: 1000, upload: 50 },
];

export const CARD_DATA = {
  header: (item) => <h2>{item.name}</h2>,
  sections: [
    {
      id: "download",
      header: "Download",
      content: (item) => `${item.download} MBps`,
    },
    {
      id: "upload",
      header: "Upload",
      content: (item) => `${item.upload} MBps`,
    },
  ],
};

export const renderAriaLive: TableProps["renderAriaLive"] = ({
  firstIndex,
  lastIndex,
  totalItemsCount,
}) => {
  return totalItemsCount !== undefined
    ? `Displaying items ${firstIndex} to ${lastIndex} of ${totalItemsCount}`
    : `Displaying items ${firstIndex} to ${lastIndex}`;
};
