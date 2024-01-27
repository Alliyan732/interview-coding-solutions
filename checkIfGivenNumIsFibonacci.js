//  element at any position is equal to the sum of previous two elements 
// check if the number is fibonacci

const isPerfectSquare = (num) => {
    const sqrRoot1 = Math.sqrt((5 * (num*num)) - 4)
    const sqrRoot2 = Math.sqrt((5 * (num*num)) + 4)
    
    return (sqrRoot1 === Math.floor(sqrRoot1) || sqrRoot2 === Math.floor(sqrRoot2))
}

var userInput = prompt("Please enter a value:");
console.log(isPerfectSquare((userInput)))


