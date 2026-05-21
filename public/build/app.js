(self["webpackChunk"] = self["webpackChunk"] || []).push([["app"],{

/***/ "./assets/app.js"
/*!***********************!*\
  !*** ./assets/app.js ***!
  \***********************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableLeafletDebug: () => (/* binding */ enableLeafletDebug)
/* harmony export */ });
/* harmony import */ var _fortawesome_fontawesome_free_css_all_min_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.min.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.min.css");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @fortawesome/fontawesome-free/js/all.js */ "./node_modules/@fortawesome/fontawesome-free/js/all.js");
/* harmony import */ var _fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_js_all_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/app.scss */ "./assets/styles/app.scss");
/* harmony import */ var _scripts_Layout_dropdown_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./scripts/Layout/dropdown.js */ "./assets/scripts/Layout/dropdown.js");
/* harmony import */ var _scripts_Layout_dropdown_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_scripts_Layout_dropdown_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _scripts_Security_form_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./scripts/Security/form.js */ "./assets/scripts/Security/form.js");
/* harmony import */ var _scripts_Security_form_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scripts_Security_form_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _scripts_Security_remember_me_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./scripts/Security/remember_me.js */ "./assets/scripts/Security/remember_me.js");
/* harmony import */ var _scripts_Security_remember_me_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_scripts_Security_remember_me_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scripts_Security_reset_btn_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scripts/Security/reset-btn.js */ "./assets/scripts/Security/reset-btn.js");
/* harmony import */ var _scripts_Security_reset_btn_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_scripts_Security_reset_btn_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var _scripts_Game_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./scripts/Game/map.js */ "./assets/scripts/Game/map.js");
/* harmony import */ var _scripts_Game_gps_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./scripts/Game/gps.js */ "./assets/scripts/Game/gps.js");
/* harmony import */ var _scripts_Game_base_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./scripts/Game/base.js */ "./assets/scripts/Game/base.js");
/* harmony import */ var _scripts_Game_building_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./scripts/Game/building.js */ "./assets/scripts/Game/building.js");


/*
 * Welcome to your app's main JavaScript file!
 *
 * This file will be included onto the page via the importmap() Twig function,
 * which should already be in your base.html.twig.
 */










document.addEventListener('DOMContentLoaded', function () {
  enableLeafletDebug(false);
  var defaultLat = 46.53972;
  var defaultLng = 2.43028;
  (0,_scripts_Game_map_js__WEBPACK_IMPORTED_MODULE_8__.initMap)(defaultLat, defaultLng);
  (0,_scripts_Game_base_js__WEBPACK_IMPORTED_MODULE_10__.initBaseUI)();
  (0,_scripts_Game_map_js__WEBPACK_IMPORTED_MODULE_8__.loadWorld)();
  (0,_scripts_Game_building_js__WEBPACK_IMPORTED_MODULE_11__.loadBuildings)();
});
function enableLeafletDebug() {
  var debug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  if (!debug) return;
  var originalMarker = L.marker;
  var originalCircle = L.circle;
  var originalPolyline = L.polyline;
  L.marker = function () {
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    console.log("🧨 MARKER CALL:", args);
    console.trace("MARKER STACK");
    return originalMarker.apply(this, args);
  };
  L.circle = function () {
    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }
    console.log("🧨 CIRCLE CALL:", args);
    console.trace("CIRCLE STACK");
    return originalCircle.apply(this, args);
  };
  L.polyline = function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }
    console.log("🧨 POLYLINE CALL:", args);
    console.trace("POLYLINE STACK");
    return originalPolyline.apply(this, args);
  };
}
console.log('This log comes from assets/app.js - welcome to AssetMapper! 🎉');

/***/ },

/***/ "./assets/scripts/Game/Config/chunk.js"
/*!*********************************************!*\
  !*** ./assets/scripts/Game/Config/chunk.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHUNK_RADIUS: () => (/* binding */ CHUNK_RADIUS),
/* harmony export */   CHUNK_SIZE: () => (/* binding */ CHUNK_SIZE)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../map.js */ "./assets/scripts/Game/map.js");
/* harmony import */ var _Roads_roads_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../Roads/roads.js */ "./assets/scripts/Game/Roads/roads.js");
/* harmony import */ var _Roads_invalidateChunk_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../Roads/invalidateChunk.js */ "./assets/scripts/Game/Roads/invalidateChunk.js");
/* harmony import */ var _debug_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./debug.js */ "./assets/scripts/Game/Config/debug.js");
/* harmony import */ var _Utils_snap_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../Utils/snap.js */ "./assets/scripts/Game/Utils/snap.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }














function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }





var CHUNK_SIZE = 0.01;
var CHUNK_RADIUS = 1;
document.getElementById('requestApiRoadsAndChunksBtn').addEventListener('click', function () {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_14__.getMap)();
  map.getContainer().style.cursor = 'crosshair';
  alert("Clique sur la carte pour faire une requete api pour ajouter un chunk de routes (0.01° x 0.01°).");
  map.once('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var _e$latlng, lat, lng, snapped, _t;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.p = _context.n) {
          case 0:
            _e$latlng = e.latlng, lat = _e$latlng.lat, lng = _e$latlng.lng;
            snapped = (0,_Utils_snap_js__WEBPACK_IMPORTED_MODULE_18__.snapToChunk)(lat, lng);
            (0,_debug_js__WEBPACK_IMPORTED_MODULE_17__.debugLog)("network", "📡 adding roads chunk:", snapped.chunkId);
            _context.p = 1;
            _context.n = 2;
            return fetch('/api/add-roads-chunk', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json'
              },
              body: JSON.stringify({
                lat: snapped.lat,
                lng: snapped.lng
              })
            });
          case 2:
            (0,_Roads_roads_js__WEBPACK_IMPORTED_MODULE_15__.refreshChunk)(snapped.lat, snapped.lng);
            (0,_debug_js__WEBPACK_IMPORTED_MODULE_17__.debugLog)("chunks", "🔄 chunk refreshed:", snapped.chunkId);
            _context.n = 4;
            break;
          case 3:
            _context.p = 3;
            _t = _context.v;
            (0,_debug_js__WEBPACK_IMPORTED_MODULE_17__.debugError)("network", "failed to add roads chunk", _t);
          case 4:
            map.getContainer().style.cursor = '';
          case 5:
            return _context.a(2);
        }
      }, _callee, null, [[1, 3]]);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());
});

/***/ },

/***/ "./assets/scripts/Game/Config/debug.js"
/*!*********************************************!*\
  !*** ./assets/scripts/Game/Config/debug.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DEBUG: () => (/* binding */ DEBUG),
/* harmony export */   debugError: () => (/* binding */ debugError),
/* harmony export */   debugLog: () => (/* binding */ debugLog)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _typeMap_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./typeMap.js */ "./assets/scripts/Game/Config/typeMap.js");


var DEBUG = {
  enabled: true,
  chunks: true,
  network: true,
  cache: true
};
function debugLog(type) {
  var _console2;
  if (!DEBUG.enabled) return;
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }
  if (!type) {
    var _console;
    (_console = console).log.apply(_console, args);
    return;
  }
  if (DEBUG[type] === false) return;
  (_console2 = console).log.apply(_console2, ["[".concat(type, "]")].concat(args));
}
function debugError(type) {
  var _console3;
  if (!DEBUG.enabled) return;
  var key = (_typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP === null || _typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP === void 0 ? void 0 : _typeMap_js__WEBPACK_IMPORTED_MODULE_1__.TYPE_MAP[type]) || type;
  if (DEBUG[key] === false) return;
  for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }
  (_console3 = console).error.apply(_console3, ["[".concat(key, "]")].concat(args));
}

/***/ },

/***/ "./assets/scripts/Game/Config/typeMap.js"
/*!***********************************************!*\
  !*** ./assets/scripts/Game/Config/typeMap.js ***!
  \***********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TYPE_MAP: () => (/* binding */ TYPE_MAP)
/* harmony export */ });
var TYPE_MAP = {
  ROAD: "road",
  CHUNK: "chunk",
  BUILDING: "building"
};

/***/ },

/***/ "./assets/scripts/Game/Layers/gridLayer.js"
/*!*************************************************!*\
  !*** ./assets/scripts/Game/Layers/gridLayer.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   gridLayer: () => (/* binding */ gridLayer),
/* harmony export */   initGridLayer: () => (/* binding */ initGridLayer),
/* harmony export */   setChunkColor: () => (/* binding */ setChunkColor)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var _Config_debug_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../Config/debug.js */ "./assets/scripts/Game/Config/debug.js");
/* harmony import */ var _Config_chunk_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../Config/chunk.js */ "./assets/scripts/Game/Config/chunk.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../map.js */ "./assets/scripts/Game/map.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
































var gridLayer = leaflet__WEBPACK_IMPORTED_MODULE_28___default().layerGroup();
var visibleChunks = new Map();
function initGridLayer() {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_31__.getMap)();
  if (!map) return;
  if (!(0,_map_js__WEBPACK_IMPORTED_MODULE_31__.isGridLayerActive)()) return;
  var zoom = map.getZoom();
  if (zoom < 14) return;
  var bounds = map.getBounds();
  var minLat = Math.floor(bounds.getSouth() / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE);
  var maxLat = Math.ceil(bounds.getNorth() / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE);
  var minLng = Math.floor(bounds.getWest() / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE);
  var maxLng = Math.ceil(bounds.getEast() / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE);
  var newVisible = new Set();
  for (var i = minLat; i < maxLat; i++) {
    var _loop = function _loop() {
      var id = "".concat(i, "_").concat(j);
      newVisible.add(id);
      if (visibleChunks.has(id)) return 1; // continue
      var lat = i * _Config_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE;
      var lng = j * _Config_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE;
      var rect = leaflet__WEBPACK_IMPORTED_MODULE_28___default().rectangle([[lat, lng], [lat + _Config_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE, lng + _Config_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE]], {
        color: "orange",
        weight: 1,
        fillOpacity: 0.15
      });
      rect.on('mouseover', function () {
        return rect.setStyle({
          fillOpacity: 0.3
        });
      });
      rect.on('mouseout', function () {
        return rect.setStyle({
          fillOpacity: 0.15
        });
      });
      gridLayer.addLayer(rect);
      visibleChunks.set(id, rect);
    };
    for (var j = minLng; j < maxLng; j++) {
      if (_loop()) continue;
    }
  }

  // 🧹 remove ceux hors écran
  var _iterator = _createForOfIteratorHelper(visibleChunks.entries()),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var _step$value = _slicedToArray(_step.value, 2),
        id = _step$value[0],
        rect = _step$value[1];
      if (!newVisible.has(id)) {
        gridLayer.removeLayer(rect);
        visibleChunks["delete"](id);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
  (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_29__.debugLog)("chunks", "Chunks visibles:", visibleChunks.size);
}

// ==========================
// CHUNK COLOR
// ==========================
function setChunkColor(id, color) {
  if (!(0,_map_js__WEBPACK_IMPORTED_MODULE_31__.isGridLayerActive)()) return;
  var rect = visibleChunks.get(id);
  if (!rect) return;
  rect.setStyle({
    color: color,
    fillOpacity: 0.2
  });
}

/***/ },

/***/ "./assets/scripts/Game/Roads/invalidateChunk.js"
/*!******************************************************!*\
  !*** ./assets/scripts/Game/Roads/invalidateChunk.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   invalidateChunk: () => (/* binding */ invalidateChunk)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _roadsState_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roadsState.js */ "./assets/scripts/Game/Roads/roadsState.js");
/* harmony import */ var _Config_debug_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Config/debug.js */ "./assets/scripts/Game/Config/debug.js");




function invalidateChunk(id) {
  (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_3__.debugLog)("cache", "🧹 invalidate chunk:", id);
  delete _roadsState_js__WEBPACK_IMPORTED_MODULE_2__.roadsState.chunks[id];
  localStorage.removeItem("chunk_".concat(id));
}

/***/ },

/***/ "./assets/scripts/Game/Roads/roadUtils.js"
/*!************************************************!*\
  !*** ./assets/scripts/Game/Roads/roadUtils.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   debugRoads: () => (/* binding */ debugRoads),
/* harmony export */   distanceToSegment: () => (/* binding */ distanceToSegment),
/* harmony export */   findClosestPointOnRoad: () => (/* binding */ findClosestPointOnRoad),
/* harmony export */   findClosestSegment: () => (/* binding */ findClosestSegment),
/* harmony export */   projectPointOnSegment: () => (/* binding */ projectPointOnSegment)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../map.js */ "./assets/scripts/Game/map.js");









/**
 * Trouve le point le plus proche sur toutes les routes
 */
function findClosestPointOnRoad(latlng, roads) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_7__.getMap)();
  var bestPoint = null;
  var bestDistance = Infinity;
  if (!Array.isArray(roads)) return {
    point: null,
    distance: Infinity
  };
  roads.forEach(function (road) {
    if (!Array.isArray(road.points)) return;
    if (road.points.length < 2) return;
    for (var i = 0; i < road.points.length - 1; i++) {
      var aRaw = road.points[i];
      var bRaw = road.points[i + 1];
      if (!aRaw || !bRaw) {
        console.warn("BROKEN ROAD SEGMENT:", road);
      }
      if (aRaw.length < 2 || bRaw.length < 2) continue;
      var a = leaflet__WEBPACK_IMPORTED_MODULE_6___default().latLng(aRaw[0], aRaw[1]);
      var b = leaflet__WEBPACK_IMPORTED_MODULE_6___default().latLng(bRaw[0], bRaw[1]);
      var projected = projectPointOnSegment(latlng, a, b);
      var dist = map.distance(latlng, projected);
      if (dist < bestDistance) {
        bestDistance = dist;
        bestPoint = projected;
      }
    }
  });
  return {
    point: bestPoint,
    distance: bestDistance
  };
}

/**
 * Trouve le segment le plus proche (pour highlight visuel)
 */
function findClosestSegment(latlng, roads) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_7__.getMap)();
  var bestSegment = null;
  var bestDistance = Infinity;
  if (!Array.isArray(roads)) return null;
  roads.forEach(function (road) {
    if (!Array.isArray(road.points)) return;
    for (var i = 0; i < road.points.length - 1; i++) {
      var aRaw = road.points[i];
      var bRaw = road.points[i + 1];
      if (!aRaw || !bRaw) continue;
      if (aRaw.length < 2 || bRaw.length < 2) continue;
      var a = leaflet__WEBPACK_IMPORTED_MODULE_6___default().latLng(aRaw[0], aRaw[1]);
      var b = leaflet__WEBPACK_IMPORTED_MODULE_6___default().latLng(bRaw[0], bRaw[1]);
      var mid = leaflet__WEBPACK_IMPORTED_MODULE_6___default().latLng((a.lat + b.lat) / 2, (a.lng + b.lng) / 2);
      var dist = map.distance(latlng, mid);
      if (dist < bestDistance) {
        bestDistance = dist;
        bestSegment = [a, b];
      }
    }
  });
  return bestSegment;
}

/**
 * Projection d'un point sur un segment (A-B)
 * math stable pour snap routes
 */
function projectPointOnSegment(p, a, b) {
  var A = [a.lat, a.lng];
  var B = [b.lat, b.lng];
  var P = [p.lat, p.lng];
  var AB = [B[0] - A[0], B[1] - A[1]];
  var AP = [P[0] - A[0], P[1] - A[1]];
  var ab2 = AB[0] * AB[0] + AB[1] * AB[1];
  if (ab2 === 0) return a;
  var t = (AP[0] * AB[0] + AP[1] * AB[1]) / ab2;
  t = Math.max(0, Math.min(1, t));
  return leaflet__WEBPACK_IMPORTED_MODULE_6___default().latLng(A[0] + AB[0] * t, A[1] + AB[1] * t);
}

/**
 * Distance point -> segment (utile validation future)
 */
function distanceToSegment(p, a, b) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_7__.getMap)();
  var projected = projectPointOnSegment(p, a, b);
  return map.distance(p, projected);
}

/**
 * Check simple debug roads
 */
function debugRoads(roads) {
  console.log("ROADS DEBUG:", roads.length, roads);
}

/***/ },

/***/ "./assets/scripts/Game/Roads/roads.js"
/*!********************************************!*\
  !*** ./assets/scripts/Game/Roads/roads.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadVisibleRoadChunks: () => (/* binding */ loadVisibleRoadChunks),
/* harmony export */   refreshChunk: () => (/* binding */ refreshChunk)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.symbol.iterator.js */ "./node_modules/core-js/modules/es.symbol.iterator.js");
/* harmony import */ var core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_iterator_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ../map.js */ "./assets/scripts/Game/map.js");
/* harmony import */ var _Config_chunk_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ../Config/chunk.js */ "./assets/scripts/Game/Config/chunk.js");
/* harmony import */ var _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ../Layers/gridLayer.js */ "./assets/scripts/Game/Layers/gridLayer.js");
/* harmony import */ var _invalidateChunk_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./invalidateChunk.js */ "./assets/scripts/Game/Roads/invalidateChunk.js");
/* harmony import */ var _Config_debug_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ../Config/debug.js */ "./assets/scripts/Game/Config/debug.js");
/* harmony import */ var _roadsState_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./roadsState.js */ "./assets/scripts/Game/Roads/roadsState.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }















































// ==========================
// LOAD CONTROL
// ==========================
var loadingQueue = new Set();
var MAX_CONCURRENT = 4;
var activeRequests = 0;

// ==========================
// CHUNK ID
// ==========================
function getChunkId(lat, lng) {
  var x = Math.floor(lat / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_41__.CHUNK_SIZE);
  var y = Math.floor(lng / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_41__.CHUNK_SIZE);
  return "".concat(x, "_").concat(y);
}

// ==========================
// MAIN LOAD VISIBLE
// ==========================
function loadVisibleRoadChunks() {
  return _loadVisibleRoadChunks.apply(this, arguments);
}

// ==========================
// REFRESH CHUNK COLORS
// ==========================
function _loadVisibleRoadChunks() {
  _loadVisibleRoadChunks = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee() {
    var map, bounds, visibleChunks, chunksToLoad, _iterator2, _step2, _chunkId2, response, data, _iterator3, _step3, chunkId, chunkData, hasRoads, _iterator4, _step4, _chunkId, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          map = (0,_map_js__WEBPACK_IMPORTED_MODULE_40__.getMap)();
          if (!(!map || map.getZoom() < 14)) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          bounds = map.getBounds();
          visibleChunks = getVisibleChunks(bounds);
          chunksToLoad = visibleChunks.filter(function (chunkId) {
            return !_roadsState_js__WEBPACK_IMPORTED_MODULE_45__.roadsState.loadedChunks.has(chunkId);
          }); // ==========================
          // ETAT LOADING
          // ==========================
          _iterator2 = _createForOfIteratorHelper(chunksToLoad);
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _chunkId2 = _step2.value;
              _roadsState_js__WEBPACK_IMPORTED_MODULE_45__.roadsState.chunks[_chunkId2] = {
                status: 'loading',
                roads: [],
                buildings: []
              };
              (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(_chunkId2, 'orange');
            }

            // rien à charger
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          if (!(chunksToLoad.length === 0)) {
            _context.n = 2;
            break;
          }
          refreshChunkColors(visibleChunks);
          return _context.a(2);
        case 2:
          _context.p = 2;
          _context.n = 3;
          return fetch('/api/chunks/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: chunksToLoad
            })
          });
        case 3:
          response = _context.v;
          _context.n = 4;
          return response.json();
        case 4:
          data = _context.v;
          // ==========================
          // TRAITEMENT CHUNKS
          // ==========================
          _iterator3 = _createForOfIteratorHelper(chunksToLoad);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              chunkId = _step3.value;
              chunkData = data[chunkId] || {
                roads: [],
                buildings: []
              };
              hasRoads = chunkData.roads && chunkData.roads.length > 0;
              _roadsState_js__WEBPACK_IMPORTED_MODULE_45__.roadsState.chunks[chunkId] = {
                status: hasRoads ? 'loaded' : 'empty',
                roads: chunkData.roads || [],
                buildings: chunkData.buildings || [],
                hasRoads: hasRoads
              };
              _roadsState_js__WEBPACK_IMPORTED_MODULE_45__.roadsState.loadedChunks.add(chunkId);

              // ==========================
              // DRAW ROADS
              // ==========================

              // chunkData.roads.forEach(road => {
              //     drawRoad(road);
              // });

              // ==========================
              // DRAW BUILDINGS
              // ==========================

              // chunkData.buildings.forEach(building => {
              //     drawBuilding(building);
              // });

              // ==========================
              // COULEUR CHUNK
              // ==========================

              (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(chunkId, hasRoads ? 'blue' : '#444');
              (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_44__.debugLog)("roads", "Chunk ".concat(chunkId, " loaded (").concat(chunkData.roads.length, " roads)"));
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
          _context.n = 6;
          break;
        case 5:
          _context.p = 5;
          _t = _context.v;
          console.error("Erreur chargement chunks bulk:", _t);

          // ==========================
          // ETAT ERREUR
          // ==========================
          _iterator4 = _createForOfIteratorHelper(chunksToLoad);
          try {
            for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
              _chunkId = _step4.value;
              _roadsState_js__WEBPACK_IMPORTED_MODULE_45__.roadsState.chunks[_chunkId] = {
                status: 'error',
                roads: [],
                buildings: []
              };
              (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(_chunkId, 'red');
            }
          } catch (err) {
            _iterator4.e(err);
          } finally {
            _iterator4.f();
          }
        case 6:
          // ==========================
          // REFRESH VISUEL FINAL
          // ==========================

          refreshChunkColors(visibleChunks);
        case 7:
          return _context.a(2);
      }
    }, _callee, null, [[2, 5]]);
  }));
  return _loadVisibleRoadChunks.apply(this, arguments);
}
function refreshChunkColors(visibleChunks) {
  var _iterator = _createForOfIteratorHelper(visibleChunks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var chunkId = _step.value;
      var chunk = _roadsState_js__WEBPACK_IMPORTED_MODULE_45__.roadsState.chunks[chunkId];
      if (!chunk) {
        (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(chunkId, 'orange');
        continue;
      }
      switch (chunk.status) {
        case 'loaded':
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(chunkId, 'blue');
          break;
        case 'empty':
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(chunkId, '#444');
          break;
        case 'loading':
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(chunkId, 'orange');
          break;
        case 'error':
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(chunkId, 'red');
          break;
        default:
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(chunkId, 'yellow');
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
}

// ==========================
// REFRESH CHUNK
// ==========================
function refreshChunk(_x, _x2) {
  return _refreshChunk.apply(this, arguments);
}

// ==========================
// FETCH SINGLE CHUNK
// ==========================
function _refreshChunk() {
  _refreshChunk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(lat, lng) {
    var chunkId;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.n) {
        case 0:
          chunkId = getChunkId(lat, lng);
          (0,_invalidateChunk_js__WEBPACK_IMPORTED_MODULE_43__.invalidateChunk)(chunkId);
          _roadsState_js__WEBPACK_IMPORTED_MODULE_45__.roadsState.loadedChunks["delete"](chunkId);
          _context2.n = 1;
          return fetchSingleChunk(chunkId);
        case 1:
          return _context2.a(2);
      }
    }, _callee2);
  }));
  return _refreshChunk.apply(this, arguments);
}
function fetchSingleChunk(_x3) {
  return _fetchSingleChunk.apply(this, arguments);
}
function _fetchSingleChunk() {
  _fetchSingleChunk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(chunkId) {
    var response, data, chunkData, hasRoads, _t2;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_45__.roadsState.chunks[chunkId] = {
            status: 'loading',
            roads: [],
            buildings: []
          };
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(chunkId, 'orange');
          _context3.n = 1;
          return fetch('/api/chunks/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: [chunkId]
            })
          });
        case 1:
          response = _context3.v;
          if (response.ok) {
            _context3.n = 2;
            break;
          }
          _roadsState_js__WEBPACK_IMPORTED_MODULE_45__.roadsState.chunks[chunkId].status = 'error';
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(chunkId, 'red');
          return _context3.a(2);
        case 2:
          _context3.n = 3;
          return response.json();
        case 3:
          data = _context3.v;
          chunkData = data[chunkId] || {
            roads: [],
            buildings: []
          };
          hasRoads = chunkData.roads && chunkData.roads.length > 0;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_45__.roadsState.chunks[chunkId] = {
            status: hasRoads ? 'loaded' : 'empty',
            roads: chunkData.roads || [],
            buildings: chunkData.buildings || [],
            hasRoads: hasRoads
          };

          // ==========================
          // CACHE
          // ==========================

          localStorage.setItem("chunk_".concat(chunkId), JSON.stringify({
            roads: chunkData.roads || [],
            buildings: chunkData.buildings || [],
            hasRoads: hasRoads,
            ts: Date.now()
          }));

          // ==========================
          // DRAW
          // ==========================

          // redraw roads
          // clearChunkRoads(chunkId);

          // chunkData.roads.forEach(road => {
          //     drawRoad(road);
          // });

          // redraw buildings
          // clearChunkBuildings(chunkId);

          // chunkData.buildings.forEach(building => {
          //     drawBuilding(building);
          // });

          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(chunkId, hasRoads ? 'blue' : '#444');
          (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_44__.debugLog)("[CHUNK REFRESH]", chunkId, chunkData.roads.length);
          _context3.n = 5;
          break;
        case 4:
          _context3.p = 4;
          _t2 = _context3.v;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_45__.roadsState.chunks[chunkId] = {
            status: 'error',
            roads: [],
            buildings: []
          };
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_42__.setChunkColor)(chunkId, 'red');
          (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_44__.debugError)("[CHUNK REFRESH ERROR]", chunkId, _t2);
        case 5:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 4]]);
  }));
  return _fetchSingleChunk.apply(this, arguments);
}
function getVisibleChunks(bounds) {
  var minX = Math.floor(bounds.getSouth() / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_41__.CHUNK_SIZE);
  var maxX = Math.floor(bounds.getNorth() / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_41__.CHUNK_SIZE);
  var minY = Math.floor(bounds.getWest() / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_41__.CHUNK_SIZE);
  var maxY = Math.floor(bounds.getEast() / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_41__.CHUNK_SIZE);
  var chunkId = [];
  for (var x = minX; x <= maxX; x++) {
    for (var y = minY; y <= maxY; y++) {
      chunkId.push("".concat(x, "_").concat(y));
    }
  }
  return chunkId;
}

/***/ },

/***/ "./assets/scripts/Game/Roads/roadsState.js"
/*!*************************************************!*\
  !*** ./assets/scripts/Game/Roads/roadsState.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAllLoadedRoads: () => (/* binding */ getAllLoadedRoads),
/* harmony export */   markRoadCacheDirty: () => (/* binding */ markRoadCacheDirty),
/* harmony export */   roadsState: () => (/* binding */ roadsState)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.filter.js */ "./node_modules/core-js/modules/es.array.filter.js");
/* harmony import */ var core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_filter_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.flat-map.js */ "./node_modules/core-js/modules/es.array.flat-map.js");
/* harmony import */ var core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_flat_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.unscopables.flat-map.js */ "./node_modules/core-js/modules/es.array.unscopables.flat-map.js");
/* harmony import */ var core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_unscopables_flat_map_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.object.values.js */ "./node_modules/core-js/modules/es.object.values.js");
/* harmony import */ var core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_values_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_iterator_flat_map_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/esnext.iterator.flat-map.js */ "./node_modules/core-js/modules/esnext.iterator.flat-map.js");
/* harmony import */ var core_js_modules_esnext_iterator_flat_map_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_flat_map_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_19__);




















var roadsState = {
  chunks: {},
  loadedChunks: new Set(),
  roadsReady: false,
  drawnRoads: [],
  visibleChunks: new Set(),
  roadLayers: {},
  buildingLayers: {}
};
var cachedRoads = [];
var cacheDirty = true;
function markRoadCacheDirty() {
  cacheDirty = true;
}
function getAllLoadedRoads() {
  if (!(roadsState !== null && roadsState !== void 0 && roadsState.chunks)) return [];
  if (!cacheDirty) return cachedRoads;
  cachedRoads = Object.values(roadsState.chunks).filter(function (c) {
    return (c === null || c === void 0 ? void 0 : c.status) === 'loaded' && Array.isArray(c.roads);
  }).flatMap(function (c) {
    return c.roads;
  });
  cacheDirty = false;
  return cachedRoads;
}

/***/ },

/***/ "./assets/scripts/Game/Ui/notification.js"
/*!************************************************!*\
  !*** ./assets/scripts/Game/Ui/notification.js ***!
  \************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   showNotification: () => (/* binding */ showNotification)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);

function showNotification(message) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'info';
  var notif = document.createElement('div');
  notif.className = "notif notif-".concat(type);
  notif.textContent = message;
  document.body.appendChild(notif);
  setTimeout(function () {
    notif.remove();
  }, 3000);
}

/***/ },

/***/ "./assets/scripts/Game/Utils/snap.js"
/*!*******************************************!*\
  !*** ./assets/scripts/Game/Utils/snap.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   snapToChunk: () => (/* binding */ snapToChunk)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Config_chunk_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Config/chunk.js */ "./assets/scripts/Game/Config/chunk.js");


function snapToChunk(lat, lng) {
  var x = Math.floor(lat / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_1__.CHUNK_SIZE);
  var y = Math.floor(lng / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_1__.CHUNK_SIZE);
  return {
    lat: x * _Config_chunk_js__WEBPACK_IMPORTED_MODULE_1__.CHUNK_SIZE,
    lng: y * _Config_chunk_js__WEBPACK_IMPORTED_MODULE_1__.CHUNK_SIZE,
    chunkId: "".concat(x, "_").concat(y)
  };
}

/***/ },

/***/ "./assets/scripts/Game/api.js"
/*!************************************!*\
  !*** ./assets/scripts/Game/api.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildRequest: () => (/* binding */ buildRequest),
/* harmony export */   getBuildings: () => (/* binding */ getBuildings)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);




function buildRequest(lat, lng, typeId) {
  return fetch('/api/build', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      lat: lat,
      lng: lng,
      type_id: typeId
    })
  });
}
function getBuildings() {
  return fetch('/api/map-data').then(function (res) {
    return res.json();
  });
}

/***/ },

/***/ "./assets/scripts/Game/base.js"
/*!*************************************!*\
  !*** ./assets/scripts/Game/base.js ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initBaseUI: () => (/* binding */ initBaseUI),
/* harmony export */   loadBaseFromServer: () => (/* binding */ loadBaseFromServer),
/* harmony export */   loadOtherBase: () => (/* binding */ loadOtherBase)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.every.js */ "./node_modules/core-js/modules/es.array.every.js");
/* harmony import */ var core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_every_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "./node_modules/core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map.js */ "./assets/scripts/Game/map.js");
/* harmony import */ var _Roads_roadsState_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Roads/roadsState.js */ "./assets/scripts/Game/Roads/roadsState.js");
/* harmony import */ var _Config_chunk_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Config/chunk.js */ "./assets/scripts/Game/Config/chunk.js");
/* harmony import */ var _Roads_roads_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Roads/roads.js */ "./assets/scripts/Game/Roads/roads.js");
/* harmony import */ var _Roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Roads/roadUtils.js */ "./assets/scripts/Game/Roads/roadUtils.js");
/* harmony import */ var _Ui_notification_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Ui/notification.js */ "./assets/scripts/Game/Ui/notification.js");


















// =======================
// 🧠 STATE
// =======================
var baseMarker = null;
var baseCircle = null;
var basePosition = null;
var baseCreated = false;
var placingBase = false;
var previewMarker = null;
var previewCircle = null;
var previewSnapLatLng = null;
var previewLine = null;
var highlightedSegment = null;

// =======================
// INIT UI
// =======================
function initBaseUI() {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  var baseBtn = document.getElementById('baseBtn');
  baseBtn.addEventListener('click', function () {
    var mode = baseBtn.dataset.mode;

    // =======================
    // CREATE BASE MODE 
    // =======================
    if (mode === 'create') {
      if (baseCreated) {
        alert("Base déjà créée !");
        return;
      }
      placingBase = true;
      map.getContainer().style.cursor = 'crosshair';
      (0,_Ui_notification_js__WEBPACK_IMPORTED_MODULE_16__.showNotification)("Clique sur la carte pour placer ta base", 'info');
      (0,_Roads_roads_js__WEBPACK_IMPORTED_MODULE_14__.loadVisibleRoadChunks)();
    }

    // =======================
    // RETURN BASE MODE
    // =======================
    if (mode === 'return') {
      if (!basePosition) {
        alert("Aucune base !");
        return;
      }
      (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.flyTo)(basePosition[0], basePosition[1], 16);
    }
  });

  // =======================
  // CLICK MAP
  // =======================
  map.on('click', function () {
    if (!placingBase || baseCreated) return;
    if (!previewSnapLatLng) return;
    var _previewSnapLatLng = previewSnapLatLng,
      lat = _previewSnapLatLng.lat,
      lng = _previewSnapLatLng.lng;
    if (!isBasePlacementValid(lat, lng)) {
      alert("❌ Trop proche d'une base !");
      return;
    }
    cleanupPreview(map);
    createBase(lat, lng);
  });

  // =======================
  // MOUSE MOVE (preview snap road)
  // =======================
  map.on('mousemove', function (e) {
    if (!placingBase) return;
    var roads = (0,_Roads_roadsState_js__WEBPACK_IMPORTED_MODULE_12__.getAllLoadedRoads)();
    if (!roads.length) return;
    var result = (0,_Roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_15__.findClosestPointOnRoad)(e.latlng, roads);
    if (!result.point) return;
    previewSnapLatLng = result.point;
    var isValid = isBasePlacementValid(result.point.lat, result.point.lng);
    cleanupPreview(map);
    var color = isValid ? 'green' : 'red';
    previewCircle = leaflet__WEBPACK_IMPORTED_MODULE_10___default().circle(result.point, {
      radius: 600,
      color: color,
      weight: 2,
      fillOpacity: 0.1
    }).addTo(map);
    previewMarker = leaflet__WEBPACK_IMPORTED_MODULE_10___default().marker(result.point).addTo(map);
    previewLine = leaflet__WEBPACK_IMPORTED_MODULE_10___default().polyline([e.latlng, result.point], {
      color: 'cyan',
      weight: 2,
      opacity: 0.6,
      dashArray: '5, 5'
    }).addTo(map);
    var segment = (0,_Roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_15__.findClosestSegment)(e.latlng, roads);
    if (segment) {
      highlightedSegment = leaflet__WEBPACK_IMPORTED_MODULE_10___default().polyline(segment, {
        color: 'yellow',
        weight: 6,
        opacity: 0.8
      }).addTo(map);
    }
    map.getContainer().style.cursor = 'none';
  });

  // =======================
  // UPDATE VISUAL BASE AND OTHER BASE
  // =======================
  map.on('zoomend', function () {
    updateBaseDisplay();
    updateOtherBases();
  });
}

// =======================
// 🧹 CLEAN PREVIEW
// =======================
function cleanupPreview() {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  previewMarker && map.removeLayer(previewMarker);
  previewCircle && map.removeLayer(previewCircle);
  previewLine && map.removeLayer(previewLine);
  highlightedSegment && map.removeLayer(highlightedSegment);
  previewMarker = null;
  previewCircle = null;
  previewLine = null;
  highlightedSegment = null;
  map.getContainer().style.cursor = '';
}

// =======================
// VALIDATION
// =======================
function isBasePlacementValid(lat, lng) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  return otherBases.every(function (base) {
    var dist = map.distance([lat, lng], [base.lat, base.lng]);
    return dist >= 1100;
  });
}

// =======================
// CREATE BASE
// =======================
function createBase(lat, lng) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  placingBase = false;
  basePosition = [lat, lng];
  (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.flyTo)(lat, lng);
  baseCircle = leaflet__WEBPACK_IMPORTED_MODULE_10___default().circle(basePosition, {
    radius: 500
  }).addTo(map);
  fetch('/api/create-base', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      lat: lat,
      lng: lng
    })
  }).then(function (res) {
    if (!res.ok) throw new Error("API error");
    return res.json();
  }).then(function () {
    baseCreated = true;
  })["catch"](function (err) {
    console.error(err);
    removeBase();
    alert("Erreur création base !");
  });
  map.getContainer().style.cursor = '';
  updateBaseDisplay();
}

// =======================
// CREATE BASE ICON
// =======================
function createBaseIcon(zoom) {
  if (zoom < 13) return null;
  var size = zoom > 15 ? 50 : 30;
  return leaflet__WEBPACK_IMPORTED_MODULE_10___default().icon({
    iconUrl: '/assets/images/building/plan_industry.png',
    iconSize: [size, size],
    // taille de l'image
    iconAnchor: [size / 2, size / 2],
    // centre de l'image sur la position
    popupAnchor: [0, -size / 2] // popup au-dessus
  });
}

// =======================
// UPDATE BASE DISPLAY
// =======================
function updateBaseDisplay() {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  if (!basePosition) return;
  var icon = createBaseIcon(map.getZoom());
  if (!icon) {
    if (baseMarker) map.removeLayer(baseMarker);
    return;
  }
  if (!baseMarker) {
    baseMarker = leaflet__WEBPACK_IMPORTED_MODULE_10___default().marker(basePosition, {
      icon: icon
    }).addTo(map);
  } else {
    if (!map.hasLayer(baseMarker)) baseMarker.addTo(map);
    baseMarker.setIcon(icon);
  }
}

// =======================
// REMOVE BASE
// =======================
function removeBase() {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  baseMarker && map.removeLayer(baseMarker);
  baseCircle && map.removeLayer(baseCircle);
  baseMarker = null;
  baseCircle = null;
  basePosition = null;
  baseCreated = false;
  placingBase = false;
  map.getContainer().style.cursor = '';
}

// =======================
// LOAD OTHER BASE
// =======================
var otherBases = [];
function loadOtherBase(lat, lng, pseudo) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
  var circle = leaflet__WEBPACK_IMPORTED_MODULE_10___default().circle([lat, lng], {
    radius: 500,
    color: 'red'
  }).addTo(map);
  var icon = createBaseIcon(map.getZoom());
  var marker = null;
  if (icon) {
    marker = leaflet__WEBPACK_IMPORTED_MODULE_10___default().marker([lat, lng], {
      icon: icon
    }).addTo(map).bindPopup("\uD83C\uDFD5\uFE0F Base de ".concat(pseudo));
  }
  otherBases.push({
    lat: lat,
    lng: lng,
    pseudo: pseudo,
    marker: marker,
    circle: circle
  });
}

// =======================
// UPDATE OTHER BASE
// =======================
function updateOtherBases() {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  var zoom = map.getZoom();
  otherBases.forEach(function (base) {
    var icon = createBaseIcon(zoom);
    if (!icon) {
      if (base.marker) map.removeLayer(base.marker);
      return;
    }
    if (!base.marker) {
      base.marker = leaflet__WEBPACK_IMPORTED_MODULE_10___default().marker([base.lat, base.lng], {
        icon: icon
      }).addTo(map).bindPopup("\uD83C\uDFD5\uFE0F Base de ".concat(base.pseudo));
      return;
    }
    if (!map.hasLayer(base.marker)) base.marker.addTo(map);
    base.marker.setIcon(icon);
  });
}

// =======================
// LOAD FROM SERVER
// =======================
function loadBaseFromServer(lat, lng) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
  basePosition = [lat, lng];
  baseCreated = true;
  baseCircle = leaflet__WEBPACK_IMPORTED_MODULE_10___default().circle(basePosition, {
    radius: 500
  }).addTo(map);
  updateBaseDisplay();
}

/***/ },

/***/ "./assets/scripts/Game/building.js"
/*!*****************************************!*\
  !*** ./assets/scripts/Game/building.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   loadBuildings: () => (/* binding */ loadBuildings)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "./node_modules/core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./map.js */ "./assets/scripts/Game/map.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./api.js */ "./assets/scripts/Game/api.js");










function loadBuildings() {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_8__.getMap)();
  if (!map) {
    console.error("Map not initialized");
    return;
  }
  (0,_api_js__WEBPACK_IMPORTED_MODULE_9__.getBuildings)().then(function (data) {
    data.forEach(function (b) {
      if (!Number.isFinite(b.lat) || !Number.isFinite(b.lng)) {
        console.warn("❌ Building ignoré (coord invalide)", b);
        return;
      }
      leaflet__WEBPACK_IMPORTED_MODULE_7___default().marker([b.lat, b.lng]).addTo(map).bindPopup("".concat(b.type, " lvl ").concat(b.level));
    });
  });
}

/***/ },

/***/ "./assets/scripts/Game/gps.js"
/*!************************************!*\
  !*** ./assets/scripts/Game/gps.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   initGPS: () => (/* binding */ initGPS)
/* harmony export */ });
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./map.js */ "./assets/scripts/Game/map.js");


function initGPS(defaultLat, defaultLng) {
  if (navigator.geolocation) {
    var gpsFound = false;
    navigator.geolocation.watchPosition(function (position) {
      gpsFound = true;
      (0,_map_js__WEBPACK_IMPORTED_MODULE_1__.flyTo)(position.coords.latitude, position.coords.longitude);
    }, function () {}, {
      timeout: 5000
    });
    setTimeout(function () {
      if (!gpsFound) {
        (0,_map_js__WEBPACK_IMPORTED_MODULE_1__.flyTo)(defaultLat, defaultLng, 7);
      }
    }, 5500);
  }
}

/***/ },

/***/ "./assets/scripts/Game/map.js"
/*!************************************!*\
  !*** ./assets/scripts/Game/map.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   flyTo: () => (/* binding */ flyTo),
/* harmony export */   getMap: () => (/* binding */ getMap),
/* harmony export */   initMap: () => (/* binding */ initMap),
/* harmony export */   isGridLayerActive: () => (/* binding */ isGridLayerActive),
/* harmony export */   loadWorld: () => (/* binding */ loadWorld)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");
/* harmony import */ var _Config_debug_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Config/debug.js */ "./assets/scripts/Game/Config/debug.js");
/* harmony import */ var _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Layers/gridLayer.js */ "./assets/scripts/Game/Layers/gridLayer.js");
/* harmony import */ var _Roads_roads_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Roads/roads.js */ "./assets/scripts/Game/Roads/roads.js");
/* harmony import */ var _Roads_roadsState_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Roads/roadsState.js */ "./assets/scripts/Game/Roads/roadsState.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./base.js */ "./assets/scripts/Game/base.js");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");



















(leaflet__WEBPACK_IMPORTED_MODULE_10___default().Marker).prototype.options.icon = leaflet__WEBPACK_IMPORTED_MODULE_10___default().icon({
  iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_17__,
  shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_18__
});
var mapInstance = null;
var moveTimeout = null;
var isChunkMode = false;
function initMap(lat, lng) {
  mapInstance = leaflet__WEBPACK_IMPORTED_MODULE_10___default().map('map').setView([lat, lng], 7);
  leaflet__WEBPACK_IMPORTED_MODULE_10___default().tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(mapInstance);
  leaflet__WEBPACK_IMPORTED_MODULE_10___default().control.layers(null, {
    "Chunk Grid": _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_13__.gridLayer
  }).addTo(mapInstance);
  leaflet__WEBPACK_IMPORTED_MODULE_10___default().control.layers(null, {
    "eau": _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_13__.gridLayer,
    "fer": _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_13__.gridLayer
  }).addTo(mapInstance);

  // =====================
  // CENTRAL CHUNK CONTROLLER
  // =====================

  mapInstance.on('moveend', function () {
    if (!isChunkMode) return;
    if (mapInstance.getZoom() < 14) return;
    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(function () {
      (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_13__.initGridLayer)();
      (0,_Roads_roads_js__WEBPACK_IMPORTED_MODULE_14__.loadVisibleRoadChunks)();
    }, 300);
  });
  mapInstance.on('overlayadd', function (e) {
    if (e.layer === _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_13__.gridLayer) {
      (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_12__.debugLog)("grid", "Grid ON");
      (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_13__.initGridLayer)();
      (0,_Roads_roads_js__WEBPACK_IMPORTED_MODULE_14__.loadVisibleRoadChunks)();
    }
  });
  mapInstance.on('overlayremove', function (e) {
    if (e.layer === _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_13__.gridLayer) {
      (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_12__.debugLog)("grid", "Grid OFF");
    }
  });

  // =====================
  // EVENTS
  // =====================
  mapInstance.on('zoomend', function () {
    var zoom = mapInstance.getZoom();
    if (zoom >= 14) {
      enterChunkMode();
    } else {
      exitChunkMode();
    }
  });
}
function isGridLayerActive() {
  var _mapInstance;
  return (_mapInstance = mapInstance) === null || _mapInstance === void 0 ? void 0 : _mapInstance.hasLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_13__.gridLayer);
}
function getMap() {
  return mapInstance;
}
function flyTo(lat, lng) {
  var zoom = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 13;
  var map = getMap();
  map.flyTo([lat, lng], zoom, {
    animate: true,
    duration: 1.5
  });
}

// =====================
// WORLD
// =====================
function loadWorld() {
  fetch('/api/world-state').then(function (res) {
    return res.json();
  }).then(function (data) {
    var map = getMap();
    data.buildings.forEach(function (b) {
      leaflet__WEBPACK_IMPORTED_MODULE_10___default().marker([b.lat, b.lng]).addTo(map).bindPopup("".concat(b.type, " lvl ").concat(b.level));
    });
    if (data.bases) {
      var hasCentered = false;
      data.bases.forEach(function (base) {
        if (base.isMe) {
          (0,_base_js__WEBPACK_IMPORTED_MODULE_16__.loadBaseFromServer)(base.lat, base.lng);
          if (!hasCentered) {
            flyTo(base.lat, base.lng, 16);
            hasCentered = true;
          }
          return;
        }
        (0,_base_js__WEBPACK_IMPORTED_MODULE_16__.loadOtherBase)(base.lat, base.lng, base.pseudo);
      });
    }
  })["catch"](function (err) {
    console.error("Erreur load world", err);
  });
}
function enterChunkMode() {
  if (isChunkMode) return;
  isChunkMode = true;
  (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_12__.debugLog)("chunks", "ENTER CHUNK MODE");
  (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_13__.initGridLayer)();
  (0,_Roads_roads_js__WEBPACK_IMPORTED_MODULE_14__.loadVisibleRoadChunks)();
}
function exitChunkMode() {
  if (!isChunkMode) return;
  isChunkMode = false;
  (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_12__.debugLog)("chunks", "EXIT CHUNK MODE");
  if (mapInstance.hasLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_13__.gridLayer)) {
    mapInstance.removeLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_13__.gridLayer);
  }
}

/***/ },

/***/ "./assets/scripts/Layout/dropdown.js"
/*!*******************************************!*\
  !*** ./assets/scripts/Layout/dropdown.js ***!
  \*******************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.some.js */ "./node_modules/core-js/modules/es.array.some.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
function attachHoverDropdown(toggleSelector) {
  var toggles = document.querySelectorAll(toggleSelector);
  toggles.forEach(function (toggle) {
    var targetSelector = toggle.dataset.dropdownTarget;
    if (!targetSelector) return;
    var dropdownContent = document.querySelector(targetSelector);
    if (!dropdownContent) return;
    var hideTimeout = null;
    var isOpen = false;
    var showDropdown = function showDropdown() {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
        hideTimeout = null;
      }
      isOpen = true;
      dropdownContent.style.display = "flex";
      dropdownContent.style.animation = "show-content 0.25s ease forwards";
      toggle.classList.add("dropdown-open");
    };
    var reallyHideDropdown = function reallyHideDropdown() {
      dropdownContent.style.animation = "dont-show-content 0.25s ease forwards";
      var _handler = function handler(event) {
        if (event.animationName === "dont-show-content") {
          dropdownContent.style.display = "none";
          toggle.classList.remove("dropdown-open");
          dropdownContent.removeEventListener("animationend", _handler);
          isOpen = false;
        }
      };
      dropdownContent.addEventListener("animationend", _handler);
    };
    var hideDropdown = function hideDropdown() {
      hideTimeout = setTimeout(reallyHideDropdown, 150);
    };
    var toggleDropdown = function toggleDropdown(event) {
      event.preventDefault();
      event.stopPropagation();
      if (isOpen) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        reallyHideDropdown();
      } else {
        showDropdown();
      }
    };

    // Desktop : hover
    toggle.addEventListener("mouseenter", showDropdown);
    toggle.addEventListener("mouseleave", hideDropdown);
    dropdownContent.addEventListener("mouseenter", showDropdown);
    dropdownContent.addEventListener("mouseleave", hideDropdown);

    // Mobile : click/touch
    toggle.addEventListener("click", toggleDropdown);
    toggle.addEventListener("touchstart", toggleDropdown, {
      passive: false
    });

    // Fermer si on clique ailleurs
    document.addEventListener("click", function (event) {
      if (isOpen && !toggle.contains(event.target) && !dropdownContent.contains(event.target)) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        reallyHideDropdown();
      }
    });
    document.addEventListener("touchstart", function (event) {
      if (isOpen && !toggle.contains(event.target) && !dropdownContent.contains(event.target)) {
        if (hideTimeout) {
          clearTimeout(hideTimeout);
        }
        reallyHideDropdown();
      }
    });
  });
}
function attachNavbarDropdown() {
  var toggle = document.querySelector(".navbar-dropdown-toggle");
  var navbarMenu = document.querySelector(".navbar_menu");
  var navbarContainer = document.querySelector(".dropdown-navbar");
  if (!toggle || !navbarMenu || !navbarContainer) return;
  var targetSelector = toggle.dataset.dropdownTarget;
  if (!targetSelector) return;
  var dropdownContent = document.querySelector(targetSelector);
  if (!dropdownContent) return;
  var regionEls = [toggle, navbarContainer, dropdownContent];
  var hideTimeout = null;
  var isClosing = false;
  var isOpen = false;
  var isInRegion = function isInRegion(el) {
    return regionEls.some(function (node) {
      return node && node.contains(el);
    });
  };
  var showAll = function showAll() {
    if (hideTimeout) {
      clearTimeout(hideTimeout);
      hideTimeout = null;
    }
    isClosing = false;
    isOpen = true;
    dropdownContent.style.display = "flex";
    dropdownContent.style.animation = "show-content 0.25s ease forwards";
    toggle.classList.add("dropdown-open");
    navbarMenu.classList.remove("navbar-menu-anim-show");
    navbarMenu.classList.add("navbar-menu-anim-hide");
    navbarContainer.style.display = "flex";
    navbarContainer.classList.remove("dropdown-navbar-anim-hide");
    navbarContainer.classList.add("dropdown-navbar-anim-show");
  };
  var reallyHideAll = function reallyHideAll() {
    isClosing = true;
    isOpen = false;
    dropdownContent.style.animation = "dont-show-content 0.25s ease forwards";
    var _handler2 = function handler(event) {
      if (event.animationName === "dont-show-content") {
        if (!isClosing) {
          dropdownContent.removeEventListener("animationend", _handler2);
          return;
        }
        dropdownContent.style.display = "none";
        toggle.classList.remove("dropdown-open");
        dropdownContent.removeEventListener("animationend", _handler2);
      }
    };
    dropdownContent.addEventListener("animationend", _handler2);
    navbarContainer.classList.remove("dropdown-navbar-anim-show");
    navbarContainer.classList.add("dropdown-navbar-anim-hide");
    navbarMenu.classList.remove("navbar-menu-anim-hide");
    navbarMenu.classList.add("navbar-menu-anim-show");
  };
  var onLeaveRegion = function onLeaveRegion(event) {
    var to = event.relatedTarget;
    if (to && isInRegion(to)) return;
    if (hideTimeout) {
      clearTimeout(hideTimeout);
    }
    hideTimeout = setTimeout(reallyHideAll, 150);
  };
  var toggleNavbar = function toggleNavbar(event) {
    event.preventDefault();
    event.stopPropagation();
    if (isOpen) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      reallyHideAll();
    } else {
      showAll();
    }
  };

  // Desktop : hover
  regionEls.forEach(function (el) {
    el.addEventListener("mouseenter", showAll);
    el.addEventListener("mouseleave", onLeaveRegion);
  });

  // Mobile : click/touch
  toggle.addEventListener("click", toggleNavbar);
  toggle.addEventListener("touchstart", toggleNavbar, {
    passive: false
  });

  // Fermer si on clique ailleurs
  document.addEventListener("click", function (event) {
    if (isOpen && !isInRegion(event.target)) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      reallyHideAll();
    }
  });
  document.addEventListener("touchstart", function (event) {
    if (isOpen && !isInRegion(event.target)) {
      if (hideTimeout) {
        clearTimeout(hideTimeout);
      }
      reallyHideAll();
    }
  });
}
document.addEventListener("DOMContentLoaded", function () {
  attachNavbarDropdown();
  attachHoverDropdown(".language-dropdown-toggle");
  attachHoverDropdown(".theme-dropdown-toggle");
});

/***/ },

/***/ "./assets/scripts/Security/form.js"
/*!*****************************************!*\
  !*** ./assets/scripts/Security/form.js ***!
  \*****************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.array.includes.js */ "./node_modules/core-js/modules/es.array.includes.js");
__webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
__webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
__webpack_require__(/*! core-js/modules/es.string.trim.js */ "./node_modules/core-js/modules/es.string.trim.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* =====================================================
   VALIDATION GÉNÉRIQUE DES FORMULAIRES
   Emails + Mots de passe + Pseudos + Custom validators
   Compatible Support / User / Login / ForgotPassword
   ===================================================== */

var selector = 'input[type="text"], input[type="number"], input[type="email"], input[type="password"], select, textarea';
var inputs = document.querySelectorAll(selector);
var form = document.querySelector('.all-form');

// =====================================================
// Fonctions d'apparence des inputs
// =====================================================
function initInput(inputEl) {
  var wrapper = inputEl.closest('span') || inputEl.parentElement;
  if (inputEl.value.trim() !== '') {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
  }
  inputEl.addEventListener('focus', onFocus);
  inputEl.addEventListener('blur', onBlur);

  // Pour le responsive mobile
  inputEl.addEventListener('touchend', onBlur);
}
function onFocus(ev) {
  var parent = ev.target.closest('span') || ev.target.parentElement;
  if (parent && parent.classList) {
    parent.classList.add('inputs--filled');
  }
}
function onBlur(ev) {
  var input = ev.target;
  var wrapper = input.closest('span') || input.parentElement;
  if (input.value.trim() === '') {
    wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--filled', 'inputs--invalid');
  } else {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
  }
}
function liveValidation(ev) {
  var input = ev.target;
  var wrapper = input.closest('span') || input.parentElement;
  if (!input.checkValidity()) {
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
  } else {
    wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
  }
}

// =====================================================
// Système de validation générique
// =====================================================
var validators = {};
var validationTimers = {}; // Stockage des timers

function registerValidator(inputId, errorId, validateFn) {
  validators[inputId] = {
    errorId: errorId,
    validateFn: validateFn
  };
}
function runValidator(inputId) {
  var config = validators[inputId];
  if (!config) return true;
  var input = document.getElementById(inputId);
  var errorBox = document.getElementById(config.errorId);
  if (!input || !errorBox) return true;
  var wrapper = input.closest('span') || input.parentElement;
  errorBox.style.visibility = 'hidden';
  errorBox.textContent = "\xA0";
  wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
  var result = config.validateFn(input.value, input);
  if (result !== true) {
    errorBox.textContent = result;
    errorBox.style.visibility = 'visible';
    wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
    return false;
  }
  return true;
}
function attachValidator(inputId) {
  var eventTypes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : ['input', 'blur'];
  var delayMs = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3000;
  var input = document.getElementById(inputId);
  if (!input) return;
  eventTypes.forEach(function (eventType) {
    if (eventType === 'input') {
      // Pour l'événement 'input', on ajoute un délai de 3 secondes
      input.addEventListener('input', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
        }
        validationTimers[inputId] = setTimeout(function () {
          runValidator(inputId);
        }, delayMs);
      });
    } else if (eventType === 'change') {
      // Pour 'change', validation immédiate
      input.addEventListener('change', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        runValidator(inputId);
      });
    } else if (eventType === 'blur') {
      // Pour 'blur', validation immédiate
      input.addEventListener('blur', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        runValidator(inputId);
      });

      // Ajouter 'touchend' pour mobile
      input.addEventListener('touchend', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        // Petit délai pour éviter les doubles déclenchements
        setTimeout(function () {
          return runValidator(inputId);
        }, 100);
      });
    } else if (eventType === 'click') {
      // Pour 'click', validation immédiate
      input.addEventListener('click', function () {
        if (validationTimers[inputId]) {
          clearTimeout(validationTimers[inputId]);
          delete validationTimers[inputId];
        }
        runValidator(inputId);
      });
    }
  });
}

// =====================================================
// VALIDATEURS EMAILS (génériques pour tout le site)
// =====================================================

function registerEmail(inputId, errorId) {
  registerValidator(inputId, errorId, function (value, input) {
    var v = value.trim();
    if (v === "") return t('email_required');
    if (!input.checkValidity()) return t('email_invalid');
    return true;
  });
}
var emailFields = [{
  inputId: "support_email",
  errorId: "email-error"
}, {
  inputId: "user_email",
  errorId: "user_email-error"
}, {
  inputId: "username",
  errorId: "username-error"
}, {
  inputId: "forgot_password_request_form_email",
  errorId: "forgot_email-error"
}];
emailFields.forEach(function (f) {
  return registerEmail(f.inputId, f.errorId);
});

// =====================================================
// VALIDATEURS PSEUDOS (génériques)
// =====================================================

function t(key) {
  return window.appTranslations && window.appTranslations[key] || key;
}
function registerPseudo(inputId, errorId) {
  var minLength = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 3;
  registerValidator(inputId, errorId, function (value) {
    var v = value.trim();
    if (v === "") return t('pseudo_required');
    if (v.length < minLength) return t('pseudo_min_3');
    return true;
  });
}
var pseudoFields = [{
  inputId: "support_name",
  errorId: "pseudo-error",
  minLength: 3
}, {
  inputId: "user_pseudo",
  errorId: "user_pseudo-error",
  minLength: 3
}];
pseudoFields.forEach(function (f) {
  return registerPseudo(f.inputId, f.errorId, f.minLength);
});

// =====================================================
// VALIDATEURS MOTS DE PASSE (génériques)
// =====================================================

registerValidator("user_plainPassword_first", "user_password_first-error", function (value) {
  var v = value.trim();
  if (v === "") return t('password_required');
  if (v.length < 8) return t('password_length_8');
  if (!/[A-Z]/.test(v)) return t('password_upper');
  if (!/\d/.test(v)) return t('password_number');
  if (!/[\W_]/.test(v)) return t('password_special');
  return true;
});
registerValidator("user_plainPassword_second", "user_password_second-error", function (value) {
  var first = document.getElementById("user_plainPassword_first");
  if (!first) return true;
  if (value.trim() === "") return t('password_confirm_required');
  if (value !== first.value) return t('password_mismatch');
  return true;
});
registerValidator("reset_password_form_plainPassword_first", "reset_password_form_plainPassword_first-error", function (value) {
  var v = value.trim();
  if (v === "") return t('password_required');
  if (v.length < 8) return t('password_length_8');
  if (!/[A-Z]/.test(v)) return t('password_upper');
  if (!/\d/.test(v)) return t('password_number');
  if (!/[\W_]/.test(v)) return t('password_special');
  return true;
});
registerValidator("reset_password_form_plainPassword_second", "reset_password_form_plainPassword_second-error", function (value) {
  var first = document.getElementById("reset_password_form_plainPassword_first");
  if (!first) return true;
  if (value.trim() === "") return t('password_confirm_required');
  if (value !== first.value) return t('password_mismatch');
  return true;
});

// Mot de passe de connexion
registerValidator("password", "password-error", function (value) {
  if (value.trim() === "") return t('password_required');
  return true;
});

// Mot de passe "oublié" (nouveau mot de passe, si tu as un champs dédié)
registerValidator("forgot_password", "forgot_password-error", function (value) {
  if (value.trim() === "") return t('password_required');
  return true;
});

// =====================================================
// VALIDATEURS SUPPORT SUPPLÉMENTAIRES → category / message / image
// =====================================================

registerValidator("support_category", "selecte-error", function (value) {
  if (!value || value.trim() === "") return t('support_category_required');
  return true;
});
registerValidator("support_message", "text-area-error", function (value) {
  var v = value.trim();
  if (v === "") return t('support_message_required');
  if (v.length < 10) return t('support_message_min_10');
  return true;
});

// VALIDATION DE L’IMAGE (support)
registerValidator("support_imageFile", "image-error", function (value, input) {
  var file = input.files[0];
  if (!file) return true;
  var allowed = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  var max = 2 * 1024 * 1024;
  if (!allowed.includes(file.type)) return t('image_type');
  if (file.size > max) return t('image_size');
  return true;
});

// ========================
// SOUMISSION DU FORMULAIRE
// ========================
function onSubmit(ev) {
  var hasError = false;

  // Annuler tous les timers en cours
  Object.keys(validationTimers).forEach(function (inputId) {
    clearTimeout(validationTimers[inputId]);
    delete validationTimers[inputId];
  });

  // Vérifier tous les validateurs enregistrés
  Object.keys(validators).forEach(function (inputId) {
    if (!runValidator(inputId)) {
      hasError = true;
    }
  });

  // Vérifier la validité HTML5 des champs sans validateur custom
  var form = ev.target;
  var inputs = form.querySelectorAll(selector);
  inputs.forEach(function (input) {
    // Ignorer les champs qui ont déjà un validateur custom
    if (validators[input.id]) return;
    var wrapper = input.closest('span') || input.parentElement;
    if (!input.checkValidity()) {
      wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--invalid');
      hasError = true;
    } else {
      wrapper === null || wrapper === void 0 || wrapper.classList.remove('inputs--invalid');
    }
  });
  if (hasError) {
    ev.preventDefault();
  }
}

// ========================
// INITIALISATION
// ========================
document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('.all-form');
  var loginForm = document.getElementById('login-form');
  var inputs = document.querySelectorAll(selector);

  // Initialiser les inputs de base
  inputs.forEach(function (input) {
    initInput(input);
    if (input.tagName === 'SELECT' && input.value) {
      var wrapper = input.closest('span') || input.parentElement;
      wrapper === null || wrapper === void 0 || wrapper.classList.add('inputs--filled');
    }
  });

  // Attacher les validateurs du formulaire de support
  attachValidator('support_name', ['input', 'blur'], 3000);
  attachValidator('support_email', ['input', 'blur'], 3000);
  attachValidator('support_category', ['change', 'blur'], 3000);
  attachValidator('support_message', ['input', 'blur'], 3000);
  attachValidator('support_imageFile', ['change'], 0);

  // Attacher les validateurs du formulaire utilisateur
  attachValidator('user_pseudo', ['input', 'blur'], 3000);
  attachValidator('user_email', ['input', 'blur'], 3000);
  attachValidator('user_plainPassword_first', ['input', 'blur'], 3000);
  attachValidator('user_plainPassword_second', ['input', 'blur'], 3000);

  // Attacher les validateurs du formulaire reset password
  attachValidator('reset_password_form_plainPassword_first', ['input', 'blur'], 3000);
  attachValidator('reset_password_form_plainPassword_second', ['input', 'blur'], 3000);

  // Attacher les validateurs du formulaire de connexion
  attachValidator('username', ['input', 'blur'], 3000);
  attachValidator('password', ['input', 'blur'], 3000);

  // Attacher les validateurs éventuels du formulaire "mot de passe oublié"
  attachValidator('forgot_password_request_form_email', ['input', 'blur'], 3000);
  attachValidator('forgot_password', ['input', 'blur'], 3000);

  // Attacher la validation au submit
  if (form) {
    form.addEventListener('submit', onSubmit);
  }

  // Attacher la validation au formulaire de connexion
  if (loginForm) {
    loginForm.addEventListener('submit', onSubmit);
  }
});

/***/ },

/***/ "./assets/scripts/Security/remember_me.js"
/*!************************************************!*\
  !*** ./assets/scripts/Security/remember_me.js ***!
  \************************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
document.addEventListener("DOMContentLoaded", function () {
  var box = document.getElementById("cookie-consent");
  var accept = document.getElementById("accept-cookies");
  var refuse = document.getElementById("refuse-cookies");
  var rememberCheckbox = document.getElementById("_remember_me");

  // Vérifier que les éléments existent
  if (!box || !accept || !refuse) {
    console.warn("Éléments cookie non trouvés");
    return;
  }
  var consent = localStorage.getItem("cookie-consent");

  // AFFICHAGE INITIAL
  if (!consent) {
    setTimeout(function () {
      box.classList.add("show");
    }, 600);
  } else if (consent === "refused") {
    box.classList.add("collapsed");
  }

  // DÉSACTIVER REMEMBER ME SI REFUS
  if (consent !== "accepted" && rememberCheckbox) {
    rememberCheckbox.disabled = true;
  }

  // ACCEPTER
  accept.addEventListener("click", function () {
    localStorage.setItem("cookie-consent", "accepted");
    box.classList.remove("show");
    box.classList.add("hidden");
    if (rememberCheckbox) rememberCheckbox.disabled = false;
  });

  // REFUSER
  refuse.addEventListener("click", function () {
    localStorage.setItem("cookie-consent", "refused");
    box.classList.remove("show");
    box.classList.add("collapsed");
    if (rememberCheckbox) {
      rememberCheckbox.checked = false;
      rememberCheckbox.disabled = true;
    }
  });

  // SI ON CLIQUE SUR LE BOUTON RÉDUIT → RÉAFFICHER LA BANNIÈRE
  var collapseBtn = document.getElementById("cookie-expand-btn");
  if (collapseBtn) {
    collapseBtn.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();
      box.classList.remove("collapsed");
      box.classList.add("show");
    });
  }

  // SI ON CLIQUE SUR REMEMBER ME APRÈS UN REFUS → RÉAFFICHER LA BANNIÈRE
  if (rememberCheckbox) {
    var rememberLabel = document.querySelector('label[for="_remember_me"]');
    var clickHandler = function clickHandler(e) {
      var currentConsent = localStorage.getItem("cookie-consent");
      if (currentConsent === "refused") {
        e.preventDefault();
        e.stopPropagation();
        rememberCheckbox.checked = false;
        box.classList.remove("collapsed");
        box.classList.add("show");
        return false;
      }
    };
    rememberCheckbox.addEventListener("click", clickHandler);
    if (rememberLabel) {
      rememberLabel.addEventListener("click", clickHandler);
    }
  }
});

/***/ },

/***/ "./assets/scripts/Security/reset-btn.js"
/*!**********************************************!*\
  !*** ./assets/scripts/Security/reset-btn.js ***!
  \**********************************************/
(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

__webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
__webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
__webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
__webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
document.querySelectorAll('.reset-btn').forEach(function (button) {
  button.addEventListener('click', function () {
    var input = button.previousElementSibling;
    if (input && input.dataset.original !== undefined) {
      input.value = input.dataset.original;
      input.dispatchEvent(new Event('change'));
    }
  });
});

/***/ },

/***/ "./assets/styles/app.scss"
/*!********************************!*\
  !*** ./assets/styles/app.scss ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_fortawesome_fontawesome-free_js_all_js-node_modules_leaflet_dist_leaflet-bd7b76"], () => (__webpack_exec__("./assets/app.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLENBQUM7QUFDTixDQUFDLENBQUMsQzs7Ozs7Ozs7Ozs7O0FDUkYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvYXBwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvQ29uZmlnL2NodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvQ29uZmlnL2RlYnVnLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvQ29uZmlnL3R5cGVNYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9MYXllcnMvZ3JpZExheWVyLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvUm9hZHMvaW52YWxpZGF0ZUNodW5rLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvUm9hZHMvcm9hZFV0aWxzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvUm9hZHMvcm9hZHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Sb2Fkcy9yb2Fkc1N0YXRlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvVWkvbm90aWZpY2F0aW9uLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvVXRpbHMvc25hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2Jhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9idWlsZGluZy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2dwcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL21hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9MYXlvdXQvZHJvcGRvd24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvU2VjdXJpdHkvZm9ybS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9TZWN1cml0eS9yZW1lbWJlcl9tZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9TZWN1cml0eS9yZXNldC1idG4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3N0eWxlcy9hcHAuc2Nzcz84ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvY3NzL2FsbC5taW4uY3NzJztcbmltcG9ydCAnQGZvcnRhd2Vzb21lL2ZvbnRhd2Vzb21lLWZyZWUvanMvYWxsLmpzJztcbi8qXG4gKiBXZWxjb21lIHRvIHlvdXIgYXBwJ3MgbWFpbiBKYXZhU2NyaXB0IGZpbGUhXG4gKlxuICogVGhpcyBmaWxlIHdpbGwgYmUgaW5jbHVkZWQgb250byB0aGUgcGFnZSB2aWEgdGhlIGltcG9ydG1hcCgpIFR3aWcgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWxyZWFkeSBiZSBpbiB5b3VyIGJhc2UuaHRtbC50d2lnLlxuICovXG5pbXBvcnQgJy4vc3R5bGVzL2FwcC5zY3NzJztcblxuaW1wb3J0ICcuL3NjcmlwdHMvTGF5b3V0L2Ryb3Bkb3duLmpzJztcbmltcG9ydCAnLi9zY3JpcHRzL1NlY3VyaXR5L2Zvcm0uanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvU2VjdXJpdHkvcmVtZW1iZXJfbWUuanMnO1xuaW1wb3J0ICcuL3NjcmlwdHMvU2VjdXJpdHkvcmVzZXQtYnRuLmpzJztcblxuaW1wb3J0IFwibGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzXCI7XG5cbmltcG9ydCB7IGluaXRNYXAsIGxvYWRXb3JsZCwgbWFwIH0gZnJvbSAnLi9zY3JpcHRzL0dhbWUvbWFwLmpzJztcbmltcG9ydCB7IGluaXRHUFMgfSBmcm9tICcuL3NjcmlwdHMvR2FtZS9ncHMuanMnO1xuaW1wb3J0IHsgaW5pdEJhc2VVSSB9IGZyb20gJy4vc2NyaXB0cy9HYW1lL2Jhc2UuanMnO1xuaW1wb3J0IHsgbG9hZEJ1aWxkaW5ncyB9IGZyb20gJy4vc2NyaXB0cy9HYW1lL2J1aWxkaW5nLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICAgIGVuYWJsZUxlYWZsZXREZWJ1ZyhmYWxzZSk7XG5cbiAgICBjb25zdCBkZWZhdWx0TGF0ID0gNDYuNTM5NzI7XG4gICAgY29uc3QgZGVmYXVsdExuZyA9IDIuNDMwMjg7XG5cbiAgICBpbml0TWFwKGRlZmF1bHRMYXQsIGRlZmF1bHRMbmcpO1xuXG4gICAgaW5pdEJhc2VVSSgpO1xuICAgIGxvYWRXb3JsZCgpO1xuICAgIGxvYWRCdWlsZGluZ3MoKTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTGVhZmxldERlYnVnKGRlYnVnID0gZmFsc2UpIHtcblxuICAgIGlmICghZGVidWcpIHJldHVybjtcblxuICAgIGNvbnN0IG9yaWdpbmFsTWFya2VyID0gTC5tYXJrZXI7XG4gICAgY29uc3Qgb3JpZ2luYWxDaXJjbGUgPSBMLmNpcmNsZTtcbiAgICBjb25zdCBvcmlnaW5hbFBvbHlsaW5lID0gTC5wb2x5bGluZTtcblxuICAgIEwubWFya2VyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn6eoIE1BUktFUiBDQUxMOlwiLCBhcmdzKTtcbiAgICAgICAgY29uc29sZS50cmFjZShcIk1BUktFUiBTVEFDS1wiKTtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsTWFya2VyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBMLmNpcmNsZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+nqCBDSVJDTEUgQ0FMTDpcIiwgYXJncyk7XG4gICAgICAgIGNvbnNvbGUudHJhY2UoXCJDSVJDTEUgU1RBQ0tcIik7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbENpcmNsZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgTC5wb2x5bGluZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+nqCBQT0xZTElORSBDQUxMOlwiLCBhcmdzKTtcbiAgICAgICAgY29uc29sZS50cmFjZShcIlBPTFlMSU5FIFNUQUNLXCIpO1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxQb2x5bGluZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xufVxuXG5jb25zb2xlLmxvZygnVGhpcyBsb2cgY29tZXMgZnJvbSBhc3NldHMvYXBwLmpzIC0gd2VsY29tZSB0byBBc3NldE1hcHBlciEg8J+OiScpO1xuIiwiaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwLmpzJztcclxuaW1wb3J0IHsgcmVmcmVzaENodW5rIH0gZnJvbSAnLi4vUm9hZHMvcm9hZHMuanMnO1xyXG5pbXBvcnQgeyBpbnZhbGlkYXRlQ2h1bmsgfSBmcm9tICcuLi9Sb2Fkcy9pbnZhbGlkYXRlQ2h1bmsuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdFcnJvciB9IGZyb20gJy4vZGVidWcuanMnO1xyXG5pbXBvcnQgeyBzbmFwVG9DaHVuayB9IGZyb20gJy4uL1V0aWxzL3NuYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIVU5LX1NJWkUgPSAwLjAxO1xyXG5leHBvcnQgY29uc3QgQ0hVTktfUkFESVVTID0gMTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXF1ZXN0QXBpUm9hZHNBbmRDaHVua3NCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcbiAgICBhbGVydChcIkNsaXF1ZSBzdXIgbGEgY2FydGUgcG91ciBmYWlyZSB1bmUgcmVxdWV0ZSBhcGkgcG91ciBham91dGVyIHVuIGNodW5rIGRlIHJvdXRlcyAoMC4wMcKwIHggMC4wMcKwKS5cIik7XHJcblxyXG4gICAgbWFwLm9uY2UoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gZS5sYXRsbmc7XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXBwZWQgPSBzbmFwVG9DaHVuayhsYXQsIGxuZyk7XHJcblxyXG4gICAgICAgIGRlYnVnTG9nKFwibmV0d29ya1wiLCBcIvCfk6EgYWRkaW5nIHJvYWRzIGNodW5rOlwiLCBzbmFwcGVkLmNodW5rSWQpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9hZGQtcm9hZHMtY2h1bmsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdDogc25hcHBlZC5sYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBzbmFwcGVkLmxuZ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZWZyZXNoQ2h1bmsoc25hcHBlZC5sYXQsIHNuYXBwZWQubG5nKTtcclxuXHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwi8J+UhCBjaHVuayByZWZyZXNoZWQ6XCIsIHNuYXBwZWQuY2h1bmtJZCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKFwibmV0d29ya1wiLCBcImZhaWxlZCB0byBhZGQgcm9hZHMgY2h1bmtcIiwgZXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcclxuICAgIH0pO1xyXG59KTsiLCJpbXBvcnQgeyBUWVBFX01BUCB9IGZyb20gJy4vdHlwZU1hcC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgREVCVUcgPSB7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgY2h1bmtzOiB0cnVlLFxyXG4gICAgbmV0d29yazogdHJ1ZSxcclxuICAgIGNhY2hlOiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdMb2codHlwZSwgLi4uYXJncykge1xyXG4gICAgaWYgKCFERUJVRy5lbmFibGVkKSByZXR1cm47XHJcblxyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChERUJVR1t0eXBlXSA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgWyR7dHlwZX1dYCwgLi4uYXJncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z0Vycm9yKHR5cGUsIC4uLmFyZ3MpIHtcclxuICAgIGlmICghREVCVUcuZW5hYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGtleSA9IFRZUEVfTUFQPy5bdHlwZV0gfHwgdHlwZTtcclxuXHJcbiAgICBpZiAoREVCVUdba2V5XSA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGBbJHtrZXl9XWAsIC4uLmFyZ3MpO1xyXG59IiwiZXhwb3J0IGNvbnN0IFRZUEVfTUFQID0ge1xyXG4gICAgUk9BRDogXCJyb2FkXCIsXHJcbiAgICBDSFVOSzogXCJjaHVua1wiLFxyXG4gICAgQlVJTERJTkc6IFwiYnVpbGRpbmdcIlxyXG59OyIsImltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uL0NvbmZpZy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi9Db25maWcvY2h1bmsuanMnO1xyXG5pbXBvcnQgeyBnZXRNYXAsIGlzR3JpZExheWVyQWN0aXZlIH0gZnJvbSAnLi4vbWFwLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBncmlkTGF5ZXIgPSBMLmxheWVyR3JvdXAoKTtcclxuXHJcbmNvbnN0IHZpc2libGVDaHVua3MgPSBuZXcgTWFwKCk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdyaWRMYXllcigpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuICAgIGlmICghbWFwKSByZXR1cm47XHJcblxyXG4gICAgaWYgKCFpc0dyaWRMYXllckFjdGl2ZSgpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgem9vbSA9IG1hcC5nZXRab29tKCk7XHJcbiAgICBpZiAoem9vbSA8IDE0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYm91bmRzID0gbWFwLmdldEJvdW5kcygpO1xyXG5cclxuICAgIGNvbnN0IG1pbkxhdCA9IE1hdGguZmxvb3IoYm91bmRzLmdldFNvdXRoKCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heExhdCA9IE1hdGguY2VpbChib3VuZHMuZ2V0Tm9ydGgoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWluTG5nID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0V2VzdCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtYXhMbmcgPSBNYXRoLmNlaWwoYm91bmRzLmdldEVhc3QoKSAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIGNvbnN0IG5ld1Zpc2libGUgPSBuZXcgU2V0KCk7XHJcblxyXG4gICAgZm9yIChsZXQgaSA9IG1pbkxhdDsgaSA8IG1heExhdDsgaSsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaiA9IG1pbkxuZzsgaiA8IG1heExuZzsgaisrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBpZCA9IGAke2l9XyR7an1gO1xyXG4gICAgICAgICAgICBuZXdWaXNpYmxlLmFkZChpZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodmlzaWJsZUNodW5rcy5oYXMoaWQpKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGxhdCA9IGkgKiBDSFVOS19TSVpFO1xyXG4gICAgICAgICAgICBjb25zdCBsbmcgPSBqICogQ0hVTktfU0laRTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSBMLnJlY3RhbmdsZShbXHJcbiAgICAgICAgICAgICAgICBbbGF0LCBsbmddLFxyXG4gICAgICAgICAgICAgICAgW2xhdCArIENIVU5LX1NJWkUsIGxuZyArIENIVU5LX1NJWkVdXHJcbiAgICAgICAgICAgIF0sIHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiBcIm9yYW5nZVwiLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiAxLFxyXG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuMTVcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZWN0Lm9uKCdtb3VzZW92ZXInLCAoKSA9PiByZWN0LnNldFN0eWxlKHsgZmlsbE9wYWNpdHk6IDAuMyB9KSk7XHJcbiAgICAgICAgICAgIHJlY3Qub24oJ21vdXNlb3V0JywgKCkgPT4gcmVjdC5zZXRTdHlsZSh7IGZpbGxPcGFjaXR5OiAwLjE1IH0pKTtcclxuXHJcbiAgICAgICAgICAgIGdyaWRMYXllci5hZGRMYXllcihyZWN0KTtcclxuXHJcbiAgICAgICAgICAgIHZpc2libGVDaHVua3Muc2V0KGlkLCByZWN0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8g8J+nuSByZW1vdmUgY2V1eCBob3JzIMOpY3JhblxyXG4gICAgZm9yIChjb25zdCBbaWQsIHJlY3RdIG9mIHZpc2libGVDaHVua3MuZW50cmllcygpKSB7XHJcbiAgICAgICAgaWYgKCFuZXdWaXNpYmxlLmhhcyhpZCkpIHtcclxuICAgICAgICAgICAgZ3JpZExheWVyLnJlbW92ZUxheWVyKHJlY3QpO1xyXG4gICAgICAgICAgICB2aXNpYmxlQ2h1bmtzLmRlbGV0ZShpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiQ2h1bmtzIHZpc2libGVzOlwiLCB2aXNpYmxlQ2h1bmtzLnNpemUpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDSFVOSyBDT0xPUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q2h1bmtDb2xvcihpZCwgY29sb3IpIHtcclxuICAgIGlmICghaXNHcmlkTGF5ZXJBY3RpdmUoKSkgcmV0dXJuO1xyXG4gICAgXHJcbiAgICBjb25zdCByZWN0ID0gdmlzaWJsZUNodW5rcy5nZXQoaWQpO1xyXG4gICAgaWYgKCFyZWN0KSByZXR1cm47XHJcblxyXG4gICAgcmVjdC5zZXRTdHlsZSh7XHJcbiAgICAgICAgY29sb3IsXHJcbiAgICAgICAgZmlsbE9wYWNpdHk6IDAuMlxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgeyByb2Fkc1N0YXRlIH0gZnJvbSAnLi9yb2Fkc1N0YXRlLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuLi9Db25maWcvZGVidWcuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRhdGVDaHVuayhpZCkge1xyXG4gICAgZGVidWdMb2coXCJjYWNoZVwiLCBcIvCfp7kgaW52YWxpZGF0ZSBjaHVuazpcIiwgaWQpO1xyXG4gICAgXHJcbiAgICBkZWxldGUgcm9hZHNTdGF0ZS5jaHVua3NbaWRdO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNodW5rXyR7aWR9YCk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwLmpzJztcclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgcG9pbnQgbGUgcGx1cyBwcm9jaGUgc3VyIHRvdXRlcyBsZXMgcm91dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RQb2ludE9uUm9hZChsYXRsbmcsIHJvYWRzKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBsZXQgYmVzdFBvaW50ID0gbnVsbDtcclxuICAgIGxldCBiZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZHMpKSByZXR1cm4geyBwb2ludDogbnVsbCwgZGlzdGFuY2U6IEluZmluaXR5IH07XHJcblxyXG4gICAgcm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWQucG9pbnRzKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChyb2FkLnBvaW50cy5sZW5ndGggPCAyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9hZC5wb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhUmF3ID0gcm9hZC5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJSYXcgPSByb2FkLnBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFSYXcgfHwgIWJSYXcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkJST0tFTiBST0FEIFNFR01FTlQ6XCIsIHJvYWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYVJhdy5sZW5ndGggPCAyIHx8IGJSYXcubGVuZ3RoIDwgMikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhID0gTC5sYXRMbmcoYVJhd1swXSwgYVJhd1sxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBMLmxhdExuZyhiUmF3WzBdLCBiUmF3WzFdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RQb2ludE9uU2VnbWVudChsYXRsbmcsIGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gbWFwLmRpc3RhbmNlKGxhdGxuZywgcHJvamVjdGVkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgYmVzdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBkaXN0O1xyXG4gICAgICAgICAgICAgICAgYmVzdFBvaW50ID0gcHJvamVjdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb2ludDogYmVzdFBvaW50LFxyXG4gICAgICAgIGRpc3RhbmNlOiBiZXN0RGlzdGFuY2VcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgc2VnbWVudCBsZSBwbHVzIHByb2NoZSAocG91ciBoaWdobGlnaHQgdmlzdWVsKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDbG9zZXN0U2VnbWVudChsYXRsbmcsIHJvYWRzKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBsZXQgYmVzdFNlZ21lbnQgPSBudWxsO1xyXG4gICAgbGV0IGJlc3REaXN0YW5jZSA9IEluZmluaXR5O1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkcykpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkLnBvaW50cykpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2FkLnBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFSYXcgPSByb2FkLnBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYlJhdyA9IHJvYWQucG9pbnRzW2kgKyAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYVJhdyB8fCAhYlJhdykgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChhUmF3Lmxlbmd0aCA8IDIgfHwgYlJhdy5sZW5ndGggPCAyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBMLmxhdExuZyhhUmF3WzBdLCBhUmF3WzFdKTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IEwubGF0TG5nKGJSYXdbMF0sIGJSYXdbMV0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWlkID0gTC5sYXRMbmcoXHJcbiAgICAgICAgICAgICAgICAoYS5sYXQgKyBiLmxhdCkgLyAyLFxyXG4gICAgICAgICAgICAgICAgKGEubG5nICsgYi5sbmcpIC8gMlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShsYXRsbmcsIG1pZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdCA8IGJlc3REaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3RhbmNlID0gZGlzdDtcclxuICAgICAgICAgICAgICAgIGJlc3RTZWdtZW50ID0gW2EsIGJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJlc3RTZWdtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogUHJvamVjdGlvbiBkJ3VuIHBvaW50IHN1ciB1biBzZWdtZW50IChBLUIpXHJcbiAqIG1hdGggc3RhYmxlIHBvdXIgc25hcCByb3V0ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0UG9pbnRPblNlZ21lbnQocCwgYSwgYikge1xyXG5cclxuICAgIGNvbnN0IEEgPSBbYS5sYXQsIGEubG5nXTtcclxuICAgIGNvbnN0IEIgPSBbYi5sYXQsIGIubG5nXTtcclxuICAgIGNvbnN0IFAgPSBbcC5sYXQsIHAubG5nXTtcclxuXHJcbiAgICBjb25zdCBBQiA9IFtCWzBdIC0gQVswXSwgQlsxXSAtIEFbMV1dO1xyXG4gICAgY29uc3QgQVAgPSBbUFswXSAtIEFbMF0sIFBbMV0gLSBBWzFdXTtcclxuXHJcbiAgICBjb25zdCBhYjIgPSBBQlswXSAqIEFCWzBdICsgQUJbMV0gKiBBQlsxXTtcclxuXHJcbiAgICBpZiAoYWIyID09PSAwKSByZXR1cm4gYTtcclxuXHJcbiAgICBsZXQgdCA9IChBUFswXSAqIEFCWzBdICsgQVBbMV0gKiBBQlsxXSkgLyBhYjI7XHJcblxyXG4gICAgdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHQpKTtcclxuXHJcbiAgICByZXR1cm4gTC5sYXRMbmcoXHJcbiAgICAgICAgQVswXSArIEFCWzBdICogdCxcclxuICAgICAgICBBWzFdICsgQUJbMV0gKiB0XHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogRGlzdGFuY2UgcG9pbnQgLT4gc2VnbWVudCAodXRpbGUgdmFsaWRhdGlvbiBmdXR1cmUpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VUb1NlZ21lbnQocCwgYSwgYikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdGVkID0gcHJvamVjdFBvaW50T25TZWdtZW50KHAsIGEsIGIpO1xyXG4gICAgcmV0dXJuIG1hcC5kaXN0YW5jZShwLCBwcm9qZWN0ZWQpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgc2ltcGxlIGRlYnVnIHJvYWRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdSb2Fkcyhyb2Fkcykge1xyXG4gICAgY29uc29sZS5sb2coXCJST0FEUyBERUJVRzpcIiwgcm9hZHMubGVuZ3RoLCByb2Fkcyk7XHJcbn0iLCJpbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAuanMnO1xyXG5pbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi4vQ29uZmlnL2NodW5rLmpzJztcclxuaW1wb3J0IHsgc2V0Q2h1bmtDb2xvciB9IGZyb20gJy4uL0xheWVycy9ncmlkTGF5ZXIuanMnO1xyXG5pbXBvcnQgeyBpbnZhbGlkYXRlQ2h1bmsgfSBmcm9tICcuL2ludmFsaWRhdGVDaHVuay5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vQ29uZmlnL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4vcm9hZHNTdGF0ZS5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBMT0FEIENPTlRST0xcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgbG9hZGluZ1F1ZXVlID0gbmV3IFNldCgpO1xyXG5jb25zdCBNQVhfQ09OQ1VSUkVOVCA9IDQ7XHJcbmxldCBhY3RpdmVSZXF1ZXN0cyA9IDA7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDSFVOSyBJRFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBnZXRDaHVua0lkKGxhdCwgbG5nKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihsYXQgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGxuZyAvIENIVU5LX1NJWkUpO1xyXG4gICAgcmV0dXJuIGAke3h9XyR7eX1gO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBNQUlOIExPQUQgVklTSUJMRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFZpc2libGVSb2FkQ2h1bmtzKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghbWFwIHx8IG1hcC5nZXRab29tKCkgPCAxNCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XHJcblxyXG4gICAgY29uc3QgdmlzaWJsZUNodW5rcyA9IGdldFZpc2libGVDaHVua3MoYm91bmRzKTtcclxuXHJcbiAgICBjb25zdCBjaHVua3NUb0xvYWQgPSB2aXNpYmxlQ2h1bmtzLmZpbHRlcihcclxuICAgICAgICBjaHVua0lkID0+ICFyb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5oYXMoY2h1bmtJZClcclxuICAgICk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEVUQVQgTE9BRElOR1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgY2h1bmtzVG9Mb2FkKSB7XHJcblxyXG4gICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdsb2FkaW5nJyxcclxuICAgICAgICAgICAgcm9hZHM6IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmllbiDDoCBjaGFyZ2VyXHJcbiAgICBpZiAoY2h1bmtzVG9Mb2FkLmxlbmd0aCA9PT0gMCkge1xyXG5cclxuICAgICAgICByZWZyZXNoQ2h1bmtDb2xvcnModmlzaWJsZUNodW5rcyk7XHJcblxyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIEJVTEsgQVBJXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jaHVua3MvYnVsaycsIHtcclxuXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG5cclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgY2h1bmtzOiBjaHVua3NUb0xvYWRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBUUkFJVEVNRU5UIENIVU5LU1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBjaHVua3NUb0xvYWQpIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGNodW5rRGF0YSA9IGRhdGFbY2h1bmtJZF0gfHwge1xyXG4gICAgICAgICAgICAgICAgcm9hZHM6IFtdLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFzUm9hZHMgPVxyXG4gICAgICAgICAgICAgICAgY2h1bmtEYXRhLnJvYWRzICYmXHJcbiAgICAgICAgICAgICAgICBjaHVua0RhdGEucm9hZHMubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXR1czogaGFzUm9hZHNcclxuICAgICAgICAgICAgICAgICAgICA/ICdsb2FkZWQnXHJcbiAgICAgICAgICAgICAgICAgICAgOiAnZW1wdHknLFxyXG5cclxuICAgICAgICAgICAgICAgIHJvYWRzOiBjaHVua0RhdGEucm9hZHMgfHwgW10sXHJcblxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBjaHVua0RhdGEuYnVpbGRpbmdzIHx8IFtdLFxyXG5cclxuICAgICAgICAgICAgICAgIGhhc1JvYWRzXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5hZGQoY2h1bmtJZCk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBEUkFXIFJPQURTXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgICAvLyBjaHVua0RhdGEucm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGRyYXdSb2FkKHJvYWQpO1xyXG4gICAgICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIERSQVcgQlVJTERJTkdTXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgICAvLyBjaHVua0RhdGEuYnVpbGRpbmdzLmZvckVhY2goYnVpbGRpbmcgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgZHJhd0J1aWxkaW5nKGJ1aWxkaW5nKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBDT1VMRVVSIENIVU5LXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgICAgICBzZXRDaHVua0NvbG9yKFxyXG4gICAgICAgICAgICAgICAgY2h1bmtJZCxcclxuICAgICAgICAgICAgICAgIGhhc1JvYWRzID8gJ2JsdWUnIDogJyM0NDQnXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcclxuICAgICAgICAgICAgICAgIFwicm9hZHNcIixcclxuICAgICAgICAgICAgICAgIGBDaHVuayAke2NodW5rSWR9IGxvYWRlZCAoJHtjaHVua0RhdGEucm9hZHMubGVuZ3RofSByb2FkcylgXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcblxyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXHJcbiAgICAgICAgICAgIFwiRXJyZXVyIGNoYXJnZW1lbnQgY2h1bmtzIGJ1bGs6XCIsXHJcbiAgICAgICAgICAgIGVycm9yXHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBFVEFUIEVSUkVVUlxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBjaHVua3NUb0xvYWQpIHtcclxuXHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuXHJcbiAgICAgICAgICAgICAgICByb2FkczogW10sXHJcblxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAncmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUZSRVNIIFZJU1VFTCBGSU5BTFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICByZWZyZXNoQ2h1bmtDb2xvcnModmlzaWJsZUNodW5rcyk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFRlJFU0ggQ0hVTksgQ09MT1JTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKSB7XHJcblxyXG4gICAgZm9yIChjb25zdCBjaHVua0lkIG9mIHZpc2libGVDaHVua3MpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXTtcclxuXHJcbiAgICAgICAgaWYgKCFjaHVuaykge1xyXG5cclxuICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcblxyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY2h1bmsuc3RhdHVzKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdsb2FkZWQnOlxyXG5cclxuICAgICAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ2JsdWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2VtcHR5JzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICcjNDQ0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdsb2FkaW5nJzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAneWVsbG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSRUZSRVNIIENIVU5LXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoQ2h1bmsobGF0LCBsbmcpIHtcclxuICAgIGNvbnN0IGNodW5rSWQgPSBnZXRDaHVua0lkKGxhdCwgbG5nKTtcclxuICAgIFxyXG4gICAgaW52YWxpZGF0ZUNodW5rKGNodW5rSWQpO1xyXG5cclxuICAgIHJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmRlbGV0ZShjaHVua0lkKTtcclxuXHJcbiAgICBhd2FpdCBmZXRjaFNpbmdsZUNodW5rKGNodW5rSWQpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGRVRDSCBTSU5HTEUgQ0hVTktcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hTaW5nbGVDaHVuayhjaHVua0lkKSB7XHJcblxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgICByb2FkczogW10sXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuXHJcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9jaHVua3MvYnVsaycsIHtcclxuXHJcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG5cclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgY2h1bmtzOiBbY2h1bmtJZF1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG5cclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0uc3RhdHVzID0gJ2Vycm9yJztcclxuXHJcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ3JlZCcpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmtEYXRhID0gZGF0YVtjaHVua0lkXSB8fCB7XHJcbiAgICAgICAgICAgIHJvYWRzOiBbXSxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGhhc1JvYWRzID1cclxuICAgICAgICAgICAgY2h1bmtEYXRhLnJvYWRzICYmXHJcbiAgICAgICAgICAgIGNodW5rRGF0YS5yb2Fkcy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuXHJcbiAgICAgICAgICAgIHN0YXR1czogaGFzUm9hZHNcclxuICAgICAgICAgICAgICAgID8gJ2xvYWRlZCdcclxuICAgICAgICAgICAgICAgIDogJ2VtcHR5JyxcclxuXHJcbiAgICAgICAgICAgIHJvYWRzOiBjaHVua0RhdGEucm9hZHMgfHwgW10sXHJcblxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IGNodW5rRGF0YS5idWlsZGluZ3MgfHwgW10sXHJcblxyXG4gICAgICAgICAgICBoYXNSb2Fkc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gQ0FDSEVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShcclxuICAgICAgICAgICAgYGNodW5rXyR7Y2h1bmtJZH1gLFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICByb2FkczogY2h1bmtEYXRhLnJvYWRzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBjaHVua0RhdGEuYnVpbGRpbmdzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgaGFzUm9hZHMsXHJcbiAgICAgICAgICAgICAgICB0czogRGF0ZS5ub3coKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gRFJBV1xyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gICAgICAgIC8vIHJlZHJhdyByb2Fkc1xyXG4gICAgICAgIC8vIGNsZWFyQ2h1bmtSb2FkcyhjaHVua0lkKTtcclxuXHJcbiAgICAgICAgLy8gY2h1bmtEYXRhLnJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcbiAgICAgICAgLy8gICAgIGRyYXdSb2FkKHJvYWQpO1xyXG4gICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAvLyByZWRyYXcgYnVpbGRpbmdzXHJcbiAgICAgICAgLy8gY2xlYXJDaHVua0J1aWxkaW5ncyhjaHVua0lkKTtcclxuXHJcbiAgICAgICAgLy8gY2h1bmtEYXRhLmJ1aWxkaW5ncy5mb3JFYWNoKGJ1aWxkaW5nID0+IHtcclxuICAgICAgICAvLyAgICAgZHJhd0J1aWxkaW5nKGJ1aWxkaW5nKTtcclxuICAgICAgICAvLyB9KTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihcclxuICAgICAgICAgICAgY2h1bmtJZCxcclxuICAgICAgICAgICAgaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCdcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBkZWJ1Z0xvZyhcclxuICAgICAgICAgICAgXCJbQ0hVTksgUkVGUkVTSF1cIixcclxuICAgICAgICAgICAgY2h1bmtJZCxcclxuICAgICAgICAgICAgY2h1bmtEYXRhLnJvYWRzLmxlbmd0aFxyXG4gICAgICAgICk7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG5cclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG4gICAgICAgICAgICByb2FkczogW10sXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuXHJcbiAgICAgICAgZGVidWdFcnJvcihcclxuICAgICAgICAgICAgXCJbQ0hVTksgUkVGUkVTSCBFUlJPUl1cIixcclxuICAgICAgICAgICAgY2h1bmtJZCxcclxuICAgICAgICAgICAgZVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFZpc2libGVDaHVua3MoYm91bmRzKSB7XHJcblxyXG4gICAgY29uc3QgbWluWCA9IE1hdGguZmxvb3IoYm91bmRzLmdldFNvdXRoKCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heFggPSBNYXRoLmZsb29yKGJvdW5kcy5nZXROb3J0aCgpIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgY29uc3QgbWluWSA9IE1hdGguZmxvb3IoYm91bmRzLmdldFdlc3QoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4WSA9IE1hdGguZmxvb3IoYm91bmRzLmdldEVhc3QoKSAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIGNvbnN0IGNodW5rSWQgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCB4ID0gbWluWDsgeCA8PSBtYXhYOyB4KyspIHtcclxuICAgICAgICBmb3IgKGxldCB5ID0gbWluWTsgeSA8PSBtYXhZOyB5KyspIHtcclxuICAgICAgICAgICAgY2h1bmtJZC5wdXNoKGAke3h9XyR7eX1gKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGNodW5rSWQ7XHJcbn0iLCJleHBvcnQgY29uc3Qgcm9hZHNTdGF0ZSA9IHtcclxuICAgIGNodW5rczoge30sXHJcbiAgICBsb2FkZWRDaHVua3M6IG5ldyBTZXQoKSxcclxuICAgIHJvYWRzUmVhZHk6IGZhbHNlLFxyXG4gICAgZHJhd25Sb2FkczogW10sXHJcbiAgICB2aXNpYmxlQ2h1bmtzOiBuZXcgU2V0KCksXHJcbiAgICBcclxuICAgIHJvYWRMYXllcnM6IHt9LFxyXG5cclxuICAgIGJ1aWxkaW5nTGF5ZXJzOiB7fVxyXG59O1xyXG5cclxubGV0IGNhY2hlZFJvYWRzID0gW107XHJcbmxldCBjYWNoZURpcnR5ID0gdHJ1ZTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBtYXJrUm9hZENhY2hlRGlydHkoKSB7XHJcbiAgICBjYWNoZURpcnR5ID0gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbExvYWRlZFJvYWRzKCkge1xyXG5cclxuICAgIGlmICghcm9hZHNTdGF0ZT8uY2h1bmtzKSByZXR1cm4gW107XHJcblxyXG4gICAgaWYgKCFjYWNoZURpcnR5KSByZXR1cm4gY2FjaGVkUm9hZHM7XHJcblxyXG4gICAgY2FjaGVkUm9hZHMgPSBPYmplY3QudmFsdWVzKHJvYWRzU3RhdGUuY2h1bmtzKVxyXG4gICAgICAgIC5maWx0ZXIoYyA9PiBjPy5zdGF0dXMgPT09ICdsb2FkZWQnICYmIEFycmF5LmlzQXJyYXkoYy5yb2FkcykpXHJcbiAgICAgICAgLmZsYXRNYXAoYyA9PiBjLnJvYWRzKTtcclxuXHJcbiAgICBjYWNoZURpcnR5ID0gZmFsc2U7XHJcblxyXG4gICAgcmV0dXJuIGNhY2hlZFJvYWRzO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSwgdHlwZSA9ICdpbmZvJykge1xyXG5cclxuICAgIGNvbnN0IG5vdGlmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub3RpZi5jbGFzc05hbWUgPSBgbm90aWYgbm90aWYtJHt0eXBlfWA7XHJcbiAgICBub3RpZi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZik7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbm90aWYucmVtb3ZlKCk7XHJcbiAgICB9LCAzMDAwKTtcclxufSIsImltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi9Db25maWcvY2h1bmsuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNuYXBUb0NodW5rKGxhdCwgbG5nKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihsYXQgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGxuZyAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGF0OiB4ICogQ0hVTktfU0laRSxcclxuICAgICAgICBsbmc6IHkgKiBDSFVOS19TSVpFLFxyXG4gICAgICAgIGNodW5rSWQ6IGAke3h9XyR7eX1gXHJcbiAgICB9O1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmVxdWVzdChsYXQsIGxuZywgdHlwZUlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9hcGkvYnVpbGQnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsYXQ6IGxhdCwgbG5nOiBsbmcsIHR5cGVfaWQ6IHR5cGVJZCB9KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ3MoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9hcGkvbWFwLWRhdGEnKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxufSIsImltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgeyBmbHlUbywgZ2V0TWFwIH0gZnJvbSAnLi9tYXAuanMnO1xyXG5pbXBvcnQgeyByb2Fkc1N0YXRlLCBnZXRBbGxMb2FkZWRSb2FkcyB9IGZyb20gJy4vUm9hZHMvcm9hZHNTdGF0ZS5qcyc7XHJcbmltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuL0NvbmZpZy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IHNhZmVMb2FkQ2h1bmssIGxvYWRWaXNpYmxlUm9hZENodW5rcyB9IGZyb20gJy4vUm9hZHMvcm9hZHMuanMnO1xyXG5pbXBvcnQgeyBmaW5kQ2xvc2VzdFBvaW50T25Sb2FkLCBmaW5kQ2xvc2VzdFNlZ21lbnQgfSBmcm9tICcuL1JvYWRzL3JvYWRVdGlscy5qcyc7XHJcbmltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tICcuL1VpL25vdGlmaWNhdGlvbi5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDwn6egIFNUQVRFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmxldCBiYXNlTWFya2VyID0gbnVsbDtcclxubGV0IGJhc2VDaXJjbGUgPSBudWxsO1xyXG5sZXQgYmFzZVBvc2l0aW9uID0gbnVsbDtcclxubGV0IGJhc2VDcmVhdGVkID0gZmFsc2U7XHJcbmxldCBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG5cclxubGV0IHByZXZpZXdNYXJrZXIgPSBudWxsO1xyXG5sZXQgcHJldmlld0NpcmNsZSA9IG51bGw7XHJcbmxldCBwcmV2aWV3U25hcExhdExuZyA9IG51bGw7XHJcbmxldCBwcmV2aWV3TGluZSA9IG51bGw7XHJcbmxldCBoaWdobGlnaHRlZFNlZ21lbnQgPSBudWxsO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVCBVSVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJhc2VVSSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBjb25zdCBiYXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2VCdG4nKTtcclxuXHJcbiAgICBiYXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBtb2RlID0gYmFzZUJ0bi5kYXRhc2V0Lm1vZGU7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gQ1JFQVRFIEJBU0UgTU9ERSBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xyXG4gICAgICAgICAgICBpZiAoYmFzZUNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQmFzZSBkw6lqw6AgY3LDqcOpZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwbGFjaW5nQmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuXHJcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oXCJDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgcGxhY2VyIHRhIGJhc2VcIiwgJ2luZm8nKTtcclxuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFJFVFVSTiBCQVNFIE1PREVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmIChtb2RlID09PSAncmV0dXJuJykge1xyXG4gICAgICAgICAgICBpZiAoIWJhc2VQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBdWN1bmUgYmFzZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmbHlUbyhiYXNlUG9zaXRpb25bMF0sIGJhc2VQb3NpdGlvblsxXSwgMTYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQ0xJQ0sgTUFQXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwLm9uKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFwbGFjaW5nQmFzZSB8fCBiYXNlQ3JlYXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghcHJldmlld1NuYXBMYXRMbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gcHJldmlld1NuYXBMYXRMbmc7XHJcblxyXG4gICAgICAgIGlmICghaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi4p2MIFRyb3AgcHJvY2hlIGQndW5lIGJhc2UgIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYW51cFByZXZpZXcobWFwKTtcclxuICAgICAgICBjcmVhdGVCYXNlKGxhdCwgbG5nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE1PVVNFIE1PVkUgKHByZXZpZXcgc25hcCByb2FkKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFwbGFjaW5nQmFzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByb2FkcyA9IGdldEFsbExvYWRlZFJvYWRzKCk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQoZS5sYXRsbmcsIHJvYWRzKTtcclxuICAgICAgICBpZiAoIXJlc3VsdC5wb2ludCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBwcmV2aWV3U25hcExhdExuZyA9IHJlc3VsdC5wb2ludDtcclxuXHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGlzQmFzZVBsYWNlbWVudFZhbGlkKHJlc3VsdC5wb2ludC5sYXQsIHJlc3VsdC5wb2ludC5sbmcpO1xyXG5cclxuICAgICAgICBjbGVhbnVwUHJldmlldyhtYXApO1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvciA9IGlzVmFsaWQgPyAnZ3JlZW4nIDogJ3JlZCc7XHJcblxyXG4gICAgICAgIHByZXZpZXdDaXJjbGUgPSBMLmNpcmNsZShyZXN1bHQucG9pbnQsIHtcclxuICAgICAgICAgICAgcmFkaXVzOiA2MDAsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjFcclxuICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBwcmV2aWV3TWFya2VyID0gTC5tYXJrZXIocmVzdWx0LnBvaW50KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBwcmV2aWV3TGluZSA9IEwucG9seWxpbmUoW2UubGF0bG5nLCByZXN1bHQucG9pbnRdLCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnY3lhbicsXHJcbiAgICAgICAgICAgIHdlaWdodDogMixcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICBkYXNoQXJyYXk6ICc1LCA1J1xyXG4gICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSBmaW5kQ2xvc2VzdFNlZ21lbnQoZS5sYXRsbmcsIHJvYWRzKTtcclxuXHJcbiAgICAgICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gTC5wb2x5bGluZShzZWdtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDYsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjhcclxuICAgICAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gVVBEQVRFIFZJU1VBTCBCQVNFIEFORCBPVEhFUiBCQVNFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwLm9uKCd6b29tZW5kJywgKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUJhc2VEaXNwbGF5KCk7XHJcbiAgICAgICAgdXBkYXRlT3RoZXJCYXNlcygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfp7kgQ0xFQU4gUFJFVklFV1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjbGVhbnVwUHJldmlldygpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TWFya2VyKTtcclxuICAgIHByZXZpZXdDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdDaXJjbGUpO1xyXG4gICAgcHJldmlld0xpbmUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdMaW5lKTtcclxuICAgIGhpZ2hsaWdodGVkU2VnbWVudCAmJiBtYXAucmVtb3ZlTGF5ZXIoaGlnaGxpZ2h0ZWRTZWdtZW50KTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyID0gbnVsbDtcclxuICAgIHByZXZpZXdDaXJjbGUgPSBudWxsO1xyXG4gICAgcHJldmlld0xpbmUgPSBudWxsO1xyXG4gICAgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gbnVsbDtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICByZXR1cm4gb3RoZXJCYXNlcy5ldmVyeShiYXNlID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShcclxuICAgICAgICAgICAgW2xhdCwgbG5nXSxcclxuICAgICAgICAgICAgW2Jhc2UubGF0LCBiYXNlLmxuZ11cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzdCA+PSAxMTAwO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENSRUFURSBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNyZWF0ZUJhc2UobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG4gICAgYmFzZVBvc2l0aW9uID0gW2xhdCwgbG5nXTtcclxuXHJcbiAgICBmbHlUbyhsYXQsIGxuZyk7XHJcblxyXG4gICAgYmFzZUNpcmNsZSA9IEwuY2lyY2xlKGJhc2VQb3NpdGlvbiwge1xyXG4gICAgICAgIHJhZGl1czogNTAwLFxyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICBmZXRjaCgnL2FwaS9jcmVhdGUtYmFzZScsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxhdCwgbG5nIH0pXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAoIXJlcy5vaykgdGhyb3cgbmV3IEVycm9yKFwiQVBJIGVycm9yXCIpO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBiYXNlQ3JlYXRlZCA9IHRydWU7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJlbW92ZUJhc2UoKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciBjcsOpYXRpb24gYmFzZSAhXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG4gICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ1JFQVRFIEJBU0UgSUNPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjcmVhdGVCYXNlSWNvbih6b29tKSB7XHJcblxyXG4gICAgaWYgKHpvb20gPCAxMykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3Qgc2l6ZSA9IHpvb20gPiAxNSA/IDUwIDogMzA7XHJcblxyXG4gICAgcmV0dXJuIEwuaWNvbih7XHJcbiAgICAgICAgaWNvblVybDogJy9hc3NldHMvaW1hZ2VzL2J1aWxkaW5nL3BsYW5faW5kdXN0cnkucG5nJyxcclxuXHJcbiAgICAgICAgaWNvblNpemU6IFtzaXplLCBzaXplXSwgICAgICAgLy8gdGFpbGxlIGRlIGwnaW1hZ2VcclxuICAgICAgICBpY29uQW5jaG9yOiBbc2l6ZSAvIDIsIHNpemUgLyAyXSwgLy8gY2VudHJlIGRlIGwnaW1hZ2Ugc3VyIGxhIHBvc2l0aW9uXHJcbiAgICAgICAgcG9wdXBBbmNob3I6IFswLCAtc2l6ZSAvIDJdICAgLy8gcG9wdXAgYXUtZGVzc3VzXHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVVBEQVRFIEJBU0UgRElTUExBWVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiB1cGRhdGVCYXNlRGlzcGxheSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIWJhc2VQb3NpdGlvbikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbihtYXAuZ2V0Wm9vbSgpKTtcclxuXHJcbiAgICBpZiAoIWljb24pIHtcclxuICAgICAgICBpZiAoYmFzZU1hcmtlcikgbWFwLnJlbW92ZUxheWVyKGJhc2VNYXJrZXIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoIWJhc2VNYXJrZXIpIHtcclxuICAgICAgICBiYXNlTWFya2VyID0gTC5tYXJrZXIoYmFzZVBvc2l0aW9uLCB7IGljb24gfSkuYWRkVG8obWFwKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgaWYgKCFtYXAuaGFzTGF5ZXIoYmFzZU1hcmtlcikpIGJhc2VNYXJrZXIuYWRkVG8obWFwKTtcclxuICAgICAgICBiYXNlTWFya2VyLnNldEljb24oaWNvbik7XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFTU9WRSBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHJlbW92ZUJhc2UoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgYmFzZU1hcmtlciAmJiBtYXAucmVtb3ZlTGF5ZXIoYmFzZU1hcmtlcik7XHJcbiAgICBiYXNlQ2lyY2xlICYmIG1hcC5yZW1vdmVMYXllcihiYXNlQ2lyY2xlKTtcclxuXHJcbiAgICBiYXNlTWFya2VyID0gbnVsbDtcclxuICAgIGJhc2VDaXJjbGUgPSBudWxsO1xyXG4gICAgYmFzZVBvc2l0aW9uID0gbnVsbDtcclxuICAgIGJhc2VDcmVhdGVkID0gZmFsc2U7XHJcbiAgICBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG5cclxuICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTE9BRCBPVEhFUiBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmxldCBvdGhlckJhc2VzID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZE90aGVyQmFzZShsYXQsIGxuZywgcHNldWRvKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGxuZykpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBjaXJjbGUgPSBMLmNpcmNsZShbbGF0LCBsbmddLCB7XHJcbiAgICAgICAgcmFkaXVzOiA1MDAsXHJcbiAgICAgICAgY29sb3I6ICdyZWQnXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbihtYXAuZ2V0Wm9vbSgpKTtcclxuXHJcbiAgICBsZXQgbWFya2VyID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaWNvbikge1xyXG4gICAgICAgIG1hcmtlciA9IEwubWFya2VyKFtsYXQsIGxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8obWFwKVxyXG4gICAgICAgICAgICAuYmluZFBvcHVwKGDwn4+V77iPIEJhc2UgZGUgJHtwc2V1ZG99YCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3RoZXJCYXNlcy5wdXNoKHsgbGF0LCBsbmcsIHBzZXVkbywgbWFya2VyLCBjaXJjbGUgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQREFURSBPVEhFUiBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZU90aGVyQmFzZXMoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuXHJcbiAgICBvdGhlckJhc2VzLmZvckVhY2goYmFzZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbih6b29tKTtcclxuXHJcbiAgICAgICAgaWYgKCFpY29uKSB7XHJcbiAgICAgICAgICAgIGlmIChiYXNlLm1hcmtlcikgbWFwLnJlbW92ZUxheWVyKGJhc2UubWFya2VyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFiYXNlLm1hcmtlcikge1xyXG4gICAgICAgICAgICBiYXNlLm1hcmtlciA9IEwubWFya2VyKFtiYXNlLmxhdCwgYmFzZS5sbmddLCB7IGljb24gfSlcclxuICAgICAgICAgICAgICAgIC5hZGRUbyhtYXApXHJcbiAgICAgICAgICAgICAgICAuYmluZFBvcHVwKGDwn4+V77iPIEJhc2UgZGUgJHtiYXNlLnBzZXVkb31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXAuaGFzTGF5ZXIoYmFzZS5tYXJrZXIpKSBiYXNlLm1hcmtlci5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBiYXNlLm1hcmtlci5zZXRJY29uKGljb24pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgRlJPTSBTRVJWRVJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCYXNlRnJvbVNlcnZlcihsYXQsIGxuZykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShsbmcpKSByZXR1cm47XHJcblxyXG4gICAgYmFzZVBvc2l0aW9uID0gW2xhdCwgbG5nXTtcclxuICAgIGJhc2VDcmVhdGVkID0gdHJ1ZTtcclxuXHJcbiAgICBiYXNlQ2lyY2xlID0gTC5jaXJjbGUoYmFzZVBvc2l0aW9uLCB7XHJcbiAgICAgICAgcmFkaXVzOiA1MDAsXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIHVwZGF0ZUJhc2VEaXNwbGF5KCk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi9tYXAuanMnO1xyXG5pbXBvcnQgeyBnZXRCdWlsZGluZ3MgfSBmcm9tICcuL2FwaS5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJ1aWxkaW5ncygpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIW1hcCkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJNYXAgbm90IGluaXRpYWxpemVkXCIpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCdWlsZGluZ3MoKS50aGVuKGRhdGEgPT4ge1xyXG5cclxuICAgICAgICBkYXRhLmZvckVhY2goYiA9PiB7XHJcblxyXG4gICAgICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShiLmxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShiLmxuZykpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKdjCBCdWlsZGluZyBpZ25vcsOpIChjb29yZCBpbnZhbGlkZSlcIiwgYik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIEwubWFya2VyKFtiLmxhdCwgYi5sbmddKVxyXG4gICAgICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAoYCR7Yi50eXBlfSBsdmwgJHtiLmxldmVsfWApO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IHsgZmx5VG8gfSBmcm9tICcuL21hcC5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdQUyhkZWZhdWx0TGF0LCBkZWZhdWx0TG5nKSB7XHJcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgICAgbGV0IGdwc0ZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxyXG4gICAgICAgICAgICAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGdwc0ZvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmbHlUbyhcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge30sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWdwc0ZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBmbHlUbyhkZWZhdWx0TGF0LCBkZWZhdWx0TG5nLCA3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDU1MDApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEwgZnJvbSAnbGVhZmxldCc7XHJcbmltcG9ydCAnbGVhZmxldC9kaXN0L2xlYWZsZXQuY3NzJztcclxuXHJcbmltcG9ydCB7IGRlYnVnTG9nIH0gZnJvbSAnLi9Db25maWcvZGVidWcuanMnO1xyXG5cclxuaW1wb3J0IHsgZ3JpZExheWVyLCBpbml0R3JpZExheWVyIH0gZnJvbSAnLi9MYXllcnMvZ3JpZExheWVyLmpzJztcclxuaW1wb3J0IHsgbG9hZFZpc2libGVSb2FkQ2h1bmtzIH0gZnJvbSAnLi9Sb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL1JvYWRzL3JvYWRzU3RhdGUuanMnO1xyXG5cclxuaW1wb3J0IHsgbG9hZEJhc2VGcm9tU2VydmVyLCBsb2FkT3RoZXJCYXNlIH0gZnJvbSAnLi9iYXNlLmpzJztcclxuXHJcbmltcG9ydCBtYXJrZXJJY29uIGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJztcclxuaW1wb3J0IG1hcmtlclNoYWRvdyBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJztcclxuXHJcbkwuTWFya2VyLnByb3RvdHlwZS5vcHRpb25zLmljb24gPSBMLmljb24oe1xyXG4gICAgaWNvblVybDogbWFya2VySWNvbixcclxuICAgIHNoYWRvd1VybDogbWFya2VyU2hhZG93LFxyXG59KTtcclxuXHJcbmxldCBtYXBJbnN0YW5jZSA9IG51bGw7XHJcbmxldCBtb3ZlVGltZW91dCA9IG51bGw7XHJcbmxldCBpc0NodW5rTW9kZSA9IGZhbHNlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNYXAobGF0LCBsbmcpIHtcclxuXHJcbiAgICBtYXBJbnN0YW5jZSA9IEwubWFwKCdtYXAnKS5zZXRWaWV3KFtsYXQsIGxuZ10sIDcpO1xyXG5cclxuICAgIEwudGlsZUxheWVyKCdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHtcclxuICAgICAgICBhdHRyaWJ1dGlvbjogJyZjb3B5OyBPcGVuU3RyZWV0TWFwJ1xyXG4gICAgfSkuYWRkVG8obWFwSW5zdGFuY2UpO1xyXG5cclxuICAgIEwuY29udHJvbC5sYXllcnMobnVsbCwge1xyXG4gICAgICAgIFwiQ2h1bmsgR3JpZFwiOiBncmlkTGF5ZXJcclxuICAgIH0pLmFkZFRvKG1hcEluc3RhbmNlKTtcclxuXHJcbiAgICBMLmNvbnRyb2wubGF5ZXJzKG51bGwsIHtcclxuICAgICAgICBcImVhdVwiOiBncmlkTGF5ZXIsXHJcbiAgICAgICAgXCJmZXJcIjogZ3JpZExheWVyXHJcbiAgICB9KS5hZGRUbyhtYXBJbnN0YW5jZSk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBDRU5UUkFMIENIVU5LIENPTlRST0xMRVJcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIG1hcEluc3RhbmNlLm9uKCdtb3ZlZW5kJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIWlzQ2h1bmtNb2RlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKG1hcEluc3RhbmNlLmdldFpvb20oKSA8IDE0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dChtb3ZlVGltZW91dCk7XHJcblxyXG4gICAgICAgIG1vdmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGluaXRHcmlkTGF5ZXIoKTtcclxuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcEluc3RhbmNlLm9uKCdvdmVybGF5YWRkJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5sYXllciA9PT0gZ3JpZExheWVyKSB7XHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiZ3JpZFwiLCBcIkdyaWQgT05cIik7XHJcblxyXG4gICAgICAgICAgICBpbml0R3JpZExheWVyKCk7XHJcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG1hcEluc3RhbmNlLm9uKCdvdmVybGF5cmVtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5sYXllciA9PT0gZ3JpZExheWVyKSB7XHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiZ3JpZFwiLCBcIkdyaWQgT0ZGXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRVZFTlRTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcEluc3RhbmNlLm9uKCd6b29tZW5kJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB6b29tID0gbWFwSW5zdGFuY2UuZ2V0Wm9vbSgpO1xyXG5cclxuICAgICAgICBpZiAoem9vbSA+PSAxNCkge1xyXG4gICAgICAgICAgICBlbnRlckNodW5rTW9kZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV4aXRDaHVua01vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzR3JpZExheWVyQWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIG1hcEluc3RhbmNlPy5oYXNMYXllcihncmlkTGF5ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFwKCkge1xyXG4gICAgcmV0dXJuIG1hcEluc3RhbmNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmx5VG8obGF0LCBsbmcsIHpvb20gPSAxMykge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBtYXAuZmx5VG8oW2xhdCwgbG5nXSwgem9vbSwge1xyXG4gICAgICAgIGFuaW1hdGU6IHRydWUsXHJcbiAgICAgICAgZHVyYXRpb246IDEuNVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBXT1JMRFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRXb3JsZCgpIHtcclxuXHJcbiAgICBmZXRjaCgnL2FwaS93b3JsZC1zdGF0ZScpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuYnVpbGRpbmdzLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgICAgICAgICBMLm1hcmtlcihbYi5sYXQsIGIubG5nXSlcclxuICAgICAgICAgICAgICAgICAgICAuYWRkVG8obWFwKVxyXG4gICAgICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAoYCR7Yi50eXBlfSBsdmwgJHtiLmxldmVsfWApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLmJhc2VzKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGhhc0NlbnRlcmVkID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAgICAgZGF0YS5iYXNlcy5mb3JFYWNoKGJhc2UgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoYmFzZS5pc01lKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkQmFzZUZyb21TZXJ2ZXIoYmFzZS5sYXQsIGJhc2UubG5nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzQ2VudGVyZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZseVRvKGJhc2UubGF0LCBiYXNlLmxuZywgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2VudGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsb2FkT3RoZXJCYXNlKGJhc2UubGF0LCBiYXNlLmxuZywgYmFzZS5wc2V1ZG8pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvYWQgd29ybGRcIiwgZXJyKTtcclxuICAgICAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gZW50ZXJDaHVua01vZGUoKSB7XHJcbiAgICBpZiAoaXNDaHVua01vZGUpIHJldHVybjtcclxuXHJcbiAgICBpc0NodW5rTW9kZSA9IHRydWU7XHJcblxyXG4gICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCJFTlRFUiBDSFVOSyBNT0RFXCIpO1xyXG5cclxuICAgIGluaXRHcmlkTGF5ZXIoKTtcclxuICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBleGl0Q2h1bmtNb2RlKCkge1xyXG4gICAgaWYgKCFpc0NodW5rTW9kZSkgcmV0dXJuO1xyXG5cclxuICAgIGlzQ2h1bmtNb2RlID0gZmFsc2U7XHJcblxyXG4gICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCJFWElUIENIVU5LIE1PREVcIik7XHJcblxyXG4gICAgaWYgKG1hcEluc3RhbmNlLmhhc0xheWVyKGdyaWRMYXllcikpIHtcclxuICAgICAgICBtYXBJbnN0YW5jZS5yZW1vdmVMYXllcihncmlkTGF5ZXIpO1xyXG4gICAgfVxyXG59IiwiZnVuY3Rpb24gYXR0YWNoSG92ZXJEcm9wZG93bih0b2dnbGVTZWxlY3Rvcikge1xyXG4gICAgY29uc3QgdG9nZ2xlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwodG9nZ2xlU2VsZWN0b3IpO1xyXG5cclxuICAgIHRvZ2dsZXMuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XHJcbiAgICAgICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgICAgICBpZiAoIXRhcmdldFNlbGVjdG9yKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IGRyb3Bkb3duQ29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0U2VsZWN0b3IpO1xyXG4gICAgICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICAgICAgbGV0IGlzT3BlbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBjb25zdCBzaG93RHJvcGRvd24gPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIGhpZGVUaW1lb3V0ID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwic2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHJlYWxseUhpZGVEcm9wZG93biA9ICgpID0+IHtcclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmFuaW1hdGlvbiA9IFwiZG9udC1zaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50LmFuaW1hdGlvbk5hbWUgPT09IFwiZG9udC1zaG93LWNvbnRlbnRcIikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlzT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGlkZURyb3Bkb3duID0gKCkgPT4ge1xyXG4gICAgICAgICAgICBoaWRlVGltZW91dCA9IHNldFRpbWVvdXQocmVhbGx5SGlkZURyb3Bkb3duLCAxNTApO1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IHRvZ2dsZURyb3Bkb3duID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzT3Blbikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2hvd0Ryb3Bkb3duKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlZW50ZXJcIiwgc2hvd0Ryb3Bkb3duKTtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuYWRkRXZlbnRMaXN0ZW5lcihcIm1vdXNlbGVhdmVcIiwgaGlkZURyb3Bkb3duKTtcclxuXHJcbiAgICAgICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIHRvZ2dsZURyb3Bkb3duKTtcclxuICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdG9nZ2xlRHJvcGRvd24sIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgICAgIC8vIEZlcm1lciBzaSBvbiBjbGlxdWUgYWlsbGV1cnNcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc09wZW4gJiYgIXRvZ2dsZS5jb250YWlucyhldmVudC50YXJnZXQpICYmICFkcm9wZG93bkNvbnRlbnQuY29udGFpbnMoZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJlYWxseUhpZGVEcm9wZG93bigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNPcGVuICYmICF0b2dnbGUuY29udGFpbnMoZXZlbnQudGFyZ2V0KSAmJiAhZHJvcGRvd25Db250ZW50LmNvbnRhaW5zKGV2ZW50LnRhcmdldCkpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoaWRlVGltZW91dCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZWFsbHlIaWRlRHJvcGRvd24oKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaE5hdmJhckRyb3Bkb3duKCkge1xyXG4gICAgY29uc3QgdG9nZ2xlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5uYXZiYXItZHJvcGRvd24tdG9nZ2xlXCIpO1xyXG4gICAgY29uc3QgbmF2YmFyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIubmF2YmFyX21lbnVcIik7XHJcbiAgICBjb25zdCBuYXZiYXJDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmRyb3Bkb3duLW5hdmJhclwiKTtcclxuXHJcbiAgICBpZiAoIXRvZ2dsZSB8fCAhbmF2YmFyTWVudSB8fCAhbmF2YmFyQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgdGFyZ2V0U2VsZWN0b3IgPSB0b2dnbGUuZGF0YXNldC5kcm9wZG93blRhcmdldDtcclxuICAgIGlmICghdGFyZ2V0U2VsZWN0b3IpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBkcm9wZG93bkNvbnRlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldFNlbGVjdG9yKTtcclxuICAgIGlmICghZHJvcGRvd25Db250ZW50KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgcmVnaW9uRWxzID0gW3RvZ2dsZSwgbmF2YmFyQ29udGFpbmVyLCBkcm9wZG93bkNvbnRlbnRdO1xyXG5cclxuICAgIGxldCBoaWRlVGltZW91dCA9IG51bGw7XHJcbiAgICBsZXQgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICBsZXQgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3QgaXNJblJlZ2lvbiA9IChlbCkgPT5cclxuICAgICAgICByZWdpb25FbHMuc29tZSgobm9kZSkgPT4gbm9kZSAmJiBub2RlLmNvbnRhaW5zKGVsKSk7XHJcblxyXG4gICAgY29uc3Qgc2hvd0FsbCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICAgICAgaGlkZVRpbWVvdXQgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaXNDbG9zaW5nID0gZmFsc2U7XHJcbiAgICAgICAgaXNPcGVuID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgZHJvcGRvd25Db250ZW50LnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuYW5pbWF0aW9uID0gXCJzaG93LWNvbnRlbnQgMC4yNXMgZWFzZSBmb3J3YXJkc1wiO1xyXG4gICAgICAgIHRvZ2dsZS5jbGFzc0xpc3QuYWRkKFwiZHJvcGRvd24tb3BlblwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QucmVtb3ZlKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgICAgIG5hdmJhck1lbnUuY2xhc3NMaXN0LmFkZChcIm5hdmJhci1tZW51LWFuaW0taGlkZVwiKTtcclxuXHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZWFsbHlIaWRlQWxsID0gKCkgPT4ge1xyXG4gICAgICAgIGlzQ2xvc2luZyA9IHRydWU7XHJcbiAgICAgICAgaXNPcGVuID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5zdHlsZS5hbmltYXRpb24gPSBcImRvbnQtc2hvdy1jb250ZW50IDAuMjVzIGVhc2UgZm9yd2FyZHNcIjtcclxuXHJcbiAgICAgICAgY29uc3QgaGFuZGxlciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoZXZlbnQuYW5pbWF0aW9uTmFtZSA9PT0gXCJkb250LXNob3ctY29udGVudFwiKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ2xvc2luZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRyb3Bkb3duQ29udGVudC5yZW1vdmVFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBkcm9wZG93bkNvbnRlbnQuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgICAgICAgICAgdG9nZ2xlLmNsYXNzTGlzdC5yZW1vdmUoXCJkcm9wZG93bi1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgZHJvcGRvd25Db250ZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgaGFuZGxlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG4gICAgICAgIGRyb3Bkb3duQ29udGVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGhhbmRsZXIpO1xyXG5cclxuICAgICAgICBuYXZiYXJDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZShcImRyb3Bkb3duLW5hdmJhci1hbmltLXNob3dcIik7XHJcbiAgICAgICAgbmF2YmFyQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoXCJkcm9wZG93bi1uYXZiYXItYW5pbS1oaWRlXCIpO1xyXG5cclxuICAgICAgICBuYXZiYXJNZW51LmNsYXNzTGlzdC5yZW1vdmUoXCJuYXZiYXItbWVudS1hbmltLWhpZGVcIik7XHJcbiAgICAgICAgbmF2YmFyTWVudS5jbGFzc0xpc3QuYWRkKFwibmF2YmFyLW1lbnUtYW5pbS1zaG93XCIpO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBvbkxlYXZlUmVnaW9uID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdG8gPSBldmVudC5yZWxhdGVkVGFyZ2V0O1xyXG4gICAgICAgIGlmICh0byAmJiBpc0luUmVnaW9uKHRvKSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KGhpZGVUaW1lb3V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaGlkZVRpbWVvdXQgPSBzZXRUaW1lb3V0KHJlYWxseUhpZGVBbGwsIDE1MCk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHRvZ2dsZU5hdmJhciA9IChldmVudCkgPT4ge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XHJcblxyXG4gICAgICAgIGlmIChpc09wZW4pIHtcclxuICAgICAgICAgICAgaWYgKGhpZGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgICAgICBjbGVhclRpbWVvdXQoaGlkZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlYWxseUhpZGVBbGwoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzaG93QWxsKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICAvLyBEZXNrdG9wIDogaG92ZXJcclxuICAgIHJlZ2lvbkVscy5mb3JFYWNoKChlbCkgPT4ge1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWVudGVyXCIsIHNob3dBbGwpO1xyXG4gICAgICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWxlYXZlXCIsIG9uTGVhdmVSZWdpb24pO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gTW9iaWxlIDogY2xpY2svdG91Y2hcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgdG9nZ2xlTmF2YmFyKTtcclxuICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0b2dnbGVOYXZiYXIsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XHJcblxyXG4gICAgLy8gRmVybWVyIHNpIG9uIGNsaXF1ZSBhaWxsZXVyc1xyXG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaHN0YXJ0XCIsIChldmVudCkgPT4ge1xyXG4gICAgICAgIGlmIChpc09wZW4gJiYgIWlzSW5SZWdpb24oZXZlbnQudGFyZ2V0KSkge1xyXG4gICAgICAgICAgICBpZiAoaGlkZVRpbWVvdXQpIHtcclxuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dChoaWRlVGltZW91dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVhbGx5SGlkZUFsbCgpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCAoKSA9PiB7XHJcbiAgICBhdHRhY2hOYXZiYXJEcm9wZG93bigpO1xyXG4gICAgYXR0YWNoSG92ZXJEcm9wZG93bihcIi5sYW5ndWFnZS1kcm9wZG93bi10b2dnbGVcIik7XHJcbiAgICBhdHRhY2hIb3ZlckRyb3Bkb3duKFwiLnRoZW1lLWRyb3Bkb3duLXRvZ2dsZVwiKTtcclxufSk7IiwiLyogPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgVkFMSURBVElPTiBHw4lOw4lSSVFVRSBERVMgRk9STVVMQUlSRVNcclxuICAgRW1haWxzICsgTW90cyBkZSBwYXNzZSArIFBzZXVkb3MgKyBDdXN0b20gdmFsaWRhdG9yc1xyXG4gICBDb21wYXRpYmxlIFN1cHBvcnQgLyBVc2VyIC8gTG9naW4gLyBGb3Jnb3RQYXNzd29yZFxyXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xyXG5cclxuY29uc3Qgc2VsZWN0b3IgPSAnaW5wdXRbdHlwZT1cInRleHRcIl0sIGlucHV0W3R5cGU9XCJudW1iZXJcIl0sIGlucHV0W3R5cGU9XCJlbWFpbFwiXSwgaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdLCBzZWxlY3QsIHRleHRhcmVhJztcclxuY29uc3QgaW5wdXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcbmNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYWxsLWZvcm0nKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZvbmN0aW9ucyBkJ2FwcGFyZW5jZSBkZXMgaW5wdXRzXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGluaXRJbnB1dChpbnB1dEVsKSB7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXRFbC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXRFbC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmIChpbnB1dEVsLnZhbHVlLnRyaW0oKSAhPT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWZpbGxlZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBvbkZvY3VzKTtcclxuICAgIGlucHV0RWwuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIG9uQmx1cik7XHJcblxyXG4gICAgLy8gUG91ciBsZSByZXNwb25zaXZlIG1vYmlsZVxyXG4gICAgaW5wdXRFbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG9uQmx1cik7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uRm9jdXMoZXYpIHtcclxuICAgIGNvbnN0IHBhcmVudCA9IGV2LnRhcmdldC5jbG9zZXN0KCdzcGFuJykgfHwgZXYudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKHBhcmVudCAmJiBwYXJlbnQuY2xhc3NMaXN0KSB7XHJcbiAgICAgICAgcGFyZW50LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0tZmlsbGVkJyk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uQmx1cihldikge1xyXG4gICAgY29uc3QgaW5wdXQgPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgaWYgKGlucHV0LnZhbHVlLnRyaW0oKSA9PT0gJycpIHtcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QucmVtb3ZlKCdpbnB1dHMtLWZpbGxlZCcsICdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gbGl2ZVZhbGlkYXRpb24oZXYpIHtcclxuICAgIGNvbnN0IGlucHV0ID0gZXYudGFyZ2V0O1xyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5yZW1vdmUoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBTeXN0w6htZSBkZSB2YWxpZGF0aW9uIGfDqW7DqXJpcXVlXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmNvbnN0IHZhbGlkYXRvcnMgPSB7fTtcclxuY29uc3QgdmFsaWRhdGlvblRpbWVycyA9IHt9OyAvLyBTdG9ja2FnZSBkZXMgdGltZXJzXHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCB2YWxpZGF0ZUZuKSB7XHJcbiAgICB2YWxpZGF0b3JzW2lucHV0SWRdID0geyBlcnJvcklkLCB2YWxpZGF0ZUZuIH07XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJ1blZhbGlkYXRvcihpbnB1dElkKSB7XHJcbiAgICBjb25zdCBjb25maWcgPSB2YWxpZGF0b3JzW2lucHV0SWRdO1xyXG4gICAgaWYgKCFjb25maWcpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5wdXRJZCk7XHJcbiAgICBjb25zdCBlcnJvckJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbmZpZy5lcnJvcklkKTtcclxuXHJcbiAgICBpZiAoIWlucHV0IHx8ICFlcnJvckJveCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgY29uc3Qgd3JhcHBlciA9IGlucHV0LmNsb3Nlc3QoJ3NwYW4nKSB8fCBpbnB1dC5wYXJlbnRFbGVtZW50O1xyXG5cclxuICAgIGVycm9yQm94LnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgIGVycm9yQm94LnRleHRDb250ZW50ID0gJ1xcdTAwQTAnO1xyXG4gICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gY29uZmlnLnZhbGlkYXRlRm4oaW5wdXQudmFsdWUsIGlucHV0KTtcclxuXHJcbiAgICBpZiAocmVzdWx0ICE9PSB0cnVlKSB7XHJcbiAgICAgICAgZXJyb3JCb3gudGV4dENvbnRlbnQgPSByZXN1bHQ7XHJcbiAgICAgICAgZXJyb3JCb3guc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgICAgICB3cmFwcGVyPy5jbGFzc0xpc3QuYWRkKCdpbnB1dHMtLWludmFsaWQnKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGF0dGFjaFZhbGlkYXRvcihpbnB1dElkLCBldmVudFR5cGVzID0gWydpbnB1dCcsICdibHVyJ10sIGRlbGF5TXMgPSAzMDAwKSB7XHJcbiAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlucHV0SWQpO1xyXG4gICAgaWYgKCFpbnB1dCkgcmV0dXJuO1xyXG5cclxuICAgIGV2ZW50VHlwZXMuZm9yRWFjaChldmVudFR5cGUgPT4ge1xyXG4gICAgICAgIGlmIChldmVudFR5cGUgPT09ICdpbnB1dCcpIHtcclxuICAgICAgICAgICAgLy8gUG91ciBsJ8OpdsOpbmVtZW50ICdpbnB1dCcsIG9uIGFqb3V0ZSB1biBkw6lsYWkgZGUgMyBzZWNvbmRlc1xyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25UaW1lcnNbaW5wdXRJZF0gPSBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBydW5WYWxpZGF0b3IoaW5wdXRJZCk7XHJcbiAgICAgICAgICAgICAgICB9LCBkZWxheU1zKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjaGFuZ2UnKSB7XHJcbiAgICAgICAgICAgIC8vIFBvdXIgJ2NoYW5nZScsIHZhbGlkYXRpb24gaW1tw6lkaWF0ZVxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdibHVyJykge1xyXG4gICAgICAgICAgICAvLyBQb3VyICdibHVyJywgdmFsaWRhdGlvbiBpbW3DqWRpYXRlXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyBBam91dGVyICd0b3VjaGVuZCcgcG91ciBtb2JpbGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hlbmQnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIFBldGl0IGTDqWxhaSBwb3VyIMOpdml0ZXIgbGVzIGRvdWJsZXMgZMOpY2xlbmNoZW1lbnRzXHJcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHJ1blZhbGlkYXRvcihpbnB1dElkKSwgMTAwKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIGlmIChldmVudFR5cGUgPT09ICdjbGljaycpIHtcclxuICAgICAgICAgICAgLy8gUG91ciAnY2xpY2snLCB2YWxpZGF0aW9uIGltbcOpZGlhdGVcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJ1blZhbGlkYXRvcihpbnB1dElkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIEVNQUlMUyAoZ8OpbsOpcmlxdWVzIHBvdXIgdG91dCBsZSBzaXRlKVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuZnVuY3Rpb24gcmVnaXN0ZXJFbWFpbChpbnB1dElkLCBlcnJvcklkKSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgdiA9IHZhbHVlLnRyaW0oKTtcclxuICAgICAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ2VtYWlsX3JlcXVpcmVkJyk7XHJcbiAgICAgICAgaWYgKCFpbnB1dC5jaGVja1ZhbGlkaXR5KCkpIHJldHVybiB0KCdlbWFpbF9pbnZhbGlkJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgZW1haWxGaWVsZHMgPSBbXHJcbiAgICB7IGlucHV0SWQ6IFwic3VwcG9ydF9lbWFpbFwiLCBlcnJvcklkOiBcImVtYWlsLWVycm9yXCIgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VyX2VtYWlsXCIsIGVycm9ySWQ6IFwidXNlcl9lbWFpbC1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwidXNlcm5hbWVcIiwgZXJyb3JJZDogXCJ1c2VybmFtZS1lcnJvclwiIH0sXHJcbiAgICB7IGlucHV0SWQ6IFwiZm9yZ290X3Bhc3N3b3JkX3JlcXVlc3RfZm9ybV9lbWFpbFwiLCBlcnJvcklkOiBcImZvcmdvdF9lbWFpbC1lcnJvclwiIH1cclxuXTtcclxuXHJcbmVtYWlsRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlckVtYWlsKGYuaW5wdXRJZCwgZi5lcnJvcklkKSk7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBWQUxJREFURVVSUyBQU0VVRE9TIChnw6luw6lyaXF1ZXMpXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5mdW5jdGlvbiB0KGtleSkge1xyXG4gICAgcmV0dXJuICh3aW5kb3cuYXBwVHJhbnNsYXRpb25zICYmIHdpbmRvdy5hcHBUcmFuc2xhdGlvbnNba2V5XSkgfHwga2V5O1xyXG59XHJcblxyXG5mdW5jdGlvbiByZWdpc3RlclBzZXVkbyhpbnB1dElkLCBlcnJvcklkLCBtaW5MZW5ndGggPSAzKSB7XHJcbiAgICByZWdpc3RlclZhbGlkYXRvcihpbnB1dElkLCBlcnJvcklkLCAodmFsdWUpID0+IHtcclxuICAgICAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgICAgIGlmICh2ID09PSBcIlwiKSByZXR1cm4gdCgncHNldWRvX3JlcXVpcmVkJyk7XHJcbiAgICAgICAgaWYgKHYubGVuZ3RoIDwgbWluTGVuZ3RoKSByZXR1cm4gdCgncHNldWRvX21pbl8zJyk7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9KTtcclxufVxyXG5cclxuY29uc3QgcHNldWRvRmllbGRzID0gW1xyXG4gICAgeyBpbnB1dElkOiBcInN1cHBvcnRfbmFtZVwiLCBlcnJvcklkOiBcInBzZXVkby1lcnJvclwiLCBtaW5MZW5ndGg6IDMgfSxcclxuICAgIHsgaW5wdXRJZDogXCJ1c2VyX3BzZXVkb1wiLCBlcnJvcklkOiBcInVzZXJfcHNldWRvLWVycm9yXCIsIG1pbkxlbmd0aDogMyB9LFxyXG5dO1xyXG5cclxucHNldWRvRmllbGRzLmZvckVhY2goZiA9PiByZWdpc3RlclBzZXVkbyhmLmlucHV0SWQsIGYuZXJyb3JJZCwgZi5taW5MZW5ndGgpKTtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRFVVJTIE1PVFMgREUgUEFTU0UgKGfDqW7DqXJpcXVlcylcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIsIFwidXNlcl9wYXNzd29yZF9maXJzdC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGNvbnN0IHYgPSB2YWx1ZS50cmltKCk7XHJcbiAgICBpZiAodiA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX3JlcXVpcmVkJyk7XHJcbiAgICBpZiAodi5sZW5ndGggPCA4KSByZXR1cm4gdCgncGFzc3dvcmRfbGVuZ3RoXzgnKTtcclxuICAgIGlmICghL1tBLVpdLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfdXBwZXInKTtcclxuICAgIGlmICghL1xcZC8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX251bWJlcicpO1xyXG4gICAgaWYgKCEvW1xcV19dLy50ZXN0KHYpKSByZXR1cm4gdCgncGFzc3dvcmRfc3BlY2lhbCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJ1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kXCIsIFwidXNlcl9wYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX2NvbmZpcm1fcmVxdWlyZWQnKTtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiB0KCdwYXNzd29yZF9taXNtYXRjaCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3RcIiwgXCJyZXNldF9wYXNzd29yZF9mb3JtX3BsYWluUGFzc3dvcmRfZmlyc3QtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgaWYgKHYubGVuZ3RoIDwgOCkgcmV0dXJuIHQoJ3Bhc3N3b3JkX2xlbmd0aF84Jyk7XHJcbiAgICBpZiAoIS9bQS1aXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3VwcGVyJyk7XHJcbiAgICBpZiAoIS9cXGQvLnRlc3QodikpIHJldHVybiB0KCdwYXNzd29yZF9udW1iZXInKTtcclxuICAgIGlmICghL1tcXFdfXS8udGVzdCh2KSkgcmV0dXJuIHQoJ3Bhc3N3b3JkX3NwZWNpYWwnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZFwiLCBcInJlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9zZWNvbmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCBmaXJzdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX2ZpcnN0XCIpO1xyXG4gICAgaWYgKCFmaXJzdCkgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgaWYgKHZhbHVlLnRyaW0oKSA9PT0gXCJcIikgcmV0dXJuIHQoJ3Bhc3N3b3JkX2NvbmZpcm1fcmVxdWlyZWQnKTtcclxuICAgIGlmICh2YWx1ZSAhPT0gZmlyc3QudmFsdWUpIHJldHVybiB0KCdwYXNzd29yZF9taXNtYXRjaCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gTW90IGRlIHBhc3NlIGRlIGNvbm5leGlvblxyXG5yZWdpc3RlclZhbGlkYXRvcihcInBhc3N3b3JkXCIsIFwicGFzc3dvcmQtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBpZiAodmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgncGFzc3dvcmRfcmVxdWlyZWQnKTtcclxuICAgIHJldHVybiB0cnVlO1xyXG59KTtcclxuXHJcbi8vIE1vdCBkZSBwYXNzZSBcIm91Ymxpw6lcIiAobm91dmVhdSBtb3QgZGUgcGFzc2UsIHNpIHR1IGFzIHVuIGNoYW1wcyBkw6lkacOpKVxyXG5yZWdpc3RlclZhbGlkYXRvcihcImZvcmdvdF9wYXNzd29yZFwiLCBcImZvcmdvdF9wYXNzd29yZC1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICh2YWx1ZS50cmltKCkgPT09IFwiXCIpIHJldHVybiB0KCdwYXNzd29yZF9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVEVVUlMgU1VQUE9SVCBTVVBQTMOJTUVOVEFJUkVTIOKGkiBjYXRlZ29yeSAvIG1lc3NhZ2UgLyBpbWFnZVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X2NhdGVnb3J5XCIsIFwic2VsZWN0ZS1lcnJvclwiLCAodmFsdWUpID0+IHtcclxuICAgIGlmICghdmFsdWUgfHwgdmFsdWUudHJpbSgpID09PSBcIlwiKSByZXR1cm4gdCgnc3VwcG9ydF9jYXRlZ29yeV9yZXF1aXJlZCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxucmVnaXN0ZXJWYWxpZGF0b3IoXCJzdXBwb3J0X21lc3NhZ2VcIiwgXCJ0ZXh0LWFyZWEtZXJyb3JcIiwgKHZhbHVlKSA9PiB7XHJcbiAgICBjb25zdCB2ID0gdmFsdWUudHJpbSgpO1xyXG4gICAgaWYgKHYgPT09IFwiXCIpIHJldHVybiB0KCdzdXBwb3J0X21lc3NhZ2VfcmVxdWlyZWQnKTtcclxuICAgIGlmICh2Lmxlbmd0aCA8IDEwKSByZXR1cm4gdCgnc3VwcG9ydF9tZXNzYWdlX21pbl8xMCcpO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gVkFMSURBVElPTiBERSBM4oCZSU1BR0UgKHN1cHBvcnQpXHJcbnJlZ2lzdGVyVmFsaWRhdG9yKFwic3VwcG9ydF9pbWFnZUZpbGVcIiwgXCJpbWFnZS1lcnJvclwiLCAodmFsdWUsIGlucHV0KSA9PiB7XHJcbiAgICBjb25zdCBmaWxlID0gaW5wdXQuZmlsZXNbMF07XHJcbiAgICBpZiAoIWZpbGUpIHJldHVybiB0cnVlO1xyXG5cclxuICAgIGNvbnN0IGFsbG93ZWQgPSBbXCJpbWFnZS9qcGVnXCIsIFwiaW1hZ2UvanBnXCIsIFwiaW1hZ2UvcG5nXCIsIFwiaW1hZ2Uvd2VicFwiXTtcclxuICAgIGNvbnN0IG1heCA9IDIgKiAxMDI0ICogMTAyNDtcclxuXHJcbiAgICBpZiAoIWFsbG93ZWQuaW5jbHVkZXMoZmlsZS50eXBlKSkgcmV0dXJuIHQoJ2ltYWdlX3R5cGUnKTtcclxuICAgIGlmIChmaWxlLnNpemUgPiBtYXgpIHJldHVybiB0KCdpbWFnZV9zaXplJyk7XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn0pO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNPVU1JU1NJT04gRFUgRk9STVVMQUlSRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gb25TdWJtaXQoZXYpIHtcclxuICAgIGxldCBoYXNFcnJvciA9IGZhbHNlO1xyXG5cclxuICAgIC8vIEFubnVsZXIgdG91cyBsZXMgdGltZXJzIGVuIGNvdXJzXHJcbiAgICBPYmplY3Qua2V5cyh2YWxpZGF0aW9uVGltZXJzKS5mb3JFYWNoKGlucHV0SWQgPT4ge1xyXG4gICAgICAgIGNsZWFyVGltZW91dCh2YWxpZGF0aW9uVGltZXJzW2lucHV0SWRdKTtcclxuICAgICAgICBkZWxldGUgdmFsaWRhdGlvblRpbWVyc1tpbnB1dElkXTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciB0b3VzIGxlcyB2YWxpZGF0ZXVycyBlbnJlZ2lzdHLDqXNcclxuICAgIE9iamVjdC5rZXlzKHZhbGlkYXRvcnMpLmZvckVhY2goKGlucHV0SWQpID0+IHtcclxuICAgICAgICBpZiAoIXJ1blZhbGlkYXRvcihpbnB1dElkKSkge1xyXG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gVsOpcmlmaWVyIGxhIHZhbGlkaXTDqSBIVE1MNSBkZXMgY2hhbXBzIHNhbnMgdmFsaWRhdGV1ciBjdXN0b21cclxuICAgIGNvbnN0IGZvcm0gPSBldi50YXJnZXQ7XHJcbiAgICBjb25zdCBpbnB1dHMgPSBmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIGlucHV0cy5mb3JFYWNoKChpbnB1dCkgPT4ge1xyXG4gICAgICAgIC8vIElnbm9yZXIgbGVzIGNoYW1wcyBxdWkgb250IGTDqWrDoCB1biB2YWxpZGF0ZXVyIGN1c3RvbVxyXG4gICAgICAgIGlmICh2YWxpZGF0b3JzW2lucHV0LmlkXSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCB3cmFwcGVyID0gaW5wdXQuY2xvc2VzdCgnc3BhbicpIHx8IGlucHV0LnBhcmVudEVsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICghaW5wdXQuY2hlY2tWYWxpZGl0eSgpKSB7XHJcbiAgICAgICAgICAgIHdyYXBwZXI/LmNsYXNzTGlzdC5hZGQoJ2lucHV0cy0taW52YWxpZCcpO1xyXG4gICAgICAgICAgICBoYXNFcnJvciA9IHRydWU7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LnJlbW92ZSgnaW5wdXRzLS1pbnZhbGlkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKGhhc0Vycm9yKSB7XHJcbiAgICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVRJQUxJU0FUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PVxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG4gICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5hbGwtZm9ybScpO1xyXG4gICAgY29uc3QgbG9naW5Gb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLWZvcm0nKTtcclxuICAgIGNvbnN0IGlucHV0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoc2VsZWN0b3IpO1xyXG5cclxuICAgIC8vIEluaXRpYWxpc2VyIGxlcyBpbnB1dHMgZGUgYmFzZVxyXG4gICAgaW5wdXRzLmZvckVhY2goKGlucHV0KSA9PiB7XHJcbiAgICAgICAgaW5pdElucHV0KGlucHV0KTtcclxuXHJcbiAgICAgICAgaWYgKGlucHV0LnRhZ05hbWUgPT09ICdTRUxFQ1QnICYmIGlucHV0LnZhbHVlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHdyYXBwZXIgPSBpbnB1dC5jbG9zZXN0KCdzcGFuJykgfHwgaW5wdXQucGFyZW50RWxlbWVudDtcclxuICAgICAgICAgICAgd3JhcHBlcj8uY2xhc3NMaXN0LmFkZCgnaW5wdXRzLS1maWxsZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBzdXBwb3J0XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbmFtZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9jYXRlZ29yeScsIFsnY2hhbmdlJywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3N1cHBvcnRfbWVzc2FnZScsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcignc3VwcG9ydF9pbWFnZUZpbGUnLCBbJ2NoYW5nZSddLCAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSB1dGlsaXNhdGV1clxyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BzZXVkbycsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9lbWFpbCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcl9wbGFpblBhc3N3b3JkX2ZpcnN0JywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG4gICAgYXR0YWNoVmFsaWRhdG9yKCd1c2VyX3BsYWluUGFzc3dvcmRfc2Vjb25kJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyBkdSBmb3JtdWxhaXJlIHJlc2V0IHBhc3N3b3JkXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Jlc2V0X3Bhc3N3b3JkX2Zvcm1fcGxhaW5QYXNzd29yZF9maXJzdCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuICAgIGF0dGFjaFZhbGlkYXRvcigncmVzZXRfcGFzc3dvcmRfZm9ybV9wbGFpblBhc3N3b3JkX3NlY29uZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsZXMgdmFsaWRhdGV1cnMgZHUgZm9ybXVsYWlyZSBkZSBjb25uZXhpb25cclxuICAgIGF0dGFjaFZhbGlkYXRvcigndXNlcm5hbWUnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ3Bhc3N3b3JkJywgWydpbnB1dCcsICdibHVyJ10sIDMwMDApO1xyXG5cclxuICAgIC8vIEF0dGFjaGVyIGxlcyB2YWxpZGF0ZXVycyDDqXZlbnR1ZWxzIGR1IGZvcm11bGFpcmUgXCJtb3QgZGUgcGFzc2Ugb3VibGnDqVwiXHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZF9yZXF1ZXN0X2Zvcm1fZW1haWwnLCBbJ2lucHV0JywgJ2JsdXInXSwgMzAwMCk7XHJcbiAgICBhdHRhY2hWYWxpZGF0b3IoJ2ZvcmdvdF9wYXNzd29yZCcsIFsnaW5wdXQnLCAnYmx1ciddLCAzMDAwKTtcclxuXHJcbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IHN1Ym1pdFxyXG4gICAgaWYgKGZvcm0pIHtcclxuICAgICAgICBmb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBBdHRhY2hlciBsYSB2YWxpZGF0aW9uIGF1IGZvcm11bGFpcmUgZGUgY29ubmV4aW9uXHJcbiAgICBpZiAobG9naW5Gb3JtKSB7XHJcbiAgICAgICAgbG9naW5Gb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uU3VibWl0KTtcclxuICAgIH1cclxufSk7IiwiZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgYm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb29raWUtY29uc2VudFwiKTtcclxuICAgIGNvbnN0IGFjY2VwdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiYWNjZXB0LWNvb2tpZXNcIik7XHJcbiAgICBjb25zdCByZWZ1c2UgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInJlZnVzZS1jb29raWVzXCIpO1xyXG4gICAgY29uc3QgcmVtZW1iZXJDaGVja2JveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiX3JlbWVtYmVyX21lXCIpO1xyXG5cclxuICAgIC8vIFbDqXJpZmllciBxdWUgbGVzIMOpbMOpbWVudHMgZXhpc3RlbnRcclxuICAgIGlmICghYm94IHx8ICFhY2NlcHQgfHwgIXJlZnVzZSkge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihcIsOJbMOpbWVudHMgY29va2llIG5vbiB0cm91dsOpc1wiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgLy8gQUZGSUNIQUdFIElOSVRJQUxcclxuICAgIGlmICghY29uc2VudCkge1xyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcInNob3dcIik7XHJcbiAgICAgICAgfSwgNjAwKTtcclxuICAgIH0gZWxzZSBpZiAoY29uc2VudCA9PT0gXCJyZWZ1c2VkXCIpIHtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBEw4lTQUNUSVZFUiBSRU1FTUJFUiBNRSBTSSBSRUZVU1xyXG4gICAgaWYgKGNvbnNlbnQgIT09IFwiYWNjZXB0ZWRcIiAmJiByZW1lbWJlckNoZWNrYm94KSB7XHJcbiAgICAgICAgcmVtZW1iZXJDaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQUNDRVBURVJcclxuICAgIGFjY2VwdC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJhY2NlcHRlZFwiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcInNob3dcIik7XHJcbiAgICAgICAgYm94LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFJFRlVTRVJcclxuICAgIHJlZnVzZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIiwgXCJyZWZ1c2VkXCIpO1xyXG4gICAgICAgIGJveC5jbGFzc0xpc3QucmVtb3ZlKFwic2hvd1wiKTtcclxuICAgICAgICBib3guY2xhc3NMaXN0LmFkZChcImNvbGxhcHNlZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHJlbWVtYmVyQ2hlY2tib3gpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHJlbWVtYmVyQ2hlY2tib3guZGlzYWJsZWQgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIFNJIE9OIENMSVFVRSBTVVIgTEUgQk9VVE9OIFLDiURVSVQg4oaSIFLDiUFGRklDSEVSIExBIEJBTk5Jw4hSRVxyXG4gICAgY29uc3QgY29sbGFwc2VCdG4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvb2tpZS1leHBhbmQtYnRuXCIpO1xyXG4gICAgaWYgKGNvbGxhcHNlQnRuKSB7XHJcbiAgICAgICAgY29sbGFwc2VCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcclxuICAgICAgICAgICAgYm94LmNsYXNzTGlzdC5yZW1vdmUoXCJjb2xsYXBzZWRcIik7XHJcbiAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBTSSBPTiBDTElRVUUgU1VSIFJFTUVNQkVSIE1FIEFQUsOIUyBVTiBSRUZVUyDihpIgUsOJQUZGSUNIRVIgTEEgQkFOTknDiFJFXHJcbiAgICBpZiAocmVtZW1iZXJDaGVja2JveCkge1xyXG4gICAgICAgIGNvbnN0IHJlbWVtYmVyTGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsYWJlbFtmb3I9XCJfcmVtZW1iZXJfbWVcIl0nKTtcclxuICAgICAgICBjb25zdCBjbGlja0hhbmRsZXIgPSAoZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjdXJyZW50Q29uc2VudCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiY29va2llLWNvbnNlbnRcIik7XHJcblxyXG4gICAgICAgICAgICBpZiAoY3VycmVudENvbnNlbnQgPT09IFwicmVmdXNlZFwiKSB7XHJcbiAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICBlLnN0b3BQcm9wYWdhdGlvbigpO1xyXG4gICAgICAgICAgICAgICAgcmVtZW1iZXJDaGVja2JveC5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBib3guY2xhc3NMaXN0LnJlbW92ZShcImNvbGxhcHNlZFwiKTtcclxuICAgICAgICAgICAgICAgIGJveC5jbGFzc0xpc3QuYWRkKFwic2hvd1wiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHJlbWVtYmVyQ2hlY2tib3guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGNsaWNrSGFuZGxlcik7XHJcbiAgICAgICAgaWYgKHJlbWVtYmVyTGFiZWwpIHtcclxuICAgICAgICAgICAgcmVtZW1iZXJMYWJlbC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgY2xpY2tIYW5kbGVyKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0pOyIsImRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5yZXNldC1idG4nKS5mb3JFYWNoKGJ1dHRvbiA9PiB7XHJcbiAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucHJldmlvdXNFbGVtZW50U2libGluZztcclxuICAgICAgICBpZiAoaW5wdXQgJiYgaW5wdXQuZGF0YXNldC5vcmlnaW5hbCAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQuZGF0YXNldC5vcmlnaW5hbDtcclxuICAgICAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufSk7IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbImluaXRNYXAiLCJsb2FkV29ybGQiLCJtYXAiLCJpbml0R1BTIiwiaW5pdEJhc2VVSSIsImxvYWRCdWlsZGluZ3MiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJlbmFibGVMZWFmbGV0RGVidWciLCJkZWZhdWx0TGF0IiwiZGVmYXVsdExuZyIsImRlYnVnIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwib3JpZ2luYWxNYXJrZXIiLCJMIiwibWFya2VyIiwib3JpZ2luYWxDaXJjbGUiLCJjaXJjbGUiLCJvcmlnaW5hbFBvbHlsaW5lIiwicG9seWxpbmUiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsImNvbnNvbGUiLCJsb2ciLCJ0cmFjZSIsImFwcGx5IiwiX2xlbjIiLCJfa2V5MiIsIl9sZW4zIiwiX2tleTMiLCJlIiwidCIsInIiLCJTeW1ib2wiLCJuIiwiaXRlcmF0b3IiLCJvIiwidG9TdHJpbmdUYWciLCJpIiwiYyIsInByb3RvdHlwZSIsIkdlbmVyYXRvciIsInUiLCJPYmplY3QiLCJjcmVhdGUiLCJfcmVnZW5lcmF0b3JEZWZpbmUyIiwiZiIsInAiLCJ5IiwiRyIsInYiLCJhIiwiZCIsImJpbmQiLCJsIiwiVHlwZUVycm9yIiwiY2FsbCIsImRvbmUiLCJ2YWx1ZSIsIkdlbmVyYXRvckZ1bmN0aW9uIiwiR2VuZXJhdG9yRnVuY3Rpb25Qcm90b3R5cGUiLCJnZXRQcm90b3R5cGVPZiIsInNldFByb3RvdHlwZU9mIiwiX19wcm90b19fIiwiZGlzcGxheU5hbWUiLCJfcmVnZW5lcmF0b3IiLCJ3IiwibSIsImRlZmluZVByb3BlcnR5IiwiX3JlZ2VuZXJhdG9yRGVmaW5lIiwiX2ludm9rZSIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsImFzeW5jR2VuZXJhdG9yU3RlcCIsIlByb21pc2UiLCJyZXNvbHZlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiX25leHQiLCJfdGhyb3ciLCJnZXRNYXAiLCJyZWZyZXNoQ2h1bmsiLCJpbnZhbGlkYXRlQ2h1bmsiLCJkZWJ1Z0xvZyIsImRlYnVnRXJyb3IiLCJzbmFwVG9DaHVuayIsIkNIVU5LX1NJWkUiLCJDSFVOS19SQURJVVMiLCJnZXRFbGVtZW50QnlJZCIsImdldENvbnRhaW5lciIsInN0eWxlIiwiY3Vyc29yIiwiYWxlcnQiLCJvbmNlIiwiX3JlZiIsIl9jYWxsZWUiLCJfZSRsYXRsbmciLCJsYXQiLCJsbmciLCJzbmFwcGVkIiwiX3QiLCJfY29udGV4dCIsImxhdGxuZyIsImNodW5rSWQiLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIl94IiwiVFlQRV9NQVAiLCJERUJVRyIsImVuYWJsZWQiLCJjaHVua3MiLCJuZXR3b3JrIiwiY2FjaGUiLCJ0eXBlIiwiX2NvbnNvbGUyIiwiX2NvbnNvbGUiLCJjb25jYXQiLCJfY29uc29sZTMiLCJrZXkiLCJlcnJvciIsIlJPQUQiLCJDSFVOSyIsIkJVSUxESU5HIiwiaXNHcmlkTGF5ZXJBY3RpdmUiLCJncmlkTGF5ZXIiLCJsYXllckdyb3VwIiwidmlzaWJsZUNodW5rcyIsIk1hcCIsImluaXRHcmlkTGF5ZXIiLCJ6b29tIiwiZ2V0Wm9vbSIsImJvdW5kcyIsImdldEJvdW5kcyIsIm1pbkxhdCIsIk1hdGgiLCJmbG9vciIsImdldFNvdXRoIiwibWF4TGF0IiwiY2VpbCIsImdldE5vcnRoIiwibWluTG5nIiwiZ2V0V2VzdCIsIm1heExuZyIsImdldEVhc3QiLCJuZXdWaXNpYmxlIiwiU2V0IiwiX2xvb3AiLCJpZCIsImoiLCJhZGQiLCJoYXMiLCJyZWN0IiwicmVjdGFuZ2xlIiwiY29sb3IiLCJ3ZWlnaHQiLCJmaWxsT3BhY2l0eSIsIm9uIiwic2V0U3R5bGUiLCJhZGRMYXllciIsInNldCIsIl9pdGVyYXRvciIsIl9jcmVhdGVGb3JPZkl0ZXJhdG9ySGVscGVyIiwiZW50cmllcyIsIl9zdGVwIiwicyIsIl9zdGVwJHZhbHVlIiwiX3NsaWNlZFRvQXJyYXkiLCJyZW1vdmVMYXllciIsImVyciIsInNpemUiLCJzZXRDaHVua0NvbG9yIiwiZ2V0Iiwicm9hZHNTdGF0ZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJmaW5kQ2xvc2VzdFBvaW50T25Sb2FkIiwicm9hZHMiLCJiZXN0UG9pbnQiLCJiZXN0RGlzdGFuY2UiLCJJbmZpbml0eSIsImlzQXJyYXkiLCJwb2ludCIsImRpc3RhbmNlIiwiZm9yRWFjaCIsInJvYWQiLCJwb2ludHMiLCJhUmF3IiwiYlJhdyIsIndhcm4iLCJsYXRMbmciLCJiIiwicHJvamVjdGVkIiwicHJvamVjdFBvaW50T25TZWdtZW50IiwiZGlzdCIsImZpbmRDbG9zZXN0U2VnbWVudCIsImJlc3RTZWdtZW50IiwibWlkIiwiQSIsIkIiLCJQIiwiQUIiLCJBUCIsImFiMiIsIm1heCIsIm1pbiIsImRpc3RhbmNlVG9TZWdtZW50IiwiZGVidWdSb2FkcyIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9uIiwiRiIsIm5leHQiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsImxvYWRpbmdRdWV1ZSIsIk1BWF9DT05DVVJSRU5UIiwiYWN0aXZlUmVxdWVzdHMiLCJnZXRDaHVua0lkIiwieCIsImxvYWRWaXNpYmxlUm9hZENodW5rcyIsIl9sb2FkVmlzaWJsZVJvYWRDaHVua3MiLCJjaHVua3NUb0xvYWQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2NodW5rSWQyIiwicmVzcG9uc2UiLCJkYXRhIiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsImNodW5rRGF0YSIsImhhc1JvYWRzIiwiX2l0ZXJhdG9yNCIsIl9zdGVwNCIsIl9jaHVua0lkIiwiZ2V0VmlzaWJsZUNodW5rcyIsImZpbHRlciIsImxvYWRlZENodW5rcyIsInN0YXR1cyIsImJ1aWxkaW5ncyIsInJlZnJlc2hDaHVua0NvbG9ycyIsImpzb24iLCJjaHVuayIsIl94MiIsIl9yZWZyZXNoQ2h1bmsiLCJfY2FsbGVlMiIsIl9jb250ZXh0MiIsImZldGNoU2luZ2xlQ2h1bmsiLCJfeDMiLCJfZmV0Y2hTaW5nbGVDaHVuayIsIl9jYWxsZWUzIiwiX3QyIiwiX2NvbnRleHQzIiwib2siLCJzZXRJdGVtIiwidHMiLCJEYXRlIiwibm93IiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInB1c2giLCJyb2Fkc1JlYWR5IiwiZHJhd25Sb2FkcyIsInJvYWRMYXllcnMiLCJidWlsZGluZ0xheWVycyIsImNhY2hlZFJvYWRzIiwiY2FjaGVEaXJ0eSIsIm1hcmtSb2FkQ2FjaGVEaXJ0eSIsImdldEFsbExvYWRlZFJvYWRzIiwidmFsdWVzIiwiZmxhdE1hcCIsInNob3dOb3RpZmljYXRpb24iLCJtZXNzYWdlIiwibm90aWYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJidWlsZFJlcXVlc3QiLCJ0eXBlSWQiLCJ0eXBlX2lkIiwiZ2V0QnVpbGRpbmdzIiwicmVzIiwiZmx5VG8iLCJzYWZlTG9hZENodW5rIiwiYmFzZU1hcmtlciIsImJhc2VDaXJjbGUiLCJiYXNlUG9zaXRpb24iLCJiYXNlQ3JlYXRlZCIsInBsYWNpbmdCYXNlIiwicHJldmlld01hcmtlciIsInByZXZpZXdDaXJjbGUiLCJwcmV2aWV3U25hcExhdExuZyIsInByZXZpZXdMaW5lIiwiaGlnaGxpZ2h0ZWRTZWdtZW50IiwiYmFzZUJ0biIsIm1vZGUiLCJkYXRhc2V0IiwiX3ByZXZpZXdTbmFwTGF0TG5nIiwiaXNCYXNlUGxhY2VtZW50VmFsaWQiLCJjbGVhbnVwUHJldmlldyIsImNyZWF0ZUJhc2UiLCJyZXN1bHQiLCJpc1ZhbGlkIiwicmFkaXVzIiwiYWRkVG8iLCJvcGFjaXR5IiwiZGFzaEFycmF5Iiwic2VnbWVudCIsInVwZGF0ZUJhc2VEaXNwbGF5IiwidXBkYXRlT3RoZXJCYXNlcyIsIm90aGVyQmFzZXMiLCJldmVyeSIsImJhc2UiLCJFcnJvciIsInJlbW92ZUJhc2UiLCJjcmVhdGVCYXNlSWNvbiIsImljb24iLCJpY29uVXJsIiwiaWNvblNpemUiLCJpY29uQW5jaG9yIiwicG9wdXBBbmNob3IiLCJoYXNMYXllciIsInNldEljb24iLCJsb2FkT3RoZXJCYXNlIiwicHNldWRvIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJiaW5kUG9wdXAiLCJsb2FkQmFzZUZyb21TZXJ2ZXIiLCJsZXZlbCIsIm5hdmlnYXRvciIsImdlb2xvY2F0aW9uIiwiZ3BzRm91bmQiLCJ3YXRjaFBvc2l0aW9uIiwicG9zaXRpb24iLCJjb29yZHMiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInRpbWVvdXQiLCJtYXJrZXJJY29uIiwibWFya2VyU2hhZG93IiwiTWFya2VyIiwib3B0aW9ucyIsInNoYWRvd1VybCIsIm1hcEluc3RhbmNlIiwibW92ZVRpbWVvdXQiLCJpc0NodW5rTW9kZSIsInNldFZpZXciLCJ0aWxlTGF5ZXIiLCJhdHRyaWJ1dGlvbiIsImNvbnRyb2wiLCJsYXllcnMiLCJjbGVhclRpbWVvdXQiLCJsYXllciIsImVudGVyQ2h1bmtNb2RlIiwiZXhpdENodW5rTW9kZSIsIl9tYXBJbnN0YW5jZSIsImFuaW1hdGUiLCJkdXJhdGlvbiIsImJhc2VzIiwiaGFzQ2VudGVyZWQiLCJpc01lIiwiYXR0YWNoSG92ZXJEcm9wZG93biIsInRvZ2dsZVNlbGVjdG9yIiwidG9nZ2xlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJ0b2dnbGUiLCJ0YXJnZXRTZWxlY3RvciIsImRyb3Bkb3duVGFyZ2V0IiwiZHJvcGRvd25Db250ZW50IiwicXVlcnlTZWxlY3RvciIsImhpZGVUaW1lb3V0IiwiaXNPcGVuIiwic2hvd0Ryb3Bkb3duIiwiZGlzcGxheSIsImFuaW1hdGlvbiIsImNsYXNzTGlzdCIsInJlYWxseUhpZGVEcm9wZG93biIsImhhbmRsZXIiLCJldmVudCIsImFuaW1hdGlvbk5hbWUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGlkZURyb3Bkb3duIiwidG9nZ2xlRHJvcGRvd24iLCJwcmV2ZW50RGVmYXVsdCIsInN0b3BQcm9wYWdhdGlvbiIsInBhc3NpdmUiLCJjb250YWlucyIsInRhcmdldCIsImF0dGFjaE5hdmJhckRyb3Bkb3duIiwibmF2YmFyTWVudSIsIm5hdmJhckNvbnRhaW5lciIsInJlZ2lvbkVscyIsImlzQ2xvc2luZyIsImlzSW5SZWdpb24iLCJlbCIsInNvbWUiLCJub2RlIiwic2hvd0FsbCIsInJlYWxseUhpZGVBbGwiLCJvbkxlYXZlUmVnaW9uIiwidG8iLCJyZWxhdGVkVGFyZ2V0IiwidG9nZ2xlTmF2YmFyIiwic2VsZWN0b3IiLCJpbnB1dHMiLCJmb3JtIiwiaW5pdElucHV0IiwiaW5wdXRFbCIsIndyYXBwZXIiLCJjbG9zZXN0IiwicGFyZW50RWxlbWVudCIsInRyaW0iLCJvbkZvY3VzIiwib25CbHVyIiwiZXYiLCJwYXJlbnQiLCJpbnB1dCIsImxpdmVWYWxpZGF0aW9uIiwiY2hlY2tWYWxpZGl0eSIsInZhbGlkYXRvcnMiLCJ2YWxpZGF0aW9uVGltZXJzIiwicmVnaXN0ZXJWYWxpZGF0b3IiLCJpbnB1dElkIiwiZXJyb3JJZCIsInZhbGlkYXRlRm4iLCJydW5WYWxpZGF0b3IiLCJjb25maWciLCJlcnJvckJveCIsInZpc2liaWxpdHkiLCJhdHRhY2hWYWxpZGF0b3IiLCJldmVudFR5cGVzIiwiZGVsYXlNcyIsImV2ZW50VHlwZSIsInJlZ2lzdGVyRW1haWwiLCJlbWFpbEZpZWxkcyIsIndpbmRvdyIsImFwcFRyYW5zbGF0aW9ucyIsInJlZ2lzdGVyUHNldWRvIiwibWluTGVuZ3RoIiwicHNldWRvRmllbGRzIiwiZmlyc3QiLCJmaWxlIiwiZmlsZXMiLCJhbGxvd2VkIiwiaW5jbHVkZXMiLCJvblN1Ym1pdCIsImhhc0Vycm9yIiwia2V5cyIsImxvZ2luRm9ybSIsInRhZ05hbWUiLCJib3giLCJhY2NlcHQiLCJyZWZ1c2UiLCJyZW1lbWJlckNoZWNrYm94IiwiY29uc2VudCIsImdldEl0ZW0iLCJkaXNhYmxlZCIsImNoZWNrZWQiLCJjb2xsYXBzZUJ0biIsInJlbWVtYmVyTGFiZWwiLCJjbGlja0hhbmRsZXIiLCJjdXJyZW50Q29uc2VudCIsImJ1dHRvbiIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJvcmlnaW5hbCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCJdLCJzb3VyY2VSb290IjoiIn0=