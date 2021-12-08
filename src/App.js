import {
  Routes, Route, Link, BrowserRouter as Router,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <nav>
          <h1>Bookstore CMS</h1>
          <ul>
            <li>
              <Link to="/">Books</Link>
            </li>
            |
            <li>
              <Link to="/categories">Categories</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Books />} />
          <Route path="categories" element={<Categories />} />
        </Routes>

      </div>
    </Router>
  );
}

export default App;
