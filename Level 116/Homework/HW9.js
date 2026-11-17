let car = {
    brand: "BMW",
    model: "M5",
    year: 2023,
    color: "Black",
    price: 85000,
    isElectric: false
}

let {brand : f, model : l, year : p, color : s, price : e, isElectric : fa} = car

let {brand : carBrand} = car

console.log(carBrand)

let {model : carModel } = car

console.log(carModel)

let {year : productionYear} = car

console.log(productionYear)

console.log(f, l, s,)

if(p === 2020){
    console.log(true)
}else{
    console.log(false)
}