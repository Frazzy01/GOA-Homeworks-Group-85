let messages = [
    "  Hello Goga  ",
    "JAVASCRIPT is fun",
    "  I LOVE CODING ",
    "React is awesome",
    "  Learn JavaScript  "
]


function checking(messages) {
    let count = 0
    let clean = []

    for (let i = 0; i < messages.length; i++) {
        let newmessages = messages[i].trim().toLowerCase()
        clean.push(newmessages)

        if (newmessages.includes("javascript")) {
            console.log("JavaScript message found")
            count++
        }

    }
    for (let i = clean.length - 1; i >= 0; i--) {
        if (clean[i].length > 15) {
            console.log(clean[i])
        }
    }

    return clean
}

console.log(checking(messages))