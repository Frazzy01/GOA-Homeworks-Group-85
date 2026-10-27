let car = {
    brand: "BMW",
    model: "M5",
    speed: 0,
    fuel: 60,
    showInfo(){
        return car.brand, car.fuel, car.model, car.speed
    },
    accelerate(amount){
        car.speed += amount
    },
    brake(amount){
        car.speed -= amount
        if(car.speed < 0){
            car.speed = 0
        }
    },
    drive(distance){
        if(car.fuel - distance * 0.1 > 0){
            car.fuel - distance * 0.1
        }
        else{
            return 'Not enough fuel'
        }
    }
};

console.log(car.showInfo())
console.log(car.accelerate())
console.log(car.brake())
console.log(car.drive())