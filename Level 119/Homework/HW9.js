let user = {
    name: "Gio",
    age: 21
};

let address = {
    city: "Tbilisi",
    street: "Rustaveli"
};

let account = {
    username: "gio21",
    isActive: true
}

let fullUser = {
    ...user,
    ...address,
    ...account,
    role: "Admin",
    city: "Kutaisi",
    isActive : false,
}

console.log(fullUser)