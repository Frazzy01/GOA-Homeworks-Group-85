let first = Math.floor(Math.random() * 20) + 1
let second = Math.floor(Math.random() * 20) + 1
let third = Math.floor(Math.random() * 20) + 1

console.log(first)
console.log(second)
console.log(third)


if(first === second === third){
    console.log("JACKPOT!!!")
}else if(first === second || first === third || second === first || second === third || third === second || third === first){
    console.log("ორი ერთნაირი რიცხვი!")
}else{
    console.log("სამივე განსხვავებულია")
}

let total = first + second + third

if(total > 40){
    console.log("დიდი ჯამი")
}else{
    console.log("პატარა ჯამი")
}