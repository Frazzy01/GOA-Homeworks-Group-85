
function createCharacter(name, health, damage){
    return{
        name,
        health,
        damage,
        attack(opponent){
            if(opponent === 0){
                console.log("Target is already defeated!")
            }else if(opponent > 0){
                opponent -= damage
            }
        },

        heal(amount){
            this.health = Math.min(this.health + amount, 100)
        },

        getStatus(){
            console.log(this.name, this.health, this.damage)
        }
    }
}

let player1 = createCharacter("Jimsheri", 42, 69)
let player2 = createCharacter("Nugzari", 99, 52)
let player3 = createCharacter("Tato", 15, 9999999)

player1.attack(100)
player2.attack(1)
player3.attack(0)
player1.heal(23)
player2.heal(25)
player3.heal(17)
player1.getStatus()
player2.getStatus()
player3.getStatus()

