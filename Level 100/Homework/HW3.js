const secretNumber = 7
let guess = 1
while(guess <= secretNumber){
    if(guess === secretNumber){
        console.log(guess, "Correct number")
        break
    }
    guess++
}