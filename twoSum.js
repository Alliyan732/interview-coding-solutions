/*
1. Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.

*/

var twoSum = function(nums, target) {
    const len = nums.length
    let indices = []
    for(let i = 0; i < len; i++){
        for (let j = 0; j < len; j++) {   
            if(i !== j && nums[i] + nums[j] == target){
                indices.push(...[i,j])
                return indices
            }          
        }
    } 
    
};


nums = [2,7,11,15]
target = 9
const indices = twoSum(nums, target)
console.log(indices)
