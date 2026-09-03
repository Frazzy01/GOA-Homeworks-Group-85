let country = "Georgia";

function school() {
    let students = 20

    if (students > 10) {
        let teacher = "Goga";

        console.log(country); // global
        console.log(students); // block
        console.log(teacher); // block
    }
}

 console.log(school())

// country global scope student and teacher global