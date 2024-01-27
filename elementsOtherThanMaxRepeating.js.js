let array = [1,1,1,1,4,5,2,2,7],

counts = []
visited = []

for (let i = 0; i < array.length; i++) {

    let count = 0
    for (let j = i; j < array.length; j++) {
        if ( array[i] == array[j] && !visited.includes(array[i])){
            count += 1
        }
        
    }
    if (count != 0){
        counts.push(count)
        visited.push(array[i])
    }
}

const countSum = counts.reduce((acc, curr) =>  acc + curr )

const countMax = Math.max(...counts)

console.log("Values other than max repeating element: " , countSum - countMax)





























// find max repeating elemnts from array and print how many numbers are other than that element

// let array = [2, 3, 1, 3, 3, 3, 3, 3, 3, 3, 3]

// let max = 0
// let maxElement = 0
// let count = 0

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     let tempCount = 0
//     for (let j = 0; j < array.length; j++) {
//         const element2 = array[j];
//         if (element == element2){
//             tempCount++
//         }
//     }
//     if (tempCount > count){
//         count = tempCount
//         maxElement = element
//     }
// }

// console.log("Max element is ", maxElement, " and it is repeated ", count, " times")

// let emptyArray = []

// for (let i = 0; i < array.length; i++) {
//     const element = array[i];
//     if (element != maxElement){
//         emptyArray.push(emptyArray)
//     }
// }

// console.log(emptyArray.length)




