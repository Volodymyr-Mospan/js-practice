'use strict';

//  ----------------------------------------------------------------------------------------------

// Example 1 - Деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function calcBMI({ weight, height }) {
//     const numericWeight = Number(weight.replace(',', '.'));
//     const numericHeight = Number(height.replace(',', '.'));
//     return Number((numericWeight / numericHeight ** 2).toFixed(1));
// }

// // Було
// // console.log(calcBMI('88,3', '1.75'));
// // console.log(calcBMI('68,3', '1.65'));
// // console.log(calcBMI('118,3', '1.95'));

// // Очікується
// console.log(
//     calcBMI({
//         weight: '88,3',
//         height: '1.75',
//     })
// );
// console.log(
//     calcBMI({
//         weight: '68,3',
//         height: '1.65',
//     })
// );
// console.log(
//     calcBMI({
//         weight: '118,3',
//         height: '1.95',
//     })
// );

//  ----------------------------------------------------------------------------------------------

//  ----------------------------------------------------------------------------------------------

// Example 2 - Деструктуризація

// Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function printContactsInfo({ names, phones }) {
//     const nameList = names.split(',');
//     const phoneList = phones.split(',');

//     nameList.forEach((element, i) => console.log(`${element}: ${phoneList[i]}`));
// }

// // Було
// // printContactsInfo(
// //   'Jacob,William,Solomon,Artemis',
// //   '89001234567,89001112233,890055566377,890055566300',
// // );

// // Очікується
// printContactsInfo({
//     names: 'Jacob,William,Solomon,Artemis',
//     phones: '89001234567,89001112233,890055566377,890055566300',
// });

//  ----------------------------------------------------------------------------------------------

//  ----------------------------------------------------------------------------------------------

// Example 3 - Глибока деструктуризація
// // Перепиши функцію так, щоб вона приймала один об'єкт параметрів замість набору незалежних аргументів.

// function getBotReport({ companyName, bots: { repair, defence } }) {
//     return `${companyName} has ${repair + defence} bots in stock`;
// }

// // // // Було
// // // // console.log(getBotReport('Cyberdyne Systems', 150, 50));

// // // Очікується
// console.log(
//     getBotReport({
//         companyName: 'Cyberdyne Systems',
//         bots: {
//             repair: 150,
//             defence: 50,
//         },
//     })
// ); // "Cyberdyne Systems has 200 bots in stock"

//  ----------------------------------------------------------------------------------------------

//  ----------------------------------------------------------------------------------------------

// Example 4 - Деструктуризація

// Напиши функцію так, щоб вона приймала об'єкт параметрів із властивостями companyName та stock та виводила
// репорт про кількість товарів на складі будь - якої компанії.

// Рішення

// function getStockReport({ companyName, stock }) {
//     const Stock = Object.values(stock).reduce((total, value) => total + value);
//     return `На складі компанії ${companyName} знаходиться ${Stock} товарів`;
// }

// Перевірка

// console.log(
//     getStockReport({
//         companyName: 'Cyberdyne Systems',
//         stock: {
//             repairBots: 150,
//             defenceBots: 50,
//         },
//     })
// ); // "Cyberdyne Systems has 200 items in stock"

// console.log(
//     getStockReport({
//         companyName: 'Belacci',
//         stock: {
//             shoes: 20,
//             skirts: 10,
//             hats: 5,
//         },
//     })
// ); // "Belacci has 35 item in stock"

//  ----------------------------------------------------------------------------------------------

//  ----------------------------------------------------------------------------------------------

// Example 5 - Операція spread

// Напиши функцію createContact(contact) так, щоб вона повертала новий об'єкт контакту з доданими
// властивостями id та createdAt, а також list зі значенням "default" якщо в contact немає такої властивості.

// Рішення
// const createContact = object => ({ id: generateId(), list: 'default', ...object });

// console.log(
//     createContact({
//         name: 'Mango',
//         email: 'mango@mail.com',
//         list: 'friends',
//     })
// );
// console.log(
//     createContact({
//         name: 'Poly',
//         email: 'poly@hotmail.com',
//     })
// );

// function generateId() {
//     return '_' + Math.random().toString().substring(2, 9);
// }

//  ----------------------------------------------------------------------------------------------

//  ----------------------------------------------------------------------------------------------

// Example 6 - Операція rest

// Напиши функцію transformUsername(user) так, щоб вона повертала новий об'єкт із властивістю fullName, замість firstName та lastName.

// // Рішення
// const transformId = ({ firstName, lastName, ...rest }) => ({
//     ...rest,
//     fullName: `${firstName} ${lastName} `,
// });
// // your code

// console.log(
//     transformId({
//         id: 1,
//         firstName: 'Jacob',
//         lastName: 'Mercer',
//         email: 'j.mercer@mail.com',
//         friendCount: 40,
//     })
// );

// console.log(
//     transformId({
//         id: 2,
//         firstName: 'Adrian',
//         lastName: 'Cross',
//         email: 'a.cross@hotmail.com',
//         friendCount: 20,
//     })
// );
