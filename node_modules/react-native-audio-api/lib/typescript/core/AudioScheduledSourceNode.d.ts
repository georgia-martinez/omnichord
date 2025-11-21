import AudioNode from './AudioNode';
import { OnEndedEventType } from '../events/types';
import { AudioEventEmitter } from '../events';
export default class AudioScheduledSourceNode extends AudioNode {
    protected hasBeenStarted: boolean;
    protected readonly audioEventEmitter: AudioEventEmitter;
    private onEndedSubscription?;
    private onEndedCallback?;
    start(when?: number): void;
    stop(when?: number): void;
    get onEnded(): ((event: OnEndedEventType) => void) | undefined;
    set onEnded(callback: ((event: OnEndedEventType) => void) | null);
}
//# sourceMappingURL=AudioScheduledSourceNode.d.ts.map