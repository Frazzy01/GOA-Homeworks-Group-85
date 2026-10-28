let user = {
    username: "Goga123",
    age: 19,
    city: "Tbilisi",
    score: 450,
    active: true,
    gamesPlayed: 35
}

let numcount = 0
let keylength = 0
let numericInfo = {

}
let sum = 0

for (let i in user) {
    console.log(i, "-->", user[i])

    if (typeof user[i] == "number") {
        numcount++
        numericInfo[i] = user[i]
        sum += user[i]
    }

    if (i.length > 5) {
        keylength++
    }

    
}


console.log("Key length", keylength)
console.log("num count", numcount)
console.log(numericInfo)
console.log(sum)