/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = {
        ')' : '(',
        ']' : '[',
        '}' : '{'
    }

    for (let c of s){
        if(map[c]){
            if(stack.pop()!== map[c]) return false
        }else{
            stack.push(c)
        }
    }
    return stack.length === 0
};