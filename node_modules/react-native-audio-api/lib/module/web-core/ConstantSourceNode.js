"use strict";

import AudioParam from "./AudioParam.js";
import AudioScheduledSourceNode from "./AudioScheduledSourceNode.js";
export default class ConstantSourceNode extends AudioScheduledSourceNode {
  constructor(context, node) {
    super(context, node);
    this.offset = new AudioParam(node.offset, context);
  }
}
//# sourceMappingURL=ConstantSourceNode.js.map