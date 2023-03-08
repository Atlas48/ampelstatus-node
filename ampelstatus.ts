export var inf_str: string="\x1B[1;32mINF\x1B[0m: ";
export var wrn_str: string="\x1B[1;93mWRN\x1B[0m: ";
export var err_str: string="\x1B[1;31mERR\x1B[0m: ";
export function inf(s:string):void {
    console.log(inf_str+s)
}
export function wrn(s:string):void {
    console.error(wrn_str+s)
}
export function err(s:string):void {
    console.error(wrn_str+s)
}
export enum ASStatusType {
    inf,
    wrn,
    err
}
