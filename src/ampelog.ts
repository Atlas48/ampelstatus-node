export function inf(s:string):void {
    console.log("\x1B[1;32mINF\x1B[0m: "+s)
}
export function wrn(s:string):void {
    console.error("\x1B[1;93mWRN\x1B[0m: "+s)
}
export function err(s:string):void {
    console.error("\x1B[1;31mERR\x1B[0m: "+s)
}