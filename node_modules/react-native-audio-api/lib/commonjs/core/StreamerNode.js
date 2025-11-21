"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioScheduledSourceNode = _interopRequireDefault(require("./AudioScheduledSourceNode"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class StreamerNode extends _AudioScheduledSourceNode.default {
  initialize(streamPath) {
    return this.node.initialize(streamPath);
  }
}
exports.default = StreamerNode;
//# sourceMappingURL=StreamerNode.js.map