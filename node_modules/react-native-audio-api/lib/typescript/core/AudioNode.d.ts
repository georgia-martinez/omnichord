import { IAudioNode } from '../interfaces';
import AudioParam from './AudioParam';
import { ChannelCountMode, ChannelInterpretation } from '../types';
import BaseAudioContext from './BaseAudioContext';
export default class AudioNode {
    readonly context: BaseAudioContext;
    readonly numberOfInputs: number;
    readonly numberOfOutputs: number;
    readonly channelCount: number;
    readonly channelCountMode: ChannelCountMode;
    readonly channelInterpretation: ChannelInterpretation;
    protected readonly node: IAudioNode;
    constructor(context: BaseAudioContext, node: IAudioNode);
    connect(destination: AudioNode | AudioParam): AudioNode | AudioParam;
    disconnect(destination?: AudioNode | AudioParam): void;
}
//# sourceMappingURL=AudioNode.d.ts.map