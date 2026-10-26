let player = {
    name: "Shadow",
    health: 100,
    energy: 80,
    level: 1
};


player.showInfo = function(){
    return player.name, player.health, player.energy, player.level
}

player.takeDamage = function(amount){
    return this.health - amount
}

player.heal = function(amount){
    return this.health + amount
}

player.levelUp = function(){
    return this.level++
}

player.useEnergy = function(amount){
    return this.energy - amount
}

console.log(player.takeDamage(20))
console.log(player.heal(10))
console.log(player.levelUp())
console.log(player.showInfo())