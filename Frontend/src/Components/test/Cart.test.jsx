import { expect, it } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import Cart from "../cart/Cart";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import CartItem from "../cart/CartItem";
//import CartItem from "../cart/CartItem"
//import OrderSummary from "../cart/OrderSummary"

it("when i am clicking on clearcart all items should be deleted from the cart", () => {
  render(
    <Provider store={appStore}>
      <Cart />
      <CartItem/>
    </Provider>
  );
      const button = screen.getByText("Clear Cart");
      fireEvent.click(button);
      const cartItems = screen.getByText("🛒 Your cart is empty. Add something tasty!")
      expect(cartItems).toBeInTheDocument()
});
