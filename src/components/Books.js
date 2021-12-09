import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import BookItem from './BookItem';
import AddBook from './Addbook';
import { getBooks } from '../redux/books/books';

const Books = () => {
  const books = useSelector((state) => state.books);
  const categories = ['Action and Adventure', 'Classics', 'Fantasy', 'Historical Fiction'];
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
  }, []);

  return (
    <div className="container">
      <ul className="books-list">
        {
          books.map((book) => <BookItem book={book} key={book.item_id} />)
        }
      </ul>
      <AddBook categories={categories} />
    </div>
  );
};

export default Books;
