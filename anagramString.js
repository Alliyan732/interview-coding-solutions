// check if listen and silent are anagrams 

// /\s/g is regex, /s denotes spaces, breaklines, 
//g is global / is for staring and ending of regex
const checkAnagram = (str1, str2) => {
    str1join= str1.toLowerCase().split('').sort().join('').replace(/\s/g, '')
    str2join= str2.toLowerCase().split('').sort().join('').replace(/\s/g, '')
    console.log(str1join, str2join)

    return str1join === str2join
}


console.log(checkAnagram("sile nt", "li  sten"))