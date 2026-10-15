const packets = [120, 505, -45, 999, 14, 700, 33, 842]

let virus = packets.filter(item => item % 7 != 0 && item > 500)
let legetimuri = packets.filter(item => item % 3 != 0 && item < 1000)

console.log(`Virus = ${virus}`)
console.log(`legetimuri = ${legetimuri}`)
