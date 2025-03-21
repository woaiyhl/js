const getAncestors = el => {
  let ancestors = [];
  while (el) {
    ancestors.unshift(el);
    el = el.parentNode;
  }
  return ancestors;
};

let arr = getAncestors(document.querySelector('nav'));  // [document, html, body, header, nav]
console.log(arr);