import { IRecorderAdapterNode } from '../interfaces';
import AudioNode from './AudioNode';
export default class RecorderAdapterNode extends AudioNode {
    /** @internal */
    wasConnected: boolean;
    /** @internal */
    getNode(): IRecorderAdapterNode;
}
//# sourceMappingURL=RecorderAdapterNode.d.ts.map