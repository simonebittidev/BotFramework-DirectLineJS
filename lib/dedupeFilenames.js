"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = dedupeFilenames;

var _parseFilename = _interopRequireDefault(require("./parseFilename"));

function cov_2ifh855rrz() {
  var path = "C:\\Users\\sbitti\\OneDrive - Vodafone Group\\Desktop\\PersonalProject\\BotFramework-DirectLineJS\\src\\dedupeFilenames.ts";
  var hash = "cbe6be0954b03c1f2c2ccb4fb7e0652fc814120e";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "C:\\Users\\sbitti\\OneDrive - Vodafone Group\\Desktop\\PersonalProject\\BotFramework-DirectLineJS\\src\\dedupeFilenames.ts",
    statementMap: {
      "0": {
        start: {
          line: 4,
          column: 32
        },
        end: {
          line: 4,
          column: 34
        }
      },
      "1": {
        start: {
          line: 6,
          column: 4
        },
        end: {
          line: 16,
          column: 7
        }
      },
      "2": {
        start: {
          line: 7,
          column: 34
        },
        end: {
          line: 7,
          column: 54
        }
      },
      "3": {
        start: {
          line: 8,
          column: 20
        },
        end: {
          line: 8,
          column: 21
        }
      },
      "4": {
        start: {
          line: 9,
          column: 24
        },
        end: {
          line: 9,
          column: 29
        }
      },
      "5": {
        start: {
          line: 11,
          column: 8
        },
        end: {
          line: 13,
          column: 9
        }
      },
      "6": {
        start: {
          line: 12,
          column: 12
        },
        end: {
          line: 12,
          column: 98
        }
      },
      "7": {
        start: {
          line: 12,
          column: 69
        },
        end: {
          line: 12,
          column: 76
        }
      },
      "8": {
        start: {
          line: 15,
          column: 8
        },
        end: {
          line: 15,
          column: 34
        }
      },
      "9": {
        start: {
          line: 18,
          column: 4
        },
        end: {
          line: 18,
          column: 21
        }
      }
    },
    fnMap: {
      "0": {
        name: "dedupeFilenames",
        decl: {
          start: {
            line: 3,
            column: 24
          },
          end: {
            line: 3,
            column: 39
          }
        },
        loc: {
          start: {
            line: 3,
            column: 57
          },
          end: {
            line: 19,
            column: 1
          }
        },
        line: 3
      },
      "1": {
        name: "(anonymous_1)",
        decl: {
          start: {
            line: 6,
            column: 18
          },
          end: {
            line: 6,
            column: 19
          }
        },
        loc: {
          start: {
            line: 6,
            column: 27
          },
          end: {
            line: 16,
            column: 5
          }
        },
        line: 6
      },
      "2": {
        name: "(anonymous_2)",
        decl: {
          start: {
            line: 12,
            column: 58
          },
          end: {
            line: 12,
            column: 59
          }
        },
        loc: {
          start: {
            line: 12,
            column: 69
          },
          end: {
            line: 12,
            column: 76
          }
        },
        line: 12
      }
    },
    branchMap: {},
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
      "9": 0
    },
    f: {
      "0": 0,
      "1": 0,
      "2": 0
    },
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "cbe6be0954b03c1f2c2ccb4fb7e0652fc814120e"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_2ifh855rrz = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_2ifh855rrz();

function dedupeFilenames(array) {
  cov_2ifh855rrz().f[0]++;
  var nextArray = (cov_2ifh855rrz().s[0]++, []);
  cov_2ifh855rrz().s[1]++;
  array.forEach(function (value) {
    cov_2ifh855rrz().f[1]++;

    var _ref = (cov_2ifh855rrz().s[2]++, (0, _parseFilename["default"])(value)),
        extname = _ref.extname,
        name = _ref.name;

    var count = (cov_2ifh855rrz().s[3]++, 0);
    var nextValue = (cov_2ifh855rrz().s[4]++, value);
    cov_2ifh855rrz().s[5]++;

    while (nextArray.includes(nextValue)) {
      cov_2ifh855rrz().s[6]++;
      nextValue = [name, "(".concat(++count, ")")].filter(function (segment) {
        cov_2ifh855rrz().f[2]++;
        cov_2ifh855rrz().s[7]++;
        return segment;
      }).join(' ') + extname;
    }

    cov_2ifh855rrz().s[8]++;
    nextArray.push(nextValue);
  });
  cov_2ifh855rrz().s[9]++;
  return nextArray;
}
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9kZWR1cGVGaWxlbmFtZXMudHMiXSwibmFtZXMiOlsiZGVkdXBlRmlsZW5hbWVzIiwiYXJyYXkiLCJuZXh0QXJyYXkiLCJmb3JFYWNoIiwidmFsdWUiLCJleHRuYW1lIiwibmFtZSIsImNvdW50IiwibmV4dFZhbHVlIiwiaW5jbHVkZXMiLCJmaWx0ZXIiLCJzZWdtZW50Iiwiam9pbiIsInB1c2giXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQWVZOzs7Ozs7Ozs7O0FBYkcsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBMEM7QUFBQTtBQUNyRCxNQUFNQyxTQUFtQiw2QkFBRyxFQUFILENBQXpCO0FBRHFEO0FBR3JERCxFQUFBQSxLQUFLLENBQUNFLE9BQU4sQ0FBYyxVQUFBQyxLQUFLLEVBQUk7QUFBQTs7QUFDbkIseUNBQTBCLCtCQUFjQSxLQUFkLENBQTFCO0FBQUEsUUFBUUMsT0FBUixRQUFRQSxPQUFSO0FBQUEsUUFBaUJDLElBQWpCLFFBQWlCQSxJQUFqQjs7QUFDQSxRQUFJQyxLQUFLLDZCQUFHLENBQUgsQ0FBVDtBQUNBLFFBQUlDLFNBQVMsNkJBQUdKLEtBQUgsQ0FBYjtBQUhtQjs7QUFLbkIsV0FBT0YsU0FBUyxDQUFDTyxRQUFWLENBQW1CRCxTQUFuQixDQUFQLEVBQXNDO0FBQUE7QUFDbENBLE1BQUFBLFNBQVMsR0FBRyxDQUFDRixJQUFELGFBQWEsRUFBRUMsS0FBZixRQUEyQkcsTUFBM0IsQ0FBa0MsVUFBQUMsT0FBTyxFQUFJQTtBQUFBQTtBQUFBQTtBQUFBQSxlQUFBQSxPQUFPO0FBQUEsT0FBcEQsRUFBc0RDLElBQXRELENBQTJELEdBQTNELElBQWtFUCxPQUE5RTtBQUNIOztBQVBrQjtBQVNuQkgsSUFBQUEsU0FBUyxDQUFDVyxJQUFWLENBQWVMLFNBQWY7QUFDSCxHQVZEO0FBSHFEO0FBZXJELFNBQU9OLFNBQVA7QUFDSCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwYXJzZUZpbGVuYW1lIGZyb20gJy4vcGFyc2VGaWxlbmFtZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGRlZHVwZUZpbGVuYW1lcyhhcnJheTogc3RyaW5nW10pIHtcbiAgICBjb25zdCBuZXh0QXJyYXk6IHN0cmluZ1tdID0gW107XG5cbiAgICBhcnJheS5mb3JFYWNoKHZhbHVlID0+IHtcbiAgICAgICAgY29uc3QgeyBleHRuYW1lLCBuYW1lIH0gPSBwYXJzZUZpbGVuYW1lKHZhbHVlKTtcbiAgICAgICAgbGV0IGNvdW50ID0gMDtcbiAgICAgICAgbGV0IG5leHRWYWx1ZSA9IHZhbHVlO1xuXG4gICAgICAgIHdoaWxlIChuZXh0QXJyYXkuaW5jbHVkZXMobmV4dFZhbHVlKSkge1xuICAgICAgICAgICAgbmV4dFZhbHVlID0gW25hbWUsIGAoJHsgKCsrY291bnQpIH0pYF0uZmlsdGVyKHNlZ21lbnQgPT4gc2VnbWVudCkuam9pbignICcpICsgZXh0bmFtZTtcbiAgICAgICAgfVxuXG4gICAgICAgIG5leHRBcnJheS5wdXNoKG5leHRWYWx1ZSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gbmV4dEFycmF5O1xufVxuIl19