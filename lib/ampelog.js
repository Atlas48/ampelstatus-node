"use strict";
exports.__esModule = true;
exports.err = exports.wrn = exports.inf = void 0;
function inf(s) {
    console.log("\x1B[1;32mINF\x1B[0m: " + s);
}
exports.inf = inf;
function wrn(s) {
    console.error("\x1B[1;93mWRN\x1B[0m: " + s);
}
exports.wrn = wrn;
function err(s) {
    console.error("\x1B[1;31mERR\x1B[0m: " + s);
}
exports.err = err;
