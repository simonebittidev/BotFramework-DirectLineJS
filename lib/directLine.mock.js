"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mockServices = exports.mockWebSocket = exports.mockAjax = exports.injectNewToken = exports.injectClose = exports.mockServer = exports.mockActivity = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _rxjs = require("rxjs");

var _url = require("url");

function cov_1jxxleivgk() {
  var path = "C:\\Users\\sbitti\\OneDrive - Vodafone Group\\Desktop\\PersonalProject\\BotFramework-DirectLineJS\\src\\directLine.mock.ts";
  var hash = "1cd7a2a8690170f024d4bef649306ab3cd19c357";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sbitti\\OneDrive - Vodafone Group\\Desktop\\PersonalProject\\BotFramework-DirectLineJS\\src\\directLine.mock.ts",
    statementMap: {
      "0": {
        start: {
          line: 8,
          column: 23
        },
        end: {
          line: 8,
          column: 74
        }
      },
      "1": {
        start: {
          line: 8,
          column: 38
        },
        end: {
          line: 8,
          column: 72
        }
      },
      "2": {
        start: {
          line: 12,
          column: 28
        },
        end: {
          line: 12,
          column: 124
        }
      },
      "3": {
        start: {
          line: 12,
          column: 74
        },
        end: {
          line: 12,
          column: 123
        }
      },
      "4": {
        start: {
          line: 34,
          column: 20
        },
        end: {
          line: 34,
          column: 27
        }
      },
      "5": {
        start: {
          line: 36,
          column: 26
        },
        end: {
          line: 44,
          column: 2
        }
      },
      "6": {
        start: {
          line: 36,
          column: 65
        },
        end: {
          line: 44,
          column: 1
        }
      },
      "7": {
        start: {
          line: 46,
          column: 22
        },
        end: {
          line: 58,
          column: 1
        }
      },
      "8": {
        start: {
          line: 47,
          column: 22
        },
        end: {
          line: 47,
          column: 29
        }
      },
      "9": {
        start: {
          line: 48,
          column: 24
        },
        end: {
          line: 48,
          column: 48
        }
      },
      "10": {
        start: {
          line: 49,
          column: 2
        },
        end: {
          line: 51,
          column: 3
        }
      },
      "11": {
        start: {
          line: 50,
          column: 4
        },
        end: {
          line: 50,
          column: 16
        }
      },
      "12": {
        start: {
          line: 53,
          column: 42
        },
        end: {
          line: 55,
          column: 3
        }
      },
      "13": {
        start: {
          line: 57,
          column: 2
        },
        end: {
          line: 57,
          column: 34
        }
      },
      "14": {
        start: {
          line: 60,
          column: 27
        },
        end: {
          line: 61,
          column: 78
        }
      },
      "15": {
        start: {
          line: 61,
          column: 2
        },
        end: {
          line: 61,
          column: 78
        }
      },
      "16": {
        start: {
          line: 61,
          column: 43
        },
        end: {
          line: 61,
          column: 77
        }
      },
      "17": {
        start: {
          line: 63,
          column: 30
        },
        end: {
          line: 67,
          column: 1
        }
      },
      "18": {
        start: {
          line: 64,
          column: 27
        },
        end: {
          line: 64,
          column: 33
        }
      },
      "19": {
        start: {
          line: 65,
          column: 17
        },
        end: {
          line: 65,
          column: 90
        }
      },
      "20": {
        start: {
          line: 66,
          column: 2
        },
        end: {
          line: 66,
          column: 44
        }
      },
      "21": {
        start: {
          line: 69,
          column: 21
        },
        end: {
          line: 69,
          column: 32
        }
      },
      "22": {
        start: {
          line: 75,
          column: 24
        },
        end: {
          line: 204,
          column: 1
        }
      },
      "23": {
        start: {
          line: 77,
          column: 18
        },
        end: {
          line: 77,
          column: 79
        }
      },
      "24": {
        start: {
          line: 78,
          column: 26
        },
        end: {
          line: 87,
          column: 3
        }
      },
      "25": {
        start: {
          line: 79,
          column: 16
        },
        end: {
          line: 79,
          column: 56
        }
      },
      "26": {
        start: {
          line: 80,
          column: 4
        },
        end: {
          line: 84,
          column: 5
        }
      },
      "27": {
        start: {
          line: 81,
          column: 21
        },
        end: {
          line: 81,
          column: 42
        }
      },
      "28": {
        start: {
          line: 82,
          column: 6
        },
        end: {
          line: 82,
          column: 58
        }
      },
      "29": {
        start: {
          line: 83,
          column: 6
        },
        end: {
          line: 83,
          column: 37
        }
      },
      "30": {
        start: {
          line: 86,
          column: 4
        },
        end: {
          line: 86,
          column: 26
        }
      },
      "31": {
        start: {
          line: 89,
          column: 14
        },
        end: {
          line: 175,
          column: 4
        }
      },
      "32": {
        start: {
          line: 90,
          column: 4
        },
        end: {
          line: 92,
          column: 5
        }
      },
      "33": {
        start: {
          line: 91,
          column: 6
        },
        end: {
          line: 91,
          column: 24
        }
      },
      "34": {
        start: {
          line: 94,
          column: 16
        },
        end: {
          line: 94,
          column: 41
        }
      },
      "35": {
        start: {
          line: 96,
          column: 39
        },
        end: {
          line: 96,
          column: 42
        }
      },
      "36": {
        start: {
          line: 98,
          column: 18
        },
        end: {
          line: 98,
          column: 37
        }
      },
      "37": {
        start: {
          line: 100,
          column: 4
        },
        end: {
          line: 107,
          column: 5
        }
      },
      "38": {
        start: {
          line: 102,
          column: 46
        },
        end: {
          line: 104,
          column: 7
        }
      },
      "39": {
        start: {
          line: 106,
          column: 6
        },
        end: {
          line: 106,
          column: 38
        }
      },
      "40": {
        start: {
          line: 109,
          column: 4
        },
        end: {
          line: 111,
          column: 5
        }
      },
      "41": {
        start: {
          line: 110,
          column: 6
        },
        end: {
          line: 110,
          column: 24
        }
      },
      "42": {
        start: {
          line: 113,
          column: 4
        },
        end: {
          line: 125,
          column: 5
        }
      },
      "43": {
        start: {
          line: 114,
          column: 58
        },
        end: {
          line: 118,
          column: 7
        }
      },
      "44": {
        start: {
          line: 120,
          column: 46
        },
        end: {
          line: 122,
          column: 7
        }
      },
      "45": {
        start: {
          line: 124,
          column: 6
        },
        end: {
          line: 124,
          column: 38
        }
      },
      "46": {
        start: {
          line: 127,
          column: 4
        },
        end: {
          line: 129,
          column: 5
        }
      },
      "47": {
        start: {
          line: 128,
          column: 6
        },
        end: {
          line: 128,
          column: 24
        }
      },
      "48": {
        start: {
          line: 131,
          column: 4
        },
        end: {
          line: 172,
          column: 5
        }
      },
      "49": {
        start: {
          line: 132,
          column: 28
        },
        end: {
          line: 132,
          column: 63
        }
      },
      "50": {
        start: {
          line: 133,
          column: 6
        },
        end: {
          line: 135,
          column: 7
        }
      },
      "51": {
        start: {
          line: 134,
          column: 8
        },
        end: {
          line: 134,
          column: 29
        }
      },
      "52": {
        start: {
          line: 137,
          column: 50
        },
        end: {
          line: 137,
          column: 67
        }
      },
      "53": {
        start: {
          line: 139,
          column: 20
        },
        end: {
          line: 139,
          column: 62
        }
      },
      "54": {
        start: {
          line: 140,
          column: 20
        },
        end: {
          line: 140,
          column: 29
        }
      },
      "55": {
        start: {
          line: 142,
          column: 6
        },
        end: {
          line: 144,
          column: 7
        }
      },
      "56": {
        start: {
          line: 143,
          column: 8
        },
        end: {
          line: 143,
          column: 34
        }
      },
      "57": {
        start: {
          line: 146,
          column: 46
        },
        end: {
          line: 148,
          column: 7
        }
      },
      "58": {
        start: {
          line: 150,
          column: 6
        },
        end: {
          line: 150,
          column: 38
        }
      },
      "59": {
        start: {
          line: 152,
          column: 9
        },
        end: {
          line: 172,
          column: 5
        }
      },
      "60": {
        start: {
          line: 153,
          column: 28
        },
        end: {
          line: 153,
          column: 63
        }
      },
      "61": {
        start: {
          line: 154,
          column: 6
        },
        end: {
          line: 156,
          column: 7
        }
      },
      "62": {
        start: {
          line: 155,
          column: 8
        },
        end: {
          line: 155,
          column: 29
        }
      },
      "63": {
        start: {
          line: 158,
          column: 24
        },
        end: {
          line: 158,
          column: 53
        }
      },
      "64": {
        start: {
          line: 159,
          column: 20
        },
        end: {
          line: 159,
          column: 50
        }
      },
      "65": {
        start: {
          line: 161,
          column: 58
        },
        end: {
          line: 165,
          column: 7
        }
      },
      "66": {
        start: {
          line: 167,
          column: 46
        },
        end: {
          line: 169,
          column: 7
        }
      },
      "67": {
        start: {
          line: 171,
          column: 6
        },
        end: {
          line: 171,
          column: 38
        }
      },
      "68": {
        start: {
          line: 174,
          column: 4
        },
        end: {
          line: 174,
          column: 22
        }
      },
      "69": {
        start: {
          line: 177,
          column: 17
        },
        end: {
          line: 186,
          column: 6
        }
      },
      "70": {
        start: {
          line: 178,
          column: 4
        },
        end: {
          line: 186,
          column: 6
        }
      },
      "71": {
        start: {
          line: 179,
          column: 6
        },
        end: {
          line: 185,
          column: 7
        }
      },
      "72": {
        start: {
          line: 180,
          column: 8
        },
        end: {
          line: 180,
          column: 43
        }
      },
      "73": {
        start: {
          line: 181,
          column: 8
        },
        end: {
          line: 181,
          column: 30
        }
      },
      "74": {
        start: {
          line: 184,
          column: 8
        },
        end: {
          line: 184,
          column: 32
        }
      },
      "75": {
        start: {
          line: 194,
          column: 33
        },
        end: {
          line: 201,
          column: 3
        }
      },
      "76": {
        start: {
          line: 195,
          column: 70
        },
        end: {
          line: 195,
          column: 86
        }
      },
      "77": {
        start: {
          line: 196,
          column: 83
        },
        end: {
          line: 196,
          column: 99
        }
      },
      "78": {
        start: {
          line: 197,
          column: 82
        },
        end: {
          line: 197,
          column: 98
        }
      },
      "79": {
        start: {
          line: 198,
          column: 84
        },
        end: {
          line: 198,
          column: 100
        }
      },
      "80": {
        start: {
          line: 199,
          column: 73
        },
        end: {
          line: 199,
          column: 89
        }
      },
      "81": {
        start: {
          line: 200,
          column: 48
        },
        end: {
          line: 200,
          column: 64
        }
      },
      "82": {
        start: {
          line: 203,
          column: 2
        },
        end: {
          line: 203,
          column: 43
        }
      },
      "83": {
        start: {
          line: 211,
          column: 29
        },
        end: {
          line: 278,
          column: 3
        }
      },
      "84": {
        start: {
          line: 212,
          column: 2
        },
        end: {
          line: 278,
          column: 3
        }
      },
      "85": {
        start: {
          line: 215,
          column: 6
        },
        end: {
          line: 226,
          column: 9
        }
      },
      "86": {
        start: {
          line: 216,
          column: 8
        },
        end: {
          line: 216,
          column: 47
        }
      },
      "87": {
        start: {
          line: 217,
          column: 8
        },
        end: {
          line: 217,
          column: 46
        }
      },
      "88": {
        start: {
          line: 218,
          column: 8
        },
        end: {
          line: 218,
          column: 39
        }
      },
      "89": {
        start: {
          line: 219,
          column: 8
        },
        end: {
          line: 219,
          column: 41
        }
      },
      "90": {
        start: {
          line: 220,
          column: 20
        },
        end: {
          line: 220,
          column: 32
        }
      },
      "91": {
        start: {
          line: 221,
          column: 26
        },
        end: {
          line: 221,
          column: 60
        }
      },
      "92": {
        start: {
          line: 222,
          column: 8
        },
        end: {
          line: 225,
          column: 9
        }
      },
      "93": {
        start: {
          line: 223,
          column: 24
        },
        end: {
          line: 223,
          column: 54
        }
      },
      "94": {
        start: {
          line: 224,
          column: 10
        },
        end: {
          line: 224,
          column: 63
        }
      },
      "95": {
        start: {
          line: 231,
          column: 44
        },
        end: {
          line: 231,
          column: 50
        }
      },
      "96": {
        start: {
          line: 232,
          column: 25
        },
        end: {
          line: 232,
          column: 52
        }
      },
      "97": {
        start: {
          line: 233,
          column: 24
        },
        end: {
          line: 233,
          column: 49
        }
      },
      "98": {
        start: {
          line: 234,
          column: 60
        },
        end: {
          line: 237,
          column: 7
        }
      },
      "99": {
        start: {
          line: 239,
          column: 22
        },
        end: {
          line: 239,
          column: 87
        }
      },
      "100": {
        start: {
          line: 241,
          column: 6
        },
        end: {
          line: 241,
          column: 30
        }
      },
      "101": {
        start: {
          line: 244,
          column: 29
        },
        end: {
          line: 244,
          column: 42
        }
      },
      "102": {
        start: {
          line: 245,
          column: 38
        },
        end: {
          line: 245,
          column: 39
        }
      },
      "103": {
        start: {
          line: 246,
          column: 34
        },
        end: {
          line: 246,
          column: 36
        }
      },
      "104": {
        start: {
          line: 247,
          column: 32
        },
        end: {
          line: 247,
          column: 39
        }
      },
      "105": {
        start: {
          line: 248,
          column: 25
        },
        end: {
          line: 248,
          column: 41
        }
      },
      "106": {
        start: {
          line: 249,
          column: 27
        },
        end: {
          line: 249,
          column: 29
        }
      },
      "107": {
        start: {
          line: 250,
          column: 30
        },
        end: {
          line: 250,
          column: 46
        }
      },
      "108": {
        start: {
          line: 251,
          column: 31
        },
        end: {
          line: 251,
          column: 48
        }
      },
      "109": {
        start: {
          line: 252,
          column: 34
        },
        end: {
          line: 252,
          column: 54
        }
      },
      "110": {
        start: {
          line: 253,
          column: 28
        },
        end: {
          line: 253,
          column: 42
        }
      },
      "111": {
        start: {
          line: 261,
          column: 6
        },
        end: {
          line: 261,
          column: 42
        }
      },
      "112": {
        start: {
          line: 262,
          column: 6
        },
        end: {
          line: 262,
          column: 43
        }
      },
      "113": {
        start: {
          line: 263,
          column: 6
        },
        end: {
          line: 263,
          column: 47
        }
      },
      "114": {
        start: {
          line: 264,
          column: 6
        },
        end: {
          line: 264,
          column: 41
        }
      },
      "115": {
        start: {
          line: 270,
          column: 25
        },
        end: {
          line: 270,
          column: 43
        }
      },
      "116": {
        start: {
          line: 271,
          column: 28
        },
        end: {
          line: 271,
          column: 46
        }
      },
      "117": {
        start: {
          line: 272,
          column: 31
        },
        end: {
          line: 272,
          column: 49
        }
      },
      "118": {
        start: {
          line: 274,
          column: 20
        },
        end: {
          line: 274,
          column: 36
        }
      },
      "119": {
        start: {
          line: 275,
          column: 21
        },
        end: {
          line: 275,
          column: 38
        }
      },
      "120": {
        start: {
          line: 276,
          column: 24
        },
        end: {
          line: 276,
          column: 44
        }
      },
      "121": {
        start: {
          line: 277,
          column: 18
        },
        end: {
          line: 277,
          column: 32
        }
      },
      "122": {
        start: {
          line: 282,
          column: 28
        },
        end: {
          line: 287,
          column: 2
        }
      },
      "123": {
        start: {
          line: 282,
          column: 102
        },
        end: {
          line: 287,
          column: 1
        }
      },
      "124": {
        start: {
          line: 286,
          column: 16
        },
        end: {
          line: 286,
          column: 17
        }
      }
    },
    fnMap: {
      "0": {
        name: "(anonymous_0)",
        decl: {
          start: {
            line: 8,
            column: 23
          },
          end: {
            line: 8,
            column: 24
          }
        },
        loc: {
          start: {
            line: 8,
            column: 36
          },
          end: {
            line: 8,
            column: 74
          }
        },
        line: 8
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 12,
            column: 28
          },
          end: {
            line: 12,
            column: 29
          }
        },
        loc: {
          start: {
            line: 12,
            column: 74
          },
          end: {
            line: 12,
            column: 123
          }
        },
        line: 12
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 36,
            column: 26
          },
          end: {
            line: 36,
            column: 27
          }
        },
        loc: {
          start: {
            line: 36,
            column: 65
          },
          end: {
            line: 44,
            column: 1
          }
        },
        line: 36
      },
      "3": {
        name: "(anonymous_3)",
        decl: {
          start: {
            line: 46,
            column: 22
          },
          end: {
            line: 46,
            column: 23
          }
        },
        loc: {
          start: {
            line: 46,
            column: 85
          },
          end: {
            line: 58,
            column: 1
          }
        },
        line: 46
      },
      "4": {
        name: "(anonymous_4)",
        decl: {
          start: {
            line: 60,
            column: 27
          },
          end: {
            line: 60,
            column: 28
          }
        },
        loc: {
          start: {
            line: 61,
            column: 2
          },
          end: {
            line: 61,
            column: 78
          }
        },
        line: 61
      },
      "5": {
        name: "(anonymous_5)",
        decl: {
          start: {
            line: 61,
            column: 38
          },
          end: {
            line: 61,
            column: 39
          }
        },
        loc: {
          start: {
            line: 61,
            column: 43
          },
          end: {
            line: 61,
            column: 77
          }
        },
        line: 61
      },
      "6": {
        name: "(anonymous_6)",
        decl: {
          start: {
            line: 63,
            column: 30
          },
          end: {
            line: 63,
            column: 31
          }
        },
        loc: {
          start: {
            line: 63,
            column: 56
          },
          end: {
            line: 67,
            column: 1
          }
        },
        line: 63
      },
      "7": {
        name: "(anonymous_7)",
        decl: {
          start: {
            line: 75,
            column: 24
          },
          end: {
            line: 75,
            column: 25
          }
        },
        loc: {
          start: {
            line: 75,
            column: 87
          },
          end: {
            line: 204,
            column: 1
          }
        },
        line: 75
      },
      "8": {
        name: "(anonymous_8)",
        decl: {
          start: {
            line: 78,
            column: 26
          },
          end: {
            line: 78,
            column: 27
          }
        },
        loc: {
          start: {
            line: 78,
            column: 57
          },
          end: {
            line: 87,
            column: 3
          }
        },
        line: 78
      },
      "9": {
        name: "(anonymous_9)",
        decl: {
          start: {
            line: 89,
            column: 29
          },
          end: {
            line: 89,
            column: 30
          }
        },
        loc: {
          start: {
            line: 89,
            column: 83
          },
          end: {
            line: 175,
            column: 3
          }
        },
        line: 89
      },
      "10": {
        name: "(anonymous_10)",
        decl: {
          start: {
            line: 177,
            column: 17
          },
          end: {
            line: 177,
            column: 18
          }
        },
        loc: {
          start: {
            line: 178,
            column: 4
          },
          end: {
            line: 186,
            column: 6
          }
        },
        line: 178
      },
      "11": {
        name: "(anonymous_11)",
        decl: {
          start: {
            line: 178,
            column: 33
          },
          end: {
            line: 178,
            column: 34
          }
        },
        loc: {
          start: {
            line: 178,
            column: 47
          },
          end: {
            line: 186,
            column: 5
          }
        },
        line: 178
      },
      "12": {
        name: "(anonymous_12)",
        decl: {
          start: {
            line: 195,
            column: 9
          },
          end: {
            line: 195,
            column: 10
          }
        },
        loc: {
          start: {
            line: 195,
            column: 70
          },
          end: {
            line: 195,
            column: 86
          }
        },
        line: 195
      },
      "13": {
        name: "(anonymous_13)",
        decl: {
          start: {
            line: 196,
            column: 10
          },
          end: {
            line: 196,
            column: 11
          }
        },
        loc: {
          start: {
            line: 196,
            column: 83
          },
          end: {
            line: 196,
            column: 99
          }
        },
        line: 196
      },
      "14": {
        name: "(anonymous_14)",
        decl: {
          start: {
            line: 197,
            column: 9
          },
          end: {
            line: 197,
            column: 10
          }
        },
        loc: {
          start: {
            line: 197,
            column: 82
          },
          end: {
            line: 197,
            column: 98
          }
        },
        line: 197
      },
      "15": {
        name: "(anonymous_15)",
        decl: {
          start: {
            line: 198,
            column: 11
          },
          end: {
            line: 198,
            column: 12
          }
        },
        loc: {
          start: {
            line: 198,
            column: 84
          },
          end: {
            line: 198,
            column: 100
          }
        },
        line: 198
      },
      "16": {
        name: "(anonymous_16)",
        decl: {
          start: {
            line: 199,
            column: 12
          },
          end: {
            line: 199,
            column: 13
          }
        },
        loc: {
          start: {
            line: 199,
            column: 73
          },
          end: {
            line: 199,
            column: 89
          }
        },
        line: 199
      },
      "17": {
        name: "(anonymous_17)",
        decl: {
          start: {
            line: 200,
            column: 13
          },
          end: {
            line: 200,
            column: 14
          }
        },
        loc: {
          start: {
            line: 200,
            column: 48
          },
          end: {
            line: 200,
            column: 64
          }
        },
        line: 200
      },
      "18": {
        name: "(anonymous_18)",
        decl: {
          start: {
            line: 211,
            column: 29
          },
          end: {
            line: 211,
            column: 30
          }
        },
        loc: {
          start: {
            line: 212,
            column: 2
          },
          end: {
            line: 278,
            column: 3
          }
        },
        line: 212
      },
      "19": {
        name: "(anonymous_19)",
        decl: {
          start: {
            line: 213,
            column: 4
          },
          end: {
            line: 213,
            column: 5
          }
        },
        loc: {
          start: {
            line: 213,
            column: 60
          },
          end: {
            line: 227,
            column: 5
          }
        },
        line: 213
      },
      "20": {
        name: "(anonymous_20)",
        decl: {
          start: {
            line: 215,
            column: 32
          },
          end: {
            line: 215,
            column: 33
          }
        },
        loc: {
          start: {
            line: 215,
            column: 38
          },
          end: {
            line: 226,
            column: 7
          }
        },
        line: 215
      },
      "21": {
        name: "(anonymous_21)",
        decl: {
          start: {
            line: 229,
            column: 4
          },
          end: {
            line: 229,
            column: 5
          }
        },
        loc: {
          start: {
            line: 229,
            column: 39
          },
          end: {
            line: 242,
            column: 5
          }
        },
        line: 229
      },
      "22": {
        name: "(anonymous_22)",
        decl: {
          start: {
            line: 260,
            column: 4
          },
          end: {
            line: 260,
            column: 5
          }
        },
        loc: {
          start: {
            line: 260,
            column: 48
          },
          end: {
            line: 265,
            column: 5
          }
        },
        line: 260
      },
      "23": {
        name: "(anonymous_23)",
        decl: {
          start: {
            line: 267,
            column: 4
          },
          end: {
            line: 267,
            column: 5
          }
        },
        loc: {
          start: {
            line: 267,
            column: 72
          },
          end: {
            line: 268,
            column: 5
          }
        },
        line: 267
      },
      "24": {
        name: "(anonymous_24)",
        decl: {
          start: {
            line: 270,
            column: 4
          },
          end: {
            line: 270,
            column: 5
          }
        },
        loc: {
          start: {
            line: 270,
            column: 23
          },
          end: {
            line: 270,
            column: 45
          }
        },
        line: 270
      },
      "25": {
        name: "(anonymous_25)",
        decl: {
          start: {
            line: 271,
            column: 4
          },
          end: {
            line: 271,
            column: 5
          }
        },
        loc: {
          start: {
            line: 271,
            column: 26
          },
          end: {
            line: 271,
            column: 48
          }
        },
        line: 271
      },
      "26": {
        name: "(anonymous_26)",
        decl: {
          start: {
            line: 272,
            column: 4
          },
          end: {
            line: 272,
            column: 5
          }
        },
        loc: {
          start: {
            line: 272,
            column: 29
          },
          end: {
            line: 272,
            column: 51
          }
        },
        line: 272
      },
      "27": {
        name: "(anonymous_27)",
        decl: {
          start: {
            line: 282,
            column: 28
          },
          end: {
            line: 282,
            column: 29
          }
        },
        loc: {
          start: {
            line: 282,
            column: 102
          },
          end: {
            line: 287,
            column: 1
          }
        },
        line: 282
      },
      "28": {
        name: "(anonymous_28)",
        decl: {
          start: {
            line: 286,
            column: 10
          },
          end: {
            line: 286,
            column: 11
          }
        },
        loc: {
          start: {
            line: 286,
            column: 16
          },
          end: {
            line: 286,
            column: 17
          }
        },
        line: 286
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        }, {
          start: {
            line: 49,
            column: 2
          },
          end: {
            line: 51,
            column: 3
          }
        }],
        line: 49
      },
      "1": {
        loc: {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        }, {
          start: {
            line: 80,
            column: 4
          },
          end: {
            line: 84,
            column: 5
          }
        }],
        line: 80
      },
      "2": {
        loc: {
          start: {
            line: 89,
            column: 14
          },
          end: {
            line: 175,
            column: 4
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 89,
            column: 14
          },
          end: {
            line: 89,
            column: 24
          }
        }, {
          start: {
            line: 89,
            column: 29
          },
          end: {
            line: 175,
            column: 3
          }
        }],
        line: 89
      },
      "3": {
        loc: {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 92,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 92,
            column: 5
          }
        }, {
          start: {
            line: 90,
            column: 4
          },
          end: {
            line: 92,
            column: 5
          }
        }],
        line: 90
      },
      "4": {
        loc: {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 107,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 107,
            column: 5
          }
        }, {
          start: {
            line: 100,
            column: 4
          },
          end: {
            line: 107,
            column: 5
          }
        }],
        line: 100
      },
      "5": {
        loc: {
          start: {
            line: 100,
            column: 8
          },
          end: {
            line: 100,
            column: 55
          }
        },
        type: "binary-expr",
        locations: [{
          start: {
            line: 100,
            column: 8
          },
          end: {
            line: 100,
            column: 29
          }
        }, {
          start: {
            line: 100,
            column: 33
          },
          end: {
            line: 100,
            column: 55
          }
        }],
        line: 100
      },
      "6": {
        loc: {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 111,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 111,
            column: 5
          }
        }, {
          start: {
            line: 109,
            column: 4
          },
          end: {
            line: 111,
            column: 5
          }
        }],
        line: 109
      },
      "7": {
        loc: {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 125,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 125,
            column: 5
          }
        }, {
          start: {
            line: 113,
            column: 4
          },
          end: {
            line: 125,
            column: 5
          }
        }],
        line: 113
      },
      "8": {
        loc: {
          start: {
            line: 127,
            column: 4
          },
          end: {
            line: 129,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 127,
            column: 4
          },
          end: {
            line: 129,
            column: 5
          }
        }, {
          start: {
            line: 127,
            column: 4
          },
          end: {
            line: 129,
            column: 5
          }
        }],
        line: 127
      },
      "9": {
        loc: {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        }, {
          start: {
            line: 131,
            column: 4
          },
          end: {
            line: 172,
            column: 5
          }
        }],
        line: 131
      },
      "10": {
        loc: {
          start: {
            line: 133,
            column: 6
          },
          end: {
            line: 135,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 133,
            column: 6
          },
          end: {
            line: 135,
            column: 7
          }
        }, {
          start: {
            line: 133,
            column: 6
          },
          end: {
            line: 135,
            column: 7
          }
        }],
        line: 133
      },
      "11": {
        loc: {
          start: {
            line: 152,
            column: 9
          },
          end: {
            line: 172,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 152,
            column: 9
          },
          end: {
            line: 172,
            column: 5
          }
        }, {
          start: {
            line: 152,
            column: 9
          },
          end: {
            line: 172,
            column: 5
          }
        }],
        line: 152
      },
      "12": {
        loc: {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 156,
            column: 7
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 156,
            column: 7
          }
        }, {
          start: {
            line: 154,
            column: 6
          },
          end: {
            line: 156,
            column: 7
          }
        }],
        line: 154
      },
      "13": {
        loc: {
          start: {
            line: 222,
            column: 8
          },
          end: {
            line: 225,
            column: 9
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 222,
            column: 8
          },
          end: {
            line: 225,
            column: 9
          }
        }, {
          start: {
            line: 222,
            column: 8
          },
          end: {
            line: 225,
            column: 9
          }
        }],
        line: 222
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
      "124": 0
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
      "28": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0],
      "2": [0, 0],
      "3": [0, 0],
      "4": [0, 0],
      "5": [0, 0],
      "6": [0, 0],
      "7": [0, 0],
      "8": [0, 0],
      "9": [0, 0],
      "10": [0, 0],
      "11": [0, 0],
      "12": [0, 0],
      "13": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "1cd7a2a8690170f024d4bef649306ab3cd19c357"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_1jxxleivgk = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_1jxxleivgk();

function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

cov_1jxxleivgk().s[0]++;

// MOCK helpers
var notImplemented = function notImplemented() {
  cov_1jxxleivgk().f[0]++;
  cov_1jxxleivgk().s[1]++;
  throw new Error('not implemented');
}; // MOCK Activity


cov_1jxxleivgk().s[2]++;

var mockActivity = function mockActivity(text) {
  cov_1jxxleivgk().f[1]++;
  cov_1jxxleivgk().s[3]++;
  return {
    type: 'message',
    from: {
      id: 'sender'
    },
    text: text
  };
}; // MOCK DirectLine Server (shared state used by Observable.ajax and WebSocket mocks)


exports.mockActivity = mockActivity;
var tokenPrefix = (cov_1jxxleivgk().s[4]++, 'token');
cov_1jxxleivgk().s[5]++;

var mockServer = function mockServer(scheduler) {
  cov_1jxxleivgk().f[2]++;
  cov_1jxxleivgk().s[6]++;
  return {
    scheduler: scheduler,
    conversation: {
      sockets: new Set(),
      conversationId: 'OneConversation',
      history: [],
      token: tokenPrefix + '1'
    }
  };
};

exports.mockServer = mockServer;
cov_1jxxleivgk().s[7]++;

var tokenResponse = function tokenResponse(server, request) {
  cov_1jxxleivgk().f[3]++;

  var _ref = (cov_1jxxleivgk().s[8]++, request),
      headers = _ref.headers;

  var authorization = (cov_1jxxleivgk().s[9]++, headers['Authorization']);
  cov_1jxxleivgk().s[10]++;

  if (authorization === "Bearer ".concat(server.conversation.token)) {
    cov_1jxxleivgk().b[0][0]++;
    cov_1jxxleivgk().s[11]++;
    return null;
  } else {
    cov_1jxxleivgk().b[0][1]++;
  }

  var response = (cov_1jxxleivgk().s[12]++, {
    status: 403
  });
  cov_1jxxleivgk().s[13]++;
  return response;
};

cov_1jxxleivgk().s[14]++;

var injectClose = function injectClose(server) {
  cov_1jxxleivgk().f[4]++;
  cov_1jxxleivgk().s[15]++;
  return server.conversation.sockets.forEach(function (s) {
    cov_1jxxleivgk().f[5]++;
    cov_1jxxleivgk().s[16]++;
    return s.onclose(new CloseEvent('close'));
  });
};

exports.injectClose = injectClose;
cov_1jxxleivgk().s[17]++;

var injectNewToken = function injectNewToken(server) {
  cov_1jxxleivgk().f[6]++;

  var _ref2 = (cov_1jxxleivgk().s[18]++, server),
      conversation = _ref2.conversation;

  var suffix = (cov_1jxxleivgk().s[19]++, Number.parseInt(conversation.token.substring(tokenPrefix.length), 10) + 1);
  cov_1jxxleivgk().s[20]++;
  conversation.token = tokenPrefix + suffix;
};

exports.injectNewToken = injectNewToken;
var keyWatermark = (cov_1jxxleivgk().s[21]++, 'watermark');
cov_1jxxleivgk().s[22]++;

// MOCK Observable.ajax (uses shared state in Server)
var mockAjax = function mockAjax(server, customAjax) {
  cov_1jxxleivgk().f[7]++;
  var uriBase = (cov_1jxxleivgk().s[23]++, new _url.URL('https://directline.botframework.com/v3/directline/'));
  cov_1jxxleivgk().s[24]++;

  var createStreamUrl = function createStreamUrl(watermark) {
    cov_1jxxleivgk().f[8]++;
    var uri = (cov_1jxxleivgk().s[25]++, new _url.URL('conversations/stream', uriBase));
    cov_1jxxleivgk().s[26]++;

    if (watermark > 0) {
      cov_1jxxleivgk().b[1][0]++;
      var params = (cov_1jxxleivgk().s[27]++, new _url.URLSearchParams());
      cov_1jxxleivgk().s[28]++;
      params.append(keyWatermark, watermark.toString(10));
      cov_1jxxleivgk().s[29]++;
      uri.search = params.toString();
    } else {
      cov_1jxxleivgk().b[1][1]++;
    }

    cov_1jxxleivgk().s[30]++;
    return uri.toString();
  };

  var jax = (cov_1jxxleivgk().s[31]++, (cov_1jxxleivgk().b[2][0]++, customAjax) || (cov_1jxxleivgk().b[2][1]++, function (urlOrRequest) {
    cov_1jxxleivgk().f[9]++;
    cov_1jxxleivgk().s[32]++;

    if (typeof urlOrRequest === 'string') {
      cov_1jxxleivgk().b[3][0]++;
      cov_1jxxleivgk().s[33]++;
      throw new Error();
    } else {
      cov_1jxxleivgk().b[3][1]++;
    }

    var uri = (cov_1jxxleivgk().s[34]++, new _url.URL(urlOrRequest.url));

    var _ref3 = (cov_1jxxleivgk().s[35]++, uri),
        pathname = _ref3.pathname,
        searchParams = _ref3.searchParams;

    var parts = (cov_1jxxleivgk().s[36]++, pathname.split('/'));
    cov_1jxxleivgk().s[37]++;

    if ((cov_1jxxleivgk().b[5][0]++, parts[3] === 'tokens') && (cov_1jxxleivgk().b[5][1]++, parts[4] === 'refresh')) {
      cov_1jxxleivgk().b[4][0]++;
      var response = (cov_1jxxleivgk().s[38]++, {
        response: {
          token: server.conversation.token
        }
      });
      cov_1jxxleivgk().s[39]++;
      return response;
    } else {
      cov_1jxxleivgk().b[4][1]++;
    }

    cov_1jxxleivgk().s[40]++;

    if (parts[3] !== 'conversations') {
      cov_1jxxleivgk().b[6][0]++;
      cov_1jxxleivgk().s[41]++;
      throw new Error();
    } else {
      cov_1jxxleivgk().b[6][1]++;
    }

    cov_1jxxleivgk().s[42]++;

    if (parts.length === 4) {
      cov_1jxxleivgk().b[7][0]++;
      var conversation = (cov_1jxxleivgk().s[43]++, {
        conversationId: server.conversation.conversationId,
        token: server.conversation.token,
        streamUrl: createStreamUrl(0)
      });

      var _response = (cov_1jxxleivgk().s[44]++, {
        response: conversation
      });

      cov_1jxxleivgk().s[45]++;
      return _response;
    } else {
      cov_1jxxleivgk().b[7][1]++;
    }

    cov_1jxxleivgk().s[46]++;

    if (parts[4] !== server.conversation.conversationId) {
      cov_1jxxleivgk().b[8][0]++;
      cov_1jxxleivgk().s[47]++;
      throw new Error();
    } else {
      cov_1jxxleivgk().b[8][1]++;
    }

    cov_1jxxleivgk().s[48]++;

    if (parts[5] === 'activities') {
      cov_1jxxleivgk().b[9][0]++;
      var responseToken = (cov_1jxxleivgk().s[49]++, tokenResponse(server, urlOrRequest));
      cov_1jxxleivgk().s[50]++;

      if (responseToken !== null) {
        cov_1jxxleivgk().b[10][0]++;
        cov_1jxxleivgk().s[51]++;
        return responseToken;
      } else {
        cov_1jxxleivgk().b[10][1]++;
      }

      var activity = (cov_1jxxleivgk().s[52]++, urlOrRequest.body);

      var _after = (cov_1jxxleivgk().s[53]++, server.conversation.history.push(activity));

      var _start = (cov_1jxxleivgk().s[54]++, _after - 1);

      cov_1jxxleivgk().s[55]++;

      var _iterator = _createForOfIteratorHelper(server.conversation.sockets),
          _step;

      try {
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          var socket = _step.value;
          cov_1jxxleivgk().s[56]++;
          socket.play(_start, _after);
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }

      var _response2 = (cov_1jxxleivgk().s[57]++, {
        response: {
          id: 'messageId'
        }
      });

      cov_1jxxleivgk().s[58]++;
      return _response2;
    } else {
      cov_1jxxleivgk().b[9][1]++;
      cov_1jxxleivgk().s[59]++;

      if (parts.length === 5) {
        cov_1jxxleivgk().b[11][0]++;

        var _responseToken = (cov_1jxxleivgk().s[60]++, tokenResponse(server, urlOrRequest));

        cov_1jxxleivgk().s[61]++;

        if (_responseToken !== null) {
          cov_1jxxleivgk().b[12][0]++;
          cov_1jxxleivgk().s[62]++;
          return _responseToken;
        } else {
          cov_1jxxleivgk().b[12][1]++;
        }

        var watermark = (cov_1jxxleivgk().s[63]++, searchParams.get('watermark'));

        var _start2 = (cov_1jxxleivgk().s[64]++, Number.parseInt(watermark, 10));

        var _conversation = (cov_1jxxleivgk().s[65]++, {
          conversationId: server.conversation.conversationId,
          token: server.conversation.token,
          streamUrl: createStreamUrl(_start2)
        });

        var _response3 = (cov_1jxxleivgk().s[66]++, {
          response: _conversation
        });

        cov_1jxxleivgk().s[67]++;
        return _response3;
      } else {
        cov_1jxxleivgk().b[11][1]++;
      }
    }

    cov_1jxxleivgk().s[68]++;
    throw new Error();
  }));
  cov_1jxxleivgk().s[69]++;

  var method = function method(urlOrRequest) {
    cov_1jxxleivgk().f[10]++;
    cov_1jxxleivgk().s[70]++;
    return new _rxjs.Observable(function (subscriber) {
      cov_1jxxleivgk().f[11]++;
      cov_1jxxleivgk().s[71]++;

      try {
        cov_1jxxleivgk().s[72]++;
        subscriber.next(jax(urlOrRequest));
        cov_1jxxleivgk().s[73]++;
        subscriber.complete();
      } catch (error) {
        cov_1jxxleivgk().s[74]++;
        subscriber.error(error);
      }
    });
  };

  var properties = (cov_1jxxleivgk().s[75]++, {
    get: function get(url, headers) {
      cov_1jxxleivgk().f[12]++;
      cov_1jxxleivgk().s[76]++;
      return notImplemented();
    },
    post: function post(url, body, headers) {
      cov_1jxxleivgk().f[13]++;
      cov_1jxxleivgk().s[77]++;
      return notImplemented();
    },
    put: function put(url, body, headers) {
      cov_1jxxleivgk().f[14]++;
      cov_1jxxleivgk().s[78]++;
      return notImplemented();
    },
    patch: function patch(url, body, headers) {
      cov_1jxxleivgk().f[15]++;
      cov_1jxxleivgk().s[79]++;
      return notImplemented();
    },
    "delete": function _delete(url, headers) {
      cov_1jxxleivgk().f[16]++;
      cov_1jxxleivgk().s[80]++;
      return notImplemented();
    },
    getJSON: function getJSON(url, headers) {
      cov_1jxxleivgk().f[17]++;
      cov_1jxxleivgk().s[81]++;
      return notImplemented();
    }
  });
  cov_1jxxleivgk().s[82]++;
  return Object.assign(method, properties);
}; // MOCK WebSocket (uses shared state in Server)


exports.mockAjax = mockAjax;
cov_1jxxleivgk().s[83]++;

var mockWebSocket = function mockWebSocket(server) {
  var _class, _temp;

  cov_1jxxleivgk().f[18]++;
  cov_1jxxleivgk().s[84]++;
  return _temp = _class = /*#__PURE__*/function () {
    function MockWebSocket(url, protocols) {
      var _this = this;

      (0, _classCallCheck2["default"])(this, MockWebSocket);
      (0, _defineProperty2["default"])(this, "binaryType", (cov_1jxxleivgk().s[101]++, 'arraybuffer'));
      (0, _defineProperty2["default"])(this, "bufferedAmount", (cov_1jxxleivgk().s[102]++, 0));
      (0, _defineProperty2["default"])(this, "extensions", (cov_1jxxleivgk().s[103]++, ''));
      (0, _defineProperty2["default"])(this, "protocol", (cov_1jxxleivgk().s[104]++, 'https'));
      (0, _defineProperty2["default"])(this, "readyState", (cov_1jxxleivgk().s[105]++, WebSocket.CLOSED));
      (0, _defineProperty2["default"])(this, "url", (cov_1jxxleivgk().s[106]++, ''));
      (0, _defineProperty2["default"])(this, "CLOSED", (cov_1jxxleivgk().s[107]++, WebSocket.CLOSED));
      (0, _defineProperty2["default"])(this, "CLOSING", (cov_1jxxleivgk().s[108]++, WebSocket.CLOSING));
      (0, _defineProperty2["default"])(this, "CONNECTING", (cov_1jxxleivgk().s[109]++, WebSocket.CONNECTING));
      (0, _defineProperty2["default"])(this, "OPEN", (cov_1jxxleivgk().s[110]++, WebSocket.OPEN));
      cov_1jxxleivgk().f[19]++;
      cov_1jxxleivgk().s[85]++;
      server.scheduler.schedule(function () {
        cov_1jxxleivgk().f[20]++;
        cov_1jxxleivgk().s[86]++;
        _this.readyState = WebSocket.CONNECTING;
        cov_1jxxleivgk().s[87]++;
        server.conversation.sockets.add(_this);
        cov_1jxxleivgk().s[88]++;

        _this.onopen(new Event('open'));

        cov_1jxxleivgk().s[89]++;
        _this.readyState = WebSocket.OPEN;
        var uri = (cov_1jxxleivgk().s[90]++, new _url.URL(url));
        var watermark = (cov_1jxxleivgk().s[91]++, uri.searchParams.get(keyWatermark));
        cov_1jxxleivgk().s[92]++;

        if (watermark !== null) {
          cov_1jxxleivgk().b[13][0]++;

          var _start3 = (cov_1jxxleivgk().s[93]++, Number.parseInt(watermark, 10));

          cov_1jxxleivgk().s[94]++;

          _this.play(_start3, server.conversation.history.length);
        } else {
          cov_1jxxleivgk().b[13][1]++;
        }
      });
    }

    (0, _createClass2["default"])(MockWebSocket, [{
      key: "play",
      value: function play(start, after) {
        cov_1jxxleivgk().f[21]++;

        var _ref4 = (cov_1jxxleivgk().s[95]++, server),
            history = _ref4.conversation.history;

        var activities = (cov_1jxxleivgk().s[96]++, history.slice(start, after));
        var watermark = (cov_1jxxleivgk().s[97]++, history.length.toString());
        var activityGroup = (cov_1jxxleivgk().s[98]++, {
          activities: activities,
          watermark: watermark
        });
        var message = (cov_1jxxleivgk().s[99]++, new MessageEvent('type', {
          data: JSON.stringify(activityGroup)
        }));
        cov_1jxxleivgk().s[100]++;
        this.onmessage(message);
      }
    }, {
      key: "close",
      value: function close(code, reason) {
        cov_1jxxleivgk().f[22]++;
        cov_1jxxleivgk().s[111]++;
        this.readyState = WebSocket.CLOSING;
        cov_1jxxleivgk().s[112]++;
        this.onclose(new CloseEvent('close'));
        cov_1jxxleivgk().s[113]++;
        server.conversation.sockets["delete"](this);
        cov_1jxxleivgk().s[114]++;
        this.readyState = WebSocket.CLOSED;
      }
    }, {
      key: "send",
      value: function send(data) {
        cov_1jxxleivgk().f[23]++;
      }
    }, {
      key: "addEventListener",
      value: function addEventListener() {
        cov_1jxxleivgk().f[24]++;
        cov_1jxxleivgk().s[115]++;
        throw new Error();
      }
    }, {
      key: "removeEventListener",
      value: function removeEventListener() {
        cov_1jxxleivgk().f[25]++;
        cov_1jxxleivgk().s[116]++;
        throw new Error();
      }
    }, {
      key: "dispatchEvent",
      value: function dispatchEvent() {
        cov_1jxxleivgk().f[26]++;
        cov_1jxxleivgk().s[117]++;
        throw new Error();
      }
    }]);
    return MockWebSocket;
  }(), (0, _defineProperty2["default"])(_class, "CLOSED", (cov_1jxxleivgk().s[118]++, WebSocket.CLOSED)), (0, _defineProperty2["default"])(_class, "CLOSING", (cov_1jxxleivgk().s[119]++, WebSocket.CLOSING)), (0, _defineProperty2["default"])(_class, "CONNECTING", (cov_1jxxleivgk().s[120]++, WebSocket.CONNECTING)), (0, _defineProperty2["default"])(_class, "OPEN", (cov_1jxxleivgk().s[121]++, WebSocket.OPEN)), _temp;
}; // MOCK services (top-level aggregation of all mocks)


exports.mockWebSocket = mockWebSocket;
cov_1jxxleivgk().s[122]++;

var mockServices = function mockServices(server, scheduler) {
  cov_1jxxleivgk().f[27]++;
  cov_1jxxleivgk().s[123]++;
  return {
    scheduler: scheduler,
    WebSocket: mockWebSocket(server),
    ajax: mockAjax(server),
    random: function random() {
      cov_1jxxleivgk().f[28]++;
      cov_1jxxleivgk().s[124]++;
      return 0;
    }
  };
};

exports.mockServices = mockServices;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXJlY3RMaW5lLm1vY2sudHMiXSwibmFtZXMiOlsibm90SW1wbGVtZW50ZWQiLCJFcnJvciIsIm1vY2tBY3Rpdml0eSIsInRleHQiLCJ0eXBlIiwiZnJvbSIsImlkIiwidG9rZW5QcmVmaXgiLCJtb2NrU2VydmVyIiwic2NoZWR1bGVyIiwiY29udmVyc2F0aW9uIiwic29ja2V0cyIsIlNldCIsImNvbnZlcnNhdGlvbklkIiwiaGlzdG9yeSIsInRva2VuIiwidG9rZW5SZXNwb25zZSIsInNlcnZlciIsInJlcXVlc3QiLCJoZWFkZXJzIiwiYXV0aG9yaXphdGlvbiIsInJlc3BvbnNlIiwic3RhdHVzIiwiaW5qZWN0Q2xvc2UiLCJmb3JFYWNoIiwicyIsIm9uY2xvc2UiLCJDbG9zZUV2ZW50IiwiaW5qZWN0TmV3VG9rZW4iLCJzdWZmaXgiLCJOdW1iZXIiLCJwYXJzZUludCIsInN1YnN0cmluZyIsImxlbmd0aCIsImtleVdhdGVybWFyayIsIm1vY2tBamF4IiwiY3VzdG9tQWpheCIsInVyaUJhc2UiLCJVUkwiLCJjcmVhdGVTdHJlYW1VcmwiLCJ3YXRlcm1hcmsiLCJ1cmkiLCJwYXJhbXMiLCJVUkxTZWFyY2hQYXJhbXMiLCJhcHBlbmQiLCJ0b1N0cmluZyIsInNlYXJjaCIsImpheCIsInVybE9yUmVxdWVzdCIsInVybCIsInBhdGhuYW1lIiwic2VhcmNoUGFyYW1zIiwicGFydHMiLCJzcGxpdCIsInN0cmVhbVVybCIsInJlc3BvbnNlVG9rZW4iLCJhY3Rpdml0eSIsImJvZHkiLCJhZnRlciIsInB1c2giLCJzdGFydCIsInNvY2tldCIsInBsYXkiLCJnZXQiLCJtZXRob2QiLCJPYnNlcnZhYmxlIiwic3Vic2NyaWJlciIsIm5leHQiLCJjb21wbGV0ZSIsImVycm9yIiwicHJvcGVydGllcyIsInBvc3QiLCJwdXQiLCJwYXRjaCIsImdldEpTT04iLCJPYmplY3QiLCJhc3NpZ24iLCJtb2NrV2ViU29ja2V0IiwicHJvdG9jb2xzIiwiV2ViU29ja2V0IiwiQ0xPU0VEIiwiQ0xPU0lORyIsIkNPTk5FQ1RJTkciLCJPUEVOIiwic2NoZWR1bGUiLCJyZWFkeVN0YXRlIiwiYWRkIiwib25vcGVuIiwiRXZlbnQiLCJhY3Rpdml0aWVzIiwic2xpY2UiLCJhY3Rpdml0eUdyb3VwIiwibWVzc2FnZSIsIk1lc3NhZ2VFdmVudCIsImRhdGEiLCJKU09OIiwic3RyaW5naWZ5Iiwib25tZXNzYWdlIiwiY29kZSIsInJlYXNvbiIsIm1vY2tTZXJ2aWNlcyIsImFqYXgiLCJyYW5kb20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFvQjtBQTFEM0M7QUFBQTtBQUFBLGFBMkRFLCtCQUFzQjtBQUFBO0FBQUE7QUFBRSxjQUFNLElBQUlBLEtBQUosRUFBTjtBQUFvQjtBQTNEOUM7QUFBQTtBQUFBLGFBNERFLHlCQUF5QjtBQUFBO0FBQUE7QUFBRSxjQUFNLElBQUlBLEtBQUosRUFBTjtBQUFvQjtBQTVEakQ7QUFBQTtBQUFBLHNGQThEa0I4RSxTQUFTLENBQUNDLE1BOUQ1QixvRkErRG1CRCxTQUFTLENBQUNFLE9BL0Q3Qix1RkFnRXNCRixTQUFTLENBQUNHLFVBaEVoQyxpRkFpRWdCSCxTQUFTLENBQUNJLElBakUxQjtBQWtFQyxDQW5FSSxDLENBcUVQOzs7Ozs7QUFFTyxJQUFNaUIsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ25GLE1BQUQsRUFBaUJSLFNBQWpCLEVBQTBFO0FBQUE7QUFBQTtBQUFBO0FBQ3BHQSxJQUFBQSxTQUFTLEVBQVRBLFNBRG9HO0FBRXBHc0UsSUFBQUEsU0FBUyxFQUFFRixhQUFhLENBQUM1RCxNQUFELENBRjRFO0FBR3BHb0YsSUFBQUEsSUFBSSxFQUFFbEUsUUFBUSxDQUFDbEIsTUFBRCxDQUhzRjtBQUlwR3FGLElBQUFBLE1BQU0sRUFBRSxrQkFBTTtBQUFBO0FBQUE7QUFBQTtBQUFDO0FBSnFGO0FBS3JHLENBTE0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBEaXJlY3RMaW5lRXhwb3J0IGZyb20gXCIuL2RpcmVjdExpbmVcIjtcbmltcG9ydCB7IFRlc3RTY2hlZHVsZXIsIE9ic2VydmFibGUgfSBmcm9tIFwicnhqc1wiO1xuaW1wb3J0IHsgQWpheENyZWF0aW9uTWV0aG9kLCBBamF4UmVxdWVzdCwgQWpheFJlc3BvbnNlIH0gZnJvbSBcInJ4anMvb2JzZXJ2YWJsZS9kb20vQWpheE9ic2VydmFibGVcIjtcbmltcG9ydCB7IFVSTCwgVVJMU2VhcmNoUGFyYW1zIH0gZnJvbSAndXJsJztcblxuLy8gTU9DSyBoZWxwZXJzXG5cbmNvbnN0IG5vdEltcGxlbWVudGVkID0gKCk6IG5ldmVyID0+IHsgdGhyb3cgbmV3IEVycm9yKCdub3QgaW1wbGVtZW50ZWQnKSB9O1xuXG4vLyBNT0NLIEFjdGl2aXR5XG5cbmV4cG9ydCBjb25zdCBtb2NrQWN0aXZpdHkgPSAodGV4dDogc3RyaW5nKTogRGlyZWN0TGluZUV4cG9ydC5BY3Rpdml0eSA9PiAoeyB0eXBlOiAnbWVzc2FnZScsIGZyb206IHsgaWQ6ICdzZW5kZXInIH0sIHRleHQgfSk7XG5cbi8vIE1PQ0sgRGlyZWN0TGluZSBTZXJ2ZXIgKHNoYXJlZCBzdGF0ZSB1c2VkIGJ5IE9ic2VydmFibGUuYWpheCBhbmQgV2ViU29ja2V0IG1vY2tzKVxuXG5pbnRlcmZhY2UgQWN0aXZpdHlTb2NrZXQge1xuICBwbGF5OiAoc3RhcnQ6IG51bWJlciwgYWZ0ZXI6IG51bWJlcikgPT4gdm9pZDtcbn1cblxuZXhwb3J0IHR5cGUgU29ja2V0ID0gV2ViU29ja2V0ICYgQWN0aXZpdHlTb2NrZXQ7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQ29udmVyc2F0aW9uIHtcbiAgc29ja2V0czogU2V0PFNvY2tldD47XG4gIGNvbnZlcnNhdGlvbklkOiBzdHJpbmc7XG4gIGhpc3Rvcnk6IEFycmF5PERpcmVjdExpbmVFeHBvcnQuQWN0aXZpdHk+O1xuICB0b2tlbjogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFNlcnZlciB7XG4gIHNjaGVkdWxlcjogVGVzdFNjaGVkdWxlcjtcbiAgY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb247XG59XG5cbmNvbnN0IHRva2VuUHJlZml4ID0gJ3Rva2VuJztcblxuZXhwb3J0IGNvbnN0IG1vY2tTZXJ2ZXIgPSAoc2NoZWR1bGVyOiBUZXN0U2NoZWR1bGVyKTogU2VydmVyID0+ICh7XG4gIHNjaGVkdWxlcixcbiAgY29udmVyc2F0aW9uOiB7XG4gICAgc29ja2V0czogbmV3IFNldDxTb2NrZXQ+KCksXG4gICAgY29udmVyc2F0aW9uSWQ6ICdPbmVDb252ZXJzYXRpb24nLFxuICAgIGhpc3Rvcnk6IFtdLFxuICAgIHRva2VuOiB0b2tlblByZWZpeCArICcxJyxcbiAgfVxufSk7XG5cbmNvbnN0IHRva2VuUmVzcG9uc2UgPSAoc2VydmVyOiBTZXJ2ZXIsIHJlcXVlc3Q6IEFqYXhSZXF1ZXN0KTogQWpheFJlc3BvbnNlIHwgbnVsbCA9PiB7XG4gIGNvbnN0IHsgaGVhZGVycyB9ID0gcmVxdWVzdDtcbiAgY29uc3QgYXV0aG9yaXphdGlvbiA9IGhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXTtcbiAgaWYgKGF1dGhvcml6YXRpb24gPT09IGBCZWFyZXIgJHtzZXJ2ZXIuY29udmVyc2F0aW9uLnRva2VufWApIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIGNvbnN0IHJlc3BvbnNlOiBQYXJ0aWFsPEFqYXhSZXNwb25zZT4gPSB7XG4gICAgc3RhdHVzOiA0MDMsXG4gIH1cblxuICByZXR1cm4gcmVzcG9uc2UgYXMgQWpheFJlc3BvbnNlO1xufVxuXG5leHBvcnQgY29uc3QgaW5qZWN0Q2xvc2UgPSAoc2VydmVyOiBTZXJ2ZXIpOiB2b2lkID0+XG4gIHNlcnZlci5jb252ZXJzYXRpb24uc29ja2V0cy5mb3JFYWNoKHMgPT4gcy5vbmNsb3NlKG5ldyBDbG9zZUV2ZW50KCdjbG9zZScpKSk7XG5cbmV4cG9ydCBjb25zdCBpbmplY3ROZXdUb2tlbiA9IChzZXJ2ZXI6IFNlcnZlcik6IHZvaWQgPT4ge1xuICBjb25zdCB7IGNvbnZlcnNhdGlvbiB9ID0gc2VydmVyO1xuICBjb25zdCBzdWZmaXggPSBOdW1iZXIucGFyc2VJbnQoY29udmVyc2F0aW9uLnRva2VuLnN1YnN0cmluZyh0b2tlblByZWZpeC5sZW5ndGgpLCAxMCkgKyAxXG4gIGNvbnZlcnNhdGlvbi50b2tlbiA9IHRva2VuUHJlZml4ICsgc3VmZml4O1xufVxuXG5jb25zdCBrZXlXYXRlcm1hcmsgPSAnd2F0ZXJtYXJrJztcblxudHlwZSBhamF4VHlwZSA9ICh1cmxPclJlcXVlc3Q6IHN0cmluZyB8IEFqYXhSZXF1ZXN0KSA9PiBBamF4UmVzcG9uc2U7XG5cbi8vIE1PQ0sgT2JzZXJ2YWJsZS5hamF4ICh1c2VzIHNoYXJlZCBzdGF0ZSBpbiBTZXJ2ZXIpXG5cbmV4cG9ydCBjb25zdCBtb2NrQWpheCA9IChzZXJ2ZXI6IFNlcnZlciwgY3VzdG9tQWpheD86IGFqYXhUeXBlKTogQWpheENyZWF0aW9uTWV0aG9kID0+IHtcblxuICBjb25zdCB1cmlCYXNlID0gbmV3IFVSTCgnaHR0cHM6Ly9kaXJlY3RsaW5lLmJvdGZyYW1ld29yay5jb20vdjMvZGlyZWN0bGluZS8nKTtcbiAgY29uc3QgY3JlYXRlU3RyZWFtVXJsID0gKHdhdGVybWFyazogbnVtYmVyKTogc3RyaW5nID0+IHtcbiAgICBjb25zdCB1cmkgPSBuZXcgVVJMKCdjb252ZXJzYXRpb25zL3N0cmVhbScsIHVyaUJhc2UpO1xuICAgIGlmICh3YXRlcm1hcmsgPiAwKSB7XG4gICAgICBjb25zdCBwYXJhbXMgPSBuZXcgVVJMU2VhcmNoUGFyYW1zKCk7XG4gICAgICBwYXJhbXMuYXBwZW5kKGtleVdhdGVybWFyaywgd2F0ZXJtYXJrLnRvU3RyaW5nKDEwKSk7XG4gICAgICB1cmkuc2VhcmNoID0gcGFyYW1zLnRvU3RyaW5nKCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHVyaS50b1N0cmluZygpO1xuICB9XG5cbiAgY29uc3QgamF4ID0gY3VzdG9tQWpheCB8fCAoKHVybE9yUmVxdWVzdDogc3RyaW5nIHwgQWpheFJlcXVlc3QpOiBBamF4UmVzcG9uc2UgPT4ge1xuICAgIGlmICh0eXBlb2YgdXJsT3JSZXF1ZXN0ID09PSAnc3RyaW5nJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXJpID0gbmV3IFVSTCh1cmxPclJlcXVlc3QudXJsKTtcblxuICAgIGNvbnN0IHsgcGF0aG5hbWUsIHNlYXJjaFBhcmFtcyB9ID0gdXJpO1xuXG4gICAgY29uc3QgcGFydHMgPSBwYXRobmFtZS5zcGxpdCgnLycpO1xuXG4gICAgaWYgKHBhcnRzWzNdID09PSAndG9rZW5zJyAmJiBwYXJ0c1s0XSA9PT0gJ3JlZnJlc2gnKSB7XG5cbiAgICAgIGNvbnN0IHJlc3BvbnNlOiBQYXJ0aWFsPEFqYXhSZXNwb25zZT4gPSB7XG4gICAgICAgIHJlc3BvbnNlOiB7IHRva2VuOiBzZXJ2ZXIuY29udmVyc2F0aW9uLnRva2VuIH1cbiAgICAgIH07XG5cbiAgICAgIHJldHVybiByZXNwb25zZSBhcyBBamF4UmVzcG9uc2U7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRzWzNdICE9PSAnY29udmVyc2F0aW9ucycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cblxuICAgIGlmIChwYXJ0cy5sZW5ndGggPT09IDQpIHtcbiAgICAgIGNvbnN0IGNvbnZlcnNhdGlvbjogRGlyZWN0TGluZUV4cG9ydC5Db252ZXJzYXRpb24gPSB7XG4gICAgICAgIGNvbnZlcnNhdGlvbklkOiBzZXJ2ZXIuY29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklkLFxuICAgICAgICB0b2tlbjogc2VydmVyLmNvbnZlcnNhdGlvbi50b2tlbixcbiAgICAgICAgc3RyZWFtVXJsOiBjcmVhdGVTdHJlYW1VcmwoMCksXG4gICAgICB9O1xuXG4gICAgICBjb25zdCByZXNwb25zZTogUGFydGlhbDxBamF4UmVzcG9uc2U+ID0ge1xuICAgICAgICByZXNwb25zZTogY29udmVyc2F0aW9uLFxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzcG9uc2UgYXMgQWpheFJlc3BvbnNlO1xuICAgIH1cblxuICAgIGlmIChwYXJ0c1s0XSAhPT0gc2VydmVyLmNvbnZlcnNhdGlvbi5jb252ZXJzYXRpb25JZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuXG4gICAgaWYgKHBhcnRzWzVdID09PSAnYWN0aXZpdGllcycpIHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlVG9rZW4gPSB0b2tlblJlc3BvbnNlKHNlcnZlciwgdXJsT3JSZXF1ZXN0KTtcbiAgICAgIGlmIChyZXNwb25zZVRva2VuICE9PSBudWxsKSB7XG4gICAgICAgIHJldHVybiByZXNwb25zZVRva2VuO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhY3Rpdml0eTogRGlyZWN0TGluZUV4cG9ydC5BY3Rpdml0eSA9IHVybE9yUmVxdWVzdC5ib2R5O1xuXG4gICAgICBjb25zdCBhZnRlciA9IHNlcnZlci5jb252ZXJzYXRpb24uaGlzdG9yeS5wdXNoKGFjdGl2aXR5KTtcbiAgICAgIGNvbnN0IHN0YXJ0ID0gYWZ0ZXIgLSAxO1xuXG4gICAgICBmb3IgKGNvbnN0IHNvY2tldCBvZiBzZXJ2ZXIuY29udmVyc2F0aW9uLnNvY2tldHMpIHtcbiAgICAgICAgc29ja2V0LnBsYXkoc3RhcnQsIGFmdGVyKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzcG9uc2U6IFBhcnRpYWw8QWpheFJlc3BvbnNlPiA9IHtcbiAgICAgICAgcmVzcG9uc2U6IHsgaWQ6ICdtZXNzYWdlSWQnIH0sXG4gICAgICB9XG5cbiAgICAgIHJldHVybiByZXNwb25zZSBhcyBBamF4UmVzcG9uc2U7XG4gICAgfVxuICAgIGVsc2UgaWYgKHBhcnRzLmxlbmd0aCA9PT0gNSkge1xuICAgICAgY29uc3QgcmVzcG9uc2VUb2tlbiA9IHRva2VuUmVzcG9uc2Uoc2VydmVyLCB1cmxPclJlcXVlc3QpO1xuICAgICAgaWYgKHJlc3BvbnNlVG9rZW4gIT09IG51bGwpIHtcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlVG9rZW47XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHdhdGVybWFyayA9IHNlYXJjaFBhcmFtcy5nZXQoJ3dhdGVybWFyaycpO1xuICAgICAgY29uc3Qgc3RhcnQgPSBOdW1iZXIucGFyc2VJbnQod2F0ZXJtYXJrLCAxMCk7XG5cbiAgICAgIGNvbnN0IGNvbnZlcnNhdGlvbjogRGlyZWN0TGluZUV4cG9ydC5Db252ZXJzYXRpb24gPSB7XG4gICAgICAgIGNvbnZlcnNhdGlvbklkOiBzZXJ2ZXIuY29udmVyc2F0aW9uLmNvbnZlcnNhdGlvbklkLFxuICAgICAgICB0b2tlbjogc2VydmVyLmNvbnZlcnNhdGlvbi50b2tlbixcbiAgICAgICAgc3RyZWFtVXJsOiBjcmVhdGVTdHJlYW1Vcmwoc3RhcnQpLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgcmVzcG9uc2U6IFBhcnRpYWw8QWpheFJlc3BvbnNlPiA9IHtcbiAgICAgICAgcmVzcG9uc2U6IGNvbnZlcnNhdGlvbixcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHJlc3BvbnNlIGFzIEFqYXhSZXNwb25zZTtcbiAgICB9XG5cbiAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgfSk7XG5cbiAgY29uc3QgbWV0aG9kID0gKHVybE9yUmVxdWVzdDogc3RyaW5nIHwgQWpheFJlcXVlc3QpOiBPYnNlcnZhYmxlPEFqYXhSZXNwb25zZT4gPT5cbiAgICBuZXcgT2JzZXJ2YWJsZTxBamF4UmVzcG9uc2U+KHN1YnNjcmliZXIgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgc3Vic2NyaWJlci5uZXh0KGpheCh1cmxPclJlcXVlc3QpKTtcbiAgICAgICAgc3Vic2NyaWJlci5jb21wbGV0ZSgpO1xuICAgICAgfVxuICAgICAgY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHN1YnNjcmliZXIuZXJyb3IoZXJyb3IpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIHR5cGUgVmFsdWVUeXBlPFQsIFY+ID0ge1xuICAgIFtLIGluIGtleW9mIFRdOiBUW0tdIGV4dGVuZHMgViA/IFRbS10gOiBuZXZlcjtcbiAgfVxuXG4gIHR5cGUgUHJvcGVydGllcyA9IFZhbHVlVHlwZTxBamF4Q3JlYXRpb25NZXRob2QsIEZ1bmN0aW9uPjtcblxuICBjb25zdCBwcm9wZXJ0aWVzOiBQcm9wZXJ0aWVzID0ge1xuICAgIGdldDogKHVybDogc3RyaW5nLCBoZWFkZXJzPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxBamF4UmVzcG9uc2U+ID0+IG5vdEltcGxlbWVudGVkKCksXG4gICAgcG9zdDogKHVybDogc3RyaW5nLCBib2R5PzogYW55LCBoZWFkZXJzPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxBamF4UmVzcG9uc2U+ID0+IG5vdEltcGxlbWVudGVkKCksXG4gICAgcHV0OiAodXJsOiBzdHJpbmcsIGJvZHk/OiBhbnksIGhlYWRlcnM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPEFqYXhSZXNwb25zZT4gPT4gbm90SW1wbGVtZW50ZWQoKSxcbiAgICBwYXRjaDogKHVybDogc3RyaW5nLCBib2R5PzogYW55LCBoZWFkZXJzPzogT2JqZWN0KTogT2JzZXJ2YWJsZTxBamF4UmVzcG9uc2U+ID0+IG5vdEltcGxlbWVudGVkKCksXG4gICAgZGVsZXRlOiAodXJsOiBzdHJpbmcsIGhlYWRlcnM/OiBPYmplY3QpOiBPYnNlcnZhYmxlPEFqYXhSZXNwb25zZT4gPT4gbm90SW1wbGVtZW50ZWQoKSxcbiAgICBnZXRKU09OOiAodXJsOiBzdHJpbmcsIGhlYWRlcnM/OiBPYmplY3QpID0+IG5vdEltcGxlbWVudGVkKCksXG4gIH07XG5cbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24obWV0aG9kLCBwcm9wZXJ0aWVzKTtcbn1cblxuLy8gTU9DSyBXZWJTb2NrZXQgKHVzZXMgc2hhcmVkIHN0YXRlIGluIFNlcnZlcilcblxudHlwZSBXZWJTb2NrZXRDb25zdHJ1Y3RvciA9IHR5cGVvZiBXZWJTb2NrZXQ7XG50eXBlIEV2ZW50SGFuZGxlcjxFIGV4dGVuZHMgRXZlbnQ+ID0gKHRoaXM6IFdlYlNvY2tldCwgZXY6IEUpID0+IGFueTtcblxuZXhwb3J0IGNvbnN0IG1vY2tXZWJTb2NrZXQgPSAoc2VydmVyOiBTZXJ2ZXIpOiBXZWJTb2NrZXRDb25zdHJ1Y3RvciA9PlxuICBjbGFzcyBNb2NrV2ViU29ja2V0IGltcGxlbWVudHMgV2ViU29ja2V0LCBBY3Rpdml0eVNvY2tldCB7XG4gICAgY29uc3RydWN0b3IodXJsOiBzdHJpbmcsIHByb3RvY29scz86IHN0cmluZyB8IHN0cmluZ1tdKSB7XG5cbiAgICAgIHNlcnZlci5zY2hlZHVsZXIuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBXZWJTb2NrZXQuQ09OTkVDVElORztcbiAgICAgICAgc2VydmVyLmNvbnZlcnNhdGlvbi5zb2NrZXRzLmFkZCh0aGlzKTtcbiAgICAgICAgdGhpcy5vbm9wZW4obmV3IEV2ZW50KCdvcGVuJykpO1xuICAgICAgICB0aGlzLnJlYWR5U3RhdGUgPSBXZWJTb2NrZXQuT1BFTjtcbiAgICAgICAgY29uc3QgdXJpID0gbmV3IFVSTCh1cmwpO1xuICAgICAgICBjb25zdCB3YXRlcm1hcmsgPSB1cmkuc2VhcmNoUGFyYW1zLmdldChrZXlXYXRlcm1hcmspXG4gICAgICAgIGlmICh3YXRlcm1hcmsgIT09IG51bGwpIHtcbiAgICAgICAgICBjb25zdCBzdGFydCA9IE51bWJlci5wYXJzZUludCh3YXRlcm1hcmssIDEwKTtcbiAgICAgICAgICB0aGlzLnBsYXkoc3RhcnQsIHNlcnZlci5jb252ZXJzYXRpb24uaGlzdG9yeS5sZW5ndGgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBwbGF5KHN0YXJ0OiBudW1iZXIsIGFmdGVyOiBudW1iZXIpIHtcblxuICAgICAgY29uc3QgeyBjb252ZXJzYXRpb246IHsgaGlzdG9yeSB9IH0gPSBzZXJ2ZXI7XG4gICAgICBjb25zdCBhY3Rpdml0aWVzID0gaGlzdG9yeS5zbGljZShzdGFydCwgYWZ0ZXIpO1xuICAgICAgY29uc3Qgd2F0ZXJtYXJrID0gaGlzdG9yeS5sZW5ndGgudG9TdHJpbmcoKTtcbiAgICAgIGNvbnN0IGFjdGl2aXR5R3JvdXA6IERpcmVjdExpbmVFeHBvcnQuQWN0aXZpdHlHcm91cCA9IHtcbiAgICAgICAgYWN0aXZpdGllcyxcbiAgICAgICAgd2F0ZXJtYXJrLFxuICAgICAgfVxuXG4gICAgICBjb25zdCBtZXNzYWdlID0gbmV3IE1lc3NhZ2VFdmVudCgndHlwZScsIHsgZGF0YTogSlNPTi5zdHJpbmdpZnkoYWN0aXZpdHlHcm91cCkgfSk7XG5cbiAgICAgIHRoaXMub25tZXNzYWdlKG1lc3NhZ2UpO1xuICAgIH1cblxuICAgIGJpbmFyeVR5cGU6IEJpbmFyeVR5cGUgPSAnYXJyYXlidWZmZXInO1xuICAgIHJlYWRvbmx5IGJ1ZmZlcmVkQW1vdW50OiBudW1iZXIgPSAwO1xuICAgIHJlYWRvbmx5IGV4dGVuc2lvbnM6IHN0cmluZyA9ICcnO1xuICAgIHJlYWRvbmx5IHByb3RvY29sOiBzdHJpbmcgPSAnaHR0cHMnO1xuICAgIHJlYWR5U3RhdGU6IG51bWJlciA9IFdlYlNvY2tldC5DTE9TRUQ7XG4gICAgcmVhZG9ubHkgdXJsOiBzdHJpbmcgPSAnJztcbiAgICByZWFkb25seSBDTE9TRUQ6IG51bWJlciA9IFdlYlNvY2tldC5DTE9TRUQ7XG4gICAgcmVhZG9ubHkgQ0xPU0lORzogbnVtYmVyID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gICAgcmVhZG9ubHkgQ09OTkVDVElORzogbnVtYmVyID0gV2ViU29ja2V0LkNPTk5FQ1RJTkc7XG4gICAgcmVhZG9ubHkgT1BFTjogbnVtYmVyID0gV2ViU29ja2V0Lk9QRU47XG5cbiAgICBvbmNsb3NlOiBFdmVudEhhbmRsZXI8Q2xvc2VFdmVudD47XG4gICAgb25lcnJvcjogRXZlbnRIYW5kbGVyPEV2ZW50PjtcbiAgICBvbm1lc3NhZ2U6IEV2ZW50SGFuZGxlcjxNZXNzYWdlRXZlbnQ+O1xuICAgIG9ub3BlbjogRXZlbnRIYW5kbGVyPEV2ZW50PjtcblxuICAgIGNsb3NlKGNvZGU/OiBudW1iZXIsIHJlYXNvbj86IHN0cmluZyk6IHZvaWQge1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gICAgICB0aGlzLm9uY2xvc2UobmV3IENsb3NlRXZlbnQoJ2Nsb3NlJykpXG4gICAgICBzZXJ2ZXIuY29udmVyc2F0aW9uLnNvY2tldHMuZGVsZXRlKHRoaXMpO1xuICAgICAgdGhpcy5yZWFkeVN0YXRlID0gV2ViU29ja2V0LkNMT1NFRDtcbiAgICB9XG5cbiAgICBzZW5kKGRhdGE6IHN0cmluZyB8IEFycmF5QnVmZmVyTGlrZSB8IEJsb2IgfCBBcnJheUJ1ZmZlclZpZXcpOiB2b2lkIHtcbiAgICB9XG5cbiAgICBhZGRFdmVudExpc3RlbmVyKCkgeyB0aHJvdyBuZXcgRXJyb3IoKTsgfVxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIoKSB7IHRocm93IG5ldyBFcnJvcigpOyB9XG4gICAgZGlzcGF0Y2hFdmVudCgpOiBib29sZWFuIHsgdGhyb3cgbmV3IEVycm9yKCk7IH1cblxuICAgIHN0YXRpYyBDTE9TRUQgPSBXZWJTb2NrZXQuQ0xPU0VEO1xuICAgIHN0YXRpYyBDTE9TSU5HID0gV2ViU29ja2V0LkNMT1NJTkc7XG4gICAgc3RhdGljIENPTk5FQ1RJTkcgPSBXZWJTb2NrZXQuQ09OTkVDVElORztcbiAgICBzdGF0aWMgT1BFTiA9IFdlYlNvY2tldC5PUEVOO1xuICB9O1xuXG4vLyBNT0NLIHNlcnZpY2VzICh0b3AtbGV2ZWwgYWdncmVnYXRpb24gb2YgYWxsIG1vY2tzKVxuXG5leHBvcnQgY29uc3QgbW9ja1NlcnZpY2VzID0gKHNlcnZlcjogU2VydmVyLCBzY2hlZHVsZXI6IFRlc3RTY2hlZHVsZXIpOiBEaXJlY3RMaW5lRXhwb3J0LlNlcnZpY2VzID0+ICh7XG4gIHNjaGVkdWxlcixcbiAgV2ViU29ja2V0OiBtb2NrV2ViU29ja2V0KHNlcnZlciksXG4gIGFqYXg6IG1vY2tBamF4KHNlcnZlciksXG4gIHJhbmRvbTogKCkgPT4gMCxcbn0pO1xuIl19