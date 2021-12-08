/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = (props) => {
  const { categories } = props;
  const dispatch = useDispatch();
  const booksKeys = useSelector((state) => Math.max(...Object.keys(state.books)
    .map((key) => parseInt(key, 10))));

  const submitBookToStore = () => {
    const bookTitle = document.querySelector('#bookTitle');

    if (bookTitle.value === '') {
      document.querySelector('.error').classList.remove('display-none');
      return;
    }

    document.querySelector('.error').classList.add('display-none');

    const newBook = {
      item_id: booksKeys + 1,
      title: bookTitle.value,
      category: 'category',
    };

    dispatch(addBook(newBook));

    bookTitle.value = '';
  };

  return (
    <form>
      <div className="error display-none">Please add the title for the book.</div>
      <input placeholder="Title" type="text" id="bookTitle" required />
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
