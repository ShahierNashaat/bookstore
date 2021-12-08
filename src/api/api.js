const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/KuV7Z2YFTRBTq309Vw2X/books';

export const getAllBooks = () => fetch(URL).then((response) => response.json());

export const postBook = (book) => fetch(URL, {
  method: 'POST',
  body: JSON.stringify(book),
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.text());

export const deleteBook = (id) => fetch(`${URL}/${id}`, {
  method: 'delete',
  headers: {
    'Content-Type': 'application/json',
  },
}).then((response) => response.text());
