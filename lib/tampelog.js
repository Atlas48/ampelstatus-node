"use strict";
exports.__esModule = true;
exports.terr = exports.twrn = exports.tinf = void 0;
var printf_ts_1 = require("https://deno.land/std@0.178.0/fmt/printf.ts");
function getStamp(d) {
    return (0, printf_ts_1.sprintf)("%02d:%02d", d.getHours(), d.getMinutes());
}
function tinf(s) {
    console.log("\"\u001B[1;32mINF\u001B[0m [".concat(getStamp(new Date), "]: ").concat(s));
}
exports.tinf = tinf;
function twrn(s) {
    console.error("\"\u001B[1;93mWRN\u001B[0m [".concat(getStamp(new Date), "]: ").concat(s));
}
exports.twrn = twrn;
function terr(s) {
    console.error("\"\u001B[1;31mERR\u001B[0m [".concat(getStamp(new Date), "]: ").concat(s));
}
exports.terr = terr;
