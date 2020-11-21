"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.err = exports.inf = exports.wrn = void 0;
exports.wrn = "\x1B[1;93mWRN\x1B[0m: ";
exports.inf = "\x1B[1;32mINF\x1B[0m: ";
exports.err = "\x1B[1;31mERR\x1B[0m: ";
var status;
(function (status) {
    status[status["inf"] = 0] = "inf";
    status[status["wrn"] = 1] = "wrn";
    status[status["err"] = 2] = "err";
})(status = exports.status || (exports.status = {}));
