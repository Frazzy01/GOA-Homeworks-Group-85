const numbers = [12, 7, 24, 9, 36, 15, 42, 5, 18, 27, 30, 11]

let filter = numbers.filter(num => num % 2 == 0)
let map = filter.map(num => num * 3)
let filternd = map.filter(num => num > 50)
let radius = filternd.reduce((acc, curr) => { return acc + curr}, 0)
let index = numbers.findIndex(num => num > 20)
let some = numbers.some(num => num > 40)
let every = numbers.every(num => num > 0)

filternd.forEach(element => {
    console.log(element)
})