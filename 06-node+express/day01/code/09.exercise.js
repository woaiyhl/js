// // 1.通过模块的名字fs对模块进行引用
// const fs = require('fs')
// fs.readFile('./01.helloworld.js','utf-8',(err,data) => {
//     console.log(err);
//     console.log(data);
// })
// const fs = require('fs')
// const content = '我爱尹红林!123132'
// fs.appendFile('./10-test.html',content,err => {
//     if(err) {
//         console.log(err);
//         return;
//     }
//     console.log('文件内容写入成功');
// })
const path = require('path')
const fs = require('fs')
console.log(__dirname);
console.log(path.join(__dirname,'10-test.html'));
const finalPath = path.join(__dirname,'10-test.html')
fs.readFile(finalPath,'utf8',(err,doc) => {
    if(err) {
        console.log(err);
        return
    }
    console.log(doc);
})