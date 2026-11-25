let fruits = ["Apple", "Banana", "Orange"];
let vegetables = ["Carrot", "Potato", "Tomato"];
let food = [...fruits, ...vegetables]

vegetables.unshift("Cucumber")
fruits.push("Mango")

console.log(fruits)
console.log(vegetables)
console.log(food)