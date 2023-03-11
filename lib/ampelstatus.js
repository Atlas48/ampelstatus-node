"use strict";
exports.__esModule = true;
exports.AmpelStatusType = exports.ERRV = exports.WRNV = exports.INFV = void 0;
exports.INFV = "\x1B[1;32mINF\x1B[0m: ";
exports.WRNV = "\x1B[1;93mWRN\x1B[0m: ";
exports.ERRV = "\x1B[1;31mERR\x1B[0m: ";
var AmpelStatusType;
(function (AmpelStatusType) {
    AmpelStatusType[AmpelStatusType["NUL"] = 0] = "NUL";
    AmpelStatusType[AmpelStatusType["INF"] = 1] = "INF";
    AmpelStatusType[AmpelStatusType["WRN"] = 2] = "WRN";
    AmpelStatusType[AmpelStatusType["ERR"] = 3] = "ERR";
})(AmpelStatusType = exports.AmpelStatusType || (exports.AmpelStatusType = {}));
