import { useState } from "react";
import logo from "../../assets/CraveKart Logo with Burger & Cart (1).png";
import { Link } from "react-router-dom";
import "./Header.css";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const HeaderComponent = () => {
  //subscribing to the store using selector
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
        <ul className="">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/cart">
              {" "}
              <div className="relative">
                <FaShoppingCart className="text-2xl text-gray-800" />{" "}
                <span className="absolute -top-0.5 -right-10.5">Cart</span>
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#ff4b2b] text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full">
                    {cartItems.length}
                  </span>
                )}
              </div>
            </Link>
          </li>
          <li>
            <button
              className="nav-btn"
              onClick={() =>
                btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
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
