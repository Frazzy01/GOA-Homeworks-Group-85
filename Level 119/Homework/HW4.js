let first = [5, 10, 15];
let second = [20, 25, 30];
let third = [35, 40, 45];

let allNumbers = [...first, ...second, ...third]
let newNumbers = [...third, ...first, ...second]

newNumbers.unshift(0)
newNumbers.push(50, 55)

console.log(newNumbers)