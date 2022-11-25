'use strict';

// let myName = 0;
// console.log("558" > myName++);

// // Task 1---------------------------------------------------------------------------------------------------------

// // Выведи на экран общее количество яблок и винограда. Разницу яблок и винограда.

// const apples = 47;
// const grapes = 135;
// const total = apples + grapes;
// console.log("total", total);
// const diff = apples > grapes ? apples - grapes : grapes - apples;
// console.log("diff", diff);

// // Task 2---------------------------------------------------------------------------------------------------------

// // Замени выражение переопределения комбинированным оператором +=.

// let students = 100;
// students += 50;
// console.log("students:", students);

// // Task 3---------------------------------------------------------------------------------------------------------

// // Разбери приоритет операторов в инструкции присвоения значения переменной result.

// const result = 108 + 223 - 2 * 5;
// console.log("result", result);

// // Task 4---------------------------------------------------------------------------------------------------------

// // Напиши скрипт, который выводит в консоль округленные вверх/вниз и т.д.
// // значения переменной value.Используй методы Math.floor(), Math.ceil() и Math.round().
// // Проверь что будет в консоли при значениях 27.3 и 27.9.

// const value = 27.9;

// const valueFloor = Math.floor(value);
// console.log('valueFloor:', valueFloor);

// const valueCeil = Math.ceil(value);
// console.log('valueCeil:', valueCeil);

// const valueRound = Math.round(value);
// console.log('valueRound:', valueRound);

// // Task 5---------------------------------------------------------------------------------------------------------

// // Составь фразу с помощью шаблонных строк A has B bots in stock, где A, B - переменные вставленные в строку.

// const companyName = "Cyberdyne Systems";
// const repairBots = 150;
// const defenceBots = 50;
// const message = `Cyberdyne Systems has ${
//   repairBots + defenceBots
// } bots in stock`;
// console.log("message Task 5:", message); // "Cyberdyne Systems has 200 bots in stock"

// Task 6---------------------------------------------------------------------------------------------------------

// // Напиши скрипт который рассчитывает индекс массы тела человека.
// // Для этого необходимо разделить вес в киллограммах на квадрат высоты человека в метрах.

// // Вес и высота хранятся в переменных weight и height, но не как числа, а в виде строк (специально для задачи).
// // Нецелые числа могут быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.

// // Индекс массиы тела необходимо округлить до одной цифры после запятой;

// let weight = "88,876";
// let height = "1,75";

// // let corectWeight = weight;
// // let corectHeight = height;

// // // if (weight.includes(",")) {
// // //   corectWeight = weight.replace(",", ".");
// // // }

// // if (height.includes(",")) {
// //   corectHeight = height.replace(",", ".");
// // }

// let corectWeight = weight.includes(",") ? weight.replace(",", ".") : weight;
// let corectHeight = height.includes(",") ? height.replace(",", ".") : height;

// const bmi = (corectWeight / Math.pow(corectHeight, 2)).toFixed(2);
// console.log("bmi:", bmi); // 28.8

// Task 7---------------------------------------------------------------------------------------------------------

// Каким будет результат выражений?

// console.log(5 > 4);

// console.log(10 >= '7');

// console.log('2' > '12');

// console.log('2' < '12');

// console.log('4' == 4);

// console.log('6' === 6);

// console.log('false' === false);

// console.log(1 == true);

// console.log(1 === true);

// console.log('0' == false);

// console.log('0' === false);

// console.log('Papaya' < 'papaya');

// console.log('Papaya' === 'papaya');

// console.log(undefined == null);

// console.log(undefined === null);

// Task 8---------------------------------------------------------------------------------------------------------

// Example 8 - Логические операторы
// Каким будет результат выражений?

// console.log(true && 3);

// console.log(false && 3);

// console.log(true && 4 && 'kiwi');

// console.log(true && 0 && 'kiwi');

// console.log(true || 3);

// console.log(true || 3 || 4);

// console.log(true || false || 7);

// console.log(null || 2 || undefined);

// console.log((1 && null && 2) > 0);

// console.log(null || (2 && 3) || 4);

// Task 9---------------------------------------------------------------------------------------------------------

// Example 9 - Значение по умолчанию и оператор нулевого слияния
// Отрефактори код так, чтобы в переменную value присваивалось значение переменной incomingValue, если оно не равно undefined или null.
// В противном случае должно присваиваться значение defaultValue.
// Проверь работу скрипта для слепдующих значений переменной incomingValue: null, undefined, 0, false.
// Используй оператор ?? (nullish coalescing operator).

// const incomingValue = false;
// const defaultValue = 10;
// const value = incomingValue ?? defaultValue;
// console.log(value);

// Task 10---------------------------------------------------------------------------------------------------------

// Example 10 - Опертор % и методы строк
// Напиши скрипт который переведёт значение totalMinutes (количество минут) в строку в формате часов и минут HH:MM.

// 70 покажет 01:10
// 450 покажет 07:30
// 1441 покажет 24:01
// const totalMinutes = 70;

// const hours = Math.floor(totalMinutes / 60);
// const minutes = totalMinutes % 60;
// console.log(hours);
// console.log(minutes);

// const doubleDigitHours = String(hours).padStart(2, 0);
// const doubleDigitMinutes = String(minutes).padStart(2, 0);
// console.log(`${doubleDigitHours}:${doubleDigitMinutes}`);

// // Auto-2/3---------------------------------------------------------------------------------------------------------

// function checkStorage(available, ordered) {
//   // Change code below this line

//   if (ordered === 0) {
//     return "Your order is empty!";
//   }
//   if (ordered > available) {
//     return "Your order is too large, not enough goods in stock!";
//   }
//   return "The order is accepted, our manager will contact you";

//   // Change code above this line
// }

// console.log(checkStorage(543, 243));

// // Auto-2/8---------------------------------------------------------------------------------------------------------

// const fruits = ["apple", "peach", "pear", "banana"];

// // Change code below this line

// const lastElementIndex = fruits.length - 1;
// const lastElement = fruits[fruits.length - 1];

// console.log(lastElementIndex);
// console.log(lastElement);

// // Auto-2/9---------------------------------------------------------------------------------------------------------

// function getExtremeElements(array) {
//   // Change code below this line

//   const extremeElements = [];

//   extremeElements.push(array[0]);
//   extremeElements.push(array[array.length - 1]);
//   return extremeElements;
//   // Change code above this line
// }

// console.log(getExtremeElements([1, 2, 3, 4, 5, 6, 7]));

// // Auto-2/11---------------------------------------------------------------------------------------------------------

// function calculateEngravingPrice(message, pricePerWord) {
//   // Change code below this line

//   return message.split(" ").length * pricePerWord;

//   // Change code above this line
// }

// console.log(calculateEngravingPrice("JavaScript is in my blood", 20));

// Auto-2/13---------------------------------------------------------------------------------------------------------

// function slugify(title) {
//   // Change code below this line
//   return title.toLowerCase().split(" ").join("-");

//   // Change code above this line
// }

// console.log(slugify("Arrays for begginers"));

// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   console.log(i);
// }

// Auto-2/18---------------------------------------------------------------------------------------------------------

// function calculateTotal(number) {
//   // Change code below this line

//   let sum = 0;
//   for (let i = 1; i <= number; i++) {
//     sum += i;
//   }
//   return sum;

//   // Change code above this line
// }

// console.log(calculateTotal(7));

// function makeTask(data) {
//     const completed = false;
//     const category = 'General';
//     const priority = 'Normal';
//     // Change code below this line
//     const newData = { completed, category, priority, ...data };

//     console.log(newData);

//     return newData;
//     // Change code above this line
// }

// makeTask({ category: 'Finance', text: 'Take interest' });

// // category = category, priority = priority,

// const bookShelf = {
//     books: ['The last kingdom', 'Haze', 'The guardian of dreams'],
//     updateBook(oldName, newName) {
//         // Change code below this line
//         const { books } = this;
//         console.log(books);

//         if (books.includes(oldName)) {
//             books.splice(books.indexOf(oldName), 1, newName);
//         }
//         console.log(books);

//         // Change code above this line
//     },
// };

// const atTheOldToad = {
//     potions: [
//         { name: 'Speed potion', price: 460 },
//         { name: 'Dragon breath', price: 780 },
//         { name: 'Stone skin', price: 520 },
//     ],
//     // Change code below this line
//     getPotions() {
//         return this.potions;
//     },

//     addPotion(newPotion) {
//         const { potions } = this;

//         for (let potion of potions) {
//             if (potion.name === newPotion.name) {
//                 return `Error! Potion ${newPotion.name} is already in your inventory!`;
//             }
//         }

//         potions.push(newPotion);
//     },

//     removePotion(potionName) {
//         const { potions } = this;

//         for (let i = 0; i < potions.length; i += 1) {
//             if (potions[i].name === potionName) {
//                 potions.splice(i, 1);
//             }
//         }

//         return `Potion ${potionName} is not in inventory!`;
//     },

//     updatePotionName(oldName, newName) {
//         const { potions } = this;

//         for (let i = 0; i < potions.length; i += 1) {
//             if (potions[i].name === oldName) {
//                 potions[i].name = newName;
//             }
//         }

//         return `Potion ${oldName} is not in inventory!`;
//     },
//     // Change code above this line
// };

// console.log(atTheOldToad.updatePotionName('Dragon breath', 'Polymorth'));

// console.table(atTheOldToad.potions);

// Object.values;

// const pizzaPalace = {
//     pizzas: ['Ultracheese', 'Smoked', 'Four meats'],
//     order(pizzaName, onSuccess, onError) {
//         if (this.pizzas.includes(pizzaName)) {
//             return onSuccess(pizzaName);
//         }
//         return onError(pizzaName);
//     },
// };
// // Change code above this line

// // Callback for onSuccess
// function makePizza(pizzaName) {
//     return `Your order is accepted. Cooking pizza ${pizzaName}.`;
// }

// // Callback for onError
// function onOrderError(pizzaName) {
//     return `There is no pizza with a name ${pizzaName} in the assortment.`;
// }

// // Method calls with callbacks
// pizzaPalace.order('Smoked', makePizza, onOrderError);
// pizzaPalace.order('Four meats', makePizza, onOrderError);
// pizzaPalace.order('Big Mike', makePizza, onOrderError);
// pizzaPalace.order('Vienna', makePizza, onOrderError);

// function filterArray(numbers, value) {
//     const filteredNumbers = [];
//     // Change code below this line

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] > value) {
//     //     filteredNumbers.push(numbers[i]);
//     //   }
//     // }

//     numbers.forEach(number => {
//         number > value ? filteredNumbers.push(number) : 'not';
//     });

//     // Change code above this line
//     return filteredNumbers;
// }

// console.log(filterArray([1, 2, 4, 5, 67, 12, 3], 2));

// function getCommonElements(firstArray, secondArray) {
//     const commonElements = [];
//     // Change code below this line

//     // for (let i = 0; i < firstArray.length; i += 1) {
//     //   if (secondArray.includes(firstArray[i])) {
//     //     commonElements.push(firstArray[i]);
//     //   }
//     // }

//     firstArray.forEach(elementFromFirstArray => {
//         if (secondArray.includes(elementFromFirstArray)) commonElements.push(elementFromFirstArray);
//     });

//     return commonElements;
//     // Change code above this line
// }

// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19]));

// const filterArray = (numbers, value) => {
//     const filteredNumbers = [];

//     numbers.forEach(number => {
//         if (number > value) filteredNumbers.push(number);
//     });

//     // Change code above this line
//     return filteredNumbers;
// };

// console.log(filterArray([12, 24, 8, 41, 76], 20));

// function changeEven(numbers, value) {
//     // Change code below this line
//     const newArray = [];

//     // for (let i = 0; i < numbers.length; i += 1) {
//     //   if (numbers[i] % 2 === 0) {
//     //     numbers[i] = numbers[i] + value;
//     //   }
//     // }

//     // numbers.forEach(number => {
//     //     if (number % 2 === 0) newArray.push(number + value);
//     // });

//     numbers.forEach(number =>
//         number % 2 === 0 ? newArray.push(number + value) : newArray.push(number)
//     );

//     return newArray;

//     // Change code above this line
// }

// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

// const players = [
//     { name: 'Mango', playtime: 1270, gamesPlayed: 4 },
//     { name: 'Poly', playtime: 469, gamesPlayed: 2 },
//     { name: 'Ajax', playtime: 690, gamesPlayed: 3 },
//     { name: 'Kiwi', playtime: 241, gamesPlayed: 1 },
// ];
// // Change code below this line

// const totalAveragePlaytimePerGame = players.reduce(
//     (total, { playtime, gamesPlayed }) => total + playtime / gamesPlayed,
//     0
// );

// console.log(totalAveragePlaytimePerGame);

// const getNamesSortedByFriendCount = users =>
//     [...users]
//         .sort((firstUser, secondUser) => firstUser.friends.length - secondUser.friends.length)
//         .map(user => user.name);

// console.log(
//     getNamesSortedByFriendCount([
//         {
//             name: 'Moore Hensley',
//             email: 'moorehensley@indexia.com',
//             eyeColor: 'blue',
//             friends: ['Sharron Pace'],
//             isActive: false,
//             balance: 2811,
//             gender: 'male',
//         },
//         {
//             name: 'Sharlene Bush',
//             email: 'sharlenebush@tubesys.com',
//             eyeColor: 'blue',
//             friends: ['Briana Decker', 'Sharron Pace'],
//             isActive: true,
//             balance: 3821,
//             gender: 'female',
//         },
//         {
//             name: 'Ross Vazquez',
//             email: 'rossvazquez@xinware.com',
//             eyeColor: 'green',
//             friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//             isActive: false,
//             balance: 3793,
//             gender: 'male',
//         },
//         {
//             name: 'Elma Head',
//             email: 'elmahead@omatom.com',
//             eyeColor: 'green',
//             friends: ['Goldie Gentry', 'Aisha Tran'],
//             isActive: true,
//             balance: 2278,
//             gender: 'female',
//         },
//         {
//             name: 'Carey Barr',
//             email: 'careybarr@nurali.com',
//             eyeColor: 'blue',
//             friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//             isActive: true,
//             balance: 3951,
//             gender: 'male',
//         },
//         {
//             name: 'Blackburn Dotson',
//             email: 'blackburndotson@furnigeer.com',
//             eyeColor: 'brown',
//             friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//             isActive: false,
//             balance: 1498,
//             gender: 'male',
//         },
//         {
//             name: 'Sheree Anthony',
//             email: 'shereeanthony@kog.com',
//             eyeColor: 'brown',
//             friends: ['Goldie Gentry', 'Briana Decker'],
//             isActive: true,
//             balance: 2764,
//             gender: 'female',
//         },
//     ])
// );

// // Change code below this line
// const getTotalBalanceByGender = (users, gender) =>
//     users.reduce((total, user) => (user.gender === gender ? total + user.balance : total), 0);
// // Change code above this line

// console.log(
//     getTotalBalanceByGender(
//         [
//             {
//                 name: 'Moore Hensley',
//                 email: 'moorehensley@indexia.com',
//                 eyeColor: 'blue',
//                 friends: ['Sharron Pace'],
//                 isActive: false,
//                 balance: 2811,
//                 gender: 'male',
//             },
//             {
//                 name: 'Sharlene Bush',
//                 email: 'sharlenebush@tubesys.com',
//                 eyeColor: 'blue',
//                 friends: ['Briana Decker', 'Sharron Pace'],
//                 isActive: true,
//                 balance: 3821,
//                 gender: 'female',
//             },
//             {
//                 name: 'Ross Vazquez',
//                 email: 'rossvazquez@xinware.com',
//                 eyeColor: 'green',
//                 friends: ['Marilyn Mcintosh', 'Padilla Garrison', 'Naomi Buckner'],
//                 isActive: false,
//                 balance: 3793,
//                 gender: 'male',
//             },
//             {
//                 name: 'Elma Head',
//                 email: 'elmahead@omatom.com',
//                 eyeColor: 'green',
//                 friends: ['Goldie Gentry', 'Aisha Tran'],
//                 isActive: true,
//                 balance: 2278,
//                 gender: 'female',
//             },
//             {
//                 name: 'Carey Barr',
//                 email: 'careybarr@nurali.com',
//                 eyeColor: 'blue',
//                 friends: ['Jordan Sampson', 'Eddie Strong', 'Adrian Cross'],
//                 isActive: true,
//                 balance: 3951,
//                 gender: 'male',
//             },
//             {
//                 name: 'Blackburn Dotson',
//                 email: 'blackburndotson@furnigeer.com',
//                 eyeColor: 'brown',
//                 friends: ['Jacklyn Lucas', 'Linda Chapman', 'Adrian Cross', 'Solomon Fokes'],
//                 isActive: false,
//                 balance: 1498,
//                 gender: 'male',
//             },
//             {
//                 name: 'Sheree Anthony',
//                 email: 'shereeanthony@kog.com',
//                 eyeColor: 'brown',
//                 friends: ['Goldie Gentry', 'Briana Decker'],
//                 isActive: true,
//                 balance: 2764,
//                 gender: 'female',
//             },
//         ],
//         'female'
//     )
// );

// ---------------------------------------------------------------------------------------

// class Car {
//     // Change code below this line
//     #brand;
//     #model;
//     #price;

//     constructor({ brand, model, price }) {
//         this.#brand = brand;
//         this.#model = model;
//         this.#price = price;
//     }

//     // getBrand() {
//     //   return this.#brand;
//     // }

//     get brand() {
//         return this.#brand;
//     }

//     changeBrand(newBrand) {
//         this.#brand = newBrand;
//     }

//     // getModel() {
//     //   return this.#model;
//     // }

//     get model() {
//         return this.#model;
//     }

//     updateModel(newModel) {
//         this.#model = newModel;
//     }

//     // getPrice() {
//     //   return this.#price;
//     // }

//     get price() {
//         return this.#price;
//     }

//     setPrice(newPrice) {
//         this.#price = newPrice;
//     }
//     // Change code above this line
// }

// ------------------------------------------------------------------------------------------

// class User {
//     constructor(email) {
//         this.email = email;
//     }

//     get email() {
//         return this.email;
//     }

//     set email(newEmail) {
//         this.email = newEmail;
//     }
// }
// // Change code below this line

// class Admin extends User {
//     static AccessLevel = {
//         BASIC: 'basic',
//         SUPERUSER: 'superuser',
//     };

//     constructor(email) {
//         super(email);
//     }
// }

// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------

// Налаштування

// const recordCollection = {
//     2548: {
//         albumTitle: 'Slippery When Wet',
//         artist: 'Bon Jovi',
//         tracks: ['Let It Rock', 'You Give Love a Bad Name'],
//     },
//     2468: {
//         albumTitle: '1999',
//         artist: 'Prince',
//         tracks: ['1999', 'Little Red Corvette'],
//     },
//     1245: {
//         artist: 'Robert Palmer',
//         tracks: [],
//     },
//     5439: {
//         albumTitle: 'ABBA Gold',
//     },
// };

// Змініть код лише під цим рядком
// function updateRecords(records, id, prop, value) {
//     if (prop === 'tracks' && value !== '') {
//         if (records[id].tracks) {
//             records[id].tracks.push(value);
//             console.log(`Test:`, records[id].tracks);
//             return records;
//         } else {
//             records[id].tracks = [value];
//             console.log(records);

//             return records;
//         }
//         console.log(records);
//         return records;
//     } else if (prop !== 'tracks' && value !== '') {
//         records[id][prop] = value;
//         return records;
//     } else if (value === '') {
//         delete records[id][prop];
//         return records;
//     }

//     return records;
// }
// console.log(recordCollection);

// updateRecords(recordCollection, 5439, 'artist', 'ABBA');
// updateRecords(recordCollection, 5439, 'tracks', 'Take a Chance on Me');
// updateRecords(recordCollection, 2548, 'artist', '');
// updateRecords(recordCollection, 1245, 'tracks', 'Addicted to Love');
// updateRecords(recordCollection, 2468, 'tracks', 'Free');
// updateRecords(recordCollection, 2548, 'tracks', '');
// updateRecords(recordCollection, 1245, 'albumTitle', 'Riptide');

// console.log(recordCollection);

// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------

// function multiplyAll(arr) {
//     let product = 1;
//     // Змініть код лише під цим рядком
//     const newArray = arr.flatMap(el => el);
//     console.log(newArray);
//     for (let i = 0; i < newArray.length; i++) {
//         product *= newArray[1];
//         console.log(product);
//     }
//     // Змініть код лише над цим рядком
//     return product;
// }

// console.log(
//     multiplyAll([
//         [1, 2],
//         [3, 4],
//         [5, 6, 7],
//     ])
// );

// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------

// function sum(arr, n) {
//     // Змініть код лише під цим рядком
//     // const sum = 0;

//     if (n <= 0) {
//         return 0;
//     } else {
//         return sum(arr, n - 1) + arr[n - 1];
//     }

//     // Змініть код лише над цим рядком
// }

// console.log(sum([2, 3, 4, 5], 3));

// ------------------------------------------------------------------------------------------

// ------------------------------------------------------------------------------------------

// Налаштування
// const contacts = [
//     {
//         firstName: 'Akira',
//         lastName: 'Laine',
//         number: '0543236543',
//         likes: ['Pizza', 'Coding', 'Brownie Points'],
//     },
//     {
//         firstName: 'Harry',
//         lastName: 'Potter',
//         number: '0994372684',
//         likes: ['Hogwarts', 'Magic', 'Hagrid'],
//     },
//     {
//         firstName: 'Sherlock',
//         lastName: 'Holmes',
//         number: '0487345643',
//         likes: ['Intriguing Cases', 'Violin'],
//     },
//     {
//         firstName: 'Kristian',
//         lastName: 'Vos',
//         number: 'unknown',
//         likes: ['JavaScript', 'Gaming', 'Foxes'],
//     },
// ];

// function lookUpProfile(name, prop) {
//     // Змініть код лише під цим рядком
//     const varieble = contacts.find(contact => contact.firstName === name);
//     return varieble ? varieble[prop] || 'No such property' : 'No such contact';

//     // const varieble = contacts.find(contact => contact.firstName === name && contact[prop]);
//     // return varieble ? varieble[prop] : 'No such contact';

//     // Змініть код лише над цим рядком
// }

// console.log(lookUpProfile('Kristian', 'lastName'));
// console.log(lookUpProfile('Sherlock', 'likes'));
// console.log(lookUpProfile('Harry', 'likes'));
// console.log(lookUpProfile('Bob', 'number'));
// console.log(lookUpProfile('Bob', 'potato'));
// console.log(lookUpProfile('Akira', 'address'));

// console.log(Math.floor(Math.random() * (10 - 2 + 1)) + 2);

// console.log(Boolean(Number('0')));
