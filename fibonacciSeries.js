/*
Fibonacci series: 0 1 1 2 3 5 8 13...

Find the number before the the given number index in the series on the  
for example: 
myFunction(3) will return 1
myFunction(7) will return 8
Note: this sereies is not given as array
*/



// function check(index){
//     const series = [1, 2]
//     lastElement = 0
//     for (let i=1; i<10; i++) {
//         series.push(series[i] + series[i-1])
//     }
//     return series[index-1]
// }

// console.log(check(5))


// print Fibonacci series using recursion

function fibonacci(n){
    let series = [0, 1]
    while (series.length <= n) {
        series.push(series[series.length-1] + series[series.length-2]) 
        fibonacci();
    }
    return series
}

console.log(fibonacci(10));