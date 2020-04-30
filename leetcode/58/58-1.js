/**
 * @param {string} s
 * @return {string}
 * 输入一个英文句子，翻转句子中单词的顺序，但单词内字符的顺序不变。为简单起见，标点符号和普通字母一样处理。例如输入字符串"I am a student. "，则输出"student. a am I"。
 * @author qzj
 * @date 2020-04-29
 */
var str = " the sky is  blue "
var reverseWords = function(s) {
    // let str = s.split('');
    // str.reverse()
    // console.log(str.join(' ').trim())
    //trim() 去除首尾的空格  常常用于注册表单的空格去除
    return s.split(/\s+/).reverse().join(' ').trim(); //正则表达式：‘+’  表示一个或多个
    //return str.replaceAll(,'');

};
//let a = str.split(' ')
//a.reverse();
//c/onsole.log(a)
console.log(reverseWords(str))