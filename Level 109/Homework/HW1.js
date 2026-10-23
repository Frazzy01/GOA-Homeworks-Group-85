let user = {
    username: "Shadow",
    age: 19,
    email: "shadow@gmail.com",
    city: "Tbilisi",
    status: "active"
};

console.log(user.username)
console.log(user.age)
console.log(user.city)

user.username = "DarkKnight"
user.age = 21

user.phone = "555123456"
delete user.email

user.isVerified  = true
user.status  = true

console.log(user)