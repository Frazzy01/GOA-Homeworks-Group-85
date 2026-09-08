let string = ["qwerty", "uiop[]", "asdfgh", "jimsheri", "ravi"]
let num = [67, 69, 52, 42, 999]
let array = []

let axal = array.concat(string , num)

axal.push(true)
axal.shift()

console.log(axal)

let numberjumber = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]

let axali = numberjumber.slice(3, 6)
console.log(Array.isArray(axali))