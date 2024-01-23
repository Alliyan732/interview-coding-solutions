// check if the given number is prime
function prime(num){
    
    if (num < 2) return false
    else{
        for (let i = 2; i < num; i++) {
            if (num % i == 0){
                return false
            }  
            
        }
    }
    return true
}

let input = 5
console.log(prime(input))