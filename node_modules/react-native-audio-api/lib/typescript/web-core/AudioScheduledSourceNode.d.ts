import AudioNode from './AudioNode';
import { EventEmptyType } from '../events/types';
export default class AudioScheduledSourceNode extends AudioNode {
    protected hasBeenStarted: boolean;
    start(when?: number): void;
    stop(when?: number): void;
    set onEnded(callback: (event: EventEmptyType) => void | null);
}
//# sourceMappingURL=AudioScheduledSourceNode.d.ts.map