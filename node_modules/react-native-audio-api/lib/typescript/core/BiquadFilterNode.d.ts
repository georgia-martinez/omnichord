import { IBiquadFilterNode } from '../interfaces';
import AudioNode from './AudioNode';
import AudioParam from './AudioParam';
import BaseAudioContext from './BaseAudioContext';
import { BiquadFilterType } from '../types';
export default class BiquadFilterNode extends AudioNode {
    readonly frequency: AudioParam;
    readonly detune: AudioParam;
    readonly Q: AudioParam;
    readonly gain: AudioParam;
    constructor(context: BaseAudioContext, biquadFilter: IBiquadFilterNode);
    get type(): BiquadFilterType;
    set type(value: BiquadFilterType);
    getFrequencyResponse(frequencyArray: Float32Array, magResponseOutput: Float32Array, phaseResponseOutput: Float32Array): void;
}
//# sourceMappingURL=BiquadFilterNode.d.ts.map