"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
var _AudioScheduledSourceNode = _interopRequireDefault(require("./AudioScheduledSourceNode"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class ConstantSourceNode extends _AudioScheduledSourceNode.default {
  constructor(context, node) {
    super(context, node);
    this.offset = new _AudioParam.default(node.offset, context);
  }
}
exports.default = ConstantSourceNode;
//# sourceMappingURL=ConstantSourceNode.js.map