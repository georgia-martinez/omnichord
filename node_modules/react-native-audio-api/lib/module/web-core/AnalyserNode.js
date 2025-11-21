"use strict";

import AudioNode from "./AudioNode.js";
export default class AnalyserNode extends AudioNode {
  constructor(context, node) {
    super(context, node);
    this.fftSize = node.fftSize;
    this.frequencyBinCount = node.frequencyBinCount;
    this.minDecibels = node.minDecibels;
    this.maxDecibels = node.maxDecibels;
    this.smoothingTimeConstant = node.smoothingTimeConstant;
  }
  get window() {
    return 'blackman';
  }
  set window(value) {
    console.log('React Native Audio API: setting window is not supported on web');
  }
  getByteFrequencyData(array) {
    this.node.getByteFrequencyData(array);
  }
  getByteTimeDomainData(array) {
    this.node.getByteTimeDomainData(array);
  }
  getFloatFrequencyData(array) {
    this.node.getFloatFrequencyData(array);
  }
  getFloatTimeDomainData(array) {
    this.node.getFloatTimeDomainData(array);
  }
}
//# sourceMappingURL=AnalyserNode.js.map