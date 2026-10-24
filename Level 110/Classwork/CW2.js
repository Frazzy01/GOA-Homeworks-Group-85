let university = {
    name: "Tbilisi University",
    address: {
        city: "Tbilisi",
        building: {
            number: 10,
            floors: 6
        }
    },
    department: {
        name: "Computer Science",
        students: ["Nika", "Ana", "Gio", "Mariam"],
        teacher: {
            name: "Luka",
            subjects: ["JavaScript", "Python", "React"]
        }
    },
    library: {
        books: {
            programming: ["JavaScript Basics", "Learn Python"],
            databases: ["SQL Guide", "MongoDB Basics"]
        }
    }
}


console.log(university.address.building.number)
university.address.city = "Qutaisi"
delete university.address.building.floors
console.log(university.department.teacher.subjects[1])
university.department.teacher.subjects.push("C++")
university.department.teacher.name = "Levan"
delete university.library.books.programming

for(let i = 0; i < university.library.books.databases.length; i++){
    console.log(university.library.books.databases[i])
}
