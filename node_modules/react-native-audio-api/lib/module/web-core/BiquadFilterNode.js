"use strict";

import AudioParam from "./AudioParam.js";
import AudioNode from "./AudioNode.js";
import { InvalidAccessError } from "../errors/index.js";
export default class BiquadFilterNode extends AudioNode {
  constructor(context, biquadFilter) {
    super(context, biquadFilter);
    this.frequency = new AudioParam(biquadFilter.frequency, context);
    this.detune = new AudioParam(biquadFilter.detune, context);
    this.Q = new AudioParam(biquadFilter.Q, context);
    this.gain = new AudioParam(biquadFilter.gain, context);
  }
  get type() {
    return this.node.type;
  }
  set type(value) {
    this.node.type = value;
  }
  getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput) {
    if (frequencyArray.length !== magResponseOutput.length || frequencyArray.length !== phaseResponseOutput.length) {
      throw new InvalidAccessError(`The lengths of the arrays are not the same frequencyArray: ${frequencyArray.length}, magResponseOutput: ${magResponseOutput.length}, phaseResponseOutput: ${phaseResponseOutput.length}`);
    }
    this.node.getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput);
  }
}
//# sourceMappingURL=BiquadFilterNode.js.map