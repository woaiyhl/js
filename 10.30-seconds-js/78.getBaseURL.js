const getBaseURL = (url) => url.replace(/[?#].*$/, '');

let url = getBaseURL('http://url.com/page?name=Adam&surname=Smith'); // 'http://url.com/page'
console.log(url);
