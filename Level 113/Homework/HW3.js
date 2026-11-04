let characters = [
    { name: "Shadow", health: 85, level: 10, alive: true },
    { name: "Dragon", health: 0, level: 15, alive: false },
    { name: "Knight", health: 60, level: 7, alive: true },
    { name: "Wizard", health: 100, level: 20, alive: true },
    { name: "Hunter", health: 25, level: 5, alive: true },
    { name: "Ghost", health: 0, level: 12, alive: false }
]

let filter = characters.filter(item => item.alive === true)
let map = characters.map((item) => {
    item.health += 20
    return `${item.name} --> ${item.health}`
})

let index = characters.findIndex(item => item.name === "Wizard")
let some = characters.some(i => i.level > 18)
let every = characters.every(i => i.alive === true)

characters.forEach(i => {
    console.log(`${i.name} --> ${i.health}`)
    console.log(filter)
    console.log(map)
    console.log(index)
    console.log(some)
    console.log(every)
})