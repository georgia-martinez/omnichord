"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
var _AudioNode = _interopRequireDefault(require("./AudioNode"));
var _errors = require("../errors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class BiquadFilterNode extends _AudioNode.default {
  constructor(context, biquadFilter) {
    super(context, biquadFilter);
    this.frequency = new _AudioParam.default(biquadFilter.frequency, context);
    this.detune = new _AudioParam.default(biquadFilter.detune, context);
    this.Q = new _AudioParam.default(biquadFilter.Q, context);
    this.gain = new _AudioParam.default(biquadFilter.gain, context);
  }
  get type() {
    return this.node.type;
  }
  set type(value) {
    this.node.type = value;
  }
  getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput) {
    if (frequencyArray.length !== magResponseOutput.length || frequencyArray.length !== phaseResponseOutput.length) {
      throw new _errors.InvalidAccessError(`The lengths of the arrays are not the same frequencyArray: ${frequencyArray.length}, magResponseOutput: ${magResponseOutput.length}, phaseResponseOutput: ${phaseResponseOutput.length}`);
    }
    this.node.getFrequencyResponse(frequencyArray, magResponseOutput, phaseResponseOutput);
  }
}
exports.default = BiquadFilterNode;
//# sourceMappingURL=BiquadFilterNode.js.map