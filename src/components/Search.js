import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";
import * as BooksAPI from '../BookAPI';
import Book from "./Book";

const Search = ({moveBook}) => {
    const [booksFetched, setBooksFetched] = useState([]);
    const searchBook = (e) => {
        // alert(e.target.value);
        BooksAPI.search(e.target.value).then((books) => {
            console.log(books);
            if(books && books.length > 0)
                setBooksFetched(books);
            else
                setBooksFetched([]);
        }).catch((error) => {
            console.error("Error occurred while fetching books: ", error);
            setBooksFetched([]);
        });
    }

    return (
        <div>
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/" className="close-search">Close</Link>
                    <div className="search-books-input-wrapper">
                    <input
                        type="text"
                        placeholder="Search by title, author, or ISBN"
                        onKeyUp={(e) => searchBook(e)}
                    />
                    </div>
                </div>
            </div>
            <div className="search-books-results">
                <ol className="books-grid">
                    <li>
                        {booksFetched.map((book) => (
                            <Book 
                                key={book.id}
                                book={book}
                                onMoveBook={moveBook}
                            />
                        ))}
                    </li>
                </ol>
            </div>    
        </div>
    );
}

export default Search;