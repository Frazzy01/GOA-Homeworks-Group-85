let company = {
    name: "TechVision",
    employees: 45,
    founded: 2015,
    city: "Tbilisi",
    departments: 4,
    budget: 120000,
    active: true,
    projects: 8
}

let key = Object.keys(company)
let values = Object.values(company)

console.log(key.length)
console.log(values.length)

for(let i in key){
    console.log(key[i])
}

for(let i in values){
    console.log(values[i])
}

let numberjumber = values.filter(( item ) => typeof item == "number")

let radius = numberjumber.reduce((acc, curr) =>{
    return acc + curr
}, 0)

console.log(numberjumber)