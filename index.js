// logic and condition
// && || !
// var a = 100;
// var b = 20;
// if (a > b) {
//   console.log(a + " is grater than " + b);
// }
// var n = 16;

// if (n % 2 == 0) {
//   console.log(n + "is even number");
// }
// if (n % 2 == 1) {
//   console.log(n + "is odd number");
// }
// var n = 8;
// if (n % 2 == 0) {
//   console.log(n + " is even");
// } else {
//   console.log(n + "is odd");
// }
// var a = 20;
// var b = 20;
// if (a > b) {
//   console.log(a + "is greater than B");
// } else if (a < b) {
//   console.log(b + " is greater than a");
// } else {
//   console.log("They both are equal");
// }
// var n = 1;
// if (n == 0) {
//   console.log("please provide valid number");
// } else if (n % 2 == 0) {
//   console.log(n + " is even number");
// } else {
//   console.log(n + "is odd number");
// }

// var date = new Date();

// var today = date.getDay();

// if (date === 4) {
//   console.log("sunday");
// } else if (today === 1) {
//   console.log("Monday");
// } else if (today === 2) {
//   console.log("Wednesday");
// } else if (today === 3) {
//   console.log("Thursday");
// } else if (today === 4) {
//   console.log("Thursday");
// } else if (today === 5) {
//   console.log("friday");
// } else if (today === 6) {
//   console.log("Saturday");
// } else {
//   console.log("not a day");
// }
// var date = new Date();
// var today = date.getDay();

// switch (today) {
//   case 0:
//     console.log("Today is sunday");
//     break;
//   case 1:
//     console.log("Today is Monday");
//     break;
//   case 2:
//     console.log("Today is tuesday");
//     break;
//   case 3:
//     console.log("Today is wednesday");
//     break;
//   case 4:
//     console.log("Today is thursday");
//     break;
//   case 5:
//     console.log("Today is friday");
//     break;
//   case 6:
//     document.write(today);
//     break;
//   default:
//     console.log("Not a valid date");
// }
// var a = 30;
// var b = 20;
// var c = 30;
// var d = 10;
// if (!a > b && c > d) {
//   console.log("and operator");
// } else {
//   console.log("im not operator");
// }
// var check = !!(b > a);
// console.log(check);
// var n = 9;
// var str = "";
// if (n % 2 == 0) {
//   str = "Even";
// } else {
//   str = "odd";
// }

// var n = 6;
// var result = n % 2 == 0 ? "Even" : "Odd";
// console.log(result);

// var date = new Date();
// var today = date.getDay();
// // if (today  6) {
// //   console.log("hello");
// // }
// today == 6 ? "correct" : "false";
// var name = "";
// var fullName = "";
// if (name.length == 0) {

// } else {
//   fullName = name;
// }
//
// console.log(fullName);
// var isOk = true;
// if (isOk) {
//   console.log("im okay");
// }
// isOk && document.write("Im okay");
// loops
// for , while loop, do while loop,
// for (var i = 0; i < 10; i += 2) {

// }

// for (var i = 1; i <= 100; i++) {
//   if (i % 2 == 0) {
//     console.log(i + "even");
//   } else {
//     console.log(i + "odd");
//   }
// }
// var sum = 0;
// for (var i = 1; i <= 10; i++) {
//   console.log(sum + " + " + i + " = " + (sum + i));
//   sum += i;
// }
// console.log("result= " + sum);
// var sum = 0;
// for (var i = 10; i <= 20; i++) {
//   console.log(sum + " + " + i + " = " + (sum + i));
//   sum += i;
// }
// console.log("Result = " + sum);
// var sum = 0;
// for (var i = 1; i <= 10; i += 2) {
//   // if (i % 2 == 0) {
//   //   console.log("even");
//   // }
//   // console.log(sum + " + " + i + " = " + (sum + i));
//   sum += i;
//   console.log(i);
// }
// console.log("even number = " + sum);

// var odd = 0;
// for (var i = 1; i <= 10; i += 2) {
//   odd += i;
//   console.log(i);
// }
// var even = 0;
// for (var i = 1; i <= 10; i++) {
//   if (i % 2 == 0) {
//     even += i;
//     console.log(even + " + " + i + "=" + (even + i));
//   }

//   // console.log(even);
// }
// console.log("result= " + even);
// var i = 0;
// while (i < 10) {
//   console.log("mikat");
//   i++;
// }
// var isRunning = true;
// while (isRunning) {
//   var rand = Math.floor(Math.random() * 10 + 1);
//   if (rand == 9) {
//     console.log("winner");
//     isRunning = false;
//   } else {
//     console.log("you have got " + rand);
//   }
// }
// var isRun = false;

// while (isRun) {
//   console.log("im running");
// }
// do {

// } while (isRun);
// var n = 5;
// for (var i = 1; i <= n; i++) {
//   var result = "";
//   for (var j = 1; j <= i; j++) {
//     result += j + " ";
//   }
//   console.log(result);
// }
// var n = 1;
// for (var i = 1; i <= n; i++) {
//   var result = "";
//   for (var j = 1; j <= n; j++) {
//     result += " * ";
//   }
//   console.log(result);
// }

// for (var i = 1; i <= 10; i++) {
//   if (i == 3 || i == 7) {
//     continue;
//   } else {
//     console.log(i);
//   }
// }
// for (var i = 1; i <= 10; i++) {
//   if (i == 7) {
//     break;
//   } else {
//     console.log(i);
//   }
// }
// for (;;) {
//   var rand = Math.floor(Math.random() * 10 + 1);
//   if (rand == 9) {
//     console.log("winner");
//     break;
//   } else {
//     console.log("You have got " + rand);
//   }
// }
// var n = 10;
// var str = n.toString(n);
// var str = n + "";
// var str = String(n);
// var str = "This is a \fstring";
// console.log(str);
// var a = "abc";
// var b = "bcd";
// console.log(a > b);
// console.log("a  " > "A");

// console.log(c);
// console.log(c.charAt("0"));
// console.log(c.startsWith("I"));
// console.log(c.endsWith("t"));
// var d = c.substr(5, 5);
// // console.log(d);
// console.log(c.toUpperCase());
// console.log(c.toLowerCase());
// var e = "     hello     ";
// console.log(e.trim());
// console.log(c.split(" "));
// var str = "Some String";
// var length = 0;
// while (true) {
//   if (str.charAt(length) == "") {
//     break;
//   } else {
//     length++;
//   }
// }
// console.log(length);
// console.log(str.length);
// arr[5] = 6;
// arr[6] = 7;
// console.log(arr.length);
//  var array2= Array()
// for (var i = 0; i < arr.length; i++) {
//   // console.log(arr[i]);
//   arr[i] = arr[i] + 2;
// }
// console.log(arr);
// console.log(arr);
// var sum = 0;
// for (var i = 0; i < arr.length; i++) {
//   sum += arr[i];
// }
// console.log(sum);
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     console.log("even " + arr[i]);
//   }
// }
// var multi = 0;
// for (var i = 0; i < arr.length; i++) {
//   multi += arr[i];
// }
// console.log(multi);
// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 20];
// var a = Array.from(arr);
// console.log(a);
// a[0] = 100;

// console.log(arr.join(" , "));
// console.log(arr.fill(0));
// console.log(Array.isArray(arr));
// var arr2 = Array.from(arr);
// console.log(arr2);
// console.log(arr.reverse());
// for (var i = 0; i < arr.length / 2; i++) {
//   var temp = arr[i];
//   arr[i] = arr[arr.length - 1 - i];
//   arr[arr.length - 1 - i] = temp;
// }
// console.log(arr);
// arr[3] = 10;
// arr.splice(3, 0, 10);//insert methods and removes and update
// arr.splice(3, 1, 45);
// console.log(arr);
// var find = 20;
// var isFound = false;
// for (var i = 0; i < arr.length; i++) {
//   if (arr[i] == find) {
//     console.log("Data found and it index " + i);
//     isFound = true;
//     break;
//   }
// }
// if (!isFound) {
//   console.log("Data Not Found");
// }
// var newArr = [
//   [40, 70, 80, 87],
//   [60, 80, 50, 86],
//   [80, 50, 40, 86],
// ];
// console.log(newArr[0][0]);
// console.log(newArr[1][1]);
// console.log(newArr[2][2]);
// for (var i = 0; i < newArr.length; i++) {
//   // console.log(newArr[i]);
//   for (var j = 0; j < newArr[i].length; j++) {
//     console.log("Element " + i + ": " + newArr[i][j]);
//   }
// }
// for (var i = 0; i < newArr.length; i++) {
//   // console.log(newArr[i]);
//   for (var j = 0; j < newArr[i].length; j++) {
//     console.log("Element " + i + ": " + newArr[i][j]);
//   }
// }

let obj1 = {
  x: 10,
  y: 20,
  z: 100,
};
let obj2 = Object.assign({}, obj1);
// console.log(Object.keys(obj2));
// console.log(Object.values(obj2));
// console.log(Object.entries(obj2));

// var newObj = obj2;
// newObj.x = 100;
// console.log(newObj);
// for (var key in obj2) {
//   console.log(key);
//   console.log(obj2[key]);
// }

// for (var i in obj) {
//   console.log(i);
//   console.log(i + ": " + obj[i]);
// }
// console.log("z" in obj);
// let obj2 = {
//   x: 10,
//   y: 20,
//   z: 100,
// };
// console.log("x" in obj);

// console.log(obj);
// console.log(JSON.stringify(obj) == JSON.stringify(obj2));

// console.log(obj === obj2);
// if (obj.x == obj2.x && obj.y == obj2.y) {
//   console.log(true);
// }

// cars.x = 150;
// cars.a = 25;
// console.log(cars.d);
// console.log(cars.x);
// console.log(cars.x + cars.y);
// console.log(cars["z"]);
// var show = "x";
// console.log(cars[show]);
// cars["x"] = 1000;
// console.log(cars);
// var prop = "z";
// cars[prop] = 55;
// console.log(cars);
// delete cars.a;
// console.log(cars);
// function name() {
//   console.log("I am a ");
// }
// name();
// for (var i = 0; i < 10; i++) {
//   name();
// }

// function add(a, b) {
//   var result = a + b;
//   console.log(result);
// }
// add(5, 5);
// add(10, 20);

// var arr1 = [1, 2, 3];
// var arr2 = [3, 9, 5, 100];
// var arr3 = [5, 10, 6];

// // var sum = 0;
// // for (var i = 0; i < arr1.length; i++) {
// //   sum += arr1[i];
// // }
// // console.log(sum);
// function sum(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   console.log(sum);
// }
// sum(arr1);
// sum(arr2);
// function test() {
//   console.log(arguments);
// }
// test(10, 20, 30);
// function addAll() {
//   var sum = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     sum += arguments[i];
//   }
//   return sum;
// }

// var a = addAll(50, 50, 20, 10, 30);
// function person(name, email) {
//   return {
//     name: name,
//     email: email,
//   };
// }
// var fun = person("mikat", "mikat@gmail.com");
// var addition = function (a, b) {
//   return a + b;
// };
// var newAdd = addition(5, 10);
// var anotherFun = addition;
// // setTimeout(function () {
// //   console.log("im a function");
// // }, 2000);
// function something(greet, name) {
//   function getFirstName() {
//     if (name) {
//       return name.split(" ")[0];
//     } else {
//       return " ";
//     }
//   }
//   var message = greet + " " + getFirstName();
//   console.log(message);
// }
// something("Good Morning", "mikat hossain");
// var a = "abc";
// // if (true) {
// //   console.log(a);
// // }
// // function x() {
// //   //   var a = 200;
// //   function y() {
// //     // var a = 10;
// //     console.log(a);
// //   }
// //   y();
// //   console.log(a);
// // }
// // x();
// function test(n) {
//   function a() {
//     return n % 3 == 0;
//   }
//   function b() {
//     return n % 5 == 0;
//   }
//   if (a() && b()) {
//     console.log(n + " is  by both ");
//   } else {
//     console.log("not valid number");
//   }
// }
// test(15);
// function sqr(n) {
//   return n * n;
// }
// console.log(sqr(2));
// sqr(2);
// let point = {
//   x: 50,
//   y: 60,
// };
// function print(point) {
//   point.x = 500;
//   point.y = 600;
//   console.log(point);
// }
// print(point);
// console.log(point);

// function add(a, b) {
//   return a + b;
// }
// //  1. A function can be stored in a variable
// var sum = add;
// console.log(sum(5, 5));

// // 2. A Function can be stored in an Array
// var arr = [];
// arr.push(add);
// console.log(arr);
// console.log(arr[0](5, 5));
// // 3. A Function Can be stored in an Object
// var obj = {
//   sum: add,
// };
// console.log(obj.sum(2, 5));
// // 4. We can Create Function as need
// setTimeout(function () {
//   console.log("i have created");
// }, 1000);
// // 5. We can Pass Function as an Arguments
// // 6. we can return Functions from Another Function
// function sum(a, b) {
//   return a + b;
// }
// function manipulate(a, b, sum) {
//   var addition = a + b;
//   var sub = a - b;

//   return function () {
//     var multi = sum(a, b);

//     return addition * sub * multi;
//   };
// }
// var result = manipulate(3, 2, sum);
// console.log(result());
// var x = 10;
// function a() {
//   var x = 5;
//   function hello() {
//     var z = 5;
//     console.log(x + z);
//   }
//   hello();
// }
// var abc = a();
// console.log(abc);
// function sample(a, b, cb) {
//   var c = a + b;
//   var d = a - b;

//   var result = cb(c, d);
//   return result;
// }

// function sum(a, b) {
//   return a + b;
// }
// function multiply(a, b) {
//   return a * b;
// }
// console.log(sample(5, 5, multiply));
// var result2 = sample(9, 8, function (c, d) {
//   return c - d;
// });
// console.log(result2);

// const getVar = (callback) => {
//   setTimeout(function () {
//     console.log("this function takes some times");
//     callback();
//   }, 3000);
// };
// const printSome = () => {
//   console.log("Another Function");
// };
// getVar(printSome);
// var arr = [1, 2, 3, 4, 5, 6, 8];

// var sum = 0;
// arr.forEach(function (value, index, arr) {
//   //   console.log(value, index, arr);
//   sum += value;
// });
// // console.log(sum);
// function forEach(arr, cb) {
//   for (var i = 0; i < arr.length; i++) {
//     // console.log(arr[i]);
//     cb(arr[i], i, arr);
//   }
// }
// var add = 0;
// forEach(arr, function (value, index, arr) {
//   console.log(value, index, arr);
//   add += value;
// });
// console.log(add);
// forEach(arr, function (value, index, arr) {
//   arr[index] = value + 5;
// });
// console.log(arr);
// var arr = [1, 2, 3];
// var sqr = arr.map(function (value) {
//   //   return Math.random() * 100;
//   return value * value;
// });
// console.log(arr);
// console.log(sqr);

// function myMap(arr, cb) {
//   var newArr = [];
//   for (var i = 0; i < arr.length; i++) {
//     var temp = cb(arr[i], i, arr);
//     newArr.push(temp);
//   }
//   return newArr;
// }
// // console.log(arr);
// // console.log(myMap(arr));
// var qb = myMap(arr, function (value) {
//   return value * value * value;
// });
// console.log(qb);
// var mten = myMap(arr, function (value) {
//   return value * 2;
// });
// console.log(mten);
// var newArr = arr.filter(function (value) {
//   return value < 7;
// });
// console.log(newArr);

// function myReduce(arr, cb, acc) {
//   for (var i = 0; i < arr.length; i++) {
//     acc = cb(acc, arr[i]);
//   }
//   return acc;
// }
// var sum = myReduce(
//   arr,
//   function (prev, curr) {
//     return prev + curr;
//   },
//   0
// );
// console.log(sum);
// var max = myReduce(
//   arr,
//   function (prev, curr) {
//     return Math.max(prev, curr);
//   },
//   0
// );
// console.log(max);
// var min = myReduce(
//   arr,
//   function (prev, curr) {
//     return Math.min(prev, curr);
//   },
//   arr[0]
// );
// console.log(min);
// var sum = arr.reduce(function (prev, curr) {
//   return prev + curr;
// });
// console.log(sum);
// function myFilter(arr, cb) {
//   var array = [];
//   for (var i = 0; i < arr.length; i++) {
//     if (cb(arr[i], i, arr)) {
//       array.push(arr[i]);
//     }
//   }
//   return array;
// }
// // console.log(myFilter(arr));
// var filter = myFilter(arr, function (value) {
//   return value % 2 == 0;
// });
// console.log(filter);
// var result = arr.find(function (value) {
//   return value == 9;
// });
// console.log(result);
// var a = arr.findIndex(function (value) {
//   return value == 9;
// });
// console.log(a);
// function myFind(arr, cb) {
//   for (var i = 0; i < arr.length; i++) {
//     if (cb(arr[i])) {
//       return i;
//     }
//   }
// }
// var z = myFind(arr, function (value) {
//   return value == 9;
// });
// console.log(z);

// // arr.sort();

// arr.sort(function (a, b) {
//   if (a > b) {
//     return -1;
//   } else if (a < b) {
//     return 1;
//   } else {
//     return 0;
//   }
// });

// var obj = [
//   {
//     name: "korim",
//     age: 29,
//   },
//   {
//     name: "mikat",
//     age: 26,
//   },
// ];
// console.log(obj);
// obj.sort();
function greet(msg) {
  function greetings(name) {
    return msg + " , " + name + "!";
  }
  return greetings;
}
var gm = greet("Good Morning");
var fullmsg = gm("Mikat");
console.log(fullmsg);

function base(b) {
  return function (n) {
    var result = 1;
    for (var i = 0; i < b; i++) {
      result *= n;
    }
    return result;
  };
}

function print(a) {
  console.log(a);
}

function multiplyByFive(n) {
  return n * 5;
}

function add(a, b) {
  return a + b;
}

print(multiplyByFive(add(5, 3)));
