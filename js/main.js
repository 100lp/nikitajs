// Выведите в консоль содержимое полей объекта obj, указаных в объекте mask. Следующими способами:

// используя цикл;
// без использования цикла ;
// var obj = { test1: {a: 1, b: 5, c: -12}, test2: {i: 12, x: 18} }; var mask = { test1: 'b', test2: 'x' };

var obj = { test1: {a: 1, b: 5, c: -12}, test2: {i: 12, x: 18} };
var mask = { test1: 'b', test2: 'x' };

var result;

for (var key in obj) {
  result = obj[key][mask[key]];
  console.log(key + ": " + result);
};

console.log(obj.test1[mask.test1]);
console.log(obj.test2[mask.test2]);
