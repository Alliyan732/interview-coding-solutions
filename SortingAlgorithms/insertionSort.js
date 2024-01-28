// Example of arranging deck cards
/*
Steps:
Initialization:

Start with the second element (index 1) assuming the first element (index 0) is already sorted.
Comparison and Insertion:

Compare the current element with the elements to its left, moving from right to left.
If the current element is smaller than the element being compared, swap them.
Continue this process until the correct position is found for the current element.
Repeat for Each Element:

Move to the next unsorted element (i.e., increment the index) and repeat the comparison and insertion process.
Final Sorted Array:

After processing all elements, the array is sorted.

Complexities:

Time Complexity:

Best Case: O(n) - When the array is already sorted.
Average Case: O(n^2) - In the average case, when the input array is unsorted.
Worst Case: O(n^2) - When the array is sorted in reverse order.
Space Complexity: O(1) - Insertion sort is an in-place sorting algorithm, meaning it 
doesn't require additional memory proportional to the input size; it sorts the array 
in its original memory space.

Insertion Sort is particularly suitable for small datasets or partially sorted datasets
 due to its simplicity and low overhead.

It has the advantage of being efficient for small datasets and is stable, meaning that
it maintains the relative order of equal elements.

*/


function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentElement = array[i];
        let j = i - 1;

        while (j >= 0 && currentElement < array[j]) {
            [array[j], array[j + 1]] = [array[j + 1], array[j]];
            j--;
        }
    }

    return array;
}

const unsortedArray = [64, 34, 25, 12, 22, 11, 90];
console.log("Unsorted Array:", unsortedArray);
const sortedArray = insertionSort(unsortedArray);
console.log("Sorted Array:", sortedArray);
