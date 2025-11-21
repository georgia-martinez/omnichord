"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class AudioNode {
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
    if (destination instanceof _AudioParam.default) {
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
exports.default = AudioNode;
//# sourceMappingURL=AudioNode.js.map