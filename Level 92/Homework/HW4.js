let username = "adminGoga"

username === "" ? console.log("Username is empty") : username.startsWith("admin") ? console.log("Admin") : username.startsWith("user") ? console.log("User") : console.log("Unknown user")