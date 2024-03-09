import React, { useEffect } from "react";

const BookDetails = ({book}) => {
    useEffect((book) => {
        console.log(book);
    });

    return(
        // <h3>{book.authors}</h3>
        <h3>Book Details</h3>
    )
}

export default BookDetails;