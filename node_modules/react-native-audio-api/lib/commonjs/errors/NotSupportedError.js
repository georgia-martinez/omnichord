"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class NotSupportedError extends Error {
  constructor(message) {
    super(message);
    this.name = 'NotSupportedError';
  }
}
var _default = exports.default = NotSupportedError;
//# sourceMappingURL=NotSupportedError.js.map