const yesNo = (val, def = false) => (/^(y|yes)$/i.test(val) ? true : /^(n|no)$/i.test(val) ? false : def);

yesNo('Y'); // true
yesNo('yes'); // true
yesNo('No'); // false
yesNo('Foo', true); // true
