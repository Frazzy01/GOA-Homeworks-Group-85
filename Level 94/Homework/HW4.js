let checkWord = word => {
    word = word.toLowerCase()

    if(word.startsWith("a")){
        return "Starts with A"
    }else{
        return "Does not start with A"
    }

}

console.log(checkWord("asdasdad"))
console.log(checkWord("Dsdasdad"))