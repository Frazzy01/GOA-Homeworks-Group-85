let student = {
    name: "Giorgi",
    math: 85,
    english: 92,
    physics: 74,
    chemistry: 88,
    history: 60
}

let bad = 0
let values = Object.values(student)
let filter = values.filter((item) => typeof item == "number")

for(let i in student){
    console.log(i, "-->", student[i])

    if(student[i] >= 80){
        console.log(i, "Good")
    }

    if(student[i] < 80){
        console.log(i, "Bad")
        bad ++
    }
}



let radius = filter.reduce((acc, curr) =>{
    return acc + curr
}, 0)

console.log(radius)
console.log(bad)