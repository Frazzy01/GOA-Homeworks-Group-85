let exam = ["Nika", 85, "Mathematics", 90, "Physics", 78]

let [n, , , , , ,] = exam

console.log(n)

let [, , m, ni, , ,] = exam

console.log(m, ni,)

let [, , , , p, se,] = exam

console.log(p, se,)

let [, number, , jumber, , pumber,] = exam
let num = [number, jumber, pumber]

let sum = num.reduce((total, current) => total + current, 0)
console.log(sum)

if (number > jumber && number > pumber) {
    console.log(number)
} else if (jumber > number && jumber > pumber) {
    console.log(jumber)
} else {
    console.log(pumber)
}