"use strict";

import AudioEventSubscription from "./AudioEventSubscription.js";
export default class AudioEventEmitter {
  constructor(audioEventEmitter) {
    this.audioEventEmitter = audioEventEmitter;
  }
  addAudioEventListener(name, callback) {
    const subscriptionId = this.audioEventEmitter.addAudioEventListener(name, callback);
    return new AudioEventSubscription(subscriptionId, name, this);
  }
  removeAudioEventListener(name, subscriptionId) {
    this.audioEventEmitter.removeAudioEventListener(name, subscriptionId);
  }
}
//# sourceMappingURL=AudioEventEmitter.js.map