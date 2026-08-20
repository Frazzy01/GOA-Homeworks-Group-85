let month = 8

switch(month){
    case month == 1 || 2 || 12:
        console.log("Winter")
        break
    case month == 3 || 4 || 5:
        console.log("Spring")
        break
    case month == 6 || 7 || 8:
        console.log("Summer")
        break
    case month == 9 || 10 || 11:
        console.log("Autumn")
        break
    default:
        console.log("invalid month")
        break
}