/*
20. Valid Parentheses

Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

*/

var isValid = function(s) {
    const stack = [];

    for (let i = 0; i < s.length; i++) {
        switch (s[i]) {
            case '[':
            case '{':
            case '(':
                stack.push(s[i]);
                break;
            case ']':
                if (stack.pop() !== '[') {
                    return false; 
                }
                break;
            case '}':
                if (stack.pop() !== '{') {
                    return false; 
                }
                break;
            case ')':
                if (stack.pop() !== '(') {
                    return false; 
                }
                break;
            default:
                break;
        }
    }

    return stack.length === 0; 
};


const s = "(){[()]}[()]";
console.log(isValid(s)); 
