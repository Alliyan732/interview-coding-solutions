
// using Set
// set contains unique elements, by default returns an object
// so we are converting it to array and then joining using join() functions
// It's case Sensitive, if we want to remove all the elements despite of 
// case sensitivity we can use toString() function
const string1 = "Aalliyan";
const charSet = new Set(string1);
console.log([...charSet].join('')); 

// Using replace
// it will remove all occurances of that character
const string2 = "Aalliyan";
console.log(string2.replace(/\a/g, ''))


// Not using built in function
const string3 = "Aalliyan";

let unique = []
for (let i = 0; i < string3.length; i++) {
    if (!unique.includes(string3[i]))
        unique.push(string3[i])
}

console.log(unique.join(''))


