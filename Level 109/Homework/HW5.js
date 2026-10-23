let computer = {
    brand: "Lenovo",
    model: "Legion 5",
    ram: 16,
    storage: 512,
    processor: "Intel i5",
    graphicsCard: "RTX 3060",
    price: 3200,
    isGaming: true
};

console.log(computer.brand)
console.log(computer.model)
console.log(computer.price)

computer.ram = 32
computer.storage = 1024
computer.processor = "Intel i7"
computer.screenSize = 15.6
computer.hasWarranty = true
delete computer.graphicsCard
delete computer.isGaming
computer.price = 3500
computer.operatingSystem = "Windows 11"

console.log(computer.ram)
console.log(computer.storage)
console.log(computer.processor)
console.log(computer.operatingSystem)

console.log(computer)