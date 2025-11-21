"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class InvalidStateError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidStateError';
  }
}
var _default = exports.default = InvalidStateError;
//# sourceMappingURL=InvalidStateError.js.map