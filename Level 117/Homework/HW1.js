let student = {
    name: "Nika",
    age: 17,
    grade: 11,
    scores: [90, 85, 95]
}

let {name, age, scores} = student
let [one, two, three] = scores
let sum = scores.reduce((total, curr) => total + curr, 0)

console.log(name, age, scores)
console.log(sum)