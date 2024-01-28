// We Take indexes , i (for outer loop that will run till len-1) and j (for inner loop 
// that will run till end because in this case we are comparing to min, so we will move 
// till end of the array) and a variable minIndex (that will take index on min value)
// we check if the array[j] < array[i] then swap 
// in this algo we bring smalest values to the front in every loop

/*
Selection Sort:

Definition: Selection Sort is a simple comparison-based sorting algorithm that divides 
the input array into two parts: a sorted and an unsorted region. In each iteration, it
finds the minimum (or maximum) element from the unsorted region and swaps it with the
first element in the unsorted region, expanding the sorted region.

Complexities:

Time Complexity:

Worst Case: O(n^2) comparisons, O(n) swaps
Average Case: O(n^2) comparisons, O(n) swaps
Best Case: O(n^2) comparisons, O(n) swaps  - becaue we compare every element 
Space Complexity: O(1) - Selection Sort is an in-place sorting algorithm as it 
only requires a constant amount of extra memory for temporary variables.

Selection Sort is not efficient for large datasets due to its quadratic time 
complexity, but it is simple to understand and implement.

It is not Stable beacuae it is possible that two equal elements may change 
their position, eg [5A, 2, 3, 5B, 1] ,  [1, 2, 3, 5B, 5A]
*/ 

function selectionSort(array) {

    let len = array.length
    
    for (let i = 0; i < len-1; i++) {

        let minIndex = i
        for (let j = i+1; j < len; j++) {
            if (array[j] < array[minIndex]){
                 minIndex = j
            }  
        }

        if (minIndex !== i){
            // swap
            [array[i] , array[minIndex]] = [array[minIndex], array[i]]
        }
    }

    return array
}


const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted Array:", unsortedArray);
const sortedArray = selectionSort(unsortedArray);
console.log("Sorted Array:", sortedArray);