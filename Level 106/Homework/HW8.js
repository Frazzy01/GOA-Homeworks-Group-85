let list = [10, "ვაშლი", true, 25, "მსხალი", false, 50]
let stringList = list.filter(st => st === String(st))
let numberList = list.filter(num => num === Number(num))
let booleanList = list.filter(b => b === Boolean(b))

console.log(stringList)
console.log(numberList)
console.log(booleanList)