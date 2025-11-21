"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _AudioEventSubscription = _interopRequireDefault(require("./AudioEventSubscription"));
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
class AudioEventEmitter {
  constructor(audioEventEmitter) {
    this.audioEventEmitter = audioEventEmitter;
  }
  addAudioEventListener(name, callback) {
    const subscriptionId = this.audioEventEmitter.addAudioEventListener(name, callback);
    return new _AudioEventSubscription.default(subscriptionId, name, this);
  }
  removeAudioEventListener(name, subscriptionId) {
    this.audioEventEmitter.removeAudioEventListener(name, subscriptionId);
  }
}
exports.default = AudioEventEmitter;
//# sourceMappingURL=AudioEventEmitter.js.map