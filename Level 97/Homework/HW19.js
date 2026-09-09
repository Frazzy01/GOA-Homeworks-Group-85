let data = "apple,banana,orange,kiwi,mango"
let extraFruits = ["grape", "melon"]
let datajumber = data.split(",")
let empty = []

datajumber.push("watermelon")
datajumber.unshift("strawberry")
datajumber.pop()
datajumber.shift()
datajumber.splice(2, 0, "peach")
let datajumberikos = datajumber.slice(0, 3)
datajumber.toSpliced(1, 1)
empty = datajumber.concat(extraFruits)
datajumber = datajumber.join(" | ") 

console.log(data)
console.log(empty)
console.log(datajumber)
console.log(datajumberikos)
console.log(Array.isArray(data))

// HELP ME