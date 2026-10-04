let random = Math.floor(Math.random() * 10) + 1
let bonus = Math.floor(Math.random() * 5) + 1

console.log(random)


if (random <= 3) {
    console.log("ცარიელი ყუთი")
} else if (random <= 6) {
    console.log("10 მონეტა")
} else if (random <= 8) {
    console.log("30 მონეტა")
} else if (random === 9) {
    console.log("50 მონეტა")
} else {
    console.log("100 მონეტა და ბონუსი!")
    console.log(bonus)
    
    if (random === 10 && bonus === 5) {
        console.log("სუპერ ბონუსი!")
    } else {
        console.log("ჩვეულებრივი ბონუსი!")
    }
}