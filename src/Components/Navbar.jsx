import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h2 className="logo">My Store</h2>

        <div className="nav-links">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/Products"
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
          >
            Products
          </NavLink>

          <a href="#about" className="nav-link">
            About
          </a>

          <a href="#contact" className="nav-link">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;