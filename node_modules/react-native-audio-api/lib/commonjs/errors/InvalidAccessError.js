"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class InvalidAccessError extends Error {
  constructor(message) {
    super(message);
    this.name = 'InvalidAccessError';
  }
}
var _default = exports.default = InvalidAccessError;
//# sourceMappingURL=InvalidAccessError.js.map