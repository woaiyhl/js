const fromCamelCase = (str, separator = '_') =>
  str
    .replace(/([a-z\d])([A-Z])/g, '$1' + separator + '$2')
    .replace(/([A-Z]+)([A-Z][a-z\d]+)/g, '$1' + separator + '$2')
    .toLowerCase();

let str1 = fromCamelCase('someDatabaseFieldName', ' '); // 'some database field name'
let str2 = fromCamelCase('someLabelThatNeedsToBeDecamelized', '-'); // 'some-label-that-needs-to-be-decamelized'
let str3 = fromCamelCase('someJavascriptProperty', '_'); // 'some_javascript_property'
let str4 = fromCamelCase('JSONToCSV', '.'); // 'json.to.csv'

console.log(str1,str2,str3,str4);
