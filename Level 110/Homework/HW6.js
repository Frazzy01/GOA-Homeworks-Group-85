let student = {
    name: "Nika",
    scores: [85, 90, 70, 100],
    showScores(){
        return scores
    },
    addScore(score){
        student.scores.push(score)
    },
    calculateAverage(){
        return student.scores.reduce((a,c) => a + c)/student.scores.length
    },
    getHighestScore(){
        return student.scores.reduce((a,c) => {return c > a ? c : a})
    },
    getLowestScore(){
        return student.scores.reduce((a,c) => {return c < a ? c : a})
    }
};
