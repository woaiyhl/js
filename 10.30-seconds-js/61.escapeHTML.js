const escapeHTML = (str) =>
  str.replace(
    /[&<>'"]/g,
    (tag) =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;',
      }[tag] || tag),
  );

let newStr = escapeHTML('<a href="#">Me & you</a>');
console.log(newStr);
// '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
