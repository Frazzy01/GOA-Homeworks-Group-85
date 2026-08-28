let analyzeNumbers = function(A, B, C){
        if(A > B && A > C){
            console.log(A)
        }else if(A < B && B > C){
            console.log(B)
        }else if(A < C && B < C){
            console.log(C)
        }else{
            console.log("ERROR 404")
        }
}

analyzeNumbers(20, 46, 30)
analyzeNumbers(13, 69, 99)
analyzeNumbers(404, 222, 202)
