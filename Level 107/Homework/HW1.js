const scores = [45, 82, 67, 100, 34, 91, 76, 58, 100, 23, 88, 64]

let filter = scores.filter(item => item > 60)
let map = filter.map(item => item + 5)
let filternd = map.filter(item => item > 80)
let radius = filternd.reduce((acc , curr) => {return acc + curr}, 0 )
let index = scores.findIndex(item => item > 100)
let some = scores.some(item => item < 30)
let every = scores.every(item => item > 20)

filternd.forEach(element => {
    console.log(element)  
})