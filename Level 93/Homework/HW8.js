function convertTemperature(value = 30, type = "C"){
    if(type === "C"){
        return value*9/5+32
    }else{
        return (value-32)*5/9d
    }
}

convertTemperature()
