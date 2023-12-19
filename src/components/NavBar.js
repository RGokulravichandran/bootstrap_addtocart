import React from "react";
import { useNavigate } from "react-router-dom";

// NavBar component receives addedToCartCount as a prop
function NavBar({ addedToCartCount }) {
  // Use the useNavigate hook from react-router-dom
  const navigate = useNavigate();

  return (
    // Navigation bar using Bootstrap classes
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container px-4 px-lg-5">
        {/* Brand/logo link, onClick navigates to the home page */}
        <a className="navbar-brand" href="#!" onClick={() => navigate("/")}>
          Day-21
        </a>
        {/* Navbar toggle button for smaller screens */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        {/* Navbar content, including navigation links and cart button */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Navigation links */}
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
            {/* Home link */}
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#!"
                onClick={() => navigate("/")}
              >
                Home
              </a>
            </li>
            {/* About link */}
            <li className="nav-item">
              <a className="nav-link" href="#!">
                About
              </a>
            </li>
            {/* Shop dropdown menu */}
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                id="navbarDropdown"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Shop
              </a>
              {/* Dropdown menu items */}
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li>
                  <a className="dropdown-item" href="#!">
                    All Products
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    Popular Items
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#!">
                    New Arrivals
                  </a>
                </li>
              </ul>
            </li>
          </ul>
          {/* Cart button with badge displaying addedToCartCount */}
          <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
            <button
              className="btn btn-outline-dark"
              type="submit"
              onClick={() => navigate("/checkout")}
            >
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {addedToCartCount}
              </span>
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
