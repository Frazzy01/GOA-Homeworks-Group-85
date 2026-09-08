let numbers = [10, 20, 30, 40, 50, 60, 70, 80]

if(numbers){
    numbers[numbers % 2 == 0] * 5
    console.log(numbers)
}else{
    numbers[numbers % 2 != 0] * 2
    console.log(numbers)
}