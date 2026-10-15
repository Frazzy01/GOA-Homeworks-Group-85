const scores = [
    45, 88, 72, 96, 54, 100, 63, 81,
    39, 92, 77, 68, 85, 49, 98, 59
]

let filter = scores.filter(item => item > 60)
let map = filter.map(item => item += 7)
let filternd = map.filter(item => item > 80)
let mapnd = filternd.map((item , index) => item - index)
let filterrd = mapnd.filter(item => item % 2 != 0)
let radius = filterrd.reduce((acc , curr) => { return acc + curr}, 0 )

let index = scores.findIndex(item => item > 90)
let some = scores.some(item => item < 90)
let every = scores.every(item => item > 70)

scores.forEach(element => {
    if(element > 80){
        console.log("ჩააბარა")
    }else{
        console.log("ვერ ჩააბარა")
    }
})