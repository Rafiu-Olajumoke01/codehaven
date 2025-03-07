import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"; // Import CSS

export default function NavigationBar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={`navbar navbar-expand-lg navbar-dark  ${isOpen ? "open" : ""}`}  >
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">Code<span className="haven">Haven</span></Link>

        {/* Toggle Button */}
        <button 
          className="navbar-toggler" 
          type="button" 
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className={`navbar-collapse ${isOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/" onClick={() => setIsOpen(false)}>HOME</Link>
            </li>

            {/* About Us Dropdown */}
            <li className="nav-item dropdown">
              <a 
                className="nav-link dropdown-toggle" 
                href="#" 
                id="aboutDropdown" 
                role="button" 
                data-bs-toggle="dropdown"
              >
                ABOUT US
              </a>
              <ul className="dropdown-menu">
                <li><Link className="dropdown-item" to="/who-we-are" onClick={() => setIsOpen(false)}>Who We Are</Link></li>
                <li><Link className="dropdown-item" to="/what-we-do" onClick={() => setIsOpen(false)}>What We Do</Link></li>
                <li><Link className="dropdown-item" to="/how-it-works" onClick={() => setIsOpen(false)}>How It Works</Link></li>
                <li><Link className="dropdown-item" to="/external url" onClick={() => setIsOpen(false)}>External Url</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/courses" onClick={() => setIsOpen(false)}>COURSES</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setIsOpen(false)}>CONTACT</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/external" onClick={() => setIsOpen(false)}>EXTERNAL</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
