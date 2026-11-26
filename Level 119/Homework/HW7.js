let personalInfo = {
    name: "Ana",
    age: 19
}

let contactInfo = {
    email: "ana@gmail.com",
    phone: "555123456"
}

let user = {
    ...personalInfo,
    ...contactInfo,
    city: "Batumi",
    age: 20,
}

console.log(user)