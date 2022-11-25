// Модуль 5. Заняття 9. Контекст виклику функції та this

// ===================================================================================================================

// ===================================================================================================================

// Example 1 - Майстерня коштовностей

// Напишіть метод calcTotalPrice(stoneName), який приймає назву каменю і розраховує та повертає
// загальну вартість каменів з таким ім'ям, ціною та кількістю з властивості stones.

// const chopShop = {
//     stones: [
//         { name: 'Emerald', price: 1300, quantity: 4 },
//         { name: 'Diamond', price: 2700, quantity: 3 },
//         { name: 'Sapphire', price: 1400, quantity: 7 },
//         { name: 'Ruby', price: 800, quantity: 2 },
//     ],
//     calcTotalPrice(stoneName) {
//         const stone = this.stones.find(stone => stone.name === stoneName);
//         return stone ? stone.price * stone.quantity : 'Error!!!';
//     },
// };

// console.log(chopShop.calcTotalPrice('Emerald')); // 5200
// console.log(chopShop.calcTotalPrice('Diamond')); // 8100
// console.log(chopShop.calcTotalPrice('Sapphire')); // 9800
// console.log(chopShop.calcTotalPrice('Ruby')); // 1600

// ===================================================================================================================

// ===================================================================================================================

// Example 2 - Телефонна книга

// Виконайте рефакторинг методів об'єкту phonebook щоб код запрацював.

// const phonebook = {
//     contacts: [],
//     add(contact) {
//         const newContact = {
//             list: 'default',
//             ...contact,
//             id: this.generateId(),
//             createdAt: this.getDate(),
//         };
//         this.contacts.push(newContact);

//         return this.contacts;
//     },
//     generateId() {
//         return '_' + Math.random().toString(36).substr(2, 9);
//     },
//     getDate() {
//         return Date.now();
//     },
// };

// console.log(
//     phonebook.add({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     })
// );
// console.log(
//     phonebook.add({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     })
// );

// ===================================================================================================================

// ===================================================================================================================

// Example 3 - Калькулятор

// Створіть об'єкт calculator з трьома методами:

// read(a, b)- приймає два значення та зберігає їх як властивості об'єкта.
// add() - повертає суму збережених значень.
// mult() - перемножує збережені значення та повертає результат.

// const calculator = {
//     a: 0,
//     b: 0,

//     read(a, b) {
//         this.a = a || this.a;
//         this.b = b ?? this.b;
//     },

//     add(a = this.a, b = this.b) {
//         this.read(a, b);
//         return this.a + this.b;
//     },

//     mult(a = this.a, b = this.b) {
//         this.read(a, b);
//         return this.a * this.b;
//     },

//     getValues() {
//         return `a = ${this.a}, b = ${this.b}`;
//     },
// };

// calculator.read();
// console.log(calculator.getValues());
// calculator.read(5, 10);
// console.log(calculator.getValues());
// console.log(calculator.add());
// console.log(calculator.mult());
// console.log(calculator.mult(10, 10));
// console.log(calculator.getValues());
// console.log(calculator.add());
// console.log(calculator.getValues());
