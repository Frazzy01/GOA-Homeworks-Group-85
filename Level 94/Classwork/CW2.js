const checkName = name => name.startsWith("g") ? "good name" : "still good name"

console.log(checkName("goga"))

const checkNumber = num => num % 2 == 0 ? "even" : "odd"

console.log(checkNumber(13))