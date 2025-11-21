import { WindowType } from '../types';
import AudioNode from './AudioNode';
export default class AnalyserNode extends AudioNode {
    private static allowedFFTSize;
    get fftSize(): number;
    set fftSize(value: number);
    get minDecibels(): number;
    set minDecibels(value: number);
    get maxDecibels(): number;
    set maxDecibels(value: number);
    get smoothingTimeConstant(): number;
    set smoothingTimeConstant(value: number);
    get window(): WindowType;
    set window(value: WindowType);
    get frequencyBinCount(): number;
    getFloatFrequencyData(array: Float32Array): void;
    getByteFrequencyData(array: Uint8Array): void;
    getFloatTimeDomainData(array: Float32Array): void;
    getByteTimeDomainData(array: Uint8Array): void;
}
//# sourceMappingURL=AnalyserNode.d.ts.map