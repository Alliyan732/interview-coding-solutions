# 15) Print missing numbers in the array. Example if array is [5, 6, 8, 10] then print 7, 9.

def find_missing_numbers(arr):
    missing_numbers = []
    for i in range(min(arr), max(arr)):
        if i not in arr:
            missing_numbers.append(i)
    return missing_numbers

# Example usage
input_array = [1,3,4,7,10]
result = find_missing_numbers(input_array)

# print("Missing numbers:", result)


# # JS code
# const input_array = [1,3,4,7,10]
# const missing_elements = []

# for (i = Math.min(...input_array); i <= Math.max(...input_array); i++){
#     if (!input_array.includes(i)){
#         missing_elements.push(i)
#     }
# }

# console.log(missing_elements)

# optimized approach using set
# Complexity O(n)
"""
function missingValues(array, n) {

    const arrSet = new Set(array)

    for (let i = 1; i < n; i++) {
        if (!arrSet.has(i)) {
            console.log(i)
        }

    }

}

missingValues([1, 2, 4, 7, 10], 7)

"""



