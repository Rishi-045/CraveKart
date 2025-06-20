import { useState } from "react";
import logo from "../../assets/CraveKart Logo with Burger & Cart (1).png";
import { Link } from "react-router-dom";
import "./Header.css"

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="header">
      <div className="logo-container">
        <Link to="/"><img src={logo} alt="CraveKart" /></Link>

        {/* Hamburger for Mobile */}
      <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      </div>
      <div className={`nav-items ${menuOpen ? "open" : ""}`}>
        <ul className="">
          <li >
            <Link to="/" >Home</Link>
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
          <li>Cart</li>
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
