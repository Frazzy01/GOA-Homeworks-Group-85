let employees = [
    { name: "Gio", salary: 2500, experience: 3, department: "IT" },
    { name: "Nino", salary: 1800, experience: 1, department: "HR" },
    { name: "Luka", salary: 3200, experience: 5, department: "IT" },
    { name: "Ana", salary: 2100, experience: 2, department: "Marketing" },
    { name: "Saba", salary: 4000, experience: 7, department: "IT" },
    { name: "Mariam", salary: 1500, experience: 1, department: "HR" }
]

let filter = employees.filter(item => item.department === "IT")
let map = employees.filter((item) => {
    if(item.experience >= 5){
        item.salary += 500
    }else{
        item.salary += 200
    }
    console.log(`${item.name} --> ${item.salary}`)
})

let index = employees.findIndex(item => item.salary >= 4000)
let some = employees.some(i => i.experience > 6)
let every = employees.every(i => i.salary > 1000)

employees.forEach(i => {
    console.log(`${i.name} --> ${i.salary}`) 
    console.log(filter) 
    console.log(map)
    console.log(index)
    console.log(some)
    console.log(every)
})

