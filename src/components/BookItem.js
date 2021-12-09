/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const removeBookfromStore = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <li className="book">
      <p>{book.category}</p>
      <h2>{book.title}</h2>
      <div className="buttons">
        <button type="button">Comments</button>
        |
        <button type="button" onClick={removeBookfromStore}>Remove</button>
        |
        <button type="button">Edit</button>
      </div>
    </li>
  );
};

BookItem.defaultProps = {
  book: {},
};

BookItem.propTypes = {
  book: PropTypes.object,
};

export default BookItem;
