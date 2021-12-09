import {
  Routes, Route, Link, BrowserRouter as Router,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import './App.css';

function App() {
  const addActiveClass = (e) => {
    const navLinks = document.querySelectorAll('nav ul li a');
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].classList.remove('active');
    }
    e.target.classList.add('active');
  };

  return (
    <Router>
      <div>
        <nav>
          <h1>Bookstore CMS</h1>
          <ul>
            <li>
              <Link to="/" className="active" onClick={addActiveClass}>BOOKS</Link>
            </li>
            <li>
              <Link to="/categories" onClick={addActiveClass}>CATEGORIES</Link>
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
