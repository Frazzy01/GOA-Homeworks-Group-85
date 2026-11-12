function createEmployee(name, position, salary, experience){
    return{
        name,
        position,
        salary,
        experience,
        increaseSalary(amount){
            if(experience > 5){
                salary += amount
            }else{
                console.log("Not enough experience!")
            }
        },

        changePosition(newPosition){
            if(experience >= 2){
                position = newPosition
            }
        },

        getbonus(){
            if(experience > 10){
                salary += 2000
            }else if(experience > 5){
                salary += 1000
            }else if(experience < 5){
                salary += 500
            }
        }


    }
}


let player1 = createEmployee("Jimsheri", "webdev", 10000, 10)
let player2 = createEmployee("Nugzari", "gamedev", 8000, 5)
let player3 = createEmployee("Tato", "webdev", 50000, 15)

player1.increaseSalary(10000)
player2.increaseSalary(2000)
player3.increaseSalary(50000)
player1.changePosition("gamedev")
player2.changePosition("webdev")
player3.changePosition(null)
player1.getbonus()
player2.getbonus()
player3.getbonus()