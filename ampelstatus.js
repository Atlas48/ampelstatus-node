"use strict";
exports.__esModule = true;
exports.ASStatusType = exports.err = exports.wrn = exports.inf = exports.ERRV = exports.WRNV = exports.INFV = void 0;
exports.INFV = "\x1B[1;32mINF\x1B[0m: ";
exports.WRNV = "\x1B[1;93mWRN\x1B[0m: ";
exports.ERRV = "\x1B[1;31mERR\x1B[0m: ";
function inf(s) {
    console.log(exports.INFV + s);
}
exports.inf = inf;
function wrn(s) {
    console.error(exports.WRNV + s);
}
exports.wrn = wrn;
function err(s) {
    console.error(exports.ERRV + s);
}
exports.err = err;
var ASStatusType;
(function (ASStatusType) {
    ASStatusType[ASStatusType["inf"] = 0] = "inf";
    ASStatusType[ASStatusType["wrn"] = 1] = "wrn";
    ASStatusType[ASStatusType["err"] = 2] = "err";
})(ASStatusType = exports.ASStatusType || (exports.ASStatusType = {}));
