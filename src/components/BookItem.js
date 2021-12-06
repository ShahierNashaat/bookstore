/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

function BookItem(props) {
  const { book } = props;
  return (
    <li className="book">
      <h2>{book.name}</h2>
      <p>{book.author}</p>
      <p>{book.category}</p>
      <button type="button">Delete</button>
    </li>
  );
}

BookItem.defaultProps = {
  book: {},
};

BookItem.propTypes = {
  book: PropTypes.object,
};

export default BookItem;
