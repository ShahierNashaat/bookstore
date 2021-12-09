/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from '../redux/books/books';

const AddBook = (props) => {
  const { categories } = props;
  const dispatch = useDispatch();
  const booksKeys = useSelector((state) => {
    if (state.books.length === 0) {
      return 0;
    }
    return Math.max(...state.books.map((book) => parseInt(book.item_id, 10)));
  });

  const submitBookToStore = () => {
    const bookTitle = document.querySelector('#bookTitle');
    const bookCategory = document.querySelector('#categories');

    if (bookTitle.value === '' || bookCategory.value === 'Category') {
      document.querySelector('.error').classList.remove('display-none');
      return;
    }

    document.querySelector('.error').classList.add('display-none');

    const newBook = {
      item_id: booksKeys + 1,
      title: bookTitle.value,
      category: bookCategory.value,
    };

    dispatch(addBook(newBook));

    bookTitle.value = '';
    bookCategory.value = 'Category';
  };

  return (
    <div className="add-book-area">
      <h2>ADD NEW BOOK</h2>
      <form>
        <div className="error display-none">Please add the title and the category for the book.</div>
        <div className="input-area">
          <input placeholder="Book title" type="text" id="bookTitle" required />
          <div className="custome-select">
            <select id="categories" defaultValue="Category" onChange={() => { }}>
              <option disabled hidden>Category</option>
              {
                categories.map((category) => (
                  <option value={category} key={category}>
                    {category}
                  </option>
                ))
              }
            </select>
            <span className="custome-arrow" />
          </div>
          <input id="add-button" type="button" value="ADD BOOK" onClick={submitBookToStore} />
        </div>
      </form>
    </div>
  );
};

AddBook.defaultProps = {
  categories: [],
};

AddBook.propTypes = {
  categories: PropTypes.array,
};

export default AddBook;
