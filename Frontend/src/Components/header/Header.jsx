import { useState } from "react";
import logo from "../../assets/CraveKart Logo with Burger & Cart (1).png";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const HeaderComponent = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="CraveKart" />
        </Link>

        {/* Hamburger for Mobile */}
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </div>

      <div className={`nav-items ${menuOpen ? "open" : ""}`}>
        <ul>
          <li>
            <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          </li>
          <li>
            <Link to="/about" onClick={() => setMenuOpen(false)}>About Us</Link>
          </li>
          <li>
            <Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery" onClick={() => setMenuOpen(false)}>Grocery</Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setMenuOpen(false)}>
              <div className="relative">
                <FaShoppingCart className="text-2xl text-gray-800" />
                <span className="ml-2">Cart</span>
                {cartItems.length > 0 && (
                  <span className="cart-badge">{cartItems.length}</span>
                )}
              </div>
            </Link>
          </li>
          <li>
            <button
              className="nav-btn"
              onClick={() =>
                setBtnName((prev) => (prev === "Login" ? "Logout" : "Login"))
              }
            >
              {btnName}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;
