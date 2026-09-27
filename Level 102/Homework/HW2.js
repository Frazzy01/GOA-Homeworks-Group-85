function processText(text, action){
    return action(text)
}   

function makeUpperCase(text){
    return text.toUpperCase()
}

function makeLowerCase(text){
    return text.toLowerCase()
}

function getLength(text){
    return text.length
}

console.log(processText("JavaScript", makeUpperCase))
console.log(processText("JavaScript", makeLowerCase))
console.log(processText("JavaScript", getLength))