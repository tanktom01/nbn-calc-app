import { ActivityMetrics, SimpleTotalItem } from "../../../interfaces";

export const simpleTotal = (metrics: ActivityMetrics[]): SimpleTotalItem[] =>
  metrics.map((item) => {
    const totalDownload =
      item.activity1Metrics.download +
      item.activity2Metrics.download +
      item.activity3Metrics.download;
    const totalUpload =
      item.activity1Metrics.upload +
      item.activity2Metrics.upload +
      item.activity3Metrics.upload;

    return {
      name: item.name,
      down: totalDownload,
      up: totalUpload,
    };
  });
