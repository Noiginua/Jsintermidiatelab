//  the implementation of the "getBookTitle" function
const getBookTitle = (bookId) => {
    const book = books.find((book) => book.id === bookId);
    return book ? book.title : null;
  };
// b    the implementation of the "getOldBooks" function
const getOldBooks = () => {
    return books.filter((book) => book.year < 1950);
  };
// c   the implementation of the "adGenre" function
const addGenre = () => {
    return books.map((book) => ({
      ...book,
      genre: 'classic',
    }));
  };
//d the implementation of the 'getTitles' function

const getTitles = (authorInitial) => {
    return books
      .filter((book) => book.author.startsWith(authorInitial))
      .map((book) => book.title);
  };
//e the implementation of the 'latestBook' function  
const latestBook = () => {
    let latest = null;
    books.forEach((book) => {
      if (!latest || book.year > latest.year) {
        latest = book;
      }
    });
    return latest;
  };
  