import BaseAudioContext from './BaseAudioContext';
export default class AudioParam {
    readonly defaultValue: number;
    readonly minValue: number;
    readonly maxValue: number;
    readonly context: BaseAudioContext;
    readonly param: globalThis.AudioParam;
    constructor(param: globalThis.AudioParam, context: BaseAudioContext);
    get value(): number;
    set value(value: number);
    setValueAtTime(value: number, startTime: number): AudioParam;
    linearRampToValueAtTime(value: number, endTime: number): AudioParam;
    exponentialRampToValueAtTime(value: number, endTime: number): AudioParam;
    setTargetAtTime(target: number, startTime: number, timeConstant: number): AudioParam;
    setValueCurveAtTime(values: Float32Array, startTime: number, duration: number): AudioParam;
    cancelScheduledValues(cancelTime: number): AudioParam;
    cancelAndHoldAtTime(cancelTime: number): AudioParam;
}
//# sourceMappingURL=AudioParam.d.ts.map