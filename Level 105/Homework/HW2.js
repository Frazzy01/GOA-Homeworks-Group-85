let scores = [45, 72, 91, 38, 64, 87]

let newScores = scores.map((item) => {

    if(item < 50){
        return item += 10
    }else{
        return item
    }
})

console.log(newScores)