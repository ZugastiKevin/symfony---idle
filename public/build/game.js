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
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.array.find.js */ "./node_modules/core-js/modules/es.array.find.js");
/* harmony import */ var core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es.array.iterator.js */ "./node_modules/core-js/modules/es.array.iterator.js");
/* harmony import */ var core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_iterator_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es.date.to-json.js */ "./node_modules/core-js/modules/es.date.to-json.js");
/* harmony import */ var core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_json_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es.json.stringify.js */ "./node_modules/core-js/modules/es.json.stringify.js");
/* harmony import */ var core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_json_stringify_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/esnext.iterator.find.js */ "./node_modules/core-js/modules/esnext.iterator.find.js");
/* harmony import */ var core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_find_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/esnext.json.parse.js */ "./node_modules/core-js/modules/esnext.json.parse.js");
/* harmony import */ var core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_json_parse_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }




























var depositMarkers = new Map();

// Cache des types de ressources
var buildingTypesCache = null;
var resourceTypesCache = null;

/**
 * Charge les types de ressources depuis l'API
 */
function loadBuildingTypes() {
  return _loadBuildingTypes.apply(this, arguments);
}
function _loadBuildingTypes() {
  _loadBuildingTypes = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2() {
    var response, _t3;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (!buildingTypesCache) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2, buildingTypesCache);
        case 1:
          _context2.p = 1;
          _context2.n = 2;
          return fetch("/api/building-types");
        case 2:
          response = _context2.v;
          _context2.n = 3;
          return response.json();
        case 3:
          buildingTypesCache = _context2.v;
          return _context2.a(2, buildingTypesCache);
        case 4:
          _context2.p = 4;
          _t3 = _context2.v;
          console.error("Erreur lors du chargement des types de ressources", _t3);
          return _context2.a(2, []);
      }
    }, _callee2, null, [[1, 4]]);
  }));
  return _loadBuildingTypes.apply(this, arguments);
}
function loadResourceTypes() {
  return _loadResourceTypes.apply(this, arguments);
} // Mapping des couleurs par défaut
function _loadResourceTypes() {
  _loadResourceTypes = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3() {
    var response, _t4;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          if (!resourceTypesCache) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2, resourceTypesCache);
        case 1:
          _context3.p = 1;
          _context3.n = 2;
          return fetch("/api/resource-types");
        case 2:
          response = _context3.v;
          _context3.n = 3;
          return response.json();
        case 3:
          resourceTypesCache = _context3.v;
          return _context3.a(2, resourceTypesCache);
        case 4:
          _context3.p = 4;
          _t4 = _context3.v;
          console.error("Erreur lors du chargement des types de ressources", _t4);
          return _context3.a(2, []);
      }
    }, _callee3, null, [[1, 4]]);
  }));
  return _loadResourceTypes.apply(this, arguments);
}
var DEFAULT_COLORS = {
  'iron': '#7f8c8d',
  'oil': '#f1c40f',
  'coal': '#2c3e50',
  'rubber': '#27ae60',
  'bauxite': '#e67e22',
  'rare_earth': '#8e44ad'
};

/**
 * Retourne la couleur pour un type de ressource (synchrone - utilise le cache)
 */
function getResourceColor(type) {
  var _resourceTypesCache$t, _resourceTypesCache$t2;
  if (resourceTypesCache) return resourceTypesCache && ((_resourceTypesCache$t = resourceTypesCache[type]) === null || _resourceTypesCache$t === void 0 ? void 0 : _resourceTypesCache$t.color) || DEFAULT_COLORS[type] || '#ffffff';
  loadResourceTypes();
  return resourceTypesCache && ((_resourceTypesCache$t2 = resourceTypesCache[type]) === null || _resourceTypesCache$t2 === void 0 ? void 0 : _resourceTypesCache$t2.color) || DEFAULT_COLORS[type] || '#ffffff';
}

/**
 * Trouve le type de bâtiment (mine) pour une ressource donnée
 */
function findBuildingTypeForResource(_x) {
  return _findBuildingTypeForResource.apply(this, arguments);
}
function _findBuildingTypeForResource() {
  _findBuildingTypeForResource = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(resourceType) {
    var buildingTypes, buildingType;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return loadBuildingTypes();
        case 1:
          buildingTypes = _context4.v;
          // Chercher un bâtiment qui produit cette ressource (production_rate > 0)
          buildingType = buildingTypes.find(function (bt) {
            var _bt$resourceType;
            return (bt.resource_type === resourceType || ((_bt$resourceType = bt.resourceType) === null || _bt$resourceType === void 0 ? void 0 : _bt$resourceType.code) === resourceType) && bt.production_rate > 0;
          });
          return _context4.a(2, (buildingType === null || buildingType === void 0 ? void 0 : buildingType.id) || null);
      }
    }, _callee4);
  }));
  return _findBuildingTypeForResource.apply(this, arguments);
}
var depositLayers = {};

/**
 * Initialise les couches de dépôts dynamiquement
 */
function initDepositLayers(_x2, _x3) {
  return _initDepositLayers.apply(this, arguments);
}
function _initDepositLayers() {
  _initDepositLayers = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee5(map, control) {
    var resourceTypes;
    return _regenerator().w(function (_context5) {
      while (1) switch (_context5.n) {
        case 0:
          _context5.n = 1;
          return loadResourceTypes();
        case 1:
          resourceTypes = _context5.v;
          // Créer une couche pour chaque type de ressource (seulement si color existe)
          resourceTypes.forEach(function (rt) {
            if (rt.color && rt.color.length > 0) {
              depositLayers[rt.code] = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_27__["default"].layerGroup();
              control.addOverlay(depositLayers[rt.code], "Ressource: ".concat(rt.label));
            }
          });
        case 2:
          return _context5.a(2);
      }
    }, _callee5);
  }));
  return _initDepositLayers.apply(this, arguments);
}
function loadDepositsForChunk(_x4, _x5) {
  return _loadDepositsForChunk.apply(this, arguments);
}

/**
 * Rendu des dépôts sur la carte
 */
function _loadDepositsForChunk() {
  _loadDepositsForChunk = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee6(chunkId, map) {
    var response, deposits, _t5;
    return _regenerator().w(function (_context6) {
      while (1) switch (_context6.p = _context6.n) {
        case 0:
          _context6.p = 0;
          _context6.n = 1;
          return fetch("/api/deposits/".concat(chunkId));
        case 1:
          response = _context6.v;
          _context6.n = 2;
          return response.json();
        case 2:
          deposits = _context6.v;
          renderDepositsFromData(deposits, map);
          _context6.n = 4;
          break;
        case 3:
          _context6.p = 3;
          _t5 = _context6.v;
          console.error("Erreur chargement dépôts:", _t5);
        case 4:
          return _context6.a(2);
      }
    }, _callee6, null, [[0, 3]]);
  }));
  return _loadDepositsForChunk.apply(this, arguments);
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
    var color = getResourceColor(type);
    var marker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_27__["default"].circleMarker([deposit.latitude, deposit.longitude], {
      radius: 8,
      fillColor: color,
      color: "#000",
      weight: 1,
      opacity: 1,
      fillOpacity: 0.8
    }).addTo(layer);
    marker.bindPopup("\n            <b>".concat(deposit.resource_type.toUpperCase(), "</b><br>\n            Richesse: ").concat(deposit.richness, "<br>\n            ").concat(deposit.is_claimed ? '⚠️ Déjà exploité' : '<button onclick="claimDeposit(' + deposit.id + ', \'' + deposit.resource_type + '\')">Exploiter</button>', "\n        "));
    depositMarkers.set(deposit.id, marker);
  });
}

/**
 * Permet d'exploiter un dépôt depuis la popup
 */
window.claimDeposit = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(id, resourceType) {
    var buildingTypeId, response, responseText, data, _t, _t2;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.n = 1;
          return findBuildingTypeForResource(resourceType);
        case 1:
          buildingTypeId = _context.v;
          if (buildingTypeId) {
            _context.n = 2;
            break;
          }
          return _context.a(2, alert("Impossible de trouver un b\xE2timent pour extraire le ".concat(resourceType)));
        case 2:
          _context.p = 2;
          _context.n = 3;
          return fetch('/api/build', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              lat: null,
              lng: null,
              type_id: buildingTypeId,
              deposit_id: id
            })
          });
        case 3:
          response = _context.v;
          _context.n = 4;
          return response.text();
        case 4:
          responseText = _context.v;
          _context.p = 5;
          data = JSON.parse(responseText);
          _context.n = 7;
          break;
        case 6:
          _context.p = 6;
          _t = _context.v;
          console.error("Réponse non-JSON reçue:", responseText);
          throw new Error("Réponse invalide du serveur");
        case 7:
          if (response.ok) {
            alert('Dépôt exploité avec succès ! Bâtiment créé.');
            location.reload();
          } else {
            alert("Erreur: " + (data.error || "Impossible d'exploiter ce dépôt"));
          }
          _context.n = 9;
          break;
        case 8:
          _context.p = 8;
          _t2 = _context.v;
          console.error("Erreur lors de l'exploitation", _t2);
          alert("Erreur réseau lors de l'exploitation: " + _t2.message);
        case 9:
          return _context.a(2);
      }
    }, _callee, null, [[5, 6], [2, 8]]);
  }));
  return function (_x6, _x7) {
    return _ref.apply(this, arguments);
  };
}();

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

/***/ "./assets/scripts/Game/UI/notification.js"
/*!************************************************!*\
  !*** ./assets/scripts/Game/UI/notification.js ***!
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
/* harmony export */   getBuildingCosts: () => (/* binding */ getBuildingCosts),
/* harmony export */   getBuildings: () => (/* binding */ getBuildings),
/* harmony export */   getUpgradeInfo: () => (/* binding */ getUpgradeInfo),
/* harmony export */   upgradeBuilding: () => (/* binding */ upgradeBuilding)
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
function getBuildingCosts(buildingTypeId) {
  return fetch("/api/building-types/".concat(buildingTypeId, "/costs")).then(function (res) {
    return res.json();
  });
}
function upgradeBuilding(buildingId) {
  return fetch("/api/building/".concat(buildingId, "/upgrade"), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
function getUpgradeInfo(buildingId) {
  return fetch("/api/building/".concat(buildingId, "/upgrade-info")).then(function (res) {
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
/* harmony export */   getCurrentPlayerFaction: () => (/* binding */ getCurrentPlayerFaction),
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
/* harmony import */ var _UI_notification_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./UI/notification.js */ "./assets/scripts/Game/UI/notification.js");
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
// GET PLAYER FACTION
// =======================
function getCurrentPlayerFaction() {
  return currentPlayerFaction;
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
      (0,_UI_notification_js__WEBPACK_IMPORTED_MODULE_17__.showNotification)("Clique sur la carte pour placer ta base", 'info');
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
  (0,_UI_notification_js__WEBPACK_IMPORTED_MODULE_17__.showNotification)("Mode Admin activé : cliquez sur la carte", 'info');
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
  var size = faction !== 'nomades' ? zoom > 15 ? 100 : 70 : zoom > 15 ? 75 : 60;

  // Toujours utiliser l'icône de la faction (le fallback Apache gère les 404)
  // Si l'icône n'existe pas, Apache redirige vers default automatiquement
  var iconUrl = (0,_building_js__WEBPACK_IMPORTED_MODULE_13__.getBuildingImage)(faction, 'base');
  return _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_10__["default"].icon({
    iconUrl: iconUrl,
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
}

/***/ },

/***/ "./assets/scripts/Game/buildMode.js"
/*!******************************************!*\
  !*** ./assets/scripts/Game/buildMode.js ***!
  \******************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   activateBuildMode: () => (/* binding */ activateBuildMode),
/* harmony export */   deactivateBuildMode: () => (/* binding */ deactivateBuildMode),
/* harmony export */   initBuildMode: () => (/* binding */ initBuildMode),
/* harmony export */   isBuildModeActive: () => (/* binding */ isBuildModeActive)
/* harmony export */ });
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.symbol.js */ "./node_modules/core-js/modules/es.symbol.js");
/* harmony import */ var core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.symbol.description.js */ "./node_modules/core-js/modules/es.symbol.description.js");
/* harmony import */ var core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_symbol_description_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.error.cause.js */ "./node_modules/core-js/modules/es.error.cause.js");
/* harmony import */ var core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_cause_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.error.to-string.js */ "./node_modules/core-js/modules/es.error.to-string.js");
/* harmony import */ var core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_error_to_string_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./map.js */ "./assets/scripts/Game/map.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./api.js */ "./assets/scripts/Game/api.js");
/* harmony import */ var _building_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./building.js */ "./assets/scripts/Game/building.js");
/* harmony import */ var _UI_notification_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./UI/notification.js */ "./assets/scripts/Game/UI/notification.js");

















function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }






// =======================
// BUILD MODE STATE
// =======================
var selectedBuildingType = null;
var previewBuildingMarker = null;

/**
 * Initialise le mode construction
 */
function initBuildMode() {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_18__.getMap)();

  // Utiliser la délégation d'événements pour les boutons dynamiques
  document.addEventListener('click', /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(e) {
      var btn, typeId;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            btn = e.target.closest('.build-item');
            if (btn) {
              _context.n = 1;
              break;
            }
            return _context.a(2);
          case 1:
            typeId = btn.dataset.typeId;
            if (typeId) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            _context.n = 3;
            return selectBuildingType(typeId, btn);
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }());

  // Click sur la carte pour construire
  map.on('click', onMapClick);

  // Mouse move pour prévisualiser
  map.on('mousemove', onMapMouseMove);
}

/**
 * Sélectionne un type de bâtiment à construire
 */
function selectBuildingType(_x2, _x3) {
  return _selectBuildingType.apply(this, arguments);
}
/**
 * Nettoie la sélection actuelle
 */
function _selectBuildingType() {
  _selectBuildingType = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(typeId, button) {
    var map, data, _t;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          map = (0,_map_js__WEBPACK_IMPORTED_MODULE_18__.getMap)(); // Désélectionner précédemment
          clearBuildingSelection();

          // Gérer le cas spécial de la base (bouton #baseBtn)
          if (!(button.id === 'baseBtn' && typeId == 1)) {
            _context2.n = 1;
            break;
          }
          return _context2.a(2);
        case 1:
          // Mettre en évidence le bouton sélectionné
          button.classList.add('selected');

          // Récupérer les coûts
          _context2.p = 2;
          _context2.n = 3;
          return (0,_api_js__WEBPACK_IMPORTED_MODULE_19__.getBuildingCosts)(typeId);
        case 3:
          data = _context2.v;
          selectedBuildingType = {
            id: typeId,
            name: data.name,
            costs: data.costs,
            button: button
          };
          (0,_UI_notification_js__WEBPACK_IMPORTED_MODULE_21__.showNotification)("S\xE9lectionn\xE9: ".concat(data.name, ". Clique sur la carte pour construire."), 'info');
          _context2.n = 5;
          break;
        case 4:
          _context2.p = 4;
          _t = _context2.v;
          console.error("Erreur lors de la récupération des coûts", _t);
          (0,_UI_notification_js__WEBPACK_IMPORTED_MODULE_21__.showNotification)("Erreur lors de la récupération des coûts", 'error');
        case 5:
          return _context2.a(2);
      }
    }, _callee2, null, [[2, 4]]);
  }));
  return _selectBuildingType.apply(this, arguments);
}
function clearBuildingSelection() {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_18__.getMap)();
  if (previewBuildingMarker) {
    map.removeLayer(previewBuildingMarker);
    previewBuildingMarker = null;
  }
  selectedBuildingType = null;

  // Retirer la classe selected de tous les boutons
  document.querySelectorAll('.build-item').forEach(function (btn) {
    btn.classList.remove('selected');
  });
}

/**
 * Gestion du click sur la carte
 */
function onMapClick(_x4) {
  return _onMapClick.apply(this, arguments);
}
/**
 * Prévisualisation de la position de construction
 */
function _onMapClick() {
  _onMapClick = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(e) {
    var map, lat, lng, response, data, _t2;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          map = (0,_map_js__WEBPACK_IMPORTED_MODULE_18__.getMap)();
          if (selectedBuildingType) {
            _context3.n = 1;
            break;
          }
          return _context3.a(2);
        case 1:
          if (previewBuildingMarker) {
            _context3.n = 2;
            break;
          }
          return _context3.a(2);
        case 2:
          lat = e.latlng.lat;
          lng = e.latlng.lng;
          _context3.p = 3;
          _context3.n = 4;
          return (0,_api_js__WEBPACK_IMPORTED_MODULE_19__.buildRequest)(lat, lng, selectedBuildingType.id);
        case 4:
          response = _context3.v;
          _context3.n = 5;
          return response.json();
        case 5:
          data = _context3.v;
          if (response.ok) {
            (0,_UI_notification_js__WEBPACK_IMPORTED_MODULE_21__.showNotification)("".concat(selectedBuildingType.name, " construit avec succ\xE8s !"), 'success');

            // Nettoyer
            map.removeLayer(previewBuildingMarker);
            previewBuildingMarker = null;
            clearBuildingSelection();
          } else {
            (0,_UI_notification_js__WEBPACK_IMPORTED_MODULE_21__.showNotification)("Erreur: ".concat(data.error), 'error');
          }
          _context3.n = 7;
          break;
        case 6:
          _context3.p = 6;
          _t2 = _context3.v;
          console.error("Erreur lors de la construction", _t2);
          (0,_UI_notification_js__WEBPACK_IMPORTED_MODULE_21__.showNotification)("Erreur réseau lors de la construction", 'error');
        case 7:
          return _context3.a(2);
      }
    }, _callee3, null, [[3, 6]]);
  }));
  return _onMapClick.apply(this, arguments);
}
function onMapMouseMove(e) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_18__.getMap)();
  if (!selectedBuildingType) {
    // Nettoyer les markers de prévisualisation
    if (previewBuildingMarker) {
      map.removeLayer(previewBuildingMarker);
      previewBuildingMarker = null;
    }
    return;
  }

  // Ajouter un marker de prévisualisation
  if (!previewBuildingMarker) {
    previewBuildingMarker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_17__["default"].marker([e.latlng.lat, e.latlng.lng]).addTo(map);
  } else {
    previewBuildingMarker.setLatLng(e.latlng);
  }
}

/**
 * Active le mode construction pour un type de bâtiment
 */
function activateBuildMode(typeId) {
  var btn = document.querySelector("[data-type-id=\"".concat(typeId, "\"]"));
  if (btn) {
    btn.click();
  }
}

/**
 * Désactive le mode construction
 */
function deactivateBuildMode() {
  clearBuildingSelection();
}

/**
 * Vérifie si le mode construction est actif
 */
function isBuildModeActive() {
  return selectedBuildingType !== null;
}

/***/ },

/***/ "./assets/scripts/Game/building.js"
/*!*****************************************!*\
  !*** ./assets/scripts/Game/building.js ***!
  \*****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   canBuildBuilding: () => (/* binding */ canBuildBuilding),
/* harmony export */   createBuildingIcon: () => (/* binding */ createBuildingIcon),
/* harmony export */   getBuildingImage: () => (/* binding */ getBuildingImage),
/* harmony export */   getBuildingTypeCosts: () => (/* binding */ getBuildingTypeCosts),
/* harmony export */   loadBuildings: () => (/* binding */ loadBuildings),
/* harmony export */   loadBuildingsFromData: () => (/* binding */ loadBuildingsFromData)
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_6__);
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
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! core-js/modules/es.date.to-string.js */ "./node_modules/core-js/modules/es.date.to-string.js");
/* harmony import */ var core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_date_to_string_js__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! core-js/modules/es.function.bind.js */ "./node_modules/core-js/modules/es.function.bind.js");
/* harmony import */ var core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_bind_js__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! core-js/modules/es.function.name.js */ "./node_modules/core-js/modules/es.function.name.js");
/* harmony import */ var core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_function_name_js__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! core-js/modules/es.map.js */ "./node_modules/core-js/modules/es.map.js");
/* harmony import */ var core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_map_js__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! core-js/modules/es.number.is-finite.js */ "./node_modules/core-js/modules/es.number.is-finite.js");
/* harmony import */ var core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_number_is_finite_js__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! core-js/modules/es.object.create.js */ "./node_modules/core-js/modules/es.object.create.js");
/* harmony import */ var core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_create_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! core-js/modules/es.object.define-property.js */ "./node_modules/core-js/modules/es.object.define-property.js");
/* harmony import */ var core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_define_property_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! core-js/modules/es.object.entries.js */ "./node_modules/core-js/modules/es.object.entries.js");
/* harmony import */ var core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_entries_js__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! core-js/modules/es.object.get-prototype-of.js */ "./node_modules/core-js/modules/es.object.get-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_get_prototype_of_js__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! core-js/modules/es.object.keys.js */ "./node_modules/core-js/modules/es.object.keys.js");
/* harmony import */ var core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_keys_js__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! core-js/modules/es.object.proto.js */ "./node_modules/core-js/modules/es.object.proto.js");
/* harmony import */ var core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_proto_js__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! core-js/modules/es.object.set-prototype-of.js */ "./node_modules/core-js/modules/es.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_23__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_24__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_25__);
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! core-js/modules/es.regexp.exec.js */ "./node_modules/core-js/modules/es.regexp.exec.js");
/* harmony import */ var core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_26___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_exec_js__WEBPACK_IMPORTED_MODULE_26__);
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! core-js/modules/es.regexp.test.js */ "./node_modules/core-js/modules/es.regexp.test.js");
/* harmony import */ var core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_27___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_test_js__WEBPACK_IMPORTED_MODULE_27__);
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! core-js/modules/es.regexp.to-string.js */ "./node_modules/core-js/modules/es.regexp.to-string.js");
/* harmony import */ var core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_28___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_28__);
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! core-js/modules/es.string.iterator.js */ "./node_modules/core-js/modules/es.string.iterator.js");
/* harmony import */ var core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_29___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_iterator_js__WEBPACK_IMPORTED_MODULE_29__);
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! core-js/modules/es.string.replace.js */ "./node_modules/core-js/modules/es.string.replace.js");
/* harmony import */ var core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_30___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace_js__WEBPACK_IMPORTED_MODULE_30__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_31__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_32___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_32__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_33___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_33__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! core-js/modules/web.dom-collections.iterator.js */ "./node_modules/core-js/modules/web.dom-collections.iterator.js");
/* harmony import */ var core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator_js__WEBPACK_IMPORTED_MODULE_34__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _map_js__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./map.js */ "./assets/scripts/Game/map.js");
/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./api.js */ "./assets/scripts/Game/api.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./base.js */ "./assets/scripts/Game/base.js");
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _regenerator() { /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */ var e, t, r = "function" == typeof Symbol ? Symbol : {}, n = r.iterator || "@@iterator", o = r.toStringTag || "@@toStringTag"; function i(r, n, o, i) { var c = n && n.prototype instanceof Generator ? n : Generator, u = Object.create(c.prototype); return _regeneratorDefine2(u, "_invoke", function (r, n, o) { var i, c, u, f = 0, p = o || [], y = !1, G = { p: 0, n: 0, v: e, a: d, f: d.bind(e, 4), d: function d(t, r) { return i = t, c = 0, u = e, G.n = r, a; } }; function d(r, n) { for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) { var o, i = p[t], d = G.p, l = i[2]; r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0)); } if (o || r > 1) return a; throw y = !0, n; } return function (o, p, l) { if (f > 1) throw TypeError("Generator is already running"); for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) { i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u); try { if (f = 2, i) { if (c || (o = "next"), t = i[o]) { if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object"); if (!t.done) return t; u = t.value, c < 2 && (c = 0); } else 1 === c && (t = i["return"]) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1); i = e; } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break; } catch (t) { i = e, c = 1, u = t; } finally { f = 1; } } return { value: t, done: y }; }; }(r, o, i), !0), u; } var a = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} t = Object.getPrototypeOf; var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () { return this; }), t), u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c); function f(e) { return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () { return this; }), _regeneratorDefine2(u, "toString", function () { return "[object Generator]"; }), (_regenerator = function _regenerator() { return { w: i, m: f }; })(); }
function _regeneratorDefine2(e, r, n, t) { var i = Object.defineProperty; try { i({}, "", {}); } catch (e) { i = 0; } _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) { function o(r, n) { _regeneratorDefine2(e, r, function (e) { return this._invoke(r, n, e); }); } r ? i ? i(e, r, { value: n, enumerable: !t, configurable: !t, writable: !t }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2)); }, _regeneratorDefine2(e, r, n, t); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }








































// Cache des informations de bâtiments
var buildingMarkers = new Map();

/**
 * Charge les bâtiments sur la carte avec leurs popups interactifs
 * @param {Array} buildings - Liste des bâtiments à afficher
 */
function loadBuildingsFromData(buildings) {
  var map = (0,_map_js__WEBPACK_IMPORTED_MODULE_36__.getMap)();
  if (!map) {
    console.error("Map not initialized");
    return;
  }
  if (!buildings || !Array.isArray(buildings)) {
    console.warn("loadBuildingsFromData: invalid buildings data");
    return;
  }
  buildings.forEach(function (b) {
    var _b$type;
    // Ignorer les bases - elles sont gérées par base.js
    if (b.code === 'base' || ((_b$type = b.type) === null || _b$type === void 0 ? void 0 : _b$type.toLowerCase()) === 'base') {
      return;
    }
    if (!Number.isFinite(b.lat) || !Number.isFinite(b.lng)) {
      console.warn("❌ Building ignoré (coord invalide)", b);
      return;
    }

    // Créer l'icône avec l'image du bâtiment
    var icon = createBuildingIcon(b.code);

    // Stocker les données du building pour accès ultérieur
    var buildingData = {
      id: b.id,
      type: b.type,
      level: b.level,
      code: b.code
    };

    // Créer le marker avec popup statique (pas d'async)
    var marker = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_35__["default"].marker([b.lat, b.lng], {
      icon: icon
    }).addTo(map).bindPopup(createSimplePopup(buildingData));
    buildingMarkers.set(b.id, {
      marker: marker,
      data: buildingData
    });

    // Charger les infos d'amélioration en arrière-plan
    if (b.id) {
      loadUpgradeInfoAsync(b.id, marker, buildingData);
    }
  });
}

/**
 * Crée un popup simple (synchrone)
 */
function createSimplePopup(building) {
  return "\n        <div class=\"building-popup\">\n            <h3>".concat(building.type || 'Bâtiment', "</h3>\n            <p>Niveau: ").concat(building.level || 1, "</p>\n            <div id=\"upgrade-info-").concat(building.id, "\">Chargement...</div>\n        </div>\n    ");
}

/**
 * Charge les infos d'amélioration en arrière-plan
 */
function loadUpgradeInfoAsync(_x, _x2, _x3) {
  return _loadUpgradeInfoAsync.apply(this, arguments);
}
/**
 * Charge les bâtiments depuis l'API (fonction de compatibilité)
 * @deprecated Utiliser loadBuildingsFromData(data) à la place
 */
function _loadUpgradeInfoAsync() {
  _loadUpgradeInfoAsync = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee2(buildingId, marker, buildingData) {
    var _upgradeInfo$canUpgra, _upgradeInfo$maxLevel, _upgradeInfo$needed, _upgradeInfo$availabl, res, upgradeInfo, canUpgrade, maxLevel, needed, available, costsHtml, _i, _Object$entries, _Object$entries$_i, resource, amount, has, cls, popupContent, _t2;
    return _regenerator().w(function (_context2) {
      while (1) switch (_context2.p = _context2.n) {
        case 0:
          if (buildingId) {
            _context2.n = 1;
            break;
          }
          marker.setPopupContent(createSimplePopup(buildingData));
          return _context2.a(2);
        case 1:
          _context2.p = 1;
          _context2.n = 2;
          return (0,_api_js__WEBPACK_IMPORTED_MODULE_37__.getUpgradeInfo)(buildingId);
        case 2:
          res = _context2.v;
          if (res.ok) {
            _context2.n = 3;
            break;
          }
          marker.setPopupContent(createSimplePopup(buildingData));
          return _context2.a(2);
        case 3:
          _context2.n = 4;
          return res.json();
        case 4:
          upgradeInfo = _context2.v;
          canUpgrade = (_upgradeInfo$canUpgra = upgradeInfo === null || upgradeInfo === void 0 ? void 0 : upgradeInfo.canUpgrade) !== null && _upgradeInfo$canUpgra !== void 0 ? _upgradeInfo$canUpgra : false;
          maxLevel = (_upgradeInfo$maxLevel = upgradeInfo === null || upgradeInfo === void 0 ? void 0 : upgradeInfo.maxLevel) !== null && _upgradeInfo$maxLevel !== void 0 ? _upgradeInfo$maxLevel : 1;
          needed = (_upgradeInfo$needed = upgradeInfo === null || upgradeInfo === void 0 ? void 0 : upgradeInfo.needed) !== null && _upgradeInfo$needed !== void 0 ? _upgradeInfo$needed : {};
          available = (_upgradeInfo$availabl = upgradeInfo === null || upgradeInfo === void 0 ? void 0 : upgradeInfo.available) !== null && _upgradeInfo$availabl !== void 0 ? _upgradeInfo$availabl : {};
          costsHtml = '';
          if (!canUpgrade && maxLevel > 1) {
            costsHtml = '<div class="upgrade-costs unavailable">Coûts insuffisants</div>';
          } else if (Object.keys(needed).length > 0) {
            costsHtml = '<div class="upgrade-costs">';
            for (_i = 0, _Object$entries = Object.entries(needed); _i < _Object$entries.length; _i++) {
              _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2), resource = _Object$entries$_i[0], amount = _Object$entries$_i[1];
              has = available[resource] || 0;
              cls = has >= amount ? 'enough' : 'missing';
              costsHtml += "<div class=\"".concat(cls, "\">").concat(resource, ": ").concat(has, "/").concat(amount, "</div>");
            }
            costsHtml += '</div>';
          }
          popupContent = "\n            <div class=\"building-popup\">\n                <h3>".concat(buildingData.type, "</h3>\n                <p>Niveau: ").concat(buildingData.level, " / ").concat(maxLevel, "</p>\n                ").concat(costsHtml, "\n                <div class=\"popup-actions\">\n                    ").concat(canUpgrade ? "<button onclick=\"window.upgradeBuilding(".concat(buildingId, ")\" class=\"btn-upgrade\">Am\xE9liorer</button>") : "<button disabled class=\"btn-upgrade\">Am\xE9liorer</button>", "\n                </div>\n            </div>\n        ");
          marker.setPopupContent(popupContent);
          _context2.n = 6;
          break;
        case 5:
          _context2.p = 5;
          _t2 = _context2.v;
          console.error("Erreur lors de la récupération des infos d'amélioration", _t2);
          marker.setPopupContent(createSimplePopup(buildingData));
        case 6:
          return _context2.a(2);
      }
    }, _callee2, null, [[1, 5]]);
  }));
  return _loadUpgradeInfoAsync.apply(this, arguments);
}
function loadBuildings() {
  fetch('/api/map-data').then(function (res) {
    return res.json();
  }).then(function (data) {
    loadBuildingsFromData(data);
  })["catch"](function (err) {
    console.error("Erreur chargement bâtiments", err);
  });
}

/**
 * Crée une icône (marker) pour un bâtiment avec son image spécifique.
 * @param {string} buildingCode - Le code du bâtiment (ex: "base", "iron_mine").
 * @returns {L.Icon} L'icône Leaflet personnalisée.
 */
function createBuildingIcon(buildingCode) {
  var faction = (0,_base_js__WEBPACK_IMPORTED_MODULE_38__.getCurrentPlayerFaction)();
  var size = 70; // Taille par défaut des icônes

  return _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_35__["default"].icon({
    iconUrl: getBuildingImage(faction, buildingCode),
    iconSize: [size, size],
    iconAnchor: [size / 2, size / 2],
    popupAnchor: [0, -size / 2]
  });
}

/**
 * Retourne dynamiquement le chemin de l'image avec fallback vers default.
 * @param {string} faction - Le code ou nom de la faction (ex: "Empire", "Cendres").
 * @param {string} building - Le code du bâtiment (ex: "base", "iron_mine").
 * @returns {string} Le chemin de l'icône.
 */
function getBuildingImage(faction, building) {
  // Normaliser le nom du building pour l'image (remplacer espaces et caractères spéciaux)
  var buildingSlug = building.toLowerCase().replace(/\s+/g, '_').replace(/[^a-z0-9_]/g, '');
  var factionSlug = (faction || 'default').toLowerCase();

  // Si la faction est 'default' ou invalide, utiliser directement l'icône default
  if (factionSlug === 'default') {
    return "/assets/images/buildings/default/".concat(buildingSlug, ".png");
  }

  // Essayer d'abord l'icône de la faction
  // Le serveur ou le navigateur gérera le fallback si l'icône n'existe pas
  // Pour forcer le fallback côté client, vous pouvez:
  // 1. Configurer le serveur web (Nginx/Apache) pour faire un try_files vers default
  // 2. Utiliser une requête HEAD asyncone pour vérifier l'existence (coûteux)

  return "/assets/images/buildings/".concat(factionSlug, "/").concat(buildingSlug, ".png");
}

/**
 * Améliore un bâtiment
 */
window.upgradeBuilding = /*#__PURE__*/function () {
  var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(buildingId) {
    var response, data, entry, marker, _t;
    return _regenerator().w(function (_context) {
      while (1) switch (_context.p = _context.n) {
        case 0:
          _context.p = 0;
          _context.n = 1;
          return (0,_api_js__WEBPACK_IMPORTED_MODULE_37__.upgradeBuilding)(buildingId);
        case 1:
          response = _context.v;
          _context.n = 2;
          return response.json();
        case 2:
          data = _context.v;
          if (response.ok) {
            // Mettre à jour le marqueur
            entry = buildingMarkers.get(buildingId);
            if (entry) {
              entry.data.level = data.newLevel;
              marker = entry.marker;
              marker.setPopupContent(createSimplePopup(entry.data));

              // Recharger les infos d'amélioration
              loadUpgradeInfoAsync(buildingId, marker, entry.data);
            }
            alert('Bâtiment amélioré avec succès !');
          } else {
            alert("Erreur: " + (data.error || "Impossible d'améliorer le bâtiment"));
          }
          _context.n = 4;
          break;
        case 3:
          _context.p = 3;
          _t = _context.v;
          console.error("Erreur lors de l'amélioration", _t);
          alert("Erreur réseau lors de l'amélioration");
        case 4:
          return _context.a(2);
      }
    }, _callee, null, [[0, 3]]);
  }));
  return function (_x4) {
    return _ref.apply(this, arguments);
  };
}();

/**
 * Retourne les informations sur les coûts de construction d'un type de bâtiment
 */
function getBuildingTypeCosts(_x5) {
  return _getBuildingTypeCosts.apply(this, arguments);
}

/**
 * Vérifie si le joueur peut construire un bâtiment
 */
function _getBuildingTypeCosts() {
  _getBuildingTypeCosts = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee3(buildingTypeId) {
    var response, _t3;
    return _regenerator().w(function (_context3) {
      while (1) switch (_context3.p = _context3.n) {
        case 0:
          _context3.p = 0;
          _context3.n = 1;
          return (0,_api_js__WEBPACK_IMPORTED_MODULE_37__.getBuildingCosts)(buildingTypeId);
        case 1:
          response = _context3.v;
          _context3.n = 2;
          return response.json();
        case 2:
          return _context3.a(2, _context3.v);
        case 3:
          _context3.p = 3;
          _t3 = _context3.v;
          console.error("Erreur lors de la récupération des coûts", _t3);
          return _context3.a(2, null);
      }
    }, _callee3, null, [[0, 3]]);
  }));
  return _getBuildingTypeCosts.apply(this, arguments);
}
function canBuildBuilding(_x6) {
  return _canBuildBuilding.apply(this, arguments);
}
function _canBuildBuilding() {
  _canBuildBuilding = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee4(buildingTypeId) {
    var costs, response, data, resources, _i2, _Object$entries2, _Object$entries2$_i, resource, amount;
    return _regenerator().w(function (_context4) {
      while (1) switch (_context4.n) {
        case 0:
          _context4.n = 1;
          return getBuildingTypeCosts(buildingTypeId);
        case 1:
          costs = _context4.v;
          if (costs) {
            _context4.n = 2;
            break;
          }
          return _context4.a(2, false);
        case 2:
          _context4.n = 3;
          return fetch('/api/player-resources');
        case 3:
          response = _context4.v;
          _context4.n = 4;
          return response.json();
        case 4:
          data = _context4.v;
          resources = {};
          data.resources.forEach(function (r) {
            resources[r.type] = r.quantity;
          });
          _i2 = 0, _Object$entries2 = Object.entries(costs.costs);
        case 5:
          if (!(_i2 < _Object$entries2.length)) {
            _context4.n = 7;
            break;
          }
          _Object$entries2$_i = _slicedToArray(_Object$entries2[_i2], 2), resource = _Object$entries2$_i[0], amount = _Object$entries2$_i[1];
          if (!((resources[resource] || 0) < amount)) {
            _context4.n = 6;
            break;
          }
          return _context4.a(2, false);
        case 6:
          _i2++;
          _context4.n = 5;
          break;
        case 7:
          return _context4.a(2, true);
      }
    }, _callee4);
  }));
  return _canBuildBuilding.apply(this, arguments);
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
/* harmony import */ var _buildMode_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./buildMode.js */ "./assets/scripts/Game/buildMode.js");




document.addEventListener('DOMContentLoaded', function () {
  enableLeafletDebug(false);
  var defaultLat = 46.53972;
  var defaultLng = 2.43028;
  (0,_map_js__WEBPACK_IMPORTED_MODULE_0__.initMap)(defaultLat, defaultLng);
  (0,_base_js__WEBPACK_IMPORTED_MODULE_2__.initBaseUI)();
  (0,_buildMode_js__WEBPACK_IMPORTED_MODULE_3__.initBuildMode)();
  (0,_map_js__WEBPACK_IMPORTED_MODULE_0__.loadWorld)();
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
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es.array.for-each.js */ "./node_modules/core-js/modules/es.array.for-each.js");
/* harmony import */ var core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_for_each_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es.array.map.js */ "./node_modules/core-js/modules/es.array.map.js");
/* harmony import */ var core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es.object.to-string.js */ "./node_modules/core-js/modules/es.object.to-string.js");
/* harmony import */ var core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_object_to_string_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es.promise.js */ "./node_modules/core-js/modules/es.promise.js");
/* harmony import */ var core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/esnext.iterator.constructor.js */ "./node_modules/core-js/modules/esnext.iterator.constructor.js");
/* harmony import */ var core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_constructor_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/esnext.iterator.for-each.js */ "./node_modules/core-js/modules/esnext.iterator.for-each.js");
/* harmony import */ var core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_for_each_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/esnext.iterator.map.js */ "./node_modules/core-js/modules/esnext.iterator.map.js");
/* harmony import */ var core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_esnext_iterator_map_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom-collections.for-each.js */ "./node_modules/core-js/modules/web.dom-collections.for-each.js");
/* harmony import */ var core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_for_each_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/web.timers.js */ "./node_modules/core-js/modules/web.timers.js");
/* harmony import */ var core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_timers_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../LeafletWrapper.js */ "./assets/scripts/LeafletWrapper.js");
/* harmony import */ var _Config_debug_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Config/debug.js */ "./assets/scripts/Game/Config/debug.js");
/* harmony import */ var _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Layers/gridLayer.js */ "./assets/scripts/Game/Layers/gridLayer.js");
/* harmony import */ var _Roads_roads_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Roads/roads.js */ "./assets/scripts/Game/Roads/roads.js");
/* harmony import */ var _Roads_roadsState_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Roads/roadsState.js */ "./assets/scripts/Game/Roads/roadsState.js");
/* harmony import */ var _base_js__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./base.js */ "./assets/scripts/Game/base.js");
/* harmony import */ var _building_js__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./building.js */ "./assets/scripts/Game/building.js");
/* harmony import */ var _Map_deposits_js__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Map/deposits.js */ "./assets/scripts/Game/Map/deposits.js");
/* harmony import */ var leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! leaflet/dist/images/marker-icon.png */ "./node_modules/leaflet/dist/images/marker-icon.png");
/* harmony import */ var leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! leaflet/dist/images/marker-shadow.png */ "./node_modules/leaflet/dist/images/marker-shadow.png");



















_LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"].Marker.prototype.options.icon = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"].icon({
  iconUrl: leaflet_dist_images_marker_icon_png__WEBPACK_IMPORTED_MODULE_17__,
  shadowUrl: leaflet_dist_images_marker_shadow_png__WEBPACK_IMPORTED_MODULE_18__
});
var mapInstance = null;
var moveTimeout = null;
var isChunkMode = false;
function initMap(lat, lng) {
  mapInstance = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"].map('map').setView([lat, lng], 7);
  _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"].tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; OpenStreetMap'
  }).addTo(mapInstance);
  var layersControl = _LeafletWrapper_js__WEBPACK_IMPORTED_MODULE_9__["default"].control.layers(null, {
    "Chunk Grid": _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_11__.gridLayer
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
      (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_11__.initGridLayer)();
      (0,_Roads_roads_js__WEBPACK_IMPORTED_MODULE_12__.loadVisibleRoadChunks)();
    }, 300);
  });
  mapInstance.on('overlayadd', function (e) {
    if (e.layer === _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_11__.gridLayer) {
      (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_10__.debugLog)("grid", "Grid ON");
      (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_11__.initGridLayer)();
      (0,_Roads_roads_js__WEBPACK_IMPORTED_MODULE_12__.loadVisibleRoadChunks)();
    }
  });
  mapInstance.on('overlayremove', function (e) {
    if (e.layer === _Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_11__.gridLayer) {
      (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_10__.debugLog)("grid", "Grid OFF");
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
  return (_mapInstance = mapInstance) === null || _mapInstance === void 0 ? void 0 : _mapInstance.hasLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_11__.gridLayer);
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
// WORLD LOADER (Concentrateur d'appels API)
// =====================
function loadWorld() {
  fetch('/api/world-state').then(function (res) {
    return res.json();
  }).then(function (data) {
    // Charger les bâtiments via building.js
    (0,_building_js__WEBPACK_IMPORTED_MODULE_15__.loadBuildingsFromData)(data.buildings);

    // Charger les bases via base.js
    if (data.players) {
      var hasCentered = false;
      data.players.forEach(function (player) {
        if (player.isMe) {
          (0,_base_js__WEBPACK_IMPORTED_MODULE_14__.setCurrentPlayerFaction)(player.faction);
          (0,_base_js__WEBPACK_IMPORTED_MODULE_14__.loadBaseFromServer)(player.lat, player.lng);
          if (!hasCentered) {
            flyTo(player.lat, player.lng, 16);
            hasCentered = true;
          }
          return;
        }
        (0,_base_js__WEBPACK_IMPORTED_MODULE_14__.loadOtherBase)(player.lat, player.lng, player.pseudo, player.faction);
      });
    }
  })["catch"](function (err) {
    console.error("Erreur load world", err);
  });
}
function enterChunkMode() {
  if (isChunkMode) return;
  isChunkMode = true;
  (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_10__.debugLog)("chunks", "ENTER CHUNK MODE");
  (0,_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_11__.initGridLayer)();
  (0,_Roads_roads_js__WEBPACK_IMPORTED_MODULE_12__.loadVisibleRoadChunks)();
}
function exitChunkMode() {
  if (!isChunkMode) return;
  isChunkMode = false;
  (0,_Config_debug_js__WEBPACK_IMPORTED_MODULE_10__.debugLog)("chunks", "EXIT CHUNK MODE");
  if (mapInstance.hasLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_11__.gridLayer)) {
    mapInstance.removeLayer(_Layers_gridLayer_js__WEBPACK_IMPORTED_MODULE_11__.gridLayer);
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
/******/ __webpack_require__.O(0, ["vendors-node_modules_leaflet_dist_leaflet_css-node_modules_core-js_internals_add-to-unscopabl-b7170d","vendors-node_modules_leaflet_dist_leaflet-src_js-node_modules_leaflet_dist_images_marker-icon-5905d7"], () => (__webpack_exec__("./assets/scripts/Game/game-main.js")));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFVBQUEzUCxHQUFHLEVBQUk7SUFDVnhELE9BQU8sQ0FBQ00sS0FBSyxDQUFDLG1CQUFtQixFQUFFa0QsR0FBRyxDQUFDO0VBQzNDLENBQUMsQ0FBQztBQUNWO0FBRUEsU0FBU21ZLGNBQWNBLENBQUEsRUFBRztFQUN0QixJQUFJUCxXQUFXLEVBQUU7RUFFakJBLFdBQVcsR0FBRyxJQUFJO0VBRWxCL2QsMkRBQVEsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUM7RUFFdEMyRCxvRUFBYSxDQUFDLENBQUM7RUFDZnVMLHVFQUFxQixDQUFDLENBQUM7QUFDM0I7QUFFQSxTQUFTcVAsYUFBYUEsQ0FBQSxFQUFHO0VBQ3JCLElBQUksQ0FBQ1IsV0FBVyxFQUFFO0VBRWxCQSxXQUFXLEdBQUcsS0FBSztFQUVuQi9kLDJEQUFRLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDO0VBRXJDLElBQUk2ZCxXQUFXLENBQUNoRyxRQUFRLENBQUN0VSw0REFBUyxDQUFDLEVBQUU7SUFDakNzYSxXQUFXLENBQUMzWCxXQUFXLENBQUMzQyw0REFBUyxDQUFDO0VBQ3RDO0FBQ0osQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqS3dCO0FBQ1U7QUFFbEMsT0FBT0YscURBQU0sQ0FBQzJiLE9BQU8sQ0FBQy9oQixTQUFTLENBQUNnaUIsV0FBVztBQUMzQzViLG1EQUFNLENBQUMyYixPQUFPLENBQUNFLFlBQVksQ0FBQztFQUN4QkMsYUFBYSxFQUFFQyxtQkFBTyxDQUFDLHFHQUF3QyxDQUFDO0VBQ2hFcEgsT0FBTyxFQUFFb0gsbUJBQU8sQ0FBQywrRkFBcUMsQ0FBQztFQUN2RHhCLFNBQVMsRUFBRXdCLG1CQUFPLENBQUMsbUdBQXVDO0FBQzlELENBQUMsQ0FBQztBQUVGLGlFQUFlL2IsZ0RBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvQ29uZmlnL2NhY2hlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Db25maWcvY2h1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Db25maWcvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Db25maWcvdHlwZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL0xheWVycy9ncmlkTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9NYXAvZGVwb3NpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Sb2Fkcy9pbnZhbGlkYXRlQ2h1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Sb2Fkcy9yb2FkVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Sb2Fkcy9yb2Fkcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL1JvYWRzL3JvYWRzU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9VSS9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9VaS9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9VdGlscy9hZG1pbl9jbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9VdGlscy9zbmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvYXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvZ2FtZS1tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvZ3BzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0xlYWZsZXRXcmFwcGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENBQ0hFX1ZFUlNJT04gPSAndjEnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhY2hlS2V5KGNodW5rSWQpIHtcclxuICAgIHJldHVybiBgJHtDQUNIRV9WRVJTSU9OfV9jaHVua18ke2NodW5rSWR9YDtcclxufSIsImltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC5qcyc7XHJcbmltcG9ydCB7IHJlZnJlc2hDaHVuayB9IGZyb20gJy4uL1JvYWRzL3JvYWRzLmpzJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNodW5rIH0gZnJvbSAnLi4vUm9hZHMvaW52YWxpZGF0ZUNodW5rLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnRXJyb3IgfSBmcm9tICcuL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgc25hcFRvQ2h1bmsgfSBmcm9tICcuLi9VdGlscy9zbmFwLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSFVOS19TSVpFID0gMC4wMTtcclxuZXhwb3J0IGNvbnN0IENIVU5LX1JBRElVUyA9IDE7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVxdWVzdEFwaVJvYWRzQW5kQ2h1bmtzQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInO1xyXG4gICAgYWxlcnQoXCJDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgZmFpcmUgdW5lIHJlcXVldGUgYXBpIHBvdXIgYWpvdXRlciB1biBjaHVuayBkZSByb3V0ZXMgKDAuMDHCsCB4IDAuMDHCsCkuXCIpO1xyXG5cclxuICAgIG1hcC5vbmNlKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IGUubGF0bG5nO1xyXG5cclxuICAgICAgICBjb25zdCBzbmFwcGVkID0gc25hcFRvQ2h1bmsobGF0LCBsbmcpO1xyXG5cclxuICAgICAgICBkZWJ1Z0xvZyhcIm5ldHdvcmtcIiwgXCLwn5OhIGFkZGluZyByb2FkcyBjaHVuazpcIiwgc25hcHBlZC5jaHVua0lkKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvYWRkLXJvYWRzLWNodW5rJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBsYXQ6IHNuYXBwZWQubGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxuZzogc25hcHBlZC5sbmdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVmcmVzaENodW5rKHNuYXBwZWQubGF0LCBzbmFwcGVkLmxuZyk7XHJcblxyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIvCflIQgY2h1bmsgcmVmcmVzaGVkOlwiLCBzbmFwcGVkLmNodW5rSWQpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcihcIm5ldHdvcmtcIiwgXCJmYWlsZWQgdG8gYWRkIHJvYWRzIGNodW5rXCIsIGVycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbiAgICB9KTtcclxufSk7IiwiaW1wb3J0IHsgVFlQRV9NQVAgfSBmcm9tICcuL3R5cGVNYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFQlVHID0ge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIGNodW5rczogdHJ1ZSxcclxuICAgIG5ldHdvcms6IHRydWUsXHJcbiAgICBjYWNoZTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnTG9nKHR5cGUsIC4uLmFyZ3MpIHtcclxuICAgIGlmICghREVCVUcuZW5hYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoREVCVUdbdHlwZV0gPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgY29uc29sZS5sb2coYFske3R5cGV9XWAsIC4uLmFyZ3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdFcnJvcih0eXBlLCAuLi5hcmdzKSB7XHJcbiAgICBpZiAoIURFQlVHLmVuYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBrZXkgPSBUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGU7XHJcblxyXG4gICAgaWYgKERFQlVHW2tleV0gPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihgWyR7a2V5fV1gLCAuLi5hcmdzKTtcclxufSIsImV4cG9ydCBjb25zdCBUWVBFX01BUCA9IHtcclxuICAgIFJPQUQ6IFwicm9hZFwiLFxyXG4gICAgQ0hVTks6IFwiY2h1bmtcIixcclxuICAgIEJVSUxESU5HOiBcImJ1aWxkaW5nXCJcclxufTsiLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nIH0gZnJvbSAnLi4vQ29uZmlnL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uL0NvbmZpZy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCwgaXNHcmlkTGF5ZXJBY3RpdmUgfSBmcm9tICcuLi9tYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyaWRMYXllciA9IEwubGF5ZXJHcm91cCgpO1xyXG5cclxuY29uc3QgdmlzaWJsZUNodW5rcyA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R3JpZExheWVyKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAoIWlzR3JpZExheWVyQWN0aXZlKCkpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuICAgIGlmICh6b29tIDwgMTQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XHJcblxyXG4gICAgY29uc3QgbWluTGF0ID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0U291dGgoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4TGF0ID0gTWF0aC5jZWlsKGJvdW5kcy5nZXROb3J0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtaW5MbmcgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRXZXN0KCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heExuZyA9IE1hdGguY2VpbChib3VuZHMuZ2V0RWFzdCgpIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgY29uc3QgbmV3VmlzaWJsZSA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gbWluTGF0OyBpIDwgbWF4TGF0OyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gbWluTG5nOyBqIDwgbWF4TG5nOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYCR7aX1fJHtqfWA7XHJcbiAgICAgICAgICAgIG5ld1Zpc2libGUuYWRkKGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlQ2h1bmtzLmhhcyhpZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGF0ID0gaSAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxuZyA9IGogKiBDSFVOS19TSVpFO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IEwucmVjdGFuZ2xlKFtcclxuICAgICAgICAgICAgICAgIFtsYXQsIGxuZ10sXHJcbiAgICAgICAgICAgICAgICBbbGF0ICsgQ0hVTktfU0laRSwgbG5nICsgQ0hVTktfU0laRV1cclxuICAgICAgICAgICAgXSwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDEsXHJcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4xNVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlY3Qub24oJ21vdXNlb3ZlcicsICgpID0+IHJlY3Quc2V0U3R5bGUoeyBmaWxsT3BhY2l0eTogMC4zIH0pKTtcclxuICAgICAgICAgICAgcmVjdC5vbignbW91c2VvdXQnLCAoKSA9PiByZWN0LnNldFN0eWxlKHsgZmlsbE9wYWNpdHk6IDAuMTUgfSkpO1xyXG5cclxuICAgICAgICAgICAgZ3JpZExheWVyLmFkZExheWVyKHJlY3QpO1xyXG5cclxuICAgICAgICAgICAgdmlzaWJsZUNodW5rcy5zZXQoaWQsIHJlY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDwn6e5IHJlbW92ZSBjZXV4IGhvcnMgw6ljcmFuXHJcbiAgICBmb3IgKGNvbnN0IFtpZCwgcmVjdF0gb2YgdmlzaWJsZUNodW5rcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBpZiAoIW5ld1Zpc2libGUuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICBncmlkTGF5ZXIucmVtb3ZlTGF5ZXIocmVjdCk7XHJcbiAgICAgICAgICAgIHZpc2libGVDaHVua3MuZGVsZXRlKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCJDaHVua3MgdmlzaWJsZXM6XCIsIHZpc2libGVDaHVua3Muc2l6ZSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENIVU5LIENPTE9SXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDaHVua0NvbG9yKGlkLCBjb2xvcikge1xyXG4gICAgaWYgKCFpc0dyaWRMYXllckFjdGl2ZSgpKSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IHJlY3QgPSB2aXNpYmxlQ2h1bmtzLmdldChpZCk7XHJcbiAgICBpZiAoIXJlY3QpIHJldHVybjtcclxuXHJcbiAgICByZWN0LnNldFN0eWxlKHtcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBmaWxsT3BhY2l0eTogMC4yXHJcbiAgICB9KTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcblxuY29uc3QgZGVwb3NpdE1hcmtlcnMgPSBuZXcgTWFwKCk7XG5cbi8vIENhY2hlIGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXG5sZXQgYnVpbGRpbmdUeXBlc0NhY2hlID0gbnVsbDtcbmxldCByZXNvdXJjZVR5cGVzQ2FjaGUgPSBudWxsO1xuXG4vKipcbiAqIENoYXJnZSBsZXMgdHlwZXMgZGUgcmVzc291cmNlcyBkZXB1aXMgbCdBUElcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZEJ1aWxkaW5nVHlwZXMoKSB7XG4gICAgaWYgKGJ1aWxkaW5nVHlwZXNDYWNoZSkgcmV0dXJuIGJ1aWxkaW5nVHlwZXNDYWNoZTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvYnVpbGRpbmctdHlwZXNgKTtcbiAgICAgICAgYnVpbGRpbmdUeXBlc0NhY2hlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gYnVpbGRpbmdUeXBlc0NhY2hlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHR5cGVzIGRlIHJlc3NvdXJjZXNcIiwgZSk7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRSZXNvdXJjZVR5cGVzKCkge1xuICAgIGlmIChyZXNvdXJjZVR5cGVzQ2FjaGUpIHJldHVybiByZXNvdXJjZVR5cGVzQ2FjaGU7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3Jlc291cmNlLXR5cGVzYCk7XG4gICAgICAgIHJlc291cmNlVHlwZXNDYWNoZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHJlc291cmNlVHlwZXNDYWNoZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXCIsIGUpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vLyBNYXBwaW5nIGRlcyBjb3VsZXVycyBwYXIgZMOpZmF1dFxuY29uc3QgREVGQVVMVF9DT0xPUlMgPSB7XG4gICAgJ2lyb24nOiAnIzdmOGM4ZCcsXG4gICAgJ29pbCc6ICcjZjFjNDBmJyxcbiAgICAnY29hbCc6ICcjMmMzZTUwJyxcbiAgICAncnViYmVyJzogJyMyN2FlNjAnLFxuICAgICdiYXV4aXRlJzogJyNlNjdlMjInLFxuICAgICdyYXJlX2VhcnRoJzogJyM4ZTQ0YWQnXG59O1xuXG4vKipcbiAqIFJldG91cm5lIGxhIGNvdWxldXIgcG91ciB1biB0eXBlIGRlIHJlc3NvdXJjZSAoc3luY2hyb25lIC0gdXRpbGlzZSBsZSBjYWNoZSlcbiAqL1xuZnVuY3Rpb24gZ2V0UmVzb3VyY2VDb2xvcih0eXBlKSB7XG4gICAgaWYgKHJlc291cmNlVHlwZXNDYWNoZSkgcmV0dXJuIChyZXNvdXJjZVR5cGVzQ2FjaGUgJiYgcmVzb3VyY2VUeXBlc0NhY2hlW3R5cGVdPy5jb2xvcikgfHwgREVGQVVMVF9DT0xPUlNbdHlwZV0gfHwgJyNmZmZmZmYnO1xuXG4gICAgbG9hZFJlc291cmNlVHlwZXMoKTtcblxuICAgIHJldHVybiAocmVzb3VyY2VUeXBlc0NhY2hlICYmIHJlc291cmNlVHlwZXNDYWNoZVt0eXBlXT8uY29sb3IpIHx8IERFRkFVTFRfQ09MT1JTW3R5cGVdIHx8ICcjZmZmZmZmJztcbn1cblxuLyoqXG4gKiBUcm91dmUgbGUgdHlwZSBkZSBiw6J0aW1lbnQgKG1pbmUpIHBvdXIgdW5lIHJlc3NvdXJjZSBkb25uw6llXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZShyZXNvdXJjZVR5cGUpIHtcbiAgICBjb25zdCBidWlsZGluZ1R5cGVzID0gYXdhaXQgbG9hZEJ1aWxkaW5nVHlwZXMoKTtcblxuICAgIC8vIENoZXJjaGVyIHVuIGLDonRpbWVudCBxdWkgcHJvZHVpdCBjZXR0ZSByZXNzb3VyY2UgKHByb2R1Y3Rpb25fcmF0ZSA+IDApXG4gICAgY29uc3QgYnVpbGRpbmdUeXBlID0gYnVpbGRpbmdUeXBlcy5maW5kKGJ0ID0+IHtcbiAgICAgICAgcmV0dXJuIChidC5yZXNvdXJjZV90eXBlID09PSByZXNvdXJjZVR5cGUgfHwgYnQucmVzb3VyY2VUeXBlPy5jb2RlID09PSByZXNvdXJjZVR5cGUpICYmIGJ0LnByb2R1Y3Rpb25fcmF0ZSA+IDA7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gYnVpbGRpbmdUeXBlPy5pZCB8fCBudWxsO1xufVxuXG5leHBvcnQgY29uc3QgZGVwb3NpdExheWVycyA9IHt9O1xuXG4vKipcbiAqIEluaXRpYWxpc2UgbGVzIGNvdWNoZXMgZGUgZMOpcMO0dHMgZHluYW1pcXVlbWVudFxuICovXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW5pdERlcG9zaXRMYXllcnMobWFwLCBjb250cm9sKSB7XG4gICAgY29uc3QgcmVzb3VyY2VUeXBlcyA9IGF3YWl0IGxvYWRSZXNvdXJjZVR5cGVzKCk7XG5cbiAgICAvLyBDcsOpZXIgdW5lIGNvdWNoZSBwb3VyIGNoYXF1ZSB0eXBlIGRlIHJlc3NvdXJjZSAoc2V1bGVtZW50IHNpIGNvbG9yIGV4aXN0ZSlcbiAgICByZXNvdXJjZVR5cGVzLmZvckVhY2gocnQgPT4ge1xuICAgICAgICBpZiAocnQuY29sb3IgJiYgcnQuY29sb3IubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgZGVwb3NpdExheWVyc1tydC5jb2RlXSA9IEwubGF5ZXJHcm91cCgpO1xuICAgICAgICAgICAgY29udHJvbC5hZGRPdmVybGF5KGRlcG9zaXRMYXllcnNbcnQuY29kZV0sIGBSZXNzb3VyY2U6ICR7cnQubGFiZWx9YCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGxvYWREZXBvc2l0c0ZvckNodW5rKGNodW5rSWQsIG1hcCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvZGVwb3NpdHMvJHtjaHVua0lkfWApO1xuICAgICAgICBjb25zdCBkZXBvc2l0cyA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShkZXBvc2l0cywgbWFwKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBjaGFyZ2VtZW50IGTDqXDDtHRzOlwiLCBlcnIpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBSZW5kdSBkZXMgZMOpcMO0dHMgc3VyIGxhIGNhcnRlXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGRlcG9zaXRzLCBtYXApIHtcbiAgICBkZXBvc2l0cy5mb3JFYWNoKGRlcG9zaXQgPT4ge1xuICAgICAgICBpZiAoZGVwb3NpdE1hcmtlcnMuaGFzKGRlcG9zaXQuaWQpKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdHlwZSA9IGRlcG9zaXQucmVzb3VyY2VfdHlwZTtcbiAgICAgICAgY29uc3QgbGF5ZXIgPSBkZXBvc2l0TGF5ZXJzW3R5cGVdO1xuXG4gICAgICAgIGlmICghbGF5ZXIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihgUGFzIGRlIGxheWVyIHBvdXIgbGUgdHlwZTogJHt0eXBlfWApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY29sb3IgPSBnZXRSZXNvdXJjZUNvbG9yKHR5cGUpO1xuXG4gICAgICAgIGNvbnN0IG1hcmtlciA9IEwuY2lyY2xlTWFya2VyKFtkZXBvc2l0LmxhdGl0dWRlLCBkZXBvc2l0LmxvbmdpdHVkZV0sIHtcbiAgICAgICAgICAgIHJhZGl1czogOCxcbiAgICAgICAgICAgIGZpbGxDb2xvcjogY29sb3IsXG4gICAgICAgICAgICBjb2xvcjogXCIjMDAwXCIsXG4gICAgICAgICAgICB3ZWlnaHQ6IDEsXG4gICAgICAgICAgICBvcGFjaXR5OiAxLFxuICAgICAgICAgICAgZmlsbE9wYWNpdHk6IDAuOFxuICAgICAgICB9KS5hZGRUbyhsYXllcik7XG5cbiAgICAgICAgbWFya2VyLmJpbmRQb3B1cChgXG4gICAgICAgICAgICA8Yj4ke2RlcG9zaXQucmVzb3VyY2VfdHlwZS50b1VwcGVyQ2FzZSgpfTwvYj48YnI+XG4gICAgICAgICAgICBSaWNoZXNzZTogJHtkZXBvc2l0LnJpY2huZXNzfTxicj5cbiAgICAgICAgICAgICR7ZGVwb3NpdC5pc19jbGFpbWVkID8gJ+KaoO+4jyBEw6lqw6AgZXhwbG9pdMOpJyA6ICc8YnV0dG9uIG9uY2xpY2s9XCJjbGFpbURlcG9zaXQoJyArIGRlcG9zaXQuaWQgKyAnLCBcXCcnICsgZGVwb3NpdC5yZXNvdXJjZV90eXBlICsgJ1xcJylcIj5FeHBsb2l0ZXI8L2J1dHRvbj4nfVxuICAgICAgICBgKTtcblxuICAgICAgICBkZXBvc2l0TWFya2Vycy5zZXQoZGVwb3NpdC5pZCwgbWFya2VyKTtcbiAgICB9KTtcbn1cblxuLyoqXG4gKiBQZXJtZXQgZCdleHBsb2l0ZXIgdW4gZMOpcMO0dCBkZXB1aXMgbGEgcG9wdXBcbiAqL1xud2luZG93LmNsYWltRGVwb3NpdCA9IGFzeW5jIGZ1bmN0aW9uKGlkLCByZXNvdXJjZVR5cGUpIHtcbiAgICAvLyBUcm91dmVyIGxlIHR5cGUgZGUgYsOidGltZW50IGFwcHJvcHJpw6lcbiAgICBjb25zdCBidWlsZGluZ1R5cGVJZCA9IGF3YWl0IGZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZShyZXNvdXJjZVR5cGUpO1xuXG4gICAgaWYgKCFidWlsZGluZ1R5cGVJZCkge1xuICAgICAgICByZXR1cm4gYWxlcnQoYEltcG9zc2libGUgZGUgdHJvdXZlciB1biBiw6J0aW1lbnQgcG91ciBleHRyYWlyZSBsZSAke3Jlc291cmNlVHlwZX1gKTtcbiAgICB9XG5cbiAgICAvLyBDb25zdHJ1aXJlIGRpcmVjdGVtZW50IGxlIGLDonRpbWVudCBzdXIgbGVzIGNvb3Jkb25uw6llcyBkdSBkw6lww7R0XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9idWlsZCcsIHtcbiAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXG4gICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgbGF0OiBudWxsLFxuICAgICAgICAgICAgICAgIGxuZzogbnVsbCxcbiAgICAgICAgICAgICAgICB0eXBlX2lkOiBidWlsZGluZ1R5cGVJZCxcbiAgICAgICAgICAgICAgICBkZXBvc2l0X2lkOiBpZFxuICAgICAgICAgICAgfSlcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2VUZXh0ID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgICAgICBsZXQgZGF0YTtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGRhdGEgPSBKU09OLnBhcnNlKHJlc3BvbnNlVGV4dCk7XG4gICAgICAgIH0gY2F0Y2ggKHBhcnNlRXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXCJSw6lwb25zZSBub24tSlNPTiByZcOndWU6XCIsIHJlc3BvbnNlVGV4dCk7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJSw6lwb25zZSBpbnZhbGlkZSBkdSBzZXJ2ZXVyXCIpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICBhbGVydCgnRMOpcMO0dCBleHBsb2l0w6kgYXZlYyBzdWNjw6hzICEgQsOidGltZW50IGNyw6nDqS4nKTtcbiAgICAgICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYWxlcnQoXCJFcnJldXI6IFwiICsgKGRhdGEuZXJyb3IgfHwgXCJJbXBvc3NpYmxlIGQnZXhwbG9pdGVyIGNlIGTDqXDDtHRcIikpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbCdleHBsb2l0YXRpb25cIiwgZSk7XG4gICAgICAgIGFsZXJ0KFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsJ2V4cGxvaXRhdGlvbjogXCIgKyBlLm1lc3NhZ2UpO1xuICAgIH1cbn0iLCJpbXBvcnQgeyByb2Fkc1N0YXRlIH0gZnJvbSAnLi9yb2Fkc1N0YXRlLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuLi9Db25maWcvZGVidWcuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGludmFsaWRhdGVDaHVuayhpZCkge1xyXG4gICAgZGVidWdMb2coXCJjYWNoZVwiLCBcIvCfp7kgaW52YWxpZGF0ZSBjaHVuazpcIiwgaWQpO1xyXG4gICAgXHJcbiAgICBkZWxldGUgcm9hZHNTdGF0ZS5jaHVua3NbaWRdO1xyXG4gICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oYGNodW5rXyR7aWR9YCk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC5qcyc7XHJcblxyXG4vKipcclxuICogVHJvdXZlIGxlIHBvaW50IGxlIHBsdXMgcHJvY2hlIHN1ciB0b3V0ZXMgbGVzIHJvdXRlc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDbG9zZXN0UG9pbnRPblJvYWQobGF0bG5nLCByb2Fkcykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgbGV0IGJlc3RQb2ludCA9IG51bGw7XHJcbiAgICBsZXQgYmVzdERpc3RhbmNlID0gSW5maW5pdHk7XHJcblxyXG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWRzKSkgcmV0dXJuIHsgcG9pbnQ6IG51bGwsIGRpc3RhbmNlOiBJbmZpbml0eSB9O1xyXG5cclxuICAgIHJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkLnBvaW50cykpIHJldHVybjtcclxuICAgICAgICBpZiAocm9hZC5wb2ludHMubGVuZ3RoIDwgMikgcmV0dXJuO1xyXG5cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvYWQucG9pbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYVJhdyA9IHJvYWQucG9pbnRzW2ldO1xyXG4gICAgICAgICAgICBjb25zdCBiUmF3ID0gcm9hZC5wb2ludHNbaSArIDFdO1xyXG5cclxuICAgICAgICAgICAgaWYgKCFhUmF3IHx8ICFiUmF3KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCJCUk9LRU4gUk9BRCBTRUdNRU5UOlwiLCByb2FkKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGFSYXcubGVuZ3RoIDwgMiB8fCBiUmF3Lmxlbmd0aCA8IDIpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgYSA9IEwubGF0TG5nKGFSYXdbMF0sIGFSYXdbMV0pO1xyXG4gICAgICAgICAgICBjb25zdCBiID0gTC5sYXRMbmcoYlJhd1swXSwgYlJhd1sxXSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwcm9qZWN0ZWQgPSBwcm9qZWN0UG9pbnRPblNlZ21lbnQobGF0bG5nLCBhLCBiKTtcclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShsYXRsbmcsIHByb2plY3RlZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdCA8IGJlc3REaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3RhbmNlID0gZGlzdDtcclxuICAgICAgICAgICAgICAgIGJlc3RQb2ludCA9IHByb2plY3RlZDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcG9pbnQ6IGJlc3RQb2ludCxcclxuICAgICAgICBkaXN0YW5jZTogYmVzdERpc3RhbmNlXHJcbiAgICB9O1xyXG59XHJcblxyXG4vKipcclxuICogVHJvdXZlIGxlIHNlZ21lbnQgbGUgcGx1cyBwcm9jaGUgKHBvdXIgaGlnaGxpZ2h0IHZpc3VlbClcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBmaW5kQ2xvc2VzdFNlZ21lbnQobGF0bG5nLCByb2Fkcykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgbGV0IGJlc3RTZWdtZW50ID0gbnVsbDtcclxuICAgIGxldCBiZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZHMpKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICByb2Fkcy5mb3JFYWNoKHJvYWQgPT4ge1xyXG5cclxuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZC5wb2ludHMpKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9hZC5wb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhUmF3ID0gcm9hZC5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJSYXcgPSByb2FkLnBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFSYXcgfHwgIWJSYXcpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAoYVJhdy5sZW5ndGggPCAyIHx8IGJSYXcubGVuZ3RoIDwgMikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhID0gTC5sYXRMbmcoYVJhd1swXSwgYVJhd1sxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBMLmxhdExuZyhiUmF3WzBdLCBiUmF3WzFdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IG1pZCA9IEwubGF0TG5nKFxyXG4gICAgICAgICAgICAgICAgKGEubGF0ICsgYi5sYXQpIC8gMixcclxuICAgICAgICAgICAgICAgIChhLmxuZyArIGIubG5nKSAvIDJcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBtYXAuZGlzdGFuY2UobGF0bG5nLCBtaWQpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGRpc3QgPCBiZXN0RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgIGJlc3REaXN0YW5jZSA9IGRpc3Q7XHJcbiAgICAgICAgICAgICAgICBiZXN0U2VnbWVudCA9IFthLCBiXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBiZXN0U2VnbWVudDtcclxufVxyXG5cclxuLyoqXHJcbiAqIFByb2plY3Rpb24gZCd1biBwb2ludCBzdXIgdW4gc2VnbWVudCAoQS1CKVxyXG4gKiBtYXRoIHN0YWJsZSBwb3VyIHNuYXAgcm91dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gcHJvamVjdFBvaW50T25TZWdtZW50KHAsIGEsIGIpIHtcclxuXHJcbiAgICBjb25zdCBBID0gW2EubGF0LCBhLmxuZ107XHJcbiAgICBjb25zdCBCID0gW2IubGF0LCBiLmxuZ107XHJcbiAgICBjb25zdCBQID0gW3AubGF0LCBwLmxuZ107XHJcblxyXG4gICAgY29uc3QgQUIgPSBbQlswXSAtIEFbMF0sIEJbMV0gLSBBWzFdXTtcclxuICAgIGNvbnN0IEFQID0gW1BbMF0gLSBBWzBdLCBQWzFdIC0gQVsxXV07XHJcblxyXG4gICAgY29uc3QgYWIyID0gQUJbMF0gKiBBQlswXSArIEFCWzFdICogQUJbMV07XHJcblxyXG4gICAgaWYgKGFiMiA9PT0gMCkgcmV0dXJuIGE7XHJcblxyXG4gICAgbGV0IHQgPSAoQVBbMF0gKiBBQlswXSArIEFQWzFdICogQUJbMV0pIC8gYWIyO1xyXG5cclxuICAgIHQgPSBNYXRoLm1heCgwLCBNYXRoLm1pbigxLCB0KSk7XHJcblxyXG4gICAgcmV0dXJuIEwubGF0TG5nKFxyXG4gICAgICAgIEFbMF0gKyBBQlswXSAqIHQsXHJcbiAgICAgICAgQVsxXSArIEFCWzFdICogdFxyXG4gICAgKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIERpc3RhbmNlIHBvaW50IC0+IHNlZ21lbnQgKHV0aWxlIHZhbGlkYXRpb24gZnV0dXJlKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRpc3RhbmNlVG9TZWdtZW50KHAsIGEsIGIpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RQb2ludE9uU2VnbWVudChwLCBhLCBiKTtcclxuICAgIHJldHVybiBtYXAuZGlzdGFuY2UocCwgcHJvamVjdGVkKTtcclxufVxyXG5cclxuLyoqXHJcbiAqIENoZWNrIHNpbXBsZSBkZWJ1ZyByb2Fkc1xyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnUm9hZHMocm9hZHMpIHtcclxuICAgIGNvbnNvbGUubG9nKFwiUk9BRFMgREVCVUc6XCIsIHJvYWRzLmxlbmd0aCwgcm9hZHMpO1xyXG59IiwiaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uL0NvbmZpZy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IHNldENodW5rQ29sb3IgfSBmcm9tICcuLi9MYXllcnMvZ3JpZExheWVyLmpzJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNodW5rIH0gZnJvbSAnLi9pbnZhbGlkYXRlQ2h1bmsuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZywgZGVidWdFcnJvciB9IGZyb20gJy4uL0NvbmZpZy9kZWJ1Zy5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyByZW5kZXJEZXBvc2l0c0Zyb21EYXRhIH0gZnJvbSAnLi4vTWFwL2RlcG9zaXRzLmpzJztcclxuaW1wb3J0IHsgZ2V0Q2FjaGVLZXkgfSBmcm9tICcuLi9Db25maWcvY2FjaGVVdGlscy5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBMT0FEIENPTlRST0xcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuY29uc3QgbG9hZGluZ1F1ZXVlID0gbmV3IFNldCgpO1xyXG5jb25zdCBNQVhfQ09OQ1VSUkVOVCA9IDQ7XHJcbmxldCBhY3RpdmVSZXF1ZXN0cyA9IDA7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDSFVOSyBJRFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBnZXRDaHVua0lkKGxhdCwgbG5nKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihsYXQgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGxuZyAvIENIVU5LX1NJWkUpO1xyXG4gICAgcmV0dXJuIGAke3h9XyR7eX1gO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBNQUlOIExPQUQgVklTSUJMRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZFZpc2libGVSb2FkQ2h1bmtzKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghbWFwIHx8IG1hcC5nZXRab29tKCkgPCAxNCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGJvdW5kcyA9IG1hcC5nZXRCb3VuZHMoKTtcclxuXHJcbiAgICBjb25zdCB2aXNpYmxlQ2h1bmtzID0gZ2V0VmlzaWJsZUNodW5rcyhib3VuZHMpO1xyXG5cclxuICAgIGNvbnN0IGNodW5rc1RvTG9hZCA9IHZpc2libGVDaHVua3MuZmlsdGVyKFxyXG4gICAgICAgIGNodW5rSWQgPT4gIXJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmhhcyhjaHVua0lkKVxyXG4gICAgKTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gVkVSSUZJQ0FUSU9OIENBQ0hFIExPQ0FMXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgY29uc3QgZmluYWxDaHVua3NUb0xvYWQgPSBbXTtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgY2h1bmtzVG9Mb2FkKSB7XHJcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRDYWNoZUtleShjaHVua0lkKTtcclxuICAgICAgICBjb25zdCBjYWNoZWQgPSBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShjYWNoZUtleSk7XHJcbiAgICAgICAgaWYgKGNhY2hlZCkge1xyXG4gICAgICAgICAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShjYWNoZWQpO1xyXG4gICAgICAgICAgICAvLyBWw6lyaWZpZXIgc2kgbGUgY2FjaGUgZXN0IHZpZXV4IChleDogcGx1cyBkZSAxaClcclxuICAgICAgICAgICAgaWYgKERhdGUubm93KCkgLSBkYXRhLnRzIDwgMzYwMDAwMCkgeyBcclxuICAgICAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1czogZGF0YS5oYXNSb2FkcyA/ICdsb2FkZWQnIDogJ2VtcHR5JyxcclxuICAgICAgICAgICAgICAgICAgICByb2FkczogZGF0YS5yb2FkcyxcclxuICAgICAgICAgICAgICAgICAgICBidWlsZGluZ3M6IGRhdGEuYnVpbGRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBkYXRhLmRlcG9zaXRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhc1JvYWRzOiBkYXRhLmhhc1JvYWRzXHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuYWRkKGNodW5rSWQpO1xyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCBkYXRhLmhhc1JvYWRzID8gJ2JsdWUnIDogJyM0NDQnKTtcclxuICAgICAgICAgICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoZGF0YS5kZXBvc2l0cyB8fCBbXSwgbWFwKTtcclxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsQ2h1bmtzVG9Mb2FkLnB1c2goY2h1bmtJZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIEVUQVQgTE9BRElOR1xyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcclxuXHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgICByb2FkczogW10sXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogW10sXHJcbiAgICAgICAgICAgIGRlcG9zaXRzOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJpZW4gw6AgY2hhcmdlclxyXG4gICAgaWYgKGZpbmFsQ2h1bmtzVG9Mb2FkLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuXHJcbiAgICAgICAgY29uc3QgW3JvYWRzUmVzcG9uc2UsIGJ1aWxkaW5nc1Jlc3BvbnNlLCBkZXBvc2l0c1Jlc3BvbnNlXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvY2h1bmtzL2J1bGsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IGZpbmFsQ2h1bmtzVG9Mb2FkIH0pXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9idWlsZGluZ3MvdmlzaWJsZScsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2RlcG9zaXRzL2J1bGsnLCB7ICAgICAgIC8vIOKGkCBub3V2ZWwgZW5kcG9pbnQgw6AgY3LDqWVyXHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IGZpbmFsQ2h1bmtzVG9Mb2FkIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHNSZXNwb25zZS5vayB8fCAhYnVpbGRpbmdzUmVzcG9uc2Uub2sgfHwgIWRlcG9zaXRzUmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkFQSSBlcnJvclwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZHNEYXRhID0gYXdhaXQgcm9hZHNSZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdzRGF0YSA9IGF3YWl0IGJ1aWxkaW5nc1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBkZXBvc2l0c0RhdGEgPSBhd2FpdCBkZXBvc2l0c1Jlc3BvbnNlLmpzb24oKTtcclxuXHJcbiAgICAgICAgLy8gQ3LDqWVyIHVuIGluZGV4IHBvdXIgbWFwcGVyIGxlcyBiw6J0aW1lbnRzIHBhciBjaHVua0lkIHJhcGlkZW1lbnRcclxuICAgICAgICBjb25zdCBidWlsZGluZ3NCeUNodW5rID0ge307XHJcbiAgICAgICAgYnVpbGRpbmdzRGF0YS5mb3JFYWNoKGIgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjSWQgPSBNYXRoLmZsb29yKGIubGF0ICogMTAwKSArICdfJyArIE1hdGguZmxvb3IoYi5sbmcgKiAxMDApO1xyXG4gICAgICAgICAgICBpZiAoIWJ1aWxkaW5nc0J5Q2h1bmtbY0lkXSkgYnVpbGRpbmdzQnlDaHVua1tjSWRdID0gW107XHJcbiAgICAgICAgICAgIGJ1aWxkaW5nc0J5Q2h1bmtbY0lkXS5wdXNoKGIpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFRSQUlURU1FTlQgQ0hVTktTXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaHVua0lkIG9mIGZpbmFsQ2h1bmtzVG9Mb2FkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNodW5rRGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHJvYWRzOiByb2Fkc0RhdGFbY2h1bmtJZF0/LnJvYWRzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBidWlsZGluZ3NEYXRhW2NodW5rSWRdPy5idWlsZGluZ3MgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBkZXBvc2l0czogZGVwb3NpdHNEYXRhW2NodW5rSWRdIHx8IFtdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoYXNSb2FkcyA9IGNodW5rRGF0YS5yb2FkcyAmJiBjaHVua0RhdGEucm9hZHMubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiBoYXNSb2FkcyA/ICdsb2FkZWQnIDogJ2VtcHR5JyxcclxuICAgICAgICAgICAgICAgIHJvYWRzOiBjaHVua0RhdGEucm9hZHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IGNodW5rRGF0YS5idWlsZGluZ3MgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBkZXBvc2l0czogY2h1bmtEYXRhLmRlcG9zaXRzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgaGFzUm9hZHNcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmFkZChjaHVua0lkKTtcclxuXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIENBQ0hFXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gZ2V0Q2FjaGVLZXkoY2h1bmtJZCk7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFxyXG4gICAgICAgICAgICBjYWNoZUtleSxcclxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICAgICAgcm9hZHM6IGNodW5rRGF0YS5yb2FkcyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogY2h1bmtEYXRhLmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBjaHVua0RhdGEuZGVwb3NpdHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBoYXNSb2FkcyxcclxuICAgICAgICAgICAgICAgIHRzOiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIC8vIERSQVcgUk9BRFNcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgICAgIC8vIGNodW5rRGF0YS5yb2Fkcy5mb3JFYWNoKHJvYWQgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgZHJhd1JvYWQocm9hZCk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gRFJBVyBCVUlMRElOR1NcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gY2h1bmtEYXRhLmJ1aWxkaW5ncy5mb3JFYWNoKGJ1aWxkaW5nID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIGRyYXdCdWlsZGluZyhidWlsZGluZyk7XHJcbiAgICAgICAgICAgIC8vIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gQ09VTEVVUiBDSFVOS1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICBzZXRDaHVua0NvbG9yKFxyXG4gICAgICAgICAgICAgICAgY2h1bmtJZCxcclxuICAgICAgICAgICAgICAgIGhhc1JvYWRzID8gJ2JsdWUnIDogJyM0NDQnXHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGNodW5rRGF0YS5kZXBvc2l0cywgbWFwKTtcclxuXHJcbiAgICAgICAgICAgIGRlYnVnTG9nKFwicm9hZHNcIiwgYENodW5rICR7Y2h1bmtJZH0gbG9hZGVkICgke2NodW5rRGF0YS5yb2Fkcy5sZW5ndGh9IHJvYWRzLCAke2NodW5rRGF0YS5idWlsZGluZ3MubGVuZ3RofSBidWlsZGluZ3MsICR7Y2h1bmtEYXRhLmRlcG9zaXRzLmxlbmd0aH0gZGVwb3NpdHMpYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuXHJcbiAgICAgICAgY29uc29sZS5lcnJvcihcclxuICAgICAgICAgICAgXCJFcnJldXIgY2hhcmdlbWVudCBjaHVua3MgYnVsazpcIixcclxuICAgICAgICAgICAgZXJyb3JcclxuICAgICAgICApO1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIEVUQVQgRVJSRVVSXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICAgICAgZm9yIChjb25zdCBjaHVua0lkIG9mIGZpbmFsQ2h1bmtzVG9Mb2FkKSB7XHJcbiAgICAgICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG5cclxuICAgICAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuXHJcbiAgICAgICAgICAgICAgICByb2FkczogW10sXHJcblxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBbXVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAncmVkJyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBSRUZSRVNIIFZJU1VFTCBGSU5BTFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuXHJcbiAgICByZWZyZXNoQ2h1bmtDb2xvcnModmlzaWJsZUNodW5rcyk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFJFRlJFU0ggQ0hVTksgQ09MT1JTXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKSB7XHJcblxyXG4gICAgZm9yIChjb25zdCBjaHVua0lkIG9mIHZpc2libGVDaHVua3MpIHtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmsgPSByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXTtcclxuICAgICAgICBpZiAoIWNodW5rKSB7XHJcblxyXG4gICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKGNodW5rLnN0YXR1cykge1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbG9hZGVkJzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdibHVlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdlbXB0eSc6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnIzQ0NCcpO1xyXG5cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnbG9hZGluZyc6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdlcnJvcic6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAncmVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG5cclxuICAgICAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ3llbGxvdycpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVGUkVTSCBDSFVOS1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVmcmVzaENodW5rKGxhdCwgbG5nKSB7XHJcbiAgICBjb25zdCBjaHVua0lkID0gZ2V0Q2h1bmtJZChsYXQsIGxuZyk7XHJcblxyXG4gICAgaW52YWxpZGF0ZUNodW5rKGNodW5rSWQpO1xyXG5cclxuICAgIHJvYWRzU3RhdGUubG9hZGVkQ2h1bmtzLmRlbGV0ZShjaHVua0lkKTtcclxuXHJcbiAgICBhd2FpdCBmZXRjaFNpbmdsZUNodW5rKGNodW5rSWQpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBGRVRDSCBTSU5HTEUgQ0hVTktcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuYXN5bmMgZnVuY3Rpb24gZmV0Y2hTaW5nbGVDaHVuayhjaHVua0lkKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdsb2FkaW5nJyxcclxuICAgICAgICAgICAgcm9hZHM6IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IFtdLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuXHJcbiAgICAgICAgY29uc3QgW3JvYWRzUmVzLCBidWlsZGluZ3NSZXMsIGRlcG9zaXRzUmVzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvY2h1bmtzL2J1bGsnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IFtjaHVua0lkXSB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvYnVpbGRpbmdzL3Zpc2libGUnLCB7XHJcbiAgICAgICAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcclxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgICAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBjaHVua3M6IFtjaHVua0lkXSB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvZGVwb3NpdHMvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogW2NodW5rSWRdIH0pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgXSk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHNSZXMub2sgfHwgIWJ1aWxkaW5nc1Jlcy5vayB8fCAhZGVwb3NpdHNSZXMub2spIFxyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJBUEkgZXJyb3JcIik7XHJcblxyXG4gICAgICAgIGNvbnN0IHJvYWRzRGF0YSAgICAgPSBhd2FpdCByb2Fkc1Jlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgYnVpbGRpbmdzRGF0YSA9IGF3YWl0IGJ1aWxkaW5nc1Jlcy5qc29uKCk7XHJcbiAgICAgICAgY29uc3QgZGVwb3NpdHNEYXRhICA9IGF3YWl0IGRlcG9zaXRzUmVzLmpzb24oKTtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmtEZXBvc2l0cyA9IGRlcG9zaXRzRGF0YVtjaHVua0lkXSB8fCBbXTtcclxuXHJcbiAgICAgICAgY29uc3QgY2h1bmtEYXRhID0ge1xyXG4gICAgICAgICAgICByb2FkczogICAgIHJvYWRzRGF0YVtjaHVua0lkXT8ucm9hZHMgICAgIHx8IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IGJ1aWxkaW5nc0RhdGFbY2h1bmtJZF0/LmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgZGVwb3NpdHM6ICBjaHVua0RlcG9zaXRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgaGFzUm9hZHMgPSBjaHVua0RhdGEucm9hZHMubGVuZ3RoID4gMDtcclxuXHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogaGFzUm9hZHMgPyAnbG9hZGVkJyA6ICdlbXB0eScsXHJcbiAgICAgICAgICAgIHJvYWRzOiAgICAgY2h1bmtEYXRhLnJvYWRzLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IGNodW5rRGF0YS5idWlsZGluZ3MsXHJcbiAgICAgICAgICAgIGRlcG9zaXRzOiAgY2h1bmtEYXRhLmRlcG9zaXRzLFxyXG4gICAgICAgICAgICBoYXNSb2Fkc1xyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGNvbnN0IGNhY2hlS2V5ID0gZ2V0Q2FjaGVLZXkoY2h1bmtJZCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oY2FjaGVLZXksIEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgcm9hZHM6ICAgICBjaHVua0RhdGEucm9hZHMsXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogY2h1bmtEYXRhLmJ1aWxkaW5ncyxcclxuICAgICAgICAgICAgZGVwb3NpdHM6ICBjaHVua0RhdGEuZGVwb3NpdHMsXHJcbiAgICAgICAgICAgIGhhc1JvYWRzLFxyXG4gICAgICAgICAgICB0czogRGF0ZS5ub3coKVxyXG4gICAgICAgIH0pKTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCBoYXNSb2FkcyA/ICdibHVlJyA6ICcjNDQ0Jyk7XHJcbiAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShjaHVua0RhdGEuZGVwb3NpdHMsIGdldE1hcCgpKTtcclxuXHJcbiAgICAgICAgZGVidWdMb2coXCJbQ0hVTksgUkVGUkVTSF1cIiwgY2h1bmtJZCwgY2h1bmtEYXRhLnJvYWRzLmxlbmd0aCk7XHJcblxyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdID0ge1xyXG4gICAgICAgICAgICBzdGF0dXM6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIHJvYWRzOiBbXSxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBbXSxcclxuICAgICAgICAgICAgZGVwb3NpdHM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAncmVkJyk7XHJcbiAgICAgICAgZGVidWdFcnJvcihcIltDSFVOSyBSRUZSRVNIIEVSUk9SXVwiLCBjaHVua0lkLCBlKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0VmlzaWJsZUNodW5rcyhib3VuZHMpIHtcclxuXHJcbiAgICBjb25zdCBtaW5YID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0U291dGgoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4WCA9IE1hdGguZmxvb3IoYm91bmRzLmdldE5vcnRoKCkgLyBDSFVOS19TSVpFKTtcclxuXHJcbiAgICBjb25zdCBtaW5ZID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0V2VzdCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtYXhZID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0RWFzdCgpIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgY29uc3QgY2h1bmtJZCA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IHggPSBtaW5YOyB4IDw9IG1heFg7IHgrKykge1xyXG4gICAgICAgIGZvciAobGV0IHkgPSBtaW5ZOyB5IDw9IG1heFk7IHkrKykge1xyXG4gICAgICAgICAgICBjaHVua0lkLnB1c2goYCR7eH1fJHt5fWApO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gY2h1bmtJZDtcclxufSIsImV4cG9ydCBjb25zdCByb2Fkc1N0YXRlID0ge1xyXG4gICAgY2h1bmtzOiB7fSxcclxuICAgIGxvYWRlZENodW5rczogbmV3IFNldCgpLFxyXG4gICAgcm9hZHNSZWFkeTogZmFsc2UsXHJcbiAgICBkcmF3blJvYWRzOiBbXSxcclxuICAgIHZpc2libGVDaHVua3M6IG5ldyBTZXQoKSxcclxuICAgIFxyXG4gICAgcm9hZExheWVyczoge30sXHJcblxyXG4gICAgYnVpbGRpbmdMYXllcnM6IHt9XHJcbn07XHJcblxyXG5sZXQgY2FjaGVkUm9hZHMgPSBbXTtcclxubGV0IGNhY2hlRGlydHkgPSB0cnVlO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtSb2FkQ2FjaGVEaXJ0eSgpIHtcclxuICAgIGNhY2hlRGlydHkgPSB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWxsTG9hZGVkUm9hZHMoKSB7XHJcblxyXG4gICAgaWYgKCFyb2Fkc1N0YXRlPy5jaHVua3MpIHJldHVybiBbXTtcclxuXHJcbiAgICBpZiAoIWNhY2hlRGlydHkpIHJldHVybiBjYWNoZWRSb2FkcztcclxuXHJcbiAgICBjYWNoZWRSb2FkcyA9IE9iamVjdC52YWx1ZXMocm9hZHNTdGF0ZS5jaHVua3MpXHJcbiAgICAgICAgLmZpbHRlcihjID0+IGM/LnN0YXR1cyA9PT0gJ2xvYWRlZCcgJiYgQXJyYXkuaXNBcnJheShjLnJvYWRzKSlcclxuICAgICAgICAuZmxhdE1hcChjID0+IGMucm9hZHMpO1xyXG5cclxuICAgIGNhY2hlRGlydHkgPSBmYWxzZTtcclxuXHJcbiAgICByZXR1cm4gY2FjaGVkUm9hZHM7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlLCB0eXBlID0gJ2luZm8nKSB7XHJcblxyXG4gICAgY29uc3Qgbm90aWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5vdGlmLmNsYXNzTmFtZSA9IGBub3RpZiBub3RpZi0ke3R5cGV9YDtcclxuICAgIG5vdGlmLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBub3RpZi5yZW1vdmUoKTtcclxuICAgIH0sIDMwMDApO1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIHNob3dOb3RpZmljYXRpb24obWVzc2FnZSwgdHlwZSA9ICdpbmZvJykge1xyXG5cclxuICAgIGNvbnN0IG5vdGlmID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICBub3RpZi5jbGFzc05hbWUgPSBgbm90aWYgbm90aWYtJHt0eXBlfWA7XHJcbiAgICBub3RpZi50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XHJcblxyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChub3RpZik7XHJcblxyXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgbm90aWYucmVtb3ZlKCk7XHJcbiAgICB9LCAzMDAwKTtcclxufSIsImltcG9ydCB7IHNob3dOb3RpZmljYXRpb24gfSBmcm9tICcuLi9VaS9ub3RpZmljYXRpb24uanMnO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUEFUSEZJTkRJTkcgREVCVUcgLSBDTElDSyBUTyBHRVQgQ09PUkRJTkFURVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFkbWluQ29vcmRzKGxhdCwgbG5nKSB7XHJcbiAgICBpZiAobGF0ID09PSB1bmRlZmluZWQgfHwgbG5nID09PSB1bmRlZmluZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBmb3JtYXQgPSBgJHtsYXQudG9GaXhlZCg2KX0sJHtsbmcudG9GaXhlZCg2KX1gO1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZm9ybWF0KTtcclxuICAgIHNob3dOb3RpZmljYXRpb24oXCJGb3JtYXQgY29sbGFibGUgYWRtaW4gY29wacOpIDogXCIgKyBmb3JtYXQsICdzdWNjZXNzJyk7XHJcbn0iLCJpbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi4vQ29uZmlnL2NodW5rLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBzbmFwVG9DaHVuayhsYXQsIGxuZykge1xyXG4gICAgY29uc3QgeCA9IE1hdGguZmxvb3IobGF0IC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCB5ID0gTWF0aC5mbG9vcihsbmcgLyBDSFVOS19TSVpFKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxhdDogeCAqIENIVU5LX1NJWkUsXHJcbiAgICAgICAgbG5nOiB5ICogQ0hVTktfU0laRSxcclxuICAgICAgICBjaHVua0lkOiBgJHt4fV8ke3l9YFxyXG4gICAgfTtcclxufSIsImV4cG9ydCBmdW5jdGlvbiBidWlsZFJlcXVlc3QobGF0LCBsbmcsIHR5cGVJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL2J1aWxkJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgbGF0OiBsYXQsIGxuZzogbG5nLCB0eXBlX2lkOiB0eXBlSWQgfSlcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QnVpbGRpbmdzKCkge1xyXG4gICAgcmV0dXJuIGZldGNoKCcvYXBpL21hcC1kYXRhJylcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ0Nvc3RzKGJ1aWxkaW5nVHlwZUlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmctdHlwZXMvJHtidWlsZGluZ1R5cGVJZH0vY29zdHNgKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHVwZ3JhZGVCdWlsZGluZyhidWlsZGluZ0lkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goYC9hcGkvYnVpbGRpbmcvJHtidWlsZGluZ0lkfS91cGdyYWRlYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVwZ3JhZGVJbmZvKGJ1aWxkaW5nSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgL2FwaS9idWlsZGluZy8ke2J1aWxkaW5nSWR9L3VwZ3JhZGUtaW5mb2ApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vTGVhZmxldFdyYXBwZXIuanMnO1xyXG5pbXBvcnQgeyBmbHlUbywgZ2V0TWFwIH0gZnJvbSAnLi9tYXAuanMnO1xyXG5pbXBvcnQgeyByb2Fkc1N0YXRlLCBnZXRBbGxMb2FkZWRSb2FkcyB9IGZyb20gJy4vUm9hZHMvcm9hZHNTdGF0ZS5qcyc7XHJcbmltcG9ydCB7IGdldEJ1aWxkaW5nSW1hZ2UgfSBmcm9tICcuL2J1aWxkaW5nLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4vQ29uZmlnL2NodW5rLmpzJztcclxuaW1wb3J0IHsgc2FmZUxvYWRDaHVuaywgbG9hZFZpc2libGVSb2FkQ2h1bmtzIH0gZnJvbSAnLi9Sb2Fkcy9yb2Fkcy5qcyc7XHJcbmltcG9ydCB7IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQsIGZpbmRDbG9zZXN0U2VnbWVudCB9IGZyb20gJy4vUm9hZHMvcm9hZFV0aWxzLmpzJztcclxuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4vVUkvbm90aWZpY2F0aW9uLmpzJztcclxuaW1wb3J0IHsgZ2V0QWRtaW5Db29yZHMgfSBmcm9tICcuL1V0aWxzL2FkbWluX2NsaXBib2FyZC5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyDwn6egIFNUQVRFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmxldCBiYXNlTWFya2VyID0gbnVsbDtcclxubGV0IGJhc2VDaXJjbGUgPSBudWxsO1xyXG5sZXQgYmFzZVBvc2l0aW9uID0gbnVsbDtcclxubGV0IGJhc2VDcmVhdGVkID0gZmFsc2U7XHJcbmxldCBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG5cclxubGV0IHByZXZpZXdNYXJrZXIgPSBudWxsO1xyXG5sZXQgcHJldmlld0NpcmNsZSA9IG51bGw7XHJcbmxldCBwcmV2aWV3U25hcExhdExuZyA9IG51bGw7XHJcbmxldCBwcmV2aWV3TGluZSA9IG51bGw7XHJcbmxldCBoaWdobGlnaHRlZFNlZ21lbnQgPSBudWxsO1xyXG5cclxubGV0IGN1cnJlbnRQbGF5ZXJGYWN0aW9uID0gJ2RlZmF1bHQnO1xyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFNFVCBQTEFZRVIgRkFDVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudFBsYXllckZhY3Rpb24oZmFjdGlvbikge1xyXG4gICAgY3VycmVudFBsYXllckZhY3Rpb24gPSAoZmFjdGlvbiB8fCAnZGVmYXVsdCcpLnRvTG93ZXJDYXNlKCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEdFVCBQTEFZRVIgRkFDVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKSB7XHJcbiAgICByZXR1cm4gY3VycmVudFBsYXllckZhY3Rpb247XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIElOSVQgVUlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRCYXNlVUkoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgY29uc3QgYmFzZUJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdiYXNlQnRuJyk7XHJcblxyXG4gICAgYmFzZUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgbW9kZSA9IGJhc2VCdG4uZGF0YXNldC5tb2RlO1xyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIENSRUFURSBCQVNFIE1PREUgXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBpZiAobW9kZSA9PT0gJ2NyZWF0ZScpIHtcclxuICAgICAgICAgICAgaWYgKGJhc2VDcmVhdGVkKSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydChcIkJhc2UgZMOpasOgIGNyw6nDqWUgIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcGxhY2luZ0Jhc2UgPSB0cnVlO1xyXG4gICAgICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ2Nyb3NzaGFpcic7XHJcblxyXG4gICAgICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiQ2xpcXVlIHN1ciBsYSBjYXJ0ZSBwb3VyIHBsYWNlciB0YSBiYXNlXCIsICdpbmZvJyk7XHJcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAvLyBSRVRVUk4gQkFTRSBNT0RFXHJcbiAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICBpZiAobW9kZSA9PT0gJ3JldHVybicpIHtcclxuICAgICAgICAgICAgaWYgKCFiYXNlUG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQXVjdW5lIGJhc2UgIVwiKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZmx5VG8oYmFzZVBvc2l0aW9uWzBdLCBiYXNlUG9zaXRpb25bMV0sIDE2KTtcclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuICAgIFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIENMSUNLIE1BUFxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghcGxhY2luZ0Jhc2UgfHwgYmFzZUNyZWF0ZWQpIHJldHVybjtcclxuICAgICAgICBpZiAoIXByZXZpZXdTbmFwTGF0TG5nKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IHByZXZpZXdTbmFwTGF0TG5nO1xyXG5cclxuICAgICAgICBpZiAoIWlzQmFzZVBsYWNlbWVudFZhbGlkKGxhdCwgbG5nKSkge1xyXG4gICAgICAgICAgICBhbGVydChcIuKdjCBUcm9wIHByb2NoZSBkJ3VuZSBiYXNlICFcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNsZWFudXBQcmV2aWV3KG1hcCk7XHJcbiAgICAgICAgY3JlYXRlQmFzZShsYXQsIGxuZyk7XHJcbiAgICB9KTtcclxuICAgIFxyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBNT1VTRSBNT1ZFIChwcmV2aWV3IHNuYXAgcm9hZClcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBtYXAub24oJ21vdXNlbW92ZScsIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGlmICghcGxhY2luZ0Jhc2UpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZHMgPSBnZXRBbGxMb2FkZWRSb2FkcygpO1xyXG5cclxuICAgICAgICBpZiAoIXJvYWRzLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByZXN1bHQgPSBmaW5kQ2xvc2VzdFBvaW50T25Sb2FkKGUubGF0bG5nLCByb2Fkcyk7XHJcbiAgICAgICAgaWYgKCFyZXN1bHQucG9pbnQpIHJldHVybjtcclxuXHJcbiAgICAgICAgcHJldmlld1NuYXBMYXRMbmcgPSByZXN1bHQucG9pbnQ7XHJcblxyXG4gICAgICAgIGNvbnN0IGlzVmFsaWQgPSBpc0Jhc2VQbGFjZW1lbnRWYWxpZChyZXN1bHQucG9pbnQubGF0LCByZXN1bHQucG9pbnQubG5nKTtcclxuXHJcbiAgICAgICAgY2xlYW51cFByZXZpZXcobWFwKTtcclxuXHJcbiAgICAgICAgY29uc3QgY29sb3IgPSBpc1ZhbGlkID8gJ2dyZWVuJyA6ICdyZWQnO1xyXG5cclxuICAgICAgICBwcmV2aWV3Q2lyY2xlID0gTC5jaXJjbGUocmVzdWx0LnBvaW50LCB7XHJcbiAgICAgICAgICAgIHJhZGl1czogNjAwLFxyXG4gICAgICAgICAgICBjb2xvcixcclxuICAgICAgICAgICAgd2VpZ2h0OiAyLFxyXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4xXHJcbiAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgcHJldmlld01hcmtlciA9IEwubWFya2VyKHJlc3VsdC5wb2ludCkuYWRkVG8obWFwKTtcclxuXHJcbiAgICAgICAgcHJldmlld0xpbmUgPSBMLnBvbHlsaW5lKFtlLmxhdGxuZywgcmVzdWx0LnBvaW50XSwge1xyXG4gICAgICAgICAgICBjb2xvcjogJ2N5YW4nLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIG9wYWNpdHk6IDAuNixcclxuICAgICAgICAgICAgZGFzaEFycmF5OiAnNSwgNSdcclxuICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBjb25zdCBzZWdtZW50ID0gZmluZENsb3Nlc3RTZWdtZW50KGUubGF0bG5nLCByb2Fkcyk7XHJcblxyXG4gICAgICAgIGlmIChzZWdtZW50KSB7XHJcbiAgICAgICAgICAgIGhpZ2hsaWdodGVkU2VnbWVudCA9IEwucG9seWxpbmUoc2VnbWVudCwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICd5ZWxsb3cnLFxyXG4gICAgICAgICAgICAgICAgd2VpZ2h0OiA2LFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC44XHJcbiAgICAgICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJ25vbmUnO1xyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFVQREFURSBWSVNVQUwgQkFTRSBBTkQgT1RIRVIgQkFTRVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignem9vbWVuZCcsICgpID0+IHtcclxuICAgICAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG4gICAgICAgIHVwZGF0ZU90aGVyQmFzZXMoKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQQVRIRklORElORyBERUJVRyBGT1IgQURNSU4gLSBDTElDSyBUTyBHRVQgQ09PUkRJTkFURVNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlcigpIHtcclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbihcIk1vZGUgQWRtaW4gYWN0aXbDqSA6IGNsaXF1ZXogc3VyIGxhIGNhcnRlXCIsICdpbmZvJyk7XHJcbiAgICAgICAgXHJcbiAgICBtYXAub24oJ2NsaWNrJywgKGUpID0+IHtcclxuICAgICAgICBnZXRBZG1pbkNvb3JkcyhlLmxhdGxuZy5sYXQsIGUubGF0bG5nLmxuZyk7XHJcbiAgICB9KTtcclxufVxyXG5cclxud2luZG93LmVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlciA9IGVuYWJsZUFkbWluQ29vcmRpbmF0ZVBpY2tlcjtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfp7kgQ0xFQU4gUFJFVklFV1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjbGVhbnVwUHJldmlldygpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3TWFya2VyKTtcclxuICAgIHByZXZpZXdDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdDaXJjbGUpO1xyXG4gICAgcHJldmlld0xpbmUgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdMaW5lKTtcclxuICAgIGhpZ2hsaWdodGVkU2VnbWVudCAmJiBtYXAucmVtb3ZlTGF5ZXIoaGlnaGxpZ2h0ZWRTZWdtZW50KTtcclxuXHJcbiAgICBwcmV2aWV3TWFya2VyID0gbnVsbDtcclxuICAgIHByZXZpZXdDaXJjbGUgPSBudWxsO1xyXG4gICAgcHJldmlld0xpbmUgPSBudWxsO1xyXG4gICAgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gbnVsbDtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFZBTElEQVRJT05cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICByZXR1cm4gb3RoZXJCYXNlcy5ldmVyeShiYXNlID0+IHtcclxuXHJcbiAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShcclxuICAgICAgICAgICAgW2xhdCwgbG5nXSxcclxuICAgICAgICAgICAgW2Jhc2UubGF0LCBiYXNlLmxuZ11cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICByZXR1cm4gZGlzdCA+PSAxMTAwO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENSRUFURSBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNyZWF0ZUJhc2UobGF0LCBsbmcpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBwbGFjaW5nQmFzZSA9IGZhbHNlO1xyXG4gICAgYmFzZVBvc2l0aW9uID0gW2xhdCwgbG5nXTtcclxuXHJcbiAgICBmbHlUbyhsYXQsIGxuZyk7XHJcblxyXG4gICAgYmFzZUNpcmNsZSA9IEwuY2lyY2xlKGJhc2VQb3NpdGlvbiwge1xyXG4gICAgICAgIHJhZGl1czogNTAwLFxyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICBjb25zdCBiYXNlVHlwZUlkID0gMTtcclxuICAgIGZldGNoKCcvYXBpL2J1aWxkJywge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHsgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbGF0LFxyXG4gICAgICAgICAgICBsbmcsXHJcbiAgICAgICAgICAgIHR5cGVfaWQ6IGJhc2VUeXBlSWRcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgaWYgKCFyZXMub2spIHJldHVybiByZXMuanNvbigpLnRoZW4oZXJyID0+IHsgdGhyb3cgbmV3IEVycm9yKGVyci5lcnJvciB8fCBcIkFQSSBlcnJvclwiKSB9KTtcclxuICAgICAgICByZXR1cm4gcmVzLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAudGhlbigoKSA9PiB7XHJcbiAgICBiYXNlQ3JlYXRlZCA9IHRydWU7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnIpO1xyXG4gICAgICAgIHJlbW92ZUJhc2UoKTtcclxuICAgICAgICBhbGVydChcIkVycmV1ciBjcsOpYXRpb24gYmFzZSA6IFwiICsgZXJyLm1lc3NhZ2UpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG4gICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVNT1ZFIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gcmVtb3ZlQmFzZSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBiYXNlTWFya2VyICYmIG1hcC5yZW1vdmVMYXllcihiYXNlTWFya2VyKTtcclxuICAgIGJhc2VDaXJjbGUgJiYgbWFwLnJlbW92ZUxheWVyKGJhc2VDaXJjbGUpO1xyXG5cclxuICAgIGJhc2VNYXJrZXIgPSBudWxsO1xyXG4gICAgYmFzZUNpcmNsZSA9IG51bGw7XHJcbiAgICBiYXNlUG9zaXRpb24gPSBudWxsO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSBmYWxzZTtcclxuICAgIHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICcnO1xyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgT1RIRVIgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5sZXQgb3RoZXJCYXNlcyA9IFtdO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRPdGhlckJhc2UobGF0LCBsbmcsIHBzZXVkbywgZmFjdGlvbikge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShsbmcpKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgY2lyY2xlID0gTC5jaXJjbGUoW2xhdCwgbG5nXSwge1xyXG4gICAgICAgIHJhZGl1czogNTAwLFxyXG4gICAgICAgIGNvbG9yOiAncmVkJ1xyXG4gICAgfSkuYWRkVG8obWFwKTtcclxuXHJcbiAgICBjb25zdCBpY29uID0gY3JlYXRlQmFzZUljb24obWFwLmdldFpvb20oKSwgZmFjdGlvbik7XHJcblxyXG4gICAgbGV0IG1hcmtlciA9IG51bGw7XHJcblxyXG4gICAgaWYgKGljb24pIHtcclxuICAgICAgICBtYXJrZXIgPSBMLm1hcmtlcihbbGF0LCBsbmddLCB7IGljb24gfSlcclxuICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgLmJpbmRQb3B1cChg8J+Ple+4jyBCYXNlIGRlICR7cHNldWRvfWApO1xyXG4gICAgfVxyXG5cclxuICAgIG90aGVyQmFzZXMucHVzaCh7IGxhdCwgbG5nLCBwc2V1ZG8sIG1hcmtlciwgY2lyY2xlLCBmYWN0aW9uIH0pO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBVUERBVEUgT1RIRVIgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiB1cGRhdGVPdGhlckJhc2VzKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgY29uc3Qgem9vbSA9IG1hcC5nZXRab29tKCk7XHJcblxyXG4gICAgb3RoZXJCYXNlcy5mb3JFYWNoKGJhc2UgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBpY29uID0gY3JlYXRlQmFzZUljb24oem9vbSwgYmFzZS5mYWN0aW9uKTtcclxuXHJcbiAgICAgICAgaWYgKCFpY29uKSB7XHJcbiAgICAgICAgICAgIGlmIChiYXNlLm1hcmtlcikgbWFwLnJlbW92ZUxheWVyKGJhc2UubWFya2VyKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFiYXNlLm1hcmtlcikge1xyXG4gICAgICAgICAgICBiYXNlLm1hcmtlciA9IEwubWFya2VyKFtiYXNlLmxhdCwgYmFzZS5sbmddLCB7IGljb24gfSlcclxuICAgICAgICAgICAgICAgIC5hZGRUbyhtYXApXHJcbiAgICAgICAgICAgICAgICAuYmluZFBvcHVwKGDwn4+V77iPIEJhc2UgZGUgJHtiYXNlLnBzZXVkb31gKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFtYXAuaGFzTGF5ZXIoYmFzZS5tYXJrZXIpKSBiYXNlLm1hcmtlci5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBiYXNlLm1hcmtlci5zZXRJY29uKGljb24pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgRlJPTSBTRVJWRVJcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCYXNlRnJvbVNlcnZlcihsYXQsIGxuZykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShsbmcpKSByZXR1cm47XHJcblxyXG4gICAgYmFzZVBvc2l0aW9uID0gW2xhdCwgbG5nXTtcclxuICAgIGJhc2VDcmVhdGVkID0gdHJ1ZTtcclxuXHJcbiAgICBiYXNlQ2lyY2xlID0gTC5jaXJjbGUoYmFzZVBvc2l0aW9uLCB7XHJcbiAgICAgICAgcmFkaXVzOiA1MDAsXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIHVwZGF0ZUJhc2VEaXNwbGF5KCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQREFURSBCQVNFIERJU1BMQVlcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gdXBkYXRlQmFzZURpc3BsYXkoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFiYXNlUG9zaXRpb24pIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBpY29uID0gY3JlYXRlQmFzZUljb24obWFwLmdldFpvb20oKSwgY3VycmVudFBsYXllckZhY3Rpb24pO1xyXG5cclxuICAgIGlmICghaWNvbikge1xyXG4gICAgICAgIGlmIChiYXNlTWFya2VyKSBtYXAucmVtb3ZlTGF5ZXIoYmFzZU1hcmtlcik7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICghYmFzZU1hcmtlcikge1xyXG4gICAgICAgIGJhc2VNYXJrZXIgPSBMLm1hcmtlcihiYXNlUG9zaXRpb24sIHsgaWNvbiB9KS5hZGRUbyhtYXApO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIW1hcC5oYXNMYXllcihiYXNlTWFya2VyKSkgYmFzZU1hcmtlci5hZGRUbyhtYXApO1xyXG4gICAgICAgIGJhc2VNYXJrZXIuc2V0SWNvbihpY29uKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ1JFQVRFIEJBU0UgSUNPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBjcmVhdGVCYXNlSWNvbih6b29tLCBmYWN0aW9uKSB7XHJcblxyXG4gICAgaWYgKHpvb20gPCAxMykgcmV0dXJuIG51bGw7XHJcblxyXG4gICAgY29uc3Qgc2l6ZSA9IGZhY3Rpb24gIT09ICdub21hZGVzJyA/ICh6b29tID4gMTUgPyAxMDAgOiA3MCkgOiAoem9vbSA+IDE1ID8gNzUgOiA2MCk7XHJcblxyXG4gICAgLy8gVG91am91cnMgdXRpbGlzZXIgbCdpY8O0bmUgZGUgbGEgZmFjdGlvbiAobGUgZmFsbGJhY2sgQXBhY2hlIGfDqHJlIGxlcyA0MDQpXHJcbiAgICAvLyBTaSBsJ2ljw7RuZSBuJ2V4aXN0ZSBwYXMsIEFwYWNoZSByZWRpcmlnZSB2ZXJzIGRlZmF1bHQgYXV0b21hdGlxdWVtZW50XHJcbiAgICBjb25zdCBpY29uVXJsID0gZ2V0QnVpbGRpbmdJbWFnZShmYWN0aW9uLCAnYmFzZScpO1xyXG5cclxuICAgIHJldHVybiBMLmljb24oe1xyXG4gICAgICAgIGljb25Vcmw6IGljb25VcmwsXHJcbiAgICAgICAgaWNvblNpemU6IFtzaXplLCBzaXplXSxcclxuICAgICAgICBpY29uQW5jaG9yOiBbc2l6ZSAvIDIsIHNpemUgLyAyXSxcclxuICAgICAgICBwb3B1cEFuY2hvcjogWzAsIC1zaXplIC8gMl1cclxuICAgIH0pO1xyXG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vTGVhZmxldFdyYXBwZXIuanMnO1xuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi9tYXAuanMnO1xuaW1wb3J0IHsgZ2V0QnVpbGRpbmdDb3N0cywgYnVpbGRSZXF1ZXN0IH0gZnJvbSAnLi9hcGkuanMnO1xuaW1wb3J0IHsgZ2V0QnVpbGRpbmdJbWFnZSB9IGZyb20gJy4vYnVpbGRpbmcuanMnO1xuaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4vVUkvbm90aWZpY2F0aW9uLmpzJztcblxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cbi8vIEJVSUxEIE1PREUgU1RBVEVcbi8vID09PT09PT09PT09PT09PT09PT09PT09XG5sZXQgc2VsZWN0ZWRCdWlsZGluZ1R5cGUgPSBudWxsO1xubGV0IHByZXZpZXdCdWlsZGluZ01hcmtlciA9IG51bGw7XG5cbi8qKlxuICogSW5pdGlhbGlzZSBsZSBtb2RlIGNvbnN0cnVjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJ1aWxkTW9kZSgpIHtcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcblxuICAgIC8vIFV0aWxpc2VyIGxhIGTDqWzDqWdhdGlvbiBkJ8OpdsOpbmVtZW50cyBwb3VyIGxlcyBib3V0b25zIGR5bmFtaXF1ZXNcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XG4gICAgICAgIGNvbnN0IGJ0biA9IGUudGFyZ2V0LmNsb3Nlc3QoJy5idWlsZC1pdGVtJyk7XG4gICAgICAgIGlmICghYnRuKSByZXR1cm47XG5cbiAgICAgICAgY29uc3QgdHlwZUlkID0gYnRuLmRhdGFzZXQudHlwZUlkO1xuICAgICAgICBpZiAoIXR5cGVJZCkgcmV0dXJuO1xuXG4gICAgICAgIC8vIFPDqWxlY3Rpb25uZXIgbGUgdHlwZSBkZSBiw6J0aW1lbnRcbiAgICAgICAgYXdhaXQgc2VsZWN0QnVpbGRpbmdUeXBlKHR5cGVJZCwgYnRuKTtcbiAgICB9KTtcblxuICAgIC8vIENsaWNrIHN1ciBsYSBjYXJ0ZSBwb3VyIGNvbnN0cnVpcmVcbiAgICBtYXAub24oJ2NsaWNrJywgb25NYXBDbGljayk7XG5cbiAgICAvLyBNb3VzZSBtb3ZlIHBvdXIgcHLDqXZpc3VhbGlzZXJcbiAgICBtYXAub24oJ21vdXNlbW92ZScsIG9uTWFwTW91c2VNb3ZlKTtcbn1cblxuLyoqXG4gKiBTw6lsZWN0aW9ubmUgdW4gdHlwZSBkZSBiw6J0aW1lbnQgw6AgY29uc3RydWlyZVxuICovXG5hc3luYyBmdW5jdGlvbiBzZWxlY3RCdWlsZGluZ1R5cGUodHlwZUlkLCBidXR0b24pIHtcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcblxuICAgIC8vIETDqXPDqWxlY3Rpb25uZXIgcHLDqWPDqWRlbW1lbnRcbiAgICBjbGVhckJ1aWxkaW5nU2VsZWN0aW9uKCk7XG5cbiAgICAvLyBHw6lyZXIgbGUgY2FzIHNww6ljaWFsIGRlIGxhIGJhc2UgKGJvdXRvbiAjYmFzZUJ0bilcbiAgICBpZiAoYnV0dG9uLmlkID09PSAnYmFzZUJ0bicgJiYgdHlwZUlkID09IDEpIHtcbiAgICAgICAgLy8gTGEgYmFzZSBlc3QgZ8OpcsOpZSBwYXIgYmFzZS5qcywgb24gbmUgZmFpdCByaWVuIGljaVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gTWV0dHJlIGVuIMOpdmlkZW5jZSBsZSBib3V0b24gc8OpbGVjdGlvbm7DqVxuICAgIGJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgLy8gUsOpY3Vww6lyZXIgbGVzIGNvw7t0c1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBnZXRCdWlsZGluZ0Nvc3RzKHR5cGVJZCk7XG4gICAgICAgIHNlbGVjdGVkQnVpbGRpbmdUeXBlID0ge1xuICAgICAgICAgICAgaWQ6IHR5cGVJZCxcbiAgICAgICAgICAgIG5hbWU6IGRhdGEubmFtZSxcbiAgICAgICAgICAgIGNvc3RzOiBkYXRhLmNvc3RzLFxuICAgICAgICAgICAgYnV0dG9uOiBidXR0b25cbiAgICAgICAgfTtcblxuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKGBTw6lsZWN0aW9ubsOpOiAke2RhdGEubmFtZX0uIENsaXF1ZSBzdXIgbGEgY2FydGUgcG91ciBjb25zdHJ1aXJlLmAsICdpbmZvJyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCBlKTtcbiAgICAgICAgc2hvd05vdGlmaWNhdGlvbihcIkVycmV1ciBsb3JzIGRlIGxhIHLDqWN1cMOpcmF0aW9uIGRlcyBjb8O7dHNcIiwgJ2Vycm9yJyk7XG4gICAgfVxufVxuXG4vKipcbiAqIE5ldHRvaWUgbGEgc8OpbGVjdGlvbiBhY3R1ZWxsZVxuICovXG5mdW5jdGlvbiBjbGVhckJ1aWxkaW5nU2VsZWN0aW9uKCkge1xuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xuXG4gICAgaWYgKHByZXZpZXdCdWlsZGluZ01hcmtlcikge1xuICAgICAgICBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0J1aWxkaW5nTWFya2VyKTtcbiAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcbiAgICB9XG5cbiAgICBzZWxlY3RlZEJ1aWxkaW5nVHlwZSA9IG51bGw7XG5cbiAgICAvLyBSZXRpcmVyIGxhIGNsYXNzZSBzZWxlY3RlZCBkZSB0b3VzIGxlcyBib3V0b25zXG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmJ1aWxkLWl0ZW0nKS5mb3JFYWNoKGJ0biA9PiB7XG4gICAgICAgIGJ0bi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIEdlc3Rpb24gZHUgY2xpY2sgc3VyIGxhIGNhcnRlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIG9uTWFwQ2xpY2soZSkge1xuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xuXG4gICAgaWYgKCFzZWxlY3RlZEJ1aWxkaW5nVHlwZSkgcmV0dXJuO1xuICAgIGlmICghcHJldmlld0J1aWxkaW5nTWFya2VyKSByZXR1cm47XG5cbiAgICBjb25zdCBsYXQgPSBlLmxhdGxuZy5sYXQ7XG4gICAgY29uc3QgbG5nID0gZS5sYXRsbmcubG5nO1xuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBidWlsZFJlcXVlc3QobGF0LCBsbmcsIHNlbGVjdGVkQnVpbGRpbmdUeXBlLmlkKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oYCR7c2VsZWN0ZWRCdWlsZGluZ1R5cGUubmFtZX0gY29uc3RydWl0IGF2ZWMgc3VjY8OocyAhYCwgJ3N1Y2Nlc3MnKTtcblxuICAgICAgICAgICAgLy8gTmV0dG95ZXJcbiAgICAgICAgICAgIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3QnVpbGRpbmdNYXJrZXIpO1xuICAgICAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcbiAgICAgICAgICAgIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oYEVycmV1cjogJHtkYXRhLmVycm9yfWAsICdlcnJvcicpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgY29uc3RydWN0aW9uXCIsIGUpO1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsYSBjb25zdHJ1Y3Rpb25cIiwgJ2Vycm9yJyk7XG4gICAgfVxufVxuXG4vKipcbiAqIFByw6l2aXN1YWxpc2F0aW9uIGRlIGxhIHBvc2l0aW9uIGRlIGNvbnN0cnVjdGlvblxuICovXG5mdW5jdGlvbiBvbk1hcE1vdXNlTW92ZShlKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG5cbiAgICBpZiAoIXNlbGVjdGVkQnVpbGRpbmdUeXBlKSB7XG4gICAgICAgIC8vIE5ldHRveWVyIGxlcyBtYXJrZXJzIGRlIHByw6l2aXN1YWxpc2F0aW9uXG4gICAgICAgIGlmIChwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHtcbiAgICAgICAgICAgIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3QnVpbGRpbmdNYXJrZXIpO1xuICAgICAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQWpvdXRlciB1biBtYXJrZXIgZGUgcHLDqXZpc3VhbGlzYXRpb25cbiAgICBpZiAoIXByZXZpZXdCdWlsZGluZ01hcmtlcikge1xuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBMLm1hcmtlcihbZS5sYXRsbmcubGF0LCBlLmxhdGxuZy5sbmddKS5hZGRUbyhtYXApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHByZXZpZXdCdWlsZGluZ01hcmtlci5zZXRMYXRMbmcoZS5sYXRsbmcpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBBY3RpdmUgbGUgbW9kZSBjb25zdHJ1Y3Rpb24gcG91ciB1biB0eXBlIGRlIGLDonRpbWVudFxuICovXG5leHBvcnQgZnVuY3Rpb24gYWN0aXZhdGVCdWlsZE1vZGUodHlwZUlkKSB7XG4gICAgY29uc3QgYnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtdHlwZS1pZD1cIiR7dHlwZUlkfVwiXWApO1xuICAgIGlmIChidG4pIHtcbiAgICAgICAgYnRuLmNsaWNrKCk7XG4gICAgfVxufVxuXG4vKipcbiAqIETDqXNhY3RpdmUgbGUgbW9kZSBjb25zdHJ1Y3Rpb25cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRlYWN0aXZhdGVCdWlsZE1vZGUoKSB7XG4gICAgY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpO1xufVxuXG4vKipcbiAqIFbDqXJpZmllIHNpIGxlIG1vZGUgY29uc3RydWN0aW9uIGVzdCBhY3RpZlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNCdWlsZE1vZGVBY3RpdmUoKSB7XG4gICAgcmV0dXJuIHNlbGVjdGVkQnVpbGRpbmdUeXBlICE9PSBudWxsO1xufSIsImltcG9ydCBMIGZyb20gJy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcbmltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4vbWFwLmpzJztcbmltcG9ydCB7IGdldEJ1aWxkaW5nQ29zdHMsIHVwZ3JhZGVCdWlsZGluZywgZ2V0VXBncmFkZUluZm8gfSBmcm9tICcuL2FwaS5qcyc7XG5pbXBvcnQgeyBnZXRDdXJyZW50UGxheWVyRmFjdGlvbiB9IGZyb20gJy4vYmFzZS5qcyc7XG5cbi8vIENhY2hlIGRlcyBpbmZvcm1hdGlvbnMgZGUgYsOidGltZW50c1xubGV0IGJ1aWxkaW5nTWFya2VycyA9IG5ldyBNYXAoKTtcblxuLyoqXG4gKiBDaGFyZ2UgbGVzIGLDonRpbWVudHMgc3VyIGxhIGNhcnRlIGF2ZWMgbGV1cnMgcG9wdXBzIGludGVyYWN0aWZzXG4gKiBAcGFyYW0ge0FycmF5fSBidWlsZGluZ3MgLSBMaXN0ZSBkZXMgYsOidGltZW50cyDDoCBhZmZpY2hlclxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJ1aWxkaW5nc0Zyb21EYXRhKGJ1aWxkaW5ncykge1xuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xuXG4gICAgaWYgKCFtYXApIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIk1hcCBub3QgaW5pdGlhbGl6ZWRcIik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZiAoIWJ1aWxkaW5ncyB8fCAhQXJyYXkuaXNBcnJheShidWlsZGluZ3MpKSB7XG4gICAgICAgIGNvbnNvbGUud2FybihcImxvYWRCdWlsZGluZ3NGcm9tRGF0YTogaW52YWxpZCBidWlsZGluZ3MgZGF0YVwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGJ1aWxkaW5ncy5mb3JFYWNoKGIgPT4ge1xuICAgICAgICAvLyBJZ25vcmVyIGxlcyBiYXNlcyAtIGVsbGVzIHNvbnQgZ8OpcsOpZXMgcGFyIGJhc2UuanNcbiAgICAgICAgaWYgKGIuY29kZSA9PT0gJ2Jhc2UnIHx8IGIudHlwZT8udG9Mb3dlckNhc2UoKSA9PT0gJ2Jhc2UnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIU51bWJlci5pc0Zpbml0ZShiLmxhdCkgfHwgIU51bWJlci5pc0Zpbml0ZShiLmxuZykpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIuKdjCBCdWlsZGluZyBpZ25vcsOpIChjb29yZCBpbnZhbGlkZSlcIiwgYik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICAvLyBDcsOpZXIgbCdpY8O0bmUgYXZlYyBsJ2ltYWdlIGR1IGLDonRpbWVudFxuICAgICAgICBjb25zdCBpY29uID0gY3JlYXRlQnVpbGRpbmdJY29uKGIuY29kZSk7XG5cbiAgICAgICAgLy8gU3RvY2tlciBsZXMgZG9ubsOpZXMgZHUgYnVpbGRpbmcgcG91ciBhY2PDqHMgdWx0w6lyaWV1clxuICAgICAgICBjb25zdCBidWlsZGluZ0RhdGEgPSB7XG4gICAgICAgICAgICBpZDogYi5pZCxcbiAgICAgICAgICAgIHR5cGU6IGIudHlwZSxcbiAgICAgICAgICAgIGxldmVsOiBiLmxldmVsLFxuICAgICAgICAgICAgY29kZTogYi5jb2RlXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gQ3LDqWVyIGxlIG1hcmtlciBhdmVjIHBvcHVwIHN0YXRpcXVlIChwYXMgZCdhc3luYylcbiAgICAgICAgY29uc3QgbWFya2VyID0gTC5tYXJrZXIoW2IubGF0LCBiLmxuZ10sIHsgaWNvbiB9KVxuICAgICAgICAgICAgLmFkZFRvKG1hcClcbiAgICAgICAgICAgIC5iaW5kUG9wdXAoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XG5cbiAgICAgICAgYnVpbGRpbmdNYXJrZXJzLnNldChiLmlkLCB7IG1hcmtlciwgZGF0YTogYnVpbGRpbmdEYXRhIH0pO1xuXG4gICAgICAgIC8vIENoYXJnZXIgbGVzIGluZm9zIGQnYW3DqWxpb3JhdGlvbiBlbiBhcnJpw6hyZS1wbGFuXG4gICAgICAgIGlmIChiLmlkKSB7XG4gICAgICAgICAgICBsb2FkVXBncmFkZUluZm9Bc3luYyhiLmlkLCBtYXJrZXIsIGJ1aWxkaW5nRGF0YSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBDcsOpZSB1biBwb3B1cCBzaW1wbGUgKHN5bmNocm9uZSlcbiAqL1xuZnVuY3Rpb24gY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmcpIHtcbiAgICByZXR1cm4gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRpbmctcG9wdXBcIj5cbiAgICAgICAgICAgIDxoMz4ke2J1aWxkaW5nLnR5cGUgfHwgJ0LDonRpbWVudCd9PC9oMz5cbiAgICAgICAgICAgIDxwPk5pdmVhdTogJHtidWlsZGluZy5sZXZlbCB8fCAxfTwvcD5cbiAgICAgICAgICAgIDxkaXYgaWQ9XCJ1cGdyYWRlLWluZm8tJHtidWlsZGluZy5pZH1cIj5DaGFyZ2VtZW50Li4uPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgIGA7XG59XG5cbi8qKlxuICogQ2hhcmdlIGxlcyBpbmZvcyBkJ2Ftw6lsaW9yYXRpb24gZW4gYXJyacOocmUtcGxhblxuICovXG5hc3luYyBmdW5jdGlvbiBsb2FkVXBncmFkZUluZm9Bc3luYyhidWlsZGluZ0lkLCBtYXJrZXIsIGJ1aWxkaW5nRGF0YSkge1xuICAgIGlmICghYnVpbGRpbmdJZCkge1xuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZ2V0VXBncmFkZUluZm8oYnVpbGRpbmdJZCk7XG4gICAgICAgIGlmICghcmVzLm9rKSB7XG4gICAgICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgdXBncmFkZUluZm8gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICBjb25zdCBjYW5VcGdyYWRlID0gdXBncmFkZUluZm8/LmNhblVwZ3JhZGUgPz8gZmFsc2U7XG4gICAgICAgIGNvbnN0IG1heExldmVsID0gdXBncmFkZUluZm8/Lm1heExldmVsID8/IDE7XG4gICAgICAgIGNvbnN0IG5lZWRlZCA9IHVwZ3JhZGVJbmZvPy5uZWVkZWQgPz8ge307XG4gICAgICAgIGNvbnN0IGF2YWlsYWJsZSA9IHVwZ3JhZGVJbmZvPy5hdmFpbGFibGUgPz8ge307XG5cbiAgICAgICAgbGV0IGNvc3RzSHRtbCA9ICcnO1xuICAgICAgICBpZiAoIWNhblVwZ3JhZGUgJiYgbWF4TGV2ZWwgPiAxKSB7XG4gICAgICAgICAgICBjb3N0c0h0bWwgPSAnPGRpdiBjbGFzcz1cInVwZ3JhZGUtY29zdHMgdW5hdmFpbGFibGVcIj5Db8O7dHMgaW5zdWZmaXNhbnRzPC9kaXY+JztcbiAgICAgICAgfSBlbHNlIGlmIChPYmplY3Qua2V5cyhuZWVkZWQpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGNvc3RzSHRtbCA9ICc8ZGl2IGNsYXNzPVwidXBncmFkZS1jb3N0c1wiPic7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IFtyZXNvdXJjZSwgYW1vdW50XSBvZiBPYmplY3QuZW50cmllcyhuZWVkZWQpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgaGFzID0gYXZhaWxhYmxlW3Jlc291cmNlXSB8fCAwO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNscyA9IGhhcyA+PSBhbW91bnQgPyAnZW5vdWdoJyA6ICdtaXNzaW5nJztcbiAgICAgICAgICAgICAgICBjb3N0c0h0bWwgKz0gYDxkaXYgY2xhc3M9XCIke2Nsc31cIj4ke3Jlc291cmNlfTogJHtoYXN9LyR7YW1vdW50fTwvZGl2PmA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb3N0c0h0bWwgKz0gJzwvZGl2Pic7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBwb3B1cENvbnRlbnQgPSBgXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnVpbGRpbmctcG9wdXBcIj5cbiAgICAgICAgICAgICAgICA8aDM+JHtidWlsZGluZ0RhdGEudHlwZX08L2gzPlxuICAgICAgICAgICAgICAgIDxwPk5pdmVhdTogJHtidWlsZGluZ0RhdGEubGV2ZWx9IC8gJHttYXhMZXZlbH08L3A+XG4gICAgICAgICAgICAgICAgJHtjb3N0c0h0bWx9XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvcHVwLWFjdGlvbnNcIj5cbiAgICAgICAgICAgICAgICAgICAgJHtjYW5VcGdyYWRlID9cbiAgICAgICAgICAgICAgICAgICAgICAgIGA8YnV0dG9uIG9uY2xpY2s9XCJ3aW5kb3cudXBncmFkZUJ1aWxkaW5nKCR7YnVpbGRpbmdJZH0pXCIgY2xhc3M9XCJidG4tdXBncmFkZVwiPkFtw6lsaW9yZXI8L2J1dHRvbj5gIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGA8YnV0dG9uIGRpc2FibGVkIGNsYXNzPVwiYnRuLXVwZ3JhZGVcIj5BbcOpbGlvcmVyPC9idXR0b24+YFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgYDtcblxuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KHBvcHVwQ29udGVudCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGluZm9zIGQnYW3DqWxpb3JhdGlvblwiLCBlKTtcbiAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcbiAgICB9XG59XG5cbi8qKlxuICogQ2hhcmdlIGxlcyBiw6J0aW1lbnRzIGRlcHVpcyBsJ0FQSSAoZm9uY3Rpb24gZGUgY29tcGF0aWJpbGl0w6kpXG4gKiBAZGVwcmVjYXRlZCBVdGlsaXNlciBsb2FkQnVpbGRpbmdzRnJvbURhdGEoZGF0YSkgw6AgbGEgcGxhY2VcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRCdWlsZGluZ3MoKSB7XG4gICAgZmV0Y2goJy9hcGkvbWFwLWRhdGEnKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICBsb2FkQnVpbGRpbmdzRnJvbURhdGEoZGF0YSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBjaGFyZ2VtZW50IGLDonRpbWVudHNcIiwgZXJyKTtcbiAgICAgICAgfSk7XG59XG5cbi8qKlxuICogQ3LDqWUgdW5lIGljw7RuZSAobWFya2VyKSBwb3VyIHVuIGLDonRpbWVudCBhdmVjIHNvbiBpbWFnZSBzcMOpY2lmaXF1ZS5cbiAqIEBwYXJhbSB7c3RyaW5nfSBidWlsZGluZ0NvZGUgLSBMZSBjb2RlIGR1IGLDonRpbWVudCAoZXg6IFwiYmFzZVwiLCBcImlyb25fbWluZVwiKS5cbiAqIEByZXR1cm5zIHtMLkljb259IEwnaWPDtG5lIExlYWZsZXQgcGVyc29ubmFsaXPDqWUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVCdWlsZGluZ0ljb24oYnVpbGRpbmdDb2RlKSB7XG4gICAgY29uc3QgZmFjdGlvbiA9IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uKCk7XG4gICAgY29uc3Qgc2l6ZSA9IDcwOyAvLyBUYWlsbGUgcGFyIGTDqWZhdXQgZGVzIGljw7RuZXNcblxuICAgIHJldHVybiBMLmljb24oe1xuICAgICAgICBpY29uVXJsOiBnZXRCdWlsZGluZ0ltYWdlKGZhY3Rpb24sIGJ1aWxkaW5nQ29kZSksXG4gICAgICAgIGljb25TaXplOiBbc2l6ZSwgc2l6ZV0sXG4gICAgICAgIGljb25BbmNob3I6IFtzaXplIC8gMiwgc2l6ZSAvIDJdLFxuICAgICAgICBwb3B1cEFuY2hvcjogWzAsIC1zaXplIC8gMl1cbiAgICB9KTtcbn1cblxuLyoqXG4gKiBSZXRvdXJuZSBkeW5hbWlxdWVtZW50IGxlIGNoZW1pbiBkZSBsJ2ltYWdlIGF2ZWMgZmFsbGJhY2sgdmVycyBkZWZhdWx0LlxuICogQHBhcmFtIHtzdHJpbmd9IGZhY3Rpb24gLSBMZSBjb2RlIG91IG5vbSBkZSBsYSBmYWN0aW9uIChleDogXCJFbXBpcmVcIiwgXCJDZW5kcmVzXCIpLlxuICogQHBhcmFtIHtzdHJpbmd9IGJ1aWxkaW5nIC0gTGUgY29kZSBkdSBiw6J0aW1lbnQgKGV4OiBcImJhc2VcIiwgXCJpcm9uX21pbmVcIikuXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBMZSBjaGVtaW4gZGUgbCdpY8O0bmUuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ0ltYWdlKGZhY3Rpb24sIGJ1aWxkaW5nKSB7XG4gICAgLy8gTm9ybWFsaXNlciBsZSBub20gZHUgYnVpbGRpbmcgcG91ciBsJ2ltYWdlIChyZW1wbGFjZXIgZXNwYWNlcyBldCBjYXJhY3TDqHJlcyBzcMOpY2lhdXgpXG4gICAgY29uc3QgYnVpbGRpbmdTbHVnID0gYnVpbGRpbmcudG9Mb3dlckNhc2UoKS5yZXBsYWNlKC9cXHMrL2csICdfJykucmVwbGFjZSgvW15hLXowLTlfXS9nLCAnJyk7XG4gICAgY29uc3QgZmFjdGlvblNsdWcgPSAoZmFjdGlvbiB8fCAnZGVmYXVsdCcpLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAvLyBTaSBsYSBmYWN0aW9uIGVzdCAnZGVmYXVsdCcgb3UgaW52YWxpZGUsIHV0aWxpc2VyIGRpcmVjdGVtZW50IGwnaWPDtG5lIGRlZmF1bHRcbiAgICBpZiAoZmFjdGlvblNsdWcgPT09ICdkZWZhdWx0Jykge1xuICAgICAgICByZXR1cm4gYC9hc3NldHMvaW1hZ2VzL2J1aWxkaW5ncy9kZWZhdWx0LyR7YnVpbGRpbmdTbHVnfS5wbmdgO1xuICAgIH1cblxuICAgIC8vIEVzc2F5ZXIgZCdhYm9yZCBsJ2ljw7RuZSBkZSBsYSBmYWN0aW9uXG4gICAgLy8gTGUgc2VydmV1ciBvdSBsZSBuYXZpZ2F0ZXVyIGfDqXJlcmEgbGUgZmFsbGJhY2sgc2kgbCdpY8O0bmUgbidleGlzdGUgcGFzXG4gICAgLy8gUG91ciBmb3JjZXIgbGUgZmFsbGJhY2sgY8O0dMOpIGNsaWVudCwgdm91cyBwb3V2ZXo6XG4gICAgLy8gMS4gQ29uZmlndXJlciBsZSBzZXJ2ZXVyIHdlYiAoTmdpbngvQXBhY2hlKSBwb3VyIGZhaXJlIHVuIHRyeV9maWxlcyB2ZXJzIGRlZmF1bHRcbiAgICAvLyAyLiBVdGlsaXNlciB1bmUgcmVxdcOqdGUgSEVBRCBhc3luY29uZSBwb3VyIHbDqXJpZmllciBsJ2V4aXN0ZW5jZSAoY2/Du3RldXgpXG5cbiAgICByZXR1cm4gYC9hc3NldHMvaW1hZ2VzL2J1aWxkaW5ncy8ke2ZhY3Rpb25TbHVnfS8ke2J1aWxkaW5nU2x1Z30ucG5nYDtcbn1cblxuLyoqXG4gKiBBbcOpbGlvcmUgdW4gYsOidGltZW50XG4gKi9cbndpbmRvdy51cGdyYWRlQnVpbGRpbmcgPSBhc3luYyBmdW5jdGlvbihidWlsZGluZ0lkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB1cGdyYWRlQnVpbGRpbmcoYnVpbGRpbmdJZCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG5cbiAgICAgICAgaWYgKHJlc3BvbnNlLm9rKSB7XG4gICAgICAgICAgICAvLyBNZXR0cmUgw6Agam91ciBsZSBtYXJxdWV1clxuICAgICAgICAgICAgY29uc3QgZW50cnkgPSBidWlsZGluZ01hcmtlcnMuZ2V0KGJ1aWxkaW5nSWQpO1xuICAgICAgICAgICAgaWYgKGVudHJ5KSB7XG4gICAgICAgICAgICAgICAgZW50cnkuZGF0YS5sZXZlbCA9IGRhdGEubmV3TGV2ZWw7XG4gICAgICAgICAgICAgICAgY29uc3QgbWFya2VyID0gZW50cnkubWFya2VyO1xuICAgICAgICAgICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoZW50cnkuZGF0YSkpO1xuXG4gICAgICAgICAgICAgICAgLy8gUmVjaGFyZ2VyIGxlcyBpbmZvcyBkJ2Ftw6lsaW9yYXRpb25cbiAgICAgICAgICAgICAgICBsb2FkVXBncmFkZUluZm9Bc3luYyhidWlsZGluZ0lkLCBtYXJrZXIsIGVudHJ5LmRhdGEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWxlcnQoJ0LDonRpbWVudCBhbcOpbGlvcsOpIGF2ZWMgc3VjY8OocyAhJyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIkVycmV1cjogXCIgKyAoZGF0YS5lcnJvciB8fCBcIkltcG9zc2libGUgZCdhbcOpbGlvcmVyIGxlIGLDonRpbWVudFwiKSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2Ftw6lsaW9yYXRpb25cIiwgZSk7XG4gICAgICAgIGFsZXJ0KFwiRXJyZXVyIHLDqXNlYXUgbG9ycyBkZSBsJ2Ftw6lsaW9yYXRpb25cIik7XG4gICAgfVxufTtcblxuLyoqXG4gKiBSZXRvdXJuZSBsZXMgaW5mb3JtYXRpb25zIHN1ciBsZXMgY2/Du3RzIGRlIGNvbnN0cnVjdGlvbiBkJ3VuIHR5cGUgZGUgYsOidGltZW50XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRCdWlsZGluZ1R5cGVDb3N0cyhidWlsZGluZ1R5cGVJZCkge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZ2V0QnVpbGRpbmdDb3N0cyhidWlsZGluZ1R5cGVJZCk7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCBlKTtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxufVxuXG4vKipcbiAqIFbDqXJpZmllIHNpIGxlIGpvdWV1ciBwZXV0IGNvbnN0cnVpcmUgdW4gYsOidGltZW50XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjYW5CdWlsZEJ1aWxkaW5nKGJ1aWxkaW5nVHlwZUlkKSB7XG4gICAgY29uc3QgY29zdHMgPSBhd2FpdCBnZXRCdWlsZGluZ1R5cGVDb3N0cyhidWlsZGluZ1R5cGVJZCk7XG4gICAgaWYgKCFjb3N0cykgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnL2FwaS9wbGF5ZXItcmVzb3VyY2VzJyk7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgIGNvbnN0IHJlc291cmNlcyA9IHt9O1xuICAgIGRhdGEucmVzb3VyY2VzLmZvckVhY2gociA9PiB7XG4gICAgICAgIHJlc291cmNlc1tyLnR5cGVdID0gci5xdWFudGl0eTtcbiAgICB9KTtcblxuICAgIGZvciAoY29uc3QgW3Jlc291cmNlLCBhbW91bnRdIG9mIE9iamVjdC5lbnRyaWVzKGNvc3RzLmNvc3RzKSkge1xuICAgICAgICBpZiAoKHJlc291cmNlc1tyZXNvdXJjZV0gfHwgMCkgPCBhbW91bnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0cnVlO1xufSIsImltcG9ydCB7IGluaXRNYXAsIGxvYWRXb3JsZCwgbWFwIH0gZnJvbSAnLi9tYXAuanMnO1xuaW1wb3J0IHsgaW5pdEdQUyB9IGZyb20gJy4vZ3BzLmpzJztcbmltcG9ydCB7IGluaXRCYXNlVUkgfSBmcm9tICcuL2Jhc2UuanMnO1xuaW1wb3J0IHsgaW5pdEJ1aWxkTW9kZSwgaXNCdWlsZE1vZGVBY3RpdmUgfSBmcm9tICcuL2J1aWxkTW9kZS5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG5cbiAgICBlbmFibGVMZWFmbGV0RGVidWcoZmFsc2UpO1xuXG4gICAgY29uc3QgZGVmYXVsdExhdCA9IDQ2LjUzOTcyO1xuICAgIGNvbnN0IGRlZmF1bHRMbmcgPSAyLjQzMDI4O1xuXG4gICAgaW5pdE1hcChkZWZhdWx0TGF0LCBkZWZhdWx0TG5nKTtcblxuICAgIGluaXRCYXNlVUkoKTtcbiAgICBpbml0QnVpbGRNb2RlKCk7XG4gICAgbG9hZFdvcmxkKCk7XG59KTtcblxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUxlYWZsZXREZWJ1ZyhkZWJ1ZyA9IGZhbHNlKSB7XG5cbiAgICBpZiAoIWRlYnVnKSByZXR1cm47XG5cbiAgICBjb25zdCBvcmlnaW5hbE1hcmtlciA9IEwubWFya2VyO1xuICAgIGNvbnN0IG9yaWdpbmFsQ2lyY2xlID0gTC5jaXJjbGU7XG4gICAgY29uc3Qgb3JpZ2luYWxQb2x5bGluZSA9IEwucG9seWxpbmU7XG5cbiAgICBMLm1hcmtlciA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+nqCBNQVJLRVIgQ0FMTDpcIiwgYXJncyk7XG4gICAgICAgIGNvbnNvbGUudHJhY2UoXCJNQVJLRVIgU1RBQ0tcIik7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbE1hcmtlci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgTC5jaXJjbGUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfp6ggQ0lSQ0xFIENBTEw6XCIsIGFyZ3MpO1xuICAgICAgICBjb25zb2xlLnRyYWNlKFwiQ0lSQ0xFIFNUQUNLXCIpO1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxDaXJjbGUuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcblxuICAgIEwucG9seWxpbmUgPSBmdW5jdGlvbiAoLi4uYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyhcIvCfp6ggUE9MWUxJTkUgQ0FMTDpcIiwgYXJncyk7XG4gICAgICAgIGNvbnNvbGUudHJhY2UoXCJQT0xZTElORSBTVEFDS1wiKTtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsUG9seWxpbmUuYXBwbHkodGhpcywgYXJncyk7XG4gICAgfTtcbn0iLCJpbXBvcnQgeyBmbHlUbyB9IGZyb20gJy4vbWFwLmpzJztcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R1BTKGRlZmF1bHRMYXQsIGRlZmF1bHRMbmcpIHtcclxuICAgIGlmIChuYXZpZ2F0b3IuZ2VvbG9jYXRpb24pIHtcclxuICAgICAgICBsZXQgZ3BzRm91bmQgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgbmF2aWdhdG9yLmdlb2xvY2F0aW9uLndhdGNoUG9zaXRpb24oXHJcbiAgICAgICAgICAgIChwb3NpdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ3BzRm91bmQgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGZseVRvKFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvb3Jkcy5sYXRpdHVkZSxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbi5jb29yZHMubG9uZ2l0dWRlXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAoKSA9PiB7fSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGltZW91dDogNTAwMFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgKTtcclxuXHJcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZ3BzRm91bmQpIHtcclxuICAgICAgICAgICAgICAgIGZseVRvKGRlZmF1bHRMYXQsIGRlZmF1bHRMbmcsIDcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwgNTUwMCk7XHJcbiAgICB9XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi9MZWFmbGV0V3JhcHBlci5qcyc7XG5cbmltcG9ydCB7IGRlYnVnTG9nIH0gZnJvbSAnLi9Db25maWcvZGVidWcuanMnO1xuXG5pbXBvcnQgeyBncmlkTGF5ZXIsIGluaXRHcmlkTGF5ZXIgfSBmcm9tICcuL0xheWVycy9ncmlkTGF5ZXIuanMnO1xuaW1wb3J0IHsgbG9hZFZpc2libGVSb2FkQ2h1bmtzIH0gZnJvbSAnLi9Sb2Fkcy9yb2Fkcy5qcyc7XG5pbXBvcnQgeyByb2Fkc1N0YXRlIH0gZnJvbSAnLi9Sb2Fkcy9yb2Fkc1N0YXRlLmpzJztcblxuaW1wb3J0IHsgbG9hZEJhc2VGcm9tU2VydmVyLCBsb2FkT3RoZXJCYXNlLCBzZXRDdXJyZW50UGxheWVyRmFjdGlvbiB9IGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgeyBsb2FkQnVpbGRpbmdzRnJvbURhdGEgfSBmcm9tICcuL2J1aWxkaW5nLmpzJztcblxuaW1wb3J0IHsgaW5pdERlcG9zaXRMYXllcnMsIGRlcG9zaXRMYXllcnMgfSBmcm9tICcuL01hcC9kZXBvc2l0cy5qcyc7XG5cbmltcG9ydCBtYXJrZXJJY29uIGZyb20gJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJztcbmltcG9ydCBtYXJrZXJTaGFkb3cgZnJvbSAnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItc2hhZG93LnBuZyc7XG5cbkwuTWFya2VyLnByb3RvdHlwZS5vcHRpb25zLmljb24gPSBMLmljb24oe1xuICAgIGljb25Vcmw6IG1hcmtlckljb24sXG4gICAgc2hhZG93VXJsOiBtYXJrZXJTaGFkb3csXG59KTtcblxubGV0IG1hcEluc3RhbmNlID0gbnVsbDtcbmxldCBtb3ZlVGltZW91dCA9IG51bGw7XG5sZXQgaXNDaHVua01vZGUgPSBmYWxzZTtcblxuZXhwb3J0IGZ1bmN0aW9uIGluaXRNYXAobGF0LCBsbmcpIHtcblxuICAgIG1hcEluc3RhbmNlID0gTC5tYXAoJ21hcCcpLnNldFZpZXcoW2xhdCwgbG5nXSwgNyk7XG5cbiAgICBMLnRpbGVMYXllcignaHR0cHM6Ly97c30udGlsZS5vcGVuc3RyZWV0bWFwLm9yZy97en0ve3h9L3t5fS5wbmcnLCB7XG4gICAgICAgIGF0dHJpYnV0aW9uOiAnJmNvcHk7IE9wZW5TdHJlZXRNYXAnXG4gICAgfSkuYWRkVG8obWFwSW5zdGFuY2UpO1xuXG4gICAgY29uc3QgbGF5ZXJzQ29udHJvbCA9IEwuY29udHJvbC5sYXllcnMobnVsbCwge1xuICAgICAgICBcIkNodW5rIEdyaWRcIjogZ3JpZExheWVyXG4gICAgfSkuYWRkVG8obWFwSW5zdGFuY2UpO1xuXG4gICAgaW5pdERlcG9zaXRMYXllcnMobWFwSW5zdGFuY2UsIGxheWVyc0NvbnRyb2wpO1xuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gQ0VOVFJBTCBDSFVOSyBDT05UUk9MTEVSXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XG5cbiAgICBtYXBJbnN0YW5jZS5vbignbW92ZWVuZCcsICgpID0+IHtcblxuICAgICAgICBpZiAoIWlzQ2h1bmtNb2RlKSByZXR1cm47XG4gICAgICAgIGlmIChtYXBJbnN0YW5jZS5nZXRab29tKCkgPCAxNCkgcmV0dXJuO1xuXG4gICAgICAgIGNsZWFyVGltZW91dChtb3ZlVGltZW91dCk7XG5cbiAgICAgICAgbW92ZVRpbWVvdXQgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIGluaXRHcmlkTGF5ZXIoKTtcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xuICAgICAgICB9LCAzMDApO1xuICAgIH0pO1xuXG4gICAgbWFwSW5zdGFuY2Uub24oJ292ZXJsYXlhZGQnLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5sYXllciA9PT0gZ3JpZExheWVyKSB7XG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImdyaWRcIiwgXCJHcmlkIE9OXCIpO1xuXG4gICAgICAgICAgICBpbml0R3JpZExheWVyKCk7XG4gICAgICAgICAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgbWFwSW5zdGFuY2Uub24oJ292ZXJsYXlyZW1vdmUnLCAoZSkgPT4ge1xuICAgICAgICBpZiAoZS5sYXllciA9PT0gZ3JpZExheWVyKSB7XG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImdyaWRcIiwgXCJHcmlkIE9GRlwiKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XG4gICAgLy8gRVZFTlRTXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09XG4gICAgbWFwSW5zdGFuY2Uub24oJ3pvb21lbmQnLCAoKSA9PiB7XG5cbiAgICAgICAgY29uc3Qgem9vbSA9IG1hcEluc3RhbmNlLmdldFpvb20oKTtcblxuICAgICAgICBpZiAoem9vbSA+PSAxNCkge1xuICAgICAgICAgICAgZW50ZXJDaHVua01vZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4aXRDaHVua01vZGUoKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNHcmlkTGF5ZXJBY3RpdmUoKSB7XG4gICAgcmV0dXJuIG1hcEluc3RhbmNlPy5oYXNMYXllcihncmlkTGF5ZXIpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWFwKCkge1xuICAgIHJldHVybiBtYXBJbnN0YW5jZTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGZseVRvKGxhdCwgbG5nLCB6b29tID0gMTMpIHtcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcbiAgICBtYXAuZmx5VG8oW2xhdCwgbG5nXSwgem9vbSwge1xuICAgICAgICBhbmltYXRlOiB0cnVlLFxuICAgICAgICBkdXJhdGlvbjogMS41XG4gICAgfSk7XG59XG5cbi8vID09PT09PT09PT09PT09PT09PT09PVxuLy8gV09STEQgTE9BREVSIChDb25jZW50cmF0ZXVyIGQnYXBwZWxzIEFQSSlcbi8vID09PT09PT09PT09PT09PT09PT09PVxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRXb3JsZCgpIHtcblxuICAgIGZldGNoKCcvYXBpL3dvcmxkLXN0YXRlJylcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC50aGVuKGRhdGEgPT4ge1xuICAgICAgICAgICAgLy8gQ2hhcmdlciBsZXMgYsOidGltZW50cyB2aWEgYnVpbGRpbmcuanNcbiAgICAgICAgICAgIGxvYWRCdWlsZGluZ3NGcm9tRGF0YShkYXRhLmJ1aWxkaW5ncyk7XG5cbiAgICAgICAgICAgIC8vIENoYXJnZXIgbGVzIGJhc2VzIHZpYSBiYXNlLmpzXG4gICAgICAgICAgICBpZiAoZGF0YS5wbGF5ZXJzKSB7XG4gICAgICAgICAgICAgICAgbGV0IGhhc0NlbnRlcmVkID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICBkYXRhLnBsYXllcnMuZm9yRWFjaChwbGF5ZXIgPT4ge1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwbGF5ZXIuaXNNZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0Q3VycmVudFBsYXllckZhY3Rpb24ocGxheWVyLmZhY3Rpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZEJhc2VGcm9tU2VydmVyKHBsYXllci5sYXQsIHBsYXllci5sbmcpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWhhc0NlbnRlcmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmx5VG8ocGxheWVyLmxhdCwgcGxheWVyLmxuZywgMTYpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc0NlbnRlcmVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgbG9hZE90aGVyQmFzZShwbGF5ZXIubGF0LCBwbGF5ZXIubG5nLCBwbGF5ZXIucHNldWRvLCBwbGF5ZXIuZmFjdGlvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb2FkIHdvcmxkXCIsIGVycik7XG4gICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBlbnRlckNodW5rTW9kZSgpIHtcbiAgICBpZiAoaXNDaHVua01vZGUpIHJldHVybjtcblxuICAgIGlzQ2h1bmtNb2RlID0gdHJ1ZTtcblxuICAgIGRlYnVnTG9nKFwiY2h1bmtzXCIsIFwiRU5URVIgQ0hVTksgTU9ERVwiKTtcblxuICAgIGluaXRHcmlkTGF5ZXIoKTtcbiAgICBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKTtcbn1cblxuZnVuY3Rpb24gZXhpdENodW5rTW9kZSgpIHtcbiAgICBpZiAoIWlzQ2h1bmtNb2RlKSByZXR1cm47XG5cbiAgICBpc0NodW5rTW9kZSA9IGZhbHNlO1xuXG4gICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCJFWElUIENIVU5LIE1PREVcIik7XG5cbiAgICBpZiAobWFwSW5zdGFuY2UuaGFzTGF5ZXIoZ3JpZExheWVyKSkge1xuICAgICAgICBtYXBJbnN0YW5jZS5yZW1vdmVMYXllcihncmlkTGF5ZXIpO1xuICAgIH1cbn0iLCJpbXBvcnQgTCBmcm9tICdsZWFmbGV0JztcclxuaW1wb3J0ICdsZWFmbGV0L2Rpc3QvbGVhZmxldC5jc3MnO1xyXG5cclxuZGVsZXRlIEwuSWNvbi5EZWZhdWx0LnByb3RvdHlwZS5fZ2V0SWNvblVybDtcclxuTC5JY29uLkRlZmF1bHQubWVyZ2VPcHRpb25zKHtcclxuICAgIGljb25SZXRpbmFVcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24tMngucG5nJyksXHJcbiAgICBpY29uVXJsOiByZXF1aXJlKCdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1pY29uLnBuZycpLFxyXG4gICAgc2hhZG93VXJsOiByZXF1aXJlKCdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJyksXHJcbn0pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTDsiXSwibmFtZXMiOlsiQ0FDSEVfVkVSU0lPTiIsImdldENhY2hlS2V5IiwiY2h1bmtJZCIsImNvbmNhdCIsImUiLCJ0IiwiciIsIlN5bWJvbCIsIm4iLCJpdGVyYXRvciIsIm8iLCJ0b1N0cmluZ1RhZyIsImkiLCJjIiwicHJvdG90eXBlIiwiR2VuZXJhdG9yIiwidSIsIk9iamVjdCIsImNyZWF0ZSIsIl9yZWdlbmVyYXRvckRlZmluZTIiLCJmIiwicCIsInkiLCJHIiwidiIsImEiLCJkIiwiYmluZCIsImxlbmd0aCIsImwiLCJUeXBlRXJyb3IiLCJjYWxsIiwiZG9uZSIsInZhbHVlIiwiR2VuZXJhdG9yRnVuY3Rpb24iLCJHZW5lcmF0b3JGdW5jdGlvblByb3RvdHlwZSIsImdldFByb3RvdHlwZU9mIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJkaXNwbGF5TmFtZSIsIl9yZWdlbmVyYXRvciIsInciLCJtIiwiZGVmaW5lUHJvcGVydHkiLCJfcmVnZW5lcmF0b3JEZWZpbmUiLCJfaW52b2tlIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiYXN5bmNHZW5lcmF0b3JTdGVwIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0aGVuIiwiX2FzeW5jVG9HZW5lcmF0b3IiLCJhcmd1bWVudHMiLCJhcHBseSIsIl9uZXh0IiwiX3Rocm93IiwiZ2V0TWFwIiwicmVmcmVzaENodW5rIiwiaW52YWxpZGF0ZUNodW5rIiwiZGVidWdMb2ciLCJkZWJ1Z0Vycm9yIiwic25hcFRvQ2h1bmsiLCJDSFVOS19TSVpFIiwiQ0hVTktfUkFESVVTIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImFkZEV2ZW50TGlzdGVuZXIiLCJtYXAiLCJnZXRDb250YWluZXIiLCJzdHlsZSIsImN1cnNvciIsImFsZXJ0Iiwib25jZSIsIl9yZWYiLCJfY2FsbGVlIiwiX2UkbGF0bG5nIiwibGF0IiwibG5nIiwic25hcHBlZCIsIl90IiwiX2NvbnRleHQiLCJsYXRsbmciLCJmZXRjaCIsIm1ldGhvZCIsImhlYWRlcnMiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsIl94IiwiVFlQRV9NQVAiLCJERUJVRyIsImVuYWJsZWQiLCJjaHVua3MiLCJuZXR3b3JrIiwiY2FjaGUiLCJ0eXBlIiwiX2NvbnNvbGUyIiwiX2xlbiIsImFyZ3MiLCJBcnJheSIsIl9rZXkiLCJfY29uc29sZSIsImNvbnNvbGUiLCJsb2ciLCJfY29uc29sZTMiLCJrZXkiLCJfbGVuMiIsIl9rZXkyIiwiZXJyb3IiLCJST0FEIiwiQ0hVTksiLCJCVUlMRElORyIsIkwiLCJpc0dyaWRMYXllckFjdGl2ZSIsImdyaWRMYXllciIsImxheWVyR3JvdXAiLCJ2aXNpYmxlQ2h1bmtzIiwiTWFwIiwiaW5pdEdyaWRMYXllciIsInpvb20iLCJnZXRab29tIiwiYm91bmRzIiwiZ2V0Qm91bmRzIiwibWluTGF0IiwiTWF0aCIsImZsb29yIiwiZ2V0U291dGgiLCJtYXhMYXQiLCJjZWlsIiwiZ2V0Tm9ydGgiLCJtaW5MbmciLCJnZXRXZXN0IiwibWF4TG5nIiwiZ2V0RWFzdCIsIm5ld1Zpc2libGUiLCJTZXQiLCJfbG9vcCIsImlkIiwiaiIsImFkZCIsImhhcyIsInJlY3QiLCJyZWN0YW5nbGUiLCJjb2xvciIsIndlaWdodCIsImZpbGxPcGFjaXR5Iiwib24iLCJzZXRTdHlsZSIsImFkZExheWVyIiwic2V0IiwiX2l0ZXJhdG9yIiwiX2NyZWF0ZUZvck9mSXRlcmF0b3JIZWxwZXIiLCJlbnRyaWVzIiwiX3N0ZXAiLCJzIiwiX3N0ZXAkdmFsdWUiLCJfc2xpY2VkVG9BcnJheSIsInJlbW92ZUxheWVyIiwiZXJyIiwic2l6ZSIsInNldENodW5rQ29sb3IiLCJnZXQiLCJkZXBvc2l0TWFya2VycyIsImJ1aWxkaW5nVHlwZXNDYWNoZSIsInJlc291cmNlVHlwZXNDYWNoZSIsImxvYWRCdWlsZGluZ1R5cGVzIiwiX2xvYWRCdWlsZGluZ1R5cGVzIiwiX2NhbGxlZTIiLCJyZXNwb25zZSIsIl90MyIsIl9jb250ZXh0MiIsImpzb24iLCJsb2FkUmVzb3VyY2VUeXBlcyIsIl9sb2FkUmVzb3VyY2VUeXBlcyIsIl9jYWxsZWUzIiwiX3Q0IiwiX2NvbnRleHQzIiwiREVGQVVMVF9DT0xPUlMiLCJnZXRSZXNvdXJjZUNvbG9yIiwiX3Jlc291cmNlVHlwZXNDYWNoZSR0IiwiX3Jlc291cmNlVHlwZXNDYWNoZSR0MiIsImZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZSIsIl9maW5kQnVpbGRpbmdUeXBlRm9yUmVzb3VyY2UiLCJfY2FsbGVlNCIsInJlc291cmNlVHlwZSIsImJ1aWxkaW5nVHlwZXMiLCJidWlsZGluZ1R5cGUiLCJfY29udGV4dDQiLCJmaW5kIiwiYnQiLCJfYnQkcmVzb3VyY2VUeXBlIiwicmVzb3VyY2VfdHlwZSIsImNvZGUiLCJwcm9kdWN0aW9uX3JhdGUiLCJkZXBvc2l0TGF5ZXJzIiwiaW5pdERlcG9zaXRMYXllcnMiLCJfeDIiLCJfeDMiLCJfaW5pdERlcG9zaXRMYXllcnMiLCJfY2FsbGVlNSIsImNvbnRyb2wiLCJyZXNvdXJjZVR5cGVzIiwiX2NvbnRleHQ1IiwiZm9yRWFjaCIsInJ0IiwiYWRkT3ZlcmxheSIsImxhYmVsIiwibG9hZERlcG9zaXRzRm9yQ2h1bmsiLCJfeDQiLCJfeDUiLCJfbG9hZERlcG9zaXRzRm9yQ2h1bmsiLCJfY2FsbGVlNiIsImRlcG9zaXRzIiwiX3Q1IiwiX2NvbnRleHQ2IiwicmVuZGVyRGVwb3NpdHNGcm9tRGF0YSIsImRlcG9zaXQiLCJsYXllciIsIndhcm4iLCJtYXJrZXIiLCJjaXJjbGVNYXJrZXIiLCJsYXRpdHVkZSIsImxvbmdpdHVkZSIsInJhZGl1cyIsImZpbGxDb2xvciIsIm9wYWNpdHkiLCJhZGRUbyIsImJpbmRQb3B1cCIsInRvVXBwZXJDYXNlIiwicmljaG5lc3MiLCJpc19jbGFpbWVkIiwid2luZG93IiwiY2xhaW1EZXBvc2l0IiwiYnVpbGRpbmdUeXBlSWQiLCJyZXNwb25zZVRleHQiLCJkYXRhIiwiX3QyIiwidHlwZV9pZCIsImRlcG9zaXRfaWQiLCJ0ZXh0IiwicGFyc2UiLCJFcnJvciIsIm9rIiwibG9jYXRpb24iLCJyZWxvYWQiLCJtZXNzYWdlIiwiX3g2IiwiX3g3Iiwicm9hZHNTdGF0ZSIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJmaW5kQ2xvc2VzdFBvaW50T25Sb2FkIiwicm9hZHMiLCJiZXN0UG9pbnQiLCJiZXN0RGlzdGFuY2UiLCJJbmZpbml0eSIsImlzQXJyYXkiLCJwb2ludCIsImRpc3RhbmNlIiwicm9hZCIsInBvaW50cyIsImFSYXciLCJiUmF3IiwibGF0TG5nIiwiYiIsInByb2plY3RlZCIsInByb2plY3RQb2ludE9uU2VnbWVudCIsImRpc3QiLCJmaW5kQ2xvc2VzdFNlZ21lbnQiLCJiZXN0U2VnbWVudCIsIm1pZCIsIkEiLCJCIiwiUCIsIkFCIiwiQVAiLCJhYjIiLCJtYXgiLCJtaW4iLCJkaXN0YW5jZVRvU2VnbWVudCIsImRlYnVnUm9hZHMiLCJfYXJyYXlXaXRoSG9sZXMiLCJfaXRlcmFibGVUb0FycmF5TGltaXQiLCJfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkiLCJfbm9uSXRlcmFibGVSZXN0IiwibmV4dCIsInB1c2giLCJfbiIsIkYiLCJfYXJyYXlMaWtlVG9BcnJheSIsInRvU3RyaW5nIiwic2xpY2UiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJmcm9tIiwidGVzdCIsImxvYWRpbmdRdWV1ZSIsIk1BWF9DT05DVVJSRU5UIiwiYWN0aXZlUmVxdWVzdHMiLCJnZXRDaHVua0lkIiwieCIsImxvYWRWaXNpYmxlUm9hZENodW5rcyIsIl9sb2FkVmlzaWJsZVJvYWRDaHVua3MiLCJjaHVua3NUb0xvYWQiLCJmaW5hbENodW5rc1RvTG9hZCIsIl9pdGVyYXRvcjIiLCJfc3RlcDIiLCJfY2h1bmtJZDMiLCJfY2FjaGVLZXkiLCJjYWNoZWQiLCJfaSIsIl9maW5hbENodW5rc1RvTG9hZCIsIl95aWVsZCRQcm9taXNlJGFsbCIsIl95aWVsZCRQcm9taXNlJGFsbDIiLCJyb2Fkc1Jlc3BvbnNlIiwiYnVpbGRpbmdzUmVzcG9uc2UiLCJkZXBvc2l0c1Jlc3BvbnNlIiwicm9hZHNEYXRhIiwiYnVpbGRpbmdzRGF0YSIsImRlcG9zaXRzRGF0YSIsImJ1aWxkaW5nc0J5Q2h1bmsiLCJfaTIiLCJfZmluYWxDaHVua3NUb0xvYWQyIiwiX3JvYWRzRGF0YSRfY2h1bmtJZCIsIl9idWlsZGluZ3NEYXRhJF9jaHVuayIsIl9jaHVua0lkIiwiY2h1bmtEYXRhIiwiaGFzUm9hZHMiLCJjYWNoZUtleSIsIl9pdGVyYXRvcjMiLCJfc3RlcDMiLCJfY2h1bmtJZDIiLCJnZXRWaXNpYmxlQ2h1bmtzIiwiZmlsdGVyIiwibG9hZGVkQ2h1bmtzIiwiZ2V0SXRlbSIsIkRhdGUiLCJub3ciLCJ0cyIsInN0YXR1cyIsImJ1aWxkaW5ncyIsInJlZnJlc2hDaHVua0NvbG9ycyIsImFsbCIsImNJZCIsInNldEl0ZW0iLCJjaHVuayIsIl9yZWZyZXNoQ2h1bmsiLCJmZXRjaFNpbmdsZUNodW5rIiwiX2ZldGNoU2luZ2xlQ2h1bmsiLCJfcm9hZHNEYXRhJGNodW5rSWQiLCJfYnVpbGRpbmdzRGF0YSRjaHVua0kiLCJfeWllbGQkUHJvbWlzZSRhbGwzIiwiX3lpZWxkJFByb21pc2UkYWxsNCIsInJvYWRzUmVzIiwiYnVpbGRpbmdzUmVzIiwiZGVwb3NpdHNSZXMiLCJjaHVua0RlcG9zaXRzIiwibWluWCIsIm1heFgiLCJtaW5ZIiwibWF4WSIsInJvYWRzUmVhZHkiLCJkcmF3blJvYWRzIiwicm9hZExheWVycyIsImJ1aWxkaW5nTGF5ZXJzIiwiY2FjaGVkUm9hZHMiLCJjYWNoZURpcnR5IiwibWFya1JvYWRDYWNoZURpcnR5IiwiZ2V0QWxsTG9hZGVkUm9hZHMiLCJ2YWx1ZXMiLCJmbGF0TWFwIiwic2hvd05vdGlmaWNhdGlvbiIsInVuZGVmaW5lZCIsIm5vdGlmIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRleHRDb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJzZXRUaW1lb3V0IiwicmVtb3ZlIiwiZ2V0QWRtaW5Db29yZHMiLCJmb3JtYXQiLCJ0b0ZpeGVkIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiYnVpbGRSZXF1ZXN0IiwidHlwZUlkIiwiZ2V0QnVpbGRpbmdzIiwicmVzIiwiZ2V0QnVpbGRpbmdDb3N0cyIsInVwZ3JhZGVCdWlsZGluZyIsImJ1aWxkaW5nSWQiLCJnZXRVcGdyYWRlSW5mbyIsImZseVRvIiwiZ2V0QnVpbGRpbmdJbWFnZSIsInNhZmVMb2FkQ2h1bmsiLCJiYXNlTWFya2VyIiwiYmFzZUNpcmNsZSIsImJhc2VQb3NpdGlvbiIsImJhc2VDcmVhdGVkIiwicGxhY2luZ0Jhc2UiLCJwcmV2aWV3TWFya2VyIiwicHJldmlld0NpcmNsZSIsInByZXZpZXdTbmFwTGF0TG5nIiwicHJldmlld0xpbmUiLCJoaWdobGlnaHRlZFNlZ21lbnQiLCJjdXJyZW50UGxheWVyRmFjdGlvbiIsInNldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIiwiZmFjdGlvbiIsInRvTG93ZXJDYXNlIiwiZ2V0Q3VycmVudFBsYXllckZhY3Rpb24iLCJpbml0QmFzZVVJIiwiYmFzZUJ0biIsIm1vZGUiLCJkYXRhc2V0IiwiX3ByZXZpZXdTbmFwTGF0TG5nIiwiaXNCYXNlUGxhY2VtZW50VmFsaWQiLCJjbGVhbnVwUHJldmlldyIsImNyZWF0ZUJhc2UiLCJyZXN1bHQiLCJpc1ZhbGlkIiwiY2lyY2xlIiwicG9seWxpbmUiLCJkYXNoQXJyYXkiLCJzZWdtZW50IiwidXBkYXRlQmFzZURpc3BsYXkiLCJ1cGRhdGVPdGhlckJhc2VzIiwiZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyIiwib3RoZXJCYXNlcyIsImV2ZXJ5IiwiYmFzZSIsImJhc2VUeXBlSWQiLCJyZW1vdmVCYXNlIiwibG9hZE90aGVyQmFzZSIsInBzZXVkbyIsIk51bWJlciIsImlzRmluaXRlIiwiaWNvbiIsImNyZWF0ZUJhc2VJY29uIiwiaGFzTGF5ZXIiLCJzZXRJY29uIiwibG9hZEJhc2VGcm9tU2VydmVyIiwiaWNvblVybCIsImljb25TaXplIiwiaWNvbkFuY2hvciIsInBvcHVwQW5jaG9yIiwic2VsZWN0ZWRCdWlsZGluZ1R5cGUiLCJwcmV2aWV3QnVpbGRpbmdNYXJrZXIiLCJpbml0QnVpbGRNb2RlIiwiYnRuIiwidGFyZ2V0IiwiY2xvc2VzdCIsInNlbGVjdEJ1aWxkaW5nVHlwZSIsIm9uTWFwQ2xpY2siLCJvbk1hcE1vdXNlTW92ZSIsIl9zZWxlY3RCdWlsZGluZ1R5cGUiLCJidXR0b24iLCJjbGVhckJ1aWxkaW5nU2VsZWN0aW9uIiwiY2xhc3NMaXN0IiwiY29zdHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiX29uTWFwQ2xpY2siLCJzZXRMYXRMbmciLCJhY3RpdmF0ZUJ1aWxkTW9kZSIsInF1ZXJ5U2VsZWN0b3IiLCJjbGljayIsImRlYWN0aXZhdGVCdWlsZE1vZGUiLCJpc0J1aWxkTW9kZUFjdGl2ZSIsImJ1aWxkaW5nTWFya2VycyIsImxvYWRCdWlsZGluZ3NGcm9tRGF0YSIsIl9iJHR5cGUiLCJjcmVhdGVCdWlsZGluZ0ljb24iLCJidWlsZGluZ0RhdGEiLCJsZXZlbCIsImNyZWF0ZVNpbXBsZVBvcHVwIiwibG9hZFVwZ3JhZGVJbmZvQXN5bmMiLCJidWlsZGluZyIsIl9sb2FkVXBncmFkZUluZm9Bc3luYyIsIl91cGdyYWRlSW5mbyRjYW5VcGdyYSIsIl91cGdyYWRlSW5mbyRtYXhMZXZlbCIsIl91cGdyYWRlSW5mbyRuZWVkZWQiLCJfdXBncmFkZUluZm8kYXZhaWxhYmwiLCJ1cGdyYWRlSW5mbyIsImNhblVwZ3JhZGUiLCJtYXhMZXZlbCIsIm5lZWRlZCIsImF2YWlsYWJsZSIsImNvc3RzSHRtbCIsIl9PYmplY3QkZW50cmllcyIsIl9PYmplY3QkZW50cmllcyRfaSIsInJlc291cmNlIiwiYW1vdW50IiwiY2xzIiwicG9wdXBDb250ZW50Iiwic2V0UG9wdXBDb250ZW50Iiwia2V5cyIsImxvYWRCdWlsZGluZ3MiLCJidWlsZGluZ0NvZGUiLCJidWlsZGluZ1NsdWciLCJyZXBsYWNlIiwiZmFjdGlvblNsdWciLCJlbnRyeSIsIm5ld0xldmVsIiwiZ2V0QnVpbGRpbmdUeXBlQ29zdHMiLCJfZ2V0QnVpbGRpbmdUeXBlQ29zdHMiLCJjYW5CdWlsZEJ1aWxkaW5nIiwiX2NhbkJ1aWxkQnVpbGRpbmciLCJyZXNvdXJjZXMiLCJfT2JqZWN0JGVudHJpZXMyIiwiX09iamVjdCRlbnRyaWVzMiRfaSIsInF1YW50aXR5IiwiaW5pdE1hcCIsImxvYWRXb3JsZCIsImluaXRHUFMiLCJlbmFibGVMZWFmbGV0RGVidWciLCJkZWZhdWx0TGF0IiwiZGVmYXVsdExuZyIsImRlYnVnIiwib3JpZ2luYWxNYXJrZXIiLCJvcmlnaW5hbENpcmNsZSIsIm9yaWdpbmFsUG9seWxpbmUiLCJ0cmFjZSIsIl9sZW4zIiwiX2tleTMiLCJnZW9sb2NhdGlvbiIsImdwc0ZvdW5kIiwid2F0Y2hQb3NpdGlvbiIsInBvc2l0aW9uIiwiY29vcmRzIiwidGltZW91dCIsIm1hcmtlckljb24iLCJtYXJrZXJTaGFkb3ciLCJNYXJrZXIiLCJvcHRpb25zIiwic2hhZG93VXJsIiwibWFwSW5zdGFuY2UiLCJtb3ZlVGltZW91dCIsImlzQ2h1bmtNb2RlIiwic2V0VmlldyIsInRpbGVMYXllciIsImF0dHJpYnV0aW9uIiwibGF5ZXJzQ29udHJvbCIsImxheWVycyIsImNsZWFyVGltZW91dCIsImVudGVyQ2h1bmtNb2RlIiwiZXhpdENodW5rTW9kZSIsIl9tYXBJbnN0YW5jZSIsImFuaW1hdGUiLCJkdXJhdGlvbiIsInBsYXllcnMiLCJoYXNDZW50ZXJlZCIsInBsYXllciIsImlzTWUiLCJJY29uIiwiRGVmYXVsdCIsIl9nZXRJY29uVXJsIiwibWVyZ2VPcHRpb25zIiwiaWNvblJldGluYVVybCIsInJlcXVpcmUiXSwic291cmNlUm9vdCI6IiJ9