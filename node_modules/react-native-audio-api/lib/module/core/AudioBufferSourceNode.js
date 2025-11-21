"use strict";

import AudioBufferBaseSourceNode from "./AudioBufferBaseSourceNode.js";
import AudioBuffer from "./AudioBuffer.js";
import { InvalidStateError, RangeError } from "../errors/index.js";
export default class AudioBufferSourceNode extends AudioBufferBaseSourceNode {
  get buffer() {
    const buffer = this.node.buffer;
    if (!buffer) {
      return null;
    }
    return new AudioBuffer(buffer);
  }
  set buffer(buffer) {
    if (!buffer) {
      this.node.setBuffer(null);
      return;
    }
    this.node.setBuffer(buffer.buffer);
  }
  get loopSkip() {
    return this.node.loopSkip;
  }
  set loopSkip(value) {
    this.node.loopSkip = value;
  }
  get loop() {
    return this.node.loop;
  }
  set loop(value) {
    this.node.loop = value;
  }
  get loopStart() {
    return this.node.loopStart;
  }
  set loopStart(value) {
    this.node.loopStart = value;
  }
  get loopEnd() {
    return this.node.loopEnd;
  }
  set loopEnd(value) {
    this.node.loopEnd = value;
  }
  start(when = 0, offset = 0, duration) {
    if (when < 0) {
      throw new RangeError(`when must be a finite non-negative number: ${when}`);
    }
    if (offset < 0) {
      throw new RangeError(`offset must be a finite non-negative number: ${offset}`);
    }
    if (duration && duration < 0) {
      throw new RangeError(`duration must be a finite non-negative number: ${duration}`);
    }
    if (this.hasBeenStarted) {
      throw new InvalidStateError('Cannot call start more than once');
    }
    this.hasBeenStarted = true;
    this.node.start(when, offset, duration);
  }
  get onEnded() {
    return super.onEnded;
  }
  set onEnded(callback) {
    super.onEnded = callback;
  }
  get onLoopEnded() {
    return this.onLoopEndedCallback;
  }
  set onLoopEnded(callback) {
    if (!callback) {
      this.node.onLoopEnded = '0';
      this.onLoopEndedSubscription?.remove();
      this.onLoopEndedSubscription = undefined;
      this.onLoopEndedCallback = undefined;
      return;
    }
    this.onLoopEndedCallback = callback;
    this.onLoopEndedSubscription = this.audioEventEmitter.addAudioEventListener('loopEnded', callback);
    this.node.onLoopEnded = this.onLoopEndedSubscription.subscriptionId;
  }
}
//# sourceMappingURL=AudioBufferSourceNode.js.map