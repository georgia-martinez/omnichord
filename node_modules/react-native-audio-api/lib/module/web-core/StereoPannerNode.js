"use strict";

import AudioNode from "./AudioNode.js";
import AudioParam from "./AudioParam.js";
export default class StereoPannerNode extends AudioNode {
  constructor(context, pan) {
    super(context, pan);
    this.pan = new AudioParam(pan.pan, context);
  }
}
//# sourceMappingURL=StereoPannerNode.js.map