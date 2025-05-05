// const users = [
//   { id: 1, name: 'Оля', age: 28, isActive: true },
//   { id: 2, name: 'Андрій', age: 35, isActive: false },
//   { id: 3, name: 'Марія', age: 22, isActive: true },
// ];

// const getActiveUsers = arr => arr.filter(user => user.isActive === true);
//arr.filter(user => user.isActive) - short version
// console.log(getActiveUsers(users));

// const addUser = (arr, user) => {
//   arr.push(user); //змінює масив напряму
//   return arr; // повертаємо сам масив, а не довжину
// };

//const addUser = (arr, user) => [...arr, user];
//Візьми всі елементи з arr (тобто всіх поточних юзерів)
//Додай в кінець user
//Поверни новий масив, не змінюючи оригінальний
//console.log(addUser(users, { id: 4, name: 'Катя', age: 20, isActive: false }));

// const removeUserById = (arr, id) => {
//   return arr.filter(user => user.id !== id);
//ми перебираємо кожного user з масиву
//Якщо так (тобто в нього інше id) → залишаємо в новому масиві
//Якщо ні (його id збігається з тим, який треба видалити) → викидаємо
// };
// console.log(removeUserById(users, 3));
// console.log(removeUserById(users, 1));

// const findUserByName = (arr, name) => {
//   const user = arr.find(user => user.name === name);
//   return user ? user : `Коричтувача з іменем ${name} не знайдено!`;
// };
// console.log(findUserByName(users, 'Оля'));
// console.log(findUserByName(users, 'Степан'));

// const getAverageAge = arr => {
//   if (arr.lehgth === 0) return 0; //захист від порожнього масиву (інакше ділили б на 0)
//   const sum = arr.reduce((total, user) => total + user.age, 0); // проходимось по всіх користувачах і додаємо їхній age
//   return sum / arr.length; //ділимо на кількість користувачів → отримуємо середній вік
// };
// console.log(getAverageAge(users));

// const analyzeUsers = (arr = []) => {
//   if (!Array.isArray(arr) || arr.length === 0) {
//Array.isArray(arr) - перевірка: "це точно масив?" Якщо не масив → повертаємо повідомлення.
//arr.length === 0 — перевірка: "в масиві щось є?" Якщо він порожній → теж повертаємо повідомлення.
//     return 'Масив користувачів порожній або некоректний';
//   }
//   return {
//     total: arr.length,
//     activeUsers: () => arr.filter(user => user.isActive),
//     addUser: user => [...arr, user],
//     removeUser: id => arr.filter(user => user.id !== id),
//     findUser: name => {
//       const user = arr.find(user => user.name === name);
//       return user ? user : `Користувача з іменем "${name}" не знайдено`;
//     },
//     averageAge: () => {
//       const sum = arr.reduce((total, user) => total + user.age, 0);
//       return +(sum / arr.length).toFixed(2); // округлюю до 2 знаків
//     },
//   };
// };

// const userManager = analyzeUsers(users);
// console.log('Загальна кількість:', userManager.total);
// console.log('Активні користувачі:', userManager.activeUsers());

// //!Функції addUser() та removeUser() не змінюють users — вони повертають нові масиви, які треба зберігати в змінну.

// const newUsers = userManager.addUser({
//   id: 4,
//   name: 'Катя',
//   age: 20,
//   isActive: false,
// });
// console.log('Масив після додавання Катьки:', newUsers);

// const usersWithoutAndriy = userManager.removeUser(2);
// console.log('Масив без Андрія:', usersWithoutAndriy);

// console.log('Пошук Олі:', userManager.findUser('Оля'));
// console.log('Пошук Степана:', userManager.findUser('Степан'));
// console.log('Середній вік:', userManager.averageAge());
