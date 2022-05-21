// 匹配位置
/**
 *  ^ 匹配开头，在多行匹配中匹配行开头
 *  $ 匹配结尾，在多行匹配中匹配行结尾
 *  \b 具体是\w和\W之间的位置，也包括\w和^之间的位置，也包括\w和$之间的位置
 *  \B \B就是\b的反面的意思，非单词边界
 *  (?=p) p是一个子模式，即p前面的位置。
 *  (?!p) (?!p)就是(?=p)的反面意思
 * 
 */

 var result = "hello".replace(/^|$/g, '#');
 console.log(result); 
 // => "#hello#"
 
 var result = "I\nlove\njavascript".replace(/^|$/gm, '#');
console.log(result);
/*
#I#
#love#
#javascript#
*/

var result = "[JS] Lesson_01.mp4".replace(/\b/g, '#');
console.log(result); 
// => "[#JS#] #Lesson_01#.#mp4#"

var result = "[JS] Lesson_01.mp4".replace(/\B/g, '#');
console.log(result); 
// => "#[J#S]# L#e#s#s#o#n#_#0#1.m#p#4"

var result = "hello".replace(/(?=l)/g, '#');
console.log(result); 
// => "he#l#lo"

var result = "hello".replace(/(?!l)/g, '#');
console.log(result); 
// => "#h#ell#o#"

var result = "12345678".replace(/(?=\d{3}$)/g, ',')
console.log(result); 
// => "12345,678"

var result = "12345678".replace(/(?=(\d{3})+$)/g, ',')
console.log(result); 
// => "12345,678"

var string1 = "12345678",
string2 = "123456789";
reg = /(?!^)(?=(\d{3})+$)/g;

var result = string1.replace(reg, ',')
console.log(result); 
// => "12,345,678"

result = string2.replace(reg, ',');
console.log(result); 
// => "123,456,789"

function toThousandFilter(num) {
  return (+num || 0).toString().replace(/^-?\d+/g, m => m.replace(/(?=(?!\b)(\d{3})+$)/g, ','))
}
123456789.00234
console.log(123456789.00234.toString().replace(/^-?\d+/g,m => {
  return m.replace(/(?!^)(?=(\d{3})+$)/g,',')
}));


