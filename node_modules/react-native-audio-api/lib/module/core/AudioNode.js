"use strict";

import AudioParam from "./AudioParam.js";
import { InvalidAccessError } from "../errors/index.js";
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
      throw new InvalidAccessError('Source and destination are from different BaseAudioContexts');
    }
    if (destination instanceof AudioParam) {
      this.node.connect(destination.audioParam);
    } else {
      this.node.connect(destination.node);
    }
    return destination;
  }
  disconnect(destination) {
    if (destination instanceof AudioParam) {
      this.node.disconnect(destination.audioParam);
    } else {
      this.node.disconnect(destination?.node);
    }
  }
}
//# sourceMappingURL=AudioNode.js.map