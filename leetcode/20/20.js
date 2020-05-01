/**
 * @param {string} s
 * @return {boolean}
 * @author qzj
 * @data 2020-05-01
 */
var str = "(())[]{}";
var str1 = "(]"
var isValid = function(s) {
    let arr = [];
    for (const key in s) {
        console.log('key', key)

        if (s[key] === '{')
            arr.unshift('{');
        else if (s[key] === '[')
            arr.unshift('[');
        else if (s[key] === '(')
            arr.unshift('(');

        else {
            if (s[key] === '}')
                if (arr.shift() === '{') {} else
                    return false;
            else if (s[key] === ']')
                if (arr.shift() === '[') {} else
                    return false;

            else if (s[key] === ')')
                if (arr.shift() === '(') {} else
                    return false;

        }
        console.log('arr', arr)
    }
    if (arr.length === 0)
        return true;
    else
        return false;
};

for (const key in str) {
    // console.log(str[key])
    //console.log(str.shift())shift()

}

// console.log(str.shift())
console.log(isValid(str))