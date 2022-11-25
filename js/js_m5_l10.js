// Модуль 5.
// Заняття 10. Прототипи та класи

// ====================================================================================================================

// ====================================================================================================================

// Example 1 - Блогер

// Напиши клас Blogger для створення об'єкта блогера з наступними властивостями:

// email - пошта, рядок
// age - вік, число
// numberOfPosts - кількість постів, число
// topics - масив тем на яких спеціалізується блогер
// Клас чекає один параметр - об'єкт налаштувань з однойменними властивостями.

// Додай метод getInfo(), який, повертає рядок: User ${пошта} is ${вік} years old and has ${кількість постів} posts.

// Додай метод updatePostCount(value), який у параметрі value приймає кількість постів, які потрібно додати користувачеві.

// Рішення -+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+-

// class User {
//     constructor({ name, age, numberOfPosts, topics } = {}) {
//         this.email = name;
//         this.age = age;
//         this.numberOfPosts = numberOfPosts;
//         this.topics = topics;
//     }

//     getInfo() {
//         return `User ${this.email} is ${this.age} years old and has ${this.numberOfPosts} posts.`;
//     }
//     updatePostCount(value) {
//         return (this.numberOfPosts += value);
//     }
// }

// const mango = new User({
//     name: 'mango@mail.com',
//     age: 24,
//     numberOfPosts: 20,
//     topics: ['tech', 'cooking'],
// });
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 20 posts
// mango.updatePostCount(5);
// console.log(mango.getInfo()); // User mango@mail.com is 24 years old and has 25 posts
// console.log(mango);

// const poly = new User({
//     name: 'poly@mail.com',
//     age: 19,
//     numberOfPosts: 17,
//     topics: ['sports', 'gaming', 'health'],
// });
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 17 posts
// poly.updatePostCount(4);
// console.log(poly.getInfo()); // User poly@mail.com is 19 years old and has 21 posts
// console.log(poly);

// ====================================================================================================================

// ====================================================================================================================

// Example 2 - Сховище

// Напиши клас Storage який створює об'єкти для керування складом товарів.
// При виклику отримуватиме один аргумент - початковий масив товарів і записуватиме його властивість items.

// Додай методи класу:

// getItems() - повертає масив товарів.
// addItem(item) - отримує новий товар і додає його до поточних.
// removeItem(item) - отримує товар і, якщо він є, видаляє його з поточних.

// Рішення -+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+-

// class Storage {
//     constructor(items = []) {
//         this.items = items;
//     }

//     getItems() {
//         return this.items;
//     }

//     addItem(item) {
//         this.items.push(item);
//     }

//     removeItem(item) {
//         const indexDeleteItem = this.items.indexOf(item);
//         return indexDeleteItem >= 0
//             ? this.items.splice(indexDeleteItem, 1)
//             : `There are not the ${item} in the storage`;
//     }
// }

// const storage = new Storage(['🍎', '🍋', '🍇', '🍑']);

// const items = storage.getItems();
// console.table(items); // [ '🍎', '🍋', '🍇', '🍑' ]

// storage.addItem('🍌');
// console.table(storage.items); // [ '🍎', '🍋', '🍇', '🍑', '🍌' ]

// storage.removeItem('🍋');
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// console.log(storage.removeItem('🍋'));
// console.table(storage.items); // [ '🍎', '🍇', '🍑', '🍌' ]

// console.log(!!~0);

// ====================================================================================================================

// ====================================================================================================================

// Example 3 - User

// Напиши клас User який створює об'єкт із властивостями login та email.
// Оголоси приватні властивості #login та #email, доступ до яких зроби через гетер та сетер login та email.

// Рішення -+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+-

// class User {
//     #login;
//     #email;

//     constructor({ login, email }) {
//         this.#login = login;
//         this.#email = email;
//     }

//     get login() {
//         return this.#login;
//     }

//     set login(newlogin) {
//         this.#login = newlogin;
//     }
// }

// const mango = new User({
//     login: 'Mango',
//     email: 'mango@dog.woof',
// });

// console.log(mango.login); // Mango
// mango.login = 'Mangodoge';
// console.log(mango.login); // Mangodoge

// const poly = new User({
//     login: 'Poly',
//     email: 'poly@mail.com',
// });

// console.log(poly.login); // Poly
// poly.login = 'Polycutie';
// console.log(poly.login); // Polycutie

// ====================================================================================================================

// ====================================================================================================================

// Example 4 - Нотатки

// Напиши клас Notes який керує колекцією нотаток у властивості items.
// Замітка це об'єкт із властивостями text та priority.
// Додай класу статичну властивість Priority, у якому зберігатиметься об'єкт із пріоритетами.

// {
//   LOW: 'low',
//   NORMAL: 'normal',
//   HIGH: 'high'
// }
// Додай методи addNote(note), removeNote(text) та updatePriority(text, newPriority).

// Рішення -+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+-

// class Notes {
//     static Priority = {
//         LOW: 'low',
//         NORMAL: 'normal',
//         HIGH: 'high',
//     };

//     constructor(items = []) {
//         this.items = items;
//     }

//     addNote(note) {
//         this.items.push(note);
//     }

//     removeNote(text) {
//         const idx = this.items.indexOf(this.items.find(item => (item.text = text)));

//         if (!!~idx) {
//             this.items.splice(idx, 1);
//         }
//     }

//     updatePriority(text, newPriority) {
//         const idx = this.items.indexOf(this.items.find(item => (item.text = text)));

//         this.items[idx].priority = newPriority;
//     }
// }

// const myNotes = new Notes([]);
// // console.log(myNotes);

// myNotes.addNote({ text: 'Моя перша замітка', priority: Notes.Priority.LOW });
// // console.log(myNotes.items);

// myNotes.addNote({
//     text: 'Моя друга замітка',
//     priority: Notes.Priority.NORMAL,
// });
// // console.log(myNotes.items);

// myNotes.removeNote('Моя перша замітка');
// // console.log(myNotes.items);

// myNotes.updatePriority('Моя друга замітка', Notes.Priority.HIGH);
// console.log(myNotes.items);

// ====================================================================================================================

// ====================================================================================================================

// Example 5 - Toggle
// Напишіть клас Toggle який приймає об'єкт налаштувань {isOpen: boolean} і оголошує одну властивість on - стан вкл/викл (true/false).
// За замовчуванням значення властивості on повинно бути false.

// Рішення -+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+_+-

// class Toggle {
//     constructor({ isOpen = false } = {}) {
//         this.on = isOpen;
//     }

//     toggle() {
//         this.on ? (this.on = false) : (this.on = true);
//     }
// }

// const firstToggle = new Toggle({ isOpen: true });
// console.group('firstToggle');
// console.log(firstToggle.on);
// firstToggle.toggle();
// console.log(firstToggle.on);
// console.groupEnd('firstToggle');

// const secondToggle = new Toggle();
// console.group('secondToggle');
// console.log(secondToggle.on);
// secondToggle.toggle();
// console.log(secondToggle.on);
// console.groupEnd('secondToggle');
// ====================================================================================================================

// ====================================================================================================================

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// https://www.freecodecamp.org/ukrainian/learn/javascript-algorithms-and-data-structures/#basic-javascript

/**
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */

// ====================================================================================================================

// ====================================================================================================================

// -----------------------------------------TASK 1------------------------------------------//
// 1 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати списoк імен учнів факультету
// 2 Створити метод об'єкту який буде приймати 1 параметр назву факультету та повертати кількість очків факультета
// 3 Створити метод об'єкту який буде виводити ім'я факультету в якого більше очків

// const hogvarts = {
//     griffindor: [
//         {
//             name: 'Harry',
//             points: 17,
//         },
//         {
//             name: 'Hermiona',
//             points: 19,
//         },
//         {
//             name: 'Ron',
//             points: 14,
//         },
//     ],
//     sliserin: [
//         {
//             name: 'Draco',
//             points: 17,
//         },
//         {
//             name: 'Goyl',
//             points: 14,
//         },
//         {
//             name: 'Crabbe',
//             points: 5,
//         },
//     ],

//     studentsAtFacultyList(faculty) {
//         return this[faculty].map(student => student.name);
//     },

//     totalPointAtFaculty(faculty) {
//         return this[faculty].reduce((tottalPoint, student) => tottalPoint + student.points, 0);
//     },

//     winer() {
//         const pointsGriffindor = this.totalPointAtFaculty('griffindor');
//         const pointsSliserin = this.totalPointAtFaculty('sliserin');

//         return pointsGriffindor > pointsSliserin ? 'Griffindor' : 'Sliserin';
//     },
// };

// console.log(hogvarts.studentsAtFacultyList('sliserin'));
// console.log(hogvarts.totalPointAtFaculty('griffindor'));
// console.log(hogvarts.winer());

// ====================================================================================================================

// ====================================================================================================================

// -----------------------------------------TASK 2------------------------------------------//

// Створити функцію яка буде приймати 2 параметра.
// 1 Масив студентів.
// 2 Мову програмування яку потрібно знайти.
// Функція повертає масив імен користувачів які вивчають цю мову.

// const students = [
//     {
//         name: `Lika`,
//         language: `html`,
//     },
//     {
//         name: `Anton`,
//         language: `css`,
//     },
//     {
//         name: `Andriy`,
//         language: `js`,
//     },
//     {
//         name: `Vova`,
//         language: `html`,
//     },
//     {
//         name: `Alina`,
//         language: `css`,
//     },
//     {
//         name: `Egor`,
//         language: `js`,
//     },
//     {
//         name: `Aleksandr`,
//         language: `html`,
//     },
//     {
//         name: `Taras`,
//         language: `css`,
//     },
//     {
//         name: `Ivan`,
//         language: `js`,
//     },
//     {
//         name: `Make`,
//         language: `html`,
//     },
// ];

// function getStudents(students, language) {
//     return students.filter(student => student.language === language).map(student => student.name);
// }

// console.log(getStudents(students, 'html'));

// ====================================================================================================================

// ====================================================================================================================

// -----------------------------------------TASK 3------------------------------------------//

// Порахувати скільки ззаробив кожен  юзер
// (функція приймає 2 параметри
// 1 параметр масив
// 2 параметр імя робітника
// Функція повертає скільки він заробив (salary*month) )

// Порахувати загальну суму заробітку всіх робітників()
// (функція приймає 1 параметр масив, і повертає загальну суму заробітку всіх робітників);

// const workers = [
//     {
//         name: 'Alex',
//         salary: 3500,
//         month: 12,
//     },
//     {
//         name: 'Dima',
//         salary: 2500,
//         month: 9,
//     },
//     {
//         name: 'Oleg',
//         salary: 1500,
//         month: 36,
//     },
// ];

// function salary(workers, workerName) {

//     for (const worker of workers) {
//         if (worker.name === workerName) {
//             return `total salary for ${workerName} is ${worker.salary * worker.month}`;
//         }
//     }

//     return `total salary for all workers is ${workers.reduce(
//         (totalSalary, worker) => totalSalary + worker.salary * worker.month,
//         0
//     )}`;
// }

// console.log(salary(workers, 'Dima'));
// console.log(salary(workers));

// ====================================================================================================================

// ====================================================================================================================

// -----------------------------------------TASK 4------------------------------------------//

// 1 Створити функцію яка буде приймати 2 параметри
//    1 параметр масив
//    2 параметр назва книги
// Функція повертає Імена юзерів (формат стрінги) в яких є ця книга ("Harry Potter") \\\ "Anna, Oleksii"

// 2 Порахувати вік всіх юзерів у яких є ключ age.

// const friends = [
//     { name: 'Anna', books: ['Bible', 'Harry Potter'], age: 21 },
//     { name: 'Bob', books: ['War and peace', 'Romeo and Juliet'], age: 26 },
//     { name: 'Alice', books: ['War and peace', 'Romeo and Juliet'] },
//     {
//         name: 'Oleksii',
//         books: ['Bible', 'War and peace', 'Harry Potter', 'Romeo and Juliet'],
//         age: 26,
//     },
// ];

// function haveBook(friends = [], book = '') {
//     const friendsWithBook = friends.filter(friend => friend.books.includes(book));

//     return friendsWithBook.reduce(
//         (str, friend) =>
//             str +
//             `(${book}) \\\ ${friend.name}${friend.age ? ' \\ age: ' + friend.age + '\n' : '\n'}`,
//         friendsWithBook.length ? `` : `Friends whith the book is not find`
//     );
// }

// console.log(haveBook(friends, 'Romeo and Juliet'));
// console.log(haveBook([], 'Romeo and Juliet'));

// ====================================================================================================================

// ====================================================================================================================

// -----------------------------------------TASK 5------------------------------------------//

// Потрібно створити 4 методи об'єкту
// 1 виводить суму на карті (назву вводимо в prompt())
// 2 додає нову карту (назву вводимо в prompt())
// 3 зняти з карти (назву вводимо в prompt() та суму в prompt())
// 4 додати на карту (назву вводимо в prompt() та суму в prompt())

const bankSystem = {
    privat: 1000,
    mono: 1500,
};

// ====================================================================================================================

// ====================================================================================================================

// -----------------------------------------TASK 6------------------------------------------//

// Створити функцію яка буде шукати нарциса. Головна умова нарциса знають всі, нарцис не знає нікого.

// const people1 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
//     {
//         name: 'Eva',
//         know: ['Alex','Jhon']
//     },
//     {
//         name: 'Jhon',
//         know: [Alex]
//     },
// ] //Not found

// const people2 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: []
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ];// Not found

// const people3 = [{
//         name: 'Alex',
//         know: ['Eva', 'Jhon'],
//     },
//     {
//         name: 'Jhon',
//         know: []
//     },
//     {
//         name: 'Eva',
//         know: ['Alex', 'Jhon']
//     },
//     {
//         name: 'Ivan',
//         know: ['Jhon', 'Alex']
//     },
// ]; // Jhon

// -----------------------------------------TASK 7------------------------------------------//
// Створити функцію яка приймає 1 параметр масив продуктів і повертає мутований масив. Потрібно перебрати масив і якщо він має об'єкти в яких дублюються айді то квонтіті цих елементів потрібно сплюсувати а ті обє'кти в яких айді співпав видалити з масиву.(Потрібно мутувати масив, створювати новий не потрібно)

// const products = [{
//     id: 'sku1',
//     qty: 1,
// }, {
//     id: 'sku2',
//     qty: 2,
// }, {
//     id: 'sku3',
//     qty: 3,
// }, {
//     id: 'sku1',
//     qty: 6,
// }, {
//     id: 'sku1',
//     qty: 8,
// }, {
//     id: 'sku2',
//     qty: 19,
// }, {
//     id: 'sku4',
//     qty: 1,
// }]
