let employee = {
    firstName: "Nika",
    lastName: "Beridze",
    age: 25,
    salary: 3000,
    department: "Marketing",
    position: "Junior"
};

let promotion = {
    salary: 4500,
    position: "Senior",
    department: "Development"
};

let additionalInfo = {
    experience: 5,
    isActive: true
}

let updatedEmployee = {
    ...employee,
    ...promotion,
    ...additionalInfo,

    ...employee.salary = 4500,
    ...employee.department = "Development",
    ...employee.position = "Senior",
    propertycountry: "Georgia"
}