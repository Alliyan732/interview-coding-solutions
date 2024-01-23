// reverse the array without using buitin function


array = [1,2,3,4,5,6,7,8]
for (let i = 0; i < array.length / 2; i++){  // swap elements upto the middle of the array

    let temp = array[i]
    array[i] = array[array.length-i-1]
    array[array.length-i-1] = temp
    
}

console.log(array)

