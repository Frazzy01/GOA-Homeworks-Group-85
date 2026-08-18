let city = "tbilisi"

switch (city) {
    case "tbilisi":
        console.log("u live in tbilisi")
        break
    case "batumi":
        console.log("u live in batumi")
        break
    case "qutaisi":
        console.log("u live in qutaisi")
        break
    default:
        console.log("bro... WHERE U LIVE?")
        break
}


if (city === "tbilisi") {
    console.log("u live in tbilisi")
} else if (city === "batumi") {
    console.log("u live in batumi")
} else if (city === "qutaisi") {
    console.log("u live in qutaisi")
} else {
    console.log("bro... WHERE U LIVE?")
}