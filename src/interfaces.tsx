export interface Stage1Item {
  name: string;
  download: number;
  upload: number;
}

export interface Stage2Item {
  name: string;
  device: string;
  activity1: string;
  activity2: string;
  activity3: string;
}

export interface MetricValues {
  download: number;
  upload: number;
}
export interface TransformedStage2Item
  extends Omit<Stage2Item, "activity1" | "activity2" | "activity3"> {
  activity1: string;
  activity2: string;
  activity3: string;
}

export interface TransformedStage2ItemWithMetrics
  extends TransformedStage2Item {
  activity1Metrics: MetricValues;
  activity2Metrics: MetricValues;
  activity3Metrics: MetricValues;
}

export interface ActivityMetrics {
  name: string;
  device: string;
  activity1: string;
  activity1Metrics: MetricValues;
  activity2: string;
  activity2Metrics: MetricValues;
  activity3: string;
  activity3Metrics: MetricValues;
}
export interface TransformedStage2Device {
  device: string;
}

export interface Column {
  id: string;
}

export interface SelectionChangeDetail {
  selectedItems: Stage1Item[];
}

export interface SimpleTotalItem {
  name: string;
  down: number;
  up: number;
}
