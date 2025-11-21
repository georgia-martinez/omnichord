"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioNode = _interopRequireDefault(require("./AudioNode"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class RecorderAdapterNode extends _AudioNode.default {
  /** @internal */
  wasConnected = false;

  /** @internal */
  getNode() {
    return this.node;
  }
}
exports.default = RecorderAdapterNode;
//# sourceMappingURL=RecorderAdapterNode.js.map