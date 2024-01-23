function factorialFunct(num){
    if(num < 0)
        return "Not Defined"
    else if (num == 0) 
        return 1
    else {
        let factorial = 1
        for (let i = 2; i <= num; i++) {
            factorial  = factorial * i;
        }
        return factorial
    }

}

let input = 5
console.log(factorialFunct(input));