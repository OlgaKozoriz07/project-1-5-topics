const books = [
  {
    id: 1,
    title: 'Мистецтво війни',
    author: 'Сунь-цзи',
    isRead: true,
    rating: 9,
  },
  {
    id: 2,
    title: 'Атлант розправив плечі',
    author: 'Айн Ренд',
    isRead: false,
    rating: 0,
  },
  {
    id: 3,
    title: 'Тонке мистецтво пофігізму',
    author: 'Марк Менсон',
    isRead: true,
    rating: 8,
  },
  {
    id: 4,
    title: '1984',
    author: 'Джордж Орвелл',
    isRead: false,
    rating: 0,
  },
];

// const getReadBooks = arr => arr.filter(book => book.isRead);
// console.log(getReadBooks(books));

// const getUnreadReadBooks = arr => arr.filter(book => !book.isRead);
// console.log(getUnreadReadBooks(books));

// const addBook = (arr, book) => {
//   return [...arr, book];
// };
// console.log(
//   addBook(books, {
//     id: 5,
//     title: '2000',
//     author: 'Коко Шанель',
//     isRead: true,
//     rating: 10,
//   })
// );

// const removeBookById = (arr, id) => {
//   return arr.filter(book => book.id !== id);
// };
//ми перебираємо кожну book з масиву
//Якщо так (тобто в неї інше id) → залишаємо в новому масиві
//Якщо ні (її id збігається з тим, який треба видалити) → викидаємо
// };
// console.log(removeBookById(books, 3));
// console.log(removeBookById(books, 1));

// const findBookByTitle = (arr, title) => {
//   const book = arr.find(
//     book => book.title.toLowerCase() === title.toLowerCase()
//   );
//   return book ? book : `Книгу за назвою "${title}" не знайдено!`;
// };

// console.log(findBookByTitle(books, 'Коко Шанель'));
// console.log(findBookByTitle(books, 'Атлант розправив плечі'));
// console.log(findBookByTitle(books, 'koko'));
// console.log(findBookByTitle(books, 'Мистецтво війни'));

// const getAverageRating = arr => {
//   const readBook = arr.filter(book => book.isRead); //фільтруємо ще ті книги в яких рейтинг 0
//   if (arr.length === 0) return 0; //захист від пустого масиву
//   const sum = arr.reduce((total, book) => total + book.rating, 0);
//   return +(sum / readBook.length).toFixed(2);
// };
// console.log(getAverageRating(books));

// const sortBooksByRating = arr => {
//   return [...arr].sort((a, b) => b.rating - a.rating);
// };
//[...]-створює копію, аби не змінити books напряму
//b.rating - a.rating — сортує від більшого до меншого
//console.log(sortBooksByRating(books));

//const markBooksAsRead = (arr, id, rating) => {
//return arr.map(book => {
// if (book.id === id) {
// якщо це та сама книга — оновлюємо
//  return { ...book, isRead: true, rating }; //Візьми всю стару книгу (title, author, id тощо), але перезапиши isRead і rating.
//}
// return book; //інші лишаємо як є
//});
//};
//console.log(markBooksAsRead(books, 2, 9));
// для кожної книги перевіряємо id, якщо він співпадає з тим, який ми шукаємо, тоді оновлюємо isRead: true, записуємо новий rating
//якщо ні, тоді повератємо книгу без змін

// const bookManager = books => {
//   return {
//     getReadBooks: () => books.filter(book => book.isRead),

//     getUnreadBooks: () => books.filter(book => !book.isRead),

//     addBook: book => [...books, book],

//     removeBookById: id => books.filter(book => book.id !== id),

//     findBookByTitle: title => {
//       const book = books.find(
//         b => b.title.toLowerCase() === title.toLowerCase()
//       );
//       return book ? book : `Книгу за назвою "${title}" не знайдено!`;
//     },

//     getAverageRating: () => {
//       const readBooks = books.filter(book => book.isRead);
//       if (readBooks.length === 0) return 0;
//       const sum = readBooks.reduce((total, book) => total + book.rating, 0);
//       return +(sum / readBooks.length).toFixed(2);
//     },

//     sortBooksByRating: () => [...books].sort((a, b) => b.rating - a.rating),

//     markBookAsRead: (id, rating) => {
//       return books.map(book =>
//         book.id === id ? { ...book, isRead: true, rating } : book
//       );
//     },
//   };
// };

// const manager = bookManager(books);

// console.log(manager.getReadBooks());
// console.log(manager.getUnreadBooks());
// console.log(
//   manager.addBook({
//     id: 5,
//     title: 'Коко Шанель',
//     author: 'Коко herself',
//     isRead: true,
//     rating: 10,
//   })
// );
// console.log(manager.removeBookById(3));
// console.log(manager.findBookByTitle('1984'));
// console.log(manager.getAverageRating());
// console.log(manager.sortBooksByRating());
// console.log(manager.markBookAsRead(2, 9));
