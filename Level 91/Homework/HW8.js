let username = "User123"

if (username) {
    console.log("Empty")
} else if (username.startsWith("Admin") && username.length > 10) {
    console.log("Strong admin username")
} else if (username.startsWith("User")) {
    console.log("Regular user")
} else if (username.length > 5) {
    console.log("Too short")
} else {
    console.log("Valid username")
}