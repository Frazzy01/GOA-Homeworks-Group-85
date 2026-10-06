let scores = [45, 78, 32, 90, 56, 84, 67]

const newScores = scores.map((item) =>{
    if(item < 60){
        return item += 10
    }else if(item > 60){
        return item += 5
    }
})

console.log(newScores)