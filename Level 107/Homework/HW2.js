const prices = [120, 450, 80, 700, 250, 1200, 90, 550, 300, 1500, 60]

let filter = prices.filter(num => num > 200)
let mapp = filter.map(num => num - 50)
let mappp = mapp.map(num => num * 2)
let radius = mappp.reduce((acc , curr) => {return acc + curr}, 0)
let index = prices.findIndex(num => num > 500)
let some = prices.some(num => num > 1000)
let every = prices.every(num => num > 50)

mappp.forEach(item => {
    console.log(item)
})