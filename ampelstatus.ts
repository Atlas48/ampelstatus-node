export const INFV: string="\x1B[1;32mINF\x1B[0m: ";
export const WRNV: string="\x1B[1;93mWRN\x1B[0m: ";
export const ERRV: string="\x1B[1;31mERR\x1B[0m: ";
export function inf(s:string):void {
    console.log(INFV+s)
}
export function wrn(s:string):void {
    console.error(WRNV+s)
}
export function err(s:string):void {
    console.error(ERRV+s)
}
export enum ASStatusType {
    inf,
    wrn,
    err
}
