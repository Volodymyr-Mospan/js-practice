'use strict';

// let i = 0;

// while (i <= 5) {
//   console.log(i++);
//   //   i += 1;
// }

// do {
//   console.log(i++);
// } while (i <= 5);

// for (i = 1; i <= 5; ) {
//   console.log(i++);
// }

// while (i) {
//   console.log(i);
//   i--;
// }

// while (i < 3) {
//   console.log(`Число: ${i}`);
//   i += 1;
// }

// firstFor: for (let num = 0; num < 2; num++) {
//   for (let size = 0; size < 3; size++) {
//     console.log(size);
//     if (size == 1) break firstFor;
//   }
// }

// function showName() {
//   console.log('Василь!');
// }
// setTimeout(showName, 0);
// console.log('Колян!');

// let showMessage;

// if (2 > 1) {
//   showMessage = function () {
//     console.log('Повідомлення');
//   };
// }
// showMessage();

// console.log('2' + '2' * '2');

// function countProps(object) {
//     let propCount = 0;
//     // Change code below this line
//     for (const key in object) {
//         if (object.hasOwnProperty(key)) {
//             propCount += 1;
//         }
//     }
//     // Change code above this line
//     console.log(propCount);
//     return propCount;
// }

// countProps({ name: 'Mango', age: 2 });

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function getAllPropValues(propName) {
//     // Change code below this line

//     let allPropValues = [];

//     for (let product of products) {
//         if (Object.keys(product).includes(propName)) {
//             allPropValues += product[propName];
//         }
//     }

//     return allPropValues;
//     // Change code above this line
// }

// console.log(getAllPropValues('quantity'));

// const products = [
//     { name: 'Radar', price: 1300, quantity: 4 },
//     { name: 'Scanner', price: 2700, quantity: 3 },
//     { name: 'Droid', price: 400, quantity: 7 },
//     { name: 'Grip', price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//     // Change code below this line
//     let totalPrice = 0;

//     for (let product of products) {
//         if (product.name === productName) {
//             totalPrice = product.price * product.quantity;
//         }
//     }

//     return totalPrice;
//     // Change code above this line
// }

// console.log(calculateTotalPrice('Droid'));

// -----------------------------------------------------------------------------------------------------------------------

// Задача 1

// const userInfo = {
//     name: 'Vasia',
//     age: 30,
// };

// Задача 2

// let userInfo = {
//     name: 'Vasia',
//     age: 30,
//     58: 'Значення властивості',
// };

// console.log(userInfo);

// Задача 3

// let userInfo = {
//     name: 'Vasia',
//     age: 30,
// };

// let user = userInfo;
// user.age = 45;

// console.log(userInfo.age);

// Задача 4

// let userInfo = {
//     name: 'Vasia',
//     age: 30,
//     showInfo() {
//         console.log(`${this.name}`);
//     },
// };

// let user = userInfo;
// userInfo = null;
// user.showInfo();

// Задача 5

// let userInfo = {
//     name: 'Vasia',
//     age: 30,
//     // showInfo() {
//     //     console.log(`${this.name}`);
//     // },
// };

// for (const key in userInfo) {
//     const value = userInfo[key];
//     console.log(value);
// }

// Задача 6

// let userInfo = {
//     name: 'Vasia',
//     age: 30,
//     address: { city: 'Uzgorod' },
// };

// for (const key in userInfo.address) {
//     const value = userInfo.address[key];
//     console.log(value);
// }

// Задача 7

// let userInfo = {
//     name: 'Vasia',
//     age: 30,
//     'like js': true,
// };

//     console.log(userInfo.'like js');

// Задача 8

// const inputName = 'color';
// const inputValure = 'tomato';

// const userInfo = {
//     [inputName]: inputValure,
// };

// userInfo.name = 'Vasia';
// userInfo.age = 30;
// userInfo.name = 'Lena';

// // console.log(userInfo[inputName]);

// for (const key in userInfo) {
//     console.log(key, userInfo[key]);
// }

// delete userInfo.age;

// console.log({ a: 1 } === { a: 1 });

// =========================================================================================================

// // Задача 1

// let numOne = Math.round((1.005 + Number.EPSILON) * 100) / 100;
// console.log(numOne);

// // Задача 2

// let value2 = '135.58px';
// console.log(Number.parseFloat(value2));

// // Задача 3

// let value3 = 58 + 'Фрілансер';
// if (Number.isNaN(Number(value3))) {
//     console.log('Результат виразу Nan');
// }

// // Задача 4

// console.log(Math.max(10, 58, 39, -150, 0));

// // Задача 5

// console.log(Math.floor(58.858));

// =========================================================================================================

// // Задача 1

// let fls = 'Фрілансер';
// let text1 = `Привіт! Я ${fls}`;
// console.log(text1);

// // Задача 2

// function findSymbolInText(symbol, text) {
//     return text.slice(text.indexOf(symbol), text.indexOf(symbol) + symbol.length);
// }

// console.log(findSymbolInText('н', fls));

// // Задача 3

// let text3 = 123 + '456';

// console.log(text3);

// // Задача 4

// console.log(fls.toUpperCase());

// // Задача 5

// console.log(findSymbolInText('лан', fls));

// // Задача 6

// console.log(fls.includes('лан', 4));
