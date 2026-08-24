import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="footer-brand">
          <h2>🎬 BookYourShow</h2>

          <p>
            Discover the latest movies, book tickets instantly, watch trailers,
            read reviews and enjoy a seamless entertainment experience.
          </p>
        </div>

        <div className="footer-links">
          <div>
            <h3>Explore</h3>

            <Link to="/">Home</Link>
            <a href="#">Movies</a>
            <a href="#">Coming Soon</a>
            <a href="#">Offers</a>
          </div>

          <div>
            <h3>Support</h3>

            <a href="#">Help Center</a>
            <a href="#">Contact Us</a>
            <a href="#">FAQs</a>
            <a href="#">Terms</a>
          </div>

          <div>
            <h3>Follow Us</h3>

            <a href="#">📘 Facebook</a>
            <a href="#">📷 Instagram</a>
            <a href="#">🐦 Twitter</a>
            <a href="#">▶ YouTube</a>
          </div>
        </div>
      </div>

      <hr />

      <div className="footer-bottom">
        <p>© 2026 BookYourShow. All Rights Reserved.</p>

        <p>Built with ❤️ using React</p>
      </div>
    </footer>
  );
}

export default Footer;
