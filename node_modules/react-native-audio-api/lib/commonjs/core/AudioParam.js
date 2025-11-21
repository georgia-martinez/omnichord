"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _errors = require("../errors");
class AudioParam {
  constructor(audioParam, context) {
    this.audioParam = audioParam;
    this.value = audioParam.value;
    this.defaultValue = audioParam.defaultValue;
    this.minValue = audioParam.minValue;
    this.maxValue = audioParam.maxValue;
    this.context = context;
  }
  get value() {
    return this.audioParam.value;
  }
  set value(value) {
    this.audioParam.value = value;
  }
  setValueAtTime(value, startTime) {
    if (startTime < 0) {
      throw new _errors.RangeError(`startTime must be a finite non-negative number: ${startTime}`);
    }
    this.audioParam.setValueAtTime(value, startTime);
    return this;
  }
  linearRampToValueAtTime(value, endTime) {
    if (endTime < 0) {
      throw new _errors.RangeError(`endTime must be a finite non-negative number: ${endTime}`);
    }
    this.audioParam.linearRampToValueAtTime(value, endTime);
    return this;
  }
  exponentialRampToValueAtTime(value, endTime) {
    if (endTime < 0) {
      throw new _errors.RangeError(`endTime must be a finite non-negative number: ${endTime}`);
    }
    this.audioParam.exponentialRampToValueAtTime(value, endTime);
    return this;
  }
  setTargetAtTime(target, startTime, timeConstant) {
    if (startTime < 0) {
      throw new _errors.RangeError(`startTime must be a finite non-negative number: ${startTime}`);
    }
    if (timeConstant < 0) {
      throw new _errors.RangeError(`timeConstant must be a finite non-negative number: ${startTime}`);
    }
    this.audioParam.setTargetAtTime(target, startTime, timeConstant);
    return this;
  }
  setValueCurveAtTime(values, startTime, duration) {
    if (startTime < 0) {
      throw new _errors.RangeError(`startTime must be a finite non-negative number: ${startTime}`);
    }
    if (duration < 0) {
      throw new _errors.RangeError(`duration must be a finite non-negative number: ${startTime}`);
    }
    if (values.length < 2) {
      throw new _errors.InvalidStateError(`values must contain at least two values`);
    }
    this.audioParam.setValueCurveAtTime(values, startTime, duration);
    return this;
  }
  cancelScheduledValues(cancelTime) {
    if (cancelTime < 0) {
      throw new _errors.RangeError(`cancelTime must be a finite non-negative number: ${cancelTime}`);
    }
    this.audioParam.cancelScheduledValues(cancelTime);
    return this;
  }
  cancelAndHoldAtTime(cancelTime) {
    if (cancelTime < 0) {
      throw new _errors.RangeError(`cancelTime must be a finite non-negative number: ${cancelTime}`);
    }
    this.audioParam.cancelAndHoldAtTime(cancelTime);
    return this;
  }
}
exports.default = AudioParam;
//# sourceMappingURL=AudioParam.js.map