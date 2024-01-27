# 8) Given an array find the maximum number form it and improving time complexity.

array = [5,7,9,8,2,4,9,21]

# manual method

# js code
# arr = [1,5,7,9,5,8,4]

# let max = arr[0]
# for (i = 1; i<arr.length; i++){
#     if (arr[i] > max){
#         max = arr[i]
#     }
# }

# console.log(max)

maxNum = array[0]
for i in range(1, len(array)):
    if array[i] > maxNum:
        maxNum = array[i]

print(maxNum)

# python builtin method
# it is optimal because it is implemented in C with optimizations which may result in better performance
# Always prefer built-in functions when available, as they are often highly optimized for performance.
print(max(array))