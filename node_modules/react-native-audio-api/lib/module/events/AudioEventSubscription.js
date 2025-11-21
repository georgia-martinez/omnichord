"use strict";

export default class AudioEventSubscription {
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
//# sourceMappingURL=AudioEventSubscription.js.map