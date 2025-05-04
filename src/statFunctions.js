// const numbers = [5, -3, 12, 0, 7, -8, 4];

// const getSum = arr => arr.reduce((total, num) => total + num, 0);

// console.log(getSum(numbers));

// const getAverage = arr => {
//   if (arr.length === 0) return 0; //захист від пустого масиву
//   const sum = arr.reduce((total, num) => total + num, 0);
//   return sum / arr.length;
// };

// console.log(getAverage(numbers));

// const getEvenNumbers = arr => arr.filter(num => num % 2 === 0);
// console.log(getEvenNumbers(numbers));

// const getOddNumbers = arr => arr.filter(num => num % 2 !== 0);
// console.log(getOddNumbers(numbers));

//const getMin = arr => Math.min(...arr);

// const getMin = arr => arr.reduce((min, num) => (min > num ? num : min)); //Якщо num менше min — тоді повертай num, інакше залиш min
// console.log(getMin(numbers));

// const getMax = arr => Math.max(...arr);
// const getMax = arr => arr.reduce((max, num) => (max < num ? num : max)); // якшо num більше max - тоді повертай num, інакше залиш max
// console.log(getMax(numbers));

// const doubleArray = arr => arr.map(num => num * 2);
// console.log(doubleArray(numbers));

// const countPositive = arr => arr.filter(num => num > 0).length;
// console.log(countPositive(numbers));//4

// const countNegative = arr => arr.filter(num => num < 0).length;
// console.log(countNegative(numbers));

// const getStats = arr => {
//   const sum = arr.reduce((total, num) => total + num, 0);
//   return {
//     sum,
//     average: arr.length ? sum / arr.length : 0,
//     min: Math.min(...arr),
//     max: Math.max(...arr),
//     evenNumbers: arr.filter(num => num % 2 === 0),
//     oddNumbers: arr.filter(num => num % 2 !== 0),
//     countPositive: arr.filter(num => num > 0).length,
//     countNegative: arr.filter(num => num < 0).length,
//     doubled: arr.map(num => num * 2),
//   };
// };
// console.log(getStats(numbers));

// arr.length ? sum / arr.length : 0 =>
//? arr.length — кількість елементів у масиві.
//? Якщо вона не дорівнює нулю (тобто масив має хоча б один елемент) — ок, ділимо sum на arr.length.
//? Якщо arr.length === 0 — тобто масив порожній — ділення на 0 викликало б Infinity, тому ми замість цього повертаємо 0, щоб не було дурниць.
