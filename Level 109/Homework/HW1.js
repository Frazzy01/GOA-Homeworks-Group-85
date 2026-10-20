const number = [200, 67, 69, 999, 52, 144]

let filter = number.filter(item => item > 69)
let map = filter.map(item => item += 69)
let radius = map.reduce((acc , curr) => {return acc + curr}, 0 )

console.log(filter)
console.log(map)
console.log(radius)