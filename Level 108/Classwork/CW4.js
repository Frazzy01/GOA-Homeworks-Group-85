const tokens_serv1 = ["SEC-0091", "SEC-7821", "SEC-1111", "SEC-999"];
const tokens_serv2 = ["SEC-0091", "SEc-1111", "SEC-1111", "SEC-9999"];
const tokens_serv3 = ["SEC-0000091", "SEC-7821", "SEC-1111"];

let check = tokens_serv1.every(item => item.startsWith("SEC-") && item.length >= 8)
let check2 = tokens_serv2.every(item => item.startsWith("SEC-") && item.length >= 8)
let check3 = tokens_serv3.every(item => item.startsWith("SEC-") && item.length >= 8)

console.log(check)
console.log(check2)
console.log(check3)