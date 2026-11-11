
function info(name, surname, age, adress, hobby){
    return{
        name : name,
        surname : surname,
        age : age,
        adress : adress,
        hobby : hobby,
        displayUsersName(){
            console.log(this.name, this.surname, this.adress, "i know where u live :3")  
        }
    }
}


let cheater1 = info("Jimsheri", "surmanidze", 42, "batumi", "pogramireba")
let cheater2 = info("Nugzari", "beridze", 99, "london", "programireba")
let cheater3 = info("Tato", "kotashvili", 15, "tbilisi", "wadrakebi")

cheater1.displayUsersName()
cheater2.displayUsersName()
cheater3.displayUsersName()