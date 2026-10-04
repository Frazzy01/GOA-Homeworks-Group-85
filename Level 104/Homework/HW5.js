let player1 = Math.floor(Math.random() * 21) + 10
let player2 = Math.floor(Math.random() * 21) + 10

if (player1 === 20) {
    player1 += 5
} else if (player2 === 20) {
    player2 += 5
}

console.log(player1)
console.log(player2)

let p1Dacva = Math.floor(Math.random() * 10) + 1
let p2Dacva = Math.floor(Math.random() * 10) + 1

if (p1Dacva === 10) {
    p1Dacva += 3
} else if (p2Dacva === 10) {
    p2Dacva += 3
}

console.log(p1Dacva)
console.log(p2Dacva)

let totalP1 = player1 + p1Dacva
let totalP2 = player2 + p2Dacva

if (totalP1 > totalP2) {
    console.log(`PLAYER 1 WIN CONGRATULATION`)
    console.log(`PLAYER 1 POWER AND SHEILD - ${totalP1}`)
} else if (totalP1 < totalP2) {
    console.log(`PLAYER 2 WIN CONGRATULATION`)
    console.log(`PLAYER 2 POWER AND SHEILD - ${totalP2}`)
}else{
    console.log("TIE")
}