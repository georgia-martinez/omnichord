import BaseAudioContext from './BaseAudioContext';
import AudioNode from './AudioNode';
import AudioParam from './AudioParam';
export default class StereoPannerNode extends AudioNode {
    readonly pan: AudioParam;
    constructor(context: BaseAudioContext, pan: globalThis.StereoPannerNode);
}
//# sourceMappingURL=StereoPannerNode.d.ts.map