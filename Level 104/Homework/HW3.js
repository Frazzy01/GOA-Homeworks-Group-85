let carSpeed = Math.floor(Math.random() * 81) + 40

function speed(carSpeed){
    console.log(carSpeed)

    if(carSpeed >= 40 && carSpeed < 60){
        console.log("ნელა მიდის")
    }else if(carSpeed >= 61 && carSpeed < 90){
        console.log("ნორმალური სიჩქარე")
    }else if(carSpeed >= 91 && carSpeed < 110){
        console.log("სწრაფად მიდის")
    }else{
        console.log("ძალიან სწრაფად მიდის")
    }

    if(carSpeed === 100){
        console.log("ზუსტად 100 კმ/სთ!")
    }
}

speed(carSpeed)