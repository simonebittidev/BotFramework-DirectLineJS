"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = parseFilename;

var _toArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toArray"));

function cov_2mbsedtftj() {
  var path = "C:\\Users\\sbitti\\OneDrive - Vodafone Group\\Desktop\\PersonalProject\\BotFramework-DirectLineJS\\src\\parseFilename.js";
  var hash = "50b24940607c884278dd5610d7eac516e5528709";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sbitti\\OneDrive - Vodafone Group\\Desktop\\PersonalProject\\BotFramework-DirectLineJS\\src\\parseFilename.js",
    statementMap: {
      "0": {
        start: {
          line: 2,
          column: 4
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "1": {
        start: {
          line: 3,
          column: 8
        },
        end: {
          line: 6,
          column: 10
        }
      },
      "2": {
        start: {
          line: 7,
          column: 11
        },
        end: {
          line: 19,
          column: 5
        }
      },
      "3": {
        start: {
          line: 8,
          column: 55
        },
        end: {
          line: 8,
          column: 84
        }
      },
      "4": {
        start: {
          line: 10,
          column: 8
        },
        end: {
          line: 13,
          column: 10
        }
      },
      "5": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 18,
          column: 10
        }
      }
    },
    fnMap: {
      "0": {
        name: "parseFilename",
        decl: {
          start: {
            line: 1,
            column: 24
          },
          end: {
            line: 1,
            column: 37
          }
        },
        loc: {
          start: {
            line: 1,
            column: 48
          },
          end: {
            line: 20,
            column: 1
          }
        },
        line: 1
      }
    },
    branchMap: {
      "0": {
        loc: {
          start: {
            line: 2,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 2,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }, {
          start: {
            line: 2,
            column: 4
          },
          end: {
            line: 19,
            column: 5
          }
        }],
        line: 2
      },
      "1": {
        loc: {
          start: {
            line: 7,
            column: 11
          },
          end: {
            line: 19,
            column: 5
          }
        },
        type: "if",
        locations: [{
          start: {
            line: 7,
            column: 11
          },
          end: {
            line: 19,
            column: 5
          }
        }, {
          start: {
            line: 7,
            column: 11
          },
          end: {
            line: 19,
            column: 5
          }
        }],
        line: 7
      }
    },
    s: {
      "0": 0,
      "1": 0,
      "2": 0,
      "3": 0,
      "4": 0,
      "5": 0
    },
    f: {
      "0": 0
    },
    b: {
      "0": [0, 0],
      "1": [0, 0]
    },
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "50b24940607c884278dd5610d7eac516e5528709"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2mbsedtftj = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2mbsedtftj();

function parseFilename(filename) {
  cov_2mbsedtftj().f[0]++;
  cov_2mbsedtftj().s[0]++;

  if (!filename) {
    cov_2mbsedtftj().b[0][0]++;
    cov_2mbsedtftj().s[1]++;
    return {
      extname: '',
      name: ''
    };
  } else {
    cov_2mbsedtftj().b[0][1]++;
    cov_2mbsedtftj().s[2]++;

    if (~filename.indexOf('.')) {
      cov_2mbsedtftj().b[1][0]++;

      var _ref = (cov_2mbsedtftj().s[3]++, filename.split('.').reverse()),
          _ref2 = (0, _toArray2["default"])(_ref),
          extensionWithoutDot = _ref2[0],
          nameSegments = _ref2.slice(1);

      cov_2mbsedtftj().s[4]++;
      return {
        extname: '.' + extensionWithoutDot,
        name: nameSegments.reverse().join('.')
      };
    } else {
      cov_2mbsedtftj().b[1][1]++;
      cov_2mbsedtftj().s[5]++;
      return {
        extname: '',
        name: filename
      };
    }
  }
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9wYXJzZUZpbGVuYW1lLmpzIl0sIm5hbWVzIjpbInBhcnNlRmlsZW5hbWUiLCJmaWxlbmFtZSIsImV4dG5hbWUiLCJuYW1lIiwiaW5kZXhPZiIsInNwbGl0IiwicmV2ZXJzZSIsImV4dGVuc2lvbldpdGhvdXREb3QiLCJuYW1lU2VnbWVudHMiLCJqb2luIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBZkcsU0FBU0EsYUFBVCxDQUF1QkMsUUFBdkIsRUFBaUM7QUFBQTtBQUFBOztBQUM1QyxNQUFJLENBQUNBLFFBQUwsRUFBZTtBQUFBO0FBQUE7QUFDWCxXQUFPO0FBQ0hDLE1BQUFBLE9BQU8sRUFBRSxFQUROO0FBRUhDLE1BQUFBLElBQUksRUFBRTtBQUZILEtBQVA7QUFJSCxHQUxELE1BS087QUFBQTtBQUFBOztBQUFBLFFBQUksQ0FBQ0YsUUFBUSxDQUFDRyxPQUFULENBQWlCLEdBQWpCLENBQUwsRUFBNEI7QUFBQTs7QUFDL0IsMkNBQStDSCxRQUFRLENBQUNJLEtBQVQsQ0FBZSxHQUFmLEVBQW9CQyxPQUFwQixFQUEvQztBQUFBO0FBQUEsVUFBT0MsbUJBQVA7QUFBQSxVQUErQkMsWUFBL0I7O0FBRCtCO0FBRy9CLGFBQU87QUFDSE4sUUFBQUEsT0FBTyxFQUFFLE1BQU1LLG1CQURaO0FBRUhKLFFBQUFBLElBQUksRUFBRUssWUFBWSxDQUFDRixPQUFiLEdBQXVCRyxJQUF2QixDQUE0QixHQUE1QjtBQUZILE9BQVA7QUFJSCxLQVBNLE1BT0E7QUFBQTtBQUFBO0FBQ0gsYUFBTztBQUNIUCxRQUFBQSxPQUFPLEVBQUUsRUFETjtBQUVIQyxRQUFBQSxJQUFJLEVBQUVGO0FBRkgsT0FBUDtBQUlIO0FBQUE7QUFDSiIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHBhcnNlRmlsZW5hbWUoZmlsZW5hbWUpIHtcbiAgICBpZiAoIWZpbGVuYW1lKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleHRuYW1lOiAnJyxcbiAgICAgICAgICAgIG5hbWU6ICcnXG4gICAgICAgIH07XG4gICAgfSBlbHNlIGlmICh+ZmlsZW5hbWUuaW5kZXhPZignLicpKSB7XG4gICAgICAgIGNvbnN0IFtleHRlbnNpb25XaXRob3V0RG90LCAuLi5uYW1lU2VnbWVudHNdID0gZmlsZW5hbWUuc3BsaXQoJy4nKS5yZXZlcnNlKCk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGV4dG5hbWU6ICcuJyArIGV4dGVuc2lvbldpdGhvdXREb3QsXG4gICAgICAgICAgICBuYW1lOiBuYW1lU2VnbWVudHMucmV2ZXJzZSgpLmpvaW4oJy4nKVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBleHRuYW1lOiAnJyxcbiAgICAgICAgICAgIG5hbWU6IGZpbGVuYW1lXG4gICAgICAgIH07XG4gICAgfVxufVxuIl19