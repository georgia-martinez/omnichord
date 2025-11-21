import { IConstantSourceNode } from '../interfaces';
import AudioParam from './AudioParam';
import AudioScheduledSourceNode from './AudioScheduledSourceNode';
import BaseAudioContext from './BaseAudioContext';
export default class ConstantSourceNode extends AudioScheduledSourceNode {
    readonly offset: AudioParam;
    constructor(context: BaseAudioContext, node: IConstantSourceNode);
}
//# sourceMappingURL=ConstantSourceNode.d.ts.map