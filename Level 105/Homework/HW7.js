let scores = [95, 67, 42, 81, 55, 30]

scores.forEach(item => {
    if(item >= 80){
        console.log("Excellent")
    }else if(item >= 79){
        console.log("Good")
    }else if(item >= 59){
        console.log("Average")
    }else{
        console.log("Failed")
    }
});