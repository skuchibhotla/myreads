import React from "react";
import Book from "./Book";

const BookShelf = ({title, booksOnShelf, moveBook}) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {booksOnShelf && booksOnShelf.map((book, index) => (
              <li key={index}>
                <Book 
                  key={book.id}
                  book={book}
                  onMoveBook={moveBook}
                />
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
