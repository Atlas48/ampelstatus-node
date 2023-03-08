"use strict";
exports.__esModule = true;
exports.ASStatusType = exports.err = exports.wrn = exports.inf = exports.err_str = exports.wrn_str = exports.inf_str = void 0;
exports.inf_str = "\x1B[1;32mINF\x1B[0m: ";
exports.wrn_str = "\x1B[1;93mWRN\x1B[0m: ";
exports.err_str = "\x1B[1;31mERR\x1B[0m: ";
function inf(s) {
    console.log(exports.inf_str + s);
}
exports.inf = inf;
function wrn(s) {
    console.error(exports.wrn_str + s);
}
exports.wrn = wrn;
function err(s) {
    console.error(exports.wrn_str + s);
}
exports.err = err;
var ASStatusType;
(function (ASStatusType) {
    ASStatusType[ASStatusType["inf"] = 0] = "inf";
    ASStatusType[ASStatusType["wrn"] = 1] = "wrn";
    ASStatusType[ASStatusType["err"] = 2] = "err";
})(ASStatusType = exports.ASStatusType || (exports.ASStatusType = {}));
