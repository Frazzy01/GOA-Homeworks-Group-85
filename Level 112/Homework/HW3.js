let players = [
    { name: "Sandro", sport: "Football", goals: 12 },
    { name: "Elene", sport: "Tennis", goals: 8 },
    { name: "Lasha", sport: "Football", goals: 19 },
    { name: "Tako", sport: "Basketball", goals: 15 },
    { name: "Data", sport: "Football", goals: 6 }
]

let footballCount = 0
let sum = 0
let topPlayers = []

players.forEach(i => {
    console.log(i.name, "-->", i.sport)  

    if(i.sport === "Football"){
        console.log(i.name, "-->", i.sport)
        footballCount++
    }

    if(i.goals >= 10){
        console.log(i.name, "-->", i.goals)
        topPlayers.push(i)
    }

    sum += i.goals
})

console.log(footballCount)
console.log(sum)
console.log(topPlayers)