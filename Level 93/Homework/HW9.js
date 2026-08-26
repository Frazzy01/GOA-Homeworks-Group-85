function calculateSalary(salary, bonus = 0){
    if(bonus === 0){
        console.log(salary)
    }else if(salary <= 1000){
        console.log(salary + bonus * 2)
    }else{
        console.log(salary + bonus)
    }
}


calculateSalary(600,)
calculateSalary(500, 200)
calculateSalary(10000, 5000)
calculateSalary(1, 1200)