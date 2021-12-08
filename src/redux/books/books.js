import { getAllBooks, postBook, deleteBook } from '../../api/api';

const ADD_BOOK = 'bookStore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookStore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookStore/books/GET_BOOKS';

const initialState = [];

const convertDataObjectToArray = (data) => {
  const dataArray = [];

  Object.keys(data).map((key) => {
    const book = data[key][0];
    book.item_id = key;
    return dataArray.push(book);
  });

  return dataArray;
};

export const getBooks = () => async (dispatch) => {
  const data = await getAllBooks();
  const convertedData = convertDataObjectToArray(data);
  dispatch({ type: GET_BOOKS, payload: convertedData });
};

export const addBook = (payload) => async (dispatch) => {
  await postBook(payload);
  dispatch({ type: ADD_BOOK, payload });
};

export const removeBook = (payload) => async (dispatch) => {
  await deleteBook(payload);
  dispatch({ type: REMOVE_BOOK, payload });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload;
    case ADD_BOOK:
      return [...state, action.payload];
    case REMOVE_BOOK:
      return state.filter((book) => book.item_id !== action.payload);
    default:
      return state;
  }
};

export default reducer;
