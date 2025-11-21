import { IStereoPannerNode } from '../interfaces';
import AudioNode from './AudioNode';
import AudioParam from './AudioParam';
import BaseAudioContext from './BaseAudioContext';
export default class StereoPannerNode extends AudioNode {
    readonly pan: AudioParam;
    constructor(context: BaseAudioContext, pan: IStereoPannerNode);
}
//# sourceMappingURL=StereoPannerNode.d.ts.map