let cart = ["Phone", "Laptop", "Mouse"]
let extraProducts = ["Webcam", "Microphone"]

cart.push("Keyboard")
cart.unshift("USB Cable")
cart.pop()
cart.shift()
cart.splice(2, 1, "Headphones")
cart = cart.concat(extraProducts)
cart = cart.join(" | ")

console.log(cart)