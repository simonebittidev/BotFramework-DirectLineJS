"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _typeof = require("@babel/runtime/helpers/typeof");

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "DirectLineStreaming", {
  enumerable: true,
  get: function get() {
    return _directLineStreaming.DirectLineStreaming;
  }
});
exports.DirectLine = exports.ConnectionStatus = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

require("core-js/features/promise");

require("url-search-params-polyfill");

var _BehaviorSubject = require("rxjs/BehaviorSubject");

var _Observable = require("rxjs/Observable");

var _async = require("rxjs/scheduler/async");

var _jwtDecode = _interopRequireWildcard(require("jwt-decode"));

require("rxjs/add/operator/catch");

require("rxjs/add/operator/combineLatest");

require("rxjs/add/operator/count");

require("rxjs/add/operator/delay");

require("rxjs/add/operator/do");

require("rxjs/add/operator/filter");

require("rxjs/add/operator/map");

require("rxjs/add/operator/mergeMap");

require("rxjs/add/operator/concatMap");

require("rxjs/add/operator/retryWhen");

require("rxjs/add/operator/share");

require("rxjs/add/operator/take");

require("rxjs/add/observable/dom/ajax");

require("rxjs/add/observable/empty");

require("rxjs/add/observable/from");

require("rxjs/add/observable/interval");

require("rxjs/add/observable/of");

require("rxjs/add/observable/throw");

var _dedupeFilenames = _interopRequireDefault(require("./dedupeFilenames"));

var _directLineStreaming = require("./directLineStreaming");

var _excluded = ["contentUrl"];

function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }

function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function cov_1zm602fxtf() {
  var path = "C:\\Users\\sbitti\\OneDrive - Vodafone Group\\Desktop\\PersonalProject\\BotFramework-DirectLineJS\\src\\directLine.ts";
  var hash = "f7806bbd58d60440a762f5848791eb89bb0907c6";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sbitti\\OneDrive - Vodafone Group\\Desktop\\PersonalProject\\BotFramework-DirectLineJS\\src\\directLine.ts",
    statementMap: {
      "0": {
        start: {
          line: 40,
          column: 28
        },
        end: {
          line: 40,
          column: 44
        }
      },
      "1": {
        start: {
          line: 392,
          column: 26
        },
        end: {
          line: 424,
          column: 1
        }
      },
      "2": {
        start: {
          line: 394,
          column: 27
        },
        end: {
          line: 394,
          column: 79
        }
      },
      "3": {
        start: {
          line: 394,
          column: 42
        },
        end: {
          line: 394,
          column: 77
        }
      },
      "4": {
        start: {
          line: 396,
          column: 18
        },
        end: {
          line: 410,
          column: 5
        }
      },
      "5": {
        start: {
          line: 397,
          column: 8
        },
        end: {
          line: 409,
          column: 11
        }
      },
      "6": {
        start: {
          line: 399,
          column: 12
        },
        end: {
          line: 406,
          column: 13
        }
      },
      "7": {
        start: {
          line: 400,
          column: 40
        },
        end: {
          line: 400,
          column: 80
        }
      },
      "8": {
        start: {
          line: 401,
          column: 35
        },
        end: {
          line: 401,
          column: 58
        }
      },
      "9": {
        start: {
          line: 402,
          column: 16
        },
        end: {
          line: 405,
          column: 17
        }
      },
      "10": {
        start: {
          line: 403,
          column: 20
        },
        end: {
          line: 404,
          column: 68
        }
      },
      "11": {
        start: {
          line: 404,
          column: 34
        },
        end: {
          line: 404,
          column: 66
        }
      },
      "12": {
        start: {
          line: 408,
          column: 12
        },
        end: {
          line: 408,
          column: 52
        }
      },
      "13": {
        start: {
          line: 412,
          column: 18
        },
        end: {
          line: 414,
          column: 5
        }
      },
      "14": {
        start: {
          line: 413,
          column: 8
        },
        end: {
          line: 413,
          column: 43
        }
      },
      "15": {
        start: {
          line: 416,
          column: 4
        },
        end: {
          line: 423,
          column: 7
        }
      },
      "16": {
        start: {
          line: 417,
          column: 74
        },
        end: {
          line: 417,
          column: 90
        }
      },
      "17": {
        start: {
          line: 418,
          column: 87
        },
        end: {
          line: 418,
          column: 103
        }
      },
      "18": {
        start: {
          line: 419,
          column: 86
        },
        end: {
          line: 419,
          column: 102
        }
      },
      "19": {
        start: {
          line: 420,
          column: 88
        },
        end: {
          line: 420,
          column: 104
        }
      },
      "20": {
        start: {
          line: 421,
          column: 77
        },
        end: {
          line: 421,
          column: 93
        }
      },
      "21": {
        start: {
          line: 422,
          column: 70
        },
        end: {
          line: 422,
          column: 86
        }
      },
      "22": {
        start: {
          line: 426,
          column: 21
        },
        end: {
          line: 434,
          column: 1
        }
      },
      "23": {
        start: {
          line: 427,
          column: 22
        },
        end: {
          line: 427,
          column: 58
        }
      },
      "24": {
        start: {
          line: 428,
          column: 4
        },
        end: {
          line: 433,
          column: 5
        }
      },
      "25": {
        start: {
          line: 438,
          column: 45
        },
        end: {
          line: 438,
          column: 48
        }
      },
      "26": {
        start: {
          line: 440,
          column: 26
        },
        end: {
          line: 440,
          column: 52
        }
      },
      "27": {
        start: {
          line: 441,
          column: 31
        },
        end: {
          line: 441,
          column: 62
        }
      },
      "28": {
        start: {
          line: 442,
          column: 29
        },
        end: {
          line: 442,
          column: 59
        }
      },
      "29": {
        start: {
          line: 444,
          column: 16
        },
        end: {
          line: 449,
          column: 1
        }
      },
      "30": {
        start: {
          line: 446,
          column: 8
        },
        end: {
          line: 447,
          column: 53
        }
      },
      "31": {
        start: {
          line: 447,
          column: 12
        },
        end: {
          line: 447,
          column: 53
        }
      },
      "32": {
        start: {
          line: 462,
          column: 31
        },
        end: {
          line: 462,
          column: 82
        }
      },
      "33": {
        start: {
          line: 466,
          column: 21
        },
        end: {
          line: 466,
          column: 72
        }
      },
      "34": {
        start: {
          line: 473,
          column: 24
        },
        end: {
          line: 473,
          column: 26
        }
      },
      "35": {
        start: {
          line: 475,
          column: 24
        },
        end: {
          line: 475,
          column: 26
        }
      },
      "36": {
        start: {
          line: 479,
          column: 22
        },
        end: {
          line: 479,
          column: 31
        }
      },
      "37": {
        start: {
          line: 481,
          column: 34
        },
        end: {
          line: 481,
          column: 48
        }
      },
      "38": {
        start: {
          line: 482,
          column: 34
        },
        end: {
          line: 482,
          column: 63
        }
      },
      "39": {
        start: {
          line: 487,
          column: 38
        },
        end: {
          line: 487,
          column: 42
        }
      },
      "40": {
        start: {
          line: 491,
          column: 35
        },
        end: {
          line: 491,
          column: 39
        }
      },
      "41": {
        start: {
          line: 493,
          column: 34
        },
        end: {
          line: 493,
          column: 39
        }
      },
      "42": {
        start: {
          line: 495,
          column: 40
        },
        end: {
          line: 495,
          column: 45
        }
      },
      "43": {
        start: {
          line: 499,
          column: 40
        },
        end: {
          line: 499,
          column: 45
        }
      },
      "44": {
        start: {
          line: 504,
          column: 8
        },
        end: {
          line: 504,
          column: 37
        }
      },
      "45": {
        start: {
          line: 505,
          column: 8
        },
        end: {
          line: 505,
          column: 53
        }
      },
      "46": {
        start: {
          line: 506,
          column: 8
        },
        end: {
          line: 506,
          column: 149
        }
      },
      "47": {
        start: {
          line: 508,
          column: 8
        },
        end: {
          line: 514,
          column: 9
        }
      },
      "48": {
        start: {
          line: 509,
          column: 12
        },
        end: {
          line: 513,
          column: 13
        }
      },
      "49": {
        start: {
          line: 510,
          column: 16
        },
        end: {
          line: 510,
          column: 92
        }
      },
      "50": {
        start: {
          line: 512,
          column: 16
        },
        end: {
          line: 512,
          column: 139
        }
      },
      "51": {
        start: {
          line: 516,
          column: 8
        },
        end: {
          line: 518,
          column: 9
        }
      },
      "52": {
        start: {
          line: 517,
          column: 12
        },
        end: {
          line: 517,
          column: 41
        }
      },
      "53": {
        start: {
          line: 520,
          column: 8
        },
        end: {
          line: 522,
          column: 9
        }
      },
      "54": {
        start: {
          line: 521,
          column: 12
        },
        end: {
          line: 521,
          column: 57
        }
      },
      "55": {
        start: {
          line: 524,
          column: 8
        },
        end: {
          line: 526,
          column: 9
        }
      },
      "56": {
        start: {
          line: 525,
          column: 12
        },
        end: {
          line: 525,
          column: 48
        }
      },
      "57": {
        start: {
          line: 528,
          column: 8
        },
        end: {
          line: 534,
          column: 9
        }
      },
      "58": {
        start: {
          line: 529,
          column: 12
        },
        end: {
          line: 533,
          column: 13
        }
      },
      "59": {
        start: {
          line: 530,
          column: 16
        },
        end: {
          line: 530,
          column: 51
        }
      },
      "60": {
        start: {
          line: 532,
          column: 16
        },
        end: {
          line: 532,
          column: 118
        }
      },
      "61": {
        start: {
          line: 536,
          column: 8
        },
        end: {
          line: 538,
          column: 9
        }
      },
      "62": {
        start: {
          line: 537,
          column: 12
        },
        end: {
          line: 537,
          column: 43
        }
      },
      "63": {
        start: {
          line: 540,
          column: 8
        },
        end: {
          line: 542,
          column: 9
        }
      },
      "64": {
        start: {
          line: 541,
          column: 12
        },
        end: {
          line: 541,
          column: 69
        }
      },
      "65": {
        start: {
          line: 544,
          column: 8
        },
        end: {
          line: 546,
          column: 9
        }
      },
      "66": {
        start: {
          line: 545,
          column: 12
        },
        end: {
          line: 545,
          column: 69
        }
      },
      "67": {
        start: {
          line: 548,
          column: 8
        },
        end: {
          line: 553,
          column: 10
        }
      },
      "68": {
        start: {
          line: 549,
          column: 12
        },
        end: {
          line: 549,
          column: 43
        }
      },
      "69": {
        start: {
          line: 552,
          column: 12
        },
        end: {
          line: 552,
          column: 98
        }
      },
      "70": {
        start: {
          line: 555,
          column: 9
        },
        end: {
          line: 560,
          column: 10
        }
      },
      "71": {
        start: {
          line: 556,
          column: 12
        },
        end: {
          line: 556,
          column: 49
        }
      },
      "72": {
        start: {
          line: 559,
          column: 12
        },
        end: {
          line: 559,
          column: 43
        }
      },
      "73": {
        start: {
          line: 562,
          column: 8
        },
        end: {
          line: 562,
          column: 60
        }
      },
      "74": {
        start: {
          line: 564,
          column: 8
        },
        end: {
          line: 564,
          column: 46
        }
      },
      "75": {
        start: {
          line: 566,
          column: 38
        },
        end: {
          line: 566,
          column: 63
        }
      },
      "76": {
        start: {
          line: 568,
          column: 8
        },
        end: {
          line: 574,
          column: 9
        }
      },
      "77": {
        start: {
          line: 569,
          column: 12
        },
        end: {
          line: 571,
          column: 13
        }
      },
      "78": {
        start: {
          line: 570,
          column: 16
        },
        end: {
          line: 570,
          column: 156
        }
      },
      "79": {
        start: {
          line: 573,
          column: 12
        },
        end: {
          line: 573,
          column: 57
        }
      },
      "80": {
        start: {
          line: 576,
          column: 8
        },
        end: {
          line: 580,
          column: 10
        }
      },
      "81": {
        start: {
          line: 582,
          column: 8
        },
        end: {
          line: 583,
          column: 61
        }
      },
      "82": {
        start: {
          line: 583,
          column: 12
        },
        end: {
          line: 583,
          column: 61
        }
      },
      "83": {
        start: {
          line: 585,
          column: 8
        },
        end: {
          line: 586,
          column: 47
        }
      },
      "84": {
        start: {
          line: 586,
          column: 12
        },
        end: {
          line: 586,
          column: 47
        }
      },
      "85": {
        start: {
          line: 588,
          column: 8
        },
        end: {
          line: 589,
          column: 55
        }
      },
      "86": {
        start: {
          line: 589,
          column: 12
        },
        end: {
          line: 589,
          column: 55
        }
      },
      "87": {
        start: {
          line: 591,
          column: 8
        },
        end: {
          line: 594,
          column: 18
        }
      },
      "88": {
        start: {
          line: 601,
          column: 8
        },
        end: {
          line: 601,
          column: 35
        }
      },
      "89": {
        start: {
          line: 607,
          column: 19
        },
        end: {
          line: 655,
          column: 10
        }
      },
      "90": {
        start: {
          line: 609,
          column: 12
        },
        end: {
          line: 638,
          column: 13
        }
      },
      "91": {
        start: {
          line: 610,
          column: 16
        },
        end: {
          line: 610,
          column: 73
        }
      },
      "92": {
        start: {
          line: 613,
          column: 16
        },
        end: {
          line: 634,
          column: 17
        }
      },
      "93": {
        start: {
          line: 614,
          column: 20
        },
        end: {
          line: 614,
          column: 73
        }
      },
      "94": {
        start: {
          line: 615,
          column: 20
        },
        end: {
          line: 615,
          column: 84
        }
      },
      "95": {
        start: {
          line: 617,
          column: 20
        },
        end: {
          line: 633,
          column: 48
        }
      },
      "96": {
        start: {
          line: 618,
          column: 24
        },
        end: {
          line: 618,
          column: 74
        }
      },
      "97": {
        start: {
          line: 619,
          column: 24
        },
        end: {
          line: 619,
          column: 71
        }
      },
      "98": {
        start: {
          line: 621,
          column: 24
        },
        end: {
          line: 623,
          column: 25
        }
      },
      "99": {
        start: {
          line: 622,
          column: 28
        },
        end: {
          line: 622,
          column: 96
        }
      },
      "100": {
        start: {
          line: 625,
          column: 24
        },
        end: {
          line: 625,
          column: 82
        }
      },
      "101": {
        start: {
          line: 626,
          column: 24
        },
        end: {
          line: 627,
          column: 52
        }
      },
      "102": {
        start: {
          line: 627,
          column: 28
        },
        end: {
          line: 627,
          column: 52
        }
      },
      "103": {
        start: {
          line: 629,
          column: 24
        },
        end: {
          line: 629,
          column: 77
        }
      },
      "104": {
        start: {
          line: 631,
          column: 24
        },
        end: {
          line: 631,
          column: 86
        }
      },
      "105": {
        start: {
          line: 633,
          column: 30
        },
        end: {
          line: 633,
          column: 46
        }
      },
      "106": {
        start: {
          line: 637,
          column: 16
        },
        end: {
          line: 637,
          column: 80
        }
      },
      "107": {
        start: {
          line: 640,
          column: 36
        },
        end: {
          line: 640,
          column: 137
        }
      },
      "108": {
        start: {
          line: 642,
          column: 12
        },
        end: {
          line: 654,
          column: 13
        }
      },
      "109": {
        start: {
          line: 644,
          column: 20
        },
        end: {
          line: 644,
          column: 93
        }
      },
      "110": {
        start: {
          line: 647,
          column: 20
        },
        end: {
          line: 647,
          column: 91
        }
      },
      "111": {
        start: {
          line: 650,
          column: 20
        },
        end: {
          line: 650,
          column: 84
        }
      },
      "112": {
        start: {
          line: 653,
          column: 20
        },
        end: {
          line: 653,
          column: 84
        }
      },
      "113": {
        start: {
          line: 657,
          column: 8
        },
        end: {
          line: 657,
          column: 40
        }
      },
      "114": {
        start: {
          line: 665,
          column: 8
        },
        end: {
          line: 665,
          column: 22
        }
      },
      "115": {
        start: {
          line: 666,
          column: 23
        },
        end: {
          line: 666,
          column: 24
        }
      },
      "116": {
        start: {
          line: 667,
          column: 25
        },
        end: {
          line: 667,
          column: 29
        }
      },
      "117": {
        start: {
          line: 668,
          column: 8
        },
        end: {
          line: 676,
          column: 10
        }
      },
      "118": {
        start: {
          line: 669,
          column: 12
        },
        end: {
          line: 672,
          column: 13
        }
      },
      "119": {
        start: {
          line: 670,
          column: 16
        },
        end: {
          line: 670,
          column: 28
        }
      },
      "120": {
        start: {
          line: 671,
          column: 16
        },
        end: {
          line: 671,
          column: 42
        }
      },
      "121": {
        start: {
          line: 673,
          column: 12
        },
        end: {
          line: 673,
          column: 23
        }
      },
      "122": {
        start: {
          line: 674,
          column: 12
        },
        end: {
          line: 674,
          column: 32
        }
      },
      "123": {
        start: {
          line: 675,
          column: 12
        },
        end: {
          line: 675,
          column: 26
        }
      },
      "124": {
        start: {
          line: 680,
          column: 33
        },
        end: {
          line: 680,
          column: 66
        }
      },
      "125": {
        start: {
          line: 681,
          column: 8
        },
        end: {
          line: 682,
          column: 71
        }
      },
      "126": {
        start: {
          line: 682,
          column: 12
        },
        end: {
          line: 682,
          column: 71
        }
      },
      "127": {
        start: {
          line: 684,
          column: 42
        },
        end: {
          line: 684,
          column: 104
        }
      },
      "128": {
        start: {
          line: 685,
          column: 8
        },
        end: {
          line: 685,
          column: 63
        }
      },
      "129": {
        start: {
          line: 690,
          column: 20
        },
        end: {
          line: 692,
          column: 44
        }
      },
      "130": {
        start: {
          line: 693,
          column: 23
        },
        end: {
          line: 693,
          column: 59
        }
      },
      "131": {
        start: {
          line: 694,
          column: 21
        },
        end: {
          line: 701,
          column: 15
        }
      },
      "132": {
        start: {
          line: 702,
          column: 8
        },
        end: {
          line: 725,
          column: 9
        }
      },
      "133": {
        start: {
          line: 714,
          column: 29
        },
        end: {
          line: 714,
          column: 66
        }
      },
      "134": {
        start: {
          line: 718,
          column: 12
        },
        end: {
          line: 724,
          column: 31
        }
      },
      "135": {
        start: {
          line: 719,
          column: 16
        },
        end: {
          line: 721,
          column: 63
        }
      },
      "136": {
        start: {
          line: 729,
          column: 8
        },
        end: {
          line: 734,
          column: 11
        }
      },
      "137": {
        start: {
          line: 730,
          column: 22
        },
        end: {
          line: 730,
          column: 41
        }
      },
      "138": {
        start: {
          line: 732,
          column: 12
        },
        end: {
          line: 732,
          column: 69
        }
      },
      "139": {
        start: {
          line: 733,
          column: 12
        },
        end: {
          line: 733,
          column: 31
        }
      },
      "140": {
        start: {
          line: 738,
          column: 8
        },
        end: {
          line: 765,
          column: 9
        }
      },
      "141": {
        start: {
          line: 740,
          column: 12
        },
        end: {
          line: 764,
          column: 13
        }
      },
      "142": {
        start: {
          line: 748,
          column: 33
        },
        end: {
          line: 748,
          column: 70
        }
      },
      "143": {
        start: {
          line: 749,
          column: 33
        },
        end: {
          line: 763,
          column: 35
        }
      },
      "144": {
        start: {
          line: 751,
          column: 20
        },
        end: {
          line: 758,
          column: 21
        }
      },
      "145": {
        start: {
          line: 753,
          column: 24
        },
        end: {
          line: 753,
          column: 44
        }
      },
      "146": {
        start: {
          line: 754,
          column: 24
        },
        end: {
          line: 754,
          column: 80
        }
      },
      "147": {
        start: {
          line: 755,
          column: 27
        },
        end: {
          line: 758,
          column: 21
        }
      },
      "148": {
        start: {
          line: 757,
          column: 24
        },
        end: {
          line: 757,
          column: 80
        }
      },
      "149": {
        start: {
          line: 760,
          column: 20
        },
        end: {
          line: 760,
          column: 73
        }
      },
      "150": {
        start: {
          line: 769,
          column: 8
        },
        end: {
          line: 769,
          column: 40
        }
      },
      "151": {
        start: {
          line: 770,
          column: 8
        },
        end: {
          line: 770,
          column: 58
        }
      },
      "152": {
        start: {
          line: 771,
          column: 8
        },
        end: {
          line: 773,
          column: 9
        }
      },
      "153": {
        start: {
          line: 772,
          column: 12
        },
        end: {
          line: 772,
          column: 80
        }
      },
      "154": {
        start: {
          line: 774,
          column: 8
        },
        end: {
          line: 775,
          column: 65
        }
      },
      "155": {
        start: {
          line: 775,
          column: 12
        },
        end: {
          line: 775,
          column: 65
        }
      },
      "156": {
        start: {
          line: 779,
          column: 8
        },
        end: {
          line: 780,
          column: 56
        }
      },
      "157": {
        start: {
          line: 780,
          column: 12
        },
        end: {
          line: 780,
          column: 56
        }
      },
      "158": {
        start: {
          line: 781,
          column: 8
        },
        end: {
          line: 787,
          column: 9
        }
      },
      "159": {
        start: {
          line: 782,
          column: 12
        },
        end: {
          line: 782,
          column: 64
        }
      },
      "160": {
        start: {
          line: 784,
          column: 12
        },
        end: {
          line: 785,
          column: 23
        }
      },
      "161": {
        start: {
          line: 785,
          column: 16
        },
        end: {
          line: 785,
          column: 23
        }
      },
      "162": {
        start: {
          line: 786,
          column: 12
        },
        end: {
          line: 786,
          column: 21
        }
      },
      "163": {
        start: {
          line: 793,
          column: 8
        },
        end: {
          line: 793,
          column: 36
        }
      },
      "164": {
        start: {
          line: 794,
          column: 8
        },
        end: {
          line: 818,
          column: 59
        }
      },
      "165": {
        start: {
          line: 796,
          column: 16
        },
        end: {
          line: 816,
          column: 18
        }
      },
      "166": {
        start: {
          line: 807,
          column: 20
        },
        end: {
          line: 810,
          column: 21
        }
      },
      "167": {
        start: {
          line: 808,
          column: 24
        },
        end: {
          line: 808,
          column: 97
        }
      },
      "168": {
        start: {
          line: 809,
          column: 24
        },
        end: {
          line: 809,
          column: 73
        }
      },
      "169": {
        start: {
          line: 811,
          column: 20
        },
        end: {
          line: 811,
          column: 30
        }
      },
      "170": {
        start: {
          line: 814,
          column: 20
        },
        end: {
          line: 814,
          column: 71
        }
      },
      "171": {
        start: {
          line: 815,
          column: 20
        },
        end: {
          line: 815,
          column: 70
        }
      },
      "172": {
        start: {
          line: 818,
          column: 28
        },
        end: {
          line: 818,
          column: 57
        }
      },
      "173": {
        start: {
          line: 823,
          column: 8
        },
        end: {
          line: 826,
          column: 9
        }
      },
      "174": {
        start: {
          line: 824,
          column: 12
        },
        end: {
          line: 824,
          column: 114
        }
      },
      "175": {
        start: {
          line: 825,
          column: 12
        },
        end: {
          line: 825,
          column: 62
        }
      },
      "176": {
        start: {
          line: 830,
          column: 8
        },
        end: {
          line: 831,
          column: 61
        }
      },
      "177": {
        start: {
          line: 831,
          column: 12
        },
        end: {
          line: 831,
          column: 61
        }
      },
      "178": {
        start: {
          line: 835,
          column: 8
        },
        end: {
          line: 835,
          column: 46
        }
      },
      "179": {
        start: {
          line: 836,
          column: 8
        },
        end: {
          line: 851,
          column: 55
        }
      },
      "180": {
        start: {
          line: 838,
          column: 12
        },
        end: {
          line: 849,
          column: 55
        }
      },
      "181": {
        start: {
          line: 848,
          column: 33
        },
        end: {
          line: 848,
          column: 67
        }
      },
      "182": {
        start: {
          line: 849,
          column: 28
        },
        end: {
          line: 849,
          column: 54
        }
      },
      "183": {
        start: {
          line: 851,
          column: 24
        },
        end: {
          line: 851,
          column: 53
        }
      },
      "184": {
        start: {
          line: 855,
          column: 32
        },
        end: {
          line: 855,
          column: 39
        }
      },
      "185": {
        start: {
          line: 858,
          column: 42
        },
        end: {
          line: 858,
          column: 114
        }
      },
      "186": {
        start: {
          line: 858,
          column: 92
        },
        end: {
          line: 858,
          column: 112
        }
      },
      "187": {
        start: {
          line: 859,
          column: 36
        },
        end: {
          line: 862,
          column: 11
        }
      },
      "188": {
        start: {
          line: 859,
          column: 91
        },
        end: {
          line: 862,
          column: 9
        }
      },
      "189": {
        start: {
          line: 867,
          column: 8
        },
        end: {
          line: 904,
          column: 52
        }
      },
      "190": {
        start: {
          line: 871,
          column: 12
        },
        end: {
          line: 871,
          column: 38
        }
      },
      "191": {
        start: {
          line: 872,
          column: 12
        },
        end: {
          line: 876,
          column: 66
        }
      },
      "192": {
        start: {
          line: 875,
          column: 93
        },
        end: {
          line: 875,
          column: 106
        }
      },
      "193": {
        start: {
          line: 878,
          column: 12
        },
        end: {
          line: 889,
          column: 20
        }
      },
      "194": {
        start: {
          line: 880,
          column: 16
        },
        end: {
          line: 887,
          column: 17
        }
      },
      "195": {
        start: {
          line: 886,
          column: 20
        },
        end: {
          line: 886,
          column: 119
        }
      },
      "196": {
        start: {
          line: 892,
          column: 12
        },
        end: {
          line: 902,
          column: 55
        }
      },
      "197": {
        start: {
          line: 901,
          column: 33
        },
        end: {
          line: 901,
          column: 67
        }
      },
      "198": {
        start: {
          line: 902,
          column: 28
        },
        end: {
          line: 902,
          column: 54
        }
      },
      "199": {
        start: {
          line: 904,
          column: 24
        },
        end: {
          line: 904,
          column: 50
        }
      },
      "200": {
        start: {
          line: 908,
          column: 8
        },
        end: {
          line: 913,
          column: 68
        }
      },
      "201": {
        start: {
          line: 910,
          column: 12
        },
        end: {
          line: 910,
          column: 32
        }
      },
      "202": {
        start: {
          line: 911,
          column: 13
        },
        end: {
          line: 913,
          column: 68
        }
      },
      "203": {
        start: {
          line: 913,
          column: 12
        },
        end: {
          line: 913,
          column: 68
        }
      },
      "204": {
        start: {
          line: 914,
          column: 8
        },
        end: {
          line: 914,
          column: 63
        }
      },
      "205": {
        start: {
          line: 918,
          column: 8
        },
        end: {
          line: 920,
          column: 59
        }
      },
      "206": {
        start: {
          line: 924,
          column: 50
        },
        end: {
          line: 968,
          column: 10
        }
      },
      "207": {
        start: {
          line: 927,
          column: 29
        },
        end: {
          line: 927,
          column: 57
        }
      },
      "208": {
        start: {
          line: 931,
          column: 12
        },
        end: {
          line: 967,
          column: 15
        }
      },
      "209": {
        start: {
          line: 932,
          column: 16
        },
        end: {
          line: 966,
          column: 17
        }
      },
      "210": {
        start: {
          line: 933,
          column: 43
        },
        end: {
          line: 933,
          column: 53
        }
      },
      "211": {
        start: {
          line: 935,
          column: 20
        },
        end: {
          line: 965,
          column: 22
        }
      },
      "212": {
        start: {
          line: 945,
          column: 28
        },
        end: {
          line: 945,
          column: 52
        }
      },
      "213": {
        start: {
          line: 946,
          column: 28
        },
        end: {
          line: 946,
          column: 131
        }
      },
      "214": {
        start: {
          line: 946,
          column: 45
        },
        end: {
          line: 946,
          column: 64
        }
      },
      "215": {
        start: {
          line: 949,
          column: 28
        },
        end: {
          line: 963,
          column: 29
        }
      },
      "216": {
        start: {
          line: 951,
          column: 36
        },
        end: {
          line: 951,
          column: 95
        }
      },
      "217": {
        start: {
          line: 952,
          column: 36
        },
        end: {
          line: 952,
          column: 96
        }
      },
      "218": {
        start: {
          line: 952,
          column: 53
        },
        end: {
          line: 952,
          column: 72
        }
      },
      "219": {
        start: {
          line: 953,
          column: 36
        },
        end: {
          line: 953,
          column: 42
        }
      },
      "220": {
        start: {
          line: 956,
          column: 36
        },
        end: {
          line: 956,
          column: 88
        }
      },
      "221": {
        start: {
          line: 957,
          column: 36
        },
        end: {
          line: 957,
          column: 42
        }
      },
      "222": {
        start: {
          line: 961,
          column: 36
        },
        end: {
          line: 961,
          column: 60
        }
      },
      "223": {
        start: {
          line: 962,
          column: 36
        },
        end: {
          line: 962,
          column: 42
        }
      },
      "224": {
        start: {
          line: 970,
          column: 8
        },
        end: {
          line: 974,
          column: 88
        }
      },
      "225": {
        start: {
          line: 971,
          column: 22
        },
        end: {
          line: 974,
          column: 86
        }
      },
      "226": {
        start: {
          line: 972,
          column: 25
        },
        end: {
          line: 972,
          column: 57
        }
      },
      "227": {
        start: {
          line: 973,
          column: 33
        },
        end: {
          line: 973,
          column: 71
        }
      },
      "228": {
        start: {
          line: 974,
          column: 38
        },
        end: {
          line: 974,
          column: 85
        }
      },
      "229": {
        start: {
          line: 978,
          column: 8
        },
        end: {
          line: 979,
          column: 53
        }
      },
      "230": {
        start: {
          line: 979,
          column: 12
        },
        end: {
          line: 979,
          column: 53
        }
      },
      "231": {
        start: {
          line: 980,
          column: 8
        },
        end: {
          line: 980,
          column: 82
        }
      },
      "232": {
        start: {
          line: 984,
          column: 8
        },
        end: {
          line: 992,
          column: 82
        }
      },
      "233": {
        start: {
          line: 986,
          column: 12
        },
        end: {
          line: 990,
          column: 143
        }
      },
      "234": {
        start: {
          line: 990,
          column: 33
        },
        end: {
          line: 990,
          column: 142
        }
      },
      "235": {
        start: {
          line: 990,
          column: 111
        },
        end: {
          line: 990,
          column: 141
        }
      },
      "236": {
        start: {
          line: 992,
          column: 34
        },
        end: {
          line: 992,
          column: 81
        }
      },
      "237": {
        start: {
          line: 997,
          column: 8
        },
        end: {
          line: 997,
          column: 65
        }
      },
      "238": {
        start: {
          line: 1004,
          column: 8
        },
        end: {
          line: 1066,
          column: 27
        }
      },
      "239": {
        start: {
          line: 1005,
          column: 12
        },
        end: {
          line: 1005,
          column: 62
        }
      },
      "240": {
        start: {
          line: 1006,
          column: 23
        },
        end: {
          line: 1006,
          column: 66
        }
      },
      "241": {
        start: {
          line: 1010,
          column: 12
        },
        end: {
          line: 1023,
          column: 13
        }
      },
      "242": {
        start: {
          line: 1011,
          column: 16
        },
        end: {
          line: 1011,
          column: 52
        }
      },
      "243": {
        start: {
          line: 1016,
          column: 16
        },
        end: {
          line: 1022,
          column: 19
        }
      },
      "244": {
        start: {
          line: 1017,
          column: 20
        },
        end: {
          line: 1021,
          column: 21
        }
      },
      "245": {
        start: {
          line: 1018,
          column: 24
        },
        end: {
          line: 1018,
          column: 35
        }
      },
      "246": {
        start: {
          line: 1020,
          column: 24
        },
        end: {
          line: 1020,
          column: 53
        }
      },
      "247": {
        start: {
          line: 1025,
          column: 12
        },
        end: {
          line: 1033,
          column: 13
        }
      },
      "248": {
        start: {
          line: 1026,
          column: 16
        },
        end: {
          line: 1026,
          column: 54
        }
      },
      "249": {
        start: {
          line: 1027,
          column: 16
        },
        end: {
          line: 1027,
          column: 43
        }
      },
      "250": {
        start: {
          line: 1027,
          column: 25
        },
        end: {
          line: 1027,
          column: 43
        }
      },
      "251": {
        start: {
          line: 1031,
          column: 16
        },
        end: {
          line: 1031,
          column: 50
        }
      },
      "252": {
        start: {
          line: 1032,
          column: 16
        },
        end: {
          line: 1032,
          column: 30
        }
      },
      "253": {
        start: {
          line: 1035,
          column: 12
        },
        end: {
          line: 1043,
          column: 13
        }
      },
      "254": {
        start: {
          line: 1036,
          column: 16
        },
        end: {
          line: 1036,
          column: 54
        }
      },
      "255": {
        start: {
          line: 1037,
          column: 16
        },
        end: {
          line: 1037,
          column: 43
        }
      },
      "256": {
        start: {
          line: 1037,
          column: 25
        },
        end: {
          line: 1037,
          column: 43
        }
      },
      "257": {
        start: {
          line: 1041,
          column: 16
        },
        end: {
          line: 1041,
          column: 50
        }
      },
      "258": {
        start: {
          line: 1042,
          column: 16
        },
        end: {
          line: 1042,
          column: 30
        }
      },
      "259": {
        start: {
          line: 1045,
          column: 12
        },
        end: {
          line: 1045,
          column: 96
        }
      },
      "260": {
        start: {
          line: 1045,
          column: 38
        },
        end: {
          line: 1045,
          column: 95
        }
      },
      "261": {
        start: {
          line: 1047,
          column: 12
        },
        end: {
          line: 1057,
          column: 13
        }
      },
      "262": {
        start: {
          line: 1048,
          column: 16
        },
        end: {
          line: 1048,
          column: 41
        }
      },
      "263": {
        start: {
          line: 1050,
          column: 29
        },
        end: {
          line: 1050,
          column: 44
        }
      },
      "264": {
        start: {
          line: 1051,
          column: 30
        },
        end: {
          line: 1051,
          column: 72
        }
      },
      "265": {
        start: {
          line: 1053,
          column: 34
        },
        end: {
          line: 1053,
          column: 54
        }
      },
      "266": {
        start: {
          line: 1054,
          column: 33
        },
        end: {
          line: 1054,
          column: 67
        }
      },
      "267": {
        start: {
          line: 1056,
          column: 27
        },
        end: {
          line: 1056,
          column: 31
        }
      },
      "268": {
        start: {
          line: 1063,
          column: 12
        },
        end: {
          line: 1065,
          column: 13
        }
      },
      "269": {
        start: {
          line: 1064,
          column: 16
        },
        end: {
          line: 1064,
          column: 75
        }
      },
      "270": {
        start: {
          line: 1064,
          column: 64
        },
        end: {
          line: 1064,
          column: 75
        }
      },
      "271": {
        start: {
          line: 1070,
          column: 8
        },
        end: {
          line: 1105,
          column: 9
        }
      },
      "272": {
        start: {
          line: 1072,
          column: 12
        },
        end: {
          line: 1104,
          column: 13
        }
      },
      "273": {
        start: {
          line: 1082,
          column: 16
        },
        end: {
          line: 1083,
          column: 55
        }
      },
      "274": {
        start: {
          line: 1083,
          column: 20
        },
        end: {
          line: 1083,
          column: 55
        }
      },
      "275": {
        start: {
          line: 1085,
          column: 16
        },
        end: {
          line: 1087,
          column: 17
        }
      },
      "276": {
        start: {
          line: 1086,
          column: 24
        },
        end: {
          line: 1086,
          column: 95
        }
      },
      "277": {
        start: {
          line: 1089,
          column: 22
        },
        end: {
          line: 1089,
          column: 26
        }
      },
      "278": {
        start: {
          line: 1090,
          column: 33
        },
        end: {
          line: 1103,
          column: 35
        }
      },
      "279": {
        start: {
          line: 1092,
          column: 20
        },
        end: {
          line: 1098,
          column: 21
        }
      },
      "280": {
        start: {
          line: 1095,
          column: 24
        },
        end: {
          line: 1095,
          column: 44
        }
      },
      "281": {
        start: {
          line: 1096,
          column: 27
        },
        end: {
          line: 1098,
          column: 21
        }
      },
      "282": {
        start: {
          line: 1097,
          column: 24
        },
        end: {
          line: 1097,
          column: 97
        }
      },
      "283": {
        start: {
          line: 1100,
          column: 20
        },
        end: {
          line: 1100,
          column: 73
        }
      },
      "284": {
        start: {
          line: 1109,
          column: 8
        },
        end: {
          line: 1112,
          column: 10
        }
      },
      "285": {
        start: {
          line: 1116,
          column: 26
        },
        end: {
          line: 1116,
          column: 40
        }
      },
      "286": {
        start: {
          line: 1118,
          column: 8
        },
        end: {
          line: 1120,
          column: 9
        }
      },
      "287": {
        start: {
          line: 1119,
          column: 12
        },
        end: {
          line: 1119,
          column: 45
        }
      },
      "288": {
        start: {
          line: 1122,
          column: 8
        },
        end: {
          line: 1122,
          column: 92
        }
      },
      "289": {
        start: {
          line: 1126,
          column: 8
        },
        end: {
          line: 1128,
          column: 9
        }
      },
      "290": {
        start: {
          line: 1127,
          column: 12
        },
        end: {
          line: 1127,
          column: 85
        }
      },
      "291": {
        start: {
          line: 1130,
          column: 32
        },
        end: {
          line: 1130,
          column: 59
        }
      },
      "292": {
        start: {
          line: 1131,
          column: 8
        },
        end: {
          line: 1133,
          column: 9
        }
      },
      "293": {
        start: {
          line: 1132,
          column: 12
        },
        end: {
          line: 1132,
          column: 108
        }
      },
      "294": {
        start: {
          line: 1135,
          column: 8
        },
        end: {
          line: 1137,
          column: 9
        }
      },
      "295": {
        start: {
          line: 1136,
          column: 12
        },
        end: {
          line: 1136,
          column: 157
        }
      },
      "296": {
        start: {
          line: 1139,
          column: 8
        },
        end: {
          line: 1139,
          column: 48
        }
      },
      "297": {
        start: {
          line: 1143,
          column: 8
        },
        end: {
          line: 1150,
          column: 9
        }
      },
      "298": {
        start: {
          line: 1144,
          column: 29
        },
        end: {
          line: 1144,
          column: 84
        }
      },
      "299": {
        start: {
          line: 1145,
          column: 12
        },
        end: {
          line: 1145,
          column: 24
        }
      },
      "300": {
        start: {
          line: 1147,
          column: 12
        },
        end: {
          line: 1149,
          column: 13
        }
      },
      "301": {
        start: {
          line: 1148,
          column: 16
        },
        end: {
          line: 1148,
          column: 33
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 392,
            column: 26
          },
          end: {
            line: 392,
            column: 27
          }
        },
        loc: {
          start: {
            line: 392,
            column: 100
          },
          end: {
            line: 424,
            column: 1
          }
        },
        line: 392
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 394,
            column: 27
          },
          end: {
            line: 394,
            column: 28
          }
        },
        loc: {
          start: {
            line: 394,
            column: 40
          },
          end: {
            line: 394,
            column: 79
          }
        },
        line: 394
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 396,
            column: 18
          },
          end: {
            line: 396,
            column: 19
          }
        },
        loc: {
          start: {
            line: 396,
            column: 60
          },
          end: {
            line: 410,
            column: 5
          }
        },
        line: 396
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 398,
            column: 43
          },
          end: {
            line: 398,
            column: 44
          }
        },
        loc: {
          start: {
            line: 398,
            column: 52
          },
          end: {
            line: 409,
            column: 9
          }
        },
        line: 398
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 404,
            column: 29
          },
          end: {
            line: 404,
            column: 30
          }
        },
        loc: {
          start: {
            line: 404,
            column: 34
          },
          end: {
            line: 404,
            column: 66
          }
        },
        line: 404
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 412,
            column: 18
          },
          end: {
            line: 412,
            column: 19
          }
        },
        loc: {
          start: {
            line: 412,
            column: 57
          },
          end: {
            line: 414,
            column: 5
          }
        },
        line: 412
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 417,
            column: 13
          },
          end: {
            line: 417,
            column: 14
          }
        },
        loc: {
          start: {
            line: 417,
            column: 74
          },
          end: {
            line: 417,
            column: 90
          }
        },
        line: 417
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 418,
            column: 14
          },
          end: {
            line: 418,
            column: 15
          }
        },
        loc: {
          start: {
            line: 418,
            column: 87
          },
          end: {
            line: 418,
            column: 103
          }
        },
        line: 418
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 419,
            column: 13
          },
          end: {
            line: 419,
            column: 14
          }
        },
        loc: {
          start: {
            line: 419,
            column: 86
          },
          end: {
            line: 419,
            column: 102
          }
        },
        line: 419
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 420,
            column: 15
          },
          end: {
            line: 420,
            column: 16
          }
        },
        loc: {
          start: {
            line: 420,
            column: 88
          },
          end: {
            line: 420,
            column: 104
          }
        },
        line: 420
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 421,
            column: 16
          },
          end: {
            line: 421,
            column: 17
          }
        },
        loc: {
          start: {
            line: 421,
            column: 77
          },
          end: {
            line: 421,
            column: 93
          }
        },
        line: 421
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 422,
            column: 17
          },
          end: {
            line: 422,
            column: 18
          }
        },
        loc: {
          start: {
            line: 422,
            column: 70
          },
          end: {
            line: 422,
            column: 86
          }
        },
        line: 422
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 426,
            column: 21
          },
          end: {
            line: 426,
            column: 22
          }
        },
        loc: {
          start: {
            line: 426,
            column: 64
          },
          end: {
            line: 434,
            column: 1
          }
        },
        line: 426
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 445,
            column: 9
          },
          end: {
            line: 445,
            column: 10
          }
        },
        loc: {
          start: {
            line: 445,
            column: 55
          },
          end: {
            line: 448,
            column: 5
          }
        },
        line: 445
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 503,
            column: 4
          },
          end: {
            line: 503,
            column: 5
          }
        },
        loc: {
          start: {
            line: 503,
            column: 64
          },
          end: {
            line: 595,
            column: 5
          }
        },
        line: 503
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 600,
            column: 5
          },
          end: {
            line: 600,
            column: 6
          }
        },
        loc: {
          start: {
            line: 600,
            column: 40
          },
          end: {
            line: 602,
            column: 5
          }
        },
        line: 600
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 606,
            column: 4
          },
          end: {
            line: 606,
            column: 5
          }
        },
        loc: {
          start: {
            line: 606,
            column: 42
          },
          end: {
            line: 658,
            column: 5
          }
        },
        line: 606
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 608,
            column: 17
          },
          end: {
            line: 608,
            column: 18
          }
        },
        loc: {
          start: {
            line: 608,
            column: 37
          },
          end: {
            line: 639,
            column: 9
          }
        },
        line: 608
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 617,
            column: 55
          },
          end: {
            line: 617,
            column: 56
          }
        },
        loc: {
          start: {
            line: 617,
            column: 71
          },
          end: {
            line: 630,
            column: 21
          }
        },
        line: 617
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 630,
            column: 23
          },
          end: {
            line: 630,
            column: 24
          }
        },
        loc: {
          start: {
            line: 630,
            column: 32
          },
          end: {
            line: 632,
            column: 21
          }
        },
        line: 630
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 633,
            column: 25
          },
          end: {
            line: 633,
            column: 26
          }
        },
        loc: {
          start: {
            line: 633,
            column: 30
          },
          end: {
            line: 633,
            column: 46
          }
        },
        line: 633
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 640,
            column: 16
          },
          end: {
            line: 640,
            column: 17
          }
        },
        loc: {
          start: {
            line: 640,
            column: 36
          },
          end: {
            line: 640,
            column: 137
          }
        },
        line: 640
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 641,
            column: 17
          },
          end: {
            line: 641,
            column: 18
          }
        },
        loc: {
          start: {
            line: 641,
            column: 37
          },
          end: {
            line: 655,
            column: 9
          }
        },
        line: 641
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 660,
            column: 4
          },
          end: {
            line: 660,
            column: 5
          }
        },
        loc: {
          start: {
            line: 664,
            column: 6
          },
          end: {
            line: 677,
            column: 5
          }
        },
        line: 664
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 668,
            column: 15
          },
          end: {
            line: 668,
            column: 16
          }
        },
        loc: {
          start: {
            line: 668,
            column: 63
          },
          end: {
            line: 676,
            column: 9
          }
        },
        line: 668
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 679,
            column: 4
          },
          end: {
            line: 679,
            column: 5
          }
        },
        loc: {
          start: {
            line: 679,
            column: 27
          },
          end: {
            line: 686,
            column: 5
          }
        },
        line: 679
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 688,
            column: 4
          },
          end: {
            line: 688,
            column: 5
          }
        },
        loc: {
          start: {
            line: 688,
            column: 32
          },
          end: {
            line: 726,
            column: 5
          }
        },
        line: 688
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 714,
            column: 13
          },
          end: {
            line: 714,
            column: 14
          }
        },
        loc: {
          start: {
            line: 714,
            column: 29
          },
          end: {
            line: 714,
            column: 66
          }
        },
        line: 714
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 715,
            column: 19
          },
          end: {
            line: 715,
            column: 20
          }
        },
        loc: {
          start: {
            line: 718,
            column: 12
          },
          end: {
            line: 724,
            column: 31
          }
        },
        line: 718
      },
      "29": {
        name: "(anonymous_29)",
        decl: {
          start: {
            line: 718,
            column: 28
          },
          end: {
            line: 718,
            column: 29
          }
        },
        loc: {
          start: {
            line: 718,
            column: 39
          },
          end: {
            line: 722,
            column: 13
          }
        },
        line: 718
      },
      "30": {
        name: "(anonymous_30)",
        decl: {
          start: {
            line: 728,
            column: 4
          },
          end: {
            line: 728,
            column: 5
          }
        },
        loc: {
          start: {
            line: 728,
            column: 31
          },
          end: {
            line: 735,
            column: 5
          }
        },
        line: 728
      },
      "31": {
        name: "(anonymous_31)",
        decl: {
          start: {
            line: 730,
            column: 17
          },
          end: {
            line: 730,
            column: 18
          }
        },
        loc: {
          start: {
            line: 730,
            column: 22
          },
          end: {
            line: 730,
            column: 41
          }
        },
        line: 730
      },
      "32": {
        name: "(anonymous_32)",
        decl: {
          start: {
            line: 731,
            column: 19
          },
          end: {
            line: 731,
            column: 20
          }
        },
        loc: {
          start: {
            line: 731,
            column: 28
          },
          end: {
            line: 734,
            column: 9
          }
        },
        line: 731
      },
      "33": {
        name: "(anonymous_33)",
        decl: {
          start: {
            line: 737,
            column: 4
          },
          end: {
            line: 737,
            column: 5
          }
        },
        loc: {
          start: {
            line: 737,
            column: 27
          },
          end: {
            line: 766,
            column: 5
          }
        },
        line: 737
      },
      "34": {
        name: "(anonymous_34)",
        decl: {
          start: {
            line: 739,
            column: 17
          },
          end: {
            line: 739,
            column: 18
          }
        },
        loc: {
          start: {
            line: 740,
            column: 12
          },
          end: {
            line: 764,
            column: 13
          }
        },
        line: 740
      },
      "35": {
        name: "(anonymous_35)",
        decl: {
          start: {
            line: 748,
            column: 17
          },
          end: {
            line: 748,
            column: 18
          }
        },
        loc: {
          start: {
            line: 748,
            column: 33
          },
          end: {
            line: 748,
            column: 70
          }
        },
        line: 748
      },
      "36": {
        name: "(anonymous_36)",
        decl: {
          start: {
            line: 749,
            column: 23
          },
          end: {
            line: 749,
            column: 24
          }
        },
        loc: {
          start: {
            line: 749,
            column: 33
          },
          end: {
            line: 763,
            column: 35
          }
        },
        line: 749
      },
      "37": {
        name: "(anonymous_37)",
        decl: {
          start: {
            line: 750,
            column: 26
          },
          end: {
            line: 750,
            column: 27
          }
        },
        loc: {
          start: {
            line: 750,
            column: 35
          },
          end: {
            line: 761,
            column: 17
          }
        },
        line: 750
      },
      "38": {
        name: "(anonymous_38)",
        decl: {
          start: {
            line: 768,
            column: 4
          },
          end: {
            line: 768,
            column: 5
          }
        },
        loc: {
          start: {
            line: 768,
            column: 49
          },
          end: {
            line: 776,
            column: 5
          }
        },
        line: 768
      },
      "39": {
        name: "(anonymous_39)",
        decl: {
          start: {
            line: 778,
            column: 4
          },
          end: {
            line: 778,
            column: 5
          }
        },
        loc: {
          start: {
            line: 778,
            column: 10
          },
          end: {
            line: 788,
            column: 5
          }
        },
        line: 778
      },
      "40": {
        name: "(anonymous_40)",
        decl: {
          start: {
            line: 790,
            column: 4
          },
          end: {
            line: 790,
            column: 5
          }
        },
        loc: {
          start: {
            line: 790,
            column: 39
          },
          end: {
            line: 819,
            column: 5
          }
        },
        line: 790
      },
      "41": {
        name: "(anonymous_41)",
        decl: {
          start: {
            line: 795,
            column: 21
          },
          end: {
            line: 795,
            column: 22
          }
        },
        loc: {
          start: {
            line: 796,
            column: 16
          },
          end: {
            line: 816,
            column: 18
          }
        },
        line: 796
      },
      "42": {
        name: "(anonymous_42)",
        decl: {
          start: {
            line: 806,
            column: 21
          },
          end: {
            line: 806,
            column: 22
          }
        },
        loc: {
          start: {
            line: 806,
            column: 37
          },
          end: {
            line: 812,
            column: 17
          }
        },
        line: 806
      },
      "43": {
        name: "(anonymous_43)",
        decl: {
          start: {
            line: 813,
            column: 23
          },
          end: {
            line: 813,
            column: 24
          }
        },
        loc: {
          start: {
            line: 813,
            column: 32
          },
          end: {
            line: 816,
            column: 17
          }
        },
        line: 813
      },
      "44": {
        name: "(anonymous_44)",
        decl: {
          start: {
            line: 818,
            column: 19
          },
          end: {
            line: 818,
            column: 20
          }
        },
        loc: {
          start: {
            line: 818,
            column: 28
          },
          end: {
            line: 818,
            column: 57
          }
        },
        line: 818
      },
      "45": {
        name: "(anonymous_45)",
        decl: {
          start: {
            line: 821,
            column: 4
          },
          end: {
            line: 821,
            column: 5
          }
        },
        loc: {
          start: {
            line: 821,
            column: 37
          },
          end: {
            line: 852,
            column: 5
          }
        },
        line: 821
      },
      "46": {
        name: "(anonymous_46)",
        decl: {
          start: {
            line: 837,
            column: 17
          },
          end: {
            line: 837,
            column: 18
          }
        },
        loc: {
          start: {
            line: 838,
            column: 12
          },
          end: {
            line: 849,
            column: 55
          }
        },
        line: 838
      },
      "47": {
        name: "(anonymous_47)",
        decl: {
          start: {
            line: 848,
            column: 17
          },
          end: {
            line: 848,
            column: 18
          }
        },
        loc: {
          start: {
            line: 848,
            column: 33
          },
          end: {
            line: 848,
            column: 67
          }
        },
        line: 848
      },
      "48": {
        name: "(anonymous_48)",
        decl: {
          start: {
            line: 849,
            column: 19
          },
          end: {
            line: 849,
            column: 20
          }
        },
        loc: {
          start: {
            line: 849,
            column: 28
          },
          end: {
            line: 849,
            column: 54
          }
        },
        line: 849
      },
      "49": {
        name: "(anonymous_49)",
        decl: {
          start: {
            line: 851,
            column: 15
          },
          end: {
            line: 851,
            column: 16
          }
        },
        loc: {
          start: {
            line: 851,
            column: 24
          },
          end: {
            line: 851,
            column: 53
          }
        },
        line: 851
      },
      "50": {
        name: "(anonymous_50)",
        decl: {
          start: {
            line: 854,
            column: 4
          },
          end: {
            line: 854,
            column: 5
          }
        },
        loc: {
          start: {
            line: 854,
            column: 57
          },
          end: {
            line: 905,
            column: 5
          }
        },
        line: 854
      },
      "51": {
        name: "(anonymous_51)",
        decl: {
          start: {
            line: 858,
            column: 74
          },
          end: {
            line: 858,
            column: 75
          }
        },
        loc: {
          start: {
            line: 858,
            column: 92
          },
          end: {
            line: 858,
            column: 112
          }
        },
        line: 858
      },
      "52": {
        name: "(anonymous_52)",
        decl: {
          start: {
            line: 859,
            column: 52
          },
          end: {
            line: 859,
            column: 53
          }
        },
        loc: {
          start: {
            line: 859,
            column: 91
          },
          end: {
            line: 862,
            column: 9
          }
        },
        line: 859
      },
      "53": {
        name: "(anonymous_53)",
        decl: {
          start: {
            line: 868,
            column: 17
          },
          end: {
            line: 868,
            column: 18
          }
        },
        loc: {
          start: {
            line: 868,
            column: 22
          },
          end: {
            line: 890,
            column: 9
          }
        },
        line: 868
      },
      "54": {
        name: "(anonymous_54)",
        decl: {
          start: {
            line: 875,
            column: 53
          },
          end: {
            line: 875,
            column: 54
          }
        },
        loc: {
          start: {
            line: 875,
            column: 93
          },
          end: {
            line: 875,
            column: 106
          }
        },
        line: 875
      },
      "55": {
        name: "(anonymous_55)",
        decl: {
          start: {
            line: 879,
            column: 21
          },
          end: {
            line: 879,
            column: 22
          }
        },
        loc: {
          start: {
            line: 880,
            column: 16
          },
          end: {
            line: 887,
            column: 17
          }
        },
        line: 880
      },
      "56": {
        name: "(anonymous_56)",
        decl: {
          start: {
            line: 885,
            column: 20
          },
          end: {
            line: 885,
            column: 21
          }
        },
        loc: {
          start: {
            line: 886,
            column: 20
          },
          end: {
            line: 886,
            column: 119
          }
        },
        line: 886
      },
      "57": {
        name: "(anonymous_57)",
        decl: {
          start: {
            line: 891,
            column: 17
          },
          end: {
            line: 891,
            column: 18
          }
        },
        loc: {
          start: {
            line: 892,
            column: 12
          },
          end: {
            line: 902,
            column: 55
          }
        },
        line: 892
      },
      "58": {
        name: "(anonymous_58)",
        decl: {
          start: {
            line: 901,
            column: 17
          },
          end: {
            line: 901,
            column: 18
          }
        },
        loc: {
          start: {
            line: 901,
            column: 33
          },
          end: {
            line: 901,
            column: 67
          }
        },
        line: 901
      },
      "59": {
        name: "(anonymous_59)",
        decl: {
          start: {
            line: 902,
            column: 19
          },
          end: {
            line: 902,
            column: 20
          }
        },
        loc: {
          start: {
            line: 902,
            column: 28
          },
          end: {
            line: 902,
            column: 54
          }
        },
        line: 902
      },
      "60": {
        name: "(anonymous_60)",
        decl: {
          start: {
            line: 904,
            column: 15
          },
          end: {
            line: 904,
            column: 16
          }
        },
        loc: {
          start: {
            line: 904,
            column: 24
          },
          end: {
            line: 904,
            column: 50
          }
        },
        line: 904
      },
      "61": {
        name: "(anonymous_61)",
        decl: {
          start: {
            line: 907,
            column: 4
          },
          end: {
            line: 907,
            column: 5
          }
        },
        loc: {
          start: {
            line: 907,
            column: 39
          },
          end: {
            line: 915,
            column: 5
          }
        },
        line: 907
      },
      "62": {
        name: "(anonymous_62)",
        decl: {
          start: {
            line: 917,
            column: 4
          },
          end: {
            line: 917,
            column: 5
          }
        },
        loc: {
          start: {
            line: 917,
            column: 42
          },
          end: {
            line: 921,
            column: 5
          }
        },
        line: 917
      },
      "63": {
        name: "(anonymous_63)",
        decl: {
          start: {
            line: 923,
            column: 4
          },
          end: {
            line: 923,
            column: 5
          }
        },
        loc: {
          start: {
            line: 923,
            column: 34
          },
          end: {
            line: 975,
            column: 5
          }
        },
        line: 923
      },
      "64": {
        name: "(anonymous_64)",
        decl: {
          start: {
            line: 924,
            column: 68
          },
          end: {
            line: 924,
            column: 69
          }
        },
        loc: {
          start: {
            line: 924,
            column: 101
          },
          end: {
            line: 968,
            column: 9
          }
        },
        line: 924
      },
      "65": {
        name: "(anonymous_65)",
        decl: {
          start: {
            line: 931,
            column: 31
          },
          end: {
            line: 931,
            column: 32
          }
        },
        loc: {
          start: {
            line: 931,
            column: 37
          },
          end: {
            line: 967,
            column: 13
          }
        },
        line: 931
      },
      "66": {
        name: "(anonymous_66)",
        decl: {
          start: {
            line: 944,
            column: 24
          },
          end: {
            line: 944,
            column: 25
          }
        },
        loc: {
          start: {
            line: 944,
            column: 50
          },
          end: {
            line: 947,
            column: 25
          }
        },
        line: 944
      },
      "67": {
        name: "(anonymous_67)",
        decl: {
          start: {
            line: 946,
            column: 39
          },
          end: {
            line: 946,
            column: 40
          }
        },
        loc: {
          start: {
            line: 946,
            column: 45
          },
          end: {
            line: 946,
            column: 64
          }
        },
        line: 946
      },
      "68": {
        name: "(anonymous_68)",
        decl: {
          start: {
            line: 948,
            column: 24
          },
          end: {
            line: 948,
            column: 25
          }
        },
        loc: {
          start: {
            line: 948,
            column: 40
          },
          end: {
            line: 964,
            column: 25
          }
        },
        line: 948
      },
      "69": {
        name: "(anonymous_69)",
        decl: {
          start: {
            line: 952,
            column: 47
          },
          end: {
            line: 952,
            column: 48
          }
        },
        loc: {
          start: {
            line: 952,
            column: 53
          },
          end: {
            line: 952,
            column: 72
          }
        },
        line: 952
      },
      "70": {
        name: "(anonymous_70)",
        decl: {
          start: {
            line: 971,
            column: 17
          },
          end: {
            line: 971,
            column: 18
          }
        },
        loc: {
          start: {
            line: 971,
            column: 22
          },
          end: {
            line: 974,
            column: 86
          }
        },
        line: 971
      },
      "71": {
        name: "(anonymous_71)",
        decl: {
          start: {
            line: 972,
            column: 19
          },
          end: {
            line: 972,
            column: 20
          }
        },
        loc: {
          start: {
            line: 972,
            column: 25
          },
          end: {
            line: 972,
            column: 57
          }
        },
        line: 972
      },
      "72": {
        name: "(anonymous_72)",
        decl: {
          start: {
            line: 973,
            column: 17
          },
          end: {
            line: 973,
            column: 18
          }
        },
        loc: {
          start: {
            line: 973,
            column: 33
          },
          end: {
            line: 973,
            column: 71
          }
        },
        line: 973
      },
      "73": {
        name: "(anonymous_73)",
        decl: {
          start: {
            line: 974,
            column: 21
          },
          end: {
            line: 974,
            column: 22
          }
        },
        loc: {
          start: {
            line: 974,
            column: 38
          },
          end: {
            line: 974,
            column: 85
          }
        },
        line: 974
      },
      "74": {
        name: "(anonymous_74)",
        decl: {
          start: {
            line: 977,
            column: 4
          },
          end: {
            line: 977,
            column: 5
          }
        },
        loc: {
          start: {
            line: 977,
            column: 70
          },
          end: {
            line: 981,
            column: 5
          }
        },
        line: 977
      },
      "75": {
        name: "(anonymous_75)",
        decl: {
          start: {
            line: 983,
            column: 4
          },
          end: {
            line: 983,
            column: 5
          }
        },
        loc: {
          start: {
            line: 983,
            column: 55
          },
          end: {
            line: 993,
            column: 5
          }
        },
        line: 983
      },
      "76": {
        name: "(anonymous_76)",
        decl: {
          start: {
            line: 985,
            column: 17
          },
          end: {
            line: 985,
            column: 18
          }
        },
        loc: {
          start: {
            line: 986,
            column: 12
          },
          end: {
            line: 990,
            column: 143
          }
        },
        line: 986
      },
      "77": {
        name: "(anonymous_77)",
        decl: {
          start: {
            line: 990,
            column: 23
          },
          end: {
            line: 990,
            column: 24
          }
        },
        loc: {
          start: {
            line: 990,
            column: 33
          },
          end: {
            line: 990,
            column: 142
          }
        },
        line: 990
      },
      "78": {
        name: "(anonymous_78)",
        decl: {
          start: {
            line: 990,
            column: 102
          },
          end: {
            line: 990,
            column: 103
          }
        },
        loc: {
          start: {
            line: 990,
            column: 111
          },
          end: {
            line: 990,
            column: 141
          }
        },
        line: 990
      },
      "79": {
        name: "(anonymous_79)",
        decl: {
          start: {
            line: 992,
            column: 17
          },
          end: {
            line: 992,
            column: 18
          }
        },
        loc: {
          start: {
            line: 992,
            column: 34
          },
          end: {
            line: 992,
            column: 81
          }
        },
        line: 992
      },
      "80": {
        name: "(anonymous_80)",
        decl: {
          start: {
            line: 996,
            column: 4
          },
          end: {
            line: 996,
            column: 5
          }
        },
        loc: {
          start: {
            line: 996,
            column: 28
          },
          end: {
            line: 998,
            column: 5
          }
        },
        line: 996
      },
      "81": {
        name: "(anonymous_81)",
        decl: {
          start: {
            line: 1003,
            column: 4
          },
          end: {
            line: 1003,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1003,
            column: 37
          },
          end: {
            line: 1067,
            column: 5
          }
        },
        line: 1003
      },
      "82": {
        name: "(anonymous_82)",
        decl: {
          start: {
            line: 1004,
            column: 33
          },
          end: {
            line: 1004,
            column: 34
          }
        },
        loc: {
          start: {
            line: 1004,
            column: 64
          },
          end: {
            line: 1066,
            column: 9
          }
        },
        line: 1004
      },
      "83": {
        name: "(anonymous_83)",
        decl: {
          start: {
            line: 1010,
            column: 24
          },
          end: {
            line: 1010,
            column: 25
          }
        },
        loc: {
          start: {
            line: 1010,
            column: 32
          },
          end: {
            line: 1023,
            column: 13
          }
        },
        line: 1010
      },
      "84": {
        name: "(anonymous_84)",
        decl: {
          start: {
            line: 1016,
            column: 91
          },
          end: {
            line: 1016,
            column: 92
          }
        },
        loc: {
          start: {
            line: 1016,
            column: 96
          },
          end: {
            line: 1022,
            column: 17
          }
        },
        line: 1016
      },
      "85": {
        name: "(anonymous_85)",
        decl: {
          start: {
            line: 1025,
            column: 25
          },
          end: {
            line: 1025,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1025,
            column: 34
          },
          end: {
            line: 1033,
            column: 13
          }
        },
        line: 1025
      },
      "86": {
        name: "(anonymous_86)",
        decl: {
          start: {
            line: 1035,
            column: 25
          },
          end: {
            line: 1035,
            column: 26
          }
        },
        loc: {
          start: {
            line: 1035,
            column: 34
          },
          end: {
            line: 1043,
            column: 13
          }
        },
        line: 1035
      },
      "87": {
        name: "(anonymous_87)",
        decl: {
          start: {
            line: 1045,
            column: 27
          },
          end: {
            line: 1045,
            column: 28
          }
        },
        loc: {
          start: {
            line: 1045,
            column: 38
          },
          end: {
            line: 1045,
            column: 95
          }
        },
        line: 1045
      },
      "88": {
        name: "(anonymous_88)",
        decl: {
          start: {
            line: 1063,
            column: 19
          },
          end: {
            line: 1063,
            column: 20
          }
        },
        loc: {
          start: {
            line: 1063,
            column: 25
          },
          end: {
            line: 1065,
            column: 13
          }
        },
        line: 1063
      },
      "89": {
        name: "(anonymous_89)",
        decl: {
          start: {
            line: 1069,
            column: 4
          },
          end: {
            line: 1069,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1069,
            column: 38
          },
          end: {
            line: 1106,
            column: 5
          }
        },
        line: 1069
      },
      "90": {
        name: "(anonymous_90)",
        decl: {
          start: {
            line: 1071,
            column: 17
          },
          end: {
            line: 1071,
            column: 18
          }
        },
        loc: {
          start: {
            line: 1072,
            column: 12
          },
          end: {
            line: 1104,
            column: 13
          }
        },
        line: 1072
      },
      "91": {
        name: "(anonymous_91)",
        decl: {
          start: {
            line: 1081,
            column: 16
          },
          end: {
            line: 1081,
            column: 17
          }
        },
        loc: {
          start: {
            line: 1081,
            column: 26
          },
          end: {
            line: 1088,
            column: 13
          }
        },
        line: 1081
      },
      "92": {
        name: "(anonymous_92)",
        decl: {
          start: {
            line: 1089,
            column: 17
          },
          end: {
            line: 1089,
            column: 18
          }
        },
        loc: {
          start: {
            line: 1089,
            column: 22
          },
          end: {
            line: 1089,
            column: 26
          }
        },
        line: 1089
      },
      "93": {
        name: "(anonymous_93)",
        decl: {
          start: {
            line: 1090,
            column: 23
          },
          end: {
            line: 1090,
            column: 24
          }
        },
        loc: {
          start: {
            line: 1090,
            column: 33
          },
          end: {
            line: 1103,
            column: 35
          }
        },
        line: 1090
      },
      "94": {
        name: "(anonymous_94)",
        decl: {
          start: {
            line: 1091,
            column: 26
          },
          end: {
            line: 1091,
            column: 27
          }
        },
        loc: {
          start: {
            line: 1091,
            column: 35
          },
          end: {
            line: 1101,
            column: 17
          }
        },
        line: 1091
      },
      "95": {
        name: "(anonymous_95)",
        decl: {
          start: {
            line: 1108,
            column: 4
          },
          end: {
            line: 1108,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1108,
            column: 28
          },
          end: {
            line: 1113,
            column: 5
          }
        },
        line: 1108
      },
      "96": {
        name: "(anonymous_96)",
        decl: {
          start: {
            line: 1115,
            column: 4
          },
          end: {
            line: 1115,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1115,
            column: 58
          },
          end: {
            line: 1123,
            column: 5
          }
        },
        line: 1115
      },
      "97": {
        name: "(anonymous_97)",
        decl: {
          start: {
            line: 1125,
            column: 4
          },
          end: {
            line: 1125,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1125,
            column: 30
          },
          end: {
            line: 1140,
            column: 5
          }
        },
        line: 1125
      },
      "98": {
        name: "(anonymous_98)",
        decl: {
          start: {
            line: 1142,
            column: 4
          },
          end: {
            line: 1142,
            column: 5
          }
        },
        loc: {
          start: {
            line: 1142,
            column: 38
          },
          end: {
            line: 1151,
            column: 5
          }
        },
        line: 1142
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 399,
            column: 12
          },
          end: {
            line: 406,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 399,
            column: 12
          },
          end: {
            line: 406,
            column: 13
          }
        }, {
          start: {
            line: 399,
            column: 12
          },
          end: {
            line: 406,
            column: 13
          }
        }],
        line: 399
      },
      "1": {
        loc: {
          start: {
            line: 402,
            column: 16
          },
          end: {
            line: 405,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 402,
            column: 16
          },
          end: {
            line: 405,
            column: 17
          }
        }, {
          start: {
            line: 402,
            column: 16
          },
          end: {
            line: 405,
            column: 17
          }
        }],
        line: 402
      },
      "2": {
        loc: {
          start: {
            line: 427,
            column: 22
          },
          end: {
            line: 427,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 427,
            column: 22
          },
          end: {
            line: 427,
            column: 40
          }
        }, {
          start: {
            line: 427,
            column: 44
          },
          end: {
            line: 427,
            column: 58
          }
        }],
        line: 427
      },
      "3": {
        loc: {
          start: {
            line: 430,
            column: 32
          },
          end: {
            line: 430,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 430,
            column: 32
          },
          end: {
            line: 430,
            column: 45
          }
        }, {
          start: {
            line: 430,
            column: 49
          },
          end: {
            line: 430,
            column: 64
          }
        }],
        line: 430
      },
      "4": {
        loc: {
          start: {
            line: 431,
            column: 19
          },
          end: {
            line: 431,
            column: 50
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 431,
            column: 19
          },
          end: {
            line: 431,
            column: 37
          }
        }, {
          start: {
            line: 431,
            column: 41
          },
          end: {
            line: 431,
            column: 50
          }
        }],
        line: 431
      },
      "5": {
        loc: {
          start: {
            line: 432,
            column: 16
          },
          end: {
            line: 432,
            column: 46
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 432,
            column: 16
          },
          end: {
            line: 432,
            column: 31
          }
        }, {
          start: {
            line: 432,
            column: 35
          },
          end: {
            line: 432,
            column: 46
          }
        }],
        line: 432
      },
      "6": {
        loc: {
          start: {
            line: 446,
            column: 8
          },
          end: {
            line: 447,
            column: 53
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 446,
            column: 8
          },
          end: {
            line: 447,
            column: 53
          }
        }, {
          start: {
            line: 446,
            column: 8
          },
          end: {
            line: 447,
            column: 53
          }
        }],
        line: 446
      },
      "7": {
        loc: {
          start: {
            line: 446,
            column: 12
          },
          end: {
            line: 446,
            column: 87
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 446,
            column: 12
          },
          end: {
            line: 446,
            column: 41
          }
        }, {
          start: {
            line: 446,
            column: 45
          },
          end: {
            line: 446,
            column: 76
          }
        }, {
          start: {
            line: 446,
            column: 80
          },
          end: {
            line: 446,
            column: 87
          }
        }],
        line: 446
      },
      "8": {
        loc: {
          start: {
            line: 505,
            column: 21
          },
          end: {
            line: 505,
            column: 52
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 505,
            column: 21
          },
          end: {
            line: 505,
            column: 35
          }
        }, {
          start: {
            line: 505,
            column: 39
          },
          end: {
            line: 505,
            column: 52
          }
        }],
        line: 505
      },
      "9": {
        loc: {
          start: {
            line: 506,
            column: 25
          },
          end: {
            line: 506,
            column: 148
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 506,
            column: 26
          },
          end: {
            line: 506,
            column: 84
          }
        }, {
          start: {
            line: 506,
            column: 89
          },
          end: {
            line: 506,
            column: 121
          }
        }, {
          start: {
            line: 506,
            column: 125
          },
          end: {
            line: 506,
            column: 148
          }
        }],
        line: 506
      },
      "10": {
        loc: {
          start: {
            line: 506,
            column: 26
          },
          end: {
            line: 506,
            column: 84
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 506,
            column: 60
          },
          end: {
            line: 506,
            column: 64
          }
        }, {
          start: {
            line: 506,
            column: 67
          },
          end: {
            line: 506,
            column: 84
          }
        }],
        line: 506
      },
      "11": {
        loc: {
          start: {
            line: 508,
            column: 8
          },
          end: {
            line: 514,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 508,
            column: 8
          },
          end: {
            line: 514,
            column: 9
          }
        }, {
          start: {
            line: 508,
            column: 8
          },
          end: {
            line: 514,
            column: 9
          }
        }],
        line: 508
      },
      "12": {
        loc: {
          start: {
            line: 508,
            column: 12
          },
          end: {
            line: 508,
            column: 93
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 508,
            column: 12
          },
          end: {
            line: 508,
            column: 47
          }
        }, {
          start: {
            line: 508,
            column: 51
          },
          end: {
            line: 508,
            column: 93
          }
        }],
        line: 508
      },
      "13": {
        loc: {
          start: {
            line: 509,
            column: 12
          },
          end: {
            line: 513,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 509,
            column: 12
          },
          end: {
            line: 513,
            column: 13
          }
        }, {
          start: {
            line: 509,
            column: 12
          },
          end: {
            line: 513,
            column: 13
          }
        }],
        line: 509
      },
      "14": {
        loc: {
          start: {
            line: 516,
            column: 8
          },
          end: {
            line: 518,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 516,
            column: 8
          },
          end: {
            line: 518,
            column: 9
          }
        }, {
          start: {
            line: 516,
            column: 8
          },
          end: {
            line: 518,
            column: 9
          }
        }],
        line: 516
      },
      "15": {
        loc: {
          start: {
            line: 520,
            column: 8
          },
          end: {
            line: 522,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 520,
            column: 8
          },
          end: {
            line: 522,
            column: 9
          }
        }, {
          start: {
            line: 520,
            column: 8
          },
          end: {
            line: 522,
            column: 9
          }
        }],
        line: 520
      },
      "16": {
        loc: {
          start: {
            line: 524,
            column: 8
          },
          end: {
            line: 526,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 524,
            column: 8
          },
          end: {
            line: 526,
            column: 9
          }
        }, {
          start: {
            line: 524,
            column: 8
          },
          end: {
            line: 526,
            column: 9
          }
        }],
        line: 524
      },
      "17": {
        loc: {
          start: {
            line: 528,
            column: 8
          },
          end: {
            line: 534,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 528,
            column: 8
          },
          end: {
            line: 534,
            column: 9
          }
        }, {
          start: {
            line: 528,
            column: 8
          },
          end: {
            line: 534,
            column: 9
          }
        }],
        line: 528
      },
      "18": {
        loc: {
          start: {
            line: 529,
            column: 12
          },
          end: {
            line: 533,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 529,
            column: 12
          },
          end: {
            line: 533,
            column: 13
          }
        }, {
          start: {
            line: 529,
            column: 12
          },
          end: {
            line: 533,
            column: 13
          }
        }],
        line: 529
      },
      "19": {
        loc: {
          start: {
            line: 529,
            column: 16
          },
          end: {
            line: 529,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 529,
            column: 16
          },
          end: {
            line: 529,
            column: 29
          }
        }, {
          start: {
            line: 529,
            column: 33
          },
          end: {
            line: 529,
            column: 55
          }
        }],
        line: 529
      },
      "20": {
        loc: {
          start: {
            line: 536,
            column: 8
          },
          end: {
            line: 538,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 536,
            column: 8
          },
          end: {
            line: 538,
            column: 9
          }
        }, {
          start: {
            line: 536,
            column: 8
          },
          end: {
            line: 538,
            column: 9
          }
        }],
        line: 536
      },
      "21": {
        loc: {
          start: {
            line: 540,
            column: 8
          },
          end: {
            line: 542,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 540,
            column: 8
          },
          end: {
            line: 542,
            column: 9
          }
        }, {
          start: {
            line: 540,
            column: 8
          },
          end: {
            line: 542,
            column: 9
          }
        }],
        line: 540
      },
      "22": {
        loc: {
          start: {
            line: 544,
            column: 8
          },
          end: {
            line: 546,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 544,
            column: 8
          },
          end: {
            line: 546,
            column: 9
          }
        }, {
          start: {
            line: 544,
            column: 8
          },
          end: {
            line: 546,
            column: 9
          }
        }],
        line: 544
      },
      "23": {
        loc: {
          start: {
            line: 548,
            column: 8
          },
          end: {
            line: 553,
            column: 10
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 548,
            column: 8
          },
          end: {
            line: 553,
            column: 10
          }
        }, {
          start: {
            line: 548,
            column: 8
          },
          end: {
            line: 553,
            column: 10
          }
        }],
        line: 548
      },
      "24": {
        loc: {
          start: {
            line: 555,
            column: 9
          },
          end: {
            line: 560,
            column: 10
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 555,
            column: 9
          },
          end: {
            line: 560,
            column: 10
          }
        }, {
          start: {
            line: 555,
            column: 9
          },
          end: {
            line: 560,
            column: 10
          }
        }],
        line: 555
      },
      "25": {
        loc: {
          start: {
            line: 568,
            column: 8
          },
          end: {
            line: 574,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 568,
            column: 8
          },
          end: {
            line: 574,
            column: 9
          }
        }, {
          start: {
            line: 568,
            column: 8
          },
          end: {
            line: 574,
            column: 9
          }
        }],
        line: 568
      },
      "26": {
        loc: {
          start: {
            line: 569,
            column: 12
          },
          end: {
            line: 571,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 569,
            column: 12
          },
          end: {
            line: 571,
            column: 13
          }
        }, {
          start: {
            line: 569,
            column: 12
          },
          end: {
            line: 571,
            column: 13
          }
        }],
        line: 569
      },
      "27": {
        loc: {
          start: {
            line: 582,
            column: 8
          },
          end: {
            line: 583,
            column: 61
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 582,
            column: 8
          },
          end: {
            line: 583,
            column: 61
          }
        }, {
          start: {
            line: 582,
            column: 8
          },
          end: {
            line: 583,
            column: 61
          }
        }],
        line: 582
      },
      "28": {
        loc: {
          start: {
            line: 585,
            column: 8
          },
          end: {
            line: 586,
            column: 47
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 585,
            column: 8
          },
          end: {
            line: 586,
            column: 47
          }
        }, {
          start: {
            line: 585,
            column: 8
          },
          end: {
            line: 586,
            column: 47
          }
        }],
        line: 585
      },
      "29": {
        loc: {
          start: {
            line: 588,
            column: 8
          },
          end: {
            line: 589,
            column: 55
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 588,
            column: 8
          },
          end: {
            line: 589,
            column: 55
          }
        }, {
          start: {
            line: 588,
            column: 8
          },
          end: {
            line: 589,
            column: 55
          }
        }],
        line: 588
      },
      "30": {
        loc: {
          start: {
            line: 591,
            column: 26
          },
          end: {
            line: 593,
            column: 40
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 592,
            column: 14
          },
          end: {
            line: 592,
            column: 39
          }
        }, {
          start: {
            line: 593,
            column: 14
          },
          end: {
            line: 593,
            column: 40
          }
        }],
        line: 591
      },
      "31": {
        loc: {
          start: {
            line: 606,
            column: 28
          },
          end: {
            line: 606,
            column: 40
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 606,
            column: 35
          },
          end: {
            line: 606,
            column: 40
          }
        }],
        line: 606
      },
      "32": {
        loc: {
          start: {
            line: 609,
            column: 12
          },
          end: {
            line: 638,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 609,
            column: 12
          },
          end: {
            line: 638,
            column: 13
          }
        }, {
          start: {
            line: 609,
            column: 12
          },
          end: {
            line: 638,
            column: 13
          }
        }],
        line: 609
      },
      "33": {
        loc: {
          start: {
            line: 613,
            column: 16
          },
          end: {
            line: 634,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 613,
            column: 16
          },
          end: {
            line: 634,
            column: 17
          }
        }, {
          start: {
            line: 613,
            column: 16
          },
          end: {
            line: 634,
            column: 17
          }
        }],
        line: 613
      },
      "34": {
        loc: {
          start: {
            line: 613,
            column: 20
          },
          end: {
            line: 613,
            column: 48
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 613,
            column: 20
          },
          end: {
            line: 613,
            column: 30
          }
        }, {
          start: {
            line: 613,
            column: 34
          },
          end: {
            line: 613,
            column: 48
          }
        }],
        line: 613
      },
      "35": {
        loc: {
          start: {
            line: 619,
            column: 37
          },
          end: {
            line: 619,
            column: 70
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 619,
            column: 37
          },
          end: {
            line: 619,
            column: 48
          }
        }, {
          start: {
            line: 619,
            column: 52
          },
          end: {
            line: 619,
            column: 70
          }
        }],
        line: 619
      },
      "36": {
        loc: {
          start: {
            line: 621,
            column: 24
          },
          end: {
            line: 623,
            column: 25
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 621,
            column: 24
          },
          end: {
            line: 623,
            column: 25
          }
        }, {
          start: {
            line: 621,
            column: 24
          },
          end: {
            line: 623,
            column: 25
          }
        }],
        line: 621
      },
      "37": {
        loc: {
          start: {
            line: 621,
            column: 28
          },
          end: {
            line: 621,
            column: 79
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 621,
            column: 29
          },
          end: {
            line: 621,
            column: 51
          }
        }, {
          start: {
            line: 621,
            column: 57
          },
          end: {
            line: 621,
            column: 78
          }
        }],
        line: 621
      },
      "38": {
        loc: {
          start: {
            line: 626,
            column: 24
          },
          end: {
            line: 627,
            column: 52
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 626,
            column: 24
          },
          end: {
            line: 627,
            column: 52
          }
        }, {
          start: {
            line: 626,
            column: 24
          },
          end: {
            line: 627,
            column: 52
          }
        }],
        line: 626
      },
      "39": {
        loc: {
          start: {
            line: 640,
            column: 36
          },
          end: {
            line: 640,
            column: 137
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 640,
            column: 36
          },
          end: {
            line: 640,
            column: 86
          }
        }, {
          start: {
            line: 640,
            column: 90
          },
          end: {
            line: 640,
            column: 137
          }
        }],
        line: 640
      },
      "40": {
        loc: {
          start: {
            line: 642,
            column: 12
          },
          end: {
            line: 654,
            column: 13
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 643,
            column: 16
          },
          end: {
            line: 644,
            column: 93
          }
        }, {
          start: {
            line: 646,
            column: 16
          },
          end: {
            line: 647,
            column: 91
          }
        }, {
          start: {
            line: 649,
            column: 16
          },
          end: {
            line: 650,
            column: 84
          }
        }, {
          start: {
            line: 652,
            column: 16
          },
          end: {
            line: 653,
            column: 84
          }
        }],
        line: 642
      },
      "41": {
        loc: {
          start: {
            line: 657,
            column: 15
          },
          end: {
            line: 657,
            column: 39
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 657,
            column: 22
          },
          end: {
            line: 657,
            column: 33
          }
        }, {
          start: {
            line: 657,
            column: 36
          },
          end: {
            line: 657,
            column: 39
          }
        }],
        line: 657
      },
      "42": {
        loc: {
          start: {
            line: 663,
            column: 8
          },
          end: {
            line: 663,
            column: 23
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 663,
            column: 22
          },
          end: {
            line: 663,
            column: 23
          }
        }],
        line: 663
      },
      "43": {
        loc: {
          start: {
            line: 669,
            column: 12
          },
          end: {
            line: 672,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 669,
            column: 12
          },
          end: {
            line: 672,
            column: 13
          }
        }, {
          start: {
            line: 669,
            column: 12
          },
          end: {
            line: 672,
            column: 13
          }
        }],
        line: 669
      },
      "44": {
        loc: {
          start: {
            line: 669,
            column: 16
          },
          end: {
            line: 669,
            column: 99
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 669,
            column: 16
          },
          end: {
            line: 669,
            column: 47
          }
        }, {
          start: {
            line: 669,
            column: 51
          },
          end: {
            line: 669,
            column: 72
          }
        }, {
          start: {
            line: 669,
            column: 76
          },
          end: {
            line: 669,
            column: 99
          }
        }],
        line: 669
      },
      "45": {
        loc: {
          start: {
            line: 681,
            column: 8
          },
          end: {
            line: 682,
            column: 71
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 681,
            column: 8
          },
          end: {
            line: 682,
            column: 71
          }
        }, {
          start: {
            line: 681,
            column: 8
          },
          end: {
            line: 682,
            column: 71
          }
        }],
        line: 681
      },
      "46": {
        loc: {
          start: {
            line: 681,
            column: 12
          },
          end: {
            line: 681,
            column: 110
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 681,
            column: 12
          },
          end: {
            line: 681,
            column: 54
          }
        }, {
          start: {
            line: 681,
            column: 58
          },
          end: {
            line: 681,
            column: 110
          }
        }],
        line: 681
      },
      "47": {
        loc: {
          start: {
            line: 690,
            column: 20
          },
          end: {
            line: 692,
            column: 44
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 691,
            column: 14
          },
          end: {
            line: 691,
            column: 95
          }
        }, {
          start: {
            line: 692,
            column: 14
          },
          end: {
            line: 692,
            column: 44
          }
        }],
        line: 690
      },
      "48": {
        loc: {
          start: {
            line: 693,
            column: 23
          },
          end: {
            line: 693,
            column: 59
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 693,
            column: 45
          },
          end: {
            line: 693,
            column: 50
          }
        }, {
          start: {
            line: 693,
            column: 53
          },
          end: {
            line: 693,
            column: 59
          }
        }],
        line: 693
      },
      "49": {
        loc: {
          start: {
            line: 694,
            column: 21
          },
          end: {
            line: 701,
            column: 15
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 695,
            column: 14
          },
          end: {
            line: 695,
            column: 23
          }
        }, {
          start: {
            line: 696,
            column: 14
          },
          end: {
            line: 701,
            column: 15
          }
        }],
        line: 694
      },
      "50": {
        loc: {
          start: {
            line: 719,
            column: 23
          },
          end: {
            line: 721,
            column: 63
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 720,
            column: 18
          },
          end: {
            line: 720,
            column: 66
          }
        }, {
          start: {
            line: 721,
            column: 18
          },
          end: {
            line: 721,
            column: 63
          }
        }],
        line: 719
      },
      "51": {
        loc: {
          start: {
            line: 719,
            column: 23
          },
          end: {
            line: 719,
            column: 64
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 719,
            column: 23
          },
          end: {
            line: 719,
            column: 42
          }
        }, {
          start: {
            line: 719,
            column: 46
          },
          end: {
            line: 719,
            column: 64
          }
        }],
        line: 719
      },
      "52": {
        loc: {
          start: {
            line: 751,
            column: 20
          },
          end: {
            line: 758,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 751,
            column: 20
          },
          end: {
            line: 758,
            column: 21
          }
        }, {
          start: {
            line: 751,
            column: 20
          },
          end: {
            line: 758,
            column: 21
          }
        }],
        line: 751
      },
      "53": {
        loc: {
          start: {
            line: 755,
            column: 27
          },
          end: {
            line: 758,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 755,
            column: 27
          },
          end: {
            line: 758,
            column: 21
          }
        }, {
          start: {
            line: 755,
            column: 27
          },
          end: {
            line: 758,
            column: 21
          }
        }],
        line: 755
      },
      "54": {
        loc: {
          start: {
            line: 771,
            column: 8
          },
          end: {
            line: 773,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 771,
            column: 8
          },
          end: {
            line: 773,
            column: 9
          }
        }, {
          start: {
            line: 771,
            column: 8
          },
          end: {
            line: 773,
            column: 9
          }
        }],
        line: 771
      },
      "55": {
        loc: {
          start: {
            line: 771,
            column: 12
          },
          end: {
            line: 771,
            column: 63
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 771,
            column: 13
          },
          end: {
            line: 771,
            column: 35
          }
        }, {
          start: {
            line: 771,
            column: 41
          },
          end: {
            line: 771,
            column: 62
          }
        }],
        line: 771
      },
      "56": {
        loc: {
          start: {
            line: 774,
            column: 8
          },
          end: {
            line: 775,
            column: 65
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 774,
            column: 8
          },
          end: {
            line: 775,
            column: 65
          }
        }, {
          start: {
            line: 774,
            column: 8
          },
          end: {
            line: 775,
            column: 65
          }
        }],
        line: 774
      },
      "57": {
        loc: {
          start: {
            line: 779,
            column: 8
          },
          end: {
            line: 780,
            column: 56
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 779,
            column: 8
          },
          end: {
            line: 780,
            column: 56
          }
        }, {
          start: {
            line: 779,
            column: 8
          },
          end: {
            line: 780,
            column: 56
          }
        }],
        line: 779
      },
      "58": {
        loc: {
          start: {
            line: 784,
            column: 12
          },
          end: {
            line: 785,
            column: 23
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 784,
            column: 12
          },
          end: {
            line: 785,
            column: 23
          }
        }, {
          start: {
            line: 784,
            column: 12
          },
          end: {
            line: 785,
            column: 23
          }
        }],
        line: 784
      },
      "59": {
        loc: {
          start: {
            line: 807,
            column: 20
          },
          end: {
            line: 810,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 807,
            column: 20
          },
          end: {
            line: 810,
            column: 21
          }
        }, {
          start: {
            line: 807,
            column: 20
          },
          end: {
            line: 810,
            column: 21
          }
        }],
        line: 807
      },
      "60": {
        loc: {
          start: {
            line: 807,
            column: 24
          },
          end: {
            line: 807,
            column: 96
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 807,
            column: 24
          },
          end: {
            line: 807,
            column: 36
          }
        }, {
          start: {
            line: 807,
            column: 40
          },
          end: {
            line: 807,
            column: 61
          }
        }, {
          start: {
            line: 807,
            column: 65
          },
          end: {
            line: 807,
            column: 96
          }
        }],
        line: 807
      },
      "61": {
        loc: {
          start: {
            line: 823,
            column: 8
          },
          end: {
            line: 826,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 823,
            column: 8
          },
          end: {
            line: 826,
            column: 9
          }
        }, {
          start: {
            line: 823,
            column: 8
          },
          end: {
            line: 826,
            column: 9
          }
        }],
        line: 823
      },
      "62": {
        loc: {
          start: {
            line: 823,
            column: 12
          },
          end: {
            line: 823,
            column: 114
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 823,
            column: 12
          },
          end: {
            line: 823,
            column: 42
          }
        }, {
          start: {
            line: 823,
            column: 46
          },
          end: {
            line: 823,
            column: 59
          }
        }, {
          start: {
            line: 823,
            column: 63
          },
          end: {
            line: 823,
            column: 114
          }
        }],
        line: 823
      },
      "63": {
        loc: {
          start: {
            line: 830,
            column: 8
          },
          end: {
            line: 831,
            column: 61
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 830,
            column: 8
          },
          end: {
            line: 831,
            column: 61
          }
        }, {
          start: {
            line: 830,
            column: 8
          },
          end: {
            line: 831,
            column: 61
          }
        }],
        line: 830
      },
      "64": {
        loc: {
          start: {
            line: 830,
            column: 12
          },
          end: {
            line: 830,
            column: 98
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 830,
            column: 12
          },
          end: {
            line: 830,
            column: 39
          }
        }, {
          start: {
            line: 830,
            column: 43
          },
          end: {
            line: 830,
            column: 63
          }
        }, {
          start: {
            line: 830,
            column: 67
          },
          end: {
            line: 830,
            column: 98
          }
        }],
        line: 830
      },
      "65": {
        loc: {
          start: {
            line: 858,
            column: 92
          },
          end: {
            line: 858,
            column: 112
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 858,
            column: 92
          },
          end: {
            line: 858,
            column: 102
          }
        }, {
          start: {
            line: 858,
            column: 106
          },
          end: {
            line: 858,
            column: 112
          }
        }],
        line: 858
      },
      "66": {
        loc: {
          start: {
            line: 908,
            column: 8
          },
          end: {
            line: 913,
            column: 68
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 908,
            column: 8
          },
          end: {
            line: 913,
            column: 68
          }
        }, {
          start: {
            line: 908,
            column: 8
          },
          end: {
            line: 913,
            column: 68
          }
        }],
        line: 908
      },
      "67": {
        loc: {
          start: {
            line: 911,
            column: 13
          },
          end: {
            line: 913,
            column: 68
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 911,
            column: 13
          },
          end: {
            line: 913,
            column: 68
          }
        }, {
          start: {
            line: 911,
            column: 13
          },
          end: {
            line: 913,
            column: 68
          }
        }],
        line: 911
      },
      "68": {
        loc: {
          start: {
            line: 911,
            column: 17
          },
          end: {
            line: 911,
            column: 58
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 911,
            column: 17
          },
          end: {
            line: 911,
            column: 36
          }
        }, {
          start: {
            line: 911,
            column: 40
          },
          end: {
            line: 911,
            column: 58
          }
        }],
        line: 911
      },
      "69": {
        loc: {
          start: {
            line: 918,
            column: 15
          },
          end: {
            line: 920,
            column: 58
          }
        },
        type: "cond-expr",
        locations: [{
          start: {
            line: 919,
            column: 10
          },
          end: {
            line: 919,
            column: 57
          }
        }, {
          start: {
            line: 920,
            column: 10
          },
          end: {
            line: 920,
            column: 58
          }
        }],
        line: 918
      },
      "70": {
        loc: {
          start: {
            line: 932,
            column: 16
          },
          end: {
            line: 966,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 932,
            column: 16
          },
          end: {
            line: 966,
            column: 17
          }
        }, {
          start: {
            line: 932,
            column: 16
          },
          end: {
            line: 966,
            column: 17
          }
        }],
        line: 932
      },
      "71": {
        loc: {
          start: {
            line: 949,
            column: 28
          },
          end: {
            line: 963,
            column: 29
          }
        },
        type: "switch",
        locations: [{
          start: {
            line: 950,
            column: 32
          },
          end: {
            line: 953,
            column: 42
          }
        }, {
          start: {
            line: 955,
            column: 32
          },
          end: {
            line: 957,
            column: 42
          }
        }, {
          start: {
            line: 959,
            column: 32
          },
          end: {
            line: 962,
            column: 42
          }
        }],
        line: 949
      },
      "72": {
        loc: {
          start: {
            line: 978,
            column: 8
          },
          end: {
            line: 979,
            column: 53
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 978,
            column: 8
          },
          end: {
            line: 979,
            column: 53
          }
        }, {
          start: {
            line: 978,
            column: 8
          },
          end: {
            line: 979,
            column: 53
          }
        }],
        line: 978
      },
      "73": {
        loc: {
          start: {
            line: 1027,
            column: 16
          },
          end: {
            line: 1027,
            column: 43
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1027,
            column: 16
          },
          end: {
            line: 1027,
            column: 43
          }
        }, {
          start: {
            line: 1027,
            column: 16
          },
          end: {
            line: 1027,
            column: 43
          }
        }],
        line: 1027
      },
      "74": {
        loc: {
          start: {
            line: 1031,
            column: 16
          },
          end: {
            line: 1031,
            column: 49
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1031,
            column: 16
          },
          end: {
            line: 1031,
            column: 22
          }
        }, {
          start: {
            line: 1031,
            column: 26
          },
          end: {
            line: 1031,
            column: 49
          }
        }],
        line: 1031
      },
      "75": {
        loc: {
          start: {
            line: 1037,
            column: 16
          },
          end: {
            line: 1037,
            column: 43
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1037,
            column: 16
          },
          end: {
            line: 1037,
            column: 43
          }
        }, {
          start: {
            line: 1037,
            column: 16
          },
          end: {
            line: 1037,
            column: 43
          }
        }],
        line: 1037
      },
      "76": {
        loc: {
          start: {
            line: 1041,
            column: 16
          },
          end: {
            line: 1041,
            column: 49
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1041,
            column: 16
          },
          end: {
            line: 1041,
            column: 22
          }
        }, {
          start: {
            line: 1041,
            column: 26
          },
          end: {
            line: 1041,
            column: 49
          }
        }],
        line: 1041
      },
      "77": {
        loc: {
          start: {
            line: 1045,
            column: 38
          },
          end: {
            line: 1045,
            column: 95
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1045,
            column: 38
          },
          end: {
            line: 1045,
            column: 50
          }
        }, {
          start: {
            line: 1045,
            column: 54
          },
          end: {
            line: 1045,
            column: 95
          }
        }],
        line: 1045
      },
      "78": {
        loc: {
          start: {
            line: 1047,
            column: 12
          },
          end: {
            line: 1057,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1047,
            column: 12
          },
          end: {
            line: 1057,
            column: 13
          }
        }, {
          start: {
            line: 1047,
            column: 12
          },
          end: {
            line: 1057,
            column: 13
          }
        }],
        line: 1047
      },
      "79": {
        loc: {
          start: {
            line: 1047,
            column: 16
          },
          end: {
            line: 1047,
            column: 61
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1047,
            column: 17
          },
          end: {
            line: 1047,
            column: 33
          }
        }, {
          start: {
            line: 1047,
            column: 39
          },
          end: {
            line: 1047,
            column: 60
          }
        }],
        line: 1047
      },
      "80": {
        loc: {
          start: {
            line: 1064,
            column: 16
          },
          end: {
            line: 1064,
            column: 75
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1064,
            column: 16
          },
          end: {
            line: 1064,
            column: 75
          }
        }, {
          start: {
            line: 1064,
            column: 16
          },
          end: {
            line: 1064,
            column: 75
          }
        }],
        line: 1064
      },
      "81": {
        loc: {
          start: {
            line: 1064,
            column: 20
          },
          end: {
            line: 1064,
            column: 62
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1064,
            column: 20
          },
          end: {
            line: 1064,
            column: 39
          }
        }, {
          start: {
            line: 1064,
            column: 43
          },
          end: {
            line: 1064,
            column: 62
          }
        }],
        line: 1064
      },
      "82": {
        loc: {
          start: {
            line: 1082,
            column: 16
          },
          end: {
            line: 1083,
            column: 55
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1082,
            column: 16
          },
          end: {
            line: 1083,
            column: 55
          }
        }, {
          start: {
            line: 1082,
            column: 16
          },
          end: {
            line: 1083,
            column: 55
          }
        }],
        line: 1082
      },
      "83": {
        loc: {
          start: {
            line: 1085,
            column: 16
          },
          end: {
            line: 1087,
            column: 17
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1085,
            column: 16
          },
          end: {
            line: 1087,
            column: 17
          }
        }, {
          start: {
            line: 1085,
            column: 16
          },
          end: {
            line: 1087,
            column: 17
          }
        }],
        line: 1085
      },
      "84": {
        loc: {
          start: {
            line: 1085,
            column: 20
          },
          end: {
            line: 1085,
            column: 74
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 1085,
            column: 21
          },
          end: {
            line: 1085,
            column: 46
          }
        }, {
          start: {
            line: 1085,
            column: 52
          },
          end: {
            line: 1085,
            column: 73
          }
        }],
        line: 1085
      },
      "85": {
        loc: {
          start: {
            line: 1092,
            column: 20
          },
          end: {
            line: 1098,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1092,
            column: 20
          },
          end: {
            line: 1098,
            column: 21
          }
        }, {
          start: {
            line: 1092,
            column: 20
          },
          end: {
            line: 1098,
            column: 21
          }
        }],
        line: 1092
      },
      "86": {
        loc: {
          start: {
            line: 1096,
            column: 27
          },
          end: {
            line: 1098,
            column: 21
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1096,
            column: 27
          },
          end: {
            line: 1098,
            column: 21
          }
        }, {
          start: {
            line: 1096,
            column: 27
          },
          end: {
            line: 1098,
            column: 21
          }
        }],
        line: 1096
      },
      "87": {
        loc: {
          start: {
            line: 1115,
            column: 24
          },
          end: {
            line: 1115,
            column: 48
          }
        },
        type: "default-arg",
        locations: [{
          start: {
            line: 1115,
            column: 46
          },
          end: {
            line: 1115,
            column: 48
          }
        }],
        line: 1115
      },
      "88": {
        loc: {
          start: {
            line: 1118,
            column: 8
          },
          end: {
            line: 1120,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1118,
            column: 8
          },
          end: {
            line: 1120,
            column: 9
          }
        }, {
          start: {
            line: 1118,
            column: 8
          },
          end: {
            line: 1120,
            column: 9
          }
        }],
        line: 1118
      },
      "89": {
        loc: {
          start: {
            line: 1126,
            column: 8
          },
          end: {
            line: 1128,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1126,
            column: 8
          },
          end: {
            line: 1128,
            column: 9
          }
        }, {
          start: {
            line: 1126,
            column: 8
          },
          end: {
            line: 1128,
            column: 9
          }
        }],
        line: 1126
      },
      "90": {
        loc: {
          start: {
            line: 1131,
            column: 8
          },
          end: {
            line: 1133,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1131,
            column: 8
          },
          end: {
            line: 1133,
            column: 9
          }
        }, {
          start: {
            line: 1131,
            column: 8
          },
          end: {
            line: 1133,
            column: 9
          }
        }],
        line: 1131
      },
      "91": {
        loc: {
          start: {
            line: 1135,
            column: 8
          },
          end: {
            line: 1137,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1135,
            column: 8
          },
          end: {
            line: 1137,
            column: 9
          }
        }, {
          start: {
            line: 1135,
            column: 8
          },
          end: {
            line: 1137,
            column: 9
          }
        }],
        line: 1135
      },
      "92": {
        loc: {
          start: {
            line: 1147,
            column: 12
          },
          end: {
            line: 1149,
            column: 13
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 1147,
            column: 12
          },
          end: {
            line: 1149,
            column: 13
          }
        }, {
          start: {
            line: 1147,
            column: 12
          },
          end: {
            line: 1149,
            column: 13
          }
        }],
        line: 1147
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
      "175": 0,
      "176": 0,
      "177": 0,
      "178": 0,
      "179": 0,
      "180": 0,
      "181": 0,
      "182": 0,
      "183": 0,
      "184": 0,
      "185": 0,
      "186": 0,
      "187": 0,
      "188": 0,
      "189": 0,
      "190": 0,
      "191": 0,
      "192": 0,
      "193": 0,
      "194": 0,
      "195": 0,
      "196": 0,
      "197": 0,
      "198": 0,
      "199": 0,
      "200": 0,
      "201": 0,
      "202": 0,
      "203": 0,
      "204": 0,
      "205": 0,
      "206": 0,
      "207": 0,
      "208": 0,
      "209": 0,
      "210": 0,
      "211": 0,
      "212": 0,
      "213": 0,
      "214": 0,
      "215": 0,
      "216": 0,
      "217": 0,
      "218": 0,
      "219": 0,
      "220": 0,
      "221": 0,
      "222": 0,
      "223": 0,
      "224": 0,
      "225": 0,
      "226": 0,
      "227": 0,
      "228": 0,
      "229": 0,
      "230": 0,
      "231": 0,
      "232": 0,
      "233": 0,
      "234": 0,
      "235": 0,
      "236": 0,
      "237": 0,
      "238": 0,
      "239": 0,
      "240": 0,
      "241": 0,
      "242": 0,
      "243": 0,
      "244": 0,
      "245": 0,
      "246": 0,
      "247": 0,
      "248": 0,
      "249": 0,
      "250": 0,
      "251": 0,
      "252": 0,
      "253": 0,
      "254": 0,
      "255": 0,
      "256": 0,
      "257": 0,
      "258": 0,
      "259": 0,
      "260": 0,
      "261": 0,
      "262": 0,
      "263": 0,
      "264": 0,
      "265": 0,
      "266": 0,
      "267": 0,
      "268": 0,
      "269": 0,
      "270": 0,
      "271": 0,
      "272": 0,
      "273": 0,
      "274": 0,
      "275": 0,
      "276": 0,
      "277": 0,
      "278": 0,
      "279": 0,
      "280": 0,
      "281": 0,
      "282": 0,
      "283": 0,
      "284": 0,
      "285": 0,
      "286": 0,
      "287": 0,
      "288": 0,
      "289": 0,
      "290": 0,
      "291": 0,
      "292": 0,
      "293": 0,
      "294": 0,
      "295": 0,
      "296": 0,
      "297": 0,
      "298": 0,
      "299": 0,
      "300": 0,
      "301": 0
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
      "98": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0, 0],
      "8": [0, 0],
      "9": [0, 0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
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
      "23": [0, 0],
      "24": [0, 0],
      "25": [0, 0],
      "26": [0, 0],
      "27": [0, 0],
      "28": [0, 0],
      "29": [0, 0],
      "30": [0, 0],
      "31": [0],
      "32": [0, 0],
      "33": [0, 0],
      "34": [0, 0],
      "35": [0, 0],
      "36": [0, 0],
      "37": [0, 0],
      "38": [0, 0],
      "39": [0, 0],
      "40": [0, 0, 0, 0],
      "41": [0, 0],
      "42": [0],
      "43": [0, 0],
      "44": [0, 0, 0],
      "45": [0, 0],
      "46": [0, 0],
      "47": [0, 0],
      "48": [0, 0],
      "49": [0, 0],
      "50": [0, 0],
      "51": [0, 0],
      "52": [0, 0],
      "53": [0, 0],
      "54": [0, 0],
      "55": [0, 0],
      "56": [0, 0],
      "57": [0, 0],
      "58": [0, 0],
      "59": [0, 0],
      "60": [0, 0, 0],
      "61": [0, 0],
      "62": [0, 0, 0],
      "63": [0, 0],
      "64": [0, 0, 0],
      "65": [0, 0],
      "66": [0, 0],
      "67": [0, 0],
      "68": [0, 0],
      "69": [0, 0],
      "70": [0, 0],
      "71": [0, 0, 0],
      "72": [0, 0],
      "73": [0, 0],
      "74": [0, 0],
      "75": [0, 0],
      "76": [0, 0],
      "77": [0, 0],
      "78": [0, 0],
      "79": [0, 0],
      "80": [0, 0],
      "81": [0, 0],
      "82": [0, 0],
      "83": [0, 0],
      "84": [0, 0],
      "85": [0, 0],
      "86": [0, 0],
      "87": [0],
      "88": [0, 0],
      "89": [0, 0],
      "90": [0, 0],
      "91": [0, 0],
      "92": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "f7806bbd58d60440a762f5848791eb89bb0907c6"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1zm602fxtf = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1zm602fxtf();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var DIRECT_LINE_VERSION = (cov_1zm602fxtf().s[0]++, 'DirectLine/3.0');
// These types are specific to this client library, not to Direct Line 3.0
var ConnectionStatus;
exports.ConnectionStatus = ConnectionStatus;

(function (ConnectionStatus) {
  ConnectionStatus[ConnectionStatus["Uninitialized"] = 0] = "Uninitialized";
  ConnectionStatus[ConnectionStatus["Connecting"] = 1] = "Connecting";
  ConnectionStatus[ConnectionStatus["Online"] = 2] = "Online";
  ConnectionStatus[ConnectionStatus["ExpiredToken"] = 3] = "ExpiredToken";
  ConnectionStatus[ConnectionStatus["FailedToConnect"] = 4] = "FailedToConnect";
  ConnectionStatus[ConnectionStatus["Ended"] = 5] = "Ended";
})(ConnectionStatus || (exports.ConnectionStatus = ConnectionStatus = {}));

cov_1zm602fxtf().s[1]++;

var wrapAjaxWithRetry = function wrapAjaxWithRetry(source, scheduler) {
  cov_1zm602fxtf().f[0]++;
  cov_1zm602fxtf().s[2]++;

  var notImplemented = function notImplemented() {
    cov_1zm602fxtf().f[1]++;
    cov_1zm602fxtf().s[3]++;
    throw new Error('not implemented');
  };

  cov_1zm602fxtf().s[4]++;

  var inner = function inner(response$) {
    cov_1zm602fxtf().f[2]++;
    cov_1zm602fxtf().s[5]++;
    return response$["catch"](function (err) {
      cov_1zm602fxtf().f[3]++;
      cov_1zm602fxtf().s[6]++;

      if (err.status === 429) {
        cov_1zm602fxtf().b[0][0]++;
        var retryAfterValue = (cov_1zm602fxtf().s[7]++, err.xhr.getResponseHeader('Retry-After'));
        var retryAfter = (cov_1zm602fxtf().s[8]++, Number(retryAfterValue));
        cov_1zm602fxtf().s[9]++;

        if (!isNaN(retryAfter)) {
          cov_1zm602fxtf().b[1][0]++;
          cov_1zm602fxtf().s[10]++;
          return _Observable.Observable.timer(retryAfter, scheduler).flatMap(function (_) {
            cov_1zm602fxtf().f[4]++;
            cov_1zm602fxtf().s[11]++;
            return _Observable.Observable["throw"](err, scheduler);
          });
        } else {
          cov_1zm602fxtf().b[1][1]++;
        }
      } else {
        cov_1zm602fxtf().b[0][1]++;
      }

      cov_1zm602fxtf().s[12]++;
      return _Observable.Observable["throw"](err, scheduler);
    });
  };

  cov_1zm602fxtf().s[13]++;

  var outer = function outer(urlOrRequest) {
    cov_1zm602fxtf().f[5]++;
    cov_1zm602fxtf().s[14]++;
    return inner(source(urlOrRequest));
  };

  cov_1zm602fxtf().s[15]++;
  return Object.assign(outer, {
    get: function get(url, headers) {
      cov_1zm602fxtf().f[6]++;
      cov_1zm602fxtf().s[16]++;
      return notImplemented();
    },
    post: function post(url, body, headers) {
      cov_1zm602fxtf().f[7]++;
      cov_1zm602fxtf().s[17]++;
      return notImplemented();
    },
    put: function put(url, body, headers) {
      cov_1zm602fxtf().f[8]++;
      cov_1zm602fxtf().s[18]++;
      return notImplemented();
    },
    patch: function patch(url, body, headers) {
      cov_1zm602fxtf().f[9]++;
      cov_1zm602fxtf().s[19]++;
      return notImplemented();
    },
    "delete": function _delete(url, headers) {
      cov_1zm602fxtf().f[10]++;
      cov_1zm602fxtf().s[20]++;
      return notImplemented();
    },
    getJSON: function getJSON(url, headers) {
      cov_1zm602fxtf().f[11]++;
      cov_1zm602fxtf().s[21]++;
      return notImplemented();
    }
  });
};

cov_1zm602fxtf().s[22]++;

var makeServices = function makeServices(services) {
  cov_1zm602fxtf().f[12]++;
  var scheduler = (cov_1zm602fxtf().s[23]++, (cov_1zm602fxtf().b[2][0]++, services.scheduler) || (cov_1zm602fxtf().b[2][1]++, _async.async));
  cov_1zm602fxtf().s[24]++;
  return {
    scheduler: scheduler,
    ajax: wrapAjaxWithRetry((cov_1zm602fxtf().b[3][0]++, services.ajax) || (cov_1zm602fxtf().b[3][1]++, _Observable.Observable.ajax), scheduler),
    WebSocket: (cov_1zm602fxtf().b[4][0]++, services.WebSocket) || (cov_1zm602fxtf().b[4][1]++, WebSocket),
    random: (cov_1zm602fxtf().b[5][0]++, services.random) || (cov_1zm602fxtf().b[5][1]++, Math.random)
  };
};

var POLLING_INTERVAL_LOWER_BOUND = (cov_1zm602fxtf().s[25]++, 200); //ms

var errorExpiredToken = (cov_1zm602fxtf().s[26]++, new Error("expired token"));
var errorConversationEnded = (cov_1zm602fxtf().s[27]++, new Error("conversation ended"));
var errorFailedToConnect = (cov_1zm602fxtf().s[28]++, new Error("failed to connect"));
var konsole = (cov_1zm602fxtf().s[29]++, {
  log: function log(message) {
    cov_1zm602fxtf().f[13]++;
    cov_1zm602fxtf().s[30]++;

    if ((cov_1zm602fxtf().b[7][0]++, typeof window !== 'undefined') && (cov_1zm602fxtf().b[7][1]++, window["botchatDebug"]) && (cov_1zm602fxtf().b[7][2]++, message)) {
      var _console;

      cov_1zm602fxtf().b[6][0]++;
      cov_1zm602fxtf().s[31]++;

      for (var _len = arguments.length, optionalParams = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        optionalParams[_key - 1] = arguments[_key];
      }

      (_console = console).log.apply(_console, [message].concat(optionalParams));
    } else {
      cov_1zm602fxtf().b[6][1]++;
    }
  }
});

var DirectLine = /*#__PURE__*/function () {
  function DirectLine(options) {
    (0, _classCallCheck2["default"])(this, DirectLine);
    (0, _defineProperty2["default"])(this, "connectionStatus$", (cov_1zm602fxtf().s[32]++, new _BehaviorSubject.BehaviorSubject(ConnectionStatus.Uninitialized)));
    (0, _defineProperty2["default"])(this, "domain", (cov_1zm602fxtf().s[33]++, "https://directline.botframework.com/v3/directline"));
    (0, _defineProperty2["default"])(this, "watermark", (cov_1zm602fxtf().s[34]++, ''));
    (0, _defineProperty2["default"])(this, "_botAgent", (cov_1zm602fxtf().s[35]++, ''));
    (0, _defineProperty2["default"])(this, "timeout", (cov_1zm602fxtf().s[36]++, 20 * 1000));
    (0, _defineProperty2["default"])(this, "lifetimeRefreshToken", (cov_1zm602fxtf().s[37]++, 30 * 60 * 1000));
    (0, _defineProperty2["default"])(this, "intervalRefreshToken", (cov_1zm602fxtf().s[38]++, this.lifetimeRefreshToken / 2));
    (0, _defineProperty2["default"])(this, "pollingInterval", (cov_1zm602fxtf().s[39]++, 1000));
    (0, _defineProperty2["default"])(this, "isFirstTime", (cov_1zm602fxtf().s[40]++, true));
    (0, _defineProperty2["default"])(this, "hasHistory", (cov_1zm602fxtf().s[41]++, false));
    (0, _defineProperty2["default"])(this, "handleHistoryApi", (cov_1zm602fxtf().s[42]++, false));
    (0, _defineProperty2["default"])(this, "historyLoadedFlag", (cov_1zm602fxtf().s[43]++, false));
    cov_1zm602fxtf().f[14]++;
    cov_1zm602fxtf().s[44]++;
    this.secret = options.secret;
    cov_1zm602fxtf().s[45]++;
    this.token = (cov_1zm602fxtf().b[8][0]++, options.secret) || (cov_1zm602fxtf().b[8][1]++, options.token);
    cov_1zm602fxtf().s[46]++;
    this.webSocket = (cov_1zm602fxtf().b[9][0]++, options.webSocket === undefined ? (cov_1zm602fxtf().b[10][0]++, true) : (cov_1zm602fxtf().b[10][1]++, options.webSocket)) && (cov_1zm602fxtf().b[9][1]++, typeof WebSocket !== 'undefined') && (cov_1zm602fxtf().b[9][2]++, WebSocket !== undefined);
    cov_1zm602fxtf().s[47]++;

    if ((cov_1zm602fxtf().b[12][0]++, options.conversationStartProperties) && (cov_1zm602fxtf().b[12][1]++, options.conversationStartProperties.locale)) {
      cov_1zm602fxtf().b[11][0]++;
      cov_1zm602fxtf().s[48]++;

      if (Object.prototype.toString.call(options.conversationStartProperties.locale) === '[object String]') {
        cov_1zm602fxtf().b[13][0]++;
        cov_1zm602fxtf().s[49]++;
        this.localeOnStartConversation = options.conversationStartProperties.locale;
      } else {
        cov_1zm602fxtf().b[13][1]++;
        cov_1zm602fxtf().s[50]++;
        console.warn('DirectLineJS: conversationStartProperties.locale was ignored: the locale name may be a BCP 47 language tag');
      }
    } else {
      cov_1zm602fxtf().b[11][1]++;
    }

    cov_1zm602fxtf().s[51]++;

    if (options.domain) {
      cov_1zm602fxtf().b[14][0]++;
      cov_1zm602fxtf().s[52]++;
      this.domain = options.domain;
    } else {
      cov_1zm602fxtf().b[14][1]++;
    }

    cov_1zm602fxtf().s[53]++;

    if (options.conversationId) {
      cov_1zm602fxtf().b[15][0]++;
      cov_1zm602fxtf().s[54]++;
      this.conversationId = options.conversationId;
    } else {
      cov_1zm602fxtf().b[15][1]++;
    }

    cov_1zm602fxtf().s[55]++;

    if (options.watermark) {
      cov_1zm602fxtf().b[16][0]++;
      cov_1zm602fxtf().s[56]++;
      this.watermark = options.watermark;
    } else {
      cov_1zm602fxtf().b[16][1]++;
    }

    cov_1zm602fxtf().s[57]++;

    if (options.streamUrl) {
      cov_1zm602fxtf().b[17][0]++;
      cov_1zm602fxtf().s[58]++;

      if ((cov_1zm602fxtf().b[19][0]++, options.token) && (cov_1zm602fxtf().b[19][1]++, options.conversationId)) {
        cov_1zm602fxtf().b[18][0]++;
        cov_1zm602fxtf().s[59]++;
        this.streamUrl = options.streamUrl;
      } else {
        cov_1zm602fxtf().b[18][1]++;
        cov_1zm602fxtf().s[60]++;
        console.warn('DirectLineJS: streamUrl was ignored: you need to provide a token and a conversationid');
      }
    } else {
      cov_1zm602fxtf().b[17][1]++;
    }

    cov_1zm602fxtf().s[61]++;

    if (options.timeout !== undefined) {
      cov_1zm602fxtf().b[20][0]++;
      cov_1zm602fxtf().s[62]++;
      this.timeout = options.timeout;
    } else {
      cov_1zm602fxtf().b[20][1]++;
    }

    cov_1zm602fxtf().s[63]++;

    if (options.lifetimeRefreshToken !== undefined) {
      cov_1zm602fxtf().b[21][0]++;
      cov_1zm602fxtf().s[64]++;
      this.lifetimeRefreshToken = options.lifetimeRefreshToken;
    } else {
      cov_1zm602fxtf().b[21][1]++;
    }

    cov_1zm602fxtf().s[65]++;

    if (options.intervalRefreshToken !== undefined) {
      cov_1zm602fxtf().b[22][0]++;
      cov_1zm602fxtf().s[66]++;
      this.intervalRefreshToken = options.intervalRefreshToken;
    } else {
      cov_1zm602fxtf().b[22][1]++;
    }

    cov_1zm602fxtf().s[67]++;

    if (options.retries !== undefined) {
      cov_1zm602fxtf().b[23][0]++;
      cov_1zm602fxtf().s[68]++;
      this.retries = options.retries;
    } else {
      cov_1zm602fxtf().b[23][1]++;
      cov_1zm602fxtf().s[69]++;
      this.retries = (this.lifetimeRefreshToken - this.intervalRefreshToken) / this.timeout;
    }

    cov_1zm602fxtf().s[70]++;

    if (options.retryDelay !== undefined) {
      cov_1zm602fxtf().b[24][0]++;
      cov_1zm602fxtf().s[71]++;
      this.retryDelay = options.retryDelay;
    } else {
      cov_1zm602fxtf().b[24][1]++;
      cov_1zm602fxtf().s[72]++;
      this.retryDelay = this.timeout;
    }

    cov_1zm602fxtf().s[73]++;
    this._botAgent = this.getBotAgent(options.botAgent);
    cov_1zm602fxtf().s[74]++;
    this.services = makeServices(options);
    var parsedPollingInterval = (cov_1zm602fxtf().s[75]++, ~~options.pollingInterval);
    cov_1zm602fxtf().s[76]++;

    if (parsedPollingInterval < POLLING_INTERVAL_LOWER_BOUND) {
      cov_1zm602fxtf().b[25][0]++;
      cov_1zm602fxtf().s[77]++;

      if (typeof options.pollingInterval !== 'undefined') {
        cov_1zm602fxtf().b[26][0]++;
        cov_1zm602fxtf().s[78]++;
        console.warn("DirectLineJS: provided pollingInterval (".concat(options.pollingInterval, ") is under lower bound (200ms), using default of 1000ms"));
      } else {
        cov_1zm602fxtf().b[26][1]++;
      }
    } else {
      cov_1zm602fxtf().b[25][1]++;
      cov_1zm602fxtf().s[79]++;
      this.pollingInterval = parsedPollingInterval;
    }

    cov_1zm602fxtf().s[80]++;
    this.expiredTokenExhaustion = this.setConnectionStatusFallback(ConnectionStatus.ExpiredToken, ConnectionStatus.FailedToConnect, 5);
    cov_1zm602fxtf().s[81]++;

    if (options.handleHistoryApi !== undefined) {
      cov_1zm602fxtf().b[27][0]++;
      cov_1zm602fxtf().s[82]++;
      this.handleHistoryApi = options.handleHistoryApi;
    } else {
      cov_1zm602fxtf().b[27][1]++;
    }

    cov_1zm602fxtf().s[83]++;

    if (options.historyId !== undefined) {
      cov_1zm602fxtf().b[28][0]++;
      cov_1zm602fxtf().s[84]++;
      this.historyId = options.historyId;
    } else {
      cov_1zm602fxtf().b[28][1]++;
    }

    cov_1zm602fxtf().s[85]++;

    if (options.historyLoaded !== undefined) {
      cov_1zm602fxtf().b[29][0]++;
      cov_1zm602fxtf().s[86]++;
      this.historyLoaded = options.historyLoaded;
    } else {
      cov_1zm602fxtf().b[29][1]++;
    }

    cov_1zm602fxtf().s[87]++;
    this.activity$ = (this.webSocket ? (cov_1zm602fxtf().b[30][0]++, this.webSocketActivity$()) : (cov_1zm602fxtf().b[30][1]++, this.pollingGetActivity$())).share();
  }
  /**
   * getConversationId
   */


  (0, _createClass2["default"])(DirectLine, [{
    key: "getConversationId",
    value: function getConversationId() {
      cov_1zm602fxtf().f[15]++;
      cov_1zm602fxtf().s[88]++;
      return this.conversationId;
    } // Every time we're about to make a Direct Line REST call, we call this first to see check the current connection status.
    // Either throws an error (indicating an error state) or emits a null, indicating a (presumably) healthy connection

  }, {
    key: "checkConnection",
    value: function checkConnection() {
      var _this = this;

      var once = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1zm602fxtf().b[31][0]++, false);
      cov_1zm602fxtf().f[16]++;
      var obs = (cov_1zm602fxtf().s[89]++, this.connectionStatus$.flatMap(function (connectionStatus) {
        cov_1zm602fxtf().f[17]++;
        cov_1zm602fxtf().s[90]++;

        if (connectionStatus === ConnectionStatus.Uninitialized) {
          cov_1zm602fxtf().b[32][0]++;
          cov_1zm602fxtf().s[91]++;

          _this.connectionStatus$.next(ConnectionStatus.Connecting); //if token and streamUrl are defined it means reconnect has already been done. Skipping it.


          cov_1zm602fxtf().s[92]++;

          if ((cov_1zm602fxtf().b[34][0]++, _this.token) && (cov_1zm602fxtf().b[34][1]++, _this.streamUrl)) {
            cov_1zm602fxtf().b[33][0]++;
            cov_1zm602fxtf().s[93]++;

            _this.connectionStatus$.next(ConnectionStatus.Online);

            cov_1zm602fxtf().s[94]++;
            return _Observable.Observable.of(connectionStatus, _this.services.scheduler);
          } else {
            cov_1zm602fxtf().b[33][1]++;
            cov_1zm602fxtf().s[95]++;
            return _this.startConversation()["do"](function (conversation) {
              cov_1zm602fxtf().f[18]++;
              cov_1zm602fxtf().s[96]++;
              _this.conversationId = conversation.conversationId;
              cov_1zm602fxtf().s[97]++;
              _this.token = (cov_1zm602fxtf().b[35][0]++, _this.secret) || (cov_1zm602fxtf().b[35][1]++, conversation.token);
              cov_1zm602fxtf().s[98]++;

              if ((cov_1zm602fxtf().b[37][0]++, conversation.streamUrl) && (cov_1zm602fxtf().b[37][1]++, _this.handleHistoryApi)) {
                cov_1zm602fxtf().b[36][0]++;
                cov_1zm602fxtf().s[99]++;
                _this.streamUrl = conversation.streamUrl.replace("watermark=-&", "");
              } else {
                cov_1zm602fxtf().b[36][1]++;
              }

              cov_1zm602fxtf().s[100]++;
              _this.referenceGrammarId = conversation.referenceGrammarId;
              cov_1zm602fxtf().s[101]++;

              if (!_this.secret) {
                cov_1zm602fxtf().b[38][0]++;
                cov_1zm602fxtf().s[102]++;

                _this.refreshTokenLoop();
              } else {
                cov_1zm602fxtf().b[38][1]++;
              }

              cov_1zm602fxtf().s[103]++;

              _this.connectionStatus$.next(ConnectionStatus.Online);
            }, function (error) {
              cov_1zm602fxtf().f[19]++;
              cov_1zm602fxtf().s[104]++;

              _this.connectionStatus$.next(ConnectionStatus.FailedToConnect);
            }).map(function (_) {
              cov_1zm602fxtf().f[20]++;
              cov_1zm602fxtf().s[105]++;
              return connectionStatus;
            });
          }
        } else {
          cov_1zm602fxtf().b[32][1]++;
          cov_1zm602fxtf().s[106]++;
          return _Observable.Observable.of(connectionStatus, _this.services.scheduler);
        }
      }).filter(function (connectionStatus) {
        cov_1zm602fxtf().f[21]++;
        cov_1zm602fxtf().s[107]++;
        return (cov_1zm602fxtf().b[39][0]++, connectionStatus != ConnectionStatus.Uninitialized) && (cov_1zm602fxtf().b[39][1]++, connectionStatus != ConnectionStatus.Connecting);
      }).flatMap(function (connectionStatus) {
        cov_1zm602fxtf().f[22]++;
        cov_1zm602fxtf().s[108]++;

        switch (connectionStatus) {
          case ConnectionStatus.Ended:
            cov_1zm602fxtf().b[40][0]++;
            cov_1zm602fxtf().s[109]++;
            return _Observable.Observable["throw"](errorConversationEnded, _this.services.scheduler);

          case ConnectionStatus.FailedToConnect:
            cov_1zm602fxtf().b[40][1]++;
            cov_1zm602fxtf().s[110]++;
            return _Observable.Observable["throw"](errorFailedToConnect, _this.services.scheduler);

          case ConnectionStatus.ExpiredToken:
            cov_1zm602fxtf().b[40][2]++;
            cov_1zm602fxtf().s[111]++;
            return _Observable.Observable.of(connectionStatus, _this.services.scheduler);

          default:
            cov_1zm602fxtf().b[40][3]++;
            cov_1zm602fxtf().s[112]++;
            return _Observable.Observable.of(connectionStatus, _this.services.scheduler);
        }
      }));
      cov_1zm602fxtf().s[113]++;
      return once ? (cov_1zm602fxtf().b[41][0]++, obs.take(1)) : (cov_1zm602fxtf().b[41][1]++, obs);
    }
  }, {
    key: "setConnectionStatusFallback",
    value: function setConnectionStatusFallback(connectionStatusFrom, connectionStatusTo) {
      var maxAttempts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : (cov_1zm602fxtf().b[42][0]++, 5);
      cov_1zm602fxtf().f[23]++;
      cov_1zm602fxtf().s[114]++;
      maxAttempts--;
      var attempts = (cov_1zm602fxtf().s[115]++, 0);
      var currStatus = (cov_1zm602fxtf().s[116]++, null);
      cov_1zm602fxtf().s[117]++;
      return function (status) {
        cov_1zm602fxtf().f[24]++;
        cov_1zm602fxtf().s[118]++;

        if ((cov_1zm602fxtf().b[44][0]++, status === connectionStatusFrom) && (cov_1zm602fxtf().b[44][1]++, currStatus === status) && (cov_1zm602fxtf().b[44][2]++, attempts >= maxAttempts)) {
          cov_1zm602fxtf().b[43][0]++;
          cov_1zm602fxtf().s[119]++;
          attempts = 0;
          cov_1zm602fxtf().s[120]++;
          return connectionStatusTo;
        } else {
          cov_1zm602fxtf().b[43][1]++;
        }

        cov_1zm602fxtf().s[121]++;
        attempts++;
        cov_1zm602fxtf().s[122]++;
        currStatus = status;
        cov_1zm602fxtf().s[123]++;
        return status;
      };
    }
  }, {
    key: "expiredToken",
    value: function expiredToken() {
      cov_1zm602fxtf().f[25]++;
      var connectionStatus = (cov_1zm602fxtf().s[124]++, this.connectionStatus$.getValue());
      cov_1zm602fxtf().s[125]++;

      if ((cov_1zm602fxtf().b[46][0]++, connectionStatus != ConnectionStatus.Ended) && (cov_1zm602fxtf().b[46][1]++, connectionStatus != ConnectionStatus.FailedToConnect)) {
        cov_1zm602fxtf().b[45][0]++;
        cov_1zm602fxtf().s[126]++;
        this.connectionStatus$.next(ConnectionStatus.ExpiredToken);
      } else {
        cov_1zm602fxtf().b[45][1]++;
      }

      var protectedConnectionStatus = (cov_1zm602fxtf().s[127]++, this.expiredTokenExhaustion(this.connectionStatus$.getValue()));
      cov_1zm602fxtf().s[128]++;
      this.connectionStatus$.next(protectedConnectionStatus);
    }
  }, {
    key: "startConversation",
    value: function startConversation() {
      var _this2 = this;

      cov_1zm602fxtf().f[26]++;
      //if conversationid is set here, it means we need to call the reconnect api, else it is a new conversation
      var url = (cov_1zm602fxtf().s[129]++, this.conversationId ? (cov_1zm602fxtf().b[47][0]++, "".concat(this.domain, "/conversations/").concat(this.conversationId, "?watermark=").concat(this.watermark)) : (cov_1zm602fxtf().b[47][1]++, "".concat(this.domain, "/conversations")));
      var method = (cov_1zm602fxtf().s[130]++, this.conversationId ? (cov_1zm602fxtf().b[48][0]++, "GET") : (cov_1zm602fxtf().b[48][1]++, "POST"));
      var body = (cov_1zm602fxtf().s[131]++, this.conversationId ? (cov_1zm602fxtf().b[49][0]++, undefined) : (cov_1zm602fxtf().b[49][1]++, {
        user: {
          id: this.userIdOnStartConversation
        },
        locale: this.localeOnStartConversation
      }));
      cov_1zm602fxtf().s[132]++;
      return this.services.ajax({
        method: method,
        url: url,
        body: body,
        timeout: this.timeout,
        headers: _objectSpread({
          "Accept": "application/json",
          "Content-Type": "application/json"
        }, this.commonHeaders())
      }) //      .do(ajaxResponse => konsole.log("conversation ajaxResponse", ajaxResponse.response))
      .map(function (ajaxResponse) {
        cov_1zm602fxtf().f[27]++;
        cov_1zm602fxtf().s[133]++;
        return ajaxResponse.response;
      }).retryWhen(function (error$) {
        cov_1zm602fxtf().f[28]++;
        cov_1zm602fxtf().s[134]++;
        return (// for now we deem 4xx and 5xx errors as unrecoverable
          // for everything else (timeouts), retry for a while
          error$.mergeMap(function (error) {
            cov_1zm602fxtf().f[29]++;
            cov_1zm602fxtf().s[135]++;
            return (cov_1zm602fxtf().b[51][0]++, error.status >= 400) && (cov_1zm602fxtf().b[51][1]++, error.status < 600) ? (cov_1zm602fxtf().b[50][0]++, _Observable.Observable["throw"](error, _this2.services.scheduler)) : (cov_1zm602fxtf().b[50][1]++, _Observable.Observable.of(error, _this2.services.scheduler));
          }).delay(_this2.retryDelay, _this2.services.scheduler).take(_this2.retries)
        );
      });
    }
  }, {
    key: "refreshTokenLoop",
    value: function refreshTokenLoop() {
      var _this3 = this;

      cov_1zm602fxtf().f[30]++;
      cov_1zm602fxtf().s[136]++;
      this.tokenRefreshSubscription = _Observable.Observable.interval(this.intervalRefreshToken, this.services.scheduler).flatMap(function (_) {
        cov_1zm602fxtf().f[31]++;
        cov_1zm602fxtf().s[137]++;
        return _this3.refreshToken();
      }).subscribe(function (token) {
        cov_1zm602fxtf().f[32]++;
        cov_1zm602fxtf().s[138]++;
        konsole.log("refreshing token", token, "at", new Date());
        cov_1zm602fxtf().s[139]++;
        _this3.token = token;
      });
    }
  }, {
    key: "refreshToken",
    value: function refreshToken() {
      var _this4 = this;

      cov_1zm602fxtf().f[33]++;
      cov_1zm602fxtf().s[140]++;
      return this.checkConnection(true).flatMap(function (_) {
        cov_1zm602fxtf().f[34]++;
        cov_1zm602fxtf().s[141]++;
        return _this4.services.ajax({
          method: "POST",
          url: "".concat(_this4.domain, "/tokens/refresh"),
          timeout: _this4.timeout,
          headers: _objectSpread({}, _this4.commonHeaders())
        }).map(function (ajaxResponse) {
          cov_1zm602fxtf().f[35]++;
          cov_1zm602fxtf().s[142]++;
          return ajaxResponse.response.token;
        }).retryWhen(function (error$) {
          cov_1zm602fxtf().f[36]++;
          cov_1zm602fxtf().s[143]++;
          return error$.mergeMap(function (error) {
            cov_1zm602fxtf().f[37]++;
            cov_1zm602fxtf().s[144]++;

            if (error.status === 403) {
              cov_1zm602fxtf().b[52][0]++;
              cov_1zm602fxtf().s[145]++;

              // if the token is expired there's no reason to keep trying
              _this4.expiredToken();

              cov_1zm602fxtf().s[146]++;
              return _Observable.Observable["throw"](error, _this4.services.scheduler);
            } else {
              cov_1zm602fxtf().b[52][1]++;
              cov_1zm602fxtf().s[147]++;

              if (error.status === 404) {
                cov_1zm602fxtf().b[53][0]++;
                cov_1zm602fxtf().s[148]++;
                // If the bot is gone, we should stop retrying
                return _Observable.Observable["throw"](error, _this4.services.scheduler);
              } else {
                cov_1zm602fxtf().b[53][1]++;
              }
            }

            cov_1zm602fxtf().s[149]++;
            return _Observable.Observable.of(error, _this4.services.scheduler);
          }).delay(_this4.retryDelay, _this4.services.scheduler).take(_this4.retries);
        });
      });
    }
  }, {
    key: "reconnect",
    value: function reconnect(conversation) {
      cov_1zm602fxtf().f[38]++;
      cov_1zm602fxtf().s[150]++;
      this.token = conversation.token;
      cov_1zm602fxtf().s[151]++;
      this.conversationId = conversation.conversationId;
      cov_1zm602fxtf().s[152]++;

      if ((cov_1zm602fxtf().b[55][0]++, conversation.streamUrl) && (cov_1zm602fxtf().b[55][1]++, this.handleHistoryApi)) {
        cov_1zm602fxtf().b[54][0]++;
        cov_1zm602fxtf().s[153]++;
        this.streamUrl = conversation.streamUrl.replace("watermark=-&", "");
      } else {
        cov_1zm602fxtf().b[54][1]++;
      }

      cov_1zm602fxtf().s[154]++;

      if (this.connectionStatus$.getValue() === ConnectionStatus.ExpiredToken) {
        cov_1zm602fxtf().b[56][0]++;
        cov_1zm602fxtf().s[155]++;
        this.connectionStatus$.next(ConnectionStatus.Online);
      } else {
        cov_1zm602fxtf().b[56][1]++;
      }
    }
  }, {
    key: "end",
    value: function end() {
      cov_1zm602fxtf().f[39]++;
      cov_1zm602fxtf().s[156]++;

      if (this.tokenRefreshSubscription) {
        cov_1zm602fxtf().b[57][0]++;
        cov_1zm602fxtf().s[157]++;
        this.tokenRefreshSubscription.unsubscribe();
      } else {
        cov_1zm602fxtf().b[57][1]++;
      }

      cov_1zm602fxtf().s[158]++;

      try {
        cov_1zm602fxtf().s[159]++;
        this.connectionStatus$.next(ConnectionStatus.Ended);
      } catch (e) {
        cov_1zm602fxtf().s[160]++;

        if (e === errorConversationEnded) {
          cov_1zm602fxtf().b[58][0]++;
          cov_1zm602fxtf().s[161]++;
          return;
        } else {
          cov_1zm602fxtf().b[58][1]++;
        }

        cov_1zm602fxtf().s[162]++;
        throw e;
      }
    }
  }, {
    key: "getSessionId",
    value: function getSessionId() {
      var _this5 = this;

      cov_1zm602fxtf().f[40]++;
      cov_1zm602fxtf().s[163]++;
      // If we're not connected to the bot, get connected
      // Will throw an error if we are not connected
      konsole.log("getSessionId");
      cov_1zm602fxtf().s[164]++;
      return this.checkConnection(true).flatMap(function (_) {
        cov_1zm602fxtf().f[41]++;
        cov_1zm602fxtf().s[165]++;
        return _this5.services.ajax({
          method: "GET",
          url: "".concat(_this5.domain, "/session/getsessionid"),
          withCredentials: true,
          timeout: _this5.timeout,
          headers: _objectSpread({
            "Content-Type": "application/json"
          }, _this5.commonHeaders())
        }).map(function (ajaxResponse) {
          cov_1zm602fxtf().f[42]++;
          cov_1zm602fxtf().s[166]++;

          if ((cov_1zm602fxtf().b[60][0]++, ajaxResponse) && (cov_1zm602fxtf().b[60][1]++, ajaxResponse.response) && (cov_1zm602fxtf().b[60][2]++, ajaxResponse.response.sessionId)) {
            cov_1zm602fxtf().b[59][0]++;
            cov_1zm602fxtf().s[167]++;
            konsole.log("getSessionId response: " + ajaxResponse.response.sessionId);
            cov_1zm602fxtf().s[168]++;
            return ajaxResponse.response.sessionId;
          } else {
            cov_1zm602fxtf().b[59][1]++;
          }

          cov_1zm602fxtf().s[169]++;
          return '';
        })["catch"](function (error) {
          cov_1zm602fxtf().f[43]++;
          cov_1zm602fxtf().s[170]++;
          konsole.log("getSessionId error: " + error.status);
          cov_1zm602fxtf().s[171]++;
          return _Observable.Observable.of('', _this5.services.scheduler);
        });
      })["catch"](function (error) {
        cov_1zm602fxtf().f[44]++;
        cov_1zm602fxtf().s[172]++;
        return _this5.catchExpiredToken(error);
      });
    }
  }, {
    key: "postActivity",
    value: function postActivity(activity) {
      var _this6 = this;

      cov_1zm602fxtf().f[45]++;
      cov_1zm602fxtf().s[173]++;

      // If user id is set, check if it match activity.from.id and always override it in activity
      if ((cov_1zm602fxtf().b[62][0]++, this.userIdOnStartConversation) && (cov_1zm602fxtf().b[62][1]++, activity.from) && (cov_1zm602fxtf().b[62][2]++, activity.from.id !== this.userIdOnStartConversation)) {
        cov_1zm602fxtf().b[61][0]++;
        cov_1zm602fxtf().s[174]++;
        console.warn('DirectLineJS: Activity.from.id does not match with user id, ignoring activity.from.id');
        cov_1zm602fxtf().s[175]++;
        activity.from.id = this.userIdOnStartConversation;
      } else {
        cov_1zm602fxtf().b[61][1]++;
      } // Use postMessageWithAttachments for messages with attachments that are local files (e.g. an image to upload)
      // Technically we could use it for *all* activities, but postActivity is much lighter weight
      // So, since WebChat is partially a reference implementation of Direct Line, we implement both.


      cov_1zm602fxtf().s[176]++;

      if ((cov_1zm602fxtf().b[64][0]++, activity.type === "message") && (cov_1zm602fxtf().b[64][1]++, activity.attachments) && (cov_1zm602fxtf().b[64][2]++, activity.attachments.length > 0)) {
        cov_1zm602fxtf().b[63][0]++;
        cov_1zm602fxtf().s[177]++;
        return this.postMessageWithAttachments(activity);
      } else {
        cov_1zm602fxtf().b[63][1]++;
      } // If we're not connected to the bot, get connected
      // Will throw an error if we are not connected


      cov_1zm602fxtf().s[178]++;
      konsole.log("postActivity", activity);
      cov_1zm602fxtf().s[179]++;
      return this.checkConnection(true).flatMap(function (_) {
        cov_1zm602fxtf().f[46]++;
        cov_1zm602fxtf().s[180]++;
        return _this6.services.ajax({
          method: "POST",
          url: "".concat(_this6.domain, "/conversations/").concat(_this6.conversationId, "/activities"),
          body: activity,
          timeout: _this6.timeout,
          headers: _objectSpread({
            "Content-Type": "application/json"
          }, _this6.commonHeaders())
        }).map(function (ajaxResponse) {
          cov_1zm602fxtf().f[47]++;
          cov_1zm602fxtf().s[181]++;
          return ajaxResponse.response.id;
        })["catch"](function (error) {
          cov_1zm602fxtf().f[48]++;
          cov_1zm602fxtf().s[182]++;
          return _this6.catchPostError(error);
        });
      })["catch"](function (error) {
        cov_1zm602fxtf().f[49]++;
        cov_1zm602fxtf().s[183]++;
        return _this6.catchExpiredToken(error);
      });
    }
  }, {
    key: "postMessageWithAttachments",
    value: function postMessageWithAttachments(message) {
      var _this7 = this;

      cov_1zm602fxtf().f[50]++;

      var _ref = (cov_1zm602fxtf().s[184]++, message),
          attachments = _ref.attachments; // We clean the attachments but making sure every attachment has unique name.
      // If the file do not have a name, Chrome will assign "blob" when it is appended to FormData.


      var attachmentNames = (cov_1zm602fxtf().s[185]++, (0, _dedupeFilenames["default"])(attachments.map(function (media) {
        cov_1zm602fxtf().f[51]++;
        cov_1zm602fxtf().s[186]++;
        return (cov_1zm602fxtf().b[65][0]++, media.name) || (cov_1zm602fxtf().b[65][1]++, 'blob');
      })));
      var cleansedAttachments = (cov_1zm602fxtf().s[187]++, attachments.map(function (attachment, index) {
        cov_1zm602fxtf().f[52]++;
        cov_1zm602fxtf().s[188]++;
        return _objectSpread(_objectSpread({}, attachment), {}, {
          name: attachmentNames[index]
        });
      }));
      var formData; // If we're not connected to the bot, get connected
      // Will throw an error if we are not connected

      cov_1zm602fxtf().s[189]++;
      return this.checkConnection(true).flatMap(function (_) {
        cov_1zm602fxtf().f[53]++;
        cov_1zm602fxtf().s[190]++;
        // To send this message to DirectLine we need to deconstruct it into a "template" activity
        // and one blob for each attachment.
        formData = new FormData();
        cov_1zm602fxtf().s[191]++;
        formData.append('activity', new Blob([JSON.stringify(_objectSpread(_objectSpread({}, message), {}, {
          // Removing contentUrl from attachment, we will send it via multipart
          attachments: cleansedAttachments.map(function (_ref2) {
            var string = _ref2.contentUrl,
                others = (0, _objectWithoutProperties2["default"])(_ref2, _excluded);
            cov_1zm602fxtf().f[54]++;
            cov_1zm602fxtf().s[192]++;
            return _objectSpread({}, others);
          })
        }))], {
          type: 'application/vnd.microsoft.activity'
        }));
        cov_1zm602fxtf().s[193]++;
        return _Observable.Observable.from(cleansedAttachments, _this7.services.scheduler).flatMap(function (media) {
          cov_1zm602fxtf().f[55]++;
          cov_1zm602fxtf().s[194]++;
          return _this7.services.ajax({
            method: "GET",
            url: media.contentUrl,
            responseType: 'arraybuffer'
          })["do"](function (ajaxResponse) {
            cov_1zm602fxtf().f[56]++;
            cov_1zm602fxtf().s[195]++;
            return formData.append('file', new Blob([ajaxResponse.response], {
              type: media.contentType
            }), media.name);
          });
        }).count();
      }).flatMap(function (_) {
        cov_1zm602fxtf().f[57]++;
        cov_1zm602fxtf().s[196]++;
        return _this7.services.ajax({
          method: "POST",
          url: "".concat(_this7.domain, "/conversations/").concat(_this7.conversationId, "/upload?userId=").concat(message.from.id),
          body: formData,
          timeout: _this7.timeout,
          headers: _objectSpread({}, _this7.commonHeaders())
        }).map(function (ajaxResponse) {
          cov_1zm602fxtf().f[58]++;
          cov_1zm602fxtf().s[197]++;
          return ajaxResponse.response.id;
        })["catch"](function (error) {
          cov_1zm602fxtf().f[59]++;
          cov_1zm602fxtf().s[198]++;
          return _this7.catchPostError(error);
        });
      })["catch"](function (error) {
        cov_1zm602fxtf().f[60]++;
        cov_1zm602fxtf().s[199]++;
        return _this7.catchPostError(error);
      });
    }
  }, {
    key: "catchPostError",
    value: function catchPostError(error) {
      cov_1zm602fxtf().f[61]++;
      cov_1zm602fxtf().s[200]++;

      if (error.status === 403) {
        cov_1zm602fxtf().b[66][0]++;
        cov_1zm602fxtf().s[201]++;
        // token has expired (will fall through to return "retry")
        this.expiredToken();
      } else {
        cov_1zm602fxtf().b[66][1]++;
        cov_1zm602fxtf().s[202]++;

        if ((cov_1zm602fxtf().b[68][0]++, error.status >= 400) && (cov_1zm602fxtf().b[68][1]++, error.status < 500)) {
          cov_1zm602fxtf().b[67][0]++;
          cov_1zm602fxtf().s[203]++;
          // more unrecoverable errors
          return _Observable.Observable["throw"](error, this.services.scheduler);
        } else {
          cov_1zm602fxtf().b[67][1]++;
        }
      }

      cov_1zm602fxtf().s[204]++;
      return _Observable.Observable.of("retry", this.services.scheduler);
    }
  }, {
    key: "catchExpiredToken",
    value: function catchExpiredToken(error) {
      cov_1zm602fxtf().f[62]++;
      cov_1zm602fxtf().s[205]++;
      return error === errorExpiredToken ? (cov_1zm602fxtf().b[69][0]++, _Observable.Observable.of("retry", this.services.scheduler)) : (cov_1zm602fxtf().b[69][1]++, _Observable.Observable["throw"](error, this.services.scheduler));
    }
  }, {
    key: "pollingGetActivity$",
    value: function pollingGetActivity$() {
      var _this8 = this;

      cov_1zm602fxtf().f[63]++;
      var poller$ = (cov_1zm602fxtf().s[206]++, _Observable.Observable.create(function (subscriber) {
        cov_1zm602fxtf().f[64]++;
        // A BehaviorSubject to trigger polling. Since it is a BehaviorSubject
        // the first event is produced immediately.
        var trigger$ = (cov_1zm602fxtf().s[207]++, new _BehaviorSubject.BehaviorSubject({})); // TODO: remove Date.now, use reactive interval to space out every request

        cov_1zm602fxtf().s[208]++;
        trigger$.subscribe(function () {
          cov_1zm602fxtf().f[65]++;
          cov_1zm602fxtf().s[209]++;

          if (_this8.connectionStatus$.getValue() === ConnectionStatus.Online) {
            cov_1zm602fxtf().b[70][0]++;
            var startTimestamp = (cov_1zm602fxtf().s[210]++, Date.now());
            cov_1zm602fxtf().s[211]++;

            _this8.services.ajax({
              headers: _objectSpread({
                Accept: 'application/json'
              }, _this8.commonHeaders()),
              method: 'GET',
              url: "".concat(_this8.domain, "/conversations/").concat(_this8.conversationId, "/activities?watermark=").concat(_this8.watermark),
              timeout: _this8.timeout
            }).subscribe(function (result) {
              cov_1zm602fxtf().f[66]++;
              cov_1zm602fxtf().s[212]++;
              subscriber.next(result);
              cov_1zm602fxtf().s[213]++;
              setTimeout(function () {
                cov_1zm602fxtf().f[67]++;
                cov_1zm602fxtf().s[214]++;
                return trigger$.next(null);
              }, Math.max(0, _this8.pollingInterval - Date.now() + startTimestamp));
            }, function (error) {
              cov_1zm602fxtf().f[68]++;
              cov_1zm602fxtf().s[215]++;

              switch (error.status) {
                case 403:
                  cov_1zm602fxtf().b[71][0]++;
                  cov_1zm602fxtf().s[216]++;

                  _this8.connectionStatus$.next(ConnectionStatus.ExpiredToken);

                  cov_1zm602fxtf().s[217]++;
                  setTimeout(function () {
                    cov_1zm602fxtf().f[69]++;
                    cov_1zm602fxtf().s[218]++;
                    return trigger$.next(null);
                  }, _this8.pollingInterval);
                  cov_1zm602fxtf().s[219]++;
                  break;

                case 404:
                  cov_1zm602fxtf().b[71][1]++;
                  cov_1zm602fxtf().s[220]++;

                  _this8.connectionStatus$.next(ConnectionStatus.Ended);

                  cov_1zm602fxtf().s[221]++;
                  break;

                default:
                  cov_1zm602fxtf().b[71][2]++;
                  cov_1zm602fxtf().s[222]++;
                  // propagate the error
                  subscriber.error(error);
                  cov_1zm602fxtf().s[223]++;
                  break;
              }
            });
          } else {
            cov_1zm602fxtf().b[70][1]++;
          }
        });
      }));
      cov_1zm602fxtf().s[224]++;
      return this.checkConnection().flatMap(function (_) {
        cov_1zm602fxtf().f[70]++;
        cov_1zm602fxtf().s[225]++;
        return poller$["catch"](function () {
          cov_1zm602fxtf().f[71]++;
          cov_1zm602fxtf().s[226]++;
          return _Observable.Observable.empty();
        }).map(function (ajaxResponse) {
          cov_1zm602fxtf().f[72]++;
          cov_1zm602fxtf().s[227]++;
          return ajaxResponse.response;
        }).flatMap(function (activityGroup) {
          cov_1zm602fxtf().f[73]++;
          cov_1zm602fxtf().s[228]++;
          return _this8.observableFromActivityGroup(activityGroup);
        });
      });
    }
  }, {
    key: "observableFromActivityGroup",
    value: function observableFromActivityGroup(activityGroup) {
      cov_1zm602fxtf().f[74]++;
      cov_1zm602fxtf().s[229]++;

      if (activityGroup.watermark) {
        cov_1zm602fxtf().b[72][0]++;
        cov_1zm602fxtf().s[230]++;
        this.watermark = activityGroup.watermark;
      } else {
        cov_1zm602fxtf().b[72][1]++;
      }

      cov_1zm602fxtf().s[231]++;
      return _Observable.Observable.from(activityGroup.activities, this.services.scheduler);
    }
  }, {
    key: "webSocketActivity$",
    value: function webSocketActivity$() {
      var _this9 = this;

      cov_1zm602fxtf().f[75]++;
      cov_1zm602fxtf().s[232]++;
      return this.checkConnection().flatMap(function (_) {
        cov_1zm602fxtf().f[76]++;
        cov_1zm602fxtf().s[233]++;
        return _this9.observableWebSocket() // WebSockets can be closed by the server or the browser. In the former case we need to
        // retrieve a new streamUrl. In the latter case we could first retry with the current streamUrl,
        // but it's simpler just to always fetch a new one.
        .retryWhen(function (error$) {
          cov_1zm602fxtf().f[77]++;
          cov_1zm602fxtf().s[234]++;
          return error$.delay(_this9.getRetryDelay(), _this9.services.scheduler).mergeMap(function (error) {
            cov_1zm602fxtf().f[78]++;
            cov_1zm602fxtf().s[235]++;
            return _this9.reconnectToConversation();
          });
        });
      }).flatMap(function (activityGroup) {
        cov_1zm602fxtf().f[79]++;
        cov_1zm602fxtf().s[236]++;
        return _this9.observableFromActivityGroup(activityGroup);
      });
    } // Returns the delay duration in milliseconds

  }, {
    key: "getRetryDelay",
    value: function getRetryDelay() {
      cov_1zm602fxtf().f[80]++;
      cov_1zm602fxtf().s[237]++;
      return Math.floor(3000 + this.services.random() * 12000);
    } // Originally we used Observable.webSocket, but it's fairly opinionated and I ended up writing
    // a lot of code to work around their implementation details. Since WebChat is meant to be a reference
    // implementation, I decided roll the below, where the logic is more purposeful. - @billba

  }, {
    key: "observableWebSocket",
    value: function observableWebSocket() {
      var _this10 = this;

      cov_1zm602fxtf().f[81]++;
      cov_1zm602fxtf().s[238]++;
      return _Observable.Observable.create(function (subscriber) {
        cov_1zm602fxtf().f[82]++;
        cov_1zm602fxtf().s[239]++;
        konsole.log("creating WebSocket", _this10.streamUrl);
        var ws = (cov_1zm602fxtf().s[240]++, new _this10.services.WebSocket(_this10.streamUrl));
        var sub;
        var closed;
        cov_1zm602fxtf().s[241]++;

        ws.onopen = function (open) {
          cov_1zm602fxtf().f[83]++;
          cov_1zm602fxtf().s[242]++;
          konsole.log("WebSocket open", open); // Chrome is pretty bad at noticing when a WebSocket connection is broken.
          // If we periodically ping the server with empty messages, it helps Chrome
          // realize when connection breaks, and close the socket. We then throw an
          // error, and that give us the opportunity to attempt to reconnect.

          cov_1zm602fxtf().s[243]++;
          sub = _Observable.Observable.interval(_this10.timeout, _this10.services.scheduler).subscribe(function (_) {
            cov_1zm602fxtf().f[84]++;
            cov_1zm602fxtf().s[244]++;

            try {
              cov_1zm602fxtf().s[245]++;
              ws.send("");
            } catch (e) {
              cov_1zm602fxtf().s[246]++;
              konsole.log("Ping error", e);
            }
          });
        };

        cov_1zm602fxtf().s[247]++;

        ws.onclose = function (close) {
          cov_1zm602fxtf().f[85]++;
          cov_1zm602fxtf().s[248]++;
          konsole.log("WebSocket close", close);
          cov_1zm602fxtf().s[249]++;

          if (sub) {
            cov_1zm602fxtf().b[73][0]++;
            cov_1zm602fxtf().s[250]++;
            sub.unsubscribe();
          } else {
            cov_1zm602fxtf().b[73][1]++;
          } // RxJS.retryWhen has a bug that would cause "error" signal to be sent after the observable is completed/errored.
          // We need to guard against extraneous "error" signal to workaround the bug.


          cov_1zm602fxtf().s[251]++;
          (cov_1zm602fxtf().b[74][0]++, closed) || (cov_1zm602fxtf().b[74][1]++, subscriber.error(close));
          cov_1zm602fxtf().s[252]++;
          closed = true;
        };

        cov_1zm602fxtf().s[253]++;

        ws.onerror = function (error) {
          cov_1zm602fxtf().f[86]++;
          cov_1zm602fxtf().s[254]++;
          konsole.log("WebSocket error", error);
          cov_1zm602fxtf().s[255]++;

          if (sub) {
            cov_1zm602fxtf().b[75][0]++;
            cov_1zm602fxtf().s[256]++;
            sub.unsubscribe();
          } else {
            cov_1zm602fxtf().b[75][1]++;
          } // RxJS.retryWhen has a bug that would cause "error" signal to be sent after the observable is completed/errored.
          // We need to guard against extraneous "error" signal to workaround the bug.


          cov_1zm602fxtf().s[257]++;
          (cov_1zm602fxtf().b[76][0]++, closed) || (cov_1zm602fxtf().b[76][1]++, subscriber.error(error));
          cov_1zm602fxtf().s[258]++;
          closed = true;
        };

        cov_1zm602fxtf().s[259]++;

        ws.onmessage = function (message) {
          cov_1zm602fxtf().f[87]++;
          cov_1zm602fxtf().s[260]++;
          return (cov_1zm602fxtf().b[77][0]++, message.data) && (cov_1zm602fxtf().b[77][1]++, subscriber.next(JSON.parse(message.data)));
        };

        cov_1zm602fxtf().s[261]++;

        if ((cov_1zm602fxtf().b[79][0]++, _this10.isFirstTime) && (cov_1zm602fxtf().b[79][1]++, _this10.handleHistoryApi)) {
          cov_1zm602fxtf().b[78][0]++;
          cov_1zm602fxtf().s[262]++;
          _this10.isFirstTime = false;
          var getUrl = (cov_1zm602fxtf().s[263]++, window.location);
          var baseUrl = (cov_1zm602fxtf().s[264]++, getUrl.protocol + "//" + getUrl.host + "/");
          var httpHistory = (cov_1zm602fxtf().s[265]++, new XMLHttpRequest());
          var urlHistory = (cov_1zm602fxtf().s[266]++, baseUrl + "api/directline/history");
          var that = (cov_1zm602fxtf().s[267]++, _this10);
        } else {
          cov_1zm602fxtf().b[78][1]++;
        } // This is the 'unsubscribe' method, which is called when this observable is disposed.
        // When the WebSocket closes itself, we throw an error, and this function is eventually called.
        // When the observable is closed first (e.g. when tearing down a WebChat instance) then
        // we need to manually close the WebSocket.


        cov_1zm602fxtf().s[268]++;
        return function () {
          cov_1zm602fxtf().f[88]++;
          cov_1zm602fxtf().s[269]++;

          if ((cov_1zm602fxtf().b[81][0]++, ws.readyState === 0) || (cov_1zm602fxtf().b[81][1]++, ws.readyState === 1)) {
            cov_1zm602fxtf().b[80][0]++;
            cov_1zm602fxtf().s[270]++;
            ws.close();
          } else {
            cov_1zm602fxtf().b[80][1]++;
          }
        };
      });
    }
  }, {
    key: "reconnectToConversation",
    value: function reconnectToConversation() {
      var _this11 = this;

      cov_1zm602fxtf().f[89]++;
      cov_1zm602fxtf().s[271]++;
      return this.checkConnection(true).flatMap(function (_) {
        cov_1zm602fxtf().f[90]++;
        cov_1zm602fxtf().s[272]++;
        return _this11.services.ajax({
          method: "GET",
          url: "".concat(_this11.domain, "/conversations/").concat(_this11.conversationId, "?watermark=").concat(_this11.watermark),
          timeout: _this11.timeout,
          headers: _objectSpread({
            "Accept": "application/json"
          }, _this11.commonHeaders())
        })["do"](function (result) {
          cov_1zm602fxtf().f[91]++;
          cov_1zm602fxtf().s[273]++;

          if (!_this11.secret) {
            cov_1zm602fxtf().b[82][0]++;
            cov_1zm602fxtf().s[274]++;
            _this11.token = result.response.token;
          } else {
            cov_1zm602fxtf().b[82][1]++;
          }

          cov_1zm602fxtf().s[275]++;

          if ((cov_1zm602fxtf().b[84][0]++, result.response.streamUrl) && (cov_1zm602fxtf().b[84][1]++, _this11.handleHistoryApi)) {
            cov_1zm602fxtf().b[83][0]++;
            cov_1zm602fxtf().s[276]++;
            _this11.streamUrl = result.response.streamUrl.replace("watermark=-&", "");
          } else {
            cov_1zm602fxtf().b[83][1]++;
          }
        }).map(function (_) {
          cov_1zm602fxtf().f[92]++;
          cov_1zm602fxtf().s[277]++;
          return null;
        }).retryWhen(function (error$) {
          cov_1zm602fxtf().f[93]++;
          cov_1zm602fxtf().s[278]++;
          return error$.mergeMap(function (error) {
            cov_1zm602fxtf().f[94]++;
            cov_1zm602fxtf().s[279]++;

            if (error.status === 403) {
              cov_1zm602fxtf().b[85][0]++;
              cov_1zm602fxtf().s[280]++;

              // token has expired. We can't recover from this here, but the embedding
              // website might eventually call reconnect() with a new token and streamUrl.
              _this11.expiredToken();
            } else {
              cov_1zm602fxtf().b[85][1]++;
              cov_1zm602fxtf().s[281]++;

              if (error.status === 404) {
                cov_1zm602fxtf().b[86][0]++;
                cov_1zm602fxtf().s[282]++;
                return _Observable.Observable["throw"](errorConversationEnded, _this11.services.scheduler);
              } else {
                cov_1zm602fxtf().b[86][1]++;
              }
            }

            cov_1zm602fxtf().s[283]++;
            return _Observable.Observable.of(error, _this11.services.scheduler);
          }).delay(_this11.retryDelay, _this11.services.scheduler).take(_this11.retries);
        });
      });
    }
  }, {
    key: "commonHeaders",
    value: function commonHeaders() {
      cov_1zm602fxtf().f[95]++;
      cov_1zm602fxtf().s[284]++;
      return {
        "Authorization": "Bearer ".concat(this.token),
        "x-ms-bot-agent": this._botAgent
      };
    }
  }, {
    key: "getBotAgent",
    value: function getBotAgent() {
      var customAgent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : (cov_1zm602fxtf().b[87][0]++, '');
      cov_1zm602fxtf().f[96]++;
      var clientAgent = (cov_1zm602fxtf().s[285]++, 'directlinejs');
      cov_1zm602fxtf().s[286]++;

      if (customAgent) {
        cov_1zm602fxtf().b[88][0]++;
        cov_1zm602fxtf().s[287]++;
        clientAgent += "; ".concat(customAgent);
      } else {
        cov_1zm602fxtf().b[88][1]++;
      }

      cov_1zm602fxtf().s[288]++;
      return "".concat(DIRECT_LINE_VERSION, " (").concat(clientAgent, " ").concat("0.15.2-0", ")");
    }
  }, {
    key: "setUserId",
    value: function setUserId(userId) {
      cov_1zm602fxtf().f[97]++;
      cov_1zm602fxtf().s[289]++;

      if (this.connectionStatus$.getValue() === ConnectionStatus.Online) {
        cov_1zm602fxtf().b[89][0]++;
        cov_1zm602fxtf().s[290]++;
        throw new Error('DirectLineJS: It is connected, we cannot set user id.');
      } else {
        cov_1zm602fxtf().b[89][1]++;
      }

      var userIdFromToken = (cov_1zm602fxtf().s[291]++, this.parseToken(this.token));
      cov_1zm602fxtf().s[292]++;

      if (userIdFromToken) {
        cov_1zm602fxtf().b[90][0]++;
        cov_1zm602fxtf().s[293]++;
        return console.warn('DirectLineJS: user id is already set in token, will ignore this user id.');
      } else {
        cov_1zm602fxtf().b[90][1]++;
      }

      cov_1zm602fxtf().s[294]++;

      if (/^dl_/.test(userId)) {
        cov_1zm602fxtf().b[91][0]++;
        cov_1zm602fxtf().s[295]++;
        return console.warn('DirectLineJS: user id prefixed with "dl_" is reserved and must be embedded into the Direct Line token to prevent forgery.');
      } else {
        cov_1zm602fxtf().b[91][1]++;
      }

      cov_1zm602fxtf().s[296]++;
      this.userIdOnStartConversation = userId;
    }
  }, {
    key: "parseToken",
    value: function parseToken(token) {
      cov_1zm602fxtf().f[98]++;
      cov_1zm602fxtf().s[297]++;

      try {
        var _ref3 = (cov_1zm602fxtf().s[298]++, (0, _jwtDecode["default"])(token)),
            user = _ref3.user;

        cov_1zm602fxtf().s[299]++;
        return user;
      } catch (e) {
        cov_1zm602fxtf().s[300]++;

        if (e instanceof _jwtDecode.InvalidTokenError) {
          cov_1zm602fxtf().b[92][0]++;
          cov_1zm602fxtf().s[301]++;
          return undefined;
        } else {
          cov_1zm602fxtf().b[92][1]++;
        }
      }
    }
  }]);
  return DirectLine;
}();

exports.DirectLine = DirectLine;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RMaW5lLnRzIl0sIm5hbWVzIjpbIkRJUkVDVF9MSU5FX1ZFUlNJT04iLCJDb25uZWN0aW9uU3RhdHVzIiwid3JhcEFqYXhXaXRoUmV0cnkiLCJzb3VyY2UiLCJzY2hlZHVsZXIiLCJub3RJbXBsZW1lbnRlZCIsIkVycm9yIiwiaW5uZXIiLCJyZXNwb25zZSQiLCJlcnIiLCJzdGF0dXMiLCJyZXRyeUFmdGVyVmFsdWUiLCJ4aHIiLCJnZXRSZXNwb25zZUhlYWRlciIsInJldHJ5QWZ0ZXIiLCJOdW1iZXIiLCJpc05hTiIsIk9ic2VydmFibGUiLCJ0aW1lciIsImZsYXRNYXAiLCJfIiwib3V0ZXIiLCJ1cmxPclJlcXVlc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJnZXQiLCJ1cmwiLCJoZWFkZXJzIiwicG9zdCIsImJvZHkiLCJwdXQiLCJwYXRjaCIsImdldEpTT04iLCJtYWtlU2VydmljZXMiLCJzZXJ2aWNlcyIsIkFzeW5jU2NoZWR1bGVyIiwiYWpheCIsIldlYlNvY2tldCIsInJhbmRvbSIsIk1hdGgiLCJQT0xMSU5HX0lOVEVSVkFMX0xPV0VSX0JPVU5EIiwiZXJyb3JFeHBpcmVkVG9rZW4iLCJlcnJvckNvbnZlcnNhdGlvbkVuZGVkIiwiZXJyb3JGYWlsZWRUb0Nvbm5lY3QiLCJrb25zb2xlIiwibG9nIiwibWVzc2FnZSIsIndpbmRvdyIsIm9wdGlvbmFsUGFyYW1zIiwiY29uc29sZSIsIkRpcmVjdExpbmUiLCJvcHRpb25zIiwiQmVoYXZpb3JTdWJqZWN0IiwiVW5pbml0aWFsaXplZCIsImxpZmV0aW1lUmVmcmVzaFRva2VuIiwic2VjcmV0IiwidG9rZW4iLCJ3ZWJTb2NrZXQiLCJ1bmRlZmluZWQiLCJjb252ZXJzYXRpb25TdGFydFByb3BlcnRpZXMiLCJsb2NhbGUiLCJwcm90b3R5cGUiLCJ0b1N0cmluZyIsImNhbGwiLCJsb2NhbGVPblN0YXJ0Q29udmVyc2F0aW9uIiwid2FybiIsImRvbWFpbiIsImNvbnZlcnNhdGlvbklkIiwid2F0ZXJtYXJrIiwic3RyZWFtVXJsIiwidGltZW91dCIsImludGVydmFsUmVmcmVzaFRva2VuIiwicmV0cmllcyIsInJldHJ5RGVsYXkiLCJfYm90QWdlbnQiLCJnZXRCb3RBZ2VudCIsImJvdEFnZW50IiwicGFyc2VkUG9sbGluZ0ludGVydmFsIiwicG9sbGluZ0ludGVydmFsIiwiZXhwaXJlZFRva2VuRXhoYXVzdGlvbiIsInNldENvbm5lY3Rpb25TdGF0dXNGYWxsYmFjayIsIkV4cGlyZWRUb2tlbiIsIkZhaWxlZFRvQ29ubmVjdCIsImhhbmRsZUhpc3RvcnlBcGkiLCJoaXN0b3J5SWQiLCJoaXN0b3J5TG9hZGVkIiwiYWN0aXZpdHkkIiwid2ViU29ja2V0QWN0aXZpdHkkIiwicG9sbGluZ0dldEFjdGl2aXR5JCIsInNoYXJlIiwib25jZSIsIm9icyIsImNvbm5lY3Rpb25TdGF0dXMkIiwiY29ubmVjdGlvblN0YXR1cyIsIm5leHQiLCJDb25uZWN0aW5nIiwiT25saW5lIiwib2YiLCJzdGFydENvbnZlcnNhdGlvbiIsImNvbnZlcnNhdGlvbiIsInJlcGxhY2UiLCJyZWZlcmVuY2VHcmFtbWFySWQiLCJyZWZyZXNoVG9rZW5Mb29wIiwiZXJyb3IiLCJtYXAiLCJmaWx0ZXIiLCJFbmRlZCIsInRha2UiLCJjb25uZWN0aW9uU3RhdHVzRnJvbSIsImNvbm5lY3Rpb25TdGF0dXNUbyIsIm1heEF0dGVtcHRzIiwiYXR0ZW1wdHMiLCJjdXJyU3RhdHVzIiwiZ2V0VmFsdWUiLCJwcm90ZWN0ZWRDb25uZWN0aW9uU3RhdHVzIiwibWV0aG9kIiwidXNlciIsImlkIiwidXNlcklkT25TdGFydENvbnZlcnNhdGlvbiIsImNvbW1vbkhlYWRlcnMiLCJhamF4UmVzcG9uc2UiLCJyZXNwb25zZSIsInJldHJ5V2hlbiIsImVycm9yJCIsIm1lcmdlTWFwIiwiZGVsYXkiLCJ0b2tlblJlZnJlc2hTdWJzY3JpcHRpb24iLCJpbnRlcnZhbCIsInJlZnJlc2hUb2tlbiIsInN1YnNjcmliZSIsIkRhdGUiLCJjaGVja0Nvbm5lY3Rpb24iLCJleHBpcmVkVG9rZW4iLCJ1bnN1YnNjcmliZSIsImUiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzZXNzaW9uSWQiLCJjYXRjaEV4cGlyZWRUb2tlbiIsImFjdGl2aXR5IiwiZnJvbSIsInR5cGUiLCJhdHRhY2htZW50cyIsImxlbmd0aCIsInBvc3RNZXNzYWdlV2l0aEF0dGFjaG1lbnRzIiwiY2F0Y2hQb3N0RXJyb3IiLCJhdHRhY2htZW50TmFtZXMiLCJtZWRpYSIsIm5hbWUiLCJjbGVhbnNlZEF0dGFjaG1lbnRzIiwiYXR0YWNobWVudCIsImluZGV4IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImFwcGVuZCIsIkJsb2IiLCJKU09OIiwic3RyaW5naWZ5Iiwic3RyaW5nIiwiY29udGVudFVybCIsIm90aGVycyIsInJlc3BvbnNlVHlwZSIsImNvbnRlbnRUeXBlIiwiY291bnQiLCJwb2xsZXIkIiwiY3JlYXRlIiwic3Vic2NyaWJlciIsInRyaWdnZXIkIiwic3RhcnRUaW1lc3RhbXAiLCJub3ciLCJBY2NlcHQiLCJyZXN1bHQiLCJzZXRUaW1lb3V0IiwibWF4IiwiZW1wdHkiLCJhY3Rpdml0eUdyb3VwIiwib2JzZXJ2YWJsZUZyb21BY3Rpdml0eUdyb3VwIiwiYWN0aXZpdGllcyIsIm9ic2VydmFibGVXZWJTb2NrZXQiLCJnZXRSZXRyeURlbGF5IiwicmVjb25uZWN0VG9Db252ZXJzYXRpb24iLCJmbG9vciIsIndzIiwic3ViIiwiY2xvc2VkIiwib25vcGVuIiwib3BlbiIsInNlbmQiLCJvbmNsb3NlIiwiY2xvc2UiLCJvbmVycm9yIiwib25tZXNzYWdlIiwiZGF0YSIsInBhcnNlIiwiaXNGaXJzdFRpbWUiLCJnZXRVcmwiLCJsb2NhdGlvbiIsImJhc2VVcmwiLCJwcm90b2NvbCIsImhvc3QiLCJodHRwSGlzdG9yeSIsIlhNTEh0dHBSZXF1ZXN0IiwidXJsSGlzdG9yeSIsInRoYXQiLCJyZWFkeVN0YXRlIiwiY3VzdG9tQWdlbnQiLCJjbGllbnRBZ2VudCIsInVzZXJJZCIsInVzZXJJZEZyb21Ub2tlbiIsInBhcnNlVG9rZW4iLCJ0ZXN0IiwiSW52YWxpZFRva2VuRXJyb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFJQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFDQTs7QUFFQTs7QUFHQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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WTRFLDRCQUFqQixFQUFvQztBQUFBO0FBQUE7QUFDaEMsaUJBQU94SixTQUFQO0FBQ0gsU0FGRDtBQUFBO0FBQUE7QUFHSDtBQUNKIiwic291cmNlc0NvbnRlbnQiOlsiLy8gSW4gb3JkZXIgdG8ga2VlcCBmaWxlIHNpemUgZG93biwgb25seSBpbXBvcnQgdGhlIHBhcnRzIG9mIHJ4anMgdGhhdCB3ZSB1c2VcblxuaW1wb3J0ICdjb3JlLWpzL2ZlYXR1cmVzL3Byb21pc2UnO1xuaW1wb3J0ICd1cmwtc2VhcmNoLXBhcmFtcy1wb2x5ZmlsbCc7XG5pbXBvcnQgeyBBamF4UmVzcG9uc2UsIEFqYXhDcmVhdGlvbk1ldGhvZCwgQWpheFJlcXVlc3QsIEFqYXhFcnJvciB9IGZyb20gJ3J4anMvb2JzZXJ2YWJsZS9kb20vQWpheE9ic2VydmFibGUnO1xuaW1wb3J0IHsgQmVoYXZpb3JTdWJqZWN0IH0gZnJvbSAncnhqcy9CZWhhdmlvclN1YmplY3QnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XG5pbXBvcnQgeyBJU2NoZWR1bGVyIH0gZnJvbSAncnhqcy9TY2hlZHVsZXInO1xuaW1wb3J0IHsgU3Vic2NyaWJlciB9IGZyb20gJ3J4anMvU3Vic2NyaWJlcic7XG5pbXBvcnQgeyBTdWJzY3JpcHRpb24gfSBmcm9tICdyeGpzL1N1YnNjcmlwdGlvbic7XG5pbXBvcnQgeyBhc3luYyBhcyBBc3luY1NjaGVkdWxlciB9IGZyb20gJ3J4anMvc2NoZWR1bGVyL2FzeW5jJztcbmltcG9ydCBqd3REZWNvZGUsIHsgSnd0UGF5bG9hZCwgSW52YWxpZFRva2VuRXJyb3IgfSBmcm9tICdqd3QtZGVjb2RlJztcblxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jYXRjaCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NvbWJpbmVMYXRlc3QnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9jb3VudCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2RlbGF5JztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZG8nO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9maWx0ZXInO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tYXAnO1xuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9tZXJnZU1hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL2NvbmNhdE1hcCc7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3JldHJ5V2hlbic7XG5pbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL3NoYXJlJztcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvdGFrZSc7XG5cbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9kb20vYWpheCc7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvZW1wdHknO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2Zyb20nO1xuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL2ludGVydmFsJztcbmltcG9ydCAncnhqcy9hZGQvb2JzZXJ2YWJsZS9vZic7XG5pbXBvcnQgJ3J4anMvYWRkL29ic2VydmFibGUvdGhyb3cnO1xuXG5pbXBvcnQgZGVkdXBlRmlsZW5hbWVzIGZyb20gJy4vZGVkdXBlRmlsZW5hbWVzJztcbmltcG9ydCB7IG9iamVjdEV4cHJlc3Npb24gfSBmcm9tICdAYmFiZWwvdHlwZXMnO1xuXG5pbXBvcnQgeyBEaXJlY3RMaW5lU3RyZWFtaW5nIH0gZnJvbSAnLi9kaXJlY3RMaW5lU3RyZWFtaW5nJztcbmV4cG9ydCB7IERpcmVjdExpbmVTdHJlYW1pbmcgfTtcblxuY29uc3QgRElSRUNUX0xJTkVfVkVSU0lPTiA9ICdEaXJlY3RMaW5lLzMuMCc7XG5cbmRlY2xhcmUgdmFyIHByb2Nlc3M6IHtcbiAgICBhcmNoOiBzdHJpbmc7XG4gICAgZW52OiB7XG4gICAgICAgIFZFUlNJT046IHN0cmluZztcbiAgICAgICAgbnBtX3BhY2thZ2VfdmVyc2lvbjogc3RyaW5nO1xuICAgIH07XG4gICAgcGxhdGZvcm06IHN0cmluZztcbiAgICByZWxlYXNlOiBzdHJpbmc7XG4gICAgdmVyc2lvbjogc3RyaW5nO1xufTtcblxuLy8gRGlyZWN0IExpbmUgMy4wIHR5cGVzXG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udmVyc2F0aW9uIHtcbiAgICBjb252ZXJzYXRpb25JZDogc3RyaW5nLFxuICAgIHRva2VuOiBzdHJpbmcsXG4gICAgZVRhZz86IHN0cmluZyxcbiAgICBzdHJlYW1Vcmw/OiBzdHJpbmcsXG4gICAgcmVmZXJlbmNlR3JhbW1hcklkPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE1lZGlhVHlwZSA9IFwiaW1hZ2UvcG5nXCIgfCBcImltYWdlL2pwZ1wiIHwgXCJpbWFnZS9qcGVnXCIgfCBcImltYWdlL2dpZlwiIHwgXCJpbWFnZS9zdmcreG1sXCIgfCBcImF1ZGlvL21wZWdcIiB8IFwiYXVkaW8vbXA0XCIgfCBcInZpZGVvL21wNFwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIE1lZGlhIHtcbiAgICBjb250ZW50VHlwZTogTWVkaWFUeXBlLFxuICAgIGNvbnRlbnRVcmw6IHN0cmluZyxcbiAgICBuYW1lPzogc3RyaW5nLFxuICAgIHRodW1ibmFpbFVybD86IHN0cmluZ1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFVua25vd25NZWRpYXtcbiAgICBjb250ZW50VHlwZTogc3RyaW5nLFxuICAgIGNvbnRlbnRVcmw6IHN0cmluZyxcbiAgICBuYW1lPzogc3RyaW5nLFxuICAgIHRodW1ibmFpbFVybD86IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBDYXJkQWN0aW9uVHlwZXMgPSBcImNhbGxcIiB8IFwiZG93bmxvYWRGaWxlXCJ8IFwiaW1CYWNrXCIgfCBcIm1lc3NhZ2VCYWNrXCIgfCBcIm9wZW5VcmxcIiB8IFwicGxheUF1ZGlvXCIgfCBcInBsYXlWaWRlb1wiIHwgXCJwb3N0QmFja1wiIHwgXCJzaWduaW5cIiB8IFwic2hvd0ltYWdlXCI7XG5cbmV4cG9ydCB0eXBlIENhcmRBY3Rpb24gPSBDYWxsQ2FyZEFjdGlvbiB8IERvd25sb2FkRmlsZUNhcmRBY3Rpb24gfCBJTUJhY2tDYXJkQWN0aW9uIHwgTWVzc2FnZUJhY2tDYXJkQWN0aW9uIHwgT3BlblVSTENhcmRBY3Rpb24gfCBQbGF5QXVkaW9DYXJkQWN0aW9uIHwgUGxheVZpZGVvQ2FyZEFjdGlvbiB8IFBvc3RCYWNrQ2FyZEFjdGlvbiB8IFNpZ25JbkNhcmRBY3Rpb24gfCBTaG93SW1hZ2VDYXJkQWN0aW9uO1xuXG5leHBvcnQgaW50ZXJmYWNlIENhbGxDYXJkQWN0aW9uIHtcbiAgICBpbWFnZT86IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHR5cGU6IFwiY2FsbFwiLFxuICAgIHZhbHVlOiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBEb3dubG9hZEZpbGVDYXJkQWN0aW9uIHtcbiAgICBpbWFnZT86IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHR5cGU6IFwiZG93bmxvYWRGaWxlXCIsXG4gICAgdmFsdWU6IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElNQmFja0NhcmRBY3Rpb24ge1xuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlPzogc3RyaW5nLFxuICAgIHR5cGU6IFwiaW1CYWNrXCIsXG4gICAgdmFsdWU6IHN0cmluZ1xufVxuXG5leHBvcnQgdHlwZSBNZXNzYWdlQmFja0NhcmRBY3Rpb24gPSBNZXNzYWdlQmFja1dpdGhJbWFnZSB8IE1lc3NhZ2VCYWNrV2l0aFRpdGxlXG5cbmV4cG9ydCBpbnRlcmZhY2UgTWVzc2FnZUJhY2tXaXRoSW1hZ2Uge1xuICAgIGRpc3BsYXlUZXh0Pzogc3RyaW5nLFxuICAgIGltYWdlOiBzdHJpbmcsXG4gICAgdGV4dD86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICB0eXBlOiBcIm1lc3NhZ2VCYWNrXCIsXG4gICAgdmFsdWU/OiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlQmFja1dpdGhUaXRsZSB7XG4gICAgZGlzcGxheVRleHQ/OiBzdHJpbmcsXG4gICAgaW1hZ2U/OiBzdHJpbmcsXG4gICAgdGV4dD86IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHR5cGU6IFwibWVzc2FnZUJhY2tcIixcbiAgICB2YWx1ZT86IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIE9wZW5VUkxDYXJkQWN0aW9uIHtcbiAgICBpbWFnZT86IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHR5cGU6IFwib3BlblVybFwiLFxuICAgIHZhbHVlOiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBQbGF5QXVkaW9DYXJkQWN0aW9uIHtcbiAgICBpbWFnZT86IHN0cmluZyxcbiAgICB0aXRsZTogc3RyaW5nLFxuICAgIHR5cGU6IFwicGxheUF1ZGlvXCIsXG4gICAgdmFsdWU6IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFBsYXlWaWRlb0NhcmRBY3Rpb24ge1xuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgdHlwZTogXCJwbGF5VmlkZW9cIixcbiAgICB2YWx1ZTogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUG9zdEJhY2tDYXJkQWN0aW9uIHtcbiAgICBpbWFnZT86IHN0cmluZyxcbiAgICB0aXRsZT86IHN0cmluZyxcbiAgICB0eXBlOiBcInBvc3RCYWNrXCIsXG4gICAgdmFsdWU6IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNob3dJbWFnZUNhcmRBY3Rpb24ge1xuICAgIGltYWdlPzogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgdHlwZTogXCJzaG93SW1hZ2VcIixcbiAgICB2YWx1ZTogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2lnbkluQ2FyZEFjdGlvbiB7XG4gICAgaW1hZ2U/OiBzdHJpbmcsXG4gICAgdGl0bGU6IHN0cmluZyxcbiAgICB0eXBlOiBcInNpZ25pblwiLFxuICAgIHZhbHVlOiBhbnlcbn1cblxuZXhwb3J0IGludGVyZmFjZSBDYXJkSW1hZ2Uge1xuICAgIGFsdD86IHN0cmluZyxcbiAgICB1cmw6IHN0cmluZyxcbiAgICB0YXA/OiBDYXJkQWN0aW9uXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSGVyb0NhcmQge1xuICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC5oZXJvXCIsXG4gICAgY29udGVudDoge1xuICAgICAgICB0aXRsZT86IHN0cmluZyxcbiAgICAgICAgc3VidGl0bGU/OiBzdHJpbmcsXG4gICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gICAgICAgIGltYWdlcz86IENhcmRJbWFnZVtdLFxuICAgICAgICBidXR0b25zPzogQ2FyZEFjdGlvbltdLFxuICAgICAgICB0YXA/OiBDYXJkQWN0aW9uXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFRodW1ibmFpbCB7XG4gICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLnRodW1ibmFpbFwiLFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgICAgIHN1YnRpdGxlPzogc3RyaW5nLFxuICAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICAgICAgICBpbWFnZXM/OiBDYXJkSW1hZ2VbXSxcbiAgICAgICAgYnV0dG9ucz86IENhcmRBY3Rpb25bXSxcbiAgICAgICAgdGFwPzogQ2FyZEFjdGlvblxuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBTaWduaW4ge1xuICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC5zaWduaW5cIixcbiAgICBjb250ZW50OiB7XG4gICAgICAgIHRleHQ/OiBzdHJpbmcsXG4gICAgICAgIGJ1dHRvbnM/OiBDYXJkQWN0aW9uW11cbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgT0F1dGgge1xuICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC5vYXV0aFwiLFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdGV4dD86IHN0cmluZyxcbiAgICAgICAgY29ubmVjdGlvbm5hbWU6IHN0cmluZyxcbiAgICAgICAgYnV0dG9ucz86IENhcmRBY3Rpb25bXVxuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZWNlaXB0SXRlbSB7XG4gICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgc3VidGl0bGU/OiBzdHJpbmcsXG4gICAgdGV4dD86IHN0cmluZyxcbiAgICBpbWFnZT86IENhcmRJbWFnZSxcbiAgICBwcmljZT86IHN0cmluZyxcbiAgICBxdWFudGl0eT86IHN0cmluZyxcbiAgICB0YXA/OiBDYXJkQWN0aW9uXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVjZWlwdCB7XG4gICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLnJlY2VpcHRcIixcbiAgICBjb250ZW50OiB7XG4gICAgICAgIHRpdGxlPzogc3RyaW5nLFxuICAgICAgICBmYWN0cz86IHsga2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcgfVtdLFxuICAgICAgICBpdGVtcz86IFJlY2VpcHRJdGVtW10sXG4gICAgICAgIHRhcD86IENhcmRBY3Rpb24sXG4gICAgICAgIHRheD86IHN0cmluZyxcbiAgICAgICAgdmF0Pzogc3RyaW5nLFxuICAgICAgICB0b3RhbD86IHN0cmluZyxcbiAgICAgICAgYnV0dG9ucz86IENhcmRBY3Rpb25bXVxuICAgIH1cbn1cblxuLy8gRGVwcmVjYXRlZCBmb3JtYXQgZm9yIFNreXBlIGNoYW5uZWxzLiBGb3IgdGVzdGluZyBsZWdhY3kgYm90cyBpbiBFbXVsYXRvciBvbmx5LlxuZXhwb3J0IGludGVyZmFjZSBGbGV4Q2FyZCB7XG4gICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLmZsZXhcIixcbiAgICBjb250ZW50OiB7XG4gICAgICAgIHRpdGxlPzogc3RyaW5nLFxuICAgICAgICBzdWJ0aXRsZT86IHN0cmluZyxcbiAgICAgICAgdGV4dD86IHN0cmluZyxcbiAgICAgICAgaW1hZ2VzPzogQ2FyZEltYWdlW10sXG4gICAgICAgIGJ1dHRvbnM/OiBDYXJkQWN0aW9uW10sXG4gICAgICAgIGFzcGVjdD86IHN0cmluZ1xuICAgIH1cbn1cblxuZXhwb3J0IGludGVyZmFjZSBBdWRpb0NhcmQge1xuICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC5hdWRpb1wiLFxuICAgIGNvbnRlbnQ6IHtcbiAgICAgICAgdGl0bGU/OiBzdHJpbmcsXG4gICAgICAgIHN1YnRpdGxlPzogc3RyaW5nLFxuICAgICAgICB0ZXh0Pzogc3RyaW5nLFxuICAgICAgICBtZWRpYT86IHsgdXJsOiBzdHJpbmcsIHByb2ZpbGU/OiBzdHJpbmcgfVtdLFxuICAgICAgICBidXR0b25zPzogQ2FyZEFjdGlvbltdLFxuICAgICAgICBhdXRvbG9vcD86IGJvb2xlYW4sXG4gICAgICAgIGF1dG9zdGFydD86IGJvb2xlYW5cbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgVmlkZW9DYXJkIHtcbiAgICBjb250ZW50VHlwZTogXCJhcHBsaWNhdGlvbi92bmQubWljcm9zb2Z0LmNhcmQudmlkZW9cIixcbiAgICBjb250ZW50OiB7XG4gICAgICAgIHRpdGxlPzogc3RyaW5nLFxuICAgICAgICBzdWJ0aXRsZT86IHN0cmluZyxcbiAgICAgICAgdGV4dD86IHN0cmluZyxcbiAgICAgICAgbWVkaWE/OiB7IHVybDogc3RyaW5nLCBwcm9maWxlPzogc3RyaW5nIH1bXSxcbiAgICAgICAgYnV0dG9ucz86IENhcmRBY3Rpb25bXSxcbiAgICAgICAgaW1hZ2U/OiB7IHVybDogc3RyaW5nLCBhbHQ/OiBzdHJpbmcgfSxcbiAgICAgICAgYXV0b2xvb3A/OiBib29sZWFuLFxuICAgICAgICBhdXRvc3RhcnQ/OiBib29sZWFuXG4gICAgfVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFkYXB0aXZlQ2FyZCB7XG4gICAgY29udGVudFR5cGU6IFwiYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5jYXJkLmFkYXB0aXZlXCIsXG4gICAgY29udGVudDogYW55O1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEFuaW1hdGlvbkNhcmQge1xuICAgIGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3ZuZC5taWNyb3NvZnQuY2FyZC5hbmltYXRpb25cIixcbiAgICBjb250ZW50OiB7XG4gICAgICAgIHRpdGxlPzogc3RyaW5nLFxuICAgICAgICBzdWJ0aXRsZT86IHN0cmluZyxcbiAgICAgICAgdGV4dD86IHN0cmluZyxcbiAgICAgICAgbWVkaWE/OiB7IHVybDogc3RyaW5nLCBwcm9maWxlPzogc3RyaW5nIH1bXSxcbiAgICAgICAgYnV0dG9ucz86IENhcmRBY3Rpb25bXSxcbiAgICAgICAgaW1hZ2U/OiB7IHVybDogc3RyaW5nLCBhbHQ/OiBzdHJpbmcgfSxcbiAgICAgICAgYXV0b2xvb3A/OiBib29sZWFuLFxuICAgICAgICBhdXRvc3RhcnQ/OiBib29sZWFuXG4gICAgfVxufVxuXG5leHBvcnQgdHlwZSBLbm93bk1lZGlhID0gTWVkaWEgfCBIZXJvQ2FyZCB8IFRodW1ibmFpbCB8IFNpZ25pbiB8IE9BdXRoIHwgUmVjZWlwdCB8IEF1ZGlvQ2FyZCB8IFZpZGVvQ2FyZCB8IEFuaW1hdGlvbkNhcmQgfCBGbGV4Q2FyZCB8IEFkYXB0aXZlQ2FyZDtcbmV4cG9ydCB0eXBlIEF0dGFjaG1lbnQgPSBLbm93bk1lZGlhIHwgVW5rbm93bk1lZGlhO1xuXG5leHBvcnQgdHlwZSBVc2VyUm9sZSA9IFwiYm90XCIgfCBcImNoYW5uZWxcIiB8IFwidXNlclwiO1xuXG5leHBvcnQgaW50ZXJmYWNlIFVzZXIge1xuICAgIGlkOiBzdHJpbmcsXG4gICAgbmFtZT86IHN0cmluZyxcbiAgICBpY29uVXJsPzogc3RyaW5nLFxuICAgIHJvbGU/OiBVc2VyUm9sZVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElBY3Rpdml0eSB7XG4gICAgdHlwZTogc3RyaW5nLFxuICAgIGNoYW5uZWxEYXRhPzogYW55LFxuICAgIGNoYW5uZWxJZD86IHN0cmluZyxcbiAgICBjb252ZXJzYXRpb24/OiB7IGlkOiBzdHJpbmcgfSxcbiAgICBlVGFnPzogc3RyaW5nLFxuICAgIGZyb206IFVzZXIsXG4gICAgaWQ/OiBzdHJpbmcsXG4gICAgdGltZXN0YW1wPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIEF0dGFjaG1lbnRMYXlvdXQgPSBcImxpc3RcIiB8IFwiY2Fyb3VzZWxcIjtcblxuZXhwb3J0IGludGVyZmFjZSBNZXNzYWdlIGV4dGVuZHMgSUFjdGl2aXR5IHtcbiAgICB0eXBlOiBcIm1lc3NhZ2VcIixcbiAgICB0ZXh0Pzogc3RyaW5nLFxuICAgIGxvY2FsZT86IHN0cmluZyxcbiAgICB0ZXh0Rm9ybWF0PzogXCJwbGFpblwiIHwgXCJtYXJrZG93blwiIHwgXCJ4bWxcIixcbiAgICBhdHRhY2htZW50TGF5b3V0PzogQXR0YWNobWVudExheW91dCxcbiAgICBhdHRhY2htZW50cz86IEF0dGFjaG1lbnRbXSxcbiAgICBlbnRpdGllcz86IGFueVtdLFxuICAgIHN1Z2dlc3RlZEFjdGlvbnM/OiB7IGFjdGlvbnM6IENhcmRBY3Rpb25bXSwgdG8/OiBzdHJpbmdbXSB9LFxuICAgIHNwZWFrPzogc3RyaW5nLFxuICAgIGlucHV0SGludD86IHN0cmluZyxcbiAgICB2YWx1ZT86IG9iamVjdFxufVxuXG5leHBvcnQgaW50ZXJmYWNlIFR5cGluZyBleHRlbmRzIElBY3Rpdml0eSB7XG4gICAgdHlwZTogXCJ0eXBpbmdcIlxufVxuXG5leHBvcnQgaW50ZXJmYWNlIEV2ZW50QWN0aXZpdHkgZXh0ZW5kcyBJQWN0aXZpdHkge1xuICAgIHR5cGU6IFwiZXZlbnRcIixcbiAgICBuYW1lOiBzdHJpbmcsXG4gICAgdmFsdWU6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBY3Rpdml0eSA9IE1lc3NhZ2UgfCBUeXBpbmcgfCBFdmVudEFjdGl2aXR5O1xuXG5leHBvcnQgaW50ZXJmYWNlIEFjdGl2aXR5R3JvdXAge1xuICAgIGFjdGl2aXRpZXM6IEFjdGl2aXR5W10sXG4gICAgd2F0ZXJtYXJrOiBzdHJpbmdcbn1cblxuLy8gVGhlc2UgdHlwZXMgYXJlIHNwZWNpZmljIHRvIHRoaXMgY2xpZW50IGxpYnJhcnksIG5vdCB0byBEaXJlY3QgTGluZSAzLjBcblxuZXhwb3J0IGVudW0gQ29ubmVjdGlvblN0YXR1cyB7XG4gICAgVW5pbml0aWFsaXplZCwgICAgICAgICAgICAgIC8vIHRoZSBzdGF0dXMgd2hlbiB0aGUgRGlyZWN0TGluZSBvYmplY3QgaXMgZmlyc3QgY3JlYXRlZC9jb25zdHJ1Y3RlZFxuICAgIENvbm5lY3RpbmcsICAgICAgICAgICAgICAgICAvLyBjdXJyZW50bHkgdHJ5aW5nIHRvIGNvbm5lY3QgdG8gdGhlIGNvbnZlcnNhdGlvblxuICAgIE9ubGluZSwgICAgICAgICAgICAgICAgICAgICAvLyBzdWNjZXNzZnVsbHkgY29ubmVjdGVkIHRvIHRoZSBjb252ZXJzYXRpb24uIENvbm5lY3Rpb24gaXMgaGVhbHRoeSBzbyBmYXIgYXMgd2Uga25vdy5cbiAgICBFeHBpcmVkVG9rZW4sICAgICAgICAgICAgICAgLy8gbGFzdCBvcGVyYXRpb24gZXJyb3JlZCBvdXQgd2l0aCBhbiBleHBpcmVkIHRva2VuLiBQb3NzaWJseSB3YWl0aW5nIGZvciBzb21lb25lIHRvIHN1cHBseSBhIG5ldyBvbmUuXG4gICAgRmFpbGVkVG9Db25uZWN0LCAgICAgICAgICAgIC8vIHRoZSBpbml0aWFsIGF0dGVtcHQgdG8gY29ubmVjdCB0byB0aGUgY29udmVyc2F0aW9uIGZhaWxlZC4gTm8gcmVjb3ZlcnkgcG9zc2libGUuXG4gICAgRW5kZWQgICAgICAgICAgICAgICAgICAgICAgIC8vIHRoZSBib3QgZW5kZWQgdGhlIGNvbnZlcnNhdGlvblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIERpcmVjdExpbmVPcHRpb25zIHtcbiAgICBzZWNyZXQ/OiBzdHJpbmcsXG4gICAgdG9rZW4/OiBzdHJpbmcsXG4gICAgY29udmVyc2F0aW9uSWQ/OiBzdHJpbmcsXG4gICAgd2F0ZXJtYXJrPzogc3RyaW5nLFxuICAgIGRvbWFpbj86IHN0cmluZyxcbiAgICB3ZWJTb2NrZXQ/OiBib29sZWFuLFxuICAgIHBvbGxpbmdJbnRlcnZhbD86IG51bWJlcixcbiAgICBzdHJlYW1Vcmw/OiBzdHJpbmcsXG4gICAgdGltZW91dD86IG51bWJlcixcbiAgICAvLyBBdHRhY2hlZCB0byBhbGwgcmVxdWVzdHMgdG8gaWRlbnRpZnkgcmVxdWVzdGluZyBhZ2VudC5cbiAgICBib3RBZ2VudD86IHN0cmluZyxcbiAgICBjb252ZXJzYXRpb25TdGFydFByb3BlcnRpZXM/OiBhbnksXG4gICAgaGFuZGxlSGlzdG9yeUFwaT86IGJvb2xlYW4sXG4gICAgaGlzdG9yeUlkPzogc3RyaW5nLFxuICAgIGhpc3RvcnlMb2FkZWQ/OiAoKSA9PiB2b2lkLFxuICAgIGxpZmV0aW1lUmVmcmVzaFRva2VuPzpudW1iZXIsXG4gICAgaW50ZXJ2YWxSZWZyZXNoVG9rZW4/Om51bWJlcixcbiAgICByZXRyaWVzPzpudW1iZXIsXG4gICAgcmV0cnlEZWxheT86bnVtYmVyXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2VydmljZXMge1xuICAgIHNjaGVkdWxlcjogSVNjaGVkdWxlcjtcbiAgICBXZWJTb2NrZXQ6IHR5cGVvZiBXZWJTb2NrZXQ7XG4gICAgYWpheDogQWpheENyZWF0aW9uTWV0aG9kO1xuICAgIHJhbmRvbTogKCkgPT4gbnVtYmVyO1xufVxuXG5jb25zdCB3cmFwQWpheFdpdGhSZXRyeSA9IChzb3VyY2U6IEFqYXhDcmVhdGlvbk1ldGhvZCwgc2NoZWR1bGVyOiBJU2NoZWR1bGVyKTogQWpheENyZWF0aW9uTWV0aG9kID0+e1xuXG4gICAgY29uc3Qgbm90SW1wbGVtZW50ZWQgPSAoKTogbmV2ZXIgPT4geyB0aHJvdyBuZXcgRXJyb3IoJ25vdCBpbXBsZW1lbnRlZCcpOyB9O1xuXG4gICAgY29uc3QgaW5uZXIgPSAocmVzcG9uc2UkIDogT2JzZXJ2YWJsZTxBamF4UmVzcG9uc2U+KSA9PiB7XG4gICAgICAgIHJldHVybiByZXNwb25zZSRcbiAgICAgICAgLmNhdGNoPEFqYXhSZXNwb25zZSwgQWpheFJlc3BvbnNlPigoZXJyKSA9PiB7XG4gICAgICAgICAgICBpZihlcnIuc3RhdHVzID09PSA0Mjkpe1xuICAgICAgICAgICAgICAgIGNvbnN0IHJldHJ5QWZ0ZXJWYWx1ZSA9IGVyci54aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ1JldHJ5LUFmdGVyJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgcmV0cnlBZnRlciA9IE51bWJlcihyZXRyeUFmdGVyVmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmKCFpc05hTihyZXRyeUFmdGVyKSl7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRpbWVyKHJldHJ5QWZ0ZXIsIHNjaGVkdWxlcilcbiAgICAgICAgICAgICAgICAgICAgLmZsYXRNYXAoXyA9PiBPYnNlcnZhYmxlLnRocm93KGVyciwgc2NoZWR1bGVyKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnIsIHNjaGVkdWxlcik7XG4gICAgICAgIH0pO1xuICAgIH07XG5cbiAgICBjb25zdCBvdXRlciA9ICh1cmxPclJlcXVlc3Q6IHN0cmluZ3wgQWpheFJlcXVlc3QpID0+IHtcbiAgICAgICAgcmV0dXJuIGlubmVyKHNvdXJjZSh1cmxPclJlcXVlc3QpKTtcbiAgICB9O1xuXG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24ob3V0ZXIsIHtcbiAgICAgICAgZ2V0OiAodXJsOiBzdHJpbmcsIGhlYWRlcnM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPEFqYXhSZXNwb25zZT4gPT4gbm90SW1wbGVtZW50ZWQoKSxcbiAgICAgICAgcG9zdDogKHVybDogc3RyaW5nLCBib2R5PzogYW55LCBoZWFkZXJzPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxBamF4UmVzcG9uc2U+ID0+IG5vdEltcGxlbWVudGVkKCksXG4gICAgICAgIHB1dDogKHVybDogc3RyaW5nLCBib2R5PzogYW55LCBoZWFkZXJzPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxBamF4UmVzcG9uc2U+ID0+IG5vdEltcGxlbWVudGVkKCksXG4gICAgICAgIHBhdGNoOiAodXJsOiBzdHJpbmcsIGJvZHk/OiBhbnksIGhlYWRlcnM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPEFqYXhSZXNwb25zZT4gPT4gbm90SW1wbGVtZW50ZWQoKSxcbiAgICAgICAgZGVsZXRlOiAodXJsOiBzdHJpbmcsIGhlYWRlcnM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPEFqYXhSZXNwb25zZT4gPT4gbm90SW1wbGVtZW50ZWQoKSxcbiAgICAgICAgZ2V0SlNPTjogPFQ+KHVybDogc3RyaW5nLCBoZWFkZXJzPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxUPiA9PiBub3RJbXBsZW1lbnRlZCgpXG4gICAgfSk7XG59XG5cbmNvbnN0IG1ha2VTZXJ2aWNlcyA9IChzZXJ2aWNlczogUGFydGlhbDxTZXJ2aWNlcz4pOiBTZXJ2aWNlcyA9PiB7XG4gICAgY29uc3Qgc2NoZWR1bGVyID0gc2VydmljZXMuc2NoZWR1bGVyIHx8IEFzeW5jU2NoZWR1bGVyO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNjaGVkdWxlcixcbiAgICAgICAgYWpheDogd3JhcEFqYXhXaXRoUmV0cnkoc2VydmljZXMuYWpheCB8fCBPYnNlcnZhYmxlLmFqYXgsIHNjaGVkdWxlciksXG4gICAgICAgIFdlYlNvY2tldDogc2VydmljZXMuV2ViU29ja2V0IHx8IFdlYlNvY2tldCxcbiAgICAgICAgcmFuZG9tOiBzZXJ2aWNlcy5yYW5kb20gfHwgTWF0aC5yYW5kb20sXG4gICAgfVxufVxuXG5cblxuY29uc3QgUE9MTElOR19JTlRFUlZBTF9MT1dFUl9CT1VORDogbnVtYmVyID0gMjAwOyAvL21zXG5cbmNvbnN0IGVycm9yRXhwaXJlZFRva2VuID0gbmV3IEVycm9yKFwiZXhwaXJlZCB0b2tlblwiKTtcbmNvbnN0IGVycm9yQ29udmVyc2F0aW9uRW5kZWQgPSBuZXcgRXJyb3IoXCJjb252ZXJzYXRpb24gZW5kZWRcIik7XG5jb25zdCBlcnJvckZhaWxlZFRvQ29ubmVjdCA9IG5ldyBFcnJvcihcImZhaWxlZCB0byBjb25uZWN0XCIpO1xuXG5jb25zdCBrb25zb2xlID0ge1xuICAgIGxvZzogKG1lc3NhZ2U/OiBhbnksIC4uLiBvcHRpb25hbFBhcmFtczogYW55W10pID0+IHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmICh3aW5kb3cgYXMgYW55KVtcImJvdGNoYXREZWJ1Z1wiXSAmJiBtZXNzYWdlKVxuICAgICAgICAgICAgY29uc29sZS5sb2cobWVzc2FnZSwgLi4uIG9wdGlvbmFsUGFyYW1zKTtcbiAgICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUJvdENvbm5lY3Rpb24ge1xuICAgIGNvbm5lY3Rpb25TdGF0dXMkOiBCZWhhdmlvclN1YmplY3Q8Q29ubmVjdGlvblN0YXR1cz4sXG4gICAgYWN0aXZpdHkkOiBPYnNlcnZhYmxlPEFjdGl2aXR5PixcbiAgICBlbmQoKTogdm9pZCxcbiAgICByZWZlcmVuY2VHcmFtbWFySWQ/OiBzdHJpbmcsXG4gICAgcG9zdEFjdGl2aXR5KGFjdGl2aXR5OiBBY3Rpdml0eSk6IE9ic2VydmFibGU8c3RyaW5nPixcbiAgICBnZXRTZXNzaW9uSWQ/IDogKCkgPT4gT2JzZXJ2YWJsZTxzdHJpbmc+LFxuICAgIGhpc3RvcnlMb2FkZWRGbGFnOiBib29sZWFuXG59XG5cbmV4cG9ydCBjbGFzcyBEaXJlY3RMaW5lIGltcGxlbWVudHMgSUJvdENvbm5lY3Rpb24ge1xuICAgIHB1YmxpYyBjb25uZWN0aW9uU3RhdHVzJCA9IG5ldyBCZWhhdmlvclN1YmplY3QoQ29ubmVjdGlvblN0YXR1cy5VbmluaXRpYWxpemVkKTtcbiAgICBwdWJsaWMgYWN0aXZpdHkkOiBPYnNlcnZhYmxlPEFjdGl2aXR5PjtcbiAgICBwdWJsaWMgYWN0aXZpdGllcyQ6IE9ic2VydmFibGU8QWN0aXZpdHlbXT47XG5cbiAgICBwcml2YXRlIGRvbWFpbiA9IFwiaHR0cHM6Ly9kaXJlY3RsaW5lLmJvdGZyYW1ld29yay5jb20vdjMvZGlyZWN0bGluZVwiO1xuICAgIHByaXZhdGUgd2ViU29ja2V0OiBib29sZWFuO1xuXG4gICAgcHJpdmF0ZSBjb252ZXJzYXRpb25JZDogc3RyaW5nO1xuICAgIHByaXZhdGUgZXhwaXJlZFRva2VuRXhoYXVzdGlvbjogRnVuY3Rpb247XG4gICAgcHJpdmF0ZSBzZWNyZXQ6IHN0cmluZztcbiAgICBwcml2YXRlIHRva2VuOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB3YXRlcm1hcmsgPSAnJztcbiAgICBwcml2YXRlIHN0cmVhbVVybDogc3RyaW5nO1xuICAgIHByaXZhdGUgX2JvdEFnZW50ID0gJyc7XG4gICAgcHJpdmF0ZSBzZXJ2aWNlczogU2VydmljZXM7XG4gICAgcHJpdmF0ZSBfdXNlckFnZW50OiBzdHJpbmc7XG4gICAgcHVibGljIHJlZmVyZW5jZUdyYW1tYXJJZDogc3RyaW5nO1xuICAgIHByaXZhdGUgdGltZW91dCA9IDIwICogMTAwMDtcbiAgICBwcml2YXRlIHJldHJpZXM6IG51bWJlcjtcbiAgICBwdWJsaWMgbGlmZXRpbWVSZWZyZXNoVG9rZW4gPSAzMCAqIDYwICogMTAwMDtcbiAgICBwdWJsaWMgaW50ZXJ2YWxSZWZyZXNoVG9rZW4gPSB0aGlzLmxpZmV0aW1lUmVmcmVzaFRva2VuIC8gMjtcbiAgICBwdWJsaWMgcmV0cnlEZWxheTpudW1iZXI7XG4gICAgcHJpdmF0ZSBsb2NhbGVPblN0YXJ0Q29udmVyc2F0aW9uOiBzdHJpbmc7XG4gICAgcHJpdmF0ZSB1c2VySWRPblN0YXJ0Q29udmVyc2F0aW9uOiBzdHJpbmc7XG5cbiAgICBwcml2YXRlIHBvbGxpbmdJbnRlcnZhbDogbnVtYmVyID0gMTAwMDsgLy9tc1xuXG4gICAgcHJpdmF0ZSB0b2tlblJlZnJlc2hTdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvbjtcblxuICAgIHByaXZhdGUgaXNGaXJzdFRpbWU6IGJvb2xlYW4gPSB0cnVlO1xuXG4gICAgcHJpdmF0ZSBoYXNIaXN0b3J5OiBib29sZWFuID0gZmFsc2U7XG5cbiAgICBwcml2YXRlIGhhbmRsZUhpc3RvcnlBcGk6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgaGlzdG9yeUlkOiBzdHJpbmc7XG5cbiAgICBwdWJsaWMgaGlzdG9yeUxvYWRlZEZsYWc6IGJvb2xlYW4gPSBmYWxzZTtcblxuICAgIHByaXZhdGUgaGlzdG9yeUxvYWRlZDogKCkgPT4gdm9pZDtcblxuICAgIGNvbnN0cnVjdG9yKG9wdGlvbnM6IERpcmVjdExpbmVPcHRpb25zICYgUGFydGlhbDxTZXJ2aWNlcz4pIHtcbiAgICAgICAgdGhpcy5zZWNyZXQgPSBvcHRpb25zLnNlY3JldDtcbiAgICAgICAgdGhpcy50b2tlbiA9IG9wdGlvbnMuc2VjcmV0IHx8IG9wdGlvbnMudG9rZW47XG4gICAgICAgIHRoaXMud2ViU29ja2V0ID0gKG9wdGlvbnMud2ViU29ja2V0ID09PSB1bmRlZmluZWQgPyB0cnVlIDogb3B0aW9ucy53ZWJTb2NrZXQpICYmIHR5cGVvZiBXZWJTb2NrZXQgIT09ICd1bmRlZmluZWQnICYmIFdlYlNvY2tldCAhPT0gdW5kZWZpbmVkO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNvbnZlcnNhdGlvblN0YXJ0UHJvcGVydGllcyAmJiBvcHRpb25zLmNvbnZlcnNhdGlvblN0YXJ0UHJvcGVydGllcy5sb2NhbGUpIHtcbiAgICAgICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob3B0aW9ucy5jb252ZXJzYXRpb25TdGFydFByb3BlcnRpZXMubG9jYWxlKSA9PT0gJ1tvYmplY3QgU3RyaW5nXScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvY2FsZU9uU3RhcnRDb252ZXJzYXRpb24gPSBvcHRpb25zLmNvbnZlcnNhdGlvblN0YXJ0UHJvcGVydGllcy5sb2NhbGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignRGlyZWN0TGluZUpTOiBjb252ZXJzYXRpb25TdGFydFByb3BlcnRpZXMubG9jYWxlIHdhcyBpZ25vcmVkOiB0aGUgbG9jYWxlIG5hbWUgbWF5IGJlIGEgQkNQIDQ3IGxhbmd1YWdlIHRhZycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuZG9tYWluKSB7XG4gICAgICAgICAgICB0aGlzLmRvbWFpbiA9IG9wdGlvbnMuZG9tYWluO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuY29udmVyc2F0aW9uSWQpIHtcbiAgICAgICAgICAgIHRoaXMuY29udmVyc2F0aW9uSWQgPSBvcHRpb25zLmNvbnZlcnNhdGlvbklkO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2F0ZXJtYXJrKSB7XG4gICAgICAgICAgICB0aGlzLndhdGVybWFyayA9ICBvcHRpb25zLndhdGVybWFyaztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLnN0cmVhbVVybCkge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMudG9rZW4gJiYgb3B0aW9ucy5jb252ZXJzYXRpb25JZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3RyZWFtVXJsID0gb3B0aW9ucy5zdHJlYW1Vcmw7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybignRGlyZWN0TGluZUpTOiBzdHJlYW1Vcmwgd2FzIGlnbm9yZWQ6IHlvdSBuZWVkIHRvIHByb3ZpZGUgYSB0b2tlbiBhbmQgYSBjb252ZXJzYXRpb25pZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMudGltZW91dCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWVvdXQgPSBvcHRpb25zLnRpbWVvdXQ7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5saWZldGltZVJlZnJlc2hUb2tlbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLmxpZmV0aW1lUmVmcmVzaFRva2VuID0gb3B0aW9ucy5saWZldGltZVJlZnJlc2hUb2tlbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLmludGVydmFsUmVmcmVzaFRva2VuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMuaW50ZXJ2YWxSZWZyZXNoVG9rZW4gPSBvcHRpb25zLmludGVydmFsUmVmcmVzaFRva2VuO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMucmV0cmllcyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJldHJpZXMgPSBvcHRpb25zLnJldHJpZXM7XG4gICAgICAgICB9XG4gICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5yZXRyaWVzID0gKHRoaXMubGlmZXRpbWVSZWZyZXNoVG9rZW4gLSB0aGlzLmludGVydmFsUmVmcmVzaFRva2VuKSAvIHRoaXMudGltZW91dDtcbiAgICAgICAgIH1cblxuICAgICAgICAgaWYgKG9wdGlvbnMucmV0cnlEZWxheSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLnJldHJ5RGVsYXkgPSBvcHRpb25zLnJldHJ5RGVsYXk7XG4gICAgICAgICB9XG4gICAgICAgICBlbHNle1xuICAgICAgICAgICAgdGhpcy5yZXRyeURlbGF5ID0gdGhpcy50aW1lb3V0O1xuICAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2JvdEFnZW50ID0gdGhpcy5nZXRCb3RBZ2VudChvcHRpb25zLmJvdEFnZW50KTtcblxuICAgICAgICB0aGlzLnNlcnZpY2VzID0gbWFrZVNlcnZpY2VzKG9wdGlvbnMpO1xuXG4gICAgICAgIGNvbnN0IHBhcnNlZFBvbGxpbmdJbnRlcnZhbCA9IH5+b3B0aW9ucy5wb2xsaW5nSW50ZXJ2YWw7XG5cbiAgICAgICAgaWYgKHBhcnNlZFBvbGxpbmdJbnRlcnZhbCA8IFBPTExJTkdfSU5URVJWQUxfTE9XRVJfQk9VTkQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5wb2xsaW5nSW50ZXJ2YWwgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKGBEaXJlY3RMaW5lSlM6IHByb3ZpZGVkIHBvbGxpbmdJbnRlcnZhbCAoJHsgb3B0aW9ucy5wb2xsaW5nSW50ZXJ2YWwgfSkgaXMgdW5kZXIgbG93ZXIgYm91bmQgKDIwMG1zKSwgdXNpbmcgZGVmYXVsdCBvZiAxMDAwbXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9sbGluZ0ludGVydmFsID0gcGFyc2VkUG9sbGluZ0ludGVydmFsO1xuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5leHBpcmVkVG9rZW5FeGhhdXN0aW9uID0gdGhpcy5zZXRDb25uZWN0aW9uU3RhdHVzRmFsbGJhY2soXG4gICAgICAgICAgICBDb25uZWN0aW9uU3RhdHVzLkV4cGlyZWRUb2tlbixcbiAgICAgICAgICAgIENvbm5lY3Rpb25TdGF0dXMuRmFpbGVkVG9Db25uZWN0LFxuICAgICAgICAgICAgNVxuICAgICAgICApO1xuXG4gICAgICAgIGlmIChvcHRpb25zLmhhbmRsZUhpc3RvcnlBcGkgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlSGlzdG9yeUFwaSA9IG9wdGlvbnMuaGFuZGxlSGlzdG9yeUFwaTtcblxuICAgICAgICBpZiAob3B0aW9ucy5oaXN0b3J5SWQgIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgIHRoaXMuaGlzdG9yeUlkID0gb3B0aW9ucy5oaXN0b3J5SWQ7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuaGlzdG9yeUxvYWRlZCAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgdGhpcy5oaXN0b3J5TG9hZGVkID0gb3B0aW9ucy5oaXN0b3J5TG9hZGVkO1xuXG4gICAgICAgIHRoaXMuYWN0aXZpdHkkID0gKHRoaXMud2ViU29ja2V0XG4gICAgICAgICAgICA/IHRoaXMud2ViU29ja2V0QWN0aXZpdHkkKClcbiAgICAgICAgICAgIDogdGhpcy5wb2xsaW5nR2V0QWN0aXZpdHkkKClcbiAgICAgICAgKS5zaGFyZSgpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIGdldENvbnZlcnNhdGlvbklkXG4gICAgICovXG4gICAgIHB1YmxpYyBnZXRDb252ZXJzYXRpb25JZCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJzYXRpb25JZDtcbiAgICB9XG5cbiAgICAvLyBFdmVyeSB0aW1lIHdlJ3JlIGFib3V0IHRvIG1ha2UgYSBEaXJlY3QgTGluZSBSRVNUIGNhbGwsIHdlIGNhbGwgdGhpcyBmaXJzdCB0byBzZWUgY2hlY2sgdGhlIGN1cnJlbnQgY29ubmVjdGlvbiBzdGF0dXMuXG4gICAgLy8gRWl0aGVyIHRocm93cyBhbiBlcnJvciAoaW5kaWNhdGluZyBhbiBlcnJvciBzdGF0ZSkgb3IgZW1pdHMgYSBudWxsLCBpbmRpY2F0aW5nIGEgKHByZXN1bWFibHkpIGhlYWx0aHkgY29ubmVjdGlvblxuICAgIHByaXZhdGUgY2hlY2tDb25uZWN0aW9uKG9uY2UgPSBmYWxzZSkge1xuICAgICAgICBsZXQgb2JzID0gIHRoaXMuY29ubmVjdGlvblN0YXR1cyRcbiAgICAgICAgLmZsYXRNYXAoY29ubmVjdGlvblN0YXR1cyA9PiB7XG4gICAgICAgICAgICBpZiAoY29ubmVjdGlvblN0YXR1cyA9PT0gQ29ubmVjdGlvblN0YXR1cy5VbmluaXRpYWxpemVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdHVzJC5uZXh0KENvbm5lY3Rpb25TdGF0dXMuQ29ubmVjdGluZyk7XG5cbiAgICAgICAgICAgICAgICAvL2lmIHRva2VuIGFuZCBzdHJlYW1VcmwgYXJlIGRlZmluZWQgaXQgbWVhbnMgcmVjb25uZWN0IGhhcyBhbHJlYWR5IGJlZW4gZG9uZS4gU2tpcHBpbmcgaXQuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMudG9rZW4gJiYgdGhpcy5zdHJlYW1VcmwpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdHVzJC5uZXh0KENvbm5lY3Rpb25TdGF0dXMuT25saW5lKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YoY29ubmVjdGlvblN0YXR1cywgdGhpcy5zZXJ2aWNlcy5zY2hlZHVsZXIpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnN0YXJ0Q29udmVyc2F0aW9uKCkuZG8oY29udmVyc2F0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29udmVyc2F0aW9uSWQgPSBjb252ZXJzYXRpb24uY29udmVyc2F0aW9uSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnRva2VuID0gdGhpcy5zZWNyZXQgfHwgY29udmVyc2F0aW9uLnRva2VuO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoKGNvbnZlcnNhdGlvbi5zdHJlYW1VcmwpICYmICh0aGlzLmhhbmRsZUhpc3RvcnlBcGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdHJlYW1VcmwgPSBjb252ZXJzYXRpb24uc3RyZWFtVXJsLnJlcGxhY2UoXCJ3YXRlcm1hcms9LSZcIiwgXCJcIik7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmZXJlbmNlR3JhbW1hcklkID0gY29udmVyc2F0aW9uLnJlZmVyZW5jZUdyYW1tYXJJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWNyZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoVG9rZW5Mb29wKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXR1cyQubmV4dChDb25uZWN0aW9uU3RhdHVzLk9ubGluZSk7XG4gICAgICAgICAgICAgICAgICAgIH0sIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuY29ubmVjdGlvblN0YXR1cyQubmV4dChDb25uZWN0aW9uU3RhdHVzLkZhaWxlZFRvQ29ubmVjdCk7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgIC5tYXAoXyA9PiBjb25uZWN0aW9uU3RhdHVzKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihjb25uZWN0aW9uU3RhdHVzLCB0aGlzLnNlcnZpY2VzLnNjaGVkdWxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIC5maWx0ZXIoY29ubmVjdGlvblN0YXR1cyA9PiBjb25uZWN0aW9uU3RhdHVzICE9IENvbm5lY3Rpb25TdGF0dXMuVW5pbml0aWFsaXplZCAmJiBjb25uZWN0aW9uU3RhdHVzICE9IENvbm5lY3Rpb25TdGF0dXMuQ29ubmVjdGluZylcbiAgICAgICAgLmZsYXRNYXAoY29ubmVjdGlvblN0YXR1cyA9PiB7XG4gICAgICAgICAgICBzd2l0Y2ggKGNvbm5lY3Rpb25TdGF0dXMpIHtcbiAgICAgICAgICAgICAgICBjYXNlIENvbm5lY3Rpb25TdGF0dXMuRW5kZWQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yQ29udmVyc2F0aW9uRW5kZWQsIHRoaXMuc2VydmljZXMuc2NoZWR1bGVyKTtcblxuICAgICAgICAgICAgICAgIGNhc2UgQ29ubmVjdGlvblN0YXR1cy5GYWlsZWRUb0Nvbm5lY3Q6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yRmFpbGVkVG9Db25uZWN0LCB0aGlzLnNlcnZpY2VzLnNjaGVkdWxlcik7XG5cbiAgICAgICAgICAgICAgICBjYXNlIENvbm5lY3Rpb25TdGF0dXMuRXhwaXJlZFRva2VuOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihjb25uZWN0aW9uU3RhdHVzLCB0aGlzLnNlcnZpY2VzLnNjaGVkdWxlcik7XG5cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZihjb25uZWN0aW9uU3RhdHVzLCB0aGlzLnNlcnZpY2VzLnNjaGVkdWxlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgcmV0dXJuIG9uY2UgPyBvYnMudGFrZSgxKSA6IG9icztcbiAgICB9XG5cbiAgICBzZXRDb25uZWN0aW9uU3RhdHVzRmFsbGJhY2soXG4gICAgICAgIGNvbm5lY3Rpb25TdGF0dXNGcm9tOiBDb25uZWN0aW9uU3RhdHVzLFxuICAgICAgICBjb25uZWN0aW9uU3RhdHVzVG86IENvbm5lY3Rpb25TdGF0dXMsXG4gICAgICAgIG1heEF0dGVtcHRzID0gNVxuICAgICkge1xuICAgICAgICBtYXhBdHRlbXB0cy0tO1xuICAgICAgICBsZXQgYXR0ZW1wdHMgPSAwO1xuICAgICAgICBsZXQgY3VyclN0YXR1cyA9IG51bGw7XG4gICAgICAgIHJldHVybiAoc3RhdHVzOiBDb25uZWN0aW9uU3RhdHVzKTogQ29ubmVjdGlvblN0YXR1cyA9PiB7XG4gICAgICAgICAgICBpZiAoc3RhdHVzID09PSBjb25uZWN0aW9uU3RhdHVzRnJvbSAmJiBjdXJyU3RhdHVzID09PSBzdGF0dXMgJiYgYXR0ZW1wdHMgPj0gbWF4QXR0ZW1wdHMpIHtcbiAgICAgICAgICAgICAgICBhdHRlbXB0cyA9IDBcbiAgICAgICAgICAgICAgICByZXR1cm4gY29ubmVjdGlvblN0YXR1c1RvO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXR0ZW1wdHMrKztcbiAgICAgICAgICAgIGN1cnJTdGF0dXMgPSBzdGF0dXM7XG4gICAgICAgICAgICByZXR1cm4gc3RhdHVzO1xuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZXhwaXJlZFRva2VuKCkge1xuICAgICAgICBjb25zdCBjb25uZWN0aW9uU3RhdHVzID0gdGhpcy5jb25uZWN0aW9uU3RhdHVzJC5nZXRWYWx1ZSgpO1xuICAgICAgICBpZiAoY29ubmVjdGlvblN0YXR1cyAhPSBDb25uZWN0aW9uU3RhdHVzLkVuZGVkICYmIGNvbm5lY3Rpb25TdGF0dXMgIT0gQ29ubmVjdGlvblN0YXR1cy5GYWlsZWRUb0Nvbm5lY3QpXG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0dXMkLm5leHQoQ29ubmVjdGlvblN0YXR1cy5FeHBpcmVkVG9rZW4pO1xuXG4gICAgICAgIGNvbnN0IHByb3RlY3RlZENvbm5lY3Rpb25TdGF0dXMgPSB0aGlzLmV4cGlyZWRUb2tlbkV4aGF1c3Rpb24odGhpcy5jb25uZWN0aW9uU3RhdHVzJC5nZXRWYWx1ZSgpKTtcbiAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdHVzJC5uZXh0KHByb3RlY3RlZENvbm5lY3Rpb25TdGF0dXMpO1xuICAgIH1cblxuICAgIHByaXZhdGUgc3RhcnRDb252ZXJzYXRpb24oKSB7XG4gICAgICAgIC8vaWYgY29udmVyc2F0aW9uaWQgaXMgc2V0IGhlcmUsIGl0IG1lYW5zIHdlIG5lZWQgdG8gY2FsbCB0aGUgcmVjb25uZWN0IGFwaSwgZWxzZSBpdCBpcyBhIG5ldyBjb252ZXJzYXRpb25cbiAgICAgICAgY29uc3QgdXJsID0gdGhpcy5jb252ZXJzYXRpb25JZFxuICAgICAgICAgICAgPyBgJHt0aGlzLmRvbWFpbn0vY29udmVyc2F0aW9ucy8ke3RoaXMuY29udmVyc2F0aW9uSWR9P3dhdGVybWFyaz0ke3RoaXMud2F0ZXJtYXJrfWBcbiAgICAgICAgICAgIDogYCR7dGhpcy5kb21haW59L2NvbnZlcnNhdGlvbnNgO1xuICAgICAgICBjb25zdCBtZXRob2QgPSB0aGlzLmNvbnZlcnNhdGlvbklkID8gXCJHRVRcIiA6IFwiUE9TVFwiO1xuICAgICAgICBjb25zdCBib2R5ID0gdGhpcy5jb252ZXJzYXRpb25JZFxuICAgICAgICAgICAgPyB1bmRlZmluZWRcbiAgICAgICAgICAgIDoge1xuICAgICAgICAgICAgICAgIHVzZXI6IHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHRoaXMudXNlcklkT25TdGFydENvbnZlcnNhdGlvblxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgbG9jYWxlOiB0aGlzLmxvY2FsZU9uU3RhcnRDb252ZXJzYXRpb25cbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2VydmljZXMuYWpheCh7XG4gICAgICAgICAgICBtZXRob2QsXG4gICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgIFwiQWNjZXB0XCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgIC4uLnRoaXMuY29tbW9uSGVhZGVycygpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4vLyAgICAgIC5kbyhhamF4UmVzcG9uc2UgPT4ga29uc29sZS5sb2coXCJjb252ZXJzYXRpb24gYWpheFJlc3BvbnNlXCIsIGFqYXhSZXNwb25zZS5yZXNwb25zZSkpXG4gICAgICAgIC5tYXAoYWpheFJlc3BvbnNlID0+IGFqYXhSZXNwb25zZS5yZXNwb25zZSBhcyBDb252ZXJzYXRpb24pXG4gICAgICAgIC5yZXRyeVdoZW4oZXJyb3IkID0+XG4gICAgICAgICAgICAvLyBmb3Igbm93IHdlIGRlZW0gNHh4IGFuZCA1eHggZXJyb3JzIGFzIHVucmVjb3ZlcmFibGVcbiAgICAgICAgICAgIC8vIGZvciBldmVyeXRoaW5nIGVsc2UgKHRpbWVvdXRzKSwgcmV0cnkgZm9yIGEgd2hpbGVcbiAgICAgICAgICAgIGVycm9yJC5tZXJnZU1hcCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZXJyb3Iuc3RhdHVzID49IDQwMCAmJiBlcnJvci5zdGF0dXMgPCA2MDBcbiAgICAgICAgICAgICAgICA/IE9ic2VydmFibGUudGhyb3coZXJyb3IsIHRoaXMuc2VydmljZXMuc2NoZWR1bGVyKVxuICAgICAgICAgICAgICAgIDogT2JzZXJ2YWJsZS5vZihlcnJvciwgdGhpcy5zZXJ2aWNlcy5zY2hlZHVsZXIpXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmRlbGF5KHRoaXMucmV0cnlEZWxheSwgdGhpcy5zZXJ2aWNlcy5zY2hlZHVsZXIpXG4gICAgICAgICAgICAudGFrZSh0aGlzLnJldHJpZXMpXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBwcml2YXRlIHJlZnJlc2hUb2tlbkxvb3AoKSB7XG4gICAgICAgIHRoaXMudG9rZW5SZWZyZXNoU3Vic2NyaXB0aW9uID0gT2JzZXJ2YWJsZS5pbnRlcnZhbCh0aGlzLmludGVydmFsUmVmcmVzaFRva2VuLCB0aGlzLnNlcnZpY2VzLnNjaGVkdWxlcilcbiAgICAgICAgLmZsYXRNYXAoXyA9PiB0aGlzLnJlZnJlc2hUb2tlbigpKVxuICAgICAgICAuc3Vic2NyaWJlKHRva2VuID0+IHtcbiAgICAgICAgICAgIGtvbnNvbGUubG9nKFwicmVmcmVzaGluZyB0b2tlblwiLCB0b2tlbiwgXCJhdFwiLCBuZXcgRGF0ZSgpKTtcbiAgICAgICAgICAgIHRoaXMudG9rZW4gPSB0b2tlbjtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSByZWZyZXNoVG9rZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQ29ubmVjdGlvbih0cnVlKVxuICAgICAgICAuZmxhdE1hcChfID0+XG4gICAgICAgICAgICB0aGlzLnNlcnZpY2VzLmFqYXgoe1xuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBgJHt0aGlzLmRvbWFpbn0vdG9rZW5zL3JlZnJlc2hgLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuY29tbW9uSGVhZGVycygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoYWpheFJlc3BvbnNlID0+IGFqYXhSZXNwb25zZS5yZXNwb25zZS50b2tlbiBhcyBzdHJpbmcpXG4gICAgICAgICAgICAucmV0cnlXaGVuKGVycm9yJCA9PiBlcnJvciRcbiAgICAgICAgICAgICAgICAubWVyZ2VNYXAoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoZSB0b2tlbiBpcyBleHBpcmVkIHRoZXJlJ3Mgbm8gcmVhc29uIHRvIGtlZXAgdHJ5aW5nXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4cGlyZWRUb2tlbigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IsIHRoaXMuc2VydmljZXMuc2NoZWR1bGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWYgdGhlIGJvdCBpcyBnb25lLCB3ZSBzaG91bGQgc3RvcCByZXRyeWluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IsIHRoaXMuc2VydmljZXMuc2NoZWR1bGVyKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKGVycm9yLCB0aGlzLnNlcnZpY2VzLnNjaGVkdWxlcik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZGVsYXkodGhpcy5yZXRyeURlbGF5LCB0aGlzLnNlcnZpY2VzLnNjaGVkdWxlcilcbiAgICAgICAgICAgICAgICAudGFrZSh0aGlzLnJldHJpZXMpXG4gICAgICAgICAgICApXG4gICAgICAgIClcbiAgICB9XG5cbiAgICBwdWJsaWMgcmVjb25uZWN0KGNvbnZlcnNhdGlvbjogQ29udmVyc2F0aW9uKSB7XG4gICAgICAgIHRoaXMudG9rZW4gPSBjb252ZXJzYXRpb24udG9rZW47XG4gICAgICAgIHRoaXMuY29udmVyc2F0aW9uSWQgPSBjb252ZXJzYXRpb24uY29udmVyc2F0aW9uSWQ7XG4gICAgICAgIGlmICgoY29udmVyc2F0aW9uLnN0cmVhbVVybCkgJiYgKHRoaXMuaGFuZGxlSGlzdG9yeUFwaSkpIHtcbiAgICAgICAgICAgIHRoaXMuc3RyZWFtVXJsID0gY29udmVyc2F0aW9uLnN0cmVhbVVybC5yZXBsYWNlKFwid2F0ZXJtYXJrPS0mXCIsIFwiXCIpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0dXMkLmdldFZhbHVlKCkgPT09IENvbm5lY3Rpb25TdGF0dXMuRXhwaXJlZFRva2VuKVxuICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdHVzJC5uZXh0KENvbm5lY3Rpb25TdGF0dXMuT25saW5lKTtcbiAgICB9XG5cbiAgICBlbmQoKSB7XG4gICAgICAgIGlmICh0aGlzLnRva2VuUmVmcmVzaFN1YnNjcmlwdGlvbilcbiAgICAgICAgICAgIHRoaXMudG9rZW5SZWZyZXNoU3Vic2NyaXB0aW9uLnVuc3Vic2NyaWJlKCk7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0dXMkLm5leHQoQ29ubmVjdGlvblN0YXR1cy5FbmRlZCk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlID09PSBlcnJvckNvbnZlcnNhdGlvbkVuZGVkKVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIHRocm93KGUpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgZ2V0U2Vzc2lvbklkKCk6IE9ic2VydmFibGU8c3RyaW5nPiB7XG4gICAgICAgIC8vIElmIHdlJ3JlIG5vdCBjb25uZWN0ZWQgdG8gdGhlIGJvdCwgZ2V0IGNvbm5lY3RlZFxuICAgICAgICAvLyBXaWxsIHRocm93IGFuIGVycm9yIGlmIHdlIGFyZSBub3QgY29ubmVjdGVkXG4gICAgICAgIGtvbnNvbGUubG9nKFwiZ2V0U2Vzc2lvbklkXCIpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0Nvbm5lY3Rpb24odHJ1ZSlcbiAgICAgICAgICAgIC5mbGF0TWFwKF8gPT5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogYCR7dGhpcy5kb21haW59L3Nlc3Npb24vZ2V0c2Vzc2lvbmlkYCxcbiAgICAgICAgICAgICAgICAgICAgd2l0aENyZWRlbnRpYWxzOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aGlzLnRpbWVvdXQsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5jb21tb25IZWFkZXJzKClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLm1hcChhamF4UmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoYWpheFJlc3BvbnNlICYmIGFqYXhSZXNwb25zZS5yZXNwb25zZSAmJiBhamF4UmVzcG9uc2UucmVzcG9uc2Uuc2Vzc2lvbklkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrb25zb2xlLmxvZyhcImdldFNlc3Npb25JZCByZXNwb25zZTogXCIgKyBhamF4UmVzcG9uc2UucmVzcG9uc2Uuc2Vzc2lvbklkKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhamF4UmVzcG9uc2UucmVzcG9uc2Uuc2Vzc2lvbklkIGFzIHN0cmluZztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBrb25zb2xlLmxvZyhcImdldFNlc3Npb25JZCBlcnJvcjogXCIgKyBlcnJvci5zdGF0dXMpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5vZignJywgdGhpcy5zZXJ2aWNlcy5zY2hlZHVsZXIpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5jYXRjaEV4cGlyZWRUb2tlbihlcnJvcikpO1xuICAgIH1cblxuICAgIHBvc3RBY3Rpdml0eShhY3Rpdml0eTogQWN0aXZpdHkpIHtcbiAgICAgICAgLy8gSWYgdXNlciBpZCBpcyBzZXQsIGNoZWNrIGlmIGl0IG1hdGNoIGFjdGl2aXR5LmZyb20uaWQgYW5kIGFsd2F5cyBvdmVycmlkZSBpdCBpbiBhY3Rpdml0eVxuICAgICAgICBpZiAodGhpcy51c2VySWRPblN0YXJ0Q29udmVyc2F0aW9uICYmIGFjdGl2aXR5LmZyb20gJiYgYWN0aXZpdHkuZnJvbS5pZCAhPT0gdGhpcy51c2VySWRPblN0YXJ0Q29udmVyc2F0aW9uKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ0RpcmVjdExpbmVKUzogQWN0aXZpdHkuZnJvbS5pZCBkb2VzIG5vdCBtYXRjaCB3aXRoIHVzZXIgaWQsIGlnbm9yaW5nIGFjdGl2aXR5LmZyb20uaWQnKTtcbiAgICAgICAgICAgIGFjdGl2aXR5LmZyb20uaWQgPSB0aGlzLnVzZXJJZE9uU3RhcnRDb252ZXJzYXRpb247XG4gICAgICAgIH1cbiAgICAgICAgLy8gVXNlIHBvc3RNZXNzYWdlV2l0aEF0dGFjaG1lbnRzIGZvciBtZXNzYWdlcyB3aXRoIGF0dGFjaG1lbnRzIHRoYXQgYXJlIGxvY2FsIGZpbGVzIChlLmcuIGFuIGltYWdlIHRvIHVwbG9hZClcbiAgICAgICAgLy8gVGVjaG5pY2FsbHkgd2UgY291bGQgdXNlIGl0IGZvciAqYWxsKiBhY3Rpdml0aWVzLCBidXQgcG9zdEFjdGl2aXR5IGlzIG11Y2ggbGlnaHRlciB3ZWlnaHRcbiAgICAgICAgLy8gU28sIHNpbmNlIFdlYkNoYXQgaXMgcGFydGlhbGx5IGEgcmVmZXJlbmNlIGltcGxlbWVudGF0aW9uIG9mIERpcmVjdCBMaW5lLCB3ZSBpbXBsZW1lbnQgYm90aC5cbiAgICAgICAgaWYgKGFjdGl2aXR5LnR5cGUgPT09IFwibWVzc2FnZVwiICYmIGFjdGl2aXR5LmF0dGFjaG1lbnRzICYmIGFjdGl2aXR5LmF0dGFjaG1lbnRzLmxlbmd0aCA+IDApXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5wb3N0TWVzc2FnZVdpdGhBdHRhY2htZW50cyhhY3Rpdml0eSk7XG5cbiAgICAgICAgLy8gSWYgd2UncmUgbm90IGNvbm5lY3RlZCB0byB0aGUgYm90LCBnZXQgY29ubmVjdGVkXG4gICAgICAgIC8vIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgd2UgYXJlIG5vdCBjb25uZWN0ZWRcbiAgICAgICAga29uc29sZS5sb2coXCJwb3N0QWN0aXZpdHlcIiwgYWN0aXZpdHkpO1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0Nvbm5lY3Rpb24odHJ1ZSlcbiAgICAgICAgLmZsYXRNYXAoXyA9PlxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlcy5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgIHVybDogYCR7dGhpcy5kb21haW59L2NvbnZlcnNhdGlvbnMvJHt0aGlzLmNvbnZlcnNhdGlvbklkfS9hY3Rpdml0aWVzYCxcbiAgICAgICAgICAgICAgICBib2R5OiBhY3Rpdml0eSxcbiAgICAgICAgICAgICAgICB0aW1lb3V0OiB0aGlzLnRpbWVvdXQsXG4gICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcbiAgICAgICAgICAgICAgICAgICAgLi4udGhpcy5jb21tb25IZWFkZXJzKClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoYWpheFJlc3BvbnNlID0+IGFqYXhSZXNwb25zZS5yZXNwb25zZS5pZCBhcyBzdHJpbmcpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5jYXRjaFBvc3RFcnJvcihlcnJvcikpXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuY2F0Y2hFeHBpcmVkVG9rZW4oZXJyb3IpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvc3RNZXNzYWdlV2l0aEF0dGFjaG1lbnRzKG1lc3NhZ2U6IE1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgeyBhdHRhY2htZW50cyB9ID0gbWVzc2FnZTtcbiAgICAgICAgLy8gV2UgY2xlYW4gdGhlIGF0dGFjaG1lbnRzIGJ1dCBtYWtpbmcgc3VyZSBldmVyeSBhdHRhY2htZW50IGhhcyB1bmlxdWUgbmFtZS5cbiAgICAgICAgLy8gSWYgdGhlIGZpbGUgZG8gbm90IGhhdmUgYSBuYW1lLCBDaHJvbWUgd2lsbCBhc3NpZ24gXCJibG9iXCIgd2hlbiBpdCBpcyBhcHBlbmRlZCB0byBGb3JtRGF0YS5cbiAgICAgICAgY29uc3QgYXR0YWNobWVudE5hbWVzOiBzdHJpbmdbXSA9IGRlZHVwZUZpbGVuYW1lcyhhdHRhY2htZW50cy5tYXAoKG1lZGlhOiBNZWRpYSkgPT4gbWVkaWEubmFtZSB8fCAnYmxvYicpKTtcbiAgICAgICAgY29uc3QgY2xlYW5zZWRBdHRhY2htZW50cyA9IGF0dGFjaG1lbnRzLm1hcCgoYXR0YWNobWVudDogTWVkaWEsIGluZGV4OiBudW1iZXIpID0+ICh7XG4gICAgICAgICAgICAuLi5hdHRhY2htZW50LFxuICAgICAgICAgICAgbmFtZTogYXR0YWNobWVudE5hbWVzW2luZGV4XVxuICAgICAgICB9KSk7XG4gICAgICAgIGxldCBmb3JtRGF0YTogRm9ybURhdGE7XG5cbiAgICAgICAgLy8gSWYgd2UncmUgbm90IGNvbm5lY3RlZCB0byB0aGUgYm90LCBnZXQgY29ubmVjdGVkXG4gICAgICAgIC8vIFdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgd2UgYXJlIG5vdCBjb25uZWN0ZWRcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tDb25uZWN0aW9uKHRydWUpXG4gICAgICAgIC5mbGF0TWFwKF8gPT4ge1xuICAgICAgICAgICAgLy8gVG8gc2VuZCB0aGlzIG1lc3NhZ2UgdG8gRGlyZWN0TGluZSB3ZSBuZWVkIHRvIGRlY29uc3RydWN0IGl0IGludG8gYSBcInRlbXBsYXRlXCIgYWN0aXZpdHlcbiAgICAgICAgICAgIC8vIGFuZCBvbmUgYmxvYiBmb3IgZWFjaCBhdHRhY2htZW50LlxuICAgICAgICAgICAgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKTtcbiAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnYWN0aXZpdHknLCBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIC4uLm1lc3NhZ2UsXG4gICAgICAgICAgICAgICAgLy8gUmVtb3ZpbmcgY29udGVudFVybCBmcm9tIGF0dGFjaG1lbnQsIHdlIHdpbGwgc2VuZCBpdCB2aWEgbXVsdGlwYXJ0XG4gICAgICAgICAgICAgICAgYXR0YWNobWVudHM6IGNsZWFuc2VkQXR0YWNobWVudHMubWFwKCh7IGNvbnRlbnRVcmw6IHN0cmluZywgLi4ub3RoZXJzIH0pID0+ICh7IC4uLm90aGVycyB9KSlcbiAgICAgICAgICAgIH0pXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vdm5kLm1pY3Jvc29mdC5hY3Rpdml0eScgfSkpO1xuXG4gICAgICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5mcm9tKGNsZWFuc2VkQXR0YWNobWVudHMsIHRoaXMuc2VydmljZXMuc2NoZWR1bGVyKVxuICAgICAgICAgICAgLmZsYXRNYXAoKG1lZGlhOiBNZWRpYSkgPT5cbiAgICAgICAgICAgICAgICB0aGlzLnNlcnZpY2VzLmFqYXgoe1xuICAgICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgICAgIHVybDogbWVkaWEuY29udGVudFVybCxcbiAgICAgICAgICAgICAgICAgICAgcmVzcG9uc2VUeXBlOiAnYXJyYXlidWZmZXInXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuZG8oYWpheFJlc3BvbnNlID0+XG4gICAgICAgICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZCgnZmlsZScsIG5ldyBCbG9iKFthamF4UmVzcG9uc2UucmVzcG9uc2VdLCB7IHR5cGU6IG1lZGlhLmNvbnRlbnRUeXBlIH0pLCBtZWRpYS5uYW1lKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgIClcbiAgICAgICAgICAgIC5jb3VudCgpXG4gICAgICAgIH0pXG4gICAgICAgIC5mbGF0TWFwKF8gPT5cbiAgICAgICAgICAgIHRoaXMuc2VydmljZXMuYWpheCh7XG4gICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICB1cmw6IGAke3RoaXMuZG9tYWlufS9jb252ZXJzYXRpb25zLyR7dGhpcy5jb252ZXJzYXRpb25JZH0vdXBsb2FkP3VzZXJJZD0ke21lc3NhZ2UuZnJvbS5pZH1gLFxuICAgICAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgICAgICAgIHRpbWVvdXQ6IHRoaXMudGltZW91dCxcbiAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuY29tbW9uSGVhZGVycygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5tYXAoYWpheFJlc3BvbnNlID0+IGFqYXhSZXNwb25zZS5yZXNwb25zZS5pZCBhcyBzdHJpbmcpXG4gICAgICAgICAgICAuY2F0Y2goZXJyb3IgPT4gdGhpcy5jYXRjaFBvc3RFcnJvcihlcnJvcikpXG4gICAgICAgIClcbiAgICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuY2F0Y2hQb3N0RXJyb3IoZXJyb3IpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGNhdGNoUG9zdEVycm9yKGVycm9yOiBhbnkpIHtcbiAgICAgICAgaWYgKGVycm9yLnN0YXR1cyA9PT0gNDAzKVxuICAgICAgICAgICAgLy8gdG9rZW4gaGFzIGV4cGlyZWQgKHdpbGwgZmFsbCB0aHJvdWdoIHRvIHJldHVybiBcInJldHJ5XCIpXG4gICAgICAgICAgICB0aGlzLmV4cGlyZWRUb2tlbigpO1xuICAgICAgICBlbHNlIGlmIChlcnJvci5zdGF0dXMgPj0gNDAwICYmIGVycm9yLnN0YXR1cyA8IDUwMClcbiAgICAgICAgICAgIC8vIG1vcmUgdW5yZWNvdmVyYWJsZSBlcnJvcnNcbiAgICAgICAgICAgIHJldHVybiBPYnNlcnZhYmxlLnRocm93KGVycm9yLCB0aGlzLnNlcnZpY2VzLnNjaGVkdWxlcik7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLm9mKFwicmV0cnlcIiwgdGhpcy5zZXJ2aWNlcy5zY2hlZHVsZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgY2F0Y2hFeHBpcmVkVG9rZW4oZXJyb3I6IGFueSkge1xuICAgICAgICByZXR1cm4gZXJyb3IgPT09IGVycm9yRXhwaXJlZFRva2VuXG4gICAgICAgID8gT2JzZXJ2YWJsZS5vZihcInJldHJ5XCIsIHRoaXMuc2VydmljZXMuc2NoZWR1bGVyKVxuICAgICAgICA6IE9ic2VydmFibGUudGhyb3coZXJyb3IsIHRoaXMuc2VydmljZXMuc2NoZWR1bGVyKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBvbGxpbmdHZXRBY3Rpdml0eSQoKSB7XG4gICAgICAgIGNvbnN0IHBvbGxlciQ6IE9ic2VydmFibGU8QWpheFJlc3BvbnNlPiA9IE9ic2VydmFibGUuY3JlYXRlKChzdWJzY3JpYmVyOiBTdWJzY3JpYmVyPGFueT4pID0+IHtcbiAgICAgICAgICAgIC8vIEEgQmVoYXZpb3JTdWJqZWN0IHRvIHRyaWdnZXIgcG9sbGluZy4gU2luY2UgaXQgaXMgYSBCZWhhdmlvclN1YmplY3RcbiAgICAgICAgICAgIC8vIHRoZSBmaXJzdCBldmVudCBpcyBwcm9kdWNlZCBpbW1lZGlhdGVseS5cbiAgICAgICAgICAgIGNvbnN0IHRyaWdnZXIkID0gbmV3IEJlaGF2aW9yU3ViamVjdDxhbnk+KHt9KTtcblxuICAgICAgICAgICAgLy8gVE9ETzogcmVtb3ZlIERhdGUubm93LCB1c2UgcmVhY3RpdmUgaW50ZXJ2YWwgdG8gc3BhY2Ugb3V0IGV2ZXJ5IHJlcXVlc3RcblxuICAgICAgICAgICAgdHJpZ2dlciQuc3Vic2NyaWJlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jb25uZWN0aW9uU3RhdHVzJC5nZXRWYWx1ZSgpID09PSBDb25uZWN0aW9uU3RhdHVzLk9ubGluZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdGFydFRpbWVzdGFtcCA9IERhdGUubm93KCk7XG5cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXJ2aWNlcy5hamF4KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi50aGlzLmNvbW1vbkhlYWRlcnMoKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICAgICAgICAgICAgICAgICAgICB1cmw6IGAkeyB0aGlzLmRvbWFpbiB9L2NvbnZlcnNhdGlvbnMvJHsgdGhpcy5jb252ZXJzYXRpb25JZCB9L2FjdGl2aXRpZXM/d2F0ZXJtYXJrPSR7IHRoaXMud2F0ZXJtYXJrIH1gLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0XG4gICAgICAgICAgICAgICAgICAgIH0pLnN1YnNjcmliZShcbiAgICAgICAgICAgICAgICAgICAgICAgIChyZXN1bHQ6IEFqYXhSZXNwb25zZSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN1YnNjcmliZXIubmV4dChyZXN1bHQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdHJpZ2dlciQubmV4dChudWxsKSwgTWF0aC5tYXgoMCwgdGhpcy5wb2xsaW5nSW50ZXJ2YWwgLSBEYXRlLm5vdygpICsgc3RhcnRUaW1lc3RhbXApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAoZXJyb3I6IGFueSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoZXJyb3Iuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgNDAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25uZWN0aW9uU3RhdHVzJC5uZXh0KENvbm5lY3Rpb25TdGF0dXMuRXhwaXJlZFRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gdHJpZ2dlciQubmV4dChudWxsKSwgdGhpcy5wb2xsaW5nSW50ZXJ2YWwpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbm5lY3Rpb25TdGF0dXMkLm5leHQoQ29ubmVjdGlvblN0YXR1cy5FbmRlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gcHJvcGFnYXRlIHRoZSBlcnJvclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3Vic2NyaWJlci5lcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmNoZWNrQ29ubmVjdGlvbigpXG4gICAgICAgIC5mbGF0TWFwKF8gPT4gcG9sbGVyJFxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IE9ic2VydmFibGUuZW1wdHk8QWpheFJlc3BvbnNlPigpKVxuICAgICAgICAgICAgLm1hcChhamF4UmVzcG9uc2UgPT4gYWpheFJlc3BvbnNlLnJlc3BvbnNlIGFzIEFjdGl2aXR5R3JvdXApXG4gICAgICAgICAgICAuZmxhdE1hcChhY3Rpdml0eUdyb3VwID0+IHRoaXMub2JzZXJ2YWJsZUZyb21BY3Rpdml0eUdyb3VwKGFjdGl2aXR5R3JvdXApKSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBvYnNlcnZhYmxlRnJvbUFjdGl2aXR5R3JvdXAoYWN0aXZpdHlHcm91cDogQWN0aXZpdHlHcm91cCkge1xuICAgICAgICBpZiAoYWN0aXZpdHlHcm91cC53YXRlcm1hcmspXG4gICAgICAgICAgICB0aGlzLndhdGVybWFyayA9IGFjdGl2aXR5R3JvdXAud2F0ZXJtYXJrO1xuICAgICAgICByZXR1cm4gT2JzZXJ2YWJsZS5mcm9tKGFjdGl2aXR5R3JvdXAuYWN0aXZpdGllcywgdGhpcy5zZXJ2aWNlcy5zY2hlZHVsZXIpO1xuICAgIH1cblxuICAgIHByaXZhdGUgd2ViU29ja2V0QWN0aXZpdHkkKCk6IE9ic2VydmFibGU8QWN0aXZpdHk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY2hlY2tDb25uZWN0aW9uKClcbiAgICAgICAgLmZsYXRNYXAoXyA9PlxuICAgICAgICAgICAgdGhpcy5vYnNlcnZhYmxlV2ViU29ja2V0PEFjdGl2aXR5R3JvdXA+KClcbiAgICAgICAgICAgIC8vIFdlYlNvY2tldHMgY2FuIGJlIGNsb3NlZCBieSB0aGUgc2VydmVyIG9yIHRoZSBicm93c2VyLiBJbiB0aGUgZm9ybWVyIGNhc2Ugd2UgbmVlZCB0b1xuICAgICAgICAgICAgLy8gcmV0cmlldmUgYSBuZXcgc3RyZWFtVXJsLiBJbiB0aGUgbGF0dGVyIGNhc2Ugd2UgY291bGQgZmlyc3QgcmV0cnkgd2l0aCB0aGUgY3VycmVudCBzdHJlYW1VcmwsXG4gICAgICAgICAgICAvLyBidXQgaXQncyBzaW1wbGVyIGp1c3QgdG8gYWx3YXlzIGZldGNoIGEgbmV3IG9uZS5cbiAgICAgICAgICAgIC5yZXRyeVdoZW4oZXJyb3IkID0+IGVycm9yJC5kZWxheSh0aGlzLmdldFJldHJ5RGVsYXkoKSwgdGhpcy5zZXJ2aWNlcy5zY2hlZHVsZXIpLm1lcmdlTWFwKGVycm9yID0+IHRoaXMucmVjb25uZWN0VG9Db252ZXJzYXRpb24oKSkpXG4gICAgICAgIClcbiAgICAgICAgLmZsYXRNYXAoYWN0aXZpdHlHcm91cCA9PiB0aGlzLm9ic2VydmFibGVGcm9tQWN0aXZpdHlHcm91cChhY3Rpdml0eUdyb3VwKSlcbiAgICB9XG5cbiAgICAvLyBSZXR1cm5zIHRoZSBkZWxheSBkdXJhdGlvbiBpbiBtaWxsaXNlY29uZHNcbiAgICBwcml2YXRlIGdldFJldHJ5RGVsYXkoKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmZsb29yKDMwMDAgKyB0aGlzLnNlcnZpY2VzLnJhbmRvbSgpICogMTIwMDApO1xuICAgIH1cblxuICAgIC8vIE9yaWdpbmFsbHkgd2UgdXNlZCBPYnNlcnZhYmxlLndlYlNvY2tldCwgYnV0IGl0J3MgZmFpcmx5IG9waW5pb25hdGVkIGFuZCBJIGVuZGVkIHVwIHdyaXRpbmdcbiAgICAvLyBhIGxvdCBvZiBjb2RlIHRvIHdvcmsgYXJvdW5kIHRoZWlyIGltcGxlbWVudGF0aW9uIGRldGFpbHMuIFNpbmNlIFdlYkNoYXQgaXMgbWVhbnQgdG8gYmUgYSByZWZlcmVuY2VcbiAgICAvLyBpbXBsZW1lbnRhdGlvbiwgSSBkZWNpZGVkIHJvbGwgdGhlIGJlbG93LCB3aGVyZSB0aGUgbG9naWMgaXMgbW9yZSBwdXJwb3NlZnVsLiAtIEBiaWxsYmFcbiAgICBwcml2YXRlIG9ic2VydmFibGVXZWJTb2NrZXQ8VD4oKSB7XG4gICAgICAgIHJldHVybiBPYnNlcnZhYmxlLmNyZWF0ZSgoc3Vic2NyaWJlcjogU3Vic2NyaWJlcjxUPikgPT4ge1xuICAgICAgICAgICAga29uc29sZS5sb2coXCJjcmVhdGluZyBXZWJTb2NrZXRcIiwgdGhpcy5zdHJlYW1VcmwpO1xuICAgICAgICAgICAgY29uc3Qgd3MgPSBuZXcgdGhpcy5zZXJ2aWNlcy5XZWJTb2NrZXQodGhpcy5zdHJlYW1VcmwpO1xuICAgICAgICAgICAgbGV0IHN1YjogU3Vic2NyaXB0aW9uO1xuICAgICAgICAgICAgbGV0IGNsb3NlZDogYm9vbGVhbjtcblxuICAgICAgICAgICAgd3Mub25vcGVuID0gb3BlbiA9PiB7XG4gICAgICAgICAgICAgICAga29uc29sZS5sb2coXCJXZWJTb2NrZXQgb3BlblwiLCBvcGVuKTtcbiAgICAgICAgICAgICAgICAvLyBDaHJvbWUgaXMgcHJldHR5IGJhZCBhdCBub3RpY2luZyB3aGVuIGEgV2ViU29ja2V0IGNvbm5lY3Rpb24gaXMgYnJva2VuLlxuICAgICAgICAgICAgICAgIC8vIElmIHdlIHBlcmlvZGljYWxseSBwaW5nIHRoZSBzZXJ2ZXIgd2l0aCBlbXB0eSBtZXNzYWdlcywgaXQgaGVscHMgQ2hyb21lXG4gICAgICAgICAgICAgICAgLy8gcmVhbGl6ZSB3aGVuIGNvbm5lY3Rpb24gYnJlYWtzLCBhbmQgY2xvc2UgdGhlIHNvY2tldC4gV2UgdGhlbiB0aHJvdyBhblxuICAgICAgICAgICAgICAgIC8vIGVycm9yLCBhbmQgdGhhdCBnaXZlIHVzIHRoZSBvcHBvcnR1bml0eSB0byBhdHRlbXB0IHRvIHJlY29ubmVjdC5cbiAgICAgICAgICAgICAgICBzdWIgPSBPYnNlcnZhYmxlLmludGVydmFsKHRoaXMudGltZW91dCwgdGhpcy5zZXJ2aWNlcy5zY2hlZHVsZXIpLnN1YnNjcmliZShfID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdzLnNlbmQoXCJcIilcbiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBrb25zb2xlLmxvZyhcIlBpbmcgZXJyb3JcIiwgZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgd3Mub25jbG9zZSA9IGNsb3NlID0+IHtcbiAgICAgICAgICAgICAgICBrb25zb2xlLmxvZyhcIldlYlNvY2tldCBjbG9zZVwiLCBjbG9zZSk7XG4gICAgICAgICAgICAgICAgaWYgKHN1Yikgc3ViLnVuc3Vic2NyaWJlKCk7XG5cbiAgICAgICAgICAgICAgICAvLyBSeEpTLnJldHJ5V2hlbiBoYXMgYSBidWcgdGhhdCB3b3VsZCBjYXVzZSBcImVycm9yXCIgc2lnbmFsIHRvIGJlIHNlbnQgYWZ0ZXIgdGhlIG9ic2VydmFibGUgaXMgY29tcGxldGVkL2Vycm9yZWQuXG4gICAgICAgICAgICAgICAgLy8gV2UgbmVlZCB0byBndWFyZCBhZ2FpbnN0IGV4dHJhbmVvdXMgXCJlcnJvclwiIHNpZ25hbCB0byB3b3JrYXJvdW5kIHRoZSBidWcuXG4gICAgICAgICAgICAgICAgY2xvc2VkIHx8IHN1YnNjcmliZXIuZXJyb3IoY2xvc2UpO1xuICAgICAgICAgICAgICAgIGNsb3NlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHdzLm9uZXJyb3IgPSBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAga29uc29sZS5sb2coXCJXZWJTb2NrZXQgZXJyb3JcIiwgZXJyb3IpO1xuICAgICAgICAgICAgICAgIGlmIChzdWIpIHN1Yi51bnN1YnNjcmliZSgpO1xuXG4gICAgICAgICAgICAgICAgLy8gUnhKUy5yZXRyeVdoZW4gaGFzIGEgYnVnIHRoYXQgd291bGQgY2F1c2UgXCJlcnJvclwiIHNpZ25hbCB0byBiZSBzZW50IGFmdGVyIHRoZSBvYnNlcnZhYmxlIGlzIGNvbXBsZXRlZC9lcnJvcmVkLlxuICAgICAgICAgICAgICAgIC8vIFdlIG5lZWQgdG8gZ3VhcmQgYWdhaW5zdCBleHRyYW5lb3VzIFwiZXJyb3JcIiBzaWduYWwgdG8gd29ya2Fyb3VuZCB0aGUgYnVnLlxuICAgICAgICAgICAgICAgIGNsb3NlZCB8fCBzdWJzY3JpYmVyLmVycm9yKGVycm9yKTtcbiAgICAgICAgICAgICAgICBjbG9zZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB3cy5vbm1lc3NhZ2UgPSBtZXNzYWdlID0+IG1lc3NhZ2UuZGF0YSAmJiBzdWJzY3JpYmVyLm5leHQoSlNPTi5wYXJzZShtZXNzYWdlLmRhdGEpKTtcblxuICAgICAgICAgICAgaWYgKCh0aGlzLmlzRmlyc3RUaW1lKSAmJiAodGhpcy5oYW5kbGVIaXN0b3J5QXBpKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuaXNGaXJzdFRpbWUgPSBmYWxzZTtcblxuICAgICAgICAgICAgICAgIHZhciBnZXRVcmwgPSB3aW5kb3cubG9jYXRpb247XG4gICAgICAgICAgICAgICAgdmFyIGJhc2VVcmwgPSBnZXRVcmwucHJvdG9jb2wgKyBcIi8vXCIgKyBnZXRVcmwuaG9zdCArIFwiL1wiO1xuXG4gICAgICAgICAgICAgICAgdmFyIGh0dHBIaXN0b3J5ID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XG4gICAgICAgICAgICAgICAgdmFyIHVybEhpc3RvcnkgPSBiYXNlVXJsICsgXCJhcGkvZGlyZWN0bGluZS9oaXN0b3J5XCI7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGhhdCA9IHRoaXM7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIFRoaXMgaXMgdGhlICd1bnN1YnNjcmliZScgbWV0aG9kLCB3aGljaCBpcyBjYWxsZWQgd2hlbiB0aGlzIG9ic2VydmFibGUgaXMgZGlzcG9zZWQuXG4gICAgICAgICAgICAvLyBXaGVuIHRoZSBXZWJTb2NrZXQgY2xvc2VzIGl0c2VsZiwgd2UgdGhyb3cgYW4gZXJyb3IsIGFuZCB0aGlzIGZ1bmN0aW9uIGlzIGV2ZW50dWFsbHkgY2FsbGVkLlxuICAgICAgICAgICAgLy8gV2hlbiB0aGUgb2JzZXJ2YWJsZSBpcyBjbG9zZWQgZmlyc3QgKGUuZy4gd2hlbiB0ZWFyaW5nIGRvd24gYSBXZWJDaGF0IGluc3RhbmNlKSB0aGVuXG4gICAgICAgICAgICAvLyB3ZSBuZWVkIHRvIG1hbnVhbGx5IGNsb3NlIHRoZSBXZWJTb2NrZXQuXG4gICAgICAgICAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh3cy5yZWFkeVN0YXRlID09PSAwIHx8IHdzLnJlYWR5U3RhdGUgPT09IDEpIHdzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pIGFzIE9ic2VydmFibGU8VD5cbiAgICB9XG5cbiAgICBwcml2YXRlIHJlY29ubmVjdFRvQ29udmVyc2F0aW9uKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jaGVja0Nvbm5lY3Rpb24odHJ1ZSlcbiAgICAgICAgLmZsYXRNYXAoXyA9PlxuICAgICAgICAgICAgdGhpcy5zZXJ2aWNlcy5hamF4KHtcbiAgICAgICAgICAgICAgICBtZXRob2Q6IFwiR0VUXCIsXG4gICAgICAgICAgICAgICAgdXJsOiBgJHt0aGlzLmRvbWFpbn0vY29udmVyc2F0aW9ucy8ke3RoaXMuY29udmVyc2F0aW9uSWR9P3dhdGVybWFyaz0ke3RoaXMud2F0ZXJtYXJrfWAsXG4gICAgICAgICAgICAgICAgdGltZW91dDogdGhpcy50aW1lb3V0LFxuICAgICAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAgICAgXCJBY2NlcHRcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXG4gICAgICAgICAgICAgICAgICAgIC4uLnRoaXMuY29tbW9uSGVhZGVycygpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC5kbyhyZXN1bHQgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWNyZXQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudG9rZW4gPSByZXN1bHQucmVzcG9uc2UudG9rZW47XG5cbiAgICAgICAgICAgICAgICBpZiAoKHJlc3VsdC5yZXNwb25zZS5zdHJlYW1VcmwpICYmICh0aGlzLmhhbmRsZUhpc3RvcnlBcGkpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0cmVhbVVybCA9IHJlc3VsdC5yZXNwb25zZS5zdHJlYW1VcmwucmVwbGFjZShcIndhdGVybWFyaz0tJlwiLCBcIlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLm1hcChfID0+IG51bGwpXG4gICAgICAgICAgICAucmV0cnlXaGVuKGVycm9yJCA9PiBlcnJvciRcbiAgICAgICAgICAgICAgICAubWVyZ2VNYXAoZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZXJyb3Iuc3RhdHVzID09PSA0MDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIHRva2VuIGhhcyBleHBpcmVkLiBXZSBjYW4ndCByZWNvdmVyIGZyb20gdGhpcyBoZXJlLCBidXQgdGhlIGVtYmVkZGluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gd2Vic2l0ZSBtaWdodCBldmVudHVhbGx5IGNhbGwgcmVjb25uZWN0KCkgd2l0aCBhIG5ldyB0b2tlbiBhbmQgc3RyZWFtVXJsLlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHBpcmVkVG9rZW4oKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChlcnJvci5zdGF0dXMgPT09IDQwNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3JDb252ZXJzYXRpb25FbmRlZCwgdGhpcy5zZXJ2aWNlcy5zY2hlZHVsZXIpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIE9ic2VydmFibGUub2YoZXJyb3IsIHRoaXMuc2VydmljZXMuc2NoZWR1bGVyKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5kZWxheSh0aGlzLnJldHJ5RGVsYXksIHRoaXMuc2VydmljZXMuc2NoZWR1bGVyKVxuICAgICAgICAgICAgICAgIC50YWtlKHRoaXMucmV0cmllcylcbiAgICAgICAgICAgIClcbiAgICAgICAgKVxuICAgIH1cblxuICAgIHByaXZhdGUgY29tbW9uSGVhZGVycygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFwiQXV0aG9yaXphdGlvblwiOiBgQmVhcmVyICR7dGhpcy50b2tlbn1gLFxuICAgICAgICAgICAgXCJ4LW1zLWJvdC1hZ2VudFwiOiB0aGlzLl9ib3RBZ2VudFxuICAgICAgICB9O1xuICAgIH1cblxuICAgIHByaXZhdGUgZ2V0Qm90QWdlbnQoY3VzdG9tQWdlbnQ6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcbiAgICAgICAgbGV0IGNsaWVudEFnZW50ID0gJ2RpcmVjdGxpbmVqcydcblxuICAgICAgICBpZiAoY3VzdG9tQWdlbnQpIHtcbiAgICAgICAgICAgIGNsaWVudEFnZW50ICs9IGA7ICR7Y3VzdG9tQWdlbnR9YFxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGAke0RJUkVDVF9MSU5FX1ZFUlNJT059ICgke2NsaWVudEFnZW50fSAke3Byb2Nlc3MuZW52Lm5wbV9wYWNrYWdlX3ZlcnNpb259KWA7XG4gICAgfVxuXG4gICAgc2V0VXNlcklkKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgICAgIGlmICh0aGlzLmNvbm5lY3Rpb25TdGF0dXMkLmdldFZhbHVlKCkgPT09IENvbm5lY3Rpb25TdGF0dXMuT25saW5lKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0RpcmVjdExpbmVKUzogSXQgaXMgY29ubmVjdGVkLCB3ZSBjYW5ub3Qgc2V0IHVzZXIgaWQuJyk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCB1c2VySWRGcm9tVG9rZW4gPSB0aGlzLnBhcnNlVG9rZW4odGhpcy50b2tlbik7XG4gICAgICAgIGlmICh1c2VySWRGcm9tVG9rZW4pIHtcbiAgICAgICAgICAgIHJldHVybiBjb25zb2xlLndhcm4oJ0RpcmVjdExpbmVKUzogdXNlciBpZCBpcyBhbHJlYWR5IHNldCBpbiB0b2tlbiwgd2lsbCBpZ25vcmUgdGhpcyB1c2VyIGlkLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKC9eZGxfL3UudGVzdCh1c2VySWQpKSB7XG4gICAgICAgICAgICByZXR1cm4gY29uc29sZS53YXJuKCdEaXJlY3RMaW5lSlM6IHVzZXIgaWQgcHJlZml4ZWQgd2l0aCBcImRsX1wiIGlzIHJlc2VydmVkIGFuZCBtdXN0IGJlIGVtYmVkZGVkIGludG8gdGhlIERpcmVjdCBMaW5lIHRva2VuIHRvIHByZXZlbnQgZm9yZ2VyeS4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMudXNlcklkT25TdGFydENvbnZlcnNhdGlvbiA9IHVzZXJJZDtcbiAgICB9XG5cbiAgICBwcml2YXRlIHBhcnNlVG9rZW4odG9rZW46IHN0cmluZykge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyB1c2VyIH0gPSBqd3REZWNvZGU8Snd0UGF5bG9hZD4odG9rZW4pIGFzIHsgW2tleTogc3RyaW5nXTogYW55OyB9O1xuICAgICAgICAgICAgcmV0dXJuIHVzZXI7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGlmIChlIGluc3RhbmNlb2YgSW52YWxpZFRva2VuRXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG59XG4iXX0=