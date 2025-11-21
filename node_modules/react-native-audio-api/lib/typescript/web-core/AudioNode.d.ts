import BaseAudioContext from './BaseAudioContext';
import { ChannelCountMode, ChannelInterpretation } from '../types';
import AudioParam from './AudioParam';
export default class AudioNode {
    readonly context: BaseAudioContext;
    readonly numberOfInputs: number;
    readonly numberOfOutputs: number;
    readonly channelCount: number;
    readonly channelCountMode: ChannelCountMode;
    readonly channelInterpretation: ChannelInterpretation;
    protected readonly node: globalThis.AudioNode;
    constructor(context: BaseAudioContext, node: globalThis.AudioNode);
    connect(destination: AudioNode | AudioParam): AudioNode | AudioParam;
    disconnect(destination?: AudioNode): void;
}
//# sourceMappingURL=AudioNode.d.ts.map