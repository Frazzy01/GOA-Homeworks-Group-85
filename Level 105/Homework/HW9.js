let scores = [45, 60, 72, 38, 90]

const newScores = scores.map((item) => {
    if(item < 50){
        return item + 15
    }else{
        return item
    }
})

newScores.forEach(item => {
    console.log(item)
});