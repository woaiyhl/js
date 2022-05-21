// 1.横向模糊匹配：一个正则可匹配的字符串的长度不固定
/**
 * 量词
 * {m} 出现m次
 * {m,}至少出现m次
 * {m,n}  [m,n]闭合 m到nc出现范围次数
 * ？ === {0,1} 出现0或1次
 * + === {1,} 至少出现1次
 * * === {0,} 出现任意次
 */
var regex = /ab{2,5}c/g;
var string = 'abc abbc abbbc abbbbc abbbbbc abbbbbbc';
console.log(string.match(regex));
// => ["abbc", "abbbc", "abbbbc", "abbbbbc"]

// 2.纵向模糊匹配： 一个正则匹配的字符串，具体到某一位字符时，它可以不是某个确定的字符，可以有多种可能
var regex = /a[123]b/g;
var string = 'a0b a1b a2b a3b a4b';
console.log(string.match(regex));
// => ["a1b", "a2b", "a3b"]

// 3.范围表示法 【0-9a-zA-Z_]
// 4.排除字符组 【^ABC] 表示是一个除"a"、"b"、"c"之外的任意一个字符。字符组的第一位放^（脱字符），表示求反的概念
// 5.常见的简写形式
/**
 *  \d === [0-9]
 *  \D === [^0-9] 表示除数字外的任意字符
 *  \w === [0-9a-zA-Z_]
 *  \W === [^0-9a-zA-Z_]
 *  \s === [\t\v\n\r\f] 表示空白符
 *  \S === [^\t\v\n\r\f]
 *  . === [^\n\r\u2028\u2029]
 *  匹配任意字符
 *   [\d\D]
 *   [\w\W]
 *   [\s\S]
 *   [^]
 */

// 6.贪婪匹配和惰性匹配
//  贪婪匹配
var regex = /\d{2,5}/g;
var string = '123 1234 12345 123456';
console.log(string.match(regex));
// => ["123", "1234", "12345", "12345"]

//惰性匹配
/** 通过在量词后面加个问号就能实现惰性匹配
 *  {m,n}?
    {m,}?
    ??
    +?
    *?
 * 
 */
var regex = /\d{2,5}?/g;
var string = '123 1234 12345 123456';
console.log(string.match(regex));
// => ["12", "12", "34", "12", "34", "12", "34", "56"]

// 7.多选分支
var regex = /good|nice/g;
var string = "good idea, nice try.";
console.log( string.match(regex) ); 
// => ["good", "nice"]
var regex = /good|goodbye/g;
var string = "goodbye";
console.log( string.match(regex) ); 
// => ["good"]

// 8.案例分析
// 匹配16进制颜色值
var regex = /#([0-9a-fA-F]{6}|[0-9a-fA-F]{3})/g;
var string = "#ffbbad #Fc01DF #FFF #ffE";
console.log( string.match(regex) ); 
// => ["#ffbbad", "#Fc01DF", "#FFF", "#ffE"]

// 匹配时间
var regex = /^([01][0-9]|[2][0-3]):[0-5][0-9]$/;
console.log( regex.test("23:59") ); 
console.log( regex.test("02:07") ); 
// => true
// => true

// window操作系统文件路径
// [^\\:*<>|"?\r\n/] 来表示合法字符
var regex = /^[a-zA-Z]:\\([^\\:*<>|"?\r\n/]+\\)*([^\\:*<>|"?\r\n/]+)?$/;
console.log( regex.test("F:\\study\\javascript\\regex\\regular expression.pdf") ); 
console.log( regex.test("F:\\study\\javascript\\regex\\") ); 
console.log( regex.test("F:\\study\\javascript") ); 
console.log( regex.test("F:\\") ); 
// => true
// => true
// => true
// => true

// 匹配id
var regex = /id=".*?"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]); 
// => id="container"

var regex = /id="[^"]*"/
var string = '<div id="container" class="main"></div>';
console.log(string.match(regex)[0]); 
// => id="container"

