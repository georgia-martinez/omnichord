"use strict";

import AudioNode from "./AudioNode.js";
import AudioParam from "./AudioParam.js";
export default class GainNode extends AudioNode {
  constructor(context, gain) {
    super(context, gain);
    this.gain = new AudioParam(gain.gain, context);
  }
}
//# sourceMappingURL=GainNode.js.map