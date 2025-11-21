"use strict";

import { IndexSizeError } from "../errors/index.js";
import AudioNode from "./AudioNode.js";
export default class AnalyserNode extends AudioNode {
  static allowedFFTSize = [32, 64, 128, 256, 512, 1024, 2048, 4096, 8192, 16384, 32768];
  get fftSize() {
    return this.node.fftSize;
  }
  set fftSize(value) {
    if (!AnalyserNode.allowedFFTSize.includes(value)) {
      throw new IndexSizeError(`Provided value (${value}) must be a power of 2 between 32 and 32768`);
    }
    this.node.fftSize = value;
  }
  get minDecibels() {
    return this.node.minDecibels;
  }
  set minDecibels(value) {
    if (value >= this.maxDecibels) {
      throw new IndexSizeError(`The minDecibels value (${value}) must be less than maxDecibels`);
    }
    this.node.minDecibels = value;
  }
  get maxDecibels() {
    return this.node.maxDecibels;
  }
  set maxDecibels(value) {
    if (value <= this.minDecibels) {
      throw new IndexSizeError(`The maxDecibels value (${value}) must be greater than minDecibels`);
    }
    this.node.maxDecibels = value;
  }
  get smoothingTimeConstant() {
    return this.node.smoothingTimeConstant;
  }
  set smoothingTimeConstant(value) {
    if (value < 0 || value > 1) {
      throw new IndexSizeError(`The smoothingTimeConstant value (${value}) must be between 0 and 1`);
    }
    this.node.smoothingTimeConstant = value;
  }
  get window() {
    return this.node.window;
  }
  set window(value) {
    this.node.window = value;
  }
  get frequencyBinCount() {
    return this.node.frequencyBinCount;
  }
  getFloatFrequencyData(array) {
    this.node.getFloatFrequencyData(array);
  }
  getByteFrequencyData(array) {
    this.node.getByteFrequencyData(array);
  }
  getFloatTimeDomainData(array) {
    this.node.getFloatTimeDomainData(array);
  }
  getByteTimeDomainData(array) {
    this.node.getByteTimeDomainData(array);
  }
}
//# sourceMappingURL=AnalyserNode.js.map