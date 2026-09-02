let name = "Goga scope";

function first() {
    let age = 20;

    function second() {
        let city = "Tbilisi scope";

        console.log(name);
        console.log(age + " scope");
        console.log(city);
    }

    second()
}

first()