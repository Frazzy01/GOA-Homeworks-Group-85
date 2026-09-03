let name = "Goga";

function first() {
    let age = 20;

    function second() {
        let city = "Tbilisi";

        console.log(name);
        console.log(age);
        console.log(city);
    }

    second()
}

first()

// name global scope age and cita block scope