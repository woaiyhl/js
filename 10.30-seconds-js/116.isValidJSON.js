const isValidJSON = (str) => {
  try {
    JSON.parse(str);
    return true;
  } catch (e) {
    return false;
  }
};

isValidJSON('{"name":"Adam","age":20}'); // true
isValidJSON('{"name":"Adam",age:"20"}'); // false
isValidJSON(null); // true