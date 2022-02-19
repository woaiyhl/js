const splitLines = (str) => str.split(/\r?\n/);

let arr = splitLines('This\nis a\nmultiline\nstring.\n');
// ['This', 'is a', 'multiline', 'string.' , '']
console.log(arr);