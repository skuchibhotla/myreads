import React from "react";
import Book from "./Book";

const BookShelf = ({ key, title, booksOnShelf }) => {
  return (
    <div>
      <div className="bookshelf">
        <h2 className="bookshelf-title">{title}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            <li>
              {booksOnShelf.map((book) => (
                <Book 
                    book={book}
                />
              ))}
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default BookShelf;
