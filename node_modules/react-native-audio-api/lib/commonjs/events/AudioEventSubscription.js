"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
class AudioEventSubscription {
  /** @internal */

  constructor(subscriptionId, eventName, audioEventEmitter) {
    this.subscriptionId = subscriptionId;
    this.eventName = eventName;
    this.audioEventEmitter = audioEventEmitter;
  }
  remove() {
    this.audioEventEmitter.removeAudioEventListener(this.eventName, this.subscriptionId);
  }
}
exports.default = AudioEventSubscription;
//# sourceMappingURL=AudioEventSubscription.js.map