let checkWord = word => {
    word = word.toLowerCase()

    if(word.startsWith("a")){
        return "Starts with A"
    }else{
        return "Does not start with A"
    }

}

checkWord("asdasdad")
checkWord("asdasdad")

console.log(checkWord("asdasdad"))