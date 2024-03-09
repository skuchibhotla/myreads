import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as BooksAPI from '../BookAPI';
import Book from "./Book";

const Search = ({booksOnShelves, moveBook}) => {
    const [booksFetched, setBooksFetched] = useState([]);
    
    const searchBook = (e) => {
        const query = e.target.value.trim();
        if (query) {
            BooksAPI.search(query).then((searchResults) => {
                if (searchResults.error) {
                    setBooksFetched([]);
                } else {
                    /*
                        Making sure the book's state (shelf) populates here. 
                        If book is on shelf, get the value, and update here...
                    */
                    const integratedResults = searchResults.map((result) => {
                        const bookOnShelf = booksOnShelves.find(book => book.id === result.id);
                        result.shelf = bookOnShelf ? bookOnShelf.shelf : 'none';
                        return result;
                    });
                    setBooksFetched(integratedResults);
                }
            }).catch((error) => {
                console.log("Error occurred while searching books:", error);
                setBooksFetched([]);
            })
        } else {
            setBooksFetched([]);
        }
    }

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title..."
                        onKeyUp={(e) => searchBook(e)}
                    />
                    </div>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    {booksFetched.map((book, index) => (
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
    );
}

export default Search;