let company = {
    name: "TechVision",
    employees: 45,
    founded: 2015,
    budget: 120000,
    marketing: 15000,
    development: 45000,
    design: 12000,
    support: 8000,
    active: true
}

let count = 0
let sum = 0
let countkey = 0
let Key = Object.keys(company)
let values = Object.values(company)

for (let i in company) {
    console.log(i, "-->", company[i])
}

for (let i in company) {
    if (typeof company[i] == "number") {
        count++

        sum += company[i]
    }

    if (i.length > 6) {
        countkey ++
    }
}