import BookItem from './BookItem';

function Books() {
  const books = [];
  const categories = [];
  return (
    <div className="container">
      <ul className="books-list">
        {
          books.map((book) => <BookItem book={book} key={book.id} />)
        }
      </ul>
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
    </div>
  );
}

export default Books;
