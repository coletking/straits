import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiMenuAltRight } from "react-icons/bi";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <div>
      <>
        <nav className="navbar">
          <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
            <img src="/image/logo.png" alt="logo" />
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            {click ? <AiOutlineClose /> : <BiMenuAltRight />}
          </div>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="/" className="nav-links" onClick={closeMobileMenu}>
                Shop
              </Link>
            </li>

            {/* Dropdown structure */}
            <li className="nav-item dropdown">
              <span className="nav-links" onClick={closeMobileMenu}>
                <Link to="/rentals" className="nav-links" onClick={closeMobileMenu}>
                  Rentals
                </Link>
              </span>
              <ul className="dropdown-menu">
                <li className="dropdown-item">
                  <Link
                    to="/rentals"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Student Band
                  </Link>
                </li>
                <li className="dropdown-item">
                  <Link
                    to="/rentals"
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Community Band
                  </Link>
                </li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                to="/about-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                About Us
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/contact-us"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </nav>
      </>
    </div>
  );
}
