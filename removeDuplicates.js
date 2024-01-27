// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// nums = [1,1,2]

// function removeDuplicates(nums){
    
//     for (let index = 0; index < nums.length; index++) {
//         if (nums[index] === nums[index+1]){
//             continue;
//         }
//         else {
//             nums[index] = nums[index+1]
//         }
//     }

// }

// const nums = [1,1,2]

// var removeDuplicates = function (nums) {
//     // Length of the updated array
//     let count = 0;
//     // Loop for all the elements in the array
//     for (let i = 0; i < nums.length; i++) {
//         // If the current element is equal to the next element, we skip
//         if (i < nums.length - 1 && nums[i] == nums[i + 1]) {
//             continue;
//         }
//         // We will update the array in place
//         nums[count] = nums[i];
//         count++;
//     }
//     return count;
// };

// const requredArray = removeDuplicates(nums);
// console.log(requredArray);






const nums = [1,1,2]


var removeDuplicates = function (array) {
    let unique = []
    for (let index = 0; index < array.length; index++) {
        if (array[index] === array[index+1]){
            continue;
        } 
        unique.push(array[index])
    }

    return unique
}


const requredArray = removeDuplicates(nums);
console.log(requredArray)
