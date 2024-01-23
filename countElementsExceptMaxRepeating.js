let array = [2,3,1,8,8,5,6,9,9,1,3,9]

counts = []
visited = []

for (let i = 0; i < array.length; i++) {

    let count = 0
    for (let j = i; j < array.length; j++) {
        if ( array[i] == array[j] && !visited.includes(array[i])){
            count += 1
        }
        
    }
    if (count != 0){
        counts.push(count)
        visited.push(array[i])
    }
}

const countSum = counts.reduce((acc, curr) =>  acc + curr )

const countMax = Math.max(...counts)

console.log("Values other than max repeating element: " , countSum - countMax)