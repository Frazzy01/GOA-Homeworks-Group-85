let student = {
    name: "Goga",
    surname: "Chalauri",
    age: 19,
    city: "Tbilisi",
    score: 95
}

let {name : n, surname : sur, age : a, city : cit, score : scor} = student


let {name : studentName} = student

console.log(studentName)

let {score : studentScore} = student

console.log(studentScore)

console.log(n, sur, a)

if(scor > 90){
    console.log(true)
}else if(scor < 90){
    console.log(false)
}