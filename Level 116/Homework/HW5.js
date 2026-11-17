let company = [
    "TechVision", ["Development", ["Giorgi", "Nika", "Saba"], 35000], ["Marketing", ["Ana", "Mariam"], 12000]
]

let [c, [, [, , ,], ,], [, [, ,], ,]] = company
console.log(c)
let [, [dd, [, , ,], ,], [, [, ,], ,]] = company
console.log(dd)
let [, [, [g, , s], ,], [, [, ,], ,]] = company
console.log(g, s)
let [, [, [, , ,], three,], [, [, ,], ]] = company
console.log(three)
let [, [, [, , ,], ,], [m, [aa, mm,], ,]] = company
console.log(m, aa, mm)
let [, [, [, , ,], LOL,], [, [, ,], KEK,]] = company

let lolkek = [LOL, KEK]

sum = LOL + KEK

console.log(sum)


if(lolkek[0] > lolkek[1]){
    console.log("development")
}else if(lolkek[0] < lolkek[1]){
    console.log(marketing)
}