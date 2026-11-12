function createStudent(name, age, grades){
    return{
        name,
        age,
        grades,
        addGrade(grade){
            if(grade > 0 && grade <= 100){
                grades.push(grade)
            }
        },

        getAvarage(){
            let sum = grades.reduce((acc, grade) => acc + grade, 0)
            let avarage = sum / grades.length
            console.log(avarage)
        },

        getResult(){
            if(grades > 90){
                console.log("Excellent")
            }else if(grades > 70){
                console.log("Good")
            }else if(grades > 50){
                console.log("Average")
            }else if(grades < 50){
                console.log("Failed")
            }
        },

        getinfo(){
            console.log(name, age, grades,)
            console.log(this.getResult())
        }
    }
}


let player1 = createStudent("Jimsheri", 42, [100, 100, 100, 100, 100, 100,])
let player2 = createStudent("Nugzari", 99, [99, 99, 99, 99, 99, 99, 99,])
let player3 = createStudent("Tato", 15, [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,])

player1.addGrade(2)
player2.addGrade(99)
player3.addGrade(100)
player1.getAvarage()
player2.getAvarage()
player3.getAvarage()
player1.getResult()
player2.getResult()
player3.getResult()
player1.getinfo()
player2.getinfo()
player3.getinfo()
