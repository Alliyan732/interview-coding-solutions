// 217. Given an integer array nums, return true if any value appears at least twice in the array, and return
// false if every element is distinct.



//This solution has a time complexity of O(n^2) due to the nested loop, where 'n' is the length of the array.
 
/*
var containsDuplicate = function(nums) {
    let len = nums.length;

    for (let i = 0; i < len; i++) {
        for (let j = i + 1; j < len; j++) {
            if (nums[i] == nums[j]) {
                return true; 
            }
        }
    }

    return false; 
};

const nums = [1, 2, 3, 1];
console.log(containsDuplicate(nums)); 
*/

/*
To optimize the solution you can consider using a more efficient approach. One common and faster approach
is to use a HashSet or Set to keep track of elements you have encountered while iterating through the array.
This reduces the time complexity to O(n) since checking for the presence of an element in a Set has an average
time complexity of O(1)
 */

//  var containsDuplicate = function(nums) {
//     let seenNumbers = new Set();

//     for (let num of nums) {
//         if (seenNumbers.has(num)) {
//             return true;  
//         }
//         seenNumbers.add(num);
//     }

//     return false;  
// };

// const nums = [1, 2, 3, 1];
// console.log(containsDuplicate(nums)); 


const checkDuplicate = (array) => {
    let check = new Set()
    for (let element of array) {
        if (check.has(element)){
            return true
        }
        check.add(element)
    } 
    
    console.log(check)
    return false

}

console.log(checkDuplicate([1,5,3,7]))
