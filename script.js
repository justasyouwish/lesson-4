// функції

// function showMessage(name, city) {
//   console.log('hello, my name is ' + name + ' im from ' + city);
// }

// showMessage('dmytro', 'vinnytsia');
// showMessage('olia', 'brest');

// глобальна змінна + поєднання з локальною
// const userName = "Olia"

// const sayhi = function () {
//   let message = 'Hello, my name is ';
//   console.log(message + userName);
// };
// sayhi();

// повернення значень функціЇ
// function sum(a, b) {
//   return a + b;
// }
// let result = sum(7, 8);
// console.log(result);

// const testFunction = function (a, b) {
//   console.log('a :', a);
//   console.log('b :', b);
// };
// testFunction(2, 3);

// порядок виконяння коду
// const a = function () {
//   c();
//   console.log('function a');
//   b();
// };

// const b = function () {
//   console.log('function b');
// };

// const c = function () {
//   console.log('function c');
// };
// a();

// аргументи (робимо массив)
// const addName = function () {
//   const arg = Array.from(arguments);
//   console.log(arguments);
//   console.log(arg);
// };
// addName(1, 5, 7);

// оператора rest розпиляє на массиви
// const addName = function (...arg) {
//   console.log(arg);
// };
// addName(1, 5, 7);
// addName(22, 33, 22, 223);

// callback розбираємо функція яка буде виконана пізніше

// function ask(question, yes, no) {
//   if (confirm(question)) {
//     yes();
//   } else {
//     no();
//   }
// }
// function showOk() {
//   console.log('you said yes');
// }
// function showCancel() {
//   console.log('you said no');
// }
// ask("yes or no?", showOk, showCancel);

// function skilkyRokiv(pytannia, tak, ni) {
//   if (confirm(pytannia)) {
//     tak();
//   } else {
//     ni();
//   }
// }
// function showTak() {
//   console.log('tak, vash vik bilshe 30');
// }
// function showNi() {
//   console.log('ni, vash vik menshe 30');
// }

// skilkyRokiv('vash vik bilshe 30', showTak, showNi);

// highorderfunction функції які можуть в себе приймати або повертати як результат інші функції callback
// const hello = function (name) {
//   console.log(`Hello, ${name}`);
// };

// const searchName = function (callback) {
//   const name = 'dmytro';
//   callback(name);
// };
// searchName(hello);

// function checkAge(age) {
//   if (age > 18) {
//     return console.log('hello');
//   }
//   return console.log('goodbye');
// }
// checkAge(12);

// function showMovie(age) {
//   if (age < 21) {
//     return;
//   }
//   return console.log('go to movie');
// }
// showMovie(21);

// стрілочні функції
// const test = arg => {
//   console.log(arg);
// };
// test('hello mir');

// const showMovie = (age) => {
//   if (age > 21) {
//     return console.log('hello');
//   }
//   return console.log('ne pryvit');
// };
// showMovie(12);

// КОНТЕКСТИ І ВИКЛИКИ STEK

// const a = () => {
//   console.log('a');
// };
// const b = () => {
//   console.log('b');
// };
// const c = () => {
//   console.log('c');
//   a();
//   b();
// };
// c();

// // ПРАКТИКА
// console.log(document);

// const addNumber = (number) => {
//   let summ = Number(number) + 10;
//   return console.log(summ);
// };

// const numberRef = document.querySelector('input[name="number"]');

// const buttonRef = document.querySelector('button');

// console.log(buttonRef);

// buttonRef.addEventListener('click', () => addNumber(numberRef.value));
