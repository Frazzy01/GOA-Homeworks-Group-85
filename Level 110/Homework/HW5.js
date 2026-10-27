let car = {
    brand: "BMW",
    model: "M5",
    speed: 0,
    fuel: 60,
    showInfo(){
        return car.brand, car.fuel, car.model, car.speed
    },
    accelerate(amount){
        car.speed + amount
    },
    brake(amount){
        if(amount < car.speed){
            car.speed - amount
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