// Bubble Sort 
// Complexity O(n2)

/*
Bubble Sort:
Bubble Sort is a simple sorting algorithm that repeatedly steps through a list of elements, 
compares adjacent pairs, and swaps them if they are in the wrong order. This process is 
repeated until the entire list is sorted.

Time Complexity:
Best Case: O(n) (when the list is already sorted)
Average Case: O(n^2)
Worst Case: O(n^2)

Space Complexity:
Bubble Sort is an in-place sorting algorithm, meaning it doesn't require additional memory 
space proportional to the input size.
Space Complexity: O(1)

*/

function bubbleSort(array){
    len = array.length;
    
    for (let i = 0; i < len-1; i++) {
        for (let j = 0; j < len-1-i; j++) {
            if (array[j] > array[j+1]){
                let temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }   
        }
    }
    return array;
}


var unsortedArray = [64, 25, 12, 22, 11];
console.log("Original Array:", unsortedArray);
var sortedArray = bubbleSort(unsortedArray);
console.log("Sorted Array:", sortedArray);

