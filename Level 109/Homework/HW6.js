let game = {
    playerName: "Shadow",
    level: 12,
    health: 85,
    coins: 450,
    weapon: "Sword",
    armor: "Steel",
    isAlive: true,
    rank: "Silver"
}

console.log(game["playerName"])
console.log(game["health"])
console.log(game["rank"])

game["level"] = 15
game.coins = 700
game["weapon"] = "Dragon Sword"
game["magicPower"] = 90
game.pet = "Wolf"
delete game["armor"]
delete game.isAlive
game.achievements = 5

game["rank"] = "Gold"

console.log(game)