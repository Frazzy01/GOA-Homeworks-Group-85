let store = [
    [
        "Electronics",
        [
            ["Laptop", 2500, ["Black", "Silver"]],
            ["Phone", 1500, ["Black", "White"]],
            ["Tablet", 900, ["Gray", "Blue"]]
        ]
    ],

    [
        "Clothes",
        [
            ["T-Shirt", 80, ["Red", "Black", "White"]],
            ["Jeans", 150, ["Blue", "Black"]],
            ["Jacket", 300, ["Black", "Brown"]]
        ]
    ],

    [
        "Shoes",
        [
            ["Nike", 400, ["Black", "White"]],
            ["Adidas", 350, ["White", "Blue"]],
            ["Puma", 250, ["Black", "Red"]]
        ]
    ]
]

function manageStore(store) {
    let price = store[0][1][1][0]
    let phoneprice = store[0][1][1][1]
    let phonecolor = store[0][1][1][2][1]

    console.log(price)
    console.log(phoneprice)
    console.log(phonecolor)

    store[0][1][2][1] = 1000
    store[0][1][0][2].push("white")
    store[1][1][0][2][2] = "Green"
    store[1][1][1][2].splice(1, 1)
    store[2][1][0][2].unshift("Red")
    store[2][1][2][2][1] = "Green"
    store[2][1].push(["New Balance", 450, ["Gray", "Black"]])
    store[1][1].pop()

    let Electronics = store[0][1].slice(0, )

    console.log(Electronics)

    let shoesnewbrand = [
        ["Reebok", 280, ["Black", "White"]]
    ]

    store[2][1] = store[2][1].concat(shoesnewbrand);

    return store

}


let newStore = manageStore(store);
console.log(newStore);
