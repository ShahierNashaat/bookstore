/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import { removeBook } from '../redux/books/books';

const BookItem = (props) => {
  const { book } = props;
  const dispatch = useDispatch();

  const removeBookfromStore = () => {
    dispatch(removeBook(book.item_id));
  };

  return (
    <li className="book">
      <div className="book-right-content">
        <p>{book.category}</p>
        <h2>{book.title}</h2>
        <p className="author">Author</p>
        <div className="buttons">
          <button type="button">Comments</button>
          |
          <button type="button" onClick={removeBookfromStore}>Remove</button>
          |
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="book-middle-content">
        <div className="progress-div">
          <CircularProgressbar
            value={64}
            strokeWidth={8}
            styles={buildStyles({
              strokeLinecap: 'butt',
              pathTransitionDuration: 0.5,
              pathColor: '#0290ff',
              trailColor: '#DFE3E8',
              backgroundColor: '#3e98c7',
            })}
          />
        </div>
        <div className="text-div">
          <p className="presentage-text">64%</p>
          <p className="completed-text">Completed</p>
        </div>
      </div>
      <div className="book-left-content">
        <p className="current-chapter">Current Chapter</p>
        <p className="chapter">Chapter 17</p>
        <button type="button">Update progress</button>
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
