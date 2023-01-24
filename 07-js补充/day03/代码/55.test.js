function shallowClone(src) {
  return Array.isArray(src) ? [...src] : { ...src };
}
let arr1 = [1, 2, { a: 1 }];
let arr2 = shallowClone(arr1);
console.log(arr1, arr2, arr1[2] == arr2[2]);

