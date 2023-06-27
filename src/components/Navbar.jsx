import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";
import "./styles/navbar.css";

const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const [showNavbar, setShowNavbar] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setShowNavbar(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={showNavbar ? "navbar show" : "navbar"}>
      <div className="logo">
        <Link to="/">
          <Logo src="src\assets\logoipsum-265.svg" alt="Logo" />
        </Link>
      </div>
      <div className={`navbar-menu ${isMenuOpen ? "active" : "inactive"}`}>
        <ul className="navbar-items">
          <li>
            <Link onClick={closeMenu} to="/barbers">
              Barbers
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/pricing">
              Pricing
            </Link>
          </li>
          <li>
            <Link onClick={closeMenu} to="/works">
              Works
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-mobile-icon" onClick={toggleMenu}>
        <div className={`hamburger ${isMenuOpen ? "open" : ""}`}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
