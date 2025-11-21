import AudioBufferBaseSourceNode from './AudioBufferBaseSourceNode';
import AudioBuffer from './AudioBuffer';
import { EventEmptyType } from '../events/types';
export default class AudioBufferSourceNode extends AudioBufferBaseSourceNode {
    private onLoopEndedSubscription?;
    private onLoopEndedCallback?;
    get buffer(): AudioBuffer | null;
    set buffer(buffer: AudioBuffer | null);
    get loopSkip(): boolean;
    set loopSkip(value: boolean);
    get loop(): boolean;
    set loop(value: boolean);
    get loopStart(): number;
    set loopStart(value: number);
    get loopEnd(): number;
    set loopEnd(value: number);
    start(when?: number, offset?: number, duration?: number): void;
    get onEnded(): ((event: EventEmptyType) => void) | undefined;
    set onEnded(callback: ((event: EventEmptyType) => void) | null);
    get onLoopEnded(): ((event: EventEmptyType) => void) | undefined;
    set onLoopEnded(callback: ((event: EventEmptyType) => void) | null);
}
//# sourceMappingURL=AudioBufferSourceNode.d.ts.map