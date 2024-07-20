const item = {
  basic: { download: 25, upload: 5 },
  value: { download: 50, upload: 20 },
  fast: { download: 100, upload: 20 },
  superFast: { download: 250, upload: 25 },
  ultraFast: { download: 1000, upload: 50 },
};

export const CARD_DATA = {
  sections: [
    {
      id: "basic",
      header: "Basic",
      content: () => item.basic.upload && item.basic.upload,
    },
    {
      id: "value",
      header: "Value",
      content: () => item.value.upload && item.value.upload,
    },
    {
      id: "fast",
      header: "Fast",
      content: () => item.fast.upload && item.fast.upload,
    },
    {
      id: "superFast",
      header: "Super Fast",
      content: () => item.superFast.upload && item.superFast.upload,
    },
    {
      id: "ultraFast",
      header: "Ultra Fast",
      content: () => item.ultraFast.upload && item.ultraFast.upload,
    },
  ],
};
