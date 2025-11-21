"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioNode = _interopRequireDefault(require("./AudioNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class GainNode extends _AudioNode.default {
  constructor(context, gain) {
    super(context, gain);
    this.gain = new _AudioParam.default(gain.gain, context);
  }
}
exports.default = GainNode;
//# sourceMappingURL=GainNode.js.map