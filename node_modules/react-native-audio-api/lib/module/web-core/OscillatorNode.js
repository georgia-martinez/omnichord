"use strict";

import { InvalidStateError } from "../errors/index.js";
import AudioScheduledSourceNode from "./AudioScheduledSourceNode.js";
import AudioParam from "./AudioParam.js";
export default class OscillatorNode extends AudioScheduledSourceNode {
  constructor(context, node) {
    super(context, node);
    this.detune = new AudioParam(node.detune, context);
    this.frequency = new AudioParam(node.frequency, context);
  }
  get type() {
    return this.node.type;
  }
  set type(value) {
    if (value === 'custom') {
      throw new InvalidStateError("'type' cannot be set directly to 'custom'.  Use setPeriodicWave() to create a custom Oscillator type.");
    }
    this.node.type = value;
  }
  setPeriodicWave(wave) {
    this.node.setPeriodicWave(wave.periodicWave);
  }
}
//# sourceMappingURL=OscillatorNode.js.map