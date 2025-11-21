"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _errors = require("../errors");
var _AudioScheduledSourceNode = _interopRequireDefault(require("./AudioScheduledSourceNode"));
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class OscillatorNode extends _AudioScheduledSourceNode.default {
  constructor(context, node) {
    super(context, node);
    this.detune = new _AudioParam.default(node.detune, context);
    this.frequency = new _AudioParam.default(node.frequency, context);
  }
  get type() {
    return this.node.type;
  }
  set type(value) {
    if (value === 'custom') {
      throw new _errors.InvalidStateError("'type' cannot be set directly to 'custom'.  Use setPeriodicWave() to create a custom Oscillator type.");
    }
    this.node.type = value;
  }
  setPeriodicWave(wave) {
    this.node.setPeriodicWave(wave.periodicWave);
  }
}
exports.default = OscillatorNode;
//# sourceMappingURL=OscillatorNode.js.map