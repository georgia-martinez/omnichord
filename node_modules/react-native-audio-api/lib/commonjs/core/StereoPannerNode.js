"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioNode = _interopRequireDefault(require("./AudioNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class StereoPannerNode extends _AudioNode.default {
  constructor(context, pan) {
    super(context, pan);
    this.pan = new _AudioParam.default(pan.pan, context);
  }
}
exports.default = StereoPannerNode;
//# sourceMappingURL=StereoPannerNode.js.map