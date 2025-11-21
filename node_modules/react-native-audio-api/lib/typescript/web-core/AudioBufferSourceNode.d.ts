import AudioParam from './AudioParam';
import AudioBuffer from './AudioBuffer';
import BaseAudioContext from './BaseAudioContext';
import AudioScheduledSourceNode from './AudioScheduledSourceNode';
import { globalTag } from './custom/LoadCustomWasm';
interface ScheduleOptions {
    rate?: number;
    active?: boolean;
    output?: number;
    input?: number;
    semitones?: number;
    loopStart?: number;
    loopEnd?: number;
}
interface IStretcherNode extends globalThis.AudioNode {
    channelCount: number;
    channelCountMode: globalThis.ChannelCountMode;
    channelInterpretation: globalThis.ChannelInterpretation;
    context: globalThis.BaseAudioContext;
    numberOfInputs: number;
    numberOfOutputs: number;
    onEnded: ((this: globalThis.AudioScheduledSourceNode, ev: Event) => unknown) | null;
    addEventListener: (type: string, listener: EventListenerOrEventListenerObject | null, options?: boolean | AddEventListenerOptions) => void;
    dispatchEvent: (event: Event) => boolean;
    removeEventListener: (type: string, callback: EventListenerOrEventListenerObject | null, options?: boolean | EventListenerOptions) => void;
    addBuffers(channels: Float32Array[]): void;
    dropBuffers(): void;
    schedule(options: ScheduleOptions): void;
    start(when?: number, offset?: number, duration?: number, rate?: number, semitones?: number): void;
    stop(when?: number): void;
    connect(destination: globalThis.AudioNode, output?: number, input?: number): globalThis.AudioNode;
    connect(destination: globalThis.AudioParam, output?: number): void;
    disconnect(): void;
    disconnect(output: number): void;
    disconnect(destination: globalThis.AudioNode): globalThis.AudioNode;
    disconnect(destination: globalThis.AudioNode, output: number): void;
    disconnect(destination: globalThis.AudioNode, output: number, input: number): void;
    disconnect(destination: globalThis.AudioParam): void;
    disconnect(destination: globalThis.AudioParam, output: number): void;
}
type DefaultSource = globalThis.AudioBufferSourceNode;
type IAudioBufferSourceNode = DefaultSource | IStretcherNode;
declare global {
    interface Window {
        [globalTag]: (audioContext: globalThis.BaseAudioContext) => Promise<IStretcherNode>;
    }
}
export default class AudioBufferSourceNode<T extends IAudioBufferSourceNode = DefaultSource> extends AudioScheduledSourceNode {
    private _pitchCorrection;
    readonly playbackRate: AudioParam;
    readonly detune: AudioParam;
    private _loop;
    private _loopStart;
    private _loopEnd;
    private _buffer;
    constructor(context: BaseAudioContext, node: T, pitchCorrection: boolean);
    private isStretcherNode;
    private asStretcher;
    private asBufferSource;
    setDetune(value: number, when?: number): void;
    setPlaybackRate(value: number, when?: number): void;
    get buffer(): AudioBuffer | null;
    set buffer(buffer: AudioBuffer | null);
    get loop(): boolean;
    set loop(value: boolean);
    get loopStart(): number;
    set loopStart(value: number);
    get loopEnd(): number;
    set loopEnd(value: number);
    start(when?: number, offset?: number, duration?: number): void;
    stop(when?: number): void;
}
export {};
//# sourceMappingURL=AudioBufferSourceNode.d.ts.map