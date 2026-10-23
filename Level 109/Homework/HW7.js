let account = {
    username: "DarkKnight",
    password: "abc12345",
    followers: 2500,
    following: 430,
    posts: 85,
    verified: false,
    email: "dark@gmail.com",
    country: "Georgia",
    theme: "dark",
    notifications: true,
    accountType: "personal"
}

console.log(account["username"])
console.log(account["followers"])
console.log(account["email"])
console.log(account["accountType"])


account["username"] = "NightWolf"
account["password"] = "secure9876"
account.followers = 5000
account["following "] = 600
account["likes"] = 12000
account["bio"] = "JavaScript Developer"
account["isPrivate"] = false
delete account["country"]
delete account.notifications
account["verified"] = true
account["theme"] = "light"
delete account["accountType"]
account["website"] = "mywebsite.com"

console.log(account["username"])
console.log(account["followers"])
console.log(account["likes"])
console.log(account["bio"])
console.log(account["isPrivate "])
console.log(account["website"])
console.log(account)

