import {
  StatisticsDatasetConstructorType,
  StatisticsDatasetType,
} from './types';
import { init, max, mean, min, median, quantile, mode } from './utils';

export default class Statistics {
  private readonly _dataset: StatisticsDatasetType;

  constructor(dataset: StatisticsDatasetConstructorType) {
    this._dataset = init(dataset);
  }

  get dataset(): StatisticsDatasetType {
    return this._dataset;
  }

  get max() {
    return max(this.dataset);
  }

  get min() {
    return min(this.dataset);
  }

  get mean() {
    return mean(this.dataset);
  }

  get median() {
    return median(this.dataset);
  }

  quantile(percent: number) {
    return quantile(this.dataset, percent);
  }

  get mode() {
    return mode(this.dataset);
  }
}
