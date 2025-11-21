"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioBufferBaseSourceNode = _interopRequireDefault(require("./AudioBufferBaseSourceNode"));
var _AudioBuffer = _interopRequireDefault(require("./AudioBuffer"));
var _errors = require("../errors");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class AudioBufferSourceNode extends _AudioBufferBaseSourceNode.default {
  get buffer() {
    const buffer = this.node.buffer;
    if (!buffer) {
      return null;
    }
    return new _AudioBuffer.default(buffer);
  }
  set buffer(buffer) {
    if (!buffer) {
      this.node.setBuffer(null);
      return;
    }
    this.node.setBuffer(buffer.buffer);
  }
  get loopSkip() {
    return this.node.loopSkip;
  }
  set loopSkip(value) {
    this.node.loopSkip = value;
  }
  get loop() {
    return this.node.loop;
  }
  set loop(value) {
    this.node.loop = value;
  }
  get loopStart() {
    return this.node.loopStart;
  }
  set loopStart(value) {
    this.node.loopStart = value;
  }
  get loopEnd() {
    return this.node.loopEnd;
  }
  set loopEnd(value) {
    this.node.loopEnd = value;
  }
  start(when = 0, offset = 0, duration) {
    if (when < 0) {
      throw new _errors.RangeError(`when must be a finite non-negative number: ${when}`);
    }
    if (offset < 0) {
      throw new _errors.RangeError(`offset must be a finite non-negative number: ${offset}`);
    }
    if (duration && duration < 0) {
      throw new _errors.RangeError(`duration must be a finite non-negative number: ${duration}`);
    }
    if (this.hasBeenStarted) {
      throw new _errors.InvalidStateError('Cannot call start more than once');
    }
    this.hasBeenStarted = true;
    this.node.start(when, offset, duration);
  }
  get onEnded() {
    return super.onEnded;
  }
  set onEnded(callback) {
    super.onEnded = callback;
  }
  get onLoopEnded() {
    return this.onLoopEndedCallback;
  }
  set onLoopEnded(callback) {
    if (!callback) {
      this.node.onLoopEnded = '0';
      this.onLoopEndedSubscription?.remove();
      this.onLoopEndedSubscription = undefined;
      this.onLoopEndedCallback = undefined;
      return;
    }
    this.onLoopEndedCallback = callback;
    this.onLoopEndedSubscription = this.audioEventEmitter.addAudioEventListener('loopEnded', callback);
    this.node.onLoopEnded = this.onLoopEndedSubscription.subscriptionId;
  }
}
exports.default = AudioBufferSourceNode;
//# sourceMappingURL=AudioBufferSourceNode.js.map