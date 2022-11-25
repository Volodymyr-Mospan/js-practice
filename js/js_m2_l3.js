// Example 1 - Базовые операции с массивом ---------------------------------------------------------

// Создайте массив genres с элементами «Jazz» и «Blues».
// Добавьте «Рок-н-ролл» в конец.
// Выведите в консоль первый элемент массива.
// Выведите в консоль последний элемент массива.
// Код должен работать для массива произвольной длины.
// Удалите первый элемент и выведите его в консоль.
// Вставьте «Country» и «Reggae» в начало массива.

// const genres = ['«Jazz»', '«Blues»'];
// genres.push('«Рок-н-ролл»');

// console.log(genres[0], genres[genres.length - 1]);
// console.log('Прибрали', genres.shift());
// genres.unshift('«Country»', '«Reggae»');
// console.log(genres);

// Example 2 - Массивы и строки ---------------------------------------------------------

// Напиши скрипт для вычисления площади прямоугольника со сторонами,
// значения которых хранятся в переменной values в виде строки.
// Значения гарантированно разделены пробелом.

// const values = '8 11';

// const valuesArray = values.split(' ');

// const areaRectangle = valuesArray[0] * valuesArray[1];

// console.log(areaRectangle, 'м2');

// Example 3 - Перебор массива ---------------------------------------------------------

// Напиши скрипт для перебора массива fruits циклом for.
// Для каждого элемента массива выведи в консоль строку в формате номер_элемента: значение_элемента.
// // Нумерация элементов должна начинаться с 1.

// const fruits = ['🍎', '🍇', '🍑', '🍌', '🍋'];

// // console.table(fruits);

// for (let i = 0; i < fruits.length; i++) {
//   console.log(i + 1 + ': ' + fruits[i]);
// }

// Example 4 - Массивы и циклы ---------------------------------------------------------

// Напиши скрипт который выводит в консоль имя и телефонный номер пользователя.
// В переменных names и phones хранятся строки имен и телефонных номеров, разделенные запятыми.
// Порядковый номер имен и телефонов в строках указывают на соответствие.
// Количество имен и телефонов гарантированно одинаковое.

// const names = ' Jacob, William, Solomon, Artemis';
// const phones = '89001234567, 89001112233, 890055566377,890055566300';

// const namesArray = names.split(',');
// const phonesArray = phones.split(',');

// for (let i = 0; i < namesArray.length; i++) {
//   if (namesArray[i].includes(' ') || phonesArray[i].includes(' ')) {
//     console.log(`${namesArray[i].replace(' ', '')} - ${phonesArray[i].replace(' ', '')}`);
//   } else {
//     console.log(`${namesArray[i]} - ${phonesArray[i]}`);
//   }
// }

// Example 5 - Массивы и строки ---------------------------------------------------------

// Напиши скрипт который выводит в консоль все слова строки кроме первого и последнего.
// Результирующая строка не должна начинаться или заканчиваться пробельным символом.
// Скрипт должен работать для любой строки.

// const string = 'Welcome to the future';

// const words = string.split(' ');
// const newString = words.slice(1, words.length - 1).join(' ');
// console.log(newString);

// Example 6 - Массивы и строки ---------------------------------------------------------

// Напиши скрипт который «разворачивает» строку (обратный порядок букв) и выводит ее в консоль.

// const string = 'Welcome to the future';
// const lettersArray = string.split('');
// let reverseString = '';

// for (let i = lettersArray.length - 1; i >= 0; i--) {
//   reverseString += lettersArray[i];
// }

// console.log(reverseString);

// Example 7 - Сортировка массива с циклом ---------------------------------------------------------

// Напиши скрипт сортировки массива строк в алфавитном порядке по первой букве элемента.

// const languiges = ['python', 'javascript', 'c++', 'haskel', 'php', 'ruby'];
// console.log(langs);
// langs.sort();
// console.log(langs);

// Example 8 - Поиск элемента ---------------------------------------------------------

// Напиши скрипт поиска самого маленького числа в массиве.
// Код должен работать для любого массива чисел.
// Используй цикл для решения задачи.

// const numbers = [2, 17, 94, 1, 23, 37];
// let min = numbers[0];

// for (const number of numbers) {
//     if (number < min) {
//         min = number;
//     }
// }

// console.log(min); // 1
