import { useEffect, useState } from "react";
import "./App.css";
import * as BooksAPI from './BookAPI';
import BookShelf from "./components/BookShelf";

const App = () => {

  const [books, setBooks] = useState([]); // Empty array...  

  const shelves = [
    {key:'currentlyReading', name:'Currently Reading'},
    {key:'wantToRead', name:'Want to Read'},
    {key:'read', name:'Read'},
  ];

  useEffect(() => {
    BooksAPI.getAll()
      .then((books) => {
        setBooks(books);
      })
  }, []);

  const moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then(() => {
        book.shelf = shelf;

        // Setting the book with updated shelf info to books...
        setBooks(prevBooks => {
          const filteredBooks = prevBooks.filter(b => b.id !== book.id);
          return [...filteredBooks, book];
        })
      });     
  }

  return (
    <div className="app">
      {shelves.map((shelf) => (
        <BookShelf 
          key={shelf.key}
          title={shelf.name}
          booksOnShelf={books.filter(book => book.shelf === shelf.key)}
          moveBook={moveBook}
          // books={books.filter(book => book.shelf === shelf.key)}
        />
      ))}
    </div>
  );
}

export default App;
