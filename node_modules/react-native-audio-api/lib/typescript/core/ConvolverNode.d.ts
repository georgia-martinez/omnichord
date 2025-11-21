import { IConvolverNode } from '../interfaces';
import BaseAudioContext from './BaseAudioContext';
import AudioNode from './AudioNode';
import AudioBuffer from './AudioBuffer';
export default class ConvolverNode extends AudioNode {
    constructor(context: BaseAudioContext, node: IConvolverNode);
    get buffer(): AudioBuffer | null;
    set buffer(buffer: AudioBuffer | null);
    get normalize(): boolean;
    set normalize(value: boolean);
}
//# sourceMappingURL=ConvolverNode.d.ts.map