import React, { useEffect, useState } from 'react';
import { fetchBooks } from '../services/api';

const BookList = ({ onBookSelect }) => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const getBooks = async () => {
      const data = await fetchBooks();
      setBooks(data);
    };
    getBooks();
  }, []);

  return (
    <div>
      {books.map((book) => (
        <button key={book.id} onClick={() => onBookSelect(book.id)}>
          {book.title}
        </button>
      ))}
    </div>
  );
};

export default BookList;
