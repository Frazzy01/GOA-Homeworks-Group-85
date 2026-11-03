let employees = [
    { name: "Nika", department: "IT", salary: 3500, experience: 4 },
    { name: "Ana", department: "HR", salary: 2200, experience: 2 },
    { name: "Giorgi", department: "IT", salary: 2800, experience: 5 },
    { name: "Mariam", department: "Finance", salary: 4000, experience: 6 },
    { name: "Luka", department: "IT", salary: 4200, experience: 1 },
    { name: "Elene", department: "HR", salary: 3000, experience: 4 }
]


let filter = employees.filter(i => i.department === "IT" && i.salary > 2500)
let experience = "nothing"
let salary = "nothing"

filter.forEach(i => {
    console.log(i.name, "-->", i.department, i.salary, i.experience)

    experience = i.experience >= 3 ? "Bonus eligible" : "No bonus"

    if (i.salary > 4000) {
        salary = "High salary"
    } else {
        salary = "Regular salary"
    }

    console.log(i.name, "-", "Salary:", i.salary, "-", experience, "-", salary)

})
