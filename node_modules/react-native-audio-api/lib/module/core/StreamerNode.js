"use strict";

import AudioScheduledSourceNode from "./AudioScheduledSourceNode.js";
export default class StreamerNode extends AudioScheduledSourceNode {
  initialize(streamPath) {
    return this.node.initialize(streamPath);
  }
}
//# sourceMappingURL=StreamerNode.js.map