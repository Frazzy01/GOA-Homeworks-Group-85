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