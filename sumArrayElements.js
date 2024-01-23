array = [1,2,3,4,5,6,7,8,9]
let sum = 0

// using for each loop
// array.forEach(element => {
//     sum += element
// });

// console.log(sum)

// using simple for loop
// for (let i = 0; i < array.length; i++) {
//     sum += array[i]
// }

// console.log(sum)

// using reduce function
console.log(array.reduce((accumulator, current) => accumulator + current ))


