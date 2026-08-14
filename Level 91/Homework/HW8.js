let username = "User123"

if (username === "" || username === 0 || username === NaN || username === null || username === undefined) {
    console.log("Empty")
} else if (username.startsWith("Admin") && username > 10) {
    console.log("Strong admin username")
} else if (username.startsWith("User")) {
    console.log("Regular user")
} else if (username > 5) {
    console.log("Too short")
} else {
    console.log("Valid username")
}