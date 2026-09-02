let x = 10;

function outer() {
    let x = 20;

    function middle() {


        function inner() {

            console.log(x);
            console.log(y);
        }

        inner();
    }

    middle();
}

outer();

// daibewda inneris X da middlis Y
// tu wavshlit inneris X daibewdeba middlis X
// 404