import AudioNode from './AudioNode';
import { WindowType } from '../types';
import BaseAudioContext from './BaseAudioContext';
export default class AnalyserNode extends AudioNode {
    fftSize: number;
    readonly frequencyBinCount: number;
    minDecibels: number;
    maxDecibels: number;
    smoothingTimeConstant: number;
    constructor(context: BaseAudioContext, node: globalThis.AnalyserNode);
    get window(): WindowType;
    set window(value: WindowType);
    getByteFrequencyData(array: Uint8Array): void;
    getByteTimeDomainData(array: Uint8Array): void;
    getFloatFrequencyData(array: Float32Array): void;
    getFloatTimeDomainData(array: Float32Array): void;
}
//# sourceMappingURL=AnalyserNode.d.ts.map