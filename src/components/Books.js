import { useSelector } from 'react-redux';
import BookItem from './BookItem';
import AddBook from './Addbook';

const Books = () => {
  const books = useSelector((state) => state.books);
  const categories = [];
  return (
    <div className="container">
      <ul className="books-list">
        {
          books.map((book) => <BookItem book={book} key={book.id} />)
        }
      </ul>
      <AddBook categories={categories} />
    </div>
  );
};

export default Books;
