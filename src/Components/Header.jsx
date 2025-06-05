import { useState } from "react";
import logo from "../assets/CraveKart Logo with Burger & Cart (1).png";

const HeaderComponent = () => {
  const [btnName, setBtnName] = useState("Login");
  console.log("header rerendered");
  return (
    <div className="header">
      <div className="logo-container">
        <img src={logo} alt="CraveKart" />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="nav-btn"
              onClick={() =>
                btnName === "Login" ?
                  setBtnName("Logout") :
                  setBtnName("Login")
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
