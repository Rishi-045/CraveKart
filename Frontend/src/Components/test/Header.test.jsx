import {describe,it,expect} from "vitest";
import {fireEvent, render, screen} from "@testing-library/react"
import Header from "../header/Header.jsx"
import { Provider } from "react-redux";
import appStore from "../../utils/appStore.js"
import { BrowserRouter } from "react-router-dom";
import CartItem from "../cart/CartItem.jsx";

describe("Should My Header Component Loaded On the Page ",()=>{


    it("should my login button loaded inside header component",()=>{
       render(
        <BrowserRouter>
       <Provider store={appStore}>
        <Header />
       </Provider>
       </BrowserRouter>
    )
        const button = screen.getByText("Login");
        expect(button).toBeInTheDocument()
    })
     

    it("shoul my cart items 0 when header loaded ",()=>{
           render(
        <BrowserRouter>
       <Provider store={appStore}>
        <Header >
            
        </Header>
       </Provider>
       </BrowserRouter>
    );

    const cartItems = screen.getByText("Cart");
    expect(cartItems).toBeInTheDocument()

    })
    
    it("should login button change to logout when click", ()=>{
          render(
        <BrowserRouter>
       <Provider store={appStore}>
        <Header />
       </Provider>
       </BrowserRouter>
    )

    const logInButton = screen.getByText("Login");
    fireEvent.click(logInButton);
    const logOutButton = screen.getByText("Logout")
    expect(logOutButton).toBeInTheDocument()
    })



})