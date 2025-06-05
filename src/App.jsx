import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import HeaderComponent from "./Components/Header";
import Body from "./Components/Body";


const AppLayout = () => {
  return (
    <div className="app">
      <HeaderComponent />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);
