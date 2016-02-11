# nikitajs
# Уроки по javaScript с моим учителем Владимиром Шевчук

1. Homework: merge arrays
https://jsfiddle.net/100lp/4a1qo24q/1/

2. Homework: myMap
https://jsfiddle.net/100lp/mq460b56/

3. Objects Homework

Выведите в консоль содержимое полей объекта obj, указаных в объекте mask. Следующими способами:

используя цикл;
без использования цикла ;
var obj = { test1: {a: 1, b: 5, c: -12}, test2: {i: 12, x: 18} }; var mask = { test1: 'b', test2: 'x' };

var obj = { test1: {a: 1, b: 5, c: -12}, test2: {i: 12, x: 18} };
var mask = { test1: 'b', test2: 'x' };

var result;

for (var key in obj) {
  result = obj[key][mask[key]];
  console.log(key + ": " + result);
};

console.log(obj.test1[mask.test1]);
console.log(obj.test2[mask.test2]);


Создайте функцию isEmpty(obj), которая возвращает true, если в объекте нет свойств и false – если хоть одно свойство есть. (https://learn.javascript.ru/object-for-in)

function isEmpty(obj) {
  var counter = 0;

  for (var key in obj) {
    counter++;
  }

  return counter === 0;
}

var obj1 = {};
var obj2 = { test1: 'b', test2: 'x' };

console.log(isEmpty(obj1));
console.log(isEmpty(obj2));


Создайте функцию multiplyNumeric, которая получает объект и умножает все численные свойства на 2. (https://learn.javascript.ru/object-for-in)

function multiplyNumeric(obj) {
  for (var key in obj) {
    if (typeof obj[key] === "number") {
      console.log(obj[key] * 2);
    } else {
      console.log("Is not a number");
    };
  };
  return "why i have to return something?";
};

var obj = {test1: 7, test2: 4, test3: "6", test4: []};

console.log(multiplyNumeric(obj));


