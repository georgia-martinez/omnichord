import { OscillatorType } from '../types';
import AudioScheduledSourceNode from './AudioScheduledSourceNode';
import BaseAudioContext from './BaseAudioContext';
import AudioParam from './AudioParam';
import PeriodicWave from './PeriodicWave';
export default class OscillatorNode extends AudioScheduledSourceNode {
    readonly frequency: AudioParam;
    readonly detune: AudioParam;
    constructor(context: BaseAudioContext, node: globalThis.OscillatorNode);
    get type(): OscillatorType;
    set type(value: OscillatorType);
    setPeriodicWave(wave: PeriodicWave): void;
}
//# sourceMappingURL=OscillatorNode.d.ts.map