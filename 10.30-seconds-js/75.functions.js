const functions = (obj, inherited = false) =>
  (inherited
    ? [...Object.keys(obj), ...Object.keys(Object.getPrototypeOf(obj))]
    : Object.keys(obj)
  ).filter(key => typeof obj[key] === 'function');
 
  function Foo() {
    this.a = () => 1;
    this.b = () => 2;
  }
  Foo.prototype.c = () => 3;
  let arr1 = functions(new Foo()); // ['a', 'b']
  let arr2 = functions(new Foo(), true); // ['a', 'b', 'c']

  console.log(arr1,arr2);