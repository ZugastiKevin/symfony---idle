"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["game"],{

/***/ "./assets/scripts/Game/Config/cacheUtils.js"
/*!**************************************************!*\
  !*** ./assets/scripts/Game/Config/cacheUtils.js ***!
  \**************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getCacheKey: () => (/* binding */ getCacheKey)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);

var CACHE_VERSION = 'v1';
function getCacheKey(chunkId) {
  return "".concat(CACHE_VERSION, "_chunk_").concat(chunkId);
}

/***/ },

/***/ "./assets/scripts/Game/Config/chunk.js"
/*!*********************************************!*\
  !*** ./assets/scripts/Game/Config/chunk.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
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
































var gridLayer = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_28__["default"].layerGroup();
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
      var rect = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_28__["default"].rectangle([[lat, lng], [lat + _Config_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE, lng + _Config_chunk_js__WEBPACK_IMPORTED_MODULE_30__.CHUNK_SIZE]], {
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

/***/ "./assets/scripts/Game/Map/deposits.js"
/*!*********************************************!*\
  !*** ./assets/scripts/Game/Map/deposits.js ***!
  \*********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   depositLayers: () => (/* binding */ depositLayers),
/* harmony export */   initDepositLayers: () => (/* binding */ initDepositLayers),
/* harmony export */   loadDepositsForChunk: () => (/* binding */ loadDepositsForChunk),
/* harmony export */   renderDepositsFromData: () => (/* binding */ renderDepositsFromData)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _LeafletWrapper__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../LeafletWrapper */ "./assets/scripts/LeafletWrapper.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }























var depositMarkers = new Map();
function loadDepositsForChunk(_x, _x2) {
  return _loadDepositsForChunk.apply(this, arguments);
}
function _loadDepositsForChunk() {
  _loadDepositsForChunk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(chunkId, map) {
    var response, deposits, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return fetch("/api/deposits/".concat(chunkId));
        case 1:
          response = _context.v;
          _context.n = 2;
          return response.json();
        case 2:
          deposits = _context.v;
          renderDepositsFromData(deposits, map);
          _context.n = 4;
          break;
        case 3:
          _context.p = 3;
          _t = _context.v;
          console.error("Erreur chargement dépôts:", _t);
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[0, 3]]);
  }));
  return _loadDepositsForChunk.apply(this, arguments);
}
function getResourceColor(type) {
  var colors = {
    'iron': '#7f8c8d',
    'coal': '#2c3e50',
    'oil': '#f1c40f',
    'bauxite': '#e67e22',
    'rubber': '#27ae60',
    'rare_earth': '#8e44ad'
  };
  return colors[type] || '#ffffff';
}
window.claimDeposit = function (id) {
  console.log("Tentative d'exploitation du dépôt:", id);
  // Ici, vous devrez faire un fetch POST vers une route API 
  // qui déclenche la construction d'un bâtiment extracteur.
};
var depositLayers = {
  'iron': _LeafletWrapper__WEBPACK_IMPORTED_MODULE_22__["default"].layerGroup(),
  'coal': _LeafletWrapper__WEBPACK_IMPORTED_MODULE_22__["default"].layerGroup(),
  'oil': _LeafletWrapper__WEBPACK_IMPORTED_MODULE_22__["default"].layerGroup(),
  'bauxite': _LeafletWrapper__WEBPACK_IMPORTED_MODULE_22__["default"].layerGroup(),
  'rubber': _LeafletWrapper__WEBPACK_IMPORTED_MODULE_22__["default"].layerGroup(),
  'rare_earth': _LeafletWrapper__WEBPACK_IMPORTED_MODULE_22__["default"].layerGroup()
};
function initDepositLayers(map, control) {
  Object.keys(depositLayers).forEach(function (key) {
    control.addOverlay(depositLayers[key], "Ressource: ".concat(key));
  });
}
function renderDepositsFromData(deposits, map) {
  deposits.forEach(function (deposit) {
    if (depositMarkers.has(deposit.id)) return;
    var type = deposit.resource_type;
    var layer = depositLayers[type];
    if (!layer) {
      console.warn("Pas de layer pour le type: ".concat(type));
      return;
    }
    var marker = _LeafletWrapper__WEBPACK_IMPORTED_MODULE_22__["default"].circleMarker([deposit.latitude, deposit.longitude], {
      radius: 8,
      fillColor: getResourceColor(deposit.resource_type),
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    }).addTo(layer);
    marker.bindPopup("\n            <b>".concat(deposit.resource_type.toUpperCase(), "</b><br>\n            Richesse: ").concat(deposit.richness, "<br>\n            ").concat(deposit.is_claimed ? '⚠️ Déjà exploité' : '<button onclick="claimDeposit(' + deposit.id + ')">Exploiter</button>', "\n        "));
    depositMarkers.set(deposit.id, marker);
  });
}

/***/ },

/***/ "./assets/scripts/Game/Roads/invalidateChunk.js"
/*!******************************************************!*\
  !*** ./assets/scripts/Game/Roads/invalidateChunk.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
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
      var a = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"].latLng(aRaw[0], aRaw[1]);
      var b = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"].latLng(bRaw[0], bRaw[1]);
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
      var a = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"].latLng(aRaw[0], aRaw[1]);
      var b = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"].latLng(bRaw[0], bRaw[1]);
      var mid = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"].latLng((a.lat + b.lat) / 2, (a.lng + b.lng) / 2);
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
  return _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_6__["default"].latLng(A[0] + AB[0] * t, A[1] + AB[1] * t);
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.array.from.js */ "./node_modules/core-js/modules/es.array.from.js");
/* harmony import */ var core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_from_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.array.is-array.js */ "./node_modules/core-js/modules/es.array.is-array.js");
/* harmony import */ var core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_is_array_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.array.push.js */ "./node_modules/core-js/modules/es.array.push.js");
/* harmony import */ var core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_push_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.array.slice.js */ "./node_modules/core-js/modules/es.array.slice.js");
/* harmony import */ var core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.date.now.js */ "./node_modules/core-js/modules/es.date.now.js");
/* harmony import */ var core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_now_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.set.js */ "./node_modules/core-js/modules/es.set.js");
/* harmony import */ var core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/es.set.difference.v2.js */ "./node_modules/core-js/modules/es.set.difference.v2.js");
/* harmony import */ var core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_difference_v2_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/es.set.intersection.v2.js */ "./node_modules/core-js/modules/es.set.intersection.v2.js");
/* harmony import */ var core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_intersection_v2_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/es.set.is-disjoint-from.v2.js */ "./node_modules/core-js/modules/es.set.is-disjoint-from.v2.js");
/* harmony import */ var core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_disjoint_from_v2_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/es.set.is-subset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-subset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_subset_of_v2_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! core-js/modules/es.set.is-superset-of.v2.js */ "./node_modules/core-js/modules/es.set.is-superset-of.v2.js");
/* harmony import */ var core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_35___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_is_superset_of_v2_js__WEBPACK_IMPORTED_MODULE_35__);
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! core-js/modules/es.set.symmetric-difference.v2.js */ "./node_modules/core-js/modules/es.set.symmetric-difference.v2.js");
/* harmony import */ var core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_36___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_symmetric_difference_v2_js__WEBPACK_IMPORTED_MODULE_36__);
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! core-js/modules/es.set.union.v2.js */ "./node_modules/core-js/modules/es.set.union.v2.js");
/* harmony import */ var core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_37___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_set_union_v2_js__WEBPACK_IMPORTED_MODULE_37__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_38__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_39___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_39__);
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! core-js/modules/esnext.iterator.filter.js */ "./node_modules/core-js/modules/esnext.iterator.filter.js");
/* harmony import */ var core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_40___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_filter_js__WEBPACK_IMPORTED_MODULE_40__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_41__);
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! core-js/modules/esnext.json.parse.js */ "./node_modules/core-js/modules/esnext.json.parse.js");
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_42__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_43___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_43__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_44___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_44__);
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ../map.js */ "./assets/scripts/Game/map.js");
/* harmony import */ var _Config_chunk_js__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../Config/chunk.js */ "./assets/scripts/Game/Config/chunk.js");
/* harmony import */ var _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../Layers/gridLayer.js */ "./assets/scripts/Game/Layers/gridLayer.js");
/* harmony import */ var _invalidateChunk_js__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ./invalidateChunk.js */ "./assets/scripts/Game/Roads/invalidateChunk.js");
/* harmony import */ var _Config_debug_js__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../Config/debug.js */ "./assets/scripts/Game/Config/debug.js");
/* harmony import */ var _roadsState_js__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./roadsState.js */ "./assets/scripts/Game/Roads/roadsState.js");
/* harmony import */ var _Map_deposits_js__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ../Map/deposits.js */ "./assets/scripts/Game/Map/deposits.js");
/* harmony import */ var _Config_cacheUtils_js__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ../Config/cacheUtils.js */ "./assets/scripts/Game/Config/cacheUtils.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
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
  var x = Math.floor(lat / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_46__.CHUNK_SIZE);
  var y = Math.floor(lng / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_46__.CHUNK_SIZE);
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
    var map, bounds, visibleChunks, chunksToLoad, finalChunksToLoad, _iterator2, _step2, _chunkId3, _cacheKey, cached, data, _i, _finalChunksToLoad, chunkId, _yield$Promise$all, _yield$Promise$all2, roadsResponse, buildingsResponse, depositsResponse, roadsData, buildingsData, depositsData, buildingsByChunk, _i2, _finalChunksToLoad2, _roadsData$_chunkId, _buildingsData$_chunk, _chunkId, chunkData, hasRoads, cacheKey, _iterator3, _step3, _chunkId2, _t, _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          map = (0,_map_js__WEBPACK_IMPORTED_MODULE_45__.getMap)();
          if (!(!map || map.getZoom() < 14)) {
            _context.n = 1;
            break;
          }
          return _context.a(2);
        case 1:
          bounds = map.getBounds();
          visibleChunks = getVisibleChunks(bounds);
          chunksToLoad = visibleChunks.filter(function (chunkId) {
            return !_roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.loadedChunks.has(chunkId);
          }); // ==========================
          // VERIFICATION CACHE LOCAL
          // ==========================
          finalChunksToLoad = [];
          _iterator2 = _createForOfIteratorHelper(chunksToLoad);
          _context.p = 2;
          _iterator2.s();
        case 3:
          if ((_step2 = _iterator2.n()).done) {
            _context.n = 6;
            break;
          }
          _chunkId3 = _step2.value;
          _cacheKey = (0,_Config_cacheUtils_js__WEBPACK_IMPORTED_MODULE_52__.getCacheKey)(_chunkId3);
          cached = localStorage.getItem(_cacheKey);
          if (!cached) {
            _context.n = 4;
            break;
          }
          data = JSON.parse(cached); // Vérifier si le cache est vieux (ex: plus de 1h)
          if (!(Date.now() - data.ts < 3600000)) {
            _context.n = 4;
            break;
          }
          _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[_chunkId3] = {
            status: data.hasRoads ? 'loaded' : 'empty',
            roads: data.roads,
            buildings: data.buildings,
            deposits: data.deposits,
            hasRoads: data.hasRoads
          };
          _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.loadedChunks.add(_chunkId3);
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(_chunkId3, data.hasRoads ? 'blue' : '#444');
          (0,_Map_deposits_js__WEBPACK_IMPORTED_MODULE_51__.renderDepositsFromData)(data.deposits || [], map);
          return _context.a(3, 5);
        case 4:
          finalChunksToLoad.push(_chunkId3);
        case 5:
          _context.n = 3;
          break;
        case 6:
          _context.n = 8;
          break;
        case 7:
          _context.p = 7;
          _t = _context.v;
          _iterator2.e(_t);
        case 8:
          _context.p = 8;
          _iterator2.f();
          return _context.f(8);
        case 9:
          // ==========================
          // ETAT LOADING
          // ==========================

          for (_i = 0, _finalChunksToLoad = finalChunksToLoad; _i < _finalChunksToLoad.length; _i++) {
            chunkId = _finalChunksToLoad[_i];
            _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[chunkId] = {
              status: 'loading',
              roads: [],
              buildings: [],
              deposits: []
            };
            (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'orange');
          }

          // rien à charger
          if (!(finalChunksToLoad.length === 0)) {
            _context.n = 10;
            break;
          }
          refreshChunkColors(visibleChunks);
          return _context.a(2);
        case 10:
          _context.p = 10;
          _context.n = 11;
          return Promise.all([fetch('/api/chunks/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: finalChunksToLoad
            })
          }), fetch('/api/buildings/visible', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: finalChunksToLoad
            })
          }), fetch('/api/deposits/bulk', {
            // ← nouvel endpoint à créer
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: finalChunksToLoad
            })
          })]);
        case 11:
          _yield$Promise$all = _context.v;
          _yield$Promise$all2 = _slicedToArray(_yield$Promise$all, 3);
          roadsResponse = _yield$Promise$all2[0];
          buildingsResponse = _yield$Promise$all2[1];
          depositsResponse = _yield$Promise$all2[2];
          if (!(!roadsResponse.ok || !buildingsResponse.ok || !depositsResponse.ok)) {
            _context.n = 12;
            break;
          }
          throw new Error("API error");
        case 12:
          _context.n = 13;
          return roadsResponse.json();
        case 13:
          roadsData = _context.v;
          _context.n = 14;
          return buildingsResponse.json();
        case 14:
          buildingsData = _context.v;
          _context.n = 15;
          return depositsResponse.json();
        case 15:
          depositsData = _context.v;
          // Créer un index pour mapper les bâtiments par chunkId rapidement
          buildingsByChunk = {};
          buildingsData.forEach(function (b) {
            var cId = Math.floor(b.lat * 100) + '_' + Math.floor(b.lng * 100);
            if (!buildingsByChunk[cId]) buildingsByChunk[cId] = [];
            buildingsByChunk[cId].push(b);
          });

          // ==========================
          // TRAITEMENT CHUNKS
          // ==========================

          for (_i2 = 0, _finalChunksToLoad2 = finalChunksToLoad; _i2 < _finalChunksToLoad2.length; _i2++) {
            _chunkId = _finalChunksToLoad2[_i2];
            chunkData = {
              roads: ((_roadsData$_chunkId = roadsData[_chunkId]) === null || _roadsData$_chunkId === void 0 ? void 0 : _roadsData$_chunkId.roads) || [],
              buildings: ((_buildingsData$_chunk = buildingsData[_chunkId]) === null || _buildingsData$_chunk === void 0 ? void 0 : _buildingsData$_chunk.buildings) || [],
              deposits: depositsData[_chunkId] || []
            };
            hasRoads = chunkData.roads && chunkData.roads.length > 0;
            _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[_chunkId] = {
              status: hasRoads ? 'loaded' : 'empty',
              roads: chunkData.roads || [],
              buildings: chunkData.buildings || [],
              deposits: chunkData.deposits || [],
              hasRoads: hasRoads
            };
            _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.loadedChunks.add(_chunkId);

            // ==========================
            // CACHE
            // ==========================
            cacheKey = (0,_Config_cacheUtils_js__WEBPACK_IMPORTED_MODULE_52__.getCacheKey)(_chunkId);
            localStorage.setItem(cacheKey, JSON.stringify({
              roads: chunkData.roads || [],
              buildings: chunkData.buildings || [],
              deposits: chunkData.deposits || [],
              hasRoads: hasRoads,
              ts: Date.now()
            }));

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
            (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(_chunkId, hasRoads ? 'blue' : '#444');
            (0,_Map_deposits_js__WEBPACK_IMPORTED_MODULE_51__.renderDepositsFromData)(chunkData.deposits, map);
            (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_49__.debugLog)("roads", "Chunk ".concat(_chunkId, " loaded (").concat(chunkData.roads.length, " roads, ").concat(chunkData.buildings.length, " buildings, ").concat(chunkData.deposits.length, " deposits)"));
          }
          _context.n = 17;
          break;
        case 16:
          _context.p = 16;
          _t2 = _context.v;
          console.error("Erreur chargement chunks bulk:", _t2);

          // ==========================
          // ETAT ERREUR
          // ==========================
          _iterator3 = _createForOfIteratorHelper(finalChunksToLoad);
          try {
            for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
              _chunkId2 = _step3.value;
              _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[_chunkId2] = {
                status: 'error',
                roads: [],
                buildings: [],
                deposits: []
              };
              (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(_chunkId2, 'red');
            }
          } catch (err) {
            _iterator3.e(err);
          } finally {
            _iterator3.f();
          }
        case 17:
          // ==========================
          // REFRESH VISUEL FINAL
          // ==========================

          refreshChunkColors(visibleChunks);
        case 18:
          return _context.a(2);
      }
    }, _callee, null, [[10, 16], [2, 7, 8, 9]]);
  }));
  return _loadVisibleRoadChunks.apply(this, arguments);
}
function refreshChunkColors(visibleChunks) {
  var _iterator = _createForOfIteratorHelper(visibleChunks),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var chunkId = _step.value;
      var chunk = _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[chunkId];
      if (!chunk) {
        (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'orange');
        continue;
      }
      switch (chunk.status) {
        case 'loaded':
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'blue');
          break;
        case 'empty':
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, '#444');
          break;
        case 'loading':
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'orange');
          break;
        case 'error':
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'red');
          break;
        default:
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'yellow');
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
          (0,_invalidateChunk_js__WEBPACK_IMPORTED_MODULE_48__.invalidateChunk)(chunkId);
          _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.loadedChunks["delete"](chunkId);
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
    var _roadsData$chunkId, _buildingsData$chunkI, _yield$Promise$all3, _yield$Promise$all4, roadsRes, buildingsRes, depositsRes, roadsData, buildingsData, depositsData, chunkDeposits, chunkData, hasRoads, cacheKey, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[chunkId] = {
            status: 'loading',
            roads: [],
            buildings: [],
            deposits: []
          };
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'orange');
          _context3.n = 1;
          return Promise.all([fetch('/api/chunks/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: [chunkId]
            })
          }), fetch('/api/buildings/visible', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: [chunkId]
            })
          }), fetch('/api/deposits/bulk', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              chunks: [chunkId]
            })
          })]);
        case 1:
          _yield$Promise$all3 = _context3.v;
          _yield$Promise$all4 = _slicedToArray(_yield$Promise$all3, 3);
          roadsRes = _yield$Promise$all4[0];
          buildingsRes = _yield$Promise$all4[1];
          depositsRes = _yield$Promise$all4[2];
          if (!(!roadsRes.ok || !buildingsRes.ok || !depositsRes.ok)) {
            _context3.n = 2;
            break;
          }
          throw new Error("API error");
        case 2:
          _context3.n = 3;
          return roadsRes.json();
        case 3:
          roadsData = _context3.v;
          _context3.n = 4;
          return buildingsRes.json();
        case 4:
          buildingsData = _context3.v;
          _context3.n = 5;
          return depositsRes.json();
        case 5:
          depositsData = _context3.v;
          chunkDeposits = depositsData[chunkId] || [];
          chunkData = {
            roads: ((_roadsData$chunkId = roadsData[chunkId]) === null || _roadsData$chunkId === void 0 ? void 0 : _roadsData$chunkId.roads) || [],
            buildings: ((_buildingsData$chunkI = buildingsData[chunkId]) === null || _buildingsData$chunkI === void 0 ? void 0 : _buildingsData$chunkI.buildings) || [],
            deposits: chunkDeposits
          };
          hasRoads = chunkData.roads.length > 0;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[chunkId] = {
            status: hasRoads ? 'loaded' : 'empty',
            roads: chunkData.roads,
            buildings: chunkData.buildings,
            deposits: chunkData.deposits,
            hasRoads: hasRoads
          };
          cacheKey = (0,_Config_cacheUtils_js__WEBPACK_IMPORTED_MODULE_52__.getCacheKey)(chunkId);
          localStorage.setItem(cacheKey, JSON.stringify({
            roads: chunkData.roads,
            buildings: chunkData.buildings,
            deposits: chunkData.deposits,
            hasRoads: hasRoads,
            ts: Date.now()
          }));
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, hasRoads ? 'blue' : '#444');
          (0,_Map_deposits_js__WEBPACK_IMPORTED_MODULE_51__.renderDepositsFromData)(chunkData.deposits, (0,_map_js__WEBPACK_IMPORTED_MODULE_45__.getMap)());
          (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_49__.debugLog)("[CHUNK REFRESH]", chunkId, chunkData.roads.length);
          _context3.n = 7;
          break;
        case 6:
          _context3.p = 6;
          _t3 = _context3.v;
          _roadsState_js__WEBPACK_IMPORTED_MODULE_50__.roadsState.chunks[chunkId] = {
            status: 'error',
            roads: [],
            buildings: [],
            deposits: []
          };
          (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_47__.setChunkColor)(chunkId, 'red');
          (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_49__.debugError)("[CHUNK REFRESH ERROR]", chunkId, _t3);
        case 7:
          return _context3.a(2);
      }
    }, _callee3, null, [[0, 6]]);
  }));
  return _fetchSingleChunk.apply(this, arguments);
}
function getVisibleChunks(bounds) {
  var minX = Math.floor(bounds.getSouth() / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_46__.CHUNK_SIZE);
  var maxX = Math.floor(bounds.getNorth() / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_46__.CHUNK_SIZE);
  var minY = Math.floor(bounds.getWest() / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_46__.CHUNK_SIZE);
  var maxY = Math.floor(bounds.getEast() / _Config_chunk_js__WEBPACK_IMPORTED_MODULE_46__.CHUNK_SIZE);
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

/***/ "./assets/scripts/Game/Utils/admin_clipboard.js"
/*!******************************************************!*\
  !*** ./assets/scripts/Game/Utils/admin_clipboard.js ***!
  \******************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getAdminCoords: () => (/* binding */ getAdminCoords)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.concat.js */ "./node_modules/core-js/modules/es.array.concat.js");
/* harmony import */ var core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_concat_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.number.to-fixed.js */ "./node_modules/core-js/modules/es.number.to-fixed.js");
/* harmony import */ var core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_to_fixed_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Ui_notification_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Ui/notification.js */ "./assets/scripts/Game/Ui/notification.js");




// =======================
// PATHFINDING DEBUG - CLICK TO GET COORDINATES
// =======================
function getAdminCoords(lat, lng) {
  if (lat === undefined || lng === undefined) return;
  var format = "".concat(lat.toFixed(6), ",").concat(lng.toFixed(6));
  navigator.clipboard.writeText(format);
  (0,_Ui_notification_js__WEBPACK_IMPORTED_MODULE_2__.showNotification)("Format collable admin copié : " + format, 'success');
}

/***/ },

/***/ "./assets/scripts/Game/Utils/snap.js"
/*!*******************************************!*\
  !*** ./assets/scripts/Game/Utils/snap.js ***!
  \*******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableAdminCoordinatePicker: () => (/* binding */ enableAdminCoordinatePicker),
/* harmony export */   initBaseUI: () => (/* binding */ initBaseUI),
/* harmony export */   loadBaseFromServer: () => (/* binding */ loadBaseFromServer),
/* harmony export */   loadOtherBase: () => (/* binding */ loadOtherBase),
/* harmony export */   setCurrentPlayerFaction: () => (/* binding */ setCurrentPlayerFaction)
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
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./map.js */ "./assets/scripts/Game/map.js");
/* harmony import */ var _Roads_roadsState_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Roads/roadsState.js */ "./assets/scripts/Game/Roads/roadsState.js");
/* harmony import */ var _building_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./building.js */ "./assets/scripts/Game/building.js");
/* harmony import */ var _Config_chunk_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Config/chunk.js */ "./assets/scripts/Game/Config/chunk.js");
/* harmony import */ var _Roads_roads_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Roads/roads.js */ "./assets/scripts/Game/Roads/roads.js");
/* harmony import */ var _Roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Roads/roadUtils.js */ "./assets/scripts/Game/Roads/roadUtils.js");
/* harmony import */ var _Ui_notification_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Ui/notification.js */ "./assets/scripts/Game/Ui/notification.js");
/* harmony import */ var _Utils_admin_clipboard_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Utils/admin_clipboard.js */ "./assets/scripts/Game/Utils/admin_clipboard.js");




















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
var currentPlayerFaction = 'default';

// =======================
// SET PLAYER FACTION
// =======================
function setCurrentPlayerFaction(faction) {
  currentPlayerFaction = (faction || 'default').toLowerCase();
}

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
      (0,_Ui_notification_js__WEBPACK_IMPORTED_MODULE_17__.showNotification)("Clique sur la carte pour placer ta base", 'info');
      (0,_Roads_roads_js__WEBPACK_IMPORTED_MODULE_15__.loadVisibleRoadChunks)();
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
    var result = (0,_Roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_16__.findClosestPointOnRoad)(e.latlng, roads);
    if (!result.point) return;
    previewSnapLatLng = result.point;
    var isValid = isBasePlacementValid(result.point.lat, result.point.lng);
    cleanupPreview(map);
    var color = isValid ? 'green' : 'red';
    previewCircle = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].circle(result.point, {
      radius: 600,
      color: color,
      weight: 2,
      fillOpacity: 0.1
    }).addTo(map);
    previewMarker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].marker(result.point).addTo(map);
    previewLine = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].polyline([e.latlng, result.point], {
      color: 'cyan',
      weight: 2,
      opacity: 0.6,
      dashArray: '5, 5'
    }).addTo(map);
    var segment = (0,_Roads_roadUtils_js__WEBPACK_IMPORTED_MODULE_16__.findClosestSegment)(e.latlng, roads);
    if (segment) {
      highlightedSegment = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].polyline(segment, {
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
// PATHFINDING DEBUG FOR ADMIN - CLICK TO GET COORDINATES
// =======================
function enableAdminCoordinatePicker() {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  (0,_Ui_notification_js__WEBPACK_IMPORTED_MODULE_17__.showNotification)("Mode Admin activé : cliquez sur la carte", 'info');
  map.on('click', function (e) {
    (0,_Utils_admin_clipboard_js__WEBPACK_IMPORTED_MODULE_18__.getAdminCoords)(e.latlng.lat, e.latlng.lng);
  });
}
window.enableAdminCoordinatePicker = enableAdminCoordinatePicker;

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
  baseCircle = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].circle(basePosition, {
    radius: 500
  }).addTo(map);
  var baseTypeId = 1;
  fetch('/api/build', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      lat: lat,
      lng: lng,
      type_id: baseTypeId
    })
  }).then(function (res) {
    if (!res.ok) return res.json().then(function (err) {
      throw new Error(err.error || "API error");
    });
    return res.json();
  }).then(function () {
    baseCreated = true;
  })["catch"](function (err) {
    console.error(err);
    removeBase();
    alert("Erreur création base : " + err.message);
  });
  map.getContainer().style.cursor = '';
  updateBaseDisplay();
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
function loadOtherBase(lat, lng, pseudo, faction) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  if (!Number.isFinite(lat) || !Number.isFinite(lng)) return;
  var circle = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].circle([lat, lng], {
    radius: 500,
    color: 'red'
  }).addTo(map);
  var icon = createBaseIcon(map.getZoom(), faction);
  var marker = null;
  if (icon) {
    marker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].marker([lat, lng], {
      icon: icon
    }).addTo(map).bindPopup("\uD83C\uDFD5\uFE0F Base de ".concat(pseudo));
  }
  otherBases.push({
    lat: lat,
    lng: lng,
    pseudo: pseudo,
    marker: marker,
    circle: circle,
    faction: faction
  });
}

// =======================
// UPDATE OTHER BASE
// =======================
function updateOtherBases() {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  var zoom = map.getZoom();
  otherBases.forEach(function (base) {
    var icon = createBaseIcon(zoom, base.faction);
    if (!icon) {
      if (base.marker) map.removeLayer(base.marker);
      return;
    }
    if (!base.marker) {
      base.marker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].marker([base.lat, base.lng], {
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
  baseCircle = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].circle(basePosition, {
    radius: 500
  }).addTo(map);
  updateBaseDisplay();
}

// =======================
// UPDATE BASE DISPLAY
// =======================
function updateBaseDisplay() {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_11__.getMap)();
  if (!basePosition) return;
  var icon = createBaseIcon(map.getZoom(), currentPlayerFaction);
  if (!icon) {
    if (baseMarker) map.removeLayer(baseMarker);
    return;
  }
  if (!baseMarker) {
    baseMarker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].marker(basePosition, {
      icon: icon
    }).addTo(map);
  } else {
    if (!map.hasLayer(baseMarker)) baseMarker.addTo(map);
    baseMarker.setIcon(icon);
  }
}

// =======================
// CREATE BASE ICON
// =======================
function createBaseIcon(zoom, faction) {
  if (zoom < 13) return null;
  var size = zoom > 15 ? 50 : 30;
  return _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].icon({
    iconUrl: (0,_building_js__WEBPACK_IMPORTED_MODULE_13__.getBuildingImage)(faction, 'base'),
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
}

/***/ },

/***/ "./assets/scripts/Game/building.js"
/*!*****************************************!*\
  !*** ./assets/scripts/Game/building.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getBuildingImage: () => (/* binding */ getBuildingImage),
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
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
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
      _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_7__["default"].marker([b.lat, b.lng]).addTo(map).bindPopup("".concat(b.type, " lvl ").concat(b.level));
    });
  });
}

/**
 * Retourne dynamiquement le chemin de l'image.
 * @param {string} faction - Le code ou nom de la faction (ex: "Empire", "Cendres").
 * @param {string} building - Le nom du bâtiment (ex: "base", "iron_mine").
 */
function getBuildingImage(faction, building) {
  var factionSlug = (faction || 'default').toLowerCase();
  return "/assets/images/buildings/".concat(factionSlug, "/").concat(building, ".png");
}

/***/ },

/***/ "./assets/scripts/Game/game-main.js"
/*!******************************************!*\
  !*** ./assets/scripts/Game/game-main.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   enableLeafletDebug: () => (/* binding */ enableLeafletDebug)
/* harmony export */ });
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./map.js */ "./assets/scripts/Game/map.js");
/* harmony import */ var _gps_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gps.js */ "./assets/scripts/Game/gps.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.js */ "./assets/scripts/Game/base.js");
/* harmony import */ var _building_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./building.js */ "./assets/scripts/Game/building.js");




document.addEventListener('DOMContentLoaded', function () {
  enableLeafletDebug(false);
  var defaultLat = 46.53972;
  var defaultLng = 2.43028;
  (0,_map_js__WEBPACK_IMPORTED_MODULE_0__.initMap)(defaultLat, defaultLng);
  (0,_base_js__WEBPACK_IMPORTED_MODULE_2__.initBaseUI)();
  (0,_map_js__WEBPACK_IMPORTED_MODULE_0__.loadWorld)();
  (0,_building_js__WEBPACK_IMPORTED_MODULE_3__.loadBuildings)();
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

/***/ },

/***/ "./assets/scripts/Game/gps.js"
/*!************************************!*\
  !*** ./assets/scripts/Game/gps.js ***!
  \************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

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
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _Config_debug_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Config/debug.js */ "./assets/scripts/Game/Config/debug.js");
/* harmony import */ var _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Layers/gridLayer.js */ "./assets/scripts/Game/Layers/gridLayer.js");
/* harmony import */ var _Roads_roads_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Roads/roads.js */ "./assets/scripts/Game/Roads/roads.js");
/* harmony import */ var _Roads_roadsState_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Roads/roadsState.js */ "./assets/scripts/Game/Roads/roadsState.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./base.js */ "./assets/scripts/Game/base.js");
/* harmony import */ var _Map_deposits_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Map/deposits.js */ "./assets/scripts/Game/Map/deposits.js");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");



















_LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].Marker.prototype.options.icon = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].icon({
  iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_17__,
  shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_18__
});
var mapInstance = null;
var moveTimeout = null;
var isChunkMode = false;
function initMap(lat, lng) {
  mapInstance = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].map('map').setView([lat, lng], 7);
  _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(mapInstance);
  var layersControl = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].control.layers(null, {
    "Chunk Grid": _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_12__.gridLayer
  }).addTo(mapInstance);
  (0,_Map_deposits_js__WEBPACK_IMPORTED_MODULE_16__.initDepositLayers)(mapInstance, layersControl);

  // =====================
  // CENTRAL CHUNK CONTROLLER
  // =====================

  mapInstance.on('moveend', function () {
    if (!isChunkMode) return;
    if (mapInstance.getZoom() < 14) return;
    clearTimeout(moveTimeout);
    moveTimeout = setTimeout(function () {
      (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_12__.initGridLayer)();
      (0,_Roads_roads_js__WEBPACK_IMPORTED_MODULE_13__.loadVisibleRoadChunks)();
    }, 300);
  });
  mapInstance.on('overlayadd', function (e) {
    if (e.layer === _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_12__.gridLayer) {
      (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_11__.debugLog)("grid", "Grid ON");
      (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_12__.initGridLayer)();
      (0,_Roads_roads_js__WEBPACK_IMPORTED_MODULE_13__.loadVisibleRoadChunks)();
    }
  });
  mapInstance.on('overlayremove', function (e) {
    if (e.layer === _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_12__.gridLayer) {
      (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_11__.debugLog)("grid", "Grid OFF");
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
  return (_mapInstance = mapInstance) === null || _mapInstance === void 0 ? void 0 : _mapInstance.hasLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_12__.gridLayer);
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
      _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].marker([b.lat, b.lng]).addTo(map).bindPopup("".concat(b.type, " lvl ").concat(b.level));
    });
    if (data.players) {
      var hasCentered = false;
      data.players.forEach(function (player) {
        if (player.isMe) {
          (0,_base_js__WEBPACK_IMPORTED_MODULE_15__.setCurrentPlayerFaction)(player.faction);
          (0,_base_js__WEBPACK_IMPORTED_MODULE_15__.loadBaseFromServer)(player.lat, player.lng);
          if (!hasCentered) {
            flyTo(player.lat, player.lng, 16);
            hasCentered = true;
          }
          return;
        }
        (0,_base_js__WEBPACK_IMPORTED_MODULE_15__.loadOtherBase)(player.lat, player.lng, player.pseudo, player.faction);
      });
    }
  })["catch"](function (err) {
    console.error("Erreur load world", err);
  });
}
function enterChunkMode() {
  if (isChunkMode) return;
  isChunkMode = true;
  (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_11__.debugLog)("chunks", "ENTER CHUNK MODE");
  (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_12__.initGridLayer)();
  (0,_Roads_roads_js__WEBPACK_IMPORTED_MODULE_13__.loadVisibleRoadChunks)();
}
function exitChunkMode() {
  if (!isChunkMode) return;
  isChunkMode = false;
  (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_11__.debugLog)("chunks", "EXIT CHUNK MODE");
  if (mapInstance.hasLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_12__.gridLayer)) {
    mapInstance.removeLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_12__.gridLayer);
  }
}

/***/ },

/***/ "./assets/scripts/LeafletWrapper.js"
/*!******************************************!*\
  !*** ./assets/scripts/LeafletWrapper.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! leaflet */ "./node_modules/leaflet/dist/leaflet-src.js");
/* harmony import */ var leaflet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(leaflet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var leaflet_dist_leaflet_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! leaflet/dist/leaflet.css */ "./node_modules/leaflet/dist/leaflet.css");


delete (leaflet__WEBPACK_IMPORTED_MODULE_0___default().Icon).Default.prototype._getIconUrl;
leaflet__WEBPACK_IMPORTED_MODULE_0___default().Icon.Default.mergeOptions({
  iconRetinaUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon-2x.png */ "./node_modules/leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png"),
  shadowUrl: __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png")
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((leaflet__WEBPACK_IMPORTED_MODULE_0___default()));

/***/ }

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendors-node_modules_leaflet_dist_leaflet_css-node_modules_core-js_internals_add-to-unscopabl-b7170d","vendors-node_modules_leaflet_dist_leaflet-src_js-node_modules_leaflet_dist_images_marker-icon-0702f3"], () => (__webpack_exec__("./assets/scripts/Game/game-main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFXLEdBQUcsSUFBSTtFQUVsQnRYLDJEQUFRLENBQUMsUUFBUSxFQUFFLGtCQUFrQixDQUFDO0VBRXRDMkQsb0VBQWEsQ0FBQyxDQUFDO0VBQ2ZtSSx1RUFBcUIsQ0FBQyxDQUFDO0FBQzNCO0FBRUEsU0FBU2dNLGFBQWFBLENBQUEsRUFBRztFQUNyQixJQUFJLENBQUNSLFdBQVcsRUFBRTtFQUVsQkEsV0FBVyxHQUFHLEtBQUs7RUFFbkJ0WCwyREFBUSxDQUFDLFFBQVEsRUFBRSxpQkFBaUIsQ0FBQztFQUVyQyxJQUFJb1gsV0FBVyxDQUFDbkMsUUFBUSxDQUFDMVIsNERBQVMsQ0FBQyxFQUFFO0lBQ2pDNlQsV0FBVyxDQUFDbFIsV0FBVyxDQUFDM0MsNERBQVMsQ0FBQztFQUN0QztBQUNKLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdkt3QjtBQUNVO0FBRWxDLE9BQU9GLHFEQUFNLENBQUNrVixPQUFPLENBQUN0YixTQUFTLENBQUN1YixXQUFXO0FBQzNDblYsbURBQU0sQ0FBQ2tWLE9BQU8sQ0FBQ0UsWUFBWSxDQUFDO0VBQ3hCQyxhQUFhLEVBQUVDLG1CQUFPLENBQUMscUdBQXdDLENBQUM7RUFDaEV2RCxPQUFPLEVBQUV1RCxtQkFBTyxDQUFDLCtGQUFxQyxDQUFDO0VBQ3ZEeEIsU0FBUyxFQUFFd0IsbUJBQU8sQ0FBQyxtR0FBdUM7QUFDOUQsQ0FBQyxDQUFDO0FBRUYsaUVBQWV0VixnREFBQyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Db25maWcvY2FjaGVVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL0NvbmZpZy9jaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL0NvbmZpZy9kZWJ1Zy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL0NvbmZpZy90eXBlTWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvTGF5ZXJzL2dyaWRMYXllci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL01hcC9kZXBvc2l0cy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL1JvYWRzL2ludmFsaWRhdGVDaHVuay5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL1JvYWRzL3JvYWRVdGlscy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL1JvYWRzL3JvYWRzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvUm9hZHMvcm9hZHNTdGF0ZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL1VpL25vdGlmaWNhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL1V0aWxzL2FkbWluX2NsaXBib2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL1V0aWxzL3NuYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9iYXNlLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvYnVpbGRpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9nYW1lLW1haW4uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9ncHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9tYXAuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvTGVhZmxldFdyYXBwZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQ0FDSEVfVkVSU0lPTiA9ICd2MSc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2FjaGVLZXkoY2h1bmtJZCkge1xyXG4gICAgcmV0dXJuIGAke0NBQ0hFX1ZFUlNJT059X2NodW5rXyR7Y2h1bmtJZH1gO1xyXG59IiwiaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwLmpzJztcclxuaW1wb3J0IHsgcmVmcmVzaENodW5rIH0gZnJvbSAnLi4vUm9hZHMvcm9hZHMuanMnO1xyXG5pbXBvcnQgeyBpbnZhbGlkYXRlQ2h1bmsgfSBmcm9tICcuLi9Sb2Fkcy9pbnZhbGlkYXRlQ2h1bmsuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdFcnJvciB9IGZyb20gJy4vZGVidWcuanMnO1xyXG5pbXBvcnQgeyBzbmFwVG9DaHVuayB9IGZyb20gJy4uL1V0aWxzL3NuYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IENIVU5LX1NJWkUgPSAwLjAxO1xyXG5leHBvcnQgY29uc3QgQ0hVTktfUkFESVVTID0gMTtcclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyZXF1ZXN0QXBpUm9hZHNBbmRDaHVua3NCdG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcbiAgICBhbGVydChcIkNsaXF1ZSBzdXIgbGEgY2FydGUgcG91ciBmYWlyZSB1bmUgcmVxdWV0ZSBhcGkgcG91ciBham91dGVyIHVuIGNodW5rIGRlIHJvdXRlcyAoMC4wMcKwIHggMC4wMcKwKS5cIik7XHJcblxyXG4gICAgbWFwLm9uY2UoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gZS5sYXRsbmc7XHJcblxyXG4gICAgICAgIGNvbnN0IHNuYXBwZWQgPSBzbmFwVG9DaHVuayhsYXQsIGxuZyk7XHJcblxyXG4gICAgICAgIGRlYnVnTG9nKFwibmV0d29ya1wiLCBcIvCfk6EgYWRkaW5nIHJvYWRzIGNodW5rOlwiLCBzbmFwcGVkLmNodW5rSWQpO1xyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBmZXRjaCgnL2FwaS9hZGQtcm9hZHMtY2h1bmsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgICAgIGxhdDogc25hcHBlZC5sYXQsXHJcbiAgICAgICAgICAgICAgICAgICAgbG5nOiBzbmFwcGVkLmxuZ1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICByZWZyZXNoQ2h1bmsoc25hcHBlZC5sYXQsIHNuYXBwZWQubG5nKTtcclxuXHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwi8J+UhCBjaHVuayByZWZyZXNoZWQ6XCIsIHNuYXBwZWQuY2h1bmtJZCk7XHJcblxyXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICBkZWJ1Z0Vycm9yKFwibmV0d29ya1wiLCBcImZhaWxlZCB0byBhZGQgcm9hZHMgY2h1bmtcIiwgZXJyKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcclxuICAgIH0pO1xyXG59KTsiLCJpbXBvcnQgeyBUWVBFX01BUCB9IGZyb20gJy4vdHlwZU1hcC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgREVCVUcgPSB7XHJcbiAgICBlbmFibGVkOiB0cnVlLFxyXG4gICAgY2h1bmtzOiB0cnVlLFxyXG4gICAgbmV0d29yazogdHJ1ZSxcclxuICAgIGNhY2hlOiB0cnVlXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdMb2codHlwZSwgLi4uYXJncykge1xyXG4gICAgaWYgKCFERUJVRy5lbmFibGVkKSByZXR1cm47XHJcblxyXG4gICAgaWYgKCF0eXBlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coLi4uYXJncyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChERUJVR1t0eXBlXSA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhgWyR7dHlwZX1dYCwgLi4uYXJncyk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBkZWJ1Z0Vycm9yKHR5cGUsIC4uLmFyZ3MpIHtcclxuICAgIGlmICghREVCVUcuZW5hYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGtleSA9IFRZUEVfTUFQPy5bdHlwZV0gfHwgdHlwZTtcclxuXHJcbiAgICBpZiAoREVCVUdba2V5XSA9PT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICBjb25zb2xlLmVycm9yKGBbJHtrZXl9XWAsIC4uLmFyZ3MpO1xyXG59IiwiZXhwb3J0IGNvbnN0IFRZUEVfTUFQID0ge1xyXG4gICAgUk9BRDogXCJyb2FkXCIsXHJcbiAgICBDSFVOSzogXCJjaHVua1wiLFxyXG4gICAgQlVJTERJTkc6IFwiYnVpbGRpbmdcIlxyXG59OyIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuLi9Db25maWcvZGVidWcuanMnO1xyXG5pbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi4vQ29uZmlnL2NodW5rLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwLCBpc0dyaWRMYXllckFjdGl2ZSB9IGZyb20gJy4uL21hcC5qcyc7XHJcblxyXG5leHBvcnQgY29uc3QgZ3JpZExheWVyID0gTC5sYXllckdyb3VwKCk7XHJcblxyXG5jb25zdCB2aXNpYmxlQ2h1bmtzID0gbmV3IE1hcCgpO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRHcmlkTGF5ZXIoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBpZiAoIW1hcCkgcmV0dXJuO1xyXG5cclxuICAgIGlmICghaXNHcmlkTGF5ZXJBY3RpdmUoKSkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IHpvb20gPSBtYXAuZ2V0Wm9vbSgpO1xyXG4gICAgaWYgKHpvb20gPCAxNCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGJvdW5kcyA9IG1hcC5nZXRCb3VuZHMoKTtcclxuXHJcbiAgICBjb25zdCBtaW5MYXQgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRTb3V0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtYXhMYXQgPSBNYXRoLmNlaWwoYm91bmRzLmdldE5vcnRoKCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1pbkxuZyA9IE1hdGguZmxvb3IoYm91bmRzLmdldFdlc3QoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4TG5nID0gTWF0aC5jZWlsKGJvdW5kcy5nZXRFYXN0KCkgLyBDSFVOS19TSVpFKTtcclxuXHJcbiAgICBjb25zdCBuZXdWaXNpYmxlID0gbmV3IFNldCgpO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSBtaW5MYXQ7IGkgPCBtYXhMYXQ7IGkrKykge1xyXG4gICAgICAgIGZvciAobGV0IGogPSBtaW5Mbmc7IGogPCBtYXhMbmc7IGorKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaWQgPSBgJHtpfV8ke2p9YDtcclxuICAgICAgICAgICAgbmV3VmlzaWJsZS5hZGQoaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZpc2libGVDaHVua3MuaGFzKGlkKSkgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBsYXQgPSBpICogQ0hVTktfU0laRTtcclxuICAgICAgICAgICAgY29uc3QgbG5nID0gaiAqIENIVU5LX1NJWkU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZWN0ID0gTC5yZWN0YW5nbGUoW1xyXG4gICAgICAgICAgICAgICAgW2xhdCwgbG5nXSxcclxuICAgICAgICAgICAgICAgIFtsYXQgKyBDSFVOS19TSVpFLCBsbmcgKyBDSFVOS19TSVpFXVxyXG4gICAgICAgICAgICBdLCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogXCJvcmFuZ2VcIixcclxuICAgICAgICAgICAgICAgIHdlaWdodDogMSxcclxuICAgICAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjE1XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVjdC5vbignbW91c2VvdmVyJywgKCkgPT4gcmVjdC5zZXRTdHlsZSh7IGZpbGxPcGFjaXR5OiAwLjMgfSkpO1xyXG4gICAgICAgICAgICByZWN0Lm9uKCdtb3VzZW91dCcsICgpID0+IHJlY3Quc2V0U3R5bGUoeyBmaWxsT3BhY2l0eTogMC4xNSB9KSk7XHJcblxyXG4gICAgICAgICAgICBncmlkTGF5ZXIuYWRkTGF5ZXIocmVjdCk7XHJcblxyXG4gICAgICAgICAgICB2aXNpYmxlQ2h1bmtzLnNldChpZCwgcmVjdCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIPCfp7kgcmVtb3ZlIGNldXggaG9ycyDDqWNyYW5cclxuICAgIGZvciAoY29uc3QgW2lkLCByZWN0XSBvZiB2aXNpYmxlQ2h1bmtzLmVudHJpZXMoKSkge1xyXG4gICAgICAgIGlmICghbmV3VmlzaWJsZS5oYXMoaWQpKSB7XHJcbiAgICAgICAgICAgIGdyaWRMYXllci5yZW1vdmVMYXllcihyZWN0KTtcclxuICAgICAgICAgICAgdmlzaWJsZUNodW5rcy5kZWxldGUoaWQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIkNodW5rcyB2aXNpYmxlczpcIiwgdmlzaWJsZUNodW5rcy5zaXplKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ0hVTksgQ09MT1JcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldENodW5rQ29sb3IoaWQsIGNvbG9yKSB7XHJcbiAgICBpZiAoIWlzR3JpZExheWVyQWN0aXZlKCkpIHJldHVybjtcclxuICAgIFxyXG4gICAgY29uc3QgcmVjdCA9IHZpc2libGVDaHVua3MuZ2V0KGlkKTtcclxuICAgIGlmICghcmVjdCkgcmV0dXJuO1xyXG5cclxuICAgIHJlY3Quc2V0U3R5bGUoe1xyXG4gICAgICAgIGNvbG9yLFxyXG4gICAgICAgIGZpbGxPcGFjaXR5OiAwLjJcclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vLi4vTGVhZmxldFdyYXBwZXInO1xyXG5cclxuY29uc3QgZGVwb3NpdE1hcmtlcnMgPSBuZXcgTWFwKCk7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERlcG9zaXRzRm9yQ2h1bmsoY2h1bmtJZCwgbWFwKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZGVwb3NpdHMvJHtjaHVua0lkfWApO1xyXG4gICAgICAgIGNvbnN0IGRlcG9zaXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoZGVwb3NpdHMsIG1hcCk7XHJcbiAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGNoYXJnZW1lbnQgZMOpcMO0dHM6XCIsIGVycik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlc291cmNlQ29sb3IodHlwZSkge1xyXG4gICAgY29uc3QgY29sb3JzID0geyAnaXJvbic6ICcjN2Y4YzhkJywgJ2NvYWwnOiAnIzJjM2U1MCcsICdvaWwnOiAnI2YxYzQwZicsICdiYXV4aXRlJzogJyNlNjdlMjInLCAncnViYmVyJzogJyMyN2FlNjAnLCAncmFyZV9lYXJ0aCc6ICcjOGU0NGFkJyB9O1xyXG4gICAgcmV0dXJuIGNvbG9yc1t0eXBlXSB8fCAnI2ZmZmZmZic7XHJcbn1cclxuXHJcbndpbmRvdy5jbGFpbURlcG9zaXQgPSBmdW5jdGlvbihpZCkge1xyXG4gICAgY29uc29sZS5sb2coXCJUZW50YXRpdmUgZCdleHBsb2l0YXRpb24gZHUgZMOpcMO0dDpcIiwgaWQpO1xyXG4gICAgLy8gSWNpLCB2b3VzIGRldnJleiBmYWlyZSB1biBmZXRjaCBQT1NUIHZlcnMgdW5lIHJvdXRlIEFQSSBcclxuICAgIC8vIHF1aSBkw6ljbGVuY2hlIGxhIGNvbnN0cnVjdGlvbiBkJ3VuIGLDonRpbWVudCBleHRyYWN0ZXVyLlxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGRlcG9zaXRMYXllcnMgPSB7XHJcbiAgICAnaXJvbic6IEwubGF5ZXJHcm91cCgpLFxyXG4gICAgJ2NvYWwnOiBMLmxheWVyR3JvdXAoKSxcclxuICAgICdvaWwnOiBMLmxheWVyR3JvdXAoKSxcclxuICAgICdiYXV4aXRlJzogTC5sYXllckdyb3VwKCksXHJcbiAgICAncnViYmVyJzogTC5sYXllckdyb3VwKCksXHJcbiAgICAncmFyZV9lYXJ0aCc6IEwubGF5ZXJHcm91cCgpXHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdERlcG9zaXRMYXllcnMobWFwLCBjb250cm9sKSB7XHJcbiAgICBPYmplY3Qua2V5cyhkZXBvc2l0TGF5ZXJzKS5mb3JFYWNoKGtleSA9PiB7XHJcbiAgICAgICAgY29udHJvbC5hZGRPdmVybGF5KGRlcG9zaXRMYXllcnNba2V5XSwgYFJlc3NvdXJjZTogJHtrZXl9YCk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoZGVwb3NpdHMsIG1hcCkge1xyXG4gICAgZGVwb3NpdHMuZm9yRWFjaChkZXBvc2l0ID0+IHtcclxuICAgICAgICBpZiAoZGVwb3NpdE1hcmtlcnMuaGFzKGRlcG9zaXQuaWQpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBkZXBvc2l0LnJlc291cmNlX3R5cGU7XHJcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBkZXBvc2l0TGF5ZXJzW3R5cGVdO1xyXG5cclxuICAgICAgICBpZiAoIWxheWVyKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUGFzIGRlIGxheWVyIHBvdXIgbGUgdHlwZTogJHt0eXBlfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtYXJrZXIgPSBMLmNpcmNsZU1hcmtlcihbZGVwb3NpdC5sYXRpdHVkZSwgZGVwb3NpdC5sb25naXR1ZGVdLCB7XHJcbiAgICAgICAgICAgIHJhZGl1czogOCxcclxuICAgICAgICAgICAgZmlsbENvbG9yOiBnZXRSZXNvdXJjZUNvbG9yKGRlcG9zaXQucmVzb3VyY2VfdHlwZSksXHJcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcclxuICAgICAgICAgICAgd2VpZ2h0OiAxLFxyXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC44XHJcbiAgICAgICAgfSkuYWRkVG8obGF5ZXIpO1xyXG5cclxuICAgICAgICBtYXJrZXIuYmluZFBvcHVwKGBcclxuICAgICAgICAgICAgPGI+JHtkZXBvc2l0LnJlc291cmNlX3R5cGUudG9VcHBlckNhc2UoKX08L2I+PGJyPlxyXG4gICAgICAgICAgICBSaWNoZXNzZTogJHtkZXBvc2l0LnJpY2huZXNzfTxicj5cclxuICAgICAgICAgICAgJHtkZXBvc2l0LmlzX2NsYWltZWQgPyAn4pqg77iPIETDqWrDoCBleHBsb2l0w6knIDogJzxidXR0b24gb25jbGljaz1cImNsYWltRGVwb3NpdCgnICsgZGVwb3NpdC5pZCArICcpXCI+RXhwbG9pdGVyPC9idXR0b24+J31cclxuICAgICAgICBgKTtcclxuXHJcbiAgICAgICAgZGVwb3NpdE1hcmtlcnMuc2V0KGRlcG9zaXQuaWQsIG1hcmtlcik7XHJcbiAgICB9KTtcclxufSIsImltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uL0NvbmZpZy9kZWJ1Zy5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZGF0ZUNodW5rKGlkKSB7XHJcbiAgICBkZWJ1Z0xvZyhcImNhY2hlXCIsIFwi8J+nuSBpbnZhbGlkYXRlIGNodW5rOlwiLCBpZCk7XHJcbiAgICBcclxuICAgIGRlbGV0ZSByb2Fkc1N0YXRlLmNodW5rc1tpZF07XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY2h1bmtfJHtpZH1gKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwLmpzJztcclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgcG9pbnQgbGUgcGx1cyBwcm9jaGUgc3VyIHRvdXRlcyBsZXMgcm91dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RQb2ludE9uUm9hZChsYXRsbmcsIHJvYWRzKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBsZXQgYmVzdFBvaW50ID0gbnVsbDtcclxuICAgIGxldCBiZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZHMpKSByZXR1cm4geyBwb2ludDogbnVsbCwgZGlzdGFuY2U6IEluZmluaXR5IH07XHJcblxyXG4gICAgcm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWQucG9pbnRzKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChyb2FkLnBvaW50cy5sZW5ndGggPCAyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9hZC5wb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhUmF3ID0gcm9hZC5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJSYXcgPSByb2FkLnBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFSYXcgfHwgIWJSYXcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkJST0tFTiBST0FEIFNFR01FTlQ6XCIsIHJvYWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYVJhdy5sZW5ndGggPCAyIHx8IGJSYXcubGVuZ3RoIDwgMikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhID0gTC5sYXRMbmcoYVJhd1swXSwgYVJhd1sxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBMLmxhdExuZyhiUmF3WzBdLCBiUmF3WzFdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RQb2ludE9uU2VnbWVudChsYXRsbmcsIGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gbWFwLmRpc3RhbmNlKGxhdGxuZywgcHJvamVjdGVkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgYmVzdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBkaXN0O1xyXG4gICAgICAgICAgICAgICAgYmVzdFBvaW50ID0gcHJvamVjdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb2ludDogYmVzdFBvaW50LFxyXG4gICAgICAgIGRpc3RhbmNlOiBiZXN0RGlzdGFuY2VcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgc2VnbWVudCBsZSBwbHVzIHByb2NoZSAocG91ciBoaWdobGlnaHQgdmlzdWVsKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDbG9zZXN0U2VnbWVudChsYXRsbmcsIHJvYWRzKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBsZXQgYmVzdFNlZ21lbnQgPSBudWxsO1xyXG4gICAgbGV0IGJlc3REaXN0YW5jZSA9IEluZmluaXR5O1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkcykpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkLnBvaW50cykpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2FkLnBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFSYXcgPSByb2FkLnBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYlJhdyA9IHJvYWQucG9pbnRzW2kgKyAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYVJhdyB8fCAhYlJhdykgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChhUmF3Lmxlbmd0aCA8IDIgfHwgYlJhdy5sZW5ndGggPCAyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBMLmxhdExuZyhhUmF3WzBdLCBhUmF3WzFdKTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IEwubGF0TG5nKGJSYXdbMF0sIGJSYXdbMV0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWlkID0gTC5sYXRMbmcoXHJcbiAgICAgICAgICAgICAgICAoYS5sYXQgKyBiLmxhdCkgLyAyLFxyXG4gICAgICAgICAgICAgICAgKGEubG5nICsgYi5sbmcpIC8gMlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShsYXRsbmcsIG1pZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdCA8IGJlc3REaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3RhbmNlID0gZGlzdDtcclxuICAgICAgICAgICAgICAgIGJlc3RTZWdtZW50ID0gW2EsIGJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJlc3RTZWdtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogUHJvamVjdGlvbiBkJ3VuIHBvaW50IHN1ciB1biBzZWdtZW50IChBLUIpXHJcbiAqIG1hdGggc3RhYmxlIHBvdXIgc25hcCByb3V0ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0UG9pbnRPblNlZ21lbnQocCwgYSwgYikge1xyXG5cclxuICAgIGNvbnN0IEEgPSBbYS5sYXQsIGEubG5nXTtcclxuICAgIGNvbnN0IEIgPSBbYi5sYXQsIGIubG5nXTtcclxuICAgIGNvbnN0IFAgPSBbcC5sYXQsIHAubG5nXTtcclxuXHJcbiAgICBjb25zdCBBQiA9IFtCWzBdIC0gQVswXSwgQlsxXSAtIEFbMV1dO1xyXG4gICAgY29uc3QgQVAgPSBbUFswXSAtIEFbMF0sIFBbMV0gLSBBWzFdXTtcclxuXHJcbiAgICBjb25zdCBhYjIgPSBBQlswXSAqIEFCWzBdICsgQUJbMV0gKiBBQlsxXTtcclxuXHJcbiAgICBpZiAoYWIyID09PSAwKSByZXR1cm4gYTtcclxuXHJcbiAgICBsZXQgdCA9IChBUFswXSAqIEFCWzBdICsgQVBbMV0gKiBBQlsxXSkgLyBhYjI7XHJcblxyXG4gICAgdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHQpKTtcclxuXHJcbiAgICByZXR1cm4gTC5sYXRMbmcoXHJcbiAgICAgICAgQVswXSArIEFCWzBdICogdCxcclxuICAgICAgICBBWzFdICsgQUJbMV0gKiB0XHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogRGlzdGFuY2UgcG9pbnQgLT4gc2VnbWVudCAodXRpbGUgdmFsaWRhdGlvbiBmdXR1cmUpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VUb1NlZ21lbnQocCwgYSwgYikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdGVkID0gcHJvamVjdFBvaW50T25TZWdtZW50KHAsIGEsIGIpO1xyXG4gICAgcmV0dXJuIG1hcC5kaXN0YW5jZShwLCBwcm9qZWN0ZWQpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgc2ltcGxlIGRlYnVnIHJvYWRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdSb2Fkcyhyb2Fkcykge1xyXG4gICAgY29uc29sZS5sb2coXCJST0FEUyBERUJVRzpcIiwgcm9hZHMubGVuZ3RoLCByb2Fkcyk7XHJcbn0iLCJpbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAuanMnO1xyXG5pbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi4vQ29uZmlnL2NodW5rLmpzJztcclxuaW1wb3J0IHsgc2V0Q2h1bmtDb2xvciB9IGZyb20gJy4uL0xheWVycy9ncmlkTGF5ZXIuanMnO1xyXG5pbXBvcnQgeyBpbnZhbGlkYXRlQ2h1bmsgfSBmcm9tICcuL2ludmFsaWRhdGVDaHVuay5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vQ29uZmlnL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4vcm9hZHNTdGF0ZS5qcyc7XHJcbmltcG9ydCB7IHJlbmRlckRlcG9zaXRzRnJvbURhdGEgfSBmcm9tICcuLi9NYXAvZGVwb3NpdHMuanMnO1xyXG5pbXBvcnQgeyBnZXRDYWNoZUtleSB9IGZyb20gJy4uL0NvbmZpZy9jYWNoZVV0aWxzLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgQ09OVFJPTFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBsb2FkaW5nUXVldWUgPSBuZXcgU2V0KCk7XHJcbmNvbnN0IE1BWF9DT05DVVJSRU5UID0gNDtcclxubGV0IGFjdGl2ZVJlcXVlc3RzID0gMDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENIVU5LIElEXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGdldENodW5rSWQobGF0LCBsbmcpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGxhdCAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IobG5nIC8gQ0hVTktfU0laRSk7XHJcbiAgICByZXR1cm4gYCR7eH1fJHt5fWA7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE1BSU4gTE9BRCBWSVNJQkxFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFtYXAgfHwgbWFwLmdldFpvb20oKSA8IDE0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYm91bmRzID0gbWFwLmdldEJvdW5kcygpO1xyXG5cclxuICAgIGNvbnN0IHZpc2libGVDaHVua3MgPSBnZXRWaXNpYmxlQ2h1bmtzKGJvdW5kcyk7XHJcblxyXG4gICAgY29uc3QgY2h1bmtzVG9Mb2FkID0gdmlzaWJsZUNodW5rcy5maWx0ZXIoXHJcbiAgICAgICAgY2h1bmtJZCA9PiAhcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuaGFzKGNodW5rSWQpXHJcbiAgICApO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBWRVJJRklDQVRJT04gQ0FDSEUgTE9DQUxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBmaW5hbENodW5rc1RvTG9hZCA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBjaHVua3NUb0xvYWQpIHtcclxuICAgICAgICBjb25zdCBjYWNoZUtleSA9IGdldENhY2hlS2V5KGNodW5rSWQpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNhY2hlS2V5KTtcclxuICAgICAgICBpZiAoY2FjaGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGNhY2hlZCk7XHJcbiAgICAgICAgICAgIC8vIFbDqXJpZmllciBzaSBsZSBjYWNoZSBlc3QgdmlldXggKGV4OiBwbHVzIGRlIDFoKVxyXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIGRhdGEudHMgPCAzNjAwMDAwKSB7IFxyXG4gICAgICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBkYXRhLmhhc1JvYWRzID8gJ2xvYWRlZCcgOiAnZW1wdHknLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvYWRzOiBkYXRhLnJvYWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogZGF0YS5idWlsZGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwb3NpdHM6IGRhdGEuZGVwb3NpdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzUm9hZHM6IGRhdGEuaGFzUm9hZHNcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5hZGQoY2h1bmtJZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsIGRhdGEuaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCcpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShkYXRhLmRlcG9zaXRzIHx8IFtdLCBtYXApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxDaHVua3NUb0xvYWQucHVzaChjaHVua0lkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRVRBVCBMT0FESU5HXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBmaW5hbENodW5rc1RvTG9hZCkge1xyXG5cclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGluZycsXHJcbiAgICAgICAgICAgIHJvYWRzOiBbXSxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBbXSxcclxuICAgICAgICAgICAgZGVwb3NpdHM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmllbiDDoCBjaGFyZ2VyXHJcbiAgICBpZiAoZmluYWxDaHVua3NUb0xvYWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmVmcmVzaENodW5rQ29sb3JzKHZpc2libGVDaHVua3MpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCBbcm9hZHNSZXNwb25zZSwgYnVpbGRpbmdzUmVzcG9uc2UsIGRlcG9zaXRzUmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9jaHVua3MvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2J1aWxkaW5ncy92aXNpYmxlJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBmaW5hbENodW5rc1RvTG9hZCB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvZGVwb3NpdHMvYnVsaycsIHsgICAgICAgLy8g4oaQIG5vdXZlbCBlbmRwb2ludCDDoCBjcsOpZXJcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgaWYgKCFyb2Fkc1Jlc3BvbnNlLm9rIHx8ICFidWlsZGluZ3NSZXNwb25zZS5vayB8fCAhZGVwb3NpdHNSZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiQVBJIGVycm9yXCIpO1xyXG5cclxuICAgICAgICBjb25zdCByb2Fkc0RhdGEgPSBhd2FpdCByb2Fkc1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBidWlsZGluZ3NEYXRhID0gYXdhaXQgYnVpbGRpbmdzUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGRlcG9zaXRzRGF0YSA9IGF3YWl0IGRlcG9zaXRzUmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAvLyBDcsOpZXIgdW4gaW5kZXggcG91ciBtYXBwZXIgbGVzIGLDonRpbWVudHMgcGFyIGNodW5rSWQgcmFwaWRlbWVudFxyXG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nc0J5Q2h1bmsgPSB7fTtcclxuICAgICAgICBidWlsZGluZ3NEYXRhLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNJZCA9IE1hdGguZmxvb3IoYi5sYXQgKiAxMDApICsgJ18nICsgTWF0aC5mbG9vcihiLmxuZyAqIDEwMCk7XHJcbiAgICAgICAgICAgIGlmICghYnVpbGRpbmdzQnlDaHVua1tjSWRdKSBidWlsZGluZ3NCeUNodW5rW2NJZF0gPSBbXTtcclxuICAgICAgICAgICAgYnVpbGRpbmdzQnlDaHVua1tjSWRdLnB1c2goYik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gVFJBSVRFTUVOVCBDSFVOS1NcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2h1bmtEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgcm9hZHM6IHJvYWRzRGF0YVtjaHVua0lkXT8ucm9hZHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IGJ1aWxkaW5nc0RhdGFbY2h1bmtJZF0/LmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBkZXBvc2l0c0RhdGFbY2h1bmtJZF0gfHwgW11cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhc1JvYWRzID0gY2h1bmtEYXRhLnJvYWRzICYmIGNodW5rRGF0YS5yb2Fkcy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGhhc1JvYWRzID8gJ2xvYWRlZCcgOiAnZW1wdHknLFxyXG4gICAgICAgICAgICAgICAgcm9hZHM6IGNodW5rRGF0YS5yb2FkcyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogY2h1bmtEYXRhLmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBjaHVua0RhdGEuZGVwb3NpdHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBoYXNSb2Fkc1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuYWRkKGNodW5rSWQpO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gQ0FDSEVcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRDYWNoZUtleShjaHVua0lkKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgIGNhY2hlS2V5LFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICByb2FkczogY2h1bmtEYXRhLnJvYWRzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBjaHVua0RhdGEuYnVpbGRpbmdzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6IGNodW5rRGF0YS5kZXBvc2l0cyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGhhc1JvYWRzLFxyXG4gICAgICAgICAgICAgICAgdHM6IERhdGUubm93KClcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gRFJBVyBST0FEU1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICAgLy8gY2h1bmtEYXRhLnJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBkcmF3Um9hZChyb2FkKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBEUkFXIEJVSUxESU5HU1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBjaHVua0RhdGEuYnVpbGRpbmdzLmZvckVhY2goYnVpbGRpbmcgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgZHJhd0J1aWxkaW5nKGJ1aWxkaW5nKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBDT1VMRVVSIENIVU5LXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoXHJcbiAgICAgICAgICAgICAgICBjaHVua0lkLFxyXG4gICAgICAgICAgICAgICAgaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCdcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoY2h1bmtEYXRhLmRlcG9zaXRzLCBtYXApO1xyXG5cclxuICAgICAgICAgICAgZGVidWdMb2coXCJyb2Fkc1wiLCBgQ2h1bmsgJHtjaHVua0lkfSBsb2FkZWQgKCR7Y2h1bmtEYXRhLnJvYWRzLmxlbmd0aH0gcm9hZHMsICR7Y2h1bmtEYXRhLmJ1aWxkaW5ncy5sZW5ndGh9IGJ1aWxkaW5ncywgJHtjaHVua0RhdGEuZGVwb3NpdHMubGVuZ3RofSBkZXBvc2l0cylgKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICBcIkVycmV1ciBjaGFyZ2VtZW50IGNodW5rcyBidWxrOlwiLFxyXG4gICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gRVRBVCBFUlJFVVJcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG5cclxuICAgICAgICAgICAgICAgIHJvYWRzOiBbXSxcclxuXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6IFtdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFRlJFU0ggVklTVUVMIEZJTkFMXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVGUkVTSCBDSFVOSyBDT0xPUlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gcmVmcmVzaENodW5rQ29sb3JzKHZpc2libGVDaHVua3MpIHtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgdmlzaWJsZUNodW5rcykge1xyXG5cclxuICAgICAgICBjb25zdCBjaHVuayA9IHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdO1xyXG4gICAgICAgIGlmICghY2h1bmspIHtcclxuXHJcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY2h1bmsuc3RhdHVzKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdsb2FkZWQnOlxyXG5cclxuICAgICAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ2JsdWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2VtcHR5JzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICcjNDQ0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdsb2FkaW5nJzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAneWVsbG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSRUZSRVNIIENIVU5LXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoQ2h1bmsobGF0LCBsbmcpIHtcclxuICAgIGNvbnN0IGNodW5rSWQgPSBnZXRDaHVua0lkKGxhdCwgbG5nKTtcclxuXHJcbiAgICBpbnZhbGlkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcblxyXG4gICAgcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuZGVsZXRlKGNodW5rSWQpO1xyXG5cclxuICAgIGF3YWl0IGZldGNoU2luZ2xlQ2h1bmsoY2h1bmtJZCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZFVENIIFNJTkdMRSBDSFVOS1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFNpbmdsZUNodW5rKGNodW5rSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgICByb2FkczogW10sXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogW10sXHJcbiAgICAgICAgICAgIGRlcG9zaXRzOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpO1xyXG5cclxuICAgICAgICBjb25zdCBbcm9hZHNSZXMsIGJ1aWxkaW5nc1JlcywgZGVwb3NpdHNSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9jaHVua3MvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogW2NodW5rSWRdIH0pXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9idWlsZGluZ3MvdmlzaWJsZScsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogW2NodW5rSWRdIH0pXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9kZXBvc2l0cy9idWxrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBbY2h1bmtJZF0gfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgaWYgKCFyb2Fkc1Jlcy5vayB8fCAhYnVpbGRpbmdzUmVzLm9rIHx8ICFkZXBvc2l0c1Jlcy5vaykgXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFQSSBlcnJvclwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZHNEYXRhICAgICA9IGF3YWl0IHJvYWRzUmVzLmpzb24oKTtcclxuICAgICAgICBjb25zdCBidWlsZGluZ3NEYXRhID0gYXdhaXQgYnVpbGRpbmdzUmVzLmpzb24oKTtcclxuICAgICAgICBjb25zdCBkZXBvc2l0c0RhdGEgID0gYXdhaXQgZGVwb3NpdHNSZXMuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBjaHVua0RlcG9zaXRzID0gZGVwb3NpdHNEYXRhW2NodW5rSWRdIHx8IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBjaHVua0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHJvYWRzOiAgICAgcm9hZHNEYXRhW2NodW5rSWRdPy5yb2FkcyAgICAgfHwgW10sXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogYnVpbGRpbmdzRGF0YVtjaHVua0lkXT8uYnVpbGRpbmdzIHx8IFtdLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogIGNodW5rRGVwb3NpdHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoYXNSb2FkcyA9IGNodW5rRGF0YS5yb2Fkcy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiBoYXNSb2FkcyA/ICdsb2FkZWQnIDogJ2VtcHR5JyxcclxuICAgICAgICAgICAgcm9hZHM6ICAgICBjaHVua0RhdGEucm9hZHMsXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogY2h1bmtEYXRhLmJ1aWxkaW5ncyxcclxuICAgICAgICAgICAgZGVwb3NpdHM6ICBjaHVua0RhdGEuZGVwb3NpdHMsXHJcbiAgICAgICAgICAgIGhhc1JvYWRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRDYWNoZUtleShjaHVua0lkKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjYWNoZUtleSwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICByb2FkczogICAgIGNodW5rRGF0YS5yb2FkcyxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBjaHVua0RhdGEuYnVpbGRpbmdzLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogIGNodW5rRGF0YS5kZXBvc2l0cyxcclxuICAgICAgICAgICAgaGFzUm9hZHMsXHJcbiAgICAgICAgICAgIHRzOiBEYXRlLm5vdygpXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsIGhhc1JvYWRzID8gJ2JsdWUnIDogJyM0NDQnKTtcclxuICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGNodW5rRGF0YS5kZXBvc2l0cywgZ2V0TWFwKCkpO1xyXG5cclxuICAgICAgICBkZWJ1Z0xvZyhcIltDSFVOSyBSRUZSRVNIXVwiLCBjaHVua0lkLCBjaHVua0RhdGEucm9hZHMubGVuZ3RoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICAgICAgcm9hZHM6IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IFtdLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuICAgICAgICBkZWJ1Z0Vycm9yKFwiW0NIVU5LIFJFRlJFU0ggRVJST1JdXCIsIGNodW5rSWQsIGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWaXNpYmxlQ2h1bmtzKGJvdW5kcykge1xyXG5cclxuICAgIGNvbnN0IG1pblggPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRTb3V0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtYXhYID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0Tm9ydGgoKSAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIGNvbnN0IG1pblkgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRXZXN0KCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heFkgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRFYXN0KCkgLyBDSFVOS19TSVpFKTtcclxuXHJcbiAgICBjb25zdCBjaHVua0lkID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgeCA9IG1pblg7IHggPD0gbWF4WDsgeCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGNodW5rSWQucHVzaChgJHt4fV8ke3l9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjaHVua0lkO1xyXG59IiwiZXhwb3J0IGNvbnN0IHJvYWRzU3RhdGUgPSB7XHJcbiAgICBjaHVua3M6IHt9LFxyXG4gICAgbG9hZGVkQ2h1bmtzOiBuZXcgU2V0KCksXHJcbiAgICByb2Fkc1JlYWR5OiBmYWxzZSxcclxuICAgIGRyYXduUm9hZHM6IFtdLFxyXG4gICAgdmlzaWJsZUNodW5rczogbmV3IFNldCgpLFxyXG4gICAgXHJcbiAgICByb2FkTGF5ZXJzOiB7fSxcclxuXHJcbiAgICBidWlsZGluZ0xheWVyczoge31cclxufTtcclxuXHJcbmxldCBjYWNoZWRSb2FkcyA9IFtdO1xyXG5sZXQgY2FjaGVEaXJ0eSA9IHRydWU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFya1JvYWRDYWNoZURpcnR5KCkge1xyXG4gICAgY2FjaGVEaXJ0eSA9IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxMb2FkZWRSb2FkcygpIHtcclxuXHJcbiAgICBpZiAoIXJvYWRzU3RhdGU/LmNodW5rcykgcmV0dXJuIFtdO1xyXG5cclxuICAgIGlmICghY2FjaGVEaXJ0eSkgcmV0dXJuIGNhY2hlZFJvYWRzO1xyXG5cclxuICAgIGNhY2hlZFJvYWRzID0gT2JqZWN0LnZhbHVlcyhyb2Fkc1N0YXRlLmNodW5rcylcclxuICAgICAgICAuZmlsdGVyKGMgPT4gYz8uc3RhdHVzID09PSAnbG9hZGVkJyAmJiBBcnJheS5pc0FycmF5KGMucm9hZHMpKVxyXG4gICAgICAgIC5mbGF0TWFwKGMgPT4gYy5yb2Fkcyk7XHJcblxyXG4gICAgY2FjaGVEaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBjYWNoZWRSb2FkcztcclxufSIsImV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHR5cGUgPSAnaW5mbycpIHtcclxuXHJcbiAgICBjb25zdCBub3RpZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbm90aWYuY2xhc3NOYW1lID0gYG5vdGlmIG5vdGlmLSR7dHlwZX1gO1xyXG4gICAgbm90aWYudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm90aWYpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG5vdGlmLnJlbW92ZSgpO1xyXG4gICAgfSwgMzAwMCk7XHJcbn0iLCJpbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi4vVWkvbm90aWZpY2F0aW9uLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBBVEhGSU5ESU5HIERFQlVHIC0gQ0xJQ0sgVE8gR0VUIENPT1JESU5BVEVTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBZG1pbkNvb3JkcyhsYXQsIGxuZykge1xyXG4gICAgaWYgKGxhdCA9PT0gdW5kZWZpbmVkIHx8IGxuZyA9PT0gdW5kZWZpbmVkKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgZm9ybWF0ID0gYCR7bGF0LnRvRml4ZWQoNil9LCR7bG5nLnRvRml4ZWQoNil9YDtcclxuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGZvcm1hdCk7XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKFwiRm9ybWF0IGNvbGxhYmxlIGFkbWluIGNvcGnDqSA6IFwiICsgZm9ybWF0LCAnc3VjY2VzcycpO1xyXG59IiwiaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uL0NvbmZpZy9jaHVuay5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc25hcFRvQ2h1bmsobGF0LCBsbmcpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGxhdCAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IobG5nIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsYXQ6IHggKiBDSFVOS19TSVpFLFxyXG4gICAgICAgIGxuZzogeSAqIENIVU5LX1NJWkUsXHJcbiAgICAgICAgY2h1bmtJZDogYCR7eH1fJHt5fWBcclxuICAgIH07XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gYnVpbGRSZXF1ZXN0KGxhdCwgbG5nLCB0eXBlSWQpIHtcclxuICAgIHJldHVybiBmZXRjaCgnL2FwaS9idWlsZCcsIHtcclxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGxhdDogbGF0LCBsbmc6IGxuZywgdHlwZV9pZDogdHlwZUlkIH0pXHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1aWxkaW5ncygpIHtcclxuICAgIHJldHVybiBmZXRjaCgnL2FwaS9tYXAtZGF0YScpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBmbHlUbywgZ2V0TWFwIH0gZnJvbSAnLi9tYXAuanMnO1xyXG5pbXBvcnQgeyByb2Fkc1N0YXRlLCBnZXRBbGxMb2FkZWRSb2FkcyB9IGZyb20gJy4vUm9hZHMvcm9hZHNTdGF0ZS5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nSW1hZ2UgfSBmcm9tICcuL2J1aWxkaW5nLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4vQ29uZmlnL2NodW5rLmpzJztcclxuaW1wb3J0IHsgc2FmZUxvYWRDaHVuaywgbG9hZFZpc2libGVSb2FkQ2h1bmtzIH0gZnJvbSAnLi9Sb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQsIGZpbmRDbG9zZXN0U2VnbWVudCB9IGZyb20gJy4vUm9hZHMvcm9hZFV0aWxzLmpzJztcclxuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4vVWkvbm90aWZpY2F0aW9uLmpzJztcclxuaW1wb3J0IHsgZ2V0QWRtaW5Db29yZHMgfSBmcm9tICcuL1V0aWxzL2FkbWluX2NsaXBib2FyZC5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDwn6egIFNUQVRFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmxldCBiYXNlTWFya2VyID0gbnVsbDtcclxubGV0IGJhc2VDaXJjbGUgPSBudWxsO1xyXG5sZXQgYmFzZVBvc2l0aW9uID0gbnVsbDtcclxubGV0IGJhc2VDcmVhdGVkID0gZmFsc2U7XHJcbmxldCBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG5cclxubGV0IHByZXZpZXdNYXJrZXIgPSBudWxsO1xyXG5sZXQgcHJldmlld0NpcmNsZSA9IG51bGw7XHJcbmxldCBwcmV2aWV3U25hcExhdExuZyA9IG51bGw7XHJcbmxldCBwcmV2aWV3TGluZSA9IG51bGw7XHJcbmxldCBoaWdobGlnaHRlZFNlZ21lbnQgPSBudWxsO1xyXG5cclxubGV0IGN1cnJlbnRQbGF5ZXJGYWN0aW9uID0gJ2RlZmF1bHQnO1xyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNFVCBQTEFZRVIgRkFDVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFBsYXllckZhY3Rpb24oZmFjdGlvbikge1xyXG4gICAgY3VycmVudFBsYXllckZhY3Rpb24gPSAoZmFjdGlvbiB8fCAnZGVmYXVsdCcpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVQgVUlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYXNlVUkoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgY29uc3QgYmFzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlQnRuJyk7XHJcblxyXG4gICAgYmFzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kZSA9IGJhc2VCdG4uZGF0YXNldC5tb2RlO1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIENSRUFURSBCQVNFIE1PREUgXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBpZiAobW9kZSA9PT0gJ2NyZWF0ZScpIHtcclxuICAgICAgICAgICAgaWYgKGJhc2VDcmVhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkJhc2UgZMOpasOgIGNyw6nDqWUgIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGxhY2luZ0Jhc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcblxyXG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiQ2xpcXVlIHN1ciBsYSBjYXJ0ZSBwb3VyIHBsYWNlciB0YSBiYXNlXCIsICdpbmZvJyk7XHJcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBSRVRVUk4gQkFTRSBNT0RFXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBpZiAobW9kZSA9PT0gJ3JldHVybicpIHtcclxuICAgICAgICAgICAgaWYgKCFiYXNlUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQXVjdW5lIGJhc2UgIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmx5VG8oYmFzZVBvc2l0aW9uWzBdLCBiYXNlUG9zaXRpb25bMV0sIDE2KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIENMSUNLIE1BUFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghcGxhY2luZ0Jhc2UgfHwgYmFzZUNyZWF0ZWQpIHJldHVybjtcclxuICAgICAgICBpZiAoIXByZXZpZXdTbmFwTGF0TG5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IHByZXZpZXdTbmFwTGF0TG5nO1xyXG5cclxuICAgICAgICBpZiAoIWlzQmFzZVBsYWNlbWVudFZhbGlkKGxhdCwgbG5nKSkge1xyXG4gICAgICAgICAgICBhbGVydChcIuKdjCBUcm9wIHByb2NoZSBkJ3VuZSBiYXNlICFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFudXBQcmV2aWV3KG1hcCk7XHJcbiAgICAgICAgY3JlYXRlQmFzZShsYXQsIGxuZyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBNT1VTRSBNT1ZFIChwcmV2aWV3IHNuYXAgcm9hZClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBtYXAub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghcGxhY2luZ0Jhc2UpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZHMgPSBnZXRBbGxMb2FkZWRSb2FkcygpO1xyXG5cclxuICAgICAgICBpZiAoIXJvYWRzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBmaW5kQ2xvc2VzdFBvaW50T25Sb2FkKGUubGF0bG5nLCByb2Fkcyk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQucG9pbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgcHJldmlld1NuYXBMYXRMbmcgPSByZXN1bHQucG9pbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBpc0Jhc2VQbGFjZW1lbnRWYWxpZChyZXN1bHQucG9pbnQubGF0LCByZXN1bHQucG9pbnQubG5nKTtcclxuXHJcbiAgICAgICAgY2xlYW51cFByZXZpZXcobWFwKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBpc1ZhbGlkID8gJ2dyZWVuJyA6ICdyZWQnO1xyXG5cclxuICAgICAgICBwcmV2aWV3Q2lyY2xlID0gTC5jaXJjbGUocmVzdWx0LnBvaW50LCB7XHJcbiAgICAgICAgICAgIHJhZGl1czogNjAwLFxyXG4gICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgd2VpZ2h0OiAyLFxyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4xXHJcbiAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgcHJldmlld01hcmtlciA9IEwubWFya2VyKHJlc3VsdC5wb2ludCkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgcHJldmlld0xpbmUgPSBMLnBvbHlsaW5lKFtlLmxhdGxuZywgcmVzdWx0LnBvaW50XSwge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2N5YW4nLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICAgICAgZGFzaEFycmF5OiAnNSwgNSdcclxuICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gZmluZENsb3Nlc3RTZWdtZW50KGUubGF0bG5nLCByb2Fkcyk7XHJcblxyXG4gICAgICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkU2VnbWVudCA9IEwucG9seWxpbmUoc2VnbWVudCwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiA2LFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44XHJcbiAgICAgICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFVQREFURSBWSVNVQUwgQkFTRSBBTkQgT1RIRVIgQkFTRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignem9vbWVuZCcsICgpID0+IHtcclxuICAgICAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG4gICAgICAgIHVwZGF0ZU90aGVyQmFzZXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQQVRIRklORElORyBERUJVRyBGT1IgQURNSU4gLSBDTElDSyBUTyBHRVQgQ09PUkRJTkFURVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlcigpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbihcIk1vZGUgQWRtaW4gYWN0aXbDqSA6IGNsaXF1ZXogc3VyIGxhIGNhcnRlXCIsICdpbmZvJyk7XHJcbiAgICAgICAgXHJcbiAgICBtYXAub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBnZXRBZG1pbkNvb3JkcyhlLmxhdGxuZy5sYXQsIGUubGF0bG5nLmxuZyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LmVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlciA9IGVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlcjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfp7kgQ0xFQU4gUFJFVklFV1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjbGVhbnVwUHJldmlldygpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TWFya2VyKTtcclxuICAgIHByZXZpZXdDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdDaXJjbGUpO1xyXG4gICAgcHJldmlld0xpbmUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdMaW5lKTtcclxuICAgIGhpZ2hsaWdodGVkU2VnbWVudCAmJiBtYXAucmVtb3ZlTGF5ZXIoaGlnaGxpZ2h0ZWRTZWdtZW50KTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyID0gbnVsbDtcclxuICAgIHByZXZpZXdDaXJjbGUgPSBudWxsO1xyXG4gICAgcHJldmlld0xpbmUgPSBudWxsO1xyXG4gICAgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gbnVsbDtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICByZXR1cm4gb3RoZXJCYXNlcy5ldmVyeShiYXNlID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShcclxuICAgICAgICAgICAgW2xhdCwgbG5nXSxcclxuICAgICAgICAgICAgW2Jhc2UubGF0LCBiYXNlLmxuZ11cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzdCA+PSAxMTAwO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENSRUFURSBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNyZWF0ZUJhc2UobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG4gICAgYmFzZVBvc2l0aW9uID0gW2xhdCwgbG5nXTtcclxuXHJcbiAgICBmbHlUbyhsYXQsIGxuZyk7XHJcblxyXG4gICAgYmFzZUNpcmNsZSA9IEwuY2lyY2xlKGJhc2VQb3NpdGlvbiwge1xyXG4gICAgICAgIHJhZGl1czogNTAwLFxyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICBjb25zdCBiYXNlVHlwZUlkID0gMTtcclxuICAgIGZldGNoKCcvYXBpL2J1aWxkJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbGF0LFxyXG4gICAgICAgICAgICBsbmcsXHJcbiAgICAgICAgICAgIHR5cGVfaWQ6IGJhc2VUeXBlSWRcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXMub2spIHJldHVybiByZXMuanNvbigpLnRoZW4oZXJyID0+IHsgdGhyb3cgbmV3IEVycm9yKGVyci5lcnJvciB8fCBcIkFQSSBlcnJvclwiKSB9KTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICBiYXNlQ3JlYXRlZCA9IHRydWU7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJlbW92ZUJhc2UoKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciBjcsOpYXRpb24gYmFzZSA6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG4gICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVNT1ZFIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gcmVtb3ZlQmFzZSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBiYXNlTWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihiYXNlTWFya2VyKTtcclxuICAgIGJhc2VDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKGJhc2VDaXJjbGUpO1xyXG5cclxuICAgIGJhc2VNYXJrZXIgPSBudWxsO1xyXG4gICAgYmFzZUNpcmNsZSA9IG51bGw7XHJcbiAgICBiYXNlUG9zaXRpb24gPSBudWxsO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSBmYWxzZTtcclxuICAgIHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgT1RIRVIgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgb3RoZXJCYXNlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPdGhlckJhc2UobGF0LCBsbmcsIHBzZXVkbywgZmFjdGlvbikge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShsbmcpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgY2lyY2xlID0gTC5jaXJjbGUoW2xhdCwgbG5nXSwge1xyXG4gICAgICAgIHJhZGl1czogNTAwLFxyXG4gICAgICAgIGNvbG9yOiAncmVkJ1xyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICBjb25zdCBpY29uID0gY3JlYXRlQmFzZUljb24obWFwLmdldFpvb20oKSwgZmFjdGlvbik7XHJcblxyXG4gICAgbGV0IG1hcmtlciA9IG51bGw7XHJcblxyXG4gICAgaWYgKGljb24pIHtcclxuICAgICAgICBtYXJrZXIgPSBMLm1hcmtlcihbbGF0LCBsbmddLCB7IGljb24gfSlcclxuICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgLmJpbmRQb3B1cChg8J+Ple+4jyBCYXNlIGRlICR7cHNldWRvfWApO1xyXG4gICAgfVxyXG5cclxuICAgIG90aGVyQmFzZXMucHVzaCh7IGxhdCwgbG5nLCBwc2V1ZG8sIG1hcmtlciwgY2lyY2xlLCBmYWN0aW9uIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUERBVEUgT1RIRVIgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiB1cGRhdGVPdGhlckJhc2VzKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgY29uc3Qgem9vbSA9IG1hcC5nZXRab29tKCk7XHJcblxyXG4gICAgb3RoZXJCYXNlcy5mb3JFYWNoKGJhc2UgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBpY29uID0gY3JlYXRlQmFzZUljb24oem9vbSwgYmFzZS5mYWN0aW9uKTtcclxuXHJcbiAgICAgICAgaWYgKCFpY29uKSB7XHJcbiAgICAgICAgICAgIGlmIChiYXNlLm1hcmtlcikgbWFwLnJlbW92ZUxheWVyKGJhc2UubWFya2VyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFiYXNlLm1hcmtlcikge1xyXG4gICAgICAgICAgICBiYXNlLm1hcmtlciA9IEwubWFya2VyKFtiYXNlLmxhdCwgYmFzZS5sbmddLCB7IGljb24gfSlcclxuICAgICAgICAgICAgICAgIC5hZGRUbyhtYXApXHJcbiAgICAgICAgICAgICAgICAuYmluZFBvcHVwKGDwn4+V77iPIEJhc2UgZGUgJHtiYXNlLnBzZXVkb31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXAuaGFzTGF5ZXIoYmFzZS5tYXJrZXIpKSBiYXNlLm1hcmtlci5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBiYXNlLm1hcmtlci5zZXRJY29uKGljb24pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgRlJPTSBTRVJWRVJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCYXNlRnJvbVNlcnZlcihsYXQsIGxuZykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShsbmcpKSByZXR1cm47XHJcblxyXG4gICAgYmFzZVBvc2l0aW9uID0gW2xhdCwgbG5nXTtcclxuICAgIGJhc2VDcmVhdGVkID0gdHJ1ZTtcclxuXHJcbiAgICBiYXNlQ2lyY2xlID0gTC5jaXJjbGUoYmFzZVBvc2l0aW9uLCB7XHJcbiAgICAgICAgcmFkaXVzOiA1MDAsXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIHVwZGF0ZUJhc2VEaXNwbGF5KCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQREFURSBCQVNFIERJU1BMQVlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gdXBkYXRlQmFzZURpc3BsYXkoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFiYXNlUG9zaXRpb24pIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBpY29uID0gY3JlYXRlQmFzZUljb24obWFwLmdldFpvb20oKSwgY3VycmVudFBsYXllckZhY3Rpb24pO1xyXG5cclxuICAgIGlmICghaWNvbikge1xyXG4gICAgICAgIGlmIChiYXNlTWFya2VyKSBtYXAucmVtb3ZlTGF5ZXIoYmFzZU1hcmtlcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYmFzZU1hcmtlcikge1xyXG4gICAgICAgIGJhc2VNYXJrZXIgPSBMLm1hcmtlcihiYXNlUG9zaXRpb24sIHsgaWNvbiB9KS5hZGRUbyhtYXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIW1hcC5oYXNMYXllcihiYXNlTWFya2VyKSkgYmFzZU1hcmtlci5hZGRUbyhtYXApO1xyXG4gICAgICAgIGJhc2VNYXJrZXIuc2V0SWNvbihpY29uKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ1JFQVRFIEJBU0UgSUNPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjcmVhdGVCYXNlSWNvbih6b29tLCBmYWN0aW9uKSB7XHJcblxyXG4gICAgaWYgKHpvb20gPCAxMykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3Qgc2l6ZSA9IHpvb20gPiAxNSA/IDUwIDogMzA7XHJcblxyXG4gICAgcmV0dXJuIEwuaWNvbih7XHJcbiAgICAgICAgaWNvblVybDogZ2V0QnVpbGRpbmdJbWFnZShmYWN0aW9uLCAnYmFzZScpLFxyXG5cclxuICAgICAgICBpY29uU2l6ZTogW3NpemUsIHNpemVdLFxyXG4gICAgICAgIGljb25BbmNob3I6IFtzaXplIC8gMiwgc2l6ZSAvIDJdLFxyXG4gICAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLXNpemUgLyAyXVxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4vbWFwLmpzJztcclxuaW1wb3J0IHsgZ2V0QnVpbGRpbmdzIH0gZnJvbSAnLi9hcGkuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCdWlsZGluZ3MoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFtYXApIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWFwIG5vdCBpbml0aWFsaXplZFwiKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0QnVpbGRpbmdzKCkudGhlbihkYXRhID0+IHtcclxuXHJcbiAgICAgICAgZGF0YS5mb3JFYWNoKGIgPT4ge1xyXG5cclxuICAgICAgICAgICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoYi5sYXQpIHx8ICFOdW1iZXIuaXNGaW5pdGUoYi5sbmcpKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLinYwgQnVpbGRpbmcgaWdub3LDqSAoY29vcmQgaW52YWxpZGUpXCIsIGIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBMLm1hcmtlcihbYi5sYXQsIGIubG5nXSlcclxuICAgICAgICAgICAgICAgIC5hZGRUbyhtYXApXHJcbiAgICAgICAgICAgICAgICAuYmluZFBvcHVwKGAke2IudHlwZX0gbHZsICR7Yi5sZXZlbH1gKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICB9KTtcclxufVxyXG5cclxuLyoqXHJcbiAqIFJldG91cm5lIGR5bmFtaXF1ZW1lbnQgbGUgY2hlbWluIGRlIGwnaW1hZ2UuXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBmYWN0aW9uIC0gTGUgY29kZSBvdSBub20gZGUgbGEgZmFjdGlvbiAoZXg6IFwiRW1waXJlXCIsIFwiQ2VuZHJlc1wiKS5cclxuICogQHBhcmFtIHtzdHJpbmd9IGJ1aWxkaW5nIC0gTGUgbm9tIGR1IGLDonRpbWVudCAoZXg6IFwiYmFzZVwiLCBcImlyb25fbWluZVwiKS5cclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ0ltYWdlKGZhY3Rpb24sIGJ1aWxkaW5nKSB7XHJcbiAgICBjb25zdCBmYWN0aW9uU2x1ZyA9IChmYWN0aW9uIHx8ICdkZWZhdWx0JykudG9Mb3dlckNhc2UoKTtcclxuXHJcbiAgICByZXR1cm4gYC9hc3NldHMvaW1hZ2VzL2J1aWxkaW5ncy8ke2ZhY3Rpb25TbHVnfS8ke2J1aWxkaW5nfS5wbmdgO1xyXG59IiwiaW1wb3J0IHsgaW5pdE1hcCwgbG9hZFdvcmxkLCBtYXAgfSBmcm9tICcuL21hcC5qcyc7XHJcbmltcG9ydCB7IGluaXRHUFMgfSBmcm9tICcuL2dwcy5qcyc7XHJcbmltcG9ydCB7IGluaXRCYXNlVUkgfSBmcm9tICcuL2Jhc2UuanMnO1xyXG5pbXBvcnQgeyBsb2FkQnVpbGRpbmdzIH0gZnJvbSAnLi9idWlsZGluZy5qcyc7XHJcblxyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xyXG5cclxuICAgIGVuYWJsZUxlYWZsZXREZWJ1ZyhmYWxzZSk7XHJcblxyXG4gICAgY29uc3QgZGVmYXVsdExhdCA9IDQ2LjUzOTcyO1xyXG4gICAgY29uc3QgZGVmYXVsdExuZyA9IDIuNDMwMjg7XHJcblxyXG4gICAgaW5pdE1hcChkZWZhdWx0TGF0LCBkZWZhdWx0TG5nKTtcclxuXHJcbiAgICBpbml0QmFzZVVJKCk7XHJcbiAgICBsb2FkV29ybGQoKTtcclxuICAgIGxvYWRCdWlsZGluZ3MoKTtcclxufSk7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTGVhZmxldERlYnVnKGRlYnVnID0gZmFsc2UpIHtcclxuXHJcbiAgICBpZiAoIWRlYnVnKSByZXR1cm47XHJcblxyXG4gICAgY29uc3Qgb3JpZ2luYWxNYXJrZXIgPSBMLm1hcmtlcjtcclxuICAgIGNvbnN0IG9yaWdpbmFsQ2lyY2xlID0gTC5jaXJjbGU7XHJcbiAgICBjb25zdCBvcmlnaW5hbFBvbHlsaW5lID0gTC5wb2x5bGluZTtcclxuXHJcbiAgICBMLm1hcmtlciA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCLwn6eoIE1BUktFUiBDQUxMOlwiLCBhcmdzKTtcclxuICAgICAgICBjb25zb2xlLnRyYWNlKFwiTUFSS0VSIFNUQUNLXCIpO1xyXG4gICAgICAgIHJldHVybiBvcmlnaW5hbE1hcmtlci5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH07XHJcblxyXG4gICAgTC5jaXJjbGUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+nqCBDSVJDTEUgQ0FMTDpcIiwgYXJncyk7XHJcbiAgICAgICAgY29uc29sZS50cmFjZShcIkNJUkNMRSBTVEFDS1wiKTtcclxuICAgICAgICByZXR1cm4gb3JpZ2luYWxDaXJjbGUuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9O1xyXG5cclxuICAgIEwucG9seWxpbmUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+nqCBQT0xZTElORSBDQUxMOlwiLCBhcmdzKTtcclxuICAgICAgICBjb25zb2xlLnRyYWNlKFwiUE9MWUxJTkUgU1RBQ0tcIik7XHJcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUG9seWxpbmUuYXBwbHkodGhpcywgYXJncyk7XHJcbiAgICB9O1xyXG59IiwiaW1wb3J0IHsgZmx5VG8gfSBmcm9tICcuL21hcC5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEdQUyhkZWZhdWx0TGF0LCBkZWZhdWx0TG5nKSB7XHJcbiAgICBpZiAobmF2aWdhdG9yLmdlb2xvY2F0aW9uKSB7XHJcbiAgICAgICAgbGV0IGdwc0ZvdW5kID0gZmFsc2U7XHJcblxyXG4gICAgICAgIG5hdmlnYXRvci5nZW9sb2NhdGlvbi53YXRjaFBvc2l0aW9uKFxyXG4gICAgICAgICAgICAocG9zaXRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgIGdwc0ZvdW5kID0gdHJ1ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBmbHlUbyhcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5jb29yZHMubGF0aXR1ZGUsXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY29vcmRzLmxvbmdpdHVkZVxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4ge30sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IDUwMDBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWdwc0ZvdW5kKSB7XHJcbiAgICAgICAgICAgICAgICBmbHlUbyhkZWZhdWx0TGF0LCBkZWZhdWx0TG5nLCA3KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIDU1MDApO1xyXG4gICAgfVxyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5cclxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuL0NvbmZpZy9kZWJ1Zy5qcyc7XHJcblxyXG5pbXBvcnQgeyBncmlkTGF5ZXIsIGluaXRHcmlkTGF5ZXIgfSBmcm9tICcuL0xheWVycy9ncmlkTGF5ZXIuanMnO1xyXG5pbXBvcnQgeyBsb2FkVmlzaWJsZVJvYWRDaHVua3MgfSBmcm9tICcuL1JvYWRzL3JvYWRzLmpzJztcclxuaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4vUm9hZHMvcm9hZHNTdGF0ZS5qcyc7XHJcblxyXG5pbXBvcnQgeyBsb2FkQmFzZUZyb21TZXJ2ZXIsIGxvYWRPdGhlckJhc2UsIHNldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIH0gZnJvbSAnLi9iYXNlLmpzJztcclxuXHJcbmltcG9ydCB7IGluaXREZXBvc2l0TGF5ZXJzLCBkZXBvc2l0TGF5ZXJzIH0gZnJvbSAnLi9NYXAvZGVwb3NpdHMuanMnO1xyXG5cclxuaW1wb3J0IG1hcmtlckljb24gZnJvbSAnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi5wbmcnO1xyXG5pbXBvcnQgbWFya2VyU2hhZG93IGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnO1xyXG5cclxuTC5NYXJrZXIucHJvdG90eXBlLm9wdGlvbnMuaWNvbiA9IEwuaWNvbih7XHJcbiAgICBpY29uVXJsOiBtYXJrZXJJY29uLFxyXG4gICAgc2hhZG93VXJsOiBtYXJrZXJTaGFkb3csXHJcbn0pO1xyXG5cclxubGV0IG1hcEluc3RhbmNlID0gbnVsbDtcclxubGV0IG1vdmVUaW1lb3V0ID0gbnVsbDtcclxubGV0IGlzQ2h1bmtNb2RlID0gZmFsc2U7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1hcChsYXQsIGxuZykge1xyXG5cclxuICAgIG1hcEluc3RhbmNlID0gTC5tYXAoJ21hcCcpLnNldFZpZXcoW2xhdCwgbG5nXSwgNyk7XHJcblxyXG4gICAgTC50aWxlTGF5ZXIoJ2h0dHBzOi8ve3N9LnRpbGUub3BlbnN0cmVldG1hcC5vcmcve3p9L3t4fS97eX0ucG5nJywge1xyXG4gICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IE9wZW5TdHJlZXRNYXAnXHJcbiAgICB9KS5hZGRUbyhtYXBJbnN0YW5jZSk7XHJcblxyXG4gICAgY29uc3QgbGF5ZXJzQ29udHJvbCA9IEwuY29udHJvbC5sYXllcnMobnVsbCwge1xyXG4gICAgICAgIFwiQ2h1bmsgR3JpZFwiOiBncmlkTGF5ZXJcclxuICAgIH0pLmFkZFRvKG1hcEluc3RhbmNlKTtcclxuXHJcbiAgICBpbml0RGVwb3NpdExheWVycyhtYXBJbnN0YW5jZSwgbGF5ZXJzQ29udHJvbCk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBDRU5UUkFMIENIVU5LIENPTlRST0xMRVJcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIG1hcEluc3RhbmNlLm9uKCdtb3ZlZW5kJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIWlzQ2h1bmtNb2RlKSByZXR1cm47XHJcbiAgICAgICAgaWYgKG1hcEluc3RhbmNlLmdldFpvb20oKSA8IDE0KSByZXR1cm47XHJcblxyXG4gICAgICAgIGNsZWFyVGltZW91dChtb3ZlVGltZW91dCk7XHJcblxyXG4gICAgICAgIG1vdmVUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGluaXRHcmlkTGF5ZXIoKTtcclxuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbiAgICAgICAgfSwgMzAwKTtcclxuICAgIH0pO1xyXG5cclxuICAgIG1hcEluc3RhbmNlLm9uKCdvdmVybGF5YWRkJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5sYXllciA9PT0gZ3JpZExheWVyKSB7XHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiZ3JpZFwiLCBcIkdyaWQgT05cIik7XHJcblxyXG4gICAgICAgICAgICBpbml0R3JpZExheWVyKCk7XHJcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIG1hcEluc3RhbmNlLm9uKCdvdmVybGF5cmVtb3ZlJywgKGUpID0+IHtcclxuICAgICAgICBpZiAoZS5sYXllciA9PT0gZ3JpZExheWVyKSB7XHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiZ3JpZFwiLCBcIkdyaWQgT0ZGXCIpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRVZFTlRTXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcEluc3RhbmNlLm9uKCd6b29tZW5kJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCB6b29tID0gbWFwSW5zdGFuY2UuZ2V0Wm9vbSgpO1xyXG5cclxuICAgICAgICBpZiAoem9vbSA+PSAxNCkge1xyXG4gICAgICAgICAgICBlbnRlckNodW5rTW9kZSgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGV4aXRDaHVua01vZGUoKTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGlzR3JpZExheWVyQWN0aXZlKCkge1xyXG4gICAgcmV0dXJuIG1hcEluc3RhbmNlPy5oYXNMYXllcihncmlkTGF5ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFwKCkge1xyXG4gICAgcmV0dXJuIG1hcEluc3RhbmNlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZmx5VG8obGF0LCBsbmcsIHpvb20gPSAxMykge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBtYXAuZmx5VG8oW2xhdCwgbG5nXSwgem9vbSwge1xyXG4gICAgICAgIGFuaW1hdGU6IHRydWUsXHJcbiAgICAgICAgZHVyYXRpb246IDEuNVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBXT1JMRFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRXb3JsZCgpIHtcclxuXHJcbiAgICBmZXRjaCgnL2FwaS93b3JsZC1zdGF0ZScpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXHJcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICAgICAgICAgIGRhdGEuYnVpbGRpbmdzLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgICAgICAgICBMLm1hcmtlcihbYi5sYXQsIGIubG5nXSlcclxuICAgICAgICAgICAgICAgICAgICAuYWRkVG8obWFwKVxyXG4gICAgICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAoYCR7Yi50eXBlfSBsdmwgJHtiLmxldmVsfWApO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnBsYXllcnMpIHtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaGFzQ2VudGVyZWQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICBkYXRhLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGxheWVyLmlzTWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBsYXllckZhY3Rpb24ocGxheWVyLmZhY3Rpb24pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZEJhc2VGcm9tU2VydmVyKHBsYXllci5sYXQsIHBsYXllci5sbmcpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFoYXNDZW50ZXJlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx5VG8ocGxheWVyLmxhdCwgcGxheWVyLmxuZywgMTYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2VudGVyZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBsb2FkT3RoZXJCYXNlKHBsYXllci5sYXQsIHBsYXllci5sbmcsIHBsYXllci5wc2V1ZG8sIHBsYXllci5mYWN0aW9uKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb2FkIHdvcmxkXCIsIGVycik7XHJcbiAgICAgICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGVudGVyQ2h1bmtNb2RlKCkge1xyXG4gICAgaWYgKGlzQ2h1bmtNb2RlKSByZXR1cm47XHJcblxyXG4gICAgaXNDaHVua01vZGUgPSB0cnVlO1xyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiRU5URVIgQ0hVTksgTU9ERVwiKTtcclxuXHJcbiAgICBpbml0R3JpZExheWVyKCk7XHJcbiAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcclxufVxyXG5cclxuZnVuY3Rpb24gZXhpdENodW5rTW9kZSgpIHtcclxuICAgIGlmICghaXNDaHVua01vZGUpIHJldHVybjtcclxuXHJcbiAgICBpc0NodW5rTW9kZSA9IGZhbHNlO1xyXG5cclxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiRVhJVCBDSFVOSyBNT0RFXCIpO1xyXG5cclxuICAgIGlmIChtYXBJbnN0YW5jZS5oYXNMYXllcihncmlkTGF5ZXIpKSB7XHJcbiAgICAgICAgbWFwSW5zdGFuY2UucmVtb3ZlTGF5ZXIoZ3JpZExheWVyKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XHJcblxyXG5kZWxldGUgTC5JY29uLkRlZmF1bHQucHJvdG90eXBlLl9nZXRJY29uVXJsO1xyXG5MLkljb24uRGVmYXVsdC5tZXJnZU9wdGlvbnMoe1xyXG4gICAgaWNvblJldGluYVVybDogcmVxdWlyZSgnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi0yeC5wbmcnKSxcclxuICAgIGljb25Vcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJyksXHJcbiAgICBzaGFkb3dVcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMOyJdLCJuYW1lcyI6WyJDQUNIRV9WRVJTSU9OIiwiZ2V0Q2FjaGVLZXkiLCJjaHVua0lkIiwiY29uY2F0IiwiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJnZXRNYXAiLCJyZWZyZXNoQ2h1bmsiLCJpbnZhbGlkYXRlQ2h1bmsiLCJkZWJ1Z0xvZyIsImRlYnVnRXJyb3IiLCJzbmFwVG9DaHVuayIsIkNIVU5LX1NJWkUiLCJDSFVOS19SQURJVVMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hcCIsImdldENvbnRhaW5lciIsInN0eWxlIiwiY3Vyc29yIiwiYWxlcnQiLCJvbmNlIiwiX3JlZiIsIl9jYWxsZWUiLCJfZSRsYXRsbmciLCJsYXQiLCJsbmciLCJzbmFwcGVkIiwiX3QiLCJfY29udGV4dCIsImxhdGxuZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiX3giLCJUWVBFX01BUCIsIkRFQlVHIiwiZW5hYmxlZCIsImNodW5rcyIsIm5ldHdvcmsiLCJjYWNoZSIsInR5cGUiLCJfY29uc29sZTIiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9jb25zb2xlIiwiY29uc29sZSIsImxvZyIsIl9jb25zb2xlMyIsImtleSIsIl9sZW4yIiwiX2tleTIiLCJlcnJvciIsIlJPQUQiLCJDSFVOSyIsIkJVSUxESU5HIiwiTCIsImlzR3JpZExheWVyQWN0aXZlIiwiZ3JpZExheWVyIiwibGF5ZXJHcm91cCIsInZpc2libGVDaHVua3MiLCJNYXAiLCJpbml0R3JpZExheWVyIiwiem9vbSIsImdldFpvb20iLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJtaW5MYXQiLCJNYXRoIiwiZmxvb3IiLCJnZXRTb3V0aCIsIm1heExhdCIsImNlaWwiLCJnZXROb3J0aCIsIm1pbkxuZyIsImdldFdlc3QiLCJtYXhMbmciLCJnZXRFYXN0IiwibmV3VmlzaWJsZSIsIlNldCIsIl9sb29wIiwiaWQiLCJqIiwiYWRkIiwiaGFzIiwicmVjdCIsInJlY3RhbmdsZSIsImNvbG9yIiwid2VpZ2h0IiwiZmlsbE9wYWNpdHkiLCJvbiIsInNldFN0eWxlIiwiYWRkTGF5ZXIiLCJzZXQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsImVudHJpZXMiLCJfc3RlcCIsInMiLCJfc3RlcCR2YWx1ZSIsIl9zbGljZWRUb0FycmF5IiwicmVtb3ZlTGF5ZXIiLCJlcnIiLCJzaXplIiwic2V0Q2h1bmtDb2xvciIsImdldCIsImRlcG9zaXRNYXJrZXJzIiwibG9hZERlcG9zaXRzRm9yQ2h1bmsiLCJfeDIiLCJfbG9hZERlcG9zaXRzRm9yQ2h1bmsiLCJyZXNwb25zZSIsImRlcG9zaXRzIiwianNvbiIsInJlbmRlckRlcG9zaXRzRnJvbURhdGEiLCJnZXRSZXNvdXJjZUNvbG9yIiwiY29sb3JzIiwid2luZG93IiwiY2xhaW1EZXBvc2l0IiwiZGVwb3NpdExheWVycyIsImluaXREZXBvc2l0TGF5ZXJzIiwiY29udHJvbCIsImtleXMiLCJmb3JFYWNoIiwiYWRkT3ZlcmxheSIsImRlcG9zaXQiLCJyZXNvdXJjZV90eXBlIiwibGF5ZXIiLCJ3YXJuIiwibWFya2VyIiwiY2lyY2xlTWFya2VyIiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJyYWRpdXMiLCJmaWxsQ29sb3IiLCJvcGFjaXR5IiwiYWRkVG8iLCJiaW5kUG9wdXAiLCJ0b1VwcGVyQ2FzZSIsInJpY2huZXNzIiwiaXNfY2xhaW1lZCIsInJvYWRzU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJyZW1vdmVJdGVtIiwiZmluZENsb3Nlc3RQb2ludE9uUm9hZCIsInJvYWRzIiwiYmVzdFBvaW50IiwiYmVzdERpc3RhbmNlIiwiSW5maW5pdHkiLCJpc0FycmF5IiwicG9pbnQiLCJkaXN0YW5jZSIsInJvYWQiLCJwb2ludHMiLCJhUmF3IiwiYlJhdyIsImxhdExuZyIsImIiLCJwcm9qZWN0ZWQiLCJwcm9qZWN0UG9pbnRPblNlZ21lbnQiLCJkaXN0IiwiZmluZENsb3Nlc3RTZWdtZW50IiwiYmVzdFNlZ21lbnQiLCJtaWQiLCJBIiwiQiIsIlAiLCJBQiIsIkFQIiwiYWIyIiwibWF4IiwibWluIiwiZGlzdGFuY2VUb1NlZ21lbnQiLCJkZWJ1Z1JvYWRzIiwiX2FycmF5V2l0aEhvbGVzIiwiX2l0ZXJhYmxlVG9BcnJheUxpbWl0IiwiX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5IiwiX25vbkl0ZXJhYmxlUmVzdCIsIm5leHQiLCJwdXNoIiwiX24iLCJGIiwiX2FycmF5TGlrZVRvQXJyYXkiLCJ0b1N0cmluZyIsInNsaWNlIiwiY29uc3RydWN0b3IiLCJuYW1lIiwiZnJvbSIsInRlc3QiLCJsb2FkaW5nUXVldWUiLCJNQVhfQ09OQ1VSUkVOVCIsImFjdGl2ZVJlcXVlc3RzIiwiZ2V0Q2h1bmtJZCIsIngiLCJsb2FkVmlzaWJsZVJvYWRDaHVua3MiLCJfbG9hZFZpc2libGVSb2FkQ2h1bmtzIiwiY2h1bmtzVG9Mb2FkIiwiZmluYWxDaHVua3NUb0xvYWQiLCJfaXRlcmF0b3IyIiwiX3N0ZXAyIiwiX2NodW5rSWQzIiwiX2NhY2hlS2V5IiwiY2FjaGVkIiwiZGF0YSIsIl9pIiwiX2ZpbmFsQ2h1bmtzVG9Mb2FkIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsMiIsInJvYWRzUmVzcG9uc2UiLCJidWlsZGluZ3NSZXNwb25zZSIsImRlcG9zaXRzUmVzcG9uc2UiLCJyb2Fkc0RhdGEiLCJidWlsZGluZ3NEYXRhIiwiZGVwb3NpdHNEYXRhIiwiYnVpbGRpbmdzQnlDaHVuayIsIl9pMiIsIl9maW5hbENodW5rc1RvTG9hZDIiLCJfcm9hZHNEYXRhJF9jaHVua0lkIiwiX2J1aWxkaW5nc0RhdGEkX2NodW5rIiwiX2NodW5rSWQiLCJjaHVua0RhdGEiLCJoYXNSb2FkcyIsImNhY2hlS2V5IiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIl9jaHVua0lkMiIsIl90MiIsImdldFZpc2libGVDaHVua3MiLCJmaWx0ZXIiLCJsb2FkZWRDaHVua3MiLCJnZXRJdGVtIiwicGFyc2UiLCJEYXRlIiwibm93IiwidHMiLCJzdGF0dXMiLCJidWlsZGluZ3MiLCJyZWZyZXNoQ2h1bmtDb2xvcnMiLCJhbGwiLCJvayIsIkVycm9yIiwiY0lkIiwic2V0SXRlbSIsImNodW5rIiwiX3JlZnJlc2hDaHVuayIsIl9jYWxsZWUyIiwiX2NvbnRleHQyIiwiZmV0Y2hTaW5nbGVDaHVuayIsIl94MyIsIl9mZXRjaFNpbmdsZUNodW5rIiwiX2NhbGxlZTMiLCJfcm9hZHNEYXRhJGNodW5rSWQiLCJfYnVpbGRpbmdzRGF0YSRjaHVua0kiLCJfeWllbGQkUHJvbWlzZSRhbGwzIiwiX3lpZWxkJFByb21pc2UkYWxsNCIsInJvYWRzUmVzIiwiYnVpbGRpbmdzUmVzIiwiZGVwb3NpdHNSZXMiLCJjaHVua0RlcG9zaXRzIiwiX3QzIiwiX2NvbnRleHQzIiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJvYWRzUmVhZHkiLCJkcmF3blJvYWRzIiwicm9hZExheWVycyIsImJ1aWxkaW5nTGF5ZXJzIiwiY2FjaGVkUm9hZHMiLCJjYWNoZURpcnR5IiwibWFya1JvYWRDYWNoZURpcnR5IiwiZ2V0QWxsTG9hZGVkUm9hZHMiLCJ2YWx1ZXMiLCJmbGF0TWFwIiwic2hvd05vdGlmaWNhdGlvbiIsIm1lc3NhZ2UiLCJ1bmRlZmluZWQiLCJub3RpZiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImdldEFkbWluQ29vcmRzIiwiZm9ybWF0IiwidG9GaXhlZCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImJ1aWxkUmVxdWVzdCIsInR5cGVJZCIsInR5cGVfaWQiLCJnZXRCdWlsZGluZ3MiLCJyZXMiLCJmbHlUbyIsImdldEJ1aWxkaW5nSW1hZ2UiLCJzYWZlTG9hZENodW5rIiwiYmFzZU1hcmtlciIsImJhc2VDaXJjbGUiLCJiYXNlUG9zaXRpb24iLCJiYXNlQ3JlYXRlZCIsInBsYWNpbmdCYXNlIiwicHJldmlld01hcmtlciIsInByZXZpZXdDaXJjbGUiLCJwcmV2aWV3U25hcExhdExuZyIsInByZXZpZXdMaW5lIiwiaGlnaGxpZ2h0ZWRTZWdtZW50IiwiY3VycmVudFBsYXllckZhY3Rpb24iLCJzZXRDdXJyZW50UGxheWVyRmFjdGlvbiIsImZhY3Rpb24iLCJ0b0xvd2VyQ2FzZSIsImluaXRCYXNlVUkiLCJiYXNlQnRuIiwibW9kZSIsImRhdGFzZXQiLCJfcHJldmlld1NuYXBMYXRMbmciLCJpc0Jhc2VQbGFjZW1lbnRWYWxpZCIsImNsZWFudXBQcmV2aWV3IiwiY3JlYXRlQmFzZSIsInJlc3VsdCIsImlzVmFsaWQiLCJjaXJjbGUiLCJwb2x5bGluZSIsImRhc2hBcnJheSIsInNlZ21lbnQiLCJ1cGRhdGVCYXNlRGlzcGxheSIsInVwZGF0ZU90aGVyQmFzZXMiLCJlbmFibGVBZG1pbkNvb3JkaW5hdGVQaWNrZXIiLCJvdGhlckJhc2VzIiwiZXZlcnkiLCJiYXNlIiwiYmFzZVR5cGVJZCIsInJlbW92ZUJhc2UiLCJsb2FkT3RoZXJCYXNlIiwicHNldWRvIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJpY29uIiwiY3JlYXRlQmFzZUljb24iLCJoYXNMYXllciIsInNldEljb24iLCJsb2FkQmFzZUZyb21TZXJ2ZXIiLCJpY29uVXJsIiwiaWNvblNpemUiLCJpY29uQW5jaG9yIiwicG9wdXBBbmNob3IiLCJsb2FkQnVpbGRpbmdzIiwibGV2ZWwiLCJidWlsZGluZyIsImZhY3Rpb25TbHVnIiwiaW5pdE1hcCIsImxvYWRXb3JsZCIsImluaXRHUFMiLCJlbmFibGVMZWFmbGV0RGVidWciLCJkZWZhdWx0TGF0IiwiZGVmYXVsdExuZyIsImRlYnVnIiwib3JpZ2luYWxNYXJrZXIiLCJvcmlnaW5hbENpcmNsZSIsIm9yaWdpbmFsUG9seWxpbmUiLCJ0cmFjZSIsIl9sZW4zIiwiX2tleTMiLCJnZW9sb2NhdGlvbiIsImdwc0ZvdW5kIiwid2F0Y2hQb3NpdGlvbiIsInBvc2l0aW9uIiwiY29vcmRzIiwidGltZW91dCIsIm1hcmtlckljb24iLCJtYXJrZXJTaGFkb3ciLCJNYXJrZXIiLCJvcHRpb25zIiwic2hhZG93VXJsIiwibWFwSW5zdGFuY2UiLCJtb3ZlVGltZW91dCIsImlzQ2h1bmtNb2RlIiwic2V0VmlldyIsInRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwibGF5ZXJzQ29udHJvbCIsImxheWVycyIsImNsZWFyVGltZW91dCIsImVudGVyQ2h1bmtNb2RlIiwiZXhpdENodW5rTW9kZSIsIl9tYXBJbnN0YW5jZSIsImFuaW1hdGUiLCJkdXJhdGlvbiIsInBsYXllcnMiLCJoYXNDZW50ZXJlZCIsInBsYXllciIsImlzTWUiLCJJY29uIiwiRGVmYXVsdCIsIl9nZXRJY29uVXJsIiwibWVyZ2VPcHRpb25zIiwiaWNvblJldGluYVVybCIsInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9