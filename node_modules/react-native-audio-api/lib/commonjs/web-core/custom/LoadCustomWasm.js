"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.globalWasmPromise = exports.globalTag = exports.default = void 0;
const globalTag = exports.globalTag = '__rnaaCstStretch';
const eventTitle = 'rnaaCstStretchLoaded';
let globalWasmPromise = exports.globalWasmPromise = null;
const LoadCustomWasm = async (pathPrefix = '') => {
  if (typeof window === 'undefined') {
    return null;
  }
  if (globalWasmPromise) {
    return globalWasmPromise;
  }
  exports.globalWasmPromise = globalWasmPromise = new Promise(resolve => {
    const loadScript = document.createElement('script');
    document.head.appendChild(loadScript);
    loadScript.type = 'module';
    loadScript.textContent = `
      import SignalsmithStretch from '${pathPrefix}/signalsmithStretch.mjs';
      window.${globalTag} = SignalsmithStretch;
      window.postMessage('${eventTitle}');
    `;
    function onScriptLoaded(event) {
      if (event.data !== eventTitle) {
        return;
      }
      resolve();
      window.removeEventListener('message', onScriptLoaded);
    }
    window.addEventListener('message', onScriptLoaded);
  });
};
var _default = exports.default = LoadCustomWasm;
//# sourceMappingURL=LoadCustomWasm.js.map