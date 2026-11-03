let characters = [
    { name: "Shadow", level: 15, health: 85, damage: 70 },
    { name: "Blaze", level: 8, health: 95, damage: 45 },
    { name: "Storm", level: 20, health: 60, damage: 90 },
    { name: "Frost", level: 12, health: 80, damage: 65 },
    { name: "Titan", level: 25, health: 100, damage: 55 },
    { name: "Raven", level: 18, health: 40, damage: 85 }
]

let filter = characters.filter(i => i.level >= 10 && i.damage >= 60)
let healthstatus = "NOTHING"
let power = "NOTHING"
let nowhealth = "nothing"

characters.forEach(i => {
    console.log(`INFORMATION name - ${i.name} level - ${i.level} health - ${i.health} damage - ${i.damage}`)  

    healthstatus = i.health >= 70 ? "Healthy" : "Weak"
    power = i.damage >= 80 ? "Powerful" : "Normal"

    if(i.health >= 50){
        nowhealth = "Warning: Low health!"
    }else{
        nowhealth = "Health is stable"
    }

    console.log(`${i.name} - ${healthstatus} - ${power} - ${nowhealth}`)
})