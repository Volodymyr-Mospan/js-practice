'use strict';

/**🌚Example 1 - Індекс маси тіла ----------------------------------------------------------------------------------------


Напиши функцію calcBMI(weight, height) яка розраховує та повертає індекс маси тіла.
Для цього необхідно розділити вагу в кілограмах на квадрат висоти людини в метрах.

Вес и высота будут специально переданы как строки.
Нецелые числа могут быть заданы в виде 24.7 или 24, 7, то есть в качестве разделителя дробной части может быть запятая.

Індекс маси тіла необхідно округлити до однієї цифри після коми; 
// */

// function calcBMI(weight, height) {
//     if (weight.includes(',')) {
//         weight = weight.replace(',', '.');
//     }

//     if (height.includes(',')) {
//         height = height.replace(',', '.');
//     }

//     return (weight / Math.pow(height, 2)).toFixed(1);
// }

// const bmi = calcBMI('88,3', '1.75');

// console.log(bmi); // 28.8

/**
 * 🌒Example 2 - Найменше з чисел ----------------------------------------------------------------------------------------
 *
 *
 * Напиши функцію min(a,b), яка повертає менше з чисел a та b.
 */

// console.log(min(2, 5)); // 2
// console.log(min(3, -1)); // -1
// console.log(min(1, 1)); //

// // function min(a, b) {
// //   return Math.min(a, b);
// // }

// function min(a, b) {
//     return a < b ? a : b;
// }

/**
 * 🌓Example 3 - Площа прямокутника ----------------------------------------------------------------------------------------
 *
 *
 * Напиши функцію getRectArea(dimensions) для обчислення площі прямокутника зі сторонами,
 * значення яких будуть передані до параметра dimensions у вигляді рядки.
 * Значення гарантовано розділені пробілом.
 */

// function getRectArea(dimensions) {
//     dimensions = dimensions.split(' ');

//     const cathetus = dimensions[0] < dimensions[1] ? dimensions[0] : dimensions[1];
//     const hypotenuse = dimensions[0] > dimensions[1] ? dimensions[0] : dimensions[1];

//     return (cathetus * hypotenuse) / 2;
// }

// console.log(getRectArea('8 11'));

/**
 * 🌔Example 4 - Логування елементів ----------------------------------------------------------------------------------------
 *
 *
 * Напиши функцію logItems(items), яка отримує масив та використовує цикл for,
 * який для кожного елемента масиву буде виводити в консоль повідомлення у форматі <номер елемента> - <значення елемента>.
 * Нумерація елементів повинна починатися з 1.
 *
 * Наприклад для першого елемента масиву ['Mango', 'Poly', 'Ajax'] з індексом 0 буде виведено 1 – Mango, а для індексу 2 виведе 3 – Ajax
 */

// function logItems(items) {
//     for (let i = 0; i < items.length; i++) {
//         console.log(`${i + 1} - ${items[i]}`);
//     }
// }

// logItems(['Mango', 'Poly', 'Ajax']);
// logItems(['🍎', '🍇', '🍑', '🍌', '🍋']);

/**
 * 🌕Example 5 - Логування контактів ----------------------------------------------------------------------------------------
 *
 *
 * Напиши функцію printContactsInfo(names, phones) яка виводить у консоль ім'я та телефонний номер користувача.
 * У параметри names та phones будуть передані рядки імен та телефонних номерів, розділені комами. Порядковий номер імен та телефонів у рядках вказують на відповідність.
 * Кількість імен та телефонів гарантовано однакове
 */

// function printContactsInfo(names, phones) {
//     if (names.includes(' ')) names = names.replaceAll(' ', '');
//     names = names.split(',');

//     if (phones.includes(' ')) phones = phones.replaceAll(' ', '');
//     phones = phones.split(',');

//     for (const name of names) {
//         let i = 0;
//         console.log(`${name} - ${phones[i]}`);
//         i += 1;
//     }
// }

// printContactsInfo(
//     'Jacob, William, Solomon, Artemis',
//     '89001234567,89001112233,890055566377,890055566300'
// );

// /**
//  * 🌖Example 6 - Пошук найбільшого елемента ----------------------------------------------------------------------------------------
//  *
//  *
//  * Напиши функцію findLargestNumber(numbers) яка шукає найбільше число в масиві. *
//  */

// function findLargestNumber(numbers) {
//     let largestNumber = numbers[0];

//     for (let i = 0; i < numbers.length; i++) {
//         if (numbers[i] > largestNumber) {
//             largestNumber = numbers[i];
//         }
//     }
//     return largestNumber;
// }

// console.log(findLargestNumber([2, 17, 94, 1, 23, 37])); // 94
// console.log(findLargestNumber([49, 4, 7, 83, 12])); // 83

// /**
//  * 🌗Example 7 - Середнє значення ----------------------------------------------------------------------------------------
//  *
//  * Напишіть функцію calAverage() яка приймає довільну кількість аргументів і повертає їхнє середнє значення.
//  * Усі аргументи будуть лише числами.
//  */

// function calAverage() {
//     let sum = 0;
//     for (const argument of arguments) {
//         sum += argument;
//     }

//     return sum / arguments.length;
// }

// console.log(calAverage(1, 2, 3, 4)); // 2.5
// console.log(calAverage(14, 8, 2)); // 8
// console.log(calAverage(27, 43, 2, 8, 36)); // 23.2

// /**
//  * 🌘Example 8 - Форматування часу ----------------------------------------------------------------------------------------
//  *
//  *
//  * Напиши функцію formatTime(minutes) яка переведе значення minutes (кількість хвилин) у рядок у форматі годин та хвилин HH:MM.
//  */

// console.log(typeof []);
