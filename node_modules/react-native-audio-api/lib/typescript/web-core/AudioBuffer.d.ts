export default class AudioBuffer {
    readonly length: number;
    readonly duration: number;
    readonly sampleRate: number;
    readonly numberOfChannels: number;
    /** @internal */
    readonly buffer: globalThis.AudioBuffer;
    constructor(buffer: globalThis.AudioBuffer);
    getChannelData(channel: number): Float32Array;
    copyFromChannel(destination: Float32Array, channelNumber: number, startInChannel?: number): void;
    copyToChannel(source: Float32Array, channelNumber: number, startInChannel?: number): void;
}
//# sourceMappingURL=AudioBuffer.d.ts.map