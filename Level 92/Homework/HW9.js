let month = 8

switch(month){
    case 1, 2, 12 :
        console.log("Winter")
        break
    case 3, 4, 5 :
        console.log("Spring")
        break
    case 6, 7, 8 :
        console.log("Summer")
        break
    case 9, 10, 11:
        console.log("Autumn")
        break
    default:
        console.log("invalid month")
        break
}