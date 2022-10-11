"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DirectLineStreaming = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _BehaviorSubject = require("rxjs/BehaviorSubject");

var _buffer = require("buffer");

var _Observable = require("rxjs/Observable");

var BFSE = _interopRequireWildcard(require("botframework-streaming"));

var _crossFetch = _interopRequireDefault(require("cross-fetch"));

var _directLine = require("./directLine");

var _excluded = ["attachments"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function cov_14ow7qzac4() {
  var path = "C:\\Users\\sbitti\\OneDrive - Vodafone Group\\Desktop\\PersonalProject\\BotFramework-DirectLineJS\\src\\directLineStreaming.ts";
  var hash = "e1c04186bec1df39d4df1733b608cf58e9f37fcc";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sbitti\\OneDrive - Vodafone Group\\Desktop\\PersonalProject\\BotFramework-DirectLineJS\\src\\directLineStreaming.ts",
    statementMap: {
      "0": {
        start: {
          line: 19,
          column: 28
        },
        end: {
          line: 19,
          column: 44
        }
      },
      "1": {
        start: {
          line: 20,
          column: 24
        },
        end: {
          line: 20,
          column: 25
        }
      },
      "2": {
        start: {
          line: 21,
          column: 29
        },
        end: {
          line: 21,
          column: 43
        }
      },
      "3": {
        start: {
          line: 23,
          column: 16
        },
        end: {
          line: 23,
          column: 25
        }
      },
      "4": {
        start: {
          line: 24,
          column: 29
        },
        end: {
          line: 24,
          column: 53
        }
      },
      "5": {
        start: {
          line: 38,
          column: 43
        },
        end: {
          line: 38,
          column: 45
        }
      },
      "6": {
        start: {
          line: 41,
          column: 4
        },
        end: {
          line: 41,
          column: 24
        }
      },
      "7": {
        start: {
          line: 42,
          column: 4
        },
        end: {
          line: 42,
          column: 32
        }
      },
      "8": {
        start: {
          line: 43,
          column: 4
        },
        end: {
          line: 43,
          column: 26
        }
      },
      "9": {
        start: {
          line: 47,
          column: 4
        },
        end: {
          line: 47,
          column: 24
        }
      },
      "10": {
        start: {
          line: 51,
          column: 20
        },
        end: {
          line: 51,
          column: 40
        }
      },
      "11": {
        start: {
          line: 52,
          column: 20
        },
        end: {
          line: 52,
          column: 35
        }
      },
      "12": {
        start: {
          line: 53,
          column: 28
        },
        end: {
          line: 53,
          column: 56
        }
      },
      "13": {
        start: {
          line: 54,
          column: 24
        },
        end: {
          line: 54,
          column: 51
        }
      },
      "14": {
        start: {
          line: 56,
          column: 4
        },
        end: {
          line: 60,
          column: 5
        }
      },
      "15": {
        start: {
          line: 58,
          column: 6
        },
        end: {
          line: 58,
          column: 79
        }
      },
      "16": {
        start: {
          line: 59,
          column: 6
        },
        end: {
          line: 59,
          column: 48
        }
      },
      "17": {
        start: {
          line: 62,
          column: 21
        },
        end: {
          line: 62,
          column: 46
        }
      },
      "18": {
        start: {
          line: 64,
          column: 4
        },
        end: {
          line: 75,
          column: 5
        }
      },
      "19": {
        start: {
          line: 65,
          column: 26
        },
        end: {
          line: 65,
          column: 51
        }
      },
      "20": {
        start: {
          line: 68,
          column: 6
        },
        end: {
          line: 72,
          column: 7
        }
      },
      "21": {
        start: {
          line: 69,
          column: 27
        },
        end: {
          line: 69,
          column: 54
        }
      },
      "22": {
        start: {
          line: 70,
          column: 24
        },
        end: {
          line: 70,
          column: 62
        }
      },
      "23": {
        start: {
          line: 71,
          column: 8
        },
        end: {
          line: 71,
          column: 83
        }
      },
      "24": {
        start: {
          line: 74,
          column: 6
        },
        end: {
          line: 74,
          column: 41
        }
      },
      "25": {
        start: {
          line: 77,
          column: 4
        },
        end: {
          line: 81,
          column: 5
        }
      },
      "26": {
        start: {
          line: 78,
          column: 6
        },
        end: {
          line: 78,
          column: 40
        }
      },
      "27": {
        start: {
          line: 80,
          column: 6
        },
        end: {
          line: 80,
          column: 37
        }
      },
      "28": {
        start: {
          line: 83,
          column: 4
        },
        end: {
          line: 83,
          column: 46
        }
      },
      "29": {
        start: {
          line: 87,
          column: 4
        },
        end: {
          line: 87,
          column: 47
        }
      },
      "30": {
        start: {
          line: 88,
          column: 4
        },
        end: {
          line: 88,
          column: 63
        }
      },
      "31": {
        start: {
          line: 88,
          column: 38
        },
        end: {
          line: 88,
          column: 61
        }
      },
      "32": {
        start: {
          line: 89,
          column: 4
        },
        end: {
          line: 89,
          column: 28
        }
      },
      "33": {
        start: {
          line: 94,
          column: 29
        },
        end: {
          line: 94,
          column: 80
        }
      },
      "34": {
        start: {
          line: 96,
          column: 38
        },
        end: {
          line: 96,
          column: 43
        }
      },
      "35": {
        start: {
          line: 107,
          column: 22
        },
        end: {
          line: 107,
          column: 24
        }
      },
      "36": {
        start: {
          line: 110,
          column: 4
        },
        end: {
          line: 110,
          column: 31
        }
      },
      "37": {
        start: {
          line: 112,
          column: 4
        },
        end: {
          line: 112,
          column: 24
        }
      },
      "38": {
        start: {
          line: 114,
          column: 4
        },
        end: {
          line: 114,
          column: 33
        }
      },
      "39": {
        start: {
          line: 116,
          column: 4
        },
        end: {
          line: 118,
          column: 5
        }
      },
      "40": {
        start: {
          line: 117,
          column: 6
        },
        end: {
          line: 117,
          column: 51
        }
      },
      "41": {
        start: {
          line: 120,
          column: 4
        },
        end: {
          line: 120,
          column: 56
        }
      },
      "42": {
        start: {
          line: 122,
          column: 4
        },
        end: {
          line: 122,
          column: 32
        }
      },
      "43": {
        start: {
          line: 123,
          column: 4
        },
        end: {
          line: 127,
          column: 15
        }
      },
      "44": {
        start: {
          line: 124,
          column: 6
        },
        end: {
          line: 124,
          column: 43
        }
      },
      "45": {
        start: {
          line: 125,
          column: 6
        },
        end: {
          line: 125,
          column: 112
        }
      },
      "46": {
        start: {
          line: 125,
          column: 90
        },
        end: {
          line: 125,
          column: 110
        }
      },
      "47": {
        start: {
          line: 126,
          column: 6
        },
        end: {
          line: 126,
          column: 35
        }
      },
      "48": {
        start: {
          line: 132,
          column: 4
        },
        end: {
          line: 132,
          column: 41
        }
      },
      "49": {
        start: {
          line: 133,
          column: 4
        },
        end: {
          line: 133,
          column: 23
        }
      },
      "50": {
        start: {
          line: 134,
          column: 4
        },
        end: {
          line: 134,
          column: 24
        }
      },
      "51": {
        start: {
          line: 138,
          column: 4
        },
        end: {
          line: 138,
          column: 56
        }
      },
      "52": {
        start: {
          line: 139,
          column: 4
        },
        end: {
          line: 139,
          column: 39
        }
      },
      "53": {
        start: {
          line: 143,
          column: 4
        },
        end: {
          line: 146,
          column: 6
        }
      },
      "54": {
        start: {
          line: 150,
          column: 22
        },
        end: {
          line: 150,
          column: 43
        }
      },
      "55": {
        start: {
          line: 152,
          column: 4
        },
        end: {
          line: 154,
          column: 5
        }
      },
      "56": {
        start: {
          line: 153,
          column: 6
        },
        end: {
          line: 153,
          column: 39
        }
      },
      "57": {
        start: {
          line: 156,
          column: 4
        },
        end: {
          line: 156,
          column: 53
        }
      },
      "58": {
        start: {
          line: 160,
          column: 4
        },
        end: {
          line: 160,
          column: 33
        }
      },
      "59": {
        start: {
          line: 162,
          column: 27
        },
        end: {
          line: 162,
          column: 28
        }
      },
      "60": {
        start: {
          line: 163,
          column: 4
        },
        end: {
          line: 183,
          column: 5
        }
      },
      "61": {
        start: {
          line: 164,
          column: 6
        },
        end: {
          line: 164,
          column: 25
        }
      },
      "62": {
        start: {
          line: 165,
          column: 6
        },
        end: {
          line: 165,
          column: 66
        }
      },
      "63": {
        start: {
          line: 165,
          column: 29
        },
        end: {
          line: 165,
          column: 64
        }
      },
      "64": {
        start: {
          line: 166,
          column: 6
        },
        end: {
          line: 182,
          column: 7
        }
      },
      "65": {
        start: {
          line: 167,
          column: 20
        },
        end: {
          line: 167,
          column: 113
        }
      },
      "66": {
        start: {
          line: 168,
          column: 8
        },
        end: {
          line: 179,
          column: 9
        }
      },
      "67": {
        start: {
          line: 169,
          column: 10
        },
        end: {
          line: 169,
          column: 31
        }
      },
      "68": {
        start: {
          line: 170,
          column: 26
        },
        end: {
          line: 170,
          column: 42
        }
      },
      "69": {
        start: {
          line: 171,
          column: 10
        },
        end: {
          line: 171,
          column: 29
        }
      },
      "70": {
        start: {
          line: 173,
          column: 10
        },
        end: {
          line: 178,
          column: 11
        }
      },
      "71": {
        start: {
          line: 174,
          column: 12
        },
        end: {
          line: 174,
          column: 101
        }
      },
      "72": {
        start: {
          line: 175,
          column: 12
        },
        end: {
          line: 175,
          column: 47
        }
      },
      "73": {
        start: {
          line: 177,
          column: 12
        },
        end: {
          line: 177,
          column: 105
        }
      },
      "74": {
        start: {
          line: 181,
          column: 8
        },
        end: {
          line: 181,
          column: 86
        }
      },
      "75": {
        start: {
          line: 185,
          column: 4
        },
        end: {
          line: 185,
          column: 39
        }
      },
      "76": {
        start: {
          line: 186,
          column: 4
        },
        end: {
          line: 186,
          column: 39
        }
      },
      "77": {
        start: {
          line: 190,
          column: 4
        },
        end: {
          line: 192,
          column: 5
        }
      },
      "78": {
        start: {
          line: 191,
          column: 6
        },
        end: {
          line: 191,
          column: 55
        }
      },
      "79": {
        start: {
          line: 194,
          column: 18
        },
        end: {
          line: 214,
          column: 6
        }
      },
      "80": {
        start: {
          line: 195,
          column: 22
        },
        end: {
          line: 195,
          column: 129
        }
      },
      "81": {
        start: {
          line: 196,
          column: 6
        },
        end: {
          line: 196,
          column: 48
        }
      },
      "82": {
        start: {
          line: 197,
          column: 19
        },
        end: {
          line: 197,
          column: 60
        }
      },
      "83": {
        start: {
          line: 199,
          column: 6
        },
        end: {
          line: 213,
          column: 7
        }
      },
      "84": {
        start: {
          line: 200,
          column: 8
        },
        end: {
          line: 200,
          column: 97
        }
      },
      "85": {
        start: {
          line: 200,
          column: 37
        },
        end: {
          line: 200,
          column: 97
        }
      },
      "86": {
        start: {
          line: 201,
          column: 32
        },
        end: {
          line: 201,
          column: 51
        }
      },
      "87": {
        start: {
          line: 202,
          column: 8
        },
        end: {
          line: 202,
          column: 100
        }
      },
      "88": {
        start: {
          line: 202,
          column: 35
        },
        end: {
          line: 202,
          column: 100
        }
      },
      "89": {
        start: {
          line: 203,
          column: 25
        },
        end: {
          line: 203,
          column: 61
        }
      },
      "90": {
        start: {
          line: 204,
          column: 26
        },
        end: {
          line: 204,
          column: 46
        }
      },
      "91": {
        start: {
          line: 205,
          column: 8
        },
        end: {
          line: 205,
          column: 35
        }
      },
      "92": {
        start: {
          line: 210,
          column: 10
        },
        end: {
          line: 210,
          column: 26
        }
      },
      "93": {
        start: {
          line: 211,
          column: 10
        },
        end: {
          line: 211,
          column: 45
        }
      },
      "94": {
        start: {
          line: 212,
          column: 10
        },
        end: {
          line: 212,
          column: 37
        }
      },
      "95": {
        start: {
          line: 215,
          column: 4
        },
        end: {
          line: 215,
          column: 17
        }
      },
      "96": {
        start: {
          line: 219,
          column: 58
        },
        end: {
          line: 219,
          column: 65
        }
      },
      "97": {
        start: {
          line: 221,
          column: 4
        },
        end: {
          line: 262,
          column: 7
        }
      },
      "98": {
        start: {
          line: 222,
          column: 30
        },
        end: {
          line: 222,
          column: 32
        }
      },
      "99": {
        start: {
          line: 223,
          column: 6
        },
        end: {
          line: 261,
          column: 11
        }
      },
      "100": {
        start: {
          line: 224,
          column: 8
        },
        end: {
          line: 260,
          column: 9
        }
      },
      "101": {
        start: {
          line: 225,
          column: 31
        },
        end: {
          line: 233,
          column: 13
        }
      },
      "102": {
        start: {
          line: 226,
          column: 26
        },
        end: {
          line: 226,
          column: 45
        }
      },
      "103": {
        start: {
          line: 227,
          column: 24
        },
        end: {
          line: 227,
          column: 53
        }
      },
      "104": {
        start: {
          line: 228,
          column: 12
        },
        end: {
          line: 232,
          column: 13
        }
      },
      "105": {
        start: {
          line: 229,
          column: 14
        },
        end: {
          line: 229,
          column: 69
        }
      },
      "106": {
        start: {
          line: 231,
          column: 14
        },
        end: {
          line: 231,
          column: 37
        }
      },
      "107": {
        start: {
          line: 235,
          column: 10
        },
        end: {
          line: 242,
          column: 13
        }
      },
      "108": {
        start: {
          line: 236,
          column: 27
        },
        end: {
          line: 236,
          column: 51
        }
      },
      "109": {
        start: {
          line: 237,
          column: 12
        },
        end: {
          line: 237,
          column: 32
        }
      },
      "110": {
        start: {
          line: 238,
          column: 27
        },
        end: {
          line: 238,
          column: 56
        }
      },
      "111": {
        start: {
          line: 239,
          column: 12
        },
        end: {
          line: 239,
          column: 33
        }
      },
      "112": {
        start: {
          line: 240,
          column: 32
        },
        end: {
          line: 240,
          column: 119
        }
      },
      "113": {
        start: {
          line: 241,
          column: 12
        },
        end: {
          line: 241,
          column: 46
        }
      },
      "114": {
        start: {
          line: 244,
          column: 22
        },
        end: {
          line: 244,
          column: 125
        }
      },
      "115": {
        start: {
          line: 245,
          column: 26
        },
        end: {
          line: 245,
          column: 66
        }
      },
      "116": {
        start: {
          line: 246,
          column: 33
        },
        end: {
          line: 246,
          column: 62
        }
      },
      "117": {
        start: {
          line: 247,
          column: 10
        },
        end: {
          line: 247,
          column: 83
        }
      },
      "118": {
        start: {
          line: 248,
          column: 10
        },
        end: {
          line: 248,
          column: 152
        }
      },
      "119": {
        start: {
          line: 249,
          column: 10
        },
        end: {
          line: 249,
          column: 61
        }
      },
      "120": {
        start: {
          line: 249,
          column: 39
        },
        end: {
          line: 249,
          column: 59
        }
      },
      "121": {
        start: {
          line: 251,
          column: 23
        },
        end: {
          line: 251,
          column: 64
        }
      },
      "122": {
        start: {
          line: 252,
          column: 10
        },
        end: {
          line: 257,
          column: 11
        }
      },
      "123": {
        start: {
          line: 253,
          column: 12
        },
        end: {
          line: 253,
          column: 87
        }
      },
      "124": {
        start: {
          line: 255,
          column: 29
        },
        end: {
          line: 255,
          column: 63
        }
      },
      "125": {
        start: {
          line: 256,
          column: 12
        },
        end: {
          line: 256,
          column: 32
        }
      },
      "126": {
        start: {
          line: 259,
          column: 10
        },
        end: {
          line: 259,
          column: 30
        }
      },
      "127": {
        start: {
          line: 266,
          column: 4
        },
        end: {
          line: 271,
          column: 6
        }
      },
      "128": {
        start: {
          line: 267,
          column: 6
        },
        end: {
          line: 270,
          column: 26
        }
      },
      "129": {
        start: {
          line: 268,
          column: 8
        },
        end: {
          line: 268,
          column: 61
        }
      },
      "130": {
        start: {
          line: 268,
          column: 44
        },
        end: {
          line: 268,
          column: 61
        }
      },
      "131": {
        start: {
          line: 270,
          column: 15
        },
        end: {
          line: 270,
          column: 24
        }
      },
      "132": {
        start: {
          line: 275,
          column: 15
        },
        end: {
          line: 275,
          column: 38
        }
      },
      "133": {
        start: {
          line: 276,
          column: 4
        },
        end: {
          line: 276,
          column: 78
        }
      },
      "134": {
        start: {
          line: 276,
          column: 31
        },
        end: {
          line: 276,
          column: 78
        }
      },
      "135": {
        start: {
          line: 277,
          column: 19
        },
        end: {
          line: 277,
          column: 38
        }
      },
      "136": {
        start: {
          line: 278,
          column: 4
        },
        end: {
          line: 278,
          column: 76
        }
      },
      "137": {
        start: {
          line: 278,
          column: 29
        },
        end: {
          line: 278,
          column: 76
        }
      },
      "138": {
        start: {
          line: 279,
          column: 28
        },
        end: {
          line: 279,
          column: 66
        }
      },
      "139": {
        start: {
          line: 280,
          column: 18
        },
        end: {
          line: 280,
          column: 95
        }
      },
      "140": {
        start: {
          line: 282,
          column: 4
        },
        end: {
          line: 309,
          column: 7
        }
      },
      "141": {
        start: {
          line: 283,
          column: 6
        },
        end: {
          line: 308,
          column: 7
        }
      },
      "142": {
        start: {
          line: 284,
          column: 8
        },
        end: {
          line: 288,
          column: 11
        }
      },
      "143": {
        start: {
          line: 287,
          column: 39
        },
        end: {
          line: 287,
          column: 49
        }
      },
      "144": {
        start: {
          line: 290,
          column: 8
        },
        end: {
          line: 290,
          column: 36
        }
      },
      "145": {
        start: {
          line: 291,
          column: 8
        },
        end: {
          line: 291,
          column: 46
        }
      },
      "146": {
        start: {
          line: 292,
          column: 24
        },
        end: {
          line: 292,
          column: 92
        }
      },
      "147": {
        start: {
          line: 293,
          column: 25
        },
        end: {
          line: 293,
          column: 66
        }
      },
      "148": {
        start: {
          line: 294,
          column: 8
        },
        end: {
          line: 294,
          column: 108
        }
      },
      "149": {
        start: {
          line: 294,
          column: 41
        },
        end: {
          line: 294,
          column: 108
        }
      },
      "150": {
        start: {
          line: 295,
          column: 8
        },
        end: {
          line: 295,
          column: 115
        }
      },
      "151": {
        start: {
          line: 295,
          column: 43
        },
        end: {
          line: 295,
          column: 115
        }
      },
      "152": {
        start: {
          line: 296,
          column: 31
        },
        end: {
          line: 296,
          column: 71
        }
      },
      "153": {
        start: {
          line: 297,
          column: 29
        },
        end: {
          line: 297,
          column: 55
        }
      },
      "154": {
        start: {
          line: 298,
          column: 8
        },
        end: {
          line: 298,
          column: 58
        }
      },
      "155": {
        start: {
          line: 299,
          column: 8
        },
        end: {
          line: 299,
          column: 61
        }
      },
      "156": {
        start: {
          line: 303,
          column: 8
        },
        end: {
          line: 303,
          column: 37
        }
      },
      "157": {
        start: {
          line: 304,
          column: 8
        },
        end: {
          line: 304,
          column: 38
        }
      },
      "158": {
        start: {
          line: 305,
          column: 8
        },
        end: {
          line: 305,
          column: 37
        }
      },
      "159": {
        start: {
          line: 307,
          column: 8
        },
        end: {
          line: 307,
          column: 18
        }
      },
      "160": {
        start: {
          line: 313,
          column: 21
        },
        end: {
          line: 313,
          column: 36
        }
      },
      "161": {
        start: {
          line: 314,
          column: 4
        },
        end: {
          line: 333,
          column: 5
        }
      },
      "162": {
        start: {
          line: 315,
          column: 6
        },
        end: {
          line: 315,
          column: 19
        }
      },
      "163": {
        start: {
          line: 316,
          column: 20
        },
        end: {
          line: 316,
          column: 30
        }
      },
      "164": {
        start: {
          line: 317,
          column: 6
        },
        end: {
          line: 330,
          column: 7
        }
      },
      "165": {
        start: {
          line: 318,
          column: 8
        },
        end: {
          line: 318,
          column: 65
        }
      },
      "166": {
        start: {
          line: 319,
          column: 20
        },
        end: {
          line: 319,
          column: 45
        }
      },
      "167": {
        start: {
          line: 320,
          column: 8
        },
        end: {
          line: 320,
          column: 51
        }
      },
      "168": {
        start: {
          line: 321,
          column: 8
        },
        end: {
          line: 326,
          column: 9
        }
      },
      "169": {
        start: {
          line: 324,
          column: 10
        },
        end: {
          line: 324,
          column: 39
        }
      },
      "170": {
        start: {
          line: 325,
          column: 10
        },
        end: {
          line: 325,
          column: 19
        }
      },
      "171": {
        start: {
          line: 328,
          column: 8
        },
        end: {
          line: 328,
          column: 50
        }
      },
      "172": {
        start: {
          line: 329,
          column: 8
        },
        end: {
          line: 329,
          column: 19
        }
      },
      "173": {
        start: {
          line: 332,
          column: 6
        },
        end: {
          line: 332,
          column: 66
        }
      },
      "174": {
        start: {
          line: 332,
          column: 29
        },
        end: {
          line: 332,
          column: 64
        }
      },
      "175": {
        start: {
          line: 338,
          column: 4
        },
        end: {
          line: 338,
          column: 52
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 40,
            column: 2
          },
          end: {
            line: 40,
            column: 3
          }
        },
        loc: {
          start: {
            line: 40,
            column: 92
          },
          end: {
            line: 44,
            column: 3
          }
        },
        line: 40
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 46,
            column: 2
          },
          end: {
            line: 46,
            column: 3
          }
        },
        loc: {
          start: {
            line: 46,
            column: 48
          },
          end: {
            line: 48,
            column: 3
          }
        },
        line: 46
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 50,
            column: 2
          },
          end: {
            line: 50,
            column: 3
          }
        },
        loc: {
          start: {
            line: 50,
            column: 101
          },
          end: {
            line: 84,
            column: 3
          }
        },
        line: 50
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 86,
            column: 2
          },
          end: {
            line: 86,
            column: 3
          }
        },
        loc: {
          start: {
            line: 86,
            column: 17
          },
          end: {
            line: 90,
            column: 3
          }
        },
        line: 86
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 87,
            column: 37
          },
          end: {
            line: 87,
            column: 38
          }
        },
        loc: {
          start: {
            line: 87,
            column: 43
          },
          end: {
            line: 87,
            column: 46
          }
        },
        line: 87
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 88,
            column: 31
          },
          end: {
            line: 88,
            column: 32
          }
        },
        loc: {
          start: {
            line: 88,
            column: 38
          },
          end: {
            line: 88,
            column: 61
          }
        },
        line: 88
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 109,
            column: 2
          },
          end: {
            line: 109,
            column: 3
          }
        },
        loc: {
          start: {
            line: 109,
            column: 51
          },
          end: {
            line: 129,
            column: 3
          }
        },
        line: 109
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 123,
            column: 39
          },
          end: {
            line: 123,
            column: 40
          }
        },
        loc: {
          start: {
            line: 123,
            column: 83
          },
          end: {
            line: 127,
            column: 5
          }
        },
        line: 123
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 125,
            column: 84
          },
          end: {
            line: 125,
            column: 85
          }
        },
        loc: {
          start: {
            line: 125,
            column: 90
          },
          end: {
            line: 125,
            column: 110
          }
        },
        line: 125
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 131,
            column: 2
          },
          end: {
            line: 131,
            column: 3
          }
        },
        loc: {
          start: {
            line: 131,
            column: 61
          },
          end: {
            line: 135,
            column: 3
          }
        },
        line: 131
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 137,
            column: 2
          },
          end: {
            line: 137,
            column: 3
          }
        },
        loc: {
          start: {
            line: 137,
            column: 8
          },
          end: {
            line: 140,
            column: 3
          }
        },
        line: 137
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 142,
            column: 2
          },
          end: {
            line: 142,
            column: 3
          }
        },
        loc: {
          start: {
            line: 142,
            column: 26
          },
          end: {
            line: 147,
            column: 3
          }
        },
        line: 142
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 149,
            column: 2
          },
          end: {
            line: 149,
            column: 3
          }
        },
        loc: {
          start: {
            line: 149,
            column: 56
          },
          end: {
            line: 157,
            column: 3
          }
        },
        line: 149
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 159,
            column: 2
          },
          end: {
            line: 159,
            column: 3
          }
        },
        loc: {
          start: {
            line: 159,
            column: 63
          },
          end: {
            line: 187,
            column: 3
          }
        },
        line: 159
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 165,
            column: 24
          },
          end: {
            line: 165,
            column: 25
          }
        },
        loc: {
          start: {
            line: 165,
            column: 29
          },
          end: {
            line: 165,
            column: 64
          }
        },
        line: 165
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 189,
            column: 2
          },
          end: {
            line: 189,
            column: 3
          }
        },
        loc: {
          start: {
            line: 189,
            column: 35
          },
          end: {
            line: 216,
            column: 3
          }
        },
        line: 189
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 194,
            column: 36
          },
          end: {
            line: 194,
            column: 37
          }
        },
        loc: {
          start: {
            line: 194,
            column: 56
          },
          end: {
            line: 214,
            column: 5
          }
        },
        line: 194
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 218,
            column: 2
          },
          end: {
            line: 218,
            column: 3
          }
        },
        loc: {
          start: {
            line: 218,
            column: 55
          },
          end: {
            line: 263,
            column: 3
          }
        },
        line: 218
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 221,
            column: 30
          },
          end: {
            line: 221,
            column: 31
          }
        },
        loc: {
          start: {
            line: 221,
            column: 44
          },
          end: {
            line: 262,
            column: 5
          }
        },
        line: 221
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 223,
            column: 7
          },
          end: {
            line: 223,
            column: 8
          }
        },
        loc: {
          start: {
            line: 223,
            column: 19
          },
          end: {
            line: 261,
            column: 7
          }
        },
        line: 223
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 225,
            column: 65
          },
          end: {
            line: 225,
            column: 66
          }
        },
        loc: {
          start: {
            line: 225,
            column: 85
          },
          end: {
            line: 233,
            column: 11
          }
        },
        line: 225
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 235,
            column: 31
          },
          end: {
            line: 235,
            column: 32
          }
        },
        loc: {
          start: {
            line: 235,
            column: 59
          },
          end: {
            line: 242,
            column: 11
          }
        },
        line: 235
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 249,
            column: 34
          },
          end: {
            line: 249,
            column: 35
          }
        },
        loc: {
          start: {
            line: 249,
            column: 39
          },
          end: {
            line: 249,
            column: 59
          }
        },
        line: 249
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 265,
            column: 2
          },
          end: {
            line: 265,
            column: 3
          }
        },
        loc: {
          start: {
            line: 265,
            column: 34
          },
          end: {
            line: 272,
            column: 3
          }
        },
        line: 265
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 266,
            column: 29
          },
          end: {
            line: 266,
            column: 30
          }
        },
        loc: {
          start: {
            line: 266,
            column: 50
          },
          end: {
            line: 271,
            column: 5
          }
        },
        line: 266
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 267,
            column: 39
          },
          end: {
            line: 267,
            column: 40
          }
        },
        loc: {
          start: {
            line: 267,
            column: 47
          },
          end: {
            line: 269,
            column: 7
          }
        },
        line: 267
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 270,
            column: 8
          },
          end: {
            line: 270,
            column: 9
          }
        },
        loc: {
          start: {
            line: 270,
            column: 15
          },
          end: {
            line: 270,
            column: 24
          }
        },
        line: 270
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 274,
            column: 2
          },
          end: {
            line: 274,
            column: 3
          }
        },
        loc: {
          start: {
            line: 274,
            column: 31
          },
          end: {
            line: 310,
            column: 3
          }
        },
        line: 274
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 282,
            column: 23
          },
          end: {
            line: 282,
            column: 24
          }
        },
        loc: {
          start: {
            line: 282,
            column: 50
          },
          end: {
            line: 309,
            column: 5
          }
        },
        line: 282
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 287,
            column: 32
          },
          end: {
            line: 287,
            column: 33
          }
        },
        loc: {
          start: {
            line: 287,
            column: 39
          },
          end: {
            line: 287,
            column: 49
          }
        },
        line: 287
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 312,
            column: 2
          },
          end: {
            line: 312,
            column: 3
          }
        },
        loc: {
          start: {
            line: 312,
            column: 40
          },
          end: {
            line: 334,
            column: 3
          }
        },
        line: 312
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 332,
            column: 24
          },
          end: {
            line: 332,
            column: 25
          }
        },
        loc: {
          start: {
            line: 332,
            column: 29
          },
          end: {
            line: 332,
            column: 64
          }
        },
        line: 332
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 337,
            column: 2
          },
          end: {
            line: 337,
            column: 3
          }
        },
        loc: {
          start: {
            line: 337,
            column: 26
          },
          end: {
            line: 339,
            column: 3
          }
        },
        line: 337
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 60,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 60,
            column: 5
          }
        }, {
          start: {
            line: 56,
            column: 4
          },
          end: {
            line: 60,
            column: 5
          }
        }],
        line: 56
      },
      "1": {
        loc: {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        }, {
          start: {
            line: 64,
            column: 4
          },
          end: {
            line: 75,
            column: 5
          }
        }],
        line: 64
      },
      "2": {
        loc: {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        }, {
          start: {
            line: 77,
            column: 4
          },
          end: {
            line: 81,
            column: 5
          }
        }],
        line: 77
      },
      "3": {
        loc: {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 118,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 118,
            column: 5
          }
        }, {
          start: {
            line: 116,
            column: 4
          },
          end: {
            line: 118,
            column: 5
          }
        }],
        line: 116
      },
      "4": {
        loc: {
          start: {
            line: 149,
            column: 22
          },
          end: {
            line: 149,
            column: 46
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 149,
            column: 44
          },
          end: {
            line: 149,
            column: 46
          }
        }],
        line: 149
      },
      "5": {
        loc: {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        }, {
          start: {
            line: 152,
            column: 4
          },
          end: {
            line: 154,
            column: 5
          }
        }],
        line: 152
      },
      "6": {
        loc: {
          start: {
            line: 159,
            column: 29
          },
          end: {
            line: 159,
            column: 45
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 159,
            column: 41
          },
          end: {
            line: 159,
            column: 45
          }
        }],
        line: 159
      },
      "7": {
        loc: {
          start: {
            line: 159,
            column: 47
          },
          end: {
            line: 159,
            column: 61
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 159,
            column: 60
          },
          end: {
            line: 159,
            column: 61
          }
        }],
        line: 159
      },
      "8": {
        loc: {
          start: {
            line: 168,
            column: 8
          },
          end: {
            line: 179,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 168,
            column: 8
          },
          end: {
            line: 179,
            column: 9
          }
        }, {
          start: {
            line: 168,
            column: 8
          },
          end: {
            line: 179,
            column: 9
          }
        }],
        line: 168
      },
      "9": {
        loc: {
          start: {
            line: 173,
            column: 10
          },
          end: {
            line: 178,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 173,
            column: 10
          },
          end: {
            line: 178,
            column: 11
          }
        }, {
          start: {
            line: 173,
            column: 10
          },
          end: {
            line: 178,
            column: 11
          }
        }],
        line: 173
      },
      "10": {
        loc: {
          start: {
            line: 173,
            column: 14
          },
          end: {
            line: 173,
            column: 54
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 173,
            column: 14
          },
          end: {
            line: 173,
            column: 32
          }
        }, {
          start: {
            line: 173,
            column: 36
          },
          end: {
            line: 173,
            column: 54
          }
        }],
        line: 173
      },
      "11": {
        loc: {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 192,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 192,
            column: 5
          }
        }, {
          start: {
            line: 190,
            column: 4
          },
          end: {
            line: 192,
            column: 5
          }
        }],
        line: 190
      },
      "12": {
        loc: {
          start: {
            line: 190,
            column: 8
          },
          end: {
            line: 190,
            column: 94
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 190,
            column: 8
          },
          end: {
            line: 190,
            column: 35
          }
        }, {
          start: {
            line: 190,
            column: 39
          },
          end: {
            line: 190,
            column: 59
          }
        }, {
          start: {
            line: 190,
            column: 63
          },
          end: {
            line: 190,
            column: 94
          }
        }],
        line: 190
      },
      "13": {
        loc: {
          start: {
            line: 200,
            column: 8
          },
          end: {
            line: 200,
            column: 97
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 200,
            column: 8
          },
          end: {
            line: 200,
            column: 97
          }
        }, {
          start: {
            line: 200,
            column: 8
          },
          end: {
            line: 200,
            column: 97
          }
        }],
        line: 200
      },
      "14": {
        loc: {
          start: {
            line: 202,
            column: 8
          },
          end: {
            line: 202,
            column: 100
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 202,
            column: 8
          },
          end: {
            line: 202,
            column: 100
          }
        }, {
          start: {
            line: 202,
            column: 8
          },
          end: {
            line: 202,
            column: 100
          }
        }],
        line: 202
      },
      "15": {
        loc: {
          start: {
            line: 228,
            column: 12
          },
          end: {
            line: 232,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 228,
            column: 12
          },
          end: {
            line: 232,
            column: 13
          }
        }, {
          start: {
            line: 228,
            column: 12
          },
          end: {
            line: 232,
            column: 13
          }
        }],
        line: 228
      },
      "16": {
        loc: {
          start: {
            line: 252,
            column: 10
          },
          end: {
            line: 257,
            column: 11
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 252,
            column: 10
          },
          end: {
            line: 257,
            column: 11
          }
        }, {
          start: {
            line: 252,
            column: 10
          },
          end: {
            line: 257,
            column: 11
          }
        }],
        line: 252
      },
      "17": {
        loc: {
          start: {
            line: 252,
            column: 14
          },
          end: {
            line: 252,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 252,
            column: 14
          },
          end: {
            line: 252,
            column: 26
          }
        }, {
          start: {
            line: 252,
            column: 30
          },
          end: {
            line: 252,
            column: 55
          }
        }],
        line: 252
      },
      "18": {
        loc: {
          start: {
            line: 268,
            column: 8
          },
          end: {
            line: 268,
            column: 61
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 268,
            column: 8
          },
          end: {
            line: 268,
            column: 61
          }
        }, {
          start: {
            line: 268,
            column: 8
          },
          end: {
            line: 268,
            column: 61
          }
        }],
        line: 268
      },
      "19": {
        loc: {
          start: {
            line: 276,
            column: 4
          },
          end: {
            line: 276,
            column: 78
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 276,
            column: 4
          },
          end: {
            line: 276,
            column: 78
          }
        }, {
          start: {
            line: 276,
            column: 4
          },
          end: {
            line: 276,
            column: 78
          }
        }],
        line: 276
      },
      "20": {
        loc: {
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 278,
            column: 76
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 278,
            column: 76
          }
        }, {
          start: {
            line: 278,
            column: 4
          },
          end: {
            line: 278,
            column: 76
          }
        }],
        line: 278
      },
      "21": {
        loc: {
          start: {
            line: 294,
            column: 8
          },
          end: {
            line: 294,
            column: 108
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 294,
            column: 8
          },
          end: {
            line: 294,
            column: 108
          }
        }, {
          start: {
            line: 294,
            column: 8
          },
          end: {
            line: 294,
            column: 108
          }
        }],
        line: 294
      },
      "22": {
        loc: {
          start: {
            line: 295,
            column: 8
          },
          end: {
            line: 295,
            column: 115
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 295,
            column: 8
          },
          end: {
            line: 295,
            column: 115
          }
        }, {
          start: {
            line: 295,
            column: 8
          },
          end: {
            line: 295,
            column: 115
          }
        }],
        line: 295
      },
      "23": {
        loc: {
          start: {
            line: 321,
            column: 8
          },
          end: {
            line: 326,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 321,
            column: 8
          },
          end: {
            line: 326,
            column: 9
          }
        }, {
          start: {
            line: 321,
            column: 8
          },
          end: {
            line: 326,
            column: 9
          }
        }],
        line: 321
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0,
      "33": 0,
      "34": 0,
      "35": 0,
      "36": 0,
      "37": 0,
      "38": 0,
      "39": 0,
      "40": 0,
      "41": 0,
      "42": 0,
      "43": 0,
      "44": 0,
      "45": 0,
      "46": 0,
      "47": 0,
      "48": 0,
      "49": 0,
      "50": 0,
      "51": 0,
      "52": 0,
      "53": 0,
      "54": 0,
      "55": 0,
      "56": 0,
      "57": 0,
      "58": 0,
      "59": 0,
      "60": 0,
      "61": 0,
      "62": 0,
      "63": 0,
      "64": 0,
      "65": 0,
      "66": 0,
      "67": 0,
      "68": 0,
      "69": 0,
      "70": 0,
      "71": 0,
      "72": 0,
      "73": 0,
      "74": 0,
      "75": 0,
      "76": 0,
      "77": 0,
      "78": 0,
      "79": 0,
      "80": 0,
      "81": 0,
      "82": 0,
      "83": 0,
      "84": 0,
      "85": 0,
      "86": 0,
      "87": 0,
      "88": 0,
      "89": 0,
      "90": 0,
      "91": 0,
      "92": 0,
      "93": 0,
      "94": 0,
      "95": 0,
      "96": 0,
      "97": 0,
      "98": 0,
      "99": 0,
      "100": 0,
      "101": 0,
      "102": 0,
      "103": 0,
      "104": 0,
      "105": 0,
      "106": 0,
      "107": 0,
      "108": 0,
      "109": 0,
      "110": 0,
      "111": 0,
      "112": 0,
      "113": 0,
      "114": 0,
      "115": 0,
      "116": 0,
      "117": 0,
      "118": 0,
      "119": 0,
      "120": 0,
      "121": 0,
      "122": 0,
      "123": 0,
      "124": 0,
      "125": 0,
      "126": 0,
      "127": 0,
      "128": 0,
      "129": 0,
      "130": 0,
      "131": 0,
      "132": 0,
      "133": 0,
      "134": 0,
      "135": 0,
      "136": 0,
      "137": 0,
      "138": 0,
      "139": 0,
      "140": 0,
      "141": 0,
      "142": 0,
      "143": 0,
      "144": 0,
      "145": 0,
      "146": 0,
      "147": 0,
      "148": 0,
      "149": 0,
      "150": 0,
      "151": 0,
      "152": 0,
      "153": 0,
      "154": 0,
      "155": 0,
      "156": 0,
      "157": 0,
      "158": 0,
      "159": 0,
      "160": 0,
      "161": 0,
      "162": 0,
      "163": 0,
      "164": 0,
      "165": 0,
      "166": 0,
      "167": 0,
      "168": 0,
      "169": 0,
      "170": 0,
      "171": 0,
      "172": 0,
      "173": 0,
      "174": 0,
      "175": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0,
      "6": 0,
      "7": 0,
      "8": 0,
      "9": 0,
      "10": 0,
      "11": 0,
      "12": 0,
      "13": 0,
      "14": 0,
      "15": 0,
      "16": 0,
      "17": 0,
      "18": 0,
      "19": 0,
      "20": 0,
      "21": 0,
      "22": 0,
      "23": 0,
      "24": 0,
      "25": 0,
      "26": 0,
      "27": 0,
      "28": 0,
      "29": 0,
      "30": 0,
      "31": 0,
      "32": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0],
      "5": [0, 0],
      "6": [0],
      "7": [0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0, 0],
      "13": [0, 0],
      "14": [0, 0],
      "15": [0, 0],
      "16": [0, 0],
      "17": [0, 0],
      "18": [0, 0],
      "19": [0, 0],
      "20": [0, 0],
      "21": [0, 0],
      "22": [0, 0],
      "23": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "e1c04186bec1df39d4df1733b608cf58e9f37fcc"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_14ow7qzac4 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_14ow7qzac4();
var DIRECT_LINE_VERSION = (cov_14ow7qzac4().s[0]++, 'DirectLine/3.0');
var MAX_RETRY_COUNT = (cov_14ow7qzac4().s[1]++, 3);
var refreshTokenLifetime = (cov_14ow7qzac4().s[2]++, 30 * 60 * 1000); //const refreshTokenLifetime = 5000;

var timeout = (cov_14ow7qzac4().s[3]++, 20 * 1000);
var refreshTokenInterval = (cov_14ow7qzac4().s[4]++, refreshTokenLifetime / 2);

var StreamHandler = /*#__PURE__*/function () {
  function StreamHandler(s, c$, sq) {
    (0, _classCallCheck2["default"])(this, StreamHandler);
    (0, _defineProperty2["default"])(this, "activityQueue", (cov_14ow7qzac4().s[5]++, []));
    cov_14ow7qzac4().f[0]++;
    cov_14ow7qzac4().s[6]++;
    this.subscriber = s;
    cov_14ow7qzac4().s[7]++;
    this.connectionStatus$ = c$;
    cov_14ow7qzac4().s[8]++;
    this.shouldQueue = sq;
  }

  (0, _createClass2["default"])(StreamHandler, [{
    key: "setSubscriber",
    value: function setSubscriber(s) {
      cov_14ow7qzac4().f[1]++;
      cov_14ow7qzac4().s[9]++;
      this.subscriber = s;
    }
  }, {
    key: "processRequest",
    value: function () {
      var _processRequest = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(request, logger) {
        var streams, stream0, activitySetJson, activitySet, activity, attachments, stream, attachment, dataUri;
        return _regenerator["default"].wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                cov_14ow7qzac4().f[2]++;
                streams = (cov_14ow7qzac4().s[10]++, (0, _toConsumableArray2["default"])(request.streams));
                stream0 = (cov_14ow7qzac4().s[11]++, streams.shift());
                cov_14ow7qzac4().s[12]++;
                _context.next = 6;
                return stream0.readAsString();

              case 6:
                activitySetJson = _context.sent;
                activitySet = (cov_14ow7qzac4().s[13]++, JSON.parse(activitySetJson));
                cov_14ow7qzac4().s[14]++;

                if (!(activitySet.activities.length !== 1)) {
                  _context.next = 17;
                  break;
                }

                cov_14ow7qzac4().b[0][0]++;
                cov_14ow7qzac4().s[15]++;
                // Only one activity is expected in a set in streaming
                this.subscriber.error(new Error('there should be exactly one activity'));
                cov_14ow7qzac4().s[16]++;
                return _context.abrupt("return", BFSE.StreamingResponse.create(500));

              case 17:
                cov_14ow7qzac4().b[0][1]++;

              case 18:
                activity = (cov_14ow7qzac4().s[17]++, activitySet.activities[0]);
                cov_14ow7qzac4().s[18]++;

                if (!(streams.length > 0)) {
                  _context.next = 38;
                  break;
                }

                cov_14ow7qzac4().b[1][0]++;
                attachments = (cov_14ow7qzac4().s[19]++, (0, _toConsumableArray2["default"])(activity.attachments));
                cov_14ow7qzac4().s[20]++;

              case 24:
                if (!(stream = streams.shift())) {
                  _context.next = 34;
                  break;
                }

                cov_14ow7qzac4().s[21]++;
                _context.next = 28;
                return stream.readAsString();

              case 28:
                attachment = _context.sent;
                dataUri = (cov_14ow7qzac4().s[22]++, "data:text/plain;base64," + attachment);
                cov_14ow7qzac4().s[23]++;
                attachments.push({
                  contentType: stream.contentType,
                  contentUrl: dataUri
                });
                _context.next = 24;
                break;

              case 34:
                cov_14ow7qzac4().s[24]++;
                activity.attachments = attachments;
                _context.next = 39;
                break;

              case 38:
                cov_14ow7qzac4().b[1][1]++;

              case 39:
                cov_14ow7qzac4().s[25]++;

                if (this.shouldQueue()) {
                  cov_14ow7qzac4().b[2][0]++;
                  cov_14ow7qzac4().s[26]++;
                  this.activityQueue.push(activity);
                } else {
                  cov_14ow7qzac4().b[2][1]++;
                  cov_14ow7qzac4().s[27]++;
                  this.subscriber.next(activity);
                }

                cov_14ow7qzac4().s[28]++;
                return _context.abrupt("return", BFSE.StreamingResponse.create(200));

              case 43:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function processRequest(_x, _x2) {
        return _processRequest.apply(this, arguments);
      }

      return processRequest;
    }()
  }, {
    key: "flush",
    value: function flush() {
      var _this = this;

      cov_14ow7qzac4().f[3]++;
      cov_14ow7qzac4().s[29]++;
      this.connectionStatus$.subscribe(function (cs) {
        cov_14ow7qzac4().f[4]++;
      });
      cov_14ow7qzac4().s[30]++;
      this.activityQueue.forEach(function (a) {
        cov_14ow7qzac4().f[5]++;
        cov_14ow7qzac4().s[31]++;
        return _this.subscriber.next(a);
      });
      cov_14ow7qzac4().s[32]++;
      this.activityQueue = [];
    }
  }]);
  return StreamHandler;
}();

var DirectLineStreaming = /*#__PURE__*/function () {
  function DirectLineStreaming(options) {
    var _this2 = this;

    (0, _classCallCheck2["default"])(this, DirectLineStreaming);
    (0, _defineProperty2["default"])(this, "connectionStatus$", (cov_14ow7qzac4().s[33]++, new _BehaviorSubject.BehaviorSubject(_directLine.ConnectionStatus.Uninitialized)));
    (0, _defineProperty2["default"])(this, "historyLoadedFlag", (cov_14ow7qzac4().s[34]++, false));
    (0, _defineProperty2["default"])(this, "_botAgent", (cov_14ow7qzac4().s[35]++, ''));
    cov_14ow7qzac4().f[6]++;
    cov_14ow7qzac4().s[36]++;
    this.token = options.token;
    cov_14ow7qzac4().s[37]++;
    this.refreshToken();
    cov_14ow7qzac4().s[38]++;
    this.domain = options.domain;
    cov_14ow7qzac4().s[39]++;

    if (options.conversationId) {
      cov_14ow7qzac4().b[3][0]++;
      cov_14ow7qzac4().s[40]++;
      this.conversationId = options.conversationId;
    } else {
      cov_14ow7qzac4().b[3][1]++;
    }

    cov_14ow7qzac4().s[41]++;
    this._botAgent = this.getBotAgent(options.botAgent);
    cov_14ow7qzac4().s[42]++;
    this.queueActivities = true;
    cov_14ow7qzac4().s[43]++;
    this.activity$ = _Observable.Observable.create( /*#__PURE__*/function () {
      var _ref = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(subscriber) {
        return _regenerator["default"].wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                cov_14ow7qzac4().f[7]++;
                cov_14ow7qzac4().s[44]++;
                _this2.activitySubscriber = subscriber;
                cov_14ow7qzac4().s[45]++;
                _this2.theStreamHandler = new StreamHandler(subscriber, _this2.connectionStatus$, function () {
                  cov_14ow7qzac4().f[8]++;
                  cov_14ow7qzac4().s[46]++;
                  return _this2.queueActivities;
                });
                cov_14ow7qzac4().s[47]++;

                _this2.connectWithRetryAsync();

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }));

      return function (_x3) {
        return _ref.apply(this, arguments);
      };
    }()).share();
  }

  (0, _createClass2["default"])(DirectLineStreaming, [{
    key: "reconnect",
    value: function reconnect(_ref2) {
      var conversationId = _ref2.conversationId,
          token = _ref2.token;
      cov_14ow7qzac4().f[9]++;
      cov_14ow7qzac4().s[48]++;
      this.conversationId = conversationId;
      cov_14ow7qzac4().s[49]++;
      this.token = token;
      cov_14ow7qzac4().s[50]++;
      this.connectAsync();
    }
  }, {
    key: "end",
    value: function end() {
      cov_14ow7qzac4().f[10]++;
      cov_14ow7qzac4().s[51]++;
      this.connectionStatus$.next(_directLine.ConnectionStatus.Ended);
      cov_14ow7qzac4().s[52]++;
      this.streamConnection.disconnect();
    }
  }, {
    key: "commonHeaders",
    value: function commonHeaders() {
      cov_14ow7qzac4().f[11]++;
      cov_14ow7qzac4().s[53]++;
      return {
        "Authorization": "Bearer ".concat(this.token),
        "x-ms-bot-agent": this._botAgent
      };
    }
  }, {
    key: "getBotAgent",
    value: function getBotAgent() {
      var customAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_14ow7qzac4().b[4][0]++, '');
      cov_14ow7qzac4().f[12]++;
      var clientAgent = (cov_14ow7qzac4().s[54]++, 'directlineStreaming');
      cov_14ow7qzac4().s[55]++;

      if (customAgent) {
        cov_14ow7qzac4().b[5][0]++;
        cov_14ow7qzac4().s[56]++;
        clientAgent += "; ".concat(customAgent);
      } else {
        cov_14ow7qzac4().b[5][1]++;
      }

      cov_14ow7qzac4().s[57]++;
      return "".concat(DIRECT_LINE_VERSION, " (").concat(clientAgent, ")");
    }
  }, {
    key: "refreshToken",
    value: function () {
      var _refreshToken = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
        var firstCall,
            retryCount,
            numberOfAttempts,
            res,
            _ref3,
            token,
            _args3 = arguments;

        return _regenerator["default"].wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                firstCall = _args3.length > 0 && _args3[0] !== undefined ? _args3[0] : (cov_14ow7qzac4().b[6][0]++, true);
                retryCount = _args3.length > 1 && _args3[1] !== undefined ? _args3[1] : (cov_14ow7qzac4().b[7][0]++, 0);
                cov_14ow7qzac4().f[13]++;
                cov_14ow7qzac4().s[58]++;
                _context3.next = 6;
                return this.waitUntilOnline();

              case 6:
                numberOfAttempts = (cov_14ow7qzac4().s[59]++, 0);
                cov_14ow7qzac4().s[60]++;

              case 8:
                if (!(numberOfAttempts < MAX_RETRY_COUNT)) {
                  _context3.next = 45;
                  break;
                }

                cov_14ow7qzac4().s[61]++;
                numberOfAttempts++;
                cov_14ow7qzac4().s[62]++;
                _context3.next = 14;
                return new Promise(function (r) {
                  cov_14ow7qzac4().f[14]++;
                  cov_14ow7qzac4().s[63]++;
                  return setTimeout(r, refreshTokenInterval);
                });

              case 14:
                cov_14ow7qzac4().s[64]++;
                _context3.prev = 15;
                cov_14ow7qzac4().s[65]++;
                _context3.next = 19;
                return (0, _crossFetch["default"])("".concat(this.domain, "/tokens/refresh"), {
                  method: "POST",
                  headers: this.commonHeaders()
                });

              case 19:
                res = _context3.sent;
                cov_14ow7qzac4().s[66]++;

                if (!res.ok) {
                  _context3.next = 34;
                  break;
                }

                cov_14ow7qzac4().b[8][0]++;
                cov_14ow7qzac4().s[67]++;
                numberOfAttempts = 0;
                cov_14ow7qzac4().s[68]++;
                _context3.next = 28;
                return res.json();

              case 28:
                _ref3 = _context3.sent;
                token = _ref3.token;
                cov_14ow7qzac4().s[69]++;
                this.token = token;
                _context3.next = 37;
                break;

              case 34:
                cov_14ow7qzac4().b[8][1]++;
                cov_14ow7qzac4().s[70]++;

                if ((cov_14ow7qzac4().b[10][0]++, res.status === 403) || (cov_14ow7qzac4().b[10][1]++, res.status === 403)) {
                  cov_14ow7qzac4().b[9][0]++;
                  cov_14ow7qzac4().s[71]++;
                  console.error("Fatal error while refreshing the token: ".concat(res.status, " ").concat(res.statusText));
                  cov_14ow7qzac4().s[72]++;
                  this.streamConnection.disconnect();
                } else {
                  cov_14ow7qzac4().b[9][1]++;
                  cov_14ow7qzac4().s[73]++;
                  console.warn("Refresh attempt #".concat(numberOfAttempts, " failed: ").concat(res.status, " ").concat(res.statusText));
                }

              case 37:
                _context3.next = 43;
                break;

              case 39:
                _context3.prev = 39;
                _context3.t0 = _context3["catch"](15);
                cov_14ow7qzac4().s[74]++;
                console.warn("Refresh attempt #".concat(numberOfAttempts, " threw an exception: ").concat(_context3.t0));

              case 43:
                _context3.next = 8;
                break;

              case 45:
                cov_14ow7qzac4().s[75]++;
                console.error("Retries exhausted");
                cov_14ow7qzac4().s[76]++;
                this.streamConnection.disconnect();

              case 49:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[15, 39]]);
      }));

      function refreshToken() {
        return _refreshToken.apply(this, arguments);
      }

      return refreshToken;
    }()
  }, {
    key: "postActivity",
    value: function postActivity(activity) {
      var _this3 = this;

      cov_14ow7qzac4().f[15]++;
      cov_14ow7qzac4().s[77]++;

      if ((cov_14ow7qzac4().b[12][0]++, activity.type === "message") && (cov_14ow7qzac4().b[12][1]++, activity.attachments) && (cov_14ow7qzac4().b[12][2]++, activity.attachments.length > 0)) {
        cov_14ow7qzac4().b[11][0]++;
        cov_14ow7qzac4().s[78]++;
        return this.postMessageWithAttachments(activity);
      } else {
        cov_14ow7qzac4().b[11][1]++;
      }

      var resp$ = (cov_14ow7qzac4().s[79]++, _Observable.Observable.create( /*#__PURE__*/function () {
        var _ref4 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4(subscriber) {
          var request, resp, numberOfStreams, idString, _ref5, id;

          return _regenerator["default"].wrap(function _callee4$(_context4) {
            while (1) {
              switch (_context4.prev = _context4.next) {
                case 0:
                  cov_14ow7qzac4().f[16]++;
                  request = (cov_14ow7qzac4().s[80]++, BFSE.StreamingRequest.create('POST', '/v3/directline/conversations/' + _this3.conversationId + '/activities'));
                  cov_14ow7qzac4().s[81]++;
                  request.setBody(JSON.stringify(activity));
                  cov_14ow7qzac4().s[82]++;
                  _context4.next = 7;
                  return _this3.streamConnection.send(request);

                case 7:
                  resp = _context4.sent;
                  cov_14ow7qzac4().s[83]++;
                  _context4.prev = 9;
                  cov_14ow7qzac4().s[84]++;

                  if (!(resp.statusCode !== 200)) {
                    _context4.next = 17;
                    break;
                  }

                  cov_14ow7qzac4().b[13][0]++;
                  cov_14ow7qzac4().s[85]++;
                  throw new Error("PostActivity returned " + resp.statusCode);

                case 17:
                  cov_14ow7qzac4().b[13][1]++;

                case 18:
                  numberOfStreams = (cov_14ow7qzac4().s[86]++, resp.streams.length);
                  cov_14ow7qzac4().s[87]++;

                  if (!(numberOfStreams !== 1)) {
                    _context4.next = 26;
                    break;
                  }

                  cov_14ow7qzac4().b[14][0]++;
                  cov_14ow7qzac4().s[88]++;
                  throw new Error("Expected one stream but got " + numberOfStreams);

                case 26:
                  cov_14ow7qzac4().b[14][1]++;

                case 27:
                  cov_14ow7qzac4().s[89]++;
                  _context4.next = 30;
                  return resp.streams[0].readAsString();

                case 30:
                  idString = _context4.sent;
                  _ref5 = (cov_14ow7qzac4().s[90]++, JSON.parse(idString)), id = _ref5.Id;
                  cov_14ow7qzac4().s[91]++;
                  return _context4.abrupt("return", subscriber.next(id));

                case 36:
                  _context4.prev = 36;
                  _context4.t0 = _context4["catch"](9);
                  cov_14ow7qzac4().s[92]++;
                  // If there is a network issue then its handled by
                  // the disconnectionHandler. Everything else can
                  // be retried
                  console.warn(_context4.t0);
                  cov_14ow7qzac4().s[93]++;

                  _this3.streamConnection.disconnect();

                  cov_14ow7qzac4().s[94]++;
                  return _context4.abrupt("return", subscriber.error(_context4.t0));

                case 44:
                case "end":
                  return _context4.stop();
              }
            }
          }, _callee4, null, [[9, 36]]);
        }));

        return function (_x4) {
          return _ref4.apply(this, arguments);
        };
      }()));
      cov_14ow7qzac4().s[95]++;
      return resp$;
    }
  }, {
    key: "postMessageWithAttachments",
    value: function postMessageWithAttachments(message) {
      var _this4 = this;

      cov_14ow7qzac4().f[17]++;

      var _ref6 = (cov_14ow7qzac4().s[96]++, message),
          attachments = _ref6.attachments,
          messageWithoutAttachments = (0, _objectWithoutProperties2["default"])(_ref6, _excluded);

      cov_14ow7qzac4().s[97]++;
      return _Observable.Observable.create(function (subscriber) {
        cov_14ow7qzac4().f[18]++;
        var httpContentList = (cov_14ow7qzac4().s[98]++, []);
        cov_14ow7qzac4().s[99]++;
        (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee6() {
          var arrayBuffers, url, request, activityStream, resp, _ref10, id;

          return _regenerator["default"].wrap(function _callee6$(_context6) {
            while (1) {
              switch (_context6.prev = _context6.next) {
                case 0:
                  cov_14ow7qzac4().f[19]++;
                  cov_14ow7qzac4().s[100]++;
                  _context6.prev = 2;
                  cov_14ow7qzac4().s[101]++;
                  _context6.next = 6;
                  return Promise.all(attachments.map( /*#__PURE__*/function () {
                    var _ref8 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5(attachment) {
                      var media, res;
                      return _regenerator["default"].wrap(function _callee5$(_context5) {
                        while (1) {
                          switch (_context5.prev = _context5.next) {
                            case 0:
                              cov_14ow7qzac4().f[20]++;
                              media = (cov_14ow7qzac4().s[102]++, attachment);
                              cov_14ow7qzac4().s[103]++;
                              _context5.next = 5;
                              return (0, _crossFetch["default"])(media.contentUrl);

                            case 5:
                              res = _context5.sent;
                              cov_14ow7qzac4().s[104]++;

                              if (!res.ok) {
                                _context5.next = 17;
                                break;
                              }

                              cov_14ow7qzac4().b[15][0]++;
                              cov_14ow7qzac4().s[105]++;
                              _context5.next = 12;
                              return res.arrayBuffer();

                            case 12:
                              _context5.t0 = _context5.sent;
                              _context5.t1 = media;
                              return _context5.abrupt("return", {
                                arrayBuffer: _context5.t0,
                                media: _context5.t1
                              });

                            case 17:
                              cov_14ow7qzac4().b[15][1]++;
                              cov_14ow7qzac4().s[106]++;
                              throw new Error('...');

                            case 20:
                            case "end":
                              return _context5.stop();
                          }
                        }
                      }, _callee5);
                    }));

                    return function (_x5) {
                      return _ref8.apply(this, arguments);
                    };
                  }()));

                case 6:
                  arrayBuffers = _context6.sent;
                  cov_14ow7qzac4().s[107]++;
                  arrayBuffers.forEach(function (_ref9) {
                    var arrayBuffer = _ref9.arrayBuffer,
                        media = _ref9.media;
                    cov_14ow7qzac4().f[21]++;
                    var buffer = (cov_14ow7qzac4().s[108]++, _buffer.Buffer.from(arrayBuffer));
                    cov_14ow7qzac4().s[109]++;
                    console.log(buffer);
                    var stream = (cov_14ow7qzac4().s[110]++, new BFSE.SubscribableStream());
                    cov_14ow7qzac4().s[111]++;
                    stream.write(buffer);
                    var httpContent = (cov_14ow7qzac4().s[112]++, new BFSE.HttpContent({
                      type: media.contentType,
                      contentLength: buffer.length
                    }, stream));
                    cov_14ow7qzac4().s[113]++;
                    httpContentList.push(httpContent);
                  });
                  url = (cov_14ow7qzac4().s[114]++, "/v3/directline/conversations/".concat(_this4.conversationId, "/users/").concat(messageWithoutAttachments.from.id, "/upload"));
                  request = (cov_14ow7qzac4().s[115]++, BFSE.StreamingRequest.create('PUT', url));
                  activityStream = (cov_14ow7qzac4().s[116]++, new BFSE.SubscribableStream());
                  cov_14ow7qzac4().s[117]++;
                  activityStream.write(JSON.stringify(messageWithoutAttachments), 'utf-8');
                  cov_14ow7qzac4().s[118]++;
                  request.addStream(new BFSE.HttpContent({
                    type: "application/vnd.microsoft.activity",
                    contentLength: activityStream.length
                  }, activityStream));
                  cov_14ow7qzac4().s[119]++;
                  httpContentList.forEach(function (e) {
                    cov_14ow7qzac4().f[22]++;
                    cov_14ow7qzac4().s[120]++;
                    return request.addStream(e);
                  });
                  cov_14ow7qzac4().s[121]++;
                  _context6.next = 21;
                  return _this4.streamConnection.send(request);

                case 21:
                  resp = _context6.sent;
                  cov_14ow7qzac4().s[122]++;

                  if (!((cov_14ow7qzac4().b[17][0]++, resp.streams) && (cov_14ow7qzac4().b[17][1]++, resp.streams.length !== 1))) {
                    _context6.next = 29;
                    break;
                  }

                  cov_14ow7qzac4().b[16][0]++;
                  cov_14ow7qzac4().s[123]++;
                  subscriber.error(new Error("Invalid stream count ".concat(resp.streams.length)));
                  _context6.next = 37;
                  break;

                case 29:
                  cov_14ow7qzac4().b[16][1]++;
                  cov_14ow7qzac4().s[124]++;
                  _context6.next = 33;
                  return resp.streams[0].readAsJson();

                case 33:
                  _ref10 = _context6.sent;
                  id = _ref10.Id;
                  cov_14ow7qzac4().s[125]++;
                  subscriber.next(id);

                case 37:
                  _context6.next = 43;
                  break;

                case 39:
                  _context6.prev = 39;
                  _context6.t0 = _context6["catch"](2);
                  cov_14ow7qzac4().s[126]++;
                  subscriber.error(_context6.t0);

                case 43:
                case "end":
                  return _context6.stop();
              }
            }
          }, _callee6, null, [[2, 39]]);
        }))();
      });
    }
  }, {
    key: "waitUntilOnline",
    value: function () {
      var _waitUntilOnline = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee7() {
        var _this5 = this;

        return _regenerator["default"].wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                cov_14ow7qzac4().f[23]++;
                cov_14ow7qzac4().s[127]++;
                return _context7.abrupt("return", new Promise(function (resolve, reject) {
                  cov_14ow7qzac4().f[24]++;
                  cov_14ow7qzac4().s[128]++;

                  _this5.connectionStatus$.subscribe(function (cs) {
                    cov_14ow7qzac4().f[25]++;
                    cov_14ow7qzac4().s[129]++;

                    if (cs === _directLine.ConnectionStatus.Online) {
                      cov_14ow7qzac4().b[18][0]++;
                      cov_14ow7qzac4().s[130]++;
                      return resolve();
                    } else {
                      cov_14ow7qzac4().b[18][1]++;
                    }
                  }, function (e) {
                    cov_14ow7qzac4().f[26]++;
                    cov_14ow7qzac4().s[131]++;
                    return reject(e);
                  });
                }));

              case 3:
              case "end":
                return _context7.stop();
            }
          }
        }, _callee7);
      }));

      function waitUntilOnline() {
        return _waitUntilOnline.apply(this, arguments);
      }

      return waitUntilOnline;
    }()
  }, {
    key: "connectAsync",
    value: function () {
      var _connectAsync = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee9() {
        var _this6 = this;

        var re, params, urlSearchParams, wsUrl;
        return _regenerator["default"].wrap(function _callee9$(_context9) {
          while (1) {
            switch (_context9.prev = _context9.next) {
              case 0:
                cov_14ow7qzac4().f[27]++;
                re = (cov_14ow7qzac4().s[132]++, new RegExp('^http(s?)'));
                cov_14ow7qzac4().s[133]++;

                if (re.test(this.domain)) {
                  _context9.next = 9;
                  break;
                }

                cov_14ow7qzac4().b[19][0]++;
                cov_14ow7qzac4().s[134]++;
                throw "Domain must begin with http or https";

              case 9:
                cov_14ow7qzac4().b[19][1]++;

              case 10:
                params = (cov_14ow7qzac4().s[135]++, {
                  token: this.token
                });
                cov_14ow7qzac4().s[136]++;

                if (this.conversationId) {
                  cov_14ow7qzac4().b[20][0]++;
                  cov_14ow7qzac4().s[137]++;
                  params['conversationId'] = this.conversationId;
                } else {
                  cov_14ow7qzac4().b[20][1]++;
                }

                urlSearchParams = (cov_14ow7qzac4().s[138]++, new URLSearchParams(params).toString());
                wsUrl = (cov_14ow7qzac4().s[139]++, "".concat(this.domain.replace(re, 'ws$1'), "/conversations/connect?").concat(urlSearchParams));
                cov_14ow7qzac4().s[140]++;
                return _context9.abrupt("return", new Promise( /*#__PURE__*/function () {
                  var _ref11 = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee8(resolve, reject) {
                    var request, response, responseString, conversation;
                    return _regenerator["default"].wrap(function _callee8$(_context8) {
                      while (1) {
                        switch (_context8.prev = _context8.next) {
                          case 0:
                            cov_14ow7qzac4().f[28]++;
                            cov_14ow7qzac4().s[141]++;
                            _context8.prev = 2;
                            cov_14ow7qzac4().s[142]++;
                            _this6.streamConnection = new BFSE.WebSocketClient({
                              url: wsUrl,
                              requestHandler: _this6.theStreamHandler,
                              disconnectionHandler: function disconnectionHandler(e) {
                                cov_14ow7qzac4().f[29]++;
                                cov_14ow7qzac4().s[143]++;
                                return resolve(e);
                              }
                            });
                            cov_14ow7qzac4().s[144]++;
                            _this6.queueActivities = true;
                            cov_14ow7qzac4().s[145]++;
                            _context8.next = 10;
                            return _this6.streamConnection.connect();

                          case 10:
                            request = (cov_14ow7qzac4().s[146]++, BFSE.StreamingRequest.create('POST', '/v3/directline/conversations'));
                            cov_14ow7qzac4().s[147]++;
                            _context8.next = 14;
                            return _this6.streamConnection.send(request);

                          case 14:
                            response = _context8.sent;
                            cov_14ow7qzac4().s[148]++;

                            if (!(response.statusCode !== 200)) {
                              _context8.next = 22;
                              break;
                            }

                            cov_14ow7qzac4().b[21][0]++;
                            cov_14ow7qzac4().s[149]++;
                            throw new Error("Connection response code " + response.statusCode);

                          case 22:
                            cov_14ow7qzac4().b[21][1]++;

                          case 23:
                            cov_14ow7qzac4().s[150]++;

                            if (!(response.streams.length !== 1)) {
                              _context8.next = 30;
                              break;
                            }

                            cov_14ow7qzac4().b[22][0]++;
                            cov_14ow7qzac4().s[151]++;
                            throw new Error("Expected 1 stream but got " + response.streams.length);

                          case 30:
                            cov_14ow7qzac4().b[22][1]++;

                          case 31:
                            cov_14ow7qzac4().s[152]++;
                            _context8.next = 34;
                            return response.streams[0].readAsString();

                          case 34:
                            responseString = _context8.sent;
                            conversation = (cov_14ow7qzac4().s[153]++, JSON.parse(responseString));
                            cov_14ow7qzac4().s[154]++;
                            _this6.conversationId = conversation.conversationId;
                            cov_14ow7qzac4().s[155]++;

                            _this6.connectionStatus$.next(_directLine.ConnectionStatus.Online); // Wait until DL consumers have had a chance to be notified
                            // of the connection status change.


                            cov_14ow7qzac4().s[156]++;
                            _context8.next = 43;
                            return _this6.waitUntilOnline();

                          case 43:
                            cov_14ow7qzac4().s[157]++;

                            _this6.theStreamHandler.flush();

                            cov_14ow7qzac4().s[158]++;
                            _this6.queueActivities = false;
                            _context8.next = 53;
                            break;

                          case 49:
                            _context8.prev = 49;
                            _context8.t0 = _context8["catch"](2);
                            cov_14ow7qzac4().s[159]++;
                            reject(_context8.t0);

                          case 53:
                          case "end":
                            return _context8.stop();
                        }
                      }
                    }, _callee8, null, [[2, 49]]);
                  }));

                  return function (_x6, _x7) {
                    return _ref11.apply(this, arguments);
                  };
                }()));

              case 17:
              case "end":
                return _context9.stop();
            }
          }
        }, _callee9, this);
      }));

      function connectAsync() {
        return _connectAsync.apply(this, arguments);
      }

      return connectAsync;
    }()
  }, {
    key: "connectWithRetryAsync",
    value: function () {
      var _connectWithRetryAsync = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee10() {
        var _this7 = this;

        var numRetries, start, res;
        return _regenerator["default"].wrap(function _callee10$(_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                cov_14ow7qzac4().f[30]++;
                numRetries = (cov_14ow7qzac4().s[160]++, MAX_RETRY_COUNT);
                cov_14ow7qzac4().s[161]++;

              case 3:
                if (!(numRetries > 0)) {
                  _context10.next = 40;
                  break;
                }

                cov_14ow7qzac4().s[162]++;
                numRetries--;
                start = (cov_14ow7qzac4().s[163]++, Date.now());
                cov_14ow7qzac4().s[164]++;
                _context10.prev = 8;
                cov_14ow7qzac4().s[165]++;
                this.connectionStatus$.next(_directLine.ConnectionStatus.Connecting);
                cov_14ow7qzac4().s[166]++;
                _context10.next = 14;
                return this.connectAsync();

              case 14:
                res = _context10.sent;
                cov_14ow7qzac4().s[167]++;
                console.warn("Retrying connection ".concat(res));
                cov_14ow7qzac4().s[168]++;

                if (!(60000 < Date.now() - start)) {
                  _context10.next = 26;
                  break;
                }

                cov_14ow7qzac4().b[23][0]++;
                cov_14ow7qzac4().s[169]++;
                // reset the retry counter and retry immediately
                // if the connection lasted for more than a minute
                numRetries = MAX_RETRY_COUNT;
                cov_14ow7qzac4().s[170]++;
                return _context10.abrupt("continue", 3);

              case 26:
                cov_14ow7qzac4().b[23][1]++;

              case 27:
                _context10.next = 35;
                break;

              case 29:
                _context10.prev = 29;
                _context10.t0 = _context10["catch"](8);
                cov_14ow7qzac4().s[171]++;
                console.error("Failed to connect ".concat(_context10.t0));
                cov_14ow7qzac4().s[172]++;
                throw _context10.t0;

              case 35:
                cov_14ow7qzac4().s[173]++;
                _context10.next = 38;
                return new Promise(function (r) {
                  cov_14ow7qzac4().f[31]++;
                  cov_14ow7qzac4().s[174]++;
                  return setTimeout(r, _this7.getRetryDelay());
                });

              case 38:
                _context10.next = 3;
                break;

              case 40:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee10, this, [[8, 29]]);
      }));

      function connectWithRetryAsync() {
        return _connectWithRetryAsync.apply(this, arguments);
      }

      return connectWithRetryAsync;
    }() // Returns the delay duration in milliseconds

  }, {
    key: "getRetryDelay",
    value: function getRetryDelay() {
      cov_14ow7qzac4().f[32]++;
      cov_14ow7qzac4().s[175]++;
      return Math.floor(3000 + Math.random() * 12000);
    }
  }]);
  return DirectLineStreaming;
}();

exports.DirectLineStreaming = DirectLineStreaming;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RMaW5lU3RyZWFtaW5nLnRzIl0sIm5hbWVzIjpbIkRJUkVDVF9MSU5FX1ZFUlNJT04iLCJNQVhfUkVUUllfQ09VTlQiLCJyZWZyZXNoVG9rZW5MaWZldGltZSIsInRpbWVvdXQiLCJyZWZyZXNoVG9rZW5JbnRlcnZhbCIsIlN0cmVhbUhhbmRsZXIiLCJzIiwiYyQiLCJzcSIsInN1YnNjcmliZXIiLCJjb25uZWN0aW9uU3RhdHVzJCIsInNob3VsZFF1ZXVlIiwicmVxdWVzdCIsImxvZ2dlciIsInN0cmVhbXMiLCJzdHJlYW0wIiwic2hpZnQiLCJyZWFkQXNTdHJpbmciLCJhY3Rpdml0eVNldEpzb24iLCJhY3Rpdml0eVNldCIsIkpTT04iLCJwYXJzZSIsImFjdGl2aXRpZXMiLCJsZW5ndGgiLCJlcnJvciIsIkVycm9yIiwiQkZTRSIsIlN0cmVhbWluZ1Jlc3BvbnNlIiwiY3JlYXRlIiwiYWN0aXZpdHkiLCJhdHRhY2htZW50cyIsInN0cmVhbSIsImF0dGFjaG1lbnQiLCJkYXRhVXJpIiwicHVzaCIsImNvbnRlbnRUeXBlIiwiY29udGVudFVybCIsImFjdGl2aXR5UXVldWUiLCJuZXh0Iiwic3Vic2NyaWJlIiwiY3MiLCJmb3JFYWNoIiwiYSIsIkRpcmVjdExpbmVTdHJlYW1pbmciLCJvcHRpb25zIiwiQmVoYXZpb3JTdWJqZWN0IiwiQ29ubmVjdGlvblN0YXR1cyIsIlVuaW5pdGlhbGl6ZWQiLCJ0b2tlbiIsInJlZnJlc2hUb2tlbiIsImRvbWFpbiIsImNvbnZlcnNhdGlvbklkIiwiX2JvdEFnZW50IiwiZ2V0Qm90QWdlbnQiLCJib3RBZ2VudCIsInF1ZXVlQWN0aXZpdGllcyIsImFjdGl2aXR5JCIsIk9ic2VydmFibGUiLCJhY3Rpdml0eVN1YnNjcmliZXIiLCJ0aGVTdHJlYW1IYW5kbGVyIiwiY29ubmVjdFdpdGhSZXRyeUFzeW5jIiwic2hhcmUiLCJjb25uZWN0QXN5bmMiLCJFbmRlZCIsInN0cmVhbUNvbm5lY3Rpb24iLCJkaXNjb25uZWN0IiwiY3VzdG9tQWdlbnQiLCJjbGllbnRBZ2VudCIsImZpcnN0Q2FsbCIsInJldHJ5Q291bnQiLCJ3YWl0VW50aWxPbmxpbmUiLCJudW1iZXJPZkF0dGVtcHRzIiwiUHJvbWlzZSIsInIiLCJzZXRUaW1lb3V0IiwibWV0aG9kIiwiaGVhZGVycyIsImNvbW1vbkhlYWRlcnMiLCJyZXMiLCJvayIsImpzb24iLCJzdGF0dXMiLCJjb25zb2xlIiwic3RhdHVzVGV4dCIsIndhcm4iLCJ0eXBlIiwicG9zdE1lc3NhZ2VXaXRoQXR0YWNobWVudHMiLCJyZXNwJCIsIlN0cmVhbWluZ1JlcXVlc3QiLCJzZXRCb2R5Iiwic3RyaW5naWZ5Iiwic2VuZCIsInJlc3AiLCJzdGF0dXNDb2RlIiwibnVtYmVyT2ZTdHJlYW1zIiwiaWRTdHJpbmciLCJpZCIsIklkIiwibWVzc2FnZSIsIm1lc3NhZ2VXaXRob3V0QXR0YWNobWVudHMiLCJodHRwQ29udGVudExpc3QiLCJhbGwiLCJtYXAiLCJtZWRpYSIsImFycmF5QnVmZmVyIiwiYXJyYXlCdWZmZXJzIiwiYnVmZmVyIiwiQnVmZmVyIiwiZnJvbSIsImxvZyIsIlN1YnNjcmliYWJsZVN0cmVhbSIsIndyaXRlIiwiaHR0cENvbnRlbnQiLCJIdHRwQ29udGVudCIsImNvbnRlbnRMZW5ndGgiLCJ1cmwiLCJhY3Rpdml0eVN0cmVhbSIsImFkZFN0cmVhbSIsImUiLCJyZWFkQXNKc29uIiwicmVzb2x2ZSIsInJlamVjdCIsIk9ubGluZSIsInJlIiwiUmVnRXhwIiwidGVzdCIsInBhcmFtcyIsInVybFNlYXJjaFBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsInRvU3RyaW5nIiwid3NVcmwiLCJyZXBsYWNlIiwiV2ViU29ja2V0Q2xpZW50IiwicmVxdWVzdEhhbmRsZXIiLCJkaXNjb25uZWN0aW9uSGFuZGxlciIsImNvbm5lY3QiLCJyZXNwb25zZSIsInJlc3BvbnNlU3RyaW5nIiwiY29udmVyc2F0aW9uIiwiZmx1c2giLCJudW1SZXRyaWVzIiwic3RhcnQiLCJEYXRlIiwibm93IiwiQ29ubmVjdGluZyIsImdldFJldHJ5RGVsYXkiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFJZ0QsT0FBSixDQUFZLFVBQUFDLENBQUMsRUFBSTtBQUFBO0FBQUE7QUFBQSx5QkFBQUMsVUFBVSxDQUFDRCxDQUFELEVBQUksTUFBSSxDQUFDd0UsYUFBTCxFQUFKLENBQVY7QUFBbUMsaUJBQXBELENBcEJWOztBQUFBO0FBQUE7QUFBQTs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPOzs7Ozs7O1FBd0JBOzs7O1dBQ0EseUJBQXdCO0FBQUE7QUFBQTtBQUN0QixhQUFPQyxJQUFJLENBQUNDLEtBQUwsQ0FBVyxPQUFPRCxJQUFJLENBQUNFLE1BQUwsS0FBZ0IsS0FBbEMsQ0FBUDtBQUNEIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW4gb3JkZXIgdG8ga2VlcCBmaWxlIHNpemUgZG93biwgb25seSBpbXBvcnQgdGhlIHBhcnRzIG9mIHJ4anMgdGhhdCB3ZSB1c2VcblxuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0IHsgQnVmZmVyIH0gZnJvbSAnYnVmZmVyJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzL09ic2VydmFibGUnO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMvU3Vic2NyaWJlcic7XG5pbXBvcnQgKiBhcyBCRlNFIGZyb20gJ2JvdGZyYW1ld29yay1zdHJlYW1pbmcnO1xuaW1wb3J0IGZldGNoIGZyb20gJ2Nyb3NzLWZldGNoJztcblxuaW1wb3J0IHtcbiAgQWN0aXZpdHksXG4gIENvbm5lY3Rpb25TdGF0dXMsXG4gIENvbnZlcnNhdGlvbixcbiAgSUJvdENvbm5lY3Rpb24sXG4gIE1lZGlhLFxuICBNZXNzYWdlXG59IGZyb20gJy4vZGlyZWN0TGluZSc7XG5cbmNvbnN0IERJUkVDVF9MSU5FX1ZFUlNJT04gPSAnRGlyZWN0TGluZS8zLjAnO1xuY29uc3QgTUFYX1JFVFJZX0NPVU5UID0gMztcbmNvbnN0IHJlZnJlc2hUb2tlbkxpZmV0aW1lID0gMzAgKiA2MCAqIDEwMDA7XG4vL2NvbnN0IHJlZnJlc2hUb2tlbkxpZmV0aW1lID0gNTAwMDtcbmNvbnN0IHRpbWVvdXQgPSAyMCAqIDEwMDA7XG5jb25zdCByZWZyZXNoVG9rZW5JbnRlcnZhbCA9IHJlZnJlc2hUb2tlbkxpZmV0aW1lIC8gMjtcblxuaW50ZXJmYWNlIERpcmVjdExpbmVTdHJlYW1pbmdPcHRpb25zIHtcbiAgdG9rZW46IHN0cmluZyxcbiAgY29udmVyc2F0aW9uSWQ/OiBzdHJpbmcsXG4gIGRvbWFpbjogc3RyaW5nLFxuICAvLyBBdHRhY2hlZCB0byBhbGwgcmVxdWVzdHMgdG8gaWRlbnRpZnkgcmVxdWVzdGluZyBhZ2VudC5cbiAgYm90QWdlbnQ/OiBzdHJpbmdcbn1cblxuY2xhc3MgU3RyZWFtSGFuZGxlciBpbXBsZW1lbnRzIEJGU0UuUmVxdWVzdEhhbmRsZXIge1xuICBwcml2YXRlIGNvbm5lY3Rpb25TdGF0dXMkO1xuICBwcml2YXRlIHN1YnNjcmliZXI6IFN1YnNjcmliZXI8QWN0aXZpdHk+O1xuICBwcml2YXRlIHNob3VsZFF1ZXVlOiAoKSA9PiBib29sZWFuO1xuICBwcml2YXRlIGFjdGl2aXR5UXVldWU6IEFycmF5PEFjdGl2aXR5PiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHM6IFN1YnNjcmliZXI8QWN0aXZpdHk+LCBjJDogT2JzZXJ2YWJsZTxDb25uZWN0aW9uU3RhdHVzPiwgc3E6ICgpID0+IGJvb2xlYW4pIHtcbiAgICB0aGlzLnN1YnNjcmliZXIgPSBzO1xuICAgIHRoaXMuY29ubmVjdGlvblN0YXR1cyQgPSBjJDtcbiAgICB0aGlzLnNob3VsZFF1ZXVlID0gc3E7XG4gIH1cblxuICBwdWJsaWMgc2V0U3Vic2NyaWJlcihzOiBTdWJzY3JpYmVyPEFjdGl2aXR5Pikge1xuICAgIHRoaXMuc3Vic2NyaWJlciA9IHM7XG4gIH1cblxuICBhc3luYyBwcm9jZXNzUmVxdWVzdChyZXF1ZXN0OiBCRlNFLklSZWNlaXZlUmVxdWVzdCwgbG9nZ2VyPzogYW55KTogUHJvbWlzZTxCRlNFLlN0cmVhbWluZ1Jlc3BvbnNlPiB7XG4gICAgY29uc3Qgc3RyZWFtcyA9IFsuLi5yZXF1ZXN0LnN0cmVhbXNdO1xuICAgIGNvbnN0IHN0cmVhbTAgPSBzdHJlYW1zLnNoaWZ0KCk7XG4gICAgY29uc3QgYWN0aXZpdHlTZXRKc29uID0gYXdhaXQgc3RyZWFtMC5yZWFkQXNTdHJpbmcoKTtcbiAgICBjb25zdCBhY3Rpdml0eVNldCA9IEpTT04ucGFyc2UoYWN0aXZpdHlTZXRKc29uKTtcblxuICAgIGlmIChhY3Rpdml0eVNldC5hY3Rpdml0aWVzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgLy8gT25seSBvbmUgYWN0aXZpdHkgaXMgZXhwZWN0ZWQgaW4gYSBzZXQgaW4gc3RyZWFtaW5nXG4gICAgICB0aGlzLnN1YnNjcmliZXIuZXJyb3IobmV3IEVycm9yKCd0aGVyZSBzaG91bGQgYmUgZXhhY3RseSBvbmUgYWN0aXZpdHknKSk7XG4gICAgICByZXR1cm4gQkZTRS5TdHJlYW1pbmdSZXNwb25zZS5jcmVhdGUoNTAwKTtcbiAgICB9XG5cbiAgICBjb25zdCBhY3Rpdml0eSA9IGFjdGl2aXR5U2V0LmFjdGl2aXRpZXNbMF07XG5cbiAgICBpZiAoc3RyZWFtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBhdHRhY2htZW50cyA9IFsuLi5hY3Rpdml0eS5hdHRhY2htZW50c107XG5cbiAgICAgIGxldCBzdHJlYW06IEJGU0UuQ29udGVudFN0cmVhbTtcbiAgICAgIHdoaWxlIChzdHJlYW0gPSBzdHJlYW1zLnNoaWZ0KCkpIHtcbiAgICAgICAgY29uc3QgYXR0YWNobWVudCA9IGF3YWl0IHN0cmVhbS5yZWFkQXNTdHJpbmcoKTtcbiAgICAgICAgY29uc3QgZGF0YVVyaSA9IFwiZGF0YTp0ZXh0L3BsYWluO2Jhc2U2NCxcIiArIGF0dGFjaG1lbnQ7XG4gICAgICAgIGF0dGFjaG1lbnRzLnB1c2goeyBjb250ZW50VHlwZTogc3RyZWFtLmNvbnRlbnRUeXBlLCBjb250ZW50VXJsOiBkYXRhVXJpIH0pO1xuICAgICAgfVxuXG4gICAgICBhY3Rpdml0eS5hdHRhY2htZW50cyA9IGF0dGFjaG1lbnRzO1xuICAgIH1cblxuICAgIGlmICh0aGlzLnNob3VsZFF1ZXVlKCkpIHtcbiAgICAgIHRoaXMuYWN0aXZpdHlRdWV1ZS5wdXNoKGFjdGl2aXR5KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5zdWJzY3JpYmVyLm5leHQoYWN0aXZpdHkpO1xuICAgIH1cblxuICAgIHJldHVybiBCRlNFLlN0cmVhbWluZ1Jlc3BvbnNlLmNyZWF0ZSgyMDApO1xuICB9XG5cbiAgcHVibGljIGZsdXNoKCkge1xuICAgIHRoaXMuY29ubmVjdGlvblN0YXR1cyQuc3Vic2NyaWJlKGNzID0+IHsgfSlcbiAgICB0aGlzLmFjdGl2aXR5UXVldWUuZm9yRWFjaCgoYSkgPT4gdGhpcy5zdWJzY3JpYmVyLm5leHQoYSkpO1xuICAgIHRoaXMuYWN0aXZpdHlRdWV1ZSA9IFtdO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RMaW5lU3RyZWFtaW5nIGltcGxlbWVudHMgSUJvdENvbm5lY3Rpb24ge1xuICBwdWJsaWMgY29ubmVjdGlvblN0YXR1cyQgPSBuZXcgQmVoYXZpb3JTdWJqZWN0KENvbm5lY3Rpb25TdGF0dXMuVW5pbml0aWFsaXplZCk7XG4gIHB1YmxpYyBhY3Rpdml0eSQ6IE9ic2VydmFibGU8QWN0aXZpdHk+O1xuICBwdWJsaWMgaGlzdG9yeUxvYWRlZEZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBhY3Rpdml0eVN1YnNjcmliZXI6IFN1YnNjcmliZXI8QWN0aXZpdHk+O1xuICBwcml2YXRlIHRoZVN0cmVhbUhhbmRsZXI6IFN0cmVhbUhhbmRsZXI7XG5cbiAgcHJpdmF0ZSBkb21haW46IHN0cmluZztcblxuICBwcml2YXRlIGNvbnZlcnNhdGlvbklkOiBzdHJpbmc7XG4gIHByaXZhdGUgdG9rZW46IHN0cmluZztcbiAgcHJpdmF0ZSBzdHJlYW1Db25uZWN0aW9uOiBCRlNFLldlYlNvY2tldENsaWVudDtcbiAgcHJpdmF0ZSBxdWV1ZUFjdGl2aXRpZXM6IGJvb2xlYW47XG5cbiAgcHJpdmF0ZSBfYm90QWdlbnQgPSAnJztcblxuICBjb25zdHJ1Y3RvcihvcHRpb25zOiBEaXJlY3RMaW5lU3RyZWFtaW5nT3B0aW9ucykge1xuICAgIHRoaXMudG9rZW4gPSBvcHRpb25zLnRva2VuO1xuXG4gICAgdGhpcy5yZWZyZXNoVG9rZW4oKTtcblxuICAgIHRoaXMuZG9tYWluID0gb3B0aW9ucy5kb21haW47XG5cbiAgICBpZiAob3B0aW9ucy5jb252ZXJzYXRpb25JZCkge1xuICAgICAgdGhpcy5jb252ZXJzYXRpb25JZCA9IG9wdGlvbnMuY29udmVyc2F0aW9uSWQ7XG4gICAgfVxuXG4gICAgdGhpcy5fYm90QWdlbnQgPSB0aGlzLmdldEJvdEFnZW50KG9wdGlvbnMuYm90QWdlbnQpO1xuXG4gICAgdGhpcy5xdWV1ZUFjdGl2aXRpZXMgPSB0cnVlO1xuICAgIHRoaXMuYWN0aXZpdHkkID0gT2JzZXJ2YWJsZS5jcmVhdGUoYXN5bmMgKHN1YnNjcmliZXI6IFN1YnNjcmliZXI8QWN0aXZpdHk+KSA9PiB7XG4gICAgICB0aGlzLmFjdGl2aXR5U3Vic2NyaWJlciA9IHN1YnNjcmliZXI7XG4gICAgICB0aGlzLnRoZVN0cmVhbUhhbmRsZXIgPSBuZXcgU3RyZWFtSGFuZGxlcihzdWJzY3JpYmVyLCB0aGlzLmNvbm5lY3Rpb25TdGF0dXMkLCAoKSA9PiB0aGlzLnF1ZXVlQWN0aXZpdGllcyk7XG4gICAgICB0aGlzLmNvbm5lY3RXaXRoUmV0cnlBc3luYygpO1xuICAgIH0pLnNoYXJlKCk7XG5cbiAgfVxuXG4gIHB1YmxpYyByZWNvbm5lY3QoeyBjb252ZXJzYXRpb25JZCwgdG9rZW4gfSA6IENvbnZlcnNhdGlvbikge1xuICAgIHRoaXMuY29udmVyc2F0aW9uSWQgPSBjb252ZXJzYXRpb25JZDtcbiAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgdGhpcy5jb25uZWN0QXN5bmMoKTtcbiAgfVxuXG4gIGVuZCgpIHtcbiAgICB0aGlzLmNvbm5lY3Rpb25TdGF0dXMkLm5leHQoQ29ubmVjdGlvblN0YXR1cy5FbmRlZCk7XG4gICAgdGhpcy5zdHJlYW1Db25uZWN0aW9uLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIHByaXZhdGUgY29tbW9uSGVhZGVycygpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJBdXRob3JpemF0aW9uXCI6IGBCZWFyZXIgJHt0aGlzLnRva2VufWAsXG4gICAgICBcIngtbXMtYm90LWFnZW50XCI6IHRoaXMuX2JvdEFnZW50XG4gICAgfTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0Qm90QWdlbnQoY3VzdG9tQWdlbnQ6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICBsZXQgY2xpZW50QWdlbnQgPSAnZGlyZWN0bGluZVN0cmVhbWluZydcblxuICAgIGlmIChjdXN0b21BZ2VudCkge1xuICAgICAgY2xpZW50QWdlbnQgKz0gYDsgJHtjdXN0b21BZ2VudH1gXG4gICAgfVxuXG4gICAgcmV0dXJuIGAke0RJUkVDVF9MSU5FX1ZFUlNJT059ICgke2NsaWVudEFnZW50fSlgO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyByZWZyZXNoVG9rZW4oZmlyc3RDYWxsID0gdHJ1ZSwgcmV0cnlDb3VudCA9IDApIHtcbiAgICBhd2FpdCB0aGlzLndhaXRVbnRpbE9ubGluZSgpO1xuXG4gICAgbGV0IG51bWJlck9mQXR0ZW1wdHMgPSAwO1xuICAgIHdoaWxlKG51bWJlck9mQXR0ZW1wdHMgPCBNQVhfUkVUUllfQ09VTlQpIHtcbiAgICAgIG51bWJlck9mQXR0ZW1wdHMrKztcbiAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCByZWZyZXNoVG9rZW5JbnRlcnZhbCkpO1xuICAgICAgdHJ5IHtcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYCR7dGhpcy5kb21haW59L3Rva2Vucy9yZWZyZXNoYCwge21ldGhvZDogXCJQT1NUXCIsIGhlYWRlcnM6IHRoaXMuY29tbW9uSGVhZGVycygpfSk7XG4gICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICBudW1iZXJPZkF0dGVtcHRzID0gMDtcbiAgICAgICAgICBjb25zdCB7dG9rZW59ID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICAgICAgICB0aGlzLnRva2VuID0gdG9rZW47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDQwMyB8fCByZXMuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhdGFsIGVycm9yIHdoaWxlIHJlZnJlc2hpbmcgdGhlIHRva2VuOiAke3Jlcy5zdGF0dXN9ICR7cmVzLnN0YXR1c1RleHR9YCk7XG4gICAgICAgICAgICB0aGlzLnN0cmVhbUNvbm5lY3Rpb24uZGlzY29ubmVjdCgpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYFJlZnJlc2ggYXR0ZW1wdCAjJHtudW1iZXJPZkF0dGVtcHRzfSBmYWlsZWQ6ICR7cmVzLnN0YXR1c30gJHtyZXMuc3RhdHVzVGV4dH1gKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICBjb25zb2xlLndhcm4oYFJlZnJlc2ggYXR0ZW1wdCAjJHtudW1iZXJPZkF0dGVtcHRzfSB0aHJldyBhbiBleGNlcHRpb246ICR7ZX1gKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zb2xlLmVycm9yKFwiUmV0cmllcyBleGhhdXN0ZWRcIik7XG4gICAgdGhpcy5zdHJlYW1Db25uZWN0aW9uLmRpc2Nvbm5lY3QoKTtcbiAgfVxuXG4gIHBvc3RBY3Rpdml0eShhY3Rpdml0eTogQWN0aXZpdHkpIHtcbiAgICBpZiAoYWN0aXZpdHkudHlwZSA9PT0gXCJtZXNzYWdlXCIgJiYgYWN0aXZpdHkuYXR0YWNobWVudHMgJiYgYWN0aXZpdHkuYXR0YWNobWVudHMubGVuZ3RoID4gMCkge1xuICAgICAgcmV0dXJuIHRoaXMucG9zdE1lc3NhZ2VXaXRoQXR0YWNobWVudHMoYWN0aXZpdHkpO1xuICAgIH1cblxuICAgIGNvbnN0IHJlc3AkID0gT2JzZXJ2YWJsZS5jcmVhdGUoYXN5bmMgc3Vic2NyaWJlciA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0ID0gQkZTRS5TdHJlYW1pbmdSZXF1ZXN0LmNyZWF0ZSgnUE9TVCcsICcvdjMvZGlyZWN0bGluZS9jb252ZXJzYXRpb25zLycgKyB0aGlzLmNvbnZlcnNhdGlvbklkICsgJy9hY3Rpdml0aWVzJyk7XG4gICAgICByZXF1ZXN0LnNldEJvZHkoSlNPTi5zdHJpbmdpZnkoYWN0aXZpdHkpKTtcbiAgICAgIGNvbnN0IHJlc3AgPSBhd2FpdCB0aGlzLnN0cmVhbUNvbm5lY3Rpb24uc2VuZChyZXF1ZXN0KTtcblxuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHJlc3Auc3RhdHVzQ29kZSAhPT0gMjAwKSB0aHJvdyBuZXcgRXJyb3IoXCJQb3N0QWN0aXZpdHkgcmV0dXJuZWQgXCIgKyByZXNwLnN0YXR1c0NvZGUpO1xuICAgICAgICBjb25zdCBudW1iZXJPZlN0cmVhbXMgPSByZXNwLnN0cmVhbXMubGVuZ3RoO1xuICAgICAgICBpZiAobnVtYmVyT2ZTdHJlYW1zICE9PSAxKSB0aHJvdyBuZXcgRXJyb3IoXCJFeHBlY3RlZCBvbmUgc3RyZWFtIGJ1dCBnb3QgXCIgKyBudW1iZXJPZlN0cmVhbXMpXG4gICAgICAgIGNvbnN0IGlkU3RyaW5nID0gYXdhaXQgcmVzcC5zdHJlYW1zWzBdLnJlYWRBc1N0cmluZygpO1xuICAgICAgICBjb25zdCB7SWQgOiBpZH0gPSBKU09OLnBhcnNlKGlkU3RyaW5nKTtcbiAgICAgICAgcmV0dXJuIHN1YnNjcmliZXIubmV4dChpZCk7XG4gICAgICB9IGNhdGNoKGUpIHtcbiAgICAgICAgICAvLyBJZiB0aGVyZSBpcyBhIG5ldHdvcmsgaXNzdWUgdGhlbiBpdHMgaGFuZGxlZCBieVxuICAgICAgICAgIC8vIHRoZSBkaXNjb25uZWN0aW9uSGFuZGxlci4gRXZlcnl0aGluZyBlbHNlIGNhblxuICAgICAgICAgIC8vIGJlIHJldHJpZWRcbiAgICAgICAgICBjb25zb2xlLndhcm4oZSk7XG4gICAgICAgICAgdGhpcy5zdHJlYW1Db25uZWN0aW9uLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICByZXR1cm4gc3Vic2NyaWJlci5lcnJvcihlKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzcCQ7XG4gIH1cblxuICBwcml2YXRlIHBvc3RNZXNzYWdlV2l0aEF0dGFjaG1lbnRzKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICBjb25zdCB7IGF0dGFjaG1lbnRzLCAuLi5tZXNzYWdlV2l0aG91dEF0dGFjaG1lbnRzIH0gPSBtZXNzYWdlO1xuXG4gICAgcmV0dXJuIE9ic2VydmFibGUuY3JlYXRlKCBzdWJzY3JpYmVyID0+IHtcbiAgICAgIGNvbnN0IGh0dHBDb250ZW50TGlzdCA9IFtdO1xuICAgICAgKGFzeW5jICgpID0+IHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBjb25zdCBhcnJheUJ1ZmZlcnMgPSBhd2FpdCBQcm9taXNlLmFsbChhdHRhY2htZW50cy5tYXAoYXN5bmMgYXR0YWNobWVudCA9PiB7XG4gICAgICAgICAgICBjb25zdCBtZWRpYSA9IGF0dGFjaG1lbnQgYXMgTWVkaWE7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChtZWRpYS5jb250ZW50VXJsKTtcbiAgICAgICAgICAgIGlmIChyZXMub2spIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHsgYXJyYXlCdWZmZXI6IGF3YWl0IHJlcy5hcnJheUJ1ZmZlcigpLCBtZWRpYSB9O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCcuLi4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KSk7XG5cbiAgICAgICAgICBhcnJheUJ1ZmZlcnMuZm9yRWFjaCgoeyBhcnJheUJ1ZmZlciwgbWVkaWEgfSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYnVmZmVyID0gQnVmZmVyLmZyb20oYXJyYXlCdWZmZXIpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coYnVmZmVyKTtcbiAgICAgICAgICAgIGNvbnN0IHN0cmVhbSA9IG5ldyBCRlNFLlN1YnNjcmliYWJsZVN0cmVhbSgpO1xuICAgICAgICAgICAgc3RyZWFtLndyaXRlKGJ1ZmZlcik7XG4gICAgICAgICAgICBjb25zdCBodHRwQ29udGVudCA9IG5ldyBCRlNFLkh0dHBDb250ZW50KHsgdHlwZTogbWVkaWEuY29udGVudFR5cGUsIGNvbnRlbnRMZW5ndGg6IGJ1ZmZlci5sZW5ndGggfSwgc3RyZWFtKTtcbiAgICAgICAgICAgIGh0dHBDb250ZW50TGlzdC5wdXNoKGh0dHBDb250ZW50KTtcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IHVybCA9IGAvdjMvZGlyZWN0bGluZS9jb252ZXJzYXRpb25zLyR7dGhpcy5jb252ZXJzYXRpb25JZH0vdXNlcnMvJHttZXNzYWdlV2l0aG91dEF0dGFjaG1lbnRzLmZyb20uaWR9L3VwbG9hZGA7XG4gICAgICAgICAgY29uc3QgcmVxdWVzdCA9IEJGU0UuU3RyZWFtaW5nUmVxdWVzdC5jcmVhdGUoJ1BVVCcsIHVybCk7XG4gICAgICAgICAgY29uc3QgYWN0aXZpdHlTdHJlYW0gPSBuZXcgQkZTRS5TdWJzY3JpYmFibGVTdHJlYW0oKTtcbiAgICAgICAgICBhY3Rpdml0eVN0cmVhbS53cml0ZShKU09OLnN0cmluZ2lmeShtZXNzYWdlV2l0aG91dEF0dGFjaG1lbnRzKSwgJ3V0Zi04Jyk7XG4gICAgICAgICAgcmVxdWVzdC5hZGRTdHJlYW0obmV3IEJGU0UuSHR0cENvbnRlbnQoeyB0eXBlOiBcImFwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuYWN0aXZpdHlcIiwgY29udGVudExlbmd0aDogYWN0aXZpdHlTdHJlYW0ubGVuZ3RoIH0sIGFjdGl2aXR5U3RyZWFtKSk7XG4gICAgICAgICAgaHR0cENvbnRlbnRMaXN0LmZvckVhY2goZSA9PiByZXF1ZXN0LmFkZFN0cmVhbShlKSk7XG5cbiAgICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgdGhpcy5zdHJlYW1Db25uZWN0aW9uLnNlbmQocmVxdWVzdCk7XG4gICAgICAgICAgaWYgKHJlc3Auc3RyZWFtcyAmJiByZXNwLnN0cmVhbXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICAgICAgICBzdWJzY3JpYmVyLmVycm9yKG5ldyBFcnJvcihgSW52YWxpZCBzdHJlYW0gY291bnQgJHtyZXNwLnN0cmVhbXMubGVuZ3RofWApKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3Qge0lkOiBpZH0gPSBhd2FpdCByZXNwLnN0cmVhbXNbMF0ucmVhZEFzSnNvbigpO1xuICAgICAgICAgICAgc3Vic2NyaWJlci5uZXh0KGlkKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZSk7XG4gICAgICAgIH1cbiAgICAgIH0pKCk7XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHdhaXRVbnRpbE9ubGluZSgpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdHVzJC5zdWJzY3JpYmUoKGNzKSA9PiB7XG4gICAgICAgIGlmIChjcyA9PT0gQ29ubmVjdGlvblN0YXR1cy5PbmxpbmUpIHJldHVybiByZXNvbHZlKCk7XG4gICAgICB9LFxuICAgICAgICAoZSkgPT4gcmVqZWN0KGUpKTtcbiAgICB9KVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjb25uZWN0QXN5bmMoKSB7XG4gICAgY29uc3QgcmUgPSBuZXcgUmVnRXhwKCdeaHR0cChzPyknKTtcbiAgICBpZiAoIXJlLnRlc3QodGhpcy5kb21haW4pKSB0aHJvdyAoXCJEb21haW4gbXVzdCBiZWdpbiB3aXRoIGh0dHAgb3IgaHR0cHNcIik7XG4gICAgY29uc3QgcGFyYW1zID0ge3Rva2VuOiB0aGlzLnRva2VufTtcbiAgICBpZiAodGhpcy5jb252ZXJzYXRpb25JZCkgcGFyYW1zWydjb252ZXJzYXRpb25JZCddID0gdGhpcy5jb252ZXJzYXRpb25JZDtcbiAgICBjb25zdCB1cmxTZWFyY2hQYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKHBhcmFtcykudG9TdHJpbmcoKTtcbiAgICBjb25zdCB3c1VybCA9IGAke3RoaXMuZG9tYWluLnJlcGxhY2UocmUsICd3cyQxJyl9L2NvbnZlcnNhdGlvbnMvY29ubmVjdD8ke3VybFNlYXJjaFBhcmFtc31gO1xuXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuc3RyZWFtQ29ubmVjdGlvbiA9IG5ldyBCRlNFLldlYlNvY2tldENsaWVudCh7XG4gICAgICAgICAgdXJsOiB3c1VybCxcbiAgICAgICAgICByZXF1ZXN0SGFuZGxlcjogdGhpcy50aGVTdHJlYW1IYW5kbGVyLFxuICAgICAgICAgIGRpc2Nvbm5lY3Rpb25IYW5kbGVyOiAoZSkgPT4gcmVzb2x2ZShlKVxuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLnF1ZXVlQWN0aXZpdGllcyA9IHRydWU7XG4gICAgICAgIGF3YWl0IHRoaXMuc3RyZWFtQ29ubmVjdGlvbi5jb25uZWN0KCk7XG4gICAgICAgIGNvbnN0IHJlcXVlc3QgPSBCRlNFLlN0cmVhbWluZ1JlcXVlc3QuY3JlYXRlKCdQT1NUJywgJy92My9kaXJlY3RsaW5lL2NvbnZlcnNhdGlvbnMnKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnN0cmVhbUNvbm5lY3Rpb24uc2VuZChyZXF1ZXN0KTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1c0NvZGUgIT09IDIwMCkgdGhyb3cgbmV3IEVycm9yKFwiQ29ubmVjdGlvbiByZXNwb25zZSBjb2RlIFwiICsgcmVzcG9uc2Uuc3RhdHVzQ29kZSk7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdHJlYW1zLmxlbmd0aCAhPT0gMSkgdGhyb3cgbmV3IEVycm9yKFwiRXhwZWN0ZWQgMSBzdHJlYW0gYnV0IGdvdCBcIiArIHJlc3BvbnNlLnN0cmVhbXMubGVuZ3RoKTtcbiAgICAgICAgY29uc3QgcmVzcG9uc2VTdHJpbmcgPSBhd2FpdCByZXNwb25zZS5zdHJlYW1zWzBdLnJlYWRBc1N0cmluZygpO1xuICAgICAgICBjb25zdCBjb252ZXJzYXRpb24gPSBKU09OLnBhcnNlKHJlc3BvbnNlU3RyaW5nKTtcbiAgICAgICAgdGhpcy5jb252ZXJzYXRpb25JZCA9IGNvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JZDtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdHVzJC5uZXh0KENvbm5lY3Rpb25TdGF0dXMuT25saW5lKTtcblxuICAgICAgICAvLyBXYWl0IHVudGlsIERMIGNvbnN1bWVycyBoYXZlIGhhZCBhIGNoYW5jZSB0byBiZSBub3RpZmllZFxuICAgICAgICAvLyBvZiB0aGUgY29ubmVjdGlvbiBzdGF0dXMgY2hhbmdlLlxuICAgICAgICBhd2FpdCB0aGlzLndhaXRVbnRpbE9ubGluZSgpO1xuICAgICAgICB0aGlzLnRoZVN0cmVhbUhhbmRsZXIuZmx1c2goKTtcbiAgICAgICAgdGhpcy5xdWV1ZUFjdGl2aXRpZXMgPSBmYWxzZTtcbiAgICAgIH0gY2F0Y2goZSkge1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIGNvbm5lY3RXaXRoUmV0cnlBc3luYygpIHtcbiAgICBsZXQgbnVtUmV0cmllcyA9IE1BWF9SRVRSWV9DT1VOVDtcbiAgICB3aGlsZSAobnVtUmV0cmllcyA+IDApIHtcbiAgICAgIG51bVJldHJpZXMtLTtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gRGF0ZS5ub3coKTtcbiAgICAgIHRyeSB7XG4gICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXR1cyQubmV4dChDb25uZWN0aW9uU3RhdHVzLkNvbm5lY3RpbmcpO1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLmNvbm5lY3RBc3luYygpO1xuICAgICAgICBjb25zb2xlLndhcm4oYFJldHJ5aW5nIGNvbm5lY3Rpb24gJHtyZXN9YCk7XG4gICAgICAgIGlmICg2MDAwMCA8IERhdGUubm93KCkgLSBzdGFydCkge1xuICAgICAgICAgIC8vIHJlc2V0IHRoZSByZXRyeSBjb3VudGVyIGFuZCByZXRyeSBpbW1lZGlhdGVseVxuICAgICAgICAgIC8vIGlmIHRoZSBjb25uZWN0aW9uIGxhc3RlZCBmb3IgbW9yZSB0aGFuIGEgbWludXRlXG4gICAgICAgICAgbnVtUmV0cmllcyA9IE1BWF9SRVRSWV9DT1VOVDtcbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBjb25uZWN0ICR7ZXJyfWApO1xuICAgICAgICB0aHJvdyhlcnIpO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCBuZXcgUHJvbWlzZShyID0+IHNldFRpbWVvdXQociwgdGhpcy5nZXRSZXRyeURlbGF5KCkpKTtcbiAgICB9XG4gIH1cblxuICAvLyBSZXR1cm5zIHRoZSBkZWxheSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgcHJpdmF0ZSBnZXRSZXRyeURlbGF5KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKDMwMDAgKyBNYXRoLnJhbmRvbSgpICogMTIwMDApO1xuICB9XG59XG4iXX0=