import { AudioEventName, AudioEventCallback } from './types';
import AudioEventSubscription from './AudioEventSubscription';
import { IAudioEventEmitter } from '../interfaces';
export default class AudioEventEmitter {
    private readonly audioEventEmitter;
    constructor(audioEventEmitter: IAudioEventEmitter);
    addAudioEventListener<Name extends AudioEventName>(name: Name, callback: AudioEventCallback<Name>): AudioEventSubscription;
    removeAudioEventListener<Name extends AudioEventName>(name: Name, subscriptionId: string): void;
}
//# sourceMappingURL=AudioEventEmitter.d.ts.map