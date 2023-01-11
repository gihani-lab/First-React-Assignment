import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navBar">
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link
          className="nav-link"
          style={{ color: " rgb(255, 0, 255)" }}
          to="/HomePage"
        >
          Home
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: " rgb(255, 0, 255)" }}
                to="/AboutPage"
              >
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="nav-link"
                style={{ color: " rgb(255, 0, 255)" }}
                to="/ContactPage"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
