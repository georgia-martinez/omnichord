import BaseAudioContext from './BaseAudioContext';
import AudioNode from './AudioNode';
import AudioBuffer from './AudioBuffer';
export default class ConvolverNode extends AudioNode {
    constructor(context: BaseAudioContext, node: globalThis.ConvolverNode, buffer?: AudioBuffer | null, disableNormalization?: boolean);
    get buffer(): AudioBuffer | null;
    set buffer(buffer: AudioBuffer | null);
    get normalize(): boolean;
    set normalize(value: boolean);
}
//# sourceMappingURL=ConvolverNode.d.ts.map