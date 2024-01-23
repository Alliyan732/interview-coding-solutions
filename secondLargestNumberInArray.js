// Find the second largest element in an array

// one appraoch os to sort the array 
// Then return sortedArray[sortedArray.length-2]
const secondLargestFunct = (array) => {
    
    let sortedArray = array.sort()
    return sortedArray[sortedArray.length-2]
}

let array = [7,2,5,8,9,6,3,1,4]
console.log("Second Largest element in array: ", secondLargestFunct(array));