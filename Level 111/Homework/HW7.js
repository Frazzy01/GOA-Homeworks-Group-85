let user = {
    username: "Shadow123",
    age: 21,
    city: "Tbilisi",
    score: 750,
    active: true,
    gamesPlayed: 45,
    premium: false
}

let key = Object.keys(user)
let values = Object.values(user)
let countlength = 0
let numbertype = 0
let booleantype = 0
let numberInfo = {}

for (let i in user) {
    if (i.length > 5) {
        countlength++
    }

    if (typeof user[i] == "number") {
        numbertype++
        numberInfo[i] = user[i]
    }

    if (typeof user[i] =="boolean") {
        booleantype++
    }
}


console.log(countlength)
console.log(numbertype)
console.log(booleantype)
console.log(numberInfo)