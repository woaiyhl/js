// \b是正则表达式规定的一个特殊代码，也叫元字符，\b代表着单词的开头或结尾，也就是单词的分界处
const capitalizeEveryWord = (str) => str.replace(/\b[a-z]/g, (char) => char.toUpperCase());

console.log(capitalizeEveryWord('hello world!')); // 'Hello World!'
