"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _errors = require("../errors");
class AudioParam {
  constructor(param, context) {
    this.param = param;
    this.defaultValue = param.defaultValue;
    this.minValue = param.minValue;
    this.maxValue = param.maxValue;
    this.context = context;
  }
  get value() {
    return this.param.value;
  }
  set value(value) {
    this.param.value = value;
  }
  setValueAtTime(value, startTime) {
    if (startTime < 0) {
      throw new _errors.RangeError(`startTime must be a finite non-negative number: ${startTime}`);
    }
    this.param.setValueAtTime(value, startTime);
    return this;
  }
  linearRampToValueAtTime(value, endTime) {
    if (endTime < 0) {
      throw new _errors.RangeError(`endTime must be a finite non-negative number: ${endTime}`);
    }
    this.param.linearRampToValueAtTime(value, endTime);
    return this;
  }
  exponentialRampToValueAtTime(value, endTime) {
    if (endTime < 0) {
      throw new _errors.RangeError(`endTime must be a finite non-negative number: ${endTime}`);
    }
    this.param.exponentialRampToValueAtTime(value, endTime);
    return this;
  }
  setTargetAtTime(target, startTime, timeConstant) {
    if (startTime < 0) {
      throw new _errors.RangeError(`startTime must be a finite non-negative number: ${startTime}`);
    }
    if (timeConstant < 0) {
      throw new _errors.RangeError(`timeConstant must be a finite non-negative number: ${startTime}`);
    }
    this.param.setTargetAtTime(target, startTime, timeConstant);
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
    this.param.setValueCurveAtTime(values, startTime, duration);
    return this;
  }
  cancelScheduledValues(cancelTime) {
    if (cancelTime < 0) {
      throw new _errors.RangeError(`cancelTime must be a finite non-negative number: ${cancelTime}`);
    }
    this.param.cancelScheduledValues(cancelTime);
    return this;
  }
  cancelAndHoldAtTime(cancelTime) {
    if (cancelTime < 0) {
      throw new _errors.RangeError(`cancelTime must be a finite non-negative number: ${cancelTime}`);
    }
    this.param.cancelAndHoldAtTime(cancelTime);
    return this;
  }
}
exports.default = AudioParam;
//# sourceMappingURL=AudioParam.js.map