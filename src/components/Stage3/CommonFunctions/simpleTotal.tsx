interface MetricValues {
  download: number;
  upload: number;
}

interface MetricsItem {
  name: string;
  activity1Metrics: MetricValues;
  activity2Metrics: MetricValues;
  activity3Metrics: MetricValues;
}

interface SimpleTotalItem {
  name: string;
  down: number;
  up: number;
}

export const simpleTotal = (metrics: MetricsItem[]): SimpleTotalItem[] =>
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
