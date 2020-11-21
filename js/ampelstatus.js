"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.status = exports.err = exports.inf = exports.wrn = void 0;
exports.wrn = "\033[1;93mWRN\033[0m: ";
exports.inf = "\033[1;32mINF\033[0m: ";
exports.err = "\033[1;31mERR\033[0m: ";
var status;
(function (status) {
    status[status["inf"] = 0] = "inf";
    status[status["wrn"] = 1] = "wrn";
    status[status["err"] = 2] = "err";
})(status = exports.status || (exports.status = {}));
