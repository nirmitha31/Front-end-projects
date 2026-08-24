import { Link } from "react-router-dom";
import "./Header.css";

function Header() {
  return (
    <header className="app-header">
      <Link to="/" className="brand">
        <div className="brand-icon">🎬</div>

        <div className="brand-text">
          <h2>BookYourShow</h2>
          <p>Movies • Events • Entertainment</p>
        </div>
      </Link>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <a href="#">Movies</a>
        <a href="#">Offers</a>
      </nav>

      <button className="signin-btn">Sign In</button>
    </header>
  );
}

export default Header;
