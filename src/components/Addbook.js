/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = (props) => {
  const { categories } = props;
  const dispatch = useDispatch();
  const booksLength = useSelector((state) => state.books.length);

  const submitBookToStore = () => {
    const bookTitle = document.querySelector('#bookTitle');
    const bookAuthor = document.querySelector('#bookAuthor');

    if (bookTitle.value === '' || bookAuthor.value === '') {
      document.querySelector('.error').classList.remove('display-none');
      return;
    }

    document.querySelector('.error').classList.add('display-none');

    const newBook = {
      id: booksLength + 1,
      title: bookTitle.value,
      author: bookAuthor.value,
    };

    dispatch(addBook(newBook));

    bookTitle.value = '';
    bookAuthor.value = '';
  };

  return (
    <form>
      <div className="error display-none">Please add the title and the author for the book.</div>
      <input placeholder="Title" type="text" id="bookTitle" required />
      <input placeholder="Author" type="text" id="bookAuthor" required />
      <select name="category">
        {
          categories.map((category) => (
            <option value={category.name} key={category.id}>
              {category.name}
            </option>
          ))
        }
      </select>
      <input type="button" value="ADD BOOK" onClick={submitBookToStore} />
    </form>
  );
};

AddBook.defaultProps = {
  categories: [],
};

AddBook.propTypes = {
  categories: PropTypes.array,
};

export default AddBook;
