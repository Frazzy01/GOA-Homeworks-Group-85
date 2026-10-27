let player = {
    name: "Shadow",
    health: 100,
    attack: 25,
    showInfo(){
        return player.name, player.health, player.attack
    },
    attackEnemy(){
        enemy.health - playe.attack
    }
};
let enemy = {
    name: "Dragon",
    health: 150,
    attack: 20,
    showInfo(){
        return enemy.name, enemy.health, enemy.attack
    },
    attackPlayer(){
        playe.health - enemy.attack
    }
};