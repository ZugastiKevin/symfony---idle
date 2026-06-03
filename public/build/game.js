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
          // Chercher un bâtiment qui produit cette ressource
          buildingType = buildingTypes.find(function (bt) {
            var _bt$resourceType;
            return (bt.resource_type === resourceType || ((_bt$resourceType = bt.resourceType) === null || _bt$resourceType === void 0 ? void 0 : _bt$resourceType.code) === resourceType) && bt.base_cost > 0;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDLFVBQUEzUCxHQUFHLEVBQUk7SUFDVnhELE9BQU8sQ0FBQ00sS0FBSyxDQUFDLG1CQUFtQixFQUFFa0QsR0FBRyxDQUFDO0VBQzNDLENBQUMsQ0FBQztBQUNWO0FBRUEsU0FBU21ZLGNBQWNBLENBQUEsRUFBRztFQUN0QixJQUFJUCxXQUFXLEVBQUU7RUFFakJBLFdBQVcsR0FBRyxJQUFJO0VBRWxCL2QsMkRBQVEsQ0FBQyxRQUFRLEVBQUUsa0JBQWtCLENBQUM7RUFFdEMyRCxvRUFBYSxDQUFDLENBQUM7RUFDZnVMLHVFQUFxQixDQUFDLENBQUM7QUFDM0I7QUFFQSxTQUFTcVAsYUFBYUEsQ0FBQSxFQUFHO0VBQ3JCLElBQUksQ0FBQ1IsV0FBVyxFQUFFO0VBRWxCQSxXQUFXLEdBQUcsS0FBSztFQUVuQi9kLDJEQUFRLENBQUMsUUFBUSxFQUFFLGlCQUFpQixDQUFDO0VBRXJDLElBQUk2ZCxXQUFXLENBQUNoRyxRQUFRLENBQUN0VSw0REFBUyxDQUFDLEVBQUU7SUFDakNzYSxXQUFXLENBQUMzWCxXQUFXLENBQUMzQyw0REFBUyxDQUFDO0VBQ3RDO0FBQ0osQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqS3dCO0FBQ1U7QUFFbEMsT0FBT0YscURBQU0sQ0FBQzJiLE9BQU8sQ0FBQy9oQixTQUFTLENBQUNnaUIsV0FBVztBQUMzQzViLG1EQUFNLENBQUMyYixPQUFPLENBQUNFLFlBQVksQ0FBQztFQUN4QkMsYUFBYSxFQUFFQyxtQkFBTyxDQUFDLHFHQUF3QyxDQUFDO0VBQ2hFcEgsT0FBTyxFQUFFb0gsbUJBQU8sQ0FBQywrRkFBcUMsQ0FBQztFQUN2RHhCLFNBQVMsRUFBRXdCLG1CQUFPLENBQUMsbUdBQXVDO0FBQzlELENBQUMsQ0FBQztBQUVGLGlFQUFlL2IsZ0RBQUMsRSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvQ29uZmlnL2NhY2hlVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Db25maWcvY2h1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Db25maWcvZGVidWcuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Db25maWcvdHlwZU1hcC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL0xheWVycy9ncmlkTGF5ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9NYXAvZGVwb3NpdHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Sb2Fkcy9pbnZhbGlkYXRlQ2h1bmsuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Sb2Fkcy9yb2FkVXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9Sb2Fkcy9yb2Fkcy5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL1JvYWRzL3JvYWRzU3RhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9VSS9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9VaS9ub3RpZmljYXRpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9VdGlscy9hZG1pbl9jbGlwYm9hcmQuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL3NjcmlwdHMvR2FtZS9VdGlscy9zbmFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvYXBpLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvYmFzZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkTW9kZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2NyaXB0cy9HYW1lL2J1aWxkaW5nLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvZ2FtZS1tYWluLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvZ3BzLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0dhbWUvbWFwLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3JpcHRzL0xlYWZsZXRXcmFwcGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IENBQ0hFX1ZFUlNJT04gPSAndjEnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldENhY2hlS2V5KGNodW5rSWQpIHtcclxuICAgIHJldHVybiBgJHtDQUNIRV9WRVJTSU9OfV9jaHVua18ke2NodW5rSWR9YDtcclxufSIsImltcG9ydCB7IGdldE1hcCB9IGZyb20gJy4uL21hcC5qcyc7XHJcbmltcG9ydCB7IHJlZnJlc2hDaHVuayB9IGZyb20gJy4uL1JvYWRzL3JvYWRzLmpzJztcclxuaW1wb3J0IHsgaW52YWxpZGF0ZUNodW5rIH0gZnJvbSAnLi4vUm9hZHMvaW52YWxpZGF0ZUNodW5rLmpzJztcclxuaW1wb3J0IHsgZGVidWdMb2csIGRlYnVnRXJyb3IgfSBmcm9tICcuL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgc25hcFRvQ2h1bmsgfSBmcm9tICcuLi9VdGlscy9zbmFwLmpzJztcclxuXHJcbmV4cG9ydCBjb25zdCBDSFVOS19TSVpFID0gMC4wMTtcclxuZXhwb3J0IGNvbnN0IENIVU5LX1JBRElVUyA9IDE7XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVxdWVzdEFwaVJvYWRzQW5kQ2h1bmtzQnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgbWFwLmdldENvbnRhaW5lcigpLnN0eWxlLmN1cnNvciA9ICdjcm9zc2hhaXInO1xyXG4gICAgYWxlcnQoXCJDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgZmFpcmUgdW5lIHJlcXVldGUgYXBpIHBvdXIgYWpvdXRlciB1biBjaHVuayBkZSByb3V0ZXMgKDAuMDHCsCB4IDAuMDHCsCkuXCIpO1xyXG5cclxuICAgIG1hcC5vbmNlKCdjbGljaycsIGFzeW5jIChlKSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IHsgbGF0LCBsbmcgfSA9IGUubGF0bG5nO1xyXG5cclxuICAgICAgICBjb25zdCBzbmFwcGVkID0gc25hcFRvQ2h1bmsobGF0LCBsbmcpO1xyXG5cclxuICAgICAgICBkZWJ1Z0xvZyhcIm5ldHdvcmtcIiwgXCLwn5OhIGFkZGluZyByb2FkcyBjaHVuazpcIiwgc25hcHBlZC5jaHVua0lkKTtcclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgZmV0Y2goJy9hcGkvYWRkLXJvYWRzLWNodW5rJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgICAgICAgICBsYXQ6IHNuYXBwZWQubGF0LFxyXG4gICAgICAgICAgICAgICAgICAgIGxuZzogc25hcHBlZC5sbmdcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcmVmcmVzaENodW5rKHNuYXBwZWQubGF0LCBzbmFwcGVkLmxuZyk7XHJcblxyXG4gICAgICAgICAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIvCflIQgY2h1bmsgcmVmcmVzaGVkOlwiLCBzbmFwcGVkLmNodW5rSWQpO1xyXG5cclxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgZGVidWdFcnJvcihcIm5ldHdvcmtcIiwgXCJmYWlsZWQgdG8gYWRkIHJvYWRzIGNodW5rXCIsIGVycik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbiAgICB9KTtcclxufSk7IiwiaW1wb3J0IHsgVFlQRV9NQVAgfSBmcm9tICcuL3R5cGVNYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IERFQlVHID0ge1xyXG4gICAgZW5hYmxlZDogdHJ1ZSxcclxuICAgIGNodW5rczogdHJ1ZSxcclxuICAgIG5ldHdvcms6IHRydWUsXHJcbiAgICBjYWNoZTogdHJ1ZVxyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGRlYnVnTG9nKHR5cGUsIC4uLmFyZ3MpIHtcclxuICAgIGlmICghREVCVUcuZW5hYmxlZCkgcmV0dXJuO1xyXG5cclxuICAgIGlmICghdHlwZSkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKC4uLmFyZ3MpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoREVCVUdbdHlwZV0gPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgY29uc29sZS5sb2coYFske3R5cGV9XWAsIC4uLmFyZ3MpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdFcnJvcih0eXBlLCAuLi5hcmdzKSB7XHJcbiAgICBpZiAoIURFQlVHLmVuYWJsZWQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBrZXkgPSBUWVBFX01BUD8uW3R5cGVdIHx8IHR5cGU7XHJcblxyXG4gICAgaWYgKERFQlVHW2tleV0gPT09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgY29uc29sZS5lcnJvcihgWyR7a2V5fV1gLCAuLi5hcmdzKTtcclxufSIsImV4cG9ydCBjb25zdCBUWVBFX01BUCA9IHtcclxuICAgIFJPQUQ6IFwicm9hZFwiLFxyXG4gICAgQ0hVTks6IFwiY2h1bmtcIixcclxuICAgIEJVSUxESU5HOiBcImJ1aWxkaW5nXCJcclxufTsiLCJpbXBvcnQgTCBmcm9tICcuLi8uLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nIH0gZnJvbSAnLi4vQ29uZmlnL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgQ0hVTktfU0laRSB9IGZyb20gJy4uL0NvbmZpZy9jaHVuay5qcyc7XHJcbmltcG9ydCB7IGdldE1hcCwgaXNHcmlkTGF5ZXJBY3RpdmUgfSBmcm9tICcuLi9tYXAuanMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdyaWRMYXllciA9IEwubGF5ZXJHcm91cCgpO1xyXG5cclxuY29uc3QgdmlzaWJsZUNodW5rcyA9IG5ldyBNYXAoKTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0R3JpZExheWVyKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG4gICAgaWYgKCFtYXApIHJldHVybjtcclxuXHJcbiAgICBpZiAoIWlzR3JpZExheWVyQWN0aXZlKCkpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuICAgIGlmICh6b29tIDwgMTQpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBib3VuZHMgPSBtYXAuZ2V0Qm91bmRzKCk7XHJcblxyXG4gICAgY29uc3QgbWluTGF0ID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0U291dGgoKSAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgbWF4TGF0ID0gTWF0aC5jZWlsKGJvdW5kcy5nZXROb3J0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtaW5MbmcgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRXZXN0KCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heExuZyA9IE1hdGguY2VpbChib3VuZHMuZ2V0RWFzdCgpIC8gQ0hVTktfU0laRSk7XHJcblxyXG4gICAgY29uc3QgbmV3VmlzaWJsZSA9IG5ldyBTZXQoKTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gbWluTGF0OyBpIDwgbWF4TGF0OyBpKyspIHtcclxuICAgICAgICBmb3IgKGxldCBqID0gbWluTG5nOyBqIDwgbWF4TG5nOyBqKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGlkID0gYCR7aX1fJHtqfWA7XHJcbiAgICAgICAgICAgIG5ld1Zpc2libGUuYWRkKGlkKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh2aXNpYmxlQ2h1bmtzLmhhcyhpZCkpIGNvbnRpbnVlO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbGF0ID0gaSAqIENIVU5LX1NJWkU7XHJcbiAgICAgICAgICAgIGNvbnN0IGxuZyA9IGogKiBDSFVOS19TSVpFO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVjdCA9IEwucmVjdGFuZ2xlKFtcclxuICAgICAgICAgICAgICAgIFtsYXQsIGxuZ10sXHJcbiAgICAgICAgICAgICAgICBbbGF0ICsgQ0hVTktfU0laRSwgbG5nICsgQ0hVTktfU0laRV1cclxuICAgICAgICAgICAgXSwge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IFwib3JhbmdlXCIsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDEsXHJcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogMC4xNVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHJlY3Qub24oJ21vdXNlb3ZlcicsICgpID0+IHJlY3Quc2V0U3R5bGUoeyBmaWxsT3BhY2l0eTogMC4zIH0pKTtcclxuICAgICAgICAgICAgcmVjdC5vbignbW91c2VvdXQnLCAoKSA9PiByZWN0LnNldFN0eWxlKHsgZmlsbE9wYWNpdHk6IDAuMTUgfSkpO1xyXG5cclxuICAgICAgICAgICAgZ3JpZExheWVyLmFkZExheWVyKHJlY3QpO1xyXG5cclxuICAgICAgICAgICAgdmlzaWJsZUNodW5rcy5zZXQoaWQsIHJlY3QpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyDwn6e5IHJlbW92ZSBjZXV4IGhvcnMgw6ljcmFuXHJcbiAgICBmb3IgKGNvbnN0IFtpZCwgcmVjdF0gb2YgdmlzaWJsZUNodW5rcy5lbnRyaWVzKCkpIHtcclxuICAgICAgICBpZiAoIW5ld1Zpc2libGUuaGFzKGlkKSkge1xyXG4gICAgICAgICAgICBncmlkTGF5ZXIucmVtb3ZlTGF5ZXIocmVjdCk7XHJcbiAgICAgICAgICAgIHZpc2libGVDaHVua3MuZGVsZXRlKGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCJDaHVua3MgdmlzaWJsZXM6XCIsIHZpc2libGVDaHVua3Muc2l6ZSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENIVU5LIENPTE9SXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDaHVua0NvbG9yKGlkLCBjb2xvcikge1xyXG4gICAgaWYgKCFpc0dyaWRMYXllckFjdGl2ZSgpKSByZXR1cm47XHJcbiAgICBcclxuICAgIGNvbnN0IHJlY3QgPSB2aXNpYmxlQ2h1bmtzLmdldChpZCk7XHJcbiAgICBpZiAoIXJlY3QpIHJldHVybjtcclxuXHJcbiAgICByZWN0LnNldFN0eWxlKHtcclxuICAgICAgICBjb2xvcixcclxuICAgICAgICBmaWxsT3BhY2l0eTogMC4yXHJcbiAgICB9KTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcblxuY29uc3QgZGVwb3NpdE1hcmtlcnMgPSBuZXcgTWFwKCk7XG5cbi8vIENhY2hlIGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXG5sZXQgYnVpbGRpbmdUeXBlc0NhY2hlID0gbnVsbDtcbmxldCByZXNvdXJjZVR5cGVzQ2FjaGUgPSBudWxsO1xuXG4vKipcbiAqIENoYXJnZSBsZXMgdHlwZXMgZGUgcmVzc291cmNlcyBkZXB1aXMgbCdBUElcbiAqL1xuYXN5bmMgZnVuY3Rpb24gbG9hZEJ1aWxkaW5nVHlwZXMoKSB7XG4gICAgaWYgKGJ1aWxkaW5nVHlwZXNDYWNoZSkgcmV0dXJuIGJ1aWxkaW5nVHlwZXNDYWNoZTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYC9hcGkvYnVpbGRpbmctdHlwZXNgKTtcbiAgICAgICAgYnVpbGRpbmdUeXBlc0NhY2hlID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZXR1cm4gYnVpbGRpbmdUeXBlc0NhY2hlO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGR1IGNoYXJnZW1lbnQgZGVzIHR5cGVzIGRlIHJlc3NvdXJjZXNcIiwgZSk7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIGxvYWRSZXNvdXJjZVR5cGVzKCkge1xuICAgIGlmIChyZXNvdXJjZVR5cGVzQ2FjaGUpIHJldHVybiByZXNvdXJjZVR5cGVzQ2FjaGU7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKGAvYXBpL3Jlc291cmNlLXR5cGVzYCk7XG4gICAgICAgIHJlc291cmNlVHlwZXNDYWNoZSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgcmV0dXJuIHJlc291cmNlVHlwZXNDYWNoZTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkdSBjaGFyZ2VtZW50IGRlcyB0eXBlcyBkZSByZXNzb3VyY2VzXCIsIGUpO1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxufVxuXG4vLyBNYXBwaW5nIGRlcyBjb3VsZXVycyBwYXIgZMOpZmF1dFxuY29uc3QgREVGQVVMVF9DT0xPUlMgPSB7XG4gICAgJ2lyb24nOiAnIzdmOGM4ZCcsXG4gICAgJ29pbCc6ICcjZjFjNDBmJyxcbiAgICAnY29hbCc6ICcjMmMzZTUwJyxcbiAgICAncnViYmVyJzogJyMyN2FlNjAnLFxuICAgICdiYXV4aXRlJzogJyNlNjdlMjInLFxuICAgICdyYXJlX2VhcnRoJzogJyM4ZTQ0YWQnXG59O1xuXG4vKipcbiAqIFJldG91cm5lIGxhIGNvdWxldXIgcG91ciB1biB0eXBlIGRlIHJlc3NvdXJjZSAoc3luY2hyb25lIC0gdXRpbGlzZSBsZSBjYWNoZSlcbiAqL1xuZnVuY3Rpb24gZ2V0UmVzb3VyY2VDb2xvcih0eXBlKSB7XG4gICAgaWYgKHJlc291cmNlVHlwZXNDYWNoZSkgcmV0dXJuIChyZXNvdXJjZVR5cGVzQ2FjaGUgJiYgcmVzb3VyY2VUeXBlc0NhY2hlW3R5cGVdPy5jb2xvcikgfHwgREVGQVVMVF9DT0xPUlNbdHlwZV0gfHwgJyNmZmZmZmYnO1xuXG4gICAgbG9hZFJlc291cmNlVHlwZXMoKTtcblxuICAgIHJldHVybiAocmVzb3VyY2VUeXBlc0NhY2hlICYmIHJlc291cmNlVHlwZXNDYWNoZVt0eXBlXT8uY29sb3IpIHx8IERFRkFVTFRfQ09MT1JTW3R5cGVdIHx8ICcjZmZmZmZmJztcbn1cblxuLyoqXG4gKiBUcm91dmUgbGUgdHlwZSBkZSBiw6J0aW1lbnQgKG1pbmUpIHBvdXIgdW5lIHJlc3NvdXJjZSBkb25uw6llXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZShyZXNvdXJjZVR5cGUpIHtcbiAgICBjb25zdCBidWlsZGluZ1R5cGVzID0gYXdhaXQgbG9hZEJ1aWxkaW5nVHlwZXMoKTtcblxuICAgIC8vIENoZXJjaGVyIHVuIGLDonRpbWVudCBxdWkgcHJvZHVpdCBjZXR0ZSByZXNzb3VyY2VcbiAgICBjb25zdCBidWlsZGluZ1R5cGUgPSBidWlsZGluZ1R5cGVzLmZpbmQoYnQgPT4ge1xuICAgICAgICByZXR1cm4gKGJ0LnJlc291cmNlX3R5cGUgPT09IHJlc291cmNlVHlwZSB8fCBidC5yZXNvdXJjZVR5cGU/LmNvZGUgPT09IHJlc291cmNlVHlwZSkgJiYgYnQuYmFzZV9jb3N0ID4gMDtcbiAgICB9KTtcblxuICAgIHJldHVybiBidWlsZGluZ1R5cGU/LmlkIHx8IG51bGw7XG59XG5cbmV4cG9ydCBjb25zdCBkZXBvc2l0TGF5ZXJzID0ge307XG5cbi8qKlxuICogSW5pdGlhbGlzZSBsZXMgY291Y2hlcyBkZSBkw6lww7R0cyBkeW5hbWlxdWVtZW50XG4gKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbml0RGVwb3NpdExheWVycyhtYXAsIGNvbnRyb2wpIHtcbiAgICBjb25zdCByZXNvdXJjZVR5cGVzID0gYXdhaXQgbG9hZFJlc291cmNlVHlwZXMoKTtcblxuICAgIC8vIENyw6llciB1bmUgY291Y2hlIHBvdXIgY2hhcXVlIHR5cGUgZGUgcmVzc291cmNlIChzZXVsZW1lbnQgc2kgY29sb3IgZXhpc3RlKVxuICAgIHJlc291cmNlVHlwZXMuZm9yRWFjaChydCA9PiB7XG4gICAgICAgIGlmIChydC5jb2xvciAmJiBydC5jb2xvci5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBkZXBvc2l0TGF5ZXJzW3J0LmNvZGVdID0gTC5sYXllckdyb3VwKCk7XG4gICAgICAgICAgICBjb250cm9sLmFkZE92ZXJsYXkoZGVwb3NpdExheWVyc1tydC5jb2RlXSwgYFJlc3NvdXJjZTogJHtydC5sYWJlbH1gKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZERlcG9zaXRzRm9yQ2h1bmsoY2h1bmtJZCwgbWFwKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgL2FwaS9kZXBvc2l0cy8ke2NodW5rSWR9YCk7XG4gICAgICAgIGNvbnN0IGRlcG9zaXRzID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGRlcG9zaXRzLCBtYXApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGNoYXJnZW1lbnQgZMOpcMO0dHM6XCIsIGVycik7XG4gICAgfVxufVxuXG4vKipcbiAqIFJlbmR1IGRlcyBkw6lww7R0cyBzdXIgbGEgY2FydGVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoZGVwb3NpdHMsIG1hcCkge1xuICAgIGRlcG9zaXRzLmZvckVhY2goZGVwb3NpdCA9PiB7XG4gICAgICAgIGlmIChkZXBvc2l0TWFya2Vycy5oYXMoZGVwb3NpdC5pZCkpIHJldHVybjtcblxuICAgICAgICBjb25zdCB0eXBlID0gZGVwb3NpdC5yZXNvdXJjZV90eXBlO1xuICAgICAgICBjb25zdCBsYXllciA9IGRlcG9zaXRMYXllcnNbdHlwZV07XG5cbiAgICAgICAgaWYgKCFsYXllcikge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKGBQYXMgZGUgbGF5ZXIgcG91ciBsZSB0eXBlOiAke3R5cGV9YCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjb2xvciA9IGdldFJlc291cmNlQ29sb3IodHlwZSk7XG5cbiAgICAgICAgY29uc3QgbWFya2VyID0gTC5jaXJjbGVNYXJrZXIoW2RlcG9zaXQubGF0aXR1ZGUsIGRlcG9zaXQubG9uZ2l0dWRlXSwge1xuICAgICAgICAgICAgcmFkaXVzOiA4LFxuICAgICAgICAgICAgZmlsbENvbG9yOiBjb2xvcixcbiAgICAgICAgICAgIGNvbG9yOiBcIiMwMDBcIixcbiAgICAgICAgICAgIHdlaWdodDogMSxcbiAgICAgICAgICAgIG9wYWNpdHk6IDEsXG4gICAgICAgICAgICBmaWxsT3BhY2l0eTogMC44XG4gICAgICAgIH0pLmFkZFRvKGxheWVyKTtcblxuICAgICAgICBtYXJrZXIuYmluZFBvcHVwKGBcbiAgICAgICAgICAgIDxiPiR7ZGVwb3NpdC5yZXNvdXJjZV90eXBlLnRvVXBwZXJDYXNlKCl9PC9iPjxicj5cbiAgICAgICAgICAgIFJpY2hlc3NlOiAke2RlcG9zaXQucmljaG5lc3N9PGJyPlxuICAgICAgICAgICAgJHtkZXBvc2l0LmlzX2NsYWltZWQgPyAn4pqg77iPIETDqWrDoCBleHBsb2l0w6knIDogJzxidXR0b24gb25jbGljaz1cImNsYWltRGVwb3NpdCgnICsgZGVwb3NpdC5pZCArICcsIFxcJycgKyBkZXBvc2l0LnJlc291cmNlX3R5cGUgKyAnXFwnKVwiPkV4cGxvaXRlcjwvYnV0dG9uPid9XG4gICAgICAgIGApO1xuXG4gICAgICAgIGRlcG9zaXRNYXJrZXJzLnNldChkZXBvc2l0LmlkLCBtYXJrZXIpO1xuICAgIH0pO1xufVxuXG4vKipcbiAqIFBlcm1ldCBkJ2V4cGxvaXRlciB1biBkw6lww7R0IGRlcHVpcyBsYSBwb3B1cFxuICovXG53aW5kb3cuY2xhaW1EZXBvc2l0ID0gYXN5bmMgZnVuY3Rpb24oaWQsIHJlc291cmNlVHlwZSkge1xuICAgIC8vIFRyb3V2ZXIgbGUgdHlwZSBkZSBiw6J0aW1lbnQgYXBwcm9wcmnDqVxuICAgIGNvbnN0IGJ1aWxkaW5nVHlwZUlkID0gYXdhaXQgZmluZEJ1aWxkaW5nVHlwZUZvclJlc291cmNlKHJlc291cmNlVHlwZSk7XG5cbiAgICBpZiAoIWJ1aWxkaW5nVHlwZUlkKSB7XG4gICAgICAgIHJldHVybiBhbGVydChgSW1wb3NzaWJsZSBkZSB0cm91dmVyIHVuIGLDonRpbWVudCBwb3VyIGV4dHJhaXJlIGxlICR7cmVzb3VyY2VUeXBlfWApO1xuICAgIH1cblxuICAgIC8vIENvbnN0cnVpcmUgZGlyZWN0ZW1lbnQgbGUgYsOidGltZW50IHN1ciBsZXMgY29vcmRvbm7DqWVzIGR1IGTDqXDDtHRcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL2J1aWxkJywge1xuICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcbiAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICBsYXQ6IG51bGwsXG4gICAgICAgICAgICAgICAgbG5nOiBudWxsLFxuICAgICAgICAgICAgICAgIHR5cGVfaWQ6IGJ1aWxkaW5nVHlwZUlkLFxuICAgICAgICAgICAgICAgIGRlcG9zaXRfaWQ6IGlkXG4gICAgICAgICAgICB9KVxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCByZXNwb25zZVRleHQgPSBhd2FpdCByZXNwb25zZS50ZXh0KCk7XG4gICAgICAgIGxldCBkYXRhO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgZGF0YSA9IEpTT04ucGFyc2UocmVzcG9uc2VUZXh0KTtcbiAgICAgICAgfSBjYXRjaCAocGFyc2VFcnJvcikge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcIlLDqXBvbnNlIG5vbi1KU09OIHJlw6d1ZTpcIiwgcmVzcG9uc2VUZXh0KTtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlLDqXBvbnNlIGludmFsaWRlIGR1IHNlcnZldXJcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGFsZXJ0KCdEw6lww7R0IGV4cGxvaXTDqSBhdmVjIHN1Y2PDqHMgISBCw6J0aW1lbnQgY3LDqcOpLicpO1xuICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBhbGVydChcIkVycmV1cjogXCIgKyAoZGF0YS5lcnJvciB8fCBcIkltcG9zc2libGUgZCdleHBsb2l0ZXIgY2UgZMOpcMO0dFwiKSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsJ2V4cGxvaXRhdGlvblwiLCBlKTtcbiAgICAgICAgYWxlcnQoXCJFcnJldXIgcsOpc2VhdSBsb3JzIGRlIGwnZXhwbG9pdGF0aW9uOiBcIiArIGUubWVzc2FnZSk7XG4gICAgfVxufSIsImltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL3JvYWRzU3RhdGUuanMnO1xyXG5pbXBvcnQgeyBkZWJ1Z0xvZyB9IGZyb20gJy4uL0NvbmZpZy9kZWJ1Zy5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW52YWxpZGF0ZUNodW5rKGlkKSB7XHJcbiAgICBkZWJ1Z0xvZyhcImNhY2hlXCIsIFwi8J+nuSBpbnZhbGlkYXRlIGNodW5rOlwiLCBpZCk7XHJcbiAgICBcclxuICAgIGRlbGV0ZSByb2Fkc1N0YXRlLmNodW5rc1tpZF07XHJcbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShgY2h1bmtfJHtpZH1gKTtcclxufSIsImltcG9ydCBMIGZyb20gJy4uLy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcclxuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi4vbWFwLmpzJztcclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgcG9pbnQgbGUgcGx1cyBwcm9jaGUgc3VyIHRvdXRlcyBsZXMgcm91dGVzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZmluZENsb3Nlc3RQb2ludE9uUm9hZChsYXRsbmcsIHJvYWRzKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBsZXQgYmVzdFBvaW50ID0gbnVsbDtcclxuICAgIGxldCBiZXN0RGlzdGFuY2UgPSBJbmZpbml0eTtcclxuXHJcbiAgICBpZiAoIUFycmF5LmlzQXJyYXkocm9hZHMpKSByZXR1cm4geyBwb2ludDogbnVsbCwgZGlzdGFuY2U6IEluZmluaXR5IH07XHJcblxyXG4gICAgcm9hZHMuZm9yRWFjaChyb2FkID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFBcnJheS5pc0FycmF5KHJvYWQucG9pbnRzKSkgcmV0dXJuO1xyXG4gICAgICAgIGlmIChyb2FkLnBvaW50cy5sZW5ndGggPCAyKSByZXR1cm47XHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcm9hZC5wb2ludHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhUmF3ID0gcm9hZC5wb2ludHNbaV07XHJcbiAgICAgICAgICAgIGNvbnN0IGJSYXcgPSByb2FkLnBvaW50c1tpICsgMV07XHJcblxyXG4gICAgICAgICAgICBpZiAoIWFSYXcgfHwgIWJSYXcpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcIkJST0tFTiBST0FEIFNFR01FTlQ6XCIsIHJvYWQpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYVJhdy5sZW5ndGggPCAyIHx8IGJSYXcubGVuZ3RoIDwgMikgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBhID0gTC5sYXRMbmcoYVJhd1swXSwgYVJhd1sxXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGIgPSBMLmxhdExuZyhiUmF3WzBdLCBiUmF3WzFdKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3RlZCA9IHByb2plY3RQb2ludE9uU2VnbWVudChsYXRsbmcsIGEsIGIpO1xyXG4gICAgICAgICAgICBjb25zdCBkaXN0ID0gbWFwLmRpc3RhbmNlKGxhdGxuZywgcHJvamVjdGVkKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChkaXN0IDwgYmVzdERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBiZXN0RGlzdGFuY2UgPSBkaXN0O1xyXG4gICAgICAgICAgICAgICAgYmVzdFBvaW50ID0gcHJvamVjdGVkO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwb2ludDogYmVzdFBvaW50LFxyXG4gICAgICAgIGRpc3RhbmNlOiBiZXN0RGlzdGFuY2VcclxuICAgIH07XHJcbn1cclxuXHJcbi8qKlxyXG4gKiBUcm91dmUgbGUgc2VnbWVudCBsZSBwbHVzIHByb2NoZSAocG91ciBoaWdobGlnaHQgdmlzdWVsKVxyXG4gKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGZpbmRDbG9zZXN0U2VnbWVudChsYXRsbmcsIHJvYWRzKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBsZXQgYmVzdFNlZ21lbnQgPSBudWxsO1xyXG4gICAgbGV0IGJlc3REaXN0YW5jZSA9IEluZmluaXR5O1xyXG5cclxuICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkcykpIHJldHVybiBudWxsO1xyXG5cclxuICAgIHJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyb2FkLnBvaW50cykpIHJldHVybjtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCByb2FkLnBvaW50cy5sZW5ndGggLSAxOyBpKyspIHtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGFSYXcgPSByb2FkLnBvaW50c1tpXTtcclxuICAgICAgICAgICAgY29uc3QgYlJhdyA9IHJvYWQucG9pbnRzW2kgKyAxXTtcclxuXHJcbiAgICAgICAgICAgIGlmICghYVJhdyB8fCAhYlJhdykgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmIChhUmF3Lmxlbmd0aCA8IDIgfHwgYlJhdy5sZW5ndGggPCAyKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSBMLmxhdExuZyhhUmF3WzBdLCBhUmF3WzFdKTtcclxuICAgICAgICAgICAgY29uc3QgYiA9IEwubGF0TG5nKGJSYXdbMF0sIGJSYXdbMV0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgbWlkID0gTC5sYXRMbmcoXHJcbiAgICAgICAgICAgICAgICAoYS5sYXQgKyBiLmxhdCkgLyAyLFxyXG4gICAgICAgICAgICAgICAgKGEubG5nICsgYi5sbmcpIC8gMlxyXG4gICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGlzdCA9IG1hcC5kaXN0YW5jZShsYXRsbmcsIG1pZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoZGlzdCA8IGJlc3REaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgYmVzdERpc3RhbmNlID0gZGlzdDtcclxuICAgICAgICAgICAgICAgIGJlc3RTZWdtZW50ID0gW2EsIGJdO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgcmV0dXJuIGJlc3RTZWdtZW50O1xyXG59XHJcblxyXG4vKipcclxuICogUHJvamVjdGlvbiBkJ3VuIHBvaW50IHN1ciB1biBzZWdtZW50IChBLUIpXHJcbiAqIG1hdGggc3RhYmxlIHBvdXIgc25hcCByb3V0ZXNcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBwcm9qZWN0UG9pbnRPblNlZ21lbnQocCwgYSwgYikge1xyXG5cclxuICAgIGNvbnN0IEEgPSBbYS5sYXQsIGEubG5nXTtcclxuICAgIGNvbnN0IEIgPSBbYi5sYXQsIGIubG5nXTtcclxuICAgIGNvbnN0IFAgPSBbcC5sYXQsIHAubG5nXTtcclxuXHJcbiAgICBjb25zdCBBQiA9IFtCWzBdIC0gQVswXSwgQlsxXSAtIEFbMV1dO1xyXG4gICAgY29uc3QgQVAgPSBbUFswXSAtIEFbMF0sIFBbMV0gLSBBWzFdXTtcclxuXHJcbiAgICBjb25zdCBhYjIgPSBBQlswXSAqIEFCWzBdICsgQUJbMV0gKiBBQlsxXTtcclxuXHJcbiAgICBpZiAoYWIyID09PSAwKSByZXR1cm4gYTtcclxuXHJcbiAgICBsZXQgdCA9IChBUFswXSAqIEFCWzBdICsgQVBbMV0gKiBBQlsxXSkgLyBhYjI7XHJcblxyXG4gICAgdCA9IE1hdGgubWF4KDAsIE1hdGgubWluKDEsIHQpKTtcclxuXHJcbiAgICByZXR1cm4gTC5sYXRMbmcoXHJcbiAgICAgICAgQVswXSArIEFCWzBdICogdCxcclxuICAgICAgICBBWzFdICsgQUJbMV0gKiB0XHJcbiAgICApO1xyXG59XHJcblxyXG4vKipcclxuICogRGlzdGFuY2UgcG9pbnQgLT4gc2VnbWVudCAodXRpbGUgdmFsaWRhdGlvbiBmdXR1cmUpXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGlzdGFuY2VUb1NlZ21lbnQocCwgYSwgYikge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgY29uc3QgcHJvamVjdGVkID0gcHJvamVjdFBvaW50T25TZWdtZW50KHAsIGEsIGIpO1xyXG4gICAgcmV0dXJuIG1hcC5kaXN0YW5jZShwLCBwcm9qZWN0ZWQpO1xyXG59XHJcblxyXG4vKipcclxuICogQ2hlY2sgc2ltcGxlIGRlYnVnIHJvYWRzXHJcbiAqL1xyXG5leHBvcnQgZnVuY3Rpb24gZGVidWdSb2Fkcyhyb2Fkcykge1xyXG4gICAgY29uc29sZS5sb2coXCJST0FEUyBERUJVRzpcIiwgcm9hZHMubGVuZ3RoLCByb2Fkcyk7XHJcbn0iLCJpbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuLi9tYXAuanMnO1xyXG5pbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi4vQ29uZmlnL2NodW5rLmpzJztcclxuaW1wb3J0IHsgc2V0Q2h1bmtDb2xvciB9IGZyb20gJy4uL0xheWVycy9ncmlkTGF5ZXIuanMnO1xyXG5pbXBvcnQgeyBpbnZhbGlkYXRlQ2h1bmsgfSBmcm9tICcuL2ludmFsaWRhdGVDaHVuay5qcyc7XHJcbmltcG9ydCB7IGRlYnVnTG9nLCBkZWJ1Z0Vycm9yIH0gZnJvbSAnLi4vQ29uZmlnL2RlYnVnLmpzJztcclxuaW1wb3J0IHsgcm9hZHNTdGF0ZSB9IGZyb20gJy4vcm9hZHNTdGF0ZS5qcyc7XHJcbmltcG9ydCB7IHJlbmRlckRlcG9zaXRzRnJvbURhdGEgfSBmcm9tICcuLi9NYXAvZGVwb3NpdHMuanMnO1xyXG5pbXBvcnQgeyBnZXRDYWNoZUtleSB9IGZyb20gJy4uL0NvbmZpZy9jYWNoZVV0aWxzLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIExPQUQgQ09OVFJPTFxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5jb25zdCBsb2FkaW5nUXVldWUgPSBuZXcgU2V0KCk7XHJcbmNvbnN0IE1BWF9DT05DVVJSRU5UID0gNDtcclxubGV0IGFjdGl2ZVJlcXVlc3RzID0gMDtcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIENIVU5LIElEXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGdldENodW5rSWQobGF0LCBsbmcpIHtcclxuICAgIGNvbnN0IHggPSBNYXRoLmZsb29yKGxhdCAvIENIVU5LX1NJWkUpO1xyXG4gICAgY29uc3QgeSA9IE1hdGguZmxvb3IobG5nIC8gQ0hVTktfU0laRSk7XHJcbiAgICByZXR1cm4gYCR7eH1fJHt5fWA7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIE1BSU4gTE9BRCBWSVNJQkxFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBsb2FkVmlzaWJsZVJvYWRDaHVua3MoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFtYXAgfHwgbWFwLmdldFpvb20oKSA8IDE0KSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgYm91bmRzID0gbWFwLmdldEJvdW5kcygpO1xyXG5cclxuICAgIGNvbnN0IHZpc2libGVDaHVua3MgPSBnZXRWaXNpYmxlQ2h1bmtzKGJvdW5kcyk7XHJcblxyXG4gICAgY29uc3QgY2h1bmtzVG9Mb2FkID0gdmlzaWJsZUNodW5rcy5maWx0ZXIoXHJcbiAgICAgICAgY2h1bmtJZCA9PiAhcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuaGFzKGNodW5rSWQpXHJcbiAgICApO1xyXG5cclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAvLyBWRVJJRklDQVRJT04gQ0FDSEUgTE9DQUxcclxuICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICBjb25zdCBmaW5hbENodW5rc1RvTG9hZCA9IFtdO1xyXG5cclxuICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBjaHVua3NUb0xvYWQpIHtcclxuICAgICAgICBjb25zdCBjYWNoZUtleSA9IGdldENhY2hlS2V5KGNodW5rSWQpO1xyXG4gICAgICAgIGNvbnN0IGNhY2hlZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKGNhY2hlS2V5KTtcclxuICAgICAgICBpZiAoY2FjaGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGNhY2hlZCk7XHJcbiAgICAgICAgICAgIC8vIFbDqXJpZmllciBzaSBsZSBjYWNoZSBlc3QgdmlldXggKGV4OiBwbHVzIGRlIDFoKVxyXG4gICAgICAgICAgICBpZiAoRGF0ZS5ub3coKSAtIGRhdGEudHMgPCAzNjAwMDAwKSB7IFxyXG4gICAgICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBkYXRhLmhhc1JvYWRzID8gJ2xvYWRlZCcgOiAnZW1wdHknLFxyXG4gICAgICAgICAgICAgICAgICAgIHJvYWRzOiBkYXRhLnJvYWRzLFxyXG4gICAgICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogZGF0YS5idWlsZGluZ3MsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVwb3NpdHM6IGRhdGEuZGVwb3NpdHMsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFzUm9hZHM6IGRhdGEuaGFzUm9hZHNcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICByb2Fkc1N0YXRlLmxvYWRlZENodW5rcy5hZGQoY2h1bmtJZCk7XHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsIGRhdGEuaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCcpO1xyXG4gICAgICAgICAgICAgICAgcmVuZGVyRGVwb3NpdHNGcm9tRGF0YShkYXRhLmRlcG9zaXRzIHx8IFtdLCBtYXApO1xyXG4gICAgICAgICAgICAgICAgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxDaHVua3NUb0xvYWQucHVzaChjaHVua0lkKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gRVRBVCBMT0FESU5HXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIGZvciAoY29uc3QgY2h1bmtJZCBvZiBmaW5hbENodW5rc1RvTG9hZCkge1xyXG5cclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiAnbG9hZGluZycsXHJcbiAgICAgICAgICAgIHJvYWRzOiBbXSxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBbXSxcclxuICAgICAgICAgICAgZGVwb3NpdHM6IFtdXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAnb3JhbmdlJyk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmllbiDDoCBjaGFyZ2VyXHJcbiAgICBpZiAoZmluYWxDaHVua3NUb0xvYWQubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgcmVmcmVzaENodW5rQ29sb3JzKHZpc2libGVDaHVua3MpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG5cclxuICAgICAgICBjb25zdCBbcm9hZHNSZXNwb25zZSwgYnVpbGRpbmdzUmVzcG9uc2UsIGRlcG9zaXRzUmVzcG9uc2VdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9jaHVua3MvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSksXHJcbiAgICAgICAgICAgIGZldGNoKCcvYXBpL2J1aWxkaW5ncy92aXNpYmxlJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBmaW5hbENodW5rc1RvTG9hZCB9KVxyXG4gICAgICAgICAgICB9KSxcclxuICAgICAgICAgICAgZmV0Y2goJy9hcGkvZGVwb3NpdHMvYnVsaycsIHsgICAgICAgLy8g4oaQIG5vdXZlbCBlbmRwb2ludCDDoCBjcsOpZXJcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogZmluYWxDaHVua3NUb0xvYWQgfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgaWYgKCFyb2Fkc1Jlc3BvbnNlLm9rIHx8ICFidWlsZGluZ3NSZXNwb25zZS5vayB8fCAhZGVwb3NpdHNSZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKFwiQVBJIGVycm9yXCIpO1xyXG5cclxuICAgICAgICBjb25zdCByb2Fkc0RhdGEgPSBhd2FpdCByb2Fkc1Jlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICBjb25zdCBidWlsZGluZ3NEYXRhID0gYXdhaXQgYnVpbGRpbmdzUmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIGNvbnN0IGRlcG9zaXRzRGF0YSA9IGF3YWl0IGRlcG9zaXRzUmVzcG9uc2UuanNvbigpO1xyXG5cclxuICAgICAgICAvLyBDcsOpZXIgdW4gaW5kZXggcG91ciBtYXBwZXIgbGVzIGLDonRpbWVudHMgcGFyIGNodW5rSWQgcmFwaWRlbWVudFxyXG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nc0J5Q2h1bmsgPSB7fTtcclxuICAgICAgICBidWlsZGluZ3NEYXRhLmZvckVhY2goYiA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNJZCA9IE1hdGguZmxvb3IoYi5sYXQgKiAxMDApICsgJ18nICsgTWF0aC5mbG9vcihiLmxuZyAqIDEwMCk7XHJcbiAgICAgICAgICAgIGlmICghYnVpbGRpbmdzQnlDaHVua1tjSWRdKSBidWlsZGluZ3NCeUNodW5rW2NJZF0gPSBbXTtcclxuICAgICAgICAgICAgYnVpbGRpbmdzQnlDaHVua1tjSWRdLnB1c2goYik7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gVFJBSVRFTUVOVCBDSFVOS1NcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY2h1bmtEYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgcm9hZHM6IHJvYWRzRGF0YVtjaHVua0lkXT8ucm9hZHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IGJ1aWxkaW5nc0RhdGFbY2h1bmtJZF0/LmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBkZXBvc2l0c0RhdGFbY2h1bmtJZF0gfHwgW11cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGhhc1JvYWRzID0gY2h1bmtEYXRhLnJvYWRzICYmIGNodW5rRGF0YS5yb2Fkcy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgICAgICBzdGF0dXM6IGhhc1JvYWRzID8gJ2xvYWRlZCcgOiAnZW1wdHknLFxyXG4gICAgICAgICAgICAgICAgcm9hZHM6IGNodW5rRGF0YS5yb2FkcyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGJ1aWxkaW5nczogY2h1bmtEYXRhLmJ1aWxkaW5ncyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGRlcG9zaXRzOiBjaHVua0RhdGEuZGVwb3NpdHMgfHwgW10sXHJcbiAgICAgICAgICAgICAgICBoYXNSb2Fkc1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuYWRkKGNodW5rSWQpO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gQ0FDSEVcclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRDYWNoZUtleShjaHVua0lkKTtcclxuICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXHJcbiAgICAgICAgICAgIGNhY2hlS2V5LFxyXG4gICAgICAgICAgICBKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgICAgICByb2FkczogY2h1bmtEYXRhLnJvYWRzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgYnVpbGRpbmdzOiBjaHVua0RhdGEuYnVpbGRpbmdzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6IGNodW5rRGF0YS5kZXBvc2l0cyB8fCBbXSxcclxuICAgICAgICAgICAgICAgIGhhc1JvYWRzLFxyXG4gICAgICAgICAgICAgICAgdHM6IERhdGUubm93KClcclxuICAgICAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgICAgICAgICAgLy8gRFJBVyBST0FEU1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICAgICAgLy8gY2h1bmtEYXRhLnJvYWRzLmZvckVhY2gocm9hZCA9PiB7XHJcbiAgICAgICAgICAgIC8vICAgICBkcmF3Um9hZChyb2FkKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBEUkFXIEJVSUxESU5HU1xyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBjaHVua0RhdGEuYnVpbGRpbmdzLmZvckVhY2goYnVpbGRpbmcgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgZHJhd0J1aWxkaW5nKGJ1aWxkaW5nKTtcclxuICAgICAgICAgICAgLy8gfSk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgICAgICAvLyBDT1VMRVVSIENIVU5LXHJcbiAgICAgICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoXHJcbiAgICAgICAgICAgICAgICBjaHVua0lkLFxyXG4gICAgICAgICAgICAgICAgaGFzUm9hZHMgPyAnYmx1ZScgOiAnIzQ0NCdcclxuICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgIHJlbmRlckRlcG9zaXRzRnJvbURhdGEoY2h1bmtEYXRhLmRlcG9zaXRzLCBtYXApO1xyXG5cclxuICAgICAgICAgICAgZGVidWdMb2coXCJyb2Fkc1wiLCBgQ2h1bmsgJHtjaHVua0lkfSBsb2FkZWQgKCR7Y2h1bmtEYXRhLnJvYWRzLmxlbmd0aH0gcm9hZHMsICR7Y2h1bmtEYXRhLmJ1aWxkaW5ncy5sZW5ndGh9IGJ1aWxkaW5ncywgJHtjaHVua0RhdGEuZGVwb3NpdHMubGVuZ3RofSBkZXBvc2l0cylgKTtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG5cclxuICAgICAgICBjb25zb2xlLmVycm9yKFxyXG4gICAgICAgICAgICBcIkVycmV1ciBjaGFyZ2VtZW50IGNodW5rcyBidWxrOlwiLFxyXG4gICAgICAgICAgICBlcnJvclxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gRVRBVCBFUlJFVVJcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgZmluYWxDaHVua3NUb0xvYWQpIHtcclxuICAgICAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcblxyXG4gICAgICAgICAgICAgICAgc3RhdHVzOiAnZXJyb3InLFxyXG5cclxuICAgICAgICAgICAgICAgIHJvYWRzOiBbXSxcclxuXHJcbiAgICAgICAgICAgICAgICBidWlsZGluZ3M6IFtdLFxyXG4gICAgICAgICAgICAgICAgZGVwb3NpdHM6IFtdXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIFJFRlJFU0ggVklTVUVMIEZJTkFMXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuICAgIHJlZnJlc2hDaHVua0NvbG9ycyh2aXNpYmxlQ2h1bmtzKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gUkVGUkVTSCBDSFVOSyBDT0xPUlNcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gcmVmcmVzaENodW5rQ29sb3JzKHZpc2libGVDaHVua3MpIHtcclxuXHJcbiAgICBmb3IgKGNvbnN0IGNodW5rSWQgb2YgdmlzaWJsZUNodW5rcykge1xyXG5cclxuICAgICAgICBjb25zdCBjaHVuayA9IHJvYWRzU3RhdGUuY2h1bmtzW2NodW5rSWRdO1xyXG4gICAgICAgIGlmICghY2h1bmspIHtcclxuXHJcbiAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpO1xyXG4gICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN3aXRjaCAoY2h1bmsuc3RhdHVzKSB7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdsb2FkZWQnOlxyXG5cclxuICAgICAgICAgICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ2JsdWUnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2VtcHR5JzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICcjNDQ0Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICdsb2FkaW5nJzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdvcmFuZ2UnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGNhc2UgJ2Vycm9yJzpcclxuXHJcbiAgICAgICAgICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6XHJcblxyXG4gICAgICAgICAgICAgICAgc2V0Q2h1bmtDb2xvcihjaHVua0lkLCAneWVsbG93Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSRUZSRVNIIENIVU5LXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZWZyZXNoQ2h1bmsobGF0LCBsbmcpIHtcclxuICAgIGNvbnN0IGNodW5rSWQgPSBnZXRDaHVua0lkKGxhdCwgbG5nKTtcclxuXHJcbiAgICBpbnZhbGlkYXRlQ2h1bmsoY2h1bmtJZCk7XHJcblxyXG4gICAgcm9hZHNTdGF0ZS5sb2FkZWRDaHVua3MuZGVsZXRlKGNodW5rSWQpO1xyXG5cclxuICAgIGF3YWl0IGZldGNoU2luZ2xlQ2h1bmsoY2h1bmtJZCk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIEZFVENIIFNJTkdMRSBDSFVOS1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5hc3luYyBmdW5jdGlvbiBmZXRjaFNpbmdsZUNodW5rKGNodW5rSWQpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogJ2xvYWRpbmcnLFxyXG4gICAgICAgICAgICByb2FkczogW10sXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogW10sXHJcbiAgICAgICAgICAgIGRlcG9zaXRzOiBbXVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNldENodW5rQ29sb3IoY2h1bmtJZCwgJ29yYW5nZScpO1xyXG5cclxuICAgICAgICBjb25zdCBbcm9hZHNSZXMsIGJ1aWxkaW5nc1JlcywgZGVwb3NpdHNSZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9jaHVua3MvYnVsaycsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogW2NodW5rSWRdIH0pXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9idWlsZGluZ3MvdmlzaWJsZScsIHtcclxuICAgICAgICAgICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7IGNodW5rczogW2NodW5rSWRdIH0pXHJcbiAgICAgICAgICAgIH0pLFxyXG4gICAgICAgICAgICBmZXRjaCgnL2FwaS9kZXBvc2l0cy9idWxrJywge1xyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7ICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgICAgICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgY2h1bmtzOiBbY2h1bmtJZF0gfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICBdKTtcclxuXHJcbiAgICAgICAgaWYgKCFyb2Fkc1Jlcy5vayB8fCAhYnVpbGRpbmdzUmVzLm9rIHx8ICFkZXBvc2l0c1Jlcy5vaykgXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkFQSSBlcnJvclwiKTtcclxuXHJcbiAgICAgICAgY29uc3Qgcm9hZHNEYXRhICAgICA9IGF3YWl0IHJvYWRzUmVzLmpzb24oKTtcclxuICAgICAgICBjb25zdCBidWlsZGluZ3NEYXRhID0gYXdhaXQgYnVpbGRpbmdzUmVzLmpzb24oKTtcclxuICAgICAgICBjb25zdCBkZXBvc2l0c0RhdGEgID0gYXdhaXQgZGVwb3NpdHNSZXMuanNvbigpO1xyXG5cclxuICAgICAgICBjb25zdCBjaHVua0RlcG9zaXRzID0gZGVwb3NpdHNEYXRhW2NodW5rSWRdIHx8IFtdO1xyXG5cclxuICAgICAgICBjb25zdCBjaHVua0RhdGEgPSB7XHJcbiAgICAgICAgICAgIHJvYWRzOiAgICAgcm9hZHNEYXRhW2NodW5rSWRdPy5yb2FkcyAgICAgfHwgW10sXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogYnVpbGRpbmdzRGF0YVtjaHVua0lkXT8uYnVpbGRpbmdzIHx8IFtdLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogIGNodW5rRGVwb3NpdHNcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBjb25zdCBoYXNSb2FkcyA9IGNodW5rRGF0YS5yb2Fkcy5sZW5ndGggPiAwO1xyXG5cclxuICAgICAgICByb2Fkc1N0YXRlLmNodW5rc1tjaHVua0lkXSA9IHtcclxuICAgICAgICAgICAgc3RhdHVzOiBoYXNSb2FkcyA/ICdsb2FkZWQnIDogJ2VtcHR5JyxcclxuICAgICAgICAgICAgcm9hZHM6ICAgICBjaHVua0RhdGEucm9hZHMsXHJcbiAgICAgICAgICAgIGJ1aWxkaW5nczogY2h1bmtEYXRhLmJ1aWxkaW5ncyxcclxuICAgICAgICAgICAgZGVwb3NpdHM6ICBjaHVua0RhdGEuZGVwb3NpdHMsXHJcbiAgICAgICAgICAgIGhhc1JvYWRzXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgY29uc3QgY2FjaGVLZXkgPSBnZXRDYWNoZUtleShjaHVua0lkKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShjYWNoZUtleSwgSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICByb2FkczogICAgIGNodW5rRGF0YS5yb2FkcyxcclxuICAgICAgICAgICAgYnVpbGRpbmdzOiBjaHVua0RhdGEuYnVpbGRpbmdzLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogIGNodW5rRGF0YS5kZXBvc2l0cyxcclxuICAgICAgICAgICAgaGFzUm9hZHMsXHJcbiAgICAgICAgICAgIHRzOiBEYXRlLm5vdygpXHJcbiAgICAgICAgfSkpO1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsIGhhc1JvYWRzID8gJ2JsdWUnIDogJyM0NDQnKTtcclxuICAgICAgICByZW5kZXJEZXBvc2l0c0Zyb21EYXRhKGNodW5rRGF0YS5kZXBvc2l0cywgZ2V0TWFwKCkpO1xyXG5cclxuICAgICAgICBkZWJ1Z0xvZyhcIltDSFVOSyBSRUZSRVNIXVwiLCBjaHVua0lkLCBjaHVua0RhdGEucm9hZHMubGVuZ3RoKTtcclxuXHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgcm9hZHNTdGF0ZS5jaHVua3NbY2h1bmtJZF0gPSB7XHJcbiAgICAgICAgICAgIHN0YXR1czogJ2Vycm9yJyxcclxuICAgICAgICAgICAgcm9hZHM6IFtdLFxyXG4gICAgICAgICAgICBidWlsZGluZ3M6IFtdLFxyXG4gICAgICAgICAgICBkZXBvc2l0czogW11cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICBzZXRDaHVua0NvbG9yKGNodW5rSWQsICdyZWQnKTtcclxuICAgICAgICBkZWJ1Z0Vycm9yKFwiW0NIVU5LIFJFRlJFU0ggRVJST1JdXCIsIGNodW5rSWQsIGUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRWaXNpYmxlQ2h1bmtzKGJvdW5kcykge1xyXG5cclxuICAgIGNvbnN0IG1pblggPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRTb3V0aCgpIC8gQ0hVTktfU0laRSk7XHJcbiAgICBjb25zdCBtYXhYID0gTWF0aC5mbG9vcihib3VuZHMuZ2V0Tm9ydGgoKSAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIGNvbnN0IG1pblkgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRXZXN0KCkgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IG1heFkgPSBNYXRoLmZsb29yKGJvdW5kcy5nZXRFYXN0KCkgLyBDSFVOS19TSVpFKTtcclxuXHJcbiAgICBjb25zdCBjaHVua0lkID0gW107XHJcblxyXG4gICAgZm9yIChsZXQgeCA9IG1pblg7IHggPD0gbWF4WDsgeCsrKSB7XHJcbiAgICAgICAgZm9yIChsZXQgeSA9IG1pblk7IHkgPD0gbWF4WTsgeSsrKSB7XHJcbiAgICAgICAgICAgIGNodW5rSWQucHVzaChgJHt4fV8ke3l9YCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBjaHVua0lkO1xyXG59IiwiZXhwb3J0IGNvbnN0IHJvYWRzU3RhdGUgPSB7XHJcbiAgICBjaHVua3M6IHt9LFxyXG4gICAgbG9hZGVkQ2h1bmtzOiBuZXcgU2V0KCksXHJcbiAgICByb2Fkc1JlYWR5OiBmYWxzZSxcclxuICAgIGRyYXduUm9hZHM6IFtdLFxyXG4gICAgdmlzaWJsZUNodW5rczogbmV3IFNldCgpLFxyXG4gICAgXHJcbiAgICByb2FkTGF5ZXJzOiB7fSxcclxuXHJcbiAgICBidWlsZGluZ0xheWVyczoge31cclxufTtcclxuXHJcbmxldCBjYWNoZWRSb2FkcyA9IFtdO1xyXG5sZXQgY2FjaGVEaXJ0eSA9IHRydWU7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbWFya1JvYWRDYWNoZURpcnR5KCkge1xyXG4gICAgY2FjaGVEaXJ0eSA9IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRBbGxMb2FkZWRSb2FkcygpIHtcclxuXHJcbiAgICBpZiAoIXJvYWRzU3RhdGU/LmNodW5rcykgcmV0dXJuIFtdO1xyXG5cclxuICAgIGlmICghY2FjaGVEaXJ0eSkgcmV0dXJuIGNhY2hlZFJvYWRzO1xyXG5cclxuICAgIGNhY2hlZFJvYWRzID0gT2JqZWN0LnZhbHVlcyhyb2Fkc1N0YXRlLmNodW5rcylcclxuICAgICAgICAuZmlsdGVyKGMgPT4gYz8uc3RhdHVzID09PSAnbG9hZGVkJyAmJiBBcnJheS5pc0FycmF5KGMucm9hZHMpKVxyXG4gICAgICAgIC5mbGF0TWFwKGMgPT4gYy5yb2Fkcyk7XHJcblxyXG4gICAgY2FjaGVEaXJ0eSA9IGZhbHNlO1xyXG5cclxuICAgIHJldHVybiBjYWNoZWRSb2FkcztcclxufSIsImV4cG9ydCBmdW5jdGlvbiBzaG93Tm90aWZpY2F0aW9uKG1lc3NhZ2UsIHR5cGUgPSAnaW5mbycpIHtcclxuXHJcbiAgICBjb25zdCBub3RpZiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgbm90aWYuY2xhc3NOYW1lID0gYG5vdGlmIG5vdGlmLSR7dHlwZX1gO1xyXG4gICAgbm90aWYudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xyXG5cclxuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQobm90aWYpO1xyXG5cclxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgIG5vdGlmLnJlbW92ZSgpO1xyXG4gICAgfSwgMzAwMCk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gc2hvd05vdGlmaWNhdGlvbihtZXNzYWdlLCB0eXBlID0gJ2luZm8nKSB7XHJcblxyXG4gICAgY29uc3Qgbm90aWYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5vdGlmLmNsYXNzTmFtZSA9IGBub3RpZiBub3RpZi0ke3R5cGV9YDtcclxuICAgIG5vdGlmLnRleHRDb250ZW50ID0gbWVzc2FnZTtcclxuXHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKG5vdGlmKTtcclxuXHJcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICBub3RpZi5yZW1vdmUoKTtcclxuICAgIH0sIDMwMDApO1xyXG59IiwiaW1wb3J0IHsgc2hvd05vdGlmaWNhdGlvbiB9IGZyb20gJy4uL1VpL25vdGlmaWNhdGlvbi5qcyc7XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBQQVRIRklORElORyBERUJVRyAtIENMSUNLIFRPIEdFVCBDT09SRElOQVRFU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0QWRtaW5Db29yZHMobGF0LCBsbmcpIHtcclxuICAgIGlmIChsYXQgPT09IHVuZGVmaW5lZCB8fCBsbmcgPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGZvcm1hdCA9IGAke2xhdC50b0ZpeGVkKDYpfSwke2xuZy50b0ZpeGVkKDYpfWA7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChmb3JtYXQpO1xyXG4gICAgc2hvd05vdGlmaWNhdGlvbihcIkZvcm1hdCBjb2xsYWJsZSBhZG1pbiBjb3Bpw6kgOiBcIiArIGZvcm1hdCwgJ3N1Y2Nlc3MnKTtcclxufSIsImltcG9ydCB7IENIVU5LX1NJWkUgfSBmcm9tICcuLi9Db25maWcvY2h1bmsuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIHNuYXBUb0NodW5rKGxhdCwgbG5nKSB7XHJcbiAgICBjb25zdCB4ID0gTWF0aC5mbG9vcihsYXQgLyBDSFVOS19TSVpFKTtcclxuICAgIGNvbnN0IHkgPSBNYXRoLmZsb29yKGxuZyAvIENIVU5LX1NJWkUpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbGF0OiB4ICogQ0hVTktfU0laRSxcclxuICAgICAgICBsbmc6IHkgKiBDSFVOS19TSVpFLFxyXG4gICAgICAgIGNodW5rSWQ6IGAke3h9XyR7eX1gXHJcbiAgICB9O1xyXG59IiwiZXhwb3J0IGZ1bmN0aW9uIGJ1aWxkUmVxdWVzdChsYXQsIGxuZywgdHlwZUlkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9hcGkvYnVpbGQnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoeyBsYXQ6IGxhdCwgbG5nOiBsbmcsIHR5cGVfaWQ6IHR5cGVJZCB9KVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCdWlsZGluZ3MoKSB7XHJcbiAgICByZXR1cm4gZmV0Y2goJy9hcGkvbWFwLWRhdGEnKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1aWxkaW5nQ29zdHMoYnVpbGRpbmdUeXBlSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgL2FwaS9idWlsZGluZy10eXBlcy8ke2J1aWxkaW5nVHlwZUlkfS9jb3N0c2ApXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHJlcy5qc29uKCkpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gdXBncmFkZUJ1aWxkaW5nKGJ1aWxkaW5nSWQpIHtcclxuICAgIHJldHVybiBmZXRjaChgL2FwaS9idWlsZGluZy8ke2J1aWxkaW5nSWR9L3VwZ3JhZGVgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXBncmFkZUluZm8oYnVpbGRpbmdJZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKGAvYXBpL2J1aWxkaW5nLyR7YnVpbGRpbmdJZH0vdXBncmFkZS1pbmZvYClcclxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi9MZWFmbGV0V3JhcHBlci5qcyc7XHJcbmltcG9ydCB7IGZseVRvLCBnZXRNYXAgfSBmcm9tICcuL21hcC5qcyc7XHJcbmltcG9ydCB7IHJvYWRzU3RhdGUsIGdldEFsbExvYWRlZFJvYWRzIH0gZnJvbSAnLi9Sb2Fkcy9yb2Fkc1N0YXRlLmpzJztcclxuaW1wb3J0IHsgZ2V0QnVpbGRpbmdJbWFnZSB9IGZyb20gJy4vYnVpbGRpbmcuanMnO1xyXG5pbXBvcnQgeyBDSFVOS19TSVpFIH0gZnJvbSAnLi9Db25maWcvY2h1bmsuanMnO1xyXG5pbXBvcnQgeyBzYWZlTG9hZENodW5rLCBsb2FkVmlzaWJsZVJvYWRDaHVua3MgfSBmcm9tICcuL1JvYWRzL3JvYWRzLmpzJztcclxuaW1wb3J0IHsgZmluZENsb3Nlc3RQb2ludE9uUm9hZCwgZmluZENsb3Nlc3RTZWdtZW50IH0gZnJvbSAnLi9Sb2Fkcy9yb2FkVXRpbHMuanMnO1xyXG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi9VSS9ub3RpZmljYXRpb24uanMnO1xyXG5pbXBvcnQgeyBnZXRBZG1pbkNvb3JkcyB9IGZyb20gJy4vVXRpbHMvYWRtaW5fY2xpcGJvYXJkLmpzJztcclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIPCfp6AgU1RBVEVcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxubGV0IGJhc2VNYXJrZXIgPSBudWxsO1xyXG5sZXQgYmFzZUNpcmNsZSA9IG51bGw7XHJcbmxldCBiYXNlUG9zaXRpb24gPSBudWxsO1xyXG5sZXQgYmFzZUNyZWF0ZWQgPSBmYWxzZTtcclxubGV0IHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcblxyXG5sZXQgcHJldmlld01hcmtlciA9IG51bGw7XHJcbmxldCBwcmV2aWV3Q2lyY2xlID0gbnVsbDtcclxubGV0IHByZXZpZXdTbmFwTGF0TG5nID0gbnVsbDtcclxubGV0IHByZXZpZXdMaW5lID0gbnVsbDtcclxubGV0IGhpZ2hsaWdodGVkU2VnbWVudCA9IG51bGw7XHJcblxyXG5sZXQgY3VycmVudFBsYXllckZhY3Rpb24gPSAnZGVmYXVsdCc7XHJcblxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gU0VUIFBMQVlFUiBGQUNUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50UGxheWVyRmFjdGlvbihmYWN0aW9uKSB7XHJcbiAgICBjdXJyZW50UGxheWVyRmFjdGlvbiA9IChmYWN0aW9uIHx8ICdkZWZhdWx0JykudG9Mb3dlckNhc2UoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gR0VUIFBMQVlFUiBGQUNUSU9OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDdXJyZW50UGxheWVyRmFjdGlvbigpIHtcclxuICAgIHJldHVybiBjdXJyZW50UGxheWVyRmFjdGlvbjtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gSU5JVCBVSVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdEJhc2VVSSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBjb25zdCBiYXNlQnRuID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2Jhc2VCdG4nKTtcclxuXHJcbiAgICBiYXNlQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBtb2RlID0gYmFzZUJ0bi5kYXRhc2V0Lm1vZGU7XHJcblxyXG4gICAgICAgIC8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbiAgICAgICAgLy8gQ1JFQVRFIEJBU0UgTU9ERSBcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmIChtb2RlID09PSAnY3JlYXRlJykge1xyXG4gICAgICAgICAgICBpZiAoYmFzZUNyZWF0ZWQpIHtcclxuICAgICAgICAgICAgICAgIGFsZXJ0KFwiQmFzZSBkw6lqw6AgY3LDqcOpZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwbGFjaW5nQmFzZSA9IHRydWU7XHJcbiAgICAgICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnY3Jvc3NoYWlyJztcclxuXHJcbiAgICAgICAgICAgIHNob3dOb3RpZmljYXRpb24oXCJDbGlxdWUgc3VyIGxhIGNhcnRlIHBvdXIgcGxhY2VyIHRhIGJhc2VcIiwgJ2luZm8nKTtcclxuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIC8vIFJFVFVSTiBCQVNFIE1PREVcclxuICAgICAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgICAgIGlmIChtb2RlID09PSAncmV0dXJuJykge1xyXG4gICAgICAgICAgICBpZiAoIWJhc2VQb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgYWxlcnQoXCJBdWN1bmUgYmFzZSAhXCIpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmbHlUbyhiYXNlUG9zaXRpb25bMF0sIGJhc2VQb3NpdGlvblsxXSwgMTYpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG4gICAgXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gQ0xJQ0sgTUFQXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwLm9uKCdjbGljaycsICgpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFwbGFjaW5nQmFzZSB8fCBiYXNlQ3JlYXRlZCkgcmV0dXJuO1xyXG4gICAgICAgIGlmICghcHJldmlld1NuYXBMYXRMbmcpIHJldHVybjtcclxuXHJcbiAgICAgICAgY29uc3QgeyBsYXQsIGxuZyB9ID0gcHJldmlld1NuYXBMYXRMbmc7XHJcblxyXG4gICAgICAgIGlmICghaXNCYXNlUGxhY2VtZW50VmFsaWQobGF0LCBsbmcpKSB7XHJcbiAgICAgICAgICAgIGFsZXJ0KFwi4p2MIFRyb3AgcHJvY2hlIGQndW5lIGJhc2UgIVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2xlYW51cFByZXZpZXcobWFwKTtcclxuICAgICAgICBjcmVhdGVCYXNlKGxhdCwgbG5nKTtcclxuICAgIH0pO1xyXG4gICAgXHJcblxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIC8vIE1PVVNFIE1PVkUgKHByZXZpZXcgc25hcCByb2FkKVxyXG4gICAgLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuICAgIG1hcC5vbignbW91c2Vtb3ZlJywgKGUpID0+IHtcclxuXHJcbiAgICAgICAgaWYgKCFwbGFjaW5nQmFzZSkgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByb2FkcyA9IGdldEFsbExvYWRlZFJvYWRzKCk7XHJcblxyXG4gICAgICAgIGlmICghcm9hZHMubGVuZ3RoKSByZXR1cm47XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IGZpbmRDbG9zZXN0UG9pbnRPblJvYWQoZS5sYXRsbmcsIHJvYWRzKTtcclxuICAgICAgICBpZiAoIXJlc3VsdC5wb2ludCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBwcmV2aWV3U25hcExhdExuZyA9IHJlc3VsdC5wb2ludDtcclxuXHJcbiAgICAgICAgY29uc3QgaXNWYWxpZCA9IGlzQmFzZVBsYWNlbWVudFZhbGlkKHJlc3VsdC5wb2ludC5sYXQsIHJlc3VsdC5wb2ludC5sbmcpO1xyXG5cclxuICAgICAgICBjbGVhbnVwUHJldmlldyhtYXApO1xyXG5cclxuICAgICAgICBjb25zdCBjb2xvciA9IGlzVmFsaWQgPyAnZ3JlZW4nIDogJ3JlZCc7XHJcblxyXG4gICAgICAgIHByZXZpZXdDaXJjbGUgPSBMLmNpcmNsZShyZXN1bHQucG9pbnQsIHtcclxuICAgICAgICAgICAgcmFkaXVzOiA2MDAsXHJcbiAgICAgICAgICAgIGNvbG9yLFxyXG4gICAgICAgICAgICB3ZWlnaHQ6IDIsXHJcbiAgICAgICAgICAgIGZpbGxPcGFjaXR5OiAwLjFcclxuICAgICAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBwcmV2aWV3TWFya2VyID0gTC5tYXJrZXIocmVzdWx0LnBvaW50KS5hZGRUbyhtYXApO1xyXG5cclxuICAgICAgICBwcmV2aWV3TGluZSA9IEwucG9seWxpbmUoW2UubGF0bG5nLCByZXN1bHQucG9pbnRdLCB7XHJcbiAgICAgICAgICAgIGNvbG9yOiAnY3lhbicsXHJcbiAgICAgICAgICAgIHdlaWdodDogMixcclxuICAgICAgICAgICAgb3BhY2l0eTogMC42LFxyXG4gICAgICAgICAgICBkYXNoQXJyYXk6ICc1LCA1J1xyXG4gICAgICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHNlZ21lbnQgPSBmaW5kQ2xvc2VzdFNlZ21lbnQoZS5sYXRsbmcsIHJvYWRzKTtcclxuXHJcbiAgICAgICAgaWYgKHNlZ21lbnQpIHtcclxuICAgICAgICAgICAgaGlnaGxpZ2h0ZWRTZWdtZW50ID0gTC5wb2x5bGluZShzZWdtZW50LCB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogJ3llbGxvdycsXHJcbiAgICAgICAgICAgICAgICB3ZWlnaHQ6IDYsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjhcclxuICAgICAgICAgICAgfSkuYWRkVG8obWFwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnbm9uZSc7XHJcbiAgICB9KTtcclxuXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgLy8gVVBEQVRFIFZJU1VBTCBCQVNFIEFORCBPVEhFUiBCQVNFXHJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4gICAgbWFwLm9uKCd6b29tZW5kJywgKCkgPT4ge1xyXG4gICAgICAgIHVwZGF0ZUJhc2VEaXNwbGF5KCk7XHJcbiAgICAgICAgdXBkYXRlT3RoZXJCYXNlcygpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFBBVEhGSU5ESU5HIERFQlVHIEZPUiBBRE1JTiAtIENMSUNLIFRPIEdFVCBDT09SRElOQVRFU1xyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyKCkge1xyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBzaG93Tm90aWZpY2F0aW9uKFwiTW9kZSBBZG1pbiBhY3RpdsOpIDogY2xpcXVleiBzdXIgbGEgY2FydGVcIiwgJ2luZm8nKTtcclxuICAgICAgICBcclxuICAgIG1hcC5vbignY2xpY2snLCAoZSkgPT4ge1xyXG4gICAgICAgIGdldEFkbWluQ29vcmRzKGUubGF0bG5nLmxhdCwgZS5sYXRsbmcubG5nKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG53aW5kb3cuZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyID0gZW5hYmxlQWRtaW5Db29yZGluYXRlUGlja2VyO1xyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8g8J+nuSBDTEVBTiBQUkVWSUVXXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNsZWFudXBQcmV2aWV3KCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIHByZXZpZXdNYXJrZXIgJiYgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdNYXJrZXIpO1xyXG4gICAgcHJldmlld0NpcmNsZSAmJiBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0NpcmNsZSk7XHJcbiAgICBwcmV2aWV3TGluZSAmJiBtYXAucmVtb3ZlTGF5ZXIocHJldmlld0xpbmUpO1xyXG4gICAgaGlnaGxpZ2h0ZWRTZWdtZW50ICYmIG1hcC5yZW1vdmVMYXllcihoaWdobGlnaHRlZFNlZ21lbnQpO1xyXG5cclxuICAgIHByZXZpZXdNYXJrZXIgPSBudWxsO1xyXG4gICAgcHJldmlld0NpcmNsZSA9IG51bGw7XHJcbiAgICBwcmV2aWV3TGluZSA9IG51bGw7XHJcbiAgICBoaWdobGlnaHRlZFNlZ21lbnQgPSBudWxsO1xyXG5cclxuICAgIG1hcC5nZXRDb250YWluZXIoKS5zdHlsZS5jdXJzb3IgPSAnJztcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVkFMSURBVElPTlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiBpc0Jhc2VQbGFjZW1lbnRWYWxpZChsYXQsIGxuZykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIHJldHVybiBvdGhlckJhc2VzLmV2ZXJ5KGJhc2UgPT4ge1xyXG5cclxuICAgICAgICBjb25zdCBkaXN0ID0gbWFwLmRpc3RhbmNlKFxyXG4gICAgICAgICAgICBbbGF0LCBsbmddLFxyXG4gICAgICAgICAgICBbYmFzZS5sYXQsIGJhc2UubG5nXVxyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIHJldHVybiBkaXN0ID49IDExMDA7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gQ1JFQVRFIEJBU0VcclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuZnVuY3Rpb24gY3JlYXRlQmFzZShsYXQsIGxuZykge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIHBsYWNpbmdCYXNlID0gZmFsc2U7XHJcbiAgICBiYXNlUG9zaXRpb24gPSBbbGF0LCBsbmddO1xyXG5cclxuICAgIGZseVRvKGxhdCwgbG5nKTtcclxuXHJcbiAgICBiYXNlQ2lyY2xlID0gTC5jaXJjbGUoYmFzZVBvc2l0aW9uLCB7XHJcbiAgICAgICAgcmFkaXVzOiA1MDAsXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIGNvbnN0IGJhc2VUeXBlSWQgPSAxO1xyXG4gICAgZmV0Y2goJy9hcGkvYnVpbGQnLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczogeyAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBsYXQsXHJcbiAgICAgICAgICAgIGxuZyxcclxuICAgICAgICAgICAgdHlwZV9pZDogYmFzZVR5cGVJZFxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICBpZiAoIXJlcy5vaykgcmV0dXJuIHJlcy5qc29uKCkudGhlbihlcnIgPT4geyB0aHJvdyBuZXcgRXJyb3IoZXJyLmVycm9yIHx8IFwiQVBJIGVycm9yXCIpIH0pO1xyXG4gICAgICAgIHJldHVybiByZXMuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC50aGVuKCgpID0+IHtcclxuICAgIGJhc2VDcmVhdGVkID0gdHJ1ZTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKGVycik7XHJcbiAgICAgICAgcmVtb3ZlQmFzZSgpO1xyXG4gICAgICAgIGFsZXJ0KFwiRXJyZXVyIGNyw6lhdGlvbiBiYXNlIDogXCIgKyBlcnIubWVzc2FnZSk7XHJcbiAgICB9KTtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbiAgICB1cGRhdGVCYXNlRGlzcGxheSgpO1xyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBSRU1PVkUgQkFTRVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiByZW1vdmVCYXNlKCkge1xyXG5cclxuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xyXG5cclxuICAgIGJhc2VNYXJrZXIgJiYgbWFwLnJlbW92ZUxheWVyKGJhc2VNYXJrZXIpO1xyXG4gICAgYmFzZUNpcmNsZSAmJiBtYXAucmVtb3ZlTGF5ZXIoYmFzZUNpcmNsZSk7XHJcblxyXG4gICAgYmFzZU1hcmtlciA9IG51bGw7XHJcbiAgICBiYXNlQ2lyY2xlID0gbnVsbDtcclxuICAgIGJhc2VQb3NpdGlvbiA9IG51bGw7XHJcbiAgICBiYXNlQ3JlYXRlZCA9IGZhbHNlO1xyXG4gICAgcGxhY2luZ0Jhc2UgPSBmYWxzZTtcclxuXHJcbiAgICBtYXAuZ2V0Q29udGFpbmVyKCkuc3R5bGUuY3Vyc29yID0gJyc7XHJcbn1cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTE9BRCBPVEhFUiBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmxldCBvdGhlckJhc2VzID0gW107XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZE90aGVyQmFzZShsYXQsIGxuZywgcHNldWRvLCBmYWN0aW9uKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGxuZykpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBjaXJjbGUgPSBMLmNpcmNsZShbbGF0LCBsbmddLCB7XHJcbiAgICAgICAgcmFkaXVzOiA1MDAsXHJcbiAgICAgICAgY29sb3I6ICdyZWQnXHJcbiAgICB9KS5hZGRUbyhtYXApO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbihtYXAuZ2V0Wm9vbSgpLCBmYWN0aW9uKTtcclxuXHJcbiAgICBsZXQgbWFya2VyID0gbnVsbDtcclxuXHJcbiAgICBpZiAoaWNvbikge1xyXG4gICAgICAgIG1hcmtlciA9IEwubWFya2VyKFtsYXQsIGxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAuYWRkVG8obWFwKVxyXG4gICAgICAgICAgICAuYmluZFBvcHVwKGDwn4+V77iPIEJhc2UgZGUgJHtwc2V1ZG99YCk7XHJcbiAgICB9XHJcblxyXG4gICAgb3RoZXJCYXNlcy5wdXNoKHsgbGF0LCBsbmcsIHBzZXVkbywgbWFya2VyLCBjaXJjbGUsIGZhY3Rpb24gfSk7XHJcbn1cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbi8vIFVQREFURSBPVEhFUiBCQVNFXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIHVwZGF0ZU90aGVyQmFzZXMoKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcbiAgICBjb25zdCB6b29tID0gbWFwLmdldFpvb20oKTtcclxuXHJcbiAgICBvdGhlckJhc2VzLmZvckVhY2goYmFzZSA9PiB7XHJcblxyXG4gICAgICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbih6b29tLCBiYXNlLmZhY3Rpb24pO1xyXG5cclxuICAgICAgICBpZiAoIWljb24pIHtcclxuICAgICAgICAgICAgaWYgKGJhc2UubWFya2VyKSBtYXAucmVtb3ZlTGF5ZXIoYmFzZS5tYXJrZXIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIWJhc2UubWFya2VyKSB7XHJcbiAgICAgICAgICAgIGJhc2UubWFya2VyID0gTC5tYXJrZXIoW2Jhc2UubGF0LCBiYXNlLmxuZ10sIHsgaWNvbiB9KVxyXG4gICAgICAgICAgICAgICAgLmFkZFRvKG1hcClcclxuICAgICAgICAgICAgICAgIC5iaW5kUG9wdXAoYPCfj5XvuI8gQmFzZSBkZSAke2Jhc2UucHNldWRvfWApO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoIW1hcC5oYXNMYXllcihiYXNlLm1hcmtlcikpIGJhc2UubWFya2VyLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgICAgIGJhc2UubWFya2VyLnNldEljb24oaWNvbik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gTE9BRCBGUk9NIFNFUlZFUlxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJhc2VGcm9tU2VydmVyKGxhdCwgbG5nKSB7XHJcblxyXG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XHJcblxyXG4gICAgaWYgKCFOdW1iZXIuaXNGaW5pdGUobGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGxuZykpIHJldHVybjtcclxuXHJcbiAgICBiYXNlUG9zaXRpb24gPSBbbGF0LCBsbmddO1xyXG4gICAgYmFzZUNyZWF0ZWQgPSB0cnVlO1xyXG5cclxuICAgIGJhc2VDaXJjbGUgPSBMLmNpcmNsZShiYXNlUG9zaXRpb24sIHtcclxuICAgICAgICByYWRpdXM6IDUwMCxcclxuICAgIH0pLmFkZFRvKG1hcCk7XHJcblxyXG4gICAgdXBkYXRlQmFzZURpc3BsYXkoKTtcclxufVxyXG5cclxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cclxuLy8gVVBEQVRFIEJBU0UgRElTUExBWVxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG5mdW5jdGlvbiB1cGRhdGVCYXNlRGlzcGxheSgpIHtcclxuXHJcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcclxuXHJcbiAgICBpZiAoIWJhc2VQb3NpdGlvbikgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGljb24gPSBjcmVhdGVCYXNlSWNvbihtYXAuZ2V0Wm9vbSgpLCBjdXJyZW50UGxheWVyRmFjdGlvbik7XHJcblxyXG4gICAgaWYgKCFpY29uKSB7XHJcbiAgICAgICAgaWYgKGJhc2VNYXJrZXIpIG1hcC5yZW1vdmVMYXllcihiYXNlTWFya2VyKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKCFiYXNlTWFya2VyKSB7XHJcbiAgICAgICAgYmFzZU1hcmtlciA9IEwubWFya2VyKGJhc2VQb3NpdGlvbiwgeyBpY29uIH0pLmFkZFRvKG1hcCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGlmICghbWFwLmhhc0xheWVyKGJhc2VNYXJrZXIpKSBiYXNlTWFya2VyLmFkZFRvKG1hcCk7XHJcbiAgICAgICAgYmFzZU1hcmtlci5zZXRJY29uKGljb24pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxyXG4vLyBDUkVBVEUgQkFTRSBJQ09OXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09XHJcbmZ1bmN0aW9uIGNyZWF0ZUJhc2VJY29uKHpvb20sIGZhY3Rpb24pIHtcclxuXHJcbiAgICBpZiAoem9vbSA8IDEzKSByZXR1cm4gbnVsbDtcclxuXHJcbiAgICBjb25zdCBzaXplID0gZmFjdGlvbiAhPT0gJ25vbWFkZXMnID8gKHpvb20gPiAxNSA/IDEwMCA6IDcwKSA6ICh6b29tID4gMTUgPyA3NSA6IDYwKTtcclxuXHJcbiAgICAvLyBUb3Vqb3VycyB1dGlsaXNlciBsJ2ljw7RuZSBkZSBsYSBmYWN0aW9uIChsZSBmYWxsYmFjayBBcGFjaGUgZ8OocmUgbGVzIDQwNClcclxuICAgIC8vIFNpIGwnaWPDtG5lIG4nZXhpc3RlIHBhcywgQXBhY2hlIHJlZGlyaWdlIHZlcnMgZGVmYXVsdCBhdXRvbWF0aXF1ZW1lbnRcclxuICAgIGNvbnN0IGljb25VcmwgPSBnZXRCdWlsZGluZ0ltYWdlKGZhY3Rpb24sICdiYXNlJyk7XHJcblxyXG4gICAgcmV0dXJuIEwuaWNvbih7XHJcbiAgICAgICAgaWNvblVybDogaWNvblVybCxcclxuICAgICAgICBpY29uU2l6ZTogW3NpemUsIHNpemVdLFxyXG4gICAgICAgIGljb25BbmNob3I6IFtzaXplIC8gMiwgc2l6ZSAvIDJdLFxyXG4gICAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLXNpemUgLyAyXVxyXG4gICAgfSk7XHJcbn0iLCJpbXBvcnQgTCBmcm9tICcuLi9MZWFmbGV0V3JhcHBlci5qcyc7XG5pbXBvcnQgeyBnZXRNYXAgfSBmcm9tICcuL21hcC5qcyc7XG5pbXBvcnQgeyBnZXRCdWlsZGluZ0Nvc3RzLCBidWlsZFJlcXVlc3QgfSBmcm9tICcuL2FwaS5qcyc7XG5pbXBvcnQgeyBnZXRCdWlsZGluZ0ltYWdlIH0gZnJvbSAnLi9idWlsZGluZy5qcyc7XG5pbXBvcnQgeyBzaG93Tm90aWZpY2F0aW9uIH0gZnJvbSAnLi9VSS9ub3RpZmljYXRpb24uanMnO1xuXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PVxuLy8gQlVJTEQgTU9ERSBTVEFURVxuLy8gPT09PT09PT09PT09PT09PT09PT09PT1cbmxldCBzZWxlY3RlZEJ1aWxkaW5nVHlwZSA9IG51bGw7XG5sZXQgcHJldmlld0J1aWxkaW5nTWFya2VyID0gbnVsbDtcblxuLyoqXG4gKiBJbml0aWFsaXNlIGxlIG1vZGUgY29uc3RydWN0aW9uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpbml0QnVpbGRNb2RlKCkge1xuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xuXG4gICAgLy8gVXRpbGlzZXIgbGEgZMOpbMOpZ2F0aW9uIGQnw6l2w6luZW1lbnRzIHBvdXIgbGVzIGJvdXRvbnMgZHluYW1pcXVlc1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMgKGUpID0+IHtcbiAgICAgICAgY29uc3QgYnRuID0gZS50YXJnZXQuY2xvc2VzdCgnLmJ1aWxkLWl0ZW0nKTtcbiAgICAgICAgaWYgKCFidG4pIHJldHVybjtcblxuICAgICAgICBjb25zdCB0eXBlSWQgPSBidG4uZGF0YXNldC50eXBlSWQ7XG4gICAgICAgIGlmICghdHlwZUlkKSByZXR1cm47XG5cbiAgICAgICAgLy8gU8OpbGVjdGlvbm5lciBsZSB0eXBlIGRlIGLDonRpbWVudFxuICAgICAgICBhd2FpdCBzZWxlY3RCdWlsZGluZ1R5cGUodHlwZUlkLCBidG4pO1xuICAgIH0pO1xuXG4gICAgLy8gQ2xpY2sgc3VyIGxhIGNhcnRlIHBvdXIgY29uc3RydWlyZVxuICAgIG1hcC5vbignY2xpY2snLCBvbk1hcENsaWNrKTtcblxuICAgIC8vIE1vdXNlIG1vdmUgcG91ciBwcsOpdmlzdWFsaXNlclxuICAgIG1hcC5vbignbW91c2Vtb3ZlJywgb25NYXBNb3VzZU1vdmUpO1xufVxuXG4vKipcbiAqIFPDqWxlY3Rpb25uZSB1biB0eXBlIGRlIGLDonRpbWVudCDDoCBjb25zdHJ1aXJlXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIHNlbGVjdEJ1aWxkaW5nVHlwZSh0eXBlSWQsIGJ1dHRvbikge1xuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xuXG4gICAgLy8gRMOpc8OpbGVjdGlvbm5lciBwcsOpY8OpZGVtbWVudFxuICAgIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKTtcblxuICAgIC8vIEfDqXJlciBsZSBjYXMgc3DDqWNpYWwgZGUgbGEgYmFzZSAoYm91dG9uICNiYXNlQnRuKVxuICAgIGlmIChidXR0b24uaWQgPT09ICdiYXNlQnRuJyAmJiB0eXBlSWQgPT0gMSkge1xuICAgICAgICAvLyBMYSBiYXNlIGVzdCBnw6lyw6llIHBhciBiYXNlLmpzLCBvbiBuZSBmYWl0IHJpZW4gaWNpXG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBNZXR0cmUgZW4gw6l2aWRlbmNlIGxlIGJvdXRvbiBzw6lsZWN0aW9ubsOpXG4gICAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NlbGVjdGVkJyk7XG5cbiAgICAvLyBSw6ljdXDDqXJlciBsZXMgY2/Du3RzXG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGdldEJ1aWxkaW5nQ29zdHModHlwZUlkKTtcbiAgICAgICAgc2VsZWN0ZWRCdWlsZGluZ1R5cGUgPSB7XG4gICAgICAgICAgICBpZDogdHlwZUlkLFxuICAgICAgICAgICAgbmFtZTogZGF0YS5uYW1lLFxuICAgICAgICAgICAgY29zdHM6IGRhdGEuY29zdHMsXG4gICAgICAgICAgICBidXR0b246IGJ1dHRvblxuICAgICAgICB9O1xuXG4gICAgICAgIHNob3dOb3RpZmljYXRpb24oYFPDqWxlY3Rpb25uw6k6ICR7ZGF0YS5uYW1lfS4gQ2xpcXVlIHN1ciBsYSBjYXJ0ZSBwb3VyIGNvbnN0cnVpcmUuYCwgJ2luZm8nKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgY2/Du3RzXCIsIGUpO1xuICAgICAgICBzaG93Tm90aWZpY2F0aW9uKFwiRXJyZXVyIGxvcnMgZGUgbGEgcsOpY3Vww6lyYXRpb24gZGVzIGNvw7t0c1wiLCAnZXJyb3InKTtcbiAgICB9XG59XG5cbi8qKlxuICogTmV0dG9pZSBsYSBzw6lsZWN0aW9uIGFjdHVlbGxlXG4gKi9cbmZ1bmN0aW9uIGNsZWFyQnVpbGRpbmdTZWxlY3Rpb24oKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG5cbiAgICBpZiAocHJldmlld0J1aWxkaW5nTWFya2VyKSB7XG4gICAgICAgIG1hcC5yZW1vdmVMYXllcihwcmV2aWV3QnVpbGRpbmdNYXJrZXIpO1xuICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xuICAgIH1cblxuICAgIHNlbGVjdGVkQnVpbGRpbmdUeXBlID0gbnVsbDtcblxuICAgIC8vIFJldGlyZXIgbGEgY2xhc3NlIHNlbGVjdGVkIGRlIHRvdXMgbGVzIGJvdXRvbnNcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYnVpbGQtaXRlbScpLmZvckVhY2goYnRuID0+IHtcbiAgICAgICAgYnRuLmNsYXNzTGlzdC5yZW1vdmUoJ3NlbGVjdGVkJyk7XG4gICAgfSk7XG59XG5cbi8qKlxuICogR2VzdGlvbiBkdSBjbGljayBzdXIgbGEgY2FydGVcbiAqL1xuYXN5bmMgZnVuY3Rpb24gb25NYXBDbGljayhlKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG5cbiAgICBpZiAoIXNlbGVjdGVkQnVpbGRpbmdUeXBlKSByZXR1cm47XG4gICAgaWYgKCFwcmV2aWV3QnVpbGRpbmdNYXJrZXIpIHJldHVybjtcblxuICAgIGNvbnN0IGxhdCA9IGUubGF0bG5nLmxhdDtcbiAgICBjb25zdCBsbmcgPSBlLmxhdGxuZy5sbmc7XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGJ1aWxkUmVxdWVzdChsYXQsIGxuZywgc2VsZWN0ZWRCdWlsZGluZ1R5cGUuaWQpO1xuICAgICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICAgIGlmIChyZXNwb25zZS5vaykge1xuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbihgJHtzZWxlY3RlZEJ1aWxkaW5nVHlwZS5uYW1lfSBjb25zdHJ1aXQgYXZlYyBzdWNjw6hzICFgLCAnc3VjY2VzcycpO1xuXG4gICAgICAgICAgICAvLyBOZXR0b3llclxuICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdCdWlsZGluZ01hcmtlcik7XG4gICAgICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xuICAgICAgICAgICAgY2xlYXJCdWlsZGluZ1NlbGVjdGlvbigpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hvd05vdGlmaWNhdGlvbihgRXJyZXVyOiAke2RhdGEuZXJyb3J9YCwgJ2Vycm9yJyk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSBjb25zdHJ1Y3Rpb25cIiwgZSk7XG4gICAgICAgIHNob3dOb3RpZmljYXRpb24oXCJFcnJldXIgcsOpc2VhdSBsb3JzIGRlIGxhIGNvbnN0cnVjdGlvblwiLCAnZXJyb3InKTtcbiAgICB9XG59XG5cbi8qKlxuICogUHLDqXZpc3VhbGlzYXRpb24gZGUgbGEgcG9zaXRpb24gZGUgY29uc3RydWN0aW9uXG4gKi9cbmZ1bmN0aW9uIG9uTWFwTW91c2VNb3ZlKGUpIHtcbiAgICBjb25zdCBtYXAgPSBnZXRNYXAoKTtcblxuICAgIGlmICghc2VsZWN0ZWRCdWlsZGluZ1R5cGUpIHtcbiAgICAgICAgLy8gTmV0dG95ZXIgbGVzIG1hcmtlcnMgZGUgcHLDqXZpc3VhbGlzYXRpb25cbiAgICAgICAgaWYgKHByZXZpZXdCdWlsZGluZ01hcmtlcikge1xuICAgICAgICAgICAgbWFwLnJlbW92ZUxheWVyKHByZXZpZXdCdWlsZGluZ01hcmtlcik7XG4gICAgICAgICAgICBwcmV2aWV3QnVpbGRpbmdNYXJrZXIgPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICAvLyBBam91dGVyIHVuIG1hcmtlciBkZSBwcsOpdmlzdWFsaXNhdGlvblxuICAgIGlmICghcHJldmlld0J1aWxkaW5nTWFya2VyKSB7XG4gICAgICAgIHByZXZpZXdCdWlsZGluZ01hcmtlciA9IEwubWFya2VyKFtlLmxhdGxuZy5sYXQsIGUubGF0bG5nLmxuZ10pLmFkZFRvKG1hcCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcHJldmlld0J1aWxkaW5nTWFya2VyLnNldExhdExuZyhlLmxhdGxuZyk7XG4gICAgfVxufVxuXG4vKipcbiAqIEFjdGl2ZSBsZSBtb2RlIGNvbnN0cnVjdGlvbiBwb3VyIHVuIHR5cGUgZGUgYsOidGltZW50XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBhY3RpdmF0ZUJ1aWxkTW9kZSh0eXBlSWQpIHtcbiAgICBjb25zdCBidG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS10eXBlLWlkPVwiJHt0eXBlSWR9XCJdYCk7XG4gICAgaWYgKGJ0bikge1xuICAgICAgICBidG4uY2xpY2soKTtcbiAgICB9XG59XG5cbi8qKlxuICogRMOpc2FjdGl2ZSBsZSBtb2RlIGNvbnN0cnVjdGlvblxuICovXG5leHBvcnQgZnVuY3Rpb24gZGVhY3RpdmF0ZUJ1aWxkTW9kZSgpIHtcbiAgICBjbGVhckJ1aWxkaW5nU2VsZWN0aW9uKCk7XG59XG5cbi8qKlxuICogVsOpcmlmaWUgc2kgbGUgbW9kZSBjb25zdHJ1Y3Rpb24gZXN0IGFjdGlmXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0J1aWxkTW9kZUFjdGl2ZSgpIHtcbiAgICByZXR1cm4gc2VsZWN0ZWRCdWlsZGluZ1R5cGUgIT09IG51bGw7XG59IiwiaW1wb3J0IEwgZnJvbSAnLi4vTGVhZmxldFdyYXBwZXIuanMnO1xuaW1wb3J0IHsgZ2V0TWFwIH0gZnJvbSAnLi9tYXAuanMnO1xuaW1wb3J0IHsgZ2V0QnVpbGRpbmdDb3N0cywgdXBncmFkZUJ1aWxkaW5nLCBnZXRVcGdyYWRlSW5mbyB9IGZyb20gJy4vYXBpLmpzJztcbmltcG9ydCB7IGdldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIH0gZnJvbSAnLi9iYXNlLmpzJztcblxuLy8gQ2FjaGUgZGVzIGluZm9ybWF0aW9ucyBkZSBiw6J0aW1lbnRzXG5sZXQgYnVpbGRpbmdNYXJrZXJzID0gbmV3IE1hcCgpO1xuXG4vKipcbiAqIENoYXJnZSBsZXMgYsOidGltZW50cyBzdXIgbGEgY2FydGUgYXZlYyBsZXVycyBwb3B1cHMgaW50ZXJhY3RpZnNcbiAqIEBwYXJhbSB7QXJyYXl9IGJ1aWxkaW5ncyAtIExpc3RlIGRlcyBiw6J0aW1lbnRzIMOgIGFmZmljaGVyXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2FkQnVpbGRpbmdzRnJvbURhdGEoYnVpbGRpbmdzKSB7XG4gICAgY29uc3QgbWFwID0gZ2V0TWFwKCk7XG5cbiAgICBpZiAoIW1hcCkge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiTWFwIG5vdCBpbml0aWFsaXplZFwiKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghYnVpbGRpbmdzIHx8ICFBcnJheS5pc0FycmF5KGJ1aWxkaW5ncykpIHtcbiAgICAgICAgY29uc29sZS53YXJuKFwibG9hZEJ1aWxkaW5nc0Zyb21EYXRhOiBpbnZhbGlkIGJ1aWxkaW5ncyBkYXRhXCIpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgYnVpbGRpbmdzLmZvckVhY2goYiA9PiB7XG4gICAgICAgIC8vIElnbm9yZXIgbGVzIGJhc2VzIC0gZWxsZXMgc29udCBnw6lyw6llcyBwYXIgYmFzZS5qc1xuICAgICAgICBpZiAoYi5jb2RlID09PSAnYmFzZScgfHwgYi50eXBlPy50b0xvd2VyQ2FzZSgpID09PSAnYmFzZScpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghTnVtYmVyLmlzRmluaXRlKGIubGF0KSB8fCAhTnVtYmVyLmlzRmluaXRlKGIubG5nKSkge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKFwi4p2MIEJ1aWxkaW5nIGlnbm9yw6kgKGNvb3JkIGludmFsaWRlKVwiLCBiKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIENyw6llciBsJ2ljw7RuZSBhdmVjIGwnaW1hZ2UgZHUgYsOidGltZW50XG4gICAgICAgIGNvbnN0IGljb24gPSBjcmVhdGVCdWlsZGluZ0ljb24oYi5jb2RlKTtcblxuICAgICAgICAvLyBTdG9ja2VyIGxlcyBkb25uw6llcyBkdSBidWlsZGluZyBwb3VyIGFjY8OocyB1bHTDqXJpZXVyXG4gICAgICAgIGNvbnN0IGJ1aWxkaW5nRGF0YSA9IHtcbiAgICAgICAgICAgIGlkOiBiLmlkLFxuICAgICAgICAgICAgdHlwZTogYi50eXBlLFxuICAgICAgICAgICAgbGV2ZWw6IGIubGV2ZWwsXG4gICAgICAgICAgICBjb2RlOiBiLmNvZGVcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBDcsOpZXIgbGUgbWFya2VyIGF2ZWMgcG9wdXAgc3RhdGlxdWUgKHBhcyBkJ2FzeW5jKVxuICAgICAgICBjb25zdCBtYXJrZXIgPSBMLm1hcmtlcihbYi5sYXQsIGIubG5nXSwgeyBpY29uIH0pXG4gICAgICAgICAgICAuYWRkVG8obWFwKVxuICAgICAgICAgICAgLmJpbmRQb3B1cChjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZ0RhdGEpKTtcblxuICAgICAgICBidWlsZGluZ01hcmtlcnMuc2V0KGIuaWQsIHsgbWFya2VyLCBkYXRhOiBidWlsZGluZ0RhdGEgfSk7XG5cbiAgICAgICAgLy8gQ2hhcmdlciBsZXMgaW5mb3MgZCdhbcOpbGlvcmF0aW9uIGVuIGFycmnDqHJlLXBsYW5cbiAgICAgICAgaWYgKGIuaWQpIHtcbiAgICAgICAgICAgIGxvYWRVcGdyYWRlSW5mb0FzeW5jKGIuaWQsIG1hcmtlciwgYnVpbGRpbmdEYXRhKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuXG4vKipcbiAqIENyw6llIHVuIHBvcHVwIHNpbXBsZSAoc3luY2hyb25lKVxuICovXG5mdW5jdGlvbiBjcmVhdGVTaW1wbGVQb3B1cChidWlsZGluZykge1xuICAgIHJldHVybiBgXG4gICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGluZy1wb3B1cFwiPlxuICAgICAgICAgICAgPGgzPiR7YnVpbGRpbmcudHlwZSB8fCAnQsOidGltZW50J308L2gzPlxuICAgICAgICAgICAgPHA+Tml2ZWF1OiAke2J1aWxkaW5nLmxldmVsIHx8IDF9PC9wPlxuICAgICAgICAgICAgPGRpdiBpZD1cInVwZ3JhZGUtaW5mby0ke2J1aWxkaW5nLmlkfVwiPkNoYXJnZW1lbnQuLi48L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgYDtcbn1cblxuLyoqXG4gKiBDaGFyZ2UgbGVzIGluZm9zIGQnYW3DqWxpb3JhdGlvbiBlbiBhcnJpw6hyZS1wbGFuXG4gKi9cbmFzeW5jIGZ1bmN0aW9uIGxvYWRVcGdyYWRlSW5mb0FzeW5jKGJ1aWxkaW5nSWQsIG1hcmtlciwgYnVpbGRpbmdEYXRhKSB7XG4gICAgaWYgKCFidWlsZGluZ0lkKSB7XG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBnZXRVcGdyYWRlSW5mbyhidWlsZGluZ0lkKTtcbiAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQoY3JlYXRlU2ltcGxlUG9wdXAoYnVpbGRpbmdEYXRhKSk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1cGdyYWRlSW5mbyA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgIGNvbnN0IGNhblVwZ3JhZGUgPSB1cGdyYWRlSW5mbz8uY2FuVXBncmFkZSA/PyBmYWxzZTtcbiAgICAgICAgY29uc3QgbWF4TGV2ZWwgPSB1cGdyYWRlSW5mbz8ubWF4TGV2ZWwgPz8gMTtcbiAgICAgICAgY29uc3QgbmVlZGVkID0gdXBncmFkZUluZm8/Lm5lZWRlZCA/PyB7fTtcbiAgICAgICAgY29uc3QgYXZhaWxhYmxlID0gdXBncmFkZUluZm8/LmF2YWlsYWJsZSA/PyB7fTtcblxuICAgICAgICBsZXQgY29zdHNIdG1sID0gJyc7XG4gICAgICAgIGlmICghY2FuVXBncmFkZSAmJiBtYXhMZXZlbCA+IDEpIHtcbiAgICAgICAgICAgIGNvc3RzSHRtbCA9ICc8ZGl2IGNsYXNzPVwidXBncmFkZS1jb3N0cyB1bmF2YWlsYWJsZVwiPkNvw7t0cyBpbnN1ZmZpc2FudHM8L2Rpdj4nO1xuICAgICAgICB9IGVsc2UgaWYgKE9iamVjdC5rZXlzKG5lZWRlZCkubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgY29zdHNIdG1sID0gJzxkaXYgY2xhc3M9XCJ1cGdyYWRlLWNvc3RzXCI+JztcbiAgICAgICAgICAgIGZvciAoY29uc3QgW3Jlc291cmNlLCBhbW91bnRdIG9mIE9iamVjdC5lbnRyaWVzKG5lZWRlZCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBoYXMgPSBhdmFpbGFibGVbcmVzb3VyY2VdIHx8IDA7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xzID0gaGFzID49IGFtb3VudCA/ICdlbm91Z2gnIDogJ21pc3NpbmcnO1xuICAgICAgICAgICAgICAgIGNvc3RzSHRtbCArPSBgPGRpdiBjbGFzcz1cIiR7Y2xzfVwiPiR7cmVzb3VyY2V9OiAke2hhc30vJHthbW91bnR9PC9kaXY+YDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvc3RzSHRtbCArPSAnPC9kaXY+JztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHBvcHVwQ29udGVudCA9IGBcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJidWlsZGluZy1wb3B1cFwiPlxuICAgICAgICAgICAgICAgIDxoMz4ke2J1aWxkaW5nRGF0YS50eXBlfTwvaDM+XG4gICAgICAgICAgICAgICAgPHA+Tml2ZWF1OiAke2J1aWxkaW5nRGF0YS5sZXZlbH0gLyAke21heExldmVsfTwvcD5cbiAgICAgICAgICAgICAgICAke2Nvc3RzSHRtbH1cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicG9wdXAtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICAgICAgICAke2NhblVwZ3JhZGUgP1xuICAgICAgICAgICAgICAgICAgICAgICAgYDxidXR0b24gb25jbGljaz1cIndpbmRvdy51cGdyYWRlQnVpbGRpbmcoJHtidWlsZGluZ0lkfSlcIiBjbGFzcz1cImJ0bi11cGdyYWRlXCI+QW3DqWxpb3JlcjwvYnV0dG9uPmAgOlxuICAgICAgICAgICAgICAgICAgICAgICAgYDxidXR0b24gZGlzYWJsZWQgY2xhc3M9XCJidG4tdXBncmFkZVwiPkFtw6lsaW9yZXI8L2J1dHRvbj5gXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICBgO1xuXG4gICAgICAgIG1hcmtlci5zZXRQb3B1cENvbnRlbnQocG9wdXBDb250ZW50KTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgaW5mb3MgZCdhbcOpbGlvcmF0aW9uXCIsIGUpO1xuICAgICAgICBtYXJrZXIuc2V0UG9wdXBDb250ZW50KGNyZWF0ZVNpbXBsZVBvcHVwKGJ1aWxkaW5nRGF0YSkpO1xuICAgIH1cbn1cblxuLyoqXG4gKiBDaGFyZ2UgbGVzIGLDonRpbWVudHMgZGVwdWlzIGwnQVBJIChmb25jdGlvbiBkZSBjb21wYXRpYmlsaXTDqSlcbiAqIEBkZXByZWNhdGVkIFV0aWxpc2VyIGxvYWRCdWlsZGluZ3NGcm9tRGF0YShkYXRhKSDDoCBsYSBwbGFjZVxuICovXG5leHBvcnQgZnVuY3Rpb24gbG9hZEJ1aWxkaW5ncygpIHtcbiAgICBmZXRjaCgnL2FwaS9tYXAtZGF0YScpXG4gICAgICAgIC50aGVuKHJlcyA9PiByZXMuanNvbigpKVxuICAgICAgICAudGhlbihkYXRhID0+IHtcbiAgICAgICAgICAgIGxvYWRCdWlsZGluZ3NGcm9tRGF0YShkYXRhKTtcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGNoYXJnZW1lbnQgYsOidGltZW50c1wiLCBlcnIpO1xuICAgICAgICB9KTtcbn1cblxuLyoqXG4gKiBDcsOpZSB1bmUgaWPDtG5lIChtYXJrZXIpIHBvdXIgdW4gYsOidGltZW50IGF2ZWMgc29uIGltYWdlIHNww6ljaWZpcXVlLlxuICogQHBhcmFtIHtzdHJpbmd9IGJ1aWxkaW5nQ29kZSAtIExlIGNvZGUgZHUgYsOidGltZW50IChleDogXCJiYXNlXCIsIFwiaXJvbl9taW5lXCIpLlxuICogQHJldHVybnMge0wuSWNvbn0gTCdpY8O0bmUgTGVhZmxldCBwZXJzb25uYWxpc8OpZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUJ1aWxkaW5nSWNvbihidWlsZGluZ0NvZGUpIHtcbiAgICBjb25zdCBmYWN0aW9uID0gZ2V0Q3VycmVudFBsYXllckZhY3Rpb24oKTtcbiAgICBjb25zdCBzaXplID0gNzA7IC8vIFRhaWxsZSBwYXIgZMOpZmF1dCBkZXMgaWPDtG5lc1xuXG4gICAgcmV0dXJuIEwuaWNvbih7XG4gICAgICAgIGljb25Vcmw6IGdldEJ1aWxkaW5nSW1hZ2UoZmFjdGlvbiwgYnVpbGRpbmdDb2RlKSxcbiAgICAgICAgaWNvblNpemU6IFtzaXplLCBzaXplXSxcbiAgICAgICAgaWNvbkFuY2hvcjogW3NpemUgLyAyLCBzaXplIC8gMl0sXG4gICAgICAgIHBvcHVwQW5jaG9yOiBbMCwgLXNpemUgLyAyXVxuICAgIH0pO1xufVxuXG4vKipcbiAqIFJldG91cm5lIGR5bmFtaXF1ZW1lbnQgbGUgY2hlbWluIGRlIGwnaW1hZ2UgYXZlYyBmYWxsYmFjayB2ZXJzIGRlZmF1bHQuXG4gKiBAcGFyYW0ge3N0cmluZ30gZmFjdGlvbiAtIExlIGNvZGUgb3Ugbm9tIGRlIGxhIGZhY3Rpb24gKGV4OiBcIkVtcGlyZVwiLCBcIkNlbmRyZXNcIikuXG4gKiBAcGFyYW0ge3N0cmluZ30gYnVpbGRpbmcgLSBMZSBjb2RlIGR1IGLDonRpbWVudCAoZXg6IFwiYmFzZVwiLCBcImlyb25fbWluZVwiKS5cbiAqIEByZXR1cm5zIHtzdHJpbmd9IExlIGNoZW1pbiBkZSBsJ2ljw7RuZS5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGdldEJ1aWxkaW5nSW1hZ2UoZmFjdGlvbiwgYnVpbGRpbmcpIHtcbiAgICAvLyBOb3JtYWxpc2VyIGxlIG5vbSBkdSBidWlsZGluZyBwb3VyIGwnaW1hZ2UgKHJlbXBsYWNlciBlc3BhY2VzIGV0IGNhcmFjdMOocmVzIHNww6ljaWF1eClcbiAgICBjb25zdCBidWlsZGluZ1NsdWcgPSBidWlsZGluZy50b0xvd2VyQ2FzZSgpLnJlcGxhY2UoL1xccysvZywgJ18nKS5yZXBsYWNlKC9bXmEtejAtOV9dL2csICcnKTtcbiAgICBjb25zdCBmYWN0aW9uU2x1ZyA9IChmYWN0aW9uIHx8ICdkZWZhdWx0JykudG9Mb3dlckNhc2UoKTtcblxuICAgIC8vIFNpIGxhIGZhY3Rpb24gZXN0ICdkZWZhdWx0JyBvdSBpbnZhbGlkZSwgdXRpbGlzZXIgZGlyZWN0ZW1lbnQgbCdpY8O0bmUgZGVmYXVsdFxuICAgIGlmIChmYWN0aW9uU2x1ZyA9PT0gJ2RlZmF1bHQnKSB7XG4gICAgICAgIHJldHVybiBgL2Fzc2V0cy9pbWFnZXMvYnVpbGRpbmdzL2RlZmF1bHQvJHtidWlsZGluZ1NsdWd9LnBuZ2A7XG4gICAgfVxuXG4gICAgLy8gRXNzYXllciBkJ2Fib3JkIGwnaWPDtG5lIGRlIGxhIGZhY3Rpb25cbiAgICAvLyBMZSBzZXJ2ZXVyIG91IGxlIG5hdmlnYXRldXIgZ8OpcmVyYSBsZSBmYWxsYmFjayBzaSBsJ2ljw7RuZSBuJ2V4aXN0ZSBwYXNcbiAgICAvLyBQb3VyIGZvcmNlciBsZSBmYWxsYmFjayBjw7R0w6kgY2xpZW50LCB2b3VzIHBvdXZlejpcbiAgICAvLyAxLiBDb25maWd1cmVyIGxlIHNlcnZldXIgd2ViIChOZ2lueC9BcGFjaGUpIHBvdXIgZmFpcmUgdW4gdHJ5X2ZpbGVzIHZlcnMgZGVmYXVsdFxuICAgIC8vIDIuIFV0aWxpc2VyIHVuZSByZXF1w6p0ZSBIRUFEIGFzeW5jb25lIHBvdXIgdsOpcmlmaWVyIGwnZXhpc3RlbmNlIChjb8O7dGV1eClcblxuICAgIHJldHVybiBgL2Fzc2V0cy9pbWFnZXMvYnVpbGRpbmdzLyR7ZmFjdGlvblNsdWd9LyR7YnVpbGRpbmdTbHVnfS5wbmdgO1xufVxuXG4vKipcbiAqIEFtw6lsaW9yZSB1biBiw6J0aW1lbnRcbiAqL1xud2luZG93LnVwZ3JhZGVCdWlsZGluZyA9IGFzeW5jIGZ1bmN0aW9uKGJ1aWxkaW5nSWQpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHVwZ3JhZGVCdWlsZGluZyhidWlsZGluZ0lkKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgICBpZiAocmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIC8vIE1ldHRyZSDDoCBqb3VyIGxlIG1hcnF1ZXVyXG4gICAgICAgICAgICBjb25zdCBlbnRyeSA9IGJ1aWxkaW5nTWFya2Vycy5nZXQoYnVpbGRpbmdJZCk7XG4gICAgICAgICAgICBpZiAoZW50cnkpIHtcbiAgICAgICAgICAgICAgICBlbnRyeS5kYXRhLmxldmVsID0gZGF0YS5uZXdMZXZlbDtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXJrZXIgPSBlbnRyeS5tYXJrZXI7XG4gICAgICAgICAgICAgICAgbWFya2VyLnNldFBvcHVwQ29udGVudChjcmVhdGVTaW1wbGVQb3B1cChlbnRyeS5kYXRhKSk7XG5cbiAgICAgICAgICAgICAgICAvLyBSZWNoYXJnZXIgbGVzIGluZm9zIGQnYW3DqWxpb3JhdGlvblxuICAgICAgICAgICAgICAgIGxvYWRVcGdyYWRlSW5mb0FzeW5jKGJ1aWxkaW5nSWQsIG1hcmtlciwgZW50cnkuZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhbGVydCgnQsOidGltZW50IGFtw6lsaW9yw6kgYXZlYyBzdWNjw6hzICEnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGFsZXJ0KFwiRXJyZXVyOiBcIiArIChkYXRhLmVycm9yIHx8IFwiSW1wb3NzaWJsZSBkJ2Ftw6lsaW9yZXIgbGUgYsOidGltZW50XCIpKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycmV1ciBsb3JzIGRlIGwnYW3DqWxpb3JhdGlvblwiLCBlKTtcbiAgICAgICAgYWxlcnQoXCJFcnJldXIgcsOpc2VhdSBsb3JzIGRlIGwnYW3DqWxpb3JhdGlvblwiKTtcbiAgICB9XG59O1xuXG4vKipcbiAqIFJldG91cm5lIGxlcyBpbmZvcm1hdGlvbnMgc3VyIGxlcyBjb8O7dHMgZGUgY29uc3RydWN0aW9uIGQndW4gdHlwZSBkZSBiw6J0aW1lbnRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEJ1aWxkaW5nVHlwZUNvc3RzKGJ1aWxkaW5nVHlwZUlkKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBnZXRCdWlsZGluZ0Nvc3RzKGJ1aWxkaW5nVHlwZUlkKTtcbiAgICAgICAgcmV0dXJuIGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJldXIgbG9ycyBkZSBsYSByw6ljdXDDqXJhdGlvbiBkZXMgY2/Du3RzXCIsIGUpO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59XG5cbi8qKlxuICogVsOpcmlmaWUgc2kgbGUgam91ZXVyIHBldXQgY29uc3RydWlyZSB1biBiw6J0aW1lbnRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNhbkJ1aWxkQnVpbGRpbmcoYnVpbGRpbmdUeXBlSWQpIHtcbiAgICBjb25zdCBjb3N0cyA9IGF3YWl0IGdldEJ1aWxkaW5nVHlwZUNvc3RzKGJ1aWxkaW5nVHlwZUlkKTtcbiAgICBpZiAoIWNvc3RzKSByZXR1cm4gZmFsc2U7XG5cbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKCcvYXBpL3BsYXllci1yZXNvdXJjZXMnKTtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgY29uc3QgcmVzb3VyY2VzID0ge307XG4gICAgZGF0YS5yZXNvdXJjZXMuZm9yRWFjaChyID0+IHtcbiAgICAgICAgcmVzb3VyY2VzW3IudHlwZV0gPSByLnF1YW50aXR5O1xuICAgIH0pO1xuXG4gICAgZm9yIChjb25zdCBbcmVzb3VyY2UsIGFtb3VudF0gb2YgT2JqZWN0LmVudHJpZXMoY29zdHMuY29zdHMpKSB7XG4gICAgICAgIGlmICgocmVzb3VyY2VzW3Jlc291cmNlXSB8fCAwKSA8IGFtb3VudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRydWU7XG59IiwiaW1wb3J0IHsgaW5pdE1hcCwgbG9hZFdvcmxkLCBtYXAgfSBmcm9tICcuL21hcC5qcyc7XG5pbXBvcnQgeyBpbml0R1BTIH0gZnJvbSAnLi9ncHMuanMnO1xuaW1wb3J0IHsgaW5pdEJhc2VVSSB9IGZyb20gJy4vYmFzZS5qcyc7XG5pbXBvcnQgeyBpbml0QnVpbGRNb2RlLCBpc0J1aWxkTW9kZUFjdGl2ZSB9IGZyb20gJy4vYnVpbGRNb2RlLmpzJztcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcblxuICAgIGVuYWJsZUxlYWZsZXREZWJ1ZyhmYWxzZSk7XG5cbiAgICBjb25zdCBkZWZhdWx0TGF0ID0gNDYuNTM5NzI7XG4gICAgY29uc3QgZGVmYXVsdExuZyA9IDIuNDMwMjg7XG5cbiAgICBpbml0TWFwKGRlZmF1bHRMYXQsIGRlZmF1bHRMbmcpO1xuXG4gICAgaW5pdEJhc2VVSSgpO1xuICAgIGluaXRCdWlsZE1vZGUoKTtcbiAgICBsb2FkV29ybGQoKTtcbn0pO1xuXG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlTGVhZmxldERlYnVnKGRlYnVnID0gZmFsc2UpIHtcblxuICAgIGlmICghZGVidWcpIHJldHVybjtcblxuICAgIGNvbnN0IG9yaWdpbmFsTWFya2VyID0gTC5tYXJrZXI7XG4gICAgY29uc3Qgb3JpZ2luYWxDaXJjbGUgPSBMLmNpcmNsZTtcbiAgICBjb25zdCBvcmlnaW5hbFBvbHlsaW5lID0gTC5wb2x5bGluZTtcblxuICAgIEwubWFya2VyID0gZnVuY3Rpb24gKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLwn6eoIE1BUktFUiBDQUxMOlwiLCBhcmdzKTtcbiAgICAgICAgY29uc29sZS50cmFjZShcIk1BUktFUiBTVEFDS1wiKTtcbiAgICAgICAgcmV0dXJuIG9yaWdpbmFsTWFya2VyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBMLmNpcmNsZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+nqCBDSVJDTEUgQ0FMTDpcIiwgYXJncyk7XG4gICAgICAgIGNvbnNvbGUudHJhY2UoXCJDSVJDTEUgU1RBQ0tcIik7XG4gICAgICAgIHJldHVybiBvcmlnaW5hbENpcmNsZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xuXG4gICAgTC5wb2x5bGluZSA9IGZ1bmN0aW9uICguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi8J+nqCBQT0xZTElORSBDQUxMOlwiLCBhcmdzKTtcbiAgICAgICAgY29uc29sZS50cmFjZShcIlBPTFlMSU5FIFNUQUNLXCIpO1xuICAgICAgICByZXR1cm4gb3JpZ2luYWxQb2x5bGluZS5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9O1xufSIsImltcG9ydCB7IGZseVRvIH0gZnJvbSAnLi9tYXAuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGluaXRHUFMoZGVmYXVsdExhdCwgZGVmYXVsdExuZykge1xyXG4gICAgaWYgKG5hdmlnYXRvci5nZW9sb2NhdGlvbikge1xyXG4gICAgICAgIGxldCBncHNGb3VuZCA9IGZhbHNlO1xyXG5cclxuICAgICAgICBuYXZpZ2F0b3IuZ2VvbG9jYXRpb24ud2F0Y2hQb3NpdGlvbihcclxuICAgICAgICAgICAgKHBvc2l0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBncHNGb3VuZCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZmx5VG8oXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb24uY29vcmRzLmxhdGl0dWRlLFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uLmNvb3Jkcy5sb25naXR1ZGVcclxuICAgICAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHt9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiA1MDAwXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICApO1xyXG5cclxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFncHNGb3VuZCkge1xyXG4gICAgICAgICAgICAgICAgZmx5VG8oZGVmYXVsdExhdCwgZGVmYXVsdExuZywgNyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCA1NTAwKTtcclxuICAgIH1cclxufSIsImltcG9ydCBMIGZyb20gJy4uL0xlYWZsZXRXcmFwcGVyLmpzJztcblxuaW1wb3J0IHsgZGVidWdMb2cgfSBmcm9tICcuL0NvbmZpZy9kZWJ1Zy5qcyc7XG5cbmltcG9ydCB7IGdyaWRMYXllciwgaW5pdEdyaWRMYXllciB9IGZyb20gJy4vTGF5ZXJzL2dyaWRMYXllci5qcyc7XG5pbXBvcnQgeyBsb2FkVmlzaWJsZVJvYWRDaHVua3MgfSBmcm9tICcuL1JvYWRzL3JvYWRzLmpzJztcbmltcG9ydCB7IHJvYWRzU3RhdGUgfSBmcm9tICcuL1JvYWRzL3JvYWRzU3RhdGUuanMnO1xuXG5pbXBvcnQgeyBsb2FkQmFzZUZyb21TZXJ2ZXIsIGxvYWRPdGhlckJhc2UsIHNldEN1cnJlbnRQbGF5ZXJGYWN0aW9uIH0gZnJvbSAnLi9iYXNlLmpzJztcbmltcG9ydCB7IGxvYWRCdWlsZGluZ3NGcm9tRGF0YSB9IGZyb20gJy4vYnVpbGRpbmcuanMnO1xuXG5pbXBvcnQgeyBpbml0RGVwb3NpdExheWVycywgZGVwb3NpdExheWVycyB9IGZyb20gJy4vTWFwL2RlcG9zaXRzLmpzJztcblxuaW1wb3J0IG1hcmtlckljb24gZnJvbSAnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi5wbmcnO1xuaW1wb3J0IG1hcmtlclNoYWRvdyBmcm9tICdsZWFmbGV0L2Rpc3QvaW1hZ2VzL21hcmtlci1zaGFkb3cucG5nJztcblxuTC5NYXJrZXIucHJvdG90eXBlLm9wdGlvbnMuaWNvbiA9IEwuaWNvbih7XG4gICAgaWNvblVybDogbWFya2VySWNvbixcbiAgICBzaGFkb3dVcmw6IG1hcmtlclNoYWRvdyxcbn0pO1xuXG5sZXQgbWFwSW5zdGFuY2UgPSBudWxsO1xubGV0IG1vdmVUaW1lb3V0ID0gbnVsbDtcbmxldCBpc0NodW5rTW9kZSA9IGZhbHNlO1xuXG5leHBvcnQgZnVuY3Rpb24gaW5pdE1hcChsYXQsIGxuZykge1xuXG4gICAgbWFwSW5zdGFuY2UgPSBMLm1hcCgnbWFwJykuc2V0VmlldyhbbGF0LCBsbmddLCA3KTtcblxuICAgIEwudGlsZUxheWVyKCdodHRwczovL3tzfS50aWxlLm9wZW5zdHJlZXRtYXAub3JnL3t6fS97eH0ve3l9LnBuZycsIHtcbiAgICAgICAgYXR0cmlidXRpb246ICcmY29weTsgT3BlblN0cmVldE1hcCdcbiAgICB9KS5hZGRUbyhtYXBJbnN0YW5jZSk7XG5cbiAgICBjb25zdCBsYXllcnNDb250cm9sID0gTC5jb250cm9sLmxheWVycyhudWxsLCB7XG4gICAgICAgIFwiQ2h1bmsgR3JpZFwiOiBncmlkTGF5ZXJcbiAgICB9KS5hZGRUbyhtYXBJbnN0YW5jZSk7XG5cbiAgICBpbml0RGVwb3NpdExheWVycyhtYXBJbnN0YW5jZSwgbGF5ZXJzQ29udHJvbCk7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBDRU5UUkFMIENIVU5LIENPTlRST0xMRVJcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cblxuICAgIG1hcEluc3RhbmNlLm9uKCdtb3ZlZW5kJywgKCkgPT4ge1xuXG4gICAgICAgIGlmICghaXNDaHVua01vZGUpIHJldHVybjtcbiAgICAgICAgaWYgKG1hcEluc3RhbmNlLmdldFpvb20oKSA8IDE0KSByZXR1cm47XG5cbiAgICAgICAgY2xlYXJUaW1lb3V0KG1vdmVUaW1lb3V0KTtcblxuICAgICAgICBtb3ZlVGltZW91dCA9IHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgaW5pdEdyaWRMYXllcigpO1xuICAgICAgICAgICAgbG9hZFZpc2libGVSb2FkQ2h1bmtzKCk7XG4gICAgICAgIH0sIDMwMCk7XG4gICAgfSk7XG5cbiAgICBtYXBJbnN0YW5jZS5vbignb3ZlcmxheWFkZCcsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmxheWVyID09PSBncmlkTGF5ZXIpIHtcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiZ3JpZFwiLCBcIkdyaWQgT05cIik7XG5cbiAgICAgICAgICAgIGluaXRHcmlkTGF5ZXIoKTtcbiAgICAgICAgICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICBtYXBJbnN0YW5jZS5vbignb3ZlcmxheXJlbW92ZScsIChlKSA9PiB7XG4gICAgICAgIGlmIChlLmxheWVyID09PSBncmlkTGF5ZXIpIHtcbiAgICAgICAgICAgIGRlYnVnTG9nKFwiZ3JpZFwiLCBcIkdyaWQgT0ZGXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cbiAgICAvLyBFVkVOVFNcbiAgICAvLyA9PT09PT09PT09PT09PT09PT09PT1cbiAgICBtYXBJbnN0YW5jZS5vbignem9vbWVuZCcsICgpID0+IHtcblxuICAgICAgICBjb25zdCB6b29tID0gbWFwSW5zdGFuY2UuZ2V0Wm9vbSgpO1xuXG4gICAgICAgIGlmICh6b29tID49IDE0KSB7XG4gICAgICAgICAgICBlbnRlckNodW5rTW9kZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhpdENodW5rTW9kZSgpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0dyaWRMYXllckFjdGl2ZSgpIHtcbiAgICByZXR1cm4gbWFwSW5zdGFuY2U/Lmhhc0xheWVyKGdyaWRMYXllcik7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRNYXAoKSB7XG4gICAgcmV0dXJuIG1hcEluc3RhbmNlO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZmx5VG8obGF0LCBsbmcsIHpvb20gPSAxMykge1xuICAgIGNvbnN0IG1hcCA9IGdldE1hcCgpO1xuICAgIG1hcC5mbHlUbyhbbGF0LCBsbmddLCB6b29tLCB7XG4gICAgICAgIGFuaW1hdGU6IHRydWUsXG4gICAgICAgIGR1cmF0aW9uOiAxLjVcbiAgICB9KTtcbn1cblxuLy8gPT09PT09PT09PT09PT09PT09PT09XG4vLyBXT1JMRCBMT0FERVIgKENvbmNlbnRyYXRldXIgZCdhcHBlbHMgQVBJKVxuLy8gPT09PT09PT09PT09PT09PT09PT09XG5leHBvcnQgZnVuY3Rpb24gbG9hZFdvcmxkKCkge1xuXG4gICAgZmV0Y2goJy9hcGkvd29ybGQtc3RhdGUnKVxuICAgICAgICAudGhlbihyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLnRoZW4oZGF0YSA9PiB7XG4gICAgICAgICAgICAvLyBDaGFyZ2VyIGxlcyBiw6J0aW1lbnRzIHZpYSBidWlsZGluZy5qc1xuICAgICAgICAgICAgbG9hZEJ1aWxkaW5nc0Zyb21EYXRhKGRhdGEuYnVpbGRpbmdzKTtcblxuICAgICAgICAgICAgLy8gQ2hhcmdlciBsZXMgYmFzZXMgdmlhIGJhc2UuanNcbiAgICAgICAgICAgIGlmIChkYXRhLnBsYXllcnMpIHtcbiAgICAgICAgICAgICAgICBsZXQgaGFzQ2VudGVyZWQgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIGRhdGEucGxheWVycy5mb3JFYWNoKHBsYXllciA9PiB7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKHBsYXllci5pc01lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXRDdXJyZW50UGxheWVyRmFjdGlvbihwbGF5ZXIuZmFjdGlvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkQmFzZUZyb21TZXJ2ZXIocGxheWVyLmxhdCwgcGxheWVyLmxuZyk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghaGFzQ2VudGVyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbHlUbyhwbGF5ZXIubGF0LCBwbGF5ZXIubG5nLCAxNik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzQ2VudGVyZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICBsb2FkT3RoZXJCYXNlKHBsYXllci5sYXQsIHBsYXllci5sbmcsIHBsYXllci5wc2V1ZG8sIHBsYXllci5mYWN0aW9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGVyciA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyZXVyIGxvYWQgd29ybGRcIiwgZXJyKTtcbiAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGVudGVyQ2h1bmtNb2RlKCkge1xuICAgIGlmIChpc0NodW5rTW9kZSkgcmV0dXJuO1xuXG4gICAgaXNDaHVua01vZGUgPSB0cnVlO1xuXG4gICAgZGVidWdMb2coXCJjaHVua3NcIiwgXCJFTlRFUiBDSFVOSyBNT0RFXCIpO1xuXG4gICAgaW5pdEdyaWRMYXllcigpO1xuICAgIGxvYWRWaXNpYmxlUm9hZENodW5rcygpO1xufVxuXG5mdW5jdGlvbiBleGl0Q2h1bmtNb2RlKCkge1xuICAgIGlmICghaXNDaHVua01vZGUpIHJldHVybjtcblxuICAgIGlzQ2h1bmtNb2RlID0gZmFsc2U7XG5cbiAgICBkZWJ1Z0xvZyhcImNodW5rc1wiLCBcIkVYSVQgQ0hVTksgTU9ERVwiKTtcblxuICAgIGlmIChtYXBJbnN0YW5jZS5oYXNMYXllcihncmlkTGF5ZXIpKSB7XG4gICAgICAgIG1hcEluc3RhbmNlLnJlbW92ZUxheWVyKGdyaWRMYXllcik7XG4gICAgfVxufSIsImltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xyXG5pbXBvcnQgJ2xlYWZsZXQvZGlzdC9sZWFmbGV0LmNzcyc7XHJcblxyXG5kZWxldGUgTC5JY29uLkRlZmF1bHQucHJvdG90eXBlLl9nZXRJY29uVXJsO1xyXG5MLkljb24uRGVmYXVsdC5tZXJnZU9wdGlvbnMoe1xyXG4gICAgaWNvblJldGluYVVybDogcmVxdWlyZSgnbGVhZmxldC9kaXN0L2ltYWdlcy9tYXJrZXItaWNvbi0yeC5wbmcnKSxcclxuICAgIGljb25Vcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLWljb24ucG5nJyksXHJcbiAgICBzaGFkb3dVcmw6IHJlcXVpcmUoJ2xlYWZsZXQvZGlzdC9pbWFnZXMvbWFya2VyLXNoYWRvdy5wbmcnKSxcclxufSk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMOyJdLCJuYW1lcyI6WyJDQUNIRV9WRVJTSU9OIiwiZ2V0Q2FjaGVLZXkiLCJjaHVua0lkIiwiY29uY2F0IiwiZSIsInQiLCJyIiwiU3ltYm9sIiwibiIsIml0ZXJhdG9yIiwibyIsInRvU3RyaW5nVGFnIiwiaSIsImMiLCJwcm90b3R5cGUiLCJHZW5lcmF0b3IiLCJ1IiwiT2JqZWN0IiwiY3JlYXRlIiwiX3JlZ2VuZXJhdG9yRGVmaW5lMiIsImYiLCJwIiwieSIsIkciLCJ2IiwiYSIsImQiLCJiaW5kIiwibGVuZ3RoIiwibCIsIlR5cGVFcnJvciIsImNhbGwiLCJkb25lIiwidmFsdWUiLCJHZW5lcmF0b3JGdW5jdGlvbiIsIkdlbmVyYXRvckZ1bmN0aW9uUHJvdG90eXBlIiwiZ2V0UHJvdG90eXBlT2YiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsImRpc3BsYXlOYW1lIiwiX3JlZ2VuZXJhdG9yIiwidyIsIm0iLCJkZWZpbmVQcm9wZXJ0eSIsIl9yZWdlbmVyYXRvckRlZmluZSIsIl9pbnZva2UiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRoZW4iLCJfYXN5bmNUb0dlbmVyYXRvciIsImFyZ3VtZW50cyIsImFwcGx5IiwiX25leHQiLCJfdGhyb3ciLCJnZXRNYXAiLCJyZWZyZXNoQ2h1bmsiLCJpbnZhbGlkYXRlQ2h1bmsiLCJkZWJ1Z0xvZyIsImRlYnVnRXJyb3IiLCJzbmFwVG9DaHVuayIsIkNIVU5LX1NJWkUiLCJDSFVOS19SQURJVVMiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm1hcCIsImdldENvbnRhaW5lciIsInN0eWxlIiwiY3Vyc29yIiwiYWxlcnQiLCJvbmNlIiwiX3JlZiIsIl9jYWxsZWUiLCJfZSRsYXRsbmciLCJsYXQiLCJsbmciLCJzbmFwcGVkIiwiX3QiLCJfY29udGV4dCIsImxhdGxuZyIsImZldGNoIiwibWV0aG9kIiwiaGVhZGVycyIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwiX3giLCJUWVBFX01BUCIsIkRFQlVHIiwiZW5hYmxlZCIsImNodW5rcyIsIm5ldHdvcmsiLCJjYWNoZSIsInR5cGUiLCJfY29uc29sZTIiLCJfbGVuIiwiYXJncyIsIkFycmF5IiwiX2tleSIsIl9jb25zb2xlIiwiY29uc29sZSIsImxvZyIsIl9jb25zb2xlMyIsImtleSIsIl9sZW4yIiwiX2tleTIiLCJlcnJvciIsIlJPQUQiLCJDSFVOSyIsIkJVSUxESU5HIiwiTCIsImlzR3JpZExheWVyQWN0aXZlIiwiZ3JpZExheWVyIiwibGF5ZXJHcm91cCIsInZpc2libGVDaHVua3MiLCJNYXAiLCJpbml0R3JpZExheWVyIiwiem9vbSIsImdldFpvb20iLCJib3VuZHMiLCJnZXRCb3VuZHMiLCJtaW5MYXQiLCJNYXRoIiwiZmxvb3IiLCJnZXRTb3V0aCIsIm1heExhdCIsImNlaWwiLCJnZXROb3J0aCIsIm1pbkxuZyIsImdldFdlc3QiLCJtYXhMbmciLCJnZXRFYXN0IiwibmV3VmlzaWJsZSIsIlNldCIsIl9sb29wIiwiaWQiLCJqIiwiYWRkIiwiaGFzIiwicmVjdCIsInJlY3RhbmdsZSIsImNvbG9yIiwid2VpZ2h0IiwiZmlsbE9wYWNpdHkiLCJvbiIsInNldFN0eWxlIiwiYWRkTGF5ZXIiLCJzZXQiLCJfaXRlcmF0b3IiLCJfY3JlYXRlRm9yT2ZJdGVyYXRvckhlbHBlciIsImVudHJpZXMiLCJfc3RlcCIsInMiLCJfc3RlcCR2YWx1ZSIsIl9zbGljZWRUb0FycmF5IiwicmVtb3ZlTGF5ZXIiLCJlcnIiLCJzaXplIiwic2V0Q2h1bmtDb2xvciIsImdldCIsImRlcG9zaXRNYXJrZXJzIiwiYnVpbGRpbmdUeXBlc0NhY2hlIiwicmVzb3VyY2VUeXBlc0NhY2hlIiwibG9hZEJ1aWxkaW5nVHlwZXMiLCJfbG9hZEJ1aWxkaW5nVHlwZXMiLCJfY2FsbGVlMiIsInJlc3BvbnNlIiwiX3QzIiwiX2NvbnRleHQyIiwianNvbiIsImxvYWRSZXNvdXJjZVR5cGVzIiwiX2xvYWRSZXNvdXJjZVR5cGVzIiwiX2NhbGxlZTMiLCJfdDQiLCJfY29udGV4dDMiLCJERUZBVUxUX0NPTE9SUyIsImdldFJlc291cmNlQ29sb3IiLCJfcmVzb3VyY2VUeXBlc0NhY2hlJHQiLCJfcmVzb3VyY2VUeXBlc0NhY2hlJHQyIiwiZmluZEJ1aWxkaW5nVHlwZUZvclJlc291cmNlIiwiX2ZpbmRCdWlsZGluZ1R5cGVGb3JSZXNvdXJjZSIsIl9jYWxsZWU0IiwicmVzb3VyY2VUeXBlIiwiYnVpbGRpbmdUeXBlcyIsImJ1aWxkaW5nVHlwZSIsIl9jb250ZXh0NCIsImZpbmQiLCJidCIsIl9idCRyZXNvdXJjZVR5cGUiLCJyZXNvdXJjZV90eXBlIiwiY29kZSIsImJhc2VfY29zdCIsImRlcG9zaXRMYXllcnMiLCJpbml0RGVwb3NpdExheWVycyIsIl94MiIsIl94MyIsIl9pbml0RGVwb3NpdExheWVycyIsIl9jYWxsZWU1IiwiY29udHJvbCIsInJlc291cmNlVHlwZXMiLCJfY29udGV4dDUiLCJmb3JFYWNoIiwicnQiLCJhZGRPdmVybGF5IiwibGFiZWwiLCJsb2FkRGVwb3NpdHNGb3JDaHVuayIsIl94NCIsIl94NSIsIl9sb2FkRGVwb3NpdHNGb3JDaHVuayIsIl9jYWxsZWU2IiwiZGVwb3NpdHMiLCJfdDUiLCJfY29udGV4dDYiLCJyZW5kZXJEZXBvc2l0c0Zyb21EYXRhIiwiZGVwb3NpdCIsImxheWVyIiwid2FybiIsIm1hcmtlciIsImNpcmNsZU1hcmtlciIsImxhdGl0dWRlIiwibG9uZ2l0dWRlIiwicmFkaXVzIiwiZmlsbENvbG9yIiwib3BhY2l0eSIsImFkZFRvIiwiYmluZFBvcHVwIiwidG9VcHBlckNhc2UiLCJyaWNobmVzcyIsImlzX2NsYWltZWQiLCJ3aW5kb3ciLCJjbGFpbURlcG9zaXQiLCJidWlsZGluZ1R5cGVJZCIsInJlc3BvbnNlVGV4dCIsImRhdGEiLCJfdDIiLCJ0eXBlX2lkIiwiZGVwb3NpdF9pZCIsInRleHQiLCJwYXJzZSIsIkVycm9yIiwib2siLCJsb2NhdGlvbiIsInJlbG9hZCIsIm1lc3NhZ2UiLCJfeDYiLCJfeDciLCJyb2Fkc1N0YXRlIiwibG9jYWxTdG9yYWdlIiwicmVtb3ZlSXRlbSIsImZpbmRDbG9zZXN0UG9pbnRPblJvYWQiLCJyb2FkcyIsImJlc3RQb2ludCIsImJlc3REaXN0YW5jZSIsIkluZmluaXR5IiwiaXNBcnJheSIsInBvaW50IiwiZGlzdGFuY2UiLCJyb2FkIiwicG9pbnRzIiwiYVJhdyIsImJSYXciLCJsYXRMbmciLCJiIiwicHJvamVjdGVkIiwicHJvamVjdFBvaW50T25TZWdtZW50IiwiZGlzdCIsImZpbmRDbG9zZXN0U2VnbWVudCIsImJlc3RTZWdtZW50IiwibWlkIiwiQSIsIkIiLCJQIiwiQUIiLCJBUCIsImFiMiIsIm1heCIsIm1pbiIsImRpc3RhbmNlVG9TZWdtZW50IiwiZGVidWdSb2FkcyIsIl9hcnJheVdpdGhIb2xlcyIsIl9pdGVyYWJsZVRvQXJyYXlMaW1pdCIsIl91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSIsIl9ub25JdGVyYWJsZVJlc3QiLCJuZXh0IiwicHVzaCIsIl9uIiwiRiIsIl9hcnJheUxpa2VUb0FycmF5IiwidG9TdHJpbmciLCJzbGljZSIsImNvbnN0cnVjdG9yIiwibmFtZSIsImZyb20iLCJ0ZXN0IiwibG9hZGluZ1F1ZXVlIiwiTUFYX0NPTkNVUlJFTlQiLCJhY3RpdmVSZXF1ZXN0cyIsImdldENodW5rSWQiLCJ4IiwibG9hZFZpc2libGVSb2FkQ2h1bmtzIiwiX2xvYWRWaXNpYmxlUm9hZENodW5rcyIsImNodW5rc1RvTG9hZCIsImZpbmFsQ2h1bmtzVG9Mb2FkIiwiX2l0ZXJhdG9yMiIsIl9zdGVwMiIsIl9jaHVua0lkMyIsIl9jYWNoZUtleSIsImNhY2hlZCIsIl9pIiwiX2ZpbmFsQ2h1bmtzVG9Mb2FkIiwiX3lpZWxkJFByb21pc2UkYWxsIiwiX3lpZWxkJFByb21pc2UkYWxsMiIsInJvYWRzUmVzcG9uc2UiLCJidWlsZGluZ3NSZXNwb25zZSIsImRlcG9zaXRzUmVzcG9uc2UiLCJyb2Fkc0RhdGEiLCJidWlsZGluZ3NEYXRhIiwiZGVwb3NpdHNEYXRhIiwiYnVpbGRpbmdzQnlDaHVuayIsIl9pMiIsIl9maW5hbENodW5rc1RvTG9hZDIiLCJfcm9hZHNEYXRhJF9jaHVua0lkIiwiX2J1aWxkaW5nc0RhdGEkX2NodW5rIiwiX2NodW5rSWQiLCJjaHVua0RhdGEiLCJoYXNSb2FkcyIsImNhY2hlS2V5IiwiX2l0ZXJhdG9yMyIsIl9zdGVwMyIsIl9jaHVua0lkMiIsImdldFZpc2libGVDaHVua3MiLCJmaWx0ZXIiLCJsb2FkZWRDaHVua3MiLCJnZXRJdGVtIiwiRGF0ZSIsIm5vdyIsInRzIiwic3RhdHVzIiwiYnVpbGRpbmdzIiwicmVmcmVzaENodW5rQ29sb3JzIiwiYWxsIiwiY0lkIiwic2V0SXRlbSIsImNodW5rIiwiX3JlZnJlc2hDaHVuayIsImZldGNoU2luZ2xlQ2h1bmsiLCJfZmV0Y2hTaW5nbGVDaHVuayIsIl9yb2Fkc0RhdGEkY2h1bmtJZCIsIl9idWlsZGluZ3NEYXRhJGNodW5rSSIsIl95aWVsZCRQcm9taXNlJGFsbDMiLCJfeWllbGQkUHJvbWlzZSRhbGw0Iiwicm9hZHNSZXMiLCJidWlsZGluZ3NSZXMiLCJkZXBvc2l0c1JlcyIsImNodW5rRGVwb3NpdHMiLCJtaW5YIiwibWF4WCIsIm1pblkiLCJtYXhZIiwicm9hZHNSZWFkeSIsImRyYXduUm9hZHMiLCJyb2FkTGF5ZXJzIiwiYnVpbGRpbmdMYXllcnMiLCJjYWNoZWRSb2FkcyIsImNhY2hlRGlydHkiLCJtYXJrUm9hZENhY2hlRGlydHkiLCJnZXRBbGxMb2FkZWRSb2FkcyIsInZhbHVlcyIsImZsYXRNYXAiLCJzaG93Tm90aWZpY2F0aW9uIiwidW5kZWZpbmVkIiwibm90aWYiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJnZXRBZG1pbkNvb3JkcyIsImZvcm1hdCIsInRvRml4ZWQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJidWlsZFJlcXVlc3QiLCJ0eXBlSWQiLCJnZXRCdWlsZGluZ3MiLCJyZXMiLCJnZXRCdWlsZGluZ0Nvc3RzIiwidXBncmFkZUJ1aWxkaW5nIiwiYnVpbGRpbmdJZCIsImdldFVwZ3JhZGVJbmZvIiwiZmx5VG8iLCJnZXRCdWlsZGluZ0ltYWdlIiwic2FmZUxvYWRDaHVuayIsImJhc2VNYXJrZXIiLCJiYXNlQ2lyY2xlIiwiYmFzZVBvc2l0aW9uIiwiYmFzZUNyZWF0ZWQiLCJwbGFjaW5nQmFzZSIsInByZXZpZXdNYXJrZXIiLCJwcmV2aWV3Q2lyY2xlIiwicHJldmlld1NuYXBMYXRMbmciLCJwcmV2aWV3TGluZSIsImhpZ2hsaWdodGVkU2VnbWVudCIsImN1cnJlbnRQbGF5ZXJGYWN0aW9uIiwic2V0Q3VycmVudFBsYXllckZhY3Rpb24iLCJmYWN0aW9uIiwidG9Mb3dlckNhc2UiLCJnZXRDdXJyZW50UGxheWVyRmFjdGlvbiIsImluaXRCYXNlVUkiLCJiYXNlQnRuIiwibW9kZSIsImRhdGFzZXQiLCJfcHJldmlld1NuYXBMYXRMbmciLCJpc0Jhc2VQbGFjZW1lbnRWYWxpZCIsImNsZWFudXBQcmV2aWV3IiwiY3JlYXRlQmFzZSIsInJlc3VsdCIsImlzVmFsaWQiLCJjaXJjbGUiLCJwb2x5bGluZSIsImRhc2hBcnJheSIsInNlZ21lbnQiLCJ1cGRhdGVCYXNlRGlzcGxheSIsInVwZGF0ZU90aGVyQmFzZXMiLCJlbmFibGVBZG1pbkNvb3JkaW5hdGVQaWNrZXIiLCJvdGhlckJhc2VzIiwiZXZlcnkiLCJiYXNlIiwiYmFzZVR5cGVJZCIsInJlbW92ZUJhc2UiLCJsb2FkT3RoZXJCYXNlIiwicHNldWRvIiwiTnVtYmVyIiwiaXNGaW5pdGUiLCJpY29uIiwiY3JlYXRlQmFzZUljb24iLCJoYXNMYXllciIsInNldEljb24iLCJsb2FkQmFzZUZyb21TZXJ2ZXIiLCJpY29uVXJsIiwiaWNvblNpemUiLCJpY29uQW5jaG9yIiwicG9wdXBBbmNob3IiLCJzZWxlY3RlZEJ1aWxkaW5nVHlwZSIsInByZXZpZXdCdWlsZGluZ01hcmtlciIsImluaXRCdWlsZE1vZGUiLCJidG4iLCJ0YXJnZXQiLCJjbG9zZXN0Iiwic2VsZWN0QnVpbGRpbmdUeXBlIiwib25NYXBDbGljayIsIm9uTWFwTW91c2VNb3ZlIiwiX3NlbGVjdEJ1aWxkaW5nVHlwZSIsImJ1dHRvbiIsImNsZWFyQnVpbGRpbmdTZWxlY3Rpb24iLCJjbGFzc0xpc3QiLCJjb3N0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJfb25NYXBDbGljayIsInNldExhdExuZyIsImFjdGl2YXRlQnVpbGRNb2RlIiwicXVlcnlTZWxlY3RvciIsImNsaWNrIiwiZGVhY3RpdmF0ZUJ1aWxkTW9kZSIsImlzQnVpbGRNb2RlQWN0aXZlIiwiYnVpbGRpbmdNYXJrZXJzIiwibG9hZEJ1aWxkaW5nc0Zyb21EYXRhIiwiX2IkdHlwZSIsImNyZWF0ZUJ1aWxkaW5nSWNvbiIsImJ1aWxkaW5nRGF0YSIsImxldmVsIiwiY3JlYXRlU2ltcGxlUG9wdXAiLCJsb2FkVXBncmFkZUluZm9Bc3luYyIsImJ1aWxkaW5nIiwiX2xvYWRVcGdyYWRlSW5mb0FzeW5jIiwiX3VwZ3JhZGVJbmZvJGNhblVwZ3JhIiwiX3VwZ3JhZGVJbmZvJG1heExldmVsIiwiX3VwZ3JhZGVJbmZvJG5lZWRlZCIsIl91cGdyYWRlSW5mbyRhdmFpbGFibCIsInVwZ3JhZGVJbmZvIiwiY2FuVXBncmFkZSIsIm1heExldmVsIiwibmVlZGVkIiwiYXZhaWxhYmxlIiwiY29zdHNIdG1sIiwiX09iamVjdCRlbnRyaWVzIiwiX09iamVjdCRlbnRyaWVzJF9pIiwicmVzb3VyY2UiLCJhbW91bnQiLCJjbHMiLCJwb3B1cENvbnRlbnQiLCJzZXRQb3B1cENvbnRlbnQiLCJrZXlzIiwibG9hZEJ1aWxkaW5ncyIsImJ1aWxkaW5nQ29kZSIsImJ1aWxkaW5nU2x1ZyIsInJlcGxhY2UiLCJmYWN0aW9uU2x1ZyIsImVudHJ5IiwibmV3TGV2ZWwiLCJnZXRCdWlsZGluZ1R5cGVDb3N0cyIsIl9nZXRCdWlsZGluZ1R5cGVDb3N0cyIsImNhbkJ1aWxkQnVpbGRpbmciLCJfY2FuQnVpbGRCdWlsZGluZyIsInJlc291cmNlcyIsIl9PYmplY3QkZW50cmllczIiLCJfT2JqZWN0JGVudHJpZXMyJF9pIiwicXVhbnRpdHkiLCJpbml0TWFwIiwibG9hZFdvcmxkIiwiaW5pdEdQUyIsImVuYWJsZUxlYWZsZXREZWJ1ZyIsImRlZmF1bHRMYXQiLCJkZWZhdWx0TG5nIiwiZGVidWciLCJvcmlnaW5hbE1hcmtlciIsIm9yaWdpbmFsQ2lyY2xlIiwib3JpZ2luYWxQb2x5bGluZSIsInRyYWNlIiwiX2xlbjMiLCJfa2V5MyIsImdlb2xvY2F0aW9uIiwiZ3BzRm91bmQiLCJ3YXRjaFBvc2l0aW9uIiwicG9zaXRpb24iLCJjb29yZHMiLCJ0aW1lb3V0IiwibWFya2VySWNvbiIsIm1hcmtlclNoYWRvdyIsIk1hcmtlciIsIm9wdGlvbnMiLCJzaGFkb3dVcmwiLCJtYXBJbnN0YW5jZSIsIm1vdmVUaW1lb3V0IiwiaXNDaHVua01vZGUiLCJzZXRWaWV3IiwidGlsZUxheWVyIiwiYXR0cmlidXRpb24iLCJsYXllcnNDb250cm9sIiwibGF5ZXJzIiwiY2xlYXJUaW1lb3V0IiwiZW50ZXJDaHVua01vZGUiLCJleGl0Q2h1bmtNb2RlIiwiX21hcEluc3RhbmNlIiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwicGxheWVycyIsImhhc0NlbnRlcmVkIiwicGxheWVyIiwiaXNNZSIsIkljb24iLCJEZWZhdWx0IiwiX2dldEljb25VcmwiLCJtZXJnZU9wdGlvbnMiLCJpY29uUmV0aW5hVXJsIiwicmVxdWlyZSJdLCJzb3VyY2VSb290IjoiIn0=