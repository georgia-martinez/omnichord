"use strict";

import AudioNode from "./AudioNode.js";
import AudioBuffer from "./AudioBuffer.js";
export default class ConvolverNode extends AudioNode {
  constructor(context, node, buffer = null, disableNormalization = false) {
    super(context, node);
    this.node.normalize = !disableNormalization;
    if (buffer) {
      this.node.buffer = buffer.buffer;
    }
  }
  get buffer() {
    const buffer = this.node.buffer;
    if (!buffer) {
      return null;
    }
    return new AudioBuffer(buffer);
  }
  set buffer(buffer) {
    if (!buffer) {
      this.node.buffer = null;
    } else {
      this.node.buffer = buffer.buffer;
    }
  }
  get normalize() {
    return this.node.normalize;
  }
  set normalize(value) {
    this.node.normalize = value;
  }
}
//# sourceMappingURL=ConvolverNode.js.map