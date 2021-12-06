/* eslint-disable react/forbid-prop-types */

import React from 'react';
import PropTypes from 'prop-types';

const AddBook = (props) => {
  const { categories } = props;
  return (
    <form>
      <input type="text" name="bookName" required />
      <select name="category">
        {
          categories.map((category) => (
            <option value={category.name} key={category.id}>
              {category.name}
            </option>
          ))
        }
      </select>
      <input type="submit" value="ADD BOOK" />
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
