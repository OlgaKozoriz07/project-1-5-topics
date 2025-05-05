// const transactions = [
//   { id: 1, type: 'deposit', amount: 500 },
//   { id: 2, type: 'withdrawal', amount: 200 },
//   { id: 3, type: 'deposit', amount: 300 },
//   { id: 4, type: 'withdrawal', amount: 100 },
//   { id: 5, type: 'deposit', amount: 50 },
// ];

//const getBalance = arr => {
// сумуємо окремо депозит і окремо виведення коштів, перевіряємо чи item.type === 'deposit' або 'withdrawal' і тоді сумуємо. а вже потім від депозиту віднімаємо виведення і отрмуємо 550
//   const sumDeposit = arr
//     .filter(item => item.type === 'deposit')
//     .reduce((total, item) => total + item.amount, 0);
//   const sumWithdrawal = arr
//     .filter(item => item.type === 'withdrawal')
//     .reduce((total, item) => total + item.amount, 0);
//   return sumDeposit - sumWithdrawal;
// };
// console.log(getBalance(transactions));

// const getTotalByType = (arr, type) => {
//   return arr
//     .filter(item => item.type === type)//фільтруємо по типу транзакції
//     .reduce((total, item) => total + item.amount, 0);//а тут вже знаходимо суму
// };
// console.log(getTotalByType(transactions, 'deposit'));
// console.log(getTotalByType(transactions, 'withdrawal'));

// const getLargestTransaction = arr => {
//максимальне число і поточне
//   return arr.reduce((maxTx, currentTx) =>
//     currentTx.amount > maxTx.amount ? currentTx : maxTx
//   );
//тоді порівнюємо максимальне з поточним і якщо currentTx - так, тоді оновлюємо максимум, інакше залишаємо старий maxTx
// };
// console.log(getLargestTransaction(transactions));

// const getAverageTransaction = arr => {
//   if (arr.length === 0) return 0; //захист від пустого масиву
//   const sum = arr.reduce((total, item) => total + item.amount, 0);
//   return sum / arr.length;
// };
// console.log(getAverageTransaction(transactions));

// const filterTransactions = (arr, minAmount) => {
//   return arr.filter(item => item.amount > minAmount);
// };
// console.log(filterTransactions(transactions, 100));
