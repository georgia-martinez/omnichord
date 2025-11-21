"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioNode = _interopRequireDefault(require("./AudioNode"));
var _AudioBuffer = _interopRequireDefault(require("./AudioBuffer"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class ConvolverNode extends _AudioNode.default {
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
    return new _AudioBuffer.default(buffer);
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
exports.default = ConvolverNode;
//# sourceMappingURL=ConvolverNode.js.map