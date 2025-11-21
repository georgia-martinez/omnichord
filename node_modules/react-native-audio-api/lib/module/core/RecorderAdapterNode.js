"use strict";

import AudioNode from "./AudioNode.js";
export default class RecorderAdapterNode extends AudioNode {
  /** @internal */
  wasConnected = false;

  /** @internal */
  getNode() {
    return this.node;
  }
}
//# sourceMappingURL=RecorderAdapterNode.js.map