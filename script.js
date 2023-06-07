// == 1 ==

// function checkAge(age) {
//   if (age > 18) {
//     return console.log('pryvit mozhesh zajty');
//   } else {
//     return confirm('Батьки дозволили?');
//   }
// }
// checkAge(2);

// == 2 ==
// let tryToFindLess = function (a, b) {
//   if (a < b) {
//     console.log(`menshe chyslo a ${a}`);
//   } else {
//     console.log(`menshe chyslo b ${b}`);
//   }
// };
// tryToFindLess(2233, 444);

// == 3 ==

const ask = (question, yes, no) => {
  if (confirm(question)) yes();
  else no();
};
ask(
  'Ви згодні?',
  () => {
    alert('Ви погодились.');
  },
  () => {
    alert('Ви скасували виконання.');
  },
);

