'use strict';

/**
 * Модуль 3.
 *
 * Example 1. Об'єкти ------------------------------------------------------------------------------
 *
 *
 * Напиши скрипт, який для об'єкта user, послідовно:
 *
 * додає поле mood зі значенням 'happy'
 * замінює значення hobby на 'skydiving'
 * замінює значення premium на false
 * виводить вміст об'єкта user у форматі ключ:значення використовуючи Object.keys() та for...of
 *
 * Код:
//  */

// const user = {
//     name: 'Mango',
//     age: 20,
//     hobby: 'html',
//     premium: true,
// };

// function changingUserStatus(user) {
//     user.mood = 'hepy';
//     // console.log(user);

//     user.hobby = 'skydiving';
//     // console.log(user);

//     user.premium = false;
//     // console.log(user);

//     for (const key of Object.keys(user)) {
//         console.log(`${key}: ${user[key]}`);
//     }
// }

// changingUserStatus(user);

/**
 * Example 2 - метод Object.values() ------------------------------------------------------------------------------
 *
 *
 * У нас є об'єкт, де зберігаються зарплати нашої команди.
 * Напишіть код для підсумовування всіх зарплат і збережіть результат у змінній sum.
 * Повинно вийти 390. Якщо об'єкт salaries порожній, то результат має бути 0.
 *
 * Код:
 */

// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };

// function getSumSalaries(salaries) {
//     let sumSalaries = 0;

//     for (const salari of Object.values(salaries)) {
//         sumSalaries += salari;
//     }

//     return sumSalaries;
// }

// console.log(getSumSalaries(salaries));

/**
 * Example 3 - Масив об'єктів ------------------------------------------------------------------------------
 *
 *
 * Напишіть функцію calcTotalPrice(stones, stoneName), яка приймає масив об'єктів та рядок з назвою каменю.
 * Функція рахує і повертає загальну вартість каміння з таким ім'ям, ціною та кількістю з об'єкта
 *
 * Код:
 */

// const stones = [
//     { name: 'Смарагд', price: 1300, quantity: 4 },
//     { name: 'Діамант', price: 2700, quantity: 3 },
//     { name: 'Сапфір', price: 400, quantity: 7 },
//     { name: 'Щебінь', price: 200, quantity: 2 },
// ];

// function calcTotalPrice(stones, stoneName) {
//     for (const { name, price, quantity } of stones) {
//         if (name === stoneName) {
//             return price * quantity;
//         }
//     }
// }

// console.log(calcTotalPrice(stones, 'Діамант'));

/**
 * Example 4 - Комплексні завдання ------------------------------------------------------------------------------
 *
 *
 * Напиши скрипт управління особистим кабінетом інтернет банку.
 * Є об'єкт account в якому необхідно реалізувати методи для роботи з балансом та історією транзакцій.
 *
 * Код:
 */

/*
 * Типів транзакцій всього два.
 * Можна покласти чи зняти гроші з рахунку.
 */
// const Transaction = {
//     DEPOSIT: 'deposit',
//     WITHDRAW: 'withdraw',
// };

// const { DEPOSIT, WITHDRAW } = Transaction;

// /*
//  * Кожна транзакція це об'єкт із властивостями: id, type та amount
//  */

// const account = {
//     // Поточний баланс рахунку
//     balance: 0,

//     // Історія транзакцій
//     transactions: [],

//     /*
//      * Метод створює та повертає об'єкт транзакції.
//      * Приймає суму та тип транзакції.
//      */
//     createTransaction(amount, type) {
//         return {
//             id: this.transactions.length + 1,
//             type,
//             amount,
//         };
//     },

//     /*
//      * Метод, що відповідає за додавання суми до балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій
//      */
//     deposit(amount) {
//         amount = Math.abs(amount);

//         this.balance += amount;

//         const newTransaction = this.createTransaction(amount, DEPOSIT);
//         this.transactions.push(newTransaction);
//     },

//     /*
//      * Метод, що відповідає за зняття суми з балансу.
//      * Приймає суму транзакції.
//      * Викликає createTransaction для створення об'єкта транзакції
//      * після чого додає його до історії транзакцій.
//      *
//      * Якщо amount більше ніж поточний баланс, виводь повідомлення
//      * про те, що зняття такої суми не можливе, недостатньо коштів.
//      */
//     withdraw(amount) {
//         if (this.balance < amount) {
//             console.log(`Зняття ${amount} не можливе, недостатньо коштів.`);
//             return `Зняття ${amount} не можливе, недостатньо коштів.`;
//         }

//         this.balance -= amount;

//         const newTransaction = this.createTransaction(amount, WITHDRAW);
//         this.transactions.push(newTransaction);
//     },

//     /*
//      * Метод повертає поточний баланс
//      */
//     getBalance() {
//         return this.balance;
//     },

//     /*
//      * Метод шукає та повертає об'єкт транзакції по id
//      */
//     getTransactionDetails(id) {
//         for (const transaction of this.transactions) {
//             if (transaction.id === id) {
//                 console.log(`Повертаємо: `, transaction);
//                 return transaction;
//             }
//         }
//         return 'Транзакція з таким номером відсутня';
//     },

//     /*
//      * Метод повертає кількість коштів
//      * певного типу транзакції з усієї історії транзакцій
//      */
//     getTransactionTotal(type) {
//         let sumByType = 0;

//         for (const transaction of this.transactions) {
//             if (transaction.type === type) {
//                 sumByType += transaction.amount;
//             }
//         }

//         return console.log(`Сума ${type} = ${sumByType}`, this.transactions);
//     },
// };

// account.deposit(512);

// account.deposit(128);

// account.withdraw(128);

// console.log(account.getTransactionDetails(8));

// account.getTransactionTotal(WITHDRAW);

// console.log(account.getBalance());
