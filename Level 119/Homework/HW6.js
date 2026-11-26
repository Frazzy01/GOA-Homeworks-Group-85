let student = {
    name: "Nika",
    age: 20,
    city: "Tbilisi"
}   

let studentCopy = {
    ...student,
    name : "Giorgi",
    age : 22,
    propertygrade: "A",
}

console.log(studentCopy)
