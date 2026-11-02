let employees = [
    { name: "Giorgi", salary: 2500, department: "IT" },
    { name: "Nino", salary: 1800, department: "HR" },
    { name: "David", salary: 3200, department: "IT" },
    { name: "Maka", salary: 1500, department: "Sales" },
    { name: "Saba", salary: 2800, department: "Sales" }
]

let sum = 0

employees.forEach(i => {
    console.log(i.name)
    
    if(i.department == "IT"){
        console.log("IT DEPARTAMENT", i.name, "-->", i.department)
    }else if(i.department == "Sales"){
        console.log("SALES DEPARTAMENT", i.name, "-->", i.department)
    }

    if(i.salary > 2000){
        console.log("RICHEST", i.name, "-->", i.salary)
    }

    sum += i.salary
})

console.log(sum)