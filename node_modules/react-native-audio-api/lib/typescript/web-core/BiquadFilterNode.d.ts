import AudioParam from './AudioParam';
import AudioNode from './AudioNode';
import BaseAudioContext from './BaseAudioContext';
import { BiquadFilterType } from '../types';
export default class BiquadFilterNode extends AudioNode {
    readonly frequency: AudioParam;
    readonly detune: AudioParam;
    readonly Q: AudioParam;
    readonly gain: AudioParam;
    constructor(context: BaseAudioContext, biquadFilter: globalThis.BiquadFilterNode);
    get type(): BiquadFilterType;
    set type(value: BiquadFilterType);
    getFrequencyResponse(frequencyArray: Float32Array, magResponseOutput: Float32Array, phaseResponseOutput: Float32Array): void;
}
//# sourceMappingURL=BiquadFilterNode.d.ts.map