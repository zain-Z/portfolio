// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        globalObject
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"7qMjn":[function(require,module,exports,__globalThis) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "022c1b16b4b6dfad";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , disposedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && ![
        'localhost',
        '127.0.0.1',
        '0.0.0.0'
    ].includes(hostname) ? 'wss' : 'ws';
    var ws;
    if (HMR_USE_SSE) ws = new EventSource('/__parcel_hmr');
    else try {
        ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/');
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === 'undefined' ? typeof chrome === 'undefined' ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes('test.js');
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        disposedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === 'reload') fullReload();
        else if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== 'undefined' && typeof CustomEvent !== 'undefined') window.dispatchEvent(new CustomEvent('parcelhmraccept'));
                await hmrApplyUpdates(assets);
                hmrDisposeQueue();
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                let processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, '') : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + '</div>').join('')}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ''}
      </div>
    `;
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ('reload' in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute('href');
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', // $FlowFixMe
    href.split('?')[0] + '?' + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === 'js') {
        if (typeof document !== 'undefined') {
            let script = document.createElement('script');
            script.src = asset.url + '?t=' + Date.now();
            if (asset.outputFormat === 'esmodule') script.type = 'module';
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === 'function') {
            // Worker scripts
            if (asset.outputFormat === 'esmodule') return import(asset.url + '?t=' + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + '?t=' + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != 'undefined' && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        }
        // Always traverse to the parent bundle, even if we already replaced the asset in this bundle.
        // This is required in case modules are duplicated. We need to ensure all instances have the updated code.
        if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDisposeQueue() {
    // Dispose all old assets.
    for(let i = 0; i < assetsToDispose.length; i++){
        let id = assetsToDispose[i][1];
        if (!disposedAssets[id]) {
            hmrDispose(assetsToDispose[i][0], id);
            disposedAssets[id] = true;
        }
    }
    assetsToDispose = [];
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
        let assetsToAlsoAccept = [];
        cached.hot._acceptCallbacks.forEach(function(cb) {
            let additionalAssets = cb(function() {
                return getParents(module.bundle.root, id);
            });
            if (Array.isArray(additionalAssets) && additionalAssets.length) assetsToAlsoAccept.push(...additionalAssets);
        });
        if (assetsToAlsoAccept.length) {
            let handled = assetsToAlsoAccept.every(function(a) {
                return hmrAcceptCheck(a[0], a[1]);
            });
            if (!handled) return fullReload();
            hmrDisposeQueue();
        }
    }
}

},{}],"d8Dch":[function(require,module,exports,__globalThis) {
var $parcel$ReactRefreshHelpers$98a3 = require("@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js");
var prevRefreshReg = window.$RefreshReg$;
var prevRefreshSig = window.$RefreshSig$;
$parcel$ReactRefreshHelpers$98a3.prelude(module);

try {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _react = require("react");
var _reactDefault = parcelHelpers.interopDefault(_react);
var _scrollReveal = require("./scripts/scrollReveal");
var _scrollRevealDefault = parcelHelpers.interopDefault(_scrollReveal);
var _tiltAnimation = require("./scripts/tiltAnimation");
var _tiltAnimationDefault = parcelHelpers.interopDefault(_tiltAnimation);
var _scrollRevealConfig = require("./data/scrollRevealConfig");
var _react1 = require("@tsparticles/react");
var _reactDefault1 = parcelHelpers.interopDefault(_react1);
// import { loadAll } from "@/tsparticles/all"; // Uncomment if using `loadAll` with the "@tsparticles/all" package
// import { loadFull } from "tsparticles"; // Uncomment if using `loadFull` with the "tsparticles" package
var _slim = require("@tsparticles/slim"); // Slim version to reduce bundle size
var _indexCss = require("./index.css");
// Initialize scroll reveal and tilt effect
(0, _scrollRevealDefault.default)((0, _scrollRevealConfig.targetElements), (0, _scrollRevealConfig.defaultProps));
(0, _tiltAnimationDefault.default)();
const App = ()=>{
    const [init, setInit] = (0, _react.useState)(false);
    // Initialize particles engine
    (0, _react.useEffect)(()=>{
        (0, _react1.initParticlesEngine)(async (engine)=>{
            // Choose only the necessary engine to reduce bundle size
            await (0, _slim.loadSlim)(engine); // Slim version for optimized performance
        }).then(()=>{
            setInit(true);
        });
    }, []);
    const particlesLoaded = (container)=>{
        console.log(container);
    };
    return /*#__PURE__*/ (0, _reactDefault.default).createElement("div", {
        __source: {
            fileName: "src/index.jsx",
            lineNumber: 34,
            columnNumber: 5
        },
        __self: undefined
    }, init && /*#__PURE__*/ (0, _reactDefault.default).createElement((0, _reactDefault1.default), {
        className: "particles",
        particlesLoaded: particlesLoaded,
        options: {
            background: {
                color: {
                    value: "rgba(13, 71, 161, 0.5)"
                }
            },
            fpsLimit: 120,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push"
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse"
                    },
                    resize: true
                },
                modes: {
                    push: {
                        quantity: 4
                    },
                    repulse: {
                        distance: 200,
                        duration: 0.4
                    }
                }
            },
            particles: {
                color: {
                    value: "#ffffff"
                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.5,
                    width: 1
                },
                move: {
                    direction: "none",
                    enable: true,
                    outModes: {
                        default: "bounce"
                    },
                    random: false,
                    speed: 6,
                    straight: false
                },
                number: {
                    density: {
                        enable: true,
                        area: 800
                    },
                    value: 80
                },
                opacity: {
                    value: 0.5
                },
                shape: {
                    type: "circle"
                },
                size: {
                    value: {
                        min: 1,
                        max: 5
                    }
                }
            },
            detectRetina: true
        },
        __source: {
            fileName: "src/index.jsx",
            lineNumber: 36,
            columnNumber: 9
        },
        __self: undefined
    }));
};
exports.default = App;

  $parcel$ReactRefreshHelpers$98a3.postlude(module);
} finally {
  window.$RefreshReg$ = prevRefreshReg;
  window.$RefreshSig$ = prevRefreshSig;
}
},{"react":"21dqq","./scripts/scrollReveal":"54rka","./scripts/tiltAnimation":"72kAb","./data/scrollRevealConfig":"5aORV","@tsparticles/react":"5fZYg","@tsparticles/slim":"0jTcN","./index.css":"irmnC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","@parcel/transformer-react-refresh-wrap/lib/helpers/helpers.js":"km3Ru"}],"21dqq":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("a569817e6ea559f6");

},{"a569817e6ea559f6":"6YvXz"}],"6YvXz":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var process = require("9ffea7b9cafb49c3");
"use strict";
(function() {
    function defineDeprecationWarning(methodName, info) {
        Object.defineProperty(Component.prototype, methodName, {
            get: function() {
                console.warn("%s(...) is deprecated in plain JavaScript React classes. %s", info[0], info[1]);
            }
        });
    }
    function getIteratorFn(maybeIterable) {
        if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
        maybeIterable = MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL] || maybeIterable["@@iterator"];
        return "function" === typeof maybeIterable ? maybeIterable : null;
    }
    function warnNoop(publicInstance, callerName) {
        publicInstance = (publicInstance = publicInstance.constructor) && (publicInstance.displayName || publicInstance.name) || "ReactClass";
        var warningKey = publicInstance + "." + callerName;
        didWarnStateUpdateForUnmountedComponent[warningKey] || (console.error("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", callerName, publicInstance), didWarnStateUpdateForUnmountedComponent[warningKey] = !0);
    }
    function Component(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function ComponentDummy() {}
    function PureComponent(props, context, updater) {
        this.props = props;
        this.context = context;
        this.refs = emptyObject;
        this.updater = updater || ReactNoopUpdateQueue;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function isValidElementType(type) {
        return "string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId) ? !0 : !1;
    }
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, !1), type;
            case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                    return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {}
        }
        return "";
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function cloneAndReplaceKey(oldElement, newKey) {
        newKey = ReactElement(oldElement.type, newKey, void 0, void 0, oldElement._owner, oldElement.props);
        newKey._store.validated = oldElement._store.validated;
        return newKey;
    }
    function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node)) for(var i = 0; i < node.length; i++){
                var child = node[i];
                isValidElement(child) && validateExplicitKey(child, parentType);
            }
            else if (isValidElement(node)) node._store && (node._store.validated = 1);
            else if (i = getIteratorFn(node), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for(; !(node = i.next()).done;)isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = !0;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
                var stack = describeUnknownElementTypeFrameInDEV(element.type);
                prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
                return stack;
            };
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
    }
    function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
    }
    function escape(key) {
        var escaperLookup = {
            "=": "=0",
            ":": "=2"
        };
        return "$" + key.replace(/[=:]/g, function(match) {
            return escaperLookup[match];
        });
    }
    function getElementKey(element, index) {
        return "object" === typeof element && null !== element && null != element.key ? (checkKeyStringCoercion(element.key), escape("" + element.key)) : index.toString(36);
    }
    function noop$1() {}
    function resolveThenable(thenable) {
        switch(thenable.status){
            case "fulfilled":
                return thenable.value;
            case "rejected":
                throw thenable.reason;
            default:
                switch("string" === typeof thenable.status ? thenable.then(noop$1, noop$1) : (thenable.status = "pending", thenable.then(function(fulfilledValue) {
                    "pending" === thenable.status && (thenable.status = "fulfilled", thenable.value = fulfilledValue);
                }, function(error) {
                    "pending" === thenable.status && (thenable.status = "rejected", thenable.reason = error);
                })), thenable.status){
                    case "fulfilled":
                        return thenable.value;
                    case "rejected":
                        throw thenable.reason;
                }
        }
        throw thenable;
    }
    function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
        var type = typeof children;
        if ("undefined" === type || "boolean" === type) children = null;
        var invokeCallback = !1;
        if (null === children) invokeCallback = !0;
        else switch(type){
            case "bigint":
            case "string":
            case "number":
                invokeCallback = !0;
                break;
            case "object":
                switch(children.$$typeof){
                    case REACT_ELEMENT_TYPE:
                    case REACT_PORTAL_TYPE:
                        invokeCallback = !0;
                        break;
                    case REACT_LAZY_TYPE:
                        return invokeCallback = children._init, mapIntoArray(invokeCallback(children._payload), array, escapedPrefix, nameSoFar, callback);
                }
        }
        if (invokeCallback) {
            invokeCallback = children;
            callback = callback(invokeCallback);
            var childKey = "" === nameSoFar ? "." + getElementKey(invokeCallback, 0) : nameSoFar;
            isArrayImpl(callback) ? (escapedPrefix = "", null != childKey && (escapedPrefix = childKey.replace(userProvidedKeyEscapeRegex, "$&/") + "/"), mapIntoArray(callback, array, escapedPrefix, "", function(c) {
                return c;
            })) : null != callback && (isValidElement(callback) && (null != callback.key && (invokeCallback && invokeCallback.key === callback.key || checkKeyStringCoercion(callback.key)), escapedPrefix = cloneAndReplaceKey(callback, escapedPrefix + (null == callback.key || invokeCallback && invokeCallback.key === callback.key ? "" : ("" + callback.key).replace(userProvidedKeyEscapeRegex, "$&/") + "/") + childKey), "" !== nameSoFar && null != invokeCallback && isValidElement(invokeCallback) && null == invokeCallback.key && invokeCallback._store && !invokeCallback._store.validated && (escapedPrefix._store.validated = 2), callback = escapedPrefix), array.push(callback));
            return 1;
        }
        invokeCallback = 0;
        childKey = "" === nameSoFar ? "." : nameSoFar + ":";
        if (isArrayImpl(children)) for(var i = 0; i < children.length; i++)nameSoFar = children[i], type = childKey + getElementKey(nameSoFar, i), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if (i = getIteratorFn(children), "function" === typeof i) for(i === children.entries && (didWarnAboutMaps || console.warn("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), didWarnAboutMaps = !0), children = i.call(children), i = 0; !(nameSoFar = children.next()).done;)nameSoFar = nameSoFar.value, type = childKey + getElementKey(nameSoFar, i++), invokeCallback += mapIntoArray(nameSoFar, array, escapedPrefix, type, callback);
        else if ("object" === type) {
            if ("function" === typeof children.then) return mapIntoArray(resolveThenable(children), array, escapedPrefix, nameSoFar, callback);
            array = String(children);
            throw Error("Objects are not valid as a React child (found: " + ("[object Object]" === array ? "object with keys {" + Object.keys(children).join(", ") + "}" : array) + "). If you meant to render a collection of children, use an array instead.");
        }
        return invokeCallback;
    }
    function mapChildren(children, func, context) {
        if (null == children) return children;
        var result = [], count = 0;
        mapIntoArray(children, result, "", "", function(child) {
            return func.call(context, child, count++);
        });
        return result;
    }
    function lazyInitializer(payload) {
        if (-1 === payload._status) {
            var ctor = payload._result;
            ctor = ctor();
            ctor.then(function(moduleObject) {
                if (0 === payload._status || -1 === payload._status) payload._status = 1, payload._result = moduleObject;
            }, function(error) {
                if (0 === payload._status || -1 === payload._status) payload._status = 2, payload._result = error;
            });
            -1 === payload._status && (payload._status = 0, payload._result = ctor);
        }
        if (1 === payload._status) return ctor = payload._result, void 0 === ctor && console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))\n\nDid you accidentally put curly braces around the import?", ctor), "default" in ctor || console.error("lazy: Expected the result of a dynamic import() call. Instead received: %s\n\nYour code should look like: \n  const MyComponent = lazy(() => import('./MyComponent'))", ctor), ctor.default;
        throw payload._result;
    }
    function resolveDispatcher() {
        var dispatcher = ReactSharedInternals.H;
        null === dispatcher && console.error("Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:\n1. You might have mismatching versions of React and the renderer (such as React DOM)\n2. You might be breaking the Rules of Hooks\n3. You might have more than one copy of React in the same app\nSee https://react.dev/link/invalid-hook-call for tips about how to debug and fix this problem.");
        return dispatcher;
    }
    function noop() {}
    function enqueueTask(task) {
        if (null === enqueueTaskImpl) try {
            var requireString = ("require" + Math.random()).slice(0, 7);
            enqueueTaskImpl = (module && module[requireString]).call(module, "timers").setImmediate;
        } catch (_err) {
            enqueueTaskImpl = function(callback) {
                !1 === didWarnAboutMessageChannel && (didWarnAboutMessageChannel = !0, "undefined" === typeof MessageChannel && console.error("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
                var channel = new MessageChannel();
                channel.port1.onmessage = callback;
                channel.port2.postMessage(void 0);
            };
        }
        return enqueueTaskImpl(task);
    }
    function aggregateErrors(errors) {
        return 1 < errors.length && "function" === typeof AggregateError ? new AggregateError(errors) : errors[0];
    }
    function popActScope(prevActQueue, prevActScopeDepth) {
        prevActScopeDepth !== actScopeDepth - 1 && console.error("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. ");
        actScopeDepth = prevActScopeDepth;
    }
    function recursivelyFlushAsyncActWork(returnValue, resolve, reject) {
        var queue = ReactSharedInternals.actQueue;
        if (null !== queue) {
            if (0 !== queue.length) try {
                flushActQueue(queue);
                enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                });
                return;
            } catch (error) {
                ReactSharedInternals.thrownErrors.push(error);
            }
            else ReactSharedInternals.actQueue = null;
        }
        0 < ReactSharedInternals.thrownErrors.length ? (queue = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(queue)) : resolve(returnValue);
    }
    function flushActQueue(queue) {
        if (!isFlushing) {
            isFlushing = !0;
            var i = 0;
            try {
                for(; i < queue.length; i++){
                    var callback = queue[i];
                    do {
                        ReactSharedInternals.didUsePromise = !1;
                        var continuation = callback(!1);
                        if (null !== continuation) {
                            if (ReactSharedInternals.didUsePromise) {
                                queue[i] = callback;
                                queue.splice(0, i);
                                return;
                            }
                            callback = continuation;
                        } else break;
                    }while (1);
                }
                queue.length = 0;
            } catch (error) {
                queue.splice(0, i + 1), ReactSharedInternals.thrownErrors.push(error);
            } finally{
                isFlushing = !1;
            }
        }
    }
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(Error());
    var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, didWarnStateUpdateForUnmountedComponent = {}, ReactNoopUpdateQueue = {
        isMounted: function() {
            return !1;
        },
        enqueueForceUpdate: function(publicInstance) {
            warnNoop(publicInstance, "forceUpdate");
        },
        enqueueReplaceState: function(publicInstance) {
            warnNoop(publicInstance, "replaceState");
        },
        enqueueSetState: function(publicInstance) {
            warnNoop(publicInstance, "setState");
        }
    }, assign = Object.assign, emptyObject = {};
    Object.freeze(emptyObject);
    Component.prototype.isReactComponent = {};
    Component.prototype.setState = function(partialState, callback) {
        if ("object" !== typeof partialState && "function" !== typeof partialState && null != partialState) throw Error("takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, partialState, callback, "setState");
    };
    Component.prototype.forceUpdate = function(callback) {
        this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
    };
    var deprecatedAPIs = {
        isMounted: [
            "isMounted",
            "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."
        ],
        replaceState: [
            "replaceState",
            "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."
        ]
    }, fnName;
    for(fnName in deprecatedAPIs)deprecatedAPIs.hasOwnProperty(fnName) && defineDeprecationWarning(fnName, deprecatedAPIs[fnName]);
    ComponentDummy.prototype = Component.prototype;
    deprecatedAPIs = PureComponent.prototype = new ComponentDummy();
    deprecatedAPIs.constructor = PureComponent;
    assign(deprecatedAPIs, Component.prototype);
    deprecatedAPIs.isPureReactComponent = !0;
    var isArrayImpl = Array.isArray, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = {
        H: null,
        A: null,
        T: null,
        S: null,
        actQueue: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1,
        didUsePromise: !1,
        thrownErrors: [],
        getCurrentStack: null
    }, hasOwnProperty = Object.prototype.hasOwnProperty, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown, didWarnAboutOldJSXRuntime;
    var didWarnAboutElementRef = {};
    var ownerHasKeyUseWarning = {}, didWarnAboutMaps = !1, userProvidedKeyEscapeRegex = /\/+/g, reportGlobalError = "function" === typeof reportError ? reportError : function(error) {
        if ("object" === typeof window && "function" === typeof window.ErrorEvent) {
            var event = new window.ErrorEvent("error", {
                bubbles: !0,
                cancelable: !0,
                message: "object" === typeof error && null !== error && "string" === typeof error.message ? String(error.message) : String(error),
                error: error
            });
            if (!window.dispatchEvent(event)) return;
        } else if ("object" === typeof process && "function" === typeof process.emit) {
            process.emit("uncaughtException", error);
            return;
        }
        console.error(error);
    }, didWarnAboutMessageChannel = !1, enqueueTaskImpl = null, actScopeDepth = 0, didWarnNoAwaitAct = !1, isFlushing = !1, queueSeveralMicrotasks = "function" === typeof queueMicrotask ? function(callback) {
        queueMicrotask(function() {
            return queueMicrotask(callback);
        });
    } : enqueueTask;
    exports.Children = {
        map: mapChildren,
        forEach: function(children, forEachFunc, forEachContext) {
            mapChildren(children, function() {
                forEachFunc.apply(this, arguments);
            }, forEachContext);
        },
        count: function(children) {
            var n = 0;
            mapChildren(children, function() {
                n++;
            });
            return n;
        },
        toArray: function(children) {
            return mapChildren(children, function(child) {
                return child;
            }) || [];
        },
        only: function(children) {
            if (!isValidElement(children)) throw Error("React.Children.only expected to receive a single React element child.");
            return children;
        }
    };
    exports.Component = Component;
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.Profiler = REACT_PROFILER_TYPE;
    exports.PureComponent = PureComponent;
    exports.StrictMode = REACT_STRICT_MODE_TYPE;
    exports.Suspense = REACT_SUSPENSE_TYPE;
    exports.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ReactSharedInternals;
    exports.act = function(callback) {
        var prevActQueue = ReactSharedInternals.actQueue, prevActScopeDepth = actScopeDepth;
        actScopeDepth++;
        var queue = ReactSharedInternals.actQueue = null !== prevActQueue ? prevActQueue : [], didAwaitActCall = !1;
        try {
            var result = callback();
        } catch (error) {
            ReactSharedInternals.thrownErrors.push(error);
        }
        if (0 < ReactSharedInternals.thrownErrors.length) throw popActScope(prevActQueue, prevActScopeDepth), callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        if (null !== result && "object" === typeof result && "function" === typeof result.then) {
            var thenable = result;
            queueSeveralMicrotasks(function() {
                didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            });
            return {
                then: function(resolve, reject) {
                    didAwaitActCall = !0;
                    thenable.then(function(returnValue) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        if (0 === prevActScopeDepth) {
                            try {
                                flushActQueue(queue), enqueueTask(function() {
                                    return recursivelyFlushAsyncActWork(returnValue, resolve, reject);
                                });
                            } catch (error$2) {
                                ReactSharedInternals.thrownErrors.push(error$2);
                            }
                            if (0 < ReactSharedInternals.thrownErrors.length) {
                                var _thrownError = aggregateErrors(ReactSharedInternals.thrownErrors);
                                ReactSharedInternals.thrownErrors.length = 0;
                                reject(_thrownError);
                            }
                        } else resolve(returnValue);
                    }, function(error) {
                        popActScope(prevActQueue, prevActScopeDepth);
                        0 < ReactSharedInternals.thrownErrors.length ? (error = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, reject(error)) : reject(error);
                    });
                }
            };
        }
        var returnValue$jscomp$0 = result;
        popActScope(prevActQueue, prevActScopeDepth);
        0 === prevActScopeDepth && (flushActQueue(queue), 0 !== queue.length && queueSeveralMicrotasks(function() {
            didAwaitActCall || didWarnNoAwaitAct || (didWarnNoAwaitAct = !0, console.error("A component suspended inside an `act` scope, but the `act` call was not awaited. When testing React components that depend on asynchronous data, you must await the result:\n\nawait act(() => ...)"));
        }), ReactSharedInternals.actQueue = null);
        if (0 < ReactSharedInternals.thrownErrors.length) throw callback = aggregateErrors(ReactSharedInternals.thrownErrors), ReactSharedInternals.thrownErrors.length = 0, callback;
        return {
            then: function(resolve, reject) {
                didAwaitActCall = !0;
                0 === prevActScopeDepth ? (ReactSharedInternals.actQueue = queue, enqueueTask(function() {
                    return recursivelyFlushAsyncActWork(returnValue$jscomp$0, resolve, reject);
                })) : resolve(returnValue$jscomp$0);
            }
        };
    };
    exports.cache = function(fn) {
        return function() {
            return fn.apply(null, arguments);
        };
    };
    exports.cloneElement = function(element, config, children) {
        if (null === element || void 0 === element) throw Error("The argument must be a React element, but you passed " + element + ".");
        var props = assign({}, element.props), key = element.key, owner = element._owner;
        if (null != config) {
            var JSCompiler_inline_result;
            a: {
                if (hasOwnProperty.call(config, "ref") && (JSCompiler_inline_result = Object.getOwnPropertyDescriptor(config, "ref").get) && JSCompiler_inline_result.isReactWarning) {
                    JSCompiler_inline_result = !1;
                    break a;
                }
                JSCompiler_inline_result = void 0 !== config.ref;
            }
            JSCompiler_inline_result && (owner = getOwner());
            hasValidKey(config) && (checkKeyStringCoercion(config.key), key = "" + config.key);
            for(propName in config)!hasOwnProperty.call(config, propName) || "key" === propName || "__self" === propName || "__source" === propName || "ref" === propName && void 0 === config.ref || (props[propName] = config[propName]);
        }
        var propName = arguments.length - 2;
        if (1 === propName) props.children = children;
        else if (1 < propName) {
            JSCompiler_inline_result = Array(propName);
            for(var i = 0; i < propName; i++)JSCompiler_inline_result[i] = arguments[i + 2];
            props.children = JSCompiler_inline_result;
        }
        props = ReactElement(element.type, key, void 0, void 0, owner, props);
        for(key = 2; key < arguments.length; key++)validateChildKeys(arguments[key], props.type);
        return props;
    };
    exports.createContext = function(defaultValue) {
        defaultValue = {
            $$typeof: REACT_CONTEXT_TYPE,
            _currentValue: defaultValue,
            _currentValue2: defaultValue,
            _threadCount: 0,
            Provider: null,
            Consumer: null
        };
        defaultValue.Provider = defaultValue;
        defaultValue.Consumer = {
            $$typeof: REACT_CONSUMER_TYPE,
            _context: defaultValue
        };
        defaultValue._currentRenderer = null;
        defaultValue._currentRenderer2 = null;
        return defaultValue;
    };
    exports.createElement = function(type, config, children) {
        if (isValidElementType(type)) for(var i = 2; i < arguments.length; i++)validateChildKeys(arguments[i], type);
        else {
            i = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            if (null === type) var typeString = "null";
            else isArrayImpl(type) ? typeString = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (typeString = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : typeString = typeof type;
            console.error("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", typeString, i);
        }
        var propName;
        i = {};
        typeString = null;
        if (null != config) for(propName in didWarnAboutOldJSXRuntime || !("__self" in config) || "key" in config || (didWarnAboutOldJSXRuntime = !0, console.warn("Your app (or one of its dependencies) is using an outdated JSX transform. Update to the modern JSX transform for faster performance: https://react.dev/link/new-jsx-transform")), hasValidKey(config) && (checkKeyStringCoercion(config.key), typeString = "" + config.key), config)hasOwnProperty.call(config, propName) && "key" !== propName && "__self" !== propName && "__source" !== propName && (i[propName] = config[propName]);
        var childrenLength = arguments.length - 2;
        if (1 === childrenLength) i.children = children;
        else if (1 < childrenLength) {
            for(var childArray = Array(childrenLength), _i = 0; _i < childrenLength; _i++)childArray[_i] = arguments[_i + 2];
            Object.freeze && Object.freeze(childArray);
            i.children = childArray;
        }
        if (type && type.defaultProps) for(propName in childrenLength = type.defaultProps, childrenLength)void 0 === i[propName] && (i[propName] = childrenLength[propName]);
        typeString && defineKeyPropWarningGetter(i, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, typeString, void 0, void 0, getOwner(), i);
    };
    exports.createRef = function() {
        var refObject = {
            current: null
        };
        Object.seal(refObject);
        return refObject;
    };
    exports.forwardRef = function(render) {
        null != render && render.$$typeof === REACT_MEMO_TYPE ? console.error("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : "function" !== typeof render ? console.error("forwardRef requires a render function but was given %s.", null === render ? "null" : typeof render) : 0 !== render.length && 2 !== render.length && console.error("forwardRef render functions accept exactly two parameters: props and ref. %s", 1 === render.length ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined.");
        null != render && null != render.defaultProps && console.error("forwardRef render functions do not support defaultProps. Did you accidentally pass a React component?");
        var elementType = {
            $$typeof: REACT_FORWARD_REF_TYPE,
            render: render
        }, ownName;
        Object.defineProperty(elementType, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                render.name || render.displayName || (Object.defineProperty(render, "name", {
                    value: name
                }), render.displayName = name);
            }
        });
        return elementType;
    };
    exports.isValidElement = isValidElement;
    exports.lazy = function(ctor) {
        return {
            $$typeof: REACT_LAZY_TYPE,
            _payload: {
                _status: -1,
                _result: ctor
            },
            _init: lazyInitializer
        };
    };
    exports.memo = function(type, compare) {
        isValidElementType(type) || console.error("memo: The first argument must be a component. Instead received: %s", null === type ? "null" : typeof type);
        compare = {
            $$typeof: REACT_MEMO_TYPE,
            type: type,
            compare: void 0 === compare ? null : compare
        };
        var ownName;
        Object.defineProperty(compare, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
                return ownName;
            },
            set: function(name) {
                ownName = name;
                type.name || type.displayName || (Object.defineProperty(type, "name", {
                    value: name
                }), type.displayName = name);
            }
        });
        return compare;
    };
    exports.startTransition = function(scope) {
        var prevTransition = ReactSharedInternals.T, currentTransition = {};
        ReactSharedInternals.T = currentTransition;
        currentTransition._updatedFibers = new Set();
        try {
            var returnValue = scope(), onStartTransitionFinish = ReactSharedInternals.S;
            null !== onStartTransitionFinish && onStartTransitionFinish(currentTransition, returnValue);
            "object" === typeof returnValue && null !== returnValue && "function" === typeof returnValue.then && returnValue.then(noop, reportGlobalError);
        } catch (error) {
            reportGlobalError(error);
        } finally{
            null === prevTransition && currentTransition._updatedFibers && (scope = currentTransition._updatedFibers.size, currentTransition._updatedFibers.clear(), 10 < scope && console.warn("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table.")), ReactSharedInternals.T = prevTransition;
        }
    };
    exports.unstable_useCacheRefresh = function() {
        return resolveDispatcher().useCacheRefresh();
    };
    exports.use = function(usable) {
        return resolveDispatcher().use(usable);
    };
    exports.useActionState = function(action, initialState, permalink) {
        return resolveDispatcher().useActionState(action, initialState, permalink);
    };
    exports.useCallback = function(callback, deps) {
        return resolveDispatcher().useCallback(callback, deps);
    };
    exports.useContext = function(Context) {
        var dispatcher = resolveDispatcher();
        Context.$$typeof === REACT_CONSUMER_TYPE && console.error("Calling useContext(Context.Consumer) is not supported and will cause bugs. Did you mean to call useContext(Context) instead?");
        return dispatcher.useContext(Context);
    };
    exports.useDebugValue = function(value, formatterFn) {
        return resolveDispatcher().useDebugValue(value, formatterFn);
    };
    exports.useDeferredValue = function(value, initialValue) {
        return resolveDispatcher().useDeferredValue(value, initialValue);
    };
    exports.useEffect = function(create, deps) {
        return resolveDispatcher().useEffect(create, deps);
    };
    exports.useId = function() {
        return resolveDispatcher().useId();
    };
    exports.useImperativeHandle = function(ref, create, deps) {
        return resolveDispatcher().useImperativeHandle(ref, create, deps);
    };
    exports.useInsertionEffect = function(create, deps) {
        return resolveDispatcher().useInsertionEffect(create, deps);
    };
    exports.useLayoutEffect = function(create, deps) {
        return resolveDispatcher().useLayoutEffect(create, deps);
    };
    exports.useMemo = function(create, deps) {
        return resolveDispatcher().useMemo(create, deps);
    };
    exports.useOptimistic = function(passthrough, reducer) {
        return resolveDispatcher().useOptimistic(passthrough, reducer);
    };
    exports.useReducer = function(reducer, initialArg, init) {
        return resolveDispatcher().useReducer(reducer, initialArg, init);
    };
    exports.useRef = function(initialValue) {
        return resolveDispatcher().useRef(initialValue);
    };
    exports.useState = function(initialState) {
        return resolveDispatcher().useState(initialState);
    };
    exports.useSyncExternalStore = function(subscribe, getSnapshot, getServerSnapshot) {
        return resolveDispatcher().useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
    };
    exports.useTransition = function() {
        return resolveDispatcher().useTransition();
    };
    exports.version = "19.0.0";
    "undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(Error());
})();

},{"9ffea7b9cafb49c3":"d5jf4"}],"d5jf4":[function(require,module,exports,__globalThis) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout() {
    throw new Error('clearTimeout has not been defined');
}
(function() {
    try {
        if (typeof setTimeout === 'function') cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error('process.binding is not supported');
};
process.cwd = function() {
    return '/';
};
process.chdir = function(dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() {
    return 0;
};

},{}],"54rka":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>initScrollReveal);
function initScrollReveal(targetElements, defaultProps) {
    if (!targetElements.length) return;
    ScrollReveal({
        reset: false
    });
    targetElements.forEach(({ element, animation })=>{
        ScrollReveal().reveal(element, Object.assign({}, defaultProps, animation));
    });
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports,__globalThis) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"72kAb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>initTiltAnimation);
var _vanillaTilt = require("vanilla-tilt");
var _vanillaTiltDefault = parcelHelpers.interopDefault(_vanillaTilt);
function initTiltAnimation() {
    const elements = document.querySelectorAll(".js-tilt");
    (0, _vanillaTiltDefault.default).init(elements);
}

},{"vanilla-tilt":"jiWzO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jiWzO":[function(require,module,exports,__globalThis) {
'use strict';
var classCallCheck = function(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
};
/**
 * Created by Sergiu Șandor (micku7zu) on 1/27/2017.
 * Original idea: https://github.com/gijsroge/tilt.js
 * MIT License.
 * Version 1.8.1
 */ var VanillaTilt = function() {
    function VanillaTilt(element) {
        var settings = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        classCallCheck(this, VanillaTilt);
        if (!(element instanceof Node)) throw "Can't initialize VanillaTilt because " + element + " is not a Node.";
        this.width = null;
        this.height = null;
        this.clientWidth = null;
        this.clientHeight = null;
        this.left = null;
        this.top = null;
        // for Gyroscope sampling
        this.gammazero = null;
        this.betazero = null;
        this.lastgammazero = null;
        this.lastbetazero = null;
        this.transitionTimeout = null;
        this.updateCall = null;
        this.event = null;
        this.updateBind = this.update.bind(this);
        this.resetBind = this.reset.bind(this);
        this.element = element;
        this.settings = this.extendSettings(settings);
        this.reverse = this.settings.reverse ? -1 : 1;
        this.resetToStart = VanillaTilt.isSettingTrue(this.settings["reset-to-start"]);
        this.glare = VanillaTilt.isSettingTrue(this.settings.glare);
        this.glarePrerender = VanillaTilt.isSettingTrue(this.settings["glare-prerender"]);
        this.fullPageListening = VanillaTilt.isSettingTrue(this.settings["full-page-listening"]);
        this.gyroscope = VanillaTilt.isSettingTrue(this.settings.gyroscope);
        this.gyroscopeSamples = this.settings.gyroscopeSamples;
        this.elementListener = this.getElementListener();
        if (this.glare) this.prepareGlare();
        if (this.fullPageListening) this.updateClientSize();
        this.addEventListeners();
        this.reset();
        if (this.resetToStart === false) {
            this.settings.startX = 0;
            this.settings.startY = 0;
        }
    }
    VanillaTilt.isSettingTrue = function isSettingTrue(setting) {
        return setting === "" || setting === true || setting === 1;
    };
    /**
   * Method returns element what will be listen mouse events
   * @return {Node}
   */ VanillaTilt.prototype.getElementListener = function getElementListener() {
        if (this.fullPageListening) return window.document;
        if (typeof this.settings["mouse-event-element"] === "string") {
            var mouseEventElement = document.querySelector(this.settings["mouse-event-element"]);
            if (mouseEventElement) return mouseEventElement;
        }
        if (this.settings["mouse-event-element"] instanceof Node) return this.settings["mouse-event-element"];
        return this.element;
    };
    /**
   * Method set listen methods for this.elementListener
   * @return {Node}
   */ VanillaTilt.prototype.addEventListeners = function addEventListeners() {
        this.onMouseEnterBind = this.onMouseEnter.bind(this);
        this.onMouseMoveBind = this.onMouseMove.bind(this);
        this.onMouseLeaveBind = this.onMouseLeave.bind(this);
        this.onWindowResizeBind = this.onWindowResize.bind(this);
        this.onDeviceOrientationBind = this.onDeviceOrientation.bind(this);
        this.elementListener.addEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.addEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.addEventListener("mousemove", this.onMouseMoveBind);
        if (this.glare || this.fullPageListening) window.addEventListener("resize", this.onWindowResizeBind);
        if (this.gyroscope) window.addEventListener("deviceorientation", this.onDeviceOrientationBind);
    };
    /**
   * Method remove event listeners from current this.elementListener
   */ VanillaTilt.prototype.removeEventListeners = function removeEventListeners() {
        this.elementListener.removeEventListener("mouseenter", this.onMouseEnterBind);
        this.elementListener.removeEventListener("mouseleave", this.onMouseLeaveBind);
        this.elementListener.removeEventListener("mousemove", this.onMouseMoveBind);
        if (this.gyroscope) window.removeEventListener("deviceorientation", this.onDeviceOrientationBind);
        if (this.glare || this.fullPageListening) window.removeEventListener("resize", this.onWindowResizeBind);
    };
    VanillaTilt.prototype.destroy = function destroy() {
        clearTimeout(this.transitionTimeout);
        if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
        this.element.style.willChange = "";
        this.element.style.transition = "";
        this.element.style.transform = "";
        this.resetGlare();
        this.removeEventListeners();
        this.element.vanillaTilt = null;
        delete this.element.vanillaTilt;
        this.element = null;
    };
    VanillaTilt.prototype.onDeviceOrientation = function onDeviceOrientation(event) {
        if (event.gamma === null || event.beta === null) return;
        this.updateElementPosition();
        if (this.gyroscopeSamples > 0) {
            this.lastgammazero = this.gammazero;
            this.lastbetazero = this.betazero;
            if (this.gammazero === null) {
                this.gammazero = event.gamma;
                this.betazero = event.beta;
            } else {
                this.gammazero = (event.gamma + this.lastgammazero) / 2;
                this.betazero = (event.beta + this.lastbetazero) / 2;
            }
            this.gyroscopeSamples -= 1;
        }
        var totalAngleX = this.settings.gyroscopeMaxAngleX - this.settings.gyroscopeMinAngleX;
        var totalAngleY = this.settings.gyroscopeMaxAngleY - this.settings.gyroscopeMinAngleY;
        var degreesPerPixelX = totalAngleX / this.width;
        var degreesPerPixelY = totalAngleY / this.height;
        var angleX = event.gamma - (this.settings.gyroscopeMinAngleX + this.gammazero);
        var angleY = event.beta - (this.settings.gyroscopeMinAngleY + this.betazero);
        var posX = angleX / degreesPerPixelX;
        var posY = angleY / degreesPerPixelY;
        if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
        this.event = {
            clientX: posX + this.left,
            clientY: posY + this.top
        };
        this.updateCall = requestAnimationFrame(this.updateBind);
    };
    VanillaTilt.prototype.onMouseEnter = function onMouseEnter() {
        this.updateElementPosition();
        this.element.style.willChange = "transform";
        this.setTransition();
    };
    VanillaTilt.prototype.onMouseMove = function onMouseMove(event) {
        if (this.updateCall !== null) cancelAnimationFrame(this.updateCall);
        this.event = event;
        this.updateCall = requestAnimationFrame(this.updateBind);
    };
    VanillaTilt.prototype.onMouseLeave = function onMouseLeave() {
        this.setTransition();
        if (this.settings.reset) requestAnimationFrame(this.resetBind);
    };
    VanillaTilt.prototype.reset = function reset() {
        this.onMouseEnter();
        if (this.fullPageListening) this.event = {
            clientX: (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.clientWidth,
            clientY: (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.clientHeight
        };
        else this.event = {
            clientX: this.left + (this.settings.startX + this.settings.max) / (2 * this.settings.max) * this.width,
            clientY: this.top + (this.settings.startY + this.settings.max) / (2 * this.settings.max) * this.height
        };
        var backupScale = this.settings.scale;
        this.settings.scale = 1;
        this.update();
        this.settings.scale = backupScale;
        this.resetGlare();
    };
    VanillaTilt.prototype.resetGlare = function resetGlare() {
        if (this.glare) {
            this.glareElement.style.transform = "rotate(180deg) translate(-50%, -50%)";
            this.glareElement.style.opacity = "0";
        }
    };
    VanillaTilt.prototype.getValues = function getValues() {
        var x = void 0, y = void 0;
        if (this.fullPageListening) {
            x = this.event.clientX / this.clientWidth;
            y = this.event.clientY / this.clientHeight;
        } else {
            x = (this.event.clientX - this.left) / this.width;
            y = (this.event.clientY - this.top) / this.height;
        }
        x = Math.min(Math.max(x, 0), 1);
        y = Math.min(Math.max(y, 0), 1);
        var tiltX = (this.reverse * (this.settings.max - x * this.settings.max * 2)).toFixed(2);
        var tiltY = (this.reverse * (y * this.settings.max * 2 - this.settings.max)).toFixed(2);
        var angle = Math.atan2(this.event.clientX - (this.left + this.width / 2), -(this.event.clientY - (this.top + this.height / 2))) * (180 / Math.PI);
        return {
            tiltX: tiltX,
            tiltY: tiltY,
            percentageX: x * 100,
            percentageY: y * 100,
            angle: angle
        };
    };
    VanillaTilt.prototype.updateElementPosition = function updateElementPosition() {
        var rect = this.element.getBoundingClientRect();
        this.width = this.element.offsetWidth;
        this.height = this.element.offsetHeight;
        this.left = rect.left;
        this.top = rect.top;
    };
    VanillaTilt.prototype.update = function update() {
        var values = this.getValues();
        this.element.style.transform = "perspective(" + this.settings.perspective + "px) " + "rotateX(" + (this.settings.axis === "x" ? 0 : values.tiltY) + "deg) " + "rotateY(" + (this.settings.axis === "y" ? 0 : values.tiltX) + "deg) " + "scale3d(" + this.settings.scale + ", " + this.settings.scale + ", " + this.settings.scale + ")";
        if (this.glare) {
            this.glareElement.style.transform = "rotate(" + values.angle + "deg) translate(-50%, -50%)";
            this.glareElement.style.opacity = "" + values.percentageY * this.settings["max-glare"] / 100;
        }
        this.element.dispatchEvent(new CustomEvent("tiltChange", {
            "detail": values
        }));
        this.updateCall = null;
    };
    /**
   * Appends the glare element (if glarePrerender equals false)
   * and sets the default style
   */ VanillaTilt.prototype.prepareGlare = function prepareGlare() {
        // If option pre-render is enabled we assume all html/css is present for an optimal glare effect.
        if (!this.glarePrerender) {
            // Create glare element
            var jsTiltGlare = document.createElement("div");
            jsTiltGlare.classList.add("js-tilt-glare");
            var jsTiltGlareInner = document.createElement("div");
            jsTiltGlareInner.classList.add("js-tilt-glare-inner");
            jsTiltGlare.appendChild(jsTiltGlareInner);
            this.element.appendChild(jsTiltGlare);
        }
        this.glareElementWrapper = this.element.querySelector(".js-tilt-glare");
        this.glareElement = this.element.querySelector(".js-tilt-glare-inner");
        if (this.glarePrerender) return;
        Object.assign(this.glareElementWrapper.style, {
            "position": "absolute",
            "top": "0",
            "left": "0",
            "width": "100%",
            "height": "100%",
            "overflow": "hidden",
            "pointer-events": "none",
            "border-radius": "inherit"
        });
        Object.assign(this.glareElement.style, {
            "position": "absolute",
            "top": "50%",
            "left": "50%",
            "pointer-events": "none",
            "background-image": "linear-gradient(0deg, rgba(255,255,255,0) 0%, rgba(255,255,255,1) 100%)",
            "transform": "rotate(180deg) translate(-50%, -50%)",
            "transform-origin": "0% 0%",
            "opacity": "0"
        });
        this.updateGlareSize();
    };
    VanillaTilt.prototype.updateGlareSize = function updateGlareSize() {
        if (this.glare) {
            var glareSize = (this.element.offsetWidth > this.element.offsetHeight ? this.element.offsetWidth : this.element.offsetHeight) * 2;
            Object.assign(this.glareElement.style, {
                "width": glareSize + "px",
                "height": glareSize + "px"
            });
        }
    };
    VanillaTilt.prototype.updateClientSize = function updateClientSize() {
        this.clientWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
        this.clientHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    };
    VanillaTilt.prototype.onWindowResize = function onWindowResize() {
        this.updateGlareSize();
        this.updateClientSize();
    };
    VanillaTilt.prototype.setTransition = function setTransition() {
        var _this = this;
        clearTimeout(this.transitionTimeout);
        this.element.style.transition = this.settings.speed + "ms " + this.settings.easing;
        if (this.glare) this.glareElement.style.transition = "opacity " + this.settings.speed + "ms " + this.settings.easing;
        this.transitionTimeout = setTimeout(function() {
            _this.element.style.transition = "";
            if (_this.glare) _this.glareElement.style.transition = "";
        }, this.settings.speed);
    };
    /**
   * Method return patched settings of instance
   * @param {boolean} settings.reverse - reverse the tilt direction
   * @param {number} settings.max - max tilt rotation (degrees)
   * @param {startX} settings.startX - the starting tilt on the X axis, in degrees. Default: 0
   * @param {startY} settings.startY - the starting tilt on the Y axis, in degrees. Default: 0
   * @param {number} settings.perspective - Transform perspective, the lower the more extreme the tilt gets
   * @param {string} settings.easing - Easing on enter/exit
   * @param {number} settings.scale - 2 = 200%, 1.5 = 150%, etc..
   * @param {number} settings.speed - Speed of the enter/exit transition
   * @param {boolean} settings.transition - Set a transition on enter/exit
   * @param {string|null} settings.axis - What axis should be enabled. Can be "x" or "y"
   * @param {boolean} settings.glare - if it should have a "glare" effect
   * @param {number} settings.max-glare - the maximum "glare" opacity (1 = 100%, 0.5 = 50%)
   * @param {boolean} settings.glare-prerender - false = VanillaTilt creates the glare elements for you, otherwise
   * @param {boolean} settings.full-page-listening - If true, parallax effect will listen to mouse move events on the whole document, not only the selected element
   * @param {string|object} settings.mouse-event-element - String selector or link to HTML-element what will be listen mouse events
   * @param {boolean} settings.reset - false = If the tilt effect has to be reset on exit
   * @param {boolean} settings.reset-to-start - true = On reset event (mouse leave) will return to initial start angle (if startX or startY is set)
   * @param {gyroscope} settings.gyroscope - Enable tilting by deviceorientation events
   * @param {gyroscopeSensitivity} settings.gyroscopeSensitivity - Between 0 and 1 - The angle at which max tilt position is reached. 1 = 90deg, 0.5 = 45deg, etc..
   * @param {gyroscopeSamples} settings.gyroscopeSamples - How many gyroscope moves to decide the starting position.
   */ VanillaTilt.prototype.extendSettings = function extendSettings(settings) {
        var defaultSettings = {
            reverse: false,
            max: 15,
            startX: 0,
            startY: 0,
            perspective: 1000,
            easing: "cubic-bezier(.03,.98,.52,.99)",
            scale: 1,
            speed: 300,
            transition: true,
            axis: null,
            glare: false,
            "max-glare": 1,
            "glare-prerender": false,
            "full-page-listening": false,
            "mouse-event-element": null,
            reset: true,
            "reset-to-start": true,
            gyroscope: true,
            gyroscopeMinAngleX: -45,
            gyroscopeMaxAngleX: 45,
            gyroscopeMinAngleY: -45,
            gyroscopeMaxAngleY: 45,
            gyroscopeSamples: 10
        };
        var newSettings = {};
        for(var property in defaultSettings){
            if (property in settings) newSettings[property] = settings[property];
            else if (this.element.hasAttribute("data-tilt-" + property)) {
                var attribute = this.element.getAttribute("data-tilt-" + property);
                try {
                    newSettings[property] = JSON.parse(attribute);
                } catch (e) {
                    newSettings[property] = attribute;
                }
            } else newSettings[property] = defaultSettings[property];
        }
        return newSettings;
    };
    VanillaTilt.init = function init(elements, settings) {
        if (elements instanceof Node) elements = [
            elements
        ];
        if (elements instanceof NodeList) elements = [].slice.call(elements);
        if (!(elements instanceof Array)) return;
        elements.forEach(function(element) {
            if (!("vanillaTilt" in element)) element.vanillaTilt = new VanillaTilt(element, settings);
        });
    };
    return VanillaTilt;
}();
if (typeof document !== "undefined") {
    /* expose the class to window */ window.VanillaTilt = VanillaTilt;
    /**
   * Auto load
   */ VanillaTilt.init(document.querySelectorAll("[data-tilt]"));
}
module.exports = VanillaTilt;

},{}],"5aORV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "defaultProps", ()=>defaultProps);
parcelHelpers.export(exports, "targetElements", ()=>targetElements);
const defaultProps = {
    easing: "cubic-bezier(0.5, 0, 0, 1)",
    distance: "30px",
    duration: 1000,
    desktop: true,
    mobile: true
};
const targetElements = [
    {
        element: ".section-title",
        animation: {
            delay: 300,
            distance: "0px",
            origin: "bottom"
        }
    },
    {
        element: ".hero-title",
        animation: {
            delay: 500,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".hero-cta",
        animation: {
            delay: 1000,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".about-wrapper__image",
        animation: {
            delay: 600,
            origin: "bottom"
        }
    },
    {
        element: ".about-wrapper__info",
        animation: {
            delay: 1000,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".project-wrapper__text",
        animation: {
            delay: 500,
            origin: window.innerWidth > 768 ? "left" : "bottom"
        }
    },
    {
        element: ".project-wrapper__image",
        animation: {
            delay: 1000,
            origin: window.innerWidth > 768 ? "right" : "bottom"
        }
    },
    {
        element: ".contact-wrapper",
        animation: {
            delay: 800,
            origin: "bottom"
        }
    }
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5fZYg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Particles", ()=>(0, _particlesJsDefault.default));
parcelHelpers.export(exports, "default", ()=>(0, _particlesJsDefault.default));
parcelHelpers.export(exports, "initParticlesEngine", ()=>n);
var _engine = require("@tsparticles/engine");
var _particlesJs = require("./Particles.js");
var _particlesJsDefault = parcelHelpers.interopDefault(_particlesJs);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
async function n(t) {
    await t((0, _engine.tsParticles));
}

},{"@tsparticles/engine":"ahMVX","./Particles.js":"gTg7A","react/jsx-runtime":"6AEwr","react":"21dqq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ahMVX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "tsParticles", ()=>tsParticles);
var _initJs = require("./init.js");
var _utilsJs = require("./Utils/Utils.js");
var _exportsJs = require("./exports.js");
parcelHelpers.exportAll(_exportsJs, exports);
var _exportTypesJs = require("./export-types.js");
parcelHelpers.exportAll(_exportTypesJs, exports);
const tsParticles = (0, _initJs.init)();
if (!(0, _utilsJs.isSsr)()) window.tsParticles = tsParticles;

},{"./init.js":"cn6ky","./Utils/Utils.js":"17M4n","./exports.js":"4f3rW","./export-types.js":"8l4GZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cn6ky":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
var _engineJs = require("./Core/Engine.js");
function init() {
    const engine = new (0, _engineJs.Engine)();
    engine.init();
    return engine;
}

},{"./Core/Engine.js":"cwnBE","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cwnBE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Engine", ()=>Engine);
var _constantsJs = require("./Utils/Constants.js");
var _utilsJs = require("../Utils/Utils.js");
var _containerJs = require("./Container.js");
var _eventDispatcherJs = require("../Utils/EventDispatcher.js");
var _eventTypeJs = require("../Enums/Types/EventType.js");
var _numberUtilsJs = require("../Utils/NumberUtils.js");
async function getItemsFromInitializer(container, map, initializers, force = false) {
    let res = map.get(container);
    if (!res || force) {
        res = await Promise.all([
            ...initializers.values()
        ].map((t)=>t(container)));
        map.set(container, res);
    }
    return res;
}
async function getDataFromUrl(data) {
    const url = (0, _utilsJs.itemFromSingleOrMultiple)(data.url, data.index);
    if (!url) return data.fallback;
    const response = await fetch(url);
    if (response.ok) return await response.json();
    (0, _utilsJs.getLogger)().error(`${(0, _constantsJs.errorPrefix)} ${response.status} while retrieving config file`);
    return data.fallback;
}
const generatedTrue = "true", generatedFalse = "false", canvasTag = "canvas", getCanvasFromContainer = (domContainer)=>{
    let canvasEl;
    if (domContainer instanceof HTMLCanvasElement || domContainer.tagName.toLowerCase() === canvasTag) {
        canvasEl = domContainer;
        if (!canvasEl.dataset[0, _constantsJs.generatedAttribute]) canvasEl.dataset[0, _constantsJs.generatedAttribute] = generatedFalse;
    } else {
        const existingCanvases = domContainer.getElementsByTagName(canvasTag);
        if (existingCanvases.length) {
            const firstIndex = 0;
            canvasEl = existingCanvases[firstIndex];
            canvasEl.dataset[0, _constantsJs.generatedAttribute] = generatedFalse;
        } else {
            canvasEl = document.createElement(canvasTag);
            canvasEl.dataset[0, _constantsJs.generatedAttribute] = generatedTrue;
            domContainer.appendChild(canvasEl);
        }
    }
    const fullPercent = "100%";
    if (!canvasEl.style.width) canvasEl.style.width = fullPercent;
    if (!canvasEl.style.height) canvasEl.style.height = fullPercent;
    return canvasEl;
}, getDomContainer = (id, source)=>{
    let domContainer = source ?? document.getElementById(id);
    if (domContainer) return domContainer;
    domContainer = document.createElement("div");
    domContainer.id = id;
    domContainer.dataset[0, _constantsJs.generatedAttribute] = generatedTrue;
    document.body.append(domContainer);
    return domContainer;
};
class Engine {
    constructor(){
        this._configs = new Map();
        this._domArray = [];
        this._eventDispatcher = new (0, _eventDispatcherJs.EventDispatcher)();
        this._initialized = false;
        this.plugins = [];
        this.colorManagers = new Map();
        this.easingFunctions = new Map();
        this._initializers = {
            interactors: new Map(),
            movers: new Map(),
            updaters: new Map()
        };
        this.interactors = new Map();
        this.movers = new Map();
        this.updaters = new Map();
        this.presets = new Map();
        this.effectDrawers = new Map();
        this.shapeDrawers = new Map();
        this.pathGenerators = new Map();
    }
    get configs() {
        const res = {};
        for (const [name, config] of this._configs)res[name] = config;
        return res;
    }
    get items() {
        return this._domArray;
    }
    get version() {
        return "3.7.1";
    }
    async addColorManager(manager, refresh = true) {
        this.colorManagers.set(manager.key, manager);
        await this.refresh(refresh);
    }
    addConfig(config) {
        const key = config.key ?? config.name ?? "default";
        this._configs.set(key, config);
        this._eventDispatcher.dispatchEvent((0, _eventTypeJs.EventType).configAdded, {
            data: {
                name: key,
                config
            }
        });
    }
    async addEasing(name, easing, refresh = true) {
        if (this.getEasing(name)) return;
        this.easingFunctions.set(name, easing);
        await this.refresh(refresh);
    }
    async addEffect(effect, drawer, refresh = true) {
        (0, _utilsJs.executeOnSingleOrMultiple)(effect, (type)=>{
            if (!this.getEffectDrawer(type)) this.effectDrawers.set(type, drawer);
        });
        await this.refresh(refresh);
    }
    addEventListener(type, listener) {
        this._eventDispatcher.addEventListener(type, listener);
    }
    async addInteractor(name, interactorInitializer, refresh = true) {
        this._initializers.interactors.set(name, interactorInitializer);
        await this.refresh(refresh);
    }
    async addMover(name, moverInitializer, refresh = true) {
        this._initializers.movers.set(name, moverInitializer);
        await this.refresh(refresh);
    }
    async addParticleUpdater(name, updaterInitializer, refresh = true) {
        this._initializers.updaters.set(name, updaterInitializer);
        await this.refresh(refresh);
    }
    async addPathGenerator(name, generator, refresh = true) {
        if (!this.getPathGenerator(name)) this.pathGenerators.set(name, generator);
        await this.refresh(refresh);
    }
    async addPlugin(plugin, refresh = true) {
        if (!this.getPlugin(plugin.id)) this.plugins.push(plugin);
        await this.refresh(refresh);
    }
    async addPreset(preset, options, override = false, refresh = true) {
        if (override || !this.getPreset(preset)) this.presets.set(preset, options);
        await this.refresh(refresh);
    }
    async addShape(drawer, refresh = true) {
        for (const validType of drawer.validTypes){
            if (this.getShapeDrawer(validType)) continue;
            this.shapeDrawers.set(validType, drawer);
        }
        await this.refresh(refresh);
    }
    clearPlugins(container) {
        this.updaters.delete(container);
        this.movers.delete(container);
        this.interactors.delete(container);
    }
    dispatchEvent(type, args) {
        this._eventDispatcher.dispatchEvent(type, args);
    }
    dom() {
        return this.items;
    }
    domItem(index) {
        return this.item(index);
    }
    async getAvailablePlugins(container) {
        const res = new Map();
        for (const plugin of this.plugins)if (plugin.needsPlugin(container.actualOptions)) res.set(plugin.id, await plugin.getPlugin(container));
        return res;
    }
    getEasing(name) {
        return this.easingFunctions.get(name) ?? ((value)=>value);
    }
    getEffectDrawer(type) {
        return this.effectDrawers.get(type);
    }
    async getInteractors(container, force = false) {
        return getItemsFromInitializer(container, this.interactors, this._initializers.interactors, force);
    }
    async getMovers(container, force = false) {
        return getItemsFromInitializer(container, this.movers, this._initializers.movers, force);
    }
    getPathGenerator(type) {
        return this.pathGenerators.get(type);
    }
    getPlugin(plugin) {
        return this.plugins.find((t)=>t.id === plugin);
    }
    getPreset(preset) {
        return this.presets.get(preset);
    }
    getShapeDrawer(type) {
        return this.shapeDrawers.get(type);
    }
    getSupportedEffects() {
        return this.effectDrawers.keys();
    }
    getSupportedShapes() {
        return this.shapeDrawers.keys();
    }
    async getUpdaters(container, force = false) {
        return getItemsFromInitializer(container, this.updaters, this._initializers.updaters, force);
    }
    init() {
        if (this._initialized) return;
        this._initialized = true;
    }
    item(index) {
        const { items } = this, item = items[index];
        if (!item || item.destroyed) {
            const deleteCount = 1;
            items.splice(index, deleteCount);
            return;
        }
        return item;
    }
    async load(params) {
        const randomFactor = 10000, id = params.id ?? params.element?.id ?? `tsparticles${Math.floor((0, _numberUtilsJs.getRandom)() * randomFactor)}`, { index, url } = params, options = url ? await getDataFromUrl({
            fallback: params.options,
            url,
            index
        }) : params.options;
        const currentOptions = (0, _utilsJs.itemFromSingleOrMultiple)(options, index), { items } = this, oldIndex = items.findIndex((v)=>v.id.description === id), minIndex = 0, newItem = new (0, _containerJs.Container)(this, id, currentOptions);
        if (oldIndex >= minIndex) {
            const old = this.item(oldIndex), one = 1, none = 0, deleteCount = old ? one : none;
            if (old && !old.destroyed) old.destroy(false);
            items.splice(oldIndex, deleteCount, newItem);
        } else items.push(newItem);
        const domContainer = getDomContainer(id, params.element), canvasEl = getCanvasFromContainer(domContainer);
        newItem.canvas.loadCanvas(canvasEl);
        await newItem.start();
        return newItem;
    }
    loadOptions(options, sourceOptions) {
        this.plugins.forEach((plugin)=>plugin.loadOptions?.(options, sourceOptions));
    }
    loadParticlesOptions(container, options, ...sourceOptions) {
        const updaters = this.updaters.get(container);
        if (!updaters) return;
        updaters.forEach((updater)=>updater.loadOptions?.(options, ...sourceOptions));
    }
    async refresh(refresh = true) {
        if (!refresh) return;
        await Promise.all(this.items.map((t)=>t.refresh()));
    }
    removeEventListener(type, listener) {
        this._eventDispatcher.removeEventListener(type, listener);
    }
    setOnClickHandler(callback) {
        const { items } = this;
        if (!items.length) throw new Error(`${(0, _constantsJs.errorPrefix)} can only set click handlers after calling tsParticles.load()`);
        items.forEach((item)=>item.addClickHandler(callback));
    }
}

},{"./Utils/Constants.js":"9fra9","../Utils/Utils.js":"17M4n","./Container.js":"4i0Qd","../Utils/EventDispatcher.js":"hW0hi","../Enums/Types/EventType.js":"hWRHD","../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9fra9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "generatedAttribute", ()=>generatedAttribute);
parcelHelpers.export(exports, "mouseDownEvent", ()=>mouseDownEvent);
parcelHelpers.export(exports, "mouseUpEvent", ()=>mouseUpEvent);
parcelHelpers.export(exports, "mouseLeaveEvent", ()=>mouseLeaveEvent);
parcelHelpers.export(exports, "mouseOutEvent", ()=>mouseOutEvent);
parcelHelpers.export(exports, "mouseMoveEvent", ()=>mouseMoveEvent);
parcelHelpers.export(exports, "touchStartEvent", ()=>touchStartEvent);
parcelHelpers.export(exports, "touchEndEvent", ()=>touchEndEvent);
parcelHelpers.export(exports, "touchMoveEvent", ()=>touchMoveEvent);
parcelHelpers.export(exports, "touchCancelEvent", ()=>touchCancelEvent);
parcelHelpers.export(exports, "resizeEvent", ()=>resizeEvent);
parcelHelpers.export(exports, "visibilityChangeEvent", ()=>visibilityChangeEvent);
parcelHelpers.export(exports, "errorPrefix", ()=>errorPrefix);
parcelHelpers.export(exports, "percentDenominator", ()=>percentDenominator);
parcelHelpers.export(exports, "halfRandom", ()=>halfRandom);
parcelHelpers.export(exports, "millisecondsToSeconds", ()=>millisecondsToSeconds);
const generatedAttribute = "generated";
const mouseDownEvent = "pointerdown";
const mouseUpEvent = "pointerup";
const mouseLeaveEvent = "pointerleave";
const mouseOutEvent = "pointerout";
const mouseMoveEvent = "pointermove";
const touchStartEvent = "touchstart";
const touchEndEvent = "touchend";
const touchMoveEvent = "touchmove";
const touchCancelEvent = "touchcancel";
const resizeEvent = "resize";
const visibilityChangeEvent = "visibilitychange";
const errorPrefix = "tsParticles - Error";
const percentDenominator = 100;
const halfRandom = 0.5;
const millisecondsToSeconds = 1000;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"17M4n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setLogger", ()=>setLogger);
parcelHelpers.export(exports, "getLogger", ()=>getLogger);
parcelHelpers.export(exports, "isSsr", ()=>isSsr);
parcelHelpers.export(exports, "hasMatchMedia", ()=>hasMatchMedia);
parcelHelpers.export(exports, "safeMatchMedia", ()=>safeMatchMedia);
parcelHelpers.export(exports, "safeIntersectionObserver", ()=>safeIntersectionObserver);
parcelHelpers.export(exports, "safeMutationObserver", ()=>safeMutationObserver);
parcelHelpers.export(exports, "isInArray", ()=>isInArray);
parcelHelpers.export(exports, "loadFont", ()=>loadFont);
parcelHelpers.export(exports, "arrayRandomIndex", ()=>arrayRandomIndex);
parcelHelpers.export(exports, "itemFromArray", ()=>itemFromArray);
parcelHelpers.export(exports, "isPointInside", ()=>isPointInside);
parcelHelpers.export(exports, "areBoundsInside", ()=>areBoundsInside);
parcelHelpers.export(exports, "calculateBounds", ()=>calculateBounds);
parcelHelpers.export(exports, "deepExtend", ()=>deepExtend);
parcelHelpers.export(exports, "isDivModeEnabled", ()=>isDivModeEnabled);
parcelHelpers.export(exports, "divModeExecute", ()=>divModeExecute);
parcelHelpers.export(exports, "singleDivModeExecute", ()=>singleDivModeExecute);
parcelHelpers.export(exports, "divMode", ()=>divMode);
parcelHelpers.export(exports, "circleBounceDataFromParticle", ()=>circleBounceDataFromParticle);
parcelHelpers.export(exports, "circleBounce", ()=>circleBounce);
parcelHelpers.export(exports, "rectBounce", ()=>rectBounce);
parcelHelpers.export(exports, "executeOnSingleOrMultiple", ()=>executeOnSingleOrMultiple);
parcelHelpers.export(exports, "itemFromSingleOrMultiple", ()=>itemFromSingleOrMultiple);
parcelHelpers.export(exports, "findItemFromSingleOrMultiple", ()=>findItemFromSingleOrMultiple);
parcelHelpers.export(exports, "initParticleNumericAnimationValue", ()=>initParticleNumericAnimationValue);
parcelHelpers.export(exports, "getPosition", ()=>getPosition);
parcelHelpers.export(exports, "getSize", ()=>getSize);
parcelHelpers.export(exports, "updateAnimation", ()=>updateAnimation);
parcelHelpers.export(exports, "assertValidVersion", ()=>assertValidVersion);
var _numberUtilsJs = require("./NumberUtils.js");
var _constantsJs = require("../Core/Utils/Constants.js");
var _typeUtilsJs = require("./TypeUtils.js");
var _animationModeJs = require("../Enums/Modes/AnimationMode.js");
var _animationStatusJs = require("../Enums/AnimationStatus.js");
var _destroyTypeJs = require("../Enums/Types/DestroyType.js");
var _outModeDirectionJs = require("../Enums/Directions/OutModeDirection.js");
var _pixelModeJs = require("../Enums/Modes/PixelMode.js");
var _startValueTypeJs = require("../Enums/Types/StartValueType.js");
var _vectorsJs = require("../Core/Utils/Vectors.js");
const _logger = {
    debug: console.debug,
    error: console.error,
    info: console.info,
    log: console.log,
    verbose: console.log,
    warning: console.warn
};
function setLogger(logger) {
    _logger.debug = logger.debug || _logger.debug;
    _logger.error = logger.error || _logger.error;
    _logger.info = logger.info || _logger.info;
    _logger.log = logger.log || _logger.log;
    _logger.verbose = logger.verbose || _logger.verbose;
    _logger.warning = logger.warning || _logger.warning;
}
function getLogger() {
    return _logger;
}
function rectSideBounce(data) {
    const res = {
        bounced: false
    }, { pSide, pOtherSide, rectSide, rectOtherSide, velocity, factor } = data, half = 0.5, minVelocity = 0;
    if (pOtherSide.min < rectOtherSide.min || pOtherSide.min > rectOtherSide.max || pOtherSide.max < rectOtherSide.min || pOtherSide.max > rectOtherSide.max) return res;
    if (pSide.max >= rectSide.min && pSide.max <= (rectSide.max + rectSide.min) * half && velocity > minVelocity || pSide.min <= rectSide.max && pSide.min > (rectSide.max + rectSide.min) * half && velocity < minVelocity) {
        res.velocity = velocity * -factor;
        res.bounced = true;
    }
    return res;
}
function checkSelector(element, selectors) {
    const res = executeOnSingleOrMultiple(selectors, (selector)=>{
        return element.matches(selector);
    });
    return (0, _typeUtilsJs.isArray)(res) ? res.some((t)=>t) : res;
}
function isSsr() {
    return typeof window === "undefined" || !window || typeof window.document === "undefined" || !window.document;
}
function hasMatchMedia() {
    return !isSsr() && typeof matchMedia !== "undefined";
}
function safeMatchMedia(query) {
    if (!hasMatchMedia()) return;
    return matchMedia(query);
}
function safeIntersectionObserver(callback) {
    if (isSsr() || typeof IntersectionObserver === "undefined") return;
    return new IntersectionObserver(callback);
}
function safeMutationObserver(callback) {
    if (isSsr() || typeof MutationObserver === "undefined") return;
    return new MutationObserver(callback);
}
function isInArray(value, array) {
    const invalidIndex = -1;
    return value === array || (0, _typeUtilsJs.isArray)(array) && array.indexOf(value) > invalidIndex;
}
async function loadFont(font, weight) {
    try {
        await document.fonts.load(`${weight ?? "400"} 36px '${font ?? "Verdana"}'`);
    } catch  {}
}
function arrayRandomIndex(array) {
    return Math.floor((0, _numberUtilsJs.getRandom)() * array.length);
}
function itemFromArray(array, index, useIndex = true) {
    return array[index !== undefined && useIndex ? index % array.length : arrayRandomIndex(array)];
}
function isPointInside(point, size, offset, radius, direction) {
    const minRadius = 0;
    return areBoundsInside(calculateBounds(point, radius ?? minRadius), size, offset, direction);
}
function areBoundsInside(bounds, size, offset, direction) {
    let inside = true;
    if (!direction || direction === (0, _outModeDirectionJs.OutModeDirection).bottom) inside = bounds.top < size.height + offset.x;
    if (inside && (!direction || direction === (0, _outModeDirectionJs.OutModeDirection).left)) inside = bounds.right > offset.x;
    if (inside && (!direction || direction === (0, _outModeDirectionJs.OutModeDirection).right)) inside = bounds.left < size.width + offset.y;
    if (inside && (!direction || direction === (0, _outModeDirectionJs.OutModeDirection).top)) inside = bounds.bottom > offset.y;
    return inside;
}
function calculateBounds(point, radius) {
    return {
        bottom: point.y + radius,
        left: point.x - radius,
        right: point.x + radius,
        top: point.y - radius
    };
}
function deepExtend(destination, ...sources) {
    for (const source of sources){
        if (source === undefined || source === null) continue;
        if (!(0, _typeUtilsJs.isObject)(source)) {
            destination = source;
            continue;
        }
        const sourceIsArray = Array.isArray(source);
        if (sourceIsArray && ((0, _typeUtilsJs.isObject)(destination) || !destination || !Array.isArray(destination))) destination = [];
        else if (!sourceIsArray && ((0, _typeUtilsJs.isObject)(destination) || !destination || Array.isArray(destination))) destination = {};
        for(const key in source){
            if (key === "__proto__") continue;
            const sourceDict = source, value = sourceDict[key], destDict = destination;
            destDict[key] = (0, _typeUtilsJs.isObject)(value) && Array.isArray(value) ? value.map((v)=>deepExtend(destDict[key], v)) : deepExtend(destDict[key], value);
        }
    }
    return destination;
}
function isDivModeEnabled(mode, divs) {
    return !!findItemFromSingleOrMultiple(divs, (t)=>t.enable && isInArray(mode, t.mode));
}
function divModeExecute(mode, divs, callback) {
    executeOnSingleOrMultiple(divs, (div)=>{
        const divMode = div.mode, divEnabled = div.enable;
        if (divEnabled && isInArray(mode, divMode)) singleDivModeExecute(div, callback);
    });
}
function singleDivModeExecute(div, callback) {
    const selectors = div.selectors;
    executeOnSingleOrMultiple(selectors, (selector)=>{
        callback(selector, div);
    });
}
function divMode(divs, element) {
    if (!element || !divs) return;
    return findItemFromSingleOrMultiple(divs, (div)=>{
        return checkSelector(element, div.selectors);
    });
}
function circleBounceDataFromParticle(p) {
    return {
        position: p.getPosition(),
        radius: p.getRadius(),
        mass: p.getMass(),
        velocity: p.velocity,
        factor: (0, _vectorsJs.Vector).create((0, _numberUtilsJs.getRangeValue)(p.options.bounce.horizontal.value), (0, _numberUtilsJs.getRangeValue)(p.options.bounce.vertical.value))
    };
}
function circleBounce(p1, p2) {
    const { x: xVelocityDiff, y: yVelocityDiff } = p1.velocity.sub(p2.velocity), [pos1, pos2] = [
        p1.position,
        p2.position
    ], { dx: xDist, dy: yDist } = (0, _numberUtilsJs.getDistances)(pos2, pos1), minimumDistance = 0;
    if (xVelocityDiff * xDist + yVelocityDiff * yDist < minimumDistance) return;
    const angle = -Math.atan2(yDist, xDist), m1 = p1.mass, m2 = p2.mass, u1 = p1.velocity.rotate(angle), u2 = p2.velocity.rotate(angle), v1 = (0, _numberUtilsJs.collisionVelocity)(u1, u2, m1, m2), v2 = (0, _numberUtilsJs.collisionVelocity)(u2, u1, m1, m2), vFinal1 = v1.rotate(-angle), vFinal2 = v2.rotate(-angle);
    p1.velocity.x = vFinal1.x * p1.factor.x;
    p1.velocity.y = vFinal1.y * p1.factor.y;
    p2.velocity.x = vFinal2.x * p2.factor.x;
    p2.velocity.y = vFinal2.y * p2.factor.y;
}
function rectBounce(particle, divBounds) {
    const pPos = particle.getPosition(), size = particle.getRadius(), bounds = calculateBounds(pPos, size), bounceOptions = particle.options.bounce, resH = rectSideBounce({
        pSide: {
            min: bounds.left,
            max: bounds.right
        },
        pOtherSide: {
            min: bounds.top,
            max: bounds.bottom
        },
        rectSide: {
            min: divBounds.left,
            max: divBounds.right
        },
        rectOtherSide: {
            min: divBounds.top,
            max: divBounds.bottom
        },
        velocity: particle.velocity.x,
        factor: (0, _numberUtilsJs.getRangeValue)(bounceOptions.horizontal.value)
    });
    if (resH.bounced) {
        if (resH.velocity !== undefined) particle.velocity.x = resH.velocity;
        if (resH.position !== undefined) particle.position.x = resH.position;
    }
    const resV = rectSideBounce({
        pSide: {
            min: bounds.top,
            max: bounds.bottom
        },
        pOtherSide: {
            min: bounds.left,
            max: bounds.right
        },
        rectSide: {
            min: divBounds.top,
            max: divBounds.bottom
        },
        rectOtherSide: {
            min: divBounds.left,
            max: divBounds.right
        },
        velocity: particle.velocity.y,
        factor: (0, _numberUtilsJs.getRangeValue)(bounceOptions.vertical.value)
    });
    if (resV.bounced) {
        if (resV.velocity !== undefined) particle.velocity.y = resV.velocity;
        if (resV.position !== undefined) particle.position.y = resV.position;
    }
}
function executeOnSingleOrMultiple(obj, callback) {
    const defaultIndex = 0;
    return (0, _typeUtilsJs.isArray)(obj) ? obj.map((item, index)=>callback(item, index)) : callback(obj, defaultIndex);
}
function itemFromSingleOrMultiple(obj, index, useIndex) {
    return (0, _typeUtilsJs.isArray)(obj) ? itemFromArray(obj, index, useIndex) : obj;
}
function findItemFromSingleOrMultiple(obj, callback) {
    if ((0, _typeUtilsJs.isArray)(obj)) return obj.find((t, index)=>callback(t, index));
    const defaultIndex = 0;
    return callback(obj, defaultIndex) ? obj : undefined;
}
function initParticleNumericAnimationValue(options, pxRatio) {
    const valueRange = options.value, animationOptions = options.animation, res = {
        delayTime: (0, _numberUtilsJs.getRangeValue)(animationOptions.delay) * (0, _constantsJs.millisecondsToSeconds),
        enable: animationOptions.enable,
        value: (0, _numberUtilsJs.getRangeValue)(options.value) * pxRatio,
        max: (0, _numberUtilsJs.getRangeMax)(valueRange) * pxRatio,
        min: (0, _numberUtilsJs.getRangeMin)(valueRange) * pxRatio,
        loops: 0,
        maxLoops: (0, _numberUtilsJs.getRangeValue)(animationOptions.count),
        time: 0
    }, decayOffset = 1;
    if (animationOptions.enable) {
        res.decay = decayOffset - (0, _numberUtilsJs.getRangeValue)(animationOptions.decay);
        switch(animationOptions.mode){
            case (0, _animationModeJs.AnimationMode).increase:
                res.status = (0, _animationStatusJs.AnimationStatus).increasing;
                break;
            case (0, _animationModeJs.AnimationMode).decrease:
                res.status = (0, _animationStatusJs.AnimationStatus).decreasing;
                break;
            case (0, _animationModeJs.AnimationMode).random:
                res.status = (0, _numberUtilsJs.getRandom)() >= (0, _constantsJs.halfRandom) ? (0, _animationStatusJs.AnimationStatus).increasing : (0, _animationStatusJs.AnimationStatus).decreasing;
                break;
        }
        const autoStatus = animationOptions.mode === (0, _animationModeJs.AnimationMode).auto;
        switch(animationOptions.startValue){
            case (0, _startValueTypeJs.StartValueType).min:
                res.value = res.min;
                if (autoStatus) res.status = (0, _animationStatusJs.AnimationStatus).increasing;
                break;
            case (0, _startValueTypeJs.StartValueType).max:
                res.value = res.max;
                if (autoStatus) res.status = (0, _animationStatusJs.AnimationStatus).decreasing;
                break;
            case (0, _startValueTypeJs.StartValueType).random:
            default:
                res.value = (0, _numberUtilsJs.randomInRange)(res);
                if (autoStatus) res.status = (0, _numberUtilsJs.getRandom)() >= (0, _constantsJs.halfRandom) ? (0, _animationStatusJs.AnimationStatus).increasing : (0, _animationStatusJs.AnimationStatus).decreasing;
                break;
        }
    }
    res.initialValue = res.value;
    return res;
}
function getPositionOrSize(positionOrSize, canvasSize) {
    const isPercent = positionOrSize.mode === (0, _pixelModeJs.PixelMode).percent;
    if (!isPercent) {
        const { mode: _, ...rest } = positionOrSize;
        return rest;
    }
    const isPosition = "x" in positionOrSize;
    if (isPosition) return {
        x: positionOrSize.x / (0, _constantsJs.percentDenominator) * canvasSize.width,
        y: positionOrSize.y / (0, _constantsJs.percentDenominator) * canvasSize.height
    };
    else return {
        width: positionOrSize.width / (0, _constantsJs.percentDenominator) * canvasSize.width,
        height: positionOrSize.height / (0, _constantsJs.percentDenominator) * canvasSize.height
    };
}
function getPosition(position, canvasSize) {
    return getPositionOrSize(position, canvasSize);
}
function getSize(size, canvasSize) {
    return getPositionOrSize(size, canvasSize);
}
function checkDestroy(particle, destroyType, value, minValue, maxValue) {
    switch(destroyType){
        case (0, _destroyTypeJs.DestroyType).max:
            if (value >= maxValue) particle.destroy();
            break;
        case (0, _destroyTypeJs.DestroyType).min:
            if (value <= minValue) particle.destroy();
            break;
    }
}
function updateAnimation(particle, data, changeDirection, destroyType, delta) {
    const minLoops = 0, minDelay = 0, identity = 1, minVelocity = 0, minDecay = 1;
    if (particle.destroyed || !data || !data.enable || (data.maxLoops ?? minLoops) > minLoops && (data.loops ?? minLoops) > (data.maxLoops ?? minLoops)) return;
    const velocity = (data.velocity ?? minVelocity) * delta.factor, minValue = data.min, maxValue = data.max, decay = data.decay ?? minDecay;
    if (!data.time) data.time = 0;
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) data.time += delta.value;
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) return;
    switch(data.status){
        case (0, _animationStatusJs.AnimationStatus).increasing:
            if (data.value >= maxValue) {
                if (changeDirection) data.status = (0, _animationStatusJs.AnimationStatus).decreasing;
                else data.value -= maxValue;
                if (!data.loops) data.loops = minLoops;
                data.loops++;
            } else data.value += velocity;
            break;
        case (0, _animationStatusJs.AnimationStatus).decreasing:
            if (data.value <= minValue) {
                if (changeDirection) data.status = (0, _animationStatusJs.AnimationStatus).increasing;
                else data.value += maxValue;
                if (!data.loops) data.loops = minLoops;
                data.loops++;
            } else data.value -= velocity;
    }
    if (data.velocity && decay !== identity) data.velocity *= decay;
    checkDestroy(particle, destroyType, data.value, minValue, maxValue);
    if (!particle.destroyed) data.value = (0, _numberUtilsJs.clamp)(data.value, minValue, maxValue);
}
function assertValidVersion(engine, pluginVersion) {
    if (engine.version === pluginVersion) return;
    throw new Error(`The tsParticles version is different from the loaded plugins version. Engine version: ${engine.version}. Plugins version: ${pluginVersion}`);
}

},{"./NumberUtils.js":"c9eVN","../Core/Utils/Constants.js":"9fra9","./TypeUtils.js":"bKVoo","../Enums/Modes/AnimationMode.js":"05e6W","../Enums/AnimationStatus.js":"fxAp8","../Enums/Types/DestroyType.js":"dQDgD","../Enums/Directions/OutModeDirection.js":"aOdoD","../Enums/Modes/PixelMode.js":"cCDKl","../Enums/Types/StartValueType.js":"9v8mk","../Core/Utils/Vectors.js":"3N0C5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9eVN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "setRandom", ()=>setRandom);
parcelHelpers.export(exports, "getRandom", ()=>getRandom);
parcelHelpers.export(exports, "setAnimationFunctions", ()=>setAnimationFunctions);
parcelHelpers.export(exports, "animate", ()=>animate);
parcelHelpers.export(exports, "cancelAnimation", ()=>cancelAnimation);
parcelHelpers.export(exports, "clamp", ()=>clamp);
parcelHelpers.export(exports, "mix", ()=>mix);
parcelHelpers.export(exports, "randomInRange", ()=>randomInRange);
parcelHelpers.export(exports, "getRangeValue", ()=>getRangeValue);
parcelHelpers.export(exports, "getRangeMin", ()=>getRangeMin);
parcelHelpers.export(exports, "getRangeMax", ()=>getRangeMax);
parcelHelpers.export(exports, "setRangeValue", ()=>setRangeValue);
parcelHelpers.export(exports, "getDistances", ()=>getDistances);
parcelHelpers.export(exports, "getDistance", ()=>getDistance);
parcelHelpers.export(exports, "degToRad", ()=>degToRad);
parcelHelpers.export(exports, "getParticleDirectionAngle", ()=>getParticleDirectionAngle);
parcelHelpers.export(exports, "getParticleBaseVelocity", ()=>getParticleBaseVelocity);
parcelHelpers.export(exports, "collisionVelocity", ()=>collisionVelocity);
parcelHelpers.export(exports, "calcPositionFromSize", ()=>calcPositionFromSize);
parcelHelpers.export(exports, "calcPositionOrRandomFromSize", ()=>calcPositionOrRandomFromSize);
parcelHelpers.export(exports, "calcPositionOrRandomFromSizeRanged", ()=>calcPositionOrRandomFromSizeRanged);
parcelHelpers.export(exports, "calcExactPositionOrRandomFromSize", ()=>calcExactPositionOrRandomFromSize);
parcelHelpers.export(exports, "calcExactPositionOrRandomFromSizeRanged", ()=>calcExactPositionOrRandomFromSizeRanged);
parcelHelpers.export(exports, "parseAlpha", ()=>parseAlpha);
var _moveDirectionJs = require("../Enums/Directions/MoveDirection.js");
var _vectorsJs = require("../Core/Utils/Vectors.js");
var _typeUtilsJs = require("./TypeUtils.js");
var _constantsJs = require("../Core/Utils/Constants.js");
let _random = Math.random;
const _animationLoop = {
    nextFrame: (cb)=>requestAnimationFrame(cb),
    cancel: (idx)=>cancelAnimationFrame(idx)
}, double = 2, doublePI = Math.PI * double;
function setRandom(rnd = Math.random) {
    _random = rnd;
}
function getRandom() {
    const min = 0, max = 1;
    return clamp(_random(), min, max - Number.EPSILON);
}
function setAnimationFunctions(nextFrame, cancel) {
    _animationLoop.nextFrame = (callback)=>nextFrame(callback);
    _animationLoop.cancel = (handle)=>cancel(handle);
}
function animate(fn) {
    return _animationLoop.nextFrame(fn);
}
function cancelAnimation(handle) {
    _animationLoop.cancel(handle);
}
function clamp(num, min, max) {
    return Math.min(Math.max(num, min), max);
}
function mix(comp1, comp2, weight1, weight2) {
    return Math.floor((comp1 * weight1 + comp2 * weight2) / (weight1 + weight2));
}
function randomInRange(r) {
    const max = getRangeMax(r), minOffset = 0;
    let min = getRangeMin(r);
    if (max === min) min = minOffset;
    return getRandom() * (max - min) + min;
}
function getRangeValue(value) {
    return (0, _typeUtilsJs.isNumber)(value) ? value : randomInRange(value);
}
function getRangeMin(value) {
    return (0, _typeUtilsJs.isNumber)(value) ? value : value.min;
}
function getRangeMax(value) {
    return (0, _typeUtilsJs.isNumber)(value) ? value : value.max;
}
function setRangeValue(source, value) {
    if (source === value || value === undefined && (0, _typeUtilsJs.isNumber)(source)) return source;
    const min = getRangeMin(source), max = getRangeMax(source);
    return value !== undefined ? {
        min: Math.min(min, value),
        max: Math.max(max, value)
    } : setRangeValue(min, max);
}
function getDistances(pointA, pointB) {
    const dx = pointA.x - pointB.x, dy = pointA.y - pointB.y, squareExp = 2;
    return {
        dx: dx,
        dy: dy,
        distance: Math.sqrt(dx ** squareExp + dy ** squareExp)
    };
}
function getDistance(pointA, pointB) {
    return getDistances(pointA, pointB).distance;
}
function degToRad(degrees) {
    const PIDeg = 180;
    return degrees * Math.PI / PIDeg;
}
function getParticleDirectionAngle(direction, position, center) {
    if ((0, _typeUtilsJs.isNumber)(direction)) return degToRad(direction);
    const empty = 0, half = 0.5, quarter = 0.25, threeQuarter = half + quarter;
    switch(direction){
        case (0, _moveDirectionJs.MoveDirection).top:
            return -Math.PI * half;
        case (0, _moveDirectionJs.MoveDirection).topRight:
            return -Math.PI * quarter;
        case (0, _moveDirectionJs.MoveDirection).right:
            return empty;
        case (0, _moveDirectionJs.MoveDirection).bottomRight:
            return Math.PI * quarter;
        case (0, _moveDirectionJs.MoveDirection).bottom:
            return Math.PI * half;
        case (0, _moveDirectionJs.MoveDirection).bottomLeft:
            return Math.PI * threeQuarter;
        case (0, _moveDirectionJs.MoveDirection).left:
            return Math.PI;
        case (0, _moveDirectionJs.MoveDirection).topLeft:
            return -Math.PI * threeQuarter;
        case (0, _moveDirectionJs.MoveDirection).inside:
            return Math.atan2(center.y - position.y, center.x - position.x);
        case (0, _moveDirectionJs.MoveDirection).outside:
            return Math.atan2(position.y - center.y, position.x - center.x);
        default:
            return getRandom() * doublePI;
    }
}
function getParticleBaseVelocity(direction) {
    const baseVelocity = (0, _vectorsJs.Vector).origin;
    baseVelocity.length = 1;
    baseVelocity.angle = direction;
    return baseVelocity;
}
function collisionVelocity(v1, v2, m1, m2) {
    const double = 2;
    return (0, _vectorsJs.Vector).create(v1.x * (m1 - m2) / (m1 + m2) + v2.x * double * m2 / (m1 + m2), v1.y);
}
function calcPositionFromSize(data) {
    return data.position?.x !== undefined && data.position.y !== undefined ? {
        x: data.position.x * data.size.width / (0, _constantsJs.percentDenominator),
        y: data.position.y * data.size.height / (0, _constantsJs.percentDenominator)
    } : undefined;
}
function calcPositionOrRandomFromSize(data) {
    return {
        x: (data.position?.x ?? getRandom() * (0, _constantsJs.percentDenominator)) * data.size.width / (0, _constantsJs.percentDenominator),
        y: (data.position?.y ?? getRandom() * (0, _constantsJs.percentDenominator)) * data.size.height / (0, _constantsJs.percentDenominator)
    };
}
function calcPositionOrRandomFromSizeRanged(data) {
    const position = {
        x: data.position?.x !== undefined ? getRangeValue(data.position.x) : undefined,
        y: data.position?.y !== undefined ? getRangeValue(data.position.y) : undefined
    };
    return calcPositionOrRandomFromSize({
        size: data.size,
        position
    });
}
function calcExactPositionOrRandomFromSize(data) {
    return {
        x: data.position?.x ?? getRandom() * data.size.width,
        y: data.position?.y ?? getRandom() * data.size.height
    };
}
function calcExactPositionOrRandomFromSizeRanged(data) {
    const position = {
        x: data.position?.x !== undefined ? getRangeValue(data.position.x) : undefined,
        y: data.position?.y !== undefined ? getRangeValue(data.position.y) : undefined
    };
    return calcExactPositionOrRandomFromSize({
        size: data.size,
        position
    });
}
function parseAlpha(input) {
    const defaultAlpha = 1;
    if (!input) return defaultAlpha;
    return input.endsWith("%") ? parseFloat(input) / (0, _constantsJs.percentDenominator) : parseFloat(input);
}

},{"../Enums/Directions/MoveDirection.js":"3qscp","../Core/Utils/Vectors.js":"3N0C5","./TypeUtils.js":"bKVoo","../Core/Utils/Constants.js":"9fra9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3qscp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MoveDirection", ()=>MoveDirection);
var MoveDirection;
(function(MoveDirection) {
    MoveDirection["bottom"] = "bottom";
    MoveDirection["bottomLeft"] = "bottom-left";
    MoveDirection["bottomRight"] = "bottom-right";
    MoveDirection["left"] = "left";
    MoveDirection["none"] = "none";
    MoveDirection["right"] = "right";
    MoveDirection["top"] = "top";
    MoveDirection["topLeft"] = "top-left";
    MoveDirection["topRight"] = "top-right";
    MoveDirection["outside"] = "outside";
    MoveDirection["inside"] = "inside";
})(MoveDirection || (MoveDirection = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3N0C5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Vector3d", ()=>Vector3d);
parcelHelpers.export(exports, "Vector", ()=>Vector);
var _constantsJs = require("./Constants.js");
var _typeUtilsJs = require("../../Utils/TypeUtils.js");
const origin = {
    x: 0,
    y: 0,
    z: 0
}, squareExp = 2, inverseFactorNumerator = 1.0;
class Vector3d {
    constructor(xOrCoords, y, z){
        this._updateFromAngle = (angle, length)=>{
            this.x = Math.cos(angle) * length;
            this.y = Math.sin(angle) * length;
        };
        if (!(0, _typeUtilsJs.isNumber)(xOrCoords) && xOrCoords) {
            this.x = xOrCoords.x;
            this.y = xOrCoords.y;
            const coords3d = xOrCoords;
            this.z = coords3d.z ? coords3d.z : origin.z;
        } else if (xOrCoords !== undefined && y !== undefined) {
            this.x = xOrCoords;
            this.y = y;
            this.z = z ?? origin.z;
        } else throw new Error(`${(0, _constantsJs.errorPrefix)} Vector3d not initialized correctly`);
    }
    static get origin() {
        return Vector3d.create(origin.x, origin.y, origin.z);
    }
    get angle() {
        return Math.atan2(this.y, this.x);
    }
    set angle(angle) {
        this._updateFromAngle(angle, this.length);
    }
    get length() {
        return Math.sqrt(this.getLengthSq());
    }
    set length(length) {
        this._updateFromAngle(this.angle, length);
    }
    static clone(source) {
        return Vector3d.create(source.x, source.y, source.z);
    }
    static create(x, y, z) {
        return new Vector3d(x, y, z);
    }
    add(v) {
        return Vector3d.create(this.x + v.x, this.y + v.y, this.z + v.z);
    }
    addTo(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }
    copy() {
        return Vector3d.clone(this);
    }
    distanceTo(v) {
        return this.sub(v).length;
    }
    distanceToSq(v) {
        return this.sub(v).getLengthSq();
    }
    div(n) {
        return Vector3d.create(this.x / n, this.y / n, this.z / n);
    }
    divTo(n) {
        this.x /= n;
        this.y /= n;
        this.z /= n;
    }
    getLengthSq() {
        return this.x ** squareExp + this.y ** squareExp;
    }
    mult(n) {
        return Vector3d.create(this.x * n, this.y * n, this.z * n);
    }
    multTo(n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
    }
    normalize() {
        const length = this.length, noLength = 0;
        if (length != noLength) this.multTo(inverseFactorNumerator / length);
    }
    rotate(angle) {
        return Vector3d.create(this.x * Math.cos(angle) - this.y * Math.sin(angle), this.x * Math.sin(angle) + this.y * Math.cos(angle), origin.z);
    }
    setTo(c) {
        this.x = c.x;
        this.y = c.y;
        const v3d = c;
        this.z = v3d.z ? v3d.z : origin.z;
    }
    sub(v) {
        return Vector3d.create(this.x - v.x, this.y - v.y, this.z - v.z);
    }
    subFrom(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }
}
class Vector extends Vector3d {
    constructor(xOrCoords, y){
        super(xOrCoords, y, origin.z);
    }
    static get origin() {
        return Vector.create(origin.x, origin.y);
    }
    static clone(source) {
        return Vector.create(source.x, source.y);
    }
    static create(x, y) {
        return new Vector(x, y);
    }
}

},{"./Constants.js":"9fra9","../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bKVoo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isBoolean", ()=>isBoolean);
parcelHelpers.export(exports, "isString", ()=>isString);
parcelHelpers.export(exports, "isNumber", ()=>isNumber);
parcelHelpers.export(exports, "isFunction", ()=>isFunction);
parcelHelpers.export(exports, "isObject", ()=>isObject);
parcelHelpers.export(exports, "isArray", ()=>isArray);
parcelHelpers.export(exports, "isNull", ()=>isNull);
function isBoolean(arg) {
    return typeof arg === "boolean";
}
function isString(arg) {
    return typeof arg === "string";
}
function isNumber(arg) {
    return typeof arg === "number";
}
function isFunction(arg) {
    return typeof arg === "function";
}
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
function isArray(arg) {
    return Array.isArray(arg);
}
function isNull(arg) {
    return arg === null || arg === undefined;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"05e6W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimationMode", ()=>AnimationMode);
var AnimationMode;
(function(AnimationMode) {
    AnimationMode["auto"] = "auto";
    AnimationMode["increase"] = "increase";
    AnimationMode["decrease"] = "decrease";
    AnimationMode["random"] = "random";
})(AnimationMode || (AnimationMode = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fxAp8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimationStatus", ()=>AnimationStatus);
var AnimationStatus;
(function(AnimationStatus) {
    AnimationStatus["increasing"] = "increasing";
    AnimationStatus["decreasing"] = "decreasing";
})(AnimationStatus || (AnimationStatus = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dQDgD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DestroyType", ()=>DestroyType);
var DestroyType;
(function(DestroyType) {
    DestroyType["none"] = "none";
    DestroyType["max"] = "max";
    DestroyType["min"] = "min";
})(DestroyType || (DestroyType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aOdoD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OutModeDirection", ()=>OutModeDirection);
var OutModeDirection;
(function(OutModeDirection) {
    OutModeDirection["bottom"] = "bottom";
    OutModeDirection["left"] = "left";
    OutModeDirection["right"] = "right";
    OutModeDirection["top"] = "top";
})(OutModeDirection || (OutModeDirection = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCDKl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PixelMode", ()=>PixelMode);
var PixelMode;
(function(PixelMode) {
    PixelMode["precise"] = "precise";
    PixelMode["percent"] = "percent";
})(PixelMode || (PixelMode = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9v8mk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StartValueType", ()=>StartValueType);
var StartValueType;
(function(StartValueType) {
    StartValueType["max"] = "max";
    StartValueType["min"] = "min";
    StartValueType["random"] = "random";
})(StartValueType || (StartValueType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4i0Qd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Container", ()=>Container);
var _numberUtilsJs = require("../Utils/NumberUtils.js");
var _constantsJs = require("./Utils/Constants.js");
var _utilsJs = require("../Utils/Utils.js");
var _canvasJs = require("./Canvas.js");
var _eventListenersJs = require("./Utils/EventListeners.js");
var _eventTypeJs = require("../Enums/Types/EventType.js");
var _optionsJs = require("../Options/Classes/Options.js");
var _particlesJs = require("./Particles.js");
var _retinaJs = require("./Retina.js");
var _optionsUtilsJs = require("../Utils/OptionsUtils.js");
function guardCheck(container) {
    return container && !container.destroyed;
}
const defaultFps = 60;
function initDelta(value, fpsLimit = defaultFps, smooth = false) {
    return {
        value,
        factor: smooth ? defaultFps / fpsLimit : defaultFps * value / (0, _constantsJs.millisecondsToSeconds)
    };
}
function loadContainerOptions(engine, container, ...sourceOptionsArr) {
    const options = new (0, _optionsJs.Options)(engine, container);
    (0, _optionsUtilsJs.loadOptions)(options, ...sourceOptionsArr);
    return options;
}
class Container {
    constructor(engine, id, sourceOptions){
        this._intersectionManager = (entries)=>{
            if (!guardCheck(this) || !this.actualOptions.pauseOnOutsideViewport) return;
            for (const entry of entries){
                if (entry.target !== this.interactivity.element) continue;
                if (entry.isIntersecting) this.play();
                else this.pause();
            }
        };
        this._nextFrame = (timestamp)=>{
            try {
                if (!this._smooth && this._lastFrameTime !== undefined && timestamp < this._lastFrameTime + (0, _constantsJs.millisecondsToSeconds) / this.fpsLimit) {
                    this.draw(false);
                    return;
                }
                this._lastFrameTime ??= timestamp;
                const delta = initDelta(timestamp - this._lastFrameTime, this.fpsLimit, this._smooth);
                this.addLifeTime(delta.value);
                this._lastFrameTime = timestamp;
                if (delta.value > (0, _constantsJs.millisecondsToSeconds)) {
                    this.draw(false);
                    return;
                }
                this.particles.draw(delta);
                if (!this.alive()) {
                    this.destroy();
                    return;
                }
                if (this.animationStatus) this.draw(false);
            } catch (e) {
                (0, _utilsJs.getLogger)().error(`${(0, _constantsJs.errorPrefix)} in animation loop`, e);
            }
        };
        this._engine = engine;
        this.id = Symbol(id);
        this.fpsLimit = 120;
        this._smooth = false;
        this._delay = 0;
        this._duration = 0;
        this._lifeTime = 0;
        this._firstStart = true;
        this.started = false;
        this.destroyed = false;
        this._paused = true;
        this._lastFrameTime = 0;
        this.zLayers = 100;
        this.pageHidden = false;
        this._clickHandlers = new Map();
        this._sourceOptions = sourceOptions;
        this._initialSourceOptions = sourceOptions;
        this.retina = new (0, _retinaJs.Retina)(this);
        this.canvas = new (0, _canvasJs.Canvas)(this, this._engine);
        this.particles = new (0, _particlesJs.Particles)(this._engine, this);
        this.pathGenerators = new Map();
        this.interactivity = {
            mouse: {
                clicking: false,
                inside: false
            }
        };
        this.plugins = new Map();
        this.effectDrawers = new Map();
        this.shapeDrawers = new Map();
        this._options = loadContainerOptions(this._engine, this);
        this.actualOptions = loadContainerOptions(this._engine, this);
        this._eventListeners = new (0, _eventListenersJs.EventListeners)(this);
        this._intersectionObserver = (0, _utilsJs.safeIntersectionObserver)((entries)=>this._intersectionManager(entries));
        this._engine.dispatchEvent((0, _eventTypeJs.EventType).containerBuilt, {
            container: this
        });
    }
    get animationStatus() {
        return !this._paused && !this.pageHidden && guardCheck(this);
    }
    get options() {
        return this._options;
    }
    get sourceOptions() {
        return this._sourceOptions;
    }
    addClickHandler(callback) {
        if (!guardCheck(this)) return;
        const el = this.interactivity.element;
        if (!el) return;
        const clickOrTouchHandler = (e, pos, radius)=>{
            if (!guardCheck(this)) return;
            const pxRatio = this.retina.pixelRatio, posRetina = {
                x: pos.x * pxRatio,
                y: pos.y * pxRatio
            }, particles = this.particles.quadTree.queryCircle(posRetina, radius * pxRatio);
            callback(e, particles);
        }, clickHandler = (e)=>{
            if (!guardCheck(this)) return;
            const mouseEvent = e, pos = {
                x: mouseEvent.offsetX || mouseEvent.clientX,
                y: mouseEvent.offsetY || mouseEvent.clientY
            }, radius = 1;
            clickOrTouchHandler(e, pos, radius);
        }, touchStartHandler = ()=>{
            if (!guardCheck(this)) return;
            touched = true;
            touchMoved = false;
        }, touchMoveHandler = ()=>{
            if (!guardCheck(this)) return;
            touchMoved = true;
        }, touchEndHandler = (e)=>{
            if (!guardCheck(this)) return;
            if (touched && !touchMoved) {
                const touchEvent = e, lengthOffset = 1;
                let lastTouch = touchEvent.touches[touchEvent.touches.length - lengthOffset];
                if (!lastTouch) {
                    lastTouch = touchEvent.changedTouches[touchEvent.changedTouches.length - lengthOffset];
                    if (!lastTouch) return;
                }
                const element = this.canvas.element, canvasRect = element ? element.getBoundingClientRect() : undefined, minCoordinate = 0, pos = {
                    x: lastTouch.clientX - (canvasRect ? canvasRect.left : minCoordinate),
                    y: lastTouch.clientY - (canvasRect ? canvasRect.top : minCoordinate)
                };
                clickOrTouchHandler(e, pos, Math.max(lastTouch.radiusX, lastTouch.radiusY));
            }
            touched = false;
            touchMoved = false;
        }, touchCancelHandler = ()=>{
            if (!guardCheck(this)) return;
            touched = false;
            touchMoved = false;
        };
        let touched = false, touchMoved = false;
        this._clickHandlers.set("click", clickHandler);
        this._clickHandlers.set("touchstart", touchStartHandler);
        this._clickHandlers.set("touchmove", touchMoveHandler);
        this._clickHandlers.set("touchend", touchEndHandler);
        this._clickHandlers.set("touchcancel", touchCancelHandler);
        for (const [key, handler] of this._clickHandlers)el.addEventListener(key, handler);
    }
    addLifeTime(value) {
        this._lifeTime += value;
    }
    addPath(key, generator, override = false) {
        if (!guardCheck(this) || !override && this.pathGenerators.has(key)) return false;
        this.pathGenerators.set(key, generator);
        return true;
    }
    alive() {
        return !this._duration || this._lifeTime <= this._duration;
    }
    clearClickHandlers() {
        if (!guardCheck(this)) return;
        for (const [key, handler] of this._clickHandlers)this.interactivity.element?.removeEventListener(key, handler);
        this._clickHandlers.clear();
    }
    destroy(remove = true) {
        if (!guardCheck(this)) return;
        this.stop();
        this.clearClickHandlers();
        this.particles.destroy();
        this.canvas.destroy();
        for (const effectDrawer of this.effectDrawers.values())effectDrawer.destroy?.(this);
        for (const shapeDrawer of this.shapeDrawers.values())shapeDrawer.destroy?.(this);
        for (const key of this.effectDrawers.keys())this.effectDrawers.delete(key);
        for (const key of this.shapeDrawers.keys())this.shapeDrawers.delete(key);
        this._engine.clearPlugins(this);
        this.destroyed = true;
        if (remove) {
            const mainArr = this._engine.items, idx = mainArr.findIndex((t)=>t === this), minIndex = 0;
            if (idx >= minIndex) {
                const deleteCount = 1;
                mainArr.splice(idx, deleteCount);
            }
        }
        this._engine.dispatchEvent((0, _eventTypeJs.EventType).containerDestroyed, {
            container: this
        });
    }
    draw(force) {
        if (!guardCheck(this)) return;
        let refreshTime = force;
        const frame = (timestamp)=>{
            if (refreshTime) {
                this._lastFrameTime = undefined;
                refreshTime = false;
            }
            this._nextFrame(timestamp);
        };
        this._drawAnimationFrame = (0, _numberUtilsJs.animate)((timestamp)=>frame(timestamp));
    }
    async export(type, options = {}) {
        for (const plugin of this.plugins.values()){
            if (!plugin.export) continue;
            const res = await plugin.export(type, options);
            if (!res.supported) continue;
            return res.blob;
        }
        (0, _utilsJs.getLogger)().error(`${(0, _constantsJs.errorPrefix)} - Export plugin with type ${type} not found`);
    }
    handleClickMode(mode) {
        if (!guardCheck(this)) return;
        this.particles.handleClickMode(mode);
        for (const plugin of this.plugins.values())plugin.handleClickMode?.(mode);
    }
    async init() {
        if (!guardCheck(this)) return;
        const effects = this._engine.getSupportedEffects();
        for (const type of effects){
            const drawer = this._engine.getEffectDrawer(type);
            if (drawer) this.effectDrawers.set(type, drawer);
        }
        const shapes = this._engine.getSupportedShapes();
        for (const type of shapes){
            const drawer = this._engine.getShapeDrawer(type);
            if (drawer) this.shapeDrawers.set(type, drawer);
        }
        await this.particles.initPlugins();
        this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
        this.actualOptions = loadContainerOptions(this._engine, this, this._options);
        const availablePlugins = await this._engine.getAvailablePlugins(this);
        for (const [id, plugin] of availablePlugins)this.plugins.set(id, plugin);
        this.retina.init();
        await this.canvas.init();
        this.updateActualOptions();
        this.canvas.initBackground();
        this.canvas.resize();
        const { zLayers, duration, delay, fpsLimit, smooth } = this.actualOptions;
        this.zLayers = zLayers;
        this._duration = (0, _numberUtilsJs.getRangeValue)(duration) * (0, _constantsJs.millisecondsToSeconds);
        this._delay = (0, _numberUtilsJs.getRangeValue)(delay) * (0, _constantsJs.millisecondsToSeconds);
        this._lifeTime = 0;
        const defaultFpsLimit = 120, minFpsLimit = 0;
        this.fpsLimit = fpsLimit > minFpsLimit ? fpsLimit : defaultFpsLimit;
        this._smooth = smooth;
        for (const drawer of this.effectDrawers.values())await drawer.init?.(this);
        for (const drawer of this.shapeDrawers.values())await drawer.init?.(this);
        for (const plugin of this.plugins.values())await plugin.init?.();
        this._engine.dispatchEvent((0, _eventTypeJs.EventType).containerInit, {
            container: this
        });
        await this.particles.init();
        this.particles.setDensity();
        for (const plugin of this.plugins.values())plugin.particlesSetup?.();
        this._engine.dispatchEvent((0, _eventTypeJs.EventType).particlesSetup, {
            container: this
        });
    }
    async loadTheme(name) {
        if (!guardCheck(this)) return;
        this._currentTheme = name;
        await this.refresh();
    }
    pause() {
        if (!guardCheck(this)) return;
        if (this._drawAnimationFrame !== undefined) {
            (0, _numberUtilsJs.cancelAnimation)(this._drawAnimationFrame);
            delete this._drawAnimationFrame;
        }
        if (this._paused) return;
        for (const plugin of this.plugins.values())plugin.pause?.();
        if (!this.pageHidden) this._paused = true;
        this._engine.dispatchEvent((0, _eventTypeJs.EventType).containerPaused, {
            container: this
        });
    }
    play(force) {
        if (!guardCheck(this)) return;
        const needsUpdate = this._paused || force;
        if (this._firstStart && !this.actualOptions.autoPlay) {
            this._firstStart = false;
            return;
        }
        if (this._paused) this._paused = false;
        if (needsUpdate) {
            for (const plugin of this.plugins.values())if (plugin.play) plugin.play();
        }
        this._engine.dispatchEvent((0, _eventTypeJs.EventType).containerPlay, {
            container: this
        });
        this.draw(needsUpdate ?? false);
    }
    async refresh() {
        if (!guardCheck(this)) return;
        this.stop();
        return this.start();
    }
    async reset(sourceOptions) {
        if (!guardCheck(this)) return;
        this._initialSourceOptions = sourceOptions;
        this._sourceOptions = sourceOptions;
        this._options = loadContainerOptions(this._engine, this, this._initialSourceOptions, this.sourceOptions);
        this.actualOptions = loadContainerOptions(this._engine, this, this._options);
        return this.refresh();
    }
    async start() {
        if (!guardCheck(this) || this.started) return;
        await this.init();
        this.started = true;
        await new Promise((resolve)=>{
            const start = async ()=>{
                this._eventListeners.addListeners();
                if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) this._intersectionObserver.observe(this.interactivity.element);
                for (const plugin of this.plugins.values())await plugin.start?.();
                this._engine.dispatchEvent((0, _eventTypeJs.EventType).containerStarted, {
                    container: this
                });
                this.play();
                resolve();
            };
            this._delayTimeout = setTimeout(()=>void start(), this._delay);
        });
    }
    stop() {
        if (!guardCheck(this) || !this.started) return;
        if (this._delayTimeout) {
            clearTimeout(this._delayTimeout);
            delete this._delayTimeout;
        }
        this._firstStart = true;
        this.started = false;
        this._eventListeners.removeListeners();
        this.pause();
        this.particles.clear();
        this.canvas.stop();
        if (this.interactivity.element instanceof HTMLElement && this._intersectionObserver) this._intersectionObserver.unobserve(this.interactivity.element);
        for (const plugin of this.plugins.values())plugin.stop?.();
        for (const key of this.plugins.keys())this.plugins.delete(key);
        this._sourceOptions = this._options;
        this._engine.dispatchEvent((0, _eventTypeJs.EventType).containerStopped, {
            container: this
        });
    }
    updateActualOptions() {
        this.actualOptions.responsive = [];
        const newMaxWidth = this.actualOptions.setResponsive(this.canvas.size.width, this.retina.pixelRatio, this._options);
        this.actualOptions.setTheme(this._currentTheme);
        if (this._responsiveMaxWidth === newMaxWidth) return false;
        this._responsiveMaxWidth = newMaxWidth;
        return true;
    }
}

},{"../Utils/NumberUtils.js":"c9eVN","./Utils/Constants.js":"9fra9","../Utils/Utils.js":"17M4n","./Canvas.js":"b5oGg","./Utils/EventListeners.js":"dCar4","../Enums/Types/EventType.js":"hWRHD","../Options/Classes/Options.js":"gH477","./Particles.js":"a0Lei","./Retina.js":"q7xVz","../Utils/OptionsUtils.js":"eM9C9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5oGg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Canvas", ()=>Canvas);
var _canvasUtilsJs = require("../Utils/CanvasUtils.js");
var _utilsJs = require("../Utils/Utils.js");
var _colorUtilsJs = require("../Utils/ColorUtils.js");
var _constantsJs = require("./Utils/Constants.js");
function setTransformValue(factor, newFactor, key) {
    const newValue = newFactor[key], defaultValue = 1;
    if (newValue !== undefined) factor[key] = (factor[key] ?? defaultValue) * newValue;
}
function setStyle(canvas, style, important = false) {
    if (!style) return;
    const element = canvas;
    if (!element) return;
    const elementStyle = element.style;
    if (!elementStyle) return;
    for(const key in style){
        const value = style[key];
        elementStyle.setProperty(key, value, important ? "important" : "");
    }
}
class Canvas {
    constructor(container, engine){
        this.container = container;
        this._applyPostDrawUpdaters = (particle)=>{
            for (const updater of this._postDrawUpdaters)updater.afterDraw?.(particle);
        };
        this._applyPreDrawUpdaters = (ctx, particle, radius, zOpacity, colorStyles, transform)=>{
            for (const updater of this._preDrawUpdaters){
                if (updater.getColorStyles) {
                    const { fill, stroke } = updater.getColorStyles(particle, ctx, radius, zOpacity);
                    if (fill) colorStyles.fill = fill;
                    if (stroke) colorStyles.stroke = stroke;
                }
                if (updater.getTransformValues) {
                    const updaterTransform = updater.getTransformValues(particle);
                    for(const key in updaterTransform)setTransformValue(transform, updaterTransform, key);
                }
                updater.beforeDraw?.(particle);
            }
        };
        this._applyResizePlugins = ()=>{
            for (const plugin of this._resizePlugins)plugin.resize?.();
        };
        this._getPluginParticleColors = (particle)=>{
            let fColor, sColor;
            for (const plugin of this._colorPlugins){
                if (!fColor && plugin.particleFillColor) fColor = (0, _colorUtilsJs.rangeColorToHsl)(this._engine, plugin.particleFillColor(particle));
                if (!sColor && plugin.particleStrokeColor) sColor = (0, _colorUtilsJs.rangeColorToHsl)(this._engine, plugin.particleStrokeColor(particle));
                if (fColor && sColor) break;
            }
            return [
                fColor,
                sColor
            ];
        };
        this._initCover = async ()=>{
            const options = this.container.actualOptions, cover = options.backgroundMask.cover, color = cover.color;
            if (color) {
                const coverRgb = (0, _colorUtilsJs.rangeColorToRgb)(this._engine, color);
                if (coverRgb) {
                    const coverColor = {
                        ...coverRgb,
                        a: cover.opacity
                    };
                    this._coverColorStyle = (0, _colorUtilsJs.getStyleFromRgb)(coverColor, coverColor.a);
                }
            } else await new Promise((resolve, reject)=>{
                if (!cover.image) return;
                const img = document.createElement("img");
                img.addEventListener("load", ()=>{
                    this._coverImage = {
                        image: img,
                        opacity: cover.opacity
                    };
                    resolve();
                });
                img.addEventListener("error", (evt)=>{
                    reject(evt.error);
                });
                img.src = cover.image;
            });
        };
        this._initStyle = ()=>{
            const element = this.element, options = this.container.actualOptions;
            if (!element) return;
            if (this._fullScreen) {
                this._originalStyle = (0, _utilsJs.deepExtend)({}, element.style);
                this._setFullScreenStyle();
            } else this._resetOriginalStyle();
            for(const key in options.style){
                if (!key || !options.style) continue;
                const value = options.style[key];
                if (!value) continue;
                element.style.setProperty(key, value, "important");
            }
        };
        this._initTrail = async ()=>{
            const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = trail.fill;
            if (!trail.enable) return;
            const factorNumerator = 1, opacity = factorNumerator / trail.length;
            if (trailFill.color) {
                const fillColor = (0, _colorUtilsJs.rangeColorToRgb)(this._engine, trailFill.color);
                if (!fillColor) return;
                this._trailFill = {
                    color: {
                        ...fillColor
                    },
                    opacity
                };
            } else await new Promise((resolve, reject)=>{
                if (!trailFill.image) return;
                const img = document.createElement("img");
                img.addEventListener("load", ()=>{
                    this._trailFill = {
                        image: img,
                        opacity
                    };
                    resolve();
                });
                img.addEventListener("error", (evt)=>{
                    reject(evt.error);
                });
                img.src = trailFill.image;
            });
        };
        this._paintBase = (baseColor)=>{
            this.draw((ctx)=>(0, _canvasUtilsJs.paintBase)(ctx, this.size, baseColor));
        };
        this._paintImage = (image, opacity)=>{
            this.draw((ctx)=>(0, _canvasUtilsJs.paintImage)(ctx, this.size, image, opacity));
        };
        this._repairStyle = ()=>{
            const element = this.element;
            if (!element) return;
            this._safeMutationObserver((observer)=>observer.disconnect());
            this._initStyle();
            this.initBackground();
            this._safeMutationObserver((observer)=>{
                if (!element || !(element instanceof Node)) return;
                observer.observe(element, {
                    attributes: true
                });
            });
        };
        this._resetOriginalStyle = ()=>{
            const element = this.element, originalStyle = this._originalStyle;
            if (!(element && originalStyle)) return;
            setStyle(element, originalStyle);
        };
        this._safeMutationObserver = (callback)=>{
            if (!this._mutationObserver) return;
            callback(this._mutationObserver);
        };
        this._setFullScreenStyle = ()=>{
            const element = this.element;
            if (!element) return;
            const radix = 10, zIndex = this.container.actualOptions.fullScreen.zIndex.toString(radix);
            setStyle(element, {
                position: "fixed",
                "z-index": zIndex,
                zIndex: zIndex,
                top: "0",
                left: "0",
                width: "100%",
                height: "100%"
            }, true);
        };
        this._engine = engine;
        this._standardSize = {
            height: 0,
            width: 0
        };
        const pxRatio = container.retina.pixelRatio, stdSize = this._standardSize;
        this.size = {
            height: stdSize.height * pxRatio,
            width: stdSize.width * pxRatio
        };
        this._context = null;
        this._generated = false;
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
    }
    get _fullScreen() {
        return this.container.actualOptions.fullScreen.enable;
    }
    clear() {
        const options = this.container.actualOptions, trail = options.particles.move.trail, trailFill = this._trailFill, minimumLength = 0;
        if (options.backgroundMask.enable) this.paint();
        else if (trail.enable && trail.length > minimumLength && trailFill) {
            if (trailFill.color) this._paintBase((0, _colorUtilsJs.getStyleFromRgb)(trailFill.color, trailFill.opacity));
            else if (trailFill.image) this._paintImage(trailFill.image, trailFill.opacity);
        } else if (options.clear) this.draw((ctx)=>{
            (0, _canvasUtilsJs.clear)(ctx, this.size);
        });
    }
    destroy() {
        this.stop();
        if (this._generated) {
            const element = this.element;
            element?.remove();
        } else this._resetOriginalStyle();
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        this._resizePlugins = [];
        this._colorPlugins = [];
    }
    draw(cb) {
        const ctx = this._context;
        if (!ctx) return;
        return cb(ctx);
    }
    drawAsync(cb) {
        const ctx = this._context;
        if (!ctx) return undefined;
        return cb(ctx);
    }
    drawParticle(particle, delta) {
        if (particle.spawning || particle.destroyed) return;
        const radius = particle.getRadius(), minimumSize = 0;
        if (radius <= minimumSize) return;
        const pfColor = particle.getFillColor(), psColor = particle.getStrokeColor() ?? pfColor;
        let [fColor, sColor] = this._getPluginParticleColors(particle);
        if (!fColor) fColor = pfColor;
        if (!sColor) sColor = psColor;
        if (!fColor && !sColor) return;
        this.draw((ctx)=>{
            const container = this.container, options = container.actualOptions, zIndexOptions = particle.options.zIndex, zIndexFactorOffset = 1, zIndexFactor = zIndexFactorOffset - particle.zIndexFactor, zOpacityFactor = zIndexFactor ** zIndexOptions.opacityRate, defaultOpacity = 1, opacity = particle.bubble.opacity ?? particle.opacity?.value ?? defaultOpacity, strokeOpacity = particle.strokeOpacity ?? opacity, zOpacity = opacity * zOpacityFactor, zStrokeOpacity = strokeOpacity * zOpacityFactor, transform = {}, colorStyles = {
                fill: fColor ? (0, _colorUtilsJs.getStyleFromHsl)(fColor, zOpacity) : undefined
            };
            colorStyles.stroke = sColor ? (0, _colorUtilsJs.getStyleFromHsl)(sColor, zStrokeOpacity) : colorStyles.fill;
            this._applyPreDrawUpdaters(ctx, particle, radius, zOpacity, colorStyles, transform);
            (0, _canvasUtilsJs.drawParticle)({
                container,
                context: ctx,
                particle,
                delta,
                colorStyles,
                backgroundMask: options.backgroundMask.enable,
                composite: options.backgroundMask.composite,
                radius: radius * zIndexFactor ** zIndexOptions.sizeRate,
                opacity: zOpacity,
                shadow: particle.options.shadow,
                transform
            });
            this._applyPostDrawUpdaters(particle);
        });
    }
    drawParticlePlugin(plugin, particle, delta) {
        this.draw((ctx)=>(0, _canvasUtilsJs.drawParticlePlugin)(ctx, plugin, particle, delta));
    }
    drawPlugin(plugin, delta) {
        this.draw((ctx)=>(0, _canvasUtilsJs.drawPlugin)(ctx, plugin, delta));
    }
    async init() {
        this._safeMutationObserver((obs)=>obs.disconnect());
        this._mutationObserver = (0, _utilsJs.safeMutationObserver)((records)=>{
            for (const record of records)if (record.type === "attributes" && record.attributeName === "style") this._repairStyle();
        });
        this.resize();
        this._initStyle();
        await this._initCover();
        try {
            await this._initTrail();
        } catch (e) {
            (0, _utilsJs.getLogger)().error(e);
        }
        this.initBackground();
        this._safeMutationObserver((obs)=>{
            if (!this.element || !(this.element instanceof Node)) return;
            obs.observe(this.element, {
                attributes: true
            });
        });
        this.initUpdaters();
        this.initPlugins();
        this.paint();
    }
    initBackground() {
        const options = this.container.actualOptions, background = options.background, element = this.element;
        if (!element) return;
        const elementStyle = element.style;
        if (!elementStyle) return;
        if (background.color) {
            const color = (0, _colorUtilsJs.rangeColorToRgb)(this._engine, background.color);
            elementStyle.backgroundColor = color ? (0, _colorUtilsJs.getStyleFromRgb)(color, background.opacity) : "";
        } else elementStyle.backgroundColor = "";
        elementStyle.backgroundImage = background.image || "";
        elementStyle.backgroundPosition = background.position || "";
        elementStyle.backgroundRepeat = background.repeat || "";
        elementStyle.backgroundSize = background.size || "";
    }
    initPlugins() {
        this._resizePlugins = [];
        for (const plugin of this.container.plugins.values()){
            if (plugin.resize) this._resizePlugins.push(plugin);
            if (plugin.particleFillColor ?? plugin.particleStrokeColor) this._colorPlugins.push(plugin);
        }
    }
    initUpdaters() {
        this._preDrawUpdaters = [];
        this._postDrawUpdaters = [];
        for (const updater of this.container.particles.updaters){
            if (updater.afterDraw) this._postDrawUpdaters.push(updater);
            if (updater.getColorStyles ?? updater.getTransformValues ?? updater.beforeDraw) this._preDrawUpdaters.push(updater);
        }
    }
    loadCanvas(canvas) {
        if (this._generated && this.element) this.element.remove();
        this._generated = canvas.dataset && (0, _constantsJs.generatedAttribute) in canvas.dataset ? canvas.dataset[0, _constantsJs.generatedAttribute] === "true" : this._generated;
        this.element = canvas;
        this.element.ariaHidden = "true";
        this._originalStyle = (0, _utilsJs.deepExtend)({}, this.element.style);
        const standardSize = this._standardSize;
        standardSize.height = canvas.offsetHeight;
        standardSize.width = canvas.offsetWidth;
        const pxRatio = this.container.retina.pixelRatio, retinaSize = this.size;
        canvas.height = retinaSize.height = standardSize.height * pxRatio;
        canvas.width = retinaSize.width = standardSize.width * pxRatio;
        this._context = this.element.getContext("2d");
        this._safeMutationObserver((obs)=>{
            if (!this.element || !(this.element instanceof Node)) return;
            obs.observe(this.element, {
                attributes: true
            });
        });
        this.container.retina.init();
        this.initBackground();
    }
    paint() {
        const options = this.container.actualOptions;
        this.draw((ctx)=>{
            if (options.backgroundMask.enable && options.backgroundMask.cover) {
                (0, _canvasUtilsJs.clear)(ctx, this.size);
                if (this._coverImage) this._paintImage(this._coverImage.image, this._coverImage.opacity);
                else if (this._coverColorStyle) this._paintBase(this._coverColorStyle);
                else this._paintBase();
            } else this._paintBase();
        });
    }
    resize() {
        if (!this.element) return false;
        const container = this.container, currentSize = container.canvas._standardSize, newSize = {
            width: this.element.offsetWidth,
            height: this.element.offsetHeight
        }, pxRatio = container.retina.pixelRatio, retinaSize = {
            width: newSize.width * pxRatio,
            height: newSize.height * pxRatio
        };
        if (newSize.height === currentSize.height && newSize.width === currentSize.width && retinaSize.height === this.element.height && retinaSize.width === this.element.width) return false;
        const oldSize = {
            ...currentSize
        };
        currentSize.height = newSize.height;
        currentSize.width = newSize.width;
        const canvasSize = this.size;
        this.element.width = canvasSize.width = retinaSize.width;
        this.element.height = canvasSize.height = retinaSize.height;
        if (this.container.started) container.particles.setResizeFactor({
            width: currentSize.width / oldSize.width,
            height: currentSize.height / oldSize.height
        });
        return true;
    }
    stop() {
        this._safeMutationObserver((obs)=>obs.disconnect());
        this._mutationObserver = undefined;
        this.draw((ctx)=>(0, _canvasUtilsJs.clear)(ctx, this.size));
    }
    async windowResize() {
        if (!this.element || !this.resize()) return;
        const container = this.container, needsRefresh = container.updateActualOptions();
        container.particles.setDensity();
        this._applyResizePlugins();
        if (needsRefresh) await container.refresh();
    }
}

},{"../Utils/CanvasUtils.js":"8COXr","../Utils/Utils.js":"17M4n","../Utils/ColorUtils.js":"9NWNO","./Utils/Constants.js":"9fra9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8COXr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawLine", ()=>drawLine);
parcelHelpers.export(exports, "paintBase", ()=>paintBase);
parcelHelpers.export(exports, "paintImage", ()=>paintImage);
parcelHelpers.export(exports, "clear", ()=>clear);
parcelHelpers.export(exports, "drawParticle", ()=>drawParticle);
parcelHelpers.export(exports, "drawEffect", ()=>drawEffect);
parcelHelpers.export(exports, "drawShape", ()=>drawShape);
parcelHelpers.export(exports, "drawShapeAfterDraw", ()=>drawShapeAfterDraw);
parcelHelpers.export(exports, "drawPlugin", ()=>drawPlugin);
parcelHelpers.export(exports, "drawParticlePlugin", ()=>drawParticlePlugin);
parcelHelpers.export(exports, "alterHsl", ()=>alterHsl);
var _alterTypeJs = require("../Enums/Types/AlterType.js");
var _colorUtilsJs = require("./ColorUtils.js");
const origin = {
    x: 0,
    y: 0
}, defaultTransform = {
    a: 1,
    b: 0,
    c: 0,
    d: 1
};
function drawLine(context, begin, end) {
    context.beginPath();
    context.moveTo(begin.x, begin.y);
    context.lineTo(end.x, end.y);
    context.closePath();
}
function paintBase(context, dimension, baseColor) {
    context.fillStyle = baseColor ?? "rgba(0,0,0,0)";
    context.fillRect(origin.x, origin.y, dimension.width, dimension.height);
}
function paintImage(context, dimension, image, opacity) {
    if (!image) return;
    context.globalAlpha = opacity;
    context.drawImage(image, origin.x, origin.y, dimension.width, dimension.height);
    context.globalAlpha = 1;
}
function clear(context, dimension) {
    context.clearRect(origin.x, origin.y, dimension.width, dimension.height);
}
function drawParticle(data) {
    const { container, context, particle, delta, colorStyles, backgroundMask, composite, radius, opacity, shadow, transform } = data, pos = particle.getPosition(), defaultAngle = 0, angle = particle.rotation + (particle.pathRotation ? particle.velocity.angle : defaultAngle), rotateData = {
        sin: Math.sin(angle),
        cos: Math.cos(angle)
    }, rotating = !!angle, identity = 1, transformData = {
        a: rotateData.cos * (transform.a ?? defaultTransform.a),
        b: rotating ? rotateData.sin * (transform.b ?? identity) : transform.b ?? defaultTransform.b,
        c: rotating ? -rotateData.sin * (transform.c ?? identity) : transform.c ?? defaultTransform.c,
        d: rotateData.cos * (transform.d ?? defaultTransform.d)
    };
    context.setTransform(transformData.a, transformData.b, transformData.c, transformData.d, pos.x, pos.y);
    if (backgroundMask) context.globalCompositeOperation = composite;
    const shadowColor = particle.shadowColor;
    if (shadow.enable && shadowColor) {
        context.shadowBlur = shadow.blur;
        context.shadowColor = (0, _colorUtilsJs.getStyleFromRgb)(shadowColor);
        context.shadowOffsetX = shadow.offset.x;
        context.shadowOffsetY = shadow.offset.y;
    }
    if (colorStyles.fill) context.fillStyle = colorStyles.fill;
    const minStrokeWidth = 0, strokeWidth = particle.strokeWidth ?? minStrokeWidth;
    context.lineWidth = strokeWidth;
    if (colorStyles.stroke) context.strokeStyle = colorStyles.stroke;
    const drawData = {
        container,
        context,
        particle,
        radius,
        opacity,
        delta,
        transformData,
        strokeWidth
    };
    drawShape(drawData);
    drawShapeAfterDraw(drawData);
    drawEffect(drawData);
    context.globalCompositeOperation = "source-over";
    context.resetTransform();
}
function drawEffect(data) {
    const { container, context, particle, radius, opacity, delta, transformData } = data;
    if (!particle.effect) return;
    const drawer = container.effectDrawers.get(particle.effect);
    if (!drawer) return;
    drawer.draw({
        context,
        particle,
        radius,
        opacity,
        delta,
        pixelRatio: container.retina.pixelRatio,
        transformData: {
            ...transformData
        }
    });
}
function drawShape(data) {
    const { container, context, particle, radius, opacity, delta, strokeWidth, transformData } = data, minStrokeWidth = 0;
    if (!particle.shape) return;
    const drawer = container.shapeDrawers.get(particle.shape);
    if (!drawer) return;
    context.beginPath();
    drawer.draw({
        context,
        particle,
        radius,
        opacity,
        delta,
        pixelRatio: container.retina.pixelRatio,
        transformData: {
            ...transformData
        }
    });
    if (particle.shapeClose) context.closePath();
    if (strokeWidth > minStrokeWidth) context.stroke();
    if (particle.shapeFill) context.fill();
}
function drawShapeAfterDraw(data) {
    const { container, context, particle, radius, opacity, delta, transformData } = data;
    if (!particle.shape) return;
    const drawer = container.shapeDrawers.get(particle.shape);
    if (!drawer?.afterDraw) return;
    drawer.afterDraw({
        context,
        particle,
        radius,
        opacity,
        delta,
        pixelRatio: container.retina.pixelRatio,
        transformData: {
            ...transformData
        }
    });
}
function drawPlugin(context, plugin, delta) {
    if (!plugin.draw) return;
    plugin.draw(context, delta);
}
function drawParticlePlugin(context, plugin, particle, delta) {
    if (!plugin.drawParticle) return;
    plugin.drawParticle(context, particle, delta);
}
function alterHsl(color, type, value) {
    const lFactor = 1;
    return {
        h: color.h,
        s: color.s,
        l: color.l + (type === (0, _alterTypeJs.AlterType).darken ? -lFactor : lFactor) * value
    };
}

},{"../Enums/Types/AlterType.js":"eeNYf","./ColorUtils.js":"9NWNO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eeNYf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AlterType", ()=>AlterType);
var AlterType;
(function(AlterType) {
    AlterType["darken"] = "darken";
    AlterType["enlighten"] = "enlighten";
})(AlterType || (AlterType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9NWNO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "rangeColorToRgb", ()=>rangeColorToRgb);
parcelHelpers.export(exports, "colorToRgb", ()=>colorToRgb);
parcelHelpers.export(exports, "colorToHsl", ()=>colorToHsl);
parcelHelpers.export(exports, "rangeColorToHsl", ()=>rangeColorToHsl);
parcelHelpers.export(exports, "rgbToHsl", ()=>rgbToHsl);
parcelHelpers.export(exports, "stringToAlpha", ()=>stringToAlpha);
parcelHelpers.export(exports, "stringToRgb", ()=>stringToRgb);
parcelHelpers.export(exports, "hslToRgb", ()=>hslToRgb);
parcelHelpers.export(exports, "hslaToRgba", ()=>hslaToRgba);
parcelHelpers.export(exports, "getRandomRgbColor", ()=>getRandomRgbColor);
parcelHelpers.export(exports, "getStyleFromRgb", ()=>getStyleFromRgb);
parcelHelpers.export(exports, "getStyleFromHsl", ()=>getStyleFromHsl);
parcelHelpers.export(exports, "colorMix", ()=>colorMix);
parcelHelpers.export(exports, "getLinkColor", ()=>getLinkColor);
parcelHelpers.export(exports, "getLinkRandomColor", ()=>getLinkRandomColor);
parcelHelpers.export(exports, "getHslFromAnimation", ()=>getHslFromAnimation);
parcelHelpers.export(exports, "getHslAnimationFromHsl", ()=>getHslAnimationFromHsl);
parcelHelpers.export(exports, "updateColorValue", ()=>updateColorValue);
parcelHelpers.export(exports, "updateColor", ()=>updateColor);
var _numberUtilsJs = require("./NumberUtils.js");
var _typeUtilsJs = require("./TypeUtils.js");
var _constantsJs = require("../Core/Utils/Constants.js");
var _animationStatusJs = require("../Enums/AnimationStatus.js");
var _utilsJs = require("./Utils.js");
const randomColorValue = "random", midColorValue = "mid";
function stringToRgba(engine, input) {
    if (!input) return;
    for (const manager of engine.colorManagers.values()){
        if (input.startsWith(manager.stringPrefix)) return manager.parseString(input);
    }
}
function rangeColorToRgb(engine, input, index, useIndex = true) {
    if (!input) return;
    const color = (0, _typeUtilsJs.isString)(input) ? {
        value: input
    } : input;
    if ((0, _typeUtilsJs.isString)(color.value)) return colorToRgb(engine, color.value, index, useIndex);
    if ((0, _typeUtilsJs.isArray)(color.value)) return rangeColorToRgb(engine, {
        value: (0, _utilsJs.itemFromArray)(color.value, index, useIndex)
    });
    for (const manager of engine.colorManagers.values()){
        const res = manager.handleRangeColor(color);
        if (res) return res;
    }
}
function colorToRgb(engine, input, index, useIndex = true) {
    if (!input) return;
    const color = (0, _typeUtilsJs.isString)(input) ? {
        value: input
    } : input;
    if ((0, _typeUtilsJs.isString)(color.value)) return color.value === randomColorValue ? getRandomRgbColor() : stringToRgb(engine, color.value);
    if ((0, _typeUtilsJs.isArray)(color.value)) return colorToRgb(engine, {
        value: (0, _utilsJs.itemFromArray)(color.value, index, useIndex)
    });
    for (const manager of engine.colorManagers.values()){
        const res = manager.handleColor(color);
        if (res) return res;
    }
}
function colorToHsl(engine, color, index, useIndex = true) {
    const rgb = colorToRgb(engine, color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : undefined;
}
function rangeColorToHsl(engine, color, index, useIndex = true) {
    const rgb = rangeColorToRgb(engine, color, index, useIndex);
    return rgb ? rgbToHsl(rgb) : undefined;
}
function rgbToHsl(color) {
    const rgbMax = 255, hMax = 360, sMax = 100, lMax = 100, hMin = 0, sMin = 0, hPhase = 60, half = 0.5, double = 2, r1 = color.r / rgbMax, g1 = color.g / rgbMax, b1 = color.b / rgbMax, max = Math.max(r1, g1, b1), min = Math.min(r1, g1, b1), res = {
        h: hMin,
        l: (max + min) * half,
        s: sMin
    };
    if (max !== min) {
        res.s = res.l < half ? (max - min) / (max + min) : (max - min) / (double - max - min);
        res.h = r1 === max ? (g1 - b1) / (max - min) : res.h = g1 === max ? double + (b1 - r1) / (max - min) : double * double + (r1 - g1) / (max - min);
    }
    res.l *= lMax;
    res.s *= sMax;
    res.h *= hPhase;
    if (res.h < hMin) res.h += hMax;
    if (res.h >= hMax) res.h -= hMax;
    return res;
}
function stringToAlpha(engine, input) {
    return stringToRgba(engine, input)?.a;
}
function stringToRgb(engine, input) {
    return stringToRgba(engine, input);
}
function hslToRgb(hsl) {
    const hMax = 360, sMax = 100, lMax = 100, sMin = 0, lMin = 0, h = (hsl.h % hMax + hMax) % hMax, s = Math.max(sMin, Math.min(sMax, hsl.s)), l = Math.max(lMin, Math.min(lMax, hsl.l)), hNormalized = h / hMax, sNormalized = s / sMax, lNormalized = l / lMax, rgbFactor = 255, triple = 3;
    if (s === sMin) {
        const grayscaleValue = Math.round(lNormalized * rgbFactor);
        return {
            r: grayscaleValue,
            g: grayscaleValue,
            b: grayscaleValue
        };
    }
    const half = 0.5, double = 2, channel = (temp1, temp2, temp3)=>{
        const temp3Min = 0, temp3Max = 1, sextuple = 6;
        if (temp3 < temp3Min) temp3++;
        if (temp3 > temp3Max) temp3--;
        if (temp3 * sextuple < temp3Max) return temp1 + (temp2 - temp1) * sextuple * temp3;
        if (temp3 * double < temp3Max) return temp2;
        if (temp3 * triple < temp3Max * double) {
            const temp3Offset = double / triple;
            return temp1 + (temp2 - temp1) * (temp3Offset - temp3) * sextuple;
        }
        return temp1;
    }, sNormalizedOffset = 1, temp1 = lNormalized < half ? lNormalized * (sNormalizedOffset + sNormalized) : lNormalized + sNormalized - lNormalized * sNormalized, temp2 = double * lNormalized - temp1, phaseNumerator = 1, phaseThird = phaseNumerator / triple, red = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized + phaseThird)), green = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized)), blue = Math.min(rgbFactor, rgbFactor * channel(temp2, temp1, hNormalized - phaseThird));
    return {
        r: Math.round(red),
        g: Math.round(green),
        b: Math.round(blue)
    };
}
function hslaToRgba(hsla) {
    const rgbResult = hslToRgb(hsla);
    return {
        a: hsla.a,
        b: rgbResult.b,
        g: rgbResult.g,
        r: rgbResult.r
    };
}
function getRandomRgbColor(min) {
    const defaultMin = 0, fixedMin = min ?? defaultMin, rgbMax = 256;
    return {
        b: Math.floor((0, _numberUtilsJs.randomInRange)((0, _numberUtilsJs.setRangeValue)(fixedMin, rgbMax))),
        g: Math.floor((0, _numberUtilsJs.randomInRange)((0, _numberUtilsJs.setRangeValue)(fixedMin, rgbMax))),
        r: Math.floor((0, _numberUtilsJs.randomInRange)((0, _numberUtilsJs.setRangeValue)(fixedMin, rgbMax)))
    };
}
function getStyleFromRgb(color, opacity) {
    const defaultOpacity = 1;
    return `rgba(${color.r}, ${color.g}, ${color.b}, ${opacity ?? defaultOpacity})`;
}
function getStyleFromHsl(color, opacity) {
    const defaultOpacity = 1;
    return `hsla(${color.h}, ${color.s}%, ${color.l}%, ${opacity ?? defaultOpacity})`;
}
function colorMix(color1, color2, size1, size2) {
    let rgb1 = color1, rgb2 = color2;
    if (rgb1.r === undefined) rgb1 = hslToRgb(color1);
    if (rgb2.r === undefined) rgb2 = hslToRgb(color2);
    return {
        b: (0, _numberUtilsJs.mix)(rgb1.b, rgb2.b, size1, size2),
        g: (0, _numberUtilsJs.mix)(rgb1.g, rgb2.g, size1, size2),
        r: (0, _numberUtilsJs.mix)(rgb1.r, rgb2.r, size1, size2)
    };
}
function getLinkColor(p1, p2, linkColor) {
    if (linkColor === randomColorValue) return getRandomRgbColor();
    else if (linkColor === midColorValue) {
        const sourceColor = p1.getFillColor() ?? p1.getStrokeColor(), destColor = p2?.getFillColor() ?? p2?.getStrokeColor();
        if (sourceColor && destColor && p2) return colorMix(sourceColor, destColor, p1.getRadius(), p2.getRadius());
        else {
            const hslColor = sourceColor ?? destColor;
            if (hslColor) return hslToRgb(hslColor);
        }
    } else return linkColor;
}
function getLinkRandomColor(engine, optColor, blink, consent) {
    const color = (0, _typeUtilsJs.isString)(optColor) ? optColor : optColor.value;
    if (color === randomColorValue) {
        if (consent) return rangeColorToRgb(engine, {
            value: color
        });
        if (blink) return randomColorValue;
        return midColorValue;
    } else if (color === midColorValue) return midColorValue;
    else return rangeColorToRgb(engine, {
        value: color
    });
}
function getHslFromAnimation(animation) {
    return animation !== undefined ? {
        h: animation.h.value,
        s: animation.s.value,
        l: animation.l.value
    } : undefined;
}
function getHslAnimationFromHsl(hsl, animationOptions, reduceFactor) {
    const resColor = {
        h: {
            enable: false,
            value: hsl.h
        },
        s: {
            enable: false,
            value: hsl.s
        },
        l: {
            enable: false,
            value: hsl.l
        }
    };
    if (animationOptions) {
        setColorAnimation(resColor.h, animationOptions.h, reduceFactor);
        setColorAnimation(resColor.s, animationOptions.s, reduceFactor);
        setColorAnimation(resColor.l, animationOptions.l, reduceFactor);
    }
    return resColor;
}
function setColorAnimation(colorValue, colorAnimation, reduceFactor) {
    colorValue.enable = colorAnimation.enable;
    const defaultVelocity = 0, decayOffset = 1, defaultLoops = 0, defaultTime = 0;
    if (colorValue.enable) {
        colorValue.velocity = (0, _numberUtilsJs.getRangeValue)(colorAnimation.speed) / (0, _constantsJs.percentDenominator) * reduceFactor;
        colorValue.decay = decayOffset - (0, _numberUtilsJs.getRangeValue)(colorAnimation.decay);
        colorValue.status = (0, _animationStatusJs.AnimationStatus).increasing;
        colorValue.loops = defaultLoops;
        colorValue.maxLoops = (0, _numberUtilsJs.getRangeValue)(colorAnimation.count);
        colorValue.time = defaultTime;
        colorValue.delayTime = (0, _numberUtilsJs.getRangeValue)(colorAnimation.delay) * (0, _constantsJs.millisecondsToSeconds);
        if (!colorAnimation.sync) {
            colorValue.velocity *= (0, _numberUtilsJs.getRandom)();
            colorValue.value *= (0, _numberUtilsJs.getRandom)();
        }
        colorValue.initialValue = colorValue.value;
        colorValue.offset = (0, _numberUtilsJs.setRangeValue)(colorAnimation.offset);
    } else colorValue.velocity = defaultVelocity;
}
function updateColorValue(data, range, decrease, delta) {
    const minLoops = 0, minDelay = 0, identity = 1, minVelocity = 0, minOffset = 0, velocityFactor = 3.6;
    if (!data || !data.enable || (data.maxLoops ?? minLoops) > minLoops && (data.loops ?? minLoops) > (data.maxLoops ?? minLoops)) return;
    if (!data.time) data.time = 0;
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) data.time += delta.value;
    if ((data.delayTime ?? minDelay) > minDelay && data.time < (data.delayTime ?? minDelay)) return;
    const offset = data.offset ? (0, _numberUtilsJs.randomInRange)(data.offset) : minOffset, velocity = (data.velocity ?? minVelocity) * delta.factor + offset * velocityFactor, decay = data.decay ?? identity, max = (0, _numberUtilsJs.getRangeMax)(range), min = (0, _numberUtilsJs.getRangeMin)(range);
    if (!decrease || data.status === (0, _animationStatusJs.AnimationStatus).increasing) {
        data.value += velocity;
        if (data.value > max) {
            if (!data.loops) data.loops = 0;
            data.loops++;
            if (decrease) data.status = (0, _animationStatusJs.AnimationStatus).decreasing;
            else data.value -= max;
        }
    } else {
        data.value -= velocity;
        const minValue = 0;
        if (data.value < minValue) {
            if (!data.loops) data.loops = 0;
            data.loops++;
            data.status = (0, _animationStatusJs.AnimationStatus).increasing;
        }
    }
    if (data.velocity && decay !== identity) data.velocity *= decay;
    data.value = (0, _numberUtilsJs.clamp)(data.value, min, max);
}
function updateColor(color, delta) {
    if (!color) return;
    const { h, s, l } = color;
    const ranges = {
        h: {
            min: 0,
            max: 360
        },
        s: {
            min: 0,
            max: 100
        },
        l: {
            min: 0,
            max: 100
        }
    };
    if (h) updateColorValue(h, ranges.h, false, delta);
    if (s) updateColorValue(s, ranges.s, true, delta);
    if (l) updateColorValue(l, ranges.l, true, delta);
}

},{"./NumberUtils.js":"c9eVN","./TypeUtils.js":"bKVoo","../Core/Utils/Constants.js":"9fra9","../Enums/AnimationStatus.js":"fxAp8","./Utils.js":"17M4n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dCar4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventListeners", ()=>EventListeners);
var _utilsJs = require("../../Utils/Utils.js");
var _constantsJs = require("./Constants.js");
var _interactivityDetectJs = require("../../Enums/InteractivityDetect.js");
var _typeUtilsJs = require("../../Utils/TypeUtils.js");
const double = 2;
function manageListener(element, event, handler, add, options) {
    if (add) {
        let addOptions = {
            passive: true
        };
        if ((0, _typeUtilsJs.isBoolean)(options)) addOptions.capture = options;
        else if (options !== undefined) addOptions = options;
        element.addEventListener(event, handler, addOptions);
    } else {
        const removeOptions = options;
        element.removeEventListener(event, handler, removeOptions);
    }
}
class EventListeners {
    constructor(container){
        this.container = container;
        this._doMouseTouchClick = (e)=>{
            const container = this.container, options = container.actualOptions;
            if (this._canPush) {
                const mouseInteractivity = container.interactivity.mouse, mousePos = mouseInteractivity.position;
                if (!mousePos) return;
                mouseInteractivity.clickPosition = {
                    ...mousePos
                };
                mouseInteractivity.clickTime = new Date().getTime();
                const onClick = options.interactivity.events.onClick;
                (0, _utilsJs.executeOnSingleOrMultiple)(onClick.mode, (mode)=>this.container.handleClickMode(mode));
            }
            if (e.type === "touchend") {
                const touchDelay = 500;
                setTimeout(()=>this._mouseTouchFinish(), touchDelay);
            }
        };
        this._handleThemeChange = (e)=>{
            const mediaEvent = e, container = this.container, options = container.options, defaultThemes = options.defaultThemes, themeName = mediaEvent.matches ? defaultThemes.dark : defaultThemes.light, theme = options.themes.find((theme)=>theme.name === themeName);
            if (theme?.default.auto) container.loadTheme(themeName);
        };
        this._handleVisibilityChange = ()=>{
            const container = this.container, options = container.actualOptions;
            this._mouseTouchFinish();
            if (!options.pauseOnBlur) return;
            if (document?.hidden) {
                container.pageHidden = true;
                container.pause();
            } else {
                container.pageHidden = false;
                if (container.animationStatus) container.play(true);
                else container.draw(true);
            }
        };
        this._handleWindowResize = ()=>{
            if (this._resizeTimeout) {
                clearTimeout(this._resizeTimeout);
                delete this._resizeTimeout;
            }
            const handleResize = async ()=>{
                const canvas = this.container.canvas;
                await canvas?.windowResize();
            };
            this._resizeTimeout = setTimeout(()=>void handleResize(), this.container.actualOptions.interactivity.events.resize.delay * (0, _constantsJs.millisecondsToSeconds));
        };
        this._manageInteractivityListeners = (mouseLeaveTmpEvent, add)=>{
            const handlers = this._handlers, container = this.container, options = container.actualOptions;
            const interactivityEl = container.interactivity.element;
            if (!interactivityEl) return;
            const html = interactivityEl, canvasEl = container.canvas.element;
            if (canvasEl) canvasEl.style.pointerEvents = html === canvasEl ? "initial" : "none";
            if (!(options.interactivity.events.onHover.enable || options.interactivity.events.onClick.enable)) return;
            manageListener(interactivityEl, (0, _constantsJs.mouseMoveEvent), handlers.mouseMove, add);
            manageListener(interactivityEl, (0, _constantsJs.touchStartEvent), handlers.touchStart, add);
            manageListener(interactivityEl, (0, _constantsJs.touchMoveEvent), handlers.touchMove, add);
            if (!options.interactivity.events.onClick.enable) manageListener(interactivityEl, (0, _constantsJs.touchEndEvent), handlers.touchEnd, add);
            else {
                manageListener(interactivityEl, (0, _constantsJs.touchEndEvent), handlers.touchEndClick, add);
                manageListener(interactivityEl, (0, _constantsJs.mouseUpEvent), handlers.mouseUp, add);
                manageListener(interactivityEl, (0, _constantsJs.mouseDownEvent), handlers.mouseDown, add);
            }
            manageListener(interactivityEl, mouseLeaveTmpEvent, handlers.mouseLeave, add);
            manageListener(interactivityEl, (0, _constantsJs.touchCancelEvent), handlers.touchCancel, add);
        };
        this._manageListeners = (add)=>{
            const handlers = this._handlers, container = this.container, options = container.actualOptions, detectType = options.interactivity.detectsOn, canvasEl = container.canvas.element;
            let mouseLeaveTmpEvent = (0, _constantsJs.mouseLeaveEvent);
            if (detectType === (0, _interactivityDetectJs.InteractivityDetect).window) {
                container.interactivity.element = window;
                mouseLeaveTmpEvent = (0, _constantsJs.mouseOutEvent);
            } else if (detectType === (0, _interactivityDetectJs.InteractivityDetect).parent && canvasEl) container.interactivity.element = canvasEl.parentElement ?? canvasEl.parentNode;
            else container.interactivity.element = canvasEl;
            this._manageMediaMatch(add);
            this._manageResize(add);
            this._manageInteractivityListeners(mouseLeaveTmpEvent, add);
            if (document) manageListener(document, (0, _constantsJs.visibilityChangeEvent), handlers.visibilityChange, add, false);
        };
        this._manageMediaMatch = (add)=>{
            const handlers = this._handlers, mediaMatch = (0, _utilsJs.safeMatchMedia)("(prefers-color-scheme: dark)");
            if (!mediaMatch) return;
            if (mediaMatch.addEventListener !== undefined) {
                manageListener(mediaMatch, "change", handlers.themeChange, add);
                return;
            }
            if (mediaMatch.addListener === undefined) return;
            if (add) mediaMatch.addListener(handlers.oldThemeChange);
            else mediaMatch.removeListener(handlers.oldThemeChange);
        };
        this._manageResize = (add)=>{
            const handlers = this._handlers, container = this.container, options = container.actualOptions;
            if (!options.interactivity.events.resize) return;
            if (typeof ResizeObserver === "undefined") {
                manageListener(window, (0, _constantsJs.resizeEvent), handlers.resize, add);
                return;
            }
            const canvasEl = container.canvas.element;
            if (this._resizeObserver && !add) {
                if (canvasEl) this._resizeObserver.unobserve(canvasEl);
                this._resizeObserver.disconnect();
                delete this._resizeObserver;
            } else if (!this._resizeObserver && add && canvasEl) {
                this._resizeObserver = new ResizeObserver((entries)=>{
                    const entry = entries.find((e)=>e.target === canvasEl);
                    if (!entry) return;
                    this._handleWindowResize();
                });
                this._resizeObserver.observe(canvasEl);
            }
        };
        this._mouseDown = ()=>{
            const { interactivity } = this.container;
            if (!interactivity) return;
            const { mouse } = interactivity;
            mouse.clicking = true;
            mouse.downPosition = mouse.position;
        };
        this._mouseTouchClick = (e)=>{
            const container = this.container, options = container.actualOptions, { mouse } = container.interactivity;
            mouse.inside = true;
            let handled = false;
            const mousePosition = mouse.position;
            if (!mousePosition || !options.interactivity.events.onClick.enable) return;
            for (const plugin of container.plugins.values()){
                if (!plugin.clickPositionValid) continue;
                handled = plugin.clickPositionValid(mousePosition);
                if (handled) break;
            }
            if (!handled) this._doMouseTouchClick(e);
            mouse.clicking = false;
        };
        this._mouseTouchFinish = ()=>{
            const interactivity = this.container.interactivity;
            if (!interactivity) return;
            const mouse = interactivity.mouse;
            delete mouse.position;
            delete mouse.clickPosition;
            delete mouse.downPosition;
            interactivity.status = (0, _constantsJs.mouseLeaveEvent);
            mouse.inside = false;
            mouse.clicking = false;
        };
        this._mouseTouchMove = (e)=>{
            const container = this.container, options = container.actualOptions, interactivity = container.interactivity, canvasEl = container.canvas.element;
            if (!interactivity?.element) return;
            interactivity.mouse.inside = true;
            let pos;
            if (e.type.startsWith("pointer")) {
                this._canPush = true;
                const mouseEvent = e;
                if (interactivity.element === window) {
                    if (canvasEl) {
                        const clientRect = canvasEl.getBoundingClientRect();
                        pos = {
                            x: mouseEvent.clientX - clientRect.left,
                            y: mouseEvent.clientY - clientRect.top
                        };
                    }
                } else if (options.interactivity.detectsOn === (0, _interactivityDetectJs.InteractivityDetect).parent) {
                    const source = mouseEvent.target, target = mouseEvent.currentTarget;
                    if (source && target && canvasEl) {
                        const sourceRect = source.getBoundingClientRect(), targetRect = target.getBoundingClientRect(), canvasRect = canvasEl.getBoundingClientRect();
                        pos = {
                            x: mouseEvent.offsetX + double * sourceRect.left - (targetRect.left + canvasRect.left),
                            y: mouseEvent.offsetY + double * sourceRect.top - (targetRect.top + canvasRect.top)
                        };
                    } else pos = {
                        x: mouseEvent.offsetX ?? mouseEvent.clientX,
                        y: mouseEvent.offsetY ?? mouseEvent.clientY
                    };
                } else if (mouseEvent.target === canvasEl) pos = {
                    x: mouseEvent.offsetX ?? mouseEvent.clientX,
                    y: mouseEvent.offsetY ?? mouseEvent.clientY
                };
            } else {
                this._canPush = e.type !== "touchmove";
                if (canvasEl) {
                    const touchEvent = e, lengthOffset = 1, lastTouch = touchEvent.touches[touchEvent.touches.length - lengthOffset], canvasRect = canvasEl.getBoundingClientRect(), defaultCoordinate = 0;
                    pos = {
                        x: lastTouch.clientX - (canvasRect.left ?? defaultCoordinate),
                        y: lastTouch.clientY - (canvasRect.top ?? defaultCoordinate)
                    };
                }
            }
            const pxRatio = container.retina.pixelRatio;
            if (pos) {
                pos.x *= pxRatio;
                pos.y *= pxRatio;
            }
            interactivity.mouse.position = pos;
            interactivity.status = (0, _constantsJs.mouseMoveEvent);
        };
        this._touchEnd = (e)=>{
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches)this._touches.delete(touch.identifier);
            this._mouseTouchFinish();
        };
        this._touchEndClick = (e)=>{
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches)this._touches.delete(touch.identifier);
            this._mouseTouchClick(e);
        };
        this._touchStart = (e)=>{
            const evt = e, touches = Array.from(evt.changedTouches);
            for (const touch of touches)this._touches.set(touch.identifier, performance.now());
            this._mouseTouchMove(e);
        };
        this._canPush = true;
        this._touches = new Map();
        this._handlers = {
            mouseDown: ()=>this._mouseDown(),
            mouseLeave: ()=>this._mouseTouchFinish(),
            mouseMove: (e)=>this._mouseTouchMove(e),
            mouseUp: (e)=>this._mouseTouchClick(e),
            touchStart: (e)=>this._touchStart(e),
            touchMove: (e)=>this._mouseTouchMove(e),
            touchEnd: (e)=>this._touchEnd(e),
            touchCancel: (e)=>this._touchEnd(e),
            touchEndClick: (e)=>this._touchEndClick(e),
            visibilityChange: ()=>this._handleVisibilityChange(),
            themeChange: (e)=>this._handleThemeChange(e),
            oldThemeChange: (e)=>this._handleThemeChange(e),
            resize: ()=>{
                this._handleWindowResize();
            }
        };
    }
    addListeners() {
        this._manageListeners(true);
    }
    removeListeners() {
        this._manageListeners(false);
    }
}

},{"../../Utils/Utils.js":"17M4n","./Constants.js":"9fra9","../../Enums/InteractivityDetect.js":"dReM6","../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dReM6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InteractivityDetect", ()=>InteractivityDetect);
var InteractivityDetect;
(function(InteractivityDetect) {
    InteractivityDetect["canvas"] = "canvas";
    InteractivityDetect["parent"] = "parent";
    InteractivityDetect["window"] = "window";
})(InteractivityDetect || (InteractivityDetect = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hWRHD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventType", ()=>EventType);
var EventType;
(function(EventType) {
    EventType["configAdded"] = "configAdded";
    EventType["containerInit"] = "containerInit";
    EventType["particlesSetup"] = "particlesSetup";
    EventType["containerStarted"] = "containerStarted";
    EventType["containerStopped"] = "containerStopped";
    EventType["containerDestroyed"] = "containerDestroyed";
    EventType["containerPaused"] = "containerPaused";
    EventType["containerPlay"] = "containerPlay";
    EventType["containerBuilt"] = "containerBuilt";
    EventType["particleAdded"] = "particleAdded";
    EventType["particleDestroyed"] = "particleDestroyed";
    EventType["particleRemoved"] = "particleRemoved";
})(EventType || (EventType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gH477":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Options", ()=>Options);
var _utilsJs = require("../../Utils/Utils.js");
var _typeUtilsJs = require("../../Utils/TypeUtils.js");
var _backgroundJs = require("./Background/Background.js");
var _backgroundMaskJs = require("./BackgroundMask/BackgroundMask.js");
var _fullScreenJs = require("./FullScreen/FullScreen.js");
var _interactivityJs = require("./Interactivity/Interactivity.js");
var _manualParticleJs = require("./ManualParticle.js");
var _responsiveJs = require("./Responsive.js");
var _responsiveModeJs = require("../../Enums/Modes/ResponsiveMode.js");
var _themeJs = require("./Theme/Theme.js");
var _themeModeJs = require("../../Enums/Modes/ThemeMode.js");
var _optionsUtilsJs = require("../../Utils/OptionsUtils.js");
var _numberUtilsJs = require("../../Utils/NumberUtils.js");
class Options {
    constructor(engine, container){
        this._findDefaultTheme = (mode)=>{
            return this.themes.find((theme)=>theme.default.value && theme.default.mode === mode) ?? this.themes.find((theme)=>theme.default.value && theme.default.mode === (0, _themeModeJs.ThemeMode).any);
        };
        this._importPreset = (preset)=>{
            this.load(this._engine.getPreset(preset));
        };
        this._engine = engine;
        this._container = container;
        this.autoPlay = true;
        this.background = new (0, _backgroundJs.Background)();
        this.backgroundMask = new (0, _backgroundMaskJs.BackgroundMask)();
        this.clear = true;
        this.defaultThemes = {};
        this.delay = 0;
        this.fullScreen = new (0, _fullScreenJs.FullScreen)();
        this.detectRetina = true;
        this.duration = 0;
        this.fpsLimit = 120;
        this.interactivity = new (0, _interactivityJs.Interactivity)(engine, container);
        this.manualParticles = [];
        this.particles = (0, _optionsUtilsJs.loadParticlesOptions)(this._engine, this._container);
        this.pauseOnBlur = true;
        this.pauseOnOutsideViewport = true;
        this.responsive = [];
        this.smooth = false;
        this.style = {};
        this.themes = [];
        this.zLayers = 100;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.preset !== undefined) (0, _utilsJs.executeOnSingleOrMultiple)(data.preset, (preset)=>this._importPreset(preset));
        if (data.autoPlay !== undefined) this.autoPlay = data.autoPlay;
        if (data.clear !== undefined) this.clear = data.clear;
        if (data.key !== undefined) this.key = data.key;
        if (data.name !== undefined) this.name = data.name;
        if (data.delay !== undefined) this.delay = (0, _numberUtilsJs.setRangeValue)(data.delay);
        const detectRetina = data.detectRetina;
        if (detectRetina !== undefined) this.detectRetina = detectRetina;
        if (data.duration !== undefined) this.duration = (0, _numberUtilsJs.setRangeValue)(data.duration);
        const fpsLimit = data.fpsLimit;
        if (fpsLimit !== undefined) this.fpsLimit = fpsLimit;
        if (data.pauseOnBlur !== undefined) this.pauseOnBlur = data.pauseOnBlur;
        if (data.pauseOnOutsideViewport !== undefined) this.pauseOnOutsideViewport = data.pauseOnOutsideViewport;
        if (data.zLayers !== undefined) this.zLayers = data.zLayers;
        this.background.load(data.background);
        const fullScreen = data.fullScreen;
        if ((0, _typeUtilsJs.isBoolean)(fullScreen)) this.fullScreen.enable = fullScreen;
        else this.fullScreen.load(fullScreen);
        this.backgroundMask.load(data.backgroundMask);
        this.interactivity.load(data.interactivity);
        if (data.manualParticles) this.manualParticles = data.manualParticles.map((t)=>{
            const tmp = new (0, _manualParticleJs.ManualParticle)();
            tmp.load(t);
            return tmp;
        });
        this.particles.load(data.particles);
        this.style = (0, _utilsJs.deepExtend)(this.style, data.style);
        this._engine.loadOptions(this, data);
        if (data.smooth !== undefined) this.smooth = data.smooth;
        const interactors = this._engine.interactors.get(this._container);
        if (interactors) {
            for (const interactor of interactors)if (interactor.loadOptions) interactor.loadOptions(this, data);
        }
        if (data.responsive !== undefined) for (const responsive of data.responsive){
            const optResponsive = new (0, _responsiveJs.Responsive)();
            optResponsive.load(responsive);
            this.responsive.push(optResponsive);
        }
        this.responsive.sort((a, b)=>a.maxWidth - b.maxWidth);
        if (data.themes !== undefined) for (const theme of data.themes){
            const existingTheme = this.themes.find((t)=>t.name === theme.name);
            if (!existingTheme) {
                const optTheme = new (0, _themeJs.Theme)();
                optTheme.load(theme);
                this.themes.push(optTheme);
            } else existingTheme.load(theme);
        }
        this.defaultThemes.dark = this._findDefaultTheme((0, _themeModeJs.ThemeMode).dark)?.name;
        this.defaultThemes.light = this._findDefaultTheme((0, _themeModeJs.ThemeMode).light)?.name;
    }
    setResponsive(width, pxRatio, defaultOptions) {
        this.load(defaultOptions);
        const responsiveOptions = this.responsive.find((t)=>t.mode === (0, _responsiveModeJs.ResponsiveMode).screen && screen ? t.maxWidth > screen.availWidth : t.maxWidth * pxRatio > width);
        this.load(responsiveOptions?.options);
        return responsiveOptions?.maxWidth;
    }
    setTheme(name) {
        if (name) {
            const chosenTheme = this.themes.find((theme)=>theme.name === name);
            if (chosenTheme) this.load(chosenTheme.options);
        } else {
            const mediaMatch = (0, _utilsJs.safeMatchMedia)("(prefers-color-scheme: dark)"), clientDarkMode = mediaMatch?.matches, defaultTheme = this._findDefaultTheme(clientDarkMode ? (0, _themeModeJs.ThemeMode).dark : (0, _themeModeJs.ThemeMode).light);
            if (defaultTheme) this.load(defaultTheme.options);
        }
    }
}

},{"../../Utils/Utils.js":"17M4n","../../Utils/TypeUtils.js":"bKVoo","./Background/Background.js":"gm8xP","./BackgroundMask/BackgroundMask.js":"3eGnq","./FullScreen/FullScreen.js":"dfpLr","./Interactivity/Interactivity.js":"48Zpu","./ManualParticle.js":"2dkfx","./Responsive.js":"gmVzG","../../Enums/Modes/ResponsiveMode.js":"1vowI","./Theme/Theme.js":"5vbwW","../../Enums/Modes/ThemeMode.js":"gmnYr","../../Utils/OptionsUtils.js":"eM9C9","../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gm8xP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Background", ()=>Background);
var _optionsColorJs = require("../OptionsColor.js");
var _typeUtilsJs = require("../../../Utils/TypeUtils.js");
class Background {
    constructor(){
        this.color = new (0, _optionsColorJs.OptionsColor)();
        this.color.value = "";
        this.image = "";
        this.position = "";
        this.repeat = "";
        this.size = "";
        this.opacity = 1;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.color !== undefined) this.color = (0, _optionsColorJs.OptionsColor).create(this.color, data.color);
        if (data.image !== undefined) this.image = data.image;
        if (data.position !== undefined) this.position = data.position;
        if (data.repeat !== undefined) this.repeat = data.repeat;
        if (data.size !== undefined) this.size = data.size;
        if (data.opacity !== undefined) this.opacity = data.opacity;
    }
}

},{"../OptionsColor.js":"bzg9S","../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bzg9S":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OptionsColor", ()=>OptionsColor);
var _typeUtilsJs = require("../../Utils/TypeUtils.js");
class OptionsColor {
    constructor(){
        this.value = "";
    }
    static create(source, data) {
        const color = new OptionsColor();
        color.load(source);
        if (data !== undefined) {
            if ((0, _typeUtilsJs.isString)(data) || (0, _typeUtilsJs.isArray)(data)) color.load({
                value: data
            });
            else color.load(data);
        }
        return color;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (!(0, _typeUtilsJs.isNull)(data.value)) this.value = data.value;
    }
}

},{"../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3eGnq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BackgroundMask", ()=>BackgroundMask);
var _typeUtilsJs = require("../../../Utils/TypeUtils.js");
var _backgroundMaskCoverJs = require("./BackgroundMaskCover.js");
class BackgroundMask {
    constructor(){
        this.composite = "destination-out";
        this.cover = new (0, _backgroundMaskCoverJs.BackgroundMaskCover)();
        this.enable = false;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.composite !== undefined) this.composite = data.composite;
        if (data.cover !== undefined) {
            const cover = data.cover, color = (0, _typeUtilsJs.isString)(data.cover) ? {
                color: data.cover
            } : data.cover;
            this.cover.load(cover.color !== undefined || cover.image !== undefined ? cover : {
                color: color
            });
        }
        if (data.enable !== undefined) this.enable = data.enable;
    }
}

},{"../../../Utils/TypeUtils.js":"bKVoo","./BackgroundMaskCover.js":"1qgnF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1qgnF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BackgroundMaskCover", ()=>BackgroundMaskCover);
var _optionsColorJs = require("../OptionsColor.js");
var _typeUtilsJs = require("../../../Utils/TypeUtils.js");
class BackgroundMaskCover {
    constructor(){
        this.opacity = 1;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.color !== undefined) this.color = (0, _optionsColorJs.OptionsColor).create(this.color, data.color);
        if (data.image !== undefined) this.image = data.image;
        if (data.opacity !== undefined) this.opacity = data.opacity;
    }
}

},{"../OptionsColor.js":"bzg9S","../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dfpLr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "FullScreen", ()=>FullScreen);
var _typeUtilsJs = require("../../../Utils/TypeUtils.js");
class FullScreen {
    constructor(){
        this.enable = true;
        this.zIndex = 0;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.zIndex !== undefined) this.zIndex = data.zIndex;
    }
}

},{"../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"48Zpu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Interactivity", ()=>Interactivity);
var _eventsJs = require("./Events/Events.js");
var _interactivityDetectJs = require("../../../Enums/InteractivityDetect.js");
var _modesJs = require("./Modes/Modes.js");
var _typeUtilsJs = require("../../../Utils/TypeUtils.js");
class Interactivity {
    constructor(engine, container){
        this.detectsOn = (0, _interactivityDetectJs.InteractivityDetect).window;
        this.events = new (0, _eventsJs.Events)();
        this.modes = new (0, _modesJs.Modes)(engine, container);
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        const detectsOn = data.detectsOn;
        if (detectsOn !== undefined) this.detectsOn = detectsOn;
        this.events.load(data.events);
        this.modes.load(data.modes);
    }
}

},{"./Events/Events.js":"6mux5","../../../Enums/InteractivityDetect.js":"dReM6","./Modes/Modes.js":"2kRwR","../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mux5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Events", ()=>Events);
var _clickEventJs = require("./ClickEvent.js");
var _divEventJs = require("./DivEvent.js");
var _hoverEventJs = require("./HoverEvent.js");
var _resizeEventJs = require("./ResizeEvent.js");
var _utilsJs = require("../../../../Utils/Utils.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class Events {
    constructor(){
        this.onClick = new (0, _clickEventJs.ClickEvent)();
        this.onDiv = new (0, _divEventJs.DivEvent)();
        this.onHover = new (0, _hoverEventJs.HoverEvent)();
        this.resize = new (0, _resizeEventJs.ResizeEvent)();
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        this.onClick.load(data.onClick);
        const onDiv = data.onDiv;
        if (onDiv !== undefined) this.onDiv = (0, _utilsJs.executeOnSingleOrMultiple)(onDiv, (t)=>{
            const tmp = new (0, _divEventJs.DivEvent)();
            tmp.load(t);
            return tmp;
        });
        this.onHover.load(data.onHover);
        this.resize.load(data.resize);
    }
}

},{"./ClickEvent.js":"kjBh8","./DivEvent.js":"WIRuI","./HoverEvent.js":"5XXWb","./ResizeEvent.js":"dMPxb","../../../../Utils/Utils.js":"17M4n","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kjBh8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ClickEvent", ()=>ClickEvent);
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class ClickEvent {
    constructor(){
        this.enable = false;
        this.mode = [];
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.mode !== undefined) this.mode = data.mode;
    }
}

},{"../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WIRuI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DivEvent", ()=>DivEvent);
var _divTypeJs = require("../../../../Enums/Types/DivType.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class DivEvent {
    constructor(){
        this.selectors = [];
        this.enable = false;
        this.mode = [];
        this.type = (0, _divTypeJs.DivType).circle;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.selectors !== undefined) this.selectors = data.selectors;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.mode !== undefined) this.mode = data.mode;
        if (data.type !== undefined) this.type = data.type;
    }
}

},{"../../../../Enums/Types/DivType.js":"2TtyO","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2TtyO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DivType", ()=>DivType);
var DivType;
(function(DivType) {
    DivType["circle"] = "circle";
    DivType["rectangle"] = "rectangle";
})(DivType || (DivType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5XXWb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HoverEvent", ()=>HoverEvent);
var _parallaxJs = require("./Parallax.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class HoverEvent {
    constructor(){
        this.enable = false;
        this.mode = [];
        this.parallax = new (0, _parallaxJs.Parallax)();
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.mode !== undefined) this.mode = data.mode;
        this.parallax.load(data.parallax);
    }
}

},{"./Parallax.js":"g5l3e","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g5l3e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Parallax", ()=>Parallax);
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class Parallax {
    constructor(){
        this.enable = false;
        this.force = 2;
        this.smooth = 10;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.force !== undefined) this.force = data.force;
        if (data.smooth !== undefined) this.smooth = data.smooth;
    }
}

},{"../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dMPxb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResizeEvent", ()=>ResizeEvent);
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class ResizeEvent {
    constructor(){
        this.delay = 0.5;
        this.enable = true;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.delay !== undefined) this.delay = data.delay;
        if (data.enable !== undefined) this.enable = data.enable;
    }
}

},{"../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2kRwR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Modes", ()=>Modes);
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class Modes {
    constructor(engine, container){
        this._engine = engine;
        this._container = container;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (!this._container) return;
        const interactors = this._engine.interactors.get(this._container);
        if (!interactors) return;
        for (const interactor of interactors){
            if (!interactor.loadModeOptions) continue;
            interactor.loadModeOptions(this, data);
        }
    }
}

},{"../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2dkfx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ManualParticle", ()=>ManualParticle);
var _pixelModeJs = require("../../Enums/Modes/PixelMode.js");
var _utilsJs = require("../../Utils/Utils.js");
var _typeUtilsJs = require("../../Utils/TypeUtils.js");
const defaultPosition = 50;
class ManualParticle {
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.position) this.position = {
            x: data.position.x ?? defaultPosition,
            y: data.position.y ?? defaultPosition,
            mode: data.position.mode ?? (0, _pixelModeJs.PixelMode).percent
        };
        if (data.options) this.options = (0, _utilsJs.deepExtend)({}, data.options);
    }
}

},{"../../Enums/Modes/PixelMode.js":"cCDKl","../../Utils/Utils.js":"17M4n","../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gmVzG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Responsive", ()=>Responsive);
var _responsiveModeJs = require("../../Enums/Modes/ResponsiveMode.js");
var _utilsJs = require("../../Utils/Utils.js");
var _typeUtilsJs = require("../../Utils/TypeUtils.js");
class Responsive {
    constructor(){
        this.maxWidth = Infinity;
        this.options = {};
        this.mode = (0, _responsiveModeJs.ResponsiveMode).canvas;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (!(0, _typeUtilsJs.isNull)(data.maxWidth)) this.maxWidth = data.maxWidth;
        if (!(0, _typeUtilsJs.isNull)(data.mode)) {
            if (data.mode === (0, _responsiveModeJs.ResponsiveMode).screen) this.mode = (0, _responsiveModeJs.ResponsiveMode).screen;
            else this.mode = (0, _responsiveModeJs.ResponsiveMode).canvas;
        }
        if (!(0, _typeUtilsJs.isNull)(data.options)) this.options = (0, _utilsJs.deepExtend)({}, data.options);
    }
}

},{"../../Enums/Modes/ResponsiveMode.js":"1vowI","../../Utils/Utils.js":"17M4n","../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1vowI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ResponsiveMode", ()=>ResponsiveMode);
var ResponsiveMode;
(function(ResponsiveMode) {
    ResponsiveMode["screen"] = "screen";
    ResponsiveMode["canvas"] = "canvas";
})(ResponsiveMode || (ResponsiveMode = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5vbwW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Theme", ()=>Theme);
var _themeDefaultJs = require("./ThemeDefault.js");
var _utilsJs = require("../../../Utils/Utils.js");
var _typeUtilsJs = require("../../../Utils/TypeUtils.js");
class Theme {
    constructor(){
        this.name = "";
        this.default = new (0, _themeDefaultJs.ThemeDefault)();
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.name !== undefined) this.name = data.name;
        this.default.load(data.default);
        if (data.options !== undefined) this.options = (0, _utilsJs.deepExtend)({}, data.options);
    }
}

},{"./ThemeDefault.js":"64zhn","../../../Utils/Utils.js":"17M4n","../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"64zhn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ThemeDefault", ()=>ThemeDefault);
var _themeModeJs = require("../../../Enums/Modes/ThemeMode.js");
var _typeUtilsJs = require("../../../Utils/TypeUtils.js");
class ThemeDefault {
    constructor(){
        this.auto = false;
        this.mode = (0, _themeModeJs.ThemeMode).any;
        this.value = false;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.auto !== undefined) this.auto = data.auto;
        if (data.mode !== undefined) this.mode = data.mode;
        if (data.value !== undefined) this.value = data.value;
    }
}

},{"../../../Enums/Modes/ThemeMode.js":"gmnYr","../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gmnYr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ThemeMode", ()=>ThemeMode);
var ThemeMode;
(function(ThemeMode) {
    ThemeMode["any"] = "any";
    ThemeMode["dark"] = "dark";
    ThemeMode["light"] = "light";
})(ThemeMode || (ThemeMode = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eM9C9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadOptions", ()=>loadOptions);
parcelHelpers.export(exports, "loadParticlesOptions", ()=>loadParticlesOptions);
var _particlesOptionsJs = require("../Options/Classes/Particles/ParticlesOptions.js");
function loadOptions(options, ...sourceOptionsArr) {
    for (const sourceOptions of sourceOptionsArr)options.load(sourceOptions);
}
function loadParticlesOptions(engine, container, ...sourceOptionsArr) {
    const options = new (0, _particlesOptionsJs.ParticlesOptions)(engine, container);
    loadOptions(options, ...sourceOptionsArr);
    return options;
}

},{"../Options/Classes/Particles/ParticlesOptions.js":"d1MQq","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d1MQq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticlesOptions", ()=>ParticlesOptions);
var _utilsJs = require("../../../Utils/Utils.js");
var _animatableColorJs = require("../AnimatableColor.js");
var _collisionsJs = require("./Collisions/Collisions.js");
var _effectJs = require("./Effect/Effect.js");
var _moveJs = require("./Move/Move.js");
var _opacityJs = require("./Opacity/Opacity.js");
var _particlesBounceJs = require("./Bounce/ParticlesBounce.js");
var _particlesNumberJs = require("./Number/ParticlesNumber.js");
var _shadowJs = require("./Shadow.js");
var _shapeJs = require("./Shape/Shape.js");
var _sizeJs = require("./Size/Size.js");
var _strokeJs = require("./Stroke.js");
var _zindexJs = require("./ZIndex/ZIndex.js");
var _typeUtilsJs = require("../../../Utils/TypeUtils.js");
class ParticlesOptions {
    constructor(engine, container){
        this._engine = engine;
        this._container = container;
        this.bounce = new (0, _particlesBounceJs.ParticlesBounce)();
        this.collisions = new (0, _collisionsJs.Collisions)();
        this.color = new (0, _animatableColorJs.AnimatableColor)();
        this.color.value = "#fff";
        this.effect = new (0, _effectJs.Effect)();
        this.groups = {};
        this.move = new (0, _moveJs.Move)();
        this.number = new (0, _particlesNumberJs.ParticlesNumber)();
        this.opacity = new (0, _opacityJs.Opacity)();
        this.reduceDuplicates = false;
        this.shadow = new (0, _shadowJs.Shadow)();
        this.shape = new (0, _shapeJs.Shape)();
        this.size = new (0, _sizeJs.Size)();
        this.stroke = new (0, _strokeJs.Stroke)();
        this.zIndex = new (0, _zindexJs.ZIndex)();
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.groups !== undefined) for (const group of Object.keys(data.groups)){
            if (!Object.hasOwn(data.groups, group)) continue;
            const item = data.groups[group];
            if (item !== undefined) this.groups[group] = (0, _utilsJs.deepExtend)(this.groups[group] ?? {}, item);
        }
        if (data.reduceDuplicates !== undefined) this.reduceDuplicates = data.reduceDuplicates;
        this.bounce.load(data.bounce);
        this.color.load((0, _animatableColorJs.AnimatableColor).create(this.color, data.color));
        this.effect.load(data.effect);
        this.move.load(data.move);
        this.number.load(data.number);
        this.opacity.load(data.opacity);
        this.shape.load(data.shape);
        this.size.load(data.size);
        this.shadow.load(data.shadow);
        this.zIndex.load(data.zIndex);
        this.collisions.load(data.collisions);
        if (data.interactivity !== undefined) this.interactivity = (0, _utilsJs.deepExtend)({}, data.interactivity);
        const strokeToLoad = data.stroke;
        if (strokeToLoad) this.stroke = (0, _utilsJs.executeOnSingleOrMultiple)(strokeToLoad, (t)=>{
            const tmp = new (0, _strokeJs.Stroke)();
            tmp.load(t);
            return tmp;
        });
        if (this._container) {
            const updaters = this._engine.updaters.get(this._container);
            if (updaters) {
                for (const updater of updaters)if (updater.loadOptions) updater.loadOptions(this, data);
            }
            const interactors = this._engine.interactors.get(this._container);
            if (interactors) {
                for (const interactor of interactors)if (interactor.loadParticlesOptions) interactor.loadParticlesOptions(this, data);
            }
        }
    }
}

},{"../../../Utils/Utils.js":"17M4n","../AnimatableColor.js":"5djnu","./Collisions/Collisions.js":"5vSbf","./Effect/Effect.js":"5AUR6","./Move/Move.js":"hupTV","./Opacity/Opacity.js":"gntnr","./Bounce/ParticlesBounce.js":"VqyxP","./Number/ParticlesNumber.js":"jRQTT","./Shadow.js":"gSdou","./Shape/Shape.js":"jy5CK","./Size/Size.js":"1K5Wn","./Stroke.js":"j8rvF","./ZIndex/ZIndex.js":"783r3","../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5djnu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimatableColor", ()=>AnimatableColor);
var _typeUtilsJs = require("../../Utils/TypeUtils.js");
var _hslAnimationJs = require("./HslAnimation.js");
var _optionsColorJs = require("./OptionsColor.js");
class AnimatableColor extends (0, _optionsColorJs.OptionsColor) {
    constructor(){
        super();
        this.animation = new (0, _hslAnimationJs.HslAnimation)();
    }
    static create(source, data) {
        const color = new AnimatableColor();
        color.load(source);
        if (data !== undefined) {
            if ((0, _typeUtilsJs.isString)(data) || (0, _typeUtilsJs.isArray)(data)) color.load({
                value: data
            });
            else color.load(data);
        }
        return color;
    }
    load(data) {
        super.load(data);
        if ((0, _typeUtilsJs.isNull)(data)) return;
        const colorAnimation = data.animation;
        if (colorAnimation !== undefined) {
            if (colorAnimation.enable !== undefined) this.animation.h.load(colorAnimation);
            else this.animation.load(data.animation);
        }
    }
}

},{"../../Utils/TypeUtils.js":"bKVoo","./HslAnimation.js":"hzzzN","./OptionsColor.js":"bzg9S","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hzzzN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HslAnimation", ()=>HslAnimation);
var _colorAnimationJs = require("./ColorAnimation.js");
var _typeUtilsJs = require("../../Utils/TypeUtils.js");
class HslAnimation {
    constructor(){
        this.h = new (0, _colorAnimationJs.ColorAnimation)();
        this.s = new (0, _colorAnimationJs.ColorAnimation)();
        this.l = new (0, _colorAnimationJs.ColorAnimation)();
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        this.h.load(data.h);
        this.s.load(data.s);
        this.l.load(data.l);
    }
}

},{"./ColorAnimation.js":"7jUHD","../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7jUHD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorAnimation", ()=>ColorAnimation);
var _animationOptionsJs = require("./AnimationOptions.js");
var _typeUtilsJs = require("../../Utils/TypeUtils.js");
var _numberUtilsJs = require("../../Utils/NumberUtils.js");
class ColorAnimation extends (0, _animationOptionsJs.AnimationOptions) {
    constructor(){
        super();
        this.offset = 0;
        this.sync = true;
    }
    load(data) {
        super.load(data);
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.offset !== undefined) this.offset = (0, _numberUtilsJs.setRangeValue)(data.offset);
    }
}

},{"./AnimationOptions.js":"abEvO","../../Utils/TypeUtils.js":"bKVoo","../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"abEvO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "AnimationOptions", ()=>AnimationOptions);
parcelHelpers.export(exports, "RangedAnimationOptions", ()=>RangedAnimationOptions);
var _animationModeJs = require("../../Enums/Modes/AnimationMode.js");
var _startValueTypeJs = require("../../Enums/Types/StartValueType.js");
var _typeUtilsJs = require("../../Utils/TypeUtils.js");
var _numberUtilsJs = require("../../Utils/NumberUtils.js");
class AnimationOptions {
    constructor(){
        this.count = 0;
        this.enable = false;
        this.speed = 1;
        this.decay = 0;
        this.delay = 0;
        this.sync = false;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.count !== undefined) this.count = (0, _numberUtilsJs.setRangeValue)(data.count);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.speed !== undefined) this.speed = (0, _numberUtilsJs.setRangeValue)(data.speed);
        if (data.decay !== undefined) this.decay = (0, _numberUtilsJs.setRangeValue)(data.decay);
        if (data.delay !== undefined) this.delay = (0, _numberUtilsJs.setRangeValue)(data.delay);
        if (data.sync !== undefined) this.sync = data.sync;
    }
}
class RangedAnimationOptions extends AnimationOptions {
    constructor(){
        super();
        this.mode = (0, _animationModeJs.AnimationMode).auto;
        this.startValue = (0, _startValueTypeJs.StartValueType).random;
    }
    load(data) {
        super.load(data);
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.mode !== undefined) this.mode = data.mode;
        if (data.startValue !== undefined) this.startValue = data.startValue;
    }
}

},{"../../Enums/Modes/AnimationMode.js":"05e6W","../../Enums/Types/StartValueType.js":"9v8mk","../../Utils/TypeUtils.js":"bKVoo","../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5vSbf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Collisions", ()=>Collisions);
var _collisionModeJs = require("../../../../Enums/Modes/CollisionMode.js");
var _collisionsAbsorbJs = require("./CollisionsAbsorb.js");
var _collisionsOverlapJs = require("./CollisionsOverlap.js");
var _particlesBounceJs = require("../Bounce/ParticlesBounce.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
var _numberUtilsJs = require("../../../../Utils/NumberUtils.js");
class Collisions {
    constructor(){
        this.absorb = new (0, _collisionsAbsorbJs.CollisionsAbsorb)();
        this.bounce = new (0, _particlesBounceJs.ParticlesBounce)();
        this.enable = false;
        this.maxSpeed = 50;
        this.mode = (0, _collisionModeJs.CollisionMode).bounce;
        this.overlap = new (0, _collisionsOverlapJs.CollisionsOverlap)();
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        this.absorb.load(data.absorb);
        this.bounce.load(data.bounce);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.maxSpeed !== undefined) this.maxSpeed = (0, _numberUtilsJs.setRangeValue)(data.maxSpeed);
        if (data.mode !== undefined) this.mode = data.mode;
        this.overlap.load(data.overlap);
    }
}

},{"../../../../Enums/Modes/CollisionMode.js":"av2pf","./CollisionsAbsorb.js":"2TAHy","./CollisionsOverlap.js":"3UIdS","../Bounce/ParticlesBounce.js":"VqyxP","../../../../Utils/TypeUtils.js":"bKVoo","../../../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"av2pf":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollisionMode", ()=>CollisionMode);
var CollisionMode;
(function(CollisionMode) {
    CollisionMode["absorb"] = "absorb";
    CollisionMode["bounce"] = "bounce";
    CollisionMode["destroy"] = "destroy";
})(CollisionMode || (CollisionMode = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2TAHy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollisionsAbsorb", ()=>CollisionsAbsorb);
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class CollisionsAbsorb {
    constructor(){
        this.speed = 2;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.speed !== undefined) this.speed = data.speed;
    }
}

},{"../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3UIdS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CollisionsOverlap", ()=>CollisionsOverlap);
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class CollisionsOverlap {
    constructor(){
        this.enable = true;
        this.retries = 0;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.retries !== undefined) this.retries = data.retries;
    }
}

},{"../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"VqyxP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticlesBounce", ()=>ParticlesBounce);
var _particlesBounceFactorJs = require("./ParticlesBounceFactor.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class ParticlesBounce {
    constructor(){
        this.horizontal = new (0, _particlesBounceFactorJs.ParticlesBounceFactor)();
        this.vertical = new (0, _particlesBounceFactorJs.ParticlesBounceFactor)();
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        this.horizontal.load(data.horizontal);
        this.vertical.load(data.vertical);
    }
}

},{"./ParticlesBounceFactor.js":"3gkvS","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3gkvS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticlesBounceFactor", ()=>ParticlesBounceFactor);
var _valueWithRandomJs = require("../../ValueWithRandom.js");
class ParticlesBounceFactor extends (0, _valueWithRandomJs.ValueWithRandom) {
    constructor(){
        super();
        this.value = 1;
    }
}

},{"../../ValueWithRandom.js":"dKmbd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dKmbd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ValueWithRandom", ()=>ValueWithRandom);
parcelHelpers.export(exports, "AnimationValueWithRandom", ()=>AnimationValueWithRandom);
parcelHelpers.export(exports, "RangedAnimationValueWithRandom", ()=>RangedAnimationValueWithRandom);
var _animationOptionsJs = require("./AnimationOptions.js");
var _typeUtilsJs = require("../../Utils/TypeUtils.js");
var _numberUtilsJs = require("../../Utils/NumberUtils.js");
class ValueWithRandom {
    constructor(){
        this.value = 0;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (!(0, _typeUtilsJs.isNull)(data.value)) this.value = (0, _numberUtilsJs.setRangeValue)(data.value);
    }
}
class AnimationValueWithRandom extends ValueWithRandom {
    constructor(){
        super();
        this.animation = new (0, _animationOptionsJs.AnimationOptions)();
    }
    load(data) {
        super.load(data);
        if ((0, _typeUtilsJs.isNull)(data)) return;
        const animation = data.animation;
        if (animation !== undefined) this.animation.load(animation);
    }
}
class RangedAnimationValueWithRandom extends AnimationValueWithRandom {
    constructor(){
        super();
        this.animation = new (0, _animationOptionsJs.RangedAnimationOptions)();
    }
    load(data) {
        super.load(data);
    }
}

},{"./AnimationOptions.js":"abEvO","../../Utils/TypeUtils.js":"bKVoo","../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5AUR6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Effect", ()=>Effect);
var _utilsJs = require("../../../../Utils/Utils.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class Effect {
    constructor(){
        this.close = true;
        this.fill = true;
        this.options = {};
        this.type = [];
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        const options = data.options;
        if (options !== undefined) for(const effect in options){
            const item = options[effect];
            if (item) this.options[effect] = (0, _utilsJs.deepExtend)(this.options[effect] ?? {}, item);
        }
        if (data.close !== undefined) this.close = data.close;
        if (data.fill !== undefined) this.fill = data.fill;
        if (data.type !== undefined) this.type = data.type;
    }
}

},{"../../../../Utils/Utils.js":"17M4n","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hupTV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Move", ()=>Move);
var _moveDirectionJs = require("../../../../Enums/Directions/MoveDirection.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
var _moveAngleJs = require("./MoveAngle.js");
var _moveAttractJs = require("./MoveAttract.js");
var _moveCenterJs = require("./MoveCenter.js");
var _moveGravityJs = require("./MoveGravity.js");
var _movePathJs = require("./Path/MovePath.js");
var _moveTrailJs = require("./MoveTrail.js");
var _outModesJs = require("./OutModes.js");
var _spinJs = require("./Spin.js");
var _numberUtilsJs = require("../../../../Utils/NumberUtils.js");
class Move {
    constructor(){
        this.angle = new (0, _moveAngleJs.MoveAngle)();
        this.attract = new (0, _moveAttractJs.MoveAttract)();
        this.center = new (0, _moveCenterJs.MoveCenter)();
        this.decay = 0;
        this.distance = {};
        this.direction = (0, _moveDirectionJs.MoveDirection).none;
        this.drift = 0;
        this.enable = false;
        this.gravity = new (0, _moveGravityJs.MoveGravity)();
        this.path = new (0, _movePathJs.MovePath)();
        this.outModes = new (0, _outModesJs.OutModes)();
        this.random = false;
        this.size = false;
        this.speed = 2;
        this.spin = new (0, _spinJs.Spin)();
        this.straight = false;
        this.trail = new (0, _moveTrailJs.MoveTrail)();
        this.vibrate = false;
        this.warp = false;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        this.angle.load((0, _typeUtilsJs.isNumber)(data.angle) ? {
            value: data.angle
        } : data.angle);
        this.attract.load(data.attract);
        this.center.load(data.center);
        if (data.decay !== undefined) this.decay = (0, _numberUtilsJs.setRangeValue)(data.decay);
        if (data.direction !== undefined) this.direction = data.direction;
        if (data.distance !== undefined) this.distance = (0, _typeUtilsJs.isNumber)(data.distance) ? {
            horizontal: data.distance,
            vertical: data.distance
        } : {
            ...data.distance
        };
        if (data.drift !== undefined) this.drift = (0, _numberUtilsJs.setRangeValue)(data.drift);
        if (data.enable !== undefined) this.enable = data.enable;
        this.gravity.load(data.gravity);
        const outModes = data.outModes;
        if (outModes !== undefined) {
            if ((0, _typeUtilsJs.isObject)(outModes)) this.outModes.load(outModes);
            else this.outModes.load({
                default: outModes
            });
        }
        this.path.load(data.path);
        if (data.random !== undefined) this.random = data.random;
        if (data.size !== undefined) this.size = data.size;
        if (data.speed !== undefined) this.speed = (0, _numberUtilsJs.setRangeValue)(data.speed);
        this.spin.load(data.spin);
        if (data.straight !== undefined) this.straight = data.straight;
        this.trail.load(data.trail);
        if (data.vibrate !== undefined) this.vibrate = data.vibrate;
        if (data.warp !== undefined) this.warp = data.warp;
    }
}

},{"../../../../Enums/Directions/MoveDirection.js":"3qscp","../../../../Utils/TypeUtils.js":"bKVoo","./MoveAngle.js":"iUXMO","./MoveAttract.js":"3Hg7c","./MoveCenter.js":"1Xu1n","./MoveGravity.js":"4z4Rh","./Path/MovePath.js":"cWSlc","./MoveTrail.js":"fkbOJ","./OutModes.js":"bXg6Z","./Spin.js":"8P0Om","../../../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iUXMO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MoveAngle", ()=>MoveAngle);
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
var _numberUtilsJs = require("../../../../Utils/NumberUtils.js");
class MoveAngle {
    constructor(){
        this.offset = 0;
        this.value = 90;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.offset !== undefined) this.offset = (0, _numberUtilsJs.setRangeValue)(data.offset);
        if (data.value !== undefined) this.value = (0, _numberUtilsJs.setRangeValue)(data.value);
    }
}

},{"../../../../Utils/TypeUtils.js":"bKVoo","../../../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Hg7c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MoveAttract", ()=>MoveAttract);
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
var _numberUtilsJs = require("../../../../Utils/NumberUtils.js");
class MoveAttract {
    constructor(){
        this.distance = 200;
        this.enable = false;
        this.rotate = {
            x: 3000,
            y: 3000
        };
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.distance !== undefined) this.distance = (0, _numberUtilsJs.setRangeValue)(data.distance);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.rotate) {
            const rotateX = data.rotate.x;
            if (rotateX !== undefined) this.rotate.x = rotateX;
            const rotateY = data.rotate.y;
            if (rotateY !== undefined) this.rotate.y = rotateY;
        }
    }
}

},{"../../../../Utils/TypeUtils.js":"bKVoo","../../../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Xu1n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MoveCenter", ()=>MoveCenter);
var _pixelModeJs = require("../../../../Enums/Modes/PixelMode.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class MoveCenter {
    constructor(){
        this.x = 50;
        this.y = 50;
        this.mode = (0, _pixelModeJs.PixelMode).percent;
        this.radius = 0;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.x !== undefined) this.x = data.x;
        if (data.y !== undefined) this.y = data.y;
        if (data.mode !== undefined) this.mode = data.mode;
        if (data.radius !== undefined) this.radius = data.radius;
    }
}

},{"../../../../Enums/Modes/PixelMode.js":"cCDKl","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4z4Rh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MoveGravity", ()=>MoveGravity);
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
var _numberUtilsJs = require("../../../../Utils/NumberUtils.js");
class MoveGravity {
    constructor(){
        this.acceleration = 9.81;
        this.enable = false;
        this.inverse = false;
        this.maxSpeed = 50;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.acceleration !== undefined) this.acceleration = (0, _numberUtilsJs.setRangeValue)(data.acceleration);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.inverse !== undefined) this.inverse = data.inverse;
        if (data.maxSpeed !== undefined) this.maxSpeed = (0, _numberUtilsJs.setRangeValue)(data.maxSpeed);
    }
}

},{"../../../../Utils/TypeUtils.js":"bKVoo","../../../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cWSlc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MovePath", ()=>MovePath);
var _valueWithRandomJs = require("../../../ValueWithRandom.js");
var _utilsJs = require("../../../../../Utils/Utils.js");
var _typeUtilsJs = require("../../../../../Utils/TypeUtils.js");
class MovePath {
    constructor(){
        this.clamp = true;
        this.delay = new (0, _valueWithRandomJs.ValueWithRandom)();
        this.enable = false;
        this.options = {};
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.clamp !== undefined) this.clamp = data.clamp;
        this.delay.load(data.delay);
        if (data.enable !== undefined) this.enable = data.enable;
        this.generator = data.generator;
        if (data.options) this.options = (0, _utilsJs.deepExtend)(this.options, data.options);
    }
}

},{"../../../ValueWithRandom.js":"dKmbd","../../../../../Utils/Utils.js":"17M4n","../../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fkbOJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MoveTrail", ()=>MoveTrail);
var _moveTrailFillJs = require("./MoveTrailFill.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class MoveTrail {
    constructor(){
        this.enable = false;
        this.length = 10;
        this.fill = new (0, _moveTrailFillJs.MoveTrailFill)();
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.fill !== undefined) this.fill.load(data.fill);
        if (data.length !== undefined) this.length = data.length;
    }
}

},{"./MoveTrailFill.js":"LX5cg","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"LX5cg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "MoveTrailFill", ()=>MoveTrailFill);
var _optionsColorJs = require("../../OptionsColor.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class MoveTrailFill {
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.color !== undefined) this.color = (0, _optionsColorJs.OptionsColor).create(this.color, data.color);
        if (data.image !== undefined) this.image = data.image;
    }
}

},{"../../OptionsColor.js":"bzg9S","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bXg6Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OutModes", ()=>OutModes);
var _outModeJs = require("../../../../Enums/Modes/OutMode.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class OutModes {
    constructor(){
        this.default = (0, _outModeJs.OutMode).out;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.default !== undefined) this.default = data.default;
        this.bottom = data.bottom ?? data.default;
        this.left = data.left ?? data.default;
        this.right = data.right ?? data.default;
        this.top = data.top ?? data.default;
    }
}

},{"../../../../Enums/Modes/OutMode.js":"jMT26","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jMT26":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OutMode", ()=>OutMode);
var OutMode;
(function(OutMode) {
    OutMode["bounce"] = "bounce";
    OutMode["none"] = "none";
    OutMode["out"] = "out";
    OutMode["destroy"] = "destroy";
    OutMode["split"] = "split";
})(OutMode || (OutMode = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8P0Om":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Spin", ()=>Spin);
var _utilsJs = require("../../../../Utils/Utils.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
var _numberUtilsJs = require("../../../../Utils/NumberUtils.js");
class Spin {
    constructor(){
        this.acceleration = 0;
        this.enable = false;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.acceleration !== undefined) this.acceleration = (0, _numberUtilsJs.setRangeValue)(data.acceleration);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.position) this.position = (0, _utilsJs.deepExtend)({}, data.position);
    }
}

},{"../../../../Utils/Utils.js":"17M4n","../../../../Utils/TypeUtils.js":"bKVoo","../../../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gntnr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Opacity", ()=>Opacity);
var _opacityAnimationJs = require("./OpacityAnimation.js");
var _valueWithRandomJs = require("../../ValueWithRandom.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class Opacity extends (0, _valueWithRandomJs.RangedAnimationValueWithRandom) {
    constructor(){
        super();
        this.animation = new (0, _opacityAnimationJs.OpacityAnimation)();
        this.value = 1;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        super.load(data);
        const animation = data.animation;
        if (animation !== undefined) this.animation.load(animation);
    }
}

},{"./OpacityAnimation.js":"bmRKN","../../ValueWithRandom.js":"dKmbd","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bmRKN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OpacityAnimation", ()=>OpacityAnimation);
var _destroyTypeJs = require("../../../../Enums/Types/DestroyType.js");
var _animationOptionsJs = require("../../AnimationOptions.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class OpacityAnimation extends (0, _animationOptionsJs.RangedAnimationOptions) {
    constructor(){
        super();
        this.destroy = (0, _destroyTypeJs.DestroyType).none;
        this.speed = 2;
    }
    load(data) {
        super.load(data);
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.destroy !== undefined) this.destroy = data.destroy;
    }
}

},{"../../../../Enums/Types/DestroyType.js":"dQDgD","../../AnimationOptions.js":"abEvO","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jRQTT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticlesNumber", ()=>ParticlesNumber);
var _particlesDensityJs = require("./ParticlesDensity.js");
var _particlesNumberLimitJs = require("./ParticlesNumberLimit.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class ParticlesNumber {
    constructor(){
        this.density = new (0, _particlesDensityJs.ParticlesDensity)();
        this.limit = new (0, _particlesNumberLimitJs.ParticlesNumberLimit)();
        this.value = 0;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        this.density.load(data.density);
        this.limit.load(data.limit);
        if (data.value !== undefined) this.value = data.value;
    }
}

},{"./ParticlesDensity.js":"4SGsC","./ParticlesNumberLimit.js":"eybIF","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4SGsC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticlesDensity", ()=>ParticlesDensity);
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class ParticlesDensity {
    constructor(){
        this.enable = false;
        this.width = 1920;
        this.height = 1080;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.enable !== undefined) this.enable = data.enable;
        const width = data.width;
        if (width !== undefined) this.width = width;
        const height = data.height;
        if (height !== undefined) this.height = height;
    }
}

},{"../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eybIF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticlesNumberLimit", ()=>ParticlesNumberLimit);
var _limitModeJs = require("../../../../Enums/Modes/LimitMode.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class ParticlesNumberLimit {
    constructor(){
        this.mode = (0, _limitModeJs.LimitMode).delete;
        this.value = 0;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.mode !== undefined) this.mode = data.mode;
        if (data.value !== undefined) this.value = data.value;
    }
}

},{"../../../../Enums/Modes/LimitMode.js":"lPB4N","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPB4N":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LimitMode", ()=>LimitMode);
var LimitMode;
(function(LimitMode) {
    LimitMode["delete"] = "delete";
    LimitMode["wait"] = "wait";
})(LimitMode || (LimitMode = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSdou":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Shadow", ()=>Shadow);
var _optionsColorJs = require("../OptionsColor.js");
var _typeUtilsJs = require("../../../Utils/TypeUtils.js");
class Shadow {
    constructor(){
        this.blur = 0;
        this.color = new (0, _optionsColorJs.OptionsColor)();
        this.enable = false;
        this.offset = {
            x: 0,
            y: 0
        };
        this.color.value = "#000";
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.blur !== undefined) this.blur = data.blur;
        this.color = (0, _optionsColorJs.OptionsColor).create(this.color, data.color);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.offset === undefined) return;
        if (data.offset.x !== undefined) this.offset.x = data.offset.x;
        if (data.offset.y !== undefined) this.offset.y = data.offset.y;
    }
}

},{"../OptionsColor.js":"bzg9S","../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jy5CK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Shape", ()=>Shape);
var _utilsJs = require("../../../../Utils/Utils.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class Shape {
    constructor(){
        this.close = true;
        this.fill = true;
        this.options = {};
        this.type = "circle";
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        const options = data.options;
        if (options !== undefined) for(const shape in options){
            const item = options[shape];
            if (item) this.options[shape] = (0, _utilsJs.deepExtend)(this.options[shape] ?? {}, item);
        }
        if (data.close !== undefined) this.close = data.close;
        if (data.fill !== undefined) this.fill = data.fill;
        if (data.type !== undefined) this.type = data.type;
    }
}

},{"../../../../Utils/Utils.js":"17M4n","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1K5Wn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Size", ()=>Size);
var _valueWithRandomJs = require("../../ValueWithRandom.js");
var _sizeAnimationJs = require("./SizeAnimation.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class Size extends (0, _valueWithRandomJs.RangedAnimationValueWithRandom) {
    constructor(){
        super();
        this.animation = new (0, _sizeAnimationJs.SizeAnimation)();
        this.value = 3;
    }
    load(data) {
        super.load(data);
        if ((0, _typeUtilsJs.isNull)(data)) return;
        const animation = data.animation;
        if (animation !== undefined) this.animation.load(animation);
    }
}

},{"../../ValueWithRandom.js":"dKmbd","./SizeAnimation.js":"kvh2y","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kvh2y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SizeAnimation", ()=>SizeAnimation);
var _destroyTypeJs = require("../../../../Enums/Types/DestroyType.js");
var _animationOptionsJs = require("../../AnimationOptions.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class SizeAnimation extends (0, _animationOptionsJs.RangedAnimationOptions) {
    constructor(){
        super();
        this.destroy = (0, _destroyTypeJs.DestroyType).none;
        this.speed = 5;
    }
    load(data) {
        super.load(data);
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.destroy !== undefined) this.destroy = data.destroy;
    }
}

},{"../../../../Enums/Types/DestroyType.js":"dQDgD","../../AnimationOptions.js":"abEvO","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j8rvF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Stroke", ()=>Stroke);
var _animatableColorJs = require("../AnimatableColor.js");
var _typeUtilsJs = require("../../../Utils/TypeUtils.js");
var _numberUtilsJs = require("../../../Utils/NumberUtils.js");
class Stroke {
    constructor(){
        this.width = 0;
    }
    load(data) {
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.color !== undefined) this.color = (0, _animatableColorJs.AnimatableColor).create(this.color, data.color);
        if (data.width !== undefined) this.width = (0, _numberUtilsJs.setRangeValue)(data.width);
        if (data.opacity !== undefined) this.opacity = (0, _numberUtilsJs.setRangeValue)(data.opacity);
    }
}

},{"../AnimatableColor.js":"5djnu","../../../Utils/TypeUtils.js":"bKVoo","../../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"783r3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ZIndex", ()=>ZIndex);
var _valueWithRandomJs = require("../../ValueWithRandom.js");
var _typeUtilsJs = require("../../../../Utils/TypeUtils.js");
class ZIndex extends (0, _valueWithRandomJs.ValueWithRandom) {
    constructor(){
        super();
        this.opacityRate = 1;
        this.sizeRate = 1;
        this.velocityRate = 1;
    }
    load(data) {
        super.load(data);
        if ((0, _typeUtilsJs.isNull)(data)) return;
        if (data.opacityRate !== undefined) this.opacityRate = data.opacityRate;
        if (data.sizeRate !== undefined) this.sizeRate = data.sizeRate;
        if (data.velocityRate !== undefined) this.velocityRate = data.velocityRate;
    }
}

},{"../../ValueWithRandom.js":"dKmbd","../../../../Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"a0Lei":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Particles", ()=>Particles);
var _utilsJs = require("../Utils/Utils.js");
var _eventTypeJs = require("../Enums/Types/EventType.js");
var _interactionManagerJs = require("./Utils/InteractionManager.js");
var _limitModeJs = require("../Enums/Modes/LimitMode.js");
var _particleJs = require("./Particle.js");
var _pointJs = require("./Utils/Point.js");
var _quadTreeJs = require("./Utils/QuadTree.js");
var _rangesJs = require("./Utils/Ranges.js");
var _constantsJs = require("./Utils/Constants.js");
const qTreeCapacity = 4, squareExp = 2, defaultRemoveQuantity = 1;
const qTreeRectangle = (canvasSize)=>{
    const { height, width } = canvasSize, posOffset = -0.25, sizeFactor = 1.5;
    return new (0, _rangesJs.Rectangle)(posOffset * width, posOffset * height, sizeFactor * width, sizeFactor * height);
};
class Particles {
    constructor(engine, container){
        this._addToPool = (...particles)=>{
            this._pool.push(...particles);
        };
        this._applyDensity = (options, manualCount, group)=>{
            const numberOptions = options.number;
            if (!options.number.density?.enable) {
                if (group === undefined) this._limit = numberOptions.limit.value;
                else if (numberOptions.limit) this._groupLimits.set(group, numberOptions.limit.value);
                return;
            }
            const densityFactor = this._initDensityFactor(numberOptions.density), optParticlesNumber = numberOptions.value, minLimit = 0, optParticlesLimit = numberOptions.limit.value > minLimit ? numberOptions.limit.value : optParticlesNumber, particlesNumber = Math.min(optParticlesNumber, optParticlesLimit) * densityFactor + manualCount, particlesCount = Math.min(this.count, this.filter((t)=>t.group === group).length);
            if (group === undefined) this._limit = numberOptions.limit.value * densityFactor;
            else this._groupLimits.set(group, numberOptions.limit.value * densityFactor);
            if (particlesCount < particlesNumber) this.push(Math.abs(particlesNumber - particlesCount), undefined, options, group);
            else if (particlesCount > particlesNumber) this.removeQuantity(particlesCount - particlesNumber, group);
        };
        this._initDensityFactor = (densityOptions)=>{
            const container = this._container, defaultFactor = 1;
            if (!container.canvas.element || !densityOptions.enable) return defaultFactor;
            const canvas = container.canvas.element, pxRatio = container.retina.pixelRatio;
            return canvas.width * canvas.height / (densityOptions.height * densityOptions.width * pxRatio ** squareExp);
        };
        this._pushParticle = (position, overrideOptions, group, initializer)=>{
            try {
                let particle = this._pool.pop();
                if (!particle) particle = new (0, _particleJs.Particle)(this._engine, this._container);
                particle.init(this._nextId, position, overrideOptions, group);
                let canAdd = true;
                if (initializer) canAdd = initializer(particle);
                if (!canAdd) return;
                this._array.push(particle);
                this._zArray.push(particle);
                this._nextId++;
                this._engine.dispatchEvent((0, _eventTypeJs.EventType).particleAdded, {
                    container: this._container,
                    data: {
                        particle
                    }
                });
                return particle;
            } catch (e) {
                (0, _utilsJs.getLogger)().warning(`${(0, _constantsJs.errorPrefix)} adding particle: ${e}`);
            }
        };
        this._removeParticle = (index, group, override)=>{
            const particle = this._array[index];
            if (!particle || particle.group !== group) return false;
            const zIdx = this._zArray.indexOf(particle), deleteCount = 1;
            this._array.splice(index, deleteCount);
            this._zArray.splice(zIdx, deleteCount);
            particle.destroy(override);
            this._engine.dispatchEvent((0, _eventTypeJs.EventType).particleRemoved, {
                container: this._container,
                data: {
                    particle
                }
            });
            this._addToPool(particle);
            return true;
        };
        this._engine = engine;
        this._container = container;
        this._nextId = 0;
        this._array = [];
        this._zArray = [];
        this._pool = [];
        this._limit = 0;
        this._groupLimits = new Map();
        this._needsSort = false;
        this._lastZIndex = 0;
        this._interactionManager = new (0, _interactionManagerJs.InteractionManager)(engine, container);
        this._pluginsInitialized = false;
        const canvasSize = container.canvas.size;
        this.quadTree = new (0, _quadTreeJs.QuadTree)(qTreeRectangle(canvasSize), qTreeCapacity);
        this.movers = [];
        this.updaters = [];
    }
    get count() {
        return this._array.length;
    }
    addManualParticles() {
        const container = this._container, options = container.actualOptions;
        options.manualParticles.forEach((p)=>this.addParticle(p.position ? (0, _utilsJs.getPosition)(p.position, container.canvas.size) : undefined, p.options));
    }
    addParticle(position, overrideOptions, group, initializer) {
        const limitMode = this._container.actualOptions.particles.number.limit.mode, limit = group === undefined ? this._limit : this._groupLimits.get(group) ?? this._limit, currentCount = this.count, minLimit = 0;
        if (limit > minLimit) switch(limitMode){
            case (0, _limitModeJs.LimitMode).delete:
                {
                    const countOffset = 1, minCount = 0, countToRemove = currentCount + countOffset - limit;
                    if (countToRemove > minCount) this.removeQuantity(countToRemove);
                    break;
                }
            case (0, _limitModeJs.LimitMode).wait:
                if (currentCount >= limit) return;
                break;
        }
        return this._pushParticle(position, overrideOptions, group, initializer);
    }
    clear() {
        this._array = [];
        this._zArray = [];
        this._pluginsInitialized = false;
    }
    destroy() {
        this._array = [];
        this._zArray = [];
        this.movers = [];
        this.updaters = [];
    }
    draw(delta) {
        const container = this._container, canvas = container.canvas;
        canvas.clear();
        this.update(delta);
        for (const plugin of container.plugins.values())canvas.drawPlugin(plugin, delta);
        for (const p of this._zArray)p.draw(delta);
    }
    filter(condition) {
        return this._array.filter(condition);
    }
    find(condition) {
        return this._array.find(condition);
    }
    get(index) {
        return this._array[index];
    }
    handleClickMode(mode) {
        this._interactionManager.handleClickMode(mode);
    }
    async init() {
        const container = this._container, options = container.actualOptions;
        this._lastZIndex = 0;
        this._needsSort = false;
        await this.initPlugins();
        let handled = false;
        for (const plugin of container.plugins.values()){
            handled = plugin.particlesInitialization?.() ?? handled;
            if (handled) break;
        }
        this.addManualParticles();
        if (!handled) {
            const particlesOptions = options.particles, groups = particlesOptions.groups;
            for(const group in groups){
                const groupOptions = groups[group];
                for(let i = this.count, j = 0; j < groupOptions.number?.value && i < particlesOptions.number.value; i++, j++)this.addParticle(undefined, groupOptions, group);
            }
            for(let i = this.count; i < particlesOptions.number.value; i++)this.addParticle();
        }
    }
    async initPlugins() {
        if (this._pluginsInitialized) return;
        const container = this._container;
        this.movers = await this._engine.getMovers(container, true);
        this.updaters = await this._engine.getUpdaters(container, true);
        await this._interactionManager.init();
        for (const pathGenerator of container.pathGenerators.values())pathGenerator.init(container);
    }
    push(nb, mouse, overrideOptions, group) {
        for(let i = 0; i < nb; i++)this.addParticle(mouse?.position, overrideOptions, group);
    }
    async redraw() {
        this.clear();
        await this.init();
        this.draw({
            value: 0,
            factor: 0
        });
    }
    remove(particle, group, override) {
        this.removeAt(this._array.indexOf(particle), undefined, group, override);
    }
    removeAt(index, quantity = defaultRemoveQuantity, group, override) {
        const minIndex = 0;
        if (index < minIndex || index > this.count) return;
        let deleted = 0;
        for(let i = index; deleted < quantity && i < this.count; i++)if (this._removeParticle(i, group, override)) {
            i--;
            deleted++;
        }
    }
    removeQuantity(quantity, group) {
        const defaultIndex = 0;
        this.removeAt(defaultIndex, quantity, group);
    }
    setDensity() {
        const options = this._container.actualOptions, groups = options.particles.groups, manualCount = 0;
        for(const group in groups)this._applyDensity(groups[group], manualCount, group);
        this._applyDensity(options.particles, options.manualParticles.length);
    }
    setLastZIndex(zIndex) {
        this._lastZIndex = zIndex;
        this._needsSort = this._needsSort || this._lastZIndex < zIndex;
    }
    setResizeFactor(factor) {
        this._resizeFactor = factor;
    }
    update(delta) {
        const container = this._container, particlesToDelete = new Set();
        this.quadTree = new (0, _quadTreeJs.QuadTree)(qTreeRectangle(container.canvas.size), qTreeCapacity);
        for (const pathGenerator of container.pathGenerators.values())pathGenerator.update();
        for (const plugin of container.plugins.values())plugin.update?.(delta);
        const resizeFactor = this._resizeFactor;
        for (const particle of this._array){
            if (resizeFactor && !particle.ignoresResizeRatio) {
                particle.position.x *= resizeFactor.width;
                particle.position.y *= resizeFactor.height;
                particle.initialPosition.x *= resizeFactor.width;
                particle.initialPosition.y *= resizeFactor.height;
            }
            particle.ignoresResizeRatio = false;
            this._interactionManager.reset(particle);
            for (const plugin of this._container.plugins.values()){
                if (particle.destroyed) break;
                plugin.particleUpdate?.(particle, delta);
            }
            for (const mover of this.movers)if (mover.isEnabled(particle)) mover.move(particle, delta);
            if (particle.destroyed) {
                particlesToDelete.add(particle);
                continue;
            }
            this.quadTree.insert(new (0, _pointJs.Point)(particle.getPosition(), particle));
        }
        if (particlesToDelete.size) {
            const checkDelete = (p)=>!particlesToDelete.has(p);
            this._array = this.filter(checkDelete);
            this._zArray = this._zArray.filter(checkDelete);
            for (const particle of particlesToDelete)this._engine.dispatchEvent((0, _eventTypeJs.EventType).particleRemoved, {
                container: this._container,
                data: {
                    particle
                }
            });
            this._addToPool(...particlesToDelete);
        }
        this._interactionManager.externalInteract(delta);
        for (const particle of this._array){
            for (const updater of this.updaters)updater.update(particle, delta);
            if (!particle.destroyed && !particle.spawning) this._interactionManager.particlesInteract(particle, delta);
        }
        delete this._resizeFactor;
        if (this._needsSort) {
            const zArray = this._zArray;
            zArray.sort((a, b)=>b.position.z - a.position.z || a.id - b.id);
            const lengthOffset = 1;
            this._lastZIndex = zArray[zArray.length - lengthOffset].position.z;
            this._needsSort = false;
        }
    }
}

},{"../Utils/Utils.js":"17M4n","../Enums/Types/EventType.js":"hWRHD","./Utils/InteractionManager.js":"aNeHA","../Enums/Modes/LimitMode.js":"lPB4N","./Particle.js":"gILLP","./Utils/Point.js":"iGxI4","./Utils/QuadTree.js":"kT9VC","./Utils/Ranges.js":"7Uilo","./Utils/Constants.js":"9fra9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aNeHA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InteractionManager", ()=>InteractionManager);
var _interactorTypeJs = require("../../Enums/Types/InteractorType.js");
class InteractionManager {
    constructor(engine, container){
        this.container = container;
        this._engine = engine;
        this._interactors = [];
        this._externalInteractors = [];
        this._particleInteractors = [];
    }
    externalInteract(delta) {
        for (const interactor of this._externalInteractors)if (interactor.isEnabled()) interactor.interact(delta);
    }
    handleClickMode(mode) {
        for (const interactor of this._externalInteractors)interactor.handleClickMode?.(mode);
    }
    async init() {
        this._interactors = await this._engine.getInteractors(this.container, true);
        this._externalInteractors = [];
        this._particleInteractors = [];
        for (const interactor of this._interactors){
            switch(interactor.type){
                case (0, _interactorTypeJs.InteractorType).external:
                    this._externalInteractors.push(interactor);
                    break;
                case (0, _interactorTypeJs.InteractorType).particles:
                    this._particleInteractors.push(interactor);
                    break;
            }
            interactor.init();
        }
    }
    particlesInteract(particle, delta) {
        for (const interactor of this._externalInteractors)interactor.clear(particle, delta);
        for (const interactor of this._particleInteractors)if (interactor.isEnabled(particle)) interactor.interact(particle, delta);
    }
    reset(particle) {
        for (const interactor of this._externalInteractors)if (interactor.isEnabled()) interactor.reset(particle);
        for (const interactor of this._particleInteractors)if (interactor.isEnabled(particle)) interactor.reset(particle);
    }
}

},{"../../Enums/Types/InteractorType.js":"60Rgj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"60Rgj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InteractorType", ()=>InteractorType);
var InteractorType;
(function(InteractorType) {
    InteractorType["external"] = "external";
    InteractorType["particles"] = "particles";
})(InteractorType || (InteractorType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gILLP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Particle", ()=>Particle);
var _vectorsJs = require("./Utils/Vectors.js");
var _numberUtilsJs = require("../Utils/NumberUtils.js");
var _utilsJs = require("../Utils/Utils.js");
var _constantsJs = require("./Utils/Constants.js");
var _colorUtilsJs = require("../Utils/ColorUtils.js");
var _eventTypeJs = require("../Enums/Types/EventType.js");
var _interactivityJs = require("../Options/Classes/Interactivity/Interactivity.js");
var _moveDirectionJs = require("../Enums/Directions/MoveDirection.js");
var _outModeJs = require("../Enums/Modes/OutMode.js");
var _particleOutTypeJs = require("../Enums/Types/ParticleOutType.js");
var _pixelModeJs = require("../Enums/Modes/PixelMode.js");
var _canvasUtilsJs = require("../Utils/CanvasUtils.js");
var _optionsUtilsJs = require("../Utils/OptionsUtils.js");
const defaultRetryCount = 0, double = 2, half = 0.5, squareExp = 2, randomString = "random";
function loadEffectData(effect, effectOptions, id, reduceDuplicates) {
    const effectData = effectOptions.options[effect];
    if (!effectData) return;
    return (0, _utilsJs.deepExtend)({
        close: effectOptions.close,
        fill: effectOptions.fill
    }, (0, _utilsJs.itemFromSingleOrMultiple)(effectData, id, reduceDuplicates));
}
function loadShapeData(shape, shapeOptions, id, reduceDuplicates) {
    const shapeData = shapeOptions.options[shape];
    if (!shapeData) return;
    return (0, _utilsJs.deepExtend)({
        close: shapeOptions.close,
        fill: shapeOptions.fill
    }, (0, _utilsJs.itemFromSingleOrMultiple)(shapeData, id, reduceDuplicates));
}
function fixOutMode(data) {
    if (!(0, _utilsJs.isInArray)(data.outMode, data.checkModes)) return;
    const diameter = data.radius * double;
    if (data.coord > data.maxCoord - diameter) data.setCb(-data.radius);
    else if (data.coord < diameter) data.setCb(data.radius);
}
class Particle {
    constructor(engine, container){
        this.container = container;
        this._calcPosition = (container, position, zIndex, tryCount = defaultRetryCount)=>{
            for (const plugin of container.plugins.values()){
                const pluginPos = plugin.particlePosition !== undefined ? plugin.particlePosition(position, this) : undefined;
                if (pluginPos) return (0, _vectorsJs.Vector3d).create(pluginPos.x, pluginPos.y, zIndex);
            }
            const canvasSize = container.canvas.size, exactPosition = (0, _numberUtilsJs.calcExactPositionOrRandomFromSize)({
                size: canvasSize,
                position: position
            }), pos = (0, _vectorsJs.Vector3d).create(exactPosition.x, exactPosition.y, zIndex), radius = this.getRadius(), outModes = this.options.move.outModes, fixHorizontal = (outMode)=>{
                fixOutMode({
                    outMode,
                    checkModes: [
                        (0, _outModeJs.OutMode).bounce
                    ],
                    coord: pos.x,
                    maxCoord: container.canvas.size.width,
                    setCb: (value)=>pos.x += value,
                    radius
                });
            }, fixVertical = (outMode)=>{
                fixOutMode({
                    outMode,
                    checkModes: [
                        (0, _outModeJs.OutMode).bounce
                    ],
                    coord: pos.y,
                    maxCoord: container.canvas.size.height,
                    setCb: (value)=>pos.y += value,
                    radius
                });
            };
            fixHorizontal(outModes.left ?? outModes.default);
            fixHorizontal(outModes.right ?? outModes.default);
            fixVertical(outModes.top ?? outModes.default);
            fixVertical(outModes.bottom ?? outModes.default);
            if (this._checkOverlap(pos, tryCount)) {
                const increment = 1;
                return this._calcPosition(container, undefined, zIndex, tryCount + increment);
            }
            return pos;
        };
        this._calculateVelocity = ()=>{
            const baseVelocity = (0, _numberUtilsJs.getParticleBaseVelocity)(this.direction), res = baseVelocity.copy(), moveOptions = this.options.move;
            if (moveOptions.direction === (0, _moveDirectionJs.MoveDirection).inside || moveOptions.direction === (0, _moveDirectionJs.MoveDirection).outside) return res;
            const rad = (0, _numberUtilsJs.degToRad)((0, _numberUtilsJs.getRangeValue)(moveOptions.angle.value)), radOffset = (0, _numberUtilsJs.degToRad)((0, _numberUtilsJs.getRangeValue)(moveOptions.angle.offset)), range = {
                left: radOffset - rad * half,
                right: radOffset + rad * half
            };
            if (!moveOptions.straight) res.angle += (0, _numberUtilsJs.randomInRange)((0, _numberUtilsJs.setRangeValue)(range.left, range.right));
            if (moveOptions.random && typeof moveOptions.speed === "number") res.length *= (0, _numberUtilsJs.getRandom)();
            return res;
        };
        this._checkOverlap = (pos, tryCount = defaultRetryCount)=>{
            const collisionsOptions = this.options.collisions, radius = this.getRadius();
            if (!collisionsOptions.enable) return false;
            const overlapOptions = collisionsOptions.overlap;
            if (overlapOptions.enable) return false;
            const retries = overlapOptions.retries, minRetries = 0;
            if (retries >= minRetries && tryCount > retries) throw new Error(`${(0, _constantsJs.errorPrefix)} particle is overlapping and can't be placed`);
            return !!this.container.particles.find((particle)=>(0, _numberUtilsJs.getDistance)(pos, particle.position) < radius + particle.getRadius());
        };
        this._getRollColor = (color)=>{
            if (!color || !this.roll || !this.backColor && !this.roll.alter) return color;
            const rollFactor = 1, none = 0, backFactor = this.roll.horizontal && this.roll.vertical ? double * rollFactor : rollFactor, backSum = this.roll.horizontal ? Math.PI * half : none, rolled = Math.floor(((this.roll.angle ?? none) + backSum) / (Math.PI / backFactor)) % double;
            if (!rolled) return color;
            if (this.backColor) return this.backColor;
            if (this.roll.alter) return (0, _canvasUtilsJs.alterHsl)(color, this.roll.alter.type, this.roll.alter.value);
            return color;
        };
        this._initPosition = (position)=>{
            const container = this.container, zIndexValue = (0, _numberUtilsJs.getRangeValue)(this.options.zIndex.value), minZ = 0;
            this.position = this._calcPosition(container, position, (0, _numberUtilsJs.clamp)(zIndexValue, minZ, container.zLayers));
            this.initialPosition = this.position.copy();
            const canvasSize = container.canvas.size, defaultRadius = 0;
            this.moveCenter = {
                ...(0, _utilsJs.getPosition)(this.options.move.center, canvasSize),
                radius: this.options.move.center.radius ?? defaultRadius,
                mode: this.options.move.center.mode ?? (0, _pixelModeJs.PixelMode).percent
            };
            this.direction = (0, _numberUtilsJs.getParticleDirectionAngle)(this.options.move.direction, this.position, this.moveCenter);
            switch(this.options.move.direction){
                case (0, _moveDirectionJs.MoveDirection).inside:
                    this.outType = (0, _particleOutTypeJs.ParticleOutType).inside;
                    break;
                case (0, _moveDirectionJs.MoveDirection).outside:
                    this.outType = (0, _particleOutTypeJs.ParticleOutType).outside;
                    break;
            }
            this.offset = (0, _vectorsJs.Vector).origin;
        };
        this._engine = engine;
    }
    destroy(override) {
        if (this.unbreakable || this.destroyed) return;
        this.destroyed = true;
        this.bubble.inRange = false;
        this.slow.inRange = false;
        const container = this.container, pathGenerator = this.pathGenerator, shapeDrawer = container.shapeDrawers.get(this.shape);
        shapeDrawer?.particleDestroy?.(this);
        for (const plugin of container.plugins.values())plugin.particleDestroyed?.(this, override);
        for (const updater of container.particles.updaters)updater.particleDestroyed?.(this, override);
        pathGenerator?.reset(this);
        this._engine.dispatchEvent((0, _eventTypeJs.EventType).particleDestroyed, {
            container: this.container,
            data: {
                particle: this
            }
        });
    }
    draw(delta) {
        const container = this.container, canvas = container.canvas;
        for (const plugin of container.plugins.values())canvas.drawParticlePlugin(plugin, this, delta);
        canvas.drawParticle(this, delta);
    }
    getFillColor() {
        return this._getRollColor(this.bubble.color ?? (0, _colorUtilsJs.getHslFromAnimation)(this.color));
    }
    getMass() {
        return this.getRadius() ** squareExp * Math.PI * half;
    }
    getPosition() {
        return {
            x: this.position.x + this.offset.x,
            y: this.position.y + this.offset.y,
            z: this.position.z
        };
    }
    getRadius() {
        return this.bubble.radius ?? this.size.value;
    }
    getStrokeColor() {
        return this._getRollColor(this.bubble.color ?? (0, _colorUtilsJs.getHslFromAnimation)(this.strokeColor));
    }
    init(id, position, overrideOptions, group) {
        const container = this.container, engine = this._engine;
        this.id = id;
        this.group = group;
        this.effectClose = true;
        this.effectFill = true;
        this.shapeClose = true;
        this.shapeFill = true;
        this.pathRotation = false;
        this.lastPathTime = 0;
        this.destroyed = false;
        this.unbreakable = false;
        this.isRotating = false;
        this.rotation = 0;
        this.misplaced = false;
        this.retina = {
            maxDistance: {}
        };
        this.outType = (0, _particleOutTypeJs.ParticleOutType).normal;
        this.ignoresResizeRatio = true;
        const pxRatio = container.retina.pixelRatio, mainOptions = container.actualOptions, particlesOptions = (0, _optionsUtilsJs.loadParticlesOptions)(this._engine, container, mainOptions.particles), { reduceDuplicates } = particlesOptions, effectType = particlesOptions.effect.type, shapeType = particlesOptions.shape.type;
        this.effect = (0, _utilsJs.itemFromSingleOrMultiple)(effectType, this.id, reduceDuplicates);
        this.shape = (0, _utilsJs.itemFromSingleOrMultiple)(shapeType, this.id, reduceDuplicates);
        const effectOptions = particlesOptions.effect, shapeOptions = particlesOptions.shape;
        if (overrideOptions) {
            if (overrideOptions.effect?.type) {
                const overrideEffectType = overrideOptions.effect.type, effect = (0, _utilsJs.itemFromSingleOrMultiple)(overrideEffectType, this.id, reduceDuplicates);
                if (effect) {
                    this.effect = effect;
                    effectOptions.load(overrideOptions.effect);
                }
            }
            if (overrideOptions.shape?.type) {
                const overrideShapeType = overrideOptions.shape.type, shape = (0, _utilsJs.itemFromSingleOrMultiple)(overrideShapeType, this.id, reduceDuplicates);
                if (shape) {
                    this.shape = shape;
                    shapeOptions.load(overrideOptions.shape);
                }
            }
        }
        if (this.effect === randomString) {
            const availableEffects = [
                ...this.container.effectDrawers.keys()
            ];
            this.effect = availableEffects[Math.floor(Math.random() * availableEffects.length)];
        }
        if (this.shape === randomString) {
            const availableShapes = [
                ...this.container.shapeDrawers.keys()
            ];
            this.shape = availableShapes[Math.floor(Math.random() * availableShapes.length)];
        }
        this.effectData = loadEffectData(this.effect, effectOptions, this.id, reduceDuplicates);
        this.shapeData = loadShapeData(this.shape, shapeOptions, this.id, reduceDuplicates);
        particlesOptions.load(overrideOptions);
        const effectData = this.effectData;
        if (effectData) particlesOptions.load(effectData.particles);
        const shapeData = this.shapeData;
        if (shapeData) particlesOptions.load(shapeData.particles);
        const interactivity = new (0, _interactivityJs.Interactivity)(engine, container);
        interactivity.load(container.actualOptions.interactivity);
        interactivity.load(particlesOptions.interactivity);
        this.interactivity = interactivity;
        this.effectFill = effectData?.fill ?? particlesOptions.effect.fill;
        this.effectClose = effectData?.close ?? particlesOptions.effect.close;
        this.shapeFill = shapeData?.fill ?? particlesOptions.shape.fill;
        this.shapeClose = shapeData?.close ?? particlesOptions.shape.close;
        this.options = particlesOptions;
        const pathOptions = this.options.move.path;
        this.pathDelay = (0, _numberUtilsJs.getRangeValue)(pathOptions.delay.value) * (0, _constantsJs.millisecondsToSeconds);
        if (pathOptions.generator) {
            this.pathGenerator = this._engine.getPathGenerator(pathOptions.generator);
            if (this.pathGenerator && container.addPath(pathOptions.generator, this.pathGenerator)) this.pathGenerator.init(container);
        }
        container.retina.initParticle(this);
        this.size = (0, _utilsJs.initParticleNumericAnimationValue)(this.options.size, pxRatio);
        this.bubble = {
            inRange: false
        };
        this.slow = {
            inRange: false,
            factor: 1
        };
        this._initPosition(position);
        this.initialVelocity = this._calculateVelocity();
        this.velocity = this.initialVelocity.copy();
        const decayOffset = 1;
        this.moveDecay = decayOffset - (0, _numberUtilsJs.getRangeValue)(this.options.move.decay);
        const particles = container.particles;
        particles.setLastZIndex(this.position.z);
        this.zIndexFactor = this.position.z / container.zLayers;
        this.sides = 24;
        let effectDrawer = container.effectDrawers.get(this.effect);
        if (!effectDrawer) {
            effectDrawer = this._engine.getEffectDrawer(this.effect);
            if (effectDrawer) container.effectDrawers.set(this.effect, effectDrawer);
        }
        if (effectDrawer?.loadEffect) effectDrawer.loadEffect(this);
        let shapeDrawer = container.shapeDrawers.get(this.shape);
        if (!shapeDrawer) {
            shapeDrawer = this._engine.getShapeDrawer(this.shape);
            if (shapeDrawer) container.shapeDrawers.set(this.shape, shapeDrawer);
        }
        if (shapeDrawer?.loadShape) shapeDrawer.loadShape(this);
        const sideCountFunc = shapeDrawer?.getSidesCount;
        if (sideCountFunc) this.sides = sideCountFunc(this);
        this.spawning = false;
        this.shadowColor = (0, _colorUtilsJs.rangeColorToRgb)(this._engine, this.options.shadow.color);
        for (const updater of particles.updaters)updater.init(this);
        for (const mover of particles.movers)mover.init?.(this);
        effectDrawer?.particleInit?.(container, this);
        shapeDrawer?.particleInit?.(container, this);
        for (const plugin of container.plugins.values())plugin.particleCreated?.(this);
    }
    isInsideCanvas() {
        const radius = this.getRadius(), canvasSize = this.container.canvas.size, position = this.position;
        return position.x >= -radius && position.y >= -radius && position.y <= canvasSize.height + radius && position.x <= canvasSize.width + radius;
    }
    isVisible() {
        return !this.destroyed && !this.spawning && this.isInsideCanvas();
    }
    reset() {
        for (const updater of this.container.particles.updaters)updater.reset?.(this);
    }
}

},{"./Utils/Vectors.js":"3N0C5","../Utils/NumberUtils.js":"c9eVN","../Utils/Utils.js":"17M4n","./Utils/Constants.js":"9fra9","../Utils/ColorUtils.js":"9NWNO","../Enums/Types/EventType.js":"hWRHD","../Options/Classes/Interactivity/Interactivity.js":"48Zpu","../Enums/Directions/MoveDirection.js":"3qscp","../Enums/Modes/OutMode.js":"jMT26","../Enums/Types/ParticleOutType.js":"b31LH","../Enums/Modes/PixelMode.js":"cCDKl","../Utils/CanvasUtils.js":"8COXr","../Utils/OptionsUtils.js":"eM9C9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b31LH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticleOutType", ()=>ParticleOutType);
var ParticleOutType;
(function(ParticleOutType) {
    ParticleOutType["normal"] = "normal";
    ParticleOutType["inside"] = "inside";
    ParticleOutType["outside"] = "outside";
})(ParticleOutType || (ParticleOutType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iGxI4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Point", ()=>Point);
class Point {
    constructor(position, particle){
        this.position = position;
        this.particle = particle;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kT9VC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "QuadTree", ()=>QuadTree);
var _rangesJs = require("./Ranges.js");
var _numberUtilsJs = require("../../Utils/NumberUtils.js");
const half = 0.5, double = 2, subdivideCount = 4;
class QuadTree {
    constructor(rectangle, capacity){
        this.rectangle = rectangle;
        this.capacity = capacity;
        this._subdivide = ()=>{
            const { x, y } = this.rectangle.position, { width, height } = this.rectangle.size, { capacity } = this;
            for(let i = 0; i < subdivideCount; i++){
                const fixedIndex = i % double;
                this._subs.push(new QuadTree(new (0, _rangesJs.Rectangle)(x + width * half * fixedIndex, y + height * half * (Math.round(i * half) - fixedIndex), width * half, height * half), capacity));
            }
            this._divided = true;
        };
        this._points = [];
        this._divided = false;
        this._subs = [];
    }
    insert(point) {
        if (!this.rectangle.contains(point.position)) return false;
        if (this._points.length < this.capacity) {
            this._points.push(point);
            return true;
        }
        if (!this._divided) this._subdivide();
        return this._subs.some((sub)=>sub.insert(point));
    }
    query(range, check) {
        const res = [];
        if (!range.intersects(this.rectangle)) return [];
        for (const p of this._points){
            if (!range.contains(p.position) && (0, _numberUtilsJs.getDistance)(range.position, p.position) > p.particle.getRadius() && (!check || check(p.particle))) continue;
            res.push(p.particle);
        }
        if (this._divided) for (const sub of this._subs)res.push(...sub.query(range, check));
        return res;
    }
    queryCircle(position, radius, check) {
        return this.query(new (0, _rangesJs.Circle)(position.x, position.y, radius), check);
    }
    queryRectangle(position, size, check) {
        return this.query(new (0, _rangesJs.Rectangle)(position.x, position.y, size.width, size.height), check);
    }
}

},{"./Ranges.js":"7Uilo","../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Uilo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseRange", ()=>BaseRange);
parcelHelpers.export(exports, "Circle", ()=>Circle);
parcelHelpers.export(exports, "Rectangle", ()=>Rectangle);
var _rangeTypeJs = require("../../Types/RangeType.js");
var _numberUtilsJs = require("../../Utils/NumberUtils.js");
const squareExp = 2;
class BaseRange {
    constructor(x, y, type){
        this.position = {
            x: x,
            y: y
        };
        this.type = type;
    }
}
class Circle extends BaseRange {
    constructor(x, y, radius){
        super(x, y, (0, _rangeTypeJs.RangeType).circle);
        this.radius = radius;
    }
    contains(point) {
        return (0, _numberUtilsJs.getDistance)(point, this.position) <= this.radius;
    }
    intersects(range) {
        const pos1 = this.position, pos2 = range.position, distPos = {
            x: Math.abs(pos2.x - pos1.x),
            y: Math.abs(pos2.y - pos1.y)
        }, r = this.radius;
        if (range instanceof Circle || range.type === (0, _rangeTypeJs.RangeType).circle) {
            const circleRange = range, rSum = r + circleRange.radius, dist = Math.sqrt(distPos.x ** squareExp + distPos.y ** squareExp);
            return rSum > dist;
        } else if (range instanceof Rectangle || range.type === (0, _rangeTypeJs.RangeType).rectangle) {
            const rectRange = range, { width, height } = rectRange.size, edges = Math.pow(distPos.x - width, squareExp) + Math.pow(distPos.y - height, squareExp);
            return edges <= r ** squareExp || distPos.x <= r + width && distPos.y <= r + height || distPos.x <= width || distPos.y <= height;
        }
        return false;
    }
}
class Rectangle extends BaseRange {
    constructor(x, y, width, height){
        super(x, y, (0, _rangeTypeJs.RangeType).rectangle);
        this.size = {
            height: height,
            width: width
        };
    }
    contains(point) {
        const w = this.size.width, h = this.size.height, pos = this.position;
        return point.x >= pos.x && point.x <= pos.x + w && point.y >= pos.y && point.y <= pos.y + h;
    }
    intersects(range) {
        if (range instanceof Circle) return range.intersects(this);
        const w = this.size.width, h = this.size.height, pos1 = this.position, pos2 = range.position, size2 = range instanceof Rectangle ? range.size : {
            width: 0,
            height: 0
        }, w2 = size2.width, h2 = size2.height;
        return pos2.x < pos1.x + w && pos2.x + w2 > pos1.x && pos2.y < pos1.y + h && pos2.y + h2 > pos1.y;
    }
}

},{"../../Types/RangeType.js":"3wEWH","../../Utils/NumberUtils.js":"c9eVN","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3wEWH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RangeType", ()=>RangeType);
var RangeType;
(function(RangeType) {
    RangeType["circle"] = "circle";
    RangeType["rectangle"] = "rectangle";
})(RangeType || (RangeType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"q7xVz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Retina", ()=>Retina);
var _numberUtilsJs = require("../Utils/NumberUtils.js");
var _utilsJs = require("../Utils/Utils.js");
const defaultRatio = 1, defaultReduceFactor = 1;
class Retina {
    constructor(container){
        this.container = container;
        this.pixelRatio = defaultRatio;
        this.reduceFactor = defaultReduceFactor;
    }
    init() {
        const container = this.container, options = container.actualOptions;
        this.pixelRatio = !options.detectRetina || (0, _utilsJs.isSsr)() ? defaultRatio : window.devicePixelRatio;
        this.reduceFactor = defaultReduceFactor;
        const ratio = this.pixelRatio, canvas = container.canvas;
        if (canvas.element) {
            const element = canvas.element;
            canvas.size.width = element.offsetWidth * ratio;
            canvas.size.height = element.offsetHeight * ratio;
        }
        const particles = options.particles, moveOptions = particles.move;
        this.maxSpeed = (0, _numberUtilsJs.getRangeValue)(moveOptions.gravity.maxSpeed) * ratio;
        this.sizeAnimationSpeed = (0, _numberUtilsJs.getRangeValue)(particles.size.animation.speed) * ratio;
    }
    initParticle(particle) {
        const options = particle.options, ratio = this.pixelRatio, moveOptions = options.move, moveDistance = moveOptions.distance, props = particle.retina;
        props.moveDrift = (0, _numberUtilsJs.getRangeValue)(moveOptions.drift) * ratio;
        props.moveSpeed = (0, _numberUtilsJs.getRangeValue)(moveOptions.speed) * ratio;
        props.sizeAnimationSpeed = (0, _numberUtilsJs.getRangeValue)(options.size.animation.speed) * ratio;
        const maxDistance = props.maxDistance;
        maxDistance.horizontal = moveDistance.horizontal !== undefined ? moveDistance.horizontal * ratio : undefined;
        maxDistance.vertical = moveDistance.vertical !== undefined ? moveDistance.vertical * ratio : undefined;
        props.maxSpeed = (0, _numberUtilsJs.getRangeValue)(moveOptions.gravity.maxSpeed) * ratio;
    }
}

},{"../Utils/NumberUtils.js":"c9eVN","../Utils/Utils.js":"17M4n","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hW0hi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EventDispatcher", ()=>EventDispatcher);
class EventDispatcher {
    constructor(){
        this._listeners = new Map();
    }
    addEventListener(type, listener) {
        this.removeEventListener(type, listener);
        let arr = this._listeners.get(type);
        if (!arr) {
            arr = [];
            this._listeners.set(type, arr);
        }
        arr.push(listener);
    }
    dispatchEvent(type, args) {
        const listeners = this._listeners.get(type);
        listeners?.forEach((handler)=>handler(args));
    }
    hasEventListener(type) {
        return !!this._listeners.get(type);
    }
    removeAllEventListeners(type) {
        if (!type) this._listeners = new Map();
        else this._listeners.delete(type);
    }
    removeEventListener(type, listener) {
        const arr = this._listeners.get(type);
        if (!arr) return;
        const length = arr.length, idx = arr.indexOf(listener), minIndex = 0;
        if (idx < minIndex) return;
        const deleteCount = 1;
        if (length === deleteCount) this._listeners.delete(type);
        else arr.splice(idx, deleteCount);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4f3rW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _constantsJs = require("./Core/Utils/Constants.js");
parcelHelpers.exportAll(_constantsJs, exports);
var _externalInteractorBaseJs = require("./Core/Utils/ExternalInteractorBase.js");
parcelHelpers.exportAll(_externalInteractorBaseJs, exports);
var _particlesInteractorBaseJs = require("./Core/Utils/ParticlesInteractorBase.js");
parcelHelpers.exportAll(_particlesInteractorBaseJs, exports);
var _pointJs = require("./Core/Utils/Point.js");
parcelHelpers.exportAll(_pointJs, exports);
var _rangesJs = require("./Core/Utils/Ranges.js");
parcelHelpers.exportAll(_rangesJs, exports);
var _vectorsJs = require("./Core/Utils/Vectors.js");
parcelHelpers.exportAll(_vectorsJs, exports);
var _moveDirectionJs = require("./Enums/Directions/MoveDirection.js");
parcelHelpers.exportAll(_moveDirectionJs, exports);
var _rotateDirectionJs = require("./Enums/Directions/RotateDirection.js");
parcelHelpers.exportAll(_rotateDirectionJs, exports);
var _outModeDirectionJs = require("./Enums/Directions/OutModeDirection.js");
parcelHelpers.exportAll(_outModeDirectionJs, exports);
var _animationModeJs = require("./Enums/Modes/AnimationMode.js");
parcelHelpers.exportAll(_animationModeJs, exports);
var _collisionModeJs = require("./Enums/Modes/CollisionMode.js");
parcelHelpers.exportAll(_collisionModeJs, exports);
var _limitModeJs = require("./Enums/Modes/LimitMode.js");
parcelHelpers.exportAll(_limitModeJs, exports);
var _outModeJs = require("./Enums/Modes/OutMode.js");
parcelHelpers.exportAll(_outModeJs, exports);
var _pixelModeJs = require("./Enums/Modes/PixelMode.js");
parcelHelpers.exportAll(_pixelModeJs, exports);
var _themeModeJs = require("./Enums/Modes/ThemeMode.js");
parcelHelpers.exportAll(_themeModeJs, exports);
var _responsiveModeJs = require("./Enums/Modes/ResponsiveMode.js");
parcelHelpers.exportAll(_responsiveModeJs, exports);
var _alterTypeJs = require("./Enums/Types/AlterType.js");
parcelHelpers.exportAll(_alterTypeJs, exports);
var _destroyTypeJs = require("./Enums/Types/DestroyType.js");
parcelHelpers.exportAll(_destroyTypeJs, exports);
var _gradientTypeJs = require("./Enums/Types/GradientType.js");
parcelHelpers.exportAll(_gradientTypeJs, exports);
var _interactorTypeJs = require("./Enums/Types/InteractorType.js");
parcelHelpers.exportAll(_interactorTypeJs, exports);
var _particleOutTypeJs = require("./Enums/Types/ParticleOutType.js");
parcelHelpers.exportAll(_particleOutTypeJs, exports);
var _startValueTypeJs = require("./Enums/Types/StartValueType.js");
parcelHelpers.exportAll(_startValueTypeJs, exports);
var _divTypeJs = require("./Enums/Types/DivType.js");
parcelHelpers.exportAll(_divTypeJs, exports);
var _easingTypeJs = require("./Enums/Types/EasingType.js");
parcelHelpers.exportAll(_easingTypeJs, exports);
var _eventTypeJs = require("./Enums/Types/EventType.js");
parcelHelpers.exportAll(_eventTypeJs, exports);
var _animationStatusJs = require("./Enums/AnimationStatus.js");
parcelHelpers.exportAll(_animationStatusJs, exports);
var _interactivityDetectJs = require("./Enums/InteractivityDetect.js");
parcelHelpers.exportAll(_interactivityDetectJs, exports);
var _animatableColorJs = require("./Options/Classes/AnimatableColor.js");
parcelHelpers.exportAll(_animatableColorJs, exports);
var _animationOptionsJs = require("./Options/Classes/AnimationOptions.js");
parcelHelpers.exportAll(_animationOptionsJs, exports);
var _backgroundJs = require("./Options/Classes/Background/Background.js");
parcelHelpers.exportAll(_backgroundJs, exports);
var _backgroundMaskJs = require("./Options/Classes/BackgroundMask/BackgroundMask.js");
parcelHelpers.exportAll(_backgroundMaskJs, exports);
var _backgroundMaskCoverJs = require("./Options/Classes/BackgroundMask/BackgroundMaskCover.js");
parcelHelpers.exportAll(_backgroundMaskCoverJs, exports);
var _colorAnimationJs = require("./Options/Classes/ColorAnimation.js");
parcelHelpers.exportAll(_colorAnimationJs, exports);
var _fullScreenJs = require("./Options/Classes/FullScreen/FullScreen.js");
parcelHelpers.exportAll(_fullScreenJs, exports);
var _hslAnimationJs = require("./Options/Classes/HslAnimation.js");
parcelHelpers.exportAll(_hslAnimationJs, exports);
var _clickEventJs = require("./Options/Classes/Interactivity/Events/ClickEvent.js");
parcelHelpers.exportAll(_clickEventJs, exports);
var _divEventJs = require("./Options/Classes/Interactivity/Events/DivEvent.js");
parcelHelpers.exportAll(_divEventJs, exports);
parcelHelpers.exportAll(_clickEventJs, exports);
parcelHelpers.exportAll(_divEventJs, exports);
var _eventsJs = require("./Options/Classes/Interactivity/Events/Events.js");
parcelHelpers.exportAll(_eventsJs, exports);
var _hoverEventJs = require("./Options/Classes/Interactivity/Events/HoverEvent.js");
parcelHelpers.exportAll(_hoverEventJs, exports);
var _parallaxJs = require("./Options/Classes/Interactivity/Events/Parallax.js");
parcelHelpers.exportAll(_parallaxJs, exports);
var _resizeEventJs = require("./Options/Classes/Interactivity/Events/ResizeEvent.js");
parcelHelpers.exportAll(_resizeEventJs, exports);
var _interactivityJs = require("./Options/Classes/Interactivity/Interactivity.js");
parcelHelpers.exportAll(_interactivityJs, exports);
var _modesJs = require("./Options/Classes/Interactivity/Modes/Modes.js");
parcelHelpers.exportAll(_modesJs, exports);
var _manualParticleJs = require("./Options/Classes/ManualParticle.js");
parcelHelpers.exportAll(_manualParticleJs, exports);
var _optionsJs = require("./Options/Classes/Options.js");
parcelHelpers.exportAll(_optionsJs, exports);
var _optionsColorJs = require("./Options/Classes/OptionsColor.js");
parcelHelpers.exportAll(_optionsColorJs, exports);
var _particlesBounceJs = require("./Options/Classes/Particles/Bounce/ParticlesBounce.js");
parcelHelpers.exportAll(_particlesBounceJs, exports);
var _particlesBounceFactorJs = require("./Options/Classes/Particles/Bounce/ParticlesBounceFactor.js");
parcelHelpers.exportAll(_particlesBounceFactorJs, exports);
var _collisionsJs = require("./Options/Classes/Particles/Collisions/Collisions.js");
parcelHelpers.exportAll(_collisionsJs, exports);
var _collisionsAbsorbJs = require("./Options/Classes/Particles/Collisions/CollisionsAbsorb.js");
parcelHelpers.exportAll(_collisionsAbsorbJs, exports);
var _collisionsOverlapJs = require("./Options/Classes/Particles/Collisions/CollisionsOverlap.js");
parcelHelpers.exportAll(_collisionsOverlapJs, exports);
var _particlesOptionsJs = require("./Options/Classes/Particles/ParticlesOptions.js");
parcelHelpers.exportAll(_particlesOptionsJs, exports);
var _shadowJs = require("./Options/Classes/Particles/Shadow.js");
parcelHelpers.exportAll(_shadowJs, exports);
var _strokeJs = require("./Options/Classes/Particles/Stroke.js");
parcelHelpers.exportAll(_strokeJs, exports);
var _moveAttractJs = require("./Options/Classes/Particles/Move/MoveAttract.js");
parcelHelpers.exportAll(_moveAttractJs, exports);
var _moveJs = require("./Options/Classes/Particles/Move/Move.js");
parcelHelpers.exportAll(_moveJs, exports);
var _moveAngleJs = require("./Options/Classes/Particles/Move/MoveAngle.js");
parcelHelpers.exportAll(_moveAngleJs, exports);
var _moveCenterJs = require("./Options/Classes/Particles/Move/MoveCenter.js");
parcelHelpers.exportAll(_moveCenterJs, exports);
var _moveGravityJs = require("./Options/Classes/Particles/Move/MoveGravity.js");
parcelHelpers.exportAll(_moveGravityJs, exports);
var _outModesJs = require("./Options/Classes/Particles/Move/OutModes.js");
parcelHelpers.exportAll(_outModesJs, exports);
var _movePathJs = require("./Options/Classes/Particles/Move/Path/MovePath.js");
parcelHelpers.exportAll(_movePathJs, exports);
var _spinJs = require("./Options/Classes/Particles/Move/Spin.js");
parcelHelpers.exportAll(_spinJs, exports);
var _moveTrailJs = require("./Options/Classes/Particles/Move/MoveTrail.js");
parcelHelpers.exportAll(_moveTrailJs, exports);
var _particlesNumberJs = require("./Options/Classes/Particles/Number/ParticlesNumber.js");
parcelHelpers.exportAll(_particlesNumberJs, exports);
var _particlesNumberLimitJs = require("./Options/Classes/Particles/Number/ParticlesNumberLimit.js");
parcelHelpers.exportAll(_particlesNumberLimitJs, exports);
var _particlesDensityJs = require("./Options/Classes/Particles/Number/ParticlesDensity.js");
parcelHelpers.exportAll(_particlesDensityJs, exports);
var _opacityJs = require("./Options/Classes/Particles/Opacity/Opacity.js");
parcelHelpers.exportAll(_opacityJs, exports);
var _opacityAnimationJs = require("./Options/Classes/Particles/Opacity/OpacityAnimation.js");
parcelHelpers.exportAll(_opacityAnimationJs, exports);
var _shapeJs = require("./Options/Classes/Particles/Shape/Shape.js");
parcelHelpers.exportAll(_shapeJs, exports);
var _sizeJs = require("./Options/Classes/Particles/Size/Size.js");
parcelHelpers.exportAll(_sizeJs, exports);
var _sizeAnimationJs = require("./Options/Classes/Particles/Size/SizeAnimation.js");
parcelHelpers.exportAll(_sizeAnimationJs, exports);
var _zindexJs = require("./Options/Classes/Particles/ZIndex/ZIndex.js");
parcelHelpers.exportAll(_zindexJs, exports);
var _responsiveJs = require("./Options/Classes/Responsive.js");
parcelHelpers.exportAll(_responsiveJs, exports);
var _themeJs = require("./Options/Classes/Theme/Theme.js");
parcelHelpers.exportAll(_themeJs, exports);
var _themeDefaultJs = require("./Options/Classes/Theme/ThemeDefault.js");
parcelHelpers.exportAll(_themeDefaultJs, exports);
var _valueWithRandomJs = require("./Options/Classes/ValueWithRandom.js");
parcelHelpers.exportAll(_valueWithRandomJs, exports);
var _canvasUtilsJs = require("./Utils/CanvasUtils.js");
parcelHelpers.exportAll(_canvasUtilsJs, exports);
var _colorUtilsJs = require("./Utils/ColorUtils.js");
parcelHelpers.exportAll(_colorUtilsJs, exports);
var _numberUtilsJs = require("./Utils/NumberUtils.js");
parcelHelpers.exportAll(_numberUtilsJs, exports);
var _optionsUtilsJs = require("./Utils/OptionsUtils.js");
parcelHelpers.exportAll(_optionsUtilsJs, exports);
var _utilsJs = require("./Utils/Utils.js");
parcelHelpers.exportAll(_utilsJs, exports);
var _typeUtilsJs = require("./Utils/TypeUtils.js");
parcelHelpers.exportAll(_typeUtilsJs, exports);

},{"./Core/Utils/Constants.js":"9fra9","./Core/Utils/ExternalInteractorBase.js":"jyaIq","./Core/Utils/ParticlesInteractorBase.js":"iPUMm","./Core/Utils/Point.js":"iGxI4","./Core/Utils/Ranges.js":"7Uilo","./Core/Utils/Vectors.js":"3N0C5","./Enums/Directions/MoveDirection.js":"3qscp","./Enums/Directions/RotateDirection.js":"j5Cgx","./Enums/Directions/OutModeDirection.js":"aOdoD","./Enums/Modes/AnimationMode.js":"05e6W","./Enums/Modes/CollisionMode.js":"av2pf","./Enums/Modes/LimitMode.js":"lPB4N","./Enums/Modes/OutMode.js":"jMT26","./Enums/Modes/PixelMode.js":"cCDKl","./Enums/Modes/ThemeMode.js":"gmnYr","./Enums/Modes/ResponsiveMode.js":"1vowI","./Enums/Types/AlterType.js":"eeNYf","./Enums/Types/DestroyType.js":"dQDgD","./Enums/Types/GradientType.js":"kOwGN","./Enums/Types/InteractorType.js":"60Rgj","./Enums/Types/ParticleOutType.js":"b31LH","./Enums/Types/StartValueType.js":"9v8mk","./Enums/Types/DivType.js":"2TtyO","./Enums/Types/EasingType.js":"cxBqw","./Enums/Types/EventType.js":"hWRHD","./Enums/AnimationStatus.js":"fxAp8","./Enums/InteractivityDetect.js":"dReM6","./Options/Classes/AnimatableColor.js":"5djnu","./Options/Classes/AnimationOptions.js":"abEvO","./Options/Classes/Background/Background.js":"gm8xP","./Options/Classes/BackgroundMask/BackgroundMask.js":"3eGnq","./Options/Classes/BackgroundMask/BackgroundMaskCover.js":"1qgnF","./Options/Classes/ColorAnimation.js":"7jUHD","./Options/Classes/FullScreen/FullScreen.js":"dfpLr","./Options/Classes/HslAnimation.js":"hzzzN","./Options/Classes/Interactivity/Events/ClickEvent.js":"kjBh8","./Options/Classes/Interactivity/Events/DivEvent.js":"WIRuI","./Options/Classes/Interactivity/Events/Events.js":"6mux5","./Options/Classes/Interactivity/Events/HoverEvent.js":"5XXWb","./Options/Classes/Interactivity/Events/Parallax.js":"g5l3e","./Options/Classes/Interactivity/Events/ResizeEvent.js":"dMPxb","./Options/Classes/Interactivity/Interactivity.js":"48Zpu","./Options/Classes/Interactivity/Modes/Modes.js":"2kRwR","./Options/Classes/ManualParticle.js":"2dkfx","./Options/Classes/Options.js":"gH477","./Options/Classes/OptionsColor.js":"bzg9S","./Options/Classes/Particles/Bounce/ParticlesBounce.js":"VqyxP","./Options/Classes/Particles/Bounce/ParticlesBounceFactor.js":"3gkvS","./Options/Classes/Particles/Collisions/Collisions.js":"5vSbf","./Options/Classes/Particles/Collisions/CollisionsAbsorb.js":"2TAHy","./Options/Classes/Particles/Collisions/CollisionsOverlap.js":"3UIdS","./Options/Classes/Particles/ParticlesOptions.js":"d1MQq","./Options/Classes/Particles/Shadow.js":"gSdou","./Options/Classes/Particles/Stroke.js":"j8rvF","./Options/Classes/Particles/Move/MoveAttract.js":"3Hg7c","./Options/Classes/Particles/Move/Move.js":"hupTV","./Options/Classes/Particles/Move/MoveAngle.js":"iUXMO","./Options/Classes/Particles/Move/MoveCenter.js":"1Xu1n","./Options/Classes/Particles/Move/MoveGravity.js":"4z4Rh","./Options/Classes/Particles/Move/OutModes.js":"bXg6Z","./Options/Classes/Particles/Move/Path/MovePath.js":"cWSlc","./Options/Classes/Particles/Move/Spin.js":"8P0Om","./Options/Classes/Particles/Move/MoveTrail.js":"fkbOJ","./Options/Classes/Particles/Number/ParticlesNumber.js":"jRQTT","./Options/Classes/Particles/Number/ParticlesNumberLimit.js":"eybIF","./Options/Classes/Particles/Number/ParticlesDensity.js":"4SGsC","./Options/Classes/Particles/Opacity/Opacity.js":"gntnr","./Options/Classes/Particles/Opacity/OpacityAnimation.js":"bmRKN","./Options/Classes/Particles/Shape/Shape.js":"jy5CK","./Options/Classes/Particles/Size/Size.js":"1K5Wn","./Options/Classes/Particles/Size/SizeAnimation.js":"kvh2y","./Options/Classes/Particles/ZIndex/ZIndex.js":"783r3","./Options/Classes/Responsive.js":"gmVzG","./Options/Classes/Theme/Theme.js":"5vbwW","./Options/Classes/Theme/ThemeDefault.js":"64zhn","./Options/Classes/ValueWithRandom.js":"dKmbd","./Utils/CanvasUtils.js":"8COXr","./Utils/ColorUtils.js":"9NWNO","./Utils/NumberUtils.js":"c9eVN","./Utils/OptionsUtils.js":"eM9C9","./Utils/Utils.js":"17M4n","./Utils/TypeUtils.js":"bKVoo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jyaIq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ExternalInteractorBase", ()=>ExternalInteractorBase);
var _interactorTypeJs = require("../../Enums/Types/InteractorType.js");
class ExternalInteractorBase {
    constructor(container){
        this.type = (0, _interactorTypeJs.InteractorType).external;
        this.container = container;
    }
}

},{"../../Enums/Types/InteractorType.js":"60Rgj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iPUMm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParticlesInteractorBase", ()=>ParticlesInteractorBase);
var _interactorTypeJs = require("../../Enums/Types/InteractorType.js");
class ParticlesInteractorBase {
    constructor(container){
        this.type = (0, _interactorTypeJs.InteractorType).particles;
        this.container = container;
    }
}

},{"../../Enums/Types/InteractorType.js":"60Rgj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j5Cgx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RotateDirection", ()=>RotateDirection);
var RotateDirection;
(function(RotateDirection) {
    RotateDirection["clockwise"] = "clockwise";
    RotateDirection["counterClockwise"] = "counter-clockwise";
    RotateDirection["random"] = "random";
})(RotateDirection || (RotateDirection = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kOwGN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GradientType", ()=>GradientType);
var GradientType;
(function(GradientType) {
    GradientType["linear"] = "linear";
    GradientType["radial"] = "radial";
    GradientType["random"] = "random";
})(GradientType || (GradientType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cxBqw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EasingType", ()=>EasingType);
var EasingType;
(function(EasingType) {
    EasingType["easeInBack"] = "ease-in-back";
    EasingType["easeInCirc"] = "ease-in-circ";
    EasingType["easeInCubic"] = "ease-in-cubic";
    EasingType["easeInLinear"] = "ease-in-linear";
    EasingType["easeInQuad"] = "ease-in-quad";
    EasingType["easeInQuart"] = "ease-in-quart";
    EasingType["easeInQuint"] = "ease-in-quint";
    EasingType["easeInExpo"] = "ease-in-expo";
    EasingType["easeInSine"] = "ease-in-sine";
    EasingType["easeOutBack"] = "ease-out-back";
    EasingType["easeOutCirc"] = "ease-out-circ";
    EasingType["easeOutCubic"] = "ease-out-cubic";
    EasingType["easeOutLinear"] = "ease-out-linear";
    EasingType["easeOutQuad"] = "ease-out-quad";
    EasingType["easeOutQuart"] = "ease-out-quart";
    EasingType["easeOutQuint"] = "ease-out-quint";
    EasingType["easeOutExpo"] = "ease-out-expo";
    EasingType["easeOutSine"] = "ease-out-sine";
    EasingType["easeInOutBack"] = "ease-in-out-back";
    EasingType["easeInOutCirc"] = "ease-in-out-circ";
    EasingType["easeInOutCubic"] = "ease-in-out-cubic";
    EasingType["easeInOutLinear"] = "ease-in-out-linear";
    EasingType["easeInOutQuad"] = "ease-in-out-quad";
    EasingType["easeInOutQuart"] = "ease-in-out-quart";
    EasingType["easeInOutQuint"] = "ease-in-out-quint";
    EasingType["easeInOutExpo"] = "ease-in-out-expo";
    EasingType["easeInOutSine"] = "ease-in-out-sine";
})(EasingType || (EasingType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8l4GZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _colorsJs = require("./Core/Interfaces/Colors.js");
parcelHelpers.exportAll(_colorsJs, exports);
var _iboundsJs = require("./Core/Interfaces/IBounds.js");
parcelHelpers.exportAll(_iboundsJs, exports);
var _ibubbleParticleDataJs = require("./Core/Interfaces/IBubbleParticleData.js");
parcelHelpers.exportAll(_ibubbleParticleDataJs, exports);
var _icircleBouncerJs = require("./Core/Interfaces/ICircleBouncer.js");
parcelHelpers.exportAll(_icircleBouncerJs, exports);
var _icolorManagerJs = require("./Core/Interfaces/IColorManager.js");
parcelHelpers.exportAll(_icolorManagerJs, exports);
var _icontainerInteractivityJs = require("./Core/Interfaces/IContainerInteractivity.js");
parcelHelpers.exportAll(_icontainerInteractivityJs, exports);
var _icontainerPluginJs = require("./Core/Interfaces/IContainerPlugin.js");
parcelHelpers.exportAll(_icontainerPluginJs, exports);
var _icoordinatesJs = require("./Core/Interfaces/ICoordinates.js");
parcelHelpers.exportAll(_icoordinatesJs, exports);
var _ideltaJs = require("./Core/Interfaces/IDelta.js");
parcelHelpers.exportAll(_ideltaJs, exports);
var _idimensionJs = require("./Core/Interfaces/IDimension.js");
parcelHelpers.exportAll(_idimensionJs, exports);
var _idistanceJs = require("./Core/Interfaces/IDistance.js");
parcelHelpers.exportAll(_idistanceJs, exports);
var _idrawParticleParamsJs = require("./Core/Interfaces/IDrawParticleParams.js");
parcelHelpers.exportAll(_idrawParticleParamsJs, exports);
var _ieffectDrawerJs = require("./Core/Interfaces/IEffectDrawer.js");
parcelHelpers.exportAll(_ieffectDrawerJs, exports);
var _iexternalInteractorJs = require("./Core/Interfaces/IExternalInteractor.js");
parcelHelpers.exportAll(_iexternalInteractorJs, exports);
var _iinteractorJs = require("./Core/Interfaces/IInteractor.js");
parcelHelpers.exportAll(_iinteractorJs, exports);
var _iloadParamsJs = require("./Core/Interfaces/ILoadParams.js");
parcelHelpers.exportAll(_iloadParamsJs, exports);
var _imouseDataJs = require("./Core/Interfaces/IMouseData.js");
parcelHelpers.exportAll(_imouseDataJs, exports);
var _imovePathGeneratorJs = require("./Core/Interfaces/IMovePathGenerator.js");
parcelHelpers.exportAll(_imovePathGeneratorJs, exports);
var _iparticleColorStyleJs = require("./Core/Interfaces/IParticleColorStyle.js");
parcelHelpers.exportAll(_iparticleColorStyleJs, exports);
var _iparticleHslAnimationJs = require("./Core/Interfaces/IParticleHslAnimation.js");
parcelHelpers.exportAll(_iparticleHslAnimationJs, exports);
var _iparticleLifeJs = require("./Core/Interfaces/IParticleLife.js");
parcelHelpers.exportAll(_iparticleLifeJs, exports);
var _iparticleMoverJs = require("./Core/Interfaces/IParticleMover.js");
parcelHelpers.exportAll(_iparticleMoverJs, exports);
var _iparticleRetinaPropsJs = require("./Core/Interfaces/IParticleRetinaProps.js");
parcelHelpers.exportAll(_iparticleRetinaPropsJs, exports);
var _iparticleRollJs = require("./Core/Interfaces/IParticleRoll.js");
parcelHelpers.exportAll(_iparticleRollJs, exports);
var _iparticleTransformValuesJs = require("./Core/Interfaces/IParticleTransformValues.js");
parcelHelpers.exportAll(_iparticleTransformValuesJs, exports);
var _iparticleUpdaterJs = require("./Core/Interfaces/IParticleUpdater.js");
parcelHelpers.exportAll(_iparticleUpdaterJs, exports);
var _iparticleValueAnimationJs = require("./Core/Interfaces/IParticleValueAnimation.js");
parcelHelpers.exportAll(_iparticleValueAnimationJs, exports);
var _iparticlesInteractorJs = require("./Core/Interfaces/IParticlesInteractor.js");
parcelHelpers.exportAll(_iparticlesInteractorJs, exports);
var _ipluginJs = require("./Core/Interfaces/IPlugin.js");
parcelHelpers.exportAll(_ipluginJs, exports);
var _ipositionFromSizeParamsJs = require("./Core/Interfaces/IPositionFromSizeParams.js");
parcelHelpers.exportAll(_ipositionFromSizeParamsJs, exports);
var _irangeValueJs = require("./Core/Interfaces/IRangeValue.js");
parcelHelpers.exportAll(_irangeValueJs, exports);
var _irectSideResultJs = require("./Core/Interfaces/IRectSideResult.js");
parcelHelpers.exportAll(_irectSideResultJs, exports);
var _ishapeDrawDataJs = require("./Core/Interfaces/IShapeDrawData.js");
parcelHelpers.exportAll(_ishapeDrawDataJs, exports);
var _ishapeDrawerJs = require("./Core/Interfaces/IShapeDrawer.js");
parcelHelpers.exportAll(_ishapeDrawerJs, exports);
var _ishapeValuesJs = require("./Core/Interfaces/IShapeValues.js");
parcelHelpers.exportAll(_ishapeValuesJs, exports);
var _islowParticleDataJs = require("./Core/Interfaces/ISlowParticleData.js");
parcelHelpers.exportAll(_islowParticleDataJs, exports);
var _itrailFillDataJs = require("./Core/Interfaces/ITrailFillData.js");
parcelHelpers.exportAll(_itrailFillDataJs, exports);
var _ibackgroundJs = require("./Options/Interfaces/Background/IBackground.js");
parcelHelpers.exportAll(_ibackgroundJs, exports);
var _ibackgroundMaskJs = require("./Options/Interfaces/BackgroundMask/IBackgroundMask.js");
parcelHelpers.exportAll(_ibackgroundMaskJs, exports);
var _ibackgroundMaskCoverJs = require("./Options/Interfaces/BackgroundMask/IBackgroundMaskCover.js");
parcelHelpers.exportAll(_ibackgroundMaskCoverJs, exports);
var _ifullScreenJs = require("./Options/Interfaces/FullScreen/IFullScreen.js");
parcelHelpers.exportAll(_ifullScreenJs, exports);
var _ianimatableJs = require("./Options/Interfaces/IAnimatable.js");
parcelHelpers.exportAll(_ianimatableJs, exports);
var _ianimatableColorJs = require("./Options/Interfaces/IAnimatableColor.js");
parcelHelpers.exportAll(_ianimatableColorJs, exports);
var _ianimationJs = require("./Options/Interfaces/IAnimation.js");
parcelHelpers.exportAll(_ianimationJs, exports);
var _icolorAnimationJs = require("./Options/Interfaces/IColorAnimation.js");
parcelHelpers.exportAll(_icolorAnimationJs, exports);
var _ihslAnimationJs = require("./Options/Interfaces/IHslAnimation.js");
parcelHelpers.exportAll(_ihslAnimationJs, exports);
var _imanualParticleJs = require("./Options/Interfaces/IManualParticle.js");
parcelHelpers.exportAll(_imanualParticleJs, exports);
var _ioptionLoaderJs = require("./Options/Interfaces/IOptionLoader.js");
parcelHelpers.exportAll(_ioptionLoaderJs, exports);
var _ioptionsJs = require("./Options/Interfaces/IOptions.js");
parcelHelpers.exportAll(_ioptionsJs, exports);
var _ioptionsColorJs = require("./Options/Interfaces/IOptionsColor.js");
parcelHelpers.exportAll(_ioptionsColorJs, exports);
var _iresponsiveJs = require("./Options/Interfaces/IResponsive.js");
parcelHelpers.exportAll(_iresponsiveJs, exports);
var _ivalueWithRandomJs = require("./Options/Interfaces/IValueWithRandom.js");
parcelHelpers.exportAll(_ivalueWithRandomJs, exports);
var _iclickEventJs = require("./Options/Interfaces/Interactivity/Events/IClickEvent.js");
parcelHelpers.exportAll(_iclickEventJs, exports);
var _idivEventJs = require("./Options/Interfaces/Interactivity/Events/IDivEvent.js");
parcelHelpers.exportAll(_idivEventJs, exports);
var _ieventsJs = require("./Options/Interfaces/Interactivity/Events/IEvents.js");
parcelHelpers.exportAll(_ieventsJs, exports);
var _ihoverEventJs = require("./Options/Interfaces/Interactivity/Events/IHoverEvent.js");
parcelHelpers.exportAll(_ihoverEventJs, exports);
var _iparallaxJs = require("./Options/Interfaces/Interactivity/Events/IParallax.js");
parcelHelpers.exportAll(_iparallaxJs, exports);
var _iresizeEventJs = require("./Options/Interfaces/Interactivity/Events/IResizeEvent.js");
parcelHelpers.exportAll(_iresizeEventJs, exports);
var _imodeDivJs = require("./Options/Interfaces/Interactivity/Modes/IModeDiv.js");
parcelHelpers.exportAll(_imodeDivJs, exports);
var _imodesJs = require("./Options/Interfaces/Interactivity/Modes/IModes.js");
parcelHelpers.exportAll(_imodesJs, exports);
var _iinteractivityJs = require("./Options/Interfaces/Interactivity/IInteractivity.js");
parcelHelpers.exportAll(_iinteractivityJs, exports);
var _iparticlesBounceJs = require("./Options/Interfaces/Particles/Bounce/IParticlesBounce.js");
parcelHelpers.exportAll(_iparticlesBounceJs, exports);
var _icollisionsJs = require("./Options/Interfaces/Particles/Collisions/ICollisions.js");
parcelHelpers.exportAll(_icollisionsJs, exports);
var _icollisionsAbsorbJs = require("./Options/Interfaces/Particles/Collisions/ICollisionsAbsorb.js");
parcelHelpers.exportAll(_icollisionsAbsorbJs, exports);
var _icollisionsOverlapJs = require("./Options/Interfaces/Particles/Collisions/ICollisionsOverlap.js");
parcelHelpers.exportAll(_icollisionsOverlapJs, exports);
var _ieffectJs = require("./Options/Interfaces/Particles/Effect/IEffect.js");
parcelHelpers.exportAll(_ieffectJs, exports);
var _iparticlesOptionsJs = require("./Options/Interfaces/Particles/IParticlesOptions.js");
parcelHelpers.exportAll(_iparticlesOptionsJs, exports);
var _ishadowJs = require("./Options/Interfaces/Particles/IShadow.js");
parcelHelpers.exportAll(_ishadowJs, exports);
var _istrokeJs = require("./Options/Interfaces/Particles/IStroke.js");
parcelHelpers.exportAll(_istrokeJs, exports);
var _imoveAttractJs = require("./Options/Interfaces/Particles/Move/IMoveAttract.js");
parcelHelpers.exportAll(_imoveAttractJs, exports);
var _imoveJs = require("./Options/Interfaces/Particles/Move/IMove.js");
parcelHelpers.exportAll(_imoveJs, exports);
var _imoveAngleJs = require("./Options/Interfaces/Particles/Move/IMoveAngle.js");
parcelHelpers.exportAll(_imoveAngleJs, exports);
var _imoveCenterJs = require("./Options/Interfaces/Particles/Move/IMoveCenter.js");
parcelHelpers.exportAll(_imoveCenterJs, exports);
var _imoveGravityJs = require("./Options/Interfaces/Particles/Move/IMoveGravity.js");
parcelHelpers.exportAll(_imoveGravityJs, exports);
var _imovePathJs = require("./Options/Interfaces/Particles/Move/Path/IMovePath.js");
parcelHelpers.exportAll(_imovePathJs, exports);
var _ioutModesJs = require("./Options/Interfaces/Particles/Move/IOutModes.js");
parcelHelpers.exportAll(_ioutModesJs, exports);
var _ispinJs = require("./Options/Interfaces/Particles/Move/ISpin.js");
parcelHelpers.exportAll(_ispinJs, exports);
var _imoveTrailJs = require("./Options/Interfaces/Particles/Move/IMoveTrail.js");
parcelHelpers.exportAll(_imoveTrailJs, exports);
var _iparticlesDensityJs = require("./Options/Interfaces/Particles/Number/IParticlesDensity.js");
parcelHelpers.exportAll(_iparticlesDensityJs, exports);
var _iparticlesNumberJs = require("./Options/Interfaces/Particles/Number/IParticlesNumber.js");
parcelHelpers.exportAll(_iparticlesNumberJs, exports);
var _iparticlesNumberLimitJs = require("./Options/Interfaces/Particles/Number/IParticlesNumberLimit.js");
parcelHelpers.exportAll(_iparticlesNumberLimitJs, exports);
var _iopacityJs = require("./Options/Interfaces/Particles/Opacity/IOpacity.js");
parcelHelpers.exportAll(_iopacityJs, exports);
var _iopacityAnimationJs = require("./Options/Interfaces/Particles/Opacity/IOpacityAnimation.js");
parcelHelpers.exportAll(_iopacityAnimationJs, exports);
var _ishapeJs = require("./Options/Interfaces/Particles/Shape/IShape.js");
parcelHelpers.exportAll(_ishapeJs, exports);
var _isizeJs = require("./Options/Interfaces/Particles/Size/ISize.js");
parcelHelpers.exportAll(_isizeJs, exports);
var _isizeAnimationJs = require("./Options/Interfaces/Particles/Size/ISizeAnimation.js");
parcelHelpers.exportAll(_isizeAnimationJs, exports);
var _izindexJs = require("./Options/Interfaces/Particles/ZIndex/IZIndex.js");
parcelHelpers.exportAll(_izindexJs, exports);
var _ithemeJs = require("./Options/Interfaces/Theme/ITheme.js");
parcelHelpers.exportAll(_ithemeJs, exports);
var _ithemeDefaultJs = require("./Options/Interfaces/Theme/IThemeDefault.js");
parcelHelpers.exportAll(_ithemeDefaultJs, exports);
var _customEventArgsJs = require("./Types/CustomEventArgs.js");
parcelHelpers.exportAll(_customEventArgsJs, exports);
var _customEventListenerJs = require("./Types/CustomEventListener.js");
parcelHelpers.exportAll(_customEventListenerJs, exports);
var _exportResultJs = require("./Types/ExportResult.js");
parcelHelpers.exportAll(_exportResultJs, exports);
var _isourceOptionsJs = require("./Types/ISourceOptions.js");
parcelHelpers.exportAll(_isourceOptionsJs, exports);
var _particlesGroupsJs = require("./Types/ParticlesGroups.js");
parcelHelpers.exportAll(_particlesGroupsJs, exports);
var _pathOptionsJs = require("./Types/PathOptions.js");
parcelHelpers.exportAll(_pathOptionsJs, exports);
var _rangeValueJs = require("./Types/RangeValue.js");
parcelHelpers.exportAll(_rangeValueJs, exports);
var _recursivePartialJs = require("./Types/RecursivePartial.js");
parcelHelpers.exportAll(_recursivePartialJs, exports);
var _shapeDataJs = require("./Types/ShapeData.js");
parcelHelpers.exportAll(_shapeDataJs, exports);
var _singleOrMultipleJs = require("./Types/SingleOrMultiple.js");
parcelHelpers.exportAll(_singleOrMultipleJs, exports);

},{"./Core/Interfaces/Colors.js":"cDlu1","./Core/Interfaces/IBounds.js":"sTdhB","./Core/Interfaces/IBubbleParticleData.js":"MPIXe","./Core/Interfaces/ICircleBouncer.js":"7KVno","./Core/Interfaces/IColorManager.js":"2IV5J","./Core/Interfaces/IContainerInteractivity.js":"52aQA","./Core/Interfaces/IContainerPlugin.js":"hBNuA","./Core/Interfaces/ICoordinates.js":"jIG9m","./Core/Interfaces/IDelta.js":"7opKa","./Core/Interfaces/IDimension.js":"9yGv3","./Core/Interfaces/IDistance.js":"iMw8J","./Core/Interfaces/IDrawParticleParams.js":"9Ar5R","./Core/Interfaces/IEffectDrawer.js":"bTC8c","./Core/Interfaces/IExternalInteractor.js":"6akdi","./Core/Interfaces/IInteractor.js":"lgIyZ","./Core/Interfaces/ILoadParams.js":"aLeo5","./Core/Interfaces/IMouseData.js":"5rcun","./Core/Interfaces/IMovePathGenerator.js":"cmVHF","./Core/Interfaces/IParticleColorStyle.js":"4QUQV","./Core/Interfaces/IParticleHslAnimation.js":"4YxBB","./Core/Interfaces/IParticleLife.js":"2VQTB","./Core/Interfaces/IParticleMover.js":"cQKcy","./Core/Interfaces/IParticleRetinaProps.js":"eRFBY","./Core/Interfaces/IParticleRoll.js":"2ahay","./Core/Interfaces/IParticleTransformValues.js":"1EvV0","./Core/Interfaces/IParticleUpdater.js":"3cJZ0","./Core/Interfaces/IParticleValueAnimation.js":"dhgEo","./Core/Interfaces/IParticlesInteractor.js":"fXIYw","./Core/Interfaces/IPlugin.js":"jbLTx","./Core/Interfaces/IPositionFromSizeParams.js":"gVWYy","./Core/Interfaces/IRangeValue.js":"dlEpM","./Core/Interfaces/IRectSideResult.js":"jITk3","./Core/Interfaces/IShapeDrawData.js":"8OIcC","./Core/Interfaces/IShapeDrawer.js":"iZf7K","./Core/Interfaces/IShapeValues.js":"fFjkQ","./Core/Interfaces/ISlowParticleData.js":"2bIib","./Core/Interfaces/ITrailFillData.js":"iF46H","./Options/Interfaces/Background/IBackground.js":"7Zl6h","./Options/Interfaces/BackgroundMask/IBackgroundMask.js":"atE5D","./Options/Interfaces/BackgroundMask/IBackgroundMaskCover.js":"1ndcs","./Options/Interfaces/FullScreen/IFullScreen.js":"5UqMA","./Options/Interfaces/IAnimatable.js":"h9gVc","./Options/Interfaces/IAnimatableColor.js":"hEyUC","./Options/Interfaces/IAnimation.js":"7uCGY","./Options/Interfaces/IColorAnimation.js":"chp6M","./Options/Interfaces/IHslAnimation.js":"kKDCG","./Options/Interfaces/IManualParticle.js":"88nze","./Options/Interfaces/IOptionLoader.js":"jszDv","./Options/Interfaces/IOptions.js":"c5SJV","./Options/Interfaces/IOptionsColor.js":"irb9R","./Options/Interfaces/IResponsive.js":"gGk76","./Options/Interfaces/IValueWithRandom.js":"kVrPF","./Options/Interfaces/Interactivity/Events/IClickEvent.js":"c6hcx","./Options/Interfaces/Interactivity/Events/IDivEvent.js":"GYBNX","./Options/Interfaces/Interactivity/Events/IEvents.js":"30Yy5","./Options/Interfaces/Interactivity/Events/IHoverEvent.js":"lgKVy","./Options/Interfaces/Interactivity/Events/IParallax.js":"4KHAp","./Options/Interfaces/Interactivity/Events/IResizeEvent.js":"8jzYC","./Options/Interfaces/Interactivity/Modes/IModeDiv.js":"49i4q","./Options/Interfaces/Interactivity/Modes/IModes.js":"jlD8K","./Options/Interfaces/Interactivity/IInteractivity.js":"fAPJH","./Options/Interfaces/Particles/Bounce/IParticlesBounce.js":"9gCZ8","./Options/Interfaces/Particles/Collisions/ICollisions.js":"jXXY1","./Options/Interfaces/Particles/Collisions/ICollisionsAbsorb.js":"l9etD","./Options/Interfaces/Particles/Collisions/ICollisionsOverlap.js":"3imXM","./Options/Interfaces/Particles/Effect/IEffect.js":"cIRbk","./Options/Interfaces/Particles/IParticlesOptions.js":"8uosj","./Options/Interfaces/Particles/IShadow.js":"97Gwn","./Options/Interfaces/Particles/IStroke.js":"9YbmP","./Options/Interfaces/Particles/Move/IMoveAttract.js":"cDhnk","./Options/Interfaces/Particles/Move/IMove.js":"aKOJD","./Options/Interfaces/Particles/Move/IMoveAngle.js":"jOgPP","./Options/Interfaces/Particles/Move/IMoveCenter.js":"kiNEJ","./Options/Interfaces/Particles/Move/IMoveGravity.js":"cP7tw","./Options/Interfaces/Particles/Move/Path/IMovePath.js":"jHYD3","./Options/Interfaces/Particles/Move/IOutModes.js":"c6SLz","./Options/Interfaces/Particles/Move/ISpin.js":"12Jds","./Options/Interfaces/Particles/Move/IMoveTrail.js":"6MF85","./Options/Interfaces/Particles/Number/IParticlesDensity.js":"aRtFG","./Options/Interfaces/Particles/Number/IParticlesNumber.js":"5aqPJ","./Options/Interfaces/Particles/Number/IParticlesNumberLimit.js":"5Kdks","./Options/Interfaces/Particles/Opacity/IOpacity.js":"7PKpG","./Options/Interfaces/Particles/Opacity/IOpacityAnimation.js":"eAVhB","./Options/Interfaces/Particles/Shape/IShape.js":"adRPW","./Options/Interfaces/Particles/Size/ISize.js":"51AH4","./Options/Interfaces/Particles/Size/ISizeAnimation.js":"aPTC2","./Options/Interfaces/Particles/ZIndex/IZIndex.js":"7ZLNi","./Options/Interfaces/Theme/ITheme.js":"HQZip","./Options/Interfaces/Theme/IThemeDefault.js":"WKd04","./Types/CustomEventArgs.js":"6WTIs","./Types/CustomEventListener.js":"8T7Qw","./Types/ExportResult.js":"4NRvY","./Types/ISourceOptions.js":"bluyN","./Types/ParticlesGroups.js":"g9y7Z","./Types/PathOptions.js":"lIJCA","./Types/RangeValue.js":"8YibX","./Types/RecursivePartial.js":"gSQeE","./Types/ShapeData.js":"coUof","./Types/SingleOrMultiple.js":"4HXTk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDlu1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"sTdhB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"MPIXe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7KVno":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2IV5J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"52aQA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBNuA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jIG9m":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7opKa":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9yGv3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iMw8J":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9Ar5R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bTC8c":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6akdi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lgIyZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aLeo5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5rcun":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cmVHF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4QUQV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4YxBB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2VQTB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cQKcy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eRFBY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2ahay":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1EvV0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3cJZ0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dhgEo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fXIYw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jbLTx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gVWYy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dlEpM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jITk3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8OIcC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZf7K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fFjkQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2bIib":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iF46H":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Zl6h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"atE5D":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1ndcs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5UqMA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"h9gVc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hEyUC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7uCGY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"chp6M":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kKDCG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"88nze":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jszDv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c5SJV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"irb9R":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gGk76":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kVrPF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c6hcx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"GYBNX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"30Yy5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lgKVy":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4KHAp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8jzYC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49i4q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jlD8K":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fAPJH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9gCZ8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jXXY1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l9etD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3imXM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIRbk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8uosj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"97Gwn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9YbmP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cDhnk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aKOJD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jOgPP":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kiNEJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cP7tw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jHYD3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c6SLz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"12Jds":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6MF85":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aRtFG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5aqPJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Kdks":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7PKpG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eAVhB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"adRPW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"51AH4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aPTC2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ZLNi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"HQZip":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WKd04":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6WTIs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8T7Qw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4NRvY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bluyN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g9y7Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lIJCA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8YibX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gSQeE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"coUof":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4HXTk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gTg7A":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "default", ()=>f);
var _jsxRuntime = require("react/jsx-runtime");
var _react = require("react");
var _engine = require("@tsparticles/engine");
const f = (t)=>{
    const i = t.id ?? "tsparticles";
    return (0, _react.useEffect)(()=>{
        let e;
        return (0, _engine.tsParticles).load({
            id: i,
            url: t.url,
            options: t.options
        }).then((l)=>{
            var a;
            e = l, (a = t.particlesLoaded) == null || a.call(t, l);
        }), ()=>{
            e == null || e.destroy();
        };
    }, [
        i,
        t,
        t.url,
        t.options
    ]), /* @__PURE__ */ (0, _jsxRuntime.jsx)("div", {
        id: i,
        className: t.className
    });
};

},{"react/jsx-runtime":"6AEwr","react":"21dqq","@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6AEwr":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("c4c10cbba9862d5f");

},{"c4c10cbba9862d5f":"kujY4"}],"kujY4":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ "use strict";
(function() {
    function getComponentNameFromType(type) {
        if (null == type) return null;
        if ("function" === typeof type) return type.$$typeof === REACT_CLIENT_REFERENCE$2 ? null : type.displayName || type.name || null;
        if ("string" === typeof type) return type;
        switch(type){
            case REACT_FRAGMENT_TYPE:
                return "Fragment";
            case REACT_PORTAL_TYPE:
                return "Portal";
            case REACT_PROFILER_TYPE:
                return "Profiler";
            case REACT_STRICT_MODE_TYPE:
                return "StrictMode";
            case REACT_SUSPENSE_TYPE:
                return "Suspense";
            case REACT_SUSPENSE_LIST_TYPE:
                return "SuspenseList";
        }
        if ("object" === typeof type) switch("number" === typeof type.tag && console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), type.$$typeof){
            case REACT_CONTEXT_TYPE:
                return (type.displayName || "Context") + ".Provider";
            case REACT_CONSUMER_TYPE:
                return (type._context.displayName || "Context") + ".Consumer";
            case REACT_FORWARD_REF_TYPE:
                var innerType = type.render;
                type = type.displayName;
                type || (type = innerType.displayName || innerType.name || "", type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef");
                return type;
            case REACT_MEMO_TYPE:
                return innerType = type.displayName || null, null !== innerType ? innerType : getComponentNameFromType(type.type) || "Memo";
            case REACT_LAZY_TYPE:
                innerType = type._payload;
                type = type._init;
                try {
                    return getComponentNameFromType(type(innerType));
                } catch (x) {}
        }
        return null;
    }
    function testStringCoercion(value) {
        return "" + value;
    }
    function checkKeyStringCoercion(value) {
        try {
            testStringCoercion(value);
            var JSCompiler_inline_result = !1;
        } catch (e) {
            JSCompiler_inline_result = !0;
        }
        if (JSCompiler_inline_result) {
            JSCompiler_inline_result = console;
            var JSCompiler_temp_const = JSCompiler_inline_result.error;
            var JSCompiler_inline_result$jscomp$0 = "function" === typeof Symbol && Symbol.toStringTag && value[Symbol.toStringTag] || value.constructor.name || "Object";
            JSCompiler_temp_const.call(JSCompiler_inline_result, "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.", JSCompiler_inline_result$jscomp$0);
            return testStringCoercion(value);
        }
    }
    function disabledLog() {}
    function disableLogs() {
        if (0 === disabledDepth) {
            prevLog = console.log;
            prevInfo = console.info;
            prevWarn = console.warn;
            prevError = console.error;
            prevGroup = console.group;
            prevGroupCollapsed = console.groupCollapsed;
            prevGroupEnd = console.groupEnd;
            var props = {
                configurable: !0,
                enumerable: !0,
                value: disabledLog,
                writable: !0
            };
            Object.defineProperties(console, {
                info: props,
                log: props,
                warn: props,
                error: props,
                group: props,
                groupCollapsed: props,
                groupEnd: props
            });
        }
        disabledDepth++;
    }
    function reenableLogs() {
        disabledDepth--;
        if (0 === disabledDepth) {
            var props = {
                configurable: !0,
                enumerable: !0,
                writable: !0
            };
            Object.defineProperties(console, {
                log: assign({}, props, {
                    value: prevLog
                }),
                info: assign({}, props, {
                    value: prevInfo
                }),
                warn: assign({}, props, {
                    value: prevWarn
                }),
                error: assign({}, props, {
                    value: prevError
                }),
                group: assign({}, props, {
                    value: prevGroup
                }),
                groupCollapsed: assign({}, props, {
                    value: prevGroupCollapsed
                }),
                groupEnd: assign({}, props, {
                    value: prevGroupEnd
                })
            });
        }
        0 > disabledDepth && console.error("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
    }
    function describeBuiltInComponentFrame(name) {
        if (void 0 === prefix) try {
            throw Error();
        } catch (x) {
            var match = x.stack.trim().match(/\n( *(at )?)/);
            prefix = match && match[1] || "";
            suffix = -1 < x.stack.indexOf("\n    at") ? " (<anonymous>)" : -1 < x.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
        return "\n" + prefix + name + suffix;
    }
    function describeNativeComponentFrame(fn, construct) {
        if (!fn || reentry) return "";
        var frame = componentFrameCache.get(fn);
        if (void 0 !== frame) return frame;
        reentry = !0;
        frame = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var previousDispatcher = null;
        previousDispatcher = ReactSharedInternals.H;
        ReactSharedInternals.H = null;
        disableLogs();
        try {
            var RunInRootFrame = {
                DetermineComponentFrameRoot: function() {
                    try {
                        if (construct) {
                            var Fake = function() {
                                throw Error();
                            };
                            Object.defineProperty(Fake.prototype, "props", {
                                set: function() {
                                    throw Error();
                                }
                            });
                            if ("object" === typeof Reflect && Reflect.construct) {
                                try {
                                    Reflect.construct(Fake, []);
                                } catch (x) {
                                    var control = x;
                                }
                                Reflect.construct(fn, [], Fake);
                            } else {
                                try {
                                    Fake.call();
                                } catch (x$0) {
                                    control = x$0;
                                }
                                fn.call(Fake.prototype);
                            }
                        } else {
                            try {
                                throw Error();
                            } catch (x$1) {
                                control = x$1;
                            }
                            (Fake = fn()) && "function" === typeof Fake.catch && Fake.catch(function() {});
                        }
                    } catch (sample) {
                        if (sample && control && "string" === typeof sample.stack) return [
                            sample.stack,
                            control.stack
                        ];
                    }
                    return [
                        null,
                        null
                    ];
                }
            };
            RunInRootFrame.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
            var namePropDescriptor = Object.getOwnPropertyDescriptor(RunInRootFrame.DetermineComponentFrameRoot, "name");
            namePropDescriptor && namePropDescriptor.configurable && Object.defineProperty(RunInRootFrame.DetermineComponentFrameRoot, "name", {
                value: "DetermineComponentFrameRoot"
            });
            var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(), sampleStack = _RunInRootFrame$Deter[0], controlStack = _RunInRootFrame$Deter[1];
            if (sampleStack && controlStack) {
                var sampleLines = sampleStack.split("\n"), controlLines = controlStack.split("\n");
                for(_RunInRootFrame$Deter = namePropDescriptor = 0; namePropDescriptor < sampleLines.length && !sampleLines[namePropDescriptor].includes("DetermineComponentFrameRoot");)namePropDescriptor++;
                for(; _RunInRootFrame$Deter < controlLines.length && !controlLines[_RunInRootFrame$Deter].includes("DetermineComponentFrameRoot");)_RunInRootFrame$Deter++;
                if (namePropDescriptor === sampleLines.length || _RunInRootFrame$Deter === controlLines.length) for(namePropDescriptor = sampleLines.length - 1, _RunInRootFrame$Deter = controlLines.length - 1; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter && sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter];)_RunInRootFrame$Deter--;
                for(; 1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter; namePropDescriptor--, _RunInRootFrame$Deter--)if (sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                    if (1 !== namePropDescriptor || 1 !== _RunInRootFrame$Deter) {
                        do if (namePropDescriptor--, _RunInRootFrame$Deter--, 0 > _RunInRootFrame$Deter || sampleLines[namePropDescriptor] !== controlLines[_RunInRootFrame$Deter]) {
                            var _frame = "\n" + sampleLines[namePropDescriptor].replace(" at new ", " at ");
                            fn.displayName && _frame.includes("<anonymous>") && (_frame = _frame.replace("<anonymous>", fn.displayName));
                            "function" === typeof fn && componentFrameCache.set(fn, _frame);
                            return _frame;
                        }
                        while (1 <= namePropDescriptor && 0 <= _RunInRootFrame$Deter);
                    }
                    break;
                }
            }
        } finally{
            reentry = !1, ReactSharedInternals.H = previousDispatcher, reenableLogs(), Error.prepareStackTrace = frame;
        }
        sampleLines = (sampleLines = fn ? fn.displayName || fn.name : "") ? describeBuiltInComponentFrame(sampleLines) : "";
        "function" === typeof fn && componentFrameCache.set(fn, sampleLines);
        return sampleLines;
    }
    function describeUnknownElementTypeFrameInDEV(type) {
        if (null == type) return "";
        if ("function" === typeof type) {
            var prototype = type.prototype;
            return describeNativeComponentFrame(type, !(!prototype || !prototype.isReactComponent));
        }
        if ("string" === typeof type) return describeBuiltInComponentFrame(type);
        switch(type){
            case REACT_SUSPENSE_TYPE:
                return describeBuiltInComponentFrame("Suspense");
            case REACT_SUSPENSE_LIST_TYPE:
                return describeBuiltInComponentFrame("SuspenseList");
        }
        if ("object" === typeof type) switch(type.$$typeof){
            case REACT_FORWARD_REF_TYPE:
                return type = describeNativeComponentFrame(type.render, !1), type;
            case REACT_MEMO_TYPE:
                return describeUnknownElementTypeFrameInDEV(type.type);
            case REACT_LAZY_TYPE:
                prototype = type._payload;
                type = type._init;
                try {
                    return describeUnknownElementTypeFrameInDEV(type(prototype));
                } catch (x) {}
        }
        return "";
    }
    function getOwner() {
        var dispatcher = ReactSharedInternals.A;
        return null === dispatcher ? null : dispatcher.getOwner();
    }
    function hasValidKey(config) {
        if (hasOwnProperty.call(config, "key")) {
            var getter = Object.getOwnPropertyDescriptor(config, "key").get;
            if (getter && getter.isReactWarning) return !1;
        }
        return void 0 !== config.key;
    }
    function defineKeyPropWarningGetter(props, displayName) {
        function warnAboutAccessingKey() {
            specialPropKeyWarningShown || (specialPropKeyWarningShown = !0, console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)", displayName));
        }
        warnAboutAccessingKey.isReactWarning = !0;
        Object.defineProperty(props, "key", {
            get: warnAboutAccessingKey,
            configurable: !0
        });
    }
    function elementRefGetterWithDeprecationWarning() {
        var componentName = getComponentNameFromType(this.type);
        didWarnAboutElementRef[componentName] || (didWarnAboutElementRef[componentName] = !0, console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."));
        componentName = this.props.ref;
        return void 0 !== componentName ? componentName : null;
    }
    function ReactElement(type, key, self, source, owner, props) {
        self = props.ref;
        type = {
            $$typeof: REACT_ELEMENT_TYPE,
            type: type,
            key: key,
            props: props,
            _owner: owner
        };
        null !== (void 0 !== self ? self : null) ? Object.defineProperty(type, "ref", {
            enumerable: !1,
            get: elementRefGetterWithDeprecationWarning
        }) : Object.defineProperty(type, "ref", {
            enumerable: !1,
            value: null
        });
        type._store = {};
        Object.defineProperty(type._store, "validated", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: 0
        });
        Object.defineProperty(type, "_debugInfo", {
            configurable: !1,
            enumerable: !1,
            writable: !0,
            value: null
        });
        Object.freeze && (Object.freeze(type.props), Object.freeze(type));
        return type;
    }
    function jsxDEVImpl(type, config, maybeKey, isStaticChildren, source, self) {
        if ("string" === typeof type || "function" === typeof type || type === REACT_FRAGMENT_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || type === REACT_OFFSCREEN_TYPE || "object" === typeof type && null !== type && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_CONSUMER_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_CLIENT_REFERENCE$1 || void 0 !== type.getModuleId)) {
            var children = config.children;
            if (void 0 !== children) {
                if (isStaticChildren) {
                    if (isArrayImpl(children)) {
                        for(isStaticChildren = 0; isStaticChildren < children.length; isStaticChildren++)validateChildKeys(children[isStaticChildren], type);
                        Object.freeze && Object.freeze(children);
                    } else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
                } else validateChildKeys(children, type);
            }
        } else {
            children = "";
            if (void 0 === type || "object" === typeof type && null !== type && 0 === Object.keys(type).length) children += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.";
            null === type ? isStaticChildren = "null" : isArrayImpl(type) ? isStaticChildren = "array" : void 0 !== type && type.$$typeof === REACT_ELEMENT_TYPE ? (isStaticChildren = "<" + (getComponentNameFromType(type.type) || "Unknown") + " />", children = " Did you accidentally export a JSX literal instead of a component?") : isStaticChildren = typeof type;
            console.error("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", isStaticChildren, children);
        }
        if (hasOwnProperty.call(config, "key")) {
            children = getComponentNameFromType(type);
            var keys = Object.keys(config).filter(function(k) {
                return "key" !== k;
            });
            isStaticChildren = 0 < keys.length ? "{key: someKey, " + keys.join(": ..., ") + ": ...}" : "{key: someKey}";
            didWarnAboutKeySpread[children + isStaticChildren] || (keys = 0 < keys.length ? "{" + keys.join(": ..., ") + ": ...}" : "{}", console.error('A props object containing a "key" prop is being spread into JSX:\n  let props = %s;\n  <%s {...props} />\nReact keys must be passed directly to JSX without using spread:\n  let props = %s;\n  <%s key={someKey} {...props} />', isStaticChildren, children, keys, children), didWarnAboutKeySpread[children + isStaticChildren] = !0);
        }
        children = null;
        void 0 !== maybeKey && (checkKeyStringCoercion(maybeKey), children = "" + maybeKey);
        hasValidKey(config) && (checkKeyStringCoercion(config.key), children = "" + config.key);
        if ("key" in config) {
            maybeKey = {};
            for(var propName in config)"key" !== propName && (maybeKey[propName] = config[propName]);
        } else maybeKey = config;
        children && defineKeyPropWarningGetter(maybeKey, "function" === typeof type ? type.displayName || type.name || "Unknown" : type);
        return ReactElement(type, children, self, source, getOwner(), maybeKey);
    }
    function validateChildKeys(node, parentType) {
        if ("object" === typeof node && node && node.$$typeof !== REACT_CLIENT_REFERENCE) {
            if (isArrayImpl(node)) for(var i = 0; i < node.length; i++){
                var child = node[i];
                isValidElement(child) && validateExplicitKey(child, parentType);
            }
            else if (isValidElement(node)) node._store && (node._store.validated = 1);
            else if (null === node || "object" !== typeof node ? i = null : (i = MAYBE_ITERATOR_SYMBOL && node[MAYBE_ITERATOR_SYMBOL] || node["@@iterator"], i = "function" === typeof i ? i : null), "function" === typeof i && i !== node.entries && (i = i.call(node), i !== node)) for(; !(node = i.next()).done;)isValidElement(node.value) && validateExplicitKey(node.value, parentType);
        }
    }
    function isValidElement(object) {
        return "object" === typeof object && null !== object && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function validateExplicitKey(element, parentType) {
        if (element._store && !element._store.validated && null == element.key && (element._store.validated = 1, parentType = getCurrentComponentErrorInfo(parentType), !ownerHasKeyUseWarning[parentType])) {
            ownerHasKeyUseWarning[parentType] = !0;
            var childOwner = "";
            element && null != element._owner && element._owner !== getOwner() && (childOwner = null, "number" === typeof element._owner.tag ? childOwner = getComponentNameFromType(element._owner.type) : "string" === typeof element._owner.name && (childOwner = element._owner.name), childOwner = " It was passed a child from " + childOwner + ".");
            var prevGetCurrentStack = ReactSharedInternals.getCurrentStack;
            ReactSharedInternals.getCurrentStack = function() {
                var stack = describeUnknownElementTypeFrameInDEV(element.type);
                prevGetCurrentStack && (stack += prevGetCurrentStack() || "");
                return stack;
            };
            console.error('Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.', parentType, childOwner);
            ReactSharedInternals.getCurrentStack = prevGetCurrentStack;
        }
    }
    function getCurrentComponentErrorInfo(parentType) {
        var info = "", owner = getOwner();
        owner && (owner = getComponentNameFromType(owner.type)) && (info = "\n\nCheck the render method of `" + owner + "`.");
        info || (parentType = getComponentNameFromType(parentType)) && (info = "\n\nCheck the top-level render call using <" + parentType + ">.");
        return info;
    }
    var React = require("593632ccebda0d3a"), REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"), REACT_PORTAL_TYPE = Symbol.for("react.portal"), REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"), REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"), REACT_PROFILER_TYPE = Symbol.for("react.profiler");
    Symbol.for("react.provider");
    var REACT_CONSUMER_TYPE = Symbol.for("react.consumer"), REACT_CONTEXT_TYPE = Symbol.for("react.context"), REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"), REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"), REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"), REACT_MEMO_TYPE = Symbol.for("react.memo"), REACT_LAZY_TYPE = Symbol.for("react.lazy"), REACT_OFFSCREEN_TYPE = Symbol.for("react.offscreen"), MAYBE_ITERATOR_SYMBOL = Symbol.iterator, REACT_CLIENT_REFERENCE$2 = Symbol.for("react.client.reference"), ReactSharedInternals = React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, hasOwnProperty = Object.prototype.hasOwnProperty, assign = Object.assign, REACT_CLIENT_REFERENCE$1 = Symbol.for("react.client.reference"), isArrayImpl = Array.isArray, disabledDepth = 0, prevLog, prevInfo, prevWarn, prevError, prevGroup, prevGroupCollapsed, prevGroupEnd;
    disabledLog.__reactDisabledLog = !0;
    var prefix, suffix, reentry = !1;
    var componentFrameCache = new ("function" === typeof WeakMap ? WeakMap : Map)();
    var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference"), specialPropKeyWarningShown;
    var didWarnAboutElementRef = {};
    var didWarnAboutKeySpread = {}, ownerHasKeyUseWarning = {};
    exports.Fragment = REACT_FRAGMENT_TYPE;
    exports.jsx = function(type, config, maybeKey, source, self) {
        return jsxDEVImpl(type, config, maybeKey, !1, source, self);
    };
    exports.jsxs = function(type, config, maybeKey, source, self) {
        return jsxDEVImpl(type, config, maybeKey, !0, source, self);
    };
})();

},{"593632ccebda0d3a":"21dqq"}],"0jTcN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadSlim", ()=>loadSlim);
var _engine = require("@tsparticles/engine");
var _basic = require("@tsparticles/basic");
var _pluginEasingQuad = require("@tsparticles/plugin-easing-quad");
var _shapeEmoji = require("@tsparticles/shape-emoji");
var _interactionExternalAttract = require("@tsparticles/interaction-external-attract");
var _interactionExternalBounce = require("@tsparticles/interaction-external-bounce");
var _interactionExternalBubble = require("@tsparticles/interaction-external-bubble");
var _interactionExternalConnect = require("@tsparticles/interaction-external-connect");
var _interactionExternalGrab = require("@tsparticles/interaction-external-grab");
var _interactionExternalPause = require("@tsparticles/interaction-external-pause");
var _interactionExternalPush = require("@tsparticles/interaction-external-push");
var _interactionExternalRemove = require("@tsparticles/interaction-external-remove");
var _interactionExternalRepulse = require("@tsparticles/interaction-external-repulse");
var _interactionExternalSlow = require("@tsparticles/interaction-external-slow");
var _shapeImage = require("@tsparticles/shape-image");
var _updaterLife = require("@tsparticles/updater-life");
var _shapeLine = require("@tsparticles/shape-line");
var _moveParallax = require("@tsparticles/move-parallax");
var _interactionParticlesAttract = require("@tsparticles/interaction-particles-attract");
var _interactionParticlesCollisions = require("@tsparticles/interaction-particles-collisions");
var _interactionParticlesLinks = require("@tsparticles/interaction-particles-links");
var _shapePolygon = require("@tsparticles/shape-polygon");
var _updaterRotate = require("@tsparticles/updater-rotate");
var _shapeSquare = require("@tsparticles/shape-square");
var _shapeStar = require("@tsparticles/shape-star");
var _updaterStrokeColor = require("@tsparticles/updater-stroke-color");
async function loadSlim(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await (0, _moveParallax.loadParallaxMover)(engine, false);
    await (0, _interactionExternalAttract.loadExternalAttractInteraction)(engine, false);
    await (0, _interactionExternalBounce.loadExternalBounceInteraction)(engine, false);
    await (0, _interactionExternalBubble.loadExternalBubbleInteraction)(engine, false);
    await (0, _interactionExternalConnect.loadExternalConnectInteraction)(engine, false);
    await (0, _interactionExternalGrab.loadExternalGrabInteraction)(engine, false);
    await (0, _interactionExternalPause.loadExternalPauseInteraction)(engine, false);
    await (0, _interactionExternalPush.loadExternalPushInteraction)(engine, false);
    await (0, _interactionExternalRemove.loadExternalRemoveInteraction)(engine, false);
    await (0, _interactionExternalRepulse.loadExternalRepulseInteraction)(engine, false);
    await (0, _interactionExternalSlow.loadExternalSlowInteraction)(engine, false);
    await (0, _interactionParticlesAttract.loadParticlesAttractInteraction)(engine, false);
    await (0, _interactionParticlesCollisions.loadParticlesCollisionsInteraction)(engine, false);
    await (0, _interactionParticlesLinks.loadParticlesLinksInteraction)(engine, false);
    await (0, _pluginEasingQuad.loadEasingQuadPlugin)(engine, false);
    await (0, _shapeEmoji.loadEmojiShape)(engine, false);
    await (0, _shapeImage.loadImageShape)(engine, false);
    await (0, _shapeLine.loadLineShape)(engine, false);
    await (0, _shapePolygon.loadPolygonShape)(engine, false);
    await (0, _shapeSquare.loadSquareShape)(engine, false);
    await (0, _shapeStar.loadStarShape)(engine, false);
    await (0, _updaterLife.loadLifeUpdater)(engine, false);
    await (0, _updaterRotate.loadRotateUpdater)(engine, false);
    await (0, _updaterStrokeColor.loadStrokeColorUpdater)(engine, false);
    await (0, _basic.loadBasic)(engine, refresh);
}

},{"@tsparticles/engine":"ahMVX","@tsparticles/basic":"bu4gt","@tsparticles/plugin-easing-quad":"iujCd","@tsparticles/shape-emoji":"Grdzr","@tsparticles/interaction-external-attract":"2XFPb","@tsparticles/interaction-external-bounce":"7ktbo","@tsparticles/interaction-external-bubble":"b43t1","@tsparticles/interaction-external-connect":"jakZz","@tsparticles/interaction-external-grab":"ds6pp","@tsparticles/interaction-external-pause":"8pblm","@tsparticles/interaction-external-push":"WPEfZ","@tsparticles/interaction-external-remove":"l5WHz","@tsparticles/interaction-external-repulse":"g95RS","@tsparticles/interaction-external-slow":"aaEsz","@tsparticles/shape-image":"63bIE","@tsparticles/updater-life":"goeJr","@tsparticles/shape-line":"2PQep","@tsparticles/move-parallax":"1Gt6Z","@tsparticles/interaction-particles-attract":"1Fp4v","@tsparticles/interaction-particles-collisions":"aZk4Y","@tsparticles/interaction-particles-links":"anKWJ","@tsparticles/shape-polygon":"gCRfI","@tsparticles/updater-rotate":"hulbM","@tsparticles/shape-square":"3d86B","@tsparticles/shape-star":"bCPNV","@tsparticles/updater-stroke-color":"6p4CZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bu4gt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadBasic", ()=>loadBasic);
var _engine = require("@tsparticles/engine");
var _moveBase = require("@tsparticles/move-base");
var _shapeCircle = require("@tsparticles/shape-circle");
var _updaterColor = require("@tsparticles/updater-color");
var _pluginHexColor = require("@tsparticles/plugin-hex-color");
var _pluginHslColor = require("@tsparticles/plugin-hsl-color");
var _updaterOpacity = require("@tsparticles/updater-opacity");
var _updaterOutModes = require("@tsparticles/updater-out-modes");
var _pluginRgbColor = require("@tsparticles/plugin-rgb-color");
var _updaterSize = require("@tsparticles/updater-size");
async function loadBasic(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await (0, _pluginHexColor.loadHexColorPlugin)(engine, false);
    await (0, _pluginHslColor.loadHslColorPlugin)(engine, false);
    await (0, _pluginRgbColor.loadRgbColorPlugin)(engine, false);
    await (0, _moveBase.loadBaseMover)(engine, false);
    await (0, _shapeCircle.loadCircleShape)(engine, false);
    await (0, _updaterColor.loadColorUpdater)(engine, false);
    await (0, _updaterOpacity.loadOpacityUpdater)(engine, false);
    await (0, _updaterOutModes.loadOutModesUpdater)(engine, false);
    await (0, _updaterSize.loadSizeUpdater)(engine, false);
    await engine.refresh(refresh);
}

},{"@tsparticles/engine":"ahMVX","@tsparticles/move-base":"aFbTO","@tsparticles/shape-circle":"8yaKs","@tsparticles/updater-color":"gHVTS","@tsparticles/plugin-hex-color":"1kZUO","@tsparticles/plugin-hsl-color":"dBHs1","@tsparticles/updater-opacity":"cTW4b","@tsparticles/updater-out-modes":"6vabg","@tsparticles/plugin-rgb-color":"8ohed","@tsparticles/updater-size":"7NHVF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aFbTO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadBaseMover", ()=>loadBaseMover);
var _engine = require("@tsparticles/engine");
var _baseMoverJs = require("./BaseMover.js");
async function loadBaseMover(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addMover("base", ()=>{
        return Promise.resolve(new (0, _baseMoverJs.BaseMover)());
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./BaseMover.js":"49ygi","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"49ygi":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BaseMover", ()=>BaseMover);
var _engine = require("@tsparticles/engine");
var _utilsJs = require("./Utils.js");
const diffFactor = 2, defaultSizeFactor = 1, defaultDeltaFactor = 1;
class BaseMover {
    init(particle) {
        const options = particle.options, gravityOptions = options.move.gravity;
        particle.gravity = {
            enable: gravityOptions.enable,
            acceleration: (0, _engine.getRangeValue)(gravityOptions.acceleration),
            inverse: gravityOptions.inverse
        };
        (0, _utilsJs.initSpin)(particle);
    }
    isEnabled(particle) {
        return !particle.destroyed && particle.options.move.enable;
    }
    move(particle, delta) {
        const particleOptions = particle.options, moveOptions = particleOptions.move;
        if (!moveOptions.enable) return;
        const container = particle.container, pxRatio = container.retina.pixelRatio;
        particle.retina.moveSpeed ??= (0, _engine.getRangeValue)(moveOptions.speed) * pxRatio;
        particle.retina.moveDrift ??= (0, _engine.getRangeValue)(particle.options.move.drift) * pxRatio;
        const slowFactor = (0, _utilsJs.getProximitySpeedFactor)(particle), baseSpeed = particle.retina.moveSpeed * container.retina.reduceFactor, moveDrift = particle.retina.moveDrift, maxSize = (0, _engine.getRangeMax)(particleOptions.size.value) * pxRatio, sizeFactor = moveOptions.size ? particle.getRadius() / maxSize : defaultSizeFactor, deltaFactor = delta.factor || defaultDeltaFactor, moveSpeed = baseSpeed * sizeFactor * slowFactor * deltaFactor / diffFactor, maxSpeed = particle.retina.maxSpeed ?? container.retina.maxSpeed;
        if (moveOptions.spin.enable) (0, _utilsJs.spin)(particle, moveSpeed);
        else (0, _utilsJs.move)(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta);
        (0, _utilsJs.applyDistance)(particle);
    }
}

},{"@tsparticles/engine":"ahMVX","./Utils.js":"hTz8U","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hTz8U":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "applyDistance", ()=>applyDistance);
parcelHelpers.export(exports, "move", ()=>move);
parcelHelpers.export(exports, "spin", ()=>spin);
parcelHelpers.export(exports, "applyPath", ()=>applyPath);
parcelHelpers.export(exports, "getProximitySpeedFactor", ()=>getProximitySpeedFactor);
parcelHelpers.export(exports, "initSpin", ()=>initSpin);
var _engine = require("@tsparticles/engine");
const half = 0.5, minVelocity = 0, identity = 1, moveSpeedFactor = 60, minSpinRadius = 0, spinFactor = 0.01;
function applyDistance(particle) {
    const initialPosition = particle.initialPosition, { dx, dy } = (0, _engine.getDistances)(initialPosition, particle.position), dxFixed = Math.abs(dx), dyFixed = Math.abs(dy), { maxDistance } = particle.retina, hDistance = maxDistance.horizontal, vDistance = maxDistance.vertical;
    if (!hDistance && !vDistance) return;
    const hasHDistance = (hDistance && dxFixed >= hDistance) ?? false, hasVDistance = (vDistance && dyFixed >= vDistance) ?? false;
    if ((hasHDistance || hasVDistance) && !particle.misplaced) {
        particle.misplaced = !!hDistance && dxFixed > hDistance || !!vDistance && dyFixed > vDistance;
        if (hDistance) particle.velocity.x = particle.velocity.y * half - particle.velocity.x;
        if (vDistance) particle.velocity.y = particle.velocity.x * half - particle.velocity.y;
    } else if ((!hDistance || dxFixed < hDistance) && (!vDistance || dyFixed < vDistance) && particle.misplaced) particle.misplaced = false;
    else if (particle.misplaced) {
        const pos = particle.position, vel = particle.velocity;
        if (hDistance && (pos.x < initialPosition.x && vel.x < minVelocity || pos.x > initialPosition.x && vel.x > minVelocity)) vel.x *= -(0, _engine.getRandom)();
        if (vDistance && (pos.y < initialPosition.y && vel.y < minVelocity || pos.y > initialPosition.y && vel.y > minVelocity)) vel.y *= -(0, _engine.getRandom)();
    }
}
function move(particle, moveOptions, moveSpeed, maxSpeed, moveDrift, delta) {
    applyPath(particle, delta);
    const gravityOptions = particle.gravity, gravityFactor = gravityOptions?.enable && gravityOptions.inverse ? -identity : identity;
    if (moveDrift && moveSpeed) particle.velocity.x += moveDrift * delta.factor / (moveSpeedFactor * moveSpeed);
    if (gravityOptions?.enable && moveSpeed) particle.velocity.y += gravityFactor * (gravityOptions.acceleration * delta.factor) / (moveSpeedFactor * moveSpeed);
    const decay = particle.moveDecay;
    particle.velocity.multTo(decay);
    const velocity = particle.velocity.mult(moveSpeed);
    if (gravityOptions?.enable && maxSpeed > minVelocity && (!gravityOptions.inverse && velocity.y >= minVelocity && velocity.y >= maxSpeed || gravityOptions.inverse && velocity.y <= minVelocity && velocity.y <= -maxSpeed)) {
        velocity.y = gravityFactor * maxSpeed;
        if (moveSpeed) particle.velocity.y = velocity.y / moveSpeed;
    }
    const zIndexOptions = particle.options.zIndex, zVelocityFactor = (identity - particle.zIndexFactor) ** zIndexOptions.velocityRate;
    velocity.multTo(zVelocityFactor);
    const { position } = particle;
    position.addTo(velocity);
    if (moveOptions.vibrate) {
        position.x += Math.sin(position.x * Math.cos(position.y));
        position.y += Math.cos(position.y * Math.sin(position.x));
    }
}
function spin(particle, moveSpeed) {
    const container = particle.container;
    if (!particle.spin) return;
    const updateFunc = {
        x: particle.spin.direction === (0, _engine.RotateDirection).clockwise ? Math.cos : Math.sin,
        y: particle.spin.direction === (0, _engine.RotateDirection).clockwise ? Math.sin : Math.cos
    };
    particle.position.x = particle.spin.center.x + particle.spin.radius * updateFunc.x(particle.spin.angle);
    particle.position.y = particle.spin.center.y + particle.spin.radius * updateFunc.y(particle.spin.angle);
    particle.spin.radius += particle.spin.acceleration;
    const maxCanvasSize = Math.max(container.canvas.size.width, container.canvas.size.height), halfMaxSize = maxCanvasSize * half;
    if (particle.spin.radius > halfMaxSize) {
        particle.spin.radius = halfMaxSize;
        particle.spin.acceleration *= -identity;
    } else if (particle.spin.radius < minSpinRadius) {
        particle.spin.radius = minSpinRadius;
        particle.spin.acceleration *= -identity;
    }
    particle.spin.angle += moveSpeed * spinFactor * (identity - particle.spin.radius / maxCanvasSize);
}
function applyPath(particle, delta) {
    const particlesOptions = particle.options, pathOptions = particlesOptions.move.path, pathEnabled = pathOptions.enable;
    if (!pathEnabled) return;
    if (particle.lastPathTime <= particle.pathDelay) {
        particle.lastPathTime += delta.value;
        return;
    }
    const path = particle.pathGenerator?.generate(particle, delta);
    if (path) particle.velocity.addTo(path);
    if (pathOptions.clamp) {
        particle.velocity.x = (0, _engine.clamp)(particle.velocity.x, -identity, identity);
        particle.velocity.y = (0, _engine.clamp)(particle.velocity.y, -identity, identity);
    }
    particle.lastPathTime -= particle.pathDelay;
}
function getProximitySpeedFactor(particle) {
    return particle.slow.inRange ? particle.slow.factor : identity;
}
function initSpin(particle) {
    const container = particle.container, options = particle.options, spinOptions = options.move.spin;
    if (!spinOptions.enable) return;
    const spinPos = spinOptions.position ?? {
        x: 50,
        y: 50
    }, spinFactor = 0.01, spinCenter = {
        x: spinPos.x * spinFactor * container.canvas.size.width,
        y: spinPos.y * spinFactor * container.canvas.size.height
    }, pos = particle.getPosition(), distance = (0, _engine.getDistance)(pos, spinCenter), spinAcceleration = (0, _engine.getRangeValue)(spinOptions.acceleration);
    particle.retina.spinAcceleration = spinAcceleration * container.retina.pixelRatio;
    const minVelocity = 0;
    particle.spin = {
        center: spinCenter,
        direction: particle.velocity.x >= minVelocity ? (0, _engine.RotateDirection).clockwise : (0, _engine.RotateDirection).counterClockwise,
        angle: particle.velocity.angle,
        radius: distance,
        acceleration: particle.retina.spinAcceleration
    };
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8yaKs":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadCircleShape", ()=>loadCircleShape);
var _engine = require("@tsparticles/engine");
var _circleDrawerJs = require("./CircleDrawer.js");
async function loadCircleShape(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addShape(new (0, _circleDrawerJs.CircleDrawer)(), refresh);
}

},{"@tsparticles/engine":"ahMVX","./CircleDrawer.js":"inWaF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"inWaF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CircleDrawer", ()=>CircleDrawer);
var _engine = require("@tsparticles/engine");
var _utilsJs = require("./Utils.js");
const sides = 12, maxAngle = 360, minAngle = 0;
class CircleDrawer {
    constructor(){
        this.validTypes = [
            "circle"
        ];
    }
    draw(data) {
        (0, _utilsJs.drawCircle)(data);
    }
    getSidesCount() {
        return sides;
    }
    particleInit(container, particle) {
        const shapeData = particle.shapeData, angle = shapeData?.angle ?? {
            max: maxAngle,
            min: minAngle
        };
        particle.circleRange = !(0, _engine.isObject)(angle) ? {
            min: minAngle,
            max: (0, _engine.degToRad)(angle)
        } : {
            min: (0, _engine.degToRad)(angle.min),
            max: (0, _engine.degToRad)(angle.max)
        };
    }
}

},{"@tsparticles/engine":"ahMVX","./Utils.js":"f9iy1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"f9iy1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawCircle", ()=>drawCircle);
const double = 2, doublePI = Math.PI * double, minAngle = 0, origin = {
    x: 0,
    y: 0
};
function drawCircle(data) {
    const { context, particle, radius } = data;
    if (!particle.circleRange) particle.circleRange = {
        min: minAngle,
        max: doublePI
    };
    const circleRange = particle.circleRange;
    context.arc(origin.x, origin.y, radius, circleRange.min, circleRange.max, false);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gHVTS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadColorUpdater", ()=>loadColorUpdater);
var _engine = require("@tsparticles/engine");
var _colorUpdaterJs = require("./ColorUpdater.js");
async function loadColorUpdater(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addParticleUpdater("color", (container)=>{
        return Promise.resolve(new (0, _colorUpdaterJs.ColorUpdater)(container, engine));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./ColorUpdater.js":"ewL0O","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ewL0O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ColorUpdater", ()=>ColorUpdater);
var _engine = require("@tsparticles/engine");
class ColorUpdater {
    constructor(container, engine){
        this._container = container;
        this._engine = engine;
    }
    init(particle) {
        const hslColor = (0, _engine.rangeColorToHsl)(this._engine, particle.options.color, particle.id, particle.options.reduceDuplicates);
        if (hslColor) particle.color = (0, _engine.getHslAnimationFromHsl)(hslColor, particle.options.color.animation, this._container.retina.reduceFactor);
    }
    isEnabled(particle) {
        const { h: hAnimation, s: sAnimation, l: lAnimation } = particle.options.color.animation, { color } = particle;
        return !particle.destroyed && !particle.spawning && (color?.h.value !== undefined && hAnimation.enable || color?.s.value !== undefined && sAnimation.enable || color?.l.value !== undefined && lAnimation.enable);
    }
    update(particle, delta) {
        (0, _engine.updateColor)(particle.color, delta);
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1kZUO":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadHexColorPlugin", ()=>loadHexColorPlugin);
var _engine = require("@tsparticles/engine");
var _hexColorManagerJs = require("./HexColorManager.js");
async function loadHexColorPlugin(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addColorManager(new (0, _hexColorManagerJs.HexColorManager)(), refresh);
}

},{"@tsparticles/engine":"ahMVX","./HexColorManager.js":"1g8mG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1g8mG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HexColorManager", ()=>HexColorManager);
var RgbIndexes;
(function(RgbIndexes) {
    RgbIndexes[RgbIndexes["r"] = 1] = "r";
    RgbIndexes[RgbIndexes["g"] = 2] = "g";
    RgbIndexes[RgbIndexes["b"] = 3] = "b";
    RgbIndexes[RgbIndexes["a"] = 4] = "a";
})(RgbIndexes || (RgbIndexes = {}));
const shorthandHexRegex = /^#?([a-f\d])([a-f\d])([a-f\d])([a-f\d])?$/i, hexRegex = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})?$/i, hexRadix = 16, defaultAlpha = 1, alphaFactor = 0xff;
class HexColorManager {
    constructor(){
        this.key = "hex";
        this.stringPrefix = "#";
    }
    handleColor(color) {
        return this._parseString(color.value);
    }
    handleRangeColor(color) {
        return this._parseString(color.value);
    }
    parseString(input) {
        return this._parseString(input);
    }
    _parseString(hexColor) {
        if (typeof hexColor !== "string") return;
        if (!hexColor?.startsWith(this.stringPrefix)) return;
        const hexFixed = hexColor.replace(shorthandHexRegex, (_, r, g, b, a)=>{
            return r + r + g + g + b + b + (a !== undefined ? a + a : "");
        }), result = hexRegex.exec(hexFixed);
        return result ? {
            a: result[RgbIndexes.a] !== undefined ? parseInt(result[RgbIndexes.a], hexRadix) / alphaFactor : defaultAlpha,
            b: parseInt(result[RgbIndexes.b], hexRadix),
            g: parseInt(result[RgbIndexes.g], hexRadix),
            r: parseInt(result[RgbIndexes.r], hexRadix)
        } : undefined;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dBHs1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadHslColorPlugin", ()=>loadHslColorPlugin);
var _engine = require("@tsparticles/engine");
var _hslColorManagerJs = require("./HslColorManager.js");
async function loadHslColorPlugin(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addColorManager(new (0, _hslColorManagerJs.HslColorManager)(), refresh);
}

},{"@tsparticles/engine":"ahMVX","./HslColorManager.js":"irlCo","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"irlCo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HslColorManager", ()=>HslColorManager);
var _engine = require("@tsparticles/engine");
var HslIndexes;
(function(HslIndexes) {
    HslIndexes[HslIndexes["h"] = 1] = "h";
    HslIndexes[HslIndexes["s"] = 2] = "s";
    HslIndexes[HslIndexes["l"] = 3] = "l";
    HslIndexes[HslIndexes["a"] = 5] = "a";
})(HslIndexes || (HslIndexes = {}));
class HslColorManager {
    constructor(){
        this.key = "hsl";
        this.stringPrefix = "hsl";
    }
    handleColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== undefined && hslColor.s !== undefined && hslColor.l !== undefined) return (0, _engine.hslToRgb)(hslColor);
    }
    handleRangeColor(color) {
        const colorValue = color.value, hslColor = colorValue.hsl ?? color.value;
        if (hslColor.h !== undefined && hslColor.l !== undefined) return (0, _engine.hslToRgb)({
            h: (0, _engine.getRangeValue)(hslColor.h),
            l: (0, _engine.getRangeValue)(hslColor.l),
            s: (0, _engine.getRangeValue)(hslColor.s)
        });
    }
    parseString(input) {
        if (!input.startsWith("hsl")) return;
        const regex = /hsla?\(\s*(\d+)\s*[\s,]\s*(\d+)%\s*[\s,]\s*(\d+)%\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i, result = regex.exec(input), minLength = 4, defaultAlpha = 1, radix = 10;
        return result ? (0, _engine.hslaToRgba)({
            a: result.length > minLength ? (0, _engine.parseAlpha)(result[HslIndexes.a]) : defaultAlpha,
            h: parseInt(result[HslIndexes.h], radix),
            l: parseInt(result[HslIndexes.l], radix),
            s: parseInt(result[HslIndexes.s], radix)
        }) : undefined;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cTW4b":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadOpacityUpdater", ()=>loadOpacityUpdater);
var _engine = require("@tsparticles/engine");
var _opacityUpdaterJs = require("./OpacityUpdater.js");
async function loadOpacityUpdater(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addParticleUpdater("opacity", (container)=>{
        return Promise.resolve(new (0, _opacityUpdaterJs.OpacityUpdater)(container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./OpacityUpdater.js":"6mx86","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6mx86":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OpacityUpdater", ()=>OpacityUpdater);
var _engine = require("@tsparticles/engine");
class OpacityUpdater {
    constructor(container){
        this.container = container;
    }
    init(particle) {
        const opacityOptions = particle.options.opacity, pxRatio = 1;
        particle.opacity = (0, _engine.initParticleNumericAnimationValue)(opacityOptions, pxRatio);
        const opacityAnimation = opacityOptions.animation;
        if (opacityAnimation.enable) {
            particle.opacity.velocity = (0, _engine.getRangeValue)(opacityAnimation.speed) / (0, _engine.percentDenominator) * this.container.retina.reduceFactor;
            if (!opacityAnimation.sync) particle.opacity.velocity *= (0, _engine.getRandom)();
        }
    }
    isEnabled(particle) {
        const none = 0;
        return !particle.destroyed && !particle.spawning && !!particle.opacity && particle.opacity.enable && ((particle.opacity.maxLoops ?? none) <= none || (particle.opacity.maxLoops ?? none) > none && (particle.opacity.loops ?? none) < (particle.opacity.maxLoops ?? none));
    }
    reset(particle) {
        if (particle.opacity) {
            particle.opacity.time = 0;
            particle.opacity.loops = 0;
        }
    }
    update(particle, delta) {
        if (!this.isEnabled(particle) || !particle.opacity) return;
        (0, _engine.updateAnimation)(particle, particle.opacity, true, particle.options.opacity.animation.destroy, delta);
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6vabg":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadOutModesUpdater", ()=>loadOutModesUpdater);
var _engine = require("@tsparticles/engine");
var _outOfCanvasUpdaterJs = require("./OutOfCanvasUpdater.js");
async function loadOutModesUpdater(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addParticleUpdater("outModes", (container)=>{
        return Promise.resolve(new (0, _outOfCanvasUpdaterJs.OutOfCanvasUpdater)(container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./OutOfCanvasUpdater.js":"l15qL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l15qL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OutOfCanvasUpdater", ()=>OutOfCanvasUpdater);
var _engine = require("@tsparticles/engine");
var _bounceOutModeJs = require("./BounceOutMode.js");
var _destroyOutModeJs = require("./DestroyOutMode.js");
var _noneOutModeJs = require("./NoneOutMode.js");
var _outOutModeJs = require("./OutOutMode.js");
const checkOutMode = (outModes, outMode)=>{
    return outModes.default === outMode || outModes.bottom === outMode || outModes.left === outMode || outModes.right === outMode || outModes.top === outMode;
};
class OutOfCanvasUpdater {
    constructor(container){
        this._addUpdaterIfMissing = (particle, outMode, getUpdater)=>{
            const outModes = particle.options.move.outModes;
            if (!this.updaters.has(outMode) && checkOutMode(outModes, outMode)) this.updaters.set(outMode, getUpdater(this.container));
        };
        this._updateOutMode = (particle, delta, outMode, direction)=>{
            for (const updater of this.updaters.values())updater.update(particle, direction, delta, outMode);
        };
        this.container = container;
        this.updaters = new Map();
    }
    init(particle) {
        this._addUpdaterIfMissing(particle, (0, _engine.OutMode).bounce, (container)=>new (0, _bounceOutModeJs.BounceOutMode)(container));
        this._addUpdaterIfMissing(particle, (0, _engine.OutMode).out, (container)=>new (0, _outOutModeJs.OutOutMode)(container));
        this._addUpdaterIfMissing(particle, (0, _engine.OutMode).destroy, (container)=>new (0, _destroyOutModeJs.DestroyOutMode)(container));
        this._addUpdaterIfMissing(particle, (0, _engine.OutMode).none, (container)=>new (0, _noneOutModeJs.NoneOutMode)(container));
    }
    isEnabled(particle) {
        return !particle.destroyed && !particle.spawning;
    }
    update(particle, delta) {
        const outModes = particle.options.move.outModes;
        this._updateOutMode(particle, delta, outModes.bottom ?? outModes.default, (0, _engine.OutModeDirection).bottom);
        this._updateOutMode(particle, delta, outModes.left ?? outModes.default, (0, _engine.OutModeDirection).left);
        this._updateOutMode(particle, delta, outModes.right ?? outModes.default, (0, _engine.OutModeDirection).right);
        this._updateOutMode(particle, delta, outModes.top ?? outModes.default, (0, _engine.OutModeDirection).top);
    }
}

},{"@tsparticles/engine":"ahMVX","./BounceOutMode.js":"lCgtw","./DestroyOutMode.js":"2dP2o","./NoneOutMode.js":"dZG4n","./OutOutMode.js":"cCBzA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lCgtw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BounceOutMode", ()=>BounceOutMode);
var _engine = require("@tsparticles/engine");
var _utilsJs = require("./Utils.js");
class BounceOutMode {
    constructor(container){
        this.container = container;
        this.modes = [
            (0, _engine.OutMode).bounce,
            (0, _engine.OutMode).split
        ];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) return;
        const container = this.container;
        let handled = false;
        for (const plugin of container.plugins.values()){
            if (plugin.particleBounce !== undefined) handled = plugin.particleBounce(particle, delta, direction);
            if (handled) break;
        }
        if (handled) return;
        const pos = particle.getPosition(), offset = particle.offset, size = particle.getRadius(), bounds = (0, _engine.calculateBounds)(pos, size), canvasSize = container.canvas.size;
        (0, _utilsJs.bounceHorizontal)({
            particle,
            outMode,
            direction,
            bounds,
            canvasSize,
            offset,
            size
        });
        (0, _utilsJs.bounceVertical)({
            particle,
            outMode,
            direction,
            bounds,
            canvasSize,
            offset,
            size
        });
    }
}

},{"@tsparticles/engine":"ahMVX","./Utils.js":"3lPEd","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3lPEd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bounceHorizontal", ()=>bounceHorizontal);
parcelHelpers.export(exports, "bounceVertical", ()=>bounceVertical);
var _engine = require("@tsparticles/engine");
const minVelocity = 0, boundsMin = 0;
function bounceHorizontal(data) {
    if (data.outMode !== (0, _engine.OutMode).bounce && data.outMode !== (0, _engine.OutMode).split || data.direction !== (0, _engine.OutModeDirection).left && data.direction !== (0, _engine.OutModeDirection).right) return;
    if (data.bounds.right < boundsMin && data.direction === (0, _engine.OutModeDirection).left) data.particle.position.x = data.size + data.offset.x;
    else if (data.bounds.left > data.canvasSize.width && data.direction === (0, _engine.OutModeDirection).right) data.particle.position.x = data.canvasSize.width - data.size - data.offset.x;
    const velocity = data.particle.velocity.x;
    let bounced = false;
    if (data.direction === (0, _engine.OutModeDirection).right && data.bounds.right >= data.canvasSize.width && velocity > minVelocity || data.direction === (0, _engine.OutModeDirection).left && data.bounds.left <= boundsMin && velocity < minVelocity) {
        const newVelocity = (0, _engine.getRangeValue)(data.particle.options.bounce.horizontal.value);
        data.particle.velocity.x *= -newVelocity;
        bounced = true;
    }
    if (!bounced) return;
    const minPos = data.offset.x + data.size;
    if (data.bounds.right >= data.canvasSize.width && data.direction === (0, _engine.OutModeDirection).right) data.particle.position.x = data.canvasSize.width - minPos;
    else if (data.bounds.left <= boundsMin && data.direction === (0, _engine.OutModeDirection).left) data.particle.position.x = minPos;
    if (data.outMode === (0, _engine.OutMode).split) data.particle.destroy();
}
function bounceVertical(data) {
    if (data.outMode !== (0, _engine.OutMode).bounce && data.outMode !== (0, _engine.OutMode).split || data.direction !== (0, _engine.OutModeDirection).bottom && data.direction !== (0, _engine.OutModeDirection).top) return;
    if (data.bounds.bottom < boundsMin && data.direction === (0, _engine.OutModeDirection).top) data.particle.position.y = data.size + data.offset.y;
    else if (data.bounds.top > data.canvasSize.height && data.direction === (0, _engine.OutModeDirection).bottom) data.particle.position.y = data.canvasSize.height - data.size - data.offset.y;
    const velocity = data.particle.velocity.y;
    let bounced = false;
    if (data.direction === (0, _engine.OutModeDirection).bottom && data.bounds.bottom >= data.canvasSize.height && velocity > minVelocity || data.direction === (0, _engine.OutModeDirection).top && data.bounds.top <= boundsMin && velocity < minVelocity) {
        const newVelocity = (0, _engine.getRangeValue)(data.particle.options.bounce.vertical.value);
        data.particle.velocity.y *= -newVelocity;
        bounced = true;
    }
    if (!bounced) return;
    const minPos = data.offset.y + data.size;
    if (data.bounds.bottom >= data.canvasSize.height && data.direction === (0, _engine.OutModeDirection).bottom) data.particle.position.y = data.canvasSize.height - minPos;
    else if (data.bounds.top <= boundsMin && data.direction === (0, _engine.OutModeDirection).top) data.particle.position.y = minPos;
    if (data.outMode === (0, _engine.OutMode).split) data.particle.destroy();
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2dP2o":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DestroyOutMode", ()=>DestroyOutMode);
var _engine = require("@tsparticles/engine");
const minVelocity = 0;
class DestroyOutMode {
    constructor(container){
        this.container = container;
        this.modes = [
            (0, _engine.OutMode).destroy
        ];
    }
    update(particle, direction, _delta, outMode) {
        if (!this.modes.includes(outMode)) return;
        const container = this.container;
        switch(particle.outType){
            case (0, _engine.ParticleOutType).normal:
            case (0, _engine.ParticleOutType).outside:
                if ((0, _engine.isPointInside)(particle.position, container.canvas.size, (0, _engine.Vector).origin, particle.getRadius(), direction)) return;
                break;
            case (0, _engine.ParticleOutType).inside:
                {
                    const { dx, dy } = (0, _engine.getDistances)(particle.position, particle.moveCenter), { x: vx, y: vy } = particle.velocity;
                    if (vx < minVelocity && dx > particle.moveCenter.radius || vy < minVelocity && dy > particle.moveCenter.radius || vx >= minVelocity && dx < -particle.moveCenter.radius || vy >= minVelocity && dy < -particle.moveCenter.radius) return;
                    break;
                }
        }
        container.particles.remove(particle, particle.group, true);
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dZG4n":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "NoneOutMode", ()=>NoneOutMode);
var _engine = require("@tsparticles/engine");
const minVelocity = 0;
class NoneOutMode {
    constructor(container){
        this.container = container;
        this.modes = [
            (0, _engine.OutMode).none
        ];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) return;
        if ((particle.options.move.distance.horizontal && (direction === (0, _engine.OutModeDirection).left || direction === (0, _engine.OutModeDirection).right)) ?? (particle.options.move.distance.vertical && (direction === (0, _engine.OutModeDirection).top || direction === (0, _engine.OutModeDirection).bottom))) return;
        const gravityOptions = particle.options.move.gravity, container = this.container, canvasSize = container.canvas.size, pRadius = particle.getRadius();
        if (!gravityOptions.enable) {
            if (particle.velocity.y > minVelocity && particle.position.y <= canvasSize.height + pRadius || particle.velocity.y < minVelocity && particle.position.y >= -pRadius || particle.velocity.x > minVelocity && particle.position.x <= canvasSize.width + pRadius || particle.velocity.x < minVelocity && particle.position.x >= -pRadius) return;
            if (!(0, _engine.isPointInside)(particle.position, container.canvas.size, (0, _engine.Vector).origin, pRadius, direction)) container.particles.remove(particle);
        } else {
            const position = particle.position;
            if (!gravityOptions.inverse && position.y > canvasSize.height + pRadius && direction === (0, _engine.OutModeDirection).bottom || gravityOptions.inverse && position.y < -pRadius && direction === (0, _engine.OutModeDirection).top) container.particles.remove(particle);
        }
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cCBzA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "OutOutMode", ()=>OutOutMode);
var _engine = require("@tsparticles/engine");
const minVelocity = 0, minDistance = 0;
class OutOutMode {
    constructor(container){
        this.container = container;
        this.modes = [
            (0, _engine.OutMode).out
        ];
    }
    update(particle, direction, delta, outMode) {
        if (!this.modes.includes(outMode)) return;
        const container = this.container;
        switch(particle.outType){
            case (0, _engine.ParticleOutType).inside:
                {
                    const { x: vx, y: vy } = particle.velocity;
                    const circVec = (0, _engine.Vector).origin;
                    circVec.length = particle.moveCenter.radius;
                    circVec.angle = particle.velocity.angle + Math.PI;
                    circVec.addTo((0, _engine.Vector).create(particle.moveCenter));
                    const { dx, dy } = (0, _engine.getDistances)(particle.position, circVec);
                    if (vx <= minVelocity && dx >= minDistance || vy <= minVelocity && dy >= minDistance || vx >= minVelocity && dx <= minDistance || vy >= minVelocity && dy <= minDistance) return;
                    particle.position.x = Math.floor((0, _engine.randomInRange)({
                        min: 0,
                        max: container.canvas.size.width
                    }));
                    particle.position.y = Math.floor((0, _engine.randomInRange)({
                        min: 0,
                        max: container.canvas.size.height
                    }));
                    const { dx: newDx, dy: newDy } = (0, _engine.getDistances)(particle.position, particle.moveCenter);
                    particle.direction = Math.atan2(-newDy, -newDx);
                    particle.velocity.angle = particle.direction;
                    break;
                }
            default:
                if ((0, _engine.isPointInside)(particle.position, container.canvas.size, (0, _engine.Vector).origin, particle.getRadius(), direction)) return;
                switch(particle.outType){
                    case (0, _engine.ParticleOutType).outside:
                        {
                            particle.position.x = Math.floor((0, _engine.randomInRange)({
                                min: -particle.moveCenter.radius,
                                max: particle.moveCenter.radius
                            })) + particle.moveCenter.x;
                            particle.position.y = Math.floor((0, _engine.randomInRange)({
                                min: -particle.moveCenter.radius,
                                max: particle.moveCenter.radius
                            })) + particle.moveCenter.y;
                            const { dx, dy } = (0, _engine.getDistances)(particle.position, particle.moveCenter);
                            if (particle.moveCenter.radius) {
                                particle.direction = Math.atan2(dy, dx);
                                particle.velocity.angle = particle.direction;
                            }
                            break;
                        }
                    case (0, _engine.ParticleOutType).normal:
                        {
                            const warp = particle.options.move.warp, canvasSize = container.canvas.size, newPos = {
                                bottom: canvasSize.height + particle.getRadius() + particle.offset.y,
                                left: -particle.getRadius() - particle.offset.x,
                                right: canvasSize.width + particle.getRadius() + particle.offset.x,
                                top: -particle.getRadius() - particle.offset.y
                            }, sizeValue = particle.getRadius(), nextBounds = (0, _engine.calculateBounds)(particle.position, sizeValue);
                            if (direction === (0, _engine.OutModeDirection).right && nextBounds.left > canvasSize.width + particle.offset.x) {
                                particle.position.x = newPos.left;
                                particle.initialPosition.x = particle.position.x;
                                if (!warp) {
                                    particle.position.y = (0, _engine.getRandom)() * canvasSize.height;
                                    particle.initialPosition.y = particle.position.y;
                                }
                            } else if (direction === (0, _engine.OutModeDirection).left && nextBounds.right < -particle.offset.x) {
                                particle.position.x = newPos.right;
                                particle.initialPosition.x = particle.position.x;
                                if (!warp) {
                                    particle.position.y = (0, _engine.getRandom)() * canvasSize.height;
                                    particle.initialPosition.y = particle.position.y;
                                }
                            }
                            if (direction === (0, _engine.OutModeDirection).bottom && nextBounds.top > canvasSize.height + particle.offset.y) {
                                if (!warp) {
                                    particle.position.x = (0, _engine.getRandom)() * canvasSize.width;
                                    particle.initialPosition.x = particle.position.x;
                                }
                                particle.position.y = newPos.top;
                                particle.initialPosition.y = particle.position.y;
                            } else if (direction === (0, _engine.OutModeDirection).top && nextBounds.bottom < -particle.offset.y) {
                                if (!warp) {
                                    particle.position.x = (0, _engine.getRandom)() * canvasSize.width;
                                    particle.initialPosition.x = particle.position.x;
                                }
                                particle.position.y = newPos.bottom;
                                particle.initialPosition.y = particle.position.y;
                            }
                            break;
                        }
                }
                break;
        }
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8ohed":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadRgbColorPlugin", ()=>loadRgbColorPlugin);
var _engine = require("@tsparticles/engine");
var _rgbColorManagerJs = require("./RgbColorManager.js");
async function loadRgbColorPlugin(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addColorManager(new (0, _rgbColorManagerJs.RgbColorManager)(), refresh);
}

},{"@tsparticles/engine":"ahMVX","./RgbColorManager.js":"btTkF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"btTkF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RgbColorManager", ()=>RgbColorManager);
var _engine = require("@tsparticles/engine");
var RgbIndexes;
(function(RgbIndexes) {
    RgbIndexes[RgbIndexes["r"] = 1] = "r";
    RgbIndexes[RgbIndexes["g"] = 2] = "g";
    RgbIndexes[RgbIndexes["b"] = 3] = "b";
    RgbIndexes[RgbIndexes["a"] = 5] = "a";
})(RgbIndexes || (RgbIndexes = {}));
class RgbColorManager {
    constructor(){
        this.key = "rgb";
        this.stringPrefix = "rgb";
    }
    handleColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== undefined) return rgbColor;
    }
    handleRangeColor(color) {
        const colorValue = color.value, rgbColor = colorValue.rgb ?? color.value;
        if (rgbColor.r !== undefined) return {
            r: (0, _engine.getRangeValue)(rgbColor.r),
            g: (0, _engine.getRangeValue)(rgbColor.g),
            b: (0, _engine.getRangeValue)(rgbColor.b)
        };
    }
    parseString(input) {
        if (!input.startsWith(this.stringPrefix)) return;
        const regex = /rgba?\(\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*[\s,]\s*(\d{1,3})\s*([\s,]\s*(0|1|0?\.\d+|(\d{1,3})%)\s*)?\)/i, result = regex.exec(input), radix = 10, minLength = 4, defaultAlpha = 1;
        return result ? {
            a: result.length > minLength ? (0, _engine.parseAlpha)(result[RgbIndexes.a]) : defaultAlpha,
            b: parseInt(result[RgbIndexes.b], radix),
            g: parseInt(result[RgbIndexes.g], radix),
            r: parseInt(result[RgbIndexes.r], radix)
        } : undefined;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7NHVF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadSizeUpdater", ()=>loadSizeUpdater);
var _engine = require("@tsparticles/engine");
var _sizeUpdaterJs = require("./SizeUpdater.js");
async function loadSizeUpdater(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addParticleUpdater("size", ()=>{
        return Promise.resolve(new (0, _sizeUpdaterJs.SizeUpdater)());
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./SizeUpdater.js":"7xX7e","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7xX7e":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SizeUpdater", ()=>SizeUpdater);
var _engine = require("@tsparticles/engine");
const minLoops = 0;
class SizeUpdater {
    init(particle) {
        const container = particle.container, sizeOptions = particle.options.size, sizeAnimation = sizeOptions.animation;
        if (sizeAnimation.enable) {
            particle.size.velocity = (particle.retina.sizeAnimationSpeed ?? container.retina.sizeAnimationSpeed) / (0, _engine.percentDenominator) * container.retina.reduceFactor;
            if (!sizeAnimation.sync) particle.size.velocity *= (0, _engine.getRandom)();
        }
    }
    isEnabled(particle) {
        return !particle.destroyed && !particle.spawning && particle.size.enable && ((particle.size.maxLoops ?? minLoops) <= minLoops || (particle.size.maxLoops ?? minLoops) > minLoops && (particle.size.loops ?? minLoops) < (particle.size.maxLoops ?? minLoops));
    }
    reset(particle) {
        particle.size.loops = minLoops;
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) return;
        (0, _engine.updateAnimation)(particle, particle.size, true, particle.options.size.animation.destroy, delta);
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iujCd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadEasingQuadPlugin", ()=>loadEasingQuadPlugin);
var _engine = require("@tsparticles/engine");
async function loadEasingQuadPlugin(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addEasing((0, _engine.EasingType).easeInQuad, (value)=>value ** 2, false);
    await engine.addEasing((0, _engine.EasingType).easeOutQuad, (value)=>1 - (1 - value) ** 2, false);
    await engine.addEasing((0, _engine.EasingType).easeInOutQuad, (value)=>value < 0.5 ? 2 * value ** 2 : 1 - (-2 * value + 2) ** 2 / 2, false);
    await engine.refresh(refresh);
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"Grdzr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadEmojiShape", ()=>loadEmojiShape);
var _engine = require("@tsparticles/engine");
var _emojiDrawerJs = require("./EmojiDrawer.js");
async function loadEmojiShape(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addShape(new (0, _emojiDrawerJs.EmojiDrawer)(), refresh);
}

},{"@tsparticles/engine":"ahMVX","./EmojiDrawer.js":"4WSSC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4WSSC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "EmojiDrawer", ()=>EmojiDrawer);
var _engine = require("@tsparticles/engine");
var _utilsJs = require("./Utils.js");
const defaultFont = '"Twemoji Mozilla", Apple Color Emoji, "Segoe UI Emoji", "Noto Color Emoji", "EmojiOne Color"', noPadding = 0;
class EmojiDrawer {
    constructor(){
        this.validTypes = [
            "emoji"
        ];
        this._emojiShapeDict = new Map();
    }
    destroy() {
        for (const [key, data] of this._emojiShapeDict){
            if (data instanceof ImageBitmap) data?.close();
            this._emojiShapeDict.delete(key);
        }
    }
    draw(data) {
        const key = data.particle.emojiDataKey;
        if (!key) return;
        const image = this._emojiShapeDict.get(key);
        if (!image) return;
        (0, _utilsJs.drawEmoji)(data, image);
    }
    async init(container) {
        const options = container.actualOptions, { validTypes } = this;
        if (!validTypes.find((t)=>(0, _engine.isInArray)(t, options.particles.shape.type))) return;
        const promises = [
            (0, _engine.loadFont)(defaultFont)
        ], shapeOptions = validTypes.map((t)=>options.particles.shape.options[t]).find((t)=>!!t);
        if (shapeOptions) (0, _engine.executeOnSingleOrMultiple)(shapeOptions, (shape)=>{
            if (shape.font) promises.push((0, _engine.loadFont)(shape.font));
        });
        await Promise.all(promises);
    }
    particleDestroy(particle) {
        particle.emojiDataKey = undefined;
    }
    particleInit(_container, particle) {
        const double = 2, shapeData = particle.shapeData;
        if (!shapeData?.value) return;
        const emoji = (0, _engine.itemFromSingleOrMultiple)(shapeData.value, particle.randomIndexData);
        if (!emoji) return;
        const emojiOptions = typeof emoji === "string" ? {
            font: shapeData.font ?? defaultFont,
            padding: shapeData.padding ?? noPadding,
            value: emoji
        } : {
            font: defaultFont,
            padding: noPadding,
            ...shapeData,
            ...emoji
        }, font = emojiOptions.font, value = emojiOptions.value;
        const key = `${value}_${font}`;
        if (this._emojiShapeDict.has(key)) {
            particle.emojiDataKey = key;
            return;
        }
        const padding = emojiOptions.padding * double, maxSize = (0, _engine.getRangeMax)(particle.size.value), fullSize = maxSize + padding, canvasSize = fullSize * double;
        let image;
        if (typeof OffscreenCanvas !== "undefined") {
            const canvas = new OffscreenCanvas(canvasSize, canvasSize), context = canvas.getContext("2d");
            if (!context) return;
            context.font = `400 ${maxSize * double}px ${font}`;
            context.textBaseline = "middle";
            context.textAlign = "center";
            context.fillText(value, fullSize, fullSize);
            image = canvas.transferToImageBitmap();
        } else {
            const canvas = document.createElement("canvas");
            canvas.width = canvasSize;
            canvas.height = canvasSize;
            const context = canvas.getContext("2d");
            if (!context) return;
            context.font = `400 ${maxSize * double}px ${font}`;
            context.textBaseline = "middle";
            context.textAlign = "center";
            context.fillText(value, fullSize, fullSize);
            image = canvas;
        }
        this._emojiShapeDict.set(key, image);
        particle.emojiDataKey = key;
    }
}

},{"@tsparticles/engine":"ahMVX","./Utils.js":"cPEII","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cPEII":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawEmoji", ()=>drawEmoji);
function drawEmoji(data, image) {
    const { context, opacity } = data, half = 0.5, previousAlpha = context.globalAlpha;
    if (!image) return;
    const diameter = image.width, radius = diameter * half;
    context.globalAlpha = opacity;
    context.drawImage(image, -radius, -radius, diameter, diameter);
    context.globalAlpha = previousAlpha;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2XFPb":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadExternalAttractInteraction", ()=>loadExternalAttractInteraction);
var _engine = require("@tsparticles/engine");
var _attractorJs = require("./Attractor.js");
var _attractJs = require("./Options/Classes/Attract.js");
parcelHelpers.exportAll(_attractJs, exports);
var _iattractJs = require("./Options/Interfaces/IAttract.js");
parcelHelpers.exportAll(_iattractJs, exports);
async function loadExternalAttractInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addInteractor("externalAttract", (container)=>{
        return Promise.resolve(new (0, _attractorJs.Attractor)(engine, container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./Attractor.js":"kAOlz","./Options/Classes/Attract.js":"9j4pK","./Options/Interfaces/IAttract.js":"aDw0b","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kAOlz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Attractor", ()=>Attractor);
var _engine = require("@tsparticles/engine");
var _utilsJs = require("./Utils.js");
var _attractJs = require("./Options/Classes/Attract.js");
const attractMode = "attract";
class Attractor extends (0, _engine.ExternalInteractorBase) {
    constructor(engine, container){
        super(container);
        this._engine = engine;
        if (!container.attract) container.attract = {
            particles: []
        };
        this.handleClickMode = (mode)=>{
            const options = this.container.actualOptions, attract = options.interactivity.modes.attract;
            if (!attract || mode !== attractMode) return;
            if (!container.attract) container.attract = {
                particles: []
            };
            container.attract.clicking = true;
            container.attract.count = 0;
            for (const particle of container.attract.particles){
                if (!this.isEnabled(particle)) continue;
                particle.velocity.setTo(particle.initialVelocity);
            }
            container.attract.particles = [];
            container.attract.finish = false;
            setTimeout(()=>{
                if (container.destroyed) return;
                if (!container.attract) container.attract = {
                    particles: []
                };
                container.attract.clicking = false;
            }, attract.duration * (0, _engine.millisecondsToSeconds));
        };
    }
    clear() {}
    init() {
        const container = this.container, attract = container.actualOptions.interactivity.modes.attract;
        if (!attract) return;
        container.retina.attractModeDistance = attract.distance * container.retina.pixelRatio;
    }
    interact() {
        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === (0, _engine.mouseMoveEvent), events = options.interactivity.events, { enable: hoverEnabled, mode: hoverMode } = events.onHover, { enable: clickEnabled, mode: clickMode } = events.onClick;
        if (mouseMoveStatus && hoverEnabled && (0, _engine.isInArray)(attractMode, hoverMode)) (0, _utilsJs.hoverAttract)(this._engine, this.container, (p)=>this.isEnabled(p));
        else if (clickEnabled && (0, _engine.isInArray)(attractMode, clickMode)) (0, _utilsJs.clickAttract)(this._engine, this.container, (p)=>this.isEnabled(p));
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events;
        if ((!mouse.position || !events.onHover.enable) && (!mouse.clickPosition || !events.onClick.enable)) return false;
        const hoverMode = events.onHover.mode, clickMode = events.onClick.mode;
        return (0, _engine.isInArray)(attractMode, hoverMode) || (0, _engine.isInArray)(attractMode, clickMode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.attract) options.attract = new (0, _attractJs.Attract)();
        for (const source of sources)options.attract.load(source?.attract);
    }
    reset() {}
}

},{"@tsparticles/engine":"ahMVX","./Utils.js":"ffEG6","./Options/Classes/Attract.js":"9j4pK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ffEG6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "clickAttract", ()=>clickAttract);
parcelHelpers.export(exports, "hoverAttract", ()=>hoverAttract);
var _engine = require("@tsparticles/engine");
const minFactor = 1, identity = 1, minRadius = 0;
function processAttract(engine, container, position, attractRadius, area, queryCb) {
    const attractOptions = container.actualOptions.interactivity.modes.attract;
    if (!attractOptions) return;
    const query = container.particles.quadTree.query(area, queryCb);
    for (const particle of query){
        const { dx, dy, distance } = (0, _engine.getDistances)(particle.position, position), velocity = attractOptions.speed * attractOptions.factor, attractFactor = (0, _engine.clamp)(engine.getEasing(attractOptions.easing)(identity - distance / attractRadius) * velocity, minFactor, attractOptions.maxSpeed), normVec = (0, _engine.Vector).create(!distance ? velocity : dx / distance * attractFactor, !distance ? velocity : dy / distance * attractFactor);
        particle.position.subFrom(normVec);
    }
}
function clickAttract(engine, container, enabledCb) {
    if (!container.attract) container.attract = {
        particles: []
    };
    const { attract } = container;
    if (!attract.finish) {
        if (!attract.count) attract.count = 0;
        attract.count++;
        if (attract.count === container.particles.count) attract.finish = true;
    }
    if (attract.clicking) {
        const mousePos = container.interactivity.mouse.clickPosition, attractRadius = container.retina.attractModeDistance;
        if (!attractRadius || attractRadius < minRadius || !mousePos) return;
        processAttract(engine, container, mousePos, attractRadius, new (0, _engine.Circle)(mousePos.x, mousePos.y, attractRadius), (p)=>enabledCb(p));
    } else if (attract.clicking === false) attract.particles = [];
}
function hoverAttract(engine, container, enabledCb) {
    const mousePos = container.interactivity.mouse.position, attractRadius = container.retina.attractModeDistance;
    if (!attractRadius || attractRadius < minRadius || !mousePos) return;
    processAttract(engine, container, mousePos, attractRadius, new (0, _engine.Circle)(mousePos.x, mousePos.y, attractRadius), (p)=>enabledCb(p));
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9j4pK":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Attract", ()=>Attract);
var _engine = require("@tsparticles/engine");
class Attract {
    constructor(){
        this.distance = 200;
        this.duration = 0.4;
        this.easing = (0, _engine.EasingType).easeOutQuad;
        this.factor = 1;
        this.maxSpeed = 50;
        this.speed = 1;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.distance !== undefined) this.distance = data.distance;
        if (data.duration !== undefined) this.duration = data.duration;
        if (data.easing !== undefined) this.easing = data.easing;
        if (data.factor !== undefined) this.factor = data.factor;
        if (data.maxSpeed !== undefined) this.maxSpeed = data.maxSpeed;
        if (data.speed !== undefined) this.speed = data.speed;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aDw0b":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7ktbo":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadExternalBounceInteraction", ()=>loadExternalBounceInteraction);
var _engine = require("@tsparticles/engine");
var _bouncerJs = require("./Bouncer.js");
var _bounceJs = require("./Options/Classes/Bounce.js");
parcelHelpers.exportAll(_bounceJs, exports);
var _ibounceJs = require("./Options/Interfaces/IBounce.js");
parcelHelpers.exportAll(_ibounceJs, exports);
async function loadExternalBounceInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addInteractor("externalBounce", (container)=>{
        return Promise.resolve(new (0, _bouncerJs.Bouncer)(container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./Bouncer.js":"fgFm0","./Options/Classes/Bounce.js":"kKgV5","./Options/Interfaces/IBounce.js":"jfMJ5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fgFm0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bouncer", ()=>Bouncer);
var _engine = require("@tsparticles/engine");
var _utilsJs = require("./Utils.js");
var _bounceJs = require("./Options/Classes/Bounce.js");
const bounceMode = "bounce";
class Bouncer extends (0, _engine.ExternalInteractorBase) {
    constructor(container){
        super(container);
    }
    clear() {}
    init() {
        const container = this.container, bounce = container.actualOptions.interactivity.modes.bounce;
        if (!bounce) return;
        container.retina.bounceModeDistance = bounce.distance * container.retina.pixelRatio;
    }
    interact() {
        const container = this.container, options = container.actualOptions, events = options.interactivity.events, mouseMoveStatus = container.interactivity.status === (0, _engine.mouseMoveEvent), hoverEnabled = events.onHover.enable, hoverMode = events.onHover.mode, divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && (0, _engine.isInArray)(bounceMode, hoverMode)) (0, _utilsJs.mouseBounce)(this.container, (p)=>this.isEnabled(p));
        else (0, _utilsJs.divBounce)(this.container, divs, bounceMode, (p)=>this.isEnabled(p));
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events, divs = events.onDiv;
        return !!mouse.position && events.onHover.enable && (0, _engine.isInArray)(bounceMode, events.onHover.mode) || (0, _engine.isDivModeEnabled)(bounceMode, divs);
    }
    loadModeOptions(options, ...sources) {
        if (!options.bounce) options.bounce = new (0, _bounceJs.Bounce)();
        for (const source of sources)options.bounce.load(source?.bounce);
    }
    reset() {}
}

},{"@tsparticles/engine":"ahMVX","./Utils.js":"i7uz4","./Options/Classes/Bounce.js":"kKgV5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i7uz4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "divBounce", ()=>divBounce);
parcelHelpers.export(exports, "mouseBounce", ()=>mouseBounce);
var _engine = require("@tsparticles/engine");
const squareExp = 2, half = 0.5, halfPI = Math.PI * half, double = 2, toleranceFactor = 10, minRadius = 0;
function processBounce(container, position, radius, area, enabledCb) {
    const query = container.particles.quadTree.query(area, enabledCb);
    for (const particle of query){
        if (area instanceof (0, _engine.Circle)) (0, _engine.circleBounce)((0, _engine.circleBounceDataFromParticle)(particle), {
            position,
            radius,
            mass: radius ** squareExp * halfPI,
            velocity: (0, _engine.Vector).origin,
            factor: (0, _engine.Vector).origin
        });
        else if (area instanceof (0, _engine.Rectangle)) (0, _engine.rectBounce)(particle, (0, _engine.calculateBounds)(position, radius));
    }
}
function singleSelectorBounce(container, selector, div, bounceCb) {
    const query = document.querySelectorAll(selector);
    if (!query.length) return;
    query.forEach((item)=>{
        const elem = item, pxRatio = container.retina.pixelRatio, pos = {
            x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
            y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
        }, radius = elem.offsetWidth * half * pxRatio, tolerance = toleranceFactor * pxRatio, area = div.type === (0, _engine.DivType).circle ? new (0, _engine.Circle)(pos.x, pos.y, radius + tolerance) : new (0, _engine.Rectangle)(elem.offsetLeft * pxRatio - tolerance, elem.offsetTop * pxRatio - tolerance, elem.offsetWidth * pxRatio + tolerance * double, elem.offsetHeight * pxRatio + tolerance * double);
        bounceCb(pos, radius, area);
    });
}
function divBounce(container, divs, bounceMode, enabledCb) {
    (0, _engine.divModeExecute)(bounceMode, divs, (selector, div)=>singleSelectorBounce(container, selector, div, (pos, radius, area)=>processBounce(container, pos, radius, area, enabledCb)));
}
function mouseBounce(container, enabledCb) {
    const pxRatio = container.retina.pixelRatio, tolerance = toleranceFactor * pxRatio, mousePos = container.interactivity.mouse.position, radius = container.retina.bounceModeDistance;
    if (!radius || radius < minRadius || !mousePos) return;
    processBounce(container, mousePos, radius, new (0, _engine.Circle)(mousePos.x, mousePos.y, radius + tolerance), enabledCb);
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kKgV5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bounce", ()=>Bounce);
var _engine = require("@tsparticles/engine");
class Bounce {
    constructor(){
        this.distance = 200;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.distance !== undefined) this.distance = data.distance;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jfMJ5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b43t1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadExternalBubbleInteraction", ()=>loadExternalBubbleInteraction);
var _engine = require("@tsparticles/engine");
var _bubblerJs = require("./Bubbler.js");
var _bubbleBaseJs = require("./Options/Classes/BubbleBase.js");
parcelHelpers.exportAll(_bubbleBaseJs, exports);
var _bubbleDivJs = require("./Options/Classes/BubbleDiv.js");
parcelHelpers.exportAll(_bubbleDivJs, exports);
var _bubbleJs = require("./Options/Classes/Bubble.js");
parcelHelpers.exportAll(_bubbleJs, exports);
var _ibubbleBaseJs = require("./Options/Interfaces/IBubbleBase.js");
parcelHelpers.exportAll(_ibubbleBaseJs, exports);
var _ibubbleDivJs = require("./Options/Interfaces/IBubbleDiv.js");
parcelHelpers.exportAll(_ibubbleDivJs, exports);
var _ibubbleJs = require("./Options/Interfaces/IBubble.js");
parcelHelpers.exportAll(_ibubbleJs, exports);
async function loadExternalBubbleInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addInteractor("externalBubble", (container)=>{
        return Promise.resolve(new (0, _bubblerJs.Bubbler)(container, engine));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./Bubbler.js":"he25O","./Options/Classes/BubbleBase.js":"fADIZ","./Options/Classes/BubbleDiv.js":"jhMNh","./Options/Classes/Bubble.js":"lRPHR","./Options/Interfaces/IBubbleBase.js":"ebKAp","./Options/Interfaces/IBubbleDiv.js":"3ZxZw","./Options/Interfaces/IBubble.js":"ci3X6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"he25O":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bubbler", ()=>Bubbler);
var _engine = require("@tsparticles/engine");
var _bubbleJs = require("./Options/Classes/Bubble.js");
var _enumsJs = require("./Enums.js");
var _utilsJs = require("./Utils.js");
const bubbleMode = "bubble", minDistance = 0, defaultClickTime = 0, double = 2, defaultOpacity = 1, ratioOffset = 1, defaultBubbleValue = 0, minRatio = 0, half = 0.5, defaultRatio = 1;
class Bubbler extends (0, _engine.ExternalInteractorBase) {
    constructor(container, engine){
        super(container);
        this._clickBubble = ()=>{
            const container = this.container, options = container.actualOptions, mouseClickPos = container.interactivity.mouse.clickPosition, bubbleOptions = options.interactivity.modes.bubble;
            if (!bubbleOptions || !mouseClickPos) return;
            if (!container.bubble) container.bubble = {};
            const distance = container.retina.bubbleModeDistance;
            if (!distance || distance < minDistance) return;
            const query = container.particles.quadTree.queryCircle(mouseClickPos, distance, (p)=>this.isEnabled(p)), { bubble } = container;
            for (const particle of query){
                if (!bubble.clicking) continue;
                particle.bubble.inRange = !bubble.durationEnd;
                const pos = particle.getPosition(), distMouse = (0, _engine.getDistance)(pos, mouseClickPos), timeSpent = (new Date().getTime() - (container.interactivity.mouse.clickTime ?? defaultClickTime)) / (0, _engine.millisecondsToSeconds);
                if (timeSpent > bubbleOptions.duration) bubble.durationEnd = true;
                if (timeSpent > bubbleOptions.duration * double) {
                    bubble.clicking = false;
                    bubble.durationEnd = false;
                }
                const sizeData = {
                    bubbleObj: {
                        optValue: container.retina.bubbleModeSize,
                        value: particle.bubble.radius
                    },
                    particlesObj: {
                        optValue: (0, _engine.getRangeMax)(particle.options.size.value) * container.retina.pixelRatio,
                        value: particle.size.value
                    },
                    type: (0, _enumsJs.ProcessBubbleType).size
                };
                this._process(particle, distMouse, timeSpent, sizeData);
                const opacityData = {
                    bubbleObj: {
                        optValue: bubbleOptions.opacity,
                        value: particle.bubble.opacity
                    },
                    particlesObj: {
                        optValue: (0, _engine.getRangeMax)(particle.options.opacity.value),
                        value: particle.opacity?.value ?? defaultOpacity
                    },
                    type: (0, _enumsJs.ProcessBubbleType).opacity
                };
                this._process(particle, distMouse, timeSpent, opacityData);
                if (!bubble.durationEnd && distMouse <= distance) this._hoverBubbleColor(particle, distMouse);
                else delete particle.bubble.color;
            }
        };
        this._hoverBubble = ()=>{
            const container = this.container, mousePos = container.interactivity.mouse.position, distance = container.retina.bubbleModeDistance;
            if (!distance || distance < minDistance || !mousePos) return;
            const query = container.particles.quadTree.queryCircle(mousePos, distance, (p)=>this.isEnabled(p));
            for (const particle of query){
                particle.bubble.inRange = true;
                const pos = particle.getPosition(), pointDistance = (0, _engine.getDistance)(pos, mousePos), ratio = ratioOffset - pointDistance / distance;
                if (pointDistance <= distance) {
                    if (ratio >= minRatio && container.interactivity.status === (0, _engine.mouseMoveEvent)) {
                        this._hoverBubbleSize(particle, ratio);
                        this._hoverBubbleOpacity(particle, ratio);
                        this._hoverBubbleColor(particle, ratio);
                    }
                } else this.reset(particle);
                if (container.interactivity.status === (0, _engine.mouseLeaveEvent)) this.reset(particle);
            }
        };
        this._hoverBubbleColor = (particle, ratio, divBubble)=>{
            const options = this.container.actualOptions, bubbleOptions = divBubble ?? options.interactivity.modes.bubble;
            if (!bubbleOptions) return;
            if (!particle.bubble.finalColor) {
                const modeColor = bubbleOptions.color;
                if (!modeColor) return;
                const bubbleColor = (0, _engine.itemFromSingleOrMultiple)(modeColor);
                particle.bubble.finalColor = (0, _engine.rangeColorToHsl)(this._engine, bubbleColor);
            }
            if (!particle.bubble.finalColor) return;
            if (bubbleOptions.mix) {
                particle.bubble.color = undefined;
                const pColor = particle.getFillColor();
                particle.bubble.color = pColor ? (0, _engine.rgbToHsl)((0, _engine.colorMix)(pColor, particle.bubble.finalColor, ratioOffset - ratio, ratio)) : particle.bubble.finalColor;
            } else particle.bubble.color = particle.bubble.finalColor;
        };
        this._hoverBubbleOpacity = (particle, ratio, divBubble)=>{
            const container = this.container, options = container.actualOptions, modeOpacity = divBubble?.opacity ?? options.interactivity.modes.bubble?.opacity;
            if (!modeOpacity) return;
            const optOpacity = particle.options.opacity.value, pOpacity = particle.opacity?.value ?? defaultOpacity, opacity = (0, _utilsJs.calculateBubbleValue)(pOpacity, modeOpacity, (0, _engine.getRangeMax)(optOpacity), ratio);
            if (opacity !== undefined) particle.bubble.opacity = opacity;
        };
        this._hoverBubbleSize = (particle, ratio, divBubble)=>{
            const container = this.container, modeSize = divBubble?.size ? divBubble.size * container.retina.pixelRatio : container.retina.bubbleModeSize;
            if (modeSize === undefined) return;
            const optSize = (0, _engine.getRangeMax)(particle.options.size.value) * container.retina.pixelRatio, pSize = particle.size.value, size = (0, _utilsJs.calculateBubbleValue)(pSize, modeSize, optSize, ratio);
            if (size !== undefined) particle.bubble.radius = size;
        };
        this._process = (particle, distMouse, timeSpent, data)=>{
            const container = this.container, bubbleParam = data.bubbleObj.optValue, options = container.actualOptions, bubbleOptions = options.interactivity.modes.bubble;
            if (!bubbleOptions || bubbleParam === undefined) return;
            const bubbleDuration = bubbleOptions.duration, bubbleDistance = container.retina.bubbleModeDistance, particlesParam = data.particlesObj.optValue, pObjBubble = data.bubbleObj.value, pObj = data.particlesObj.value ?? defaultBubbleValue, type = data.type;
            if (!bubbleDistance || bubbleDistance < minDistance || bubbleParam === particlesParam) return;
            if (!container.bubble) container.bubble = {};
            if (container.bubble.durationEnd) {
                if (pObjBubble) {
                    if (type === (0, _enumsJs.ProcessBubbleType).size) delete particle.bubble.radius;
                    if (type === (0, _enumsJs.ProcessBubbleType).opacity) delete particle.bubble.opacity;
                }
            } else if (distMouse <= bubbleDistance) {
                const obj = pObjBubble ?? pObj;
                if (obj !== bubbleParam) {
                    const value = pObj - timeSpent * (pObj - bubbleParam) / bubbleDuration;
                    if (type === (0, _enumsJs.ProcessBubbleType).size) particle.bubble.radius = value;
                    if (type === (0, _enumsJs.ProcessBubbleType).opacity) particle.bubble.opacity = value;
                }
            } else {
                if (type === (0, _enumsJs.ProcessBubbleType).size) delete particle.bubble.radius;
                if (type === (0, _enumsJs.ProcessBubbleType).opacity) delete particle.bubble.opacity;
            }
        };
        this._singleSelectorHover = (delta, selector, div)=>{
            const container = this.container, selectors = document.querySelectorAll(selector), bubble = container.actualOptions.interactivity.modes.bubble;
            if (!bubble || !selectors.length) return;
            selectors.forEach((item)=>{
                const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                    x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
                    y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
                }, repulseRadius = elem.offsetWidth * half * pxRatio, area = div.type === (0, _engine.DivType).circle ? new (0, _engine.Circle)(pos.x, pos.y, repulseRadius) : new (0, _engine.Rectangle)(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), query = container.particles.quadTree.query(area, (p)=>this.isEnabled(p));
                for (const particle of query){
                    if (!area.contains(particle.getPosition())) continue;
                    particle.bubble.inRange = true;
                    const divs = bubble.divs, divBubble = (0, _engine.divMode)(divs, elem);
                    if (!particle.bubble.div || particle.bubble.div !== elem) {
                        this.clear(particle, delta, true);
                        particle.bubble.div = elem;
                    }
                    this._hoverBubbleSize(particle, defaultRatio, divBubble);
                    this._hoverBubbleOpacity(particle, defaultRatio, divBubble);
                    this._hoverBubbleColor(particle, defaultRatio, divBubble);
                }
            });
        };
        this._engine = engine;
        if (!container.bubble) container.bubble = {};
        this.handleClickMode = (mode)=>{
            if (mode !== bubbleMode) return;
            if (!container.bubble) container.bubble = {};
            container.bubble.clicking = true;
        };
    }
    clear(particle, delta, force) {
        if (particle.bubble.inRange && !force) return;
        delete particle.bubble.div;
        delete particle.bubble.opacity;
        delete particle.bubble.radius;
        delete particle.bubble.color;
    }
    init() {
        const container = this.container, bubble = container.actualOptions.interactivity.modes.bubble;
        if (!bubble) return;
        container.retina.bubbleModeDistance = bubble.distance * container.retina.pixelRatio;
        if (bubble.size !== undefined) container.retina.bubbleModeSize = bubble.size * container.retina.pixelRatio;
    }
    interact(delta) {
        const options = this.container.actualOptions, events = options.interactivity.events, onHover = events.onHover, onClick = events.onClick, hoverEnabled = onHover.enable, hoverMode = onHover.mode, clickEnabled = onClick.enable, clickMode = onClick.mode, divs = events.onDiv;
        if (hoverEnabled && (0, _engine.isInArray)(bubbleMode, hoverMode)) this._hoverBubble();
        else if (clickEnabled && (0, _engine.isInArray)(bubbleMode, clickMode)) this._clickBubble();
        else (0, _engine.divModeExecute)(bubbleMode, divs, (selector, div)=>this._singleSelectorHover(delta, selector, div));
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events, { onClick, onDiv, onHover } = events, divBubble = (0, _engine.isDivModeEnabled)(bubbleMode, onDiv);
        if (!(divBubble || onHover.enable && !!mouse.position || onClick.enable && mouse.clickPosition)) return false;
        return (0, _engine.isInArray)(bubbleMode, onHover.mode) || (0, _engine.isInArray)(bubbleMode, onClick.mode) || divBubble;
    }
    loadModeOptions(options, ...sources) {
        if (!options.bubble) options.bubble = new (0, _bubbleJs.Bubble)();
        for (const source of sources)options.bubble.load(source?.bubble);
    }
    reset(particle) {
        particle.bubble.inRange = false;
    }
}

},{"@tsparticles/engine":"ahMVX","./Options/Classes/Bubble.js":"lRPHR","./Enums.js":"c9CNw","./Utils.js":"icTFQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lRPHR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Bubble", ()=>Bubble);
var _engine = require("@tsparticles/engine");
var _bubbleBaseJs = require("./BubbleBase.js");
var _bubbleDivJs = require("./BubbleDiv.js");
class Bubble extends (0, _bubbleBaseJs.BubbleBase) {
    load(data) {
        super.load(data);
        if ((0, _engine.isNull)(data)) return;
        this.divs = (0, _engine.executeOnSingleOrMultiple)(data.divs, (div)=>{
            const tmp = new (0, _bubbleDivJs.BubbleDiv)();
            tmp.load(div);
            return tmp;
        });
    }
}

},{"@tsparticles/engine":"ahMVX","./BubbleBase.js":"fADIZ","./BubbleDiv.js":"jhMNh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fADIZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BubbleBase", ()=>BubbleBase);
var _engine = require("@tsparticles/engine");
class BubbleBase {
    constructor(){
        this.distance = 200;
        this.duration = 0.4;
        this.mix = false;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.distance !== undefined) this.distance = data.distance;
        if (data.duration !== undefined) this.duration = data.duration;
        if (data.mix !== undefined) this.mix = data.mix;
        if (data.opacity !== undefined) this.opacity = data.opacity;
        if (data.color !== undefined) {
            const sourceColor = (0, _engine.isArray)(this.color) ? undefined : this.color;
            this.color = (0, _engine.executeOnSingleOrMultiple)(data.color, (color)=>{
                return (0, _engine.OptionsColor).create(sourceColor, color);
            });
        }
        if (data.size !== undefined) this.size = data.size;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jhMNh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "BubbleDiv", ()=>BubbleDiv);
var _engine = require("@tsparticles/engine");
var _bubbleBaseJs = require("./BubbleBase.js");
class BubbleDiv extends (0, _bubbleBaseJs.BubbleBase) {
    constructor(){
        super();
        this.selectors = [];
    }
    load(data) {
        super.load(data);
        if ((0, _engine.isNull)(data)) return;
        if (data.selectors !== undefined) this.selectors = data.selectors;
    }
}

},{"@tsparticles/engine":"ahMVX","./BubbleBase.js":"fADIZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"c9CNw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ProcessBubbleType", ()=>ProcessBubbleType);
var ProcessBubbleType;
(function(ProcessBubbleType) {
    ProcessBubbleType["color"] = "color";
    ProcessBubbleType["opacity"] = "opacity";
    ProcessBubbleType["size"] = "size";
})(ProcessBubbleType || (ProcessBubbleType = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"icTFQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "calculateBubbleValue", ()=>calculateBubbleValue);
var _engine = require("@tsparticles/engine");
function calculateBubbleValue(particleValue, modeValue, optionsValue, ratio) {
    if (modeValue >= optionsValue) {
        const value = particleValue + (modeValue - optionsValue) * ratio;
        return (0, _engine.clamp)(value, particleValue, modeValue);
    } else if (modeValue < optionsValue) {
        const value = particleValue - (optionsValue - modeValue) * ratio;
        return (0, _engine.clamp)(value, modeValue, particleValue);
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ebKAp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ZxZw":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ci3X6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jakZz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadExternalConnectInteraction", ()=>loadExternalConnectInteraction);
var _engine = require("@tsparticles/engine");
var _connectorJs = require("./Connector.js");
var _connectJs = require("./Options/Classes/Connect.js");
parcelHelpers.exportAll(_connectJs, exports);
var _connectLinksJs = require("./Options/Classes/ConnectLinks.js");
parcelHelpers.exportAll(_connectLinksJs, exports);
var _iconnectJs = require("./Options/Interfaces/IConnect.js");
parcelHelpers.exportAll(_iconnectJs, exports);
var _iconnectLinksJs = require("./Options/Interfaces/IConnectLinks.js");
parcelHelpers.exportAll(_iconnectLinksJs, exports);
async function loadExternalConnectInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addInteractor("externalConnect", (container)=>{
        return Promise.resolve(new (0, _connectorJs.Connector)(container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./Connector.js":"3ABuJ","./Options/Classes/Connect.js":"3K2zW","./Options/Classes/ConnectLinks.js":"cIfcW","./Options/Interfaces/IConnect.js":"j44RD","./Options/Interfaces/IConnectLinks.js":"d43TC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3ABuJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Connector", ()=>Connector);
var _engine = require("@tsparticles/engine");
var _connectJs = require("./Options/Classes/Connect.js");
var _utilsJs = require("./Utils.js");
const connectMode = "connect", minDistance = 0;
class Connector extends (0, _engine.ExternalInteractorBase) {
    constructor(container){
        super(container);
    }
    clear() {}
    init() {
        const container = this.container, connect = container.actualOptions.interactivity.modes.connect;
        if (!connect) return;
        container.retina.connectModeDistance = connect.distance * container.retina.pixelRatio;
        container.retina.connectModeRadius = connect.radius * container.retina.pixelRatio;
    }
    interact() {
        const container = this.container, options = container.actualOptions;
        if (options.interactivity.events.onHover.enable && container.interactivity.status === "pointermove") {
            const mousePos = container.interactivity.mouse.position, { connectModeDistance, connectModeRadius } = container.retina;
            if (!connectModeDistance || connectModeDistance < minDistance || !connectModeRadius || connectModeRadius < minDistance || !mousePos) return;
            const distance = Math.abs(connectModeRadius), query = container.particles.quadTree.queryCircle(mousePos, distance, (p)=>this.isEnabled(p));
            query.forEach((p1, i)=>{
                const pos1 = p1.getPosition(), indexOffset = 1;
                for (const p2 of query.slice(i + indexOffset)){
                    const pos2 = p2.getPosition(), distMax = Math.abs(connectModeDistance), xDiff = Math.abs(pos1.x - pos2.x), yDiff = Math.abs(pos1.y - pos2.y);
                    if (xDiff < distMax && yDiff < distMax) (0, _utilsJs.drawConnection)(container, p1, p2);
                }
            });
        }
    }
    isEnabled(particle) {
        const container = this.container, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity).events;
        if (!(events.onHover.enable && mouse.position)) return false;
        return (0, _engine.isInArray)(connectMode, events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.connect) options.connect = new (0, _connectJs.Connect)();
        for (const source of sources)options.connect.load(source?.connect);
    }
    reset() {}
}

},{"@tsparticles/engine":"ahMVX","./Options/Classes/Connect.js":"3K2zW","./Utils.js":"3nQiC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3K2zW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Connect", ()=>Connect);
var _engine = require("@tsparticles/engine");
var _connectLinksJs = require("./ConnectLinks.js");
class Connect {
    constructor(){
        this.distance = 80;
        this.links = new (0, _connectLinksJs.ConnectLinks)();
        this.radius = 60;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.distance !== undefined) this.distance = data.distance;
        this.links.load(data.links);
        if (data.radius !== undefined) this.radius = data.radius;
    }
}

},{"@tsparticles/engine":"ahMVX","./ConnectLinks.js":"cIfcW","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cIfcW":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ConnectLinks", ()=>ConnectLinks);
var _engine = require("@tsparticles/engine");
class ConnectLinks {
    constructor(){
        this.opacity = 0.5;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.opacity !== undefined) this.opacity = data.opacity;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3nQiC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "gradient", ()=>gradient);
parcelHelpers.export(exports, "drawConnectLine", ()=>drawConnectLine);
parcelHelpers.export(exports, "lineStyle", ()=>lineStyle);
parcelHelpers.export(exports, "drawConnection", ()=>drawConnection);
var _engine = require("@tsparticles/engine");
const gradientMin = 0, gradientMax = 1, defaultLinksWidth = 0;
function gradient(context, p1, p2, opacity) {
    const gradStop = Math.floor(p2.getRadius() / p1.getRadius()), color1 = p1.getFillColor(), color2 = p2.getFillColor();
    if (!color1 || !color2) return;
    const sourcePos = p1.getPosition(), destPos = p2.getPosition(), midRgb = (0, _engine.colorMix)(color1, color2, p1.getRadius(), p2.getRadius()), grad = context.createLinearGradient(sourcePos.x, sourcePos.y, destPos.x, destPos.y);
    grad.addColorStop(gradientMin, (0, _engine.getStyleFromHsl)(color1, opacity));
    grad.addColorStop((0, _engine.clamp)(gradStop, gradientMin, gradientMax), (0, _engine.getStyleFromRgb)(midRgb, opacity));
    grad.addColorStop(gradientMax, (0, _engine.getStyleFromHsl)(color2, opacity));
    return grad;
}
function drawConnectLine(context, width, lineStyle, begin, end) {
    (0, _engine.drawLine)(context, begin, end);
    context.lineWidth = width;
    context.strokeStyle = lineStyle;
    context.stroke();
}
function lineStyle(container, ctx, p1, p2) {
    const options = container.actualOptions, connectOptions = options.interactivity.modes.connect;
    if (!connectOptions) return;
    return gradient(ctx, p1, p2, connectOptions.links.opacity);
}
function drawConnection(container, p1, p2) {
    container.canvas.draw((ctx)=>{
        const ls = lineStyle(container, ctx, p1, p2);
        if (!ls) return;
        const pos1 = p1.getPosition(), pos2 = p2.getPosition();
        drawConnectLine(ctx, p1.retina.linksWidth ?? defaultLinksWidth, ls, pos1, pos2);
    });
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"j44RD":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"d43TC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ds6pp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadExternalGrabInteraction", ()=>loadExternalGrabInteraction);
var _engine = require("@tsparticles/engine");
var _grabberJs = require("./Grabber.js");
var _grabJs = require("./Options/Classes/Grab.js");
parcelHelpers.exportAll(_grabJs, exports);
var _grabLinksJs = require("./Options/Classes/GrabLinks.js");
parcelHelpers.exportAll(_grabLinksJs, exports);
var _igrabJs = require("./Options/Interfaces/IGrab.js");
parcelHelpers.exportAll(_igrabJs, exports);
var _igrabLinksJs = require("./Options/Interfaces/IGrabLinks.js");
parcelHelpers.exportAll(_igrabLinksJs, exports);
async function loadExternalGrabInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addInteractor("externalGrab", (container)=>{
        return Promise.resolve(new (0, _grabberJs.Grabber)(container, engine));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./Grabber.js":"eR17G","./Options/Classes/Grab.js":"kJyOq","./Options/Classes/GrabLinks.js":"8THiC","./Options/Interfaces/IGrab.js":"hbFFH","./Options/Interfaces/IGrabLinks.js":"crdH6","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eR17G":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Grabber", ()=>Grabber);
var _engine = require("@tsparticles/engine");
var _grabJs = require("./Options/Classes/Grab.js");
var _utilsJs = require("./Utils.js");
const grabMode = "grab", minDistance = 0, minOpacity = 0;
class Grabber extends (0, _engine.ExternalInteractorBase) {
    constructor(container, engine){
        super(container);
        this._engine = engine;
    }
    clear() {}
    init() {
        const container = this.container, grab = container.actualOptions.interactivity.modes.grab;
        if (!grab) return;
        container.retina.grabModeDistance = grab.distance * container.retina.pixelRatio;
    }
    interact() {
        const container = this.container, options = container.actualOptions, interactivity = options.interactivity;
        if (!interactivity.modes.grab || !interactivity.events.onHover.enable || container.interactivity.status !== (0, _engine.mouseMoveEvent)) return;
        const mousePos = container.interactivity.mouse.position;
        if (!mousePos) return;
        const distance = container.retina.grabModeDistance;
        if (!distance || distance < minDistance) return;
        const query = container.particles.quadTree.queryCircle(mousePos, distance, (p)=>this.isEnabled(p));
        for (const particle of query){
            const pos = particle.getPosition(), pointDistance = (0, _engine.getDistance)(pos, mousePos);
            if (pointDistance > distance) continue;
            const grabLineOptions = interactivity.modes.grab.links, lineOpacity = grabLineOptions.opacity, opacityLine = lineOpacity - pointDistance * lineOpacity / distance;
            if (opacityLine <= minOpacity) continue;
            const optColor = grabLineOptions.color ?? particle.options.links?.color;
            if (!container.particles.grabLineColor && optColor) {
                const linksOptions = interactivity.modes.grab.links;
                container.particles.grabLineColor = (0, _engine.getLinkRandomColor)(this._engine, optColor, linksOptions.blink, linksOptions.consent);
            }
            const colorLine = (0, _engine.getLinkColor)(particle, undefined, container.particles.grabLineColor);
            if (!colorLine) continue;
            (0, _utilsJs.drawGrab)(container, particle, colorLine, opacityLine, mousePos);
        }
    }
    isEnabled(particle) {
        const container = this.container, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity).events;
        return events.onHover.enable && !!mouse.position && (0, _engine.isInArray)(grabMode, events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.grab) options.grab = new (0, _grabJs.Grab)();
        for (const source of sources)options.grab.load(source?.grab);
    }
    reset() {}
}

},{"@tsparticles/engine":"ahMVX","./Options/Classes/Grab.js":"kJyOq","./Utils.js":"8cAW5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kJyOq":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Grab", ()=>Grab);
var _engine = require("@tsparticles/engine");
var _grabLinksJs = require("./GrabLinks.js");
class Grab {
    constructor(){
        this.distance = 100;
        this.links = new (0, _grabLinksJs.GrabLinks)();
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.distance !== undefined) this.distance = data.distance;
        this.links.load(data.links);
    }
}

},{"@tsparticles/engine":"ahMVX","./GrabLinks.js":"8THiC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8THiC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GrabLinks", ()=>GrabLinks);
var _engine = require("@tsparticles/engine");
class GrabLinks {
    constructor(){
        this.blink = false;
        this.consent = false;
        this.opacity = 1;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.blink !== undefined) this.blink = data.blink;
        if (data.color !== undefined) this.color = (0, _engine.OptionsColor).create(this.color, data.color);
        if (data.consent !== undefined) this.consent = data.consent;
        if (data.opacity !== undefined) this.opacity = data.opacity;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8cAW5":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawGrabLine", ()=>drawGrabLine);
parcelHelpers.export(exports, "drawGrab", ()=>drawGrab);
var _engine = require("@tsparticles/engine");
const defaultWidth = 0;
function drawGrabLine(context, width, begin, end, colorLine, opacity) {
    (0, _engine.drawLine)(context, begin, end);
    context.strokeStyle = (0, _engine.getStyleFromRgb)(colorLine, opacity);
    context.lineWidth = width;
    context.stroke();
}
function drawGrab(container, particle, lineColor, opacity, mousePos) {
    container.canvas.draw((ctx)=>{
        const beginPos = particle.getPosition();
        drawGrabLine(ctx, particle.retina.linksWidth ?? defaultWidth, beginPos, mousePos, lineColor, opacity);
    });
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hbFFH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"crdH6":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8pblm":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadExternalPauseInteraction", ()=>loadExternalPauseInteraction);
var _engine = require("@tsparticles/engine");
var _pauserJs = require("./Pauser.js");
async function loadExternalPauseInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addInteractor("externalPause", (container)=>{
        return Promise.resolve(new (0, _pauserJs.Pauser)(container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./Pauser.js":"lOtxQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lOtxQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Pauser", ()=>Pauser);
var _engine = require("@tsparticles/engine");
const pauseMode = "pause";
class Pauser extends (0, _engine.ExternalInteractorBase) {
    constructor(container){
        super(container);
        this.handleClickMode = (mode)=>{
            if (mode !== pauseMode) return;
            const container = this.container;
            if (container.animationStatus) container.pause();
            else container.play();
        };
    }
    clear() {}
    init() {}
    interact() {}
    isEnabled() {
        return true;
    }
    reset() {}
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"WPEfZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadExternalPushInteraction", ()=>loadExternalPushInteraction);
var _engine = require("@tsparticles/engine");
var _pusherJs = require("./Pusher.js");
var _pushJs = require("./Options/Classes/Push.js");
parcelHelpers.exportAll(_pushJs, exports);
var _ipushJs = require("./Options/Interfaces/IPush.js");
parcelHelpers.exportAll(_ipushJs, exports);
async function loadExternalPushInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addInteractor("externalPush", (container)=>{
        return Promise.resolve(new (0, _pusherJs.Pusher)(container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./Pusher.js":"gzpFB","./Options/Classes/Push.js":"jFLQH","./Options/Interfaces/IPush.js":"ipILS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gzpFB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Pusher", ()=>Pusher);
var _engine = require("@tsparticles/engine");
var _pushJs = require("./Options/Classes/Push.js");
const pushMode = "push", minQuantity = 0;
class Pusher extends (0, _engine.ExternalInteractorBase) {
    constructor(container){
        super(container);
        this.handleClickMode = (mode)=>{
            if (mode !== pushMode) return;
            const container = this.container, options = container.actualOptions, pushOptions = options.interactivity.modes.push;
            if (!pushOptions) return;
            const quantity = (0, _engine.getRangeValue)(pushOptions.quantity);
            if (quantity <= minQuantity) return;
            const group = (0, _engine.itemFromArray)([
                undefined,
                ...pushOptions.groups
            ]), groupOptions = group !== undefined ? container.actualOptions.particles.groups[group] : undefined;
            container.particles.push(quantity, container.interactivity.mouse, groupOptions, group);
        };
    }
    clear() {}
    init() {}
    interact() {}
    isEnabled() {
        return true;
    }
    loadModeOptions(options, ...sources) {
        if (!options.push) options.push = new (0, _pushJs.Push)();
        for (const source of sources)options.push.load(source?.push);
    }
    reset() {}
}

},{"@tsparticles/engine":"ahMVX","./Options/Classes/Push.js":"jFLQH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jFLQH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Push", ()=>Push);
var _engine = require("@tsparticles/engine");
class Push {
    constructor(){
        this.default = true;
        this.groups = [];
        this.quantity = 4;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.default !== undefined) this.default = data.default;
        if (data.groups !== undefined) this.groups = data.groups.map((t)=>t);
        if (!this.groups.length) this.default = true;
        const quantity = data.quantity;
        if (quantity !== undefined) this.quantity = (0, _engine.setRangeValue)(quantity);
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ipILS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"l5WHz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadExternalRemoveInteraction", ()=>loadExternalRemoveInteraction);
var _engine = require("@tsparticles/engine");
var _removerJs = require("./Remover.js");
var _removeJs = require("./Options/Classes/Remove.js");
parcelHelpers.exportAll(_removeJs, exports);
var _iremoveJs = require("./Options/Interfaces/IRemove.js");
parcelHelpers.exportAll(_iremoveJs, exports);
async function loadExternalRemoveInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addInteractor("externalRemove", (container)=>{
        return Promise.resolve(new (0, _removerJs.Remover)(container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./Remover.js":"J0SCh","./Options/Classes/Remove.js":"eEXqS","./Options/Interfaces/IRemove.js":"fqkn1","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"J0SCh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Remover", ()=>Remover);
var _engine = require("@tsparticles/engine");
var _removeJs = require("./Options/Classes/Remove.js");
const removeMode = "remove";
class Remover extends (0, _engine.ExternalInteractorBase) {
    constructor(container){
        super(container);
        this.handleClickMode = (mode)=>{
            const container = this.container, options = container.actualOptions;
            if (!options.interactivity.modes.remove || mode !== removeMode) return;
            const removeNb = (0, _engine.getRangeValue)(options.interactivity.modes.remove.quantity);
            container.particles.removeQuantity(removeNb);
        };
    }
    clear() {}
    init() {}
    interact() {}
    isEnabled() {
        return true;
    }
    loadModeOptions(options, ...sources) {
        if (!options.remove) options.remove = new (0, _removeJs.Remove)();
        for (const source of sources)options.remove.load(source?.remove);
    }
    reset() {}
}

},{"@tsparticles/engine":"ahMVX","./Options/Classes/Remove.js":"eEXqS","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eEXqS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Remove", ()=>Remove);
var _engine = require("@tsparticles/engine");
class Remove {
    constructor(){
        this.quantity = 2;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        const quantity = data.quantity;
        if (quantity !== undefined) this.quantity = (0, _engine.setRangeValue)(quantity);
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fqkn1":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"g95RS":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadExternalRepulseInteraction", ()=>loadExternalRepulseInteraction);
var _engine = require("@tsparticles/engine");
var _repulserJs = require("./Repulser.js");
var _repulseBaseJs = require("./Options/Classes/RepulseBase.js");
parcelHelpers.exportAll(_repulseBaseJs, exports);
var _repulseDivJs = require("./Options/Classes/RepulseDiv.js");
parcelHelpers.exportAll(_repulseDivJs, exports);
var _repulseJs = require("./Options/Classes/Repulse.js");
parcelHelpers.exportAll(_repulseJs, exports);
var _irepulseBaseJs = require("./Options/Interfaces/IRepulseBase.js");
parcelHelpers.exportAll(_irepulseBaseJs, exports);
var _irepulseDivJs = require("./Options/Interfaces/IRepulseDiv.js");
parcelHelpers.exportAll(_irepulseDivJs, exports);
var _irepulseJs = require("./Options/Interfaces/IRepulse.js");
parcelHelpers.exportAll(_irepulseJs, exports);
async function loadExternalRepulseInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addInteractor("externalRepulse", (container)=>{
        return Promise.resolve(new (0, _repulserJs.Repulser)(engine, container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./Repulser.js":"k8sRC","./Options/Classes/RepulseBase.js":"euv0j","./Options/Classes/RepulseDiv.js":"cbBZ3","./Options/Classes/Repulse.js":"5vnl7","./Options/Interfaces/IRepulseBase.js":"eD4KN","./Options/Interfaces/IRepulseDiv.js":"7vdRd","./Options/Interfaces/IRepulse.js":"kOILT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8sRC":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Repulser", ()=>Repulser);
var _engine = require("@tsparticles/engine");
var _repulseJs = require("./Options/Classes/Repulse.js");
const repulseMode = "repulse", minDistance = 0, repulseRadiusFactor = 6, repulseRadiusPower = 3, squarePower = 2, minRadius = 0, minSpeed = 0, easingOffset = 1, half = 0.5;
class Repulser extends (0, _engine.ExternalInteractorBase) {
    constructor(engine, container){
        super(container);
        this._clickRepulse = ()=>{
            const container = this.container, repulseOptions = container.actualOptions.interactivity.modes.repulse;
            if (!repulseOptions) return;
            const repulse = container.repulse ?? {
                particles: []
            };
            if (!repulse.finish) {
                if (!repulse.count) repulse.count = 0;
                repulse.count++;
                if (repulse.count === container.particles.count) repulse.finish = true;
            }
            if (repulse.clicking) {
                const repulseDistance = container.retina.repulseModeDistance;
                if (!repulseDistance || repulseDistance < minDistance) return;
                const repulseRadius = Math.pow(repulseDistance / repulseRadiusFactor, repulseRadiusPower), mouseClickPos = container.interactivity.mouse.clickPosition;
                if (mouseClickPos === undefined) return;
                const range = new (0, _engine.Circle)(mouseClickPos.x, mouseClickPos.y, repulseRadius), query = container.particles.quadTree.query(range, (p)=>this.isEnabled(p));
                for (const particle of query){
                    const { dx, dy, distance } = (0, _engine.getDistances)(mouseClickPos, particle.position), d = distance ** squarePower, velocity = repulseOptions.speed, force = -repulseRadius * velocity / d;
                    if (d <= repulseRadius) {
                        repulse.particles.push(particle);
                        const vect = (0, _engine.Vector).create(dx, dy);
                        vect.length = force;
                        particle.velocity.setTo(vect);
                    }
                }
            } else if (repulse.clicking === false) {
                for (const particle of repulse.particles)particle.velocity.setTo(particle.initialVelocity);
                repulse.particles = [];
            }
        };
        this._hoverRepulse = ()=>{
            const container = this.container, mousePos = container.interactivity.mouse.position, repulseRadius = container.retina.repulseModeDistance;
            if (!repulseRadius || repulseRadius < minRadius || !mousePos) return;
            this._processRepulse(mousePos, repulseRadius, new (0, _engine.Circle)(mousePos.x, mousePos.y, repulseRadius));
        };
        this._processRepulse = (position, repulseRadius, area, divRepulse)=>{
            const container = this.container, query = container.particles.quadTree.query(area, (p)=>this.isEnabled(p)), repulseOptions = container.actualOptions.interactivity.modes.repulse;
            if (!repulseOptions) return;
            const { easing, speed, factor, maxSpeed } = repulseOptions, easingFunc = this._engine.getEasing(easing), velocity = (divRepulse?.speed ?? speed) * factor;
            for (const particle of query){
                const { dx, dy, distance } = (0, _engine.getDistances)(particle.position, position), repulseFactor = (0, _engine.clamp)(easingFunc(easingOffset - distance / repulseRadius) * velocity, minSpeed, maxSpeed), normVec = (0, _engine.Vector).create(!distance ? velocity : dx / distance * repulseFactor, !distance ? velocity : dy / distance * repulseFactor);
                particle.position.addTo(normVec);
            }
        };
        this._singleSelectorRepulse = (selector, div)=>{
            const container = this.container, repulse = container.actualOptions.interactivity.modes.repulse;
            if (!repulse) return;
            const query = document.querySelectorAll(selector);
            if (!query.length) return;
            query.forEach((item)=>{
                const elem = item, pxRatio = container.retina.pixelRatio, pos = {
                    x: (elem.offsetLeft + elem.offsetWidth * half) * pxRatio,
                    y: (elem.offsetTop + elem.offsetHeight * half) * pxRatio
                }, repulseRadius = elem.offsetWidth * half * pxRatio, area = div.type === (0, _engine.DivType).circle ? new (0, _engine.Circle)(pos.x, pos.y, repulseRadius) : new (0, _engine.Rectangle)(elem.offsetLeft * pxRatio, elem.offsetTop * pxRatio, elem.offsetWidth * pxRatio, elem.offsetHeight * pxRatio), divs = repulse.divs, divRepulse = (0, _engine.divMode)(divs, elem);
                this._processRepulse(pos, repulseRadius, area, divRepulse);
            });
        };
        this._engine = engine;
        if (!container.repulse) container.repulse = {
            particles: []
        };
        this.handleClickMode = (mode)=>{
            const options = this.container.actualOptions, repulseOpts = options.interactivity.modes.repulse;
            if (!repulseOpts || mode !== repulseMode) return;
            if (!container.repulse) container.repulse = {
                particles: []
            };
            const repulse = container.repulse;
            repulse.clicking = true;
            repulse.count = 0;
            for (const particle of container.repulse.particles){
                if (!this.isEnabled(particle)) continue;
                particle.velocity.setTo(particle.initialVelocity);
            }
            repulse.particles = [];
            repulse.finish = false;
            setTimeout(()=>{
                if (container.destroyed) return;
                repulse.clicking = false;
            }, repulseOpts.duration * (0, _engine.millisecondsToSeconds));
        };
    }
    clear() {}
    init() {
        const container = this.container, repulse = container.actualOptions.interactivity.modes.repulse;
        if (!repulse) return;
        container.retina.repulseModeDistance = repulse.distance * container.retina.pixelRatio;
    }
    interact() {
        const container = this.container, options = container.actualOptions, mouseMoveStatus = container.interactivity.status === (0, _engine.mouseMoveEvent), events = options.interactivity.events, hover = events.onHover, hoverEnabled = hover.enable, hoverMode = hover.mode, click = events.onClick, clickEnabled = click.enable, clickMode = click.mode, divs = events.onDiv;
        if (mouseMoveStatus && hoverEnabled && (0, _engine.isInArray)(repulseMode, hoverMode)) this._hoverRepulse();
        else if (clickEnabled && (0, _engine.isInArray)(repulseMode, clickMode)) this._clickRepulse();
        else (0, _engine.divModeExecute)(repulseMode, divs, (selector, div)=>this._singleSelectorRepulse(selector, div));
    }
    isEnabled(particle) {
        const container = this.container, options = container.actualOptions, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? options.interactivity).events, divs = events.onDiv, hover = events.onHover, click = events.onClick, divRepulse = (0, _engine.isDivModeEnabled)(repulseMode, divs);
        if (!(divRepulse || hover.enable && !!mouse.position || click.enable && mouse.clickPosition)) return false;
        const hoverMode = hover.mode, clickMode = click.mode;
        return (0, _engine.isInArray)(repulseMode, hoverMode) || (0, _engine.isInArray)(repulseMode, clickMode) || divRepulse;
    }
    loadModeOptions(options, ...sources) {
        if (!options.repulse) options.repulse = new (0, _repulseJs.Repulse)();
        for (const source of sources)options.repulse.load(source?.repulse);
    }
    reset() {}
}

},{"@tsparticles/engine":"ahMVX","./Options/Classes/Repulse.js":"5vnl7","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5vnl7":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Repulse", ()=>Repulse);
var _engine = require("@tsparticles/engine");
var _repulseBaseJs = require("./RepulseBase.js");
var _repulseDivJs = require("./RepulseDiv.js");
class Repulse extends (0, _repulseBaseJs.RepulseBase) {
    load(data) {
        super.load(data);
        if ((0, _engine.isNull)(data)) return;
        this.divs = (0, _engine.executeOnSingleOrMultiple)(data.divs, (div)=>{
            const tmp = new (0, _repulseDivJs.RepulseDiv)();
            tmp.load(div);
            return tmp;
        });
    }
}

},{"@tsparticles/engine":"ahMVX","./RepulseBase.js":"euv0j","./RepulseDiv.js":"cbBZ3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"euv0j":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RepulseBase", ()=>RepulseBase);
var _engine = require("@tsparticles/engine");
class RepulseBase {
    constructor(){
        this.distance = 200;
        this.duration = 0.4;
        this.factor = 100;
        this.speed = 1;
        this.maxSpeed = 50;
        this.easing = (0, _engine.EasingType).easeOutQuad;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.distance !== undefined) this.distance = data.distance;
        if (data.duration !== undefined) this.duration = data.duration;
        if (data.easing !== undefined) this.easing = data.easing;
        if (data.factor !== undefined) this.factor = data.factor;
        if (data.speed !== undefined) this.speed = data.speed;
        if (data.maxSpeed !== undefined) this.maxSpeed = data.maxSpeed;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cbBZ3":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RepulseDiv", ()=>RepulseDiv);
var _engine = require("@tsparticles/engine");
var _repulseBaseJs = require("./RepulseBase.js");
class RepulseDiv extends (0, _repulseBaseJs.RepulseBase) {
    constructor(){
        super();
        this.selectors = [];
    }
    load(data) {
        super.load(data);
        if ((0, _engine.isNull)(data)) return;
        if (data.selectors !== undefined) this.selectors = data.selectors;
    }
}

},{"@tsparticles/engine":"ahMVX","./RepulseBase.js":"euv0j","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eD4KN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7vdRd":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kOILT":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aaEsz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadExternalSlowInteraction", ()=>loadExternalSlowInteraction);
var _engine = require("@tsparticles/engine");
var _slowerJs = require("./Slower.js");
var _slowJs = require("./Options/Classes/Slow.js");
parcelHelpers.exportAll(_slowJs, exports);
var _islowJs = require("./Options/Interfaces/ISlow.js");
parcelHelpers.exportAll(_islowJs, exports);
async function loadExternalSlowInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addInteractor("externalSlow", (container)=>{
        return Promise.resolve(new (0, _slowerJs.Slower)(container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./Slower.js":"vGUEp","./Options/Classes/Slow.js":"3mPkR","./Options/Interfaces/ISlow.js":"8FIJu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"vGUEp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Slower", ()=>Slower);
var _engine = require("@tsparticles/engine");
var _slowJs = require("./Options/Classes/Slow.js");
const slowMode = "slow", minRadius = 0;
class Slower extends (0, _engine.ExternalInteractorBase) {
    constructor(container){
        super(container);
    }
    clear(particle, delta, force) {
        if (particle.slow.inRange && !force) return;
        particle.slow.factor = 1;
    }
    init() {
        const container = this.container, slow = container.actualOptions.interactivity.modes.slow;
        if (!slow) return;
        container.retina.slowModeRadius = slow.radius * container.retina.pixelRatio;
    }
    interact() {}
    isEnabled(particle) {
        const container = this.container, mouse = container.interactivity.mouse, events = (particle?.interactivity ?? container.actualOptions.interactivity).events;
        return events.onHover.enable && !!mouse.position && (0, _engine.isInArray)(slowMode, events.onHover.mode);
    }
    loadModeOptions(options, ...sources) {
        if (!options.slow) options.slow = new (0, _slowJs.Slow)();
        for (const source of sources)options.slow.load(source?.slow);
    }
    reset(particle) {
        particle.slow.inRange = false;
        const container = this.container, options = container.actualOptions, mousePos = container.interactivity.mouse.position, radius = container.retina.slowModeRadius, slowOptions = options.interactivity.modes.slow;
        if (!slowOptions || !radius || radius < minRadius || !mousePos) return;
        const particlePos = particle.getPosition(), dist = (0, _engine.getDistance)(mousePos, particlePos), proximityFactor = dist / radius, slowFactor = slowOptions.factor, { slow } = particle;
        if (dist > radius) return;
        slow.inRange = true;
        slow.factor = proximityFactor / slowFactor;
    }
}

},{"@tsparticles/engine":"ahMVX","./Options/Classes/Slow.js":"3mPkR","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3mPkR":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Slow", ()=>Slow);
var _engine = require("@tsparticles/engine");
class Slow {
    constructor(){
        this.factor = 3;
        this.radius = 200;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.factor !== undefined) this.factor = data.factor;
        if (data.radius !== undefined) this.radius = data.radius;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8FIJu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"63bIE":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadImageShape", ()=>loadImageShape);
var _utilsJs = require("./Utils.js");
var _engine = require("@tsparticles/engine");
var _imageDrawerJs = require("./ImageDrawer.js");
var _imagePreloaderJs = require("./ImagePreloader.js");
var _utilsJs1 = require("./GifUtils/Utils.js");
const extLength = 3;
function addLoadImageToEngine(engine) {
    if (engine.loadImage) return;
    engine.loadImage = async (data)=>{
        if (!data.name && !data.src) throw new Error(`${(0, _engine.errorPrefix)} no image source provided`);
        if (!engine.images) engine.images = [];
        if (engine.images.find((t)=>t.name === data.name || t.source === data.src)) return;
        try {
            const image = {
                gif: data.gif ?? false,
                name: data.name ?? data.src,
                source: data.src,
                type: data.src.substring(data.src.length - extLength),
                error: false,
                loading: true,
                replaceColor: data.replaceColor,
                ratio: data.width && data.height ? data.width / data.height : undefined
            };
            engine.images.push(image);
            let imageFunc;
            if (data.gif) imageFunc = (0, _utilsJs1.loadGifImage);
            else imageFunc = data.replaceColor ? (0, _utilsJs.downloadSvgImage) : (0, _utilsJs.loadImage);
            await imageFunc(image);
        } catch  {
            throw new Error(`${(0, _engine.errorPrefix)} ${data.name ?? data.src} not found`);
        }
    };
}
async function loadImageShape(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    addLoadImageToEngine(engine);
    const preloader = new (0, _imagePreloaderJs.ImagePreloaderPlugin)(engine);
    await engine.addPlugin(preloader, refresh);
    await engine.addShape(new (0, _imageDrawerJs.ImageDrawer)(engine), refresh);
}

},{"./Utils.js":"i16sx","@tsparticles/engine":"ahMVX","./ImageDrawer.js":"lz6ld","./ImagePreloader.js":"i3SWc","./GifUtils/Utils.js":"icRPA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i16sx":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadImage", ()=>loadImage);
parcelHelpers.export(exports, "downloadSvgImage", ()=>downloadSvgImage);
parcelHelpers.export(exports, "replaceImageColor", ()=>replaceImageColor);
var _engine = require("@tsparticles/engine");
const stringStart = 0, defaultOpacity = 1;
const currentColorRegex = /(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d.]+%?\))|currentcolor/gi;
function replaceColorSvg(imageShape, color, opacity) {
    const { svgData } = imageShape;
    if (!svgData) return "";
    const colorStyle = (0, _engine.getStyleFromHsl)(color, opacity);
    if (svgData.includes("fill")) return svgData.replace(currentColorRegex, ()=>colorStyle);
    const preFillIndex = svgData.indexOf(">");
    return `${svgData.substring(stringStart, preFillIndex)} fill="${colorStyle}"${svgData.substring(preFillIndex)}`;
}
async function loadImage(image) {
    return new Promise((resolve)=>{
        image.loading = true;
        const img = new Image();
        image.element = img;
        img.addEventListener("load", ()=>{
            image.loading = false;
            resolve();
        });
        img.addEventListener("error", ()=>{
            image.element = undefined;
            image.error = true;
            image.loading = false;
            (0, _engine.getLogger)().error(`${(0, _engine.errorPrefix)} loading image: ${image.source}`);
            resolve();
        });
        img.src = image.source;
    });
}
async function downloadSvgImage(image) {
    if (image.type !== "svg") {
        await loadImage(image);
        return;
    }
    image.loading = true;
    const response = await fetch(image.source);
    if (!response.ok) {
        (0, _engine.getLogger)().error(`${(0, _engine.errorPrefix)} Image not found`);
        image.error = true;
    } else image.svgData = await response.text();
    image.loading = false;
}
function replaceImageColor(image, imageData, color, particle) {
    const svgColoredData = replaceColorSvg(image, color, particle.opacity?.value ?? defaultOpacity), imageRes = {
        color,
        gif: imageData.gif,
        data: {
            ...image,
            svgData: svgColoredData
        },
        loaded: false,
        ratio: imageData.width / imageData.height,
        replaceColor: imageData.replaceColor,
        source: imageData.src
    };
    return new Promise((resolve)=>{
        const svg = new Blob([
            svgColoredData
        ], {
            type: "image/svg+xml"
        }), domUrl = URL || window.URL || window.webkitURL || window, url = domUrl.createObjectURL(svg), img = new Image();
        img.addEventListener("load", ()=>{
            imageRes.loaded = true;
            imageRes.element = img;
            resolve(imageRes);
            domUrl.revokeObjectURL(url);
        });
        const errorHandler = async ()=>{
            domUrl.revokeObjectURL(url);
            const img2 = {
                ...image,
                error: false,
                loading: true
            };
            await loadImage(img2);
            imageRes.loaded = true;
            imageRes.element = img2.element;
            resolve(imageRes);
        };
        img.addEventListener("error", ()=>void errorHandler());
        img.src = url;
    });
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lz6ld":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImageDrawer", ()=>ImageDrawer);
var _engine = require("@tsparticles/engine");
var _utilsJs = require("./Utils.js");
var _utilsJs1 = require("./GifUtils/Utils.js");
const double = 2, defaultAlpha = 1, sides = 12, defaultRatio = 1;
class ImageDrawer {
    constructor(engine){
        this.validTypes = [
            "image",
            "images"
        ];
        this.loadImageShape = async (imageShape)=>{
            if (!this._engine.loadImage) throw new Error(`${(0, _engine.errorPrefix)} image shape not initialized`);
            await this._engine.loadImage({
                gif: imageShape.gif,
                name: imageShape.name,
                replaceColor: imageShape.replaceColor ?? false,
                src: imageShape.src
            });
        };
        this._engine = engine;
    }
    addImage(image) {
        if (!this._engine.images) this._engine.images = [];
        this._engine.images.push(image);
    }
    draw(data) {
        const { context, radius, particle, opacity } = data, image = particle.image, element = image?.element;
        if (!image) return;
        context.globalAlpha = opacity;
        if (image.gif && image.gifData) (0, _utilsJs1.drawGif)(data);
        else if (element) {
            const ratio = image.ratio, pos = {
                x: -radius,
                y: -radius
            }, diameter = radius * double;
            context.drawImage(element, pos.x, pos.y, diameter, diameter / ratio);
        }
        context.globalAlpha = defaultAlpha;
    }
    getSidesCount() {
        return sides;
    }
    async init(container) {
        const options = container.actualOptions;
        if (!options.preload || !this._engine.loadImage) return;
        for (const imageData of options.preload)await this._engine.loadImage(imageData);
    }
    loadShape(particle) {
        if (particle.shape !== "image" && particle.shape !== "images") return;
        if (!this._engine.images) this._engine.images = [];
        const imageData = particle.shapeData;
        if (!imageData) return;
        const image = this._engine.images.find((t)=>t.name === imageData.name || t.source === imageData.src);
        if (!image) this.loadImageShape(imageData).then(()=>{
            this.loadShape(particle);
        });
    }
    particleInit(container, particle) {
        if (particle.shape !== "image" && particle.shape !== "images") return;
        if (!this._engine.images) this._engine.images = [];
        const images = this._engine.images, imageData = particle.shapeData;
        if (!imageData) return;
        const color = particle.getFillColor(), image = images.find((t)=>t.name === imageData.name || t.source === imageData.src);
        if (!image) return;
        const replaceColor = imageData.replaceColor ?? image.replaceColor;
        if (image.loading) {
            setTimeout(()=>{
                this.particleInit(container, particle);
            });
            return;
        }
        (async ()=>{
            let imageRes;
            if (image.svgData && color) imageRes = await (0, _utilsJs.replaceImageColor)(image, imageData, color, particle);
            else imageRes = {
                color,
                data: image,
                element: image.element,
                gif: image.gif,
                gifData: image.gifData,
                gifLoopCount: image.gifLoopCount,
                loaded: true,
                ratio: imageData.width && imageData.height ? imageData.width / imageData.height : image.ratio ?? defaultRatio,
                replaceColor: replaceColor,
                source: imageData.src
            };
            if (!imageRes.ratio) imageRes.ratio = 1;
            const fill = imageData.fill ?? particle.shapeFill, close = imageData.close ?? particle.shapeClose, imageShape = {
                image: imageRes,
                fill,
                close
            };
            particle.image = imageShape.image;
            particle.shapeFill = imageShape.fill;
            particle.shapeClose = imageShape.close;
        })();
    }
}

},{"@tsparticles/engine":"ahMVX","./Utils.js":"i16sx","./GifUtils/Utils.js":"icRPA","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"icRPA":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "getGIFLoopAmount", ()=>getGIFLoopAmount);
parcelHelpers.export(exports, "decodeGIF", ()=>decodeGIF);
parcelHelpers.export(exports, "drawGif", ()=>drawGif);
parcelHelpers.export(exports, "loadGifImage", ()=>loadGifImage);
var _utilsJs = require("../Utils.js");
var _constantsJs = require("./Constants.js");
var _byteStreamJs = require("./ByteStream.js");
var _disposalMethodJs = require("./Enums/DisposalMethod.js");
var _gifdataHeadersJs = require("./Types/GIFDataHeaders.js");
const origin = {
    x: 0,
    y: 0
}, defaultFrame = 0, half = 0.5, initialTime = 0, firstIndex = 0, defaultLoopCount = 0;
function parseColorTable(byteStream, count) {
    const colors = [];
    for(let i = 0; i < count; i++){
        colors.push({
            r: byteStream.data[byteStream.pos],
            g: byteStream.data[byteStream.pos + 1],
            b: byteStream.data[byteStream.pos + 2]
        });
        byteStream.pos += 3;
    }
    return colors;
}
function parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex) {
    switch(byteStream.nextByte()){
        case (0, _gifdataHeadersJs.GIFDataHeaders).GraphicsControlExtension:
            {
                const frame = gif.frames[getFrameIndex(false)];
                byteStream.pos++;
                const packedByte = byteStream.nextByte();
                frame.GCreserved = (packedByte & 0xe0) >>> 5;
                frame.disposalMethod = (packedByte & 0x1c) >>> 2;
                frame.userInputDelayFlag = (packedByte & 2) === 2;
                const transparencyFlag = (packedByte & 1) === 1;
                frame.delayTime = byteStream.nextTwoBytes() * 0xa;
                const transparencyIndex = byteStream.nextByte();
                if (transparencyFlag) getTransparencyIndex(transparencyIndex);
                byteStream.pos++;
                break;
            }
        case (0, _gifdataHeadersJs.GIFDataHeaders).ApplicationExtension:
            {
                byteStream.pos++;
                const applicationExtension = {
                    identifier: byteStream.getString(8),
                    authenticationCode: byteStream.getString(3),
                    data: byteStream.readSubBlocksBin()
                };
                gif.applicationExtensions.push(applicationExtension);
                break;
            }
        case (0, _gifdataHeadersJs.GIFDataHeaders).CommentExtension:
            gif.comments.push([
                getFrameIndex(false),
                byteStream.readSubBlocks()
            ]);
            break;
        case (0, _gifdataHeadersJs.GIFDataHeaders).PlainTextExtension:
            if (gif.globalColorTable.length === 0) throw new EvalError("plain text extension without global color table");
            byteStream.pos++;
            gif.frames[getFrameIndex(false)].plainTextData = {
                left: byteStream.nextTwoBytes(),
                top: byteStream.nextTwoBytes(),
                width: byteStream.nextTwoBytes(),
                height: byteStream.nextTwoBytes(),
                charSize: {
                    width: byteStream.nextTwoBytes(),
                    height: byteStream.nextTwoBytes()
                },
                foregroundColor: byteStream.nextByte(),
                backgroundColor: byteStream.nextByte(),
                text: byteStream.readSubBlocks()
            };
            break;
        default:
            byteStream.skipSubBlocks();
            break;
    }
}
async function parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
    const frame = gif.frames[getFrameIndex(true)];
    frame.left = byteStream.nextTwoBytes();
    frame.top = byteStream.nextTwoBytes();
    frame.width = byteStream.nextTwoBytes();
    frame.height = byteStream.nextTwoBytes();
    const packedByte = byteStream.nextByte(), localColorTableFlag = (packedByte & 0x80) === 0x80, interlacedFlag = (packedByte & 0x40) === 0x40;
    frame.sortFlag = (packedByte & 0x20) === 0x20;
    frame.reserved = (packedByte & 0x18) >>> 3;
    const localColorCount = 1 << (packedByte & 7) + 1;
    if (localColorTableFlag) frame.localColorTable = parseColorTable(byteStream, localColorCount);
    const getColor = (index)=>{
        const { r, g, b } = (localColorTableFlag ? frame.localColorTable : gif.globalColorTable)[index];
        if (index !== getTransparencyIndex(null)) return {
            r,
            g,
            b,
            a: 255
        };
        return {
            r,
            g,
            b,
            a: avgAlpha ? ~~((r + g + b) / 3) : 0
        };
    };
    const image = (()=>{
        try {
            return new ImageData(frame.width, frame.height, {
                colorSpace: "srgb"
            });
        } catch (error) {
            if (error instanceof DOMException && error.name === "IndexSizeError") return null;
            throw error;
        }
    })();
    if (image == null) throw new EvalError("GIF frame size is to large");
    const minCodeSize = byteStream.nextByte(), imageData = byteStream.readSubBlocksBin(), clearCode = 1 << minCodeSize;
    const readBits = (pos, len)=>{
        const bytePos = pos >>> 3, bitPos = pos & 7;
        return (imageData[bytePos] + (imageData[bytePos + 1] << 8) + (imageData[bytePos + 2] << 16) & (1 << len) - 1 << bitPos) >>> bitPos;
    };
    if (interlacedFlag) {
        for(let code = 0, size = minCodeSize + 1, pos = 0, dic = [
            [
                0
            ]
        ], pass = 0; pass < 4; pass++){
            if ((0, _constantsJs.InterlaceOffsets)[pass] < frame.height) {
                let pixelPos = 0, lineIndex = 0, exit = false;
                while(!exit){
                    const last = code;
                    code = readBits(pos, size);
                    pos += size + 1;
                    if (code === clearCode) {
                        size = minCodeSize + 1;
                        dic.length = clearCode + 2;
                        for(let i = 0; i < dic.length; i++)dic[i] = i < clearCode ? [
                            i
                        ] : [];
                    } else {
                        if (code >= dic.length) dic.push(dic[last].concat(dic[last][0]));
                        else if (last !== clearCode) dic.push(dic[last].concat(dic[code][0]));
                        for (const item of dic[code]){
                            const { r, g, b, a } = getColor(item);
                            image.data.set([
                                r,
                                g,
                                b,
                                a
                            ], (0, _constantsJs.InterlaceOffsets)[pass] * frame.width + (0, _constantsJs.InterlaceSteps)[pass] * lineIndex + pixelPos % (frame.width * 4));
                            pixelPos += 4;
                        }
                        if (dic.length === 1 << size && size < 0xc) size++;
                    }
                    if (pixelPos === frame.width * 4 * (lineIndex + 1)) {
                        lineIndex++;
                        if ((0, _constantsJs.InterlaceOffsets)[pass] + (0, _constantsJs.InterlaceSteps)[pass] * lineIndex >= frame.height) exit = true;
                    }
                }
            }
            progressCallback?.(byteStream.pos / (byteStream.data.length - 1), getFrameIndex(false) + 1, image, {
                x: frame.left,
                y: frame.top
            }, {
                width: gif.width,
                height: gif.height
            });
        }
        frame.image = image;
        frame.bitmap = await createImageBitmap(image);
    } else {
        let code = 0, size = minCodeSize + 1, pos = 0, pixelPos = -4, exit = false;
        const dic = [
            [
                0
            ]
        ];
        while(!exit){
            const last = code;
            code = readBits(pos, size);
            pos += size;
            if (code === clearCode) {
                size = minCodeSize + 1;
                dic.length = clearCode + 2;
                for(let i = 0; i < dic.length; i++)dic[i] = i < clearCode ? [
                    i
                ] : [];
            } else {
                if (code === clearCode + 1) {
                    exit = true;
                    break;
                }
                if (code >= dic.length) dic.push(dic[last].concat(dic[last][0]));
                else if (last !== clearCode) dic.push(dic[last].concat(dic[code][0]));
                for (const item of dic[code]){
                    const { r, g, b, a } = getColor(item);
                    image.data.set([
                        r,
                        g,
                        b,
                        a
                    ], pixelPos += 4);
                }
                if (dic.length >= 1 << size && size < 0xc) size++;
            }
        }
        frame.image = image;
        frame.bitmap = await createImageBitmap(image);
        progressCallback?.((byteStream.pos + 1) / byteStream.data.length, getFrameIndex(false) + 1, frame.image, {
            x: frame.left,
            y: frame.top
        }, {
            width: gif.width,
            height: gif.height
        });
    }
}
async function parseBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback) {
    switch(byteStream.nextByte()){
        case (0, _gifdataHeadersJs.GIFDataHeaders).EndOfFile:
            return true;
        case (0, _gifdataHeadersJs.GIFDataHeaders).Image:
            await parseImageBlock(byteStream, gif, avgAlpha, getFrameIndex, getTransparencyIndex, progressCallback);
            break;
        case (0, _gifdataHeadersJs.GIFDataHeaders).Extension:
            parseExtensionBlock(byteStream, gif, getFrameIndex, getTransparencyIndex);
            break;
        default:
            throw new EvalError("undefined block found");
    }
    return false;
}
function getGIFLoopAmount(gif) {
    for (const extension of gif.applicationExtensions){
        if (extension.identifier + extension.authenticationCode !== "NETSCAPE2.0") continue;
        return extension.data[1] + (extension.data[2] << 8);
    }
    return NaN;
}
async function decodeGIF(gifURL, progressCallback, avgAlpha) {
    if (!avgAlpha) avgAlpha = false;
    const res = await fetch(gifURL);
    if (!res.ok && res.status === 404) throw new EvalError("file not found");
    const buffer = await res.arrayBuffer();
    const gif = {
        width: 0,
        height: 0,
        totalTime: 0,
        colorRes: 0,
        pixelAspectRatio: 0,
        frames: [],
        sortFlag: false,
        globalColorTable: [],
        backgroundImage: new ImageData(1, 1, {
            colorSpace: "srgb"
        }),
        comments: [],
        applicationExtensions: []
    }, byteStream = new (0, _byteStreamJs.ByteStream)(new Uint8ClampedArray(buffer));
    if (byteStream.getString(6) !== "GIF89a") throw new Error("not a supported GIF file");
    gif.width = byteStream.nextTwoBytes();
    gif.height = byteStream.nextTwoBytes();
    const packedByte = byteStream.nextByte(), globalColorTableFlag = (packedByte & 0x80) === 0x80;
    gif.colorRes = (packedByte & 0x70) >>> 4;
    gif.sortFlag = (packedByte & 8) === 8;
    const globalColorCount = 1 << (packedByte & 7) + 1, backgroundColorIndex = byteStream.nextByte();
    gif.pixelAspectRatio = byteStream.nextByte();
    if (gif.pixelAspectRatio !== 0) gif.pixelAspectRatio = (gif.pixelAspectRatio + 0xf) / 0x40;
    if (globalColorTableFlag) gif.globalColorTable = parseColorTable(byteStream, globalColorCount);
    const backgroundImage = (()=>{
        try {
            return new ImageData(gif.width, gif.height, {
                colorSpace: "srgb"
            });
        } catch (error) {
            if (error instanceof DOMException && error.name === "IndexSizeError") return null;
            throw error;
        }
    })();
    if (backgroundImage == null) throw new Error("GIF frame size is to large");
    const { r, g, b } = gif.globalColorTable[backgroundColorIndex];
    backgroundImage.data.set(globalColorTableFlag ? [
        r,
        g,
        b,
        255
    ] : [
        0,
        0,
        0,
        0
    ]);
    for(let i = 4; i < backgroundImage.data.length; i *= 2)backgroundImage.data.copyWithin(i, 0, i);
    gif.backgroundImage = backgroundImage;
    let frameIndex = -1, incrementFrameIndex = true, transparencyIndex = -1;
    const getframeIndex = (increment)=>{
        if (increment) incrementFrameIndex = true;
        return frameIndex;
    };
    const getTransparencyIndex = (newValue)=>{
        if (newValue != null) transparencyIndex = newValue;
        return transparencyIndex;
    };
    try {
        do if (incrementFrameIndex) {
            gif.frames.push({
                left: 0,
                top: 0,
                width: 0,
                height: 0,
                disposalMethod: (0, _disposalMethodJs.DisposalMethod).Replace,
                image: new ImageData(1, 1, {
                    colorSpace: "srgb"
                }),
                plainTextData: null,
                userInputDelayFlag: false,
                delayTime: 0,
                sortFlag: false,
                localColorTable: [],
                reserved: 0,
                GCreserved: 0
            });
            frameIndex++;
            transparencyIndex = -1;
            incrementFrameIndex = false;
        }
        while (!await parseBlock(byteStream, gif, avgAlpha, getframeIndex, getTransparencyIndex, progressCallback));
        gif.frames.length--;
        for (const frame of gif.frames){
            if (frame.userInputDelayFlag && frame.delayTime === 0) {
                gif.totalTime = Infinity;
                break;
            }
            gif.totalTime += frame.delayTime;
        }
        return gif;
    } catch (error) {
        if (error instanceof EvalError) throw new Error(`error while parsing frame ${frameIndex} "${error.message}"`);
        throw error;
    }
}
function drawGif(data) {
    const { context, radius, particle, delta } = data, image = particle.image;
    if (!image?.gifData || !image.gif) return;
    const offscreenCanvas = new OffscreenCanvas(image.gifData.width, image.gifData.height), offscreenContext = offscreenCanvas.getContext("2d");
    if (!offscreenContext) throw new Error("could not create offscreen canvas context");
    offscreenContext.imageSmoothingQuality = "low";
    offscreenContext.imageSmoothingEnabled = false;
    offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
    if (particle.gifLoopCount === undefined) particle.gifLoopCount = image.gifLoopCount ?? defaultLoopCount;
    let frameIndex = particle.gifFrame ?? defaultFrame;
    const pos = {
        x: -image.gifData.width * half,
        y: -image.gifData.height * half
    }, frame = image.gifData.frames[frameIndex];
    if (particle.gifTime === undefined) particle.gifTime = initialTime;
    if (!frame.bitmap) return;
    context.scale(radius / image.gifData.width, radius / image.gifData.height);
    switch(frame.disposalMethod){
        case (0, _disposalMethodJs.DisposalMethod).UndefinedA:
        case (0, _disposalMethodJs.DisposalMethod).UndefinedB:
        case (0, _disposalMethodJs.DisposalMethod).UndefinedC:
        case (0, _disposalMethodJs.DisposalMethod).UndefinedD:
        case (0, _disposalMethodJs.DisposalMethod).Replace:
            offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
            context.drawImage(offscreenCanvas, pos.x, pos.y);
            offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
            break;
        case (0, _disposalMethodJs.DisposalMethod).Combine:
            offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
            context.drawImage(offscreenCanvas, pos.x, pos.y);
            break;
        case (0, _disposalMethodJs.DisposalMethod).RestoreBackground:
            offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
            context.drawImage(offscreenCanvas, pos.x, pos.y);
            offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
            if (!image.gifData.globalColorTable.length) offscreenContext.putImageData(image.gifData.frames[firstIndex].image, pos.x + frame.left, pos.y + frame.top);
            else offscreenContext.putImageData(image.gifData.backgroundImage, pos.x, pos.y);
            break;
        case (0, _disposalMethodJs.DisposalMethod).RestorePrevious:
            {
                const previousImageData = offscreenContext.getImageData(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
                offscreenContext.drawImage(frame.bitmap, frame.left, frame.top);
                context.drawImage(offscreenCanvas, pos.x, pos.y);
                offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
                offscreenContext.putImageData(previousImageData, origin.x, origin.y);
            }
            break;
    }
    particle.gifTime += delta.value;
    if (particle.gifTime > frame.delayTime) {
        particle.gifTime -= frame.delayTime;
        if (++frameIndex >= image.gifData.frames.length) {
            if (--particle.gifLoopCount <= defaultLoopCount) return;
            frameIndex = firstIndex;
            offscreenContext.clearRect(origin.x, origin.y, offscreenCanvas.width, offscreenCanvas.height);
        }
        particle.gifFrame = frameIndex;
    }
    context.scale(image.gifData.width / radius, image.gifData.height / radius);
}
async function loadGifImage(image) {
    if (image.type !== "gif") {
        await (0, _utilsJs.loadImage)(image);
        return;
    }
    image.loading = true;
    try {
        image.gifData = await decodeGIF(image.source);
        image.gifLoopCount = getGIFLoopAmount(image.gifData) ?? defaultLoopCount;
        if (!image.gifLoopCount) image.gifLoopCount = Infinity;
    } catch  {
        image.error = true;
    }
    image.loading = false;
}

},{"../Utils.js":"i16sx","./Constants.js":"aJL3W","./ByteStream.js":"8Ux2Q","./Enums/DisposalMethod.js":"8fkFI","./Types/GIFDataHeaders.js":"iF7Sr","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aJL3W":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "InterlaceOffsets", ()=>InterlaceOffsets);
parcelHelpers.export(exports, "InterlaceSteps", ()=>InterlaceSteps);
const InterlaceOffsets = [
    0,
    4,
    2,
    1
];
const InterlaceSteps = [
    8,
    8,
    4,
    2
];

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Ux2Q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ByteStream", ()=>ByteStream);
class ByteStream {
    constructor(bytes){
        this.pos = 0;
        this.data = new Uint8ClampedArray(bytes);
    }
    getString(count) {
        const slice = this.data.slice(this.pos, this.pos + count);
        this.pos += slice.length;
        return slice.reduce((acc, curr)=>acc + String.fromCharCode(curr), "");
    }
    nextByte() {
        return this.data[this.pos++];
    }
    nextTwoBytes() {
        const increment = 2, previous = 1, shift = 8;
        this.pos += increment;
        return this.data[this.pos - increment] + (this.data[this.pos - previous] << shift);
    }
    readSubBlocks() {
        let blockString = "", size = 0;
        const minCount = 0, emptySize = 0;
        do {
            size = this.data[this.pos++];
            for(let count = size; --count >= minCount; blockString += String.fromCharCode(this.data[this.pos++]));
        }while (size !== emptySize);
        return blockString;
    }
    readSubBlocksBin() {
        let size = this.data[this.pos], len = 0;
        const emptySize = 0, increment = 1;
        for(let offset = 0; size !== emptySize; offset += size + increment, size = this.data[this.pos + offset])len += size;
        const blockData = new Uint8Array(len);
        size = this.data[this.pos++];
        for(let i = 0; size !== emptySize; size = this.data[this.pos++]){
            for(let count = size; --count >= emptySize; blockData[i++] = this.data[this.pos++]);
        }
        return blockData;
    }
    skipSubBlocks() {
        for(const increment = 1, noData = 0; this.data[this.pos] !== noData; this.pos += this.data[this.pos] + increment);
        this.pos++;
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8fkFI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DisposalMethod", ()=>DisposalMethod);
var DisposalMethod;
(function(DisposalMethod) {
    DisposalMethod[DisposalMethod["Replace"] = 0] = "Replace";
    DisposalMethod[DisposalMethod["Combine"] = 1] = "Combine";
    DisposalMethod[DisposalMethod["RestoreBackground"] = 2] = "RestoreBackground";
    DisposalMethod[DisposalMethod["RestorePrevious"] = 3] = "RestorePrevious";
    DisposalMethod[DisposalMethod["UndefinedA"] = 4] = "UndefinedA";
    DisposalMethod[DisposalMethod["UndefinedB"] = 5] = "UndefinedB";
    DisposalMethod[DisposalMethod["UndefinedC"] = 6] = "UndefinedC";
    DisposalMethod[DisposalMethod["UndefinedD"] = 7] = "UndefinedD";
})(DisposalMethod || (DisposalMethod = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iF7Sr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GIFDataHeaders", ()=>GIFDataHeaders);
var GIFDataHeaders;
(function(GIFDataHeaders) {
    GIFDataHeaders[GIFDataHeaders["Extension"] = 33] = "Extension";
    GIFDataHeaders[GIFDataHeaders["ApplicationExtension"] = 255] = "ApplicationExtension";
    GIFDataHeaders[GIFDataHeaders["GraphicsControlExtension"] = 249] = "GraphicsControlExtension";
    GIFDataHeaders[GIFDataHeaders["PlainTextExtension"] = 1] = "PlainTextExtension";
    GIFDataHeaders[GIFDataHeaders["CommentExtension"] = 254] = "CommentExtension";
    GIFDataHeaders[GIFDataHeaders["Image"] = 44] = "Image";
    GIFDataHeaders[GIFDataHeaders["EndOfFile"] = 59] = "EndOfFile";
})(GIFDataHeaders || (GIFDataHeaders = {}));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"i3SWc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ImagePreloaderPlugin", ()=>ImagePreloaderPlugin);
var _preloadJs = require("./Options/Classes/Preload.js");
class ImagePreloaderPlugin {
    constructor(engine){
        this.id = "imagePreloader";
        this._engine = engine;
    }
    async getPlugin() {
        await Promise.resolve();
        return {};
    }
    loadOptions(options, source) {
        if (!source?.preload) return;
        if (!options.preload) options.preload = [];
        const preloadOptions = options.preload;
        for (const item of source.preload){
            const existing = preloadOptions.find((t)=>t.name === item.name || t.src === item.src);
            if (existing) existing.load(item);
            else {
                const preload = new (0, _preloadJs.Preload)();
                preload.load(item);
                preloadOptions.push(preload);
            }
        }
    }
    needsPlugin() {
        return true;
    }
}

},{"./Options/Classes/Preload.js":"dwaTB","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dwaTB":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Preload", ()=>Preload);
var _engine = require("@tsparticles/engine");
class Preload {
    constructor(){
        this.src = "";
        this.gif = false;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.gif !== undefined) this.gif = data.gif;
        if (data.height !== undefined) this.height = data.height;
        if (data.name !== undefined) this.name = data.name;
        if (data.replaceColor !== undefined) this.replaceColor = data.replaceColor;
        if (data.src !== undefined) this.src = data.src;
        if (data.width !== undefined) this.width = data.width;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"goeJr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadLifeUpdater", ()=>loadLifeUpdater);
var _engine = require("@tsparticles/engine");
var _lifeUpdaterJs = require("./LifeUpdater.js");
async function loadLifeUpdater(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addParticleUpdater("life", async (container)=>{
        return Promise.resolve(new (0, _lifeUpdaterJs.LifeUpdater)(container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./LifeUpdater.js":"bgbY9","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bgbY9":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LifeUpdater", ()=>LifeUpdater);
var _engine = require("@tsparticles/engine");
var _lifeJs = require("./Options/Classes/Life.js");
var _utilsJs = require("./Utils.js");
const noTime = 0, identity = 1, infiniteValue = -1;
class LifeUpdater {
    constructor(container){
        this.container = container;
    }
    init(particle) {
        const container = this.container, particlesOptions = particle.options, lifeOptions = particlesOptions.life;
        if (!lifeOptions) return;
        particle.life = {
            delay: container.retina.reduceFactor ? (0, _engine.getRangeValue)(lifeOptions.delay.value) * (lifeOptions.delay.sync ? identity : (0, _engine.getRandom)()) / container.retina.reduceFactor * (0, _engine.millisecondsToSeconds) : noTime,
            delayTime: noTime,
            duration: container.retina.reduceFactor ? (0, _engine.getRangeValue)(lifeOptions.duration.value) * (lifeOptions.duration.sync ? identity : (0, _engine.getRandom)()) / container.retina.reduceFactor * (0, _engine.millisecondsToSeconds) : noTime,
            time: noTime,
            count: lifeOptions.count
        };
        if (particle.life.duration <= noTime) particle.life.duration = infiniteValue;
        if (particle.life.count <= noTime) particle.life.count = infiniteValue;
        if (particle.life) particle.spawning = particle.life.delay > noTime;
    }
    isEnabled(particle) {
        return !particle.destroyed;
    }
    loadOptions(options, ...sources) {
        if (!options.life) options.life = new (0, _lifeJs.Life)();
        for (const source of sources)options.life.load(source?.life);
    }
    update(particle, delta) {
        if (!this.isEnabled(particle) || !particle.life) return;
        (0, _utilsJs.updateLife)(particle, delta, this.container.canvas.size);
    }
}

},{"@tsparticles/engine":"ahMVX","./Options/Classes/Life.js":"dmJ1w","./Utils.js":"iZ16h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"dmJ1w":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Life", ()=>Life);
var _engine = require("@tsparticles/engine");
var _lifeDelayJs = require("./LifeDelay.js");
var _lifeDurationJs = require("./LifeDuration.js");
class Life {
    constructor(){
        this.count = 0;
        this.delay = new (0, _lifeDelayJs.LifeDelay)();
        this.duration = new (0, _lifeDurationJs.LifeDuration)();
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.count !== undefined) this.count = data.count;
        this.delay.load(data.delay);
        this.duration.load(data.duration);
    }
}

},{"@tsparticles/engine":"ahMVX","./LifeDelay.js":"5Zqx0","./LifeDuration.js":"aaY4I","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5Zqx0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LifeDelay", ()=>LifeDelay);
var _engine = require("@tsparticles/engine");
class LifeDelay extends (0, _engine.ValueWithRandom) {
    constructor(){
        super();
        this.sync = false;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        super.load(data);
        if (data.sync !== undefined) this.sync = data.sync;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aaY4I":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LifeDuration", ()=>LifeDuration);
var _engine = require("@tsparticles/engine");
class LifeDuration extends (0, _engine.ValueWithRandom) {
    constructor(){
        super();
        this.sync = false;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        super.load(data);
        if (data.sync !== undefined) this.sync = data.sync;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iZ16h":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "updateLife", ()=>updateLife);
var _engine = require("@tsparticles/engine");
const noTime = 0, infiniteValue = -1, noLife = 0, minCanvasSize = 0;
function updateLife(particle, delta, canvasSize) {
    if (!particle.life) return;
    const life = particle.life;
    let justSpawned = false;
    if (particle.spawning) {
        life.delayTime += delta.value;
        if (life.delayTime >= particle.life.delay) {
            justSpawned = true;
            particle.spawning = false;
            life.delayTime = noTime;
            life.time = noTime;
        } else return;
    }
    if (life.duration === infiniteValue) return;
    if (particle.spawning) return;
    if (justSpawned) life.time = noTime;
    else life.time += delta.value;
    if (life.time < life.duration) return;
    life.time = noTime;
    if (particle.life.count > noLife) particle.life.count--;
    if (particle.life.count === noLife) {
        particle.destroy();
        return;
    }
    const widthRange = (0, _engine.setRangeValue)(minCanvasSize, canvasSize.width), heightRange = (0, _engine.setRangeValue)(minCanvasSize, canvasSize.width);
    particle.position.x = (0, _engine.randomInRange)(widthRange);
    particle.position.y = (0, _engine.randomInRange)(heightRange);
    particle.spawning = true;
    life.delayTime = noTime;
    life.time = noTime;
    particle.reset();
    const lifeOptions = particle.options.life;
    if (lifeOptions) {
        life.delay = (0, _engine.getRangeValue)(lifeOptions.delay.value) * (0, _engine.millisecondsToSeconds);
        life.duration = (0, _engine.getRangeValue)(lifeOptions.duration.value) * (0, _engine.millisecondsToSeconds);
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"2PQep":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadLineShape", ()=>loadLineShape);
var _engine = require("@tsparticles/engine");
var _lineDrawerJs = require("./LineDrawer.js");
async function loadLineShape(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addShape(new (0, _lineDrawerJs.LineDrawer)(), refresh);
}

},{"@tsparticles/engine":"ahMVX","./LineDrawer.js":"hMfGl","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hMfGl":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LineDrawer", ()=>LineDrawer);
var _utilsJs = require("./Utils.js");
const sides = 1;
class LineDrawer {
    constructor(){
        this.validTypes = [
            "line"
        ];
    }
    draw(data) {
        (0, _utilsJs.drawLine)(data);
    }
    getSidesCount() {
        return sides;
    }
}

},{"./Utils.js":"7fVSF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7fVSF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawLine", ()=>drawLine);
function drawLine(data) {
    const { context, particle, radius } = data, shapeData = particle.shapeData, centerY = 0;
    context.moveTo(-radius, centerY);
    context.lineTo(radius, centerY);
    context.lineCap = shapeData?.cap ?? "butt";
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Gt6Z":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadParallaxMover", ()=>loadParallaxMover);
var _engine = require("@tsparticles/engine");
var _parallaxMoverJs = require("./ParallaxMover.js");
async function loadParallaxMover(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addMover("parallax", ()=>{
        return Promise.resolve(new (0, _parallaxMoverJs.ParallaxMover)());
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./ParallaxMover.js":"feWTh","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"feWTh":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "ParallaxMover", ()=>ParallaxMover);
var _engine = require("@tsparticles/engine");
const half = 0.5;
class ParallaxMover {
    init() {}
    isEnabled(particle) {
        return !(0, _engine.isSsr)() && !particle.destroyed && particle.container.actualOptions.interactivity.events.onHover.parallax.enable;
    }
    move(particle) {
        const container = particle.container, options = container.actualOptions, parallaxOptions = options.interactivity.events.onHover.parallax;
        if ((0, _engine.isSsr)() || !parallaxOptions.enable) return;
        const parallaxForce = parallaxOptions.force, mousePos = container.interactivity.mouse.position;
        if (!mousePos) return;
        const canvasSize = container.canvas.size, canvasCenter = {
            x: canvasSize.width * half,
            y: canvasSize.height * half
        }, parallaxSmooth = parallaxOptions.smooth, factor = particle.getRadius() / parallaxForce, centerDistance = {
            x: (mousePos.x - canvasCenter.x) * factor,
            y: (mousePos.y - canvasCenter.y) * factor
        }, { offset } = particle;
        offset.x += (centerDistance.x - offset.x) / parallaxSmooth;
        offset.y += (centerDistance.y - offset.y) / parallaxSmooth;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1Fp4v":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadParticlesAttractInteraction", ()=>loadParticlesAttractInteraction);
var _engine = require("@tsparticles/engine");
var _attractorJs = require("./Attractor.js");
async function loadParticlesAttractInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addInteractor("particlesAttract", (container)=>{
        return Promise.resolve(new (0, _attractorJs.Attractor)(container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./Attractor.js":"8iLc4","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8iLc4":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Attractor", ()=>Attractor);
var _engine = require("@tsparticles/engine");
const attractFactor = 1000, identity = 1;
class Attractor extends (0, _engine.ParticlesInteractorBase) {
    constructor(container){
        super(container);
    }
    clear() {}
    init() {}
    interact(p1) {
        const container = this.container;
        if (p1.attractDistance === undefined) p1.attractDistance = (0, _engine.getRangeValue)(p1.options.move.attract.distance) * container.retina.pixelRatio;
        const distance = p1.attractDistance, pos1 = p1.getPosition(), query = container.particles.quadTree.queryCircle(pos1, distance);
        for (const p2 of query){
            if (p1 === p2 || !p2.options.move.attract.enable || p2.destroyed || p2.spawning) continue;
            const pos2 = p2.getPosition(), { dx, dy } = (0, _engine.getDistances)(pos1, pos2), rotate = p1.options.move.attract.rotate, ax = dx / (rotate.x * attractFactor), ay = dy / (rotate.y * attractFactor), p1Factor = p2.size.value / p1.size.value, p2Factor = identity / p1Factor;
            p1.velocity.x -= ax * p1Factor;
            p1.velocity.y -= ay * p1Factor;
            p2.velocity.x += ax * p2Factor;
            p2.velocity.y += ay * p2Factor;
        }
    }
    isEnabled(particle) {
        return particle.options.move.attract.enable;
    }
    reset() {}
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aZk4Y":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadParticlesCollisionsInteraction", ()=>loadParticlesCollisionsInteraction);
var _engine = require("@tsparticles/engine");
var _colliderJs = require("./Collider.js");
async function loadParticlesCollisionsInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addInteractor("particlesCollisions", (container)=>{
        return Promise.resolve(new (0, _colliderJs.Collider)(container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./Collider.js":"k8jlj","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"k8jlj":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Collider", ()=>Collider);
var _engine = require("@tsparticles/engine");
var _resolveCollisionJs = require("./ResolveCollision.js");
const double = 2;
class Collider extends (0, _engine.ParticlesInteractorBase) {
    constructor(container){
        super(container);
    }
    clear() {}
    init() {}
    interact(p1, delta) {
        if (p1.destroyed || p1.spawning) return;
        const container = this.container, pos1 = p1.getPosition(), radius1 = p1.getRadius(), query = container.particles.quadTree.queryCircle(pos1, radius1 * double);
        for (const p2 of query){
            if (p1 === p2 || !p2.options.collisions.enable || p1.options.collisions.mode !== p2.options.collisions.mode || p2.destroyed || p2.spawning) continue;
            const pos2 = p2.getPosition(), radius2 = p2.getRadius();
            if (Math.abs(Math.round(pos1.z) - Math.round(pos2.z)) > radius1 + radius2) continue;
            const dist = (0, _engine.getDistance)(pos1, pos2), distP = radius1 + radius2;
            if (dist > distP) continue;
            (0, _resolveCollisionJs.resolveCollision)(p1, p2, delta, container.retina.pixelRatio);
        }
    }
    isEnabled(particle) {
        return particle.options.collisions.enable;
    }
    reset() {}
}

},{"@tsparticles/engine":"ahMVX","./ResolveCollision.js":"3g4DY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3g4DY":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "resolveCollision", ()=>resolveCollision);
var _engine = require("@tsparticles/engine");
var _absorbJs = require("./Absorb.js");
var _bounceJs = require("./Bounce.js");
var _destroyJs = require("./Destroy.js");
function resolveCollision(p1, p2, delta, pixelRatio) {
    switch(p1.options.collisions.mode){
        case (0, _engine.CollisionMode).absorb:
            (0, _absorbJs.absorb)(p1, p2, delta, pixelRatio);
            break;
        case (0, _engine.CollisionMode).bounce:
            (0, _bounceJs.bounce)(p1, p2);
            break;
        case (0, _engine.CollisionMode).destroy:
            (0, _destroyJs.destroy)(p1, p2);
            break;
    }
}

},{"@tsparticles/engine":"ahMVX","./Absorb.js":"7OHi8","./Bounce.js":"54ILn","./Destroy.js":"5VLzL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7OHi8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "absorb", ()=>absorb);
var _engine = require("@tsparticles/engine");
const half = 0.5, absorbFactor = 10, minAbsorbFactor = 0;
function updateAbsorb(p1, r1, p2, r2, delta, pixelRatio) {
    const factor = (0, _engine.clamp)(p1.options.collisions.absorb.speed * delta.factor / absorbFactor, minAbsorbFactor, r2);
    p1.size.value += factor * half;
    p2.size.value -= factor;
    if (r2 <= pixelRatio) {
        p2.size.value = 0;
        p2.destroy();
    }
}
function absorb(p1, p2, delta, pixelRatio) {
    const r1 = p1.getRadius(), r2 = p2.getRadius();
    if (r1 === undefined && r2 !== undefined) p1.destroy();
    else if (r1 !== undefined && r2 === undefined) p2.destroy();
    else if (r1 !== undefined && r2 !== undefined) {
        if (r1 >= r2) updateAbsorb(p1, r1, p2, r2, delta, pixelRatio);
        else updateAbsorb(p2, r2, p1, r1, delta, pixelRatio);
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"54ILn":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "bounce", ()=>bounce);
var _engine = require("@tsparticles/engine");
const fixBounceSpeed = (p)=>{
    if (p.collisionMaxSpeed === undefined) p.collisionMaxSpeed = (0, _engine.getRangeValue)(p.options.collisions.maxSpeed);
    if (p.velocity.length > p.collisionMaxSpeed) p.velocity.length = p.collisionMaxSpeed;
};
function bounce(p1, p2) {
    (0, _engine.circleBounce)((0, _engine.circleBounceDataFromParticle)(p1), (0, _engine.circleBounceDataFromParticle)(p2));
    fixBounceSpeed(p1);
    fixBounceSpeed(p2);
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5VLzL":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "destroy", ()=>destroy);
var _bounceJs = require("./Bounce.js");
function destroy(p1, p2) {
    if (!p1.unbreakable && !p2.unbreakable) (0, _bounceJs.bounce)(p1, p2);
    if (p1.getRadius() === undefined && p2.getRadius() !== undefined) p1.destroy();
    else if (p1.getRadius() !== undefined && p2.getRadius() === undefined) p2.destroy();
    else if (p1.getRadius() !== undefined && p2.getRadius() !== undefined) {
        const deleteP = p1.getRadius() >= p2.getRadius() ? p2 : p1;
        deleteP.destroy();
    }
}

},{"./Bounce.js":"54ILn","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"anKWJ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadParticlesLinksInteraction", ()=>loadParticlesLinksInteraction);
var _engine = require("@tsparticles/engine");
var _interactionJs = require("./interaction.js");
var _pluginJs = require("./plugin.js");
var _linksJs = require("./Options/Classes/Links.js");
parcelHelpers.exportAll(_linksJs, exports);
var _linksShadowJs = require("./Options/Classes/LinksShadow.js");
parcelHelpers.exportAll(_linksShadowJs, exports);
var _linksTriangleJs = require("./Options/Classes/LinksTriangle.js");
parcelHelpers.exportAll(_linksTriangleJs, exports);
var _ilinksJs = require("./Options/Interfaces/ILinks.js");
parcelHelpers.exportAll(_ilinksJs, exports);
var _ilinksShadowJs = require("./Options/Interfaces/ILinksShadow.js");
parcelHelpers.exportAll(_ilinksShadowJs, exports);
var _ilinksTriangleJs = require("./Options/Interfaces/ILinksTriangle.js");
parcelHelpers.exportAll(_ilinksTriangleJs, exports);
async function loadParticlesLinksInteraction(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await (0, _interactionJs.loadLinksInteraction)(engine, refresh);
    await (0, _pluginJs.loadLinksPlugin)(engine, refresh);
}

},{"@tsparticles/engine":"ahMVX","./interaction.js":"4zrcu","./plugin.js":"r7UPr","./Options/Classes/Links.js":"brvKu","./Options/Classes/LinksShadow.js":"ehpbZ","./Options/Classes/LinksTriangle.js":"30pWz","./Options/Interfaces/ILinks.js":"ixaXp","./Options/Interfaces/ILinksShadow.js":"70JJN","./Options/Interfaces/ILinksTriangle.js":"5JDwG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4zrcu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadLinksInteraction", ()=>loadLinksInteraction);
var _linkerJs = require("./Linker.js");
async function loadLinksInteraction(engine, refresh = true) {
    await engine.addInteractor("particlesLinks", async (container)=>{
        return Promise.resolve(new (0, _linkerJs.Linker)(container, engine));
    }, refresh);
}

},{"./Linker.js":"fsMx0","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fsMx0":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Linker", ()=>Linker);
var _engine = require("@tsparticles/engine");
var _circleWarpJs = require("./CircleWarp.js");
var _linksJs = require("./Options/Classes/Links.js");
const squarePower = 2, opacityOffset = 1, origin = {
    x: 0,
    y: 0
}, minDistance = 0;
function getLinkDistance(pos1, pos2, optDistance, canvasSize, warp) {
    const { dx, dy, distance } = (0, _engine.getDistances)(pos1, pos2);
    if (!warp || distance <= optDistance) return distance;
    const absDiffs = {
        x: Math.abs(dx),
        y: Math.abs(dy)
    }, warpDistances = {
        x: Math.min(absDiffs.x, canvasSize.width - absDiffs.x),
        y: Math.min(absDiffs.y, canvasSize.height - absDiffs.y)
    };
    return Math.sqrt(warpDistances.x ** squarePower + warpDistances.y ** squarePower);
}
class Linker extends (0, _engine.ParticlesInteractorBase) {
    constructor(container, engine){
        super(container);
        this._setColor = (p1)=>{
            if (!p1.options.links) return;
            const container = this._linkContainer, linksOptions = p1.options.links;
            let linkColor = linksOptions.id === undefined ? container.particles.linksColor : container.particles.linksColors.get(linksOptions.id);
            if (linkColor) return;
            const optColor = linksOptions.color;
            linkColor = (0, _engine.getLinkRandomColor)(this._engine, optColor, linksOptions.blink, linksOptions.consent);
            if (linksOptions.id === undefined) container.particles.linksColor = linkColor;
            else container.particles.linksColors.set(linksOptions.id, linkColor);
        };
        this._linkContainer = container;
        this._engine = engine;
    }
    clear() {}
    init() {
        this._linkContainer.particles.linksColor = undefined;
        this._linkContainer.particles.linksColors = new Map();
    }
    interact(p1) {
        if (!p1.options.links) return;
        p1.links = [];
        const pos1 = p1.getPosition(), container = this.container, canvasSize = container.canvas.size;
        if (pos1.x < origin.x || pos1.y < origin.y || pos1.x > canvasSize.width || pos1.y > canvasSize.height) return;
        const linkOpt1 = p1.options.links, optOpacity = linkOpt1.opacity, optDistance = p1.retina.linksDistance ?? minDistance, warp = linkOpt1.warp;
        let range;
        if (warp) range = new (0, _circleWarpJs.CircleWarp)(pos1.x, pos1.y, optDistance, canvasSize);
        else range = new (0, _engine.Circle)(pos1.x, pos1.y, optDistance);
        const query = container.particles.quadTree.query(range);
        for (const p2 of query){
            const linkOpt2 = p2.options.links;
            if (p1 === p2 || !linkOpt2?.enable || linkOpt1.id !== linkOpt2.id || p2.spawning || p2.destroyed || !p2.links || p1.links.some((t)=>t.destination === p2) || p2.links.some((t)=>t.destination === p1)) continue;
            const pos2 = p2.getPosition();
            if (pos2.x < origin.x || pos2.y < origin.y || pos2.x > canvasSize.width || pos2.y > canvasSize.height) continue;
            const distance = getLinkDistance(pos1, pos2, optDistance, canvasSize, warp && linkOpt2.warp);
            if (distance > optDistance) continue;
            const opacityLine = (opacityOffset - distance / optDistance) * optOpacity;
            this._setColor(p1);
            p1.links.push({
                destination: p2,
                opacity: opacityLine
            });
        }
    }
    isEnabled(particle) {
        return !!particle.options.links?.enable;
    }
    loadParticlesOptions(options, ...sources) {
        if (!options.links) options.links = new (0, _linksJs.Links)();
        for (const source of sources)options.links.load(source?.links);
    }
    reset() {}
}

},{"@tsparticles/engine":"ahMVX","./CircleWarp.js":"aWzFp","./Options/Classes/Links.js":"brvKu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aWzFp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CircleWarp", ()=>CircleWarp);
var _engine = require("@tsparticles/engine");
const double = 2;
class CircleWarp extends (0, _engine.Circle) {
    constructor(x, y, radius, canvasSize){
        super(x, y, radius);
        this.canvasSize = canvasSize;
        this.canvasSize = {
            ...canvasSize
        };
    }
    contains(point) {
        const { width, height } = this.canvasSize, { x, y } = point;
        return super.contains(point) || super.contains({
            x: x - width,
            y
        }) || super.contains({
            x: x - width,
            y: y - height
        }) || super.contains({
            x,
            y: y - height
        });
    }
    intersects(range) {
        if (super.intersects(range)) return true;
        const rect = range, circle = range, newPos = {
            x: range.position.x - this.canvasSize.width,
            y: range.position.y - this.canvasSize.height
        };
        if (circle.radius !== undefined) {
            const biggerCircle = new (0, _engine.Circle)(newPos.x, newPos.y, circle.radius * double);
            return super.intersects(biggerCircle);
        } else if (rect.size !== undefined) {
            const rectSW = new (0, _engine.Rectangle)(newPos.x, newPos.y, rect.size.width * double, rect.size.height * double);
            return super.intersects(rectSW);
        }
        return false;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"brvKu":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Links", ()=>Links);
var _engine = require("@tsparticles/engine");
var _linksShadowJs = require("./LinksShadow.js");
var _linksTriangleJs = require("./LinksTriangle.js");
class Links {
    constructor(){
        this.blink = false;
        this.color = new (0, _engine.OptionsColor)();
        this.color.value = "#fff";
        this.consent = false;
        this.distance = 100;
        this.enable = false;
        this.frequency = 1;
        this.opacity = 1;
        this.shadow = new (0, _linksShadowJs.LinksShadow)();
        this.triangles = new (0, _linksTriangleJs.LinksTriangle)();
        this.width = 1;
        this.warp = false;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.id !== undefined) this.id = data.id;
        if (data.blink !== undefined) this.blink = data.blink;
        this.color = (0, _engine.OptionsColor).create(this.color, data.color);
        if (data.consent !== undefined) this.consent = data.consent;
        if (data.distance !== undefined) this.distance = data.distance;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.frequency !== undefined) this.frequency = data.frequency;
        if (data.opacity !== undefined) this.opacity = data.opacity;
        this.shadow.load(data.shadow);
        this.triangles.load(data.triangles);
        if (data.width !== undefined) this.width = data.width;
        if (data.warp !== undefined) this.warp = data.warp;
    }
}

},{"@tsparticles/engine":"ahMVX","./LinksShadow.js":"ehpbZ","./LinksTriangle.js":"30pWz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ehpbZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LinksShadow", ()=>LinksShadow);
var _engine = require("@tsparticles/engine");
class LinksShadow {
    constructor(){
        this.blur = 5;
        this.color = new (0, _engine.OptionsColor)();
        this.color.value = "#000";
        this.enable = false;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.blur !== undefined) this.blur = data.blur;
        this.color = (0, _engine.OptionsColor).create(this.color, data.color);
        if (data.enable !== undefined) this.enable = data.enable;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"30pWz":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LinksTriangle", ()=>LinksTriangle);
var _engine = require("@tsparticles/engine");
class LinksTriangle {
    constructor(){
        this.enable = false;
        this.frequency = 1;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.color !== undefined) this.color = (0, _engine.OptionsColor).create(this.color, data.color);
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.frequency !== undefined) this.frequency = data.frequency;
        if (data.opacity !== undefined) this.opacity = data.opacity;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"r7UPr":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadLinksPlugin", ()=>loadLinksPlugin);
var _linksPluginJs = require("./LinksPlugin.js");
async function loadLinksPlugin(engine, refresh = true) {
    const plugin = new (0, _linksPluginJs.LinksPlugin)(engine);
    await engine.addPlugin(plugin, refresh);
}

},{"./LinksPlugin.js":"6N5rH","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6N5rH":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LinksPlugin", ()=>LinksPlugin);
var _linkInstanceJs = require("./LinkInstance.js");
class LinksPlugin {
    constructor(engine){
        this.id = "links";
        this._engine = engine;
    }
    getPlugin(container) {
        return Promise.resolve(new (0, _linkInstanceJs.LinkInstance)(container, this._engine));
    }
    loadOptions() {}
    needsPlugin() {
        return true;
    }
}

},{"./LinkInstance.js":"kOghc","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kOghc":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "LinkInstance", ()=>LinkInstance);
var _engine = require("@tsparticles/engine");
var _utilsJs = require("./Utils.js");
const minOpacity = 0, minWidth = 0, minDistance = 0, half = 0.5, maxFrequency = 1;
class LinkInstance {
    constructor(container, engine){
        this._drawLinkLine = (p1, link)=>{
            const p1LinksOptions = p1.options.links;
            if (!p1LinksOptions?.enable) return;
            const container = this._container, options = container.actualOptions, p2 = link.destination, pos1 = p1.getPosition(), pos2 = p2.getPosition();
            let opacity = link.opacity;
            container.canvas.draw((ctx)=>{
                let colorLine;
                const twinkle = p1.options.twinkle?.lines;
                if (twinkle?.enable) {
                    const twinkleFreq = twinkle.frequency, twinkleRgb = (0, _engine.rangeColorToRgb)(this._engine, twinkle.color), twinkling = (0, _engine.getRandom)() < twinkleFreq;
                    if (twinkling && twinkleRgb) {
                        colorLine = twinkleRgb;
                        opacity = (0, _engine.getRangeValue)(twinkle.opacity);
                    }
                }
                if (!colorLine) {
                    const linkColor = p1LinksOptions.id !== undefined ? container.particles.linksColors.get(p1LinksOptions.id) : container.particles.linksColor;
                    colorLine = (0, _engine.getLinkColor)(p1, p2, linkColor);
                }
                if (!colorLine) return;
                const width = p1.retina.linksWidth ?? minWidth, maxDistance = p1.retina.linksDistance ?? minDistance, { backgroundMask } = options;
                (0, _utilsJs.drawLinkLine)({
                    context: ctx,
                    width,
                    begin: pos1,
                    end: pos2,
                    engine: this._engine,
                    maxDistance,
                    canvasSize: container.canvas.size,
                    links: p1LinksOptions,
                    backgroundMask: backgroundMask,
                    colorLine,
                    opacity
                });
            });
        };
        this._drawLinkTriangle = (p1, link1, link2)=>{
            const linksOptions = p1.options.links;
            if (!linksOptions?.enable) return;
            const triangleOptions = linksOptions.triangles;
            if (!triangleOptions.enable) return;
            const container = this._container, options = container.actualOptions, p2 = link1.destination, p3 = link2.destination, opacityTriangle = triangleOptions.opacity ?? (link1.opacity + link2.opacity) * half;
            if (opacityTriangle <= minOpacity) return;
            container.canvas.draw((ctx)=>{
                const pos1 = p1.getPosition(), pos2 = p2.getPosition(), pos3 = p3.getPosition(), linksDistance = p1.retina.linksDistance ?? minDistance;
                if ((0, _engine.getDistance)(pos1, pos2) > linksDistance || (0, _engine.getDistance)(pos3, pos2) > linksDistance || (0, _engine.getDistance)(pos3, pos1) > linksDistance) return;
                let colorTriangle = (0, _engine.rangeColorToRgb)(this._engine, triangleOptions.color);
                if (!colorTriangle) {
                    const linkColor = linksOptions.id !== undefined ? container.particles.linksColors.get(linksOptions.id) : container.particles.linksColor;
                    colorTriangle = (0, _engine.getLinkColor)(p1, p2, linkColor);
                }
                if (!colorTriangle) return;
                (0, _utilsJs.drawLinkTriangle)({
                    context: ctx,
                    pos1,
                    pos2,
                    pos3,
                    backgroundMask: options.backgroundMask,
                    colorTriangle,
                    opacityTriangle
                });
            });
        };
        this._drawTriangles = (options, p1, link, p1Links)=>{
            const p2 = link.destination;
            if (!(options.links?.triangles.enable && p2.options.links?.triangles.enable)) return;
            const vertices = p2.links?.filter((t)=>{
                const linkFreq = this._getLinkFrequency(p2, t.destination), minCount = 0;
                return p2.options.links && linkFreq <= p2.options.links.frequency && p1Links.findIndex((l)=>l.destination === t.destination) >= minCount;
            });
            if (!vertices?.length) return;
            for (const vertex of vertices){
                const p3 = vertex.destination, triangleFreq = this._getTriangleFrequency(p1, p2, p3);
                if (triangleFreq > options.links.triangles.frequency) continue;
                this._drawLinkTriangle(p1, link, vertex);
            }
        };
        this._getLinkFrequency = (p1, p2)=>{
            return (0, _utilsJs.setLinkFrequency)([
                p1,
                p2
            ], this._freqs.links);
        };
        this._getTriangleFrequency = (p1, p2, p3)=>{
            return (0, _utilsJs.setLinkFrequency)([
                p1,
                p2,
                p3
            ], this._freqs.triangles);
        };
        this._container = container;
        this._engine = engine;
        this._freqs = {
            links: new Map(),
            triangles: new Map()
        };
    }
    drawParticle(context, particle) {
        const { links, options } = particle;
        if (!links?.length) return;
        const p1Links = links.filter((l)=>options.links && (options.links.frequency >= maxFrequency || this._getLinkFrequency(particle, l.destination) <= options.links.frequency));
        for (const link of p1Links){
            this._drawTriangles(options, particle, link, p1Links);
            if (link.opacity > minOpacity && (particle.retina.linksWidth ?? minWidth) > minWidth) this._drawLinkLine(particle, link);
        }
    }
    async init() {
        this._freqs.links = new Map();
        this._freqs.triangles = new Map();
        await Promise.resolve();
    }
    particleCreated(particle) {
        particle.links = [];
        if (!particle.options.links) return;
        const ratio = this._container.retina.pixelRatio, { retina } = particle, { distance, width } = particle.options.links;
        retina.linksDistance = distance * ratio;
        retina.linksWidth = width * ratio;
    }
    particleDestroyed(particle) {
        particle.links = [];
    }
}

},{"@tsparticles/engine":"ahMVX","./Utils.js":"3zeLk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3zeLk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawTriangle", ()=>drawTriangle);
parcelHelpers.export(exports, "drawLinkLine", ()=>drawLinkLine);
parcelHelpers.export(exports, "drawLinkTriangle", ()=>drawLinkTriangle);
parcelHelpers.export(exports, "getLinkKey", ()=>getLinkKey);
parcelHelpers.export(exports, "setLinkFrequency", ()=>setLinkFrequency);
var _engine = require("@tsparticles/engine");
function drawTriangle(context, p1, p2, p3) {
    context.beginPath();
    context.moveTo(p1.x, p1.y);
    context.lineTo(p2.x, p2.y);
    context.lineTo(p3.x, p3.y);
    context.closePath();
}
function drawLinkLine(params) {
    let drawn = false;
    const { begin, end, engine, maxDistance, context, canvasSize, width, backgroundMask, colorLine, opacity, links } = params;
    if ((0, _engine.getDistance)(begin, end) <= maxDistance) {
        (0, _engine.drawLine)(context, begin, end);
        drawn = true;
    } else if (links.warp) {
        let pi1;
        let pi2;
        const endNE = {
            x: end.x - canvasSize.width,
            y: end.y
        };
        const d1 = (0, _engine.getDistances)(begin, endNE);
        if (d1.distance <= maxDistance) {
            const yi = begin.y - d1.dy / d1.dx * begin.x;
            pi1 = {
                x: 0,
                y: yi
            };
            pi2 = {
                x: canvasSize.width,
                y: yi
            };
        } else {
            const endSW = {
                x: end.x,
                y: end.y - canvasSize.height
            };
            const d2 = (0, _engine.getDistances)(begin, endSW);
            if (d2.distance <= maxDistance) {
                const yi = begin.y - d2.dy / d2.dx * begin.x;
                const xi = -yi / (d2.dy / d2.dx);
                pi1 = {
                    x: xi,
                    y: 0
                };
                pi2 = {
                    x: xi,
                    y: canvasSize.height
                };
            } else {
                const endSE = {
                    x: end.x - canvasSize.width,
                    y: end.y - canvasSize.height
                };
                const d3 = (0, _engine.getDistances)(begin, endSE);
                if (d3.distance <= maxDistance) {
                    const yi = begin.y - d3.dy / d3.dx * begin.x;
                    const xi = -yi / (d3.dy / d3.dx);
                    pi1 = {
                        x: xi,
                        y: yi
                    };
                    pi2 = {
                        x: pi1.x + canvasSize.width,
                        y: pi1.y + canvasSize.height
                    };
                }
            }
        }
        if (pi1 && pi2) {
            (0, _engine.drawLine)(context, begin, pi1);
            (0, _engine.drawLine)(context, end, pi2);
            drawn = true;
        }
    }
    if (!drawn) return;
    context.lineWidth = width;
    if (backgroundMask.enable) context.globalCompositeOperation = backgroundMask.composite;
    context.strokeStyle = (0, _engine.getStyleFromRgb)(colorLine, opacity);
    const { shadow } = links;
    if (shadow.enable) {
        const shadowColor = (0, _engine.rangeColorToRgb)(engine, shadow.color);
        if (shadowColor) {
            context.shadowBlur = shadow.blur;
            context.shadowColor = (0, _engine.getStyleFromRgb)(shadowColor);
        }
    }
    context.stroke();
}
function drawLinkTriangle(params) {
    const { context, pos1, pos2, pos3, backgroundMask, colorTriangle, opacityTriangle } = params;
    drawTriangle(context, pos1, pos2, pos3);
    if (backgroundMask.enable) context.globalCompositeOperation = backgroundMask.composite;
    context.fillStyle = (0, _engine.getStyleFromRgb)(colorTriangle, opacityTriangle);
    context.fill();
}
function getLinkKey(ids) {
    ids.sort((a, b)=>a - b);
    return ids.join("_");
}
function setLinkFrequency(particles, dictionary) {
    const key = getLinkKey(particles.map((t)=>t.id));
    let res = dictionary.get(key);
    if (res === undefined) {
        res = (0, _engine.getRandom)();
        dictionary.set(key, res);
    }
    return res;
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ixaXp":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"70JJN":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5JDwG":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gCRfI":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadGenericPolygonShape", ()=>loadGenericPolygonShape);
parcelHelpers.export(exports, "loadTriangleShape", ()=>loadTriangleShape);
parcelHelpers.export(exports, "loadPolygonShape", ()=>loadPolygonShape);
var _engine = require("@tsparticles/engine");
var _polygonDrawerJs = require("./PolygonDrawer.js");
var _triangleDrawerJs = require("./TriangleDrawer.js");
async function loadGenericPolygonShape(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addShape(new (0, _polygonDrawerJs.PolygonDrawer)(), refresh);
}
async function loadTriangleShape(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addShape(new (0, _triangleDrawerJs.TriangleDrawer)(), refresh);
}
async function loadPolygonShape(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await loadGenericPolygonShape(engine, refresh);
    await loadTriangleShape(engine, refresh);
}

},{"@tsparticles/engine":"ahMVX","./PolygonDrawer.js":"e7LD2","./TriangleDrawer.js":"e74FZ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e7LD2":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PolygonDrawer", ()=>PolygonDrawer);
var _polygonDrawerBaseJs = require("./PolygonDrawerBase.js");
const sidesCenterFactor = 3.5, yFactor = 2.66, sidesFactor = 3;
class PolygonDrawer extends (0, _polygonDrawerBaseJs.PolygonDrawerBase) {
    constructor(){
        super(...arguments);
        this.validTypes = [
            "polygon"
        ];
    }
    getCenter(particle, radius) {
        return {
            x: -radius / (particle.sides / sidesCenterFactor),
            y: -radius / (yFactor / sidesCenterFactor)
        };
    }
    getSidesData(particle, radius) {
        const sides = particle.sides;
        return {
            count: {
                denominator: 1,
                numerator: sides
            },
            length: radius * yFactor / (sides / sidesFactor)
        };
    }
}

},{"./PolygonDrawerBase.js":"bHoi8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bHoi8":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "PolygonDrawerBase", ()=>PolygonDrawerBase);
var _engine = require("@tsparticles/engine");
var _utilsJs = require("./Utils.js");
const defaultSides = 5;
class PolygonDrawerBase {
    draw(data) {
        const { particle, radius } = data, start = this.getCenter(particle, radius), side = this.getSidesData(particle, radius);
        (0, _utilsJs.drawPolygon)(data, start, side);
    }
    getSidesCount(particle) {
        const polygon = particle.shapeData;
        return Math.round((0, _engine.getRangeValue)(polygon?.sides ?? defaultSides));
    }
}

},{"@tsparticles/engine":"ahMVX","./Utils.js":"b5HLF","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"b5HLF":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawPolygon", ()=>drawPolygon);
var _engine = require("@tsparticles/engine");
const piDeg = 180, origin = {
    x: 0,
    y: 0
}, sidesOffset = 2;
function drawPolygon(data, start, side) {
    const { context } = data, sideCount = side.count.numerator * side.count.denominator, decimalSides = side.count.numerator / side.count.denominator, interiorAngleDegrees = piDeg * (decimalSides - sidesOffset) / decimalSides, interiorAngle = Math.PI - (0, _engine.degToRad)(interiorAngleDegrees);
    if (!context) return;
    context.beginPath();
    context.translate(start.x, start.y);
    context.moveTo(origin.x, origin.y);
    for(let i = 0; i < sideCount; i++){
        context.lineTo(side.length, origin.y);
        context.translate(side.length, origin.y);
        context.rotate(interiorAngle);
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"e74FZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "TriangleDrawer", ()=>TriangleDrawer);
var _polygonDrawerBaseJs = require("./PolygonDrawerBase.js");
const yFactor = 1.66, sides = 3, double = 2;
class TriangleDrawer extends (0, _polygonDrawerBaseJs.PolygonDrawerBase) {
    constructor(){
        super(...arguments);
        this.validTypes = [
            "triangle"
        ];
    }
    getCenter(particle, radius) {
        return {
            x: -radius,
            y: radius / yFactor
        };
    }
    getSidesCount() {
        return sides;
    }
    getSidesData(particle, radius) {
        const diameter = radius * double;
        return {
            count: {
                denominator: 2,
                numerator: 3
            },
            length: diameter
        };
    }
}

},{"./PolygonDrawerBase.js":"bHoi8","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hulbM":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadRotateUpdater", ()=>loadRotateUpdater);
var _engine = require("@tsparticles/engine");
var _rotateUpdaterJs = require("./RotateUpdater.js");
async function loadRotateUpdater(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addParticleUpdater("rotate", (container)=>{
        return Promise.resolve(new (0, _rotateUpdaterJs.RotateUpdater)(container));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./RotateUpdater.js":"alxdQ","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"alxdQ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RotateUpdater", ()=>RotateUpdater);
var _engine = require("@tsparticles/engine");
var _rotateJs = require("./Options/Classes/Rotate.js");
const double = 2, doublePI = Math.PI * double, identity = 1, doublePIDeg = 360;
class RotateUpdater {
    constructor(container){
        this.container = container;
    }
    init(particle) {
        const rotateOptions = particle.options.rotate;
        if (!rotateOptions) return;
        particle.rotate = {
            enable: rotateOptions.animation.enable,
            value: (0, _engine.degToRad)((0, _engine.getRangeValue)(rotateOptions.value)),
            min: 0,
            max: doublePI
        };
        particle.pathRotation = rotateOptions.path;
        let rotateDirection = rotateOptions.direction;
        if (rotateDirection === (0, _engine.RotateDirection).random) {
            const index = Math.floor((0, _engine.getRandom)() * double), minIndex = 0;
            rotateDirection = index > minIndex ? (0, _engine.RotateDirection).counterClockwise : (0, _engine.RotateDirection).clockwise;
        }
        switch(rotateDirection){
            case (0, _engine.RotateDirection).counterClockwise:
            case "counterClockwise":
                particle.rotate.status = (0, _engine.AnimationStatus).decreasing;
                break;
            case (0, _engine.RotateDirection).clockwise:
                particle.rotate.status = (0, _engine.AnimationStatus).increasing;
                break;
        }
        const rotateAnimation = rotateOptions.animation;
        if (rotateAnimation.enable) {
            particle.rotate.decay = identity - (0, _engine.getRangeValue)(rotateAnimation.decay);
            particle.rotate.velocity = (0, _engine.getRangeValue)(rotateAnimation.speed) / doublePIDeg * this.container.retina.reduceFactor;
            if (!rotateAnimation.sync) particle.rotate.velocity *= (0, _engine.getRandom)();
        }
        particle.rotation = particle.rotate.value;
    }
    isEnabled(particle) {
        const rotate = particle.options.rotate;
        if (!rotate) return false;
        return !particle.destroyed && !particle.spawning && (!!rotate.value || rotate.animation.enable || rotate.path);
    }
    loadOptions(options, ...sources) {
        if (!options.rotate) options.rotate = new (0, _rotateJs.Rotate)();
        for (const source of sources)options.rotate.load(source?.rotate);
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) return;
        particle.isRotating = !!particle.rotate;
        if (!particle.rotate) return;
        (0, _engine.updateAnimation)(particle, particle.rotate, false, (0, _engine.DestroyType).none, delta);
        particle.rotation = particle.rotate.value;
    }
}

},{"@tsparticles/engine":"ahMVX","./Options/Classes/Rotate.js":"hBMhX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hBMhX":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Rotate", ()=>Rotate);
var _engine = require("@tsparticles/engine");
var _rotateAnimationJs = require("./RotateAnimation.js");
class Rotate extends (0, _engine.ValueWithRandom) {
    constructor(){
        super();
        this.animation = new (0, _rotateAnimationJs.RotateAnimation)();
        this.direction = (0, _engine.RotateDirection).clockwise;
        this.path = false;
        this.value = 0;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        super.load(data);
        if (data.direction !== undefined) this.direction = data.direction;
        this.animation.load(data.animation);
        if (data.path !== undefined) this.path = data.path;
    }
}

},{"@tsparticles/engine":"ahMVX","./RotateAnimation.js":"ispxt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"ispxt":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RotateAnimation", ()=>RotateAnimation);
var _engine = require("@tsparticles/engine");
class RotateAnimation {
    constructor(){
        this.enable = false;
        this.speed = 0;
        this.decay = 0;
        this.sync = false;
    }
    load(data) {
        if ((0, _engine.isNull)(data)) return;
        if (data.enable !== undefined) this.enable = data.enable;
        if (data.speed !== undefined) this.speed = (0, _engine.setRangeValue)(data.speed);
        if (data.decay !== undefined) this.decay = (0, _engine.setRangeValue)(data.decay);
        if (data.sync !== undefined) this.sync = data.sync;
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3d86B":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadSquareShape", ()=>loadSquareShape);
var _engine = require("@tsparticles/engine");
var _squareDrawerJs = require("./SquareDrawer.js");
async function loadSquareShape(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addShape(new (0, _squareDrawerJs.SquareDrawer)(), refresh);
}

},{"@tsparticles/engine":"ahMVX","./SquareDrawer.js":"4UMYe","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4UMYe":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SquareDrawer", ()=>SquareDrawer);
var _utilsJs = require("./Utils.js");
const sides = 4;
class SquareDrawer {
    constructor(){
        this.validTypes = [
            "edge",
            "square"
        ];
    }
    draw(data) {
        (0, _utilsJs.drawSquare)(data);
    }
    getSidesCount() {
        return sides;
    }
}

},{"./Utils.js":"bb8Lv","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bb8Lv":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawSquare", ()=>drawSquare);
const fixFactorSquared = 2, fixFactor = Math.sqrt(fixFactorSquared), double = 2;
function drawSquare(data) {
    const { context, radius } = data, fixedRadius = radius / fixFactor, fixedDiameter = fixedRadius * double;
    context.rect(-fixedRadius, -fixedRadius, fixedDiameter, fixedDiameter);
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bCPNV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadStarShape", ()=>loadStarShape);
var _engine = require("@tsparticles/engine");
var _starDrawerJs = require("./StarDrawer.js");
async function loadStarShape(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addShape(new (0, _starDrawerJs.StarDrawer)(), refresh);
}

},{"@tsparticles/engine":"ahMVX","./StarDrawer.js":"1XrHk","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1XrHk":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StarDrawer", ()=>StarDrawer);
var _engine = require("@tsparticles/engine");
var _utilsJs = require("./Utils.js");
const defaultInset = 2, defaultSides = 5;
class StarDrawer {
    constructor(){
        this.validTypes = [
            "star"
        ];
    }
    draw(data) {
        (0, _utilsJs.drawStar)(data);
    }
    getSidesCount(particle) {
        const star = particle.shapeData;
        return Math.round((0, _engine.getRangeValue)(star?.sides ?? defaultSides));
    }
    particleInit(container, particle) {
        const star = particle.shapeData;
        particle.starInset = (0, _engine.getRangeValue)(star?.inset ?? defaultInset);
    }
}

},{"@tsparticles/engine":"ahMVX","./Utils.js":"7Q41q","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7Q41q":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "drawStar", ()=>drawStar);
const defaultInset = 2, origin = {
    x: 0,
    y: 0
};
function drawStar(data) {
    const { context, particle, radius } = data, sides = particle.sides, inset = particle.starInset ?? defaultInset;
    context.moveTo(origin.x, origin.y - radius);
    for(let i = 0; i < sides; i++){
        context.rotate(Math.PI / sides);
        context.lineTo(origin.x, origin.y - radius * inset);
        context.rotate(Math.PI / sides);
        context.lineTo(origin.x, origin.y - radius);
    }
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6p4CZ":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "loadStrokeColorUpdater", ()=>loadStrokeColorUpdater);
var _engine = require("@tsparticles/engine");
var _strokeColorUpdaterJs = require("./StrokeColorUpdater.js");
async function loadStrokeColorUpdater(engine, refresh = true) {
    (0, _engine.assertValidVersion)(engine, "3.7.1");
    await engine.addParticleUpdater("strokeColor", (container)=>{
        return Promise.resolve(new (0, _strokeColorUpdaterJs.StrokeColorUpdater)(container, engine));
    }, refresh);
}

},{"@tsparticles/engine":"ahMVX","./StrokeColorUpdater.js":"9NSnV","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"9NSnV":[function(require,module,exports,__globalThis) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "StrokeColorUpdater", ()=>StrokeColorUpdater);
var _engine = require("@tsparticles/engine");
const defaultOpacity = 1;
class StrokeColorUpdater {
    constructor(container, engine){
        this._container = container;
        this._engine = engine;
    }
    init(particle) {
        const container = this._container, options = particle.options;
        const stroke = (0, _engine.itemFromSingleOrMultiple)(options.stroke, particle.id, options.reduceDuplicates);
        particle.strokeWidth = (0, _engine.getRangeValue)(stroke.width) * container.retina.pixelRatio;
        particle.strokeOpacity = (0, _engine.getRangeValue)(stroke.opacity ?? defaultOpacity);
        particle.strokeAnimation = stroke.color?.animation;
        const strokeHslColor = (0, _engine.rangeColorToHsl)(this._engine, stroke.color) ?? particle.getFillColor();
        if (strokeHslColor) particle.strokeColor = (0, _engine.getHslAnimationFromHsl)(strokeHslColor, particle.strokeAnimation, container.retina.reduceFactor);
    }
    isEnabled(particle) {
        const color = particle.strokeAnimation, { strokeColor } = particle;
        return !particle.destroyed && !particle.spawning && !!color && (strokeColor?.h.value !== undefined && strokeColor.h.enable || strokeColor?.s.value !== undefined && strokeColor.s.enable || strokeColor?.l.value !== undefined && strokeColor.l.enable);
    }
    update(particle, delta) {
        if (!this.isEnabled(particle)) return;
        (0, _engine.updateColor)(particle.strokeColor, delta);
    }
}

},{"@tsparticles/engine":"ahMVX","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"irmnC":[function() {},{}],"km3Ru":[function(require,module,exports,__globalThis) {
"use strict";
var Refresh = require("7422ead32dcc1e6b");
var { version } = require("630b62916b1ae0e7");
function debounce(func, delay) {
    {
        let timeout = undefined;
        let lastTime = 0;
        return function(args) {
            // Call immediately if last call was more than the delay ago.
            // Otherwise, set a timeout. This means the first call is fast
            // (for the common case of a single update), and subsequent updates
            // are batched.
            let now = Date.now();
            if (now - lastTime > delay) {
                lastTime = now;
                func.call(null, args);
            } else {
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    timeout = undefined;
                    lastTime = Date.now();
                    func.call(null, args);
                }, delay);
            }
        };
    }
}
var enqueueUpdate = debounce(function() {
    Refresh.performReactRefresh();
}, 30);
// Everything below is either adapted or copied from
// https://github.com/facebook/metro/blob/61de16bd1edd7e738dd0311c89555a644023ab2d/packages/metro/src/lib/polyfills/require.js
// MIT License - Copyright (c) Facebook, Inc. and its affiliates.
module.exports.prelude = function(module1) {
    window.__REACT_REFRESH_VERSION_TRANSFORMER = version;
    window.$RefreshReg$ = function(type, id) {
        if (window.__REACT_REFRESH_VERSION_TRANSFORMER && window.__REACT_REFRESH_VERSION_RUNTIME && window.__REACT_REFRESH_VERSION_TRANSFORMER !== window.__REACT_REFRESH_VERSION_RUNTIME) // Both versions were set and they did not match
        throw new Error(`react-refresh versions did not match between transformer and runtime. Please check your dependencies. Transformer: ${window.__REACT_REFRESH_VERSION_TRANSFORMER}, Runtime: ${window.__REACT_REFRESH_VERSION_RUNTIME}`);
        Refresh.register(type, module1.id + ' ' + id);
    };
    window.$RefreshSig$ = Refresh.createSignatureFunctionForTransform;
};
module.exports.postlude = function(module1) {
    if (isReactRefreshBoundary(module1.exports)) {
        registerExportsForReactRefresh(module1);
        if (module1.hot) {
            module1.hot.dispose(function(data) {
                if (Refresh.hasUnrecoverableErrors()) window.location.reload();
                data.prevExports = module1.exports;
            });
            module1.hot.accept(function(getParents) {
                var prevExports = module1.hot.data.prevExports;
                var nextExports = module1.exports;
                // Since we just executed the code for it, it's possible
                // that the new exports make it ineligible for being a boundary.
                var isNoLongerABoundary = !isReactRefreshBoundary(nextExports);
                // It can also become ineligible if its exports are incompatible
                // with the previous exports.
                // For example, if you add/remove/change exports, we'll want
                // to re-execute the importing modules, and force those components
                // to re-render. Similarly, if you convert a class component
                // to a function, we want to invalidate the boundary.
                var didInvalidate = shouldInvalidateReactRefreshBoundary(prevExports, nextExports);
                if (isNoLongerABoundary || didInvalidate) {
                    // We'll be conservative. The only case in which we won't do a full
                    // reload is if all parent modules are also refresh boundaries.
                    // In that case we'll add them to the current queue.
                    var parents = getParents();
                    if (parents.length === 0) {
                        // Looks like we bubbled to the root. Can't recover from that.
                        window.location.reload();
                        return;
                    }
                    return parents;
                }
                enqueueUpdate();
            });
        }
    }
};
function isReactRefreshBoundary(exports) {
    if (Refresh.isLikelyComponentType(exports)) return true;
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    return false;
    var hasExports = false;
    var areAllExportsComponents = true;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        hasExports = true;
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) // Don't invoke getters for CJS as they may have side effects.
        return false;
        var exportValue = exports[key];
        if (!Refresh.isLikelyComponentType(exportValue)) areAllExportsComponents = false;
    }
    return hasExports && areAllExportsComponents;
}
function shouldInvalidateReactRefreshBoundary(prevExports, nextExports) {
    var prevSignature = getRefreshBoundarySignature(prevExports);
    var nextSignature = getRefreshBoundarySignature(nextExports);
    if (prevSignature.length !== nextSignature.length) return true;
    for(var i = 0; i < nextSignature.length; i++){
        if (prevSignature[i] !== nextSignature[i]) return true;
    }
    return false;
}
// When this signature changes, it's unsafe to stop at this refresh boundary.
function getRefreshBoundarySignature(exports) {
    var signature = [];
    signature.push(Refresh.getFamilyByType(exports));
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return signature;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        if (key === '__esModule') continue;
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        signature.push(key);
        signature.push(Refresh.getFamilyByType(exportValue));
    }
    return signature;
}
function registerExportsForReactRefresh(module1) {
    var exports = module1.exports, id = module1.id;
    Refresh.register(exports, id + ' %exports%');
    if (exports == null || typeof exports !== 'object') // Exit if we can't iterate over exports.
    // (This is important for legacy environments.)
    return;
    let isESM = '__esModule' in exports;
    for(var key in exports){
        var desc = Object.getOwnPropertyDescriptor(exports, key);
        if (desc && desc.get && !isESM) continue;
        var exportValue = exports[key];
        var typeID = id + ' %exports% ' + key;
        Refresh.register(exportValue, typeID);
    }
}

},{"7422ead32dcc1e6b":"786KC","630b62916b1ae0e7":"4SQxb"}],"786KC":[function(require,module,exports,__globalThis) {
'use strict';
module.exports = require("96622d495519d4e");

},{"96622d495519d4e":"hdge7"}],"hdge7":[function(require,module,exports,__globalThis) {
/**
 * @license React
 * react-refresh-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ 'use strict';
(function() {
    'use strict';
    // ATTENTION
    var REACT_FORWARD_REF_TYPE = Symbol.for('react.forward_ref');
    var REACT_MEMO_TYPE = Symbol.for('react.memo');
    var PossiblyWeakMap = typeof WeakMap === 'function' ? WeakMap : Map; // We never remove these associations.
    // It's OK to reference families, but use WeakMap/Set for types.
    var allFamiliesByID = new Map();
    var allFamiliesByType = new PossiblyWeakMap();
    var allSignaturesByType = new PossiblyWeakMap(); // This WeakMap is read by React, so we only put families
    // that have actually been edited here. This keeps checks fast.
    // $FlowIssue
    var updatedFamiliesByType = new PossiblyWeakMap(); // This is cleared on every performReactRefresh() call.
    // It is an array of [Family, NextType] tuples.
    var pendingUpdates = []; // This is injected by the renderer via DevTools global hook.
    var helpersByRendererID = new Map();
    var helpersByRoot = new Map(); // We keep track of mounted roots so we can schedule updates.
    var mountedRoots = new Set(); // If a root captures an error, we remember it so we can retry on edit.
    var failedRoots = new Set(); // In environments that support WeakMap, we also remember the last element for every root.
    // It needs to be weak because we do this even for roots that failed to mount.
    // If there is no WeakMap, we won't attempt to do retrying.
    // $FlowIssue
    var rootElements = typeof WeakMap === 'function' ? new WeakMap() : null;
    var isPerformingRefresh = false;
    function computeFullKey(signature) {
        if (signature.fullKey !== null) return signature.fullKey;
        var fullKey = signature.ownKey;
        var hooks;
        try {
            hooks = signature.getCustomHooks();
        } catch (err) {
            // This can happen in an edge case, e.g. if expression like Foo.useSomething
            // depends on Foo which is lazily initialized during rendering.
            // In that case just assume we'll have to remount.
            signature.forceReset = true;
            signature.fullKey = fullKey;
            return fullKey;
        }
        for(var i = 0; i < hooks.length; i++){
            var hook = hooks[i];
            if (typeof hook !== 'function') {
                // Something's wrong. Assume we need to remount.
                signature.forceReset = true;
                signature.fullKey = fullKey;
                return fullKey;
            }
            var nestedHookSignature = allSignaturesByType.get(hook);
            if (nestedHookSignature === undefined) continue;
            var nestedHookKey = computeFullKey(nestedHookSignature);
            if (nestedHookSignature.forceReset) signature.forceReset = true;
            fullKey += '\n---\n' + nestedHookKey;
        }
        signature.fullKey = fullKey;
        return fullKey;
    }
    function haveEqualSignatures(prevType, nextType) {
        var prevSignature = allSignaturesByType.get(prevType);
        var nextSignature = allSignaturesByType.get(nextType);
        if (prevSignature === undefined && nextSignature === undefined) return true;
        if (prevSignature === undefined || nextSignature === undefined) return false;
        if (computeFullKey(prevSignature) !== computeFullKey(nextSignature)) return false;
        if (nextSignature.forceReset) return false;
        return true;
    }
    function isReactClass(type) {
        return type.prototype && type.prototype.isReactComponent;
    }
    function canPreserveStateBetween(prevType, nextType) {
        if (isReactClass(prevType) || isReactClass(nextType)) return false;
        if (haveEqualSignatures(prevType, nextType)) return true;
        return false;
    }
    function resolveFamily(type) {
        // Only check updated types to keep lookups fast.
        return updatedFamiliesByType.get(type);
    } // If we didn't care about IE11, we could use new Map/Set(iterable).
    function cloneMap(map) {
        var clone = new Map();
        map.forEach(function(value, key) {
            clone.set(key, value);
        });
        return clone;
    }
    function cloneSet(set) {
        var clone = new Set();
        set.forEach(function(value) {
            clone.add(value);
        });
        return clone;
    } // This is a safety mechanism to protect against rogue getters and Proxies.
    function getProperty(object, property) {
        try {
            return object[property];
        } catch (err) {
            // Intentionally ignore.
            return undefined;
        }
    }
    function performReactRefresh() {
        if (pendingUpdates.length === 0) return null;
        if (isPerformingRefresh) return null;
        isPerformingRefresh = true;
        try {
            var staleFamilies = new Set();
            var updatedFamilies = new Set();
            var updates = pendingUpdates;
            pendingUpdates = [];
            updates.forEach(function(_ref) {
                var family = _ref[0], nextType = _ref[1];
                // Now that we got a real edit, we can create associations
                // that will be read by the React reconciler.
                var prevType = family.current;
                updatedFamiliesByType.set(prevType, family);
                updatedFamiliesByType.set(nextType, family);
                family.current = nextType; // Determine whether this should be a re-render or a re-mount.
                if (canPreserveStateBetween(prevType, nextType)) updatedFamilies.add(family);
                else staleFamilies.add(family);
            }); // TODO: rename these fields to something more meaningful.
            var update = {
                updatedFamilies: updatedFamilies,
                // Families that will re-render preserving state
                staleFamilies: staleFamilies // Families that will be remounted
            };
            helpersByRendererID.forEach(function(helpers) {
                // Even if there are no roots, set the handler on first update.
                // This ensures that if *new* roots are mounted, they'll use the resolve handler.
                helpers.setRefreshHandler(resolveFamily);
            });
            var didError = false;
            var firstError = null; // We snapshot maps and sets that are mutated during commits.
            // If we don't do this, there is a risk they will be mutated while
            // we iterate over them. For example, trying to recover a failed root
            // may cause another root to be added to the failed list -- an infinite loop.
            var failedRootsSnapshot = cloneSet(failedRoots);
            var mountedRootsSnapshot = cloneSet(mountedRoots);
            var helpersByRootSnapshot = cloneMap(helpersByRoot);
            failedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                failedRoots.has(root);
                if (rootElements === null) return;
                if (!rootElements.has(root)) return;
                var element = rootElements.get(root);
                try {
                    helpers.scheduleRoot(root, element);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            mountedRootsSnapshot.forEach(function(root) {
                var helpers = helpersByRootSnapshot.get(root);
                if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
                mountedRoots.has(root);
                try {
                    helpers.scheduleRefresh(root, update);
                } catch (err) {
                    if (!didError) {
                        didError = true;
                        firstError = err;
                    } // Keep trying other roots.
                }
            });
            if (didError) throw firstError;
            return update;
        } finally{
            isPerformingRefresh = false;
        }
    }
    function register(type, id) {
        if (type === null) return;
        if (typeof type !== 'function' && typeof type !== 'object') return;
         // This can happen in an edge case, e.g. if we register
        // return value of a HOC but it returns a cached component.
        // Ignore anything but the first registration for each type.
        if (allFamiliesByType.has(type)) return;
         // Create family or remember to update it.
        // None of this bookkeeping affects reconciliation
        // until the first performReactRefresh() call above.
        var family = allFamiliesByID.get(id);
        if (family === undefined) {
            family = {
                current: type
            };
            allFamiliesByID.set(id, family);
        } else pendingUpdates.push([
            family,
            type
        ]);
        allFamiliesByType.set(type, family); // Visit inner types because we might not have registered them.
        if (typeof type === 'object' && type !== null) switch(getProperty(type, '$$typeof')){
            case REACT_FORWARD_REF_TYPE:
                register(type.render, id + '$render');
                break;
            case REACT_MEMO_TYPE:
                register(type.type, id + '$type');
                break;
        }
    }
    function setSignature(type, key) {
        var forceReset = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var getCustomHooks = arguments.length > 3 ? arguments[3] : undefined;
        if (!allSignaturesByType.has(type)) allSignaturesByType.set(type, {
            forceReset: forceReset,
            ownKey: key,
            fullKey: null,
            getCustomHooks: getCustomHooks || function() {
                return [];
            }
        });
         // Visit inner types because we might not have signed them.
        if (typeof type === 'object' && type !== null) switch(getProperty(type, '$$typeof')){
            case REACT_FORWARD_REF_TYPE:
                setSignature(type.render, key, forceReset, getCustomHooks);
                break;
            case REACT_MEMO_TYPE:
                setSignature(type.type, key, forceReset, getCustomHooks);
                break;
        }
    } // This is lazily called during first render for a type.
    // It captures Hook list at that time so inline requires don't break comparisons.
    function collectCustomHooksForSignature(type) {
        var signature = allSignaturesByType.get(type);
        if (signature !== undefined) computeFullKey(signature);
    }
    function getFamilyByID(id) {
        return allFamiliesByID.get(id);
    }
    function getFamilyByType(type) {
        return allFamiliesByType.get(type);
    }
    function findAffectedHostInstances(families) {
        var affectedInstances = new Set();
        mountedRoots.forEach(function(root) {
            var helpers = helpersByRoot.get(root);
            if (helpers === undefined) throw new Error('Could not find helpers for a root. This is a bug in React Refresh.');
            var instancesForRoot = helpers.findHostInstancesForRefresh(root, families);
            instancesForRoot.forEach(function(inst) {
                affectedInstances.add(inst);
            });
        });
        return affectedInstances;
    }
    function injectIntoGlobalHook(globalObject) {
        // For React Native, the global hook will be set up by require('react-devtools-core').
        // That code will run before us. So we need to monkeypatch functions on existing hook.
        // For React Web, the global hook will be set up by the extension.
        // This will also run before us.
        var hook = globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__;
        if (hook === undefined) {
            // However, if there is no DevTools extension, we'll need to set up the global hook ourselves.
            // Note that in this case it's important that renderer code runs *after* this method call.
            // Otherwise, the renderer will think that there is no global hook, and won't do the injection.
            var nextID = 0;
            globalObject.__REACT_DEVTOOLS_GLOBAL_HOOK__ = hook = {
                renderers: new Map(),
                supportsFiber: true,
                inject: function(injected) {
                    return nextID++;
                },
                onScheduleFiberRoot: function(id, root, children) {},
                onCommitFiberRoot: function(id, root, maybePriorityLevel, didError) {},
                onCommitFiberUnmount: function() {}
            };
        }
        if (hook.isDisabled) {
            // This isn't a real property on the hook, but it can be set to opt out
            // of DevTools integration and associated warnings and logs.
            // Using console['warn'] to evade Babel and ESLint
            console['warn']("Something has shimmed the React DevTools global hook (__REACT_DEVTOOLS_GLOBAL_HOOK__). Fast Refresh is not compatible with this shim and will be disabled.");
            return;
        } // Here, we just want to get a reference to scheduleRefresh.
        var oldInject = hook.inject;
        hook.inject = function(injected) {
            var id = oldInject.apply(this, arguments);
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
            return id;
        }; // Do the same for any already injected roots.
        // This is useful if ReactDOM has already been initialized.
        // https://github.com/facebook/react/issues/17626
        hook.renderers.forEach(function(injected, id) {
            if (typeof injected.scheduleRefresh === 'function' && typeof injected.setRefreshHandler === 'function') // This version supports React Refresh.
            helpersByRendererID.set(id, injected);
        }); // We also want to track currently mounted roots.
        var oldOnCommitFiberRoot = hook.onCommitFiberRoot;
        var oldOnScheduleFiberRoot = hook.onScheduleFiberRoot || function() {};
        hook.onScheduleFiberRoot = function(id, root, children) {
            if (!isPerformingRefresh) {
                // If it was intentionally scheduled, don't attempt to restore.
                // This includes intentionally scheduled unmounts.
                failedRoots.delete(root);
                if (rootElements !== null) rootElements.set(root, children);
            }
            return oldOnScheduleFiberRoot.apply(this, arguments);
        };
        hook.onCommitFiberRoot = function(id, root, maybePriorityLevel, didError) {
            var helpers = helpersByRendererID.get(id);
            if (helpers !== undefined) {
                helpersByRoot.set(root, helpers);
                var current = root.current;
                var alternate = current.alternate; // We need to determine whether this root has just (un)mounted.
                // This logic is copy-pasted from similar logic in the DevTools backend.
                // If this breaks with some refactoring, you'll want to update DevTools too.
                if (alternate !== null) {
                    var wasMounted = alternate.memoizedState != null && alternate.memoizedState.element != null && mountedRoots.has(root);
                    var isMounted = current.memoizedState != null && current.memoizedState.element != null;
                    if (!wasMounted && isMounted) {
                        // Mount a new root.
                        mountedRoots.add(root);
                        failedRoots.delete(root);
                    } else if (wasMounted && isMounted) ;
                    else if (wasMounted && !isMounted) {
                        // Unmount an existing root.
                        mountedRoots.delete(root);
                        if (didError) // We'll remount it on future edits.
                        failedRoots.add(root);
                        else helpersByRoot.delete(root);
                    } else if (!wasMounted && !isMounted) {
                        if (didError) // We'll remount it on future edits.
                        failedRoots.add(root);
                    }
                } else // Mount a new root.
                mountedRoots.add(root);
            } // Always call the decorated DevTools hook.
            return oldOnCommitFiberRoot.apply(this, arguments);
        };
    }
    function hasUnrecoverableErrors() {
        // TODO: delete this after removing dependency in RN.
        return false;
    } // Exposed for testing.
    function _getMountedRootCount() {
        return mountedRoots.size;
    } // This is a wrapper over more primitive functions for setting signature.
    // Signatures let us decide whether the Hook order has changed on refresh.
    //
    // This function is intended to be used as a transform target, e.g.:
    // var _s = createSignatureFunctionForTransform()
    //
    // function Hello() {
    //   const [foo, setFoo] = useState(0);
    //   const value = useCustomHook();
    //   _s(); /* Call without arguments triggers collecting the custom Hook list.
    //          * This doesn't happen during the module evaluation because we
    //          * don't want to change the module order with inline requires.
    //          * Next calls are noops. */
    //   return <h1>Hi</h1>;
    // }
    //
    // /* Call with arguments attaches the signature to the type: */
    // _s(
    //   Hello,
    //   'useState{[foo, setFoo]}(0)',
    //   () => [useCustomHook], /* Lazy to avoid triggering inline requires */
    // );
    function createSignatureFunctionForTransform() {
        var savedType;
        var hasCustomHooks;
        var didCollectHooks = false;
        return function(type, key, forceReset, getCustomHooks) {
            if (typeof key === 'string') {
                // We're in the initial phase that associates signatures
                // with the functions. Note this may be called multiple times
                // in HOC chains like _s(hoc1(_s(hoc2(_s(actualFunction))))).
                if (!savedType) {
                    // We're in the innermost call, so this is the actual type.
                    savedType = type;
                    hasCustomHooks = typeof getCustomHooks === 'function';
                } // Set the signature for all types (even wrappers!) in case
                // they have no signatures of their own. This is to prevent
                // problems like https://github.com/facebook/react/issues/20417.
                if (type != null && (typeof type === 'function' || typeof type === 'object')) setSignature(type, key, forceReset, getCustomHooks);
                return type;
            } else // We're in the _s() call without arguments, which means
            // this is the time to collect custom Hook signatures.
            // Only do this once. This path is hot and runs *inside* every render!
            if (!didCollectHooks && hasCustomHooks) {
                didCollectHooks = true;
                collectCustomHooksForSignature(savedType);
            }
        };
    }
    function isLikelyComponentType(type) {
        switch(typeof type){
            case 'function':
                // First, deal with classes.
                if (type.prototype != null) {
                    if (type.prototype.isReactComponent) // React class.
                    return true;
                    var ownNames = Object.getOwnPropertyNames(type.prototype);
                    if (ownNames.length > 1 || ownNames[0] !== 'constructor') // This looks like a class.
                    return false;
                     // eslint-disable-next-line no-proto
                    if (type.prototype.__proto__ !== Object.prototype) // It has a superclass.
                    return false;
                     // Pass through.
                // This looks like a regular function with empty prototype.
                } // For plain functions and arrows, use name as a heuristic.
                var name = type.name || type.displayName;
                return typeof name === 'string' && /^[A-Z]/.test(name);
            case 'object':
                if (type != null) switch(getProperty(type, '$$typeof')){
                    case REACT_FORWARD_REF_TYPE:
                    case REACT_MEMO_TYPE:
                        // Definitely React components.
                        return true;
                    default:
                        return false;
                }
                return false;
            default:
                return false;
        }
    }
    exports._getMountedRootCount = _getMountedRootCount;
    exports.collectCustomHooksForSignature = collectCustomHooksForSignature;
    exports.createSignatureFunctionForTransform = createSignatureFunctionForTransform;
    exports.findAffectedHostInstances = findAffectedHostInstances;
    exports.getFamilyByID = getFamilyByID;
    exports.getFamilyByType = getFamilyByType;
    exports.hasUnrecoverableErrors = hasUnrecoverableErrors;
    exports.injectIntoGlobalHook = injectIntoGlobalHook;
    exports.isLikelyComponentType = isLikelyComponentType;
    exports.performReactRefresh = performReactRefresh;
    exports.register = register;
    exports.setSignature = setSignature;
})();

},{}],"4SQxb":[function(require,module,exports,__globalThis) {
module.exports = JSON.parse("{\"name\":\"react-refresh\",\"description\":\"React is a JavaScript library for building user interfaces.\",\"keywords\":[\"react\"],\"version\":\"0.14.2\",\"homepage\":\"https://reactjs.org/\",\"bugs\":\"https://github.com/facebook/react/issues\",\"license\":\"MIT\",\"files\":[\"LICENSE\",\"README.md\",\"babel.js\",\"runtime.js\",\"cjs/\",\"umd/\"],\"main\":\"runtime.js\",\"exports\":{\".\":\"./runtime.js\",\"./runtime\":\"./runtime.js\",\"./babel\":\"./babel.js\",\"./package.json\":\"./package.json\"},\"repository\":{\"type\":\"git\",\"url\":\"https://github.com/facebook/react.git\",\"directory\":\"packages/react\"},\"engines\":{\"node\":\">=0.10.0\"},\"devDependencies\":{\"react-16-8\":\"npm:react@16.8.0\",\"react-dom-16-8\":\"npm:react-dom@16.8.0\",\"scheduler-0-13\":\"npm:scheduler@0.13.0\"}}");

},{}]},["7qMjn","d8Dch"], "d8Dch", "parcelRequire94c2")

//# sourceMappingURL=index.b4b6dfad.js.map
