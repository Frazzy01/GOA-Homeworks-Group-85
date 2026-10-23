let player = {
    name: "Dragon",
    health: 100,
    energy: 80,
    level: 5,
    weapon: "Sword",
    armor: "Basic"
}

console.log(player.name)
console.log(player.health)
console.log(player.weapon)

player.health = 65
player.weapon = "Bow"
player.damage = 40
player.magic = true
delete player.armor
player.level = 6
player.rank = "Gold"
delete player.energy

console.log(player)