"use strict";

import AudioParam from "./AudioParam.js";
export default class AudioNode {
  constructor(context, node) {
    this.context = context;
    this.node = node;
    this.numberOfInputs = this.node.numberOfInputs;
    this.numberOfOutputs = this.node.numberOfOutputs;
    this.channelCount = this.node.channelCount;
    this.channelCountMode = this.node.channelCountMode;
    this.channelInterpretation = this.node.channelInterpretation;
  }
  connect(destination) {
    if (this.context !== destination.context) {
      throw new Error('Source and destination are from different BaseAudioContexts');
    }
    if (destination instanceof AudioParam) {
      this.node.connect(destination.param);
    } else {
      this.node.connect(destination.node);
    }
    return destination;
  }
  disconnect(destination) {
    if (destination === undefined) {
      this.node.disconnect();
      return;
    }
    this.node.disconnect(destination.node);
  }
}
//# sourceMappingURL=AudioNode.js.map