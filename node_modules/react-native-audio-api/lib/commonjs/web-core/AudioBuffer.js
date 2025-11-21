"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _errors = require("../errors");
class AudioBuffer {
  /** @internal */

  constructor(buffer) {
    this.buffer = buffer;
    this.length = buffer.length;
    this.duration = buffer.duration;
    this.sampleRate = buffer.sampleRate;
    this.numberOfChannels = buffer.numberOfChannels;
  }
  getChannelData(channel) {
    if (channel < 0 || channel >= this.numberOfChannels) {
      throw new _errors.IndexSizeError(`The channel number provided (${channel}) is outside the range [0, ${this.numberOfChannels - 1}]`);
    }
    return this.buffer.getChannelData(channel);
  }
  copyFromChannel(destination, channelNumber, startInChannel = 0) {
    if (channelNumber < 0 || channelNumber >= this.numberOfChannels) {
      throw new _errors.IndexSizeError(`The channel number provided (${channelNumber}) is outside the range [0, ${this.numberOfChannels - 1}]`);
    }
    if (startInChannel < 0 || startInChannel >= this.length) {
      throw new _errors.IndexSizeError(`The startInChannel number provided (${startInChannel}) is outside the range [0, ${this.length - 1}]`);
    }
    this.buffer.copyFromChannel(destination, channelNumber, startInChannel);
  }
  copyToChannel(source, channelNumber, startInChannel = 0) {
    if (channelNumber < 0 || channelNumber >= this.numberOfChannels) {
      throw new _errors.IndexSizeError(`The channel number provided (${channelNumber}) is outside the range [0, ${this.numberOfChannels - 1}]`);
    }
    if (startInChannel < 0 || startInChannel >= this.length) {
      throw new _errors.IndexSizeError(`The startInChannel number provided (${startInChannel}) is outside the range [0, ${this.length - 1}]`);
    }
    this.buffer.copyToChannel(source, channelNumber, startInChannel);
  }
}
exports.default = AudioBuffer;
//# sourceMappingURL=AudioBuffer.js.map