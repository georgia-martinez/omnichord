import { AudioEventName } from './types';
import { AudioEventEmitter } from './';
export default class AudioEventSubscription {
    private readonly audioEventEmitter;
    private readonly eventName;
    /** @internal */
    readonly subscriptionId: string;
    constructor(subscriptionId: string, eventName: AudioEventName, audioEventEmitter: AudioEventEmitter);
    remove(): void;
}
//# sourceMappingURL=AudioEventSubscription.d.ts.map