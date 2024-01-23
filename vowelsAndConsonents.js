// count vowels and consonents in a string

function countChars(str) {
    let lstring = str.toLowerCase().split('').join('').replace(/\s/g, '')  // /\s/g, '' is a regular expression to remove white spaces
    console.log(lstring)
    console.log(lstring.length)
    let vowelsCount = 0;

    for (let i = 0; i < lstring.length; i++) {
        if (lstring[i] === 'a' || lstring[i] === 'e' || lstring[i] === 'i' || lstring[i] === 'o' || lstring[i] === 'u') {
            vowelsCount++;
        }
    }

    let consonantCount = lstring.length - vowelsCount;

    return "Vowels: " + vowelsCount + ", Consonants: " + consonantCount;
}

console.log(countChars("Alliyan Waheed Alvi"));
