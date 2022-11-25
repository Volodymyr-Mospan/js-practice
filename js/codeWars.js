// Example
// filter_list([1,2,'a','b']) == [1,2]
// filter_list([1,'a','b',0,15]) == [1,0,15]
// filter_list([1,2,'aasf','1','123',123]) == [1,2,123]

// function filter_list(l) {
//     // Return a new array with the strings filtered out

//     return l.filter(el => Number.isSafeInteger(el));
// }

// console.log(filter_list([1, 2, 'a', 'b']));

// =======================================================================================

// =======================================================================================

// function duplicateEncode(word) {
//     return word
//         .toLowerCase()
//         .split('')
//         .map((letter, index, word) => {
//             const accum = word.reduce((acc, el) => (el === letter ? acc + 1 : acc), 0);
//             console.log(letter, accum === 1 ? '1' : '0');
//             return accum === 1 ? '1' : '0';
//         })
//         .join('');

//     // ...
// }

// console.log(duplicateEncode('Іринама'));

// =======================================================================================

// =======================================================================================

// function solution(a) {
//     let acc = 0;
//     // let chek = 0;
//     let quantityOfJumps = 0;

//     for (let i = 0; acc < a.length && acc >= 0; i++) {
//         // chek += a[chek];

//         // if (acc + a[acc] === -a[chek]) {
//         //     return -1;
//         // }

//         if (quantityOfJumps > a.length) {
//             return -1;
//         }

//         acc += a[acc];
//         quantityOfJumps += 1;
//     }

//     return quantityOfJumps;
// }

// console.log(solution([1, 2, 2, -1]));
// console.log(solution([1, 2, 1, 5]));
// console.log(solution([1, 1, 1, 1]));
// console.log(solution([1, -1]));
// console.log(solution([-3]));

// console.log(solution([2, 2, -1, -3]));

// =======================================================================================

// =======================================================================================

// function countPairsInt(diff, nMax) {
//     let divisorsArray = [0];

//     for (let num = 1; num < nMax; num++) {
//         let divisors = 0;

//         for (let i = 1; i <= num; i++) {
//             if (num % i === 0) {
//                 divisors += 1;
//                 // console.log(`${num} % ${i} === 0 : &{(num % i === 0)}`);
//             }
//         }

//         divisorsArray.push(divisors);
//     }

//     let contiguousIntegers = [];

//     divisorsArray.forEach((divisors, index, array) => {
//         if (divisors === array[index + diff]) {
//             contiguousIntegers.push([index, index + diff]);
//         }
//     });
//     console.log(contiguousIntegers);

//     return contiguousIntegers.length;
// }

// console.log(countPairsInt(3, 200));

// =======================================================================================

// =======================================================================================

// function likes(names = []) {
//     switch (names.length) {
//         case 0:
//             return 'no one likes this';

//         case 1:
//             return `${names[0]} likes this`;

//         case 2:
//             return `${names[0]} and ${names[1]} like this`;

//         case 3:
//             return `${names[0]}, ${names[1]} and ${names[2]} like this`;

//         default:
//             return `${names[0]}, ${names[1]} and ${names.length - 2} others like this`;
//     }
// }

// console.log(likes(['Alex', 'Jacob']));

// =======================================================================================

// =======================================================================================

// function XO(str) {
//     const strInLowerCase = str.toLowerCase();

//     let counterX = 0;
//     let counterO = 0;

//     for (const letter of strInLowerCase) {
//         if (letter === 'x') {
//             counterX += 1;
//         } else if (letter === 'o') {
//             counterO += 1;
//         }
//     }

//     return counterX === counterO;
// }

// function XO(str) {
//     let x = str.match(/x/gi);
//     let o = str.match(/o/gi);
//     return (x && x.length) === (o && o.length);
// }

// console.log(XO('ooxx'));
// console.log(XO('xooxx'));
// console.log(XO('ooxXm'));
// console.log(XO('zpzpzpp'));
// console.log(XO('zzoo'));

// =======================================================================================

// =======================================================================================

// class VM {
//     constructor(major, minor, patch) {
//         this.rollbackVersions = [];
//         this.version = { major, minor, patch };
//     }

//     major() {
//         this.updateRollbackVersion();
//         this.version.major += 1;
//         this.version.minor = 0;
//         this.version.patch = 0;
//         return this;
//     }

//     minor() {
//         this.updateRollbackVersion();
//         this.version.minor += 1;
//         this.version.patch = 0;
//         return this;
//     }

//     patch() {
//         this.handleDefaultPatch();
//         this.updateRollbackVersion();
//         this.version.patch += 1;
//         return this;
//     }

//     rollback() {
//         if (this.rollbackVersions.length === 0) throw new Error('Cannot rollback!');
//         this.version = this.rollbackVersions[this.rollbackVersions.length - 1];
//         this.rollbackVersions.pop();
//         return this;
//     }

//     release() {
//         this.handleDefaultPatch();
//         const { major, minor, patch } = this.version;
//         return [major, minor, patch].join('.');
//     }

//     // handle default value for patch
//     handleDefaultPatch() {
//         if (this.version.major === 0 && this.version.minor === 0 && this.version.patch === 0) {
//             this.version.patch = 1;
//         }
//     }

//     updateRollbackVersion() {
//         const { major, minor, patch } = this.version;
//         this.rollbackVersions.push({ major, minor, patch });
//     }
// }

// const vm = (version = '') => {
//     // default value
//     version += version.trim().length === 0 ? '0.0.0' : '.0.0.0';
//     let versions = version
//         .split('.')
//         .filter(str => str !== '')
//         .slice(0, 3);
//     // handle version is not number/decimal
//     versions = versions.map(v => {
//         if (Number(v) != v)
//             // means the version is include chars
//             throw new Error('Error occured while parsing version!');
//         return Number(v);
//     });

//     return new VM(versions[0], versions[1], versions[2]);
// };

// =======================================================================================

// =======================================================================================

// function nextInLine(arr, item) {
//     // Змініть код лише під цим рядком

//     arr.push(item);

//     return arr.shift();
//     // Змініть код лише над цим рядком
// }

// // Налаштування
// let testArr = [1, 2, 3, 4, 5];
// console.log(nextInLine(testArr, 6));
// // Відобразити код
// // console.log('Before: ' + JSON.stringify(testArr));
// // console.log(nextInLine(testArr, 6));
// // console.log('After: ' + JSON.stringify(testArr));

// =======================================================================================

// =======================================================================================

// function queueTime(customers, n) {
//     let tills = [];

//     for (let i = 1; i <= n; i++) {
//         tills.push(0);
//     }

//     console.log(tills);

//     customers.forEach(customer => {
//         for (let i = 0; i < tills.length; i++) {
//             if (tills[i] === Math.min(...tills)) {
//                 tills[i] += customer;
//                 // console.log(tills);
//                 break;
//             }
//         }
//     });

//     return Math.max(...tills);
// }

// -/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-/-

// function queueTime(customers, n) {
//     var w = new Array(n).fill(0);
//     // console.log(w);

//     for (let t of customers) {
//         let idx = w.indexOf(Math.min(...w));
//         w[idx] += t;
//     }
//     return Math.max(...w);
// }

// console.log(queueTime([10, 2, 3, 3], 2));
// console.log(queueTime([1, 2, 3, 3], 2));

// =======================================================================================

// =======================================================================================
