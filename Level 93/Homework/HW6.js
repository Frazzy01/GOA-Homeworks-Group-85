function createMessage(name, message = "Hello"){
    if(message === "Hello"){
        console.log(message, name)
    }else{
        console.log(`welcome ${name}`)
    }
}

createMessage("Goga", message = "Hello")
createMessage("Goga", message = "idk")
createMessage("Levan", message = "idk")
createMessage("Levan", message = "Hello")
