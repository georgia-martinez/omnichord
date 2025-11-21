"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _errors = require("../errors");
var _AudioParam = _interopRequireDefault(require("./AudioParam"));
var _AudioBuffer = _interopRequireDefault(require("./AudioBuffer"));
var _AudioScheduledSourceNode = _interopRequireDefault(require("./AudioScheduledSourceNode"));
var _utils = require("../utils");
var _LoadCustomWasm = require("./custom/LoadCustomWasm");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class IStretcherNodeAudioParam {
  constructor(value, setter, automationRate, minValue, maxValue, defaultValue) {
    this._value = value;
    this.automationRate = automationRate;
    this.minValue = minValue;
    this.maxValue = maxValue;
    this.defaultValue = defaultValue;
    this._setter = setter;
  }
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;
    this._setter(value);
  }
  cancelAndHoldAtTime(cancelTime) {
    this._setter(this.defaultValue, cancelTime);
    return this;
  }
  cancelScheduledValues(cancelTime) {
    this._setter(this.defaultValue, cancelTime);
    return this;
  }
  exponentialRampToValueAtTime(_value, _endTime) {
    console.warn('exponentialRampToValueAtTime is not implemented for pitch correction mode');
    return this;
  }
  linearRampToValueAtTime(_value, _endTime) {
    console.warn('linearRampToValueAtTime is not implemented for pitch correction mode');
    return this;
  }
  setTargetAtTime(_target, _startTime, _timeConstant) {
    console.warn('setTargetAtTime is not implemented for pitch correction mode');
    return this;
  }
  setValueAtTime(value, startTime) {
    this._setter(value, startTime);
    return this;
  }
  setValueCurveAtTime(_values, _startTime, _duration) {
    console.warn('setValueCurveAtTime is not implemented for pitch correction mode');
    return this;
  }
}
class AudioBufferSourceNode extends _AudioScheduledSourceNode.default {
  _loop = false;
  _loopStart = -1;
  _loopEnd = -1;
  _buffer = null;
  constructor(context, node, pitchCorrection) {
    super(context, node);
    this._pitchCorrection = pitchCorrection;
    if (pitchCorrection) {
      this.detune = new _AudioParam.default(new IStretcherNodeAudioParam(0, this.setDetune.bind(this), 'a-rate', -1200, 1200, 0), context);
      this.playbackRate = new _AudioParam.default(new IStretcherNodeAudioParam(1, this.setPlaybackRate.bind(this), 'a-rate', 0, Infinity, 1), context);
    } else {
      this.detune = new _AudioParam.default(node.detune, context);
      this.playbackRate = new _AudioParam.default(node.playbackRate, context);
    }
  }
  isStretcherNode() {
    return this._pitchCorrection;
  }
  asStretcher() {
    return this.node;
  }
  asBufferSource() {
    return this.node;
  }
  setDetune(value, when = 0) {
    if (!this.isStretcherNode() || !this.hasBeenStarted) {
      return;
    }
    this.asStretcher().schedule({
      semitones: Math.floor((0, _utils.clamp)(value / 100, -12, 12)),
      output: when
    });
  }
  setPlaybackRate(value, when = 0) {
    if (!this.isStretcherNode() || !this.hasBeenStarted) {
      return;
    }
    this.asStretcher().schedule({
      rate: value,
      output: when
    });
  }
  get buffer() {
    if (this.isStretcherNode()) {
      return this._buffer;
    }
    const buffer = this.asBufferSource().buffer;
    if (!buffer) {
      return null;
    }
    return new _AudioBuffer.default(buffer);
  }
  set buffer(buffer) {
    if (this.isStretcherNode()) {
      this._buffer = buffer;
      const stretcher = this.asStretcher();
      stretcher.dropBuffers();
      if (!buffer) {
        return;
      }
      const channelArrays = [];
      for (let i = 0; i < buffer.numberOfChannels; i++) {
        channelArrays.push(buffer.getChannelData(i));
      }
      stretcher.addBuffers(channelArrays);
      return;
    }
    if (!buffer) {
      this.asBufferSource().buffer = null;
      return;
    }
    this.asBufferSource().buffer = buffer.buffer;
  }
  get loop() {
    if (this.isStretcherNode()) {
      return this._loop;
    }
    return this.asBufferSource().loop;
  }
  set loop(value) {
    if (this.isStretcherNode()) {
      this._loop = value;
      return;
    }
    this.asBufferSource().loop = value;
  }
  get loopStart() {
    if (this.isStretcherNode()) {
      return this._loopStart;
    }
    return this.asBufferSource().loopStart;
  }
  set loopStart(value) {
    if (this.isStretcherNode()) {
      this._loopStart = value;
      return;
    }
    this.asBufferSource().loopStart = value;
  }
  get loopEnd() {
    if (this.isStretcherNode()) {
      return this._loopEnd;
    }
    return this.asBufferSource().loopEnd;
  }
  set loopEnd(value) {
    if (this.isStretcherNode()) {
      this._loopEnd = value;
      return;
    }
    this.asBufferSource().loopEnd = value;
  }
  start(when, offset, duration) {
    if (when && when < 0) {
      throw new _errors.RangeError(`when must be a finite non-negative number: ${when}`);
    }
    if (offset && offset < 0) {
      throw new _errors.RangeError(`offset must be a finite non-negative number: ${offset}`);
    }
    if (duration && duration < 0) {
      throw new _errors.RangeError(`duration must be a finite non-negative number: ${duration}`);
    }
    if (this.hasBeenStarted) {
      throw new _errors.InvalidStateError('Cannot call start more than once');
    }
    this.hasBeenStarted = true;
    if (!this.isStretcherNode()) {
      this.asBufferSource().start(when, offset, duration);
      return;
    }
    const startAt = !when || when < this.context.currentTime ? this.context.currentTime : when;
    if (this.loop && this._loopStart !== -1 && this._loopEnd !== -1) {
      this.asStretcher().schedule({
        loopStart: this._loopStart,
        loopEnd: this._loopEnd
      });
    }
    this.asStretcher().start(startAt, offset, duration, this.playbackRate.value, Math.floor((0, _utils.clamp)(this.detune.value / 100, -12, 12)));
  }
  stop(when = 0) {
    if (when < 0) {
      throw new _errors.RangeError(`when must be a finite non-negative number: ${when}`);
    }
    if (!this.hasBeenStarted) {
      throw new _errors.InvalidStateError('Cannot call stop without calling start first');
    }
    if (!this.isStretcherNode()) {
      this.asBufferSource().stop(when);
      return;
    }
    this.asStretcher().stop(when);
  }
}
exports.default = AudioBufferSourceNode;
//# sourceMappingURL=AudioBufferSourceNode.js.map