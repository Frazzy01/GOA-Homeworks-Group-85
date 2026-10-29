let company = {
    marketing: 12000,
    development: 35000,
    design: 9000,
    support: 7000,
    sales: 18000,
    research: 15000
}

let sum = 0
let count15000 = 0
let maxname = ""
let max = 0

for (let i in company) {
    console.log(i, "-->", company[i])

    sum += company[i]

    if (company[i] >= 15000) {
        count15000++
    }

    if (max < company[i]) {
        max = company[i]
        maxname = i
    }
}

let values = Object.values(company)
let min = values.reduce((a,b) => a < b ? a : b)

console.log(min)
console.log("RICHEST", maxname, max)