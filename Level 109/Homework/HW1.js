const number = [200, 67, 69, 999, 52, 144]

number.forEach(element => {
    console.log(element)
})


let filter = number.filter(item => item > 69)
let map = filter.map(item => item += 69)
let radius = map.reduce((acc , curr) => {return acc + curr}, 0 )
let some = number.some(num => num > 100)
let every = number.every(num => num > 50)
let index = number.findIndex(num => num > 998)

console.log(filter)
console.log(map)
console.log(radius)
console.log(some)
console.log(every)
console.log(index)